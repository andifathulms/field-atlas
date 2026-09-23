// Manual layered layout for the field DAG. At v1 scale (a handful of nodes) a
// longest-path layering plus barycenter ordering is enough; no general
// graph-layout library needed. Labels sit to the right of each node, so the
// layout keeps each node's right-hand column clear of edges.
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

/** Spread nodes around their ideal x positions with at least `gap` between them. */
function spread(ideal: number[], gap: number, min: number, max: number): number[] {
  const pos: number[] = [];
  ideal.forEach((x, i) => pos.push(i === 0 ? x : Math.max(x, pos[i - 1] + gap)));
  const mean = (a: number[]) => a.reduce((s, v) => s + v, 0) / a.length;
  let shift = mean(ideal) - mean(pos);
  if (pos[0] + shift < min) shift = min - pos[0];
  if (pos[pos.length - 1] + shift > max) shift = max - pos[pos.length - 1];
  return pos.map((x) => x + shift);
}

export function layoutTree(fields: Field[]): TreeLayout {
  const { width, top, marginX, labelWidth, columnGap, head, row, trailPad, layerGap, fogLength } = TREE;
  const minX = marginX;
  const maxX = width - labelWidth;
  const layers = assignLayers(fields);
  const depth = Math.max(0, ...layers.values());

  // How far down the tree a field's longest outgoing branch reaches. Fields whose
  // branches skip layers go left, so those long edges pass left of the
  // intervening nodes instead of through their labels.
  const reach = (f: Field) =>
    Math.max(0, ...f.successor_ids.filter((s) => layers.has(s)).map((s) => layers.get(s)! - layers.get(f.id)!));

  const nodes = new Map<string, TreeNode>();
  let y: number = top;

  for (let l = 0; l <= depth; l++) {
    const inLayer = fields.filter((f) => layers.get(f.id) === l);
    const bary = (f: Field) => {
      const ps = f.parent_ids.map((p) => nodes.get(p)).filter(Boolean) as TreeNode[];
      return ps.length ? ps.reduce((s, p) => s + p.x, 0) / ps.length : (minX + maxX) / 2;
    };
    inLayer.sort((a, b) => bary(a) - bary(b) || reach(b) - reach(a) || a.name.localeCompare(b.name));
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
  }

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

/** Fields in reading order: by layer, then left to right. */
export function readingOrder(layout: TreeLayout): Field[] {
  return [...layout.nodes].sort((a, b) => a.layer - b.layer || a.x - b.x).map((n) => n.field);
}
