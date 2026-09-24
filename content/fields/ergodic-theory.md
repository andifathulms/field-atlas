---
id: ergodic-theory
domain: math
thread: dynamics
name: Ergodic Theory
parent_ids:
  - dynamical-systems
  - real-analysis
era_emerged: 1871 – 1959
core_question: When does the long-run behaviour of one trajectory match the average over all possible states?

summary: |-
  Ergodic theory studies the statistics of motion. A single trajectory of a chaotic system is unpredictable, but the fraction of time it spends in each region can be perfectly regular. The central question is when time averages, taken along one trajectory, equal space averages, taken over all states at once. Systems where they do are called ergodic.

  The idea came from Boltzmann's attempt to derive thermodynamics from the motion of molecules. It was made precise in 1931–32 by the ergodic theorems of Birkhoff and von Neumann, built on the measure theory of real analysis. Kolmogorov and Sinai then gave it a way to measure chaos, entropy, and in 1977 Furstenberg showed that its methods could prove deep theorems about whole numbers.

key_ideas:
  - term: Invariant measure
    definition: >-
      A way of assigning sizes to regions of the state space that the motion does not
      change. Volume in phase space is invariant for the motion of a gas, by Liouville's
      theorem.
    turning_point_id: poincare-recurrence
  - term: Ergodicity
    definition: >-
      A system is ergodic if it cannot be split into two separate invariant parts of
      positive size. Then almost every trajectory visits every region in proportion to
      its size.
    turning_point_id: ergodic-theorems
  - term: Time average equals space average
    definition: >-
      Birkhoff's ergodic theorem: for an ergodic system, the long-run average of a
      quantity along almost every trajectory equals its average over the whole space.
    turning_point_id: ergodic-theorems
  - term: Recurrence
    definition: >-
      In a system that preserves volume in a bounded space, almost every state returns
      arbitrarily close to where it started, again and again.
    turning_point_id: poincare-recurrence
  - term: Entropy
    definition: >-
      The Kolmogorov–Sinai entropy measures how fast a system generates new information,
      that is, how chaotic it is. Systems with different entropies cannot be equivalent.
    turning_point_id: kolmogorov-sinai-entropy

turning_points:
  - id: boltzmann-ergodic-hypothesis
    date: "1871"
    type: CONJECTURE
    title: Boltzmann's ergodic hypothesis
    description: >-
      To derive the laws of heat from the motion of molecules, Ludwig Boltzmann assumes
      that a gas, left to itself, passes through every state of the same energy. Averages
      over time could then be replaced by averages over all states, which can be
      computed. Taken literally the hypothesis is false, but a correct version of it
      became the foundation of ergodic theory.
    contested: false
    sources:
      - citation: "Boltzmann, L. (1871). Einige allgemeine Sätze über Wärmegleichgewicht. Sitzungsberichte der Kaiserlichen Akademie der Wissenschaften Wien 63: 679–711."
        url: null
      - citation: "Moore, C. C. (2015). Ergodic theorem, ergodic theory, and statistical mechanics. Proceedings of the National Academy of Sciences 112(7): 1907–1911."
        url: null

  - id: poincare-recurrence
    date: "1890"
    type: PROOF
    title: The recurrence theorem
    description: >-
      In his prize memoir on the three-body problem, Henri Poincaré proves that a system
      preserving volume in a bounded space returns arbitrarily close to its starting state
      infinitely often. Ernst Zermelo turned it against Boltzmann in 1896: if a gas must
      eventually return to its initial state, how can entropy always increase?
    contested: false
    sources:
      - citation: "Poincaré, H. (1890). Sur le problème des trois corps et les équations de la dynamique. Acta Mathematica 13: 1–270."
        url: null

  - id: ergodic-theorems
    date: 1931 – 1932
    type: PROOF
    title: The ergodic theorems
    description: >-
      John von Neumann proves that time averages converge in an average sense, using the
      mathematics of Hilbert space. George David Birkhoff, hearing of it, quickly proves
      the stronger pointwise version: along almost every single trajectory, time averages
      converge, and for an ergodic system they equal the space average. Boltzmann's
      assumption became a theorem, under precise conditions.
    contested: true
    contested_note: >-
      Von Neumann proved his theorem first and told Birkhoff of it. Birkhoff then proved
      the stronger result, and his paper appeared in print before von Neumann's, which led
      to friction. The two published a note in 1932 clarifying the order of events. Both
      theorems are now credited, with von Neumann's as the first and Birkhoff's as the
      stronger.
    sources:
      - citation: "Birkhoff, G. D. (1931). Proof of the ergodic theorem. Proceedings of the National Academy of Sciences 17(12): 656–660."
        url: null
      - citation: "von Neumann, J. (1932). Proof of the quasi-ergodic hypothesis. Proceedings of the National Academy of Sciences 18(1): 70–82."
        url: null

  - id: kolmogorov-sinai-entropy
    date: 1958 – 1959
    type: REFORMULATION
    title: Entropy for dynamical systems
    description: >-
      Andrey Kolmogorov, adapting Shannon's information theory, defines the entropy of a
      dynamical system, and Yakov Sinai gives the definition its final form. It measures
      how quickly the system produces unpredictability, and it is the same for equivalent
      systems. It settled an old question: two coin-tossing processes with different
      biases are not equivalent.
    contested: false
    sources:
      - citation: "Kolmogorov, A. N. (1958). A new metric invariant of transient dynamical systems and automorphisms of Lebesgue spaces. Doklady Akademii Nauk SSSR 119: 861–864."
        url: null
      - citation: "Sinai, Ya. G. (1959). On the notion of entropy of a dynamical system. Doklady Akademii Nauk SSSR 124: 768–771."
        url: null

  - id: ornstein-isomorphism
    date: "1970"
    type: PROOF
    title: Ornstein's isomorphism theorem
    description: >-
      Donald Ornstein proves the converse for coin-tossing processes: two of them are
      equivalent exactly when they have the same entropy. Entropy is a complete
      description of this kind of pure randomness. Many deterministic chaotic systems
      turned out to be equivalent to coin tossing, so a deterministic system can be
      exactly as random as a random one.
    contested: false
    sources:
      - citation: "Ornstein, D. (1970). Bernoulli shifts with the same entropy are isomorphic. Advances in Mathematics 4(3): 337–352."
        url: null

  - id: furstenberg-szemeredi
    date: "1977"
    type: PROOF
    title: Ergodic theory proves Szemerédi's theorem
    description: >-
      Hillel Furstenberg reproves Szemerédi's theorem on arithmetic progressions by
      translating it into a statement about recurrence in dynamical systems and proving
      that instead. The method went on to prove extensions that combinatorial methods
      could not reach, and opened a lasting exchange between ergodic theory and number
      theory.
    contested: false
    sources:
      - citation: "Furstenberg, H. (1977). Ergodic behavior of diagonal measures and a theorem of Szemerédi on arithmetic progressions. Journal d'Analyse Mathématique 31: 204–256."
        url: null

open_problems:
  - id: furstenberg-times-two-three
    name: Furstenberg's ×2 ×3 conjecture
    status: open
    status_note: Open as of writing; proved in 1990 under an extra assumption of positive entropy.
    description: >-
      Consider the numbers between 0 and 1, and the two maps that multiply by 2 and by 3,
      keeping only the fractional part. Furstenberg conjectured in 1967 that the only
      ergodic ways of spreading out probability that are unchanged by *both* maps are the
      uniform one and those concentrated on finitely many points.
    why_hard: >-
      Each map on its own preserves a huge variety of measures. The conjecture says that
      the two together, because 2 and 3 are multiplicatively independent, are extremely
      rigid. Daniel Rudolph proved it for measures with positive entropy, but the case of
      zero entropy, where no randomness can be exploited, is untouched.
    unlocks: >-
      It is the simplest case of a family of rigidity conjectures whose higher-dimensional
      versions, by Margulis and others, imply results in number theory such as parts of
      Littlewood's conjecture on approximating pairs of numbers by fractions.
    sources:
      - citation: "Rudolph, D. J. (1990). ×2 and ×3 invariant measures and entropy. Ergodic Theory and Dynamical Systems 10(2): 395–406."
        url: null

applications:
  - area: Statistical physics
    title: Why thermodynamics works
    description: >-
      Statistical mechanics computes the properties of a gas by averaging over all
      states of a given energy, instead of following $10^{23}$ molecules. Ergodic theory is
      the justification: when a system is ergodic, this average equals what a
      measurement, taken over time, actually records.
    domain: physics
    field_id: statistical-mechanics
    sources:
      - citation: "Moore, C. C. (2015). Ergodic theorem, ergodic theory, and statistical mechanics. Proceedings of the National Academy of Sciences 112(7): 1907–1911."
        url: null
  - area: Statistics
    title: Markov chain Monte Carlo
    description: >-
      Much of modern Bayesian statistics, and simulations across science, estimate
      averages by running a random process for a long time and averaging along its path.
      The ergodic theorem is why the path average converges to the right answer.
    sources:
      - citation: "Metropolis, N., Rosenbluth, A. W., Rosenbluth, M. N., Teller, A. H. & Teller, E. (1953). Equation of state calculations by fast computing machines. Journal of Chemical Physics 21(6): 1087–1092."
        url: null
  - area: Number theory
    title: Dynamics proves theorems about numbers
    description: >-
      Following Furstenberg, ergodic methods have proved results on arithmetic
      progressions and patterns in the primes, and in 2006 Einsiedler, Katok and
      Lindenstrauss used measure rigidity to show that the exceptions to Littlewood's
      conjecture form a set of dimension zero.
    sources:
      - citation: "Einsiedler, M., Katok, A. & Lindenstrauss, E. (2006). Invariant measures and the set of exceptions to Littlewood's conjecture. Annals of Mathematics 164(2): 513–560."
        url: null

further_reading:
  - citation: "Moore, C. C. (2015). Ergodic theorem, ergodic theory, and statistical mechanics. Proceedings of the National Academy of Sciences 112(7): 1907–1911."
    url: null
    note: A short history of the ergodic theorems and their origins in physics.
  - citation: "Walters, P. (1982). An Introduction to Ergodic Theory. Springer."
    url: null
    note: The standard graduate introduction.
  - citation: "Einsiedler, M. & Ward, T. (2011). Ergodic Theory with a View towards Number Theory. Springer."
    url: null
    note: A textbook that leads from the basics to Furstenberg's theorem and beyond.
---

## Boltzmann's Assumption

A gas contains around $10^{23}$ molecules, far too many to follow. In 1871 {{fig:boltzmann|Ludwig Boltzmann}} proposed a way around it. Assume that the gas, over time, passes through every state with its energy. Then its long-run average behaviour equals the average over all those states, which can be calculated. Thermodynamics would follow from mechanics plus this ergodic hypothesis, a name usually traced to the Greek words for "work" and "path".

The hypothesis was attacked from two sides. Literally, a single trajectory cannot pass through every point of a many-dimensional space. And in 1890 {{fig:poincare|Henri Poincaré}} proved that a system preserving volume in a bounded space must return, again and again, arbitrarily close to where it started. Ernst Zermelo pointed out that a gas must then eventually return to its initial, lower-entropy state, which seemed to contradict the second law. Boltzmann replied that the return times are unimaginably long. The objections showed that the foundations needed exact mathematics.

## The Ergodic Theorems

The mathematics came from [real analysis](/math/real-analysis/). Lebesgue's measure theory could say precisely what "almost every trajectory" and "average over all states" mean. In 1931 {{fig:von-neumann|John von Neumann}} proved that time averages converge, in an averaged sense. {{fig:george-birkhoff|George David Birkhoff}}, told of the result, proved within weeks that they converge along almost every individual trajectory, and published first. For an ergodic system, one that cannot be split into two separate invariant parts, the time average then equals the space average. Boltzmann's assumption had become a theorem with precise conditions. Checking those conditions for a real gas is another matter, and for most physical systems it is still open.

## Measuring Chaos

In 1958 {{fig:kolmogorov|Andrey Kolmogorov}} brought in Shannon's information theory. He defined the entropy of a dynamical system: the rate at which watching it reveals new information. {{fig:yakov-sinai|Yakov Sinai}} gave the definition its final form, and in 1970 {{fig:donald-ornstein|Donald Ornstein}} showed that for random processes like coin tossing, entropy is the whole story. Processes with the same entropy are equivalent. In 1970 Sinai proved that a ball bouncing among convex obstacles, a fully deterministic system, is ergodic and chaotic, and such billiards were later shown to be, in Ornstein's sense, exactly as random as tossing a coin.

## A Closer Look: The First Digits of the Powers of Two

List the powers of two: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, … and look at their first digits: 2, 4, 8, 1, 3, 6, 1, 2, 5, 1, … How often is the first digit a 1?

A number starts with the digit 1 exactly when the fractional part of its base-10 logarithm lies between $0$ and $\log_{10} 2 \approx 0.301$. For $2^n$, the logarithm is $n \log_{10} 2$. So the question is how often the fractional part of $n \times 0.30103\ldots$ lands in the interval $[0, 0.301)$. For $2^{10} = 1024$: $10 \times 0.30103 = 3.0103$, with fractional part $0.0103$, inside the interval.

Adding $\log_{10} 2$ each time and keeping the fractional part is a rotation of a circle of circumference 1 by the angle $0.30103\ldots$ Because $\log_{10} 2$ is irrational, the rotation never repeats, and it is ergodic. {{fig:weyl|Hermann Weyl}} proved in 1916 that the orbit of such a rotation spends time in each arc in proportion to its length, and ergodic theory later explained why: an irrational rotation is ergodic in the strongest possible way, with only one invariant measure. So the first digit is 1 with long-run frequency $\log_{10} 2 \approx 30.1\%$.

Counting confirms it: of $2^1$ to $2^{1000}$, exactly 301 begin with 1. The same argument gives frequency $\log_{10}(1 + 1/d)$ for first digit $d$. Digit 7 should appear about 5.8% of the time, and it does, 56 times in the first thousand, although it first appears only at $2^{46} = 70{,}368{,}744{,}177{,}664$. This is Benford's law, and ergodic theory explains why it holds exactly for the powers of two. Auditors use Benford's law to detect fabricated accounts, whose first digits tend to be too evenly spread.

## Dynamics and Numbers

In 1977 {{fig:hillel-furstenberg|Hillel Furstenberg}} showed that ergodic theory could prove deep results about whole numbers. He translated Szemerédi's theorem on arithmetic progressions, from [extremal combinatorics](/math/extremal-combinatorics/), into a statement about recurrence, and proved that. Since then, the exchange between dynamics and number theory has become one of the most productive in mathematics. Its limits are sharply marked by Furstenberg's own question from 1967: whether multiplying by 2 and by 3 together leaves any exotic statistics unchanged. It is still open.
