---
id: algebraic-number-theory
domain: math
thread: number-theory
name: Algebraic Number Theory
parent_ids:
  - elementary-number-theory
era_emerged: 1832 – 1871
core_question: What happens to primes and factorisation when the whole numbers are extended to larger number systems?

summary: |-
  Algebraic number theory studies number systems that extend the integers, such as numbers of the form $a + b\sqrt{-5}$ or $a + bi$, built by adding roots of polynomial equations. Many problems about ordinary whole numbers become easier in these larger systems, with one catch: factorisation into primes may no longer be unique.

  The field exists because of that catch. In 1847 an announced proof of Fermat's Last Theorem collapsed because it assumed unique factorisation where it fails. Repairing it created ideals, class groups and, eventually, class field theory, one of the great structures of twentieth-century mathematics.

key_ideas:
  - term: Number field and algebraic integers
    definition: >-
      A number field is the rational numbers with finitely many roots of polynomials
      added, like $\mathbb{Q}(i)$. Its algebraic integers play the role of whole numbers,
      like the Gaussian integers $a + bi$.
    turning_point_id: gaussian-integers
  - term: Failure of unique factorisation
    definition: >-
      Among numbers $a + b\sqrt{-5}$, $6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$,
      two genuinely different factorisations into irreducible pieces.
    turning_point_id: lame-kummer
  - term: Ideal
    definition: >-
      A set of numbers closed under addition and under multiplication by anything in the
      system. Dedekind showed that ideals always factor uniquely into prime ideals,
      restoring what numbers had lost.
    turning_point_id: dedekind-ideals
  - term: Class number
    definition: >-
      A number that measures how badly unique factorisation fails in a number system.
      It is 1 exactly when factorisation is unique.
    turning_point_id: kummer-ideal-numbers
  - term: Class field theory
    definition: >-
      A complete description of a large family of extensions of a number field, the
      abelian ones, in terms of arithmetic inside the field itself. It is the grand
      generalisation of quadratic reciprocity.
    turning_point_id: class-field-theory

turning_points:
  - id: gaussian-integers
    date: "1832"
    type: REFORMULATION
    title: Gauss introduces the Gaussian integers
    description: >-
      To state the reciprocity law for fourth powers, Gauss works with numbers $a + bi$,
      where $i^2 = -1$. He shows that they factor uniquely into primes, just as ordinary
      integers do. Number theory gains its first "larger" number system, and questions
      about ordinary primes, such as which are sums of two squares, become transparent
      inside it.
    contested: false
    sources:
      - citation: "Gauss, C. F. (1832). Theoria residuorum biquadraticorum. Commentatio secunda. Commentationes Societatis Regiae Scientiarum Gottingensis Recentiores 7."
        url: null

  - id: lame-kummer
    date: "1847"
    type: CRISIS
    title: Lamé's proof of Fermat's Last Theorem collapses
    description: >-
      In March 1847 Gabriel Lamé announces a proof of Fermat's Last Theorem to the Paris
      Academy. It factors $x^n + y^n$ using complex roots of unity. Joseph Liouville
      immediately asks whether factorisation into primes is unique in those number
      systems. Within weeks, a letter from Ernst Kummer reveals that he had shown three
      years earlier that it is not. The proof, and a rival one Cauchy was preparing,
      were dead.
    contested: false
    sources:
      - citation: "Edwards, H. M. (1977). Fermat's Last Theorem: A Genetic Introduction to Algebraic Number Theory. Springer."
        url: null

  - id: kummer-ideal-numbers
    date: 1844 – 1850
    type: REFORMULATION
    title: Kummer's ideal numbers
    description: >-
      Ernst Kummer restores unique factorisation by inventing "ideal numbers", phantom
      factors that behave like primes even though they are not numbers in the system.
      With them he proves Fermat's Last Theorem for all "regular" prime exponents, which
      includes every odd prime below 37. It was the first proof to cover a whole class
      of exponents at once.
    contested: false
    sources:
      - citation: "Kummer, E. E. (1847). Zur Theorie der complexen Zahlen. Journal für die reine und angewandte Mathematik 35: 319–326."
        url: null

  - id: dedekind-ideals
    date: "1871"
    type: REFORMULATION
    title: Dedekind replaces ideal numbers with ideals
    description: >-
      In a supplement to Dirichlet's lectures on number theory, Richard Dedekind makes
      Kummer's phantoms concrete. An ideal is a set of actual numbers, and every ideal
      factors uniquely into prime ideals in any number field. The move from individual
      elements to sets with structure became a model for all of modern algebra.
    contested: false
    sources:
      - citation: "Dedekind, R. (1871). Supplement X in P. G. L. Dirichlet, Vorlesungen über Zahlentheorie (2nd ed.). Vieweg, Braunschweig."
        url: null

  - id: class-field-theory
    date: 1920 – 1927
    type: PROOF
    title: Class field theory is completed
    description: >-
      Building on Hilbert's conjectures, Teiji Takagi (1920) proves the main theorems
      describing all abelian extensions of a number field, and Emil Artin (1927) proves
      the general reciprocity law that sums them up. Every reciprocity law since Gauss
      becomes a special case of one theorem.
    contested: false
    sources:
      - citation: "Takagi, T. (1920). Über eine Theorie des relativ Abel'schen Zahlkörpers. Journal of the College of Science, Imperial University of Tokyo 41: 1–133."
        url: null
      - citation: "Artin, E. (1927). Beweis des allgemeinen Reziprozitätsgesetzes. Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 5: 353–363."
        url: null

  - id: class-number-one
    date: 1952 – 1967
    type: PROOF
    title: Gauss's class number one problem is solved
    description: >-
      Gauss had listed nine imaginary quadratic number systems with unique factorisation
      and asked whether there were others. There are not. Alan Baker (1966) and Harold
      Stark (1967) proved it by different methods, completing a question left open since
      1801.
    contested: true
    contested_note: >-
      Kurt Heegner, a German private scholar outside the universities, had published a proof in 1952 using modular
      functions. It was generally believed to contain gaps and was ignored. After Baker
      and Stark's work, Stark and others re-examined it and concluded that Heegner's
      proof was essentially correct, with a minor gap that was easily filled. Heegner had
      died in 1965, unrecognised. He is now usually credited as the first to solve the
      problem.
    sources:
      - citation: "Heegner, K. (1952). Diophantische Analysis und Modulfunktionen. Mathematische Zeitschrift 56(3): 227–253."
        url: null
      - citation: "Goldfeld, D. (1985). Gauss's class number problem for imaginary quadratic fields. Bulletin of the AMS 13(1): 23–37."
        url: null

open_problems:
  - id: langlands-program
    name: The Langlands program
    status: conjectured
    status_note: Proved in many special cases; the general conjectures remain open as of writing.
    description: >-
      In a 1967 letter to André Weil, Robert Langlands proposed a web of conjectures
      linking number theory (Galois groups, which describe symmetries of solutions to
      polynomial equations) with analysis (automorphic forms, highly symmetric functions).
      It would be class field theory extended to all extensions, not only the abelian
      ones.
    why_hard: >-
      The conjectures connect objects from fields that developed separately and speak
      different languages. Each proved case, such as the modularity of elliptic curves
      behind Fermat's Last Theorem, has required years of new mathematics. The general
      case is widely regarded as one of the largest programmes in modern mathematics.
    unlocks: >-
      A "grand unified theory" of number theory, in which reciprocity laws, L-functions
      and the symmetries of equations become aspects of one structure.
    sources:
      - citation: "Langlands, R. P. (1970). Problems in the theory of automorphic forms. In Lectures in Modern Analysis and Applications III, Lecture Notes in Mathematics 170: 18–61. Springer."
        url: null
      - citation: "Frenkel, E. (2013). Love and Math: The Heart of Hidden Reality. Basic Books."
        url: null

  - id: real-quadratic-class-number
    name: Infinitely many real quadratic fields with unique factorisation?
    status: conjectured
    status_note: Conjectured by Gauss; open as of writing.
    description: >-
      For number systems like $a + b\sqrt{d}$ with $d$ positive, factorisation seems to
      be unique surprisingly often. Gauss conjectured that it happens for infinitely many
      $d$. The Cohen–Lenstra heuristics, backed by numerical evidence, predict that about
      three-quarters of prime $d$ qualify, but it has not been proved that even infinitely many do.
    why_hard: >-
      In real quadratic fields the class number is entangled with the size of the
      "fundamental unit", a quantity that fluctuates wildly and is hard to control.
      Methods that settled the imaginary case do not apply.
    unlocks: >-
      It would confirm the statistical picture of class groups behind the Cohen–Lenstra
      heuristics, now used widely in arithmetic statistics.
    sources:
      - citation: "Cohen, H. (1993). A Course in Computational Algebraic Number Theory. Springer."
        url: null

applications:
  - area: Cryptography
    title: Post-quantum encryption over number rings
    description: >-
      The new encryption standards meant to survive quantum computers do their
      arithmetic in rings of algebraic integers, typically cyclotomic rings. Their
      security rests on hard problems about lattices built from those rings.
    sources:
      - citation: "Lyubashevsky, V., Peikert, C. & Regev, O. (2010). On ideal lattices and learning with errors over rings. In Advances in Cryptology — EUROCRYPT 2010, Lecture Notes in Computer Science 6110: 1–23."
        url: null

further_reading:
  - citation: "Edwards, H. M. (1977). Fermat's Last Theorem: A Genetic Introduction to Algebraic Number Theory. Springer."
    url: null
    note: Builds the subject the way history did, from Fermat through Kummer.
  - citation: "Stewart, I. & Tall, D. (2015). Algebraic Number Theory and Fermat's Last Theorem (4th ed.). CRC Press."
    url: null
    note: An accessible undergraduate introduction.
  - citation: "Neukirch, J. (1999). Algebraic Number Theory. Springer."
    url: null
    note: The standard graduate text, through class field theory.
---

## A New Kind of Integer

The whole numbers can be enlarged. {{fig:gauss|Gauss}}, studying which numbers are fourth powers modulo a prime, worked in 1832 with numbers of the form $a + bi$, where $i^2 = -1$. These *Gaussian integers* have their own primes, and they factor into them uniquely, just as ordinary integers do. Inside this larger system old questions became easy. A prime like 5 splits as $(2 + i)(2 - i)$, which is exactly why $5 = 2^2 + 1^2$ is a sum of two squares.

It was natural to try the same trick on [Fermat's Last Theorem](/math/elementary-number-theory/). The equation $x^n + y^n = z^n$ becomes a product once you allow complex $n$th roots of unity: $x^n + y^n$ factors into $n$ linear pieces. If factorisation into primes were unique in that system, the theorem would follow.

## The Proof That Failed

On 1 March 1847 {{fig:lame|Gabriel Lamé}} announced exactly that proof to the Paris Academy. {{fig:liouville|Joseph Liouville}} rose at once to ask the obvious question: is factorisation unique there? Augustin Cauchy, meanwhile, claimed to have a proof of his own. Within weeks the question was answered from Breslau. {{fig:kummer|Ernst Kummer}} had shown three years earlier that unique factorisation fails for some exponents, and he already had a way around it.

The failure is easy to see in a simpler system. Among numbers $a + b\sqrt{-5}$,

$$
6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5}),
$$

and none of the four factors can be broken down further. Arithmetic had lost its most basic law. Few fields can point to the moment they were forced into existence so precisely: it was this collapse that made algebraic number theory a subject of its own.

## Ideal Numbers, Then Ideals

Kummer's remedy was audacious. He invented *ideal numbers*: phantom factors, not in the system at all, that behaved like primes and restored unique factorisation. With them he proved Fermat's Last Theorem for all "regular" primes, the first proof to cover a whole class of exponents at once.

In 1871 {{fig:dedekind|Richard Dedekind}} made the phantoms concrete. An *ideal* is a set of actual numbers, closed under addition and under multiplication by anything in the system. Ideals, unlike numbers, always factor uniquely into prime ideals, in every number field. The shift of attention from individual numbers to sets with structure became the template for modern abstract algebra, as Emmy Noether, working on Dedekind's foundations, later made explicit.

## A Closer Look: Primes That Split, and Ideals That Repair

In the Gaussian integers $a + bi$, some ordinary primes stop being prime. For example

$$
5 = (2 + i)(2 - i), \qquad 13 = (3 + 2i)(3 - 2i),
$$

while 3, 7 and 11 cannot be factored. The rule is exact: an odd prime splits precisely when it leaves remainder 1 on division by 4. Splitting means $p = (a + bi)(a - bi) = a^2 + b^2$, so this is Fermat's theorem on sums of two squares, $5 = 2^2 + 1^2$ and $13 = 3^2 + 2^2$, recovered as a fact about factorisation in a larger number system.

In the numbers $a + b\sqrt{-5}$ unique factorisation fails:

$$
6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5}),
$$

and none of these four factors can be broken down further. Dedekind's ideals repair the damage by factoring more finely. Let $P$ be the ideal generated by $2$ and $1 + \sqrt{-5}$, and $Q$ and $Q'$ the ideals generated by $3$ with $1 + \sqrt{-5}$ and with $1 - \sqrt{-5}$. None of these ideals comes from a single number, which is exactly why no element can play their role. But they multiply out to

$$
(2) = P^2, \quad (3) = Q\,Q', \quad (1 + \sqrt{-5}) = P\,Q, \quad (1 - \sqrt{-5}) = P\,Q' ,
$$

so both factorisations of 6 are the same prime-ideal factorisation, $(6) = P^2 Q Q'$, grouped in two different ways. The class number measures how many such "phantom" factors a number system needs. For $a + b\sqrt{-5}$ it is 2, meaning factorisation fails in the mildest possible way.

## Reciprocity, Completed and Extended

Gauss's quadratic reciprocity was the first of a family of laws about which numbers are powers modulo primes. Hilbert conjectured their general form. {{fig:takagi|Teiji Takagi}} proved it in 1920 and {{fig:artin|Emil Artin}} crowned it in 1927. *Class field theory* describes every abelian extension of a number field from arithmetic inside the field. Old problems were closed too. Gauss's question of which imaginary quadratic systems factor uniquely was answered, first by {{fig:heegner|Kurt Heegner}}, whose correct proof was ignored for fifteen years.

The next step, extending class field theory beyond the abelian case, is the Langlands program, the largest open project in number theory. Its first great success, the modularity of elliptic curves, required uniting this field with [algebraic geometry](/math/algebraic-geometry/). That union is [arithmetic geometry](/math/arithmetic-geometry/).
