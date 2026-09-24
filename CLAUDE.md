# Field Atlas — CLAUDE.md

Technical build notes for Claude Code. Read PRD.md and DESIGN.md first — this file is implementation, not product intent.

## Stack
- Frontend-only, static site — no backend, per standing preference for portfolio apps that deploy on GitHub Pages.
- Next.js 14 (static export) + Tailwind CSS, matching the established frontend stack.
- Content lives as structured files in the repo (JSON or MDX — see Content authoring below), not a database. Corrections are a PR, not an admin panel, matching the sibling apps' read-only/no-accounts model.
- D3.js for the field-tree/spine view (branching DAG layout); Recharts is unlikely to fit here since there's no time-series or ranked-table data in v1 (no rating layer).
- KaTeX for math notation rendering if the v1 vertical is mathematics; swap for the domain's equivalent (e.g. none needed for most physics/biology prose, chemical/reaction notation if biology touches biochemistry).

## Data model (implement shared from day one)

```
Field {
  id: string
  domain: "math" | "physics" | "biology"
  name: string
  parent_ids: string[]        // supports multiple parents (DAG, not strict tree)
  successor_ids: string[]     // inverse of parent_ids, denormalized for fast rendering
  era_emerged: string         // free text date/period, not always a precise year
  core_question: string       // one line
  chapters: Chapter[]
  turning_points: TurningPoint[]
  open_problems: OpenProblem[]
  figure_ids: string[]
}

Chapter {
  title: string                // free text, no fixed template
  body: string                 // markdown/MDX
}

TurningPoint {
  id: string
  field_id: string
  date: string
  type: string                 // domain-specific vocabulary, see PRD.md
  description: string
  contested: boolean
  sources: Source[]
}

OpenProblem {
  id: string
  field_id: string
  name: string
  status: "open" | "recently_resolved" | "conjectured"
  description: string
  why_hard: string
  unlocks: string
}

Figure {
  id: string
  name: string
  field_ids: string[]
  turning_point_ids: string[]  // contributions tied to specific events, not standalone bio
}

Source {
  citation: string
  url: string | null
}
```

As built (see `src/lib/types.ts`), a few fields were added beyond the sketch above:
- `TurningPoint.title` — a short headline, used on waypoints and tree tooltips.
- `TurningPoint.contested_note` — required when `contested` is true; states what is disputed rather than picking a side.
- `OpenProblem.status_note` — the "as of" qualifier for the status (open-problem status is recorded at time of writing, not tracked live).
- `OpenProblem.sources` — citations, same shape as turning-point sources.

Derived at load time, never authored (so a correction stays a single-file diff):
- `Field.successor_ids` — the inverse of `parent_ids`.
- `Figure.field_ids` and `Field.figure_ids` — from `Figure.turning_point_ids`.
- `TurningPoint.field_id` / `OpenProblem.field_id` — from the file they live in.

Keep `Field`, `TurningPoint`, `OpenProblem`, and `Figure` as one shared collection each across all three domains (filter by `domain` field), not three parallel per-domain tables. This is what makes the width-phase cross-domain view a filter/join instead of a rewrite.

## Content authoring
One file per Field so a correction is a single-file diff, consistent with the "corrections via repo edit" model in the sibling apps.

- `content/fields/<field-id>.md`: YAML frontmatter holds the structured fields (id, domain, name, parent_ids, era_emerged, core_question, turning_points, open_problems). The Markdown body is split into chapters on `## ` headings, so chapter count and titles are free per field.
- Optional depth keys in the same frontmatter: `summary` (literal block, Markdown), `key_ideas` (`term`, `definition`, optional `turning_point_id` in any field), `applications` (`area`, `title`, `description`, optional `domain` for a cross-domain seed plus optional `field_id` naming the field it lands in, `sources`), and `further_reading` (`citation`, `url`, `note`). The field page renders each section only when it is present.
- A `field_id` on an application must name a field in the application's `domain`; the target field page derives a "Draws on other domains" list from these (`getIncomingLinks`), so the link is authored once, on the source side.
- Turning-point ids are global across domains, so physics and math events can't collide (the loader rejects duplicates).
- `content/figures.json`: the shared figures collection, each figure tied to turning point ids.
- Math: KaTeX via `$…$` and `$$…$$`. Display math needs `$$` on its own lines, so use a literal (`|-`) YAML block for any frontmatter text that contains display math.
- Figure mentions in chapter prose: `{{fig:gauss}}` or `{{fig:gauss|Gauss}}` links the name to that figure's turning point.
- Internal links in prose use root-relative paths (`/math/riemannian-geometry/`); the renderer applies the base path.
- `src/lib/content.ts` validates everything at build time: unknown parents, cycles, cross-domain parents, turning-point types outside the domain vocabulary, contested points without a note, and unresolved figure references all fail the build.

## Pages / routing
- `/` — domain landing (v1: single domain, but route structure should already branch to `/math`, `/physics`, `/biology` even if only one has content)
- `/[domain]` — field tree / spine view for that domain
- `/[domain]/[field-slug]` — field page
- `/crossings` — cross-domain view, derived by `getCrossings()` from every application whose `domain` differs from its field's (linked when it names a `field_id`, a "seed" otherwise)

## Field tree rendering
This is a DAG, not a strict linear chain — a field can have more than one parent. Don't reuse a pure linear-timeline component from [[empire-rankings]] unmodified; the layout needs to handle branch/merge points (e.g. a field born at the seam of two parents). D3's DAG/tree layout utilities (or a simple manual layered layout, given v1 is only 3–5 nodes) are enough for v1 — no need for a general graph-layout library at this scale.

## Field tree rendering — as built
`src/lib/treeLayout.ts` is a manual layered layout. Longest-path layers are computed first; any row holding more than three fields sends its latest-born field (by `era_emerged`) down a row. Every left-to-right ordering of each layer is then placed at parent barycenters and scored: branches through another field's dot or trail cost the most, then branches through its labels, then branch crossings (checked cheaply because every branch is monotone in height), then small terms for distance from the barycenter and sideways travel. The best few orderings are refined by sliding nodes sideways while the score improves. Each node's label width is estimated from its text (`tickLabel`/`eraLabel` are shared with the renderer). The search is exhaustive only while the number of layer orderings stays under `MAX_CANDIDATES`; a much larger tree would need a real crossing-minimisation heuristic. `src/components/FieldTree.tsx` draws the result as SVG, using `d3-shape` for the branch curves. Branches draw in with a `pathLength` dash animation. Unresolved open problems render as fading dashes and fog. Straight lines can't take an `objectBoundingBox` gradient stroke, which is why the fading is done with individual dashes.

## Deployment
Static export → GitHub Pages, same as the other portfolio-vertical apps (Ruleset, empire-rankings, etc.). `.github/workflows/deploy.yml` builds on push to `main` and sets `NEXT_PUBLIC_BASE_PATH` from `actions/configure-pages`. Anything not rendered through `next/link` (e.g. `<a>` inside SVG) must use `withBase()` from `src/lib/paths.ts`.

## Visual identity
Do not reuse [[empire-rankings]] or [[ruleset]]'s color/typeface/layout wholesale — per the standing preference, apps should read as siblings (shared rhythm, motion timing, quality floor) but have their own per-app color, type, and layout. See DESIGN.md.
