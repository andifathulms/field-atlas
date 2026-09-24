---
id: abstract-algebra
domain: math
thread: algebra
name: Abstract Algebra
parent_ids:
  - group-theory
  - algebraic-number-theory
era_emerged: 1843 – 1931
core_question: What do all number-like systems have in common, and can algebra be done without numbers at all?

summary: |-
  Abstract algebra studies algebraic *structures*: rings, fields, modules and more, defined only by the rules their operations obey. Instead of solving a particular equation, it asks what follows from the rules alone. A theorem proved for all rings then holds at once for integers, polynomials, matrices and number systems no one has invented yet.

  The approach grew from surprises: in 1843, a multiplication in which $ab \ne ba$. It matured in Göttingen in the 1920s, when Emmy Noether showed that the right abstract conditions explain results that had needed long calculations. It became the language of most of twentieth-century mathematics.

key_ideas:
  - term: Ring and field
    definition: >-
      A ring has addition and multiplication obeying the familiar rules, like the integers
      or polynomials. A field also allows division by any non-zero element, like the
      rationals or the real numbers.
    turning_point_id: steinitz-fields
  - term: Non-commutativity
    definition: >-
      Multiplication where order matters, $ab \ne ba$, as in Hamilton's quaternions and in
      matrices. It is essential for describing rotations and quantum observables.
    turning_point_id: quaternions
  - term: Ideal
    definition: >-
      A subset of a ring closed under addition and under multiplication by anything in
      the ring. Dedekind's device from number theory became the central tool of ring
      theory.
    turning_point_id: noether-ideals
  - term: Noetherian ring
    definition: >-
      A ring in which every ascending chain of ideals eventually stops. This one condition,
      identified by Noether, makes the theory of polynomial equations work.
    turning_point_id: noether-ideals
  - term: Structure and homomorphism
    definition: >-
      Study objects through the maps between them that preserve the operations. Noether's
      insistence on this viewpoint shaped algebra, topology and eventually category theory.
    turning_point_id: van-der-waerden

turning_points:
  - id: quaternions
    date: "1843"
    type: REFORMULATION
    title: Hamilton's quaternions
    description: >-
      Walking along the Royal Canal in Dublin, William Rowan Hamilton realises that a
      four-dimensional number system works if multiplication is allowed to depend on order.
      He carves $i^2 = j^2 = k^2 = ijk = -1$ into Broome Bridge. It was the first algebra
      in which $ab \neq ba$, and it showed that the laws of arithmetic were choices, not
      necessities.
    contested: false
    sources:
      - citation: "Hamilton, W. R. (1844). On quaternions; or on a new system of imaginaries in algebra. Philosophical Magazine 25(163): 10–13."
        url: null

  - id: hilbert-basis
    date: "1890"
    type: PROOF
    title: Hilbert's basis theorem
    description: >-
      Paul Gordan had spent years computing, by enormous explicit calculations, finite sets
      of generating invariants for binary forms. David Hilbert proves that finite
      generating sets always exist for polynomial ideals, without constructing them, by a
      short abstract argument. Gordan reportedly exclaimed, "This is not mathematics, it is
      theology." Non-constructive existence proofs began to be accepted as mathematics.
    contested: false
    sources:
      - citation: "Hilbert, D. (1890). Über die Theorie der algebraischen Formen. Mathematische Annalen 36: 473–534."
        url: null

  - id: steinitz-fields
    date: "1910"
    type: REFORMULATION
    title: Steinitz's abstract theory of fields
    description: >-
      Ernst Steinitz studies fields purely from their axioms. He classifies them by their
      characteristic, proves that every field has an algebraic closure, and organises field
      extensions systematically. It was the model for treating an algebraic structure
      axiomatically and completely.
    contested: false
    sources:
      - citation: "Steinitz, E. (1910). Algebraische Theorie der Körper. Journal für die reine und angewandte Mathematik 137: 167–309."
        url: null

  - id: noether-ideals
    date: "1921"
    type: REFORMULATION
    title: Emmy Noether's theory of ideals
    description: >-
      In "Idealtheorie in Ringbereichen", Emmy Noether shows that the factorisation
      theorems of number theory and of polynomial algebra follow from a single abstract
      condition on chains of ideals. Long computations are replaced by structural
      arguments. Her Göttingen seminar, which she taught for years without a salary, spread
      the style across a generation.
    contested: false
    sources:
      - citation: "Noether, E. (1921). Idealtheorie in Ringbereichen. Mathematische Annalen 83: 24–66."
        url: null
      - citation: "Dick, A. (1981). Emmy Noether, 1882–1935. Birkhäuser."
        url: null

  - id: van-der-waerden
    date: 1930 – 1931
    type: REFORMULATION
    title: Van der Waerden's Moderne Algebra
    description: >-
      Bartel van der Waerden, a young Dutch mathematician, writes up the lectures of Emmy
      Noether and Emil Artin as *Moderne Algebra*. Algebra is presented for the first time
      as the study of groups, rings and fields. The book set the curriculum of algebra for
      the rest of the century.
    contested: false
    sources:
      - citation: "van der Waerden, B. L. (1930–1931). Moderne Algebra (2 vols.). Springer."
        url: null

open_problems:
  - id: jacobian-conjecture
    name: The Jacobian conjecture
    status: open
    status_note: Open as of writing; many published proofs have been wrong.
    description: >-
      Take a polynomial map from $n$-dimensional space to itself whose Jacobian determinant
      (its local stretching factor) is a non-zero constant everywhere. Ott-Heinrich Keller
      conjectured in 1939 that such a map must have a polynomial inverse. The conjecture
      is unproved even for two variables.
    why_hard: >-
      A constant Jacobian guarantees the map is invertible *locally*, and the problem is
      whether that forces a global polynomial inverse. It has been reduced to maps of degree
      three, but that reduction does not make it easier. Its simple statement has attracted
      many incorrect proofs, some by well-known mathematicians.
    unlocks: >-
      It is connected to several other open problems in algebra, including the Dixmier
      conjecture on differential operators, so a proof would settle a cluster of questions.
    sources:
      - citation: "Bass, H., Connell, E. H. & Wright, D. (1982). The Jacobian conjecture: reduction of degree and formal expansion of the inverse. Bulletin of the AMS 7(2): 287–330."
        url: null

applications:
  - area: Computer graphics
    title: Quaternions rotate everything in 3D
    description: >-
      Flight simulators, spacecraft attitude control, robots and video games represent
      rotations with Hamilton's quaternions. They avoid the "gimbal lock" of angle-based
      methods and interpolate smoothly between orientations.
    sources:
      - citation: "Shoemake, K. (1985). Animating rotation with quaternion curves. ACM SIGGRAPH Computer Graphics 19(3): 245–254."
        url: null
  - area: Cryptography
    title: Finite fields inside AES
    description: >-
      The Advanced Encryption Standard, which encrypts most stored and transmitted data,
      does its mixing with arithmetic in the finite field of 256 elements. Abstract
      field theory is what makes its design analysable.
    sources:
      - citation: "Daemen, J. & Rijmen, V. (2002). The Design of Rijndael: AES — The Advanced Encryption Standard. Springer."
        url: null

further_reading:
  - citation: "Dick, A. (1981). Emmy Noether, 1882–1935. Birkhäuser."
    url: null
    note: A biography of Noether and her mathematical school.
  - citation: "Gallian, J. A. (2016). Contemporary Abstract Algebra (9th ed.). Cengage."
    url: null
    note: A widely used, example-rich undergraduate textbook.
  - citation: "van der Waerden, B. L. (1991). Algebra (2 vols., English translation of Moderne Algebra). Springer."
    url: null
    note: The book that defined modern algebra, still readable.
---

## Numbers That Don't Commute

For a long time algebra meant manipulating numbers, and the laws of arithmetic, like $ab = ba$, seemed beyond question. In 1843 {{fig:rowan-hamilton|William Rowan Hamilton}} broke one. He had spent years trying to build a three-dimensional analogue of the complex numbers. Walking along a canal in Dublin, he saw that it worked in four dimensions if multiplication was allowed to depend on order. He carved the rule into the stone of Broome Bridge. Quaternions showed that algebraic laws could be chosen, and within a few years Cayley and others were studying matrices, which do not commute either.

## Existence Without Construction

The second shock came from invariant theory, then a field of heroic calculation. Paul Gordan had spent years computing explicit generators for certain systems of polynomials. In 1890 {{fig:hilbert|David Hilbert}} proved that a finite set of generators always exists, in a few pages, by showing that the alternative leads to contradiction, without saying what the generators are. Gordan is said to have called it "not mathematics but theology". Within a few years the method had won, and algebra began to prefer understanding why to computing what.

Meanwhile {{fig:dedekind|Dedekind}} had introduced ideals to repair factorisation in [algebraic number theory](/math/algebraic-number-theory/), and in 1910 {{fig:steinitz|Ernst Steinitz}} worked out the theory of fields from axioms alone.

## Noether's Revolution

The decisive figure was {{fig:noether|Emmy Noether}}. Barred as a woman from a regular position at Göttingen, she lectured for years under Hilbert's name without pay. In 1921 she showed that the factorisation theorems of number theory and of polynomial algebra all follow from one abstract condition: every increasing chain of ideals stops. Rings satisfying it are now called *Noetherian*. Calculations gave way to structure: study objects through the maps that preserve their operations. Her students, the "Noether boys", carried the style everywhere.

{{fig:van-der-waerden|Bartel van der Waerden}}, who attended her lectures and Artin's, wrote them up as *Moderne Algebra* (1930–31). It presented algebra as the study of groups, rings and fields, and became the template of algebra courses worldwide. In 1933 Noether, who was Jewish, was dismissed by the Nazi government and emigrated to Bryn Mawr, where she died in 1935. Einstein called her the most significant creative mathematical genius since higher education for women began.

Her abstract methods fed directly into [algebraic geometry](/math/algebraic-geometry/), whose rebuilding by Zariski and Grothendieck is written in her language, and into [representation theory](/math/representation-theory/).
