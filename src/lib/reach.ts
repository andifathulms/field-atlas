import { getField, getFields } from "./content";
import type { Domain, Field } from "./types";

export interface Reach {
  field: Field;
  /** Fields that grew directly from this one, in another thread or domain. */
  offshoots: Field[];
  /** How many fields descend from this one, however indirectly. */
  downstream: number;
  /** Fields in other domains where one of this field's applications lands. */
  crossings: Field[];
  /** Threads touched by offshoots or crossings, other than the field's own. */
  threads: Set<string>;
  domains: Set<Domain>;
}

function descendantsOf(field: Field): Field[] {
  const seen = new Set<string>();
  const queue = [...field.successor_ids];
  while (queue.length) {
    const id = queue.shift()!;
    if (seen.has(id)) continue;
    seen.add(id);
    queue.push(...getField(id)!.successor_ids);
  }
  return [...seen].map((id) => getField(id)!);
}

/**
 * How far a field's ideas travelled: an influence proxy built only from what
 * the atlas already records (lineage and crossings), never a separate score.
 */
export function reachOf(field: Field): Reach {
  const downstream = descendantsOf(field).length;
  const offshoots = field.successor_ids
    .map((id) => getField(id)!)
    .filter((f) => f.thread !== field.thread || f.domain !== field.domain);
  const crossings = [
    ...new Map(
      (field.applications ?? [])
        .filter((a) => a.field_id && a.domain && a.domain !== field.domain)
        .map((a) => getField(a.field_id!)!)
        .map((f) => [f.id, f]),
    ).values(),
  ];
  const others = [...offshoots, ...crossings];
  const threads = new Set(
    others.map((f) => `${f.domain}/${f.thread}`).filter((t) => t !== `${field.domain}/${field.thread}`),
  );
  const domains = new Set(others.map((f) => f.domain).filter((d) => d !== field.domain));
  return { field, offshoots, downstream, crossings, threads, domains };
}

/** All fields, most far-reaching first: threads reached directly, then direct links, then everything downstream. */
export function rankedReach(): Reach[] {
  return getFields()
    .map(reachOf)
    .sort(
      (a, b) =>
        b.threads.size - a.threads.size ||
        b.offshoots.length + b.crossings.length - (a.offshoots.length + a.crossings.length) ||
        b.downstream - a.downstream ||
        a.field.name.localeCompare(b.field.name),
    );
}
