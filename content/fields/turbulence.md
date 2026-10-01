---
id: turbulence
domain: physics
thread: flow
name: Turbulence
parent_ids:
  - fluid-dynamics
  - statistical-mechanics
era_emerged: 1883 – 1991
core_question: When a flow becomes irregular at every scale at once, what about it is still predictable?

summary: |-
  Above a certain speed, smooth flow stops being possible. Osborne Reynolds showed this in 1883 by injecting dye into water in a glass pipe: below a threshold the filament of dye ran straight down the tube, above it the dye burst into eddies and filled the pipe. Nothing about the fluid had changed. What changed was the balance between inertia and viscosity, and past the threshold the equations' solutions are no longer steady, no longer symmetric, and no longer repeatable in detail.

  Turbulence was therefore approached the way thermodynamics approached a gas: give up on the individual motions and look for laws obeyed by the statistics. The results are remarkable for a subject with no solution. Lewis Fry Richardson's picture of energy passing from large eddies to smaller ones, and Andrey Kolmogorov's dimensional argument from it in 1941, predict that the energy in a turbulent flow is distributed across scales according to a power law with exponent $-5/3$, independent of what is being stirred, how, or with what fluid. That prediction has been confirmed in the ocean, the atmosphere, wind tunnels and liquid helium. It is also known to be not quite right, and the corrections have resisted eighty years of work.

key_ideas:
  - term: Transition to turbulence
    definition: >-
      Above a critical Reynolds number, laminar flow is unstable: small disturbances grow instead of
      decaying. The critical value depends on the geometry and on how clean the inlet is — about
      2,000 for a pipe in practice, and far higher if disturbances are carefully suppressed.
    turning_point_id: reynolds-transition
  - term: Energy cascade
    definition: >-
      Energy is fed in at large scales by whatever stirs the flow, passed down through eddies of
      decreasing size by the nonlinear term, and finally converted to heat by viscosity at the
      smallest scales. In between, energy is neither created nor destroyed, only handed on.
    turning_point_id: richardson-cascade
  - term: Statistical description
    definition: >-
      Since individual realisations are irreproducible, the objects of study are averages:
      correlations between velocities at two points, structure functions of velocity differences,
      and the distribution of energy across scales.
    turning_point_id: taylor-statistical-theory
  - term: The five-thirds law
    definition: >-
      In the range of scales between stirring and dissipation, the energy spectrum is
      $E(k) = C\,\varepsilon^{2/3}k^{-5/3}$, where $\varepsilon$ is the rate of energy dissipation
      per unit mass. It follows from dimensional analysis alone, given the assumption that only
      $\varepsilon$ matters.
    turning_point_id: kolmogorov-k41
  - term: Dissipation scale
    definition: >-
      The size at which viscosity finally wins, $\eta = (\nu^{3}/\varepsilon)^{1/4}$. The ratio of
      the largest scale to this one grows as $\mathrm{Re}^{3/4}$, which is why simulating a
      high-Reynolds-number flow is so expensive.
    turning_point_id: kolmogorov-k41
  - term: Intermittency
    definition: >-
      Violent events — thin sheets and tubes of intense vorticity — are far more common than a
      Gaussian description allows, so the dissipation is not spread evenly. This is why the scaling
      exponents deviate from Kolmogorov's values, increasingly at higher orders.
    turning_point_id: landau-intermittency

turning_points:
  - id: reynolds-transition
    date: "1883"
    type: EXPERIMENT
    title: Reynolds's dye filament
    description: >-
      Osborne Reynolds runs water through a long glass pipe and introduces a thread of coloured dye
      at the inlet. At low speeds the thread travels the length of the pipe undisturbed. Above a
      critical speed it breaks up into swirls that mix across the whole cross-section, and the
      transition occurs at a fixed value of the combination $UD/\nu$ regardless of pipe diameter or
      fluid. He also showed the critical value depends on how disturbed the inlet is — a hint that
      the transition is about the stability of the flow rather than a property of the fluid.
    contested: false
    sources:
      - citation: "Reynolds, O. (1883). An experimental investigation of the circumstances which determine whether the motion of water shall be direct or sinuous. Philosophical Transactions of the Royal Society 174: 935–982."
        url: null
      - citation: "Eckhardt, B. (2009). Introduction. Turbulence transition in pipe flow: 125th anniversary of the publication of Reynolds' paper. Philosophical Transactions of the Royal Society A 367: 449–455."
        url: null

  - id: richardson-cascade
    date: "1922"
    type: DISCOVERY
    title: Richardson's cascade
    description: >-
      In the book that also contains his attempt to forecast weather by hand, Lewis Fry Richardson
      describes what turbulence does with energy: large eddies break into smaller ones, which break
      into smaller ones still, until the motions are fine enough for viscosity to turn them into
      heat. He put it in verse — big whirls have little whirls that feed on their velocity — and the
      picture is the conceptual basis of everything that follows, including the idea that the middle
      of the range should be independent of both the stirring and the viscosity.
    contested: false
    sources:
      - citation: "Richardson, L. F. (1922). Weather Prediction by Numerical Process. Cambridge University Press, p. 66."
        url: null
      - citation: "Frisch, U. (1995). Turbulence: The Legacy of A. N. Kolmogorov. Cambridge University Press."
        url: null

  - id: taylor-statistical-theory
    date: 1935 – 1938
    type: THEORY-REPLACED
    title: Turbulence as a statistical field
    description: >-
      Geoffrey Ingram Taylor abandons the attempt to describe individual eddies and defines
      turbulence by its statistics: the correlation between velocities measured at two points a given
      distance apart, and the spectrum obtained from it. He introduces the idealisation of
      homogeneous isotropic turbulence — statistically the same everywhere and in every direction —
      which is not any real flow and is the setting in which almost all theory since has been done.
    contested: false
    sources:
      - citation: "Taylor, G. I. (1935). Statistical theory of turbulence. Proceedings of the Royal Society A 151: 421–444."
        url: null
      - citation: "Batchelor, G. K. (1953). The Theory of Homogeneous Turbulence. Cambridge University Press."
        url: null

  - id: kolmogorov-k41
    date: "1941"
    type: DISCOVERY
    title: Kolmogorov's 1941 theory
    description: >-
      Andrey Kolmogorov assumes that at scales far from both the stirring and the viscous cut-off,
      the statistics of velocity differences depend on one quantity only: $\varepsilon$, the rate at
      which energy is passing down the cascade. Dimensional analysis then forces the answers. The
      typical velocity difference across a separation $r$ goes as $(\varepsilon r)^{1/3}$, the energy
      spectrum as $\varepsilon^{2/3}k^{-5/3}$, and the scale where viscosity takes over as
      $(\nu^{3}/\varepsilon)^{1/4}$. Three predictions from two paragraphs of reasoning, and the
      spectrum has since been confirmed across more than a dozen decades of scale.
    contested: false
    sources:
      - citation: "Kolmogorov, A. N. (1941). The local structure of turbulence in incompressible viscous fluid for very large Reynolds numbers. Doklady Akademii Nauk SSSR 30: 301–305."
        url: null
      - citation: "Frisch, U. (1995). Turbulence: The Legacy of A. N. Kolmogorov. Cambridge University Press, chapters 5–6."
        url: null

  - id: landau-intermittency
    date: 1944 – 1962
    type: DISCOVERY
    title: Landau's objection and intermittency
    description: >-
      Lev Landau points out a flaw in Kolmogorov's reasoning at a seminar: the dissipation rate is
      itself a fluctuating quantity, not a constant, and an average of a nonlinear function is not
      that function of the average. Measurements bore him out. Dissipation is concentrated in thin
      sheets and tubes rather than spread evenly, higher-order statistics deviate systematically
      from the 1941 predictions, and in 1962 Kolmogorov published a refined theory to accommodate it.
      The deviations — anomalous scaling — are still not derived from the equations.
    contested: true
    contested_note: >-
      How to characterise intermittency remains unsettled. The 1962 lognormal refinement is known to
      be internally inconsistent at high orders; multifractal models fit the data without deriving
      it; and whether the scaling exponents are universal, or depend on the large-scale flow, is
      argued on the basis of measurements that require Reynolds numbers at the edge of what can be
      reached.
    sources:
      - citation: "Landau, L. D. & Lifshitz, E. M. (1959). Fluid Mechanics. Pergamon Press, §33 footnote."
        url: null
      - citation: "Kolmogorov, A. N. (1962). A refinement of previous hypotheses concerning the local structure of turbulence. Journal of Fluid Mechanics 13: 82–85."
        url: null
      - citation: "Sreenivasan, K. R. & Antonia, R. A. (1997). The phenomenology of small-scale turbulence. Annual Review of Fluid Mechanics 29: 435–472."
        url: null

  - id: direct-numerical-simulation
    date: 1972 – 1987
    type: EXPERIMENT
    title: Turbulence computed from the equations
    description: >-
      Steven Orszag and Stuart Patterson simulate homogeneous turbulence on a $32^{3}$ grid in 1972,
      resolving every scale down to dissipation with no model for the small ones. By 1987 John Kim,
      Parviz Moin and Robert Moser had done the same for flow in a channel, with walls, and the
      results reproduced measured statistics closely enough to be used as data. Direct simulation
      became a third source of evidence alongside theory and experiment — limited, permanently, by a
      cost that rises as roughly the cube of the Reynolds number.
    contested: false
    sources:
      - citation: "Orszag, S. A. & Patterson, G. S. (1972). Numerical simulation of three-dimensional homogeneous isotropic turbulence. Physical Review Letters 28: 76–79."
        url: null
      - citation: "Kim, J., Moin, P. & Moser, R. (1987). Turbulence statistics in fully developed channel flow at low Reynolds number. Journal of Fluid Mechanics 177: 133–166."
        url: null
      - citation: "Moin, P. & Mahesh, K. (1998). Direct numerical simulation: a tool in turbulence research. Annual Review of Fluid Mechanics 30: 539–578."
        url: null

open_problems:
  - id: turbulence-closure
    name: Closing the equations for the averages
    status: open
    status_note: Open as of 2026; every model in engineering use contains coefficients fitted to experiment.
    description: >-
      Averaging the Navier–Stokes equations produces an equation for the mean velocity that contains
      a new unknown, the correlation of the fluctuations. Writing an equation for that introduces a
      third-order correlation, and so on without end. No way has been found to close the hierarchy
      from the equations themselves, so every practical calculation inserts a model — a mixing
      length, an eddy viscosity, a two-equation scheme — whose constants are measured rather than
      derived.
    why_hard: >-
      The nonlinear term couples all scales, so the small-scale motions that are being modelled
      depend on the large-scale ones being computed. Nothing in the problem separates cleanly, and
      the quantity to be modelled is not small compared with the one being solved for. The anomalous
      scaling exponents that intermittency produces have not been derived either, which means even
      the statistics of the inertial range are not fully understood.
    unlocks: >-
      Aircraft, engines, reactors, pipelines and climate models all compute turbulent flows with
      fitted models, and the models fail in regimes they were not fitted for. A derivation would
      replace calibration with prediction in a large part of engineering.
    sources:
      - citation: "Pope, S. B. (2000). Turbulent Flows. Cambridge University Press, chapters 10–13."
        url: null
      - citation: "Sreenivasan, K. R. (1999). Fluid turbulence. Reviews of Modern Physics 71: S383–S395."
        url: null

applications:
  - area: Engineering
    title: Mixing, drag and heat transfer
    description: >-
      Turbulence is a nuisance in a pipeline, where it multiplies the pumping power required, and
      indispensable in a combustion chamber, where it mixes fuel and air thousands of times faster
      than diffusion would. Heat exchangers are designed to promote it; aircraft wings are designed
      to delay it on the forward part of the surface and then trip it deliberately, because a
      turbulent boundary layer separates later than a laminar one and the drag penalty is smaller
      than the wake.
    sources:
      - citation: "Pope, S. B. (2000). Turbulent Flows. Cambridge University Press."
        url: null
  - area: Ecology
    title: Finding food in a turbulent ocean
    description: >-
      Chemical signals in water do not spread as smooth gradients; turbulence tears them into thin
      filaments separated by clean water, so a crab or a copepod tracking a scent receives
      intermittent bursts rather than a rising concentration. Search strategies in marine animals
      make sense only against this statistical structure, and the same applies to insects following
      odour plumes in air.
    domain: biology
    field_id: community-ecology
    sources:
      - citation: "Weissburg, M. J. (2000). The fluid dynamical context of chemosensory behavior. Biological Bulletin 198: 188–202."
        url: null
      - citation: "Celani, A., Villermaux, E. & Vergassola, M. (2014). Odor landscapes in turbulent environments. Physical Review X 4: 041015."
        url: null
  - area: Scaling arguments
    title: A power law from dimensions alone
    description: >-
      Kolmogorov's derivation is the standard example of what dimensional analysis can do when the
      list of relevant quantities is right, and of how much rests on that list. It is taught across
      applied mathematics as a model for intermediate asymptotics: identify the range where the
      boundaries have been forgotten and the cut-off is not yet felt, and the answer is forced.
    domain: math
    field_id: differential-equations
    sources:
      - citation: "Barenblatt, G. I. (1996). Scaling, Self-Similarity, and Intermediate Asymptotics. Cambridge University Press."
        url: null

further_reading:
  - citation: "Frisch, U. (1995). Turbulence: The Legacy of A. N. Kolmogorov. Cambridge University Press."
    url: null
    note: The clearest account of the cascade, K41 and what intermittency does to it.
  - citation: "Davidson, P. A. (2015). Turbulence: An Introduction for Scientists and Engineers, 2nd edition. Oxford University Press."
    url: null
    note: A readable graduate text that keeps the physical picture in front of the formalism.
  - citation: "Pope, S. B. (2000). Turbulent Flows. Cambridge University Press."
    url: null
    note: The reference for the modelling side, honest about where the constants come from.
---

## When Smooth Flow Stops Being Available

{{fig:reynolds|Osborne Reynolds}} built an apparatus of great simplicity: a glass pipe, a tank of still water, and a fine nozzle introducing dye at the entrance. At low flow rates the dye travelled the whole length of the pipe as a straight thread. Open the valve further and at some point the thread wavered, then broke into eddies that mixed through the entire cross-section within a few diameters.

The transition happened at a fixed value of $UD/\nu$, whatever the pipe diameter and whatever the liquid. It was also sensitive to how disturbed the inlet was: with care, laminar flow could be maintained to much higher speeds. Both facts point the same way. Turbulence is not a property of the fluid but a question about the *stability* of a solution — above a critical Reynolds number the smooth flow still satisfies the equations, and no longer survives being nudged.

What takes its place is a flow that is irregular in space, unsteady in time, sensitive to initial conditions and not reproducible in detail. Two runs of the same experiment give different velocity records. This is a problem not of measurement but of what to even ask for. The response, over the following fifty years, was to stop asking about the flow and ask about its statistics — the same move statistical mechanics made when it stopped tracking molecules.

## The Cascade

{{fig:lewis-fry-richardson|Lewis Fry Richardson}} supplied the physical picture in 1922, in a book otherwise devoted to forecasting weather by hand:

> Big whirls have little whirls that feed on their velocity, and little whirls have lesser whirls and so on to viscosity.

Energy enters at the scale of whatever stirs the flow — the pipe diameter, the aircraft, the width of the ocean current. Viscosity can only remove energy where velocity gradients are steep, which means at very small scales. The nonlinear term does the transport in between, breaking large motions into smaller ones. In the middle of that range, energy is neither added nor dissipated; it merely passes through at a rate $\varepsilon$.

{{fig:gi-taylor|G. I. Taylor}} made the statistics precise in 1935, defining turbulence by the correlation between velocities at two points and introducing homogeneous isotropic turbulence — an idealisation that no real flow satisfies and in which nearly all theory is still done.

Then {{fig:kolmogorov|Andrey Kolmogorov}}, in two short papers in 1941, extracted quantitative predictions from the cascade picture with almost no mathematics.

## A Closer Look: Two Paragraphs, Three Predictions, and the Cost of Checking Them

Kolmogorov's hypothesis is a statement about what the middle of the cascade can depend on. At separations $r$ much smaller than the stirring scale $L$ and much larger than wherever viscosity acts, the flow has forgotten how it was stirred and does not yet feel viscosity. The only quantity available is $\varepsilon$, the energy flux per unit mass, with dimensions

$$
[\varepsilon] = \frac{\text{energy}}{\text{mass} \times \text{time}} = \frac{\mathrm{m^{2}}}{\mathrm{s^{3}}}.
$$

**Prediction one.** The typical velocity difference $\delta u$ across a separation $r$ can only be built from $\varepsilon$ and $r$. The only combination with units of velocity is

$$
\delta u \sim (\varepsilon r)^{1/3}.
$$

**Prediction two.** The energy per unit wavenumber $E(k)$ has units of m³/s². Built from $\varepsilon$ and $k$ (units 1/m), the only possibility is

$$
E(k) = C\,\varepsilon^{2/3} k^{-5/3}.
$$

This is the five-thirds law, and $C \approx 1.5$ turns out to be very nearly the same in every flow measured.

**Prediction three.** Viscosity takes over where the local Reynolds number falls to one. With $\nu$ (units m²/s) now allowed, the only length is

$$
\eta = \left(\frac{\nu^{3}}{\varepsilon}\right)^{1/4}.
$$

Now put numbers on the last one, because it is the reason turbulence remains computationally out of reach. Estimate $\varepsilon \sim U^{3}/L$, as the cascade picture requires, and the ratio of the largest to the smallest scale becomes

$$
\frac{L}{\eta} = \left(\frac{L^{4}U^{3}}{\nu^{3}L}\right)^{1/4} = \mathrm{Re}^{3/4}.
$$

A simulation that resolves every scale needs a grid spacing of order $\eta$ across a box of size $L$, in three dimensions, so the number of grid points is

$$
N \sim \left(\mathrm{Re}^{3/4}\right)^{3} = \mathrm{Re}^{9/4}.
$$

For an aircraft wing at $\mathrm{Re} = 10^{7}$:

$$
N \sim \left(10^{7}\right)^{9/4} = 10^{15.75} \approx 5.6\times10^{15} \text{ points}.
$$

Storing five numbers per point in double precision is

$$
5.6\times10^{15} \times 5 \times 8 \text{ bytes} \approx 2.2\times10^{17} \text{ bytes} = 220 \text{ petabytes},
$$

which is more memory than exists in any machine. The time step must also shrink with the grid, adding a further factor of about $\mathrm{Re}^{3/4} \approx 2\times10^{5}$ steps per flow-through time, bringing the operation count for a single flow-through to the order of $10^{21}$. On a machine doing $10^{18}$ operations per second — exascale, achieved in 2022 — that is around a thousand seconds of computing per flow-through time, *if* memory were free and the efficiency perfect. Neither holds.

This is why engineering does not simulate turbulence directly, and why the closure problem is not a theoretical nicety. Every aircraft, engine and weather forecast computes a *modelled* turbulence whose coefficients were fitted to experiments, and the exponent $9/4$ says that no foreseeable computer changes that.

## Where K41 Is Wrong

{{fig:lev-landau|Lev Landau}} objected almost immediately, at a seminar, and the objection is subtle. Kolmogorov treats $\varepsilon$ as a constant. It is not: dissipation fluctuates violently in space and time, concentrated in thin sheets and filaments of intense vorticity with relatively quiet fluid between them. Averaging $\varepsilon^{2/3}$ is not the same as taking the two-thirds power of the average, so the predictions should be corrected — and the corrections should grow with the order of the statistic being measured.

Measurements confirm this. The five-thirds law for the energy spectrum, a second-order quantity, holds beautifully. Higher-order structure functions deviate systematically from the 1941 exponents, by amounts that increase with order, and the pattern is reproducible across very different flows. Kolmogorov published a refined theory in 1962 assuming a lognormal distribution of local dissipation; it is known to be internally inconsistent at high orders. Multifractal models describe the data without deriving it.

So the position after eighty years is this. A dimensional argument whose central assumption is demonstrably false makes a prediction that is right to within a percent or two, and the corrections to the false assumption have not been derived from the equations by anyone. The deviations are small, universal-looking, and unexplained — a combination that keeps the problem alive.

What turbulence looks like in a rotating, stratified fluid the size of a planet, where the cascade runs partly backwards and large structures organise themselves out of small ones, is the subject of [geophysical fluid dynamics](/physics/geophysical-fluid-dynamics/).
