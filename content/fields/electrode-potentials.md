---
id: electrode-potentials
domain: chemistry
thread: electrochemistry
name: Electrode Potentials
parent_ids:
  - electrolyte-theory
era_emerged: 1889 – 1945
core_question: What fixes the voltage of a cell, and how can a measured potential be read as a concentration?

summary: |-
  A Daniell cell delivers 1.1 volts and a zinc–silver cell about 1.56. Walther Nernst explained in 1889 where such numbers come from: an electrode's potential is set by the free energy of the reaction occurring at it, and shifts with the logarithm of the concentrations involved. That last clause is the useful one. Run the relation backwards and a voltage becomes a measurement of concentration — which is how a pH meter works, and an ion-selective electrode, and a blood gas analyser.

  The coefficient is a universal constant divided by the charge transferred: at room temperature a tenfold change in concentration shifts a one-electron electrode by 59.2 millivolts, and nothing about the chemistry changes that figure. The practical difficulty is that only *differences* of potential can be measured, so every value is quoted against an agreed reference — the hydrogen electrode, assigned zero by convention. And because potentials say what a reaction will do and not how fast, a second quantity had to be added: the overpotential, the extra voltage a real electrode needs before anything happens at a useful rate, which is where most of the energy in an industrial cell goes.

key_ideas:
  - term: Nernst equation
    definition: >-
      An electrode's potential equals its standard value plus $(RT/nF)\ln$ of the ratio of oxidised to
      reduced species. The logarithm is why a sensor based on it has an enormous dynamic range and a
      correspondingly poor precision.
    turning_point_id: nernst-equation
  - term: Standard electrode potential
    definition: >-
      The potential of a half-reaction measured against the hydrogen electrode, which is defined as zero.
      Tabulated for hundreds of couples, these numbers say which reactions are possible, in what
      direction, and with what maximum voltage.
    turning_point_id: standard-electrode-scale
  - term: Fifty-nine millivolts per decade
    definition: >-
      $(RT/F)\ln 10 = 59.2$ mV at 25 °C. The slope of every one-electron potentiometric measurement,
      fixed by constants of nature rather than by the electrode, and halved for a two-electron couple.
    turning_point_id: nernst-equation
  - term: Overpotential
    definition: >-
      The voltage beyond the thermodynamic requirement that an electrode needs in order to pass a useful
      current. It is kinetic, it rises with the logarithm of the current, and in industrial electrolysis
      it is where most of the electricity bill goes.
    turning_point_id: butler-volmer-kinetics
  - term: Potential–pH diagram
    definition: >-
      A map, for a given element and solvent, of which species is stable at each combination of potential
      and acidity. It says at a glance whether a metal will dissolve, stay inert, or coat itself in an
      oxide.
    turning_point_id: pourbaix-diagrams
  - term: Ion-selective electrode
    definition: >-
      A membrane that responds to one ion far more than to others, so that the potential across it reads
      that ion's activity. The glass electrode for hydrogen is the original, and the design extends to
      sodium, potassium, calcium, fluoride and nitrate.
    turning_point_id: glass-electrode-ph-meter

turning_points:
  - id: nernst-equation
    date: "1889"
    type: MECHANISM-ESTABLISHED
    title: The Nernst equation
    description: >-
      Walther Nernst derives the potential of an electrode from the thermodynamics of the reaction
      occurring at it, obtaining a standard term plus a logarithmic dependence on the concentrations of
      the species involved. The equation accounts for the voltages of known cells, for how they change on
      dilution, and for the potential of a concentration cell in which the two half-cells differ in
      nothing but concentration. It also makes a voltmeter into a concentration meter, which turned out
      to be its largest consequence.
    contested: false
    sources:
      - citation: "Nernst, W. (1889). Die elektromotorische Wirksamkeit der Ionen. Zeitschrift für Physikalische Chemie 4: 129–181."
        url: null
      - citation: "Barnett, M. K. (1950). The development of thermodynamics in electrochemistry. Journal of Chemical Education 27: 318–324."
        url: null

  - id: standard-electrode-scale
    date: 1890 – 1953
    type: TECHNIQUE-INVENTED
    title: A scale with an arbitrary zero
    description: >-
      Only a difference of potential between two electrodes can be measured, so a single half-reaction has
      no measurable potential at all. The solution is a convention: define the hydrogen electrode under
      standard conditions as zero and quote everything against it. A long argument about the sign
      convention — whether a potential describes reduction or oxidation — produced two incompatible
      literatures until the 1953 Stockholm agreement settled on reduction potentials, which is why older
      papers must be read with care.
    contested: true
    contested_note: >-
      The absolute potential of an electrode, relative to an electron at rest in vacuum, cannot be
      measured by any electrochemical experiment, and the accepted figure for the hydrogen electrode —
      about 4.44 V — rests on extra-thermodynamic assumptions. The sign convention was genuinely
      disputed for decades, with American and European tables carrying opposite signs for the same
      couple.
    sources:
      - citation: "Trasatti, S. (1986). The absolute electrode potential: an explanatory note. Pure and Applied Chemistry 58: 955–966."
        url: null
      - citation: "Licht, S. (1985). Sign conventions in electrochemistry. Journal of Chemical Education 62: 1038."
        url: null

  - id: heyrovsky-polarography
    date: 1922 – 1959
    type: TECHNIQUE-INVENTED
    title: Polarography
    description: >-
      Jaroslav Heyrovský uses a dropping mercury electrode — a fresh drop every few seconds, so the
      surface is never contaminated — and records current against applied potential. Each reducible
      species produces a step whose position identifies it and whose height measures its concentration,
      down to micromolar. It was the first instrumental method that both identified and quantified
      several species in one run, it became the standard trace-metal analysis for forty years, and it
      earned the 1959 Nobel Prize in Chemistry.
    contested: false
    sources:
      - citation: "Heyrovský, J. (1922). Elektrolysa se rtuťovou kapkovou kathodou. Chemické Listy 16: 256–264."
        url: null
      - citation: "Zuman, P. (2001). Eighty years of polarography. Electroanalysis 13: 1023–1030."
        url: null

  - id: butler-volmer-kinetics
    date: 1924 – 1930
    type: MECHANISM-ESTABLISHED
    title: Overpotential, and the rate of an electrode reaction
    description: >-
      Thermodynamics gives the voltage at which a reaction becomes possible and says nothing about
      whether it proceeds. John Butler and Max Volmer treat the electron transfer as an activated process
      whose barrier is lowered by the applied potential, so that the current rises exponentially with
      overpotential — the relation Julius Tafel had found empirically in 1905. Electrode reactions
      therefore have their own kinetics, with an exchange current that varies over ten orders of
      magnitude between metals, which is why hydrogen evolves readily on platinum and hardly at all on
      mercury.
    contested: false
    sources:
      - citation: "Butler, J. A. V. (1924). Studies in heterogeneous equilibria. Transactions of the Faraday Society 19: 729–733."
        url: null
      - citation: "Erdey-Grúz, T. & Volmer, M. (1930). Zur Theorie der Wasserstoffüberspannung. Zeitschrift für Physikalische Chemie 150: 203–213."
        url: null

  - id: glass-electrode-ph-meter
    date: 1909 – 1936
    type: TECHNIQUE-INVENTED
    title: The pH meter
    description: >-
      Fritz Haber and Zygmunt Klemensiewicz find that a thin glass membrane develops a potential
      proportional to the hydrogen ion activity difference across it. The signal is useless without an
      amplifier, because the glass has a resistance of hundreds of megohms, and the instrument therefore
      waited for the vacuum tube: Arnold Beckman built a rugged valve-amplified meter in 1934 for a
      citrus chemist who needed to measure the acidity of lemon juice, and founded a company on it. It is
      among the most used instruments in science.
    contested: false
    sources:
      - citation: "Haber, F. & Klemensiewicz, Z. (1909). Über elektrische Phasengrenzkräfte. Zeitschrift für Physikalische Chemie 67: 385–431."
        url: null
      - citation: "Beckman, A. O. (1935). Apparatus for testing acidity. US Patent 2,058,761."
        url: null

  - id: pourbaix-diagrams
    date: 1938 – 1945
    type: TECHNIQUE-INVENTED
    title: Pourbaix maps the stable species
    description: >-
      Marcel Pourbaix, working through the war in occupied Belgium, computes for element after element
      which species is thermodynamically stable at each combination of electrode potential and pH, and
      plots the results as maps with regions labelled corrosion, immunity and passivity. The diagrams say
      at a glance whether iron will dissolve, stay metallic or coat itself in a protective oxide, and they
      became the standard tool of corrosion engineering, geochemistry and hydrometallurgy.
    contested: false
    sources:
      - citation: "Pourbaix, M. (1945). Thermodynamique des Solutions Aqueuses Diluées. Béranger, Paris."
        url: null
      - citation: "Pourbaix, M. (1974). Atlas of Electrochemical Equilibria in Aqueous Solutions, 2nd edition. NACE."
        url: null

open_problems:
  - id: overpotential-from-first-principles
    name: Predicting an overpotential before building the electrode
    status: open
    status_note: Open as of 2026; scaling relations appear to impose a floor on the oxygen reactions that no catalyst has broken.
    description: >-
      The oxygen evolution and reduction reactions, which limit electrolysers and fuel cells, require
      roughly 0.3 to 0.4 volts more than thermodynamics demands, on every catalyst known. Computation has
      traced the limit to a correlation: the binding energies of the intermediates are not independent, so
      strengthening the one that needs strengthening weakens another, and the optimum is bounded well away
      from zero. Whether the correlation can be broken by catalysts that bind intermediates at different
      sites is unresolved.
    why_hard: >-
      Four electrons and four protons must be transferred in sequence, through three intermediates whose
      binding energies are linked by their shared chemistry. Calculated binding energies carry errors of a
      few tenths of an electronvolt, which is the size of the quantity being predicted, and the surface
      under working conditions is often not the material that was computed.
    unlocks: >-
      Hydrogen from water, and every electrochemical route to a fuel or a feedstock, loses a quarter or
      more of its input energy to these overpotentials. Removing half of it would change the economics of
      storing renewable electricity as chemistry.
    sources:
      - citation: "Nørskov, J. K. et al. (2004). Origin of the overpotential for oxygen reduction at a fuel-cell cathode. Journal of Physical Chemistry B 108: 17886–17892."
        url: null
      - citation: "Seh, Z. W. et al. (2017). Combining theory and experiment in electrocatalysis. Science 355: eaad4998."
        url: null

applications:
  - area: Clinical and field measurement
    title: A voltage that reads a concentration
    description: >-
      Blood pH, sodium, potassium and calcium are measured potentiometrically, with one ion-selective
      electrode per analyte and a reference electrode, in instruments that need microlitres and report in
      seconds. The same principle gives the fluoride electrode used to check drinking water and the
      dissolved-oxygen probe used in rivers and fermenters.
    sources:
      - citation: "Bakker, E. & Pretsch, E. (2005). Potentiometric sensors for trace-level analysis. Trends in Analytical Chemistry 24: 199–207."
        url: null
  - area: Corrosion engineering
    title: Reading a Pourbaix diagram before choosing a metal
    description: >-
      Whether a metal survives in a given environment is a question about where that environment sits on
      the metal's potential–pH map. Iron is immune in strongly alkaline water, passive in a narrow band,
      and corrodes over most of the rest; aluminium passivates near neutral and dissolves in both strong
      acid and strong alkali, which is why aluminium cookware and caustic cleaners do not mix.
    sources:
      - citation: "Pourbaix, M. (1974). Atlas of Electrochemical Equilibria in Aqueous Solutions, 2nd edition. NACE."
        url: null
  - area: Geochemistry
    title: Oxidation state as an environmental variable
    description: >-
      The potential of natural water, together with its pH, determines which oxidation state of iron,
      manganese, uranium or arsenic is stable, and therefore whether the element is dissolved and mobile
      or precipitated and immobile. Ore deposits, the chemistry of waterlogged soils and the behaviour of
      contaminants in groundwater are all read from these two coordinates.
    sources:
      - citation: "Stumm, W. & Morgan, J. J. (1996). Aquatic Chemistry, 3rd edition. Wiley."
        url: null

further_reading:
  - citation: "Bard, A. J. & Faulkner, L. R. (2001). Electrochemical Methods, 2nd edition. Wiley."
    url: null
    note: The standard reference on potentials, kinetics and every electroanalytical technique.
  - citation: "Trasatti, S. (1986). The absolute electrode potential: an explanatory note. Pure and Applied Chemistry 58: 955–966."
    url: null
    note: Why the scale has a conventional zero, and what the absolute value would mean.
  - citation: "Compton, R. G. & Banks, C. E. (2018). Understanding Voltammetry, 3rd edition. World Scientific."
    url: null
    note: Modern, practical, and clear about the difference between thermodynamic and kinetic limits.
---

## Where the Voltage Comes From

A Daniell cell gives 1.1 volts. The number is reproducible to a millivolt, it does not depend on the size of the electrodes, and before 1889 nobody could say what determined it.

{{fig:walther-nernst|Walther Nernst}} derived it from thermodynamics. The electrical work a cell can do is the free energy change of its reaction, so the voltage is that free energy divided by the charge transferred. And because the free energy depends on concentrations, so does the voltage:

$$
E = E^{\circ} - \frac{RT}{nF}\ln\frac{[\text{reduced}]}{[\text{oxidised}]}.
$$

The standard term is a property of the couple, tabulated once. The logarithmic term is the useful part, because it can be read backwards: measure the voltage and you have measured a concentration.

Nernst's equation also predicted something that sounds impossible — a cell made of two identical electrodes in the same solution at different concentrations produces a voltage, with no net chemistry at all except the transfer of material from the concentrated side to the dilute. Such concentration cells work, they are the basis of every ion-selective electrode, and they are how a nerve cell stores energy, which is the subject of [electrophysiology](/biology/electrophysiology/).

## A Closer Look: Fifty-Nine Millivolts, and What They Cost in Precision

Convert the Nernst equation to base-ten logarithms and the coefficient becomes a number worth committing to memory. At 25 °C,

$$
\frac{RT}{F}\ln 10 = \frac{(8.314)(298.15)}{96485} \times 2.303 = 0.02569 \times 2.303 = 0.0592 \text{ V}.
$$

So for a one-electron electrode, a **tenfold** change in concentration moves the potential by **59.2 mV**, and for a two-electron couple by half that. Nothing about the electrode, the solvent or the ion alters this; it follows from the gas constant, the temperature and Faraday's constant.

That is why a pH meter reads what it reads. A glass electrode responds to hydrogen ion activity, each pH unit is a factor of ten, and the instrument is therefore a voltmeter with a scale of 59.2 mV per pH unit — which is exactly what the slope control on the back of the meter is calibrating when it is standardised against two buffers.

The logarithm has a second consequence, less often stated. Differentiating, a voltage error $\delta E$ corresponds to a relative concentration error

$$
\frac{\delta c}{c} = \frac{nF}{RT}\,\delta E \approx 3.9\% \text{ per millivolt}
$$

for a one-electron couple. A measurement good to 1 mV — which requires care, since reference electrodes drift and junction potentials wander by that much — gives a concentration good to about 4%. A measurement good to 0.1 mV gives 0.4%, and nobody achieves that outside a metrology laboratory.

So potentiometry trades precision for range. Across fourteen pH units, spanning a hundred million million in concentration, the instrument's output moves by only 830 mV, and every millivolt of error costs four per cent. For comparison, a spectrophotometric method has a range of perhaps three orders of magnitude and can reach a fraction of a per cent. The electrode wins when the range matters and loses when the accuracy does, which is precisely why clinical chemistry uses potentiometry for pH and sodium — quantities that vary over a narrow range about a known value — with the slope taken from the equation rather than from a calibration curve.

One further number fixes the industrial picture. At equilibrium the Nernst equation says what voltage a reaction needs. It says nothing about rate, and a real electrode passing a useful current requires more — the **overpotential**. {{fig:butler|John Butler}} and {{fig:volmer|Max Volmer}} showed that the current rises exponentially with it, so the overpotential rises logarithmically with the current: for hydrogen evolution, about 30 mV per decade of current on platinum and 120 mV per decade on mercury. In a water electrolyser the thermodynamic requirement is 1.23 V and a working cell runs at 1.8 to 2.0 V, so a third of the electricity is paid to the kinetics rather than to the chemistry. That gap, and in particular its oxygen half, is the open problem recorded above.

## Instruments Built on One Equation

Three instruments came out of this, and between them they account for a large share of all chemical measurement ever performed.

{{fig:heyrovsky|Jaroslav Heyrovský}}'s polarograph, from 1922, uses an electrode made of mercury dripping from a capillary, so that each measurement is made on a surface a few seconds old and nothing accumulates on it. Sweeping the potential and recording the current gives a series of steps, one per reducible species, positioned by identity and sized by concentration. It was the first instrument that could identify and quantify several metals in one run at micromolar levels, and it dominated trace analysis for decades.

The pH meter required an amplifier before it could exist. {{fig:haber|Fritz Haber}} and {{fig:klemensiewicz|Zygmunt Klemensiewicz}} established in 1909 that a thin glass membrane develops a potential proportional to the difference in hydrogen ion activity across it — but glass thin enough to respond has a resistance of hundreds of megohms, which no galvanometer can read without loading the signal to nothing. {{fig:beckman|Arnold Beckman}} solved it in 1934 with vacuum tubes, in a sealed and portable box, because a chemist at the California Fruit Growers Exchange needed to measure the acidity of lemon juice. The company he founded on it supplied much of the instrumentation of twentieth-century chemistry.

{{fig:pourbaix|Marcel Pourbaix}}'s contribution was not an instrument but a map. For each element he computed which species is thermodynamically stable at every combination of potential and pH, and drew the regions: where the metal itself is stable, where it dissolves, where it coats itself in an oxide. A glance at the diagram for iron shows why it rusts in most of the ordinary world and is protected in concrete, whose pore water is strongly alkaline. The diagrams were worked out in occupied Belgium during the war and are still the first thing a corrosion engineer consults — which is where this thread goes next, in [corrosion](/chemistry/corrosion/).
