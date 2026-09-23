# Field Atlas — DESIGN.md

## Concept
The name is the design brief: an atlas is a book of surveyed maps, and every honest map shows where the survey stops. Field Atlas maps each field of knowledge the same way, edges included. Render resolved knowledge (proven theorems, settled discoveries) as charted ground — solid lines, filled shapes, confident typography. Render open problems as literally unmapped — fading linework, dotted boundaries, a "fog" that doesn't resolve into a shape. The field tree isn't drawn as a corporate org-chart; it's drawn as a hand-surveyed map of terrain that was explored gradually, branch by branch.

This gives the app a visual identity distinct from both siblings: [[empire-rankings]] reads as an atlas of a closed, finished past (peak-extent polygons, dynastic weight); [[ruleset]] reads as a live scoreboard/rulebook. Field Atlas should read as a **field notebook / survey map** — provisional, exploratory, honest about where the ink runs out. The name says "atlas" too, so the difference from [[empire-rankings]] has to show in the drawing: that app's atlas is finished, and this one is still being surveyed.

## Typography
- **Headings / field names:** a serif with some age to it (e.g. a slab or transitional serif — Source Serif 4, Lora, or similar) — reads as "written down," not "generated."
- **Body / chapter prose:** a readable serif or humanist sans at comfortable reading size — this is long-form narrative prose, same register as the sibling apps' chapter text.
- **Metadata / dates / type tags (CONJECTURE, PROOF, CRISIS, etc.):** a monospace, small-caps or all-caps, tracked out — reads as a surveyor's field stamp, not a UI badge. This is the one place the "instrument" feel of the app should show.

## Color
A palette built around ink-on-paper plus one accent per domain, so domains 2 and 3 (physics, biology) get their own accent later without restyling the whole app:
- **Base:** warm off-white / aged paper background, near-black ink for text — not pure white/black.
- **Math accent:** a deep indigo/blue-black ink tone (traditionally the color of proof — chalkboard, fountain-pen blue).
- **Physics accent (reserved for width phase):** a warm graphite-orange, evoking oscilloscope/instrument amber.
- **Biology accent (reserved for width phase):** a muted moss green, evoking field-notebook botanical sketches.
- **Contested turning points:** a small warning-red hatch or underline, used sparingly — echoes the CONTESTED tag without turning the page into a warning label.
- **Open problems:** desaturated, lower-contrast than resolved content — literally rendered as "less certain" on the page, not just labeled as such.

## The field tree / spine view
This is the app's signature visual, equivalent to the empire app's succession thread or ruleset's rule-change timeline. Treat it as a **hand-surveyed branching map**, not a flowchart:
- Resolved branches: solid ink lines, confident node shapes.
- Points where a field forks (multiple successors) or merges (multiple parents): drawn as an actual branch/confluence, not a diamond decision node — this is a DAG, and the visual should read as terrain branching, not as software logic.
- Turning points sit as waypoints along the line, tagged with the monospace field-stamp style above; CONTESTED ones get the hatch treatment.
- Where a field's story trails into open problems, the line itself can taper or fade rather than stopping at a hard edge — the map running out of ink at the edge of what's known.

## Field page layout
- Header: field name (serif), one-line core question set in a slightly smaller, italicized register — reads like a caption under a map title.
- Chapters: plain long-form reading column, matching the sibling apps' prose-first field pages — no card/grid treatment, this is meant to be read.
- Turning Points: a vertical waypoint list beside or below the prose, using the field-stamp typography.
- Open Problems: visually set apart — lower contrast, perhaps a dashed border or unfilled shape motif — so a reader immediately recognizes "this section is not settled" without reading a label.
- Figures: inline mentions linked to their turning points, not a separate photo-grid bio section — keeps the focus on the idea, not the person, per the content model in PRD.md.

## Motion
Shared house rhythm with the sibling apps (consistent timing/easing), but the specific motion vocabulary here should feel like ink settling or a map redrawing itself — e.g. field-tree branches drawing themselves in on load rather than fading in as flat blocks. Keep it subtle; this app leans on typography and line quality more than animation.

## What to avoid
- No gamified/scoreboard visual language (no progress bars, no percentile badges) — there's no rating layer, and the visual design shouldn't imply one.
- No generic "knowledge base" SaaS look (no rounded card grids, no icon-per-category tiles) — the map/notebook framing is the whole point of the identity.
- Don't inherit [[empire-rankings]]'s imperial gold/map-polygon palette or [[ruleset]]'s presumed athletic/scoreboard palette directly — same house rhythm, different per-app color and layout, per standing preference.
