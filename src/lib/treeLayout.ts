// Manual layered layout for the field DAG, sized for a handful of fields per
// layer, so no general graph-layout library is needed.
//
// 1. Longest-path layers give each field its row; a crowded row sends its
//    latest-born field down one row.
// 2. Every left-to-right ordering of every layer is placed (each node at the
//    barycenter of its parents) and scored.
// 3. The best few orderings are refined by sliding nodes sideways one at a time
//    while the score improves. This lets a branch that skips a row pass beside
//    another field's labels instead of through them.
//
// Labels sit to the right of each node, so the score mostly measures branches
// that run through another field's label block or trail.
import type { Field, TurningPoint } from "./types";
import { unresolvedCount } from "./stats";

export const TREE = {
  /** Minimum canvas width. */
  width: 820,
  top: 44,
  marginX: 40,
  /** Space between one node's label block and the next node in its layer. */
  gap: 36,
  /** Name + era block above the first waypoint. */
  head: 50,
  row: 22,
  trailPad: 12,
  layerGap: 76,
  fogLength: 70,
  /** Length of the stub drawn for a parent or child that lives in another thread. */
  stub: 54,
} as const;

// Approximate advance widths for the SVG label styles in FieldTree.
const NAME_CHAR = 10.4; // 19px serif semibold
const STAMP_CHAR = 7.4; // 10.5px mono, tracked
const FOG_LABEL = 160; // "n unresolved problems" plus its fading dashes
const STUB_LABEL = 330; // "↘ into Arithmetic Geometry · The Number Theory Thread"

export interface TreeTick {
  tp: TurningPoint;
  y: number;
}

export interface TreeNode {
  field: Field;
  layer: number;
  x: number;
  y: number;
  /** Horizontal room the node's labels need, measured from x. */
  labelWidth: number;
  ticks: TreeTick[];
  /** y of the unresolved-problems row, if the field has any. */
  fogRowY: number | null;
  unresolved: number;
  /** Where the solid trail ends and outgoing branches begin. */
  trailEnd: number;
  /** A leaf with unresolved problems trails off into fog below its trail. */
  fadesOut: boolean;
  /** Parents drawn on another thread's map: shown as stubs entering from above. */
  externalParents: string[];
  /** Children drawn on another thread's map: shown as stubs leaving below. */
  externalChildren: string[];
}

/** Extra room below a node whose lineage continues on another thread's map. */
function belowTrail(n: Pick<TreeNode, "fadesOut" | "externalChildren">): number {
  return Math.max(n.fadesOut ? TREE.fogLength : 0, n.externalChildren.length ? TREE.stub + 22 : 0);
}

export interface TreeEdge {
  from: string;
  to: string;
  source: [number, number];
  target: [number, number];
  /** Layer of the parent, used to stagger the draw-in animation. */
  layer: number;
}

export interface TreeLayout {
  width: number;
  height: number;
  nodes: TreeNode[];
  edges: TreeEdge[];
}

/**
 * The text of a waypoint label, shared with FieldTree so widths stay in step.
 * Contested points are marked by colour, hatch and tooltip rather than a word,
 * which keeps columns narrow enough for skipped-row branches to pass between them.
 */
export function tickLabel(tp: TurningPoint): string {
  return `${tp.date.toUpperCase()}  ${tp.type}`;
}

export function eraLabel(field: Field): string {
  return `EMERGED ${field.era_emerged.toUpperCase()}`;
}

function labelWidth(field: Field): number {
  const text = Math.max(
    field.name.length * NAME_CHAR,
    eraLabel(field).length * STAMP_CHAR,
    ...field.turning_points.map((tp) => tickLabel(tp).length * STAMP_CHAR),
    unresolvedCount(field) > 0 ? FOG_LABEL : 0,
  );
  return Math.ceil(18 + text + 8);
}

/** Longest-path layers, where `minLayer` can push a field further down than its parents require. */
function assignLayers(fields: Field[], minLayer: Map<string, number> = new Map()): Map<string, number> {
  const byId = new Map(fields.map((f) => [f.id, f]));
  const layers = new Map<string, number>();
  const layerOf = (id: string): number => {
    const known = layers.get(id);
    if (known !== undefined) return known;
    const parents = byId.get(id)!.parent_ids.filter((p) => byId.has(p));
    const l = Math.max(minLayer.get(id) ?? 0, parents.length === 0 ? 0 : 1 + Math.max(...parents.map(layerOf)));
    layers.set(id, l);
    return l;
  };
  fields.forEach((f) => layerOf(f.id));
  return layers;
}

/** A sortable year for when a field emerged ("c. 300 BCE" → -300, "18th century – 1820s" → 1820). */
function eraYear(field: Field): number {
  const m = /\d{3,4}/.exec(field.era_emerged);
  if (m) return /BCE/.test(field.era_emerged) ? -Number(m[0]) : Number(m[0]);
  const tp = field.turning_points.map((t) => /\d{3,4}/.exec(t.date)).find(Boolean);
  return tp ? Number(tp[0]) : 0;
}

/** Most fields a single row of the tree holds before the latest-born one moves down a row. */
const MAX_PER_LAYER = 3;

/**
 * Longest-path layering, then relieve crowded rows: the latest-born field in an
 * over-full row moves down one row (its descendants follow). This keeps the map
 * readable at laptop width and roughly chronological top to bottom.
 */
function balancedLayers(fields: Field[]): Map<string, number> {
  const minLayer = new Map<string, number>();
  let layers = assignLayers(fields);
  for (let i = 0; i < fields.length * 2; i++) {
    const counts = new Map<number, number>();
    layers.forEach((l) => counts.set(l, (counts.get(l) ?? 0) + 1));
    const [crowded, count] = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0] - b[0])[0];
    if (count <= MAX_PER_LAYER) break;
    const candidate = fields
      .filter((f) => layers.get(f.id) === crowded && f.parent_ids.length > 0)
      .sort((a, b) => eraYear(b) - eraYear(a))[0];
    if (!candidate) break;
    minLayer.set(candidate.id, crowded + 1);
    layers = assignLayers(fields, minLayer);
  }
  return layers;
}

function permutations<T>(items: T[]): T[][] {
  if (items.length <= 1) return [items];
  return items.flatMap((item, i) =>
    permutations([...items.slice(0, i), ...items.slice(i + 1)]).map((rest) => [item, ...rest]),
  );
}

/** Build nodes (with y geometry) for a given left-to-right order of each layer. */
function buildNodes(orders: Field[][]): TreeNode[][] {
  const { top, head, row, trailPad, layerGap, stub } = TREE;
  const inMap = new Set(orders.flat().map((f) => f.id));
  const external = (ids: string[]) => ids.filter((id) => !inMap.has(id));
  // Leave room above the first row if any of it is entered from another thread.
  const firstRowStub = (orders[0] ?? []).some((f) => external(f.parent_ids).length > 0);
  let y: number = top + (firstRowStub ? stub + 20 : 0);
  return orders.map((inLayer, l) => {
    let layerBottom = y;
    const nodes = inLayer.map((field) => {
      const ticks = field.turning_points.map((tp, j) => ({ tp, y: y + head + j * row }));
      const unresolved = unresolvedCount(field);
      const fogRowY = unresolved > 0 ? y + head + ticks.length * row + 4 : null;
      const rows = ticks.length + (unresolved > 0 ? 1 : 0);
      const trailEnd = y + head + Math.max(0, rows - 1) * row + trailPad;
      const fadesOut = unresolved > 0 && field.successor_ids.length === 0;
      const externalParents = external(field.parent_ids);
      const externalChildren = external(field.successor_ids);
      layerBottom = Math.max(layerBottom, trailEnd + belowTrail({ fadesOut, externalChildren }));
      return {
        field,
        layer: l,
        x: 0,
        y,
        labelWidth: labelWidth(field),
        ticks,
        fogRowY,
        unresolved,
        trailEnd,
        fadesOut,
        externalParents,
        externalChildren,
      };
    });
    y = layerBottom + layerGap;
    return nodes;
  });
}

/** Leftmost and rightmost x a node may take without crowding its layer neighbours. */
function bounds(layer: TreeNode[], i: number, width: number): [number, number] {
  const { marginX, gap } = TREE;
  const lo = i === 0 ? marginX : layer[i - 1].x + layer[i - 1].labelWidth + gap;
  const hi =
    i === layer.length - 1 ? width - marginX - layer[i].labelWidth : layer[i + 1].x - layer[i].labelWidth - gap;
  return [lo, hi];
}

function parentBary(node: TreeNode, byId: Map<string, TreeNode>, fallback: number): number {
  const ps = node.field.parent_ids.map((p) => byId.get(p)).filter(Boolean) as TreeNode[];
  return ps.length ? ps.reduce((s, p) => s + p.x, 0) / ps.length : fallback;
}

/** Initial x: each node at its parents' barycenter, pushed apart to fit its layer. */
function placeAtBarycenters(layers: TreeNode[][], width: number) {
  const { marginX, gap } = TREE;
  const byId = new Map(layers.flat().map((n) => [n.field.id, n]));
  for (const layer of layers) {
    const total = layer.reduce((s, n) => s + n.labelWidth, 0) + gap * (layer.length - 1);
    const center = (width - total) / 2;
    const ideal = layer.map((n) => parentBary(n, byId, center));
    let x = -Infinity;
    layer.forEach((n, i) => {
      x = i === 0 ? ideal[0] : Math.max(ideal[i], x + layer[i - 1].labelWidth + gap);
      n.x = x;
    });
    // Recentre on the ideals, then clamp inside the canvas.
    const meanIdeal = ideal.reduce((s, v) => s + v, 0) / ideal.length;
    const meanPos = layer.reduce((s, n) => s + n.x, 0) / layer.length;
    let shift = meanIdeal - meanPos;
    const last = layer[layer.length - 1];
    if (last.x + shift > width - marginX - last.labelWidth) shift = width - marginX - last.labelWidth - last.x;
    if (layer[0].x + shift < marginX) shift = marginX - layer[0].x;
    layer.forEach((n) => (n.x += shift));
  }
}

function buildEdges(nodes: TreeNode[]): TreeEdge[] {
  const byId = new Map(nodes.map((n) => [n.field.id, n]));
  const edges: TreeEdge[] = [];
  for (const node of nodes) {
    for (const p of node.field.parent_ids) {
      const parent = byId.get(p);
      if (!parent) continue;
      edges.push({
        from: parent.field.id,
        to: node.field.id,
        source: [parent.x, parent.trailEnd],
        target: [node.x, node.y - 8],
        layer: parent.layer,
      });
    }
  }
  return edges;
}

/** Points along the same vertical cubic that d3's linkVertical draws. */
function sampleEdge(e: TreeEdge, steps: number): Array<[number, number]> {
  const [x0, y0] = e.source;
  const [x1, y1] = e.target;
  const ym = (y0 + y1) / 2;
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    const u = 1 - t;
    return [
      u * u * u * x0 + 3 * u * u * t * x0 + 3 * u * t * t * x1 + t * t * t * x1,
      u * u * u * y0 + 3 * u * u * t * ym + 3 * u * t * t * ym + t * t * t * y1,
    ];
  });
}

/** x of a y-monotone sampled curve at height y (linear interpolation). */
function xAt(points: Array<[number, number]>, y: number): number {
  let lo = 0;
  let hi = points.length - 1;
  if (y <= points[lo][1]) return points[lo][0];
  if (y >= points[hi][1]) return points[hi][0];
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (points[mid][1] <= y) lo = mid;
    else hi = mid;
  }
  const [x0, y0] = points[lo];
  const [x1, y1] = points[hi];
  return y1 === y0 ? x0 : x0 + ((x1 - x0) * (y - y0)) / (y1 - y0);
}

/**
 * How badly a layout reads. A branch through another field's dot or trail costs
 * the most (it suggests a lineage that isn't there), then branches through
 * labels, then branch crossings. Small terms prefer nodes near
 * their parents' barycenter and branches that don't travel far sideways.
 */
function cost(nodes: TreeNode[]): number {
  const { fogLength } = TREE;
  const edges = buildEdges(nodes);
  const byId = new Map(nodes.map((n) => [n.field.id, n]));
  const samples = edges.map((e) => sampleEdge(e, 24));
  let total = 0;

  edges.forEach((e, i) => {
    for (const n of nodes) {
      if (n.field.id === e.from || n.field.id === e.to) continue;
      const bottom = n.trailEnd + (n.fadesOut ? fogLength : 0);
      for (const [x, y] of samples[i]) {
        if (y < n.y - 22 || y > bottom + 8) continue;
        // Crossing another field's dot or trail misstates the lineage; brushing its labels only clutters.
        if (Math.abs(x - n.x) < 18) total += 40;
        else if (x > n.x && x < n.x + n.labelWidth) total += 10;
      }
    }
    total += 0.002 * Math.abs(e.source[0] - e.target[0]);
  });

  // Every branch is monotone in y, so two branches cross exactly when the sign
  // of their horizontal gap flips somewhere in the height range they share.
  for (let i = 0; i < edges.length; i++) {
    for (let j = i + 1; j < edges.length; j++) {
      const a = edges[i];
      const b = edges[j];
      if (a.from === b.from || a.to === b.to) continue;
      const top = Math.max(a.source[1], b.source[1]);
      const bottom = Math.min(a.target[1], b.target[1]);
      if (bottom <= top) continue;
      const [aLo, aHi] = [Math.min(a.source[0], a.target[0]), Math.max(a.source[0], a.target[0])];
      const [bLo, bHi] = [Math.min(b.source[0], b.target[0]), Math.max(b.source[0], b.target[0])];
      if (aHi < bLo || bHi < aLo) continue;
      let prev = 0;
      for (let k = 0; k <= 12; k++) {
        const y = top + ((bottom - top) * k) / 12;
        const gap = Math.sign(xAt(samples[i], y) - xAt(samples[j], y));
        if (gap !== 0 && prev !== 0 && gap !== prev) {
          total += 6;
          break;
        }
        if (gap !== 0) prev = gap;
      }
    }
  }

  for (const n of nodes) {
    if (n.field.parent_ids.length) total += 0.01 * Math.abs(n.x - parentBary(n, byId, n.x));
  }
  return total;
}

/** Slide nodes sideways one at a time while the score improves. */
function refine(layers: TreeNode[][], width: number, start: number): number {
  const all = layers.flat();
  let best = start;
  for (let sweep = 0; sweep < 4; sweep++) {
    let improved = false;
    for (const layer of layers) {
      layer.forEach((node, i) => {
        const [lo, hi] = bounds(layer, i, width);
        let bestX = node.x;
        const tryAt = (x: number) => {
          if (x < lo || x > hi) return;
          node.x = x;
          const c = cost(all);
          if (c < best - 1e-6) {
            best = c;
            bestX = x;
            improved = true;
          }
        };
        // Coarse pass across the whole range, then a fine pass around the best spot.
        for (let x = lo; x <= hi; x += 48) tryAt(x);
        const centre = bestX;
        for (let dx = -40; dx <= 40; dx += 8) tryAt(centre + dx);
        node.x = bestX;
      });
    }
    if (!improved) break;
  }
  return best;
}

/** Upper bound on layer-order combinations to score; beyond it, keep the default order. */
const MAX_CANDIDATES = 5000;
/** How many of the best-scoring orderings get the sideways refinement (at this scale, all of them). */
const REFINE_TOP = 120;

export function layoutTree(fields: Field[]): TreeLayout {
  const { marginX, gap, fogLength } = TREE;
  const layerOf = balancedLayers(fields);
  const depth = Math.max(0, ...layerOf.values());
  const byLayer = Array.from({ length: depth + 1 }, (_, l) =>
    fields.filter((f) => layerOf.get(f.id) === l).sort((a, b) => a.name.localeCompare(b.name)),
  );

  // Room for the widest layer, plus slack so branches can pass beside labels.
  const widest = Math.max(
    ...byLayer.map((l) => l.reduce((s, f) => s + labelWidth(f), 0) + gap * (l.length - 1)),
  );
  const width = Math.max(TREE.width, Math.ceil(2 * marginX + widest + 200));

  const options = byLayer.map((l) => permutations(l));
  const combos = options.reduce((n, o) => n * o.length, 1);
  const orderings: Field[][][] = [];
  if (combos > MAX_CANDIDATES) {
    orderings.push(byLayer);
  } else {
    const choose = (l: number, chosen: Field[][]) => {
      if (l === options.length) return void orderings.push(chosen);
      for (const order of options[l]) choose(l + 1, [...chosen, order]);
    };
    choose(0, []);
  }

  const scored = orderings.map((orders) => {
    const layers = buildNodes(orders);
    placeAtBarycenters(layers, width);
    return { layers, score: cost(layers.flat()) };
  });
  scored.sort((a, b) => a.score - b.score);

  let best = scored[0];
  for (const candidate of scored.slice(0, REFINE_TOP)) {
    candidate.score = refine(candidate.layers, width, candidate.score);
    if (candidate.score < best.score) best = candidate;
  }

  // Trim the canvas to what the chosen layout actually uses.
  const nodes = best.layers.flat();
  const minX = Math.min(...nodes.map((n) => n.x));
  nodes.forEach((n) => (n.x += marginX - minX));
  // Trim to what the layout uses (the minimum width is only search room), so narrow trees sit centred.
  const stubReach = (n: TreeNode) => (n.externalParents.length || n.externalChildren.length ? STUB_LABEL : 0);
  const usedWidth = Math.ceil(Math.max(...nodes.map((n) => n.x + Math.max(n.labelWidth, stubReach(n)))) + marginX);
  const height = Math.max(...nodes.map((n) => n.trailEnd + belowTrail(n))) + 36;
  return { width: usedWidth, height, nodes, edges: buildEdges(nodes) };
}

/** Fields in reading order: by layer, then left to right. */
export function readingOrder(layout: TreeLayout): Field[] {
  return [...layout.nodes].sort((a, b) => a.layer - b.layer || a.x - b.x).map((n) => n.field);
}
