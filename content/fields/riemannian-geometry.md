---
id: riemannian-geometry
domain: math
name: Riemannian Geometry
parent_ids:
  - differential-geometry
  - non-euclidean-geometry
era_emerged: "1854"
core_question: What is geometry when a space is known only from the inside, in any number of dimensions?

turning_points:
  - id: riemann-habilitation
    date: 1854 (published 1868)
    type: REFORMULATION
    title: Riemann's lecture "On the hypotheses which lie at the foundations of geometry"
    description: >-
      In his qualifying lecture at Göttingen, with Gauss in the audience, Bernhard Riemann
      defines an $n$-dimensional manifold together with a rule for measuring length at
      every point. Gauss's intrinsic surface theory and the new non-Euclidean geometries
      both become special cases of one framework. The lecture was published only after
      Riemann's death.
    contested: false
    sources:
      - citation: "Riemann, B. (1868). Über die Hypothesen, welche der Geometrie zu Grunde liegen. Abhandlungen der Königlichen Gesellschaft der Wissenschaften zu Göttingen 13: 133–152."
        url: null

  - id: ricci-levi-civita
    date: "1900"
    type: REFORMULATION
    title: The absolute differential calculus
    description: >-
      Gregorio Ricci-Curbastro and his student Tullio Levi-Civita publish a systematic
      calculus of tensors: quantities whose meaning does not depend on the choice of
      coordinates. Riemann's ideas, sketched with almost no formulas, become a working
      toolkit. Fifteen years later it would be the language of general relativity.
    contested: false
    sources:
      - citation: "Ricci, G. & Levi-Civita, T. (1900). Méthodes de calcul différentiel absolu et leurs applications. Mathematische Annalen 54: 125–201."
        url: null

  - id: nash-embedding
    date: "1956"
    type: PROOF
    title: Nash proves every Riemannian manifold fits in some Euclidean space
    description: >-
      John Nash proves that any Riemannian manifold can be placed inside a flat Euclidean
      space of high enough dimension, with every length preserved. The abstract intrinsic
      viewpoint and the concrete picture of a shape sitting in space describe exactly the
      same set of objects.
    contested: false
    sources:
      - citation: "Nash, J. (1956). The imbedding problem for Riemannian manifolds. Annals of Mathematics 63(1): 20–63."
        url: null

  - id: hamilton-ricci-flow
    date: "1982"
    type: PROOF
    title: Hamilton introduces the Ricci flow
    description: >-
      Richard Hamilton evolves a metric by $\partial_t g_{ij} = -2R_{ij}$, an equation that
      spreads curvature out the way heat spreads out in a metal plate. He uses it to prove
      that any closed three-manifold with positive Ricci curvature is a quotient of the
      three-sphere. That opened a route from curvature to topology that Perelman would
      later complete.
    contested: false
    sources:
      - citation: "Hamilton, R. S. (1982). Three-manifolds with positive Ricci curvature. Journal of Differential Geometry 17(2): 255–306."
        url: null

open_problems:
  - id: hopf-conjecture
    name: The Hopf conjecture on $S^2 \times S^2$
    status: open
    status_note: Open as of writing.
    description: >-
      Heinz Hopf asked in the 1930s whether $S^2 \times S^2$, the product of two ordinary
      spheres, can be given a metric of strictly positive sectional curvature. That would
      mean it curves "like a sphere" in every two-dimensional direction at every point.
      The obvious product metric fails: planes that mix the two factors have curvature
      exactly zero.
    why_hard: >-
      Very few compact spaces with positive curvature are known at all, and almost no
      general methods produce new ones. Small perturbations of the product metric cannot
      make every mixed plane positive at once. At the same time, no known obstruction
      rules it out, because the space passes every test anyone has thought of.
    unlocks: >-
      Either answer would sharpen what positive curvature forces on the shape of a space,
      one of the central themes of the field. A "no" would supply a new obstruction. A
      "yes" would supply a new construction method, and possibly many new examples.
    sources:
      - citation: "Berger, M. (2003). A Panoramic View of Riemannian Geometry. Springer."
        url: null
---

## A Lecture at the Seam

On 10 June 1854, the young {{fig:riemann|Bernhard Riemann}} gave the qualifying lecture that would let him teach at Göttingen. Candidates proposed three topics and the faculty chose one. Gauss, then 76, skipped the two safe topics and picked the third: the foundations of geometry.

Riemann's answer used almost no formulas. A space, he proposed, is a *manifold* of any number of dimensions, and its geometry is given by a rule for measuring small lengths at each point:

$$
ds^2 = \sum_{i,j} g_{ij}(x)\,dx^i\,dx^j .
$$

This is exactly Gauss's first fundamental form, freed from surfaces and from two dimensions. It is also free of any surrounding space: the metric $g_{ij}$ is all there is. From it, Riemann defined a curvature at every point and in every two-dimensional direction.

This is why the field has two parents. From [differential geometry](/math/differential-geometry/) it took the intrinsic viewpoint: geometry measured from inside. From [non-Euclidean geometry](/math/non-euclidean-geometry/) it took the lesson that flatness is a choice, not a law. Spaces of constant curvature cover all three classical geometries in one family: zero curvature for Euclid, positive for the sphere, negative for Lobachevsky and Bolyai. Riemann even suggested that the geometry of physical space was a question for physics.

The lecture was published only in 1868, two years after his death. By then Beltrami had shown hyperbolic geometry to be consistent, and readers were ready for it.

## The Calculus of Tensors

Riemann's sketch needed machinery. Elwin Christoffel supplied part of it in 1869. {{fig:ricci-curbastro|Gregorio Ricci-Curbastro}} and {{fig:levi-civita|Tullio Levi-Civita}} supplied the rest in 1900, with their *absolute differential calculus*, now called tensor calculus. It makes it possible to write geometric statements that remain true whatever coordinates are chosen. In 1917 Levi-Civita added *parallel transport*: a way of carrying a direction along a curve in a curved space.

The payoff arrived from outside mathematics. Einstein spent years learning this calculus, with help from his friend Marcel Grossmann, to write general relativity (1915). In it, gravity *is* the curvature of a four-dimensional Riemannian-type spacetime. That link between a mathematical turning point and a physical one is exactly the kind of connection this atlas will draw once physics is surveyed.

## Curvature and Shape

The twentieth century asked how local curvature constrains global shape. If a space is positively curved everywhere, must it be small and closed, like a sphere? If it is negatively curved, must it be large and open? Theorems of this kind, from Hopf, Myers, Cartan and Hadamard onward, made up *comparison geometry*.

Two results changed the field's footing. In 1956 {{fig:nash|John Nash}} proved that every Riemannian manifold can be placed isometrically in some Euclidean space. Riemann's abstraction had lost nothing, since every intrinsic geometry does occur on some concrete shape, in enough dimensions. In 1982 {{fig:hamilton|Richard Hamilton}} introduced the Ricci flow:

$$
\frac{\partial g_{ij}}{\partial t} = -2R_{ij} .
$$

It lets a metric evolve over time, smoothing out its bumps the way heat flow evens out temperature. Hamilton's hope was that any three-dimensional space would flow toward a perfectly uniform geometry, which would reveal its topology. The flow could develop singularities, places where it pinches and breaks down, and getting past them took another twenty years. That story continues in [geometric topology](/math/geometric-topology/).
