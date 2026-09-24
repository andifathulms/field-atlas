---
id: galois-theory
domain: math
thread: algebra
name: Galois Theory
parent_ids:
  - theory-of-equations
era_emerged: 1770 – 1846
core_question: Why can some polynomial equations be solved by a formula and others not?

summary: |-
  Galois theory explains which polynomial equations can be solved by a formula built from arithmetic and roots, and why the rest cannot. Its key idea is to look not at the roots themselves but at their *symmetries*: the ways the roots can be shuffled without breaking any algebraic relation between them. Those symmetries form a group, and the equation is solvable by radicals exactly when that group can be broken down in a particular way.

  The general equation of degree five fails the test, which is why no quintic formula exists. More importantly, the method of studying a problem through its symmetry group spread across all of mathematics and physics.

key_ideas:
  - term: Symmetries of the roots
    definition: >-
      The permutations of an equation's roots that preserve every polynomial relation
      among them with rational coefficients. They measure how "tangled" the roots are.
    turning_point_id: lagrange-reflexions
  - term: Galois group
    definition: >-
      The group formed by those symmetries. Galois's insight was that the group, not the
      equation's surface form, determines how hard the equation is to solve.
    turning_point_id: galois-memoir
  - term: Solvable group
    definition: >-
      A group that can be broken into a chain of simpler abelian pieces. An equation is
      solvable by radicals exactly when its Galois group is solvable, and the symmetric
      group on five letters is not.
    turning_point_id: galois-memoir
  - term: Field extension
    definition: >-
      A larger number system obtained by adjoining roots, like $\mathbb{Q}(\sqrt 2)$. In
      modern Galois theory, the group acts on the extension.
    turning_point_id: artin-galois
  - term: Fundamental theorem of Galois theory
    definition: >-
      A perfect dictionary between the subgroups of the Galois group and the intermediate
      number systems between the base field and the field of roots.
    turning_point_id: artin-galois

turning_points:
  - id: lagrange-reflexions
    date: 1770 – 1771
    type: REFORMULATION
    title: Lagrange asks why the old formulas work
    description: >-
      Joseph-Louis Lagrange reexamines every known method for cubics and quartics and finds
      a common thread. Each works through auxiliary quantities, "resolvents", whose
      behaviour under permutations of the roots makes the problem easier. For the quintic
      the same approach makes it harder. He shifts attention from the equation to the
      permutations of its roots.
    contested: false
    sources:
      - citation: "Lagrange, J.-L. (1770–1771). Réflexions sur la résolution algébrique des équations. Nouveaux Mémoires de l'Académie Royale des Sciences et Belles-Lettres de Berlin."
        url: null

  - id: abel-ruffini
    date: 1799 – 1824
    type: DISPROOF
    title: No general formula for the quintic
    description: >-
      Paolo Ruffini (1799) and Niels Henrik Abel (1824) show that the general equation of
      degree five cannot be solved by radicals. There is no quintic formula, and none will
      ever be found. Abel, poor and largely unrecognised, died of tuberculosis in 1829 at
      26, two days before a letter arrived offering him a professorship in Berlin.
    contested: true
    contested_note: >-
      Credit is shared unevenly. Ruffini's long 1799 proof was the first, but it had a gap
      and was largely ignored or dismissed by contemporaries. Cauchy was a rare supporter.
      Abel's 1824 proof was accepted, though it too needed later tidying. The result is now
      named the Abel–Ruffini theorem, and historians differ on how nearly complete
      Ruffini's argument was.
    sources:
      - citation: "Abel, N. H. (1826). Beweis der Unmöglichkeit, algebraische Gleichungen von höheren Graden als dem vierten allgemein aufzulösen. Journal für die reine und angewandte Mathematik 1: 65–84."
        url: null
      - citation: "Ayoub, R. G. (1980). Paolo Ruffini's contributions to the quintic. Archive for History of Exact Sciences 23: 253–277."
        url: null

  - id: galois-memoir
    date: 1830 – 1832
    type: REFORMULATION
    title: Galois's theory of equations
    description: >-
      Évariste Galois, a teenage revolutionary twice expelled or refused by the leading
      schools, shows exactly which equations are solvable by radicals, through the group
      of symmetries of their roots. The Academy loses one submission, and Poisson rejects
      another as incomprehensible. On the night before he is killed in a duel in May 1832,
      aged twenty, he writes a letter summarising his discoveries. Liouville published
      the work in 1846.
    contested: false
    sources:
      - citation: "Galois, É. (1846). Œuvres mathématiques d'Évariste Galois. Ed. J. Liouville. Journal de Mathématiques Pures et Appliquées 11: 381–444."
        url: null
      - citation: "Livio, M. (2005). The Equation That Couldn't Be Solved: How Mathematical Genius Discovered the Language of Symmetry. Simon & Schuster."
        url: null

  - id: jordan-traite
    date: "1870"
    type: REFORMULATION
    title: Jordan's treatise on substitutions
    description: >-
      Camille Jordan's *Traité des substitutions* gives the first systematic account of
      Galois's ideas and of groups of permutations, proving key structural theorems.
      Galois theory becomes a teachable subject, and group theory a field of its own.
    contested: false
    sources:
      - citation: "Jordan, C. (1870). Traité des substitutions et des équations algébriques. Gauthier-Villars, Paris."
        url: null

  - id: artin-galois
    date: "1942"
    type: REFORMULATION
    title: Artin's modern Galois theory
    description: >-
      Building on Dedekind, Emil Artin recasts Galois theory in terms of field extensions
      and linear algebra in his Notre Dame lectures, freeing it from explicit formulas for
      roots. The fundamental theorem takes its modern form, and this is the version taught
      today.
    contested: false
    sources:
      - citation: "Artin, E. (1942). Galois Theory. Notre Dame Mathematical Lectures 2. University of Notre Dame."
        url: null

open_problems:
  - id: inverse-galois-problem
    name: The inverse Galois problem
    status: open
    status_note: Open as of writing; known for all solvable groups and many simple ones, including the Monster.
    description: >-
      Galois theory attaches a group to each equation. The inverse question asks whether
      every finite group arises this way, as the Galois group of some polynomial with
      rational coefficients.
    why_hard: >-
      Constructing an equation with a prescribed symmetry group requires controlling
      arithmetic over the rationals, not just algebra. Shafarevich settled solvable groups
      with deep methods, and geometric techniques ("rigidity") work for many simple groups,
      but there is no general construction.
    unlocks: >-
      A complete picture of the symmetries possible among algebraic numbers, a central
      object of number theory.
    sources:
      - citation: "Serre, J.-P. (1992). Topics in Galois Theory. Jones and Bartlett."
        url: null

further_reading:
  - citation: "Livio, M. (2005). The Equation That Couldn't Be Solved. Simon & Schuster."
    url: null
    note: A popular history of the quintic and of Galois, for general readers.
  - citation: "Stewart, I. (2015). Galois Theory (4th ed.). CRC Press."
    url: null
    note: A clear, historically aware undergraduate textbook.
  - citation: "Edwards, H. M. (1984). Galois Theory. Springer."
    url: null
    note: Develops the theory along Galois's own path, with his memoir translated.
---

## Why the Old Formulas Work

After the cubic and quartic were solved in the sixteenth century, the quintic resisted everyone for two hundred years. In 1770–71 {{fig:lagrange|Joseph-Louis Lagrange}} stepped back and asked *why* the known formulas worked. Each one secretly relied on quantities built from the roots that change in simple ways when the roots are shuffled. For degree five, the same construction produced harder equations, not easier ones. Lagrange suspected the quintic might be unsolvable, and he had moved the subject from the equations themselves to the permutations of their roots.

## No Quintic Formula

In 1799 {{fig:ruffini|Paolo Ruffini}} published a proof that no formula built from radicals solves the general quintic. It was long, had a gap, and was ignored. In 1824 {{fig:abel|Niels Henrik Abel}}, a young Norwegian mathematician, gave a proof that was accepted. Abel spent years seeking a position, and died of tuberculosis at 26. A letter offering him a professorship in Berlin arrived two days later.

Abel had shown that the general quintic has no formula. But some particular quintics do. Which ones, and why?

## Galois

The answer came from {{fig:galois|Évariste Galois}}, a French teenager whose life was as turbulent as his mathematics was deep. He failed the entrance examination of the École Polytechnique twice, was expelled from the École Normale for his republican politics, and spent time in prison. His papers to the Academy were lost or rejected, and Poisson found one incomprehensible. In May 1832, aged twenty, he was killed in a duel whose circumstances are still unclear. The night before, he wrote a letter to a friend summarising his discoveries, scribbling in the margin, "I have no time."

His idea was to study an equation through the *group* of symmetries of its roots. An equation is solvable by radicals exactly when that group can be taken apart into simple abelian steps, and the symmetric group on five letters, the group of the general quintic, cannot. The same insight explains the ruler-and-compass impossibilities of [Euclidean geometry](/math/euclidean-geometry/). Liouville published Galois's work in 1846, and {{fig:camille-jordan|Camille Jordan}}'s 1870 treatise made it widely understood.

## A Method, Not Just a Theorem

Galois's lasting gift was a method: to understand a problem, find its symmetry group. That became [group theory](/math/group-theory/). In 1942 {{fig:artin|Emil Artin}} recast Galois theory in the language of field extensions, and the theory now reaches deep into number theory. Whether every finite group occurs as the symmetries of some equation over the rationals, the inverse Galois problem, is still open.
