// Shared data model — one collection per entity across all three domains.
// Filter by `domain`; never split into per-domain tables. See CLAUDE.md.

export type Domain = "math" | "physics" | "biology";

export interface Source {
  citation: string;
  url: string | null;
}

export interface Chapter {
  /** Free text, no fixed template. */
  title: string;
  /** Markdown, with KaTeX math (`$…$`, `$$…$$`) and `{{fig:id}}` or `{{fig:id|Short name}}` figure mentions. */
  body: string;
}

export interface TurningPoint {
  id: string;
  field_id: string;
  /** Free-text date; a year, a range, or a period. */
  date: string;
  /** Domain-specific vocabulary — see TURNING_POINT_TYPES. */
  type: string;
  /** Short headline for the event. */
  title: string;
  description: string;
  contested: boolean;
  /** Required when `contested` is true: what exactly is disputed. */
  contested_note?: string;
  sources: Source[];
}

export type OpenProblemStatus = "open" | "recently_resolved" | "conjectured";

export interface OpenProblem {
  id: string;
  field_id: string;
  name: string;
  status: OpenProblemStatus;
  /** Free-text "as of" note for the status, e.g. "Proved 2012; published 2014". */
  status_note?: string;
  description: string;
  why_hard: string;
  unlocks: string;
  sources: Source[];
}

/** A core concept a newcomer needs, tied to the turning point that introduced it. */
export interface KeyIdea {
  term: string;
  /** Markdown; short. */
  definition: string;
  /** The turning point (in any field) where the idea entered; links the glossary to the history. */
  turning_point_id?: string;
}

/** Where a field's results are used outside pure mathematics (or outside the field). */
export interface Application {
  /** Short area label, e.g. "Cartography", "Machine learning". */
  area: string;
  title: string;
  /** Markdown. */
  description: string;
  /** Set when the use lands in another surveyed domain: a seed for the cross-domain view. */
  domain?: Domain;
  sources: Source[];
}

export interface Reading extends Source {
  /** One line on who the reading is for or what it does well. */
  note: string;
}

export interface Figure {
  id: string;
  name: string;
  /** Derived from turning_point_ids at load time. */
  field_ids: string[];
  /** Contributions tied to specific events, not standalone biography. */
  turning_point_ids: string[];
}

export interface Field {
  id: string;
  domain: Domain;
  name: string;
  /** DAG: a field can have more than one parent. Empty for a root. */
  parent_ids: string[];
  /** Inverse of parent_ids, denormalized at load time for fast rendering. */
  successor_ids: string[];
  era_emerged: string;
  core_question: string;
  /** "In brief": a plain-language orientation for newcomers (Markdown, one or two paragraphs). */
  summary: string | null;
  key_ideas: KeyIdea[];
  chapters: Chapter[];
  turning_points: TurningPoint[];
  open_problems: OpenProblem[];
  applications: Application[];
  further_reading: Reading[];
  /** Derived from the figures collection at load time. */
  figure_ids: string[];
}

export const TURNING_POINT_TYPES: Record<Domain, readonly string[]> = {
  math: ["CONJECTURE", "PROOF", "DISPROOF", "REFORMULATION", "CRISIS"],
  physics: ["DISCOVERY", "EXPERIMENT", "THEORY-REPLACED", "PARADIGM-SHIFT"],
  biology: ["DISCOVERY", "SYNTHESIS", "TECHNIQUE-INVENTED", "CONSENSUS-OVERTURNED"],
};

export const OPEN_PROBLEM_STATUS_LABEL: Record<OpenProblemStatus, string> = {
  open: "Open",
  recently_resolved: "Recently resolved",
  conjectured: "Conjectured, unproven",
};
