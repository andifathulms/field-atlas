---
id: extremal-combinatorics
domain: math
thread: combinatorics
name: Extremal Combinatorics
parent_ids:
  - graph-theory
  - enumerative-combinatorics
era_emerged: 1916 – 1975
core_question: How large can a structure grow before some pattern is forced to appear inside it?

summary: |-
  Extremal combinatorics asks how big or dense something can be while still avoiding a given pattern. How many edges can a network on $n$ points have without containing a triangle? How many numbers can be picked from 1 to $N$ without three of them forming an evenly spaced progression?

  Its most famous branch, Ramsey theory, shows that complete disorder is impossible. Colour the connections of a large enough network with two colours and a large single-coloured cluster must appear. The theorems say that such order must exist, but not where, and the numbers involved are so hard to pin down that the smallest guaranteed party with five mutual friends or five mutual strangers is still unknown.

key_ideas:
  - term: Ramsey number
    definition: >-
      $R(s, t)$ is the smallest $n$ such that any two-colouring of the connections among
      $n$ points contains $s$ points all joined in the first colour or $t$ in the second.
      $R(3,3) = 6$ and $R(4,4) = 18$.
    turning_point_id: ramsey-theorem
  - term: Unavoidable pattern
    definition: >-
      The theme of Ramsey theory: any sufficiently large structure, however it is
      arranged, contains a regular substructure of a given size.
    turning_point_id: van-der-waerden-theorem
  - term: Extremal number
    definition: >-
      The largest number of edges a graph on $n$ vertices can have without containing a
      given subgraph. Turán found it exactly when the forbidden subgraph is a complete
      graph.
    turning_point_id: turan-theorem
  - term: Density
    definition: >-
      The proportion of a set of whole numbers, measured in the long run. Szemerédi proved
      that any set of positive density contains arithmetic progressions of every length.
    turning_point_id: szemeredi-theorem

turning_points:
  - id: schur-theorem
    date: "1916"
    type: PROOF
    title: Schur's theorem
    description: >-
      While studying Fermat's equation $x^m + y^m = z^m$ modulo primes, Issai Schur proves
      that however the numbers $1, 2, \ldots, N$ are split into a fixed number of
      classes, one class contains a solution of $x + y = z$ once $N$ is large enough. It
      is the first theorem of what became Ramsey theory, found as a step in number theory.
    contested: false
    sources:
      - citation: "Schur, I. (1916). Über die Kongruenz x^m + y^m ≡ z^m (mod p). Jahresbericht der Deutschen Mathematiker-Vereinigung 25: 114–117."
        url: null

  - id: van-der-waerden-theorem
    date: "1927"
    type: PROOF
    title: Van der Waerden's theorem
    description: >-
      Bartel van der Waerden proves a conjecture of Pierre Baudet: split the whole numbers
      into finitely many classes, and one class contains arithmetic progressions of every
      length. The proof, found in a few days of discussion in Hamburg with Artin and
      Schreier, gives astronomically large bounds, and good bounds took seventy years.
    contested: false
    sources:
      - citation: "van der Waerden, B. L. (1927). Beweis einer Baudetschen Vermutung. Nieuw Archief voor Wiskunde 15: 212–216."
        url: null

  - id: ramsey-theorem
    date: "1930"
    type: PROOF
    title: Ramsey's theorem
    description: >-
      Frank Ramsey, a Cambridge philosopher, economist and mathematician, proves as a lemma
      in a paper on logic that any sufficiently large system, however its pairs are
      coloured, contains a large system whose pairs all have the same colour. He died in
      January 1930, aged twenty-six, the year the paper appeared. The lemma gave its name
      to a field.
    contested: false
    sources:
      - citation: "Ramsey, F. P. (1930). On a problem of formal logic. Proceedings of the London Mathematical Society (2) 30: 264–286."
        url: null

  - id: erdos-szekeres
    date: "1935"
    type: PROOF
    title: The happy ending problem
    description: >-
      Esther Klein notices that among any five points in the plane, with no three in a
      line, four form a convex quadrilateral. Paul Erdős and George Szekeres prove that
      for every $n$, enough points always contain a convex $n$-gon, rediscovering
      Ramsey's theorem along the way. Klein and Szekeres married, and Erdős called it the
      "happy ending problem".
    contested: false
    sources:
      - citation: "Erdős, P. & Szekeres, G. (1935). A combinatorial problem in geometry. Compositio Mathematica 2: 463–470."
        url: null

  - id: turan-theorem
    date: "1941"
    type: PROOF
    title: Turán's theorem
    description: >-
      Pál Turán, held in a Hungarian forced labour camp, determines exactly how many edges
      a graph can have without containing a complete graph of a given size, and which
      graph achieves it. The question "how many edges force a given subgraph?" founded extremal graph theory.
    contested: false
    sources:
      - citation: "Turán, P. (1941). Egy gráfelméleti szélsőértékfeladatról. Matematikai és Fizikai Lapok 48: 436–452."
        url: null

  - id: szemeredi-theorem
    date: "1975"
    type: PROOF
    title: Szemerédi's theorem
    description: >-
      Endre Szemerédi proves the Erdős–Turán conjecture of 1936: any set of whole numbers
      of positive density contains arithmetic progressions of every length. The proof,
      famously intricate, introduced the regularity lemma, which says every large graph
      looks approximately random in pieces. In 2004 Ben Green and Terence Tao extended
      the circle of ideas to show that the primes, which have density zero, contain
      arbitrarily long progressions too.
    contested: false
    sources:
      - citation: "Szemerédi, E. (1975). On sets of integers containing no k elements in arithmetic progression. Acta Arithmetica 27: 199–245."
        url: null
      - citation: "Green, B. & Tao, T. (2008). The primes contain arbitrarily long arithmetic progressions. Annals of Mathematics 167(2): 481–547."
        url: null

  - id: diagonal-ramsey-2023
    date: "2023"
    type: PROOF
    title: An exponential improvement for Ramsey numbers
    description: >-
      For almost ninety years the best upper bound for $R(k, k)$ was essentially Erdős and
      Szekeres's $4^k$. Marcelo Campos, Simon Griffiths, Robert Morris and Julian
      Sahasrabudhe prove that it is at most $(4 - \varepsilon)^k$ for a small fixed
      $\varepsilon$, the first exponential improvement. Others quickly sharpened the
      constant.
    contested: false
    sources:
      - citation: "Campos, M., Griffiths, S., Morris, R. & Sahasrabudhe, J. (2023). An exponential improvement for diagonal Ramsey. arXiv:2303.09521."
        url: https://arxiv.org/abs/2303.09521

open_problems:
  - id: ramsey-r55
    name: The value of R(5,5)
    status: open
    status_note: Open as of 2026; known to lie between 43 and 46 (upper bound 2024).
    description: >-
      What is the smallest number of guests at a party that guarantees five mutual
      acquaintances or five mutual strangers? It is at least 43, since Geoffrey Exoo found
      a 42-person arrangement with neither, and at most 46.
    why_hard: >-
      Checking all two-colourings of the connections among 43 people means considering
      $2^{903}$ cases, far beyond any computer, so the bounds come from clever reductions
      and large computations. No general formula for Ramsey numbers is known, and the
      gap between the best upper and lower bounds is exponential.
    unlocks: >-
      Little in practical terms. Its value lies in what it shows about the limits of both
      proof and computation. Erdős said that if aliens demanded $R(5,5)$ on pain of war,
      humanity should put all its computers and mathematicians to work. If they asked for
      $R(6,6)$, we should try to destroy the aliens.
    sources:
      - citation: "Radziszowski, S. P. (2026). Small Ramsey numbers. Electronic Journal of Combinatorics, Dynamic Survey DS1 (revision 18)."
        url: https://www.combinatorics.org/ojs/index.php/eljc/article/view/DS1
      - citation: "Angeltveit, V. & McKay, B. D. (2024). R(5,5) ≤ 46. arXiv:2409.15709."
        url: https://arxiv.org/abs/2409.15709
  - id: happy-ending-conjecture
    name: The happy ending conjecture
    status: open
    status_note: Open as of 2026; proved for hexagons in 2006 and nearly proved asymptotically in 2017.
    description: >-
      Erdős and Szekeres conjectured that $2^{n-2} + 1$ points in the plane, no three in a
      line, always contain a convex $n$-gon, and showed that $2^{n-2}$ points need not.
      It is known for $n$ up to 6.
    why_hard: >-
      The case $n = 6$, 17 points, needed a large computer search. Andrew Suk proved in
      2017 that $2^{n + o(n)}$ points suffice, which matches the conjecture up to lower
      order terms, but closing the remaining gap needs new ideas.
    unlocks: >-
      An exact answer to the problem that brought Ramsey theory to the attention of
      mathematicians, and tools for the many geometric problems it resembles.
    sources:
      - citation: "Suk, A. (2017). On the Erdős–Szekeres convex polygon problem. Journal of the American Mathematical Society 30(4): 1047–1053."
        url: null

applications:
  - area: Number theory
    title: Progressions of primes
    description: >-
      The Green–Tao theorem, that the primes contain arithmetic progressions of every
      length, grew directly from Szemerédi's theorem. Extremal combinatorics has become
      one of the main tools of [analytic number theory](/math/analytic-number-theory/).
    sources:
      - citation: "Green, B. & Tao, T. (2008). The primes contain arbitrarily long arithmetic progressions. Annals of Mathematics 167(2): 481–547."
        url: null
  - area: Information theory
    title: How much can a noisy channel send with zero errors?
    description: >-
      Shannon asked how much information a channel can carry with no chance of error.
      The answer is an extremal quantity of a graph whose edges join signals that can be
      confused. Lovász computed it for the five-cycle in 1979, finding $\sqrt5$.
    sources:
      - citation: "Lovász, L. (1979). On the Shannon capacity of a graph. IEEE Transactions on Information Theory 25(1): 1–7."
        url: null

further_reading:
  - citation: "Graham, R. L., Rothschild, B. L. & Spencer, J. H. (1990). Ramsey Theory (2nd ed.). Wiley."
    url: null
    note: The standard account of Ramsey theory.
  - citation: "Soifer, A. (2009). The Mathematical Coloring Book. Springer."
    url: null
    note: A history of colouring problems, full of stories about the people involved.
  - citation: "Bollobás, B. (1978). Extremal Graph Theory. Academic Press."
    url: null
    note: The classic monograph, by a student of Erdős.
---

## Order From Colouring

The first result of the field was found by accident. In 1916 {{fig:issai-schur|Issai Schur}}, studying Fermat's equation modulo primes, needed a lemma: however the numbers from 1 to $N$ are split into a few classes, some class contains $x$, $y$ and $x + y$ once $N$ is large enough. In 1927 {{fig:van-der-waerden|Bartel van der Waerden}} proved a conjecture of Pierre Baudet with the same flavour: however the whole numbers are split into finitely many classes, one class contains arithmetic progressions of every length. In both cases, splitting up a large enough structure cannot destroy all its regularity.

In 1930 {{fig:frank-ramsey|Frank Ramsey}} proved the general principle for networks, as a lemma in a paper on logic. He died that January, aged twenty-six. His lemma was rediscovered five years later by {{fig:erdos|Paul Erdős}} and {{fig:george-szekeres|George Szekeres}}, working on a question {{fig:esther-klein|Esther Klein}} had raised about convex shapes among points in the plane. Erdős, who spent his life travelling from one collaborator to the next with a suitcase, made the subject his own.

## How Many Edges?

In 1941 {{fig:paul-turan|Pál Turán}}, conscripted into a Hungarian labour camp, asked how many connections a network can have without containing a given cluster, say four points all joined to each other. He found the exact answer and the unique best network: split the points into three groups as evenly as possible and join every pair from different groups. This was the start of extremal graph theory. Its central question, how many edges force a given pattern, has been asked of every kind of structure since.

## A Closer Look: Six People at a Party

Among any six people, there are always three who all know each other or three who are all strangers. To see why, draw six points and join every pair with a red line (acquainted) or a blue line (strangers).

Pick one person, $A$. Of the five lines from $A$, at least three have the same colour, say red, going to $B$, $C$ and $D$. Now look at the three lines among $B$, $C$ and $D$. If any of them is red, it forms a red triangle with $A$. If none is red, all three are blue, and $B$, $C$, $D$ form a blue triangle. Either way, a single-coloured triangle exists. So $R(3,3) \le 6$.

Five people are not enough. Seat them round a table and let each person know only their two neighbours. The red lines form a pentagon and the blue lines form a five-pointed star, and neither contains a triangle. So $R(3,3) = 6$ exactly.

The next case is much harder. $R(4,4) = 18$, proved in 1955 with a clever colouring of 17 points built from the squares modulo 17. For five, the answer is between 43 and 46, and the full search is hopeless: 43 people have $\binom{43}{2} = 903$ pairs, so $2^{903}$ colourings. Ramsey theory can prove that the triangle is always there, but finding the exact threshold is beyond reach for groups barely larger than a dinner party.

## Progressions and Randomness

In 1936 Erdős and Turán conjectured that density alone forces arithmetic progressions: any set containing a fixed positive fraction of the whole numbers contains progressions of every length. {{fig:endre-szemeredi|Endre Szemerédi}} proved it in 1975, in a proof so intricate that his own diagram of its logical structure became famous. Its key tool, the regularity lemma, says that every large graph can be split into pieces between which it behaves almost randomly. Two years later Hillel Furstenberg found a completely different proof using [ergodic theory](/math/ergodic-theory/), and a third proof came from Fourier analysis.

These methods then reached the primes. In 2004 {{fig:ben-green|Ben Green}} and {{fig:terence-tao|Terence Tao}} proved that the primes contain arithmetic progressions of every length. And in 2023 {{fig:marcelo-campos|Marcelo Campos}}, {{fig:simon-griffiths|Simon Griffiths}}, {{fig:rob-morris|Robert Morris}} and {{fig:julian-sahasrabudhe|Julian Sahasrabudhe}} made the first exponential improvement in almost ninety years to the upper bound for Ramsey numbers. Lower bounds for $R(k, k)$ have barely moved since 1947, because the best ones come from randomness, the subject of [probabilistic combinatorics](/math/probabilistic-combinatorics/).
