---
id: probabilistic-combinatorics
domain: math
thread: combinatorics
name: Probabilistic Combinatorics
parent_ids:
  - extremal-combinatorics
  - probability-theory
era_emerged: 1947 – 1975
core_question: Can chance prove that something exists, and what does a typical large network look like?

summary: |-
  Probabilistic combinatorics uses probability to prove things that have nothing to do with chance. To show that an object with some property exists, build one at random and show that the probability of success is above zero. If it is, a successful object must exist, even though the proof gives no way of finding it.

  Paul Erdős introduced the method in 1947 and used it all his life. With Alfréd Rényi he then studied random networks for their own sake and found that they change character suddenly, like water freezing, as connections are added. The method is now standard across combinatorics, computer science and the study of real networks, and it has left a strange gap: many objects that random constructions prove exist in abundance still cannot be written down explicitly.

key_ideas:
  - term: The probabilistic method
    definition: >-
      Prove that something exists by showing that a randomly chosen candidate has it with
      positive probability. The simplest form: if the expected number of bad events is
      less than 1, some outcome has no bad events at all.
    turning_point_id: erdos-random-ramsey
  - term: Random graph
    definition: >-
      A network on $n$ points in which each possible connection is present independently
      with probability $p$. It models "a typical network" and is the baseline against
      which real networks are compared.
    turning_point_id: erdos-renyi-graphs
  - term: Threshold
    definition: >-
      A value of $p$ at which the probability of some property jumps from nearly 0 to
      nearly 1. Random graphs have thresholds for connectivity, for cycles and for a
      giant connected piece.
    turning_point_id: kahn-kalai-proof
  - term: Local lemma
    definition: >-
      If many bad events are each unlikely and each depends on only a few of the others,
      there is a positive chance that none of them happens. It works even when that
      chance is tiny.
    turning_point_id: lovasz-local-lemma

turning_points:
  - id: erdos-random-ramsey
    date: "1947"
    type: PROOF
    title: A random colouring beats every explicit one
    description: >-
      Paul Erdős shows in a three-page paper that the Ramsey number $R(k, k)$ is larger than
      $2^{k/2}$, by colouring the connections of a network at random and showing that
      with positive probability no large single-coloured cluster appears. No explicit
      colouring came close. The probabilistic method began here.
    contested: false
    sources:
      - citation: "Erdős, P. (1947). Some remarks on the theory of graphs. Bulletin of the American Mathematical Society 53(4): 292–294."
        url: null

  - id: erdos-girth-chromatic
    date: "1959"
    type: DISPROOF
    title: Networks with no short cycles that need many colours
    description: >-
      It seemed natural that a network needing many colours must contain small tight
      clusters. Erdős proves the opposite with a random construction: there are networks
      with no short cycles at all that still need as many colours as anyone likes. The
      need for colours can be a global property, invisible in every small region.
    contested: false
    sources:
      - citation: "Erdős, P. (1959). Graph theory and probability. Canadian Journal of Mathematics 11: 34–38."
        url: null

  - id: erdos-renyi-graphs
    date: 1959 – 1960
    type: REFORMULATION
    title: The evolution of random graphs
    description: >-
      Paul Erdős and Alfréd Rényi study what a random network looks like as connections
      are added one by one. They find sudden transitions. Most strikingly, when the
      average number of connections per point passes 1, a single giant connected piece
      appears almost at once. Random networks became objects of study in their own right.
      Edgar Gilbert introduced the same model independently in 1959.
    contested: false
    sources:
      - citation: "Erdős, P. & Rényi, A. (1960). On the evolution of random graphs. Publications of the Mathematical Institute of the Hungarian Academy of Sciences 5: 17–61."
        url: null
      - citation: "Gilbert, E. N. (1959). Random graphs. Annals of Mathematical Statistics 30(4): 1141–1144."
        url: null

  - id: lovasz-local-lemma
    date: "1975"
    type: PROOF
    title: The Lovász local lemma
    description: >-
      Paul Erdős and László Lovász prove that if many unlikely bad events each depend on
      only a few others, there is a positive probability that none occurs. It extends the
      probabilistic method to cases where success is exponentially rare. For 35 years it
      gave no way to find the good outcome, until Robin Moser and Gábor Tardos found a
      simple algorithm in 2009.
    contested: false
    sources:
      - citation: "Erdős, P. & Lovász, L. (1975). Problems and results on 3-chromatic hypergraphs and some related questions. In Infinite and Finite Sets, Colloquia Mathematica Societatis János Bolyai 10: 609–627."
        url: null
      - citation: "Moser, R. A. & Tardos, G. (2010). A constructive proof of the general Lovász local lemma. Journal of the ACM 57(2): 11."
        url: null

  - id: kahn-kalai-proof
    date: "2022"
    type: PROOF
    title: The Kahn–Kalai conjecture
    description: >-
      Jeff Kahn and Gil Kalai conjectured in 2006 that the threshold for any property of
      random networks is close to a simple estimate based on counting expected copies of
      the structures that force it. Jinyoung Park and Huy Tuan Pham prove it in a paper of
      a few pages. Many individually hard threshold results follow at once.
    contested: false
    sources:
      - citation: "Park, J. & Pham, H. T. (2024). A proof of the Kahn–Kalai conjecture. Journal of the American Mathematical Society 37(1): 235–243."
        url: null

open_problems:
  - id: explicit-ramsey-graphs
    name: Explicit Ramsey graphs
    status: open
    status_note: Open as of writing; explicit constructions have improved greatly since 2016 but remain far from random ones.
    description: >-
      Erdős proved in 1947 that most colourings of a network on $2^{k/2}$ points have no
      single-coloured cluster of size $k$. Can anyone describe such a colouring
      explicitly, by a rule that a computer can apply quickly? Erdős offered a prize for
      it.
    why_hard: >-
      Almost every colouring works, but every rule simple enough to write down seems to
      create the very structure it must avoid. Explicit constructions of the right
      strength are closely connected to producing good randomness from weak sources, a
      central problem in theoretical computer science.
    unlocks: >-
      Explicit Ramsey graphs are equivalent to strong "randomness extractors", which
      convert imperfect random sources, like physical noise, into nearly perfect random
      bits for cryptography and algorithms.
    sources:
      - citation: "Chattopadhyay, E. & Zuckerman, D. (2019). Explicit two-source extractors and resilient functions. Annals of Mathematics 189(3): 653–705."
        url: null

applications:
  - area: Communications
    title: Random graphs inside every phone call
    description: >-
      Low-density parity-check codes, which correct errors in Wi-Fi, 5G and satellite
      television, are built from sparse random-like graphs. Robert Gallager introduced
      them in 1962, and they were largely forgotten until the 1990s, when they were shown
      to come close to Shannon's theoretical limit.
    sources:
      - citation: "Gallager, R. G. (1962). Low-density parity-check codes. IRE Transactions on Information Theory 8(1): 21–28."
        url: null
  - area: Epidemiology
    title: When an outbreak becomes an epidemic
    description: >-
      The giant component of a random network is the mathematical form of an epidemic
      threshold: if each case causes on average more than one new case, a large outbreak
      becomes possible. Network models refine the classical threshold for populations
      whose contacts are very uneven.
    domain: biology
    sources:
      - citation: "Pastor-Satorras, R. & Vespignani, A. (2001). Epidemic spreading in scale-free networks. Physical Review Letters 86(14): 3200–3203."
        url: null
  - area: Computer science
    title: Expander graphs
    description: >-
      Sparse networks that are nonetheless extremely well connected are easy to prove
      exist by random construction, and they are used in error correction, network design
      and reducing the randomness algorithms need. Building them explicitly became a major
      achievement in its own right.
    sources:
      - citation: "Hoory, S., Linial, N. & Wigderson, A. (2006). Expander graphs and their applications. Bulletin of the American Mathematical Society 43(4): 439–561."
        url: null

further_reading:
  - citation: "Hoffman, P. (1998). The Man Who Loved Only Numbers. Hyperion."
    url: null
    note: A biography of Paul Erdős, for general readers.
  - citation: "Alon, N. & Spencer, J. H. (2016). The Probabilistic Method (4th ed.). Wiley."
    url: null
    note: The standard textbook, with a short essay on Erdős's style between chapters.
  - citation: "Bollobás, B. (2001). Random Graphs (2nd ed.). Cambridge University Press."
    url: null
    note: The comprehensive account of random graph theory.
---

## Proof by Coin Toss

In 1947 {{fig:erdos|Paul Erdős}} wanted to show that large networks can be coloured without creating big single-coloured clusters, which would put a lower bound on Ramsey numbers from [extremal combinatorics](/math/extremal-combinatorics/). Nobody could construct such colourings. Erdős did not try. He coloured each connection by tossing a coin and showed that the expected number of bad clusters was less than one, so some colouring must have none. The argument took a page. Its bound, $R(k,k) > 2^{k/2}$, has barely been improved since, and no explicit colouring matches it.

The method uses the tools of [probability theory](/math/probability-theory/) but its conclusions are certain. The randomness is a device for counting: "positive probability" just means "at least one". In 1959 Erdős used it for a result that seemed paradoxical: networks with no short cycles, which look sparse and tree-like everywhere up close, that still need any number of colours.

## The Giant Component

With {{fig:alfred-renyi|Alfréd Rényi}}, Erdős then turned the method around and studied random networks themselves. Start with $n$ isolated points and add connections at random. At first the network is a dust of small pieces. When the average number of connections per point passes 1, a giant piece suddenly appears, containing a fixed fraction of all the points, while the next largest pieces stay tiny. It is a phase transition, like water turning to ice, and it happens in a network with no physics in it. {{fig:edgar-gilbert|Edgar Gilbert}} at Bell Labs had defined the same model independently.

Random graphs became the reference point for real networks. When a social network or a food web differs from a random one, the difference is the interesting part.

## A Closer Look: Colouring a Thousand Points by Coin Toss

Take 1,000 points and join every pair. Colour each of the $\binom{1000}{2}$ connections red or blue by tossing a fair coin. Is there a group of 20 points whose connections all have the same colour?

A given group of 20 points has $\binom{20}{2} = 190$ connections among them. The chance that all 190 come out red is $2^{-190}$, and the same for blue, so the chance that this group is single-coloured is $2 \times 2^{-190} = 2^{-189}$. There are $\binom{1000}{20} \approx 3.4 \times 10^{41}$ groups of 20. So the expected number of single-coloured groups is

$$
\binom{1000}{20} \cdot 2^{-189} \approx 3.4 \times 10^{41} \times 1.3 \times 10^{-57} \approx 4 \times 10^{-16} .
$$

The expected number is an average over all colourings. If every colouring had at least one single-coloured group, the average would be at least 1. It is far smaller, so at least one colouring has none. In fact almost all of them have none. Therefore $R(20, 20) > 1000$.

Yet no one knows how to write down such a colouring. Checking a proposed colouring directly means examining all $3.4 \times 10^{41}$ groups, and no explicit rule for colouring is known to work. This is the gap Erdős opened: a proof that the needle is almost all of the haystack, with no way to point to a single piece of it.

## Thresholds and Algorithms

The method kept growing. In 1975 Erdős and {{fig:laszlo-lovasz|László Lovász}} proved the local lemma, which finds good outcomes even when they are extremely rare, provided the bad events are only locally dependent. For decades it proved existence only, until {{fig:robin-moser|Robin Moser}} and {{fig:gabor-tardos|Gábor Tardos}} showed in 2009 that a simple procedure, fixing any violated condition by resampling its random choices, finds a good outcome quickly.

In 2006 {{fig:jeff-kahn|Jeff Kahn}} and {{fig:gil-kalai|Gil Kalai}} conjectured that the threshold for any property of random graphs is determined, up to a logarithmic factor, by a simple counting estimate. Most experts expected it to be very hard. In 2022 {{fig:jinyoung-park|Jinyoung Park}} and {{fig:huy-tuan-pham|Huy Tuan Pham}} proved it in a few pages. The field's oldest question, how to construct explicitly what randomness produces so easily, is still open, and it is now also a central question of [computational complexity](/math/computational-complexity/).
