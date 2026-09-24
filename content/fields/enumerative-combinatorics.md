---
id: enumerative-combinatorics
domain: math
thread: combinatorics
name: Enumerative Combinatorics
parent_ids: []
era_emerged: c. 200 BCE – 1964
core_question: How many ways can something be arranged, and can the answer be found without listing them all?

summary: |-
  Enumerative combinatorics is the mathematics of counting: how many ways to choose a committee, shuffle a deck, split a number into parts or build a molecule. Listing the possibilities one by one fails quickly, because their number explodes. The subject finds formulas, recurrences and generating functions that give the count directly.

  Counting rules were found independently in India, China, the Islamic world and Europe, and the triangle of binomial coefficients has a different name in each. Euler turned counting into algebra by encoding a sequence of answers as the coefficients of a single power series. After Hardy and Ramanujan brought in complex analysis, and Pólya built symmetry into the count, Gian-Carlo Rota set out in 1964 to make a patchwork of techniques into a unified theory.

key_ideas:
  - term: Binomial coefficient
    definition: >-
      $\binom{n}{k}$, the number of ways to choose $k$ things from $n$. The coefficients
      form Pascal's triangle, where each entry is the sum of the two above it.
    turning_point_id: pascal-triangle
  - term: Generating function
    definition: >-
      A power series $\sum a_n x^n$ whose coefficients are the answers to a counting
      problem. Operations on the series, like multiplying two of them, correspond to
      combining the problems.
    turning_point_id: euler-partitions
  - term: Partition
    definition: >-
      A way of writing a whole number as a sum of positive whole numbers, ignoring order.
      The number 4 has five: $4$, $3+1$, $2+2$, $2+1+1$ and $1+1+1+1$.
    turning_point_id: hardy-ramanujan-partitions
  - term: Counting up to symmetry
    definition: >-
      Counting arrangements that are different only when no rotation, reflection or
      relabelling turns one into the other. Pólya's theorem does this with group theory.
    turning_point_id: polya-enumeration
  - term: Bijective proof
    definition: >-
      Proving two sets are the same size by pairing their elements off one to one,
      without counting either. Combinatorialists prize such proofs because they explain
      *why* two counts agree.
    turning_point_id: rota-foundations

turning_points:
  - id: pascal-triangle
    date: "1654"
    type: PROOF
    title: Pascal's arithmetical triangle
    description: >-
      Blaise Pascal's *Traité du triangle arithmétique*, written in 1654 and printed in
      1665, derives the properties of the triangle of binomial coefficients and uses them
      to divide the stakes in interrupted games of chance. His arguments are among the
      first explicit proofs by mathematical induction. The triangle became the standard
      tool for counting choices.
    contested: true
    contested_note: >-
      The triangle was not Pascal's discovery. Halayudha's tenth-century commentary on
      Pingala describes it in India. Al-Karaji knew it around 1000, Jia Xian in the
      eleventh century and Yang Hui in 1261 in China, and in Italy it was known before
      Pascal as Tartaglia's triangle. The European name reflects Pascal's systematic
      treatment and the influence of his book, not priority.
    sources:
      - citation: "Edwards, A. W. F. (1987). Pascal's Arithmetical Triangle. Charles Griffin / Oxford University Press."
        url: null
      - citation: "Pascal, B. (1665). Traité du triangle arithmétique. Guillaume Desprez, Paris."
        url: null

  - id: euler-partitions
    date: 1740 – 1748
    type: REFORMULATION
    title: Euler turns counting into algebra
    description: >-
      Philippe Naudé asks Leonhard Euler in 1740 how many ways a number can be written as
      a sum of distinct parts. Euler answers by multiplying infinite products of power
      series and reading the counts off the coefficients. In the *Introductio* of 1748
      he proves, among other results, that every number has as many partitions into
      distinct parts as into odd parts. Generating functions became the main engine of
      counting.
    contested: false
    sources:
      - citation: "Euler, L. (1748). Introductio in analysin infinitorum, vol. 1, ch. 16: De partitione numerorum. Bousquet, Lausanne."
        url: null
      - citation: "Andrews, G. E. (1976). The Theory of Partitions. Addison-Wesley."
        url: null

  - id: hardy-ramanujan-partitions
    date: "1918"
    type: PROOF
    title: A formula for the partition numbers
    description: >-
      G. H. Hardy and Srinivasa Ramanujan use complex analysis to find how fast the
      number of partitions $p(n)$ grows. Their formula gives $p(200)$ to the nearest
      whole number, matching Percy MacMahon's hand computation of 3,972,999,029,388. In
      1937 Hans Rademacher refined it into an exact infinite series. It was a striking
      case of analysis answering a counting question exactly.
    contested: false
    sources:
      - citation: "Hardy, G. H. & Ramanujan, S. (1918). Asymptotic formulae in combinatory analysis. Proceedings of the London Mathematical Society (2) 17: 75–115."
        url: null
      - citation: "Rademacher, H. (1937). On the partition function p(n). Proceedings of the London Mathematical Society (2) 43: 241–254."
        url: null

  - id: polya-enumeration
    date: "1937"
    type: REFORMULATION
    title: Pólya's enumeration theorem
    description: >-
      George Pólya shows how to count arrangements that are the same up to symmetry, such
      as necklaces up to rotation, or chemical molecules whose atoms can be
      rearranged in space, by averaging over a group of symmetries. He applies it to
      count chemical isomers and trees. Group theory became a standard counting tool.
    contested: true
    contested_note: >-
      J. Howard Redfield, an American engineer, published essentially the same theorem in
      1927. His paper went unnoticed until Frank Harary drew attention to it in 1960.
      Pólya found the result independently and developed it much further, and it is
      usually called the Pólya, or Redfield–Pólya, enumeration theorem.
    sources:
      - citation: "Pólya, G. (1937). Kombinatorische Anzahlbestimmungen für Gruppen, Graphen und chemische Verbindungen. Acta Mathematica 68: 145–254."
        url: null
      - citation: "Redfield, J. H. (1927). The theory of group-reduced distributions. American Journal of Mathematics 49(3): 433–455."
        url: null

  - id: rota-foundations
    date: "1964"
    type: REFORMULATION
    title: Rota's foundations of combinatorial theory
    description: >-
      Gian-Carlo Rota shows that inclusion–exclusion, the Möbius function of number
      theory and many other counting tricks are one idea, the Möbius function of a
      partially ordered set. His paper opens a series meant to give combinatorics the
      unified foundations other fields already had. Combinatorics began to be treated as a
      subject rather than a collection of puzzles.
    contested: false
    sources:
      - citation: "Rota, G.-C. (1964). On the foundations of combinatorial theory I: Theory of Möbius functions. Zeitschrift für Wahrscheinlichkeitstheorie und verwandte Gebiete 2: 340–368."
        url: null

open_problems:
  - id: hadamard-conjecture
    name: The Hadamard conjecture
    status: open
    status_note: Open as of 2026. In 2026 a team including Levent Alpöge, working with an AI model, announced matrices for 668 and the other missing orders below 2000, so the smallest unknown order is now above 2000.
    description: >-
      A Hadamard matrix is a square grid of $+1$s and $-1$s whose rows are pairwise
      orthogonal: any two rows agree in exactly half their positions. Such a matrix can
      only exist when its size is 1, 2 or a multiple of 4. The conjecture, going back to
      Raymond Paley in 1933, is that one exists for *every* multiple of 4.
    why_hard: >-
      There are several clever constructions, from finite fields and from smaller
      matrices, but each covers only some sizes. The rest have been found by computer
      searches, and the search space grows far too fast to be covered by brute force.
      Order 428 was found only in 2004, and 668, the smallest gap for two decades, only in
      2026.
    unlocks: >-
      Hadamard matrices give the best error-correcting codes of certain kinds, efficient
      experimental designs and signal-processing transforms. A proof would also show that
      a general construction exists, where only special cases are now known.
    sources:
      - citation: "Paley, R. E. A. C. (1933). On orthogonal matrices. Journal of Mathematics and Physics 12: 311–320."
        url: null
      - citation: "Kharaghani, H. & Tayfeh-Rezaie, B. (2005). A Hadamard matrix of order 428. Journal of Combinatorial Designs 13(6): 435–440."
        url: https://doi.org/10.1002/jcd.20043

applications:
  - area: Phylogenetics
    title: Why the tree of life can't be found by brute force
    description: >-
      The number of possible unrooted evolutionary trees for $n$ species is
      $1 \times 3 \times 5 \times \cdots \times (2n-5)$. For just 20 species that is about
      $2.2 \times 10^{20}$. Counting it showed biologists that searching every tree is
      hopeless, and tree-building programs use heuristic searches instead.
    domain: biology
    field_id: evolutionary-biology
    sources:
      - citation: "Felsenstein, J. (1978). The number of evolutionary trees. Systematic Zoology 27(1): 27–33."
        url: null
  - area: Statistical physics
    title: Entropy is a count
    description: >-
      Boltzmann's entropy $S = k \log W$ counts $W$, the number of microscopic
      arrangements consistent with what is observed. The laws of thermodynamics become
      statements about which kinds of arrangement vastly outnumber the others.
    domain: physics
    field_id: statistical-mechanics
    sources:
      - citation: "Boltzmann, L. (1877). Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung. Sitzungsberichte der Kaiserlichen Akademie der Wissenschaften Wien 76: 373–435."
        url: null
  - area: Chemistry
    title: Counting molecules before making them
    description: >-
      Cayley counted the possible alkanes, chains of carbon and hydrogen, in 1875, and
      Pólya's theorem made such counts routine. Chemists use them to know how many
      isomers a formula allows, and drug designers to estimate the size of chemical space.
    sources:
      - citation: "Pólya, G. & Read, R. C. (1987). Combinatorial Enumeration of Groups, Graphs, and Chemical Compounds. Springer."
        url: null

further_reading:
  - citation: "Wilf, H. S. (2006). generatingfunctionology (3rd ed.). A K Peters."
    url: https://www2.math.upenn.edu/~wilf/DownldGF.html
    note: A lively introduction to generating functions. The second edition is free online.
  - citation: "Edwards, A. W. F. (1987). Pascal's Arithmetical Triangle. Charles Griffin / Oxford University Press."
    url: null
    note: The history of the triangle across cultures, and what Pascal added.
  - citation: "Stanley, R. P. (2012). Enumerative Combinatorics, Vol. 1 (2nd ed.). Cambridge University Press."
    url: null
    note: The standard graduate text, with hundreds of exercises.
---

## Counting Before Combinatorics

Counting problems are old. Around the second century BCE the Indian prosodist Pingala asked how many rhythms of long and short syllables a line of verse can have, and his commentators built the triangle of numbers that answers such questions. Bhaskara II gave rules for permutations and combinations in his *Lilavati* around 1150. In China, Jia Xian and Yang Hui used the same triangle to expand powers of $(a + b)$, and it was known in Baghdad and in Italy long before it reached France.

What {{fig:pascal|Blaise Pascal}} added in 1654 was a systematic treatise. He derived the triangle's properties one after another, proving several by what is now called mathematical induction, and applied them to the problem of dividing stakes in an interrupted game. The same numbers count committees, paths through a grid and heads in a run of coin tosses, and they became the basis of [probability theory](/math/probability-theory/).

## Euler's Machine

In 1740 Philippe Naudé wrote to {{fig:euler|Leonhard Euler}} asking how many ways a number can be written as a sum of distinct parts. Euler's reply introduced a method that runs through combinatorics to this day. Multiply out

$$
(1 + x)(1 + x^2)(1 + x^3)(1 + x^4) \cdots
$$

and the coefficient of $x^n$ is the answer, because each way of picking terms from the brackets is a way of choosing distinct parts that add up to $n$. A whole sequence of answers is packed into one function. Algebra on the function, simplifying, multiplying, rearranging, then proves facts about the counts. Euler's *Introductio* of 1748 used it to prove results about partitions that nobody had noticed, let alone proved.

## Hardy and Ramanujan

Partitions grow unpredictably fast. The number 10 has 42 of them, 100 has 190,569,292, and 200 has almost four trillion. In 1918 {{fig:gh-hardy|G. H. Hardy}} and {{fig:srinivasa-ramanujan|Srinivasa Ramanujan}}, the self-taught Indian mathematician Hardy had brought to Cambridge, attacked Euler's generating function with the tools of [complex analysis](/math/complex-analysis/). They studied how it behaves near the edge of its circle of convergence and extracted a formula whose leading term is

$$
p(n) \approx \frac{1}{4n\sqrt3}\, e^{\pi \sqrt{2n/3}} .
$$

{{fig:percy-macmahon|Percy MacMahon}}, a former artillery officer and a formidable calculator, had computed $p(200) = 3{,}972{,}999{,}029{,}388$ by hand. The full formula of Hardy and Ramanujan, with a few correction terms, matched it exactly. Two decades later {{fig:hans-rademacher|Hans Rademacher}} turned it into an exact infinite series. A question about whole numbers had been answered with circles in the complex plane.

## A Closer Look: Two Ways to Break Up Seven

Write 7 as a sum of *distinct* positive whole numbers, ignoring order:

$$
7, \quad 6+1, \quad 5+2, \quad 4+3, \quad 4+2+1 .
$$

There are five. Now write 7 as a sum of *odd* numbers, repeats allowed:

$$
7, \quad 5+1+1, \quad 3+3+1, \quad 3+1+1+1+1, \quad 1+1+1+1+1+1+1 .
$$

Again five. This is no coincidence. Euler proved that for every number the two counts agree, and his generating functions show why in one line. Partitions into distinct parts are counted by $(1+x)(1+x^2)(1+x^3)\cdots$. Each factor can be rewritten as $1 + x^k = \dfrac{1 - x^{2k}}{1 - x^k}$, so the product is

$$
\frac{1-x^2}{1-x} \cdot \frac{1-x^4}{1-x^2} \cdot \frac{1-x^6}{1-x^3} \cdot \frac{1-x^8}{1-x^4} \cdots
$$

Every numerator $1 - x^{2k}$ cancels against a denominator further along. What survives are the denominators with odd exponents:

$$
\frac{1}{(1-x)(1-x^3)(1-x^5)\cdots} .
$$

That is the generating function for partitions into odd parts, since $\frac{1}{1-x^k} = 1 + x^k + x^{2k} + \cdots$ allows any number of copies of the part $k$. Two different counting problems have the same function, so they have the same answers.

Combinatorialists later found a proof that pairs the partitions off directly. If an odd part $k$ appears $m$ times, write $m$ as a sum of distinct powers of two and replace the copies with parts $k$ times each power. Three copies of 1 become $2 + 1$, and two copies of 3 become 6. Every partition into odd parts turns into exactly one partition into distinct parts, and back. That kind of explicit matching, a bijection, has become the standard the field aims for.

## Counting Up to Symmetry

Many counting problems care about shape, not labels. How many different necklaces can be made from four black and four white beads, when turning a necklace round does not make it different? How many molecules have the formula $\text{C}_{6}\text{H}_{14}$? In 1937 {{fig:george-polya|George Pólya}} showed how to average over the group of symmetries to get the answer, as {{fig:j-howard-redfield|J. Howard Redfield}} had in a 1927 paper that almost nobody read. [Group theory](/math/group-theory/) became a counting tool.

By the 1960s the subject was a large collection of techniques with little theory connecting them. {{fig:gian-carlo-rota|Gian-Carlo Rota}} began to supply one in 1964, and counting became a branch of mathematics with its own journals, conjectures and open problems. Some of those problems are about existence rather than number. Whether a Hadamard matrix exists for every multiple of four, a question from 1933, is still open. Order 668 was the smallest missing case until 2026.
