---
id: algebraic-topology
domain: math
thread: geometry
name: Algebraic Topology
parent_ids:
  - euclidean-geometry
era_emerged: 1895 (roots from 1750)
core_question: Which features of a shape survive any amount of stretching, and how can algebra detect them?

summary: |-
  Algebraic topology studies the features of a shape that survive any stretching or bending without tearing: how many pieces it has, how many holes, how loops can wind around it. It detects them by attaching algebraic objects (numbers, groups) to each space.

  The logic is simple and powerful. Deforming a shape never changes its algebra, so if two spaces have different algebra, no deformation can turn one into the other. It began with Euler counting the corners, edges and faces of solids.

key_ideas:
  - term: Euler characteristic
    definition: >-
      $\chi = V - E + F$ for a surface cut into faces, and an alternating count of cells
      in any dimension. It is 2 for a sphere, 0 for a torus, and $2 - 2g$ for a surface
      with $g$ holes.
    turning_point_id: euler-polyhedron-formula
  - term: Fundamental group
    definition: >-
      The loops in a space based at a point, where two loops count as the same if one
      can be deformed into the other. A sphere's is trivial. A torus's records loops
      around each of its two circles.
    turning_point_id: analysis-situs
  - term: Homology
    definition: >-
      A sequence of groups $H_0, H_1, H_2, \ldots$ that count a space's holes of each
      dimension: components, tunnels, enclosed voids. Computable, and unchanged by
      deformation.
    turning_point_id: noether-homology-groups
  - term: Homotopy
    definition: >-
      A continuous deformation of one map into another. Two spaces are homotopy
      equivalent if each can be squeezed onto the other. Most invariants in the field
      only see a space up to homotopy.
    turning_point_id: hopf-fibration
  - term: Fixed point
    definition: >-
      A point a map leaves where it is. Topology can guarantee one exists without
      finding it, as Brouwer's theorem does for any continuous map of a disc to itself.
    turning_point_id: brouwer-fixed-point

turning_points:
  - id: euler-polyhedron-formula
    date: 1750 – 1758
    type: PROOF
    title: Euler's polyhedron formula
    description: >-
      In a 1750 letter to Goldbach, and in papers published in 1758, Euler observes that
      for every convex polyhedron the numbers of vertices, edges and faces satisfy
      $V - E + F = 2$. It is a fact about solids from Euclid's world. Yet it ignores every
      length and angle and depends only on how the pieces connect: the first sign of a
      geometry without measurement.
    contested: true
    contested_note: >-
      Two things are disputed. First, priority: a manuscript by Descartes from around
      1630, known only through a copy Leibniz made and rediscovered in 1860, contains an
      equivalent relation about the angles of a polyhedron. Historians disagree about
      whether Descartes had the formula in any meaningful sense. Second, the proof:
      Euler's argument had gaps, and Legendre (1794) is usually credited with the first
      rigorous proof for convex polyhedra.
    sources:
      - citation: "Richeson, D. S. (2008). Euler's Gem: The Polyhedron Formula and the Birth of Topology. Princeton University Press."
        url: null
      - citation: "Lakatos, I. (1976). Proofs and Refutations: The Logic of Mathematical Discovery. Cambridge University Press."
        url: null

  - id: lhuilier-counterexamples
    date: "1813"
    type: CRISIS
    title: Polyhedra with tunnels break Euler's formula
    description: >-
      Simon Lhuilier catalogues polyhedra for which $V - E + F \neq 2$: a picture frame,
      a solid with a tunnel through it, a cube with a smaller cube inside. The formula
      was not wrong so much as incomplete. The number $V - E + F$ was measuring something
      about the solid, the number of holes, that geometry had no word for yet.
    contested: false
    sources:
      - citation: "Lakatos, I. (1976). Proofs and Refutations: The Logic of Mathematical Discovery. Cambridge University Press."
        url: null
      - citation: "Richeson, D. S. (2008). Euler's Gem: The Polyhedron Formula and the Birth of Topology. Princeton University Press."
        url: null

  - id: analysis-situs
    date: "1895"
    type: REFORMULATION
    title: Poincaré's Analysis Situs
    description: >-
      Henri Poincaré publishes a long memoir, followed by five supplements, that
      introduces the fundamental group and a precursor of homology, along with Betti
      numbers generalising Euler's count to any dimension. For the first time, algebraic
      objects are attached to spaces in order to tell them apart.
    contested: false
    sources:
      - citation: "Poincaré, H. (1895). Analysis situs. Journal de l'École Polytechnique (2) 1: 1–123."
        url: null

  - id: brouwer-fixed-point
    date: "1911 – 1912"
    type: PROOF
    title: Brouwer's fixed-point and degree theorems
    description: >-
      L. E. J. Brouwer proves that every continuous map of a closed ball to itself has a
      point that stays put, and that dimension is a topological invariant: $\mathbb{R}^m$
      and $\mathbb{R}^n$ cannot be matched up continuously both ways unless $m = n$.
      Topology now had theorems as sharp as any in geometry, proved with invariants that
      counted how many times a map wraps a space around another.
    contested: false
    sources:
      - citation: "Brouwer, L. E. J. (1912). Über Abbildung von Mannigfaltigkeiten. Mathematische Annalen 71: 97–115."
        url: null

  - id: noether-homology-groups
    date: c. 1925
    type: REFORMULATION
    title: Homology becomes a group, not a count
    description: >-
      In lectures and conversations at Göttingen, Emmy Noether urges topologists to treat
      Betti numbers as shadows of algebraic groups, the homology groups. Heinz Hopf,
      Leopold Vietoris and Walther Mayer take up the idea within a few years. Numbers
      become structures that maps between spaces act on, and algebraic topology becomes
      algebra in earnest.
    contested: false
    sources:
      - citation: "Dieudonné, J. (1989). A History of Algebraic and Differential Topology, 1900–1960. Birkhäuser."
        url: null

  - id: hopf-fibration
    date: "1931"
    type: PROOF
    title: The Hopf fibration wraps a 3-sphere around a 2-sphere
    description: >-
      Heinz Hopf finds a map from the 3-sphere onto the ordinary 2-sphere that cannot be
      deformed to a constant. Above every point sits a whole circle, and any two of those
      circles are linked. Higher homotopy groups of spheres turned out to be nonzero,
      and the long problem of computing them began.
    contested: false
    sources:
      - citation: "Hopf, H. (1931). Über die Abbildungen der dreidimensionalen Sphäre auf die Kugelfläche. Mathematische Annalen 104: 637–665."
        url: null

  - id: eilenberg-steenrod
    date: 1945 – 1952
    type: REFORMULATION
    title: Homology is given axioms
    description: >-
      Samuel Eilenberg and Norman Steenrod characterise homology theories by a short list
      of axioms, announced in 1945 and developed in their 1952 book. The many competing
      constructions of homology turn out to agree wherever the axioms hold, giving the
      field a foundation as clean as Hilbert's for geometry.
    contested: false
    sources:
      - citation: "Eilenberg, S. & Steenrod, N. E. (1945). Axiomatic approach to homology theory. Proceedings of the National Academy of Sciences 31(4): 117–120."
        url: null
      - citation: "Eilenberg, S. & Steenrod, N. (1952). Foundations of Algebraic Topology. Princeton University Press."
        url: null

open_problems:
  - id: homotopy-groups-of-spheres
    name: The homotopy groups of spheres
    status: open
    status_note: Open. Stable groups are computed through about dimension 90 as of writing, with no general formula.
    description: >-
      In how many essentially different ways can a sphere of one dimension be wrapped
      around a sphere of another? The answers, the homotopy groups
      $\pi_{n+k}(S^n)$, are known for small cases and follow no visible pattern.
      Wrapping a 3-sphere around a 2-sphere, for instance, already gives infinitely many
      different ways (Hopf, 1931).
    why_hard: >-
      Each new group is extracted from spectral sequences: layered algebraic machines
      whose outputs depend on hidden "differentials" that must be determined one at a
      time, often by separate ingenious arguments. Recent progress (Isaksen, Wang and Xu)
      used computer calculation alongside motivic homotopy theory to reach dimension 90,
      but each step outwards is harder than the last.
    unlocks: >-
      These groups control how spaces can be glued together. They underlie the
      classification of manifolds and of exotic smooth structures on spheres, so every
      new calculation feeds directly into geometric topology.
    sources:
      - citation: "Ravenel, D. C. (1986). Complex Cobordism and Stable Homotopy Groups of Spheres. Academic Press."
        url: null
      - citation: "Isaksen, D. C., Wang, G. & Xu, Z. (2023). Stable homotopy groups of spheres: from dimension 0 to 90. Publications mathématiques de l'IHÉS 137."
        url: https://arxiv.org/abs/2001.04511

  - id: kervaire-invariant-problem
    name: The Kervaire invariant one problem
    status: recently_resolved
    status_note: Hill, Hopkins and Ravenel ruled out every dimension above 126 (announced 2009, published 2016). The last case, dimension 126, was announced settled by Lin, Wang and Xu in 2024.
    description: >-
      In which dimensions do manifolds exist that carry a certain invariant, the Kervaire
      invariant, equal to one? Such manifolds were known in dimensions 2, 6, 14, 30 and
      62. The question was whether the pattern continues.
    why_hard: >-
      The problem sat in the part of stable homotopy theory where computations are
      hardest. The 2009 proof needed a new equivariant version of homotopy theory built
      for the purpose. The dimension-126 case then required large-scale machine-assisted
      computation of spectral sequences.
    unlocks: >-
      It settles which dimensions admit certain framed manifolds, and so which spheres
      can carry exotic smooth structures of a particular kind. The equivariant methods
      it forced into existence now drive a large part of homotopy theory.
    sources:
      - citation: "Hill, M. A., Hopkins, M. J. & Ravenel, D. C. (2016). On the nonexistence of elements of Kervaire invariant one. Annals of Mathematics 184(1): 1–262."
        url: https://arxiv.org/abs/0908.3724
      - citation: "Lin, W., Wang, G. & Xu, Z. (2024). On the last Kervaire invariant problem. Preprint."
        url: null

applications:
  - area: Data science
    title: Topological data analysis
    description: >-
      *Persistent homology* looks for loops, voids and clusters in a cloud of data points
      at every scale at once, and keeps the features that persist. It finds structure
      that clustering and linear methods miss, in data from protein shapes to neuron
      activity to materials.
    sources:
      - citation: "Carlsson, G. (2009). Topology and data. Bulletin of the AMS 46(2): 255–308."
        url: null
  - area: Engineering
    title: Proving sensor coverage without coordinates
    description: >-
      Scatter cheap sensors that know only which neighbours they can hear, not where they
      are. De Silva and Ghrist showed that a homology computation on that communication
      network can certify that the sensors cover a region with no holes.
    sources:
      - citation: "de Silva, V. & Ghrist, R. (2007). Coverage in sensor networks via persistent homology. Algebraic & Geometric Topology 7: 339–358."
        url: null
  - area: Economics
    title: Why equilibria exist
    description: >-
      John Nash's 1950 proof that every finite game has an equilibrium is a fixed-point
      argument. His one-page paper used Kakutani's extension of Brouwer's theorem, and a
      1951 version used Brouwer's directly. Existence theorems for market equilibria in
      economics follow the same topological route.
    sources:
      - citation: "Nash, J. F. (1950). Equilibrium points in n-person games. Proceedings of the National Academy of Sciences 36(1): 48–49."
        url: null
  - area: Condensed matter physics
    title: Topological phases of matter
    description: >-
      Some materials conduct electricity in steps fixed by integers that no impurity can
      change. Thouless and collaborators showed in 1982 that those integers are
      topological invariants of the electrons' quantum states. The idea grew into the
      field of topological insulators, and it earned a share of the 2016 Nobel Prize in
      Physics.
    domain: physics
    sources:
      - citation: "Thouless, D. J., Kohmoto, M., Nightingale, M. P. & den Nijs, M. (1982). Quantized Hall conductance in a two-dimensional periodic potential. Physical Review Letters 49: 405–408."
        url: null

further_reading:
  - citation: "Hatcher, A. (2002). Algebraic Topology. Cambridge University Press."
    url: https://pi.math.cornell.edu/~hatcher/AT/ATpage.html
    note: The standard graduate text. Its author keeps a free edition online.
  - citation: "Richeson, D. S. (2008). Euler's Gem: The Polyhedron Formula and the Birth of Topology. Princeton University Press."
    url: null
    note: A popular history, from Euler's formula to modern topology, needing no background.
  - citation: "Lakatos, I. (1976). Proofs and Refutations: The Logic of Mathematical Discovery. Cambridge University Press."
    url: null
    note: A dialogue retracing how counterexamples reshaped Euler's formula. A classic of the philosophy of mathematics.
---

## A Formula That Ignored Measurement

Euclid's geometry is about lengths, angles and areas. In 1750 {{fig:euler|Euler}} noticed something about solids that involved none of them. Count the vertices $V$, edges $E$ and faces $F$ of any convex polyhedron (a cube, a tetrahedron, a soccer ball), and

$$
V - E + F = 2 .
$$

A cube gives $8 - 12 + 6$. An icosahedron gives $12 - 30 + 20$. Squash the solid, bend its faces, stretch it into any shape, and the count never changes. It was a fact about how the pieces are *connected*, not how large they are. Leibniz had once wished for an *analysis situs*, a geometry of position rather than magnitude. Euler, who had already solved the bridges of Königsberg by ignoring distances, supplied its first real theorem.

That is why the field's parent is [Euclidean geometry](/math/euclidean-geometry/). The formula was born as a theorem about Euclid's solids, and it had to be pried loose from them.

## The Counterexamples

The formula did not stay simple. In 1813 {{fig:lhuilier|Simon Lhuilier}} produced solids where it fails: a polyhedral picture frame gives $V - E + F = 0$, and each extra tunnel lowers the count by two. Lakatos later made this episode famous as a case study in how mathematics grows. Every counterexample was met either by narrowing the definition of "polyhedron" or by realising that the formula measured something new.

The second response won. $V - E + F$ measures the number of *holes*, the genus, and it is a property of the surface, not of any particular way of cutting it into faces. By the mid-nineteenth century Riemann was using the same kind of count to classify surfaces, and Möbius and Jordan were classifying closed surfaces completely by it.

## Poincaré Attaches Algebra to Shape

Higher dimensions needed more than one number. {{fig:poincare|Henri Poincaré}}'s *Analysis Situs* (1895) and its five supplements supplied two new tools. One was the *fundamental group*, which records how loops in a space can and cannot be deformed into one another. The other was an early form of homology, which counts holes of every dimension through Betti numbers. Topology became the study of the algebraic shadows that shapes cast.

His work was brilliant and famously loose. Proofs depended on intuitions that later generations had to rebuild. {{fig:brouwer|L. E. J. Brouwer}} put it on a rigorous footing around 1911–12 with the idea of the *degree* of a map. With it he proved two landmark results: every continuous map of a ball to itself has a fixed point, and spaces of different dimensions cannot be topologically the same.

## From Numbers to Groups

The decisive shift came from algebra. Around 1925 {{fig:noether|Emmy Noether}}, in her Göttingen lectures and in conversation with visiting topologists, pointed out that Betti numbers are only the sizes of richer objects: homology *groups*. A group can be mapped to another group, and a continuous map between spaces induces exactly such a map between their homology groups. Topology became *functorial*. Spaces and maps on one side are matched faithfully by algebra on the other, so a question about shape can be answered by computing with algebra.

The rest of the century built on that insight: cohomology, homotopy groups, fibrations and spectral sequences. By 1950 the field had its own axioms, from {{fig:eilenberg|Samuel Eilenberg}} and {{fig:steenrod|Norman Steenrod}}, and had spread across mathematics. And it fed directly into [geometric topology](/math/geometric-topology/). Poincaré's conjecture was stated in terms of his own fundamental group.

## A Closer Look: Counting the Holes in a Doughnut

Algebraic topology turns "how many holes?" into a computation. Start with the Euler characteristic. Cut a surface into vertices, edges and faces in any way you like and compute $\chi = V - E + F$. The answer never depends on the cutting.

For a torus, take a single square and glue its opposite edges together: left to right makes a tube, then top to bottom closes the tube into a doughnut. After gluing, all four corners of the square are the same point, the two horizontal edges are one edge, and the two vertical edges are one edge. So

$$
\chi(\text{torus}) = V - E + F = 1 - 2 + 1 = 0 .
$$

A sphere, cut like a cube, gives $8 - 12 + 6 = 2$. In general a surface with $g$ holes has $\chi = 2 - 2g$, so the Euler characteristic detects the holes.

Homology records more. The first homology group of the torus is $H_1 = \mathbb{Z}^2$: two independent loops, one around the tube and one through the hole, that cannot be deformed into each other or shrunk away. For the sphere, $H_1 = 0$: every loop shrinks. Because deformation never changes these groups, they prove at once that no stretching turns a doughnut into a ball, the kind of impossibility statement the field exists to make. And Euler's number reappears: $\chi$ is the alternating sum of the ranks of the homology groups, here $1 - 2 + 1$.

## Wrapping Spheres Around Spheres

The simplest-looking questions in the field are still unanswered. How many ways can one sphere be wrapped around another? {{fig:hopf|Heinz Hopf}}'s discovery in 1931 that a 3-sphere wraps nontrivially around a 2-sphere, in infinitely many distinct ways, showed that these *homotopy groups of spheres* are wild. Computing them has driven the field's most powerful machinery for ninety years. Some of the answers now come from computer-assisted calculation, and the table still has no visible end.
