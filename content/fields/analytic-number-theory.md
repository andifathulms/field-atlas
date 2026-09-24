---
id: analytic-number-theory
domain: math
thread: number-theory
name: Analytic Number Theory
parent_ids:
  - elementary-number-theory
  - complex-analysis
era_emerged: 1737 – 1896
core_question: How are the primes distributed, and why can calculus answer questions about whole numbers?

summary: |-
  Analytic number theory uses the tools of calculus and complex analysis (limits, infinite series, functions of a complex variable) to study whole numbers, above all the primes. The primes look random one at a time, but in bulk they follow precise laws. Near a large number $x$, roughly one number in $\ln x$ is prime.

  Its central object is the Riemann zeta function. The most famous open problem in mathematics, the Riemann hypothesis, is a statement about where that function's zeros lie, and it controls how closely the primes follow their predicted pattern.

key_ideas:
  - term: Prime-counting function
    definition: >-
      $\pi(x)$ is the number of primes up to $x$. The prime number theorem says
      $\pi(x) \sim x / \ln x$: the ratio tends to 1 as $x$ grows.
    turning_point_id: pnt-proved
  - term: Riemann zeta function
    definition: >-
      $\zeta(s) = 1 + \frac{1}{2^s} + \frac{1}{3^s} + \cdots$, extended by Riemann to
      almost all complex numbers $s$. Its zeros encode the fine distribution of the
      primes.
    turning_point_id: riemann-zeta-1859
  - term: Euler product
    definition: >-
      $\zeta(s) = \prod_{p} \frac{1}{1 - p^{-s}}$, a product over all primes. It is the
      bridge between a smooth analytic function and the primes, which is why analysis
      can say anything about them.
    turning_point_id: euler-product
  - term: L-functions
    definition: >-
      Generalisations of the zeta function built from arithmetic data. Dirichlet
      introduced them to count primes in arithmetic progressions. They are now central
      throughout number theory.
    turning_point_id: dirichlet-progressions
  - term: Critical line
    definition: >-
      The vertical line of complex numbers with real part $\tfrac12$. The Riemann
      hypothesis says every nontrivial zero of $\zeta$ lies on it.
    turning_point_id: riemann-zeta-1859

turning_points:
  - id: euler-product
    date: "1737"
    type: PROOF
    title: Euler links the primes to an infinite series
    description: >-
      Leonhard Euler shows that the sum $1 + \frac{1}{2^s} + \frac{1}{3^s} + \cdots$
      equals a product over all primes, and deduces that the sum of the reciprocals of the
      primes diverges, a stronger form of Euclid's theorem. For the first time the primes
      are studied through the analysis of a function.
    contested: false
    sources:
      - citation: "Euler, L. (1744). Variae observationes circa series infinitas. Commentarii academiae scientiarum Petropolitanae 9: 160–188. (Presented 1737.)"
        url: null

  - id: pnt-conjectured
    date: 1792 – 1798
    type: CONJECTURE
    title: The prime number theorem is conjectured
    description: >-
      Studying tables of primes, Carl Friedrich Gauss, as a teenager, and Adrien-Marie
      Legendre both notice that primes thin out like $1/\ln x$, and conjecture how many
      primes lie below $x$. Legendre publishes his formula in 1798. Proving it would take
      another century.
    contested: true
    contested_note: >-
      Legendre published first (1798). Gauss's claim to have found the law in 1792–93,
      at about fifteen, comes from a letter he wrote to Johann Encke in 1849, more than
      fifty years later, and he published nothing on it at the time. Gauss's version,
      the logarithmic integral, is the better approximation.
    sources:
      - citation: "Goldstein, L. J. (1973). A history of the prime number theorem. American Mathematical Monthly 80(6): 599–615."
        url: null

  - id: dirichlet-progressions
    date: "1837"
    type: PROOF
    title: Dirichlet's primes in arithmetic progressions
    description: >-
      Peter Gustav Lejeune Dirichlet proves that any sequence $a, a + d, a + 2d, \ldots$
      with $a$ and $d$ sharing no factor contains infinitely many primes. He does it by
      inventing L-functions and characters, and using calculus to control them. This is
      usually taken as the birth of analytic number theory as a method.
    contested: false
    sources:
      - citation: "Dirichlet, P. G. L. (1837). Beweis des Satzes, dass jede unbegrenzte arithmetische Progression, deren erstes Glied und Differenz ganze Zahlen ohne gemeinschaftlichen Factor sind, unendlich viele Primzahlen enthält. Abhandlungen der Königlich Preussischen Akademie der Wissenschaften: 45–81."
        url: null

  - id: riemann-zeta-1859
    date: "1859"
    type: CONJECTURE
    title: Riemann's paper on the number of primes
    description: >-
      In an eight-page paper, his only one on number theory, Bernhard Riemann extends
      the zeta function to complex numbers and gives an exact formula for counting primes
      in terms of its zeros. In passing he remarks that it is "very probable" all the
      nontrivial zeros have real part $\tfrac12$: the Riemann hypothesis.
    contested: false
    sources:
      - citation: "Riemann, B. (1859). Ueber die Anzahl der Primzahlen unter einer gegebenen Grösse. Monatsberichte der Königlichen Preussischen Akademie der Wissenschaften zu Berlin: 671–680."
        url: null

  - id: pnt-proved
    date: "1896"
    type: PROOF
    title: The prime number theorem is proved
    description: >-
      Jacques Hadamard and Charles-Jean de la Vallée Poussin independently prove that
      $\pi(x) \sim x/\ln x$, by showing that the zeta function has no zeros on the line
      with real part 1. It is exactly the kind of fact about zeros Riemann's programme
      required. The two proofs appeared in the same year, and credit has always been
      shared.
    contested: false
    sources:
      - citation: "Hadamard, J. (1896). Sur la distribution des zéros de la fonction ζ(s) et ses conséquences arithmétiques. Bulletin de la Société Mathématique de France 24: 199–220."
        url: null
      - citation: "de la Vallée Poussin, C.-J. (1896). Recherches analytiques sur la théorie des nombres premiers. Annales de la Société Scientifique de Bruxelles 20."
        url: null

  - id: erdos-selberg
    date: 1948 – 1949
    type: PROOF
    title: An "elementary" proof of the prime number theorem
    description: >-
      Atle Selberg and Paul Erdős find a proof of the prime number theorem that avoids
      complex analysis entirely. Many had believed that impossible, since the theorem
      seemed to be really about the zeros of $\zeta$. Selberg received a Fields Medal in
      1950, partly for this work.
    contested: true
    contested_note: >-
      The proof came out of a brief, intense collaboration that ended in one of the
      bitterest priority disputes in modern mathematics. Selberg had a key inequality.
      Erdős used it to take a crucial step, and Selberg then completed a proof. The two
      could not agree on joint publication, and Selberg published alone. Accounts from
      each side, and from colleagues who took sides, differ on who contributed what.
    sources:
      - citation: "Selberg, A. (1949). An elementary proof of the prime-number theorem. Annals of Mathematics 50(2): 305–313."
        url: null
      - citation: "Goldfeld, D. (2004). The elementary proof of the prime number theorem: an historical perspective. In D. Chudnovsky et al. (eds.), Number Theory: New York Seminar 2003: 179–192. Springer."
        url: null

  - id: bounded-gaps
    date: "2013"
    type: PROOF
    title: Bounded gaps between primes
    description: >-
      Yitang Zhang, then an almost unknown lecturer, proves that infinitely many pairs of
      primes differ by less than 70 million, the first finite bound ever. Within months
      James Maynard (and independently Terence Tao) found a simpler method, and a
      collaborative Polymath project pushed the bound down to 246. The twin prime
      conjecture asks for a gap of 2.
    contested: false
    sources:
      - citation: "Zhang, Y. (2014). Bounded gaps between primes. Annals of Mathematics 179(3): 1121–1174."
        url: null
      - citation: "Maynard, J. (2015). Small gaps between primes. Annals of Mathematics 181(1): 383–413."
        url: null

open_problems:
  - id: riemann-hypothesis
    name: The Riemann hypothesis
    status: open
    status_note: Open since 1859; a Clay Millennium Prize Problem and one of Hilbert's 1900 problems.
    description: >-
      All nontrivial zeros of the Riemann zeta function lie on the critical line, real
      part $\tfrac12$. Trillions of zeros have been checked by computer and every one
      lies on the line. Equivalently, the primes are distributed as regularly as they
      possibly could be: $\pi(x)$ stays within about $\sqrt{x}\,\ln x$ of its predicted
      value.
    why_hard: >-
      The zeta function is defined by an infinite series that stops converging exactly
      in the region where the zeros live. Known methods push the zero-free region only
      slightly beyond Hadamard's line. Hardy proved in 1914 that infinitely many zeros
      are on the critical line, and later work showed that at least 40% are, but not
      all. Many proposed approaches, such as finding the zeros as eigenvalues of some
      operator, have never been made to work.
    unlocks: >-
      Hundreds of published theorems are proved assuming it. A proof would upgrade them
      all and would sharpen nearly every estimate about how primes are spaced.
    sources:
      - citation: "Bombieri, E. (2006). The Riemann hypothesis. In J. Carlson, A. Jaffe & A. Wiles (eds.), The Millennium Prize Problems: 107–124. Clay Mathematics Institute / AMS."
        url: null

  - id: twin-prime-conjecture
    name: The twin prime conjecture
    status: open
    status_note: Open as of 2026. Bounded gaps proved in 2013; the best unconditional gap is 246.
    description: >-
      Are there infinitely many pairs of primes that differ by 2, like 11 and 13, or
      101 and 103? They grow rarer but never seem to stop, and the largest known pair
      has hundreds of thousands of digits.
    why_hard: >-
      Sieve methods, which count primes by crossing out multiples, run into the "parity
      problem": they cannot tell numbers with an even number of prime factors from those
      with an odd number, and a gap of exactly 2 falls on the wrong side of that
      barrier. Zhang and Maynard's methods get to 246, and, assuming stronger
      conjectures, to 6, but not to 2.
    unlocks: >-
      Breaking the parity barrier would be a methodological revolution, opening many
      other additive problems about primes, including Goldbach's.
    sources:
      - citation: "Maynard, J. (2015). Small gaps between primes. Annals of Mathematics 181(1): 383–413."
        url: null

applications:
  - area: Quantum physics
    title: Zeta zeros behave like quantum energy levels
    description: >-
      In 1972 Hugh Montgomery found that the spacings between zeta zeros follow a
      statistical law. Freeman Dyson recognised it at once as the law governing the
      energy levels of heavy atomic nuclei, as modelled by random matrices. Why the
      primes should behave like a quantum chaotic system is unexplained, and it inspires
      hopes of a physical route to the Riemann hypothesis.
    domain: physics
    sources:
      - citation: "Montgomery, H. L. (1973). The pair correlation of zeros of the zeta function. Proceedings of Symposia in Pure Mathematics 24: 181–193."
        url: null
  - area: Cryptography
    title: Finding large primes quickly
    description: >-
      Encryption keys need primes hundreds of digits long. The prime number theorem
      guarantees they are plentiful: about one in every 710 numbers near $2^{1024}$ is
      prime, so testing random candidates finds one fast.
    sources: []

further_reading:
  - citation: "Derbyshire, J. (2003). Prime Obsession: Bernhard Riemann and the Greatest Unsolved Problem in Mathematics. Joseph Henry Press."
    url: null
    note: Alternates history chapters with gentle mathematical ones leading up to the Riemann hypothesis.
  - citation: "du Sautoy, M. (2003). The Music of the Primes. HarperCollins."
    url: null
    note: A popular history of the search for patterns in the primes.
  - citation: "Apostol, T. M. (1976). Introduction to Analytic Number Theory. Springer."
    url: null
    note: The standard first textbook, rigorous and self-contained.
---

## Counting Primes with Calculus

Euclid proved the primes never end, but not how common they are. {{fig:euler|Leonhard Euler}} found the first link between primes and analysis in 1737. The infinite series $1 + \frac{1}{2^s} + \frac{1}{3^s} + \cdots$ equals a product over all the primes,

$$
\sum_{n=1}^{\infty} \frac{1}{n^s} = \prod_{p \text{ prime}} \frac{1}{1 - p^{-s}},
$$

a consequence of unique factorisation written in the language of calculus. From it he deduced that the reciprocals of the primes, $\frac12 + \frac13 + \frac15 + \frac17 + \cdots$, add up to infinity. The primes are rare, but not too rare.

Half a century later, poring over tables, the teenage {{fig:gauss|Gauss}} and {{fig:legendre|Legendre}} each guessed the law: up to $x$, about $x/\ln x$ numbers are prime. In 1837 {{fig:dirichlet|Dirichlet}} proved that primes are spread across all compatible arithmetic progressions, using new functions, now called L-functions, and the full machinery of analysis. The methods of [elementary number theory](/math/elementary-number-theory/) had been left behind.

## Riemann's Eight Pages

In 1859 {{fig:riemann|Bernhard Riemann}}, better known for his work in [geometry](/math/riemannian-geometry/), wrote his only paper on number theory. Using the [complex analysis](/math/complex-analysis/) he had developed in his thesis, he extended Euler's function to complex numbers, where it becomes the zeta function $\zeta(s)$, and showed that the exact count of primes is determined by the locations of its zeros. The primes are, in a precise sense, a sum of waves whose frequencies are those zeros.

He also computed a few zeros and found them all on one vertical line. It was "very probable", he wrote, that all of them lie there, but he had put aside the search for a proof "after some fleeting vain attempts". That remark is the Riemann hypothesis.

## The Theorem, Twice

Riemann's programme took nearly forty years to carry out. In 1896 {{fig:hadamard|Jacques Hadamard}} and {{fig:de-la-vallee-poussin|Charles-Jean de la Vallée Poussin}}, working independently, proved that $\zeta$ has no zeros on the line with real part 1, and deduced the prime number theorem. Both lived past ninety, which prompted a joke that proving it grants long life.

Many believed the theorem was inseparable from complex analysis. In 1948–49 {{fig:selberg|Atle Selberg}} and {{fig:erdos|Paul Erdős}} found a proof using only elementary estimates, and then fell out bitterly over who deserved the credit.

## A Closer Look: How Good Is the Prediction?

The prime number theorem predicts that there are about $x / \ln x$ primes up to $x$. Gauss's refinement, the logarithmic integral $\operatorname{li}(x) = \int_0^x \frac{dt}{\ln t}$, adds up the "probability" $1/\ln t$ that each number near $t$ is prime. Compare both with the true counts:

| $x$ | primes up to $x$, $\pi(x)$ | $x / \ln x$ | $\operatorname{li}(x)$ |
|---|---|---|---|
| $10^6$ | 78,498 | 72,382 | 78,628 |
| $10^9$ | 50,847,534 | 48,254,942 | 50,849,235 |

Both estimates have the right growth, but $\operatorname{li}(x)$ is far better. Up to a billion it is off by about 1,700, where $x/\ln x$ is off by more than two and a half million.

How large can the error $\pi(x) - \operatorname{li}(x)$ get? That is exactly what the Riemann hypothesis controls. If it is true, the error never grows much faster than $\sqrt{x}\,\ln x$, about the size of the fluctuations in a random walk of $x$ steps. At $x = 10^9$ that scale is about 660,000. Lowell Schoenfeld's explicit form of the bound, $\frac{1}{8\pi}\sqrt{x}\,\ln x$, is about 26,000. The actual error is 1,701, well inside it. Riemann's explicit formula shows where the error comes from: each zero of the zeta function contributes a wave to the count of primes. Zeros on the critical line produce waves of the smallest possible size. A zero off the line would produce a larger wave, and the primes would be measurably less regular than they appear.

The table also hides a surprise. In every computed case $\operatorname{li}(x)$ *over*estimates $\pi(x)$, and for a century it was assumed to always do so. In 1914 Littlewood proved that the two swap places infinitely often, but the first crossing lies beyond the range of any computer: somewhere below about $10^{316}$, by current bounds.

## Gaps and the Fog

The biggest questions remain. The Riemann hypothesis has resisted more than 160 years of attempts, even as trillions of zeros have been checked. The twin prime conjecture, that primes 2 apart never run out, looked hopeless until 2013. Then {{fig:yitang-zhang|Yitang Zhang}}, a little-known lecturer who had once worked in a sandwich shop, proved that some fixed gap below 70 million occurs infinitely often. {{fig:maynard|James Maynard}} and a worldwide online collaboration soon brought the bound down to 246. The last step, from 246 to 2, needs an idea no one yet has.
