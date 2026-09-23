---
id: differential-geometry
domain: math
name: Differential Geometry of Surfaces
parent_ids:
  - euclidean-geometry
era_emerged: 18th century – 1820s
core_question: How do you measure the bending of a curve or surface with calculus, and how much of that bending can be detected from inside the surface?

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
---

## Calculus Meets Shape

When Newton and Leibniz made calculus in the late seventeenth century, curvature was one of the first things it could measure. The curvature of a plane curve at a point is the reciprocal of the radius of the circle that best hugs it there: $\kappa = 1/r$. Huygens had already used such circles to study pendulum clocks, and Clairaut soon extended the idea to curves twisting through space.

Surfaces were harder, because a surface curves differently in different directions. A cylinder is curved around its circumference and flat along its length. A saddle curves up one way and down the other. {{fig:euler|Leonhard Euler}} showed in 1760 that all of this is controlled by two numbers, the *principal curvatures* $\kappa_1$ and $\kappa_2$, which occur in perpendicular directions. Gaspard Monge's school in France then built a whole descriptive theory of surfaces on that idea.

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

## Surfaces Today

Surfaces in ordinary space remain an active subject. The questions have moved on from "how curved is it?" to "what is the best possible shape?" Examples are *minimal surfaces*, the shapes of soap films, which locally have the least possible area, and surfaces that bend as little as possible overall. These problems sit where geometry meets nonlinear partial differential equations. Some of them were settled only in the last decade and a half.
