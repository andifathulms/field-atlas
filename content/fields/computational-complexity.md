---
id: computational-complexity
domain: math
thread: foundations
name: Computational Complexity
parent_ids:
  - computability-theory
era_emerged: 1965 – 1972
core_question: Which problems can be solved efficiently, and why do some seem to need astronomical time?

summary: |-
  Computability asks what can be computed at all. Complexity asks what can be computed *in practice*, with time and memory that do not explode as the problem grows. Problems solvable in time growing like a polynomial in the input size form the class P, the "efficiently solvable" ones. Problems whose solutions can at least be *checked* efficiently form the class NP.

  Thousands of important problems, including scheduling, routing, protein folding and circuit design, are "NP-complete": solving any one of them efficiently would solve all of NP. Whether that is possible, the P versus NP question, is the central open problem of computer science. Modern cryptography assumes that it is not.

key_ideas:
  - term: Polynomial time (P)
    definition: >-
      Problems solvable in a number of steps bounded by a polynomial in the input size,
      like $n^2$ or $n^3$. It is the standard formal meaning of "efficient".
    turning_point_id: cobham-edmonds
  - term: NP
    definition: >-
      Problems whose proposed solutions can be *verified* in polynomial time. Sudoku is an
      example: hard to solve in general, easy to check.
    turning_point_id: cook-levin
  - term: NP-completeness
    definition: >-
      The hardest problems in NP. Every NP problem can be translated into any one of them,
      so an efficient algorithm for one would give an efficient algorithm for all.
    turning_point_id: cook-levin
  - term: Reduction
    definition: >-
      Transforming one problem into another efficiently, so that solving the second solves
      the first. Reductions are how hardness spreads from problem to problem.
    turning_point_id: karp-21
  - term: Hardness of approximation
    definition: >-
      For many NP-complete problems, even finding an approximately optimal answer is
      NP-hard beyond a precise threshold. The PCP theorem is the key to proving this.
    turning_point_id: pcp-theorem

turning_points:
  - id: cobham-edmonds
    date: "1965"
    type: REFORMULATION
    title: Polynomial time as the meaning of "efficient"
    description: >-
      Juris Hartmanis and Richard Stearns found the study of time complexity, proving that
      more time allows more problems to be solved. Alan Cobham and Jack Edmonds propose
      that "efficient" should mean polynomial time. Edmonds, in a paper on matchings,
      explicitly contrasts it with brute-force search. Complexity gets its central
      definitions.
    contested: false
    sources:
      - citation: "Edmonds, J. (1965). Paths, trees, and flowers. Canadian Journal of Mathematics 17: 449–467."
        url: null
      - citation: "Hartmanis, J. & Stearns, R. E. (1965). On the computational complexity of algorithms. Transactions of the AMS 117: 285–306."
        url: null

  - id: cook-levin
    date: 1971 – 1973
    type: PROOF
    title: The Cook–Levin theorem
    description: >-
      Stephen Cook proves that the satisfiability problem for logical formulas is
      NP-complete: any problem whose solutions can be checked quickly can be translated
      into it. The question "does P equal NP?" is posed in its modern form. Leonid Levin
      independently reaches the same idea in the USSR.
    contested: true
    contested_note: >-
      Levin found NP-completeness independently, around 1971, but publication in the
      Soviet Union was delayed until 1973 and his work was little known in the West for
      years, so the theorem is now named for both. In 1989 a 1956 letter from Kurt Gödel
      to John von Neumann surfaced. It asks, in effect, whether proofs can be found in
      time proportional to their length or its square, an early statement of the P versus NP
      question.
    sources:
      - citation: "Cook, S. A. (1971). The complexity of theorem-proving procedures. In Proceedings of the Third Annual ACM Symposium on Theory of Computing: 151–158."
        url: null
      - citation: "Levin, L. A. (1973). Universal sequential search problems. Problemy Peredachi Informatsii 9(3): 115–116. (In Russian.)"
        url: null

  - id: karp-21
    date: "1972"
    type: PROOF
    title: Karp's 21 NP-complete problems
    description: >-
      Richard Karp shows that 21 well-known problems, including Hamiltonian circuit,
      graph colouring, clique and knapsack, are all NP-complete by reducing satisfiability
      to them. Hardness is revealed as the rule, not the exception, across operations
      research, graph theory and scheduling.
    contested: false
    sources:
      - citation: "Karp, R. M. (1972). Reducibility among combinatorial problems. In R. E. Miller & J. W. Thatcher (eds.), Complexity of Computer Computations: 85–103. Plenum."
        url: null

  - id: complexity-barriers
    date: 1975 – 2009
    type: CRISIS
    title: The barriers to proving P ≠ NP
    description: >-
      Three results show that whole families of techniques cannot settle P versus NP.
      Relativisation (Baker, Gill and Solovay, 1975) rules out simulation arguments like
      Turing's diagonalisation. Natural proofs (Razborov and Rudich, 1994) rule out most
      known circuit lower-bound methods, if strong cryptography exists. Algebrisation
      (Aaronson and Wigderson, 2008–09) rules out their combinations. The field knows its
      tools are not enough.
    contested: false
    sources:
      - citation: "Baker, T., Gill, J. & Solovay, R. (1975). Relativizations of the P =? NP question. SIAM Journal on Computing 4(4): 431–442."
        url: null
      - citation: "Razborov, A. A. & Rudich, S. (1997). Natural proofs. Journal of Computer and System Sciences 55(1): 24–35."
        url: null

  - id: pcp-theorem
    date: 1992 – 1998
    type: PROOF
    title: The PCP theorem
    description: >-
      A group of researchers, among them Sanjeev Arora and Shmuel Safra, and Arora, Lund,
      Motwani, Sudan and Szegedy, prove that every NP proof can be rewritten so that a
      verifier reading only a constant number of its bits, chosen at random, can check it
      with high confidence. The theorem shows that for many problems even *approximate* solutions
      are NP-hard, and it transformed the theory of approximation.
    contested: false
    sources:
      - citation: "Arora, S. & Safra, S. (1998). Probabilistic checking of proofs: a new characterization of NP. Journal of the ACM 45(1): 70–122."
        url: null
      - citation: "Arora, S., Lund, C., Motwani, R., Sudan, M. & Szegedy, M. (1998). Proof verification and the hardness of approximation problems. Journal of the ACM 45(3): 501–555."
        url: null

open_problems:
  - id: p-vs-np
    name: P versus NP
    status: open
    status_note: Open as of 2026; a Clay Millennium Prize Problem. Most researchers believe P ≠ NP.
    description: >-
      Can every problem whose solution can be checked quickly also be solved quickly? If
      P = NP, finding would be no harder than checking: proofs, schedules and designs could
      be produced as easily as they are verified. If P ≠ NP, as almost everyone believes,
      some problems are intrinsically hard.
    why_hard: >-
      Proving P ≠ NP means proving that no algorithm at all, including ones no one has
      imagined, solves an NP-complete problem quickly. The known barriers show that
      diagonalisation, most circuit-counting methods and their combinations cannot do it.
      Geometric complexity theory, which uses algebraic geometry and representation theory,
      is one of the few programmes aimed past the barriers.
    unlocks: >-
      A proof of P ≠ NP would put cryptography's hardness assumptions on firmer ground,
      though it would not alone prove any particular system secure. A proof of P = NP with
      a practical algorithm would transform optimisation and mathematics, and break most of
      today's encryption.
    sources:
      - citation: "Cook, S. (2006). The P versus NP problem. In J. Carlson, A. Jaffe & A. Wiles (eds.), The Millennium Prize Problems: 87–104. Clay Mathematics Institute / AMS."
        url: null
      - citation: "Fortnow, L. (2013). The Golden Ticket: P, NP, and the Search for the Impossible. Princeton University Press."
        url: null

applications:
  - area: Genomics
    title: "Assembling genomes: an easy path instead of a hard one"
    description: >-
      Reassembling a genome from millions of short DNA reads looks like finding a path
      through every read, a Hamiltonian path, which is NP-complete. Pevzner, Tang and
      Waterman recast it as an *Eulerian* path through a de Bruijn graph built from the
      reads, which can be found in linear time. Complexity theory pointed to the reformulation that made modern
      genome assembly feasible.
    domain: biology
    field_id: genomics
    sources:
      - citation: "Pevzner, P. A., Tang, H. & Waterman, M. S. (2001). An Eulerian path approach to DNA fragment assembly. Proceedings of the National Academy of Sciences 98(17): 9748–9753."
        url: null
  - area: Structural biology
    title: Protein folding is NP-hard in simple models
    description: >-
      Even in simplified lattice models, finding a protein's lowest-energy fold is
      NP-complete. Cells are not solving NP-complete problems in general, so real
      proteins must be special, and prediction methods like AlphaFold exploit patterns
      rather than brute force.
    domain: biology
    sources:
      - citation: "Berger, B. & Leighton, T. (1998). Protein folding in the hydrophobic-hydrophilic (HP) model is NP-complete. Journal of Computational Biology 5(1): 27–40."
        url: null
  - area: Industry
    title: SAT solvers and scheduling
    description: >-
      NP-completeness says hard instances exist, not that typical ones are hard. Modern
      SAT solvers routinely handle industrial instances with millions of variables, and
      they are used to verify chips, schedule factories and check software.
    sources: []

further_reading:
  - citation: "Fortnow, L. (2013). The Golden Ticket: P, NP, and the Search for the Impossible. Princeton University Press."
    url: null
    note: A popular introduction to P versus NP and why it matters.
  - citation: "Aaronson, S. (2013). Quantum Computing Since Democritus. Cambridge University Press."
    url: null
    note: A witty tour of computability, complexity and quantum computing.
  - citation: "Arora, S. & Barak, B. (2009). Computational Complexity: A Modern Approach. Cambridge University Press."
    url: null
    note: The standard graduate textbook.
---

## From Possible to Practical

[Computability theory](/math/computability-theory/) sorted problems into solvable and unsolvable. But once real computers existed, a solvable problem that needs longer than the age of the universe was no better than an unsolvable one. In 1965 {{fig:hartmanis|Juris Hartmanis}} and Richard Stearns began measuring problems by the time they need, and {{fig:edmonds|Jack Edmonds}} and Alan Cobham proposed a dividing line. An algorithm is efficient if its running time grows like a polynomial in the input size, not exponentially. Edmonds contrasted his efficient algorithm for matching with brute-force search and asked, in effect, which problems allow the former.

## NP-Completeness

In 1971 {{fig:stephen-cook|Stephen Cook}} identified the class NP, problems whose solutions can be *checked* in polynomial time, and proved that one of them, deciding whether a logical formula can be made true, is as hard as every other. In Moscow, {{fig:levin|Leonid Levin}} had reached the same insight, but it reached print only in 1973. A year after Cook, {{fig:karp|Richard Karp}} showed that 21 central problems (Hamiltonian circuit, graph colouring, knapsack) are all NP-complete. Efficiently solve one and you solve them all.

That turned an engineering frustration into a single mathematical question: does P equal NP? It later emerged that {{fig:goedel|Gödel}} had asked something like it in a 1956 letter to a dying von Neumann: could a machine find proofs as quickly as they can be checked?

## Barriers

Most researchers believe P ≠ NP, and nobody can prove it. Worse, the field has proved that its own tools are inadequate. Diagonalisation, the trick behind Cantor, Gödel and Turing, cannot work: Baker, Gill and Solovay showed in 1975 that it gives the same answers in worlds where P = NP and where it does not. {{fig:razborov|Alexander Razborov}} and Steven Rudich showed in 1994 that most known methods for proving circuits must be large would, if they worked, also break cryptography. Algebraic methods were ruled out in 2008–09. Knowing exactly why the problem is hard is itself a major result.

## A Closer Look: Easy to Check, Hard to Find

Here is a small instance of the satisfiability problem (SAT). Can true/false values be chosen for $a$, $b$ and $c$ to make all of these clauses true at once?

$$
(a \vee b) \;\wedge\; (\neg a \vee c) \;\wedge\; (\neg b \vee \neg c) \;\wedge\; (b \vee c)
$$

Try $a = \text{true}$, $b = \text{false}$, $c = \text{true}$. The clauses become (true or false), (false or true), (true or false) and (false or true), all true. Checking a proposed answer took a few seconds. That is what it means for SAT to be in NP: a solution, once found, can be verified quickly.

*Finding* one is another matter. With $n$ variables there are $2^n$ possible assignments. For 3 variables that is 8, easily checked by hand. For 100 variables it is

$$
2^{100} \approx 1.27 \times 10^{30} .
$$

A computer testing a billion assignments per second would need about $4 \times 10^{13}$ years, thousands of times the age of the universe. Clever algorithms do far better than brute force on typical instances, which is why industrial SAT solvers work. But no known algorithm avoids exponential time on the hardest instances.

The Cook–Levin theorem says SAT is NP-*complete*: any problem whose solutions can be checked quickly can be translated into a SAT instance of manageable size. A fast algorithm for SAT would therefore give fast algorithms for scheduling, routing, protein-folding models, theorem-proving and thousands of other problems. P versus NP asks whether that fast algorithm exists. Almost everyone believes it does not, and no one can prove it.

## Hard Problems, Useful Hardness

Hardness has uses. The security of [public-key cryptography](/math/public-key-cryptography/) rests on problems believed to lie outside P. The PCP theorem of the 1990s showed that for many problems even approximate answers are hard, which tells engineers when to stop looking for perfect algorithms. Knowing which problems are hard also points to better formulations. [Genomics](/biology/genomics/) avoided an NP-complete version of genome assembly by recasting it as an easy one. The deepest question of the Foundations Thread, whether finding is harder than checking, is still unmapped.
