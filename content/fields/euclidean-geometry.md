---
id: euclidean-geometry
domain: math
thread: geometry
name: Euclidean Geometry
parent_ids: []
era_emerged: c. 300 BCE
core_question: What can be deduced about space from a handful of assumptions no one thinks to doubt?

summary: |-
  Euclidean geometry is the geometry of flat space: points, lines, circles and the figures built from them, in a world where the angles of every triangle add up to two right angles ($\pi$, or 180°). It is what most people mean by "geometry."

  It is also the first subject ever organised as a chain of proofs from stated assumptions. That method, more than any single theorem, is its legacy. Every branch on this map inherited it, and several were born by questioning one of its assumptions.

key_ideas:
  - term: Axiom (postulate)
    definition: >-
      A statement accepted without proof, from which everything else is derived.
      Euclid's five postulates were meant to be self-evident. The history of this
      thread is largely the story of discovering that one of them was not.
    turning_point_id: elements-compiled
  - term: The parallel postulate
    definition: >-
      Through a point not on a given line, exactly one line can be drawn that never
      meets it (Playfair's form). Equivalent to saying the angles of a triangle sum to
      $\pi$. It is the one assumption that cannot be derived from the others.
    turning_point_id: elements-compiled
  - term: Similarity
    definition: >-
      Two figures are similar if one is a scaled copy of the other. Flat space allows
      triangles of any size with the same angles. Curved spaces do not, which is why
      similarity quietly depends on the parallel postulate.
  - term: The Pythagorean theorem
    definition: >-
      In a right triangle, $a^2 + b^2 = c^2$ (Book I, Proposition 47 of the *Elements*).
      It fixes how distance works in flat space, and in coordinates it becomes the
      distance formula $d = \sqrt{\Delta x^2 + \Delta y^2}$, the rule every later
      geometry modifies.
    turning_point_id: elements-compiled
  - term: Constructibility
    definition: >-
      A length is constructible if it can be drawn with straightedge and compass from a
      unit length. Algebraically, these are exactly the numbers reachable by
      arithmetic and repeated square roots.
    turning_point_id: wantzel-constructions

turning_points:
  - id: elements-compiled
    date: c. 300 BCE
    type: REFORMULATION
    title: The Elements puts geometry in axiomatic order
    description: >-
      Euclid gathers two or three centuries of Greek geometry into thirteen books.
      Everything is derived from a short list of definitions, five postulates, and five
      common notions. Most of the theorems were not new. The new thing was the order:
      each result is proved only from what came before it.
    contested: false
    sources:
      - citation: "Heath, T. L. (1908). The Thirteen Books of Euclid's Elements. Cambridge University Press."
        url: null

  - id: parallel-postulate-crisis
    date: c. 150 – 1733
    type: CRISIS
    title: Centuries of failed proofs of the fifth postulate
    description: >-
      Ptolemy, Proclus, Ibn al-Haytham, Omar Khayyam, Nasir al-Din al-Tusi, John Wallis
      and others each tried to derive the parallel postulate from the other four. Every
      attempt quietly assumed something equivalent to it. The crisis peaked with Girolamo
      Saccheri's 1733 book. He assumed the postulate was false and derived a long chain of
      consequences, hoping to reach a contradiction. He never found a real one, then
      declared the results "repugnant to the nature of the straight line" and stopped.
    contested: false
    sources:
      - citation: "Saccheri, G. (1733). Euclides ab omni naevo vindicatus. Milan."
        url: null
      - citation: "Bonola, R. (1912). Non-Euclidean Geometry: A Critical and Historical Study of Its Development. Trans. H. S. Carslaw. Open Court."
        url: null

  - id: descartes-coordinates
    date: "1637"
    type: REFORMULATION
    title: Coordinates turn geometry into algebra
    description: >-
      In *La Géométrie*, an appendix to his *Discourse on Method*, René Descartes shows
      how to describe curves by equations in coordinates and solve geometric problems
      by algebra. Euclid's figures become equations, the step that calculus would build
      on a generation later.
    contested: true
    contested_note: >-
      Priority is shared. Pierre de Fermat's treatise on loci (*Ad locos planos et
      solidos isagoge*) circulated in manuscript from about 1636 but was printed only in
      1679, after his death. Descartes' book was in print in 1637. The two used
      coordinates differently and disputed each other's methods at the time. Historians
      credit both as independent inventors.
    sources:
      - citation: "Descartes, R. (1637). La Géométrie. Appendix to Discours de la méthode. Leiden."
        url: null
      - citation: "Boyer, C. B. (1956). History of Analytic Geometry. Scripta Mathematica, New York."
        url: null

  - id: wantzel-constructions
    date: "1837"
    type: DISPROOF
    title: Straightedge and compass cannot double the cube or trisect the angle
    description: >-
      Pierre Wantzel proves that two of the three classical construction problems are
      impossible: doubling a cube (which needs $\sqrt[3]{2}$) and trisecting an arbitrary
      angle. Constructible lengths come only from repeated square roots, and these
      problems need cube roots. The third, squaring the circle, fell in 1882 when
      Ferdinand von Lindemann proved $\pi$ transcendental.
    contested: false
    sources:
      - citation: "Wantzel, P. L. (1837). Recherches sur les moyens de reconnaître si un problème de géométrie peut se résoudre avec la règle et le compas. Journal de Mathématiques Pures et Appliquées 2: 366–372."
        url: null
      - citation: "Lindemann, F. (1882). Über die Zahl π. Mathematische Annalen 20: 213–225."
        url: null

  - id: hilbert-grundlagen
    date: "1899"
    type: REFORMULATION
    title: Hilbert rebuilds the foundations
    description: >-
      Hilbert's Grundlagen der Geometrie repairs gaps that Euclid's proofs had silently
      relied on, such as the order of points on a line and when one figure lies inside
      another. It replaces Euclid's list with a complete system of axioms, grouped by
      role. It also shows the system is consistent if the arithmetic of the real numbers
      is. Geometry becomes a formal system, and Euclidean geometry becomes one model
      among several.
    contested: false
    sources:
      - citation: "Hilbert, D. (1899). Grundlagen der Geometrie. Teubner, Leipzig."
        url: null

open_problems:
  - id: kepler-conjecture
    name: The Kepler conjecture
    status: recently_resolved
    status_note: Proof announced 1998 and published 2005. A machine-checked formal proof was completed in 2014 and published in 2017.
    description: >-
      Kepler claimed in 1611 that no packing of equal spheres in space is denser than the
      familiar grocer's stack. That stack, the face-centred cubic packing, fills
      $\pi/\sqrt{18} \approx 74.05\%$ of space. Thomas Hales, working partly with Samuel
      Ferguson, proved it.
    why_hard: >-
      There are infinitely many possible arrangements, and many local arrangements come
      very close to the optimum. Hales reduced the problem to a finite but enormous case
      analysis carried out by computer. After years of review, the journal's referees said
      they were "99% certain" of it but could not check every step. That doubt is why the
      formal verification project, Flyspeck, existed.
    unlocks: >-
      The result mattered as much for how it was accepted as for what it says. It became a
      landmark case for machine-checked proof. It also set the stage for Maryna
      Viazovska's 2016 solution of sphere packing in dimension 8, and the dimension-24
      result with Cohn, Kumar, Miller and Radchenko that followed.
    sources:
      - citation: "Hales, T. C. (2005). A proof of the Kepler conjecture. Annals of Mathematics 162(3): 1065–1185."
        url: null
      - citation: "Hales, T. et al. (2017). A formal proof of the Kepler conjecture. Forum of Mathematics, Pi 5: e2."
        url: https://arxiv.org/abs/1501.02155

  - id: square-peg-problem
    name: The square peg problem
    status: open
    status_note: Open for general continuous closed curves as of writing.
    description: >-
      Otto Toeplitz asked in 1911 whether every closed curve in the plane that does not
      cross itself passes through the four corners of some square. It has been proved for
      convex curves, for smooth curves, and for many other well-behaved classes, but not
      for every continuous curve.
    why_hard: >-
      A continuous curve can be wild. It can wiggle at every scale and have no tangent
      anywhere. The natural strategy is to approximate a wild curve by smooth ones, find
      squares on each, and take a limit. That fails because the squares can shrink to a
      single point in the limit.
    unlocks: >-
      Little depends on the answer directly. Its value is as a proving ground: in 2020
      Joshua Greene and Andrew Lobb used symplectic geometry to show that every smooth such
      curve contains rectangles of every proportion. Tools from far-off fields keep being
      tested on this one elementary question.
    sources:
      - citation: "Matschke, B. (2014). A survey on the square peg problem. Notices of the AMS 61(4): 346–352."
        url: null
      - citation: "Greene, J. E. & Lobb, A. (2021). The rectangular peg problem. Annals of Mathematics 194(2): 509–517."
        url: https://arxiv.org/abs/2005.09193

applications:
  - area: Surveying and construction
    title: Triangulation and right angles in the field
    description: >-
      Land surveys long ran on Euclidean triangles. Measure one baseline and the angles
      to distant points, and trigonometry fixes every other distance. The builder's
      3-4-5 triangle for setting out a right angle is the converse of Pythagoras used as
      a tool. At the scale of a building site the Earth's curvature is negligible, so
      Euclid is exact enough.
    sources: []
  - area: Computing
    title: Computer-aided design and rendering
    description: >-
      CAD systems and 3D graphics engines are Euclidean geometry at scale: points and
      vectors in coordinates, rigid motions as matrices, and intersection tests between
      rays, planes and spheres, run millions of times per frame.
    sources: []
  - area: Crystallography
    title: The 230 symmetry groups of crystals
    description: >-
      Every crystal's repeating atomic pattern has one of exactly 230 symmetry groups
      of three-dimensional Euclidean space. Fedorov and Schoenflies classified them
      independently in 1891, decades before X-ray diffraction could see a crystal
      lattice. They are still how crystal structures are catalogued.
    domain: physics
    sources:
      - citation: "Schoenflies, A. (1891). Krystallsysteme und Krystallstructur. Teubner, Leipzig."
        url: null
  - area: Communications
    title: Sphere packing and error-correcting codes
    description: >-
      Sending digital signals through noise is a packing problem in disguise: codewords
      are points in a high-dimensional Euclidean space, and keeping them far apart is
      packing spheres around them. The densest known packings, such as the $E_8$ and
      Leech lattices, correspond to exceptionally good codes.
    sources:
      - citation: "Conway, J. H. & Sloane, N. J. A. (1999). Sphere Packings, Lattices and Groups (3rd ed.). Springer."
        url: null

further_reading:
  - citation: "Heath, T. L. (1956). The Thirteen Books of Euclid's Elements (2nd ed., 3 vols.). Dover."
    url: null
    note: The standard English translation, with extensive commentary on every proposition and on the fifth postulate.
  - citation: "Hartshorne, R. (2000). Geometry: Euclid and Beyond. Springer."
    url: null
    note: Reads Euclid alongside Hilbert's axioms. The best bridge from the ancient text to modern foundations.
  - citation: "Coxeter, H. S. M. (1961). Introduction to Geometry. Wiley."
    url: null
    note: A wide, classic tour of Euclidean geometry and what grows out of it, for readers comfortable with proofs.
---

## Origins

Greek geometry did not begin with Euclid. Thales was credited with proving that a diameter bisects a circle. The Pythagoreans had their theorem about right triangles. Eudoxus built a theory of proportion careful enough to handle lengths that no fraction describes. Hippocrates of Chios even wrote an earlier *Elements*, now lost.

What {{fig:euclid|Euclid}} did, around 300 BCE in Alexandria, was put all of it in order. The *Elements* opens with definitions ("a point is that which has no part"), five postulates, and five common notions. Then, over thirteen books, it derives more than four hundred propositions, each one resting only on what came before it. For two thousand years this was what a proof looked like.

## The Fifth Postulate

Four of the postulates are short and obvious. You can draw a line between two points, extend it, draw a circle, and all right angles are equal. The fifth is long and awkward:

> If a straight line falling on two straight lines makes the interior angles on the same side less than two right angles, the two straight lines, if produced indefinitely, meet on that side.

In symbols: if those two interior angles satisfy $\alpha + \beta < \pi$, the lines eventually cross. Euclid himself seems to have been uneasy about it. He proves the first twenty-eight propositions without using it and calls on it only at Proposition 29.

Readers noticed. The postulate reads like a theorem that has not been proved yet, and for the next two millennia many people tried to prove it. In 1795 John Playfair gave the version most people learn today: through a point not on a given line, exactly one parallel line can be drawn.

## Two Thousand Years of Attempted Proofs

The attempts form a long, international chain. Ptolemy and Proclus tried in antiquity. Ibn al-Haytham, Omar Khayyam and Nasir al-Din al-Tusi tried in the medieval Islamic world, and John Wallis in seventeenth-century England. Each proof assumed something that turned out to be the postulate in disguise: that rectangles exist, that similar triangles of different sizes exist, that parallel lines stay the same distance apart.

{{fig:saccheri|Girolamo Saccheri}} took the boldest route. In *Euclid Freed of Every Flaw* (1733), he assumed the postulate was false and tried to derive a contradiction. What he actually derived was a long run of valid theorems about a geometry in which triangle angles add up to less than $\pi$. He had no contradiction, so he declared one and stopped. Johann Lambert (1766) and Adrien-Marie Legendre went down the same road. Without accepting it, they had been mapping the ground that the [non-Euclidean](/math/non-euclidean-geometry/) geometers would later claim.

## Ruler, Compass, and Coordinates

Two other threads ran through the same centuries. Greek geometers had posed three construction problems they could not solve using only a straightedge and compass: trisect any angle, double the volume of a cube, and draw a square with the same area as a given circle. For two thousand years no one could do them, and no one could prove they were impossible.

The tool that settled them came from outside geometry. In 1637 {{fig:descartes|René Descartes}} published *La Géométrie*, naming every point by coordinates and every curve by an equation. {{fig:fermat|Pierre de Fermat}} had found the same method independently. Geometry problems became algebra problems.

That translation let {{fig:wantzel|Pierre Wantzel}} prove in 1837 that a straightedge and compass can only produce lengths built from repeated square roots. Doubling the cube needs $\sqrt[3]{2}$, so it is impossible, and so is trisecting a general angle. {{fig:lindemann|Ferdinand von Lindemann}} completed the list in 1882 by proving that $\pi$ is transcendental. It is not the root of any polynomial with whole-number coefficients, so no construction can reach it. Like the parallel postulate, the problems ended not with a construction but with a proof that none exists.

## Rebuilding the Foundations

When non-Euclidean geometry was finally accepted in the nineteenth century, the old question turned around. If the fifth postulate is optional, what exactly are the others doing? Looking closely, mathematicians found that Euclid's proofs also relied on facts he never stated. One example is that a line entering a triangle through one side must leave through another.

{{fig:hilbert|David Hilbert}}'s *Grundlagen der Geometrie* (1899) filled those gaps. His axioms come in groups (incidence, order, congruence, parallels, continuity), and he proved results about the system itself: which axioms are independent of the others, and that the whole system is consistent if the real numbers are. After Hilbert, "Euclidean geometry" means one precise system, chosen from among several.

The field did not end there. The questions it still asks are about *arrangements* in flat space: how tightly shapes can be packed, and which configurations every curve must contain. Some of these questions have turned out to be among the hardest in mathematics.
