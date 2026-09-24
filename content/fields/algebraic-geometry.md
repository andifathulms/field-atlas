---
id: algebraic-geometry
domain: math
thread: geometry
name: Algebraic Geometry
parent_ids:
  - projective-geometry
  - algebraic-topology
era_emerged: 1850s – 1950s
core_question: What shapes are defined by polynomial equations, and what does their geometry reveal about the equations' solutions?

summary: |-
  Algebraic geometry studies the shapes cut out by polynomial equations: circles and conics, curves like $y^2 = x^3 - x$, and their higher-dimensional relatives. The same object can be studied with geometry, with topology and with algebra, and each viewpoint explains things the others cannot.

  In the twentieth century the subject was rebuilt so that it works over any number system, including finite ones. That turned it into one of the most powerful tools in number theory. Fermat's Last Theorem was proved in its language.

key_ideas:
  - term: Algebraic variety
    definition: >-
      The set of solutions of a system of polynomial equations, regarded as a geometric
      shape. The circle $x^2 + y^2 = 1$ is a variety, and so are far stranger objects in
      many dimensions.
  - term: Bézout's theorem
    definition: >-
      Two plane curves of degrees $m$ and $n$ with no common component meet in exactly
      $mn$ points, provided you work in the projective plane, allow complex points, and
      count tangencies with multiplicity.
    turning_point_id: bezout-theorem
  - term: Genus
    definition: >-
      The number of holes in the surface formed by a curve's complex points. A line or
      conic has genus 0, a smooth cubic genus 1. The genus governs both the curve's
      topology and how many rational solutions it can have.
    turning_point_id: riemann-surfaces
  - term: Elliptic curve
    definition: >-
      A smooth cubic curve such as $y^2 = x^3 + ax + b$, of genus 1. Its points can be
      added together like numbers, which makes it central to number theory and to
      cryptography.
    turning_point_id: wiles-fermat
  - term: Scheme
    definition: >-
      Grothendieck's generalisation of a variety. Geometry can be done over any
      commutative ring, so the integers and finite fields become places where "shapes"
      live.
    turning_point_id: grothendieck-schemes
  - term: Zeta function of a variety
    definition: >-
      A generating function that counts a variety's solutions over finite fields of every
      size. Weil conjectured that it behaves like Riemann's zeta function, with its zeros
      controlled by the variety's topology.
    turning_point_id: weil-conjectures

turning_points:
  - id: bezout-theorem
    date: "1779"
    type: PROOF
    title: Bézout counts the intersections of curves
    description: >-
      Étienne Bézout's *Théorie générale des équations algébriques* argues that two
      algebraic curves of degrees $m$ and $n$ meet in $mn$ points. The count is exactly
      right only once points at infinity and complex points are included, which ties the
      geometry of equations to the projective plane.
    contested: true
    contested_note: >-
      Both priority and proof are qualified. Maclaurin and Euler had stated or discussed
      the count earlier in the eighteenth century. Bézout's own argument does not meet
      modern standards, especially in how intersections should be counted with
      multiplicity. A fully rigorous proof waited for the algebra of the late nineteenth
      and early twentieth centuries.
    sources:
      - citation: "Bézout, É. (1779). Théorie générale des équations algébriques. Paris."
        url: null
      - citation: "Dieudonné, J. (1985). History of Algebraic Geometry. Trans. J. D. Sally. Wadsworth."
        url: null

  - id: riemann-surfaces
    date: "1857"
    type: REFORMULATION
    title: Riemann turns algebraic curves into surfaces
    description: >-
      In his memoir on Abelian functions, Bernhard Riemann treats the complex solutions
      of a polynomial equation in two variables as a surface. Its topology, measured by
      the genus, controls the curve's algebra. Gustav Roch's 1865 refinement of
      Riemann's inequality, the Riemann–Roch theorem, became one of the field's central
      tools.
    contested: false
    sources:
      - citation: "Riemann, B. (1857). Theorie der Abel'schen Functionen. Journal für die reine und angewandte Mathematik 54: 115–155."
        url: null

  - id: italian-school-crisis
    date: c. 1890 – 1946
    type: CRISIS
    title: The Italian school's intuition outruns its proofs
    description: >-
      Guido Castelnuovo, Federigo Enriques and Francesco Severi classify algebraic
      surfaces with extraordinary geometric intuition. Over the decades, some arguments
      proved incomplete and some claims could not be verified. Oscar Zariski (from 1935)
      and André Weil (whose *Foundations of Algebraic Geometry* appeared in 1946) rebuilt
      the subject on commutative algebra so that its theorems could be trusted.
    contested: true
    contested_note: >-
      How serious the crisis was is debated. Many of the Italian school's results were
      later confirmed with rigorous proofs, and some historians argue the rigour problem
      was concentrated in a few late claims, particularly some of Severi's. Others see a
      broader failure of method. That the foundations had to be rebuilt is not disputed.
    sources:
      - citation: "Zariski, O. (1935). Algebraic Surfaces. Springer (Ergebnisse der Mathematik)."
        url: null
      - citation: "Weil, A. (1946). Foundations of Algebraic Geometry. American Mathematical Society Colloquium Publications 29."
        url: null
      - citation: "Dieudonné, J. (1985). History of Algebraic Geometry. Trans. J. D. Sally. Wadsworth."
        url: null

  - id: weil-conjectures
    date: "1949"
    type: CONJECTURE
    title: The Weil conjectures
    description: >-
      André Weil conjectures that counting a variety's solutions over finite fields is
      governed by a zeta function with a rigid structure. Its shape would be determined
      by the topology the same variety has over the complex numbers. That demanded a
      topology-like cohomology for varieties over finite fields, which did not yet exist.
    contested: false
    sources:
      - citation: "Weil, A. (1949). Numbers of solutions of equations in finite fields. Bulletin of the AMS 55: 497–508."
        url: null

  - id: grothendieck-schemes
    date: 1960 – 1967
    type: REFORMULATION
    title: Grothendieck rebuilds the field on schemes
    description: >-
      Alexander Grothendieck, with Jean Dieudonné, publishes the *Éléments de géométrie
      algébrique* and, in his Paris seminars, builds étale cohomology with Michael Artin
      and others. Varieties are replaced by schemes, which can live over any ring, and
      the cohomology Weil needed is constructed. The language of the whole field changes
      within a decade.
    contested: false
    sources:
      - citation: "Grothendieck, A. & Dieudonné, J. (1960–1967). Éléments de géométrie algébrique. Publications mathématiques de l'IHÉS 4, 8, 11, 17, 20, 24, 28, 32."
        url: null

  - id: deligne-weil
    date: "1974"
    type: PROOF
    title: Deligne proves the last Weil conjecture
    description: >-
      Pierre Deligne proves the analogue of the Riemann hypothesis for varieties over
      finite fields, the deepest of Weil's conjectures. Dwork (1960) and Grothendieck's
      school had settled the others. The topology-for-finite-fields that Weil asked for
      in 1949 was complete and working.
    contested: false
    sources:
      - citation: "Deligne, P. (1974). La conjecture de Weil. I. Publications mathématiques de l'IHÉS 43: 273–307."
        url: null

  - id: wiles-fermat
    date: 1994 – 1995
    type: PROOF
    title: Wiles proves Fermat's Last Theorem through elliptic curves
    description: >-
      Andrew Wiles proves enough of the modularity conjecture for elliptic curves to
      settle Fermat's Last Theorem: $x^n + y^n = z^n$ has no positive whole-number
      solutions for $n > 2$. A gap in his 1993 announcement was repaired with Richard
      Taylor in 1994. A 350-year-old problem about whole numbers fell to the geometry of
      cubic curves.
    contested: false
    sources:
      - citation: "Wiles, A. (1995). Modular elliptic curves and Fermat's Last Theorem. Annals of Mathematics 141(3): 443–551."
        url: null
      - citation: "Taylor, R. & Wiles, A. (1995). Ring-theoretic properties of certain Hecke algebras. Annals of Mathematics 141(3): 553–572."
        url: null

open_problems:
  - id: hodge-conjecture
    name: The Hodge conjecture
    status: open
    status_note: Open as of writing. A Clay Millennium Prize Problem.
    description: >-
      For a smooth projective variety over the complex numbers, certain topological
      features, the "Hodge classes" in its cohomology, are conjectured to always come
      from actual algebraic subvarieties, combined with rational coefficients. Topology
      would then always be witnessed by algebra.
    why_hard: >-
      There is no general method for building algebraic subvarieties out of topological
      data. The conjecture is known for classes of the lowest nontrivial degree
      (Lefschetz, 1924) but not beyond, and a stronger version with integer coefficients
      is known to be false. Any proof must therefore use the rational coefficients in an
      essential way.
    unlocks: >-
      It would make topology a reliable guide to algebraic geometry. It is also a pillar
      of Grothendieck's envisioned theory of *motives*, a universal cohomology behind all
      the others.
    sources:
      - citation: "Deligne, P. (2006). The Hodge conjecture. In J. Carlson, A. Jaffe & A. Wiles (eds.), The Millennium Prize Problems: 45–53. Clay Mathematics Institute / AMS."
        url: null

  - id: birch-swinnerton-dyer
    name: The Birch and Swinnerton-Dyer conjecture
    status: open
    status_note: Open as of writing. Known when the analytic rank is 0 or 1. A Clay Millennium Prize Problem.
    description: >-
      An elliptic curve can have infinitely many rational points, generated by a finite
      number of them (the rank). Birch and Swinnerton-Dyer conjectured in the 1960s, from
      early computer experiments, that the rank can be read off from the behaviour of an
      analytic function, the curve's $L$-function, at a single point.
    why_hard: >-
      Rational points are notoriously hard to find or rule out, and there is no general
      algorithm guaranteed to compute the rank. The work of Gross–Zagier and Kolyvagin
      proves the conjecture only when the $L$-function vanishes to order 0 or 1. Beyond
      that, no known method produces the predicted points.
    unlocks: >-
      It would give a way to decide how many rational solutions a cubic equation has. It
      would also settle, for example, which whole numbers are the areas of right
      triangles with rational sides, the ancient "congruent number" problem.
    sources:
      - citation: "Wiles, A. (2006). The Birch and Swinnerton-Dyer conjecture. In J. Carlson, A. Jaffe & A. Wiles (eds.), The Millennium Prize Problems: 31–41. Clay Mathematics Institute / AMS."
        url: null

  - id: resolution-of-singularities
    name: Resolution of singularities in positive characteristic
    status: open
    status_note: Proved over fields of characteristic zero (Hironaka, 1964) and in dimension up to three in positive characteristic. Open beyond.
    description: >-
      Varieties can have singular points, such as sharp corners or places where a curve
      crosses itself. Can every variety be modified into a smooth one without changing it
      elsewhere? Hironaka proved it can when the numbers involved have characteristic
      zero. Over fields of prime characteristic, the question remains open in dimension
      four and above.
    why_hard: >-
      Hironaka's proof uses an induction on dimension through special smooth
      hypersurfaces that simply do not exist in positive characteristic. There,
      singularities can get worse under the standard repairs, and no replacement
      strategy has worked in general.
    unlocks: >-
      Many theorems of arithmetic geometry assume a smooth model is available and must be
      worked around when it is not. A general resolution would remove that obstacle
      throughout the subject.
    sources:
      - citation: "Hironaka, H. (1964). Resolution of singularities of an algebraic variety over a field of characteristic zero, I, II. Annals of Mathematics 79: 109–203, 205–326."
        url: null

applications:
  - area: Cryptography
    title: Elliptic-curve cryptography
    description: >-
      The points of an elliptic curve over a finite field form a group in which one
      operation is easy to perform and hard to reverse. Proposed independently by Neal
      Koblitz and Victor Miller in 1985, elliptic-curve cryptography now secures most
      web connections and cryptocurrency signatures with far shorter keys than older
      methods.
    sources:
      - citation: "Koblitz, N. (1987). Elliptic curve cryptosystems. Mathematics of Computation 48(177): 203–209."
        url: null
      - citation: "Miller, V. S. (1986). Use of elliptic curves in cryptography. In Advances in Cryptology — CRYPTO '85, Lecture Notes in Computer Science 218: 417–426."
        url: null
  - area: Communications
    title: Error-correcting codes from polynomials
    description: >-
      Reed–Solomon codes encode data as values of a polynomial over a finite field, so
      that damaged pieces can be reconstructed from the rest. They protect QR codes,
      optical discs and signals from deep-space probes. Codes built on higher-genus
      curves, called algebraic-geometry codes, extend the idea.
    sources:
      - citation: "Reed, I. S. & Solomon, G. (1960). Polynomial codes over certain finite fields. Journal of the Society for Industrial and Applied Mathematics 8(2): 300–304."
        url: null
  - area: Robotics
    title: Solving the equations of a robot arm
    description: >-
      The positions a jointed robot arm can reach are the solutions of polynomial
      equations in its joint angles. Computational algebraic geometry, especially
      Gröbner bases, solves these systems exactly for motion planning and inverse
      kinematics.
    sources:
      - citation: "Cox, D., Little, J. & O'Shea, D. (2015). Ideals, Varieties, and Algorithms (4th ed.). Springer."
        url: null
  - area: String theory
    title: Mirror symmetry and counting curves
    description: >-
      In 1991 physicists used string theory's "mirror symmetry" to predict how many
      rational curves of each degree lie on a particular Calabi–Yau threefold, the
      quintic. That was a problem algebraic geometers had struggled with for decades. The
      predictions were later proved, and the exchange created a new branch of the field.
    domain: physics
    sources:
      - citation: "Candelas, P., de la Ossa, X. C., Green, P. S. & Parkes, L. (1991). A pair of Calabi–Yau manifolds as an exactly soluble superconformal theory. Nuclear Physics B 359(1): 21–74."
        url: null
  - area: Evolutionary biology
    title: Algebraic statistics for evolutionary trees
    description: >-
      Models of DNA evolution along a tree predict probabilities of site patterns that
      satisfy polynomial equations, called phylogenetic invariants. Treating statistical
      models as algebraic varieties helps decide which evolutionary tree best fits the
      data.
    domain: biology
    field_id: evolutionary-biology
    sources:
      - citation: "Pachter, L. & Sturmfels, B. (eds.) (2005). Algebraic Statistics for Computational Biology. Cambridge University Press."
        url: null

further_reading:
  - citation: "Reid, M. (1988). Undergraduate Algebraic Geometry. Cambridge University Press."
    url: null
    note: A short, lively first course on curves and conics, with memorable asides on the field's culture.
  - citation: "Cox, D., Little, J. & O'Shea, D. (2015). Ideals, Varieties, and Algorithms (4th ed.). Springer."
    url: null
    note: A computational introduction needing only linear algebra, with applications to robotics and geometry theorem proving.
  - citation: "Hartshorne, R. (1977). Algebraic Geometry. Springer."
    url: null
    note: The standard graduate text in Grothendieck's language of schemes. Demanding.
  - citation: "Dieudonné, J. (1985). History of Algebraic Geometry. Trans. J. D. Sally. Wadsworth."
    url: null
    note: A participant's history, from ancient conics to Grothendieck.
---

## Curves as Equations

The geometry of equations begins with {{fig:descartes|Descartes}}' coordinates. Once every point has coordinates, a curve is simply the set of points satisfying an equation: $x^2 + y^2 = 1$ is a circle, $y = x^2$ a parabola. The *degree* of the equation becomes the first measure of a curve's complexity. Lines have degree one and conics degree two. In 1704 Newton sorted the curves of degree three into seventy-two species.

The simplest question to ask is how often two curves meet. A line meets a conic in at most two points, and two conics meet in at most four. In 1779 {{fig:bezout|Étienne Bézout}} argued that curves of degrees $m$ and $n$ meet in $mn$ points. But "at most" becomes "exactly" only if you add the points at infinity of the [projective plane](/math/projective-geometry/) and allow complex coordinates. Parallel lines meet at infinity, and a line that misses a circle meets it at two complex points. That is the first reason this field's natural home is projective space.

## Riemann's Surfaces

The second reason came from topology. In 1857 {{fig:riemann|Bernhard Riemann}} looked at the complex solutions of a polynomial equation in two variables and saw a surface, a real two-dimensional object. For a smooth cubic curve, that surface is a torus. The number of holes, the *genus*, turned out to govern the curve's algebra: which functions live on it, and how it can be mapped to other curves.

From then on, the topology of complex varieties and the algebra of their equations were studied together, which is why this field's second parent is [algebraic topology](/math/algebraic-topology/). Lefschetz and Hodge carried the connection into higher dimensions in the early twentieth century. The link became decisive when the topology of equations over *finite* fields was needed.

## The Italian Crisis

Around 1890–1930, the Italian school of {{fig:castelnuovo|Guido Castelnuovo}}, {{fig:enriques|Federigo Enriques}} and {{fig:severi|Francesco Severi}} achieved something extraordinary: a classification of algebraic surfaces, driven by brilliant geometric intuition. But intuition ran ahead of proof. Some arguments turned out to have gaps, some claimed results could not be checked, and by the 1930s no one could say with confidence which theorems were solid.

{{fig:zariski|Oscar Zariski}} and {{fig:weil|André Weil}} responded by rebuilding the field on commutative algebra, the theory of polynomial rings and their ideals. It was a second foundational repair after Hilbert's rebuilding of Euclid, and it made the subject both more rigorous and far more abstract.

## Counting Solutions over Finite Fields

In 1949 Weil made a conjecture that shaped the next quarter-century. Take a polynomial equation and count its solutions in finite number systems, the fields with $p$, $p^2$, $p^3, \ldots$ elements. He predicted that these counts are controlled by a zeta function with a rigid structure, and that the structure is dictated by the *topology* of the same equation's complex solutions. Somehow, counting over finite fields should see holes in a surface.

Proving it required a topology for varieties over finite fields, where there is no ordinary notion of nearness. {{fig:grothendieck|Alexander Grothendieck}} built one. Through the 1960s he rewrote the entire field in the language of *schemes*, which let geometry happen over any commutative ring, including the integers. With collaborators in his Paris seminar he constructed étale cohomology. In 1974 his student {{fig:deligne|Pierre Deligne}} used it to prove the deepest of Weil's conjectures.

## A Closer Look: Counting Points on a Curve Modulo 5

Weil's conjectures begin with a simple act: count the solutions of an equation in a finite number system. Take the elliptic curve

$$
y^2 = x^3 - x
$$

and work *modulo 5*, where the only numbers are $0, 1, 2, 3, 4$ and arithmetic wraps around. The squares modulo 5 are $0, 1, 4$ ($2^2 = 4$, $3^2 = 9 \equiv 4$, $4^2 = 16 \equiv 1$). Try each $x$:

| $x$ | $x^3 - x \pmod 5$ | solutions $y$ |
|---|---|---|
| 0 | 0 | $y = 0$ |
| 1 | 0 | $y = 0$ |
| 2 | $6 \equiv 1$ | $y = 1, 4$ |
| 3 | $24 \equiv 4$ | $y = 2, 3$ |
| 4 | $60 \equiv 0$ | $y = 0$ |

That is 7 solutions, plus one "point at infinity" in the projective plane, 8 in all. A naive guess, one point per value of $x$ plus the point at infinity, would give $p + 1 = 6$. In 1933 Helmut Hasse proved that for any elliptic curve and prime $p$ the count $N$ satisfies

$$
|N - (p + 1)| \le 2\sqrt{p} .
$$

Here $|8 - 6| = 2 \le 2\sqrt 5 \approx 4.47$. Hasse's bound is the Riemann hypothesis for elliptic curves: it says the zeros of the curve's zeta function lie on a critical line. Weil proved the analogue for all curves in the 1940s and conjectured it for all varieties. The error term $2\sqrt p$ is controlled by the curve's genus, its topology over the complex numbers. That link between counting and topology is what Grothendieck's cohomology and Deligne's 1974 proof finally explained.

## From Geometry to Fermat

By then algebraic geometry had become the working language of number theory. Its most famous result is Fermat's Last Theorem: $x^n + y^n = z^n$ has no solutions in positive whole numbers for $n > 2$. It was proved by showing that a hypothetical solution would produce an elliptic curve, a cubic of genus 1, too strange to exist. {{fig:wiles|Andrew Wiles}} announced the proof in 1993. After a gap was found, he repaired it with {{fig:taylor|Richard Taylor}} in 1994. The number-theoretic side of that story, from Mordell and Taniyama to Frey and Ribet, is told in [arithmetic geometry](/math/arithmetic-geometry/), where this field and the Number Theory Thread meet.

The field's frontier now runs through two Millennium Prize Problems. The Hodge conjecture asks whether topology is always witnessed by algebra. The Birch and Swinnerton-Dyer conjecture asks whether an elliptic curve's rational points can be read from an analytic function. Beneath both lies an older foundational question, settled by Hironaka in 1964 for characteristic zero but still open over fields of prime characteristic: whether every singular variety can be smoothed out.
