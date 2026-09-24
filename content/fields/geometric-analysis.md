---
id: geometric-analysis
domain: math
thread: geometry
name: Geometric Analysis
parent_ids:
  - riemannian-geometry
  - differential-geometry
era_emerged: 1930s – 1970s
core_question: What can the solutions of differential equations reveal about the shape of a curved space?

summary: |-
  Geometric analysis proves things about shapes by solving differential equations on them. Instead of constructing a special surface or metric by hand, you write down the equation it must satisfy (zero mean curvature, prescribed Ricci curvature) and prove that a solution exists.

  The hard part is almost always controlling how solutions can fail: blowing up, pinching, bubbling off. The approach reaches from soap films to black holes, and it supplied the tool that finally proved the Poincaré conjecture.

key_ideas:
  - term: Minimal surface
    definition: >-
      A surface with zero mean curvature, $H = 0$: any small patch has the least area
      its boundary allows, like a soap film. Globally it may only be a saddle point of
      area rather than a minimum.
    turning_point_id: plateau-problem-solved
  - term: Variational method
    definition: >-
      Find a geometric object as the minimiser (or critical point) of an energy: area,
      length, bending. Existence then becomes a question of whether minimising sequences
      converge.
    turning_point_id: plateau-problem-solved
  - term: Nonlinear PDE on a manifold
    definition: >-
      An equation whose unknown is a function or metric on a curved space, like the
      complex Monge–Ampère equation behind Calabi–Yau metrics. Nonlinearity is what
      makes existence hard and interesting.
    turning_point_id: calabi-yau
  - term: Bubbling
    definition: >-
      When a sequence of solutions fails to converge, energy can concentrate at points
      and split off as small spheres. Understanding bubbles is how the field controls
      what can go wrong.
    turning_point_id: sacks-uhlenbeck-bubbling
  - term: Min–max
    definition: >-
      Find saddle-point solutions by sweeping out a space with a family of surfaces and
      taking the largest area at the best possible sweep. It finds minimal surfaces that
      minimisation cannot.
    turning_point_id: yau-conjecture-minimal-surfaces

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

  - id: sacks-uhlenbeck-bubbling
    date: "1981"
    type: PROOF
    title: Sacks and Uhlenbeck tame the bubbles
    description: >-
      Jonathan Sacks and Karen Uhlenbeck prove the existence of minimal spheres by
      perturbing the energy, and analyse exactly how the limit can fail: energy
      concentrates at finitely many points and "bubbles" off as whole spheres. This
      bubbling analysis became a basic technique of geometric analysis and gauge theory.
      Uhlenbeck's work in this area was cited in her 2019 Abel Prize.
    contested: false
    sources:
      - citation: "Sacks, J. & Uhlenbeck, K. (1981). The existence of minimal immersions of 2-spheres. Annals of Mathematics 113(1): 1–24."
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
    status_note: Proved in the time-symmetric (Riemannian) case in 1997–2001. The general case is open.
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
      in general relativity. It is a natural cross-domain link between this atlas's
      mathematics and physics surveys.
    sources:
      - citation: "Huisken, G. & Ilmanen, T. (2001). The inverse mean curvature flow and the Riemannian Penrose inequality. Journal of Differential Geometry 59(3): 353–437."
        url: null
      - citation: "Bray, H. L. (2001). Proof of the Riemannian Penrose inequality using the positive mass theorem. Journal of Differential Geometry 59(2): 177–267."
        url: null
      - citation: "Mars, M. (2009). Present status of the Penrose inequality. Classical and Quantum Gravity 26: 193001."
        url: null

applications:
  - area: Architecture
    title: Soap-film roofs
    description: >-
      Frei Otto designed lightweight tensile roofs by physically form-finding with soap
      films and cable nets. The canopies of the 1972 Munich Olympic Park came out of
      that practice. Minimal surfaces spread load evenly, so they need little material.
      Engineers now compute such forms numerically.
    sources:
      - citation: "Otto, F. & Rasch, B. (1995). Finding Form: Towards an Architecture of the Minimal. Edition Axel Menges."
        url: null
  - area: String theory
    title: Calabi–Yau manifolds as hidden dimensions
    description: >-
      Superstring theory needs six extra dimensions, curled up too small to see. In 1985
      Candelas, Horowitz, Strominger and Witten showed that the right shapes for them are
      Calabi–Yau manifolds, whose existence rests on Yau's theorem. Much of the
      interaction between geometry and physics since then has run through them.
    domain: physics
    sources:
      - citation: "Candelas, P., Horowitz, G. T., Strominger, A. & Witten, E. (1985). Vacuum configurations for superstrings. Nuclear Physics B 258: 46–74."
        url: null
  - area: Image analysis
    title: Curvature flows that find outlines
    description: >-
      Letting a curve move by its own curvature smooths it, a one-dimensional cousin of
      the curvature flows of this field. *Geodesic active contours* use such flows to snap an outline onto the
      boundary of an object in an image, a standard tool in medical image segmentation.
    sources:
      - citation: "Caselles, V., Kimmel, R. & Sapiro, G. (1997). Geodesic active contours. International Journal of Computer Vision 22(1): 61–79."
        url: null

further_reading:
  - citation: "Yau, S.-T. & Nadis, S. (2010). The Shape of Inner Space: String Theory and the Geometry of the Universe's Hidden Dimensions. Basic Books."
    url: null
    note: Yau's own popular account of the Calabi conjecture and its afterlife in physics.
  - citation: "Colding, T. H. & Minicozzi, W. P. (2011). A Course in Minimal Surfaces. American Mathematical Society."
    url: null
    note: A graduate introduction to minimal surfaces, from the classical theory to modern results.
  - citation: "Schoen, R. & Yau, S.-T. (1994). Lectures on Differential Geometry. International Press."
    url: null
    note: Lectures by two of the field's founders. Advanced, and close to the source.
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

a fully nonlinear equation whose solution *is* the new metric. The manifolds this produced, now called Calabi–Yau manifolds, would within a decade become the extra dimensions of string theory.

Solving such equations means controlling how solutions can fail. In 1981 {{fig:sacks|Jonathan Sacks}} and {{fig:uhlenbeck|Karen Uhlenbeck}} showed what happens when a sequence of approximate minimal spheres does not converge. The energy concentrates at a few points and splits off as small spheres, or "bubbles." Once the bubbles are accounted for, nothing else can go wrong. Tracking bubbles became the standard way to take limits of geometric equations, from harmonic maps to the gauge theories Simon Donaldson used to probe dimension four.

## Gravity as Geometry

In 1979 {{fig:schoen|Richard Schoen}} and Yau proved the *positive mass theorem*. In general relativity, the total mass of an isolated system, measured from far away, cannot be negative. Physicists expected this but could not prove it. Schoen and Yau reduced it to a question about minimal surfaces in curved three-dimensional space and solved that. Edward Witten gave an independent proof in 1981 with methods from quantum field theory.

This is the field's recurring pattern. A statement that sounds physical is really a statement about curvature, and the right equation proves it. Hamilton's Ricci flow, which grew up alongside this field, followed the same philosophy all the way to Perelman's proof of the Poincaré conjecture in [geometric topology](/math/geometric-topology/).

## A Closer Look: Why a Soap Film Has Zero Mean Curvature

A soap film is a physical minimisation problem that turns into a differential equation. Surface tension $\gamma$ pulls the film to reduce its area, and the pressure difference across a curved film is given by the Young–Laplace law,

$$
\Delta P = 2\gamma H ,
$$

where $H$ is the mean curvature, the average of the two principal curvatures. That is for a single surface. A soap film has two, which doubles the jump. A soap *bubble* holds higher pressure inside, so it curves with $H > 0$ and becomes a sphere. A film spanning a wire loop has the same air pressure on both sides, so $\Delta P = 0$, which forces $H = 0$ everywhere. The film bends one way in one direction and equally the other way in the perpendicular direction, like a saddle.

The same equation comes from calculus. Push a surface slightly in the normal direction by an amount $\varphi$. The area changes, to first order, by

$$
\frac{d}{dt}\text{Area} = -\int H\,\varphi\,dA
$$

(up to a convention factor). A surface of least area cannot decrease under any small push, so $H$ must vanish. Minimal surfaces are exactly the critical points of area.

Dip two parallel rings into soapy water and pull them apart, and the film between them forms a *catenoid*, the surface made by spinning the curve $y = a\cosh(x/a)$. Pull the rings too far apart and the catenoid snaps into two flat discs: beyond a critical distance, no catenoid spans the rings at all. Deciding when solutions exist and when they break down is the central work of geometric analysis.

## The Min-Max Revival

Minimal surfaces returned to the centre after 2012. The methods {{fig:marques|Fernando Codá Marques}} and {{fig:neves|André Neves}} revived to prove the Willmore conjecture could find minimal surfaces that are *not* area-minimising: saddle points of area rather than minima. Within six years they, together with Kei Irie, and then {{fig:song|Antoine Song}} had proved Yau's 1982 conjecture that every closed three-manifold contains infinitely many of them.

The open questions now sit at the two edges of the field: pure spectral geometry, where Yau's eigenvalue conjecture still stands, and general relativity, where the full Penrose inequality waits for the right flow.
