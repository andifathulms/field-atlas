// Build-time content loader. Reads one Markdown file per Field plus the shared
// figures collection, derives the denormalized links, and validates the graph.
// Any content error fails the build rather than shipping a broken page.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  TURNING_POINT_TYPES,
  type Chapter,
  type Domain,
  type Field,
  type Figure,
  type OpenProblem,
  type OpenProblemStatus,
  type TurningPoint,
} from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");
const FIELDS_DIR = path.join(CONTENT_DIR, "fields");
const FIGURES_FILE = path.join(CONTENT_DIR, "figures.json");

const DOMAIN_IDS: Domain[] = ["math", "physics", "biology"];
const STATUSES: OpenProblemStatus[] = ["open", "recently_resolved", "conjectured"];

interface Collections {
  fields: Field[];
  figures: Figure[];
}

let cache: Collections | null = null;

/** Split a Markdown body into chapters on `## ` headings. */
function parseChapters(body: string, file: string): Chapter[] {
  const chapters: Chapter[] = [];
  let current: Chapter | null = null;
  for (const line of body.split("\n")) {
    const heading = /^##\s+(.+?)\s*$/.exec(line);
    if (heading) {
      if (current) chapters.push(current);
      current = { title: heading[1], body: "" };
    } else if (current) {
      current.body += line + "\n";
    } else if (line.trim() !== "") {
      throw new Error(`${file}: text before the first "## " chapter heading`);
    }
  }
  if (current) chapters.push(current);
  return chapters.map((c) => ({ ...c, body: c.body.trim() }));
}

function fail(file: string, message: string): never {
  throw new Error(`[content] ${file}: ${message}`);
}

function readField(file: string): Field {
  const raw = fs.readFileSync(path.join(FIELDS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const id = file.replace(/\.md$/, "");
  if (data.id !== id) fail(file, `id "${data.id}" must match the file name "${id}"`);
  if (!DOMAIN_IDS.includes(data.domain)) fail(file, `unknown domain "${data.domain}"`);
  for (const key of ["name", "era_emerged", "core_question"]) {
    if (typeof data[key] !== "string" || !data[key]) fail(file, `missing "${key}"`);
  }

  const domain = data.domain as Domain;
  const turning_points: TurningPoint[] = (data.turning_points ?? []).map(
    (tp: Omit<TurningPoint, "field_id">) => {
      if (!TURNING_POINT_TYPES[domain].includes(tp.type)) {
        fail(file, `turning point "${tp.id}" has type "${tp.type}", not in the ${domain} vocabulary`);
      }
      if (tp.contested && !tp.contested_note) {
        fail(file, `contested turning point "${tp.id}" needs a contested_note`);
      }
      return { ...tp, date: String(tp.date), contested: !!tp.contested, sources: tp.sources ?? [], field_id: id };
    },
  );
  const open_problems: OpenProblem[] = (data.open_problems ?? []).map(
    (op: Omit<OpenProblem, "field_id">) => {
      if (!STATUSES.includes(op.status)) fail(file, `open problem "${op.id}" has unknown status "${op.status}"`);
      return { ...op, sources: op.sources ?? [], field_id: id };
    },
  );

  return {
    id,
    domain,
    name: data.name,
    parent_ids: data.parent_ids ?? [],
    successor_ids: [],
    era_emerged: String(data.era_emerged),
    core_question: data.core_question,
    chapters: parseChapters(content, file),
    turning_points,
    open_problems,
    figure_ids: [],
  };
}

function assertAcyclic(fields: Field[]) {
  const byId = new Map(fields.map((f) => [f.id, f]));
  const state = new Map<string, "visiting" | "done">();
  const visit = (id: string, trail: string[]) => {
    if (state.get(id) === "done") return;
    if (state.get(id) === "visiting") {
      throw new Error(`[content] field graph has a cycle: ${[...trail, id].join(" → ")}`);
    }
    state.set(id, "visiting");
    for (const p of byId.get(id)!.parent_ids) visit(p, [...trail, id]);
    state.set(id, "done");
  };
  for (const f of fields) visit(f.id, []);
}

function load(): Collections {
  const files = fs.existsSync(FIELDS_DIR)
    ? fs.readdirSync(FIELDS_DIR).filter((f) => f.endsWith(".md")).sort()
    : [];
  const fields = files.map(readField);
  const byId = new Map(fields.map((f) => [f.id, f]));

  const tpIds = new Map<string, TurningPoint>();
  for (const f of fields) {
    for (const p of f.parent_ids) {
      const parent = byId.get(p);
      if (!parent) fail(`${f.id}.md`, `unknown parent "${p}"`);
      if (parent.domain !== f.domain) fail(`${f.id}.md`, `parent "${p}" is in another domain`);
      parent.successor_ids.push(f.id);
    }
    for (const tp of f.turning_points) {
      if (tpIds.has(tp.id)) fail(`${f.id}.md`, `duplicate turning point id "${tp.id}"`);
      tpIds.set(tp.id, tp);
    }
  }
  assertAcyclic(fields);

  const rawFigures: Array<Pick<Figure, "id" | "name" | "turning_point_ids">> = fs.existsSync(FIGURES_FILE)
    ? JSON.parse(fs.readFileSync(FIGURES_FILE, "utf8"))
    : [];
  const figures: Figure[] = rawFigures.map((fig) => {
    const field_ids: string[] = [];
    for (const tpId of fig.turning_point_ids) {
      const tp = tpIds.get(tpId);
      if (!tp) fail("figures.json", `figure "${fig.id}" references unknown turning point "${tpId}"`);
      if (!field_ids.includes(tp.field_id)) field_ids.push(tp.field_id);
    }
    for (const fid of field_ids) byId.get(fid)!.figure_ids.push(fig.id);
    return { ...fig, field_ids };
  });

  // Every {{fig:id}} mention in prose must resolve.
  const figureIds = new Set(figures.map((f) => f.id));
  for (const f of fields) {
    for (const c of f.chapters) {
      for (const m of c.body.matchAll(/\{\{fig:([a-z0-9-]+)\}\}/g)) {
        if (!figureIds.has(m[1])) fail(`${f.id}.md`, `unknown figure mention "${m[1]}"`);
      }
    }
  }

  return { fields, figures };
}

function collections(): Collections {
  if (!cache) cache = load();
  return cache;
}

export function getFields(domain?: Domain): Field[] {
  const { fields } = collections();
  return domain ? fields.filter((f) => f.domain === domain) : fields;
}

export function getField(id: string): Field | undefined {
  return collections().fields.find((f) => f.id === id);
}

export function getFigures(): Figure[] {
  return collections().figures;
}

export function getFigure(id: string): Figure | undefined {
  return collections().figures.find((f) => f.id === id);
}

export function getTurningPoint(id: string): TurningPoint | undefined {
  for (const f of collections().fields) {
    const tp = f.turning_points.find((t) => t.id === id);
    if (tp) return tp;
  }
  return undefined;
}

/** Figures who contributed to a given turning point. */
export function getFiguresForTurningPoint(tpId: string): Figure[] {
  return collections().figures.filter((fig) => fig.turning_point_ids.includes(tpId));
}
