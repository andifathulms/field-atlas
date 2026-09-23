---
id: non-euclidean-geometry
domain: math
name: Non-Euclidean Geometry
parent_ids:
  - euclidean-geometry
era_emerged: 1820s – 1830s
core_question: What does geometry look like if the parallel postulate is simply false?

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

open_problems: []
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

Beltrami's surfaces came straight out of Gauss's theory of curvature, from the neighbouring [differential-geometry](/math/differential-geometry/) branch. The two branches were already converging. Felix Klein and, in 1882, Henri Poincaré later added the models that are standard today: the projective disc, the Poincaré disc, and the upper half-plane.

## Geometry as a Choice

Once several geometries were known to be consistent, "which one is true?" stopped being a mathematical question. {{fig:klein|Felix Klein}}'s Erlangen Program (1872) organised the new situation. A geometry is defined by a group of transformations and studies whatever those transformations leave unchanged. Euclidean geometry keeps distances fixed under rigid motions. Projective geometry keeps only incidence and cross-ratio. Hyperbolic geometry has its own group of motions.

Whether *physical* space is Euclidean became a question for measurement. A popular story says Gauss tried to measure the angle sum of a triangle of mountain peaks for this reason. Historians doubt the story. What is certain is that the question later found an answer in general relativity.

Non-Euclidean geometry, as a separate subject, largely finished its own work. Its questions moved into its successors. Hyperbolic space turned out to be the geometry of most three-dimensional shapes, and it became a main character in [geometric topology](/math/geometric-topology/).
