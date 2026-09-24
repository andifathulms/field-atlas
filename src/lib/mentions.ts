import { FIGURE_MENTION, getField, getFigure, getTurningPoint } from "./content";
import { fieldPath } from "./paths";
import type { Field } from "./types";

/**
 * Where a figure mention should point from a given field page: the figure's
 * turning point in this field if there is one, otherwise their first
 * turning point elsewhere.
 */
export function figureAnchor(figureId: string, field: Field): string {
  const figure = getFigure(figureId)!;
  const local = figure.turning_point_ids.find((id) => field.turning_points.some((tp) => tp.id === id));
  if (local) return `#tp-${local}`;
  const tp = getTurningPoint(figure.turning_point_ids[0])!;
  return `${fieldPath(getField(tp.field_id)!.domain, tp.field_id)}#tp-${tp.id}`;
}

/** Turn `{{fig:id}}` / `{{fig:id|Name}}` into Markdown links to turning points. */
export function resolveFigureMentions(body: string, field: Field): string {
  return body.replace(FIGURE_MENTION, (_, id: string, label?: string) => {
    const name = label ?? getFigure(id)!.name;
    return `[${name}](${figureAnchor(id, field)})`;
  });
}
