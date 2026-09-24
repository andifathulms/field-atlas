---
id: metamathematics
domain: math
thread: foundations
name: Metamathematics
parent_ids:
  - mathematical-logic
  - set-theory
era_emerged: 1900 – 1936
core_question: What can mathematics prove about itself, about its own consistency, completeness and limits?

summary: |-
  Metamathematics turns mathematics on itself. It treats proofs as mathematical objects, finite strings of symbols built by fixed rules, and proves theorems about what those rules can and cannot establish. Can every true statement about numbers be proved? Can mathematics prove that it will never contradict itself?

  Hilbert hoped the answers would be yes, and that a formal foundation could be proved safe once and for all. In 1931 Gödel showed that for any consistent system strong enough to do arithmetic, the answers are no. That result is the best-known limit on reasoning, and the methods behind it led straight to the theory of computation.

key_ideas:
  - term: Consistency
    definition: >-
      A system is consistent if it never proves both a statement and its negation. An
      inconsistent system proves everything, so consistency is the minimum requirement
      for a foundation.
    turning_point_id: hilbert-program
  - term: Gödel numbering
    definition: >-
      Encoding formulas and proofs as whole numbers, so that statements about proofs
      become statements about numbers, and arithmetic can talk about itself.
    turning_point_id: goedel-incompleteness
  - term: First incompleteness theorem
    definition: >-
      Any consistent formal system that can express basic arithmetic contains true
      statements it cannot prove, for example one that in effect says "I am not provable
      in this system".
    turning_point_id: goedel-incompleteness
  - term: Second incompleteness theorem
    definition: >-
      Such a system cannot prove its own consistency. The safety of mathematics cannot be
      certified from inside mathematics.
    turning_point_id: goedel-incompleteness
  - term: Proof assistant
    definition: >-
      Software in which proofs are written formally and checked step by step by a small,
      trusted program, which makes Hilbert's idea of mechanically checkable proof
      practical.
    turning_point_id: proof-assistants

turning_points:
  - id: hilbert-program
    date: 1900 – 1928
    type: CONJECTURE
    title: Hilbert's programme
    description: >-
      David Hilbert asks, in his 1900 problems, for a proof that arithmetic is
      consistent. In the 1920s he builds a programme around it. Formalise all of
      mathematics, then prove, by simple "finitary" reasoning no one could doubt, that the
      formal system never leads to contradiction, and find a mechanical procedure to decide
      any statement. "We must know; we will know," he said in 1930.
    contested: false
    sources:
      - citation: "Hilbert, D. (1900). Mathematische Probleme. Nachrichten von der Königlichen Gesellschaft der Wissenschaften zu Göttingen: 253–297."
        url: null
      - citation: "Hilbert, D. & Ackermann, W. (1928). Grundzüge der theoretischen Logik. Springer."
        url: null

  - id: grundlagenstreit
    date: 1918 – 1928
    type: CRISIS
    title: The foundations dispute
    description: >-
      L. E. J. Brouwer's intuitionism rejects infinite totalities and the law of the
      excluded middle (every statement is either true or false) as applied to them, and
      with them much of classical mathematics. Hermann Weyl briefly joins him. Hilbert
      fights back to save "Cantor's paradise". In 1928 the dispute ends with Hilbert
      forcing Brouwer off the editorial board of the *Mathematische Annalen*, an episode
      Einstein called a "war of the frogs and the mice".
    contested: false
    sources:
      - citation: "van Dalen, D. (1990). The war of the frogs and the mice, or the crisis of the Mathematische Annalen. Mathematical Intelligencer 12(4): 17–31."
        url: null

  - id: goedel-incompleteness
    date: "1931"
    type: DISPROOF
    title: Gödel's incompleteness theorems
    description: >-
      Kurt Gödel, 25, proves that any consistent formal system rich enough for arithmetic
      contains true statements it cannot prove, and that it cannot prove its own
      consistency. The central aim of Hilbert's programme is shown to be impossible. John
      von Neumann, hearing the first theorem announced in Königsberg in 1930, saw the
      second consequence almost immediately.
    contested: false
    sources:
      - citation: "Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik 38: 173–198."
        url: null
      - citation: "Nagel, E. & Newman, J. R. (1958). Gödel's Proof. New York University Press."
        url: null

  - id: gentzen-consistency
    date: "1936"
    type: PROOF
    title: Gentzen proves arithmetic consistent
    description: >-
      Gerhard Gentzen proves the consistency of Peano arithmetic, as Gödel's theorem
      allowed, only by assuming something arithmetic itself cannot prove: induction up
      to a certain infinite ordinal, $\varepsilon_0$. Hilbert's programme survived in a
      modified form, measuring the strength of theories by the ordinals needed to prove
      them consistent.
    contested: false
    sources:
      - citation: "Gentzen, G. (1936). Die Widerspruchsfreiheit der reinen Zahlentheorie. Mathematische Annalen 112: 493–565."
        url: null

  - id: paris-harrington
    date: "1977"
    type: PROOF
    title: A natural statement arithmetic cannot prove
    description: >-
      Gödel's unprovable sentences were artificial, built to talk about themselves. Jeff
      Paris and Leo Harrington find a natural combinatorial statement, a strengthening of
      Ramsey's theorem, that is true but unprovable in Peano arithmetic. Incompleteness is
      not just a logician's trick, and it reaches ordinary mathematics.
    contested: false
    sources:
      - citation: "Paris, J. & Harrington, L. (1977). A mathematical incompleteness in Peano arithmetic. In J. Barwise (ed.), Handbook of Mathematical Logic: 1133–1142. North-Holland."
        url: null

  - id: proof-assistants
    date: 2005 – 2022
    type: REFORMULATION
    title: Machines check major theorems
    description: >-
      Georges Gonthier completes a fully formal proof of the four colour theorem in the Coq
      proof assistant (2005). The Kepler conjecture follows in 2014, and in 2022 a
      collaboration using Lean verifies a cutting-edge theorem of Peter Scholze, at his
      request, because he was unsure of it himself. Frege's and Hilbert's dream of
      mechanically checkable proof becomes working practice.
    contested: false
    sources:
      - citation: "Gonthier, G. (2008). Formal proof — the four-color theorem. Notices of the AMS 55(11): 1382–1393."
        url: null

open_problems: []

applications:
  - area: Software engineering
    title: Verified software
    description: >-
      The techniques of formal proof now certify critical software. The CompCert C
      compiler and the seL4 operating-system kernel come with machine-checked proofs that
      they behave as specified, so whole classes of bugs are ruled out mathematically.
    sources:
      - citation: "Leroy, X. (2009). Formal verification of a realistic compiler. Communications of the ACM 52(7): 107–115."
        url: null
      - citation: "Klein, G. et al. (2009). seL4: formal verification of an OS kernel. In Proceedings of the 22nd ACM Symposium on Operating Systems Principles: 207–220."
        url: null

further_reading:
  - citation: "Nagel, E. & Newman, J. R. (1958). Gödel's Proof. New York University Press."
    url: null
    note: A short, lucid account of the incompleteness theorems for non-specialists.
  - citation: "Hofstadter, D. R. (1979). Gödel, Escher, Bach: An Eternal Golden Braid. Basic Books."
    url: null
    note: A playful, sprawling meditation on self-reference built around Gödel's theorem.
  - citation: "Smith, P. (2013). An Introduction to Gödel's Theorems (2nd ed.). Cambridge University Press."
    url: null
    note: A careful textbook treatment for readers who want the proofs.
---

## Hilbert's Programme

The paradoxes of [set theory](/math/set-theory/) raised a frightening possibility: that mathematics itself might be inconsistent, a contradiction waiting to be derived. {{fig:hilbert|David Hilbert}} proposed a way to settle the matter for good. Write all of mathematics in a formal system, as *Principia Mathematica* had begun to do. Then treat that system as a mathematical object, a game with finitely many rules on strings of symbols, and prove with the simplest, most indubitable reasoning that the game can never produce a contradiction. He also wanted a mechanical procedure to decide the truth of any mathematical statement, the *Entscheidungsproblem*.

Not everyone accepted the premise. {{fig:brouwer|L. E. J. Brouwer}}, whose fixed-point theorem helped found [algebraic topology](/math/algebraic-topology/), had turned against classical mathematics. His intuitionism accepted only what could be constructed, and denied that every statement about an infinite collection must be either true or false. The dispute turned personal. In 1928 Hilbert, gravely ill and fearing for the future of mathematics, had Brouwer removed from the editorial board of the leading journal.

## Gödel

The answer came from a quiet 25-year-old in Vienna. In 1931 {{fig:goedel|Kurt Gödel}} showed how to encode formulas and proofs as numbers, so that statements about provability become statements of arithmetic. Then he built a statement that says, in effect, "this statement is not provable". If the system is consistent, the statement is true and unprovable. Any consistent formal system rich enough for arithmetic is therefore *incomplete*. A second theorem followed: such a system cannot prove its own consistency. Hilbert's central goal, a finitary proof that mathematics is safe, was impossible.

It was not the end of the programme but a change of question. In 1936 {{fig:gentzen|Gerhard Gentzen}} proved arithmetic consistent after all, by assuming a principle of transfinite induction arithmetic cannot prove. Four decades later, {{fig:paris|Jeff Paris}} and Leo Harrington found a natural statement about colouring finite sets that is true but unprovable in ordinary arithmetic. Incompleteness reached everyday mathematics.

## Proofs by Machine

Gödel's encoding of proofs as numbers had a second consequence: checking a proof is a mechanical operation. Within five years that insight became the theory of [computation](/math/computability-theory/). Eighty years later it became practical. Proof assistants now check proofs down to the axioms. {{fig:gonthier|Georges Gonthier}} formalised the four colour theorem in 2005, and in 2022 a Lean collaboration verified a new theorem that Peter Scholze himself had doubts about. Hilbert's hope of certainty from inside failed, but his idea of mechanically checkable proof has become everyday practice.
