---
id: non-euclidean-geometry
domain: math
thread: geometry
name: Non-Euclidean Geometry
parent_ids:
  - euclidean-geometry
era_emerged: 1820s – 1830s
core_question: What does geometry look like if the parallel postulate is simply false?

summary: |-
  Non-Euclidean geometry is what you get by keeping all of Euclid's assumptions except the parallel postulate. Allow many parallels through a point and you get *hyperbolic* geometry, where space spreads out faster than flat space and a triangle's angles add up to less than 180°. Allow none and you get *elliptic* (spherical) geometry, where the angles add up to more.

  Its discovery changed what an axiom is. Geometry's starting assumptions turned out to be choices, not self-evident truths, and choosing differently gave perfectly consistent worlds.

key_ideas:
  - term: Hyperbolic geometry
    definition: >-
      The geometry in which infinitely many lines through a point miss a given line.
      Space has constant negative curvature, triangle angles sum to less than $\pi$,
      and the area of a disc grows exponentially with its radius.
    turning_point_id: lobachevsky-bolyai
  - term: Elliptic (spherical) geometry
    definition: >-
      The geometry with no parallels at all: every two "lines" (great circles on a
      sphere) meet. Curvature is positive and triangle angles sum to more than $\pi$.
      Pilots and navigators work in it every day.
  - term: Model
    definition: >-
      A concrete construction inside familiar mathematics in which a set of axioms all
      hold. A model proves the axioms are consistent, as long as the familiar
      mathematics is.
    turning_point_id: beltrami-model
  - term: Independence
    definition: >-
      A statement is independent of a set of axioms if neither it nor its negation can
      be proved from them. The parallel postulate was the first famous case. The
      continuum hypothesis in set theory (Gödel 1940, Cohen 1963) is the most famous
      later one.
    turning_point_id: beltrami-model
  - term: Transformation group
    definition: >-
      Klein's organising idea: a geometry is determined by its group of allowed motions,
      and studies whatever those motions leave unchanged.
    turning_point_id: erlangen-program

turning_points:
  - id: lobachevsky-bolyai
    date: 1829 – 1832
    type: REFORMULATION
    title: Hyperbolic geometry is published as a geometry in its own right
    description: >-
      Nikolai Lobachevsky, in the Kazan Messenger (1829–30), and János Bolyai, in an
      appendix to his father's textbook (1832), each develop a full geometry in which
      many parallels pass through a point. Neither treats it as an absurdity waiting for a
      contradiction. It is a consistent-looking alternative to Euclid, complete with its
      own trigonometry.
    contested: true
    contested_note: >-
      Priority is disputed. Gauss wrote privately, for example to Taurinus in 1824 and to
      Bolyai's father in 1832, that he had reached the same conclusions years earlier, but
      he published nothing. Ferdinand Schweikart and Franz Taurinus also worked out
      related results in 1818–26. Historians generally credit Lobachevsky and Bolyai with
      independent first publication. How far Gauss's unpublished work went, and whether he
      ever fully accepted the new geometry, is still debated.
    sources:
      - citation: "Lobachevsky, N. I. (1829–1830). O nachalakh geometrii [On the principles of geometry]. Kazanskii Vestnik."
        url: null
      - citation: "Bolyai, J. (1832). Appendix, scientiam spatii absolute veram exhibens. In F. Bolyai, Tentamen. Maros-Vásárhely."
        url: null
      - citation: "Gray, J. (2004). János Bolyai, Non-Euclidean Geometry, and the Nature of Space. Burndy Library / MIT Press."
        url: null

  - id: beltrami-model
    date: "1868"
    type: PROOF
    title: Beltrami shows hyperbolic geometry is as consistent as Euclid's
    description: >-
      Eugenio Beltrami builds hyperbolic geometry out of ordinary Euclidean objects, on
      surfaces of constant negative curvature and in a disc model. Any contradiction in
      the new geometry would therefore be a contradiction in the old one. This settles
      the two-thousand-year question: the parallel postulate cannot be proved from the
      others.
    contested: false
    sources:
      - citation: "Beltrami, E. (1868). Saggio di interpretazione della geometria non-euclidea. Giornale di Matematiche 6: 284–312."
        url: null

  - id: erlangen-program
    date: "1872"
    type: REFORMULATION
    title: Klein's Erlangen Program redefines what a geometry is
    description: >-
      Felix Klein proposes that a geometry is the study of whatever stays unchanged under a
      chosen group of transformations. Euclidean, hyperbolic, elliptic, affine and
      projective geometry then become siblings, each defined by its own group, rather than
      rival claims about the one true space.
    contested: false
    sources:
      - citation: "Klein, F. (1872). Vergleichende Betrachtungen über neuere geometrische Forschungen. Erlangen."
        url: null

  - id: poincare-models
    date: "1882"
    type: REFORMULATION
    title: Poincaré finds hyperbolic geometry inside complex analysis
    description: >-
      Studying functions of a complex variable that are unchanged under certain groups
      of transformations, Henri Poincaré realises those transformations are exactly the
      rigid motions of the hyperbolic plane, drawn in a disc or a half-plane. Hyperbolic
      geometry stops being a curiosity about parallels and becomes a working tool in
      complex analysis and number theory.
    contested: false
    sources:
      - citation: "Poincaré, H. (1882). Théorie des groupes fuchsiens. Acta Mathematica 1: 1–62."
        url: null
      - citation: "Gray, J. (2000). Linear Differential Equations and Group Theory from Riemann to Poincaré (2nd ed.). Birkhäuser."
        url: null

open_problems: []

applications:
  - area: Navigation
    title: Great-circle routes
    description: >-
      On the curved surface of the Earth the shortest path between two cities is an arc
      of a great circle, the "straight line" of spherical geometry. Long-haul flights
      and shipping routes follow them, which is why a flight from Europe to North America
      arcs far north on a flat map. Spherical trigonometry, where triangle angles exceed
      180°, is the everyday arithmetic of navigation.
    sources: []
  - area: Special relativity
    title: The geometry of velocities
    description: >-
      In special relativity, velocities do not simply add. Composing two boosts behaves
      like adding lengths in hyperbolic space, and the natural measure of speed (rapidity)
      is hyperbolic distance. Vladimir Varićak pointed this out in 1910. It is one of
      the cleanest places where non-Euclidean geometry is physically real.
    domain: physics
    field_id: special-relativity
    sources: []
  - area: Machine learning
    title: Hyperbolic embeddings of hierarchies
    description: >-
      Trees and hierarchies, like taxonomies and word hierarchies, grow exponentially,
      and so does hyperbolic space. Embedding such data in the Poincaré disc keeps
      distances far more faithful in a few dimensions than any flat embedding can. This
      is now a widely used technique in representation learning.
    sources:
      - citation: "Nickel, M. & Kiela, D. (2017). Poincaré embeddings for learning hierarchical representations. Advances in Neural Information Processing Systems 30."
        url: https://arxiv.org/abs/1705.08039
  - area: Art
    title: Escher's Circle Limit prints
    description: >-
      After seeing a hyperbolic tiling in a paper by H. S. M. Coxeter in 1958, M. C.
      Escher made his *Circle Limit* woodcuts (1958–60). Fish and angels shrink toward
      the edge of a disc. In the Poincaré model's own measure they are all the same size.
    sources:
      - citation: "Coxeter, H. S. M. (1979). The non-Euclidean symmetry of Escher's picture 'Circle Limit III'. Leonardo 12(1): 19–25."
        url: null

further_reading:
  - citation: "Greenberg, M. J. (2008). Euclidean and Non-Euclidean Geometries: Development and History (4th ed.). W. H. Freeman."
    url: null
    note: The standard undergraduate route from Euclid's axioms to hyperbolic geometry, with the history built in.
  - citation: "Gray, J. (1989). Ideas of Space: Euclidean, Non-Euclidean, and Relativistic (2nd ed.). Oxford University Press."
    url: null
    note: A historian's account of how geometry changed from a description of space to a family of choices.
  - citation: "Bonola, R. (1955). Non-Euclidean Geometry. Dover. (Includes translations of Bolyai's and Lobachevsky's original works.)"
    url: null
    note: The classic history, bundled with the two founding texts themselves.
---

## Denying the Postulate

Replace Euclid's fifth postulate with its opposite: through a point off a line, *more than one* parallel line can be drawn. Nothing breaks. You get a geometry, now called hyperbolic, that is internally coherent and strange in precise ways.

In it, the angles of a triangle always add up to less than $\pi$. The shortfall is not random: it is proportional to the triangle's area. On a hyperbolic plane of curvature $-1/R^2$,

$$
\text{Area} = R^2\,\bigl(\pi - (\alpha + \beta + \gamma)\bigr).
$$

So there are no similar triangles of different sizes, because changing the size changes the angles. Every triangle's area is less than $\pi R^2$. Circles grow exponentially with their radius. And at small scales, where the areas involved are tiny, all of this looks exactly like Euclid. That is why nobody had noticed.

## Three Discoverers and a Silence

The breakthrough came from three places at once. {{fig:lobachevsky|Nikolai Lobachevsky}} lectured on it at Kazan in 1826 and published in 1829–30, in Russian, in a provincial journal few Western mathematicians read. {{fig:bolyai|János Bolyai}}, a Hungarian army officer, wrote it up as a 24-page appendix to his father's textbook in 1832.

{{fig:gauss|Gauss}}, the most famous mathematician alive, answered Bolyai's father that to praise the work "would be to praise myself," because he had found the same results long before. He had written as much in private letters, but he had published none of it and never would. Some historians read this as caution about the controversy. Others doubt that his unpublished work ever amounted to a full geometry. Either way, the credit is contested, and this atlas marks it that way.

What none of them had was proof that the new geometry was *consistent*. Lobachevsky and Bolyai had pushed a long way without finding a contradiction, just as Saccheri had. But finding no contradiction is not the same as there being none.

## From Fantasy to Model

{{fig:beltrami|Eugenio Beltrami}} closed the question in 1868. He showed that hyperbolic geometry already lives inside ordinary Euclidean space: on surfaces of constant negative curvature, like the trumpet-shaped pseudosphere, and in a disc whose chords play the role of straight lines. A contradiction in hyperbolic geometry would therefore be a contradiction in Euclidean geometry too. The parallel postulate is *independent*: it can neither be proved nor disproved from the other four.

Beltrami's surfaces came straight out of Gauss's theory of curvature, from the neighbouring [differential-geometry](/math/differential-geometry/) branch. The two branches were already converging. Felix Klein and, in 1882, {{fig:poincare|Henri Poincaré}} later added the models that are standard today: the projective disc, the Poincaré disc, and the upper half-plane.

## A Closer Look: Triangles in the Poincaré Disc

Poincaré's disc model makes hyperbolic geometry visible. The whole infinite plane is drawn inside a circle. "Straight lines" are arcs of circles that meet the boundary at right angles, together with diameters. Angles are measured as they appear, but distances are distorted: the same step covers less and less of the drawing as you approach the edge, which is infinitely far away.

Draw three such arcs to make a triangle. Because the arcs bow inward, the corners look pinched, and the angles visibly add up to less than $180°$. The shortfall is not arbitrary. For a plane of curvature $-1$,

$$
\text{Area} = \pi - (\alpha + \beta + \gamma) .
$$

Push the three corners out to the boundary circle and each angle shrinks to zero. The result, an *ideal triangle*, has angles summing to $0$ and area exactly $\pi$, the largest any hyperbolic triangle can have, however long its sides. In Euclid's plane triangles can be arbitrarily large. In Lobachevsky's they cannot.

Parallels behave just as Lobachevsky said. Take a line and a point off it. Infinitely many arcs through the point never meet the line, and two of them, the *limiting parallels*, meet it only at the boundary, at infinity. Nothing in the picture contradicts Euclid's first four postulates. That is exactly Beltrami's point: the model sits inside ordinary geometry, so if hyperbolic geometry were inconsistent, so would Euclid's be.

## Geometry as a Choice

Once several geometries were known to be consistent, "which one is true?" stopped being a mathematical question. {{fig:klein|Felix Klein}}'s Erlangen Program (1872) organised the new situation. A geometry is defined by a group of transformations and studies whatever those transformations leave unchanged. Euclidean geometry keeps distances fixed under rigid motions. Projective geometry keeps only incidence and cross-ratio. Hyperbolic geometry has its own group of motions.

Whether *physical* space is Euclidean became a question for measurement. A popular story says Gauss tried to measure the angle sum of a triangle of mountain peaks for this reason. Historians doubt the story. What is certain is that the question later found an answer in general relativity.

Non-Euclidean geometry, as a separate subject, largely finished its own work. Its questions moved into its successors. Hyperbolic space turned out to be the geometry of most three-dimensional shapes, and it became a main character in [geometric topology](/math/geometric-topology/).
