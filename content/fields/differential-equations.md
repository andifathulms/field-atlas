---
id: differential-equations
domain: math
thread: dynamics
name: Differential Equations
parent_ids:
  - calculus
era_emerged: 1671 – 1890
core_question: If we know how something is changing at every instant, can we work out where it will be?

summary: |-
  A differential equation relates a quantity to its own rate of change. Newton's second law says the acceleration of a planet is set by its position. The rate at which a radioactive sample decays is proportional to how much of it is left. The rate at which an epidemic grows depends on how many people are infected and how many are still susceptible. Solving the equation means finding the quantity's whole history from the rule and a starting point.

  For a century after calculus, mathematicians solved one equation after another by ingenious formulas. By the mid-nineteenth century it was clear that most equations have no such formula. The subject turned to proving that solutions exist, computing them approximately, and, with Poincaré, describing how they behave without solving them at all. That last step began the study of dynamical systems.

key_ideas:
  - term: Differential equation
    definition: >-
      An equation involving an unknown function and its derivatives, such as
      $y' = ky$ for exponential growth. Ordinary equations involve one variable, usually
      time; partial differential equations involve several.
    turning_point_id: euler-linear-odes
  - term: Initial value problem
    definition: >-
      A differential equation together with a starting state. Under mild conditions it
      has exactly one solution: the present determines the future.
    turning_point_id: cauchy-existence
  - term: Solution in closed form
    definition: >-
      A formula built from known functions and integrals. Most equations have none,
      which Liouville proved for a simple-looking equation in 1841.
    turning_point_id: liouville-riccati
  - term: Numerical method
    definition: >-
      Approximating a solution by taking many small steps, each following the current
      rate of change. Euler's method, from 1768, is the simplest, and all simulation
      software descends from it.
    turning_point_id: euler-linear-odes

turning_points:
  - id: brachistochrone
    date: 1696 – 1697
    type: PROOF
    title: The brachistochrone challenge
    description: >-
      Johann Bernoulli challenges the mathematicians of Europe to find the curve down which
      a bead slides from one point to another in the least time. Newton, Leibniz, Jacob
      Bernoulli and L'Hôpital all solve it: the curve is a cycloid. Newton's anonymous
      solution was recognised, Bernoulli said, "as the lion by its claw". Calculus was
      now a tool for finding unknown curves from conditions on their rates of change.
    contested: false
    sources:
      - citation: "Bernoulli, J. (1696). Problema novum ad cujus solutionem Mathematici invitantur. Acta Eruditorum, June 1696: 269."
        url: null
      - citation: "Goldstine, H. H. (1980). A History of the Calculus of Variations from the 17th through the 19th Century. Springer."
        url: null

  - id: euler-linear-odes
    date: 1743 – 1768
    type: REFORMULATION
    title: Euler systematises the subject
    description: >-
      Leonhard Euler shows how to solve every linear differential equation with constant
      coefficients, by reducing it to finding the roots of a polynomial. In his
      *Institutiones calculi integralis* he also gives the first general method for
      computing approximate solutions step by step. Solving equations became a
      systematic subject rather than a collection of tricks.
    contested: false
    sources:
      - citation: "Euler, L. (1743). De integratione aequationum differentialium altiorum graduum. Miscellanea Berolinensia 7: 193–242."
        url: null
      - citation: "Euler, L. (1768–1770). Institutiones calculi integralis (3 vols.). St Petersburg Academy."
        url: null

  - id: cauchy-existence
    date: 1824 – 1890
    type: PROOF
    title: Solutions exist and are unique
    description: >-
      In his lectures at the École Polytechnique, Augustin-Louis Cauchy proves that an
      initial value problem has a solution even when no formula for it can be found.
      Rudolf Lipschitz sharpens the conditions, and in 1890 Émile Picard gives the proof
      by successive approximations that is taught today. The determinism of mechanics
      became a theorem.
    contested: false
    sources:
      - citation: "Picard, É. (1890). Mémoire sur la théorie des équations aux dérivées partielles et la méthode des approximations successives. Journal de Mathématiques Pures et Appliquées (4) 6: 145–210."
        url: null
      - citation: "Kline, M. (1972). Mathematical Thought from Ancient to Modern Times, ch. 29. Oxford University Press."
        url: null

  - id: liouville-riccati
    date: "1841"
    type: DISPROOF
    title: Most equations can't be solved by formula
    description: >-
      Joseph Liouville proves that the Riccati equation $y' = x^2 + y^2$, which looks
      simple, cannot be solved by any combination of elementary functions and integrals.
      Solving differential equations by formula could not be the whole subject. It became
      necessary to prove things about solutions without writing them down.
    contested: false
    sources:
      - citation: "Liouville, J. (1841). Remarques nouvelles sur l'équation de Riccati. Journal de Mathématiques Pures et Appliquées 6: 1–13."
        url: null

  - id: kovalevskaya-theorem
    date: 1874 – 1875
    type: PROOF
    title: The Cauchy–Kovalevskaya theorem
    description: >-
      Sofia Kovalevskaya, barred from Russian universities as a woman, studies privately
      with Weierstrass in Berlin. Her doctoral thesis, awarded by Göttingen in 1874,
      proves that a wide class of partial differential equations has solutions given by
      convergent power series. She was the first woman in modern Europe to receive a
      doctorate in mathematics, and in 1889 one of the first women to hold a full professorship.
    contested: false
    sources:
      - citation: "von Kowalevsky, S. (1875). Zur Theorie der partiellen Differentialgleichungen. Journal für die reine und angewandte Mathematik 80: 1–32."
        url: null
      - citation: "Koblitz, A. H. (1983). A Convergence of Lives: Sofia Kovalevskaia, Scientist, Writer, Revolutionary. Birkhäuser."
        url: null

open_problems:
  - id: hilbert-sixteenth
    name: Hilbert's sixteenth problem (second part)
    status: open
    status_note: Open as of writing, even for equations of degree two.
    description: >-
      A limit cycle is an isolated closed orbit that nearby solutions spiral towards or
      away from. For a system $x' = P(x, y)$, $y' = Q(x, y)$ with $P$ and $Q$ polynomials
      of degree $n$, how many limit cycles can there be? Hilbert asked in 1900 for the
      maximum number and their possible arrangements.
    why_hard: >-
      Even the statement that each such system has finitely many limit cycles took until
      1991–92 to prove, by Yulij Ilyashenko and Jean Écalle independently, after a 1923
      proof by Dulac was found to be flawed. Systems of degree two are known that have
      four limit cycles, but no one has proved that there cannot be more.
    unlocks: >-
      Limit cycles model self-sustaining oscillations, from heartbeats to electronic
      oscillators. A bound would tell exactly how many independent rhythms simple
      polynomial models can sustain.
    sources:
      - citation: "Ilyashenko, Y. (2002). Centennial history of Hilbert's 16th problem. Bulletin of the American Mathematical Society 39(3): 301–354."
        url: null

applications:
  - area: Epidemiology
    title: The SIR model
    description: >-
      In 1927 William Kermack and Anderson McKendrick modelled an epidemic with three
      coupled differential equations for susceptible, infected and recovered people.
      Their model predicts a threshold for an outbreak, and its descendants guided
      responses to COVID-19.
    domain: biology
    sources:
      - citation: "Kermack, W. O. & McKendrick, A. G. (1927). A contribution to the mathematical theory of epidemics. Proceedings of the Royal Society A 115(772): 700–721."
        url: null
  - area: Mechanics
    title: Every law of motion is a differential equation
    description: >-
      Newton's second law, $F = ma$, is a differential equation for position. Planetary
      orbits, projectiles, pendulums and spacecraft trajectories are all found by solving
      it, exactly for two bodies and numerically for more.
    domain: physics
    field_id: classical-mechanics
    sources:
      - citation: "Arnold, V. I. (1989). Mathematical Methods of Classical Mechanics (2nd ed.). Springer."
        url: null
  - area: Engineering
    title: Simulation
    description: >-
      Weather forecasts, crash tests, circuit design and climate models all integrate
      differential equations numerically. The Runge–Kutta methods of around 1900, refined
      versions of Euler's step-by-step method, are still the workhorses.
    sources:
      - citation: "Butcher, J. C. (2016). Numerical Methods for Ordinary Differential Equations (3rd ed.). Wiley."
        url: null

further_reading:
  - citation: "Strogatz, S. (2019). Infinite Powers: How Calculus Reveals the Secrets of the Universe. Houghton Mifflin Harcourt."
    url: null
    note: A popular account of calculus and the differential equations that grew from it.
  - citation: "Hirsch, M. W., Smale, S. & Devaney, R. L. (2013). Differential Equations, Dynamical Systems, and an Introduction to Chaos (3rd ed.). Academic Press."
    url: null
    note: An undergraduate textbook that leads from equations to dynamical systems.
  - citation: "Arnold, V. I. (1992). Ordinary Differential Equations. Springer."
    url: null
    note: A geometric, intuitive treatment by one of the masters of the subject.
---

## Laws of Change

[Calculus](/math/calculus/) made it possible to state a law of nature as a rule about rates of change. {{fig:newton|Newton}} wrote the laws of motion that way, and in a treatise of 1671 he classified the "fluxional equations" that result. The task was to go backwards, from the rule to the motion. Early successes were spectacular. In 1696 {{fig:johann-bernoulli|Johann Bernoulli}} challenged Europe to find the curve of fastest descent. Newton solved it overnight, and {{fig:leibniz|Leibniz}} and {{fig:jacob-bernoulli|Jacob Bernoulli}} solved it too: a cycloid, the curve traced by a point on a rolling wheel.

## Euler's Toolbox

{{fig:euler|Leonhard Euler}} turned the tricks into methods. In 1743 he showed that every linear equation with constant coefficients, the kind that describes springs, pendulums and circuits, reduces to finding the roots of a polynomial. He classified equations by type and solved type after type. And where no method worked, he proposed computing the solution approximately: start at the known point, follow the current slope for a short step, recompute the slope, and repeat.

## No Formula

The hope that every equation could be solved by formula ended with {{fig:liouville|Joseph Liouville}}. In 1841 he proved that even the innocent-looking Riccati equation $y' = x^2 + y^2$ has no solution built from elementary functions and integrals. It became clear that solvable equations were the exception.

That raised a basic question: if no formula exists, does a solution exist at all? {{fig:cauchy|Augustin-Louis Cauchy}} proved in the 1820s that it does, under mild conditions, and that it is unique. {{fig:rudolf-lipschitz|Rudolf Lipschitz}} and {{fig:emile-picard|Émile Picard}} later gave the sharp conditions and the proof by successive approximation. {{fig:sofia-kovalevskaya|Sofia Kovalevskaya}} extended existence to partial differential equations in her thesis of 1874. Determinism, the idea that the present fixes the future, was now a theorem.

## A Closer Look: Stepping Towards $e$

The simplest growth law is $y' = y$: the rate of growth equals the current amount, starting from $y(0) = 1$. Its exact solution is $y = e^t$, so at $t = 1$ the answer is $e = 2.71828\ldots$ Pretend we don't know that, and use Euler's method.

With step size $h$, each step multiplies the current value by $(1 + h)$, since the value grows by $h$ times itself. Reaching $t = 1$ takes $1/h$ steps, so the estimate is $(1 + h)^{1/h}$:

| Step size $h$ | Steps | Estimate of $y(1)$ | Error |
|---|---|---|---|
| 1 | 1 | 2 | 0.718 |
| 0.5 | 2 | 2.25 | 0.468 |
| 0.1 | 10 | 2.5937 | 0.125 |
| 0.01 | 100 | 2.7048 | 0.0135 |
| 0.001 | 1,000 | 2.7169 | 0.00136 |

Every tenfold decrease in step size cuts the error roughly tenfold. The method converges, but slowly: the error is proportional to $h$. That is why practical solvers use cleverer schemes, such as the fourth-order Runge–Kutta method, which samples the slope four times per step and whose error shrinks like $h^4$, ten thousand times smaller for each tenfold cut in step size.

The example also shows compound interest. Growing 100% a year, compounded $n$ times, gives $(1 + 1/n)^n$, which approaches $e$. Jacob Bernoulli found the number this way in 1683. Euler's method and compound interest are the same calculation.

## Beyond Solving

By the late nineteenth century the question had shifted from "what is the solution?" to "what does it do?" Will a planet's orbit stay bounded? Will a population settle down or oscillate? {{fig:poincare|Henri Poincaré}} answered such questions from the geometry of the equations alone, founding the theory of [dynamical systems](/math/dynamical-systems/). One of the oldest questions of that kind, how many isolated periodic cycles a polynomial equation in the plane can have, was Hilbert's sixteenth problem in 1900, and it is still open.
