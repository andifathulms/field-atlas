---
id: solid-state-physics
domain: physics
thread: matter
name: Solid-State Physics
parent_ids:
  - quantum-mechanics
  - crystallography
era_emerged: 1900 – 1947
core_question: Why do some solids carry electricity easily, others not at all, and a few only when coaxed?

summary: |-
  Copper conducts electricity, glass does not, and silicon sits in between. Around 1900 physicists tried to explain metals with a gas of free electrons bouncing among the atoms. The picture explained why good conductors of electricity also conduct heat well, but it predicted a heat capacity that metals do not have, and it could not say why insulators exist at all.

  Quantum mechanics supplied the answers between 1927 and 1931. Electrons obey Pauli's exclusion principle, waves pass through a perfect lattice without scattering, and the allowed energies in a crystal form bands separated by gaps. Whether a band is full or partly full decides whether a solid is a metal or an insulator. Semiconductors, with a small gap, could be controlled, and in 1947 that control produced the transistor, the device on which all electronics now rests.

key_ideas:
  - term: Free-electron model
    definition: >-
      A metal pictured as a fixed lattice of ions filled with a gas of mobile electrons. It
      explains Ohm's law and the link between electrical and thermal conductivity.
    turning_point_id: solid-drude-model
  - term: Fermi energy
    definition: >-
      Because no two electrons can share a state, they fill the energy levels from the
      bottom up. The top of the filled levels is the Fermi energy, about 7 electronvolts in
      copper. Only electrons near it can take part in conduction or absorb heat.
    turning_point_id: solid-sommerfeld-electrons
  - term: Bloch wave
    definition: >-
      An electron wave that extends through a whole crystal, modulated by the repeating
      pattern of the lattice. A perfect lattice does not scatter it at all. Only defects and
      vibrations cause resistance.
    turning_point_id: solid-bloch-theorem
  - term: Band gap
    definition: >-
      A range of energies no electron in the crystal can have. A solid whose highest
      occupied band is completely full is an insulator. A small gap makes a semiconductor.
    turning_point_id: solid-wilson-bands
  - term: Doping
    definition: >-
      Adding tiny amounts of impurity atoms to a semiconductor to supply extra electrons
      (n-type) or missing electrons, called holes (p-type). The junction between the two
      is the basis of diodes and transistors.
    turning_point_id: solid-transistor

turning_points:
  - id: solid-drude-model
    date: "1900"
    type: DISCOVERY
    title: A gas of electrons
    description: >-
      Three years after the electron was discovered, Paul Drude treats the electrons in a
      metal as a gas obeying the kinetic theory. The model reproduces the Wiedemann–Franz
      law, the fixed ratio of thermal to electrical conductivity in metals. It also
      predicts that the electrons should add greatly to a metal's heat capacity, and they
      do not.
    contested: false
    sources:
      - citation: "Drude, P. (1900). Zur Elektronentheorie der Metalle. Annalen der Physik 306(3): 566–613."
        url: null

  - id: solid-sommerfeld-electrons
    date: 1927 – 1928
    type: THEORY-REPLACED
    title: Electrons obey quantum statistics
    description: >-
      Arnold Sommerfeld replaces the classical statistics in Drude's model with the new
      Fermi–Dirac statistics. Because the exclusion principle stacks electrons up to high
      energies, only a small fraction near the top can absorb heat. The missing heat
      capacity is explained, and the free-electron picture survives in quantum form.
    contested: false
    sources:
      - citation: "Sommerfeld, A. (1928). Zur Elektronentheorie der Metalle auf Grund der Fermischen Statistik. Zeitschrift für Physik 47: 1–32."
        url: https://doi.org/10.1007/BF01391052

  - id: solid-bloch-theorem
    date: "1928"
    type: DISCOVERY
    title: Waves in a perfect lattice
    description: >-
      Felix Bloch, Heisenberg's student in Leipzig, solves the Schrödinger equation for an
      electron in a periodic lattice. The solutions are waves that pass through the whole
      crystal unhindered. The puzzle was no longer why metals conduct, but why they have
      any resistance at all. The answer is imperfections and the vibrations of the atoms.
    contested: false
    sources:
      - citation: "Bloch, F. (1929). Über die Quantenmechanik der Elektronen in Kristallgittern. Zeitschrift für Physik 52: 555–600."
        url: null

  - id: solid-wilson-bands
    date: "1931"
    type: DISCOVERY
    title: Metals, insulators and semiconductors
    description: >-
      Alan Herries Wilson, a Cambridge theorist visiting Leipzig, shows how band theory
      separates metals from insulators. In an insulator the highest occupied band is full,
      and a full band carries no current. A semiconductor is an insulator with a small
      gap, whose conduction depends on temperature and on impurities.
    contested: false
    sources:
      - citation: "Wilson, A. H. (1931). The theory of electronic semi-conductors. Proceedings of the Royal Society A 133: 458–491."
        url: null

  - id: solid-transistor
    date: 1947 – 1948
    type: EXPERIMENT
    title: The transistor
    description: >-
      At Bell Laboratories, John Bardeen and Walter Brattain press two gold contacts onto a
      crystal of germanium and obtain amplification in December 1947. Their group leader
      William Shockley, stung at being left out, designs the more practical junction
      transistor within weeks. The three shared the 1956 Nobel prize.
    contested: true
    contested_note: >-
      Credit within the team was disputed. Bell Labs' patent lawyers left Shockley's name
      off the point-contact patent, and Bardeen and Brattain resented his efforts to take
      the lead in publicity and research. Separately, Julius Lilienfeld had patented
      field-effect amplifiers in the 1920s, and historians differ on whether his devices
      could have worked.
    sources:
      - citation: "Bardeen, J. & Brattain, W. H. (1948). The transistor, a semi-conductor triode. Physical Review 74(2): 230–231."
        url: null
      - citation: "Shockley, W. (1949). The theory of p-n junctions in semiconductors and p-n junction transistors. Bell System Technical Journal 28(3): 435–489."
        url: null
      - citation: "Riordan, M. & Hoddeson, L. (1997). Crystal Fire: The Birth of the Information Age. W. W. Norton."
        url: null

  - id: solid-integrated-circuit
    date: 1958 – 1959
    type: EXPERIMENT
    title: The integrated circuit
    description: >-
      Jack Kilby at Texas Instruments builds several components on one piece of germanium,
      joined by fine wires. Months later Robert Noyce at Fairchild Semiconductor describes a
      silicon chip whose components are connected by metal laid down on the surface, using
      Jean Hoerni's planar process. Noyce's design is the ancestor of every modern chip.
      Kilby received the 2000 Nobel prize. Noyce had died in 1990.
    contested: true
    contested_note: >-
      Texas Instruments and Fairchild fought over the patents for a decade, and the two
      companies eventually agreed to cross-license. Kilby is usually credited with the
      first working device and Noyce with the practical form. Both men were generous about
      the other's claim.
    sources:
      - citation: "Kilby, J. S. (1976). Invention of the integrated circuit. IEEE Transactions on Electron Devices 23(7): 648–654."
        url: null
      - citation: "Reid, T. R. (2001). The Chip: How Two Americans Invented the Microchip and Launched a Revolution (rev. ed.). Random House."
        url: null

open_problems:
  - id: solid-strong-correlation
    name: Electrons that defy band theory
    status: open
    status_note: Open as of writing; there is no general theory of strongly correlated electrons.
    description: >-
      Band theory treats each electron as moving alone in the average field of the others.
      In some materials this fails badly. Nickel oxide should be a metal by band theory,
      yet it is an insulator, because its electrons repel each other too strongly to move.
      Nevill Mott explained the idea in 1949, but no theory yet predicts reliably how such
      materials behave.
    why_hard: >-
      When the repulsion between electrons is as large as their energy of motion, neither
      can be treated as a small correction. The quantum state of many interacting electrons
      is too complex to store on any computer beyond a few dozen particles.
    unlocks: >-
      Explanations of high-temperature superconductivity, of exotic magnets and of switches
      that turn from metal to insulator, and a way to design such materials on purpose.
    sources:
      - citation: "Imada, M., Fujimori, A. & Tokura, Y. (1998). Metal-insulator transitions. Reviews of Modern Physics 70(4): 1039–1263."
        url: null

applications:
  - area: Electronics
    title: Moore's law
    description: >-
      In 1965 Gordon Moore, a co-founder of Fairchild and later Intel, observed that the
      number of components on a chip was doubling every year, a rate he revised in 1975 to
      every two years. The trend held for half a century. A modern processor holds tens of
      billions of transistors, each only a few tens of atoms across in its smallest parts.
    sources:
      - citation: "Moore, G. E. (1965). Cramming more components onto integrated circuits. Electronics 38(8): 114–117."
        url: null
  - area: Energy
    title: The silicon solar cell
    description: >-
      A p–n junction lit by sunlight drives a current, because each absorbed photon frees an
      electron and a hole that the junction separates. Bell Labs made the first practical
      silicon solar cell in 1954, at about 6% efficiency. Solar cells are now among the
      cheapest sources of electricity ever built.
    sources:
      - citation: "Chapin, D. M., Fuller, C. S. & Pearson, G. L. (1954). A new silicon p-n junction photocell for converting solar radiation into electrical power. Journal of Applied Physics 25(5): 676–677."
        url: null
  - area: Genome sequencing
    title: Reading DNA on a chip
    description: >-
      Each time a DNA polymerase adds a base, it releases a hydrogen ion. A chip with
      millions of tiny transistors, each sensitive to acidity, can detect those ions and
      read DNA without any light or cameras. Semiconductor manufacturing has also driven the
      cost of the cameras and processors inside every other sequencer.
    domain: biology
    field_id: genomics
    sources:
      - citation: "Rothberg, J. M. et al. (2011). An integrated semiconductor device enabling non-optical genome sequencing. Nature 475: 348–352."
        url: null

further_reading:
  - citation: "Riordan, M. & Hoddeson, L. (1997). Crystal Fire: The Birth of the Information Age. W. W. Norton."
    url: null
    note: The story of the transistor and the people at Bell Labs, for general readers.
  - citation: "Hoddeson, L., Braun, E., Teichmann, J. & Weart, S. (eds) (1992). Out of the Crystal Maze: Chapters from the History of Solid-State Physics. Oxford University Press."
    url: null
    note: The standard scholarly history of the field's first half-century.
  - citation: "Kittel, C. (2005). Introduction to Solid State Physics (8th ed.). Wiley."
    url: null
    note: The classic undergraduate textbook.
---

## A Gas of Electrons

Metals conduct electricity and heat, and they shine. In 1900, three years after J. J. Thomson discovered the electron, {{fig:paul-drude|Paul Drude}} proposed that a metal is a lattice of positive ions filled with a gas of free electrons. He treated the gas with the [kinetic theory](/physics/kinetic-theory/) of Maxwell and Boltzmann. Electrons accelerate in an electric field, collide with the ions, and drift slowly along the wire. The model gave Ohm's law. It also explained an old observation, that the ratio of thermal to electrical conductivity is nearly the same for all metals, because the same electrons carry both.

But a gas of electrons should absorb heat like any other gas. Measured heat capacities of metals showed no sign of it. And the model could not say why some solids have free electrons and others, such as diamond or glass, apparently have none.

## Bands and Gaps

[Quantum mechanics](/physics/quantum-mechanics/) resolved both problems. In 1927 {{fig:arnold-sommerfeld|Arnold Sommerfeld}} kept Drude's gas but made the electrons obey the exclusion principle, using the statistics of Fermi and Dirac. No two electrons can share a state, so they fill the energy levels from the bottom up to a high energy, the Fermi energy. Warming the metal can only excite the few electrons near the top. The missing heat capacity was explained.

A year later {{fig:felix-bloch|Felix Bloch}} asked how an electron wave moves through the regular lattice of ions that [crystallography](/physics/crystallography/) had mapped. The answer was surprising. In a perfect crystal it moves forever without scattering. Resistance comes only from flaws and from the vibrations of the atoms, which is why it falls as a metal is cooled.

The allowed energies in a crystal form *bands* separated by *gaps*. In 1931 {{fig:alan-herries-wilson|Alan Herries Wilson}} saw what this meant. If the highest occupied band is only partly full, electrons can shift to nearby empty states and carry a current: the solid is a metal. If the band is completely full, there is nowhere to go, and the solid is an insulator. A *semiconductor* is an insulator with a gap small enough that heat or impurities can put a few electrons across it. Wolfgang Pauli wrote that year that one should not work on semiconductors, which were a filthy mess. Their behaviour depended on traces of impurity no one could yet control.

## The Transistor

The Second World War changed that. Radar needed crystal detectors, and wartime work produced germanium and silicon of unprecedented purity. After the war Bell Laboratories set up a group to build a solid replacement for the vacuum tube. In December 1947 {{fig:john-bardeen|John Bardeen}} and {{fig:walter-brattain|Walter Brattain}} pressed two gold contacts close together on a germanium crystal and found that a small current into one controlled a larger current through the other. Their leader, {{fig:william-shockley|William Shockley}}, who had not been present, spent the following weeks designing the junction transistor, which was easier to make and became the standard.

Shockley later left to found his own company in California. His management was so difficult that eight of his staff left in 1957 to form Fairchild Semiconductor, the seed of Silicon Valley. He spent his later years promoting discredited theories about race and intelligence. At Texas Instruments in 1958 {{fig:jack-kilby|Jack Kilby}} built a whole circuit on one piece of germanium. At Fairchild in 1959 {{fig:robert-noyce|Robert Noyce}} designed an integrated circuit on flat silicon with its connections printed on the surface, the form every chip has taken since.

## A Closer Look: Slow Electrons, Fast Electrons

Drude's model gives the conductivity of a metal as $\sigma = n e^2 \tau / m$, where $n$ is the number of free electrons per cubic metre, $e$ and $m$ are the electron's charge and mass, and $\tau$ is the average time between collisions. Copper has one free electron per atom. Its density is 8.96 g/cm³ and a mole weighs 63.55 g, so

$$
n = \frac{8960}{0.06355} \times 6.022 \times 10^{23} \approx 8.49 \times 10^{28} \ \text{m}^{-3} .
$$

Copper's resistivity at room temperature is $1.68 \times 10^{-8}$ Ω m. Turning the formula round,

$$
\tau = \frac{m}{\rho\, n e^2} \approx 2.5 \times 10^{-14} \ \text{s} .
$$

**Drift speed.** A current $I$ in a wire of cross-section $A$ needs the electrons to drift at $v = I/(nAe)$. For a current of 10 A in a household cable of 2.5 mm², this gives about 0.29 mm/s. For 1 A in a 1 mm² wire it is 0.074 mm/s, and an electron would take nearly four hours to travel one metre. The lamp lights at once because the electric field travels at nearly the speed of light and pushes all the electrons together.

**How far between collisions?** Here Drude and Sommerfeld disagree.

| Picture | Electron speed | Distance between collisions |
|---|---|---|
| Drude, classical thermal speed at 20 °C | $1.15 \times 10^5$ m/s | 2.9 nm |
| Sommerfeld, speed at the Fermi energy (7.0 eV) | $1.57 \times 10^6$ m/s | 39 nm |

Drude's distance is about 13 times the spacing between copper atoms, 0.23 nm, which fitted the idea of electrons bouncing off ions. Sommerfeld's quantum electrons move fourteen times faster, and travel about 170 atomic spacings between collisions. Something must let them pass most atoms untouched. Bloch's theorem supplied it: a perfect lattice does not scatter an electron wave at all.

The same numbers explain the heat capacity. At room temperature the thermal energy $k_B T$ is 0.025 eV, which is 0.36% of the Fermi energy. Only electrons within that sliver of the top can be excited, so they add almost nothing to the heat a metal absorbs.

## Everything Electronic

Solid-state physics, renamed condensed matter physics in the 1970s, is now the largest branch of physics. Its devices are everywhere: transistors, lasers made of semiconductors, light-emitting diodes and solar cells. It also branched into stranger territory. Some metals lose their resistance entirely, a problem that defeated band theory for decades and became [superconductivity](/physics/superconductivity/). The magnetism of iron needed quantum mechanics of its own, in [magnetism](/physics/magnetism/). And a closer look at electrons in two dimensions revealed a new kind of order, [topological matter](/physics/topological-matter/).
