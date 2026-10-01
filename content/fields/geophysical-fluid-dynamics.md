---
id: geophysical-fluid-dynamics
domain: physics
thread: flow
name: Geophysical Fluid Dynamics
parent_ids:
  - turbulence
  - thermodynamics
era_emerged: 1835 – 1969
core_question: What happens to a fluid when it is thin compared with its own width, heated unevenly, and sitting on a rotating sphere?

summary: |-
  The atmosphere is about 10 km deep and 40,000 km around; the ocean is 4 km deep and spans continents. Both are therefore sheets, not volumes, and both sit on a planet turning once a day. Those two facts — extreme flatness and rotation — change fluid dynamics so thoroughly that the result is a separate subject with its own equations, its own dimensionless numbers and its own characteristic structures.

  Rotation is the dominant one. In a rotating frame, a moving parcel is deflected, and for motions larger than a few hundred kilometres the deflection is strong enough that pressure forces are balanced not by acceleration but by this deflection. Wind then blows *along* the lines of equal pressure rather than from high to low, which is why weather maps can be read as flow charts. Vilhelm Bjerknes realised in 1904 that the atmosphere is therefore an initial-value problem: given the present state and the equations, the future follows. That programme produced numerical weather prediction, and then its limit — Edward Lorenz's discovery that the same equations amplify small errors exponentially, so the forecast horizon is finite no matter how good the measurements.

key_ideas:
  - term: Coriolis parameter
    definition: >-
      In a frame rotating at rate $\Omega$, a parcel moving horizontally at latitude $\varphi$ is
      deflected with an acceleration $f u$, where $f = 2\Omega\sin\varphi$. It vanishes at the
      equator and is about $10^{-4}\ \mathrm{s^{-1}}$ at mid-latitudes.
    turning_point_id: coriolis-force
  - term: Geostrophic balance
    definition: >-
      When rotation dominates, the pressure gradient is balanced by the Coriolis deflection rather
      than producing acceleration. The flow is then perpendicular to the pressure gradient — along
      the isobars — with a speed set by how tightly packed they are.
    turning_point_id: ekman-spiral
  - term: Rossby number
    definition: >-
      $\mathrm{Ro} = U/fL$, the ratio of inertial to Coriolis forces. Small values mean rotation
      governs the flow; for a weather system it is about 0.1, and for water draining from a bath
      about $10^{4}$, which is why the bathtub story is wrong.
    turning_point_id: rossby-waves
  - term: Stratification
    definition: >-
      Density increases downwards, so vertical motion must do work against buoyancy and is strongly
      suppressed. The restoring force gives internal gravity waves, with a frequency set by the
      buoyancy frequency $N$, and it is what makes the fluid behave as a stack of nearly independent
      layers.
    turning_point_id: charney-quasigeostrophy
  - term: Rossby wave
    definition: >-
      A planetary wave owing its existence to the variation of $f$ with latitude. A displaced parcel
      is pushed back, and the resulting wave travels westwards relative to the flow. These are the
      long meanders of the jet stream, and they organise weather at the scale of continents.
    turning_point_id: rossby-waves
  - term: Multiple equilibria
    definition: >-
      A circulation driven by both temperature and salinity can have two stable states for the same
      forcing, because the flow carries the salinity that drives it. Systems of this kind can switch
      abruptly and not switch back.
    turning_point_id: stommel-thermohaline

turning_points:
  - id: coriolis-force
    date: "1835"
    type: DISCOVERY
    title: The deflection in a rotating frame
    description: >-
      Gaspard-Gustave de Coriolis, analysing the energetics of rotating machinery such as waterwheels,
      derives the supplementary force that appears in a rotating reference frame for a body moving
      within it. The result was not aimed at the atmosphere; William Ferrel applied it to the winds in
      1856, explaining why the trade winds blow from the east and the mid-latitude westerlies from
      the west, and why storms rotate in opposite senses in the two hemispheres.
    contested: false
    sources:
      - citation: "Coriolis, G.-G. (1835). Sur les équations du mouvement relatif des systèmes de corps. Journal de l'École Polytechnique 15: 142–154."
        url: null
      - citation: "Persson, A. (1998). How do we understand the Coriolis force? Bulletin of the American Meteorological Society 79: 1373–1385."
        url: null

  - id: bjerknes-weather-problem
    date: 1904 – 1922
    type: PARADIGM-SHIFT
    title: Weather as an initial-value problem
    description: >-
      Vilhelm Bjerknes argues that forecasting is not an art of pattern recognition but a definite
      problem in physics: the atmosphere obeys the equations of hydrodynamics and thermodynamics, so
      given a sufficiently complete description of its present state the future is determined. The
      obstacles are the measurements and the arithmetic, not the principle. With his son Jacob and the
      Bergen school he then found the structures that make mid-latitude weather intelligible — fronts
      and the life cycle of the cyclone that forms on them.
    contested: false
    sources:
      - citation: "Bjerknes, V. (1904). Das Problem der Wettervorhersage, betrachtet vom Standpunkte der Mechanik und der Physik. Meteorologische Zeitschrift 21: 1–7."
        url: null
      - citation: "Bjerknes, J. (1919). On the structure of moving cyclones. Geofysiske Publikasjoner 1(2): 1–8."
        url: null
      - citation: "Friedman, R. M. (1989). Appropriating the Weather: Vilhelm Bjerknes and the Construction of a Modern Meteorology. Cornell University Press."
        url: null

  - id: ekman-spiral
    date: "1905"
    type: DISCOVERY
    title: Why ice drifts to the right of the wind
    description: >-
      Fridtjof Nansen, drifting with the Arctic pack ice, noticed that the floes moved 20 to 40
      degrees to the right of the wind and asked for an explanation. Vagn Walfrid Ekman supplies one:
      the wind's stress is transmitted downwards by friction while each layer is deflected by
      rotation, so the current direction turns with depth in a spiral, and the depth-averaged
      transport is at right angles to the wind. The same mechanism makes winds along a coast drive
      cold, nutrient-rich water to the surface, which is why the world's largest fisheries sit where
      they do.
    contested: false
    sources:
      - citation: "Ekman, V. W. (1905). On the influence of the Earth's rotation on ocean currents. Arkiv för Matematik, Astronomi och Fysik 2(11): 1–52."
        url: null
      - citation: "Cushman-Roisin, B. & Beckers, J.-M. (2011). Introduction to Geophysical Fluid Dynamics, 2nd edition. Academic Press, chapter 8."
        url: null

  - id: rossby-waves
    date: 1939 – 1940
    type: DISCOVERY
    title: Rossby's planetary waves
    description: >-
      Carl-Gustaf Rossby shows that because the Coriolis parameter grows with latitude, a large-scale
      flow has a restoring mechanism: a parcel pushed north acquires relative vorticity that pushes it
      back. The result is a wave whose phase travels westwards and whose wavelength runs to thousands
      of kilometres. These waves are the meanders of the jet stream, and they explain why weather
      systems at mid-latitudes travel eastwards while the pattern that steers them can stall in place
      for weeks.
    contested: false
    sources:
      - citation: "Rossby, C.-G. (1939). Relation between variations in the intensity of the zonal circulation of the atmosphere and the displacements of the semi-permanent centers of action. Journal of Marine Research 2: 38–55."
        url: null
      - citation: "Platzman, G. W. (1968). The Rossby wave. Quarterly Journal of the Royal Meteorological Society 94: 225–248."
        url: null

  - id: charney-quasigeostrophy
    date: 1947 – 1949
    type: THEORY-REPLACED
    title: Charney filters the equations
    description: >-
      Richardson's hand-computed forecast of 1922 failed spectacularly, predicting a pressure change
      of 145 millibars in six hours. Jule Charney diagnoses the cause: the full equations admit sound
      waves and other fast motions that carry negligible energy but dominate the time derivatives, so
      small errors in the initial data excite them violently. He derives a filtered set — the
      quasi-geostrophic equations — which retain the slow, weather-bearing motions and discard the
      rest. These were the equations used for the first successful computer forecast in 1950.
    contested: false
    sources:
      - citation: "Charney, J. G. (1948). On the scale of atmospheric motions. Geofysiske Publikasjoner 17(2): 1–17."
        url: null
      - citation: "Charney, J. G., Fjørtoft, R. & von Neumann, J. (1950). Numerical integration of the barotropic vorticity equation. Tellus 2: 237–254."
        url: null

  - id: stommel-thermohaline
    date: 1948 – 1961
    type: DISCOVERY
    title: Stommel's two boxes, and two possible oceans
    description: >-
      Henry Stommel explains in 1948 why western boundary currents such as the Gulf Stream are narrow
      and fast while the return flow is broad and slow — the variation of the Coriolis parameter with
      latitude breaks the symmetry. In 1961 he studies a far simpler system: two boxes of water
      exchanging heat and salt. It has two stable circulations for the same forcing, because the flow
      transports the salinity contrast that drives it. The possibility that the ocean's overturning
      has more than one stable state, and could switch, came from a model with two equations.
    contested: false
    sources:
      - citation: "Stommel, H. (1948). The westward intensification of wind-driven ocean currents. Transactions of the American Geophysical Union 29: 202–206."
        url: null
      - citation: "Stommel, H. (1961). Thermohaline convection with two stable regimes of flow. Tellus 13: 224–230."
        url: null

open_problems:
  - id: cloud-feedback
    name: What clouds do as the planet warms
    status: open
    status_note: Open as of 2026; clouds remain the largest single contributor to the uncertainty in climate sensitivity.
    description: >-
      Clouds both reflect sunlight and trap infrared radiation, and which effect dominates depends on
      their height, thickness and droplet size. Whether warming increases or decreases low marine
      cloud cover determines a large part of how much the planet warms for a given rise in carbon
      dioxide, and the models disagree. Estimates of equilibrium climate sensitivity have spanned
      roughly 2 to 5 °C for four decades, with cloud feedback the main reason the range has not
      narrowed.
    why_hard: >-
      Cloud droplets form on micron-scale particles, convection organises on kilometre scales, and
      climate models have grid cells tens of kilometres across — so the process is parameterised, not
      computed. The parameterisations are fitted to present conditions and there is no guarantee they
      hold in a different climate, which is exactly the regime they are being used to predict.
    unlocks: >-
      Climate sensitivity is the single number that converts an emissions path into a temperature,
      and therefore underlies every carbon budget and every target.
    sources:
      - citation: "Bony, S. et al. (2015). Clouds, circulation and climate sensitivity. Nature Geoscience 8: 261–268."
        url: null
      - citation: "Sherwood, S. C. et al. (2020). An assessment of Earth's climate sensitivity using multiple lines of evidence. Reviews of Geophysics 58: e2019RG000678."
        url: null

applications:
  - area: Weather forecasting
    title: Forecasts, and the horizon beyond which there are none
    description: >-
      Global models now integrate the filtered equations on grids of around 10 km, assimilating
      millions of observations a day, and a modern five-day forecast is about as accurate as a
      one-day forecast was in 1980. The limit is not computational. Because the equations amplify
      small differences exponentially, forecasts are issued as ensembles of perturbed runs, and
      useful deterministic skill ends after roughly two weeks — a boundary that belongs to
      [chaos theory](/math/chaos-theory/) rather than to meteorology.
    sources:
      - citation: "Bauer, P., Thorpe, A. & Brunet, G. (2015). The quiet revolution of numerical weather prediction. Nature 525: 47–55."
        url: null
      - citation: "Lorenz, E. N. (1963). Deterministic nonperiodic flow. Journal of the Atmospheric Sciences 20: 130–141."
        url: null
  - area: Fisheries and marine ecology
    title: Upwelling and where the fish are
    description: >-
      Ekman transport at right angles to the wind drives surface water away from certain coasts, and
      cold water rich in nitrate and phosphate rises to replace it. Four such systems — off Peru,
      California, north-west and south-west Africa — occupy about 1% of the ocean's area and supply
      roughly a fifth of the world's wild fish catch. When the wind pattern shifts, as during an El
      Niño, the upwelling stops and the fishery collapses within a season.
    domain: biology
    field_id: ecosystem-ecology
    sources:
      - citation: "Chavez, F. P. & Messié, M. (2009). A comparison of eastern boundary upwelling ecosystems. Progress in Oceanography 83: 80–96."
        url: null
  - area: Climate policy
    title: Circulations that may not be reversible
    description: >-
      Stommel's two-box result generalises into the modern concern with tipping elements: the
      Atlantic overturning circulation, the monsoon systems and parts of the ice sheets may each have
      more than one stable configuration, so a gradual forcing can produce an abrupt and persistent
      change. Palaeoclimate records of rapid shifts during the last glacial period are read as
      evidence that the ocean has done this before.
    sources:
      - citation: "Lenton, T. M. et al. (2008). Tipping elements in the Earth's climate system. PNAS 105: 1786–1793."
        url: null
      - citation: "Rahmstorf, S. (2002). Ocean circulation and climate during the past 120,000 years. Nature 419: 207–214."
        url: null

further_reading:
  - citation: "Vallis, G. K. (2017). Atmospheric and Oceanic Fluid Dynamics, 2nd edition. Cambridge University Press."
    url: null
    note: The standard graduate text, careful about which approximation is being made where.
  - citation: "Cushman-Roisin, B. & Beckers, J.-M. (2011). Introduction to Geophysical Fluid Dynamics, 2nd edition. Academic Press."
    url: null
    note: A gentler route in, with the scaling arguments done explicitly.
  - citation: "Friedman, R. M. (1989). Appropriating the Weather. Cornell University Press."
    url: null
    note: How Bjerknes turned forecasting into physics, and how much of that was institutional politics.
---

## Two Facts That Change Everything

The atmosphere's depth is a quarter of a per cent of its horizontal extent. If it were scaled to the size of a sheet of A4 paper it would be thinner than the paper. The ocean is similar. A fluid in that geometry cannot move vertically as freely as horizontally, and the stable layering of density — warm or fresh water above cold or salty — suppresses what little vertical motion the geometry allows. Both fluids behave as stacks of thin sheets.

The second fact is rotation. {{fig:coriolis|Gaspard-Gustave de Coriolis}} derived, from the mechanics of waterwheels, the extra term that appears when motion is described in a rotating frame. {{fig:ferrel|William Ferrel}} applied it to the winds in 1856, and it explains the gross pattern of the planet's circulation: air rising at the equator and sinking around 30 degrees, deflected into the easterly trade winds and the westerlies, and storms that spin anticlockwise in the north and clockwise in the south.

The deep consequence is not the deflection itself but what it balances against. On a small scale a pressure difference accelerates fluid from high pressure to low. On a large scale the deflection grows until it cancels the pressure gradient entirely, and the flow settles into motion *along* the isobars rather than across them. This geostrophic balance is why a weather map, which shows pressure, can be read directly as a map of wind.

## A Closer Look: Why Weather Systems Are a Thousand Kilometres Across

Three calculations, each a line or two, fix the characteristic scales of the atmosphere.

**The geostrophic wind.** The Coriolis parameter is $f = 2\Omega\sin\varphi$. With the Earth's rotation rate $\Omega = 7.292\times10^{-5}\ \mathrm{s^{-1}}$, at latitude 45°:

$$
f = 2(7.292\times10^{-5})(0.707) = 1.03\times10^{-4}\ \mathrm{s^{-1}}.
$$

Geostrophic balance sets $f V = (1/\rho)\,\partial p/\partial n$. A typical weather map has isobars 1 hPa apart every 100 km, that is $10^{-3}$ Pa/m, and air density is about 1.2 kg/m³:

$$
V = \frac{1}{\rho f}\frac{\partial p}{\partial n} = \frac{10^{-3}}{(1.2)(1.03\times10^{-4})} = 8.1\ \mathrm{m/s}.
$$

About 8 m/s, or 16 knots — which is what such a map's isobar spacing means to a forecaster, derived from nothing but the rotation rate of the planet.

**The Rossby number.** Whether rotation matters at all is the ratio of inertial to Coriolis terms, $\mathrm{Ro} = U/fL$. For a weather system, $U = 10$ m/s and $L = 1000$ km:

$$
\mathrm{Ro} = \frac{10}{(10^{-4})(10^{6})} = 0.1.
$$

Rotation dominates. Now the bath. Water draining from a tub has $U \approx 0.3$ m/s over $L \approx 0.3$ m:

$$
\mathrm{Ro} = \frac{0.3}{(10^{-4})(0.3)} = 10^{4}.
$$

The Coriolis force is ten thousand times too weak to matter, and the direction a bath drains is set by its shape and by how the water was disturbed. The folk claim is wrong by four orders of magnitude, and the Rossby number says exactly how wrong.

**The deformation radius.** The scale at which rotation and stratification balance is $L_R = NH/f$, where $N$ is the buoyancy frequency — the rate at which a displaced parcel oscillates — and $H$ the depth of the fluid. For the atmosphere, $N \approx 10^{-2}\ \mathrm{s^{-1}}$ and $H \approx 10$ km:

$$
L_R = \frac{(10^{-2})(10^{4})}{10^{-4}} = 10^{6}\ \mathrm{m} = 1000\ \mathrm{km}.
$$

That is the size of a weather system, and it is not a coincidence: the instability that creates mid-latitude cyclones grows fastest at this scale, so the atmosphere makes storms a thousand kilometres across because of its depth, its stratification and the rotation rate of the Earth. For the ocean, $N$ is larger but $H$ is smaller and the result is around 50 km, which is why ocean eddies are twenty times smaller than atmospheric ones — and why resolving them in a global model is twenty times harder.

## Forecasting, and Its Limit

{{fig:vilhelm-bjerknes|Vilhelm Bjerknes}} stated the programme in 1904. The atmosphere obeys known equations; measure its present state and integrate. He also knew what stood in the way: enough observations, and an impossible quantity of arithmetic. {{fig:lewis-fry-richardson|Lewis Fry Richardson}} attempted the arithmetic by hand during the First World War, for a single six-hour forecast, and got a pressure change of 145 millibars where the real change was almost nothing — an account of which belongs to [numerical methods for partial differential equations](/math/numerical-pdes/).

{{fig:jule-charney|Jule Charney}} found the reason in 1948, and it was not arithmetic error. The full equations support sound waves and other fast oscillations that carry almost no energy but dominate the rate of change at any instant. Richardson's initial pressures and winds, taken from independent measurements, were not in geostrophic balance with each other, and the imbalance rang the atmosphere like a bell. Charney derived a filtered system — the quasi-geostrophic equations — that keeps the slow weather-bearing motions and removes the fast ones. Those were the equations integrated on the ENIAC in 1950, for the first successful numerical forecast.

Then the programme met a limit of a different kind. {{fig:edward-lorenz|Edward Lorenz}}, studying a drastically simplified convection model, found that trajectories starting from almost identical states diverge exponentially — described under [chaos theory](/math/chaos-theory/). For the atmosphere the doubling time of an error is a day or two, so an initial uncertainty of a per cent becomes total within a fortnight regardless of model quality. This is why forecasts are now issued as ensembles: fifty runs from slightly different initial states, reported as probabilities. The practical skill horizon has moved from about three days in 1980 to nearly ten today, and it cannot be pushed past roughly two weeks.

## From Weather to Climate

The distinction between weather and climate is the distinction between a trajectory and a statistical attractor, and it is why a chaotic system can be unpredictable next month and predictable next century. What cannot be computed is the part of the system below the grid scale. A global climate model has cells tens of kilometres across; a cumulus cloud is a kilometre, and the droplets that determine whether it reflects or traps radiation are microns. Those processes are represented by parameterisations fitted to present-day observations, and the leading uncertainty in how much the planet warms — the open problem above — is whether those fits hold in a climate that has changed.

{{fig:stommel|Henry Stommel}}'s 1961 paper is the other thing this field contributed to that argument, and it required only two boxes and two equations. A circulation driven by both temperature and salinity carries the salinity contrast that drives it, which makes the system self-reinforcing and permits two stable states under identical forcing. A gradual change in forcing can therefore produce an abrupt switch that does not reverse when the forcing does. Whether the Atlantic overturning circulation is near such a threshold is among the most consequential open questions in the earth sciences, and the mathematical structure behind it is the same bistability that [dynamical systems](/math/dynamical-systems/) studies in the abstract.
