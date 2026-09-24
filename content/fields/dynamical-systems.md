---
id: dynamical-systems
domain: math
thread: dynamics
name: Dynamical Systems
parent_ids:
  - differential-equations
era_emerged: 1881 – 1967
core_question: What does a system do in the long run, when its equations can't be solved?

summary: |-
  Dynamical systems theory studies how things evolve under fixed rules, without trying to solve the equations. It asks qualitative questions. Does the system settle to rest, repeat a cycle or wander forever? Is its behaviour stable, so that a small nudge makes a small difference, or can a small nudge change everything?

  Poincaré founded the subject in the 1880s by picturing all possible states of a system as a space and its evolution as a flow through that space. Studying the three-body problem, he found orbits so tangled that he would not even try to draw them. It was the first glimpse of chaos. The twentieth century added stability theory, the KAM theorem on which orbits survive perturbation, and Smale's geometric picture of how simple rules stretch and fold space.

key_ideas:
  - term: Phase space
    definition: >-
      The space of all possible states of a system, for instance position and velocity
      together. Each solution is a curve through it, and the whole system is a flow.
    turning_point_id: poincare-qualitative
  - term: Stability
    definition: >-
      A state is stable if motions starting nearby stay nearby. Lyapunov gave methods to
      prove stability without solving the equations, using an energy-like quantity that
      can only decrease.
    turning_point_id: lyapunov-stability
  - term: Limit cycle and attractor
    definition: >-
      Sets that nearby motions approach over time: a resting point, a repeating cycle, or
      something more complicated. They describe what a system actually does in the long
      run.
    turning_point_id: poincare-qualitative
  - term: Integrable and chaotic
    definition: >-
      Integrable systems, like two bodies under gravity, move regularly on nested tori.
      Most systems are not integrable, and KAM theory describes which regular motions
      survive and where chaos creeps in.
    turning_point_id: kam-theorem
  - term: Horseshoe
    definition: >-
      Smale's model of chaos: stretch a region, fold it, lay it back over itself, and
      repeat. Points that stay forever behave as unpredictably as coin tosses.
    turning_point_id: smale-horseshoe

turning_points:
  - id: poincare-qualitative
    date: 1881 – 1886
    type: REFORMULATION
    title: Poincaré's qualitative theory
    description: >-
      In a series of memoirs, Henri Poincaré studies differential equations through the
      shape of their solution curves: where they rest, where they spiral, where they
      close up into cycles. He does not look for formulas. Questions about long-term
      behaviour became geometry, and dynamical systems became a subject.
    contested: false
    sources:
      - citation: "Poincaré, H. (1881). Mémoire sur les courbes définies par une équation différentielle. Journal de Mathématiques Pures et Appliquées (3) 7: 375–422."
        url: null

  - id: poincare-prize-crisis
    date: 1889 – 1890
    type: CRISIS
    title: The prize memoir's error
    description: >-
      Poincaré wins King Oscar II's prize for work on the stability of the solar system.
      While the memoir is being printed, he finds a serious error. Correcting it, he
      discovers orbits that wind around each other in a hopelessly tangled way, the first
      appearance of what is now called chaos. The printed copies were recalled and
      destroyed, at a cost to Poincaré greater than the prize money.
    contested: false
    sources:
      - citation: "Poincaré, H. (1890). Sur le problème des trois corps et les équations de la dynamique. Acta Mathematica 13: 1–270."
        url: null
      - citation: "Barrow-Green, J. (1997). Poincaré and the Three Body Problem. American Mathematical Society."
        url: null

  - id: lyapunov-stability
    date: "1892"
    type: PROOF
    title: Lyapunov's theory of stability
    description: >-
      Aleksandr Lyapunov's doctoral thesis, written in Kharkov, gives general methods for proving
      that a motion is stable. The most famous finds a function, like energy, that never
      increases along solutions. Stability could now be proved without solving anything,
      and his methods are the basis of modern control engineering.
    contested: false
    sources:
      - citation: "Lyapunov, A. M. (1992). The general problem of the stability of motion. International Journal of Control 55(3): 531–773. (Translation of the 1892 Russian original.)"
        url: null

  - id: birkhoff-last-geometric
    date: "1913"
    type: PROOF
    title: Poincaré's last geometric theorem
    description: >-
      Shortly before his death in 1912, Poincaré publishes a theorem he cannot prove: a
      twist map of an annulus that preserves area must have at least two fixed points.
      A few months later George David Birkhoff, at Harvard, proves it. Birkhoff went on to
      build the general theory of dynamical systems, set out in his 1927 book of that
      name.
    contested: false
    sources:
      - citation: "Birkhoff, G. D. (1913). Proof of Poincaré's geometric theorem. Transactions of the American Mathematical Society 14: 14–22."
        url: null
      - citation: "Birkhoff, G. D. (1927). Dynamical Systems. American Mathematical Society Colloquium Publications 9."
        url: null

  - id: kam-theorem
    date: 1954 – 1963
    type: PROOF
    title: The KAM theorem
    description: >-
      Andrey Kolmogorov announces in 1954, and Jürgen Moser and Vladimir Arnold prove in
      the early 1960s, that when a regular system like the planets orbiting the Sun is
      slightly disturbed, most of its regular motions survive, slightly deformed.
      Stability and chaos coexist, finely interwoven. It was the first real answer to the
      question Poincaré's prize had posed.
    contested: false
    sources:
      - citation: "Kolmogorov, A. N. (1954). On conservation of conditionally periodic motions for a small change in Hamilton's function. Doklady Akademii Nauk SSSR 98: 527–530."
        url: null
      - citation: "Arnold, V. I. (1963). Small denominators and problems of stability of motion in classical and celestial mechanics. Russian Mathematical Surveys 18(6): 85–191."
        url: null

  - id: smale-horseshoe
    date: 1960 – 1967
    type: REFORMULATION
    title: Smale's horseshoe
    description: >-
      Stephen Smale, working on a beach in Rio de Janeiro, finds the horseshoe map, a
      simple geometric mechanism that forces chaotic behaviour and is robust under
      perturbation. His 1967 survey "Differentiable dynamical systems" set the programme
      for a generation, making the geometry of stretching and folding the core of the
      subject.
    contested: false
    sources:
      - citation: "Smale, S. (1967). Differentiable dynamical systems. Bulletin of the American Mathematical Society 73(6): 747–817."
        url: null
      - citation: "Smale, S. (1998). Finding a horseshoe on the beaches of Rio. Mathematical Intelligencer 20(1): 39–44."
        url: null

open_problems:
  - id: arnold-diffusion
    name: Arnold diffusion
    status: open
    status_note: Open in general as of 2026; proved in some special settings.
    description: >-
      In 1964 Arnold constructed an example showing that, in systems with three or more
      degrees of freedom, orbits can drift slowly but arbitrarily far through the gaps
      between the regular motions that KAM theory preserves. He conjectured that this
      drift happens in typical such systems, not just special examples.
    why_hard: >-
      The drift is extraordinarily slow and happens along thin, intricate routes through
      phase space. Proving it exists for typical systems needs control of chaotic motion
      on exponentially long time scales. Long, technical proofs have been announced for
      some cases, but the general conjecture is not settled.
    unlocks: >-
      It bears directly on the long-term stability of the solar system and of particles
      in accelerators and fusion devices, where slow drift would eventually carry orbits
      away.
    sources:
      - citation: "Arnold, V. I. (1964). Instability of dynamical systems with several degrees of freedom. Soviet Mathematics Doklady 5: 581–585."
        url: null

applications:
  - area: Spaceflight
    title: Low-energy routes through the solar system
    description: >-
      In 1991 the Japanese probe Hiten reached lunar orbit with far less fuel than
      planned, following a route found by Edward Belbruno along the chaotic boundaries of
      the Earth–Moon–Sun system. Missions now use such dynamical-systems routes routinely.
    domain: physics
    field_id: classical-mechanics
    sources:
      - citation: "Belbruno, E. A. & Miller, J. K. (1993). Sun-perturbed Earth-to-Moon transfers with ballistic capture. Journal of Guidance, Control, and Dynamics 16(4): 770–775."
        url: null
  - area: Biological rhythms
    title: Body clocks as limit cycles
    description: >-
      Circadian rhythms, heartbeats and nerve impulses behave like limit cycles:
      oscillations that return to the same rhythm after a disturbance. Arthur Winfree's
      geometric theory of such oscillators explained how they synchronise and why a
      well-timed shock can stop them.
    domain: biology
    sources:
      - citation: "Winfree, A. T. (1967). Biological rhythms and the behavior of populations of coupled oscillators. Journal of Theoretical Biology 16(1): 15–42."
        url: null
  - area: Engineering
    title: Control and stability
    description: >-
      Aircraft autopilots, power grids and industrial controllers are designed to be
      stable in Lyapunov's sense, and his functions are the standard tool for proving
      that they are.
    sources:
      - citation: "Khalil, H. K. (2002). Nonlinear Systems (3rd ed.). Prentice Hall."
        url: null

further_reading:
  - citation: "Barrow-Green, J. (1997). Poincaré and the Three Body Problem. American Mathematical Society."
    url: null
    note: The story of the prize, the error and the discovery of chaos.
  - citation: "Diacu, F. & Holmes, P. (1996). Celestial Encounters: The Origins of Chaos and Stability. Princeton University Press."
    url: null
    note: A readable history from Newton's celestial mechanics to KAM theory.
  - citation: "Strogatz, S. H. (2015). Nonlinear Dynamics and Chaos (2nd ed.). Westview Press."
    url: null
    note: The standard introductory textbook, full of applications.
---

## Pictures Instead of Formulas

Most [differential equations](/math/differential-equations/) have no formula for their solutions. In a series of memoirs from 1881, {{fig:poincare|Henri Poincaré}} proposed studying them anyway, by drawing. Represent every possible state of the system as a point in a space, and the equation becomes a flow through that space, sweeping each point along its future. The questions then become geometric. Where are the resting points? Which solutions close up into loops? Where does a solution end up?

## The Prize and the Error

In 1885 King Oscar II of Sweden offered a prize for progress on the stability of the solar system: will the planets continue in their orbits forever, or could one be flung out? Poincaré won in 1889 with a memoir on the three-body problem. While it was being printed in *Acta Mathematica*, {{fig:edvard-phragmen|Edvard Phragmén}}, who was editing it, asked about an unclear passage. Poincaré found that it hid a serious mistake.

Correcting it, he found the opposite of what he had claimed. Near certain unstable orbits, the paths of nearby motions cross each other infinitely often in a mesh so complicated, he later wrote, that he would not even attempt to draw it. {{fig:gosta-mittag-leffler|Gösta Mittag-Leffler}} recalled the printed copies, and Poincaré paid for the reprinting, which cost more than the prize. The corrected memoir of 1890 contained the first description of chaos, though the word would not be used for more than eighty years.

## Stability

Meanwhile others built tools. {{fig:aleksandr-lyapunov|Aleksandr Lyapunov}} showed in 1892 how to prove stability with an energy-like function that never increases. {{fig:george-birkhoff|George David Birkhoff}} proved Poincaré's last, unfinished theorem in 1913 and wrote the first general book on dynamical systems. The central question, whether regular motions survive small disturbances, was answered between 1954 and 1963 by {{fig:kolmogorov|Andrey Kolmogorov}}, {{fig:vladimir-arnold|Vladimir Arnold}} and {{fig:jurgen-moser|Jürgen Moser}}. Most of them do survive, so the solar system is largely regular, but chaotic regions are threaded densely between them.

## A Closer Look: The Pendulum Without Solving It

A pendulum's angle $\theta$ obeys $\theta'' = -\frac{g}{L} \sin\theta$. Because of the $\sin\theta$, there is no solution in elementary functions. But its phase space, with the angle along one axis and the angular velocity $v = \theta'$ along the other, shows everything.

Energy is conserved. Taking $g/L = 1$ for simplicity,

$$
E = \tfrac12 v^2 - \cos\theta
$$

stays constant along every motion, so each motion traces a curve of constant $E$ in the phase plane.

- $E = -1$: the pendulum hangs at rest at the bottom, a single point.
- $-1 < E < 1$: the curves are closed loops around that point. The pendulum swings back and forth forever.
- $E > 1$: the curves run right across the plane without closing. The pendulum has enough energy to go over the top and keeps rotating in one direction.
- $E = 1$: the dividing curve, the *separatrix*, heads towards the upside-down position and takes infinitely long to get there.

That is a complete description of every possible motion, obtained without solving anything. It also shows stability: the bottom position is stable, since nearby curves stay nearby, while the top position is unstable. Near the separatrix, the time for one swing grows without limit. That is why a large swing takes longer than the small-swing period $2\pi\sqrt{L/g}$, about 2.0 seconds for a pendulum one metre long.

Poincaré's method was to draw such pictures for systems where they are far more complex. Add a small periodic push to the pendulum, and the separatrix breaks into exactly the tangle that Poincaré found in the three-body problem. Near it, the pendulum's motion becomes chaotic.

## Stretching and Folding

In 1960, working on a beach in Rio de Janeiro, {{fig:smale|Stephen Smale}} found the geometric mechanism behind Poincaré's tangle: the horseshoe. A map that stretches a square, folds it and lays it back across itself contains orbits that behave like sequences of coin tosses, and the behaviour survives any small change to the map. His 1967 programme made stretching and folding the core of the subject. Computer experiments were about to show the same behaviour in weather models and simple population equations, and [chaos theory](/math/chaos-theory/) and [ergodic theory](/math/ergodic-theory/) grew from both sides.
