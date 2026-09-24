---
id: projective-geometry
domain: math
thread: geometry
name: Projective Geometry
parent_ids:
  - euclidean-geometry
era_emerged: 1630s – 1820s
core_question: Which properties of a figure survive projection, the way a painter projects a scene onto a canvas?

summary: |-
  Projective geometry studies what stays true when a figure is projected from a point onto another surface, the way a painter's canvas or a camera captures a scene. Lengths and angles change under projection. But straight lines stay straight, and points that lie on one line still do.

  Adding "points at infinity", where parallel lines meet like rails at the horizon, makes the theory strikingly symmetric: any two lines meet in exactly one point, just as any two points lie on exactly one line. That symmetry made projective space the natural stage for much of later geometry, including the geometry of polynomial equations.

key_ideas:
  - term: Point at infinity
    definition: >-
      An ideal point where a family of parallel lines meet, like the vanishing point of
      railway tracks in a painting. Together these points form a line at infinity, the
      horizon.
    turning_point_id: desargues-pascal
  - term: Projective plane
    definition: >-
      The ordinary plane together with its line at infinity. In it, any two distinct
      lines meet in exactly one point, with no exceptions for parallels.
    turning_point_id: poncelet-traite
  - term: Duality
    definition: >-
      Swap the words "point" and "line" (and "lie on" with "pass through") in any
      theorem of the projective plane, and the result is also a theorem. Every proof
      comes with a free second proof.
    turning_point_id: projective-duality
  - term: Cross-ratio
    definition: >-
      For four points on a line, $\frac{AC \cdot BD}{BC \cdot AD}$. Projection changes
      every length, but this one ratio of ratios survives. It is the basic invariant of
      the field.
  - term: Homogeneous coordinates
    definition: >-
      Name a point of the plane by three numbers $(x : y : z)$, up to a common scale
      factor. Points at infinity are those with $z = 0$, and projections become
      ordinary matrix multiplication.

turning_points:
  - id: renaissance-perspective
    date: c. 1415 – 1435
    type: REFORMULATION
    title: Painters find the geometry of perspective
    description: >-
      Filippo Brunelleschi demonstrates a painting of the Florence Baptistery that,
      viewed through a peephole, matches the real building. Leon Battista Alberti's *De
      pictura* (1435) writes down the method: parallel lines receding from the viewer
      are drawn to meet at a single vanishing point. Geometry enters art as the study of
      projection from an eye.
    contested: true
    contested_note: >-
      What Brunelleschi actually did is uncertain. His demonstration panels are lost,
      and the account of them comes from Antonio Manetti's biography, written some sixty
      years later. Historians disagree about how far his method went and how much
      Alberti's written treatise, the first surviving one, owed to him.
    sources:
      - citation: "Alberti, L. B. (1435). De pictura. (Italian version Della pittura, 1436.)"
        url: null
      - citation: "Field, J. V. (1997). The Invention of Infinity: Mathematics and Art in the Renaissance. Oxford University Press."
        url: null
      - citation: "Kemp, M. (1990). The Science of Art: Optical Themes in Western Art from Brunelleschi to Seurat. Yale University Press."
        url: null

  - id: desargues-pascal
    date: 1639 – 1640
    type: REFORMULATION
    title: Desargues treats conics by projection and adds points at infinity
    description: >-
      Girard Desargues' *Brouillon project* (1639) shows that circles, ellipses,
      parabolas and hyperbolas are all projections of one another. It treats parallel
      lines as meeting at a point at infinity. In 1640 the sixteen-year-old Blaise Pascal
      published his hexagon theorem in the same spirit. Desargues' book was printed in a
      tiny run and then almost entirely lost. Coordinate geometry took the spotlight
      instead.
    contested: false
    sources:
      - citation: "Field, J. V. & Gray, J. J. (1987). The Geometrical Work of Girard Desargues. Springer."
        url: null

  - id: poncelet-traite
    date: "1822"
    type: REFORMULATION
    title: Poncelet founds projective geometry as a subject
    description: >-
      Jean-Victor Poncelet, an officer captured during Napoleon's retreat from Moscow,
      reconstructed geometry from memory as a prisoner in Saratov (1813–14). His *Traité
      des propriétés projectives des figures* (1822) makes the properties that survive
      projection the object of study in their own right. It includes points at infinity
      and, boldly, imaginary points too.
    contested: false
    sources:
      - citation: "Poncelet, J.-V. (1822). Traité des propriétés projectives des figures. Paris."
        url: null
      - citation: "Gray, J. (2007). Worlds Out of Nothing: A Course in the History of Geometry in the 19th Century. Springer."
        url: null

  - id: projective-duality
    date: 1825 – 1827
    type: REFORMULATION
    title: The principle of duality
    description: >-
      Joseph Gergonne states that exchanging "point" and "line" throughout any theorem
      of the projective plane gives another valid theorem, and prints dual theorems side
      by side in two columns. Projective geometry acquires a symmetry that Euclidean
      geometry, with its exceptional parallels, could never have.
    contested: true
    contested_note: >-
      Gergonne and Poncelet fought bitterly over credit. Poncelet argued that duality was
      a consequence of his own theory of poles and polars. Gergonne presented it as an
      independent general principle. Historians generally credit Gergonne with stating
      it as a principle and Poncelet with the underlying mechanism.
    sources:
      - citation: "Gray, J. (2007). Worlds Out of Nothing: A Course in the History of Geometry in the 19th Century. Springer."
        url: null

  - id: cayley-klein
    date: 1859 – 1871
    type: REFORMULATION
    title: Cayley and Klein put distance inside projective geometry
    description: >-
      Arthur Cayley shows that distance and angle can be defined projectively, relative
      to a fixed conic he called the "absolute". He concludes that "descriptive
      geometry is all geometry". Felix Klein (1871) shows that different choices of the
      absolute give Euclidean, hyperbolic and elliptic geometry, so the non-Euclidean
      geometries sit inside projective geometry as special cases.
    contested: false
    sources:
      - citation: "Cayley, A. (1859). A sixth memoir upon quantics. Philosophical Transactions of the Royal Society of London 149: 61–90."
        url: null
      - citation: "Klein, F. (1871). Über die sogenannte Nicht-Euklidische Geometrie. Mathematische Annalen 4: 573–625."
        url: null

open_problems:
  - id: finite-projective-planes
    name: Finite projective planes of non-prime-power order
    status: open
    status_note: Open as of writing. Order 12 is the smallest unsettled case.
    description: >-
      A projective plane can be finite: $n^2 + n + 1$ points and as many lines, each
      line holding $n + 1$ points, any two points on exactly one line. Such planes exist
      whenever $n$ is a prime power (2, 3, 4, 5, 7, 8, 9, …). Does one exist for any
      other $n$?
    why_hard: >-
      The Bruck–Ryser theorem (1949) rules out infinitely many orders, including 6 and
      14. Order 10 needed a massive computer search, finished in 1989, to rule out. No
      general construction works outside prime powers and no general obstruction is
      known, and order 12 is far beyond exhaustive search.
    unlocks: >-
      A plane of new order would be a structure unlike any known, and it would give new
      error-correcting codes and experimental designs. A proof that none exist would
      explain why prime powers are special, which is currently a mystery.
    sources:
      - citation: "Bruck, R. H. & Ryser, H. J. (1949). The nonexistence of certain finite projective planes. Canadian Journal of Mathematics 1: 88–93."
        url: null
      - citation: "Lam, C. W. H. (1991). The search for a finite projective plane of order 10. American Mathematical Monthly 98(4): 305–318."
        url: null

applications:
  - area: Art
    title: Linear perspective
    description: >-
      Every painting, film set and video game that shows depth convincingly uses the
      rules Alberti wrote down. Parallel lines converge to vanishing points on a horizon,
      and a scene is the projection of the world through a single eye.
    sources:
      - citation: "Kemp, M. (1990). The Science of Art: Optical Themes in Western Art from Brunelleschi to Seurat. Yale University Press."
        url: null
  - area: Computer vision
    title: How cameras see
    description: >-
      A camera is a projective transformation from the 3D world to a 2D image. Stitching
      panoramas, reconstructing 3D scenes from photographs, and letting robots and cars
      locate themselves all rest on projective geometry: homographies, epipolar geometry
      and the cross-ratio.
    sources:
      - citation: "Hartley, R. & Zisserman, A. (2004). Multiple View Geometry in Computer Vision (2nd ed.). Cambridge University Press."
        url: null
  - area: Computer graphics
    title: Homogeneous coordinates in every GPU
    description: >-
      Graphics hardware represents 3D points with four homogeneous coordinates, so that
      rotations, translations and the perspective projection onto the screen are all
      matrix multiplications. The final "divide by $w$" step is projective geometry in
      silicon.
    sources: []
  - area: Combinatorics and games
    title: Finite planes in codes, designs and card games
    description: >-
      The seven-point Fano plane underlies the Hamming (7,4) error-correcting code, and
      finite projective planes give balanced designs for experiments. The card game
      *Spot It!* (*Dobble*), in which every pair of cards shares exactly one symbol, is
      built from the projective plane of order 7.
    sources: []

further_reading:
  - citation: "Coxeter, H. S. M. (1987). Projective Geometry (2nd ed.). Springer."
    url: null
    note: A short, elegant classic that develops the subject from its axioms.
  - citation: "Richter-Gebert, J. (2011). Perspectives on Projective Geometry: A Guided Tour Through Real and Complex Geometry. Springer."
    url: null
    note: A modern, richly illustrated treatment connecting classical results to computation.
  - citation: "Field, J. V. (1997). The Invention of Infinity: Mathematics and Art in the Renaissance. Oxford University Press."
    url: null
    note: The history of how painters' perspective became mathematics, for general readers.
---

## The Painter's Window

Projective geometry began in the workshops of Renaissance Florence, not in mathematics. In the early fifteenth century {{fig:brunelleschi|Filippo Brunelleschi}} is said to have painted the Baptistery so exactly that, viewed through a peephole with a mirror, the painting was indistinguishable from the building. In 1435 {{fig:alberti|Leon Battista Alberti}} wrote the method down. Treat the canvas as a window. Every line from the eye to the scene crosses it at one point, and lines that run parallel away from the viewer are drawn meeting at a single *vanishing point*.

That is a geometric statement, and it breaks Euclid. On the canvas, parallel lines meet. Lengths shrink with distance and angles distort, yet a straight line in the world is still a straight line in the picture. The question the painters implicitly raised was: which properties does projection preserve? Euclidean geometry had never asked it, which is why this field branches off from [Euclidean geometry](/math/euclidean-geometry/) rather than growing inside it.

## Desargues and the Point at Infinity

{{fig:desargues|Girard Desargues}}, an architect and engineer from Lyon, turned the painters' practice into mathematics in 1639. Project a circle from a point onto a tilted plane and you get an ellipse, a parabola or a hyperbola. So all conic sections are one curve seen from different angles, and a theorem proved for the circle transfers to all of them. To make this work he treated parallel lines as meeting at a point "at an infinite distance", completing the plane.

A year later {{fig:pascal|Blaise Pascal}}, aged sixteen, published his hexagon theorem. For any six points on a conic, the three pairs of opposite sides of the hexagon they form meet in three points on one straight line. Then the subject nearly vanished. Desargues' book was printed in a tiny run and lost for two centuries, and Descartes' coordinates, published two years earlier, carried geometry in a different direction.

## Poncelet's Prison Notebook

The revival came from a prisoner of war. {{fig:poncelet|Jean-Victor Poncelet}}, a young French engineering officer, was captured during Napoleon's retreat from Moscow and held at Saratov on the Volga in 1813–14. Without books, he rebuilt geometry from what he remembered and pushed it further. His *Traité des propriétés projectives des figures* (1822) made projective properties the subject itself. He added points at infinity systematically, and even admitted "imaginary" points so that, for instance, every line meets every circle.

In 1825–27 {{fig:gergonne|Joseph Gergonne}} noticed the field's deepest symmetry. In the projective plane, swap "point" with "line" in any theorem and you get another true theorem. He printed dual theorems side by side in two columns. Poncelet insisted the idea was really his, and the two quarrelled in print for years.

## All Geometry Is Projective

By mid-century projective geometry had grown ambitious. In 1859 {{fig:cayley|Arthur Cayley}} showed that even distance and angle, the things projection destroys, can be recovered inside projective geometry by singling out one special conic, the "absolute". He concluded that metrical geometry is part of projective geometry and that projective geometry "is all geometry".

{{fig:klein|Felix Klein}} took the next step in 1871. Choose the absolute one way and you get Euclidean geometry, another way hyperbolic, a third way elliptic. The [non-Euclidean geometries](/math/non-euclidean-geometry/), found through the long struggle over the parallel postulate, sat inside projective geometry all along. His Erlangen Program the following year made the hierarchy official, with projective geometry near the top.

Projective space also became the natural home for curves defined by equations. In the projective plane, allowing complex points, two curves of degrees $m$ and $n$ always meet in exactly $mn$ points, counted properly. That clean count fails in the ordinary plane, where intersection points can escape to infinity. This is where [algebraic geometry](/math/algebraic-geometry/) takes up the story.

## Finite Planes

Nothing in the axioms of a projective plane requires infinitely many points. The smallest possible one has seven points and seven lines, each line holding three points: the Fano plane. More generally, finite planes exist with $n^2 + n + 1$ points whenever $n$ is a prime power. Whether any other orders are possible is one of the oldest open questions in combinatorics. Order 10 took a supercomputer search in the 1980s to rule out, and order 12 is still unknown.
