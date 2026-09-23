import type { Field } from "./types";

/** Open problems that are still unresolved (open or conjectured). */
export function unresolvedCount(field: Field): number {
  return field.open_problems.filter((p) => p.status !== "recently_resolved").length;
}

export function surveySummary(fields: Field[]) {
  return {
    fields: fields.length,
    turningPoints: fields.reduce((n, f) => n + f.turning_points.length, 0),
    unresolved: fields.reduce((n, f) => n + unresolvedCount(f), 0),
  };
}
