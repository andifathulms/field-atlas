---
id: general-relativity
domain: physics
thread: relativity
name: General Relativity
parent_ids:
  - special-relativity
  - classical-mechanics
era_emerged: 1907 – 1915
core_question: What is gravity, if it is not a force?

summary: |-
  General relativity is Einstein's theory of gravity. Mass and energy curve the four-dimensional spacetime around them, and objects in free fall simply follow the straightest possible paths through that curved geometry. The Earth orbits the Sun not because a force pulls it, but because the Sun has bent the spacetime it moves through.

  It explains what Newton's gravity got slightly wrong, like Mercury's orbit and the bending of starlight, and predicts things Newton's never could: black holes, gravitational waves, and clocks that tick at different rates at different heights. It is also where physics' map most plainly runs out, at the centre of a black hole and at the beginning of time.

key_ideas:
  - term: Equivalence principle
    definition: >-
      Locally, gravity cannot be told apart from acceleration. In a freely falling
      lift you float as if gravity were switched off. Gravity is therefore a property
      of spacetime, not a force acting within it.
    turning_point_id: equivalence-principle
  - term: Curved spacetime
    definition: >-
      Spacetime is a four-dimensional curved (pseudo-Riemannian) manifold whose metric $g_{\mu\nu}$
      is shaped by matter and energy. Its curvature *is* gravity.
    turning_point_id: einstein-field-equations
  - term: Einstein field equations
    definition: >-
      $G_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}$: the curvature of spacetime (left)
      equals its content of mass, energy and momentum (right). "Spacetime tells matter
      how to move; matter tells spacetime how to curve" (Wheeler).
    turning_point_id: einstein-field-equations
  - term: Event horizon
    definition: >-
      The boundary of a black hole: a surface in spacetime from inside which not even
      light can escape. For a non-rotating mass $M$ it lies at the Schwarzschild radius
      $r_s = 2GM/c^2$.
    turning_point_id: schwarzschild-solution
  - term: Gravitational waves
    definition: >-
      Ripples in the curvature of spacetime itself, emitted by accelerating masses and
      travelling at the speed of light. They stretch and squeeze space as they pass.
    turning_point_id: ligo-gravitational-waves

turning_points:
  - id: equivalence-principle
    date: "1907"
    type: DISCOVERY
    title: Einstein's "happiest thought"
    description: >-
      Writing a review of relativity, Einstein realises that a person falling freely
      would not feel their own weight. Gravity and acceleration are locally the same
      thing. He deduces at once that light should bend in a gravitational field and that
      clocks lower down should run slower.
    contested: false
    sources:
      - citation: "Einstein, A. (1907). Über das Relativitätsprinzip und die aus demselben gezogenen Folgerungen. Jahrbuch der Radioaktivität und Elektronik 4: 411–462."
        url: null

  - id: einstein-field-equations
    date: "1915"
    type: THEORY-REPLACED
    title: The field equations of gravitation
    description: >-
      After eight years, a false start, and the help of his friend Marcel Grossmann in
      learning Riemannian geometry and tensor calculus, Einstein presents the final
      field equations to the Prussian Academy on 25 November 1915. A week earlier he had
      shown that his theory accounts exactly for the 43 arcseconds per century of
      Mercury's orbit that Newton could not. Newton's gravity is replaced.
    contested: true
    contested_note: >-
      David Hilbert submitted a paper on 20 November 1915, five days before Einstein's
      final paper, deriving gravitational field equations from a variational principle,
      and priority was long attributed to him or shared. In 1997 Corry, Renn and Stachel
      reported printer's proofs of Hilbert's paper, dated 6 December, that do not show
      the explicit field equations, which suggests he added them after seeing Einstein's.
      Others point out that part of the proofs has been cut away and dispute that
      conclusion. That Einstein created the physical theory is not in doubt.
    sources:
      - citation: "Einstein, A. (1915). Die Feldgleichungen der Gravitation. Sitzungsberichte der Königlich Preußischen Akademie der Wissenschaften: 844–847."
        url: null
      - citation: "Corry, L., Renn, J. & Stachel, J. (1997). Belated decision in the Hilbert–Einstein priority dispute. Science 278(5341): 1270–1273."
        url: null

  - id: schwarzschild-solution
    date: "1916"
    type: DISCOVERY
    title: Schwarzschild's exact solution
    description: >-
      Serving on the Russian front, Karl Schwarzschild finds the exact spacetime around a
      spherical mass within weeks of Einstein's paper. It contains a radius at which the
      mathematics breaks down. Only decades later was that recognised as the event
      horizon of what John Wheeler would popularise as a "black hole". Schwarzschild
      died in 1916 of an illness contracted at the front.
    contested: false
    sources:
      - citation: "Schwarzschild, K. (1916). Über das Gravitationsfeld eines Massenpunktes nach der Einsteinschen Theorie. Sitzungsberichte der Königlich Preußischen Akademie der Wissenschaften: 189–196."
        url: null

  - id: eclipse-1919
    date: "1919"
    type: EXPERIMENT
    title: The eclipse expeditions measure starlight bending
    description: >-
      British expeditions to Sobral in Brazil and the island of Príncipe photograph stars
      near the Sun during a total eclipse. The shifts favour Einstein's predicted
      deflection of 1.75 arcseconds over the Newtonian half-value. The announcement in
      November makes Einstein world famous overnight.
    contested: true
    contested_note: >-
      Whether the data justified the conclusion is disputed. Earman and Glymour (1980)
      argued that Eddington and Dyson discarded unfavourable plates from one instrument
      in a way that suggested bias. Kennefick (2009) and others have since argued that
      the choices were reasonable on technical grounds, and a 1979 re-analysis of the
      plates supported Einstein's value. Later radio measurements confirmed the
      prediction to high precision.
    sources:
      - citation: "Dyson, F. W., Eddington, A. S. & Davidson, C. (1920). A determination of the deflection of light by the Sun's gravitational field, from observations made at the total eclipse of May 29, 1919. Philosophical Transactions of the Royal Society A 220: 291–333."
        url: null
      - citation: "Earman, J. & Glymour, C. (1980). Relativity and eclipses: the British eclipse expeditions of 1919 and their predecessors. Historical Studies in the Physical Sciences 11(1): 49–85."
        url: null
      - citation: "Kennefick, D. (2009). Testing relativity from the 1919 eclipse — a question of bias. Physics Today 62(3): 37–42."
        url: null

  - id: ligo-gravitational-waves
    date: 2015 – 2016
    type: EXPERIMENT
    title: Gravitational waves are detected directly
    description: >-
      On 14 September 2015 the two LIGO detectors in the United States register a
      passing ripple in spacetime from two black holes merging about 1.3 billion light
      years away. It changed their four-kilometre arms by a small fraction of a proton's
      width. It was the first direct detection of gravitational waves and the first
      observation of a black-hole pair. Rainer Weiss, Barry Barish and Kip Thorne shared
      the 2017 Nobel Prize.
    contested: false
    sources:
      - citation: "Abbott, B. P. et al. (LIGO Scientific Collaboration and Virgo Collaboration) (2016). Observation of gravitational waves from a binary black hole merger. Physical Review Letters 116: 061102."
        url: https://doi.org/10.1103/PhysRevLett.116.061102

  - id: eht-black-hole-image
    date: "2019"
    type: EXPERIMENT
    title: The first image of a black hole's shadow
    description: >-
      The Event Horizon Telescope, a planet-sized array of radio dishes, images the ring
      of light around the black hole at the centre of the galaxy M87. Its size matches
      general relativity's prediction for a mass of about 6.5 billion Suns.
    contested: false
    sources:
      - citation: "Event Horizon Telescope Collaboration (2019). First M87 Event Horizon Telescope results. I. The shadow of the supermassive black hole. Astrophysical Journal Letters 875: L1."
        url: null

open_problems:
  - id: quantum-gravity
    name: Quantum gravity
    status: open
    status_note: No accepted theory as of 2026; candidates include string theory and loop quantum gravity.
    description: >-
      General relativity treats spacetime as smooth and definite. Quantum theory, which
      describes everything else, treats all physical quantities as uncertain and
      fluctuating. Near a black hole's singularity or at the Big Bang both must apply,
      and no one knows how to combine them.
    why_hard: >-
      Applying the standard quantum methods to gravity produces infinities that cannot
      be tamed. The candidate theories are mathematically demanding, differ on what
      spacetime fundamentally is, and make predictions at the Planck scale, roughly
      $10^{-35}$ m, far beyond any foreseeable experiment.
    unlocks: >-
      It would explain what happens inside black holes and at the beginning of the
      universe, and might reveal what space and time are made of.
    sources:
      - citation: "Rovelli, C. (2004). Quantum Gravity. Cambridge University Press."
        url: null
      - citation: "Polchinski, J. (1998). String Theory (2 vols.). Cambridge University Press."
        url: null

  - id: black-hole-information
    name: The black hole information paradox
    status: open
    status_note: Recent calculations suggest information does escape, but how is still debated as of 2026.
    description: >-
      Hawking showed in 1974–76 that black holes slowly evaporate by emitting radiation
      that appears perfectly random. If a black hole evaporates completely, the
      information about what fell in seems to be destroyed. Quantum mechanics forbids
      that.
    why_hard: >-
      The paradox sits exactly where general relativity and quantum theory meet, and
      each proposed resolution gives up something cherished: locality, smooth horizons,
      or quantum unitarity. Calculations since 2019 reproduce the expected release of
      information, but without a full theory of quantum gravity the mechanism is unclear.
    unlocks: >-
      Resolving it is widely seen as the best route to quantum gravity, and to
      understanding how spacetime might emerge from quantum information.
    sources:
      - citation: "Hawking, S. W. (1976). Breakdown of predictability in gravitational collapse. Physical Review D 14: 2460–2473."
        url: null
      - citation: "Almheiri, A., Hartman, T., Maldacena, J., Shaghoulian, E. & Tajdini, A. (2021). The entropy of Hawking radiation. Reviews of Modern Physics 93: 035002."
        url: null

  - id: cosmic-censorship
    name: Cosmic censorship
    status: conjectured
    status_note: Proposed by Penrose in 1969; unproven in general.
    description: >-
      General relativity predicts singularities, points where curvature becomes infinite
      and the theory breaks down. Roger Penrose conjectured that realistic collapse
      always hides them behind event horizons, so no "naked" singularity is ever
      visible to the outside universe.
    why_hard: >-
      It is a statement about all possible solutions of nonlinear equations with generic
      starting conditions. Special counterexamples exist, so any proof must show that
      they are unstable and non-generic. The mathematics is at the frontier of geometric
      analysis.
    unlocks: >-
      It would guarantee that general relativity remains predictive outside black holes.
      Its sharper cousin, the Penrose inequality, is an open problem in the mathematics
      survey.
    sources:
      - citation: "Penrose, R. (1969). Gravitational collapse: the role of general relativity. Rivista del Nuovo Cimento 1: 252–276."
        url: null

applications:
  - area: Navigation
    title: GPS clocks correct for gravity
    description: >-
      Clocks on GPS satellites, higher up in Earth's gravity, run about 45 microseconds a
      day fast compared with the ground, partly offset by 7 microseconds of
      special-relativistic slowing. Without the correction, position fixes would drift
      by kilometres a day.
    sources:
      - citation: "Ashby, N. (2003). Relativity in the Global Positioning System. Living Reviews in Relativity 6: 1."
        url: https://doi.org/10.12942/lrr-2003-1
  - area: Geodesy
    title: Measuring height with clocks
    description: >-
      Today's best optical atomic clocks are so precise that raising one by about 30
      centimetres measurably speeds it up, as general relativity predicts. Comparing
      clocks can map Earth's gravity field and heights, a technique called relativistic
      geodesy.
    sources:
      - citation: "Chou, C. W., Hume, D. B., Rosenband, T. & Wineland, D. J. (2010). Optical clocks and relativity. Science 329(5999): 1630–1633."
        url: null
  - area: Astronomy
    title: Gravitational lenses as cosmic telescopes
    description: >-
      Massive galaxy clusters bend light from galaxies behind them, magnifying objects
      too faint to see otherwise and revealing the invisible mass doing the bending.
      Lensing is one of the main ways dark matter is mapped, and small-scale lensing
      finds planets around other stars.
    sources:
      - citation: "Clowe, D. et al. (2006). A direct empirical proof of the existence of dark matter. Astrophysical Journal Letters 648: L109–L113."
        url: null
  - area: Astrophysics
    title: Where gold comes from
    description: >-
      In 2017 gravitational waves from two merging neutron stars were caught together
      with light from the explosion. The spectra showed freshly made heavy elements,
      confirming that such mergers forge much of the universe's gold and platinum.
    sources:
      - citation: "Abbott, B. P. et al. (2017). GW170817: Observation of gravitational waves from a binary neutron star inspiral. Physical Review Letters 119: 161101."
        url: null

further_reading:
  - citation: "Thorne, K. S. (1994). Black Holes and Time Warps: Einstein's Outrageous Legacy. W. W. Norton."
    url: null
    note: A Nobel laureate's popular history of relativity and black holes. No equations needed.
  - citation: "Hartle, J. B. (2003). Gravity: An Introduction to Einstein's General Relativity. Addison-Wesley."
    url: null
    note: A physics-first undergraduate textbook that gets to black holes and GPS before the heavy mathematics.
  - citation: "Misner, C. W., Thorne, K. S. & Wheeler, J. A. (1973). Gravitation. W. H. Freeman."
    url: null
    note: The encyclopaedic classic. Huge and demanding, and still a reference.
---

## The Happiest Thought

[Special relativity](/physics/special-relativity/) left gravity out. Newton's gravity acts instantly across space, but after 1905 nothing, not even an influence, could outrun light. In 1907, writing a review article, {{fig:einstein|Einstein}} had what he later called the happiest thought of his life. A person falling off a roof would not feel their own weight. In free fall, gravity disappears.

That makes gravity unlike any other force. Every object falls with the same acceleration regardless of what it is made of, as [Galileo](/physics/classical-mechanics/) had found, so gravity cannot be a force that acts on some property of the object. It must be a property of the space and time the object moves through. Einstein immediately drew consequences: light must bend near massive bodies, and clocks lower in a gravitational field must run slower.

## Gravity Is Geometry

Turning the idea into a theory took eight years and mathematics Einstein did not know. His friend {{fig:grossmann|Marcel Grossmann}} pointed him to [Riemannian geometry](/math/riemannian-geometry/) and the tensor calculus of Ricci and Levi-Civita: the mathematics of curved spaces described entirely from the inside. Spacetime would be a four-dimensional curved manifold, and objects in free fall would follow its geodesics, the straightest possible paths.

After a false start in 1913 and a frantic November of 1915, he had it:

$$
G_{\mu\nu} = \frac{8\pi G}{c^4}\,T_{\mu\nu} .
$$

The left side measures the curvature of spacetime. The right side measures the mass, energy and momentum present. In John Wheeler's summary, spacetime tells matter how to move, and matter tells spacetime how to curve. The week before, Einstein had used his equations to calculate Mercury's orbit and found exactly the 43 arcseconds per century that had defeated Newtonian astronomy since 1859. He wrote that he was beside himself with joy for days.

{{fig:hilbert|David Hilbert}}, working in parallel, submitted a derivation of gravitational field equations five days earlier, and the question of who reached the final equations first has been argued ever since.

## Tests from the Sky

The prediction that starlight bends near the Sun could be checked only during a total eclipse. In 1919 {{fig:eddington|Arthur Eddington}} and Frank Dyson sent expeditions to Brazil and West Africa, and the measured shifts favoured Einstein's value over the Newtonian one. The announcement made Einstein a household name. Whether the eclipse data alone justified such confidence has been debated by historians since, but decades of later tests, from radar echoes off planets to clocks in towers and satellites, have confirmed the theory to high precision.

## Black Holes and Ripples

Within weeks of the final equations, {{fig:schwarzschild|Karl Schwarzschild}}, writing from the First World War's eastern front, found their exact solution around a single mass. It contained a spherical surface where the equations misbehaved. For decades most physicists, Einstein included, believed nature would never produce such a thing. By the 1960s it was clear that sufficiently massive collapsing stars must, and Wheeler popularised the name *black hole*.

The theory also predicts that accelerating masses shake spacetime itself, sending out gravitational waves. Einstein doubted they could ever be detected. In 2015 the two LIGO observatories, whose four-kilometre laser arms change length by a small fraction of a proton's width, caught the waves from two black holes merging over a billion light years away. In 2019 the Event Horizon Telescope photographed the glowing ring around a black hole's shadow.

## A Closer Look: Forty-Three Seconds of Arc

Newton's gravity predicts that a single planet orbiting the Sun traces the same ellipse forever. In reality Mercury's ellipse slowly turns, its closest point to the Sun advancing by 574 arcseconds per century. The pulls of the other planets account for 531. The remaining 43 arcseconds per century, about a hundredth of a degree, was unexplained from 1859 until 1915.

General relativity predicts that any orbit around a mass $M$ turns a little each lap, by the angle

$$
\Delta\phi = \frac{6\pi G M}{c^2 a (1 - e^2)} ,
$$

where $a$ is the orbit's average radius and $e$ its eccentricity. For Mercury, $a = 5.79 \times 10^{10}$ m and $e = 0.206$. With the Sun's $GM = 1.327 \times 10^{20}$ m³/s² and $c = 3.00 \times 10^8$ m/s:

$$
\Delta\phi = \frac{6\pi \times 1.327 \times 10^{20}}{(3.00 \times 10^8)^2 \times 5.79 \times 10^{10} \times (1 - 0.206^2)} \approx 5.0 \times 10^{-7} \text{ radians per orbit} .
$$

Mercury completes an orbit every 88 days, about 415 times a century. Converting radians to arcseconds (one radian is 206,265 arcseconds):

$$
5.0 \times 10^{-7} \times 415 \times 206{,}265 \approx 43 \text{ arcseconds per century} .
$$

Einstein found this number in November 1915 with no adjustable constants, and wrote that he was beside himself with joy for days.

The same theory predicts how much starlight bends grazing the Sun: $4GM/(c^2 R)$, where $R$ is the Sun's radius, about 1.75 arcseconds. That is twice what a Newtonian argument gives, which is why the 1919 eclipse could tell the two apart. Both effects are tiny because $GM/c^2$ for the Sun is only 1.5 km, compared with distances of tens of millions of kilometres. Where that ratio is not small, near black holes, the theory's effects dominate.

## Where the Map Runs Out

General relativity predicts its own breakdown. In 1965 Roger Penrose proved that under very general conditions collapse produces a *singularity*, where curvature becomes infinite and the equations stop making sense. The universe's own beginning is another. At those points gravity and quantum physics must be combined, and no one knows how. Whether singularities always hide behind horizons is Penrose's cosmic censorship conjecture, a problem now pursued as much by [geometric analysts](/math/geometric-analysis/) as by physicists.

Applied to the universe as a whole, the theory gave birth to a new science. That is [physical cosmology](/physics/physical-cosmology/).
