---
id: numerical-analysis
domain: math
thread: computation
name: Numerical Analysis
parent_ids:
  - calculus
era_emerged: 1669 – 1963
core_question: How can a finite machine, doing finitely many rounded operations, give answers we can trust?

summary: |-
  Most equations cannot be solved by formula. The roots of a fifth-degree polynomial, the orbit of a comet pulled by several planets, the value of an integral with no neat antiderivative: all of them have to be computed as numbers, approximately. Numerical analysis is the mathematics of doing that well. It designs methods that approach the true answer quickly, and it proves how far the computed answer can be from the true one.

  The methods are old. Newton found his method for roots in 1669, and tables of logarithms and planetary positions were computed by hand for centuries. What changed in the twentieth century was scale. Electronic computers do billions of operations, each rounded to a fixed number of digits, and nobody checks the intermediate results. James Wilkinson's analysis of rounding error in the 1960s and the IEEE 754 standard of 1985 made that kind of computing trustworthy. Failures such as the Patriot missile clock in 1991 showed what happens when the rounding is forgotten.

key_ideas:
  - term: Iteration
    definition: >-
      Instead of solving an equation in one step, start from a guess and apply a rule that
      improves it, again and again. Newton's method replaces a curve by its tangent line and
      jumps to where the tangent crosses zero.
    turning_point_id: newton-raphson-method
  - term: Order of convergence
    definition: >-
      How fast the error shrinks. Newton's method converges quadratically: near the answer,
      each new error is roughly the square of the old one, so the number of correct digits
      roughly doubles with every step.
    turning_point_id: newton-raphson-method
  - term: Interpolation
    definition: >-
      Passing a polynomial through known values of a function, to estimate values in
      between. More points do not always help: with equally spaced points the polynomial
      can swing wildly near the ends.
    turning_point_id: runge-phenomenon
  - term: Floating point
    definition: >-
      The way computers store real numbers: a fixed number of significant binary digits and
      an exponent, like scientific notation in base 2. Almost every operation must round
      its result, and the relative size of that rounding is bounded by the machine epsilon.
    turning_point_id: ieee-754-standard
  - term: Backward error
    definition: >-
      Instead of asking how wrong the computed answer is, ask how much the problem would
      have to change for the computed answer to be exactly right. If that change is tiny,
      the method is backward stable, and any remaining error is the problem's fault.
    turning_point_id: wilkinson-backward-error

turning_points:
  - id: newton-raphson-method
    date: 1669 – 1690
    type: REFORMULATION
    title: Newton's method for roots
    description: >-
      In a manuscript of 1669, Isaac Newton solves $x^3 - 2x - 5 = 0$ by repeatedly
      correcting a guess with a linear approximation. John Wallis printed the method in
      1685, and Joseph Raphson published a simpler, general version in 1690. Thomas
      Simpson gave it the modern form, using the derivative, in 1740. It became the most
      used method for solving equations, and the model for fast iteration.
    contested: true
    contested_note: >-
      The method's name is disputed. Newton's own version worked only for polynomials and
      rewrote the polynomial at each step. Raphson's version, published first in general
      form, is closer to the method used today, and Simpson's is closer still. Historians
      differ on how much credit each should get, and on how much the method owes to
      earlier work such as that of François Viète.
    sources:
      - citation: "Ypma, T. J. (1995). Historical development of the Newton–Raphson method. SIAM Review 37(4): 531–551."
        url: null
      - citation: "Goldstine, H. H. (1977). A History of Numerical Analysis from the 16th through the 19th Century. Springer."
        url: null

  - id: babbage-difference-engine
    date: 1822 – 1843
    type: REFORMULATION
    title: Calculation by machine
    description: >-
      Printed tables of logarithms and astronomical positions were full of errors made by
      human computers and typesetters. Charles Babbage designs a Difference Engine to
      compute and print tables mechanically, using the fact that the differences of a
      polynomial eventually become constant. He later designs a general Analytical Engine,
      and in 1843 Ada Lovelace publishes notes on it, including a program for Bernoulli
      numbers. Neither engine was completed in their lifetimes.
    contested: false
    sources:
      - citation: "Swade, D. (2000). The Difference Engine: Charles Babbage and the Quest to Build the First Computer. Viking."
        url: null
      - citation: "Menabrea, L. F. (1843). Sketch of the Analytical Engine invented by Charles Babbage, with notes by the translator, A. A. L. [Ada Lovelace]. Scientific Memoirs 3: 666–731."
        url: null

  - id: runge-phenomenon
    date: "1901"
    type: DISPROOF
    title: More points can make things worse
    description: >-
      It seemed obvious that a polynomial through more and more points of a smooth function
      would approximate it better and better. Carl Runge shows that for the simple function
      $1/(1 + 25x^2)$, polynomials through equally spaced points get worse, swinging ever
      more wildly near the ends of the interval. The cure is to cluster the points near the
      ends, and the choice of points became part of the method.
    contested: false
    sources:
      - citation: "Runge, C. (1901). Über empirische Funktionen und die Interpolation zwischen äquidistanten Ordinaten. Zeitschrift für Mathematik und Physik 46: 224–243."
        url: null
      - citation: "Trefethen, L. N. (2013). Approximation Theory and Approximation Practice. SIAM."
        url: null

  - id: wilkinson-backward-error
    date: 1960 – 1963
    type: REFORMULATION
    title: Backward error analysis
    description: >-
      Early analyses of rounding error added up worst cases step by step and predicted
      disaster for any long computation. James Wilkinson, working at the National Physical
      Laboratory, asks a different question: is the computed answer the exact answer to a
      slightly different problem? For many standard methods it is. His book of 1963 turned
      rounding error from a vague fear into a theory, and it is still how stability is
      judged.
    contested: false
    sources:
      - citation: "Wilkinson, J. H. (1963). Rounding Errors in Algebraic Processes. HMSO, London."
        url: null
      - citation: "Higham, N. J. (2002). Accuracy and Stability of Numerical Algorithms, 2nd edition. SIAM."
        url: null

  - id: ieee-754-standard
    date: "1985"
    type: REFORMULATION
    title: The IEEE 754 standard
    description: >-
      In the 1970s every computer maker rounded differently, and a program could give
      different answers on different machines. A committee of the IEEE, with William Kahan as its
      chief architect, agrees a standard for binary floating point: formats, correctly rounded arithmetic,
      and rules for overflow, infinity and "not a number". Adopted in 1985, it is now built
      into almost every processor, and it made numerical software portable.
    contested: false
    sources:
      - citation: "IEEE (1985). IEEE Standard for Binary Floating-Point Arithmetic. ANSI/IEEE Std 754-1985."
        url: null
      - citation: "Goldberg, D. (1991). What every computer scientist should know about floating-point arithmetic. ACM Computing Surveys 23(1): 5–48."
        url: null

  - id: patriot-ariane-failures
    date: 1991 – 1996
    type: CRISIS
    title: Rounding error kills
    description: >-
      On 25 February 1991 a Patriot battery at Dhahran fails to intercept a Scud missile,
      which kills 28 American soldiers. Its clock counted tenths of a second, and 0.1 has no
      exact binary form. After 100 hours of running, the accumulated error was a third of a
      second. In June 1996 the first Ariane 5 rocket destroys itself 37 seconds after
      launch, when a floating-point number too large for a 16-bit integer causes an
      unhandled error. Both became standard warnings in teaching.
    contested: false
    sources:
      - citation: "US General Accounting Office (1992). Patriot Missile Defense: Software Problem Led to System Failure at Dhahran, Saudi Arabia. Report GAO/IMTEC-92-26."
        url: null
      - citation: "Lions, J. L. et al. (1996). Ariane 5 Flight 501 Failure: Report by the Inquiry Board. European Space Agency."
        url: null

open_problems:
  - id: smale-mean-value-conjecture
    name: Smale's mean value conjecture
    status: open
    status_note: Open as of writing; proved with the constant 4 in place of 1, and improved only slightly since.
    description: >-
      Let $p$ be a polynomial and $z$ a point where its derivative is not zero. Stephen Smale
      conjectured in 1981 that there is always a critical point $c$, where $p'(c) = 0$, with
      $|p(z) - p(c)| \le |z - c| \cdot |p'(z)|$. In words, the slope from $z$ to some
      critical point is never much steeper than the slope at $z$ itself.
    why_hard: >-
      The statement involves all the critical points of the polynomial at once, and their
      positions can be almost arbitrary. Smale proved the inequality with a factor of 4 on
      the right. Decades of work have shaved that constant down only a little, and the
      conjectured best constant, 1 or slightly less depending on the degree, is untouched.
    unlocks: >-
      Smale was studying how many steps Newton's method needs to find a root from an
      arbitrary start. The conjecture controls how far a Newton step can safely go, and a
      proof would sharpen the known bounds on the cost of root-finding.
    sources:
      - citation: "Smale, S. (1981). The fundamental theorem of algebra and complexity theory. Bulletin of the American Mathematical Society 4(1): 1–36."
        url: null

applications:
  - area: Astronomy
    title: The return of Halley's comet
    description: >-
      In 1758 Alexis Clairaut, Joseph Lalande and Nicole-Reine Lepaute computed by hand, over
      several months, how Jupiter and Saturn would delay Halley's comet. They predicted its
      closest approach to the Sun to within about a month. It was an early triumph of
      numerical computation applied to Newton's mechanics.
    domain: physics
    field_id: classical-mechanics
    sources:
      - citation: "Grier, D. A. (2005). When Computers Were Human. Princeton University Press."
        url: null
  - area: Computing
    title: Arithmetic in every chip
    description: >-
      Every phone, laptop and graphics card does its arithmetic by the IEEE 754 rules. The
      same program gives the same rounded answer on different machines, which is what lets
      scientific software be tested, shared and trusted.
    sources:
      - citation: "Goldberg, D. (1991). What every computer scientist should know about floating-point arithmetic. ACM Computing Surveys 23(1): 5–48."
        url: null

further_reading:
  - citation: "Grier, D. A. (2005). When Computers Were Human. Princeton University Press."
    url: null
    note: A history of the people who computed tables by hand, from Halley's comet to the 1940s.
  - citation: "Higham, N. J. (2002). Accuracy and Stability of Numerical Algorithms, 2nd edition. SIAM."
    url: null
    note: The standard reference on rounding error, with historical notes throughout.
  - citation: "Trefethen, L. N. (2013). Approximation Theory and Approximation Practice. SIAM."
    url: null
    note: A short, readable modern treatment of interpolation, including Runge's example.
---

## Computing by Hand

[Calculus](/math/calculus/) gave exact rules for rates and areas, but it rarely gave numbers directly. In a manuscript of 1669 {{fig:newton|Isaac Newton}} showed how to find a root of $x^3 - 2x - 5 = 0$: guess 2, replace the curve by a straight line near the guess, see where that line crosses zero, and repeat. {{fig:joseph-raphson|Joseph Raphson}} published a simpler general version in 1690. The idea of improving a guess by linear approximation, over and over, is still the most used tool for solving equations.

For two centuries most numbers came from people. Astronomers hired teams of computers, the original meaning of the word, to produce tables of logarithms, planetary positions and tides. They worked by rule, often by adding differences, and the tables carried their mistakes. {{fig:charles-babbage|Charles Babbage}} found so many errors that in 1822 he began building a Difference Engine to calculate and print tables by machine. His later Analytical Engine was a design for a general computer, and {{fig:ada-lovelace|Ada Lovelace}} wrote in 1843 how it could be programmed. Neither machine was finished, and hand computation lasted into the 1950s.

## Approximation and Its Surprises

The methods of this period rested on replacing a hard function by a polynomial. Newton and Lagrange gave formulas for the polynomial through given points, and from it came rules for integrating and differentiating tabulated data. Intuition said that more points would give a better fit. In 1901 {{fig:carl-runge|Carl Runge}} showed that it can give a much worse one. For $1/(1 + 25x^2)$ on $[-1, 1]$, polynomials through equally spaced points oscillate more and more wildly near the ends as the number of points grows. Placing the points more densely near the ends cures it.

Runge's example set the tone for the subject. A method can be exact in principle and useless in practice. Numerical analysis is as much about when methods fail as about the methods themselves.

## The Machine Rounds

Electronic computers arrived in the 1940s and changed the problem. A computer stores each number with a fixed number of binary digits, so almost every operation rounds. A single rounding is tiny, but a large computation does millions of them unseen. Early estimates added up the worst possible error at each step and concluded that long computations would be meaningless. {{fig:james-wilkinson|James Wilkinson}} showed a better way to look at it. The computed answer is usually the exact answer to a slightly perturbed problem. If the perturbation is as small as the rounding itself, the method is as good as the data allows. His book of 1963 made this backward error analysis the standard test of a method.

Arithmetic itself was still chaotic. Each manufacturer rounded in its own way, and some machines gave different answers to the same program. {{fig:william-kahan|William Kahan}} led the design of a standard for floating point, adopted as IEEE 754 in 1985. It fixed the formats, required every basic operation to be rounded correctly, and defined what happens on overflow or division by zero.

Forgotten rounding can still kill. The Patriot missile battery at Dhahran counted time in tenths of a second in a 24-bit register. Chopped to that length, 0.1 is too small by about $9.5 \times 10^{-8}$. After 100 hours, or 3.6 million ticks, the clock was off by 0.34 seconds, in which a Scud missile travels more than half a kilometre. On 25 February 1991 the battery failed to track an incoming Scud, and 28 soldiers died.

## A Closer Look: Newton's Method for √2

The number $\sqrt{2}$ is the positive root of $f(x) = x^2 - 2$. Newton's method replaces $f$ by its tangent line at the current guess $x_n$ and takes the tangent's root as the next guess:

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} = x_n - \frac{x_n^2 - 2}{2x_n} = \frac{1}{2}\left(x_n + \frac{2}{x_n}\right).
$$

This is the old Babylonian rule: average the guess with 2 divided by the guess. Start at $x_0 = 1$:

| Step | Guess | Error |
|---|---|---|
| 0 | $1$ | $0.41$ |
| 1 | $3/2 = 1.5$ | $0.086$ |
| 2 | $17/12 = 1.41666\ldots$ | $0.0025$ |
| 3 | $577/408 = 1.4142157\ldots$ | $2.1 \times 10^{-6}$ |
| 4 | $665857/470832 = 1.41421356237469\ldots$ | $1.6 \times 10^{-12}$ |
| 5 | $1.41421356237309504880\ldots$ | $9.0 \times 10^{-25}$ |

The exponent of the error roughly doubles at each step: $10^{-3}$, $10^{-6}$, $10^{-12}$, $10^{-24}$. This is quadratic convergence. Writing $e_n = x_n - \sqrt{2}$, the formula gives exactly

$$
e_{n+1} = \frac{e_n^2}{2x_n},
$$

so each error is about the square of the one before, divided by $2\sqrt{2} \approx 2.8$. Five steps give 24 correct decimal places, more than double precision can store. A method that merely halved the error each step would need about 80 steps for the same accuracy.

The catch is the start. Quadratic convergence holds only close to the root. From a poor guess, Newton's method can wander, cycle or jump to a different root, and for polynomials of degree three and higher the regions of starting points that lead to each root have fractal boundaries. Arthur Cayley first asked about those regions in 1879, and his question is one of the roots of [complex dynamics](/math/complex-dynamics/).

## Trusting the Answer

By the 1960s numerical analysis had become a mathematical subject with its own journals and a central question: how much can a computed answer be trusted? Its answers split into branches. Solving large systems of linear equations became [numerical linear algebra](/math/numerical-linear-algebra/). Solving the equations of physics on grids became [numerical methods for partial differential equations](/math/numerical-pdes/). Computing with random samples became [Monte Carlo methods](/math/monte-carlo-methods/), and finding the lowest point of a function became [continuous optimisation](/math/continuous-optimization/). All four rest on the same two questions Newton's method raised: how fast does the method converge, and how much does rounding cost along the way?
