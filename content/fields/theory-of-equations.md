---
id: theory-of-equations
domain: math
thread: algebra
name: Theory of Equations
parent_ids: []
era_emerged: c. 820 – 1799
core_question: How can an unknown quantity be found from an equation, and is there always a formula for it?

summary: |-
  The theory of equations is algebra's original question: given a relation like $x^2 + 10x = 39$, find the unknown. For quadratic equations there is a formula, known in essence to the Babylonians. For cubics and quartics, formulas were found in sixteenth-century Italy amid secrecy, public contests and a broken oath. For the quintic, a formula was sought for another two and a half centuries.

  Along the way the subject built the tools of modern algebra. It gave a name ("al-jabr"), symbolic notation with letters for unknowns, and complex numbers, forced into existence by the cubic formula. It ended with a theorem guaranteeing that every polynomial equation has as many roots as its degree.

key_ideas:
  - term: Equation and unknown
    definition: >-
      A statement of equality involving a quantity to be found. Solving means isolating
      the unknown by operations that keep both sides equal.
    turning_point_id: al-khwarizmi
  - term: Al-jabr
    definition: >-
      "Restoration": moving a subtracted term to the other side of an equation to make it
      positive. Al-Khwārizmī's name for the operation became the name of the subject,
      algebra.
    turning_point_id: al-khwarizmi
  - term: Solution by radicals
    definition: >-
      A formula for the roots built from the coefficients using only arithmetic and
      $n$th roots, like the quadratic formula $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.
    turning_point_id: cubic-formula
  - term: Symbolic notation
    definition: >-
      Letters standing for both unknowns and known coefficients, so that whole families
      of equations can be solved at once. It came from Viète, and in modern form from
      Descartes.
    turning_point_id: viete-notation
  - term: Fundamental theorem of algebra
    definition: >-
      Every polynomial of degree $n$ has exactly $n$ roots in the complex numbers, counted
      with multiplicity. Solutions always exist, even when no formula finds them.
    turning_point_id: fundamental-theorem-algebra

turning_points:
  - id: babylonian-quadratics
    date: c. 1800 BCE
    type: REFORMULATION
    title: Babylonian scribes solve quadratic problems
    description: >-
      Clay tablets from Old Babylonian scribal schools pose and solve problems equivalent
      to quadratic equations, such as finding a rectangle's sides from its area and the
      difference of its sides. They use a step-by-step procedure that amounts to completing
      the square, and state it as a recipe, without symbols.
    contested: false
    sources:
      - citation: "Høyrup, J. (2002). Lengths, Widths, Surfaces: A Portrait of Old Babylonian Algebra and Its Kin. Springer."
        url: null

  - id: al-khwarizmi
    date: c. 820
    type: REFORMULATION
    title: Al-Khwārizmī's book of al-jabr
    description: >-
      At the House of Wisdom in Baghdad, Muḥammad ibn Mūsā al-Khwārizmī writes a manual
      classifying linear and quadratic equations into standard forms and giving general
      methods, with geometric proofs, for solving each. It is algebra as a discipline in
      its own right. "Algebra" comes from its title and "algorithm" from his name.
    contested: false
    sources:
      - citation: "Rashed, R. (2009). Al-Khwārizmī: The Beginnings of Algebra. Saqi Books."
        url: null

  - id: cubic-formula
    date: 1515 – 1545
    type: PROOF
    title: The cubic and quartic are solved
    description: >-
      Scipione del Ferro finds a formula for cubic equations around 1515 and keeps it
      secret. Niccolò Tartaglia rediscovers it in 1535 to win a public contest. Gerolamo
      Cardano coaxes it from him under an oath of secrecy, then publishes it, with Lodovico
      Ferrari's solution of the quartic, in his *Ars Magna* (1545). The formula sometimes
      requires square roots of negative numbers even when every root is real.
    contested: true
    contested_note: >-
      One of the most famous priority quarrels in mathematics. Cardano credited del Ferro
      and Tartaglia in the book, but he had sworn to Tartaglia never to publish the method.
      He justified breaking the oath by having seen del Ferro's earlier papers. Tartaglia
      denounced him, and Ferrari defended Cardano in a series of public challenges. The
      formula has been called "Cardano's formula" ever since, a naming many regard as
      unfair.
    sources:
      - citation: "Cardano, G. (1545). Ars Magna. Nuremberg."
        url: null
      - citation: "Stedall, J. (2011). From Cardano's Great Art to Lagrange's Reflections: Filling a Gap in the History of Algebra. European Mathematical Society."
        url: null

  - id: viete-notation
    date: "1591"
    type: REFORMULATION
    title: Viète puts letters for the known quantities
    description: >-
      François Viète uses vowels for unknowns and consonants for known quantities, so that
      an equation can stand for an entire family of problems and be solved in general.
      Descartes' convention of $x, y, z$ for unknowns and $a, b, c$ for constants followed
      in 1637. Algebra becomes a language.
    contested: false
    sources:
      - citation: "Viète, F. (1591). In artem analyticem isagoge. Tours."
        url: null

  - id: fundamental-theorem-algebra
    date: "1799"
    type: PROOF
    title: The fundamental theorem of algebra
    description: >-
      In his doctoral thesis, Carl Friedrich Gauss gives the first substantial proof that
      every polynomial with real coefficients factors into linear and quadratic pieces, so
      every polynomial equation has a complex root. Existence was guaranteed. Finding the
      roots by formula was another matter.
    contested: true
    contested_note: >-
      Priority and rigour are both qualified. d'Alembert (1746), Euler and Lagrange had
      given attempted proofs, which Gauss criticised for assuming what they needed. Gauss's
      own 1799 proof relied on an unproved topological fact about curves, only filled in
      by Ostrowski in 1920. Argand's 1806/1814 proof is sometimes counted as the first
      essentially complete one.
    sources:
      - citation: "Gauss, C. F. (1799). Demonstratio nova theorematis omnem functionem algebraicam rationalem integram unius variabilis in factores reales primi vel secundi gradus resolvi posse. Helmstedt."
        url: null
      - citation: "Fine, B. & Rosenberger, G. (1997). The Fundamental Theorem of Algebra. Springer."
        url: null

open_problems:
  - id: hilberts-thirteenth
    name: Hilbert's thirteenth problem
    status: open
    status_note: The continuous version was solved by Kolmogorov and Arnold (1957); the algebraic version is open as of writing.
    description: >-
      Hilbert asked whether the roots of the general degree-7 equation can be written using
      only functions of two variables. More broadly: how many variables do you really need
      to express the solution of an equation? After clever substitutions the general
      septic depends on three parameters, and the question is whether it can be done with
      fewer.
    why_hard: >-
      For continuous functions Kolmogorov and Arnold showed, surprisingly, that two
      variables always suffice, but their functions are wild. For algebraic functions, the
      natural setting, it is unknown even whether the general quintic's roots can avoid
      two-variable functions in certain senses. The modern theory of "resolvent degree"
      reformulates the question geometrically but has not answered it.
    unlocks: >-
      A precise measure of how complex the solutions of polynomial equations really are,
      beyond "solvable by radicals or not".
    sources:
      - citation: "Farb, B. & Wolfson, J. (2019). Resolvent degree, Hilbert's 13th problem and geometry. L'Enseignement Mathématique 65: 303–376."
        url: null

applications:
  - area: Engineering
    title: Stability from the roots of a polynomial
    description: >-
      Whether a machine, circuit or aircraft control system settles down or oscillates out
      of control depends on the roots of its characteristic polynomial. Routh (1877) and
      Hurwitz (1895) found tests that decide from the coefficients alone whether every
      root lies in the stable half of the complex plane.
    sources:
      - citation: "Routh, E. J. (1877). A Treatise on the Stability of a Given State of Motion. Macmillan."
        url: null

further_reading:
  - citation: "Derbyshire, J. (2006). Unknown Quantity: A Real and Imaginary History of Algebra. Joseph Henry Press."
    url: null
    note: A popular history of algebra from Babylon to the twentieth century.
  - citation: "Stedall, J. (2011). From Cardano's Great Art to Lagrange's Reflections: Filling a Gap in the History of Algebra. European Mathematical Society."
    url: null
    note: A historian's account of the two centuries between the cubic and the quintic.
  - citation: "Tignol, J.-P. (2001). Galois' Theory of Algebraic Equations. World Scientific."
    url: null
    note: The mathematics of equations developed historically, from quadratics to Galois.
---

## Recipes on Clay

The oldest algebra is nearly four thousand years old. Old Babylonian scribes posed problems like "I added the area and the side of a square: 45" and solved them with fixed procedures: halve this, square that, add, take the square root. These are the steps of completing the square, stated as recipes without symbols. Greek mathematicians treated such problems geometrically, as rectangles and squares of unknown size.

## Al-Jabr

Around 820, at the House of Wisdom in Baghdad, {{fig:al-khwarizmi|Muḥammad ibn Mūsā al-Khwārizmī}} wrote a short book that made equation-solving a discipline. He sorted linear and quadratic equations into six standard types and gave a general method, with a geometric proof, for each. His operation *al-jabr*, "restoring" a subtracted quantity by moving it to the other side, gave the subject its name. His own name, Latinised, gave us "algorithm". The Persian poet-mathematician Omar Khayyam later solved cubic equations geometrically, by intersecting conic sections, and said an algebraic formula might be found by others.

## Duels in Italy

It was found in sixteenth-century Italy, where mathematicians made their reputations in public problem-solving contests and guarded their methods. Around 1515 Scipione del Ferro found a formula for one kind of cubic and told only a student. In 1535 {{fig:tartaglia|Niccolò Tartaglia}} rediscovered it and won a contest with it. {{fig:cardano|Gerolamo Cardano}} persuaded Tartaglia to reveal it under a solemn oath of secrecy. Then, having seen del Ferro's older notes, he published it in *Ars Magna* (1545), with his student Lodovico Ferrari's solution of the quartic. Tartaglia never forgave him.

The formula had a strange feature. For some cubics with three real roots it passes through square roots of negative numbers. Working with those "impossible" numbers was the start of [complex analysis](/math/complex-analysis/).

## Symbols and Existence

Notation turned recipes into theory. {{fig:viete|François Viète}} in 1591 used letters for known quantities as well as unknowns, so that one equation could stand for every problem of its type. Descartes, in 1637, gave the modern convention of $x$ and $y$.

Two questions remained. Does every equation *have* a solution? {{fig:gauss|Gauss}}'s 1799 thesis proved that every polynomial equation has a root among the complex numbers, the *fundamental theorem of algebra*. And can every equation be solved by a *formula*? For degree five, the best mathematicians of the eighteenth century tried and failed. Understanding why is [Galois theory](/math/galois-theory/).
