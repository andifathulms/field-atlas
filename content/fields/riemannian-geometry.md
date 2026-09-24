---
id: riemannian-geometry
domain: math
thread: geometry
name: Riemannian Geometry
parent_ids:
  - differential-geometry
  - non-euclidean-geometry
era_emerged: "1854"
core_question: What is geometry when a space is known only from the inside, in any number of dimensions?

summary: |-
  Riemannian geometry studies spaces of any number of dimensions that are curved from the inside, with no surrounding space for them to bend in. A space is given only by a rule for measuring tiny distances at each point. Everything else (straight lines, angles, areas, curvature) is derived from that rule.

  It is the geometry of Einstein's gravity, where spacetime itself is curved, and it is the common setting for most of modern geometry. Euclid's flat space, the sphere and the hyperbolic plane all become special cases of one framework.

key_ideas:
  - term: Manifold
    definition: >-
      A space that looks like ordinary $\mathbb{R}^n$ up close but may be curved or
      closed up overall, the way the Earth's surface looks flat locally.
    turning_point_id: riemann-habilitation
  - term: Metric
    definition: >-
      The rule $ds^2 = \sum g_{ij}\,dx^i dx^j$ for measuring small lengths at each point.
      A Riemannian manifold is a manifold together with a metric, and all of its
      geometry flows from $g_{ij}$.
    turning_point_id: riemann-habilitation
  - term: Parallel transport
    definition: >-
      A way of carrying a direction along a path without turning it. Around a closed
      loop in a curved space, it comes back rotated, and that rotation is what curvature
      *is*.
    turning_point_id: levi-civita-parallel
  - term: Sectional curvature
    definition: >-
      The Gaussian curvature of a two-dimensional slice through a point. In higher
      dimensions, curvature is a whole family of numbers, one for each such slice.
  - term: Ricci curvature
    definition: >-
      An average of sectional curvatures, measuring how the volume of a small ball
      deviates from flat space. It is the curvature in Einstein's field equations, and
      the one that Ricci flow evolves.
    turning_point_id: ricci-levi-civita

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

  - id: levi-civita-parallel
    date: "1917"
    type: REFORMULATION
    title: Levi-Civita introduces parallel transport
    description: >-
      Tullio Levi-Civita gives Riemann's curvature a geometric meaning. Carry a vector
      around a closed loop, keeping it "as parallel as possible" at each step, and in a
      curved space it returns rotated. The amount of rotation per unit of enclosed area
      is the curvature. Connections, the modern language of both geometry and gauge
      physics, grow from this idea.
    contested: false
    sources:
      - citation: "Levi-Civita, T. (1917). Nozione di parallelismo in una varietà qualunque e conseguente specificazione geometrica della curvatura riemanniana. Rendiconti del Circolo Matematico di Palermo 42: 173–205."
        url: null

  - id: myers-theorem
    date: "1941"
    type: PROOF
    title: Positive curvature forces a space to close up
    description: >-
      Sumner Myers proves that a complete Riemannian manifold whose Ricci curvature is
      bounded below by a positive constant must be compact, with a bounded diameter and a
      finite fundamental group. A local inequality, checked point by point, dictates the
      global shape. It is a founding result of comparison geometry.
    contested: false
    sources:
      - citation: "Myers, S. B. (1941). Riemannian manifolds with positive mean curvature. Duke Mathematical Journal 8(2): 401–404."
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

applications:
  - area: Relativity and GPS
    title: Gravity is curvature, and satellites notice
    description: >-
      General relativity describes gravity as the curvature of a four-dimensional
      spacetime with a Riemannian-type metric. It is not only theory. GPS satellite
      clocks run about 38 microseconds per day fast relative to clocks on the ground:
      roughly +45 from weaker gravity, minus 7 from orbital speed. Without correcting
      for it, positions would drift by kilometres within a day.
    domain: physics
    field_id: general-relativity
    sources:
      - citation: "Ashby, N. (2003). Relativity in the Global Positioning System. Living Reviews in Relativity 6: 1."
        url: https://doi.org/10.12942/lrr-2003-1
  - area: Machine learning
    title: Information geometry and the natural gradient
    description: >-
      The set of all probability distributions in a statistical model forms a manifold,
      with a natural Riemannian metric (the Fisher information). Following gradients in
      that metric rather than in flat coordinates, the *natural gradient*, makes
      learning algorithms insensitive to how a model happens to be parametrised.
    sources:
      - citation: "Amari, S. (1998). Natural gradient works efficiently in learning. Neural Computation 10(2): 251–276."
        url: null
  - area: Medical imaging
    title: Averaging diffusion tensors in brain scans
    description: >-
      Diffusion tensor MRI records, at every point of the brain, a positive-definite
      matrix describing how water diffuses along nerve fibres. Those matrices form a
      curved space. Averaging or interpolating them with a Riemannian metric instead of
      naively avoids artefacts and keeps them physically valid.
    domain: biology
    sources:
      - citation: "Pennec, X., Fillard, P. & Ayache, N. (2006). A Riemannian framework for tensor computing. International Journal of Computer Vision 66(1): 41–66."
        url: null

further_reading:
  - citation: "Lee, J. M. (2018). Introduction to Riemannian Manifolds (2nd ed.). Springer."
    url: null
    note: A clear modern textbook, from the definitions through the major comparison theorems.
  - citation: "do Carmo, M. P. (1992). Riemannian Geometry. Birkhäuser."
    url: null
    note: A compact classic, the natural sequel to do Carmo's book on curves and surfaces.
  - citation: "Berger, M. (2003). A Panoramic View of Riemannian Geometry. Springer."
    url: null
    note: A survey of the whole field's landscape, results and open problems, with few proofs. Best for orientation.
---

## A Lecture at the Seam

On 10 June 1854, the young {{fig:riemann|Bernhard Riemann}} gave the qualifying lecture that would let him teach at Göttingen. Candidates proposed three topics and the faculty chose one. Gauss, then 77, skipped the two safe topics and picked the third: the foundations of geometry.

Riemann's answer used almost no formulas. A space, he proposed, is a *manifold* of any number of dimensions, and its geometry is given by a rule for measuring small lengths at each point:

$$
ds^2 = \sum_{i,j} g_{ij}(x)\,dx^i\,dx^j .
$$

This is exactly Gauss's first fundamental form, freed from surfaces and from two dimensions. It is also free of any surrounding space: the metric $g_{ij}$ is all there is. From it, Riemann defined a curvature at every point and in every two-dimensional direction.

This is why the field has two parents. From [differential geometry](/math/differential-geometry/) it took the intrinsic viewpoint: geometry measured from inside. From [non-Euclidean geometry](/math/non-euclidean-geometry/) it took the lesson that flatness is a choice, not a law. Spaces of constant curvature cover all three classical geometries in one family: zero curvature for Euclid, positive for the sphere, negative for Lobachevsky and Bolyai. Riemann even suggested that the geometry of physical space was a question for physics.

The lecture was published only in 1868, two years after his death. By then Beltrami had shown hyperbolic geometry to be consistent, and readers were ready for it.

## The Calculus of Tensors

Riemann's sketch needed machinery. Elwin Christoffel supplied part of it in 1869. {{fig:ricci-curbastro|Gregorio Ricci-Curbastro}} and {{fig:levi-civita|Tullio Levi-Civita}} supplied the rest in 1900, with their *absolute differential calculus*, now called tensor calculus. It makes it possible to write geometric statements that remain true whatever coordinates are chosen. In 1917 {{fig:levi-civita|Levi-Civita}} added *parallel transport*: a way of carrying a direction along a curve in a curved space.

The payoff arrived from outside mathematics. Einstein spent years learning this calculus, with help from his friend Marcel Grossmann, to write general relativity (1915). In it, gravity *is* the curvature of a four-dimensional Riemannian-type spacetime. That link between a mathematical turning point and a physical one is exactly the kind of connection this atlas draws between its maths and physics maps.

## A Closer Look: An Arrow That Comes Back Rotated

Curvature in any dimension can be detected by *parallel transport*, carrying a direction along a path without ever turning it. Try it on a sphere of radius $R$.

Stand at the North Pole holding an arrow pointing along a line of longitude towards Africa. Walk straight down that meridian to the equator, keeping the arrow pointing "south", straight ahead. At the equator turn left and walk a quarter of the way round the globe, not rotating the arrow at all: it now points sideways, perpendicular to your path. Then walk straight back up to the pole along the new meridian. The arrow never turned, yet at the pole it points in a direction $90°$ away from where it started.

The rotation measures the curvature enclosed by the loop. The triangle you walked covers one eighth of the sphere, an area of $\frac{4\pi R^2}{8} = \frac{\pi R^2}{2}$, and

$$
\text{rotation angle} = K \times \text{Area} = \frac{1}{R^2} \cdot \frac{\pi R^2}{2} = \frac{\pi}{2} ,
$$

exactly a right angle. On a flat plane the arrow would return unrotated. The same idea works in any dimension and needs no surrounding space. Levi-Civita's parallel transport is how curvature is defined in Riemannian geometry, and in general relativity it is how gravity turns the axis of a gyroscope orbiting the Earth, an effect measured by the Gravity Probe B satellite.

## Curvature and Shape

The twentieth century asked how local curvature constrains global shape. If a space is positively curved everywhere, must it be small and closed, like a sphere? If it is negatively curved, must it be large and open? Theorems of this kind, from Hadamard, Cartan and Hopf onward, made up *comparison geometry*. A landmark came in 1941, when {{fig:myers|Sumner Myers}} proved that a complete space whose Ricci curvature stays above a positive constant must close up on itself, with a bounded diameter, just as a sphere does.

Two results changed the field's footing. In 1956 {{fig:nash|John Nash}} proved that every Riemannian manifold can be placed isometrically in some Euclidean space. Riemann's abstraction had lost nothing, since every intrinsic geometry does occur on some concrete shape, in enough dimensions. In 1982 {{fig:hamilton|Richard Hamilton}} introduced the Ricci flow:

$$
\frac{\partial g_{ij}}{\partial t} = -2R_{ij} .
$$

It lets a metric evolve over time, smoothing out its bumps the way heat flow evens out temperature. Hamilton's hope was that any three-dimensional space would flow toward a perfectly uniform geometry, which would reveal its topology. The flow could develop singularities, places where it pinches and breaks down, and getting past them took another twenty years. That story continues in [geometric topology](/math/geometric-topology/).
