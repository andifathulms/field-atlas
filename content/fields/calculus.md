---
id: calculus
domain: math
thread: analysis
name: Calculus
parent_ids:
  - euclidean-geometry
era_emerged: 1665 – 1700
core_question: How can quantities that change continuously be measured, and infinitely many infinitely small pieces be added up?

summary: |-
  Calculus is the mathematics of change. The *derivative* measures how fast something changes at an instant, such as a planet's velocity or a population's growth rate. The *integral* adds up infinitely many infinitely small pieces, giving the area under a curve or the distance travelled. The fundamental theorem of calculus says that these two operations undo each other.

  Newton and Leibniz each invented it in the late seventeenth century and fought bitterly over who was first. It worked spectacularly, and physics, engineering and economics are written in it. For 150 years, though, no one could explain what its "infinitely small" quantities actually were. Fixing that created the rest of this thread.

key_ideas:
  - term: Derivative
    definition: >-
      The instantaneous rate of change of a quantity, the slope of its graph at a point:
      $\frac{dy}{dx}$. Velocity is the derivative of position.
    turning_point_id: newton-leibniz
  - term: Integral
    definition: >-
      The sum of infinitely many infinitely thin slices: $\int_a^b f(x)\,dx$, the area under
      a curve. Archimedes computed such areas two thousand years earlier by exhaustion.
    turning_point_id: archimedes-exhaustion
  - term: Fundamental theorem of calculus
    definition: >-
      Differentiation and integration are inverse operations. To find an area, find a
      function whose derivative is the curve. It turned hard geometric problems into
      routine algebra.
    turning_point_id: newton-leibniz
  - term: Infinitesimal
    definition: >-
      A quantity smaller than any positive number yet not zero, the intuitive basis of
      early calculus and the target of Berkeley's attack. It was replaced by limits in
      the nineteenth century (and revived rigorously in 1960s non-standard analysis).
    turning_point_id: berkeley-analyst
  - term: Function
    definition: >-
      A rule assigning an output to each input. Euler made it the central object of
      analysis. What counts as a function turned out to be the most contested question
      of the next century.
    turning_point_id: euler-introductio

turning_points:
  - id: archimedes-exhaustion
    date: c. 250 BCE
    type: PROOF
    title: Archimedes computes curved areas by exhaustion
    description: >-
      Archimedes finds the area of a parabolic segment (four-thirds of an inscribed
      triangle), and the volume and surface of a sphere, by squeezing curved figures
      between ever-finer polygons. His *Method*, lost until a palimpsest was deciphered
      in 1906, shows he also reasoned with infinitely thin slices, which is integral
      calculus in all but notation.
    contested: false
    sources:
      - citation: "Heath, T. L. (1897). The Works of Archimedes. Cambridge University Press."
        url: null
      - citation: "Netz, R. & Noel, W. (2007). The Archimedes Codex. Da Capo Press."
        url: null

  - id: newton-leibniz
    date: 1665 – 1684
    type: REFORMULATION
    title: Newton and Leibniz invent the calculus
    description: >-
      Isaac Newton develops his "method of fluxions" in 1665–66 while Cambridge is closed
      by plague, but publishes almost none of it. Gottfried Wilhelm Leibniz independently
      develops the calculus from 1675 and publishes first, in 1684, with the notation
      ($dx$, $\int$) that is still used today. The scattered tricks for tangents and areas
      become one systematic method.
    contested: true
    contested_note: >-
      One of the most notorious priority disputes in science. Newton's circle accused
      Leibniz of plagiarism, pointing to letters and manuscripts he had seen in the 1670s.
      In 1712 a Royal Society committee found for Newton, in a report Newton himself
      secretly wrote. Historians now agree that the two invented calculus independently:
      Newton first, Leibniz first to publish, and with the better notation. The quarrel
      isolated British mathematics from the Continent for a century.
    sources:
      - citation: "Leibniz, G. W. (1684). Nova methodus pro maximis et minimis, itemque tangentibus. Acta Eruditorum: 467–473."
        url: null
      - citation: "Hall, A. R. (1980). Philosophers at War: The Quarrel between Newton and Leibniz. Cambridge University Press."
        url: null

  - id: berkeley-analyst
    date: "1734"
    type: CRISIS
    title: Berkeley's "ghosts of departed quantities"
    description: >-
      Bishop George Berkeley's *The Analyst* points out that calculus divides by an
      infinitesimal as though it were nonzero, then discards it as though it were zero.
      Its infinitesimals, he wrote, are "the ghosts of departed quantities". The results
      were right, but the reasoning was incoherent, and no one could answer him
      satisfactorily for a century.
    contested: false
    sources:
      - citation: "Berkeley, G. (1734). The Analyst; or, a Discourse Addressed to an Infidel Mathematician. London."
        url: null

  - id: euler-introductio
    date: "1748"
    type: REFORMULATION
    title: Euler makes the function central
    description: >-
      In his *Introductio in analysin infinitorum*, Leonhard Euler reorganises calculus
      around functions rather than curves. He defines the exponential and trigonometric
      functions by infinite series and finds the connection
      $e^{ix} = \cos x + i \sin x$. Analysis becomes a subject of its own, separate from
      geometry.
    contested: false
    sources:
      - citation: "Euler, L. (1748). Introductio in analysin infinitorum. Lausanne."
        url: null

open_problems: []

applications:
  - area: Physics
    title: The laws of motion are differential equations
    description: >-
      Newton wrote his mechanics with calculus. Force equals mass times the second
      derivative of position, and every orbit, projectile and pendulum is the solution
      of a differential equation. Most of physics since has been expressed the same way.
    domain: physics
    field_id: classical-mechanics
    sources: []
  - area: Epidemiology
    title: Modelling epidemics
    description: >-
      The SIR model of Kermack and McKendrick (1927) describes an epidemic with three
      coupled differential equations for the susceptible, infected and recovered. Its
      descendants, with ideas such as the reproduction number, guide public-health
      responses to outbreaks.
    domain: biology
    sources:
      - citation: "Kermack, W. O. & McKendrick, A. G. (1927). A contribution to the mathematical theory of epidemics. Proceedings of the Royal Society A 115: 700–721."
        url: null
  - area: Economics and engineering
    title: Optimisation
    description: >-
      Setting a derivative to zero finds maxima and minima, a technique Fermat used
      before calculus was complete. It is behind marginal analysis in economics and
      optimal design in engineering.
    sources: []

further_reading:
  - citation: "Strogatz, S. (2019). Infinite Powers: How Calculus Reveals the Secrets of the Universe. Houghton Mifflin Harcourt."
    url: null
    note: A lively popular history and explanation of calculus for general readers.
  - citation: "Boyer, C. B. (1959). The History of the Calculus and Its Conceptual Development. Dover."
    url: null
    note: The classic history, from Greek exhaustion to nineteenth-century rigour.
  - citation: "Spivak, M. (2008). Calculus (4th ed.). Publish or Perish."
    url: null
    note: A rigorous, beautifully written first course for readers ready for proofs.
---

## Exhaustion

The problems of calculus are ancient. How long is a curve? What area does it enclose? {{fig:archimedes|Archimedes}} answered such questions for particular shapes around 250 BCE by *exhaustion*. He trapped a curved region between inscribed and circumscribed polygons with ever more sides, and proved that no other value could fit between them. He found that a parabolic segment has exactly four-thirds the area of a certain inscribed triangle, and that a sphere has two-thirds the volume of its enclosing cylinder.

His methods grew out of [Euclidean geometry](/math/euclidean-geometry/), and they were rigorous but laborious: each new shape needed a new argument. A lost treatise, *The Method*, recovered from a prayer book in 1906, revealed that he had found his results first by imagining figures sliced into infinitely thin strips. That is the idea calculus would make routine.

## Two Inventors, One Quarrel

Descartes' coordinates turned curves into equations, and in the seventeenth century mathematicians such as Fermat, Wallis and Barrow found tricks for tangents and areas. Two people turned the tricks into a method. {{fig:newton|Isaac Newton}}, at home during the plague years of 1665–66, developed his "fluxions" and saw that finding tangents and finding areas are inverse problems. {{fig:leibniz|Gottfried Wilhelm Leibniz}}, a diplomat and philosopher, reached the same insight in the 1670s with a notation so good ($dx$, $\frac{dy}{dx}$, $\int$) that it has never been replaced.

Leibniz published in 1684, and Newton had published almost nothing. What followed was one of the ugliest disputes in science. Newton's supporters accused Leibniz of stealing from Newton's unpublished papers, and a Royal Society inquiry, secretly drafted by Newton, agreed. Historians now credit both as independent inventors. The feud cut British mathematicians off from the far more productive Continental school for a century.

## Ghosts of Departed Quantities

Calculus worked astonishingly well. {{fig:euler|Euler}} made the *function* its central object and poured out results: infinite series for $e^x$, $\sin x$ and $\cos x$, and the identity $e^{i\pi} + 1 = 0$. Newton's mechanics, the [physics](/physics/classical-mechanics/) of the entire eighteenth century, was calculus in action.

But no one could say what it was about. In 1734 {{fig:berkeley|George Berkeley}}, Bishop of Cloyne, published *The Analyst*, addressed to "an infidel mathematician". To find a derivative, he noted, you divide by a small increment, treating it as nonzero, and then set it to zero to get a clean answer. Infinitesimals were "neither finite quantities, nor quantities infinitely small, nor yet nothing". They were "the ghosts of departed quantities". Mathematicians knew the objection was fair and had no good answer.

## A Closer Look: The Slope of a Parabola, Two Ways

Find the slope of $y = x^2$ at a point $x$. Early calculus did it like this. Move a tiny distance $h$ along the curve. The height changes by

$$
(x + h)^2 - x^2 = 2xh + h^2 ,
$$

so the average slope over that step is $\frac{2xh + h^2}{h} = 2x + h$. Now let $h$ be "infinitely small" and throw it away: the slope is $2x$.

This is exactly what Berkeley objected to. To divide by $h$ it must be nonzero, and to throw it away it must be zero. Newton spoke of "ultimate ratios" and Leibniz of infinitesimals, but neither could say what $h$ was at the moment of discarding it.

The nineteenth-century answer, the *limit*, changes the question. Do not set $h$ to anything. Instead observe that $2x + h$ can be made as close to $2x$ as you like by taking $h$ small enough, and *define* the derivative as the number the averages approach:

$$
\frac{d}{dx}x^2 = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} = \lim_{h \to 0} (2x + h) = 2x .
$$

The calculation is the same; only its justification changed.

The fundamental theorem of calculus then turns the problem around. The area under $y = x^2$ from 0 to 1 is found by asking which function has derivative $x^2$. The answer is $\frac{x^3}{3}$, so the area is $\frac{1}{3}$. Archimedes had found the same fact about the parabola, after pages of exhaustion arguments. Calculus gets it in one line, which is why it swept the world before anyone could justify it.

## The Split

The answer took a century and changed mathematics. Questions about which functions could be written as sums of waves ([Fourier analysis](/math/fourier-analysis/)) and about calculus with complex numbers ([complex analysis](/math/complex-analysis/)) pushed calculus into territory where intuition failed. The effort to put it on solid ground, with precise limits and precisely defined real numbers, became [real analysis](/math/real-analysis/). Calculus itself became the tool every other science used, and [differential geometry](/math/differential-geometry/) was one of the first fields built on it.
