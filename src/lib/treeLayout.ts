// Manual layered layout for the field DAG. Longest-path layers; each node sits
// at the barycenter of its parents. At this scale (a handful of fields per
// layer) every left-to-right ordering is scored and the cleanest one wins, so
// no general graph-layout library is needed. Labels sit to the right of each
// node, and the scoring keeps branches out of them.
import type { Field, TurningPoint } from "./types";
import { unresolvedCount } from "./stats";

export const TREE = {
  width: 820,
  top: 44,
  marginX: 40,
  /** Horizontal room reserved to the right of a node for its labels. */
  labelWidth: 270,
  columnGap: 300,
  /** Name + era block above the first waypoint. */
  head: 50,
  row: 22,
  trailPad: 12,
  layerGap: 76,
  fogLength: 70,
} as const;

export interface TreeTick {
  tp: TurningPoint;
  y: number;
}

export interface TreeNode {
  field: Field;
  layer: number;
  x: number;
  y: number;
  ticks: TreeTick[];
  /** y of the unresolved-problems row, if the field has any. */
  fogRowY: number | null;
  unresolved: number;
  /** Where the solid trail ends and outgoing branches begin. */
  trailEnd: number;
  /** A leaf with unresolved problems trails off into fog below its trail. */
  fadesOut: boolean;
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

function assignLayers(fields: Field[]): Map<string, number> {
  const byId = new Map(fields.map((f) => [f.id, f]));
  const layers = new Map<string, number>();
  const layerOf = (id: string): number => {
    const known = layers.get(id);
    if (known !== undefined) return known;
    const parents = byId.get(id)!.parent_ids.filter((p) => byId.has(p));
    const l = parents.length === 0 ? 0 : 1 + Math.max(...parents.map(layerOf));
    layers.set(id, l);
    return l;
  };
  fields.forEach((f) => layerOf(f.id));
  return layers;
}

/** Spread nodes around their ideal x positions with at least `gap` between them, keeping their order. */
function spread(ideal: number[], gap: number, min: number, max: number): number[] {
  const pos: number[] = [];
  ideal.forEach((x, i) => pos.push(i === 0 ? x : Math.max(x, pos[i - 1] + gap)));
  const mean = (a: number[]) => a.reduce((s, v) => s + v, 0) / a.length;
  let shift = mean(ideal) - mean(pos);
  if (pos[0] + shift < min) shift = min - pos[0];
  if (pos[pos.length - 1] + shift > max) shift = max - pos[pos.length - 1];
  return pos.map((x) => x + shift);
}

function permutations<T>(items: T[]): T[][] {
  if (items.length <= 1) return [items];
  return items.flatMap((item, i) =>
    permutations([...items.slice(0, i), ...items.slice(i + 1)]).map((rest) => [item, ...rest]),
  );
}

/** Position every node for a given left-to-right order of each layer. */
function place(orders: Field[][], width: number): TreeLayout {
  const { top, marginX, labelWidth, columnGap, head, row, trailPad, layerGap, fogLength } = TREE;
  const minX = marginX;
  const maxX = width - labelWidth;
  const nodes = new Map<string, TreeNode>();
  let y: number = top;

  orders.forEach((inLayer, l) => {
    const bary = (f: Field) => {
      const ps = f.parent_ids.map((p) => nodes.get(p)).filter(Boolean) as TreeNode[];
      return ps.length ? ps.reduce((s, p) => s + p.x, 0) / ps.length : (minX + maxX) / 2;
    };
    const xs = spread(inLayer.map(bary), columnGap, minX, maxX);

    let layerBottom = y;
    inLayer.forEach((field, i) => {
      const ticks = field.turning_points.map((tp, j) => ({ tp, y: y + head + j * row }));
      const unresolved = unresolvedCount(field);
      const fogRowY = unresolved > 0 ? y + head + ticks.length * row + 4 : null;
      const rows = ticks.length + (unresolved > 0 ? 1 : 0);
      const trailEnd = y + head + Math.max(0, rows - 1) * row + trailPad;
      const fadesOut = unresolved > 0 && field.successor_ids.length === 0;
      nodes.set(field.id, { field, layer: l, x: xs[i], y, ticks, fogRowY, unresolved, trailEnd, fadesOut });
      layerBottom = Math.max(layerBottom, trailEnd + (fadesOut ? fogLength : 0));
    });
    y = layerBottom + layerGap;
  });

  const edges: TreeEdge[] = [];
  for (const node of nodes.values()) {
    for (const p of node.field.parent_ids) {
      const parent = nodes.get(p);
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

  const height = Math.max(...[...nodes.values()].map((n) => n.trailEnd + (n.fadesOut ? fogLength : 0))) + 36;
  return { width, height, nodes: [...nodes.values()], edges };
}

/** Points along the same vertical cubic that d3's linkVertical draws. */
function sampleEdge(e: TreeEdge, steps = 24): Array<[number, number]> {
  const [x0, y0] = e.source;
  const [x1, y1] = e.target;
  const ym = (y0 + y1) / 2;
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    const u = 1 - t;
    return [u * u * u * x0 + 3 * u * u * t * x0 + 3 * u * t * t * x1 + t * t * t * x1, u * u * u * y0 + 3 * u * u * t * ym + 3 * u * t * t * ym + t * t * t * y1];
  });
}

function segmentsCross(a: [number, number], b: [number, number], c: [number, number], d: [number, number]): boolean {
  const orient = (p: [number, number], q: [number, number], r: [number, number]) =>
    Math.sign((q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]));
  return orient(a, b, c) * orient(a, b, d) < 0 && orient(c, d, a) * orient(c, d, b) < 0;
}

/**
 * How badly a layout reads: branches running through another field's labels
 * or trail cost the most, then branch crossings, then (as a tie-break) how far
 * branches travel sideways.
 */
function cost(layout: TreeLayout): number {
  const { labelWidth, fogLength } = TREE;
  const samples = layout.edges.map((e) => sampleEdge(e));
  let total = 0;

  layout.edges.forEach((e, i) => {
    for (const n of layout.nodes) {
      if (n.field.id === e.from || n.field.id === e.to) continue;
      const bottom = n.trailEnd + (n.fadesOut ? fogLength : 0);
      for (const [x, y] of samples[i]) {
        if (y < n.y - 20 || y > bottom + 6) continue;
        if (x > n.x - 10 && x < n.x + labelWidth - 10) total += 10;
      }
    }
    total += 0.001 * Math.abs(e.source[0] - e.target[0]);
  });

  for (let i = 0; i < layout.edges.length; i++) {
    for (let j = i + 1; j < layout.edges.length; j++) {
      const a = layout.edges[i];
      const b = layout.edges[j];
      if (a.from === b.from || a.to === b.to) continue;
      const pa = samples[i];
      const pb = samples[j];
      let crossed = false;
      for (let s = 0; s < pa.length - 1 && !crossed; s++) {
        for (let t = 0; t < pb.length - 1 && !crossed; t++) {
          crossed = segmentsCross(pa[s], pa[s + 1], pb[t], pb[t + 1]);
        }
      }
      if (crossed) total += 5;
    }
  }
  return total;
}

/** Upper bound on layer-order combinations to score; beyond it, keep the default order. */
const MAX_CANDIDATES = 20000;

export function layoutTree(fields: Field[]): TreeLayout {
  const { marginX, labelWidth, columnGap } = TREE;
  const layers = assignLayers(fields);
  const depth = Math.max(0, ...layers.values());
  const byLayer = Array.from({ length: depth + 1 }, (_, l) =>
    fields.filter((f) => layers.get(f.id) === l).sort((a, b) => a.name.localeCompare(b.name)),
  );
  const widest = Math.max(...byLayer.map((l) => l.length));
  const width = Math.max(TREE.width, marginX + (widest - 1) * columnGap + labelWidth);

  // At v1 scale every left-to-right ordering can simply be scored.
  const options = byLayer.map((l) => permutations(l));
  const combos = options.reduce((n, o) => n * o.length, 1);
  if (combos > MAX_CANDIDATES) return place(byLayer, width);

  let best: TreeLayout | null = null;
  let bestCost = Infinity;
  const choose = (l: number, chosen: Field[][]) => {
    if (l === options.length) {
      const layout = place(chosen, width);
      const c = cost(layout);
      if (c < bestCost - 1e-9) {
        best = layout;
        bestCost = c;
      }
      return;
    }
    for (const order of options[l]) choose(l + 1, [...chosen, order]);
  };
  choose(0, []);
  return best!;
}

/** Fields in reading order: by layer, then left to right. */
export function readingOrder(layout: TreeLayout): Field[] {
  return [...layout.nodes].sort((a, b) => a.layer - b.layer || a.x - b.x).map((n) => n.field);
}
