---
id: mathematical-logic
domain: math
thread: foundations
name: Mathematical Logic
parent_ids: []
era_emerged: 1847 – 1930
core_question: What makes an argument valid, and can reasoning itself be turned into calculation?

summary: |-
  Mathematical logic studies reasoning with the precision of mathematics. It gives exact languages for stating claims, exact rules for deriving one claim from others, and exact definitions of what it means for a claim to be true. With those in hand, questions about proof itself, such as what can be proved and whether proofs can be checked by machine, become mathematical questions.

  For two thousand years logic meant Aristotle's syllogisms. In the nineteenth century Boole turned it into algebra and Frege into a formal language rich enough for all of mathematics. The result became the foundation of computer science, and every digital circuit is Boole's algebra built in silicon.

key_ideas:
  - term: Validity
    definition: >-
      An argument is valid if its conclusion must be true whenever its premises are,
      whatever the premises are about. Validity is a matter of form, not content.
    turning_point_id: aristotle-syllogistic
  - term: Boolean algebra
    definition: >-
      Logic as arithmetic on two values, true and false (1 and 0), with operations AND,
      OR and NOT. It is the mathematics of every digital circuit.
    turning_point_id: boole-laws
  - term: Quantifiers
    definition: >-
      "For all" ($\forall$) and "there exists" ($\exists$). With them, statements like
      "every number has a larger prime" can be written exactly, which syllogisms could
      never do.
    turning_point_id: frege-begriffsschrift
  - term: Formal system
    definition: >-
      A precise language, a set of axioms and rules of inference that can be applied
      mechanically. A proof is a finite sequence of steps each justified by a rule, and
      it can be checked without any understanding.
    turning_point_id: principia-mathematica
  - term: Completeness (of first-order logic)
    definition: >-
      Gödel's 1929 theorem: every statement true in all models of some axioms can be
      proved from them. The rules of first-order logic miss nothing.
    turning_point_id: goedel-completeness

turning_points:
  - id: aristotle-syllogistic
    date: c. 350 BCE
    type: REFORMULATION
    title: Aristotle's syllogistic
    description: >-
      In the *Prior Analytics*, Aristotle classifies valid argument forms, such as "all
      A are B, all B are C, therefore all A are C", and shows which forms are valid purely
      by their structure. It is the first formal logic, and it was the standard account of
      reasoning in Europe and the Islamic world for over two thousand years.
    contested: false
    sources:
      - citation: "Aristotle. Prior Analytics. Trans. R. Smith (1989). Hackett."
        url: null

  - id: boole-laws
    date: 1847 – 1854
    type: REFORMULATION
    title: Boole turns logic into algebra
    description: >-
      George Boole, a self-taught schoolmaster, shows that logical reasoning obeys
      algebraic laws: classes and propositions can be combined and simplified like
      numbers, with $x \cdot x = x$. *The Laws of Thought* (1854) makes logic a branch of
      mathematics. Eighty years later Claude Shannon showed that switching circuits obey
      Boole's algebra.
    contested: false
    sources:
      - citation: "Boole, G. (1854). An Investigation of the Laws of Thought. Walton and Maberly, London."
        url: null

  - id: frege-begriffsschrift
    date: "1879"
    type: REFORMULATION
    title: Frege's Begriffsschrift and the quantifier
    description: >-
      Gottlob Frege's *Begriffsschrift* ("concept-script") introduces a formal language
      with variables and quantifiers, in which the whole of mathematical reasoning can in
      principle be written out and checked step by step. It is an ancestor of modern
      logical systems and programming languages.
    contested: true
    contested_note: >-
      Charles Sanders Peirce and his student O. H. Mitchell developed quantifiers
      independently in the early 1880s. Frege's two-dimensional notation was ignored, and
      it was Peirce's notation, through Schröder and Peano, that most logicians adopted.
      Historians debate how much modern logic owes to each line, and many now regard both
      as co-founders.
    sources:
      - citation: "Frege, G. (1879). Begriffsschrift, eine der arithmetischen nachgebildete Formelsprache des reinen Denkens. Louis Nebert, Halle."
        url: null
      - citation: "van Heijenoort, J. (ed.) (1967). From Frege to Gödel: A Source Book in Mathematical Logic, 1879–1931. Harvard University Press."
        url: null

  - id: principia-mathematica
    date: 1910 – 1913
    type: REFORMULATION
    title: Principia Mathematica
    description: >-
      Alfred North Whitehead and Bertrand Russell attempt to derive mathematics from pure
      logic in three enormous volumes, using a theory of types to avoid the paradoxes of
      set theory. The proposition from which $1 + 1 = 2$ follows appears several hundred
      pages into the first volume. As a foundation it was too cumbersome to last. As a
      demonstration that mathematics can be fully formalised, it set the agenda.
    contested: false
    sources:
      - citation: "Whitehead, A. N. & Russell, B. (1910–1913). Principia Mathematica (3 vols.). Cambridge University Press."
        url: null

  - id: goedel-completeness
    date: 1929 – 1930
    type: PROOF
    title: Gödel's completeness theorem
    description: >-
      In his doctoral thesis, the 23-year-old Kurt Gödel proves that first-order logic is
      complete: any statement that is true in every structure satisfying a set of axioms
      can be formally proved from them. Truth and provability, for logic itself, coincide.
      A year later he would show that for arithmetic they do not.
    contested: false
    sources:
      - citation: "Gödel, K. (1930). Die Vollständigkeit der Axiome des logischen Funktionenkalküls. Monatshefte für Mathematik und Physik 37: 349–360."
        url: null

open_problems:
  - id: tarski-exponential
    name: Is the theory of the real numbers with exponentiation decidable?
    status: open
    status_note: Decidable if Schanuel's conjecture holds (Macintyre–Wilkie, 1996); open unconditionally as of 2026.
    description: >-
      Alfred Tarski proved in the 1930s–40s that every statement about real numbers
      built from addition, multiplication and quantifiers can be decided by an algorithm.
      He asked whether the same holds once the exponential function $e^x$ is added.
    why_hard: >-
      Deciding such statements means controlling how exponentials and polynomials can
      coincide, which touches deep, unproved questions in number theory about the
      algebraic independence of values like $e$ and $\pi$. The best result is
      conditional on Schanuel's conjecture, itself far out of reach.
    unlocks: >-
      A decision procedure for a large part of real analysis, and progress on
      transcendental number theory.
    sources:
      - citation: "Macintyre, A. & Wilkie, A. J. (1996). On the decidability of the real exponential field. In P. Odifreddi (ed.), Kreiseliana: About and Around Georg Kreisel: 441–467. A K Peters."
        url: null

applications:
  - area: Electronics
    title: Every digital circuit is Boolean algebra
    description: >-
      In his 1937 master's thesis, Claude Shannon showed that circuits of switches obey
      Boole's algebra, so logic could design circuits and circuits could compute logic.
      Every processor is built from gates that implement AND, OR and NOT.
    sources:
      - citation: "Shannon, C. E. (1938). A symbolic analysis of relay and switching circuits. Transactions of the American Institute of Electrical Engineers 57(12): 713–723."
        url: null
  - area: Databases
    title: Querying data with logic
    description: >-
      Edgar Codd's relational model (1970) treats a database as a collection of relations
      and a query as a formula of first-order logic. SQL, the language of most databases
      in the world, descends from it.
    sources:
      - citation: "Codd, E. F. (1970). A relational model of data for large shared data banks. Communications of the ACM 13(6): 377–387."
        url: null

further_reading:
  - citation: "Doxiadis, A. & Papadimitriou, C. H. (2009). Logicomix: An Epic Search for Truth. Bloomsbury."
    url: null
    note: A graphic novel following Russell through the foundational quest. Unexpectedly faithful to the ideas.
  - citation: "Davis, M. (2000). The Universal Computer: The Road from Leibniz to Turing. W. W. Norton."
    url: null
    note: How the logicians' dream of mechanised reasoning led to the computer.
  - citation: "Enderton, H. B. (2001). A Mathematical Introduction to Logic (2nd ed.). Academic Press."
    url: null
    note: A standard rigorous textbook.

images:
  - id: aristotle
    src: /images/fields/mathematical-logic/aristotle.jpg
    alt: A marble bust of a bearded man with wavy hair, set on a draped mantle of banded stone.
    caption: >-
      Aristotle, in a Roman marble copy of a Greek bronze by Lysippos. His syllogisms were the
      whole of logic for two thousand years.
    credit: After Lysippos, Palazzo Altemps, Rome
    license: Public domain
    source: https://commons.wikimedia.org/wiki/File:Aristotle_Altemps_Inv8575.jpg
  - id: boole
    src: /images/fields/mathematical-logic/boole.jpg
    alt: A hand-coloured engraving of George Boole in a dark coat and bow tie.
    caption: >-
      George Boole, the self-taught schoolmaster who turned deduction into algebra with two
      values, 0 and 1.
    credit: Engraving, unknown artist
    license: Public domain
    source: https://commons.wikimedia.org/wiki/File:George_Boole_color.jpg
  - id: begriffsschrift
    src: /images/fields/mathematical-logic/begriffsschrift.png
    alt: A page of Frege's two-dimensional logical notation, with formulas drawn as branching horizontal and vertical strokes.
    caption: >-
      A page of Frege's *Begriffsschrift*. His notation was two-dimensional: conditions hang
      below conclusions on branching strokes, and a dip in a stroke binds a variable, his
      quantifier. It was exact, and almost nobody else ever wrote in it.
    credit: Gottlob Frege, 1879
    license: Public domain
    source: https://commons.wikimedia.org/wiki/File:One_page_from_Frege%27s_Begriffsschrift.png
  - id: half-adder
    src: /images/fields/mathematical-logic/half-adder.png
    alt: A circuit diagram of a half adder, with an AND gate producing the carry and two AND gates, two NOT gates and an OR gate producing the sum.
    caption: >-
      A half adder. The carry is a single AND gate. The sum, built here from AND, NOT and OR,
      is exclusive or: 1 when exactly one input is 1, as the paragraph above requires.
    credit: Kofani1997
    license: CC BY-SA 4.0
    source: https://commons.wikimedia.org/wiki/File:Half-adder_scheme.png
  - id: principia-54-43
    src: /images/fields/mathematical-logic/principia-54-43.png
    alt: A proposition in dense logical symbols numbered 54.43, with a short proof and the remark that it will follow that 1 + 1 = 2 once addition has been defined.
    caption: >-
      Proposition ✱54·43 of *Principia Mathematica*, hundreds of pages into the first volume.
      The authors remark that from it, "when arithmetical addition has been defined", it will
      follow that $1 + 1 = 2$.
    credit: Alfred North Whitehead and Bertrand Russell, 1910
    license: Public domain
    source: https://commons.wikimedia.org/wiki/File:Principia_Mathematica_54-43.png
---

## From Syllogisms to Algebra

For two thousand years, logic was {{fig:aristotle|Aristotle}}'s. His *Prior Analytics* catalogued valid forms of argument, the syllogisms, and it remained the core of logic teaching from Athens through Baghdad to Oxford. Kant thought it complete. But it could not express the reasoning mathematicians actually used: "for every number there is a larger prime" has a structure no syllogism captures.

{{img:aristotle}}

The change began in 1847. {{fig:boole|George Boole}}, a self-taught schoolmaster in Lincoln, showed that logical reasoning follows algebraic laws. Let $x$ stand for a class of things and $x \cdot y$ for things in both classes. Then $x \cdot x = x$, and logical deduction becomes calculation with only two values, 0 and 1. It was ninety years before anyone found a practical use. Then Claude Shannon noticed that electrical switches obey exactly these laws, and every digital circuit since is Boolean algebra.

{{img:boole}}

## A Language for Mathematics

{{fig:frege|Gottlob Frege}}, a mathematician at Jena, wanted more: a language in which *all* of mathematics could be written and checked. His *Begriffsschrift* (1879) introduced variables and the quantifiers "for all" and "there exists". With them any mathematical statement could be written with complete precision, and any proof broken into steps a machine could verify. {{fig:peirce|Charles Sanders Peirce}}, in America, reached quantifiers independently, and it was his notation, not Frege's, that others adopted.

{{img:begriffsschrift}}

Frege then tried to derive arithmetic from logic alone. In 1902, as the second volume went to press, he received a letter from Bertrand Russell showing that his system contained a contradiction. That paradox and its consequences belong to [set theory](/math/set-theory/).

## A Closer Look: Checking an Argument by Calculation

Boole's idea was that logic can be computed. Treat "true" as 1 and "false" as 0, and define each connective by a table. The trickiest is "if $p$ then $q$", written $p \to q$, which is false only when $p$ is true and $q$ is false:

| $p$ | $q$ | $p \to q$ | $(p \to q) \wedge p$ | $\big((p \to q) \wedge p\big) \to q$ |
|---|---|---|---|---|
| 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 |

The last column is 1 in every row, so the formula is a *tautology*: true whatever $p$ and $q$ say. That formula is the rule *modus ponens* (if $p$ implies $q$, and $p$ holds, then $q$ holds), and the table has just *proved* it valid by pure calculation, without knowing what $p$ and $q$ mean. A tempting fallacy fails the same test. "If $p$ then $q$; $q$; therefore $p$" gets a 0 in the row $p = 0$, $q = 1$. It rains, the street is wet. The street is wet, so it rained? Not if someone washed it.

The same tables built the digital world. Adding two one-bit numbers $p$ and $q$ needs a sum bit, which is 1 when exactly one of them is 1 ("exclusive or"), and a carry bit, which is 1 when both are ("and"). Wire a gate for each and you have a *half adder*. Chain adders together and you can add numbers of any length. Every processor is built from such circuits, which is Shannon's discovery that Boole's algebra and switching circuits are the same thing.

{{img:half-adder}}

Truth tables cannot handle "for all" and "there exists" over infinite domains, where there are too many rows to check. That is where Frege's quantifiers, Gödel's completeness theorem and, eventually, undecidability come in.

## Principia and Completeness

{{fig:russell|Bertrand Russell}} and {{fig:whitehead|Alfred North Whitehead}} took up the project anyway. *Principia Mathematica* (1910–13) rebuilt mathematics from logic with a theory of "types" to block the paradoxes. Its sheer bulk made a point: all of mathematics *could* be formalised, at least in principle.

{{img:principia-54-43}}

Did formal rules capture every logical truth? In 1929 {{fig:goedel|Kurt Gödel}}, a 23-year-old in Vienna, proved that for first-order logic they do. Any statement true in every model of some axioms can be derived from those axioms. It seemed the formalist dream was within reach. Two years later, the same young man showed that it was not. That story is [metamathematics](/math/metamathematics/).
