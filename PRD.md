# Field Atlas — PRD

> Working title was "Frontier"; renamed to **Field Atlas**.

## What this is
A read-only narrative encyclopedia of scientific fields — starting with mathematics, extending to physics and biology — built around three things: how a field's subfields branched from one another, the dated turning points (proofs, discoveries, crises) that forced each branch to exist, and the open problems that field still hasn't answered.

It's a sibling project to [[empire-rankings]] (narrative succession + causation, applied to polities) and [[ruleset]] (rule-change timeline, applied to sports). Field Atlas applies the same shape to ideas: a field is the unit, and it earns a page the way a polity or a sport does.

## Motivation
Wants an app in his own voice explaining how a field of knowledge came to be divided the way it is — not a textbook table of contents, but "why does algebraic number theory exist as a separate thing from number theory, and what forced the split." The open-problems layer is new relative to the sibling apps: math/physics/biology have live, unresolved frontiers that empires and sports rules mostly don't.

## Scope — v1
One narrow vertical, picked before build starts (deliberately not number theory by default — the field to pilot is chosen at build time, same discipline as picking the Iranian Intermezzo thread for [[empire-rankings]]). v1 proves the format on a single branching thread of 3–5 subfields within one domain (math, physics, or biology — domain also chosen at build time). Depth and width — more subfields, then the other two domains — come after the format is proven, not before.

**v1 pilot, as chosen at build time:** mathematics, the geometry thread. Five fields form a real DAG with two merge points: Euclidean Geometry → Non-Euclidean Geometry and Differential Geometry of Surfaces → Riemannian Geometry (both as parents) → Geometric Topology (Riemannian and Non-Euclidean as parents). It was chosen because Euclid's fifth postulate is a clean "what forced the split" story, and because the thread ends at live open problems (the smooth 4D Poincaré conjecture, the volume conjecture).

**Depth phase, first step (done):** the geometry thread widened to seven fields. Algebraic Topology branches from Euclidean Geometry via Euler's polyhedron formula and becomes Geometric Topology's third parent. Geometric Analysis branches from Riemannian Geometry and Differential Geometry of Surfaces. A second step added a branch through perspective: Projective Geometry (from Euclidean Geometry) and Algebraic Geometry (from Projective Geometry and Algebraic Topology), bringing the thread to nine fields. 
**Width phase, first step (done):** physics is surveyed as the Relativity Thread, five fields. Classical Mechanics and Electromagnetism are two roots, and Special Relativity is born at their seam. General Relativity draws on Special Relativity and Newtonian gravity, and Physical Cosmology grows from General Relativity. Biology followed as the Heredity Thread, five fields. Evolutionary Biology and Genetics are two roots, and Population Genetics (the Modern Synthesis) is born at their seam. Molecular Biology branches from Genetics, and Genomics joins Molecular Biology and Population Genetics. All three v1 domains are now surveyed.

**Cross-domain view, first slice (done):** an application in one domain can name the field it lands in (`field_id`), and that field lists it under "Draws on other domains". Riemannian Geometry → General Relativity, hyperbolic geometry → Special Relativity, and geometric topology → Physical Cosmology are the first links. **Second thread in mathematics (done):** the Number Theory Thread, five fields. Elementary Number Theory branches from Euclidean Geometry, since *Elements* Books VII–IX are number theory. Analytic and Algebraic Number Theory branch from it; the second was forced into existence by the 1847 collapse of Lamé's Fermat proof, which is this PRD's own motivating example. Arithmetic Geometry joins both with Algebraic Geometry from the geometry thread, and Public-Key Cryptography grows from Elementary Number Theory and Arithmetic Geometry. Each thread is drawn as its own map on the domain page. Lineage that crosses threads is shown in the field's label column as "↖ from …" and "↘ into …" rows linking to the other map.

**Third thread in mathematics (done):** the Analysis Thread, five fields. Calculus branches from Euclidean Geometry. Fourier Analysis and Complex Analysis branch from Calculus. Real Analysis has Calculus and Fourier Analysis as parents, since questions about Fourier series forced the rigour. Probability Theory rests on Calculus and Real Analysis (Kolmogorov's measure-theoretic axioms). Cross-thread parents: Calculus feeds Differential Geometry, and Complex Analysis feeds Analytic Number Theory.

**Fourth thread in mathematics (done):** the Foundations Thread, five fields. Mathematical Logic is the root. Set Theory joins it with Real Analysis (via Cantor). Metamathematics has Logic and Set Theory as parents, with Hilbert's programme and Gödel's incompleteness. Computability Theory and then Computational Complexity follow. Complexity feeds Public-Key Cryptography across threads.

**Fifth thread in mathematics (done):** the Algebra Thread, five fields. Theory of Equations is the root. Galois Theory follows. Group Theory has Galois Theory and Non-Euclidean Geometry (Klein's Erlangen programme) as parents. Abstract Algebra has Group Theory and Algebraic Number Theory (Dedekind's ideals) as parents, and Representation Theory has Group Theory and Abstract Algebra. Theory of Equations also feeds Complex Analysis across threads.

**Cross-domain view (done):** the Crossings page (`/crossings/`) joins all three domains. A diagram shows each direction of crossing, solid where it lands in a surveyed field and dashed where it reaches unmapped ground. A ledger lists every linked crossing, and a "Reaching past the survey" list shows the seeds. It is a join over the shared applications collection, as the shared-schema decision intended. Remaining from "v2 / later": the "toolkit" view, and widening each domain beyond its pilot thread.

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

Added in the depth phase, to help readers who meet a field for the first time:
- **In brief**: a plain-language orientation of one or two paragraphs, placed before the chapters.
- **Key ideas**: a short glossary of the field's core concepts, each linked to the turning point where it entered.
- **Where it is used**: applications outside the field, each with a source. Uses that land in physics or biology are tagged with that domain, as early seeds of the cross-domain view.
- **Further reading**: a few books, each with a one-line note on who it is for.

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
