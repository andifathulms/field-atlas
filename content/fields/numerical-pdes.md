---
id: numerical-pdes
domain: math
thread: computation
name: Numerical Methods for PDEs
parent_ids:
  - numerical-analysis
  - differential-equations
era_emerged: 1922 – 1977
core_question: How do you turn the continuous equations of physics into a finite computation whose answer converges to the truth?

summary: |-
  The laws of fluids, heat, elasticity, electromagnetism and gravity are partial differential equations: they relate how a quantity changes in space to how it changes in time. Almost none can be solved by formula for a realistic shape or a realistic weather map. Numerical methods replace the continuous equation by a finite one, on a grid of points or a mesh of small pieces, and solve that instead.

  The first serious attempt, Lewis Fry Richardson's hand-computed weather forecast of 1922, failed badly. Six years later Courant, Friedrichs and Lewy found one reason such computations fail: the time step must be small enough for the grid to keep up with the physics. The ENIAC weather forecast of 1950 and the finite element method, which grew from engineering in the 1950s and 1960s, made the approach practical. Today it designs aircraft, forecasts the weather and predicted the gravitational waves that LIGO detected in 2015.

key_ideas:
  - term: Discretisation
    definition: >-
      Replace a function by its values at finitely many points, and derivatives by
      differences between neighbouring values. The differential equation becomes a large
      system of ordinary equations.
    turning_point_id: richardson-forecast
  - term: The CFL condition
    definition: >-
      For an explicit time-stepping method, the time step must be short enough that
      information does not travel more than about one grid cell per step. Otherwise the
      computation becomes unstable and explodes.
    turning_point_id: cfl-condition
  - term: Stability and convergence
    definition: >-
      A method whose small errors stay small is stable. Lax's equivalence theorem says that,
      for a consistent method on a linear problem, stability is exactly what is needed for
      the computed answer to converge to the true one as the grid is refined.
    turning_point_id: cfl-condition
  - term: Finite elements
    definition: >-
      Divide the region into small simple pieces, such as triangles, and approximate the
      solution on each by a simple polynomial, matched at the corners. The method fits
      complicated shapes, which grids of squares do not.
    turning_point_id: finite-element-method
  - term: Multigrid
    definition: >-
      Solve on a hierarchy of grids, coarse and fine. Errors that are smooth on a fine grid
      are rough on a coarse one, where they can be removed cheaply. The total work grows
      only in proportion to the number of unknowns.
    turning_point_id: multigrid-method

turning_points:
  - id: richardson-forecast
    date: "1922"
    type: CRISIS
    title: Richardson's forecast by hand
    description: >-
      Lewis Fry Richardson, working between shifts as an ambulance driver in the First World
      War, computes a six-hour forecast for two points over central Europe from the
      equations of fluid motion. The calculation takes him about six weeks. It predicts a
      rise in surface pressure of 145 hectopascals in six hours, when the observed
      pressure barely changed.
      He publishes the method anyway, together with a dream of a "forecast factory" of
      64,000 human computers.
    contested: false
    sources:
      - citation: "Richardson, L. F. (1922). Weather Prediction by Numerical Process. Cambridge University Press."
        url: null
      - citation: "Lynch, P. (2006). The Emergence of Numerical Weather Prediction: Richardson's Dream. Cambridge University Press."
        url: null

  - id: cfl-condition
    date: "1928"
    type: PROOF
    title: The Courant–Friedrichs–Lewy condition
    description: >-
      Richard Courant, Kurt Friedrichs and Hans Lewy, in Göttingen, use difference
      equations on grids to prove existence theorems for partial differential equations.
      Along the way they find that for wave-like equations the grid solution converges only
      if the time step is small enough relative to the spacing. The condition was a side
      result of pure mathematics. After 1945 it became the first rule of scientific
      computing.
    contested: false
    sources:
      - citation: "Courant, R., Friedrichs, K. & Lewy, H. (1928). Über die partiellen Differenzengleichungen der mathematischen Physik. Mathematische Annalen 100: 32–74."
        url: null

  - id: eniac-forecast
    date: "1950"
    type: REFORMULATION
    title: The first computer forecast
    description: >-
      Jule Charney, Ragnar Fjørtoft and John von Neumann run a simplified model of the
      atmosphere on the ENIAC in Aberdeen, Maryland. Charney had filtered out the fast
      gravity waves that had ruined Richardson's attempt. Four 24-hour forecasts are
      produced, each taking about a day of machine time, and some are realistic. Routine
      computer forecasting began in Sweden and the United States within five years.
    contested: false
    sources:
      - citation: "Charney, J. G., Fjørtoft, R. & von Neumann, J. (1950). Numerical integration of the barotropic vorticity equation. Tellus 2(4): 237–254."
        url: null

  - id: finite-element-method
    date: 1943 – 1960
    type: REFORMULATION
    title: The finite element method
    description: >-
      Richard Courant in 1943 approximates a twisting problem by simple functions on
      triangles. In the 1950s aircraft engineers, among them John Argyris in London and a
      Boeing team including Ray Clough, independently break wings into small elements to
      compute stresses. Clough names the method in 1960. Mathematicians later showed it is a
      systematic way of solving variational problems, with error bounds, and it became the
      standard tool for engineering analysis.
    contested: true
    contested_note: >-
      Who invented the finite element method depends on what counts. Courant's 1943 paper
      contains the mathematical idea but was not followed up. The engineers of the 1950s
      developed the practical method without knowing of it. Argyris, Clough, Turner and
      Zienkiewicz have all been called its founder, and the balance of credit between the
      mathematical and engineering lines is still discussed.
    sources:
      - citation: "Courant, R. (1943). Variational methods for the solution of problems of equilibrium and vibrations. Bulletin of the American Mathematical Society 49(1): 1–23."
        url: null
      - citation: "Turner, M. J., Clough, R. W., Martin, H. C. & Topp, L. J. (1956). Stiffness and deflection analysis of complex structures. Journal of the Aeronautical Sciences 23(9): 805–823."
        url: null

  - id: multigrid-method
    date: 1964 – 1977
    type: REFORMULATION
    title: Multigrid
    description: >-
      Standard iterative methods remove rough errors quickly but smooth errors very slowly.
      Radii Fedorenko in Moscow shows in 1964 that switching to a coarser grid, where
      smooth errors look rough, fixes this. Achi Brandt develops the idea into a general,
      practical method in 1977. Multigrid solves the equations of a grid with $N$ points in
      a number of operations proportional to $N$, the best possible.
    contested: false
    sources:
      - citation: "Fedorenko, R. P. (1964). The speed of convergence of one iterative process. USSR Computational Mathematics and Mathematical Physics 4(3): 227–235."
        url: null
      - citation: "Brandt, A. (1977). Multi-level adaptive solutions to boundary-value problems. Mathematics of Computation 31(138): 333–390."
        url: null

  - id: binary-black-hole-simulation
    date: 2005 – 2006
    type: REFORMULATION
    title: Two black holes merge on a computer
    description: >-
      For forty years, computer simulations of two orbiting black holes crashed before the
      holes could merge. The equations of general relativity have many formulations, and
      most let small errors grow. In 2005 Frans Pretorius, using a reformulation based on
      harmonic coordinates, simulates a full orbit, merger and ringdown. Within months two
      other groups succeeded with a different method, "moving punctures".
    contested: false
    sources:
      - citation: "Pretorius, F. (2005). Evolution of binary black-hole spacetimes. Physical Review Letters 95(12): 121101."
        url: null
      - citation: "Campanelli, M., Lousto, C. O., Marronetti, P. & Zlochower, Y. (2006). Accurate evolutions of orbiting black-hole binaries without excision. Physical Review Letters 96(11): 111101."
        url: null

open_problems:
  - id: multid-conservation-law-convergence
    name: Convergence for shock waves in several dimensions
    status: open
    status_note: Open as of writing; settled in one space dimension, largely open in two and three.
    description: >-
      The equations of gas dynamics form shock waves, and their solutions must be
      understood in a weak sense. In one space dimension, standard numerical schemes are
      known to converge to the right solution. In two or three dimensions nobody knows
      whether they do, or even whether the equations have a unique physically admissible
      solution for general data.
    why_hard: >-
      The one-dimensional theory relies on tools that do not extend to higher dimensions.
      Worse, examples have been found of initial data for the compressible Euler
      equations with infinitely many admissible weak solutions. If the equations do not
      pick out one answer, it is unclear what a numerical scheme should converge to.
    unlocks: >-
      A theory would say when simulations of explosions, supersonic flight and supernovae,
      run every day, are converging to a true solution and when they are only producing
      plausible pictures.
    sources:
      - citation: "Dafermos, C. M. (2016). Hyperbolic Conservation Laws in Continuum Physics, 4th edition. Springer."
        url: null
      - citation: "Chiodaroli, E., De Lellis, C. & Kreml, O. (2015). Global ill-posedness of the isentropic system of gas dynamics. Communications on Pure and Applied Mathematics 68(7): 1157–1190."
        url: null

applications:
  - area: Weather and climate
    title: Numerical weather prediction
    description: >-
      Every modern forecast solves the equations of fluid motion on a grid covering the
      globe, with spacing of about ten kilometres. Forecast skill has improved by about a
      day per decade: a forecast for six days ahead is now as good as a forecast for five
      days ahead was ten years earlier.
    domain: physics
    field_id: classical-mechanics
    sources:
      - citation: "Bauer, P., Thorpe, A. & Brunet, G. (2015). The quiet revolution of numerical weather prediction. Nature 525: 47–55."
        url: null
  - area: Gravitational waves
    title: Templates for LIGO
    description: >-
      The signal LIGO detected in September 2015 was identified by comparing it with
      waveforms of merging black holes computed by numerical relativity. The match gave
      the masses of the two holes, about 36 and 29 times the Sun's.
    domain: physics
    field_id: general-relativity
    sources:
      - citation: "Abbott, B. P. et al. (2016). Observation of gravitational waves from a binary black hole merger. Physical Review Letters 116(6): 061102."
        url: null
  - area: Engineering
    title: Designing on the computer
    description: >-
      Aircraft, bridges, engines and car bodies are tested by finite element simulation
      long before anything is built. Crash tests, for example, are now mostly run on
      computers, with physical tests to confirm the result.
    sources:
      - citation: "Zienkiewicz, O. C., Taylor, R. L. & Zhu, J. Z. (2013). The Finite Element Method: Its Basis and Fundamentals, 7th edition. Butterworth-Heinemann."
        url: null

further_reading:
  - citation: "Lynch, P. (2006). The Emergence of Numerical Weather Prediction: Richardson's Dream. Cambridge University Press."
    url: null
    note: Richardson's forecast recomputed and explained, with the history that followed.
  - citation: "LeVeque, R. J. (2007). Finite Difference Methods for Ordinary and Partial Differential Equations. SIAM."
    url: null
    note: A clear textbook on grids, stability and the CFL condition.
  - citation: "Strang, G. & Fix, G. (1973). An Analysis of the Finite Element Method. Prentice-Hall."
    url: null
    note: The book that gave the engineers' method its mathematical foundations.
---

## The Forecast Factory

[Differential equations](/math/differential-equations/) describe how a state changes from moment to moment. For the atmosphere, the state is the wind, pressure, temperature and moisture at every point, and the equations are the partial differential equations of fluid motion. In principle, today's weather determines tomorrow's. In practice nobody could solve the equations.

{{fig:lewis-fry-richardson|Lewis Fry Richardson}} decided to compute instead. He divided the atmosphere into boxes, replaced derivatives by differences between neighbouring boxes, and stepped the equations forward in time by arithmetic. During the First World War, between shifts with an ambulance unit in France, he computed a six-hour forecast for two points in central Europe. It took about six weeks. The result was a rise in pressure of 145 hectopascals in six hours, when the real pressure barely changed. He published the whole calculation in 1922, with the failure stated plainly, and imagined a hall of 64,000 people computing the world's weather in time. Much later, Peter Lynch recomputed the forecast and showed that the method was sound. The starting data were unbalanced, and a small smoothing would have given a sensible answer.

## Stability

In 1928 {{fig:richard-courant|Richard Courant}}, {{fig:kurt-friedrichs|Kurt Friedrichs}} and {{fig:hans-lewy|Hans Lewy}} studied grid equations for a different reason: to prove that certain partial differential equations have solutions, by showing that grid solutions converge as the grid is refined. They found that for wave-like equations this happens only if the time step is small enough compared with the grid spacing. If a wave can cross more than one cell in a single step, the grid cannot follow it.

The condition became essential when electronic computers arrived. In 1950 {{fig:jule-charney|Jule Charney}}, working with {{fig:von-neumann|John von Neumann}} and Ragnar Fjørtoft, ran the first computer weather forecast on the ENIAC. Charney had simplified the equations to remove the fast gravity waves that had wrecked Richardson's forecast, and chose time steps that respected the CFL condition. Each 24-hour forecast took about 24 hours to compute, but the results were realistic. Von Neumann also developed a way to test a scheme's stability by following each wave pattern separately, and in 1956 Peter Lax and Robert Richtmyer proved that, for linear problems, a consistent scheme converges exactly when it is stable.

## Elements and Grids

Grids of squares suit the atmosphere but not an aircraft wing. In the 1950s engineers, among them {{fig:ray-clough|Ray Clough}}, working with a Boeing team, and John Argyris in London, broke structures into small triangular and rectangular elements, each with simple behaviour, joined at their corners. Clough named it the finite element method in 1960. Courant had proposed the same idea in 1943, as a way to solve variational problems, and mathematicians later proved that the engineers' method converges and how fast. It is now the standard tool for anything with a complicated shape.

Solving the resulting equations was the next bottleneck. A fine three-dimensional mesh has millions of unknowns, and simple iterative methods need many thousands of sweeps to converge, because smooth errors fade slowly. {{fig:radii-fedorenko|Radii Fedorenko}} saw in 1964 that a coarser grid could remove those smooth errors cheaply, and {{fig:achi-brandt|Achi Brandt}} turned the idea into the general multigrid method in 1977. Together with the [linear algebra](/math/numerical-linear-algebra/) of conjugate gradients, it made problems with billions of unknowns solvable.

## A Closer Look: The CFL Condition

The simplest wave-like equation says that a pattern $u$ moves to the right at speed $c$ without changing shape:

$$
\frac{\partial u}{\partial t} + c\,\frac{\partial u}{\partial x} = 0.
$$

Put it on a grid with spacing $\Delta x$ and time step $\Delta t$. The upwind scheme updates each value from itself and its left-hand neighbour:

$$
u_j^{\text{new}} = u_j - \nu\,(u_j - u_{j-1}), \qquad \nu = \frac{c\,\Delta t}{\Delta x}.
$$

The number $\nu$, the Courant number, is the number of cells the pattern moves in one step. If $\nu \le 1$, the new value is $(1 - \nu)u_j + \nu u_{j-1}$, a weighted average of two old values, so it can never exceed the largest of them. If $\nu > 1$, the weight $1 - \nu$ is negative and nothing holds the values in check.

To see what happens, add a tiny sawtooth ripple of size 0.001 that alternates in sign from cell to cell, like rounding error. For this ripple $u_{j-1} = -u_j$, so each step multiplies it by $1 - 2\nu$:

| Courant number $\nu$ | Factor per step | Ripple after 20 steps |
|---|---|---|
| 0.5 | 0 | 0 |
| 1.0 | −1 | 0.001 |
| 1.5 | −2 | about 1,000 |
| 2.0 | −3 | about 3.5 million |

At $\nu = 2$ the ripple, started at one thousandth, is 3.5 million after 20 steps. No real wave did that. The computation has exploded.

Now take a weather model with a 10-kilometre grid and winds of up to 100 metres per second. The condition $\nu \le 1$ requires $\Delta t \le 10{,}000 / 100 = 100$ seconds, so at least 864 steps for a one-day forecast. Sound waves, at about 340 metres per second, would force steps under 30 seconds. That is why Charney filtered out the fast waves, and why modern models treat them with implicit methods that are not bound by the condition.

## From Grids to Spacetime

The same methods now simulate almost every physical system. The hardest test came from [general relativity](/physics/general-relativity/). For decades simulations of two orbiting black holes crashed after a fraction of an orbit, as small errors in Einstein's equations grew without limit. The instability was not in the grid but in the way the equations were written. In 2005 {{fig:frans-pretorius|Frans Pretorius}} found a formulation that stayed stable and followed two black holes through their merger. Ten years later, LIGO's first detection was matched against such simulations. The underlying mathematics is still incomplete, and for the equations of gas dynamics in more than one dimension it is not known whether the simulations converge at all.
