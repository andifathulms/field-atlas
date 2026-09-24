---
id: superconductivity
domain: physics
thread: matter
name: Superconductivity
parent_ids:
  - solid-state-physics
  - phase-transitions
era_emerged: 1911 – 1957
core_question: Why do some materials lose all electrical resistance when cooled, and how warm can that state survive?

summary: |-
  In 1911 mercury cooled with liquid helium lost its electrical resistance completely, not gradually but suddenly, at 4.2 degrees above absolute zero. A current set flowing in a superconducting ring flows for years without a battery. In 1933 superconductors were also found to expel magnetic fields, which showed that superconductivity is a new phase of matter, not just perfect conduction.

  It took 46 years and most of the great theorists of the century to explain it. The answer, given by Bardeen, Cooper and Schrieffer in 1957, is that electrons bind into pairs that move together as a single quantum state. Then in 1986 a family of copper oxides was found to superconduct at far higher temperatures, and the mechanism behind them is still debated. Claims of superconductivity at room temperature have appeared many times. The best-known recent ones have been retracted, and a 2025 claim at enormous pressure still awaits independent confirmation.

key_ideas:
  - term: Zero resistance
    definition: >-
      Below a critical temperature $T_c$, a superconductor carries current with no
      measurable loss. Currents in superconducting rings have run for years without
      detectable decay.
    turning_point_id: supercond-onnes-mercury
  - term: Meissner effect
    definition: >-
      A superconductor pushes magnetic field out of its interior. This is why a magnet can
      float above one, and it shows that superconductivity is a thermodynamic phase.
    turning_point_id: supercond-meissner-effect
  - term: Cooper pair
    definition: >-
      Two electrons bound together by their interaction with vibrations of the lattice.
      All the pairs share one quantum state, which is why they can flow without scattering.
    turning_point_id: supercond-bcs-theory
  - term: Energy gap
    definition: >-
      The energy needed to break a Cooper pair. BCS theory predicts it at zero temperature
      as $\Delta = 1.764\, k_B T_c$ for weakly coupled superconductors.
    turning_point_id: supercond-bcs-theory
  - term: Josephson effect
    definition: >-
      Cooper pairs tunnel through a thin insulating barrier between two superconductors,
      producing currents and voltages fixed by fundamental constants.
    turning_point_id: supercond-josephson-effect

turning_points:
  - id: supercond-onnes-mercury
    date: "1911"
    type: EXPERIMENT
    title: Resistance vanishes
    description: >-
      Heike Kamerlingh Onnes's laboratory in Leiden, the only place in the world able to
      liquefy helium, measures the resistance of frozen mercury. Near 4.2 kelvin it drops
      abruptly to nothing measurable. Onnes called the new state supraconductivity and
      soon found it in tin and lead. He received the 1913 Nobel prize for his work at low
      temperatures.
    contested: true
    contested_note: >-
      The measurements were made with Gilles Holst, a young assistant, Cornelis Dorsman
      controlled the temperatures, and the helium apparatus was run by the chief technician
      Gerrit Flim. Onnes published under his own
      name, and historians have debated how much of the discovery should be credited to
      Holst, who is mentioned only in passing.
    sources:
      - citation: "Kamerlingh Onnes, H. (1911). The resistance of pure mercury at helium temperatures. Communications from the Physical Laboratory of the University of Leiden 120b."
        url: null
      - citation: "van Delft, D. & Kes, P. (2010). The discovery of superconductivity. Physics Today 63(9): 38–43."
        url: null

  - id: supercond-meissner-effect
    date: 1933 – 1935
    type: EXPERIMENT
    title: Superconductors expel magnetic fields
    description: >-
      Walther Meissner and Robert Ochsenfeld in Berlin find that tin and lead push out a
      magnetic field when they are cooled into the superconducting state. A merely perfect
      conductor would trap the field instead. In 1935 the brothers Fritz and Heinz London
      write equations for this, in which the field dies away within a fraction of a
      micrometre of the surface.
    contested: false
    sources:
      - citation: "Meissner, W. & Ochsenfeld, R. (1933). Ein neuer Effekt bei Eintritt der Supraleitfähigkeit. Naturwissenschaften 21(44): 787–788."
        url: null
      - citation: "London, F. & London, H. (1935). The electromagnetic equations of the supraconductor. Proceedings of the Royal Society A 149: 71–88."
        url: null

  - id: supercond-ginzburg-landau
    date: "1950"
    type: DISCOVERY
    title: Superconductivity as a phase transition
    description: >-
      Vitaly Ginzburg and Lev Landau in Moscow apply Landau's theory of phase transitions to
      superconductors. They describe the superconducting state by a single complex order
      parameter, a kind of wave function for the whole material. In 1957 Alexei Abrikosov
      used their equations to predict that magnetic field can enter some superconductors as
      a lattice of whirlpools of current.
    contested: false
    sources:
      - citation: "Ginzburg, V. L. & Landau, L. D. (1950). On the theory of superconductivity. Zhurnal Eksperimental'noi i Teoreticheskoi Fiziki 20: 1064–1082."
        url: null

  - id: supercond-bcs-theory
    date: 1956 – 1957
    type: DISCOVERY
    title: The BCS theory
    description: >-
      In 1950 experiments had shown that heavier isotopes of mercury superconduct at lower
      temperatures, so the vibrations of the lattice must be involved. John Bardeen, Leon
      Cooper and Robert Schrieffer show how. Lattice vibrations let electrons attract each
      other weakly, and near the Fermi energy even a weak attraction binds them into pairs.
      The theory explained every known property of the classic superconductors. It won the
      1972 Nobel prize, Bardeen's second.
    contested: false
    sources:
      - citation: "Cooper, L. N. (1956). Bound electron pairs in a degenerate Fermi gas. Physical Review 104(4): 1189–1190."
        url: null
      - citation: "Bardeen, J., Cooper, L. N. & Schrieffer, J. R. (1957). Theory of superconductivity. Physical Review 108(5): 1175–1204."
        url: null

  - id: supercond-josephson-effect
    date: "1962"
    type: DISCOVERY
    title: Pairs tunnel through a barrier
    description: >-
      Brian Josephson, a 22-year-old Cambridge graduate student, predicts that Cooper pairs
      can tunnel through a thin insulating layer between two superconductors, carrying a
      current with no voltage, and that a steady voltage makes the current oscillate at a
      frequency fixed by fundamental constants. Bardeen doubted it at first. Experiments
      confirmed it within a year, and Josephson shared the 1973 Nobel prize.
    contested: false
    sources:
      - citation: "Josephson, B. D. (1962). Possible new effects in superconductive tunnelling. Physics Letters 1(7): 251–253."
        url: null

  - id: supercond-cuprates
    date: 1986 – 1987
    type: PARADIGM-SHIFT
    title: High-temperature superconductors
    description: >-
      At IBM Zurich, Georg Bednorz and Alex Müller find superconductivity near 35 K in a
      ceramic of lanthanum, barium, copper and oxygen, a material expected to be a poor
      conductor. Within months Paul Chu's group reaches 93 K in an yttrium compound, above
      the boiling point of cheap liquid nitrogen. BCS theory did not predict such high
      temperatures. Bednorz and Müller received the Nobel prize in 1987, the year after
      their paper.
    contested: false
    sources:
      - citation: "Bednorz, J. G. & Müller, K. A. (1986). Possible high Tc superconductivity in the Ba−La−Cu−O system. Zeitschrift für Physik B 64(2): 189–193."
        url: null
      - citation: "Wu, M. K. et al. (1987). Superconductivity at 93 K in a new mixed-phase Y-Ba-Cu-O compound system at ambient pressure. Physical Review Letters 58(9): 908–910."
        url: null

  - id: supercond-hydride-claims
    date: 2015 – 2023
    type: EXPERIMENT
    title: Hydrides under pressure, and the retractions
    description: >-
      Mikhail Eremets's group in Mainz finds superconductivity at 203 K in hydrogen sulphide
      squeezed to about 1.5 million atmospheres, as theory had predicted, and other groups
      confirm it. Claims of superconductivity at room temperature follow. Two papers in
      Nature from Ranga Dias's group at Rochester, in 2020 and 2023, are retracted after
      other physicists find problems with the data. In 2023 a claim for a material called
      LK-99 spreads on social media and collapses within weeks.
    contested: true
    contested_note: >-
      The hydrogen sulphide result is widely reproduced. The retracted room-temperature
      claims are not. A University of Rochester investigation found research misconduct in
      Dias's work, which he disputed. The episode prompted debate over how journals review
      extraordinary claims and whether raw data should be shared by default.
    sources:
      - citation: "Drozdov, A. P., Eremets, M. I., Troyan, I. A., Ksenofontov, V. & Shylin, S. I. (2015). Conventional superconductivity at 203 kelvin at high pressures in the sulfur hydride system. Nature 525: 73–76."
        url: null
      - citation: "Snider, E. et al. (2020). Room-temperature superconductivity in a carbonaceous sulfur hydride. Nature 586: 373–377. Retracted 2022."
        url: null

open_problems:
  - id: supercond-high-tc-mechanism
    name: How do the copper oxides superconduct?
    status: open
    status_note: Open as of 2026, forty years after the discovery.
    description: >-
      The cuprates superconduct at up to 133 K at normal pressure, and in 2026 a sample
      treated under pressure kept 151 K after release. Their electrons form
      pairs, as in BCS theory, but the glue binding them does not seem to be lattice
      vibrations. Magnetic fluctuations are the leading candidate, but there is no agreed
      theory.
    why_hard: >-
      The parent compounds are Mott insulators, where the electrons repel each other so
      strongly that band theory fails. The materials show a tangle of competing orders,
      including a mysterious "pseudogap", and the models believed to capture them cannot be
      solved exactly or simulated at the necessary scale.
    unlocks: >-
      A recipe for designing superconductors that work at higher temperatures, and a theory
      of strongly interacting electrons in general.
    sources:
      - citation: "Keimer, B., Kivelson, S. A., Norman, M. R., Uchida, S. & Zaanen, J. (2015). From quantum matter to high-temperature superconductivity in copper oxides. Nature 518: 179–186."
        url: null
  - id: supercond-room-temperature
    name: Superconductivity at room temperature and pressure
    status: open
    status_note: No confirmed example as of 2026. The highest reproduced results need pressures above a million atmospheres, and a 2025 preprint reporting about 298 K in a lanthanum–scandium hydride at about 2.5 million atmospheres has not yet been independently reproduced.
    description: >-
      Is there a material that superconducts at ordinary temperature without enormous
      pressure? Hydrogen-rich compounds reach close to room temperature, but only when
      squeezed in a diamond anvil cell.
    why_hard: >-
      Nothing in known theory forbids it, but nothing yet shows how to achieve it. Light
      atoms and strong bonds favour high transition temperatures, and those same conditions
      usually require pressures that cannot be held in a practical device.
    unlocks: >-
      Power lines without losses, cheap magnets for medicine and transport, and electronics
      that need no cooling.
    sources:
      - citation: "Flores-Livas, J. A. et al. (2020). A perspective on conventional high-temperature superconductors at high pressure: methods and materials. Physics Reports 856: 1–78."
        url: null

applications:
  - area: Neuroscience
    title: Listening to the brain's magnetic field
    description: >-
      A SQUID, a superconducting loop containing Josephson junctions, can detect magnetic
      fields a billion times weaker than the Earth's. In 1972 David Cohen used one to record
      the magnetic field of the human brain. Magnetoencephalography now maps brain activity
      millisecond by millisecond and helps surgeons locate the source of epileptic seizures.
    domain: biology
    sources:
      - citation: "Cohen, D. (1972). Magnetoencephalography: detection of the brain's electrical activity with a superconducting magnetometer. Science 175(4022): 664–666."
        url: null
  - area: Particle physics
    title: The magnets of the Large Hadron Collider
    description: >-
      The Large Hadron Collider bends its proton beams with 1,232 superconducting magnets of
      niobium–titanium, cooled by superfluid helium to 1.9 K. Ordinary copper magnets
      strong enough would need more power than the laboratory could supply.
    sources:
      - citation: "Evans, L. & Bryant, P. (eds) (2008). LHC Machine. Journal of Instrumentation 3: S08001."
        url: null
  - area: Computing
    title: Superconducting qubits
    description: >-
      A circuit containing Josephson junctions behaves like an artificial atom, with energy
      levels that can hold quantum information. In 2019 Google ran a calculation on a chip of
      53 such qubits that it claimed no ordinary computer could match in reasonable time.
    sources:
      - citation: "Arute, F. et al. (2019). Quantum supremacy using a programmable superconducting processor. Nature 574: 505–510."
        url: null

further_reading:
  - citation: "van Delft, D. (2007). Freezing Physics: Heike Kamerlingh Onnes and the Quest for Cold. Edita, Amsterdam."
    url: null
    note: A history of the Leiden laboratory where superconductivity was found.
  - citation: "Schmalian, J. (2010). Failed theories of superconductivity. Modern Physics Letters B 24(27): 2679–2691."
    url: https://arxiv.org/abs/1008.0447
    note: A short account of the many attempts by famous physicists before BCS.
  - citation: "Tinkham, M. (1996). Introduction to Superconductivity (2nd ed.). McGraw-Hill."
    url: null
    note: The standard graduate textbook.
---

## Into the Cold

In 1908 {{fig:heike-kamerlingh-onnes|Heike Kamerlingh Onnes}} liquefied helium in Leiden, reaching 4 degrees above absolute zero. For fifteen years no one else could. Physicists disagreed about what happens to a metal's resistance at such temperatures. Some expected it to fall smoothly to zero, others expected it to rise as the electrons froze in place. In 1911 Onnes's laboratory measured mercury, which could be purified by distillation. At 4.2 K its resistance vanished, suddenly and completely.

The new state was more than perfect conduction. In 1933 {{fig:walther-meissner|Walther Meissner}} and {{fig:robert-ochsenfeld|Robert Ochsenfeld}} found that a superconductor expels a magnetic field when it is cooled. A perfect conductor would trap whatever field was inside it. A superconductor ends up in the same state however it gets there, which is the mark of a true phase of matter, in the sense of [phase transitions](/physics/phase-transitions/). The brothers {{fig:fritz-london|Fritz London}} and {{fig:heinz-london|Heinz London}}, refugees from Germany working in Oxford, wrote equations describing the expulsion in 1935. Fritz London suggested that superconductivity is a quantum state stretched across the whole material.

## Forty-Six Years

Explaining it defeated Einstein, Bohr, Heisenberg, Feynman and many others. Band theory from [solid-state physics](/physics/solid-state-physics/) explained ordinary metals, but offered no reason why resistance should vanish. In 1950 {{fig:vitaly-ginzburg|Vitaly Ginzburg}} and {{fig:lev-landau|Lev Landau}} gave a description without an explanation, treating the superconducting state as a phase with an order parameter. The same year, experiments showed that heavier isotopes of mercury superconduct at slightly lower temperatures. The atoms' vibrations had to be involved.

{{fig:john-bardeen|John Bardeen}} had been working on the problem since the 1930s. In 1956 his postdoc {{fig:leon-cooper|Leon Cooper}} showed that any attraction between electrons near the Fermi energy, however weak, binds them in pairs. Lattice vibrations provide such an attraction. One electron passing through the lattice pulls the positive ions slightly together, and a second electron is drawn to the spot. In 1957 Bardeen's student {{fig:robert-schrieffer|Robert Schrieffer}} found how to write down a state in which all the pairs move together. Scattering one pair would mean disturbing them all, so a current flows without loss. The BCS theory explained the gap, the heat capacity and the Meissner effect in one stroke.

In 1962 {{fig:brian-josephson|Brian Josephson}}, a graduate student in Cambridge, predicted that pairs can tunnel through a thin insulating barrier. Bardeen argued against him in print, but experiments soon bore Josephson out.

## Warmer and Stranger

For decades the record transition temperature crept up slowly, reaching 23 K in 1973. Some theorists argued that the lattice mechanism of BCS theory could not go much higher. In 1986 {{fig:georg-bednorz|Georg Bednorz}} and {{fig:alex-muller|Alex Müller}} at IBM Zurich found superconductivity at about 35 K in a copper oxide ceramic, a class of material no one had thought promising. By early 1987 related compounds superconducted at 93 K, cooled by cheap liquid nitrogen. At a session of the American Physical Society in March 1987, later called the Woodstock of physics, thousands of physicists crowded in to hear the results late into the night. The mechanism is still debated.

In 2015 {{fig:mikhail-eremets|Mikhail Eremets}} and his group found superconductivity at 203 K in hydrogen sulphide crushed between diamonds, confirming a theoretical prediction. Hydrogen-rich compounds under pressure pushed higher still. Then came claims of superconductivity at room temperature. Two papers from Ranga Dias's group in Rochester were retracted, in 2022 and 2023, and a university investigation found misconduct. The field is left with a genuine achievement and a warning about extraordinary claims.

## A Closer Look: The Gap

BCS theory predicts that breaking a Cooper pair costs an energy $2\Delta$, where at zero temperature

$$
\Delta = \frac{\pi}{e^{\gamma}}\, k_B T_c \approx 1.764\, k_B T_c .
$$

Here $\gamma = 0.5772$ is Euler's constant, and $T_c$ is the transition temperature. So the pair-breaking energy is $2\Delta \approx 3.53\, k_B T_c$, the same multiple for every weakly coupled superconductor. Light can break a pair only if each photon carries at least $2\Delta$, so a superconductor becomes transparent to radiation below that frequency and absorbs above it.

| Metal | $T_c$ (K) | BCS $2\Delta$ (meV) | Frequency $2\Delta/h$ (GHz) | Measured $2\Delta / k_B T_c$ |
|---|---|---|---|---|
| Aluminium | 1.175 | 0.357 | 86 | 3.4 |
| Tin | 3.72 | 1.131 | 273 | 3.5 |
| Mercury | 4.15 | 1.262 | 305 | 4.6 |
| Lead | 7.19 | 2.186 | 529 | 4.3 |
| Niobium | 9.25 | 2.812 | 680 | 3.8 |

The energies are tiny. One milli-electronvolt is about the energy of a photon of wavelength 1.2 mm, so the gaps lie in the microwave and far-infrared range. For aluminium and tin, the measured ratio is close to 3.53. For lead and mercury it is well above it. In these metals the electrons are coupled so strongly to the lattice that the weak-coupling approximation in BCS theory breaks down, and an extended version of the theory is needed.

The isotope effect shows up in the same formula. The lattice vibrations have frequencies proportional to $1/\sqrt{M}$, where $M$ is the mass of the atoms, and BCS theory makes $T_c$ proportional to them. Mercury-199 should therefore superconduct at a temperature higher than mercury-204 by a factor $\sqrt{204/199} = 1.0125$, about 1.2%, roughly 0.05 K. Differences of this size, measured in 1950, were the clue that pointed to the lattice.

## After BCS

The ideas of superconductivity spread well beyond metals. Cooper pairing explains superfluid helium-3, the interiors of neutron stars and the behaviour of atomic nuclei. The way a superconductor gives a mass to the photon inside it inspired the Higgs mechanism in [particle physics](/physics/particle-physics/). Josephson junctions are the heart of the superconducting qubits in [quantum information](/physics/quantum-information/). The copper oxides remain the great unsolved case, one of the many in which electrons interact too strongly for band theory, alongside the strange magnets of [magnetism](/physics/magnetism/).
