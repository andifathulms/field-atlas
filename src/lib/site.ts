/**
 * Where this copy of the atlas is served from. The deploy workflow sets both
 * vars from the Pages configuration; locally they stay empty, which keeps
 * every URL relative.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");

export const SITE_NAME = "Field Atlas";

export const SITE_DESCRIPTION =
  "A narrative atlas of scientific fields: how they branched, the dated turning points that forced each branch, and the problems still unmapped.";

/** Absolute URL for a root-relative path, for canonical and social tags. */
export function absoluteUrl(path: string): string {
  return SITE_URL ? `${SITE_URL}${path}` : path;
}
