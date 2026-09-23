---
id: geometric-analysis
domain: math
name: Geometric Analysis
parent_ids:
  - riemannian-geometry
  - differential-geometry
era_emerged: 1930s – 1970s
core_question: What can the solutions of differential equations reveal about the shape of a curved space?

turning_points:
  - id: plateau-problem-solved
    date: 1930 – 1931
    type: PROOF
    title: The Plateau problem is solved
    description: >-
      Given any closed wire loop in space, is there a soap film spanning it, a surface of
      least area with that loop as its boundary? The Belgian physicist Joseph Plateau had
      shown experimentally in the nineteenth century that there always seemed to be. Tibor
      Radó (1930) and Jesse Douglas (1931) proved it, turning an existence question about
      surfaces into one about minimizing an energy.
    contested: true
    contested_note: >-
      Credit is divided. Radó and Douglas worked independently, by different methods, and
      their papers appeared within months of each other. Douglas's solution was more general and won him one of the first two
      Fields Medals in 1936. How to weigh their contributions, and which approach was more
      decisive, was disputed at the time and is still judged differently today.
    sources:
      - citation: "Radó, T. (1930). On Plateau's problem. Annals of Mathematics 31(3): 457–469."
        url: null
      - citation: "Douglas, J. (1931). Solution of the problem of Plateau. Transactions of the AMS 33(1): 263–321."
        url: null

  - id: calabi-yau
    date: 1976 – 1978
    type: PROOF
    title: Yau proves the Calabi conjecture
    description: >-
      Eugenio Calabi conjectured in the 1950s that certain complex manifolds admit metrics
      with any prescribed Ricci curvature. Shing-Tung Yau proved it by solving a fully
      nonlinear partial differential equation, the complex Monge–Ampère equation, on a
      compact manifold. The resulting Calabi–Yau manifolds later became central in string
      theory: a mathematical turning point with a physics aftershock.
    contested: false
    sources:
      - citation: "Yau, S.-T. (1978). On the Ricci curvature of a compact Kähler manifold and the complex Monge–Ampère equation, I. Communications on Pure and Applied Mathematics 31(3): 339–411."
        url: null

  - id: positive-mass-theorem
    date: "1979"
    type: PROOF
    title: The positive mass theorem
    description: >-
      Richard Schoen and Shing-Tung Yau prove, using minimal surfaces, that an isolated
      gravitating system in general relativity cannot have negative total mass. Edward
      Witten gave a second proof in 1981 using spinors. A physical statement about
      gravity turned out to be a theorem about the geometry of curved three-dimensional
      spaces.
    contested: false
    sources:
      - citation: "Schoen, R. & Yau, S.-T. (1979). On the proof of the positive mass conjecture in general relativity. Communications in Mathematical Physics 65: 45–76."
        url: null
      - citation: "Witten, E. (1981). A new proof of the positive energy theorem. Communications in Mathematical Physics 80: 381–402."
        url: null

  - id: yau-conjecture-minimal-surfaces
    date: 2017 – 2018
    type: PROOF
    title: Infinitely many minimal surfaces in every closed 3-manifold
    description: >-
      Yau had conjectured in 1982 that every closed three-dimensional manifold contains
      infinitely many minimal surfaces. Using the min-max methods revived for the
      Willmore conjecture, Irie, Marques and Neves proved it for generic metrics. Antoine
      Song then proved it for every metric.
    contested: false
    sources:
      - citation: "Irie, K., Marques, F. C. & Neves, A. (2018). Density of minimal hypersurfaces for generic metrics. Annals of Mathematics 187(3): 963–972."
        url: null
      - citation: "Song, A. (2023). Existence of infinitely many minimal hypersurfaces in closed manifolds. Annals of Mathematics 197(3): 859–895."
        url: null

open_problems:
  - id: yau-first-eigenvalue
    name: Yau's first eigenvalue conjecture
    status: open
    status_note: Open in general. Proved for some classes of minimal hypersurfaces with extra symmetry.
    description: >-
      Take a closed minimal hypersurface sitting smoothly inside the round unit sphere
      $S^{n+1}$. Yau conjectured in 1982 that the first nonzero eigenvalue of its
      Laplacian, the lowest frequency at which it can vibrate, is always exactly $n$.
    why_hard: >-
      The value $n$ is easy to reach: the coordinate functions of the sphere always
      vibrate at that frequency. The difficulty is ruling out anything lower, which needs
      control over every possible minimal hypersurface at once. Known proofs rely on
      symmetry (reflection-invariant surfaces, isoparametric hypersurfaces) that general
      minimal surfaces do not have.
    unlocks: >-
      It would give a clean spectral characterisation of minimal surfaces in spheres,
      with consequences for how their area and topology are bounded. It would also be a
      rare case of a sharp eigenvalue identity holding for a whole class of geometric
      objects rather than a single example.
    sources:
      - citation: "Yau, S.-T. (1982). Problem section. In Seminar on Differential Geometry, Annals of Mathematics Studies 102. Princeton University Press."
        url: null

  - id: penrose-inequality
    name: The Penrose inequality
    status: conjectured
    status_note: Proved in the time-symmetric (Riemannian) case in 1997–2001; the general case is open.
    description: >-
      Roger Penrose argued in 1973 that the total mass $m$ of a spacetime containing
      black holes must be at least what the black holes' horizons account for:
      $m \ge \sqrt{A / 16\pi}$, where $A$ is the horizon area. It sharpens the positive
      mass theorem.
    why_hard: >-
      The special case where time plays no role was proved by Huisken and Ilmanen (one
      black hole) and by Bray (any number), using two quite different geometric flows. In
      a general dynamical spacetime, even defining the right horizon and flow is subtle,
      and neither method is known to extend.
    unlocks: >-
      A proof would support the cosmic censorship picture of gravitational collapse, the
      idea that singularities stay hidden behind horizons, one of the main open questions
      in general relativity. It is a natural future cross-domain link between this atlas's
      mathematics and physics surveys.
    sources:
      - citation: "Huisken, G. & Ilmanen, T. (2001). The inverse mean curvature flow and the Riemannian Penrose inequality. Journal of Differential Geometry 59(3): 353–437."
        url: null
      - citation: "Bray, H. L. (2001). Proof of the Riemannian Penrose inequality using the positive mass theorem. Journal of Differential Geometry 59(2): 177–267."
        url: null
      - citation: "Mars, M. (2009). Present status of the Penrose inequality. Classical and Quantum Gravity 26: 193001."
        url: null
---

## Soap Films

Dip a bent wire loop into soapy water and a film forms across it. Surface tension pulls it to the smallest area the wire allows. The Belgian physicist Joseph Plateau spent decades in the nineteenth century documenting such films, and his question became a mathematical one: does *every* closed curve bound a surface of least area?

This is where differential geometry meets analysis. A surface of least area has zero *mean curvature* at every point, $H = 0$, which is a partial differential equation. Asking whether it has a solution with prescribed boundary is asking whether a certain energy has a minimiser. {{fig:rado|Tibor Radó}} (1930) and {{fig:douglas|Jesse Douglas}} (1931) independently proved that it always does. Douglas received one of the first two Fields Medals for it. The question of how to divide the credit between them has never quite gone away.

The field's parents are visible in that problem. From [differential geometry of surfaces](/math/differential-geometry/) came curvature and minimal surfaces. From [Riemannian geometry](/math/riemannian-geometry/) came the setting of arbitrary curved spaces. What was new was the method: prove a shape exists by solving an equation.

## Curvature from Equations

The field got its name and its confidence in the 1970s, largely through {{fig:yau|Shing-Tung Yau}} and his collaborators. Eugenio Calabi had conjectured in the 1950s that certain complex manifolds could be given metrics with any prescribed Ricci curvature. In 1976 Yau proved it by solving the complex Monge–Ampère equation,

$$
\det\!\left( g_{i\bar{j}} + \partial_i \partial_{\bar{j}} \varphi \right) = e^{F} \det\!\left( g_{i\bar{j}} \right),
$$

a fully nonlinear equation whose solution *is* the new metric. The manifolds this produced, now called Calabi–Yau manifolds, would two decades later become the extra dimensions of string theory.

## Gravity as Geometry

In 1979 {{fig:schoen|Richard Schoen}} and Yau proved the *positive mass theorem*. In general relativity, the total mass of an isolated system, measured from far away, cannot be negative. Physicists expected this but could not prove it. Schoen and Yau reduced it to a question about minimal surfaces in curved three-dimensional space and solved that. Edward Witten gave an independent proof in 1981 with methods from quantum field theory.

This is the field's recurring pattern. A statement that sounds physical is really a statement about curvature, and the right equation proves it. Hamilton's Ricci flow, which grew up alongside this field, followed the same philosophy all the way to Perelman's proof of the Poincaré conjecture in [geometric topology](/math/geometric-topology/).

## The Min-Max Revival

Minimal surfaces returned to the centre after 2012. The methods {{fig:marques|Fernando Codá Marques}} and {{fig:neves|André Neves}} revived to prove the Willmore conjecture could find minimal surfaces that are *not* area-minimising: saddle points of area rather than minima. Within six years they, together with Kei Irie, and then {{fig:song|Antoine Song}} had proved Yau's 1982 conjecture that every closed three-manifold contains infinitely many of them.

The open questions now sit at the two edges of the field: pure spectral geometry, where Yau's eigenvalue conjecture still stands, and general relativity, where the full Penrose inequality waits for the right flow.
