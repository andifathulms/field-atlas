// Labels for lineage that continues on another thread's map. Shared by the tree
// layout (to size label columns) and the renderer (to draw them).
import { getField } from "./content";
import { getThread } from "./domains";

export interface ThreadLink {
  fieldId: string;
  /** "from": a parent drawn on another map; "into": a child drawn on another map. */
  direction: "from" | "into";
  name: string;
  threadTitle: string;
  /** The row's stamp text, e.g. "↖ FROM ALGEBRAIC GEOMETRY · THE GEOMETRY THREAD". */
  label: string;
}

export function threadLink(fieldId: string, direction: "from" | "into"): ThreadLink | null {
  const other = getField(fieldId);
  if (!other) return null;
  const threadTitle = getThread(other.domain, other.thread)?.title ?? "";
  const arrow = direction === "from" ? "↖ FROM" : "↘ INTO";
  return {
    fieldId,
    direction,
    name: other.name,
    threadTitle,
    label: `${arrow} ${other.name.toUpperCase()} · ${threadTitle.toUpperCase()}`,
  };
}
