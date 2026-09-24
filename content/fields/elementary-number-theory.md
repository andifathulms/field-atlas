---
id: elementary-number-theory
domain: math
thread: number-theory
name: Elementary Number Theory
parent_ids:
  - euclidean-geometry
era_emerged: c. 300 BCE – 1801
core_question: What can be proved about the whole numbers and how they divide one another?

summary: |-
  Number theory studies the whole numbers 1, 2, 3, … and, above all, the primes: numbers like 2, 3, 5, 7 and 11 that cannot be split into smaller factors. Every whole number is built from primes in exactly one way, so primes are the atoms of arithmetic.

  "Elementary" means the methods, not the difficulty. Its questions can be stated to a child, and some of them have resisted the best mathematicians for centuries. Fermat's Last Theorem began here, and so did the arithmetic that secures the internet.

key_ideas:
  - term: Prime number
    definition: >-
      A whole number greater than 1 whose only divisors are 1 and itself. Euclid proved
      there are infinitely many.
    turning_point_id: euclid-primes
  - term: Fundamental theorem of arithmetic
    definition: >-
      Every whole number greater than 1 factors into primes in exactly one way, apart
      from order: $360 = 2^3 \cdot 3^2 \cdot 5$. Its failure in larger number systems
      created algebraic number theory.
    turning_point_id: gauss-disquisitiones
  - term: Congruence
    definition: >-
      $a \equiv b \pmod{n}$ means $a$ and $b$ leave the same remainder when divided by
      $n$: "clock arithmetic". Gauss's notation turned divisibility into an algebra.
    turning_point_id: gauss-disquisitiones
  - term: Fermat's little theorem
    definition: >-
      If $p$ is prime and $a$ is not a multiple of $p$, then $a^{p-1} \equiv 1 \pmod p$.
      Stated by Fermat in 1640, proved by Euler, and now at the heart of RSA
      encryption.
    turning_point_id: euler-fermat-numbers
  - term: Diophantine equation
    definition: >-
      An equation whose solutions must be whole numbers (or fractions), like
      $x^2 + y^2 = z^2$. Named after Diophantus of Alexandria.
    turning_point_id: diophantus-arithmetica

turning_points:
  - id: euclid-primes
    date: c. 300 BCE
    type: PROOF
    title: Euclid proves the primes never end
    description: >-
      Books VII–IX of the *Elements* turn from geometry to whole numbers. They give the
      Euclidean algorithm for greatest common divisors, a recipe for building even
      perfect numbers, and Book IX, Proposition 20: there are more primes than any given
      list. Multiply the listed primes, add one, and the result has a prime factor not on
      the list.
    contested: false
    sources:
      - citation: "Heath, T. L. (1908). The Thirteen Books of Euclid's Elements, Vol. 2 (Books III–IX). Cambridge University Press."
        url: null

  - id: diophantus-arithmetica
    date: c. 250 CE
    type: REFORMULATION
    title: Diophantus' Arithmetica
    description: >-
      Diophantus of Alexandria collects problems asking for whole-number or fractional
      solutions to equations, and solves them with an early symbolic algebra. Only part
      of the work survived. Its 1621 Latin translation by Bachet was the copy in whose
      margin Fermat wrote.
    contested: false
    sources:
      - citation: "Heath, T. L. (1910). Diophantus of Alexandria: A Study in the History of Greek Algebra (2nd ed.). Cambridge University Press."
        url: null

  - id: fermat-last-theorem-stated
    date: c. 1637
    type: CONJECTURE
    title: Fermat's note in the margin
    description: >-
      Beside Diophantus' problem on splitting a square into two squares, Pierre de Fermat
      writes that no cube is the sum of two cubes, nor any higher power the sum of two
      like powers, and that he has "a truly marvellous proof, which this margin is too
      narrow to contain". His son published the note in 1670. It became the most famous
      unsolved problem in mathematics for 358 years.
    contested: false
    sources:
      - citation: "Weil, A. (1984). Number Theory: An Approach Through History from Hammurapi to Legendre. Birkhäuser."
        url: null

  - id: euler-fermat-numbers
    date: "1732"
    type: DISPROOF
    title: Euler factors Fermat's "always prime" number
    description: >-
      Fermat had conjectured that every number of the form $2^{2^n} + 1$ is prime. Euler
      shows that $2^{32} + 1 = 4{,}294{,}967{,}297 = 641 \times 6{,}700{,}417$. It was the
      start of forty years in which Euler proved most of Fermat's unproved claims,
      including his little theorem, and made number theory a subject of proofs.
    contested: false
    sources:
      - citation: "Euler, L. (1738). Observationes de theoremate quodam Fermatiano aliisque ad numeros primos spectantibus. Commentarii academiae scientiarum Petropolitanae 6: 103–107."
        url: null

  - id: gauss-disquisitiones
    date: "1801"
    type: REFORMULATION
    title: Gauss's Disquisitiones Arithmeticae
    description: >-
      At 24, Carl Friedrich Gauss publishes a book that turns scattered results into a
      discipline. It introduces congruence notation, gives the first complete proof of
      quadratic reciprocity (which he called the *theorema aureum*, the golden
      theorem), develops the theory of quadratic forms, and shows which regular polygons
      can be drawn with ruler and compass.
    contested: true
    contested_note: >-
      Adrien-Marie Legendre had stated quadratic reciprocity in 1785 and published
      attempted proofs, the second in 1798, that relied on unproved assumptions. Gauss
      gave the first complete proof, found in 1796, and was dismissive of Legendre's
      efforts. Legendre resented it, and their priority quarrels, over reciprocity and
      later over the method of least squares, lasted for decades. Euler had conjectured
      the law even earlier.
    sources:
      - citation: "Gauss, C. F. (1801). Disquisitiones Arithmeticae. Leipzig."
        url: null
      - citation: "Lemmermeyer, F. (2000). Reciprocity Laws: From Euler to Eisenstein. Springer."
        url: null

open_problems:
  - id: goldbach-conjecture
    name: The Goldbach conjecture
    status: open
    status_note: Open as of writing. Verified by computer up to 4 × 10¹⁸; the "weak" version for odd numbers was proved by Harald Helfgott (2013 preprint).
    description: >-
      In a 1742 exchange of letters, Christian Goldbach and Leonhard Euler arrived at
      the claim that every even number greater than 2 is the sum of two primes: $4 = 2 + 2$, $28 = 5 + 23$,
      $100 = 3 + 97$. Every even number ever checked obeys it.
    why_hard: >-
      Primes are defined by multiplication, but the question is about addition, and the
      two interact in ways current methods control only on average. Sieve methods come
      close. Chen Jingrun proved in 1973 that every large even number is a prime plus a
      number with at most two prime factors. The last step has never yielded.
    unlocks: >-
      A proof would likely come with new tools for understanding how the primes behave
      additively, with consequences across the problems of the next thread,
      [analytic number theory](/math/analytic-number-theory/).
    sources:
      - citation: "Helfgott, H. A. (2013). The ternary Goldbach conjecture is true. arXiv:1312.7748."
        url: https://arxiv.org/abs/1312.7748

  - id: odd-perfect-numbers
    name: Is there an odd perfect number?
    status: open
    status_note: Open as of writing; any odd perfect number would have to exceed 10¹⁵⁰⁰.
    description: >-
      A perfect number equals the sum of its proper divisors: $6 = 1 + 2 + 3$,
      $28 = 1 + 2 + 4 + 7 + 14$. Euclid showed how to build even perfect numbers from
      certain primes, and Euler proved every even one arises that way. No one has ever
      found an odd perfect number, or proved that none exists.
    why_hard: >-
      Known constraints pile up (an odd perfect number would be enormous, with many prime
      factors of special forms) but no contradiction has emerged. The problem is often
      called the oldest open question in mathematics, going back to the Greeks.
    unlocks: >-
      Little depends on it directly. It is a pure test of whether number theory's
      methods can settle a question about all numbers from finitely many conditions.
    sources:
      - citation: "Ochem, P. & Rao, M. (2012). Odd perfect numbers are greater than 10^1500. Mathematics of Computation 81(279): 1869–1877."
        url: null

applications:
  - area: Everyday computing
    title: Check digits
    description: >-
      The last digit of an ISBN, a bank card number or a barcode is chosen so that a
      weighted sum of all the digits is divisible by 10 or 11. Congruence arithmetic
      catches almost every single mistyped digit and most swapped pairs.
    sources: []
  - area: Simulation
    title: Pseudo-random numbers
    description: >-
      Many classic random-number generators step through $x_{n+1} \equiv a x_n + c
      \pmod m$, and the choice of $a$, $c$ and $m$ that gives long, well-mixed cycles is
      a question in elementary number theory.
    sources:
      - citation: "Knuth, D. E. (1997). The Art of Computer Programming, Vol. 2: Seminumerical Algorithms (3rd ed.). Addison-Wesley."
        url: null

further_reading:
  - citation: "Davenport, H. (2008). The Higher Arithmetic: An Introduction to the Theory of Numbers (8th ed.). Cambridge University Press."
    url: null
    note: A short, gentle classic that assumes almost nothing.
  - citation: "Hardy, G. H. & Wright, E. M. (2008). An Introduction to the Theory of Numbers (6th ed.). Oxford University Press."
    url: null
    note: The standard reference for generations, broad and demanding.
  - citation: "Weil, A. (1984). Number Theory: An Approach Through History from Hammurapi to Legendre. Birkhäuser."
    url: null
    note: A great number theorist's history of the subject up to Gauss's time.
---

## Euclid's Primes

The same book that founded [Euclidean geometry](/math/euclidean-geometry/) founded number theory. Books VII to IX of {{fig:euclid|Euclid}}'s *Elements*, often skipped by geometry students, are about whole numbers. They contain the algorithm for finding the greatest common divisor of two numbers, still taught and still used by computers, and a recipe for perfect numbers.

They also contain one of the most admired proofs ever written. Suppose there were only finitely many primes. Multiply them all together and add one. The result leaves remainder 1 when divided by every prime on the list, so its prime factors are not on the list. The list was incomplete. The primes never end.

## Diophantus and the Margin

Five centuries later, {{fig:diophantus|Diophantus}} of Alexandria collected problems asking for solutions in whole numbers or fractions. His *Arithmetica*, partly lost, was translated into Latin in 1621. A copy reached {{fig:fermat|Pierre de Fermat}}, a lawyer in Toulouse who did mathematics for pleasure.

Fermat filled its margins with claims. Beside a problem about writing a square as the sum of two squares, he noted around 1637 that no cube can be the sum of two cubes, nor any higher power the sum of two like powers, and that he had a marvellous proof that the margin was too narrow to contain. He never published it, and almost certainly did not have one. The claim, *Fermat's Last Theorem*, would drive number theory for 358 years.

## Euler's Century

{{fig:euler|Leonhard Euler}} took Fermat's claims seriously and proved most of them: that $a^{p-1}$ leaves remainder 1 when divided by a prime $p$ (Fermat's little theorem), and that primes of the form $4k + 1$ are sums of two squares. He also found one claim false. In 1732 he showed that $2^{32} + 1$, which Fermat believed prime, is divisible by 641. Number theory stopped being a collection of confident guesses and became a subject of proofs.

## A Closer Look: Why Fermat's Little Theorem Is True

Fermat's little theorem says that if $p$ is prime and $a$ is not a multiple of $p$, then $a^{p-1}$ leaves remainder 1 when divided by $p$. Check it with $p = 7$ and $a = 3$: $3^6 = 729 = 7 \times 104 + 1$. The remainder is 1, as promised. But why should it always work?

Work "modulo 7", keeping only remainders. Multiply each of the nonzero remainders $1, 2, 3, 4, 5, 6$ by 3:

$$
3, \; 6, \; 9 \equiv 2, \; 12 \equiv 5, \; 15 \equiv 1, \; 18 \equiv 4 .
$$

The results are $3, 6, 2, 5, 1, 4$: the same six numbers, shuffled. That is no accident. If two of them coincided, 7 would divide 3 times a number smaller than 7, which is impossible for a prime. So multiplying everything by 3 only permutes the list, and the product of the list is unchanged:

$$
(3 \cdot 1)(3 \cdot 2)(3 \cdot 3)(3 \cdot 4)(3 \cdot 5)(3 \cdot 6) \equiv 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 \cdot 6 \pmod 7 .
$$

The left side is $3^6 \times 6!$. Since $6!$ shares no factor with 7, it can be cancelled, leaving $3^6 \equiv 1 \pmod 7$. The same argument works for any prime and any $a$.

That half-page argument, essentially Euler's, has three lives in this atlas. It is the germ of group theory: the nonzero remainders form a group, and the theorem is a case of Lagrange's theorem. It is the basis of fast primality tests: if $a^{n-1} \not\equiv 1 \pmod n$, then $n$ is certainly not prime. And, generalised by Euler to non-prime moduli, it is exactly why RSA decryption undoes encryption.

## Gauss Makes a Discipline

{{fig:gauss|Carl Friedrich Gauss}} is said to have called mathematics the queen of the sciences and number theory the queen of mathematics. His *Disquisitiones Arithmeticae* (1801), written in his early twenties, organised the whole subject. It introduced the congruence notation $a \equiv b \pmod n$ and proved the law of quadratic reciprocity that Euler and {{fig:legendre|Adrien-Marie Legendre}} had conjectured. He later gave several more proofs of that law.

After Gauss the subject split under the pressure of its hardest questions. How are the primes distributed? Calculus turned out to hold the answer, and that became [analytic number theory](/math/analytic-number-theory/). Why did every attempt on Fermat's theorem fail? Unique factorisation breaks down in larger number systems, and repairing it became [algebraic number theory](/math/algebraic-number-theory/). And in the 1970s, Fermat's little theorem turned out to be exactly what was needed to build [public-key cryptography](/math/public-key-cryptography/).
