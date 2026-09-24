---
id: differential-geometry
domain: math
thread: geometry
name: Differential Geometry of Surfaces
parent_ids:
  - euclidean-geometry
  - calculus
era_emerged: 18th century – 1820s
core_question: How do you measure the bending of a curve or surface with calculus, and how much of that bending can be detected from inside the surface?

summary: |-
  Differential geometry uses calculus to measure how curves and surfaces bend. A curve's bending is captured by two numbers at each point, and a surface's by two more. Gauss's central discovery was that the *product* of a surface's two curvatures can be measured by a creature living on the surface who never leaves it.

  That split between how a shape bends *in space* and how it is curved *in itself* is the idea everything later in this thread builds on. It is also why no flat map of the Earth can be perfect.

key_ideas:
  - term: Curvature and torsion of a curve
    definition: >-
      Curvature $\kappa$ measures how fast a curve turns ($1/r$ for the best-fitting
      circle). Torsion $\tau$ measures how fast it twists out of its plane. Together
      they determine a space curve completely.
    turning_point_id: frenet-serret
  - term: Principal curvatures
    definition: >-
      At each point of a surface, the largest and smallest bending among all directions,
      $\kappa_1$ and $\kappa_2$. They always occur in perpendicular directions.
    turning_point_id: euler-curvature
  - term: Gaussian curvature
    definition: >-
      $K = \kappa_1\kappa_2$. Positive on a sphere, zero on a cylinder or a flat sheet,
      negative on a saddle. Its sign alone tells you whether small triangles have
      angles summing to more, exactly, or less than $\pi$.
    turning_point_id: theorema-egregium
  - term: Intrinsic vs. extrinsic
    definition: >-
      An *intrinsic* property can be measured from inside the surface, using only
      lengths and angles on it. An *extrinsic* one depends on how the surface sits in
      space. Gaussian curvature is intrinsic, and each principal curvature alone is not.
    turning_point_id: theorema-egregium
  - term: Geodesic
    definition: >-
      The straightest possible path on a surface, which locally is also the shortest.
      Great circles on a sphere are geodesics. They play the role of straight lines in
      the surface's own geometry.
    turning_point_id: gauss-bonnet

turning_points:
  - id: euler-curvature
    date: 1760 (published 1767)
    type: PROOF
    title: Euler finds the two principal curvatures of a surface
    description: >-
      Leonhard Euler studies how a surface curves as you turn in different directions from
      a point. He shows that every direction's curvature is set by just two extreme
      values, $\kappa_1$ and $\kappa_2$:
      $\kappa(\theta) = \kappa_1 \cos^2\theta + \kappa_2 \sin^2\theta$.
      Surface curvature becomes something calculus can measure.
    contested: false
    sources:
      - citation: "Euler, L. (1767). Recherches sur la courbure des surfaces. Mémoires de l'académie des sciences de Berlin 16: 119–143."
        url: null

  - id: theorema-egregium
    date: "1827"
    type: PROOF
    title: The Theorema Egregium — curvature is intrinsic
    description: >-
      Gauss proves that the product $K = \kappa_1 \kappa_2$ can be computed from
      measurements made entirely within the surface: lengths and angles, with no
      reference to the space around it. A creature living on the surface could measure
      its curvature without ever leaving it.
    contested: false
    sources:
      - citation: "Gauss, C. F. (1828). Disquisitiones generales circa superficies curvas. Commentationes Societatis Regiae Scientiarum Gottingensis Recentiores 6. (Presented 1827.)"
        url: null

  - id: frenet-serret
    date: 1847 – 1851
    type: PROOF
    title: The Frenet–Serret formulas describe every space curve
    description: >-
      Jean Frédéric Frenet, in his 1847 thesis, and Joseph Serret, in 1851, independently
      derive the formulas that govern a moving frame along a curve. Two functions,
      curvature $\kappa$ and torsion $\tau$, determine the curve completely up to a rigid
      motion. The theory of curves in space was essentially finished, and surfaces
      became the frontier.
    contested: false
    sources:
      - citation: "Frenet, F. (1852). Sur les courbes à double courbure. Journal de Mathématiques Pures et Appliquées 17: 437–447."
        url: null
      - citation: "Serret, J. A. (1851). Sur quelques formules relatives à la théorie des courbes à double courbure. Journal de Mathématiques Pures et Appliquées 16: 193–207."
        url: null

  - id: gauss-bonnet
    date: "1848"
    type: PROOF
    title: The Gauss–Bonnet theorem ties curvature to angles
    description: >-
      Pierre Ossian Bonnet generalises a result Gauss had proved for triangles made of
      shortest paths. The total curvature inside a region controls how far its angles
      depart from the Euclidean values. Curvature and angle sums are two faces of the
      same quantity, and non-Euclidean geometry is revealed as the geometry of constant
      curvature.
    contested: false
    sources:
      - citation: "Bonnet, O. (1848). Mémoire sur la théorie générale des surfaces. Journal de l'École Polytechnique 19: 1–146."
        url: null

  - id: hilbert-no-hyperbolic-surface
    date: "1901"
    type: PROOF
    title: The full hyperbolic plane does not fit in ordinary space
    description: >-
      Hilbert proves that no complete, smooth surface of constant negative curvature can
      sit inside three-dimensional Euclidean space. Beltrami's pseudosphere can only ever
      show a piece of the hyperbolic plane. The whole thing has to be studied from the
      inside, which is one more push toward Riemann's intrinsic point of view.
    contested: false
    sources:
      - citation: "Hilbert, D. (1901). Über Flächen von konstanter Gaussscher Krümmung. Transactions of the AMS 2(1): 87–99."
        url: null

open_problems:
  - id: willmore-conjecture
    name: The Willmore conjecture
    status: recently_resolved
    status_note: Proved by Fernando Codá Marques and André Neves in 2012; published 2014.
    description: >-
      Thomas Willmore asked in 1965 how little a torus (a doughnut-shaped surface) can
      bend. He measured bending by the total squared mean curvature and conjectured that
      every torus in space has $\int H^2\,dA \ge 2\pi^2$, with the minimum reached by one
      specific torus of revolution.
    why_hard: >-
      The Willmore energy does not change under a large family of transformations, the
      conformal maps, including inversions in spheres. A sequence of tori whose energy
      keeps falling can therefore degenerate in ways that are hard to control. Marques and
      Neves had to revive Almgren–Pitts min-max theory, a decades-old method for finding
      minimal surfaces, to rule every such escape out.
    unlocks: >-
      Its main legacy is the min-max method it brought back. That method soon settled
      Yau's conjecture that every closed three-manifold contains infinitely many minimal
      surfaces (Irie–Marques–Neves for generic metrics; Antoine Song in full).
    sources:
      - citation: "Willmore, T. J. (1965). Note on embedded surfaces. Analele Ştiinţifice ale Universităţii Al. I. Cuza din Iaşi 11B: 493–496."
        url: null
      - citation: "Marques, F. C. & Neves, A. (2014). Min-max theory and the Willmore conjecture. Annals of Mathematics 179(2): 683–782."
        url: https://arxiv.org/abs/1202.6036

  - id: local-isometric-embedding
    name: Local isometric embedding of surfaces
    status: open
    status_note: Open in general when the curvature changes sign in a degenerate way.
    description: >-
      Take any smooth surface described only by its internal distances. Can a small patch
      of it always be built as an actual surface in ordinary three-dimensional space with
      exactly those distances? The answer is yes when the Gaussian curvature is positive,
      negative, or crosses zero cleanly. When the curvature vanishes in a degenerate way,
      no one knows.
    why_hard: >-
      The problem becomes a nonlinear partial differential equation whose type depends on
      the sign of the curvature. Where the curvature is positive it behaves like one kind
      of equation, where negative like another, and on the boundary between them neither
      body of standard technique applies. Counterexamples exist for metrics that are only
      finitely smooth, so any proof must use full smoothness in an essential way.
    unlocks: >-
      It would settle whether Gauss's intrinsic view and the classical picture of surfaces
      sitting in space always agree at small scales. The methods would carry over to other
      PDEs that change type.
    sources:
      - citation: "Han, Q. & Hong, J.-X. (2006). Isometric Embedding of Riemannian Manifolds in Euclidean Spaces. American Mathematical Society."
        url: null

applications:
  - area: Cartography
    title: Why every map projection distorts
    description: >-
      The Theorema Egregium says a sphere ($K > 0$) cannot be flattened onto a plane
      ($K = 0$) without changing some distances. Every map projection is therefore a
      choice of what to sacrifice. Mercator keeps angles and inflates areas near the
      poles. Equal-area projections keep areas and distort shapes. Geodesy, the science
      of measuring the Earth, still runs on Gauss's surface theory.
    sources:
      - citation: "Snyder, J. P. (1987). Map Projections: A Working Manual. U.S. Geological Survey Professional Paper 1395."
        url: null
  - area: Computer graphics
    title: Curvature on digital meshes
    description: >-
      3D models are meshes of tiny triangles, and graphics software estimates their
      curvature to smooth noise, simplify models and place detail where the surface
      bends most. Car and product designers demand surfaces whose curvature varies
      smoothly across seams, because reflections reveal every kink.
    sources:
      - citation: "Botsch, M., Kobbelt, L., Pauly, M., Alliez, P. & Lévy, B. (2010). Polygon Mesh Processing. A K Peters."
        url: null
  - area: Architecture
    title: Building curved forms from flat sheets
    description: >-
      A surface with zero Gaussian curvature, a *developable* surface, can be bent from a
      flat sheet without stretching. Architects and engineers use this to make curved
      facades from sheet metal or glass. Doubly curved panels ($K \neq 0$) need costly
      moulds.
    sources:
      - citation: "Pottmann, H., Asperl, A., Hofer, M. & Kilian, A. (2007). Architectural Geometry. Bentley Institute Press."
        url: null
  - area: Cell biology
    title: The shape of membranes and red blood cells
    description: >-
      A cell membrane resists bending, and its elastic energy is an integral of squared
      mean curvature, the same quantity as the Willmore energy below. Minimising it
      explains the biconcave disc shape of human red blood cells, as Canham (1970) and
      Helfrich (1973) showed.
    domain: biology
    sources:
      - citation: "Canham, P. B. (1970). The minimum energy of bending as a possible explanation of the biconcave shape of the human red blood cell. Journal of Theoretical Biology 26(1): 61–81."
        url: null
      - citation: "Helfrich, W. (1973). Elastic properties of lipid bilayers: theory and possible experiments. Zeitschrift für Naturforschung C 28: 693–703."
        url: null

further_reading:
  - citation: "do Carmo, M. P. (1976). Differential Geometry of Curves and Surfaces. Prentice-Hall."
    url: null
    note: The classic textbook. Rigorous but concrete, and still the standard first course.
  - citation: "Needham, T. (2021). Visual Differential Geometry and Forms. Princeton University Press."
    url: null
    note: Builds geometric intuition through pictures first, formulas second. Ideal before or alongside a textbook.
  - citation: "Pressley, A. (2010). Elementary Differential Geometry (2nd ed.). Springer."
    url: null
    note: A gentle, carefully paced introduction for readers who know multivariable calculus.
---

## Calculus Meets Shape

When Newton and Leibniz made [calculus](/math/calculus/) in the late seventeenth century, curvature was one of the first things it could measure. The curvature of a plane curve at a point is the reciprocal of the radius of the circle that best hugs it there: $\kappa = 1/r$. Huygens had already used such circles to study pendulum clocks, and Clairaut soon extended the idea to curves twisting through space.

Surfaces were harder, because a surface curves differently in different directions. A cylinder is curved around its circumference and flat along its length. A saddle curves up one way and down the other. {{fig:euler|Leonhard Euler}} showed in 1760 that all of this is controlled by two numbers, the *principal curvatures* $\kappa_1$ and $\kappa_2$, which occur in perpendicular directions. Gaspard Monge's school in France then built a whole descriptive theory of surfaces on that idea. For curves the story was essentially finished by the 1850s. {{fig:frenet|Frenet}} and {{fig:serret|Serret}} showed that two functions, curvature $\kappa$ and torsion $\tau$, determine any curve in space.

Up to here, this is still Euclid's space. Curves and surfaces are objects sitting in flat three-dimensional space, and their curvature describes how they bend within it.

## The Remarkable Theorem

The turn came from surveying. From 1818 to 1832, {{fig:gauss|Gauss}} ran a geodetic survey of the Kingdom of Hanover, measuring huge triangles on the curved Earth. That work led to his *Disquisitiones generales circa superficies curvas* (1827). In it, he described a surface entirely by how distances are measured on it, the *first fundamental form*:

$$
ds^2 = E\,du^2 + 2F\,du\,dv + G\,dv^2 .
$$

He then proved what he called the *Theorema Egregium*, the "remarkable theorem." The product $K = \kappa_1\kappa_2$, now called the Gaussian curvature, can be computed from $E$, $F$, $G$ and their derivatives alone. Each principal curvature depends on how the surface sits in space, but their product does not. Rolling a sheet of paper into a cylinder changes $\kappa_1$ from $0$ to something nonzero, yet $K$ stays $0$, which is why paper rolls without stretching. A sphere has $K > 0$ everywhere, which is why no flat map of the Earth can keep all distances correct. Gauss the surveyor had proved why every map must distort.

## Intrinsic Geometry

The consequence was philosophical as much as technical: a surface has a geometry of its own, independent of any surrounding space. {{fig:bonnet|Pierre Ossian Bonnet}} made the link to angles explicit in 1848. For a triangle made of shortest paths (geodesics) on a surface,

$$
\alpha + \beta + \gamma - \pi = \iint_T K\,dA .
$$

Look at what this says. On a surface of constant negative curvature, the angles of every triangle add up to less than $\pi$, and the shortfall is proportional to area. That is exactly the rule of the [non-Euclidean geometry](/math/non-euclidean-geometry/) that Lobachevsky and Bolyai had just found by pure logic. The two new branches were describing the same thing from opposite sides.

Riemann was the one who joined them. His 1854 lecture took Gauss's intrinsic view, extended it to any number of dimensions, and made the non-Euclidean geometries special cases. That is where [Riemannian geometry](/math/riemannian-geometry/) begins.

## A Closer Look: Measuring Curvature Without Leaving the Surface

The Theorema Egregium says curvature can be measured from inside a surface. Here is how a flat creature living on a sphere of radius $R$ could do it with nothing but a rope.

Fix one end of a rope of length $r$ at a point and walk around with the other end taut, tracing a circle. On a flat plane the circle's circumference would be $2\pi r$. On the sphere, the "circle" is a line of latitude around the pole where the rope is fixed, and its circumference is

$$
C(r) = 2\pi R \sin\!\left(\frac{r}{R}\right) = 2\pi r - \frac{\pi r^3}{3R^2} + \cdots ,
$$

a little shorter than $2\pi r$. The shortfall reveals the curvature. In general, Gauss's curvature is

$$
K = \lim_{r \to 0} \frac{3}{\pi}\, \frac{2\pi r - C(r)}{r^3} ,
$$

and for the sphere this gives $K = 1/R^2$. On a saddle the circle comes out *longer* than $2\pi r$, and $K$ is negative. On a cylinder it is exactly $2\pi r$, and $K = 0$, which is why a cylinder can be unrolled flat while a sphere cannot.

This is why every flat map of the Earth distorts. A map that kept all distances would carry the creature's rope-and-circle experiment over unchanged, but on paper the circle comes out $2\pi r$ and on the globe it comes out shorter. No choice of projection can reconcile the two.

## Surfaces Today

Surfaces in ordinary space remain an active subject. The questions have moved on from "how curved is it?" to "what is the best possible shape?" Examples are *minimal surfaces*, the shapes of soap films, which locally have the least possible area, and surfaces that bend as little as possible overall. These problems sit where geometry meets nonlinear partial differential equations. Some of them were settled only in the last decade and a half.
