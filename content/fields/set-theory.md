---
id: set-theory
domain: math
thread: foundations
name: Set Theory
parent_ids:
  - mathematical-logic
  - real-analysis
era_emerged: 1874 – 1908
core_question: What is infinity, and can all of mathematics be built out of collections?

summary: |-
  Set theory studies collections, or *sets*, and above all infinite ones. Its founding discovery is that infinities come in different sizes: there are exactly as many even numbers as whole numbers, but strictly more real numbers than either. Building on that, set theory became the common material from which all of modern mathematics is constructed, with numbers, functions and spaces all defined as sets.

  Its history is one of crises. Naive reasoning about sets produced paradoxes, the axiom meant to repair them provoked a feud, and the most natural question about infinity, the continuum hypothesis, turned out to be impossible to settle from the standard axioms at all.

key_ideas:
  - term: Cardinality
    definition: >-
      Two sets have the same size if their elements can be paired off one-to-one. By this
      measure the even numbers and the whole numbers are the same size, even though one
      is part of the other.
    turning_point_id: cantor-diagonal
  - term: Countable and uncountable
    definition: >-
      A set is countable if it can be listed $1, 2, 3, \ldots$. The rational numbers are
      countable; Cantor's diagonal argument shows the real numbers are not.
    turning_point_id: cantor-diagonal
  - term: Power set and Cantor's theorem
    definition: >-
      The set of all subsets of any set is strictly larger than the set itself. So there
      is no largest infinity: every infinity is followed by a bigger one.
    turning_point_id: cantor-diagonal
  - term: Axiom of choice
    definition: >-
      From any collection of non-empty sets, one element can be chosen from each, even
      when there is no rule for choosing. Indispensable in modern mathematics, and it
      implies strange results such as the Banach–Tarski paradox.
    turning_point_id: zermelo-axioms
  - term: Independence
    definition: >-
      A statement is independent of a set of axioms if neither it nor its negation can be
      proved from them. The continuum hypothesis is independent of the standard axioms
      of set theory, ZFC.
    turning_point_id: ch-independence

turning_points:
  - id: continuum-hypothesis-stated
    date: "1878"
    type: CONJECTURE
    title: Cantor's continuum hypothesis
    description: >-
      Having shown that the real numbers form a larger infinity than the whole numbers,
      Georg Cantor conjectures that there is no infinity in between: every infinite set of
      real numbers is either countable or as large as all the reals. He spent much of the
      rest of his life trying to prove it. Hilbert made it the first of his 23 problems
      in 1900.
    contested: false
    sources:
      - citation: "Cantor, G. (1878). Ein Beitrag zur Mannigfaltigkeitslehre. Journal für die reine und angewandte Mathematik 84: 242–258."
        url: null

  - id: cantor-diagonal
    date: "1891"
    type: PROOF
    title: The diagonal argument
    description: >-
      Cantor gives a two-line proof that the real numbers cannot be listed. Given any
      list, build a number that differs from the $n$th entry in its $n$th digit, and it
      is missing from the list. The same idea shows every set has more subsets than
      elements. Diagonalisation would later power Gödel's and Turing's theorems.
    contested: false
    sources:
      - citation: "Cantor, G. (1891). Über eine elementare Frage der Mannigfaltigkeitslehre. Jahresbericht der Deutschen Mathematiker-Vereinigung 1: 75–78."
        url: null
      - citation: "Dauben, J. W. (1979). Georg Cantor: His Mathematics and Philosophy of the Infinite. Harvard University Press."
        url: null

  - id: russell-paradox
    date: 1901 – 1903
    type: CRISIS
    title: Russell's paradox
    description: >-
      Consider the set of all sets that do not contain themselves. Does it contain itself?
      Either answer contradicts itself. Bertrand Russell sends the paradox to Gottlob Frege
      in 1902, just as Frege's life work on the foundations of arithmetic is going to
      press. Frege's system, and naive set theory with it, is inconsistent.
    contested: true
    contested_note: >-
      Ernst Zermelo appears to have found the same paradox around 1899–1901 and
      communicated it to colleagues in Göttingen, including Hilbert, without publishing.
      Russell published it, and the paradox bears his name. Related paradoxes of the
      largest cardinal and ordinal (Cantor, Burali-Forti) were known slightly earlier.
    sources:
      - citation: "van Heijenoort, J. (ed.) (1967). From Frege to Gödel: A Source Book in Mathematical Logic, 1879–1931. Harvard University Press."
        url: null

  - id: zermelo-axioms
    date: 1904 – 1908
    type: REFORMULATION
    title: Zermelo axiomatises set theory
    description: >-
      To prove that every set can be well-ordered, Ernst Zermelo makes explicit the axiom
      of choice (1904). In 1908 he publishes axioms for set theory designed to block the
      paradoxes. With Abraham Fraenkel's additions in 1922 they became ZFC, the standard
      foundation of mathematics.
    contested: true
    contested_note: >-
      The axiom of choice set off one of the fiercest controversies in modern
      mathematics. Borel, Baire and Lebesgue rejected it as asserting the existence of
      objects no one could define, while Hadamard defended it. Its later consequences,
      such as the Banach–Tarski paradox (1924), in which a ball is cut into finitely many
      pieces and reassembled into two balls of the same size, kept doubts alive. It is
      now accepted by most mathematicians, though some constructive schools still reject
      it.
    sources:
      - citation: "Zermelo, E. (1908). Untersuchungen über die Grundlagen der Mengenlehre I. Mathematische Annalen 65: 261–281."
        url: null
      - citation: "Moore, G. H. (1982). Zermelo's Axiom of Choice: Its Origins, Development, and Influence. Springer."
        url: null

  - id: ch-independence
    date: 1938 – 1963
    type: PROOF
    title: The continuum hypothesis is independent
    description: >-
      Kurt Gödel shows in 1938 that the continuum hypothesis cannot be disproved from the
      axioms of set theory. In 1963 Paul Cohen, inventing the method of "forcing", shows
      it cannot be proved either. Hilbert's first problem has an answer no one expected:
      the standard axioms cannot settle it. Cohen received the Fields Medal in 1966.
    contested: false
    sources:
      - citation: "Gödel, K. (1938). The consistency of the axiom of choice and of the generalized continuum-hypothesis. Proceedings of the National Academy of Sciences 24(12): 556–557."
        url: null
      - citation: "Cohen, P. J. (1963). The independence of the continuum hypothesis. Proceedings of the National Academy of Sciences 50(6): 1143–1148."
        url: null

open_problems:
  - id: continuum-hypothesis-truth
    name: Is the continuum hypothesis true?
    status: open
    status_note: Independent of ZFC. Whether new axioms should, or can, settle it is disputed as of writing.
    description: >-
      Independence means ZFC cannot decide the question. Many set theorists think it still
      has a definite answer, to be found by adopting new, well-motivated axioms. Others
      argue there is no single universe of sets, only many, some where the hypothesis
      holds and some where it fails.
    why_hard: >-
      Candidate new axioms, such as large-cardinal axioms, settle many independent
      questions but provably leave the continuum hypothesis open. Hugh Woodin has pursued
      a programme ("Ultimate L") in which it would be true, having earlier argued for its
      failure. Joel David Hamkins and others defend a "multiverse" view in which the
      question has no single answer. The disagreement is partly mathematical and partly
      philosophical.
    unlocks: >-
      It would shape what mathematicians take the foundations of their subject to be:
      one definite world of sets, or many.
    sources:
      - citation: "Woodin, W. H. (2001). The continuum hypothesis, Part I. Notices of the AMS 48(6): 567–576."
        url: null
      - citation: "Hamkins, J. D. (2012). The set-theoretic multiverse. Review of Symbolic Logic 5(3): 416–449."
        url: null

further_reading:
  - citation: "Dauben, J. W. (1979). Georg Cantor: His Mathematics and Philosophy of the Infinite. Harvard University Press."
    url: null
    note: The definitive study of Cantor's work and the resistance it met.
  - citation: "Halmos, P. R. (1960). Naive Set Theory. Van Nostrand."
    url: null
    note: A slim classic, the gentlest rigorous introduction.
  - citation: "Kunen, K. (1980). Set Theory: An Introduction to Independence Proofs. North-Holland."
    url: null
    note: The standard graduate text on forcing and independence.
---

## Sizes of Infinity

Set theory grew out of [real analysis](/math/real-analysis/). Studying where a Fourier series could misbehave, {{fig:cantor|Georg Cantor}} was led in the 1870s to think about infinite sets of points as objects in their own right, and to ask how big they are. His answer was to compare sets by pairing their elements. The even numbers pair perfectly with all whole numbers ($1 \leftrightarrow 2$, $2 \leftrightarrow 4$, …), so they are the same size, even though one is a part of the other. So are the fractions, which can be listed cleverly.

But the real numbers cannot. In 1891 Cantor gave the *diagonal argument*. Take any list of real numbers and build a new one that differs from the first in its first digit, from the second in its second, and so on. It cannot be on the list. There are strictly more real numbers than whole numbers, and the same idea shows there is no largest infinity at all. Leopold Kronecker is said to have called Cantor a "corrupter of youth", while Hilbert declared that "no one shall expel us from the paradise that Cantor has created."

## Paradise Lost

Cantor asked the natural next question: is there any infinity between the whole numbers and the real numbers? He conjectured not, the *continuum hypothesis*, and could not prove it.

Worse was coming. Frege and others had assumed that any property defines a set, the set of things having it. In 1902 {{fig:russell|Bertrand Russell}} wrote to Frege about the set of all sets that do not contain themselves. If it contains itself, it does not, and if it does not, it does. Frege, whose second volume was at the printer, added an appendix admitting that the foundation of his work had collapsed. {{fig:zermelo|Ernst Zermelo}} had found the same paradox in Göttingen and not published it.

## Axioms and a Feud

Zermelo's response was to replace "any property defines a set" with careful axioms saying which sets exist. In 1904 he made explicit a principle mathematicians had used without noticing: the *axiom of choice*, that one can always pick an element from each of any collection of non-empty sets. The French analysts Borel, Baire and Lebesgue attacked it for asserting the existence of objects nobody could construct, and when Banach and Tarski later used it to cut a ball into five pieces and reassemble them into two balls of the same size, the objection seemed vindicated. The axiom stayed because too much of mathematics needs it. With Abraham Fraenkel's refinements, Zermelo's system became ZFC, the standard foundation of mathematics today.

## A Question Without an Answer

Hilbert put the continuum hypothesis first on his 1900 list of problems. The answer came in two halves. In 1938 {{fig:goedel|Kurt Gödel}} showed it cannot be disproved from ZFC. In 1963 {{fig:paul-cohen|Paul Cohen}}, an analyst new to logic, invented *forcing*, a method for building new models of set theory, and showed it cannot be proved either. The most natural question about infinity is independent of the axioms, just as the parallel postulate was independent of Euclid's others. Whether it nonetheless has a true answer is argued to this day. Meanwhile the effort to secure mathematics from paradox led to [metamathematics](/math/metamathematics/), and to Gödel's discovery of limits no foundation can escape.
