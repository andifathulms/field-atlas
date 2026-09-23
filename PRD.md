# Frontier — PRD

## What this is
A read-only narrative encyclopedia of scientific fields — starting with mathematics, extending to physics and biology — built around three things: how a field's subfields branched from one another, the dated turning points (proofs, discoveries, crises) that forced each branch to exist, and the open problems that field still hasn't answered.

It's a sibling project to [[empire-rankings]] (narrative succession + causation, applied to polities) and [[ruleset]] (rule-change timeline, applied to sports). Frontier applies the same shape to ideas: a field is the unit, and it earns a page the way a polity or a sport does.

## Motivation
Wants an app in his own voice explaining how a field of knowledge came to be divided the way it is — not a textbook table of contents, but "why does algebraic number theory exist as a separate thing from number theory, and what forced the split." The open-problems layer is new relative to the sibling apps: math/physics/biology have live, unresolved frontiers that empires and sports rules mostly don't.

## Scope — v1
One narrow vertical, picked before build starts (deliberately not number theory by default — the field to pilot is chosen at build time, same discipline as picking the Iranian Intermezzo thread for [[empire-rankings]]). v1 proves the format on a single branching thread of 3–5 subfields within one domain (math, physics, or biology — domain also chosen at build time). Depth and width — more subfields, then the other two domains — come after the format is proven, not before.

## Non-goals (v1)
- No rating/metric/percentile layer — unlike [[empire-rankings]], this app has no computed scoring axis, by design.
- No user accounts, no editing, no contributions. Static site; corrections are made by editing content files in the repo, same as the sibling apps.
- No exhaustive field coverage. One thread, not a full taxonomy.
- No cross-domain view yet (math turning point enabling a physics turning point, etc.) — the schema supports it from day one, but the UI for it waits for width phase.
- No live/current-controversy coverage requiring real-time updates — the "open problems" layer records status as of time of writing, not a live feed.

## Content unit: the Field
A Field is a subfield-level entry (e.g. "Analytic Number Theory," not "Fermat's Last Theorem," and not "Mathematics"). Each Field has:
- A domain (math / physics / biology)
- A parent field (or none, if root)
- One or more successor fields it branched into, and predecessor fields it branched from (a DAG, not a strict chain — a field can have more than one parent, e.g. a field born at the seam of two others)
- An era it emerged in
- A one-line statement of the core question the field exists to answer
- A flexible set of narrative chapters — count and titles vary per field, not templated (e.g. "Origins," "The Central Problem," "The Toolkit Matures," "The Modern Program")
- A list of Turning Points
- A list of Open Problems
- A list of Figures, each tied to specific turning points rather than given standalone biography treatment

## Turning Points
Dated events inside a field's history, each tagged by type. Type vocabulary is domain-specific:
- Math: CONJECTURE, PROOF, DISPROOF, REFORMULATION, CRISIS
- Physics: DISCOVERY, EXPERIMENT, THEORY-REPLACED, PARADIGM-SHIFT
- Biology: DISCOVERY, SYNTHESIS, TECHNIQUE-INVENTED, CONSENSUS-OVERTURNED
A CONTESTED flag marks turning points where priority or causation is genuinely disputed among sources (mirrors the CONTESTED tag in [[empire-rankings]]'s Turning Points).

## Open Problems
The structural element without a precedent in the sibling apps. Per problem: name, status (open / recently resolved / conjectured-but-unproven), why it's hard, and what resolving it would unlock. Framed honestly — this is where the app admits the story isn't finished.

## Views
1. **Domain landing** — the (eventually) three domains as entry points.
2. **Field tree / spine view** — the succession thread for the chosen v1 vertical, drawn as a branching tree (a DAG, since fields can have multiple parents, unlike the empire app's mostly-linear succession).
3. **Field page** — chapters, turning points, open problems, figures, predecessor/successor links.
4. **Cross-domain view** — deferred to width phase. The payoff of building math/physics/biology in one shared schema from the start rather than three separate apps.

## Data model — shared from the start
Fields, turning points, open problems, and figures live in shared tables/collections across all three domains from day one (not per-domain tables joined later), so the cross-domain view in width phase is a query, not a migration.

## Content sourcing
Page prose AI-drafted with citations attached, then reviewed — same process as [[empire-rankings]]. Where sources disagree, state the disagreement rather than picking a side.

## v2 / later
- Add domains 2 and 3 once v1's format holds up.
- Widen each domain's field tree beyond the pilot thread.
- Cross-domain turning points (calculus enabling Newtonian mechanics; statistics enabling the modern synthesis in biology) once there's enough coverage on both sides of a link.
- Possible "toolkit" view — which techniques originated in one field and spread to others (the influence-proxy equivalent from [[empire-rankings]]).
