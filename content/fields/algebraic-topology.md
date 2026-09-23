---
id: algebraic-topology
domain: math
name: Algebraic Topology
parent_ids:
  - euclidean-geometry
era_emerged: 1895 (roots from 1750)
core_question: Which features of a shape survive any amount of stretching, and how can algebra detect them?

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

The rest of the century built on that insight: cohomology, homotopy groups, fibrations and spectral sequences. By 1950 the field had its own axioms (Eilenberg and Steenrod) and had spread across mathematics. And it fed directly into [geometric topology](/math/geometric-topology/). Poincaré's conjecture was stated in terms of his own fundamental group.

## Wrapping Spheres Around Spheres

The simplest-looking questions in the field are still unanswered. How many ways can one sphere be wrapped around another? Heinz Hopf's discovery in 1931 that a 3-sphere wraps nontrivially around a 2-sphere, in infinitely many distinct ways, showed that these *homotopy groups of spheres* are wild. Computing them has driven the field's most powerful machinery for ninety years. Some of the answers now come from computer-assisted calculation, and the table still has no visible end.
