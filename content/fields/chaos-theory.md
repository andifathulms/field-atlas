---
id: chaos-theory
domain: math
thread: dynamics
name: Chaos Theory
parent_ids:
  - dynamical-systems
era_emerged: 1961 – 1978
core_question: How can a system that follows exact rules be impossible to predict, and what order is hidden in its disorder?

summary: |-
  Chaos theory studies deterministic systems, with no randomness in their rules, whose behaviour is nonetheless unpredictable in practice. The reason is sensitive dependence on initial conditions: tiny differences in the starting state grow exponentially, so any error in measuring the present eventually swamps any forecast of the future.

  Poincaré had glimpsed it in 1890, but chaos became a science only when computers made it visible. Edward Lorenz found it in a weather model in 1961, and in the 1970s it turned up in the simplest population equations. Chaos also turned out to have laws of its own. Its routes into disorder follow universal patterns, with the same numbers appearing in dripping taps, heated fluids and electronic circuits.

key_ideas:
  - term: Sensitive dependence
    definition: >-
      Nearby starting points separate exponentially fast. Popularly the "butterfly
      effect", after the title of a 1972 talk by Lorenz.
    turning_point_id: lorenz-weather
  - term: Strange attractor
    definition: >-
      A set that a chaotic system's motion approaches and never leaves, with a fractal
      structure: infinitely detailed, neither a point nor a cycle.
    turning_point_id: tucker-lorenz-attractor
  - term: Logistic map
    definition: >-
      The rule $x \mapsto r x (1 - x)$, a crude model of a population with limited
      resources. As $r$ increases, its behaviour passes from a steady state through
      cycles to chaos.
    turning_point_id: may-logistic-map
  - term: Period doubling and universality
    definition: >-
      On the way to chaos, cycles double in length again and again, at parameter values
      whose spacing shrinks by the same factor, $4.669\ldots$, in every such system.
    turning_point_id: feigenbaum-universality
  - term: Lyapunov exponent
    definition: >-
      The average exponential rate at which nearby motions separate. A positive exponent
      is the usual working definition of chaos, and its reciprocal sets the horizon of
      prediction.
    turning_point_id: lorenz-weather

turning_points:
  - id: cartwright-littlewood
    date: "1945"
    type: PROOF
    title: Wild solutions in a radio equation
    description: >-
      Asked by the British government to study the erratic behaviour of radio amplifiers
      used in radar, Mary Cartwright and J. E. Littlewood analyse the forced van der Pol
      equation. They prove it has solutions of bewildering complexity. The result was
      little noticed outside pure mathematics until Smale recognised his horseshoe in it.
    contested: false
    sources:
      - citation: "Cartwright, M. L. & Littlewood, J. E. (1945). On non-linear differential equations of the second order I. Journal of the London Mathematical Society 20: 180–189."
        url: null

  - id: lorenz-weather
    date: 1961 – 1963
    type: REFORMULATION
    title: Lorenz's weather model
    description: >-
      Rerunning a simple weather simulation at MIT, Edward Lorenz types in a starting
      value rounded from 0.506127 to 0.506. Within a couple of months of simulated
      weather, the new run bears no resemblance to the old. His 1963 paper shows that a
      three-variable model of convection behaves this way forever, and concludes that
      long-range weather forecasting is impossible.
    contested: false
    sources:
      - citation: "Lorenz, E. N. (1963). Deterministic nonperiodic flow. Journal of the Atmospheric Sciences 20(2): 130–141."
        url: null
      - citation: "Lorenz, E. N. (1993). The Essence of Chaos. University of Washington Press."
        url: null

  - id: period-three-chaos
    date: 1964 – 1975
    type: PROOF
    title: Period three implies chaos
    description: >-
      Tien-Yien Li and James Yorke prove that if a simple one-dimensional rule has a cycle
      of length three, it has cycles of every length and uncountably many orbits that
      never settle down. Their title, "Period three implies chaos", gave the subject its
      name.
    contested: true
    contested_note: >-
      Oleksandr Sharkovsky had proved a stronger result in 1964, a complete ordering of
      which cycle lengths force which others, in a Ukrainian journal little read in the
      West. Li and Yorke were unaware of it. Sharkovsky's theorem is now recognised as
      the fuller statement, while Li and Yorke's paper added the chaotic orbits and the
      name.
    sources:
      - citation: "Li, T.-Y. & Yorke, J. A. (1975). Period three implies chaos. American Mathematical Monthly 82(10): 985–992."
        url: null
      - citation: "Sharkovsky, A. N. (1964). Coexistence of cycles of a continuous map of the line into itself. Ukrainian Mathematical Journal 16: 61–71."
        url: null

  - id: feigenbaum-universality
    date: 1975 – 1982
    type: CONJECTURE
    title: Feigenbaum's universal constant
    description: >-
      Computing period doublings on a programmable calculator at Los Alamos, Mitchell
      Feigenbaum finds that the parameter values where they occur converge geometrically
      with ratio $4.6692\ldots$, and that the same number appears for completely different
      equations. Experiments on convecting helium confirmed it in 1980. Oscar Lanford
      proved it in 1982, with essential help from a computer.
    contested: false
    sources:
      - citation: "Feigenbaum, M. J. (1978). Quantitative universality for a class of nonlinear transformations. Journal of Statistical Physics 19(1): 25–52."
        url: null
      - citation: "Lanford, O. E. (1982). A computer-assisted proof of the Feigenbaum conjectures. Bulletin of the American Mathematical Society 6(3): 427–434."
        url: null

  - id: may-logistic-map
    date: "1976"
    type: REFORMULATION
    title: May's simple models with complicated dynamics
    description: >-
      Robert May, a physicist turned ecologist, shows in *Nature* that the logistic map,
      a textbook model of population growth, passes through period doubling into chaos.
      He urges that every student be shown it, because simple rules need not have simple
      consequences. Ecologists began to ask whether wild fluctuations in real populations
      might be chaotic rather than random.
    contested: false
    sources:
      - citation: "May, R. M. (1976). Simple mathematical models with very complicated dynamics. Nature 261: 459–467."
        url: null

  - id: tucker-lorenz-attractor
    date: "2002"
    type: PROOF
    title: The Lorenz attractor exists
    description: >-
      Lorenz's pictures looked like a strange attractor, but computer images cannot rule
      out that errors create what they show. Smale listed a proof as the fourteenth of
      his problems for the twenty-first century. Warwick Tucker settles it with a
      computation that carefully bounds every rounding error, combined with mathematical
      analysis near the origin.
    contested: false
    sources:
      - citation: "Tucker, W. (2002). A rigorous ODE solver and Smale's 14th problem. Foundations of Computational Mathematics 2(1): 53–117."
        url: null

open_problems:
  - id: standard-map-entropy
    name: How much of the standard map is chaotic?
    status: open
    status_note: Open as of 2026, for every value of the parameter.
    description: >-
      The standard map is a simple model of a periodically kicked rotor, and of many
      systems in physics. Computer pictures show a "chaotic sea" filling most of its
      phase space, with islands of regular motion. Yet no one has proved, for any
      parameter value, that the chaotic orbits fill a region of positive area.
    why_hard: >-
      Chaotic and regular orbits are intricately interwoven: small islands of regular
      motion are known to appear densely as the parameter varies. Proving that chaos
      occupies positive area means controlling all of them at once, which no known method
      can do.
    unlocks: >-
      A rigorous foundation for the chaotic transport that physicists compute routinely,
      in particle accelerators, plasma confinement and celestial mechanics, and an answer
      to one of the basic questions about what "typical" chaos is.
    sources:
      - citation: "Duarte, P. (1994). Plenty of elliptic islands for the standard family of area preserving maps. Annales de l'Institut Henri Poincaré C 11(4): 359–409."
        url: null

applications:
  - area: Weather forecasting
    title: Ensemble forecasts
    description: >-
      Since 1992, the major weather centres have run each forecast many times from
      slightly different starting states. The spread of the results, a direct response
      to Lorenz, measures how far ahead the weather can be predicted on a given day.
    domain: physics
    sources:
      - citation: "Molteni, F., Buizza, R., Palmer, T. N. & Petroliagis, T. (1996). The ECMWF ensemble prediction system: methodology and validation. Quarterly Journal of the Royal Meteorological Society 122(529): 73–119."
        url: null
  - area: Ecology
    title: Booms and crashes without outside causes
    description: >-
      May's work showed that populations can fluctuate erratically with no outside
      disturbance at all, simply because of how they respond to their own density.
      Laboratory beetle populations were later shown to follow the chaotic
      dynamics their equations predict.
    domain: biology
    field_id: population-ecology
    sources:
      - citation: "Costantino, R. F., Desharnais, R. A., Cushing, J. M. & Dennis, B. (1997). Chaotic dynamics in an insect population. Science 275(5298): 389–391."
        url: null
  - area: Engineering
    title: Mixing by chaos
    description: >-
      A fluid stirred in a regular, periodic way can mix efficiently because the particle
      paths are chaotic. Chaotic advection is used to mix fluids in microchannels, where
      turbulence is impossible.
    sources:
      - citation: "Aref, H. (1984). Stirring by chaotic advection. Journal of Fluid Mechanics 143: 1–21."
        url: null

further_reading:
  - citation: "Gleick, J. (1987). Chaos: Making a New Science. Viking."
    url: null
    note: The popular history that brought chaos to general readers.
  - citation: "Lorenz, E. N. (1993). The Essence of Chaos. University of Washington Press."
    url: null
    note: Lorenz's own non-technical account.
  - citation: "Strogatz, S. H. (2015). Nonlinear Dynamics and Chaos (2nd ed.). Westview Press."
    url: null
    note: The standard introductory textbook.
---

## Before the Name

Poincaré had found chaos in the three-body problem in 1890, and [dynamical systems](/math/dynamical-systems/) theory kept rediscovering it without calling it that. During the Second World War, the British government asked {{fig:mary-cartwright|Mary Cartwright}} and {{fig:john-littlewood|J. E. Littlewood}} why radio amplifiers in radar sets behaved erratically. They proved in 1945 that a simple equation for a driven oscillator has solutions of bewildering complexity. The result stayed inside pure mathematics. What was missing was a way to see it.

## The Butterfly

In 1961 {{fig:edward-lorenz|Edward Lorenz}}, a meteorologist at MIT, was running a small weather model on a Royal McBee computer. To repeat a run, he typed in a number from a printout, 0.506, instead of the 0.506127 stored in the machine. He went for coffee. When he came back, the new forecast had diverged completely from the old one. The rounding error, one part in several thousand, had grown until it dominated.

Lorenz realised this was not a fault of the computer but a property of the equations. His 1963 paper, a three-variable model of convection, showed motion that never repeats and never settles, winding forever around a butterfly-shaped set. If the atmosphere behaves like that, he concluded, detailed weather forecasts for weeks ahead are impossible. His 1972 talk, "Does the flap of a butterfly's wings in Brazil set off a tornado in Texas?", gave the idea its popular name.

## Simple Rules

In the 1970s chaos turned up in equations far simpler than the weather. {{fig:robert-may|Robert May}} showed in 1976 that the logistic map, a one-line population model, becomes chaotic as its growth rate rises. {{fig:tien-yien-li|Tien-Yien Li}} and {{fig:james-yorke|James Yorke}} proved that "period three implies chaos", naming the field, unaware that {{fig:oleksandr-sharkovsky|Oleksandr Sharkovsky}} had proved a sharper theorem in Kyiv eleven years earlier.

Then came a surprise in the other direction: order in chaos. At Los Alamos in 1975, {{fig:mitchell-feigenbaum|Mitchell Feigenbaum}} studied how the logistic map's cycles double in length, 1, 2, 4, 8, and so on, on the way to chaos. The growth rates at which the doublings occur crowd together at a steady ratio of $4.6692\ldots$. He tried a different equation and found the same number. It is universal, a property of the route to chaos rather than of any particular system. Experiments on convecting liquid helium measured it in 1980, and {{fig:oscar-lanford|Oscar Lanford}} proved it in 1982 with a computer-assisted proof.

## A Closer Look: Two Populations That Start Almost Equal

Take the logistic map with growth rate 4, $x \mapsto 4x(1 - x)$, where $x$ is a population as a fraction of its maximum. Start two copies at $x = 0.3$ and $x = 0.3000001$, which differ by one part in three million, far below any real measurement error.

| Step | First copy | Second copy | Difference |
|---|---|---|---|
| 0 | 0.300000 | 0.300000 | 0.0000001 |
| 5 | 0.087945 | 0.087943 | 0.000002 |
| 10 | 0.043422 | 0.043376 | 0.000046 |
| 15 | 0.176954 | 0.174233 | 0.0027 |
| 20 | 0.941785 | 0.877158 | 0.065 |
| 25 | 0.996854 | 0.800216 | 0.197 |

For about fifteen steps the copies agree to two decimal places. By step 25 they are unrelated. On average the difference doubles at every step. For this map the Lyapunov exponent is exactly $\ln 2$. An initial error of $10^{-7}$ therefore reaches size 1 after about $\log_2 10^7 \approx 23$ steps.

That sets the horizon of prediction, and improving the measurement buys surprisingly little. Measuring the starting value a million times more precisely, to $10^{-13}$, extends the forecast only by $\log_2 10^6 \approx 20$ steps, less than double. Weather behaves similarly: better observations and faster computers have pushed useful forecasts out by about a day per decade, but not to months.

The rule has no randomness at all. Any calculator will reproduce the table exactly. The unpredictability comes entirely from the amplification of small differences, which is the definition of chaos.

## Strange Attractors, Proved

Chaos was first a science of computer experiments, and computers make rounding errors, the very thing chaos amplifies. Proofs lagged behind the pictures. Whether Lorenz's butterfly really exists as a strange attractor was the fourteenth of Smale's problems for the twenty-first century. In 2002 {{fig:warwick-tucker|Warwick Tucker}} proved that it does, using a computer that tracked and bounded every rounding error. Many other pictures, including the chaotic sea of the standard map, are still unproved. The statistical laws that chaotic motion obeys belong to [ergodic theory](/math/ergodic-theory/), and chaos in the complex plane produced the fractals of [complex dynamics](/math/complex-dynamics/).
