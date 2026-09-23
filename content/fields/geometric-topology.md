---
id: geometric-topology
domain: math
name: Geometric Topology
parent_ids:
  - riemannian-geometry
  - non-euclidean-geometry
era_emerged: 1904 – 1980s
core_question: Can every three-dimensional space be classified, and does geometry decide its shape?

turning_points:
  - id: poincare-conjecture-posed
    date: "1904"
    type: CONJECTURE
    title: Poincaré asks whether simple connectivity characterises the 3-sphere
    description: >-
      At the end of the fifth supplement to his *Analysis Situs*, Henri Poincaré asks
      whether every closed three-dimensional manifold on which every loop can be shrunk
      to a point must be the three-sphere $S^3$. He had already refuted his own earlier,
      weaker version with a counterexample: the Poincaré homology sphere.
    contested: false
    sources:
      - citation: "Poincaré, H. (1904). Cinquième complément à l'analysis situs. Rendiconti del Circolo Matematico di Palermo 18: 45–110."
        url: null

  - id: thurston-geometrization
    date: "1982"
    type: CONJECTURE
    title: Thurston's geometrization conjecture
    description: >-
      William Thurston conjectures that every closed three-manifold can be cut along
      spheres and tori into pieces that each carry one of eight uniform geometries. Most
      of those pieces are hyperbolic. The Poincaré conjecture becomes one special case of
      a much larger picture, and hyperbolic geometry moves to the centre of topology.
    contested: false
    sources:
      - citation: "Thurston, W. P. (1982). Three dimensional manifolds, Kleinian groups and hyperbolic geometry. Bulletin of the AMS 6(3): 357–381."
        url: null

  - id: perelman-proof
    date: 2002 – 2003
    type: PROOF
    title: Perelman proves geometrization with Ricci flow
    description: >-
      Grigori Perelman posts three preprints to arXiv that complete Hamilton's Ricci-flow
      program. He controls the singularities that form under the flow and cuts them out
      by surgery. This proves the geometrization conjecture, and with it the Poincaré
      conjecture.
    contested: true
    contested_note: >-
      The proof's correctness is not disputed: several independent teams verified it in
      detail (Kleiner–Lott; Morgan–Tian; Cao–Zhu). What was disputed in 2006 was credit.
      Cao and Zhu's paper was promoted as the first complete proof, which drew wide
      criticism, and the authors later published an erratum acknowledging an argument
      taken from Kleiner and Lott's notes. Perelman declined both the 2006 Fields Medal
      and the 2010 Clay Millennium Prize.
    sources:
      - citation: "Perelman, G. (2002). The entropy formula for the Ricci flow and its geometric applications. arXiv:math/0211159."
        url: https://arxiv.org/abs/math/0211159
      - citation: "Perelman, G. (2003). Ricci flow with surgery on three-manifolds. arXiv:math/0303109."
        url: https://arxiv.org/abs/math/0303109
      - citation: "Kleiner, B. & Lott, J. (2008). Notes on Perelman's papers. Geometry & Topology 12: 2587–2855."
        url: https://arxiv.org/abs/math/0605667
      - citation: "Morgan, J. & Tian, G. (2007). Ricci Flow and the Poincaré Conjecture. Clay Mathematics Monographs 3."
        url: null
      - citation: "Nasar, S. & Gruber, D. (2006). Manifold Destiny. The New Yorker, 28 August 2006."
        url: null

  - id: agol-virtual-haken
    date: "2012"
    type: PROOF
    title: Agol proves the virtual Haken conjecture
    description: >-
      Building on Daniel Wise's theory of special cube complexes and on work by Kahn and
      Markovic, Ian Agol proves that every closed hyperbolic three-manifold has a finite
      cover containing an embedded incompressible surface, and in fact one that fibres
      over the circle. This settled the last of Thurston's major open questions about
      hyperbolic three-manifolds.
    contested: false
    sources:
      - citation: "Agol, I. (2013). The virtual Haken conjecture. Documenta Mathematica 18: 1045–1087."
        url: https://arxiv.org/abs/1204.2810

open_problems:
  - id: poincare-conjecture
    name: The Poincaré conjecture
    status: recently_resolved
    status_note: Proved by Perelman in 2002–2003, verified by 2006, Clay prize awarded (and declined) in 2010.
    description: >-
      Every closed, simply connected three-manifold is homeomorphic to the three-sphere.
      It was the first and so far the only Millennium Prize Problem to be solved.
    why_hard: >-
      Topology alone could not get a grip on dimension three. The analogous statements in
      dimensions five and up (Smale, 1961) and in dimension four (Freedman, 1982) were
      proved first, because higher dimensions leave more room to manoeuvre. The proof
      that finally worked came from geometry and analysis: a nonlinear heat equation on
      the metric, together with a complete understanding of how it breaks down.
    unlocks: >-
      Together with geometrization, it gives a complete classification of the building
      blocks of three-dimensional spaces. It also made Ricci flow a standard tool well
      beyond topology.
    sources:
      - citation: "Morgan, J. & Tian, G. (2007). Ricci Flow and the Poincaré Conjecture. Clay Mathematics Monographs 3."
        url: null

  - id: smooth-4d-poincare
    name: The smooth four-dimensional Poincaré conjecture
    status: open
    status_note: Open as of writing, and the only dimension in which the smooth version is unresolved.
    description: >-
      Is every smooth four-manifold that is homotopy equivalent to the four-sphere $S^4$
      actually diffeomorphic to it? In other words, is there an "exotic" four-sphere: one
      with the right shape as a topological space but a different smooth structure?
    why_hard: >-
      Dimension four is uniquely badly behaved. Freedman settled the topological version,
      but smooth structures there can differ in ways that never happen in other
      dimensions: ordinary four-dimensional space $\mathbb{R}^4$ itself has uncountably
      many exotic smooth versions. The tricks that work in dimension five and up need
      more room than four dimensions provide. Ricci flow has no known four-dimensional
      analogue strong enough, and no known invariant can detect an exotic $S^4$ if one
      exists.
    unlocks: >-
      Finding an exotic $S^4$ would be a construction of a kind never seen before. A proof
      that none exists would require new methods for controlling smooth structures in
      four dimensions. Either would change how the field thinks about the four-dimensional
      world, which is the dimension of spacetime.
    sources:
      - citation: "Freedman, M. H. (1982). The topology of four-dimensional manifolds. Journal of Differential Geometry 17(3): 357–453."
        url: null

  - id: volume-conjecture
    name: The volume conjecture
    status: conjectured
    status_note: Proved for the figure-eight knot and a few other families; open in general.
    description: |-
      Kashaev (1997) and H. and J. Murakami (2001) conjectured that the coloured Jones
      polynomials of a knot, which are invariants computed from diagrams and algebra,
      know the hyperbolic volume of the space around the knot:

      $$
      2\pi \lim_{N\to\infty} \frac{\log\lvert J_N(K;\,e^{2\pi i/N})\rvert}{N} = \mathrm{Vol}(S^3 \setminus K)
      $$
    why_hard: >-
      One side is combinatorial and comes from quantum physics. The other is the geometry
      of hyperbolic space. No known mechanism connects them. Individual cases are checked
      by delicate asymptotic analysis that does not generalise.
    unlocks: >-
      It would build a bridge between quantum topology and the hyperbolic geometry Thurston
      put at the centre of the field. It would also suggest that the Jones polynomial
      family sees far more geometry than anyone can currently explain.
    sources:
      - citation: "Kashaev, R. M. (1997). The hyperbolic volume of knots from the quantum dilogarithm. Letters in Mathematical Physics 39: 269–275."
        url: null
      - citation: "Murakami, H. & Murakami, J. (2001). The colored Jones polynomials and the simplicial volume of a knot. Acta Mathematica 186: 85–104."
        url: null
---

## Poincaré's Question

Topology itself has roots outside this thread: Euler's bridges of Königsberg, Riemann's surfaces, and the study of knots. The branch followed here is the one where geometry came back to decide questions of shape.

It starts with {{fig:poincare|Henri Poincaré}}. His *Analysis Situs* (1895) and its supplements invented much of algebraic topology, in order to tell three-dimensional spaces apart. In 1900 he claimed that a closed three-manifold with the same homology as the three-sphere must *be* the three-sphere. By 1904 he had found his own counterexample, now called the Poincaré homology sphere. So he asked a sharper question: if every loop in such a space can be shrunk to a point, must it be $S^3$?

## Higher Dimensions Fall First

For half a century the question resisted everyone, and attention moved to other dimensions. In 1961 Stephen Smale proved the analogous statement in every dimension five and above, where there is enough room to untangle things. In 1982 Michael Freedman proved the topological version in dimension four. Dimension three, the original, remained. Many false proofs were published along the way.

## Thurston's Picture

{{fig:thurston|William Thurston}} changed the question in the late 1970s. He showed that *most* three-manifolds, including the complements of most knots, carry a hyperbolic metric. Lobachevsky's geometry, once dismissed as a curiosity, turned out to be the most common geometry of three-dimensional space. Mostow's rigidity theorem (1968) had already shown that such a metric is unique when it exists. Geometric measurements like hyperbolic volume therefore become topological invariants.

In 1982 Thurston conjectured that every closed three-manifold can be cut into pieces, each carrying one of eight uniform geometries. Poincaré's conjecture is the special case in which the only piece is the round sphere. The question was no longer just "is it a sphere?" but "which geometry does this space want to have?" That is why this field has a [non-Euclidean](/math/non-euclidean-geometry/) parent as well as a [Riemannian](/math/riemannian-geometry/) one.

## Perelman and the Flow

Hamilton's Ricci flow offered a method: start with any metric, let it flow, and watch it settle into its natural geometry. The obstacle was singularities, regions where curvature blows up and the flow pinches. Hamilton could not rule out every kind.

In 2002–2003 {{fig:perelman|Grigori Perelman}} posted three preprints to arXiv. They introduced new monotone quantities that rule out the bad singularities, and a way to cut out the rest by surgery and continue the flow. Several independent teams spent three years checking the argument and wrote it out in hundreds of pages. It held. Geometrization, and with it the Poincaré conjecture, was proved. The dispute that followed was about credit, not correctness; the turning point below records it as contested.

## After Geometrization

With the classification settled, the field turned to finer structure. In 2012 {{fig:agol|Ian Agol}}, building on Daniel Wise's work, proved the virtual Haken and virtual fibering conjectures. Every hyperbolic three-manifold is, up to a finite cover, remarkably well organised.

The map still runs out at its edges. The smooth version of Poincaré's question in dimension four remains open, and it is the only dimension where it is. And the conjectured link between knot invariants from quantum physics and hyperbolic volume is still unexplained.
