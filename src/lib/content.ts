// Build-time content loader. Reads one Markdown file per Field plus the shared
// figures collection, derives the denormalized links, and validates the graph.
// Any content error fails the build rather than shipping a broken page.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getThread } from "./domains";
import {
  TURNING_POINT_TYPES,
  type Application,
  type Chapter,
  type Domain,
  type Field,
  type FieldImage,
  type Figure,
  type OpenProblem,
  type OpenProblemStatus,
  type Reading,
  type TurningPoint,
} from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");
const FIELDS_DIR = path.join(CONTENT_DIR, "fields");
const FIGURES_FILE = path.join(CONTENT_DIR, "figures.json");
const PUBLIC_DIR = path.join(process.cwd(), "public");

const DOMAIN_IDS: Domain[] = ["math", "physics", "chemistry", "biology"];
const STATUSES: OpenProblemStatus[] = ["open", "recently_resolved", "conjectured"];

/** `{{fig:gauss}}` or `{{fig:gauss|Gauss}}` inside chapter prose. */
export const FIGURE_MENTION = /\{\{fig:([a-z0-9-]+)(?:\|([^}]+))?\}\}/g;

/** `{{img:id}}` on a line of its own inside chapter prose. */
export const IMAGE_MENTION = /^\{\{img:([a-z0-9-]+)\}\}$/gm;

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

/** Pixel size of a PNG or baseline/progressive JPEG, read from its header. */
function imageSize(buf: Buffer): { width: number; height: number } | null {
  if (buf.readUInt32BE(0) === 0x89504e47) return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) return null;
    const marker = buf[i + 1];
    // SOF0–SOF15, except DHT (C4), JPG (C8) and DAC (CC), carry the frame size.
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { width: buf.readUInt16BE(i + 7), height: buf.readUInt16BE(i + 5) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

function readImage(file: string, img: Omit<FieldImage, "width" | "height">): FieldImage {
  for (const key of ["id", "src", "alt", "caption", "credit", "license", "source"] as const) {
    if (!img[key]) fail(file, `image "${img.id ?? img.src}" is missing "${key}"`);
  }
  const onDisk = path.join(PUBLIC_DIR, img.src);
  if (!img.src.startsWith("/") || !fs.existsSync(onDisk)) fail(file, `image "${img.id}" file not found: public${img.src}`);
  const size = imageSize(fs.readFileSync(onDisk));
  if (!size) fail(file, `image "${img.id}" must be a PNG or JPEG`);
  return { ...img, ...size };
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
  if (!getThread(domain, data.thread)) fail(file, `unknown thread "${data.thread}" in domain "${domain}"`);
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

  const applications: Application[] = (data.applications ?? []).map((a: Application) => {
    for (const key of ["area", "title", "description"] as const) {
      if (!a[key]) fail(file, `an application is missing "${key}"`);
    }
    if (a.domain !== undefined && !DOMAIN_IDS.includes(a.domain)) {
      fail(file, `application "${a.title}" has unknown domain "${a.domain}"`);
    }
    return { ...a, sources: a.sources ?? [] };
  });
  const further_reading: Reading[] = (data.further_reading ?? []).map((r: Reading) => {
    if (!r.citation || !r.note) fail(file, `further reading entries need a citation and a note`);
    return { ...r, url: r.url ?? null };
  });
  const images: FieldImage[] = (data.images ?? []).map((img: FieldImage) => readImage(file, img));

  return {
    id,
    domain,
    thread: data.thread,
    name: data.name,
    parent_ids: data.parent_ids ?? [],
    successor_ids: [],
    era_emerged: String(data.era_emerged),
    core_question: data.core_question,
    summary: data.summary ?? null,
    key_ideas: data.key_ideas ?? [],
    chapters: parseChapters(content, file),
    turning_points,
    open_problems,
    applications,
    further_reading,
    images,
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

  for (const f of fields) {
    for (const a of f.applications) {
      if (!a.field_id) continue;
      const target = byId.get(a.field_id);
      if (!target) fail(`${f.id}.md`, `application "${a.title}" links to unknown field "${a.field_id}"`);
      if (a.domain !== target.domain) {
        fail(`${f.id}.md`, `application "${a.title}" links to ${a.field_id}, which is not in domain "${a.domain}"`);
      }
    }
    for (const idea of f.key_ideas) {
      if (!idea.term || !idea.definition) fail(`${f.id}.md`, `key ideas need a term and a definition`);
      if (idea.turning_point_id && !tpIds.has(idea.turning_point_id)) {
        fail(`${f.id}.md`, `key idea "${idea.term}" references unknown turning point "${idea.turning_point_id}"`);
      }
    }
  }

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

  // Every {{fig:id}} or {{fig:id|display text}} mention in prose must resolve.
  const figureIds = new Set(figures.map((f) => f.id));
  for (const f of fields) {
    for (const c of f.chapters) {
      for (const m of c.body.matchAll(FIGURE_MENTION)) {
        if (!figureIds.has(m[1])) fail(`${f.id}.md`, `unknown figure mention "${m[1]}"`);
      }
    }
  }

  // Each image is placed exactly once, on a line of its own, and every placement resolves.
  for (const f of fields) {
    const placed = f.chapters.flatMap((c) => [...c.body.matchAll(IMAGE_MENTION)].map((m) => m[1]));
    const stray = f.chapters.some((c) => c.body.replace(IMAGE_MENTION, "").includes("{{img:"));
    if (stray) fail(`${f.id}.md`, `an {{img:…}} mention must sit on a line of its own`);
    for (const id of placed) {
      if (!f.images.some((img) => img.id === id)) fail(`${f.id}.md`, `unknown image "${id}"`);
    }
    for (const img of f.images) {
      const count = placed.filter((id) => id === img.id).length;
      if (count !== 1) fail(`${f.id}.md`, `image "${img.id}" is placed ${count} times; place it exactly once`);
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

/** Applications in other domains' fields that land in this field: what it draws on from elsewhere. */
export function getIncomingLinks(fieldId: string): Array<{ from: Field; application: Application }> {
  return collections().fields.flatMap((from) =>
    from.applications.filter((a) => a.field_id === fieldId).map((application) => ({ from, application })),
  );
}

export interface Crossing {
  from: Field;
  application: Application;
  /** Set when the application names a surveyed field in the other domain. */
  to: Field | null;
}

/**
 * Every application that reaches into another domain: linked crossings land in
 * a surveyed field, seeds reach a domain whose relevant field isn't surveyed yet.
 */
export function getCrossings(): { links: Crossing[]; seeds: Crossing[] } {
  const all = collections().fields.flatMap((from) =>
    from.applications
      .filter((a) => a.domain && a.domain !== from.domain)
      .map((application) => ({
        from,
        application,
        to: application.field_id ? getField(application.field_id) ?? null : null,
      })),
  );
  return { links: all.filter((c) => c.to), seeds: all.filter((c) => !c.to) };
}

/** Figures who contributed to a given turning point. */
export function getFiguresForTurningPoint(tpId: string): Figure[] {
  return collections().figures.filter((fig) => fig.turning_point_ids.includes(tpId));
}
