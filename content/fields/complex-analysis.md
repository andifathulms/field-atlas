---
id: complex-analysis
domain: math
thread: analysis
name: Complex Analysis
parent_ids:
  - calculus
  - theory-of-equations
era_emerged: 1799 – 1851
core_question: What happens to calculus when numbers are allowed to be complex?

summary: |-
  Complex analysis is calculus for functions of complex numbers, numbers of the form $a + bi$ where $i^2 = -1$. Complex numbers can be pictured as points in a plane, and a function that can be differentiated in the complex sense turns out to be extraordinarily rigid. Its values on a tiny region determine it everywhere, and its integrals around closed loops can be computed from a few special points.

  That rigidity makes it one of the most powerful tools in mathematics. Riemann used it to count the primes, engineers use it for alternating current and airflow over wings, and quantum mechanics is written in complex numbers.

key_ideas:
  - term: The complex plane
    definition: >-
      The number $a + bi$ drawn as the point $(a, b)$. Adding complex numbers is
      shifting, and multiplying is rotating and scaling. Imaginary numbers became
      geometry.
    turning_point_id: complex-plane
  - term: Holomorphic function
    definition: >-
      A function differentiable in the complex sense at every point of a region. It is
      then automatically differentiable infinitely often and equal to its own power
      series, far stronger than anything true in real calculus.
    turning_point_id: cauchy-integral
  - term: Cauchy's integral theorem
    definition: >-
      The integral of a holomorphic function around a closed loop is zero, and its value
      inside the loop can be computed from values on the loop. Many real integrals are
      evaluated this way.
    turning_point_id: cauchy-integral
  - term: Analytic continuation
    definition: >-
      Extending a function beyond the region where its formula works, uniquely. It is how
      Riemann made sense of the zeta function at every complex number except 1.
    turning_point_id: riemann-thesis
  - term: Conformal map
    definition: >-
      A map that preserves angles. Holomorphic functions are conformal, and Riemann's
      mapping theorem says that any simply connected region of the plane can be mapped
      conformally onto a disc.
    turning_point_id: riemann-thesis

turning_points:
  - id: cardano-bombelli
    date: 1545 – 1572
    type: REFORMULATION
    title: Square roots of negative numbers appear in the cubic formula
    description: >-
      Gerolamo Cardano's *Ars Magna* (1545) publishes the formula for cubic equations.
      For some equations with three perfectly real solutions, it passes through square
      roots of negative numbers. Rafael Bombelli (1572) shows how to calculate with such
      "impossible" numbers and get real answers out. Complex numbers entered mathematics
      not by choice but because solving real equations required them.
    contested: false
    sources:
      - citation: "Cardano, G. (1545). Ars Magna. Nuremberg."
        url: null
      - citation: "Nahin, P. J. (1998). An Imaginary Tale: The Story of √−1. Princeton University Press."
        url: null

  - id: complex-plane
    date: 1799 – 1831
    type: REFORMULATION
    title: Complex numbers become points in a plane
    description: >-
      Picturing $a + bi$ as a point, and multiplication as rotation, removes the mystery
      from imaginary numbers. Caspar Wessel (1799) and Jean-Robert Argand (1806) publish
      the picture, and Gauss's endorsement in 1831 makes it standard. Complex numbers
      become as concrete as geometry.
    contested: true
    contested_note: >-
      Priority is disputed. Wessel, a Norwegian-Danish surveyor, presented the idea to
      the Royal Danish Academy in 1797 and published in 1799, in Danish, and was ignored
      for a century. Argand, a Geneva-born bookkeeper living in Paris, published independently and
      anonymously in 1806. Gauss claimed in 1831 to have held the view since 1799. The
      representation is still often called the "Argand diagram" or "Gaussian plane",
      rarely after Wessel.
    sources:
      - citation: "Wessel, C. (1799). Om Directionens analytiske Betegning. Nye Samling af det Kongelige Danske Videnskabernes Selskabs Skrifter 5: 469–518."
        url: null
      - citation: "Nahin, P. J. (1998). An Imaginary Tale: The Story of √−1. Princeton University Press."
        url: null

  - id: cauchy-integral
    date: 1814 – 1831
    type: PROOF
    title: Cauchy's integral theorem and formula
    description: >-
      Augustin-Louis Cauchy develops integration along paths in the complex plane and
      proves that for a holomorphic function the integral around a closed loop vanishes
      (1825). His integral formula (1831) recovers the function inside a loop from its
      values on the boundary. Complex analysis gains its central tools.
    contested: false
    sources:
      - citation: "Cauchy, A.-L. (1825). Mémoire sur les intégrales définies, prises entre des limites imaginaires. De Bure, Paris."
        url: null

  - id: riemann-thesis
    date: "1851"
    type: REFORMULATION
    title: Riemann's geometric theory of complex functions
    description: >-
      Bernhard Riemann's doctoral thesis treats complex functions geometrically, as
      angle-preserving maps. He introduces the surfaces on which many-valued functions
      become single-valued, and states the Riemann mapping theorem. Gauss, examining it,
      praised its "creative, active, truly mathematical mind". Eight years later
      Riemann used these ideas to study the prime numbers.
    contested: false
    sources:
      - citation: "Riemann, B. (1851). Grundlagen für eine allgemeine Theorie der Functionen einer veränderlichen complexen Grösse. Inaugural dissertation, Göttingen."
        url: null

  - id: dirichlet-principle-crisis
    date: "1870"
    type: CRISIS
    title: Weierstrass undermines the Dirichlet principle
    description: >-
      Riemann had proved his mapping theorem and much else using the "Dirichlet principle",
      the assumption that a certain energy always has a function that minimises it. Karl
      Weierstrass gives an example where no minimiser exists. Riemann's proofs are left
      without foundation, and for thirty years mathematicians rebuilt the results by
      other means, until Hilbert rescued the principle itself in 1900.
    contested: false
    sources:
      - citation: "Monna, A. F. (1975). Dirichlet's Principle: A Mathematical Comedy of Errors and Its Influence on the Development of Analysis. Oosthoek, Scheltema & Holkema."
        url: null

open_problems:
  - id: bieberbach-conjecture
    name: The Bieberbach conjecture
    status: recently_resolved
    status_note: Proved by Louis de Branges in 1984 (published 1985), after 68 years.
    description: >-
      Ludwig Bieberbach conjectured in 1916 that for any one-to-one holomorphic function
      on the unit disc, normalised as $z + a_2 z^2 + a_3 z^3 + \cdots$, every coefficient
      satisfies $|a_n| \le n$. The Koebe function shows the bound cannot be improved.
    why_hard: >-
      It was proved coefficient by coefficient for small $n$ with increasingly heavy
      methods, but no approach covered all $n$. De Branges's proof went through a stronger
      conjecture and an inequality about special functions. Because some of his earlier
      claims had been wrong, the proof was doubted until a seminar in Leningrad checked
      and simplified it.
    unlocks: >-
      The methods, especially Loewner's equation, which describes how conformal maps grow,
      became tools in probability and statistical physics, where the stochastic Loewner
      evolution of the 2000s describes random curves.
    sources:
      - citation: "de Branges, L. (1985). A proof of the Bieberbach conjecture. Acta Mathematica 154: 137–152."
        url: null

applications:
  - area: Aerodynamics
    title: Lift on an aircraft wing
    description: >-
      Around 1910 Nikolai Joukowsky used a conformal map to turn the easy problem of flow
      around a cylinder into flow around a wing-shaped profile. With the Kutta–Joukowski
      theorem, which gives lift in terms of circulation, complex analysis became part of
      the theory of flight.
    sources:
      - citation: "Anderson, J. D. (1997). A History of Aerodynamics. Cambridge University Press."
        url: null
  - area: Electrical engineering
    title: Alternating current as rotating complex numbers
    description: >-
      Charles Steinmetz showed in the 1890s that alternating voltages and currents can be
      treated as complex numbers (phasors), turning differential equations into algebra.
      Electrical engineers have calculated circuits this way ever since.
    sources: []
  - area: Quantum physics
    title: Quantum mechanics is written in complex numbers
    description: >-
      The state of a quantum system is a complex-valued wave function, and interference,
      the heart of quantum behaviour, comes from adding complex amplitudes. Unlike in
      classical physics, the complex numbers here are more than a convenience.
    domain: physics
    field_id: quantum-mechanics
    sources:
      - citation: "Schrödinger, E. (1926). Quantisierung als Eigenwertproblem. Annalen der Physik 79: 361–376."
        url: null

further_reading:
  - citation: "Needham, T. (1997). Visual Complex Analysis. Oxford University Press."
    url: null
    note: Teaches the subject through pictures and geometric intuition. Much loved.
  - citation: "Nahin, P. J. (1998). An Imaginary Tale: The Story of √−1. Princeton University Press."
    url: null
    note: A popular history of complex numbers, from Cardano to the present.
  - citation: "Ahlfors, L. V. (1979). Complex Analysis (3rd ed.). McGraw-Hill."
    url: null
    note: The classic graduate text.
---

## Impossible Numbers

Complex numbers did not arrive because anyone wanted them. They were forced on mathematicians by the [theory of equations](/math/theory-of-equations/). In 1545 {{fig:cardano|Gerolamo Cardano}} published a formula for solving cubic equations, and it had a disturbing feature. For some equations with three perfectly ordinary real solutions, the formula passes through the square root of a negative number. {{fig:bombelli|Rafael Bombelli}} showed in 1572 that if you simply calculate with these "impossible" quantities, following the usual rules, the real answers come out at the end. For two centuries they were used and distrusted, and the name "imaginary" stuck.

## Numbers as Points

The distrust ended with a picture. Represent $a + bi$ as the point $(a, b)$. Adding complex numbers is sliding, and multiplying by $i$ is rotating a quarter-turn. {{fig:wessel|Caspar Wessel}}, a surveyor, published this in 1799 and was ignored. {{fig:argand|Jean-Robert Argand}} published it anonymously in 1806, and {{fig:gauss|Gauss}}'s endorsement in 1831 made it standard. Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$ now had a meaning: exponentials of imaginary numbers are rotations.

## Calculus in the Complex Plane

Doing [calculus](/math/calculus/) with complex numbers turned out to be a different world. {{fig:cauchy|Augustin-Louis Cauchy}} showed that for a function differentiable in the complex sense, integrals around closed loops vanish, and the function's values inside any loop are fixed by its values on the boundary:

$$
f(z) = \frac{1}{2\pi i}\oint \frac{f(w)}{w - z}\,dw .
$$

Such functions are infinitely differentiable, equal to their power series, and so rigid that knowing them on a tiny segment determines them everywhere. Real integrals that resist every other method fall to a short detour through the complex plane.

## A Closer Look: Solving a Real Integral by Going Complex

Here is a real integral that complex analysis makes easy:

$$
\int_{-\infty}^{\infty} \frac{\cos x}{1 + x^2}\,dx .
$$

No elementary antiderivative exists. Instead, consider the complex function $f(z) = \frac{e^{iz}}{1 + z^2}$, whose real part on the real line is the integrand. Integrate it around a closed loop: along the real axis from $-R$ to $R$, then back along a big semicircle in the upper half-plane.

Inside the loop, $f$ misbehaves at only one point, $z = i$, where $1 + z^2 = (z - i)(z + i)$ vanishes. Cauchy's theory says the whole loop integral is determined by that single point, its *residue*:

$$
\oint f(z)\,dz = 2\pi i \cdot \frac{e^{i \cdot i}}{i + i} = 2\pi i \cdot \frac{e^{-1}}{2i} = \frac{\pi}{e} .
$$

As $R$ grows, the semicircle's contribution vanishes, because $|e^{iz}| = e^{-\operatorname{Im} z} \le 1$ in the upper half-plane and the denominator grows like $R^2$. What remains is the integral along the real line. So

$$
\int_{-\infty}^{\infty} \frac{\cos x}{1 + x^2}\,dx = \frac{\pi}{e} \approx 1.1557 .
$$

The answer involves both $\pi$ and $e$, and it came from a single point off the real line where the integrand was never evaluated. This is the rigidity of holomorphic functions at work: their values on a closed curve are fixed by what happens at a few special points inside. Physicists and engineers compute integrals this way every day, and Riemann used the same idea to turn the zeros of the zeta function into information about primes.

## Riemann's Geometry and Weierstrass's Doubts

{{fig:riemann|Bernhard Riemann}}'s 1851 thesis saw complex functions geometrically, as maps that preserve angles, and introduced the surfaces that bear his name. It became the root of [algebraic geometry](/math/algebraic-geometry/)'s Riemann surfaces. In 1859 he turned the same tools on the prime numbers, extending the zeta function to the whole complex plane apart from a single point, which is the founding move of [analytic number theory](/math/analytic-number-theory/).

His methods leaned on an assumption, the Dirichlet principle, that {{fig:weierstrass|Karl Weierstrass}} showed in 1870 could fail. The two schools were built differently: Riemann's geometric and intuitive, Weierstrass's built on power series and strict proof. Riemann's results survived, reproved by other means, and Hilbert repaired the principle in 1900. The episode was part of the push for rigour that runs through [real analysis](/math/real-analysis/).
