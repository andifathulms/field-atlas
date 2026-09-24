# Field Atlas — DESIGN.md

## Concept
The name is the design brief: an atlas is a book of surveyed maps, and every honest map shows where the survey stops. Field Atlas maps each field of knowledge the same way, edges included. Resolved knowledge (proven theorems, settled discoveries) is drawn as charted ground: solid lines, filled shapes, confident type. Open problems are drawn as literally unmapped: fading linework, dashed boundaries, a fog that never resolves into a shape. The field tree is a hand-surveyed map of terrain explored branch by branch, not an org chart.

This keeps the app distinct from its siblings. [[empire-rankings]] is an atlas of a closed, finished past (peak-extent polygons, dynastic weight). [[ruleset]] is a live scoreboard and rulebook. Field Atlas is a **field notebook / survey map**: provisional, exploratory, honest about where the ink runs out. The difference from [[empire-rankings]] has to show in the drawing: that atlas is finished, and this one is still being surveyed.

The reader is here to read. Every decision below serves long, unhurried reading first and browsing second.

## Typography
Two families, three voices.

- **Display and prose: Source Serif 4**, loaded as a variable font with its optical-size axis. Large headings get the display cut automatically (tighter, higher-contrast), and body text gets the text cut. It reads as written down, not generated.
- **Stamp: IBM Plex Mono**, uppercase, tracked out (`0.14em`), 11px. Used for dates, turning-point types (PROOF, CRISIS, CONJECTURE), counts and section labels. It is the surveyor's field stamp, the one place the instrument feel shows. Never use it for anything longer than a short phrase.

Scale (desktop / mobile):

| Role | Size | Notes |
| --- | --- | --- |
| Page title | 64 / 44px | semibold, `-0.02em`, balanced wrap |
| Section title | 32 / 28px | semibold |
| Field name in lists | 24px | semibold, turns accent on hover |
| Core question | 24 / 20px | italic, `ink-soft`: a caption under a map title |
| In brief | 21 / 19px | the lead paragraph register |
| Chapter prose | 19 / 18px | line-height 1.72, measure at most 40rem (~68 characters), `text-wrap: pretty` |
| Secondary prose | 15–16px | turning points, applications, open problems |

Chapter I opens with a three-line drop cap in the domain accent. Headings use `text-wrap: balance`, and body text uses old-style figures in prose and lining figures in stamps.

## Color
Ink on paper, plus one accent per domain. Everything is a CSS variable on `:root`, and `data-domain` swaps `--accent`, so components never hard-code a domain color.

**Day (default): aged paper**

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#f5f0e6` | page |
| `--paper-deep` | `#ece5d6` | map sheet, code, hover wash |
| `--ink` | `#1c1a17` | primary text |
| `--ink-soft` | `#4a453e` | secondary text |
| `--ink-faint` | `#776f63` | stamps and meta (≥ 4.5:1 on paper) |
| `--rule` | `#d9d0bf` | hairlines |
| `--fog` | `#a29a8c` | unmapped: intentionally below text contrast |
| `--math` | `#2c3b80` | fountain-pen indigo, the color of proof |
| `--physics` | `#a4541d` | instrument amber / oscilloscope graphite-orange |
| `--biology` | `#4f6e3c` | field-notebook moss |
| `--contested` | `#a8372a` | warning-red hatch, used sparingly |

**Night: the notebook by lamplight.** Chosen by the reader with the header toggle, or following the system setting. Warm charcoal paper (`#161512`) and bone ink (`#ebe4d4`), with each accent lifted to a lighter, less saturated version of itself (math `#9fb0f0`, physics `#e59c62`, biology `#9fbf86`, contested `#e57a64`). Fog stays below text contrast in both themes. Night is not a "dark UI": no pure black, no neon, same paper grain.

A faint paper grain (SVG turbulence, ~4% opacity) sits over the page in both themes, so the surface reads as paper rather than screen.

Rules:
- Contested items get the red hatch or a red rule, never a red fill or badge.
- Open problems are desaturated and lower-contrast than settled content, so they read as less certain before any label is read.
- A domain accent appears only in that domain's context (its pages, its name, its lines), except on the crossings view and the landing plate, where all three meet.

## Layout and navigation
- **Sticky header**, translucent paper with a backdrop blur and a hairline. It holds the mark (a small branching tree whose third branch runs out into dashes), the domain links with the current one underlined in its accent, Crossings, and the day/night toggle. On mobile the nav becomes one sideways-scrolling row.
- **Domain pages are long** (up to seven threads). A second sticky strip under the header lists the threads and highlights the one in view, so a reader always knows where they are and can jump.
- **Field page:** a header (breadcrumb, stamp line, name, core question, lineage) followed by a reading meta line: chapters, estimated reading time, turning points, open problems. Then a two-column body. The left column holds *Contents*, *In brief*, *Key ideas* and the chapters. The right column holds the turning-point waypoint list. Below that come Applications, Open problems (dashed frame, fogged) and Further reading. The page closes with "Continue the survey": the parent and successor fields, each shown with its core question.
- No rounded card grids, no icon tiles. Grouping is done with hairlines, dashed frames and the grid of the map sheet. Radii stay at 0–2px.
- Every page works at 360px with a 16px gutter. The field tree scrolls sideways inside its sheet, never the page, and it keeps a minimum drawing width so its labels stay legible.

## The field tree
The app's signature visual. It is a hand-surveyed branching map on a faint grid sheet, not a flowchart.
- Resolved branches: solid ink lines, confident node shapes.
- Forks and merges are drawn as actual branches and confluences, never as diamond decision nodes. This is a DAG, and it should read as terrain branching.
- Turning points sit as waypoints along each field's own trail, in stamp type. Contested ones get the hatch.
- Where a field trails into open problems, its line fades out dash by dash into a patch of fog.
- Lineage that continues on another thread's map is shown as hollow rings on the trail (`↖ from …`, `↘ into …`).

## Motion
Shared house rhythm with the sibling apps: `cubic-bezier(0.22, 1, 0.36, 1)`, 700ms for arrivals and 200ms for hovers. The vocabulary is ink settling and a map redrawing itself: branches draw in top to bottom by layer, text blocks drift up 6px as they arrive, and a jumped-to anchor flashes briefly. Hovers move things by at most 4px. All of it collapses under `prefers-reduced-motion`.

## What to avoid
- Gamified or scoreboard language: no progress bars, percentiles, badges or streaks. Counts are stated plainly, in stamp type.
- A generic knowledge-base SaaS look: no rounded card grids, no icon-per-category tiles, no gradient hero.
- [[empire-rankings]]'s imperial gold and polygon palette, and [[ruleset]]'s athletic scoreboard palette. The apps share rhythm and quality floor, not color, type or layout.
