---
id: defect-chemistry
domain: chemistry
thread: materials
name: Defect Chemistry
parent_ids:
  - solid-state-chemistry
era_emerged: 1926 – 1980
core_question: What does a crystal gain from being imperfect, and why is a perfect one almost always useless?

summary: |-
  A crystal is usually introduced as a perfectly repeating arrangement, which is the right first approximation and the wrong place to stop. Yakov Frenkel pointed out in 1926 that a perfect crystal cannot be the lowest free energy at any temperature above absolute zero: creating a vacancy costs energy but gains entropy, and at a finite temperature the entropy wins for some number of them. Defects are not damage. They are an equilibrium property, with a concentration that can be calculated.

  Walter Schottky and Carl Wagner then drew the chemical consequence, which is more startling. If a lattice can carry vacancies on one sublattice and not the other, its composition need not be stoichiometric. Iron(II) oxide is not FeO but Fe₀.₉₅O, with iron sites empty and some of the remaining iron oxidised to the +3 state for charge balance. The law of definite proportions, which chemistry had used since Proust to define what a compound is, does not hold for solids — and Berthollet, who lost that argument in 1811, turns out to have been right about something after all.

  The reason the field matters is that almost every useful property of a non-metallic solid is a defect property. Ionic conduction requires vacancies to move into. Colour in an otherwise colourless salt is an electron trapped at one. Semiconductor behaviour is set by impurities at parts per million. Catalytic activity on an oxide is frequently at an oxygen vacancy. So the practical business of the field is to put defects in deliberately, at a controlled concentration, by choosing the composition — which beats heating the crystal by many orders of magnitude.

key_ideas:
  - term: Point defect
    definition: >-
      A missing atom (vacancy), an extra one squeezed between sites (interstitial), or an atom of the wrong
      kind on a site. Frenkel and Schottky defects are the two charge-neutral combinations: an
      interstitial–vacancy pair, and vacancies on both sublattices at once.
    turning_point_id: frenkel-schottky-defects
  - term: Defects as chemical species
    definition: >-
      Vacancies, interstitials and trapped charges can be written into equations with their own mass, site
      and charge balance, and their concentrations obey mass-action laws. This is what makes defect
      populations calculable as functions of temperature and of the surrounding gas pressure.
    turning_point_id: kroger-vink-notation
  - term: Non-stoichiometry
    definition: >-
      A compound whose composition varies continuously over a range — Fe₀.₈₄O to Fe₀.₉₅O, TiO₁.₇ to TiO₂ —
      because vacancies on one sublattice are compensated by a change of oxidation state rather than by a
      change of structure.
    turning_point_id: wagner-schottky-non-stoichiometry
  - term: Aliovalent doping
    definition: >-
      Substituting an ion of different charge, so that the lattice must create a compensating defect. Calcium
      on a sodium site forces a sodium vacancy; yttrium on a zirconium site forces an oxygen vacancy. It is
      the lever by which defect concentration is set by composition instead of by temperature.
    turning_point_id: doped-zirconia-ion-conduction
  - term: Colour centre
    definition: >-
      An electron trapped at an anion vacancy, with energy levels inside the band gap that absorb visible
      light. It is why irradiated rock salt is yellow-brown, why quartz goes smoky and topaz blue, and it was
      the first defect to be identified spectroscopically rather than inferred.
    turning_point_id: colour-centres
  - term: Ionic conductivity in a solid
    definition: >-
      Current carried by ions hopping between lattice sites through vacancies, rather than by electrons.
      In a heavily doped oxide at high temperature it reaches the conductivity of salt water, which is what
      makes a solid electrolyte possible.
    turning_point_id: doped-zirconia-ion-conduction

turning_points:
  - id: frenkel-schottky-defects
    date: 1926 – 1935
    type: MECHANISM-ESTABLISHED
    title: A perfect crystal is not the lowest free energy
    description: >-
      Yakov Frenkel argues that thermal disorder in an ionic crystal requires atoms to leave their sites for
      interstitial positions, creating vacancy–interstitial pairs, and that the number present follows from
      balancing the energy cost against the configurational entropy gained. Walter Schottky and Carl Wagner
      identify the alternative in which vacancies appear on both sublattices together, and give the
      statistical treatment. The result reversed the default assumption: a crystal at equilibrium above
      absolute zero contains a definite, calculable population of defects, and a defect-free crystal would
      be the anomaly.
    contested: false
    sources:
      - citation: "Frenkel, J. (1926). Über die Wärmebewegung in festen und flüssigen Körpern. Zeitschrift für Physik 35: 652–669."
        url: null
      - citation: "Schottky, W. & Wagner, C. (1930). Theorie der geordneten Mischphasen. Zeitschrift für Physikalische Chemie B 11: 163–210."
        url: null

  - id: wagner-schottky-non-stoichiometry
    date: 1930 – 1936
    type: THEORY-REPLACED
    title: Composition need not be fixed
    description: >-
      Carl Wagner and Walter Schottky show that a solid's composition can vary continuously while its
      structure does not, because vacancies on one sublattice can be compensated by a change in the oxidation
      state of the remaining cations. Iron(II) oxide is never FeO: prepared in equilibrium with iron it is
      about Fe₀.₉₅O, and the deficiency can be pushed to Fe₀.₈₄O by raising the oxygen pressure. The law of
      definite proportions, established for compounds by Proust in the dispute recorded under
      [chemical composition](/chemistry/chemical-composition/), fails for this entire class — and Berthollet,
      who lost that argument, had been describing solids.
    contested: false
    sources:
      - citation: "Wagner, C. & Schottky, W. (1930). Theorie der geordneten Mischphasen. Zeitschrift für Physikalische Chemie B 11: 163–210."
        url: null
      - citation: "Sørensen, O. T., ed. (1981). Nonstoichiometric Oxides. Academic Press."
        url: null

  - id: wagner-oxidation-theory
    date: "1933"
    type: MECHANISM-ESTABLISHED
    title: An oxide scale grows by diffusion through itself
    description: >-
      Carl Wagner explains the oxidation of a metal as a transport problem in the oxide already formed: ions
      and electrons migrate through the scale under the gradient of chemical potential across it, so the
      growth rate is set by the scale's own defect concentrations and falls as it thickens, giving a parabolic
      law. The theory predicts the rate from independently measurable diffusion data, and it says which oxides
      protect and which do not — complementing the purely geometric criterion recorded under
      [corrosion](/chemistry/corrosion/) with a mechanism.
    contested: false
    sources:
      - citation: "Wagner, C. (1933). Beitrag zur Theorie des Anlaufvorgangs. Zeitschrift für Physikalische Chemie B 21: 25–41."
        url: null
      - citation: "Atkinson, A. (1985). Transport processes during the growth of oxide films. Reviews of Modern Physics 57: 437–470."
        url: null

  - id: colour-centres
    date: 1930 – 1954
    type: MECHANISM-ESTABLISHED
    title: Colour from an electron in an empty space
    description: >-
      Robert Pohl's group at Göttingen find that alkali halide crystals, colourless when pure, develop
      characteristic absorption bands after exposure to X-rays or to alkali metal vapour, and that the bands
      belong to the crystal rather than to any impurity. Frederick Seitz, with Nevill Mott and Ronald Gurney,
      identify the absorbing species as an electron trapped at an anion vacancy, with levels inside the band
      gap. It was the first defect to be characterised spectroscopically rather than deduced from
      thermodynamics, and it made defects observable one species at a time.
    contested: false
    sources:
      - citation: "Mott, N. F. & Gurney, R. W. (1940). Electronic Processes in Ionic Crystals. Oxford University Press."
        url: null
      - citation: "Seitz, F. (1954). Colour centers in alkali halide crystals II. Reviews of Modern Physics 26: 7–94."
        url: null

  - id: kroger-vink-notation
    date: 1956 – 1964
    type: TECHNIQUE-INVENTED
    title: Defect equilibria as chemical equations
    description: >-
      Ferdinand Kröger and Hendrik Vink introduce a notation in which every defect is written with its site
      and its charge relative to the perfect lattice, so that defect formation can be expressed as a balanced
      chemical equation obeying mass action. Defect concentrations then follow as functions of temperature,
      doping level and the partial pressure of the surrounding gas, and can be plotted on logarithmic
      diagrams whose slopes identify which defect dominates in which regime. Defect chemistry became
      chemistry at this point rather than solid-state physics with impurities.
    contested: false
    sources:
      - citation: "Kröger, F. A. & Vink, H. J. (1956). Relations between the concentrations of imperfections in crystalline solids. Solid State Physics 3: 307–435."
        url: null
      - citation: "Kröger, F. A. (1964). The Chemistry of Imperfect Crystals. North-Holland."
        url: null

  - id: magneli-ordered-defects
    date: 1950 – 1975
    type: MECHANISM-ESTABLISHED
    title: Defects that organise themselves
    description: >-
      Arne Magnéli finds that reduced titanium and tungsten oxides do not accommodate their oxygen deficiency
      as randomly scattered vacancies but by eliminating whole planes of oxygen atoms and shearing the
      structure across them, producing a series of distinct phases with closely spaced compositions. The
      finding undercuts the assumption on which the dilute thermodynamics of defects rests: at the
      concentrations of practical interest, defects interact, cluster and order, and the material becomes a
      sequence of new structures rather than one structure with imperfections.
    contested: false
    sources:
      - citation: "Magnéli, A. (1953). Structures of the ReO₃-type with recurrent dislocations of atoms. Acta Crystallographica 6: 495–500."
        url: null
      - citation: "Anderson, J. S. & Hyde, B. G. (1967). On the possible role of dislocations in generating ordered defect structures. Journal of Physics and Chemistry of Solids 28: 1393–1408."
        url: null

  - id: doped-zirconia-ion-conduction
    date: 1897 – 1976
    type: TECHNIQUE-INVENTED
    title: A solid that conducts like salt water
    description: >-
      Walther Nernst notices in 1897 that doped zirconia glows when a current is passed and builds a lamp
      from it, without knowing why it conducts. The explanation is aliovalent doping: yttrium on a zirconium
      site is one charge short, so the lattice makes an oxygen vacancy for every two yttriums, and oxide ions
      hop through the vacancies. At 1,000 °C a heavily doped zirconia conducts oxide ions about as well as
      brine conducts its ions. From 1976 the same ceramic, as the exhaust oxygen sensor, made the closed-loop
      control of a catalytic converter possible on every petrol car.
    contested: false
    sources:
      - citation: "Nernst, W. (1899). Über die elektrolytische Leitung fester Körper bei sehr hohen Temperaturen. Zeitschrift für Elektrochemie 6: 41–43."
        url: null
      - citation: "Badwal, S. P. S. & Foger, K. (1996). Solid oxide electrolyte fuel cell review. Ceramics International 22: 257–265."
        url: null

open_problems:
  - id: defect-formation-energies
    name: Computing a defect concentration to better than orders of magnitude
    status: open
    status_note: Open as of 2026; corrections for charged defects and band gaps are standardised, residual errors of a few tenths of an electronvolt remain.
    description: >-
      A defect's concentration depends exponentially on its formation energy, so an error of 0.2 eV at 1,000 K
      is a factor of ten in concentration and an error of 0.5 eV is a factor of three hundred. Density
      functional calculations of charged defect levels carry errors of that size, largely because the same
      methods underestimate band gaps, and because a charged defect in a periodic calculation interacts with
      its own images.
    why_hard: >-
      The quantity wanted is the energy to remove one atom from an infinite solid, computed in a cell of a few
      hundred atoms, with a charge that the periodic boundary conditions cannot physically accommodate. The
      corrections are well developed but approximate, and the reference level against which a defect state is
      placed is exactly the band edge the method gets wrong.
    unlocks: >-
      Doping a semiconductor, predicting whether a new oxide will conduct ions, and anticipating the
      degradation of a battery electrode all turn on these numbers. At present they are measured rather than
      predicted, which is why materials screening stops at thermodynamic stability.
    sources:
      - citation: "Freysoldt, C. et al. (2014). First-principles calculations for point defects in solids. Reviews of Modern Physics 86: 253–305."
        url: null
      - citation: "Walsh, A. & Zunger, A. (2017). Instilling defect tolerance in new compounds. Nature Materials 16: 964–967."
        url: null

  - id: defect-interactions-at-real-concentrations
    name: Defect chemistry when the defects are not dilute
    status: open
    status_note: Open as of 2026; the dilute theory is known to fail above roughly a per cent and no general replacement exists.
    description: >-
      The mass-action framework that makes defect concentrations calculable assumes the defects are dilute and
      do not see one another. At the concentrations that give useful properties — several per cent of the
      oxygen sites vacant in a solid electrolyte — they interact strongly: they cluster, they order into
      superstructures of the kind Magnéli found, and the measured conductivity of a doped oxide passes through
      a maximum and then falls as doping increases, which the dilute theory does not predict.
    why_hard: >-
      The problem is a concentrated, charged, correlated lattice gas, which has no closed solution; simulation
      must sample arrangements over a configuration space that grows combinatorially, with energies that
      differ by less than the method's accuracy. And the ordered structures that form are often the
      intermediates of a phase change rather than equilibrium states.
    unlocks: >-
      Why every good ionic conductor has an optimum doping level, and whether a better one exists, are
      currently empirical questions. Solid-state batteries and intermediate-temperature fuel cells are both
      waiting on an electrolyte found this way.
    sources:
      - citation: "Maier, J. (2004). Physical Chemistry of Ionic Materials. Wiley."
        url: null
      - citation: "Goodenough, J. B. (2003). Oxide-ion electrolytes. Annual Review of Materials Research 33: 91–128."
        url: null

applications:
  - area: Automotive engineering
    title: The sensor that made the catalytic converter work
    description: >-
      A three-way catalyst only converts both the unburnt hydrocarbons and the nitrogen oxides if the
      air-to-fuel ratio is held within about one per cent of stoichiometric. The measurement that closes that
      loop is a doped zirconia tube in the exhaust, generating a voltage from the oxygen partial pressure
      difference across it by the relation set out in
      [electrode potentials](/chemistry/electrode-potentials/). Every petrol car built since the late 1970s
      carries one, and without it the converter described under [catalysis](/chemistry/catalysis/) would be
      far less effective.
    sources:
      - citation: "Riegel, J., Neumann, H. & Wiedenmann, H.-M. (2002). Exhaust gas sensors for automotive emission control. Solid State Ionics 152: 783–800."
        url: null
  - area: Semiconductor technology
    title: Parts per million as a design specification
    description: >-
      A silicon device works because boron or phosphorus has been introduced at concentrations around one atom
      in a million, placed to a tolerance of nanometres. Everything about the device — the carrier type, the
      junction position, the threshold voltage — is set by a defect population, and the manufacturing effort
      goes into controlling unwanted ones: a transition-metal atom at parts per billion will ruin a wafer, so
      the materials are purified to a degree reached nowhere else in industry. The electronic behaviour this
      produces is the subject of [solid-state physics](/physics/solid-state-physics/).
    domain: physics
    field_id: solid-state-physics
    sources:
      - citation: "Sze, S. M. & Ng, K. K. (2007). Physics of Semiconductor Devices, 3rd edition. Wiley."
        url: null
  - area: Gemstones and dosimetry
    title: Colour put in by radiation, and read back out
    description: >-
      Most blue topaz on sale was colourless until it was irradiated, and smoky quartz is quartz with trapped
      charges. The same physics is used to measure dose: heat an irradiated crystal and the trapped electrons
      recombine, emitting light in proportion to the radiation it received, which is how personal dosimeter
      badges work and how a buried pottery sherd can be dated from the dose it has absorbed since firing.
    sources:
      - citation: "McKeever, S. W. S. (1985). Thermoluminescence of Solids. Cambridge University Press."
        url: null

further_reading:
  - citation: "Kröger, F. A. (1964). The Chemistry of Imperfect Crystals. North-Holland."
    url: null
    note: The book that organised the subject; the notation and the diagrams are still in use unchanged.
  - citation: "Maier, J. (2004). Physical Chemistry of Ionic Materials. Wiley."
    url: null
    note: Modern, and unusually careful about where the dilute approximations stop working.
  - citation: "Mott, N. F. & Gurney, R. W. (1940). Electronic Processes in Ionic Crystals. Oxford University Press."
    url: null
    note: Written when colour centres were new; a model of reasoning from a spectrum to a structure.
---

## A Perfect Crystal Is Not the Lowest Free Energy

Crystals are introduced as perfect repetition, and the picture is a good first approximation that happens to be thermodynamically impossible.

{{fig:frenkel|Yakov Frenkel}} made the argument in 1926. Removing an atom from its site costs energy — call it $\Delta H$ per defect. But a crystal with $n$ vacancies distributed among $N$ sites can be arranged in an enormous number of ways, and that configurational entropy lowers the free energy. The first few vacancies are almost free, entropically speaking, because there are so many places to put them; the cost grows only logarithmically. So the free energy has a minimum at some finite $n$, and the perfect crystal is not it.

{{fig:schottky|Walter Schottky}} and {{fig:carl-wagner|Carl Wagner}} worked out the statistics and identified the two neutral combinations an ionic crystal can use: a vacancy paired with the displaced ion in an interstitial position, or vacancies on the cation and anion sublattices together. A crystal in equilibrium therefore contains a definite, calculable number of defects, and the number rises steeply with temperature.

That reframes the subject. Defects stop being damage to be minimised and become a property to be computed — and then, once the chemistry is understood, a property to be set.

## Composition Need Not Be Fixed

The chemical consequence is stranger than the thermodynamic one, and it cuts against something chemistry had treated as definitional.

A compound, since Proust won his argument with Berthollet in 1811, has a fixed composition; that is what distinguishes a compound from a mixture, and the whole of the atomic theory in [chemical composition](/chemistry/chemical-composition/) rests on it. Wagner and Schottky showed that for a large class of solids it is false. If a lattice can carry cation vacancies, and if the cation has a second accessible oxidation state, then some cations can simply be missing provided others are oxidised to compensate. The structure is unchanged; the formula is not.

Iron(II) oxide is the standard case. Prepared in equilibrium with metallic iron it is about Fe₀.₉₅O, and raising the oxygen pressure drives it to Fe₀.₈₄O — a continuous range, with one in six iron sites empty at the extreme and a third of the remaining iron present as Fe³⁺. Titanium oxides, tungsten oxides, cerium oxide, the uranium oxides and most of the transition-metal sulphides behave similarly. The composition is a function of the surrounding gas pressure, which means it is a variable rather than a fact about the compound.

{{fig:kroger|Ferdinand Kröger}} and {{fig:vink|Hendrik Vink}} then made this calculable in 1956 by the simple device of writing defects as chemical species. A vacancy has a site, a charge relative to the perfect lattice, and a concentration; defect formation can be written as a balanced equation; and mass action then gives concentrations as functions of temperature, doping and gas pressure. Plot the logarithm of each defect's concentration against the logarithm of oxygen pressure and the result is a diagram of straight lines whose slopes identify which defect is in charge in which regime. This is the point at which the subject became chemistry rather than physics with impurities.

{{fig:carl-wagner|Wagner}} used the same thinking in 1933 on a problem with immediate industrial weight. A metal oxidising in air is separated from the air by its own oxide, so the rate is set by how fast ions and electrons can cross that layer — which is a defect-transport question, answerable from independently measured diffusion data. The theory predicts the parabolic growth law and says which oxides protect, giving a mechanism to sit underneath the geometric criterion in [corrosion](/chemistry/corrosion/).

## Defects You Put There on Purpose

The step from calculating defects to installing them is where the field earns its place.

{{fig:pohl|Robert Pohl}}'s group at Göttingen found through the 1930s that pure alkali halides, colourless as grown, acquire strong absorption bands after X-irradiation or exposure to alkali vapour, and that the colour belongs to the crystal and not to any impurity. {{fig:seitz|Frederick Seitz}}, with {{fig:mott|Nevill Mott}} and {{fig:gurney|Ronald Gurney}}, identified the absorber: an electron trapped where an anion is missing, with energy levels inside the gap. Colour centres were the first defects to be seen one species at a time, and they are the reason most blue topaz on sale was colourless when it came out of the ground.

The general tool is **aliovalent doping**: substitute an ion of the wrong charge and the lattice is forced to make a compensating defect. Put calcium on a sodium site and one sodium vacancy must appear. Put yttrium on a zirconium site and one oxygen vacancy appears for every two yttriums. Because the dopant level is set when the material is made, the defect concentration becomes a composition rather than a temperature — and, as the next section shows, that is worth a great many orders of magnitude.

{{fig:magneli|Arne Magnéli}} found the limit of the picture. Reduced titanium and tungsten oxides do not scatter their missing oxygens at random; they remove entire planes of them and shear the structure across the gap, giving a series of distinct, closely spaced phases. At the concentrations that matter in practice, defects see each other, cluster and order. The dilute thermodynamics that makes the field calculable is an approximation that fails exactly where the useful materials are, which is the second open problem recorded above.

## A Closer Look: Why Doping Beats Heating

Take sodium chloride, where the Schottky pair formation enthalpy is about 2.3 eV. The equilibrium fraction of sites vacant is

$$
\frac{n}{N} = \exp\!\left(-\frac{\Delta H}{2kT}\right),
$$

the factor of two because one pair creates two vacancies. At room temperature, $kT = 0.0259$ eV:

$$
\frac{n}{N} = \exp\!\left(-\frac{2.3}{0.0517}\right) = e^{-44.5} = 5 \times 10^{-20}.
$$

Sodium chloride contains about $2.2 \times 10^{22}$ ion pairs per cubic centimetre, so that is roughly **one thousand vacancies per cubic centimetre**. Effectively none.

Now heat it to 1,000 K, close to melting, where $kT = 0.0862$ eV:

$$
\frac{n}{N} = \exp\!\left(-\frac{2.3}{0.172}\right) = e^{-13.4} = 1.6 \times 10^{-6},
$$

or about $3.5 \times 10^{16}$ per cubic centimetre. Heating by 700 degrees has multiplied the defect population by **thirteen orders of magnitude** — which is the sensitivity that makes the exponential the dominant fact about the subject.

Now do it chemically instead. Add calcium chloride at 0.1 mole per cent. Each Ca²⁺ sits on a Na⁺ site carrying one extra positive charge, and the lattice must create one sodium vacancy for each to stay neutral. The vacancy fraction is then simply the dopant fraction:

$$
\frac{n}{N} = 1 \times 10^{-3}, \qquad n = 2.2 \times 10^{19}\ \text{cm}^{-3}.
$$

Compare the three figures:

| Route | Vacancies per cm³ |
| --- | --- |
| Thermal, 300 K | ~10³ |
| Thermal, 1,000 K | $3.5 \times 10^{16}$ |
| 0.1% Ca²⁺ doping, any temperature | $2.2 \times 10^{19}$ |

One part in a thousand of an impurity beats heating to near the melting point by a factor of six hundred, and it does so at room temperature — and, crucially, the concentration no longer depends on temperature at all, because it is fixed by charge balance rather than by an equilibrium. **The defect population has become a composition.** That is the whole method of the field in one line.

Push it further and the consequence is a solid electrolyte. Zirconia doped with 8 mole per cent yttria has roughly 15% of its cation sites occupied by yttrium, which forces about **3.7% of all oxygen sites to be vacant**. With that many empty sites to hop into, oxide ions migrate freely: at 1,000 °C the conductivity is about 0.1 S cm⁻¹, which is the conductivity of a molar solution of potassium chloride at room temperature. A dense, hard, chemically inert ceramic conducts ions as well as brine does.

Two things follow that the arithmetic does not. First, the conductivity does not keep rising with doping; it peaks near 8% and falls thereafter, because the vacancies begin to associate with the dopants that created them and stop moving. The dilute theory predicts no such maximum, and no theory predicts where it will fall for a new composition. Second, this ceramic is the reason modern car exhausts are clean — not as a catalyst but as a sensor, generating a voltage from the oxygen difference across it and so letting the engine hold its air-to-fuel ratio within the one per cent window the catalyst requires.

## Where the Properties Live

Taken together the field makes a claim that is easy to state and was slow to accept: for a non-metallic solid, the interesting properties belong to the defects rather than to the lattice.

Ionic conduction needs vacancies. Electronic conduction in an oxide is usually carried by the mixed valence that non-stoichiometry produces. Colour in a nominally colourless crystal is a trapped charge. Semiconductor devices are built on impurities at one atom in a million, held to nanometre tolerances, with unwanted impurities excluded at parts per billion — the most demanding purity requirement in industry, in service of a defect specification. The catalytic activity of ceria in a converter comes from how readily it gives up oxygen and takes it back, which is non-stoichiometry doing work. And the lithium electrode of [batteries](/chemistry/batteries/) is a host whose composition is deliberately varied over a wide range while its framework survives.

What the field cannot yet do is predict these populations from first principles, because a concentration that depends exponentially on an energy demands an accuracy that computation does not reach, and because at useful concentrations the defects stop being independent. Both limits are recorded above. They are the reason materials screening of the kind described in [solid-state chemistry](/chemistry/solid-state-chemistry/) stops at thermodynamic stability and does not go on to say whether the compound will conduct.
