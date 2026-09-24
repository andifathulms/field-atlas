---
id: representation-theory
domain: math
thread: algebra
name: Representation Theory
parent_ids:
  - group-theory
  - abstract-algebra
era_emerged: 1873 – 1931
core_question: How can abstract symmetries be made concrete as matrices, and what does that reveal?

summary: |-
  Representation theory studies groups by letting them act on vector spaces, turning each abstract symmetry into a matrix. Hard questions about the group become questions of linear algebra, which can be computed. Every representation breaks down into irreducible pieces, and the "characters" of those pieces, a table of numbers, encode a surprising amount of the group's structure.

  It includes the theory of continuous symmetry, Lie groups, which describe rotations, motions and the symmetries of physical law. That is why it turned out to be the language of quantum mechanics and particle physics. Its strangest discovery, "monstrous moonshine", links the largest sporadic simple group to number theory and string theory.

key_ideas:
  - term: Representation
    definition: >-
      A way of realising each element of a group as an invertible matrix, so that
      combining symmetries corresponds to multiplying matrices.
    turning_point_id: frobenius-characters
  - term: Irreducible representation
    definition: >-
      One that cannot be split into smaller independent pieces. Every representation of a
      finite group is a sum of irreducible ones, like a chord built from notes.
    turning_point_id: frobenius-characters
  - term: Character
    definition: >-
      The trace of each matrix in a representation: a single number per group element that
      nevertheless determines the representation completely, for finite groups.
    turning_point_id: frobenius-characters
  - term: Lie group and Lie algebra
    definition: >-
      A group that is also a smooth space, like the rotations of 3D space, and its
      "infinitesimal" version, which is easier to compute with. The simple ones fall into
      four infinite families and five exceptions.
    turning_point_id: killing-cartan
  - term: Symmetry in quantum mechanics
    definition: >-
      A quantum system's states carry a representation of its symmetry group. Energy
      levels, spin and the families of elementary particles all correspond to irreducible
      representations.
    turning_point_id: weyl-wigner

turning_points:
  - id: lie-groups
    date: 1873 – 1893
    type: REFORMULATION
    title: Sophus Lie's continuous groups
    description: >-
      Sophus Lie sets out to do for differential equations what Galois did for polynomial
      equations: understand solvability through symmetry. The symmetries of a differential
      equation form a *continuous* group, and Lie shows that such groups are governed by
      their infinitesimal versions, now called Lie algebras. His three-volume work with
      Friedrich Engel appeared in 1888–93.
    contested: false
    sources:
      - citation: "Lie, S. & Engel, F. (1888–1893). Theorie der Transformationsgruppen (3 vols.). Teubner, Leipzig."
        url: null

  - id: killing-cartan
    date: 1888 – 1894
    type: PROOF
    title: The simple Lie algebras are classified
    description: >-
      Wilhelm Killing, a schoolteacher in a small Prussian town, classifies all simple Lie
      algebras over the complex numbers: four infinite families and five exceptional ones,
      including the remarkable $E_8$. His proofs have gaps and errors. Élie Cartan's 1894
      thesis gives rigorous proofs and extends the theory.
    contested: true
    contested_note: >-
      Credit was long lopsided. For decades the classification was attributed mainly to
      Cartan, and some objects Killing discovered were named after others. Historians,
      notably A. J. Coleman in a 1989 essay calling Killing's paper "the greatest
      mathematical paper of all time", and Thomas Hawkins, have argued that Killing's
      contribution was fundamental and under-credited. Cartan's rigour is not disputed.
    sources:
      - citation: "Killing, W. (1888). Die Zusammensetzung der stetigen endlichen Transformationsgruppen I. Mathematische Annalen 31: 252–290."
        url: null
      - citation: "Coleman, A. J. (1989). The greatest mathematical paper of all time. Mathematical Intelligencer 11(3): 29–38."
        url: null
      - citation: "Hawkins, T. (2000). Emergence of the Theory of Lie Groups: An Essay in the History of Mathematics, 1869–1926. Springer."
        url: null

  - id: frobenius-characters
    date: "1896"
    type: REFORMULATION
    title: Frobenius invents group characters
    description: >-
      Prompted by a question in letters from Dedekind, Ferdinand Georg Frobenius invents
      the characters of finite groups and, with them, representation theory. A group is
      studied through its actions as matrices, and the character table becomes the most
      useful summary of a finite group. William Burnside and Issai Schur develop the theory
      within a decade.
    contested: false
    sources:
      - citation: "Frobenius, F. G. (1896). Über Gruppencharaktere. Sitzungsberichte der Königlich Preussischen Akademie der Wissenschaften zu Berlin: 985–1021."
        url: null

  - id: weyl-wigner
    date: 1925 – 1931
    type: REFORMULATION
    title: Representation theory becomes the language of quantum mechanics
    description: >-
      Hermann Weyl works out the representations of compact Lie groups (1925–26), and with
      the arrival of quantum mechanics he and Eugene Wigner show that atomic spectra, spin
      and selection rules are consequences of symmetry. Many physicists resisted the
      unfamiliar mathematics, dubbing it the "group pest" (*Gruppenpest*), but by the 1960s
      particle physicists were classifying hadrons by representations of $SU(3)$.
    contested: false
    sources:
      - citation: "Wigner, E. P. (1931). Gruppentheorie und ihre Anwendung auf die Quantenmechanik der Atomspektren. Vieweg."
        url: null
      - citation: "Weyl, H. (1928). Gruppentheorie und Quantenmechanik. S. Hirzel, Leipzig."
        url: null

  - id: moonshine
    date: 1979 – 1992
    type: PROOF
    title: Monstrous moonshine
    description: >-
      John McKay notices that $196884$, a coefficient of the modular $j$-function from
      number theory, is one more than $196883$, the dimension of the Monster group's
      smallest non-trivial representation. John Conway and Simon Norton turn the coincidence
      into a web of conjectures (1979). Richard Borcherds proves them in 1992, using ideas
      from string theory, and receives a Fields Medal.
    contested: false
    sources:
      - citation: "Conway, J. H. & Norton, S. P. (1979). Monstrous moonshine. Bulletin of the London Mathematical Society 11(3): 308–339."
        url: null
      - citation: "Borcherds, R. E. (1992). Monstrous moonshine and monstrous Lie superalgebras. Inventiones Mathematicae 109: 405–444."
        url: null

open_problems:
  - id: mckay-conjecture
    name: The McKay conjecture
    status: recently_resolved
    status_note: A proof by Britta Späth and Marc Cabanes was announced in 2023–24 as a preprint; it was being checked as of writing.
    description: >-
      John McKay conjectured in 1972 that for any finite group and prime $p$, the number of
      irreducible representations whose dimension is not divisible by $p$ can be read off
      from a much smaller subgroup. It is a striking "local–global" principle for
      representations.
    why_hard: >-
      In 2007 Isaacs, Malle and Navarro reduced it to a stronger statement about finite
      simple groups, which then had to be checked across the whole classification. The last
      and hardest cases, groups of Lie type, took Späth and Cabanes more than a decade.
    unlocks: >-
      It supports a broader family of local–global conjectures in the representation theory
      of finite groups, several of which remain open.
    sources:
      - citation: "McKay, J. (1972). Irreducible representations of odd degree. Journal of Algebra 20(2): 416–418."
        url: null
      - citation: "Cabanes, M. & Späth, B. (2024). The McKay conjecture on character degrees. Preprint."
        url: null

applications:
  - area: Quantum physics
    title: Atomic spectra and spin
    description: >-
      The pattern of spectral lines an atom emits, which transitions are allowed, and the
      existence of spin all follow from how rotation symmetry is represented on quantum
      states. Wigner's book made representation theory standard physics.
    domain: physics
    field_id: quantum-mechanics
    sources:
      - citation: "Wigner, E. P. (1931). Gruppentheorie und ihre Anwendung auf die Quantenmechanik der Atomspektren. Vieweg."
        url: null
  - area: Particle physics
    title: The Eightfold Way
    description: >-
      In 1961 Murray Gell-Mann and Yuval Ne'eman organised the zoo of newly discovered
      particles into representations of the Lie group $SU(3)$ and predicted a missing
      particle, the $\Omega^-$, found in 1964. The Standard Model of particle physics is
      built on Lie groups and their representations.
    domain: physics
    field_id: particle-physics
    sources:
      - citation: "Ne'eman, Y. (1961). Derivation of strong interactions from a gauge invariance. Nuclear Physics 26(2): 222–229."
        url: null

further_reading:
  - citation: "Ronan, M. (2006). Symmetry and the Monster. Oxford University Press."
    url: null
    note: The story of the Monster and moonshine for general readers.
  - citation: "Stillwell, J. (2008). Naive Lie Theory. Springer."
    url: null
    note: An introduction to Lie groups through concrete matrix groups, for undergraduates.
  - citation: "Fulton, W. & Harris, J. (1991). Representation Theory: A First Course. Springer."
    url: null
    note: The standard graduate introduction, rich in examples.
---

## Symmetry for Differential Equations

In the 1870s the Norwegian mathematician {{fig:sophus-lie|Sophus Lie}} set out to do for differential equations what [Galois](/math/galois-theory/) had done for polynomials: understand when they can be solved through their symmetries. Those symmetries are *continuous*, like rotations by any angle, so they form smooth groups, now called Lie groups. Lie saw that such a group is governed by its "infinitesimal" transformations, which form a simpler linear object, a Lie algebra.

Which Lie algebras are possible? {{fig:killing|Wilhelm Killing}}, teaching at a small-town lyceum, answered in 1888–90. The simple ones fall into four infinite families and exactly five exceptions, the largest being $E_8$, of dimension 248. His proofs were flawed. {{fig:elie-cartan|Élie Cartan}} made them rigorous in 1894. Credit went mostly to Cartan for decades, and historians now argue that Killing's paper was one of the most remarkable ever written.

## Groups as Matrices

For finite groups the key move came from {{fig:frobenius|Ferdinand Georg Frobenius}} in 1896. Answering a question Dedekind had raised in their letters, he let a group act on a vector space, turning each element into a matrix, and invented *characters*, the traces of those matrices. From a small table of numbers, much of a group's structure can be read. Burnside and Schur built the theory out within a decade, and it became the main tool of [group theory](/math/group-theory/).

## The Language of Physics

Quantum mechanics made the subject physics. {{fig:weyl|Hermann Weyl}} and {{fig:wigner|Eugene Wigner}} showed that the energy levels of atoms, the rules for which transitions emit light, and the property of spin are all dictated by how symmetry groups are represented on quantum states. Many physicists at first resented the "group pest". By 1961 Murray Gell-Mann and Yuval Ne'eman were sorting the newly found particles into representations of $SU(3)$ and predicting new ones. The Standard Model is built on Lie groups.

## A Closer Look: The Character Table of a Triangle

The six symmetries of an equilateral triangle form the group $S_3$: the identity, two rotations (by $120°$ and $240°$), and three flips. Symmetries that are "the same kind", such as the three flips, are grouped into *classes*. Here there are three classes, of sizes 1, 3 and 2.

A representation assigns each symmetry a matrix. $S_3$ has exactly three irreducible representations:

- **trivial**: every symmetry becomes the $1 \times 1$ matrix $(1)$;
- **sign**: rotations become $(1)$ and flips become $(-1)$, recording whether the triangle has been turned over;
- **standard**: each symmetry becomes the $2 \times 2$ matrix that actually rotates or reflects the plane.

The *character* of a representation records the trace of each matrix, one number per class:

| | identity (1) | flips (3) | rotations (2) |
|---|---|---|---|
| trivial | 1 | 1 | 1 |
| sign | 1 | $-1$ | 1 |
| standard | 2 | 0 | $-1$ |

This small table obeys striking laws. The squares of the dimensions (first column) add up to the size of the group: $1^2 + 1^2 + 2^2 = 6$. Any two different rows are orthogonal once each column is weighted by its class size. For example, trivial and standard give $1 \cdot 2 \cdot 1 + 3 \cdot 1 \cdot 0 + 2 \cdot 1 \cdot (-1) = 0$. These laws hold for every finite group, and they let mathematicians pin down groups, including the Monster, through character tables alone.

In quantum mechanics the same table is physics. A molecule with threefold symmetry, such as ammonia, a pyramid on a triangular base, has this symmetry group, and its vibrations and electron orbitals sort themselves into these three types. The table predicts which vibrations can absorb infrared light, before anyone looks at a spectrum.

## Moonshine

The strangest chapter came from a coincidence. In 1978 John McKay noticed that $196884$, a coefficient in the $j$-function of number theory, is one more than $196883$, the smallest dimension in which the newly predicted Monster group can act. {{fig:conway|John Conway}} and Simon Norton called the web of such coincidences "monstrous moonshine". In 1992 {{fig:borcherds|Richard Borcherds}} proved it, using the vertex algebras of string theory. The largest sporadic symmetry group, a modular function and a physical theory turned out to be one structure. Why that should be so is still not fully understood.
