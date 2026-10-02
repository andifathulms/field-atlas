---
id: ligand-field-theory
domain: chemistry
thread: coordination
name: Ligand Field Theory
parent_ids:
  - coordination-chemistry
  - quantum-chemistry
era_emerged: 1929 – 1966
core_question: Why is one chromium complex violet and another yellow, and why do two complexes of the same ion differ in how many unpaired electrons they carry?

summary: |-
  Coordination compounds were named after their colours, and the colours are not decoration. A free transition-metal ion has five d orbitals of equal energy; put ligands around it and the symmetry is broken, so the five split into groups separated by an energy gap. That gap falls in the visible range. The colour of a complex is the gap, read directly.

  Hans Bethe worked out the splitting in 1929 for an ion in a crystal, treating the surroundings as point charges. John Van Vleck connected it to magnetism and conceded what the pure electrostatic picture could not explain — that the ligands also share electrons, so the field is a bonding effect and not just an electrostatic one. By the mid-1950s Leslie Orgel and J. S. Griffith had turned the result into working chemistry, and Yukito Tanabe and Satoru Sugano had tabulated it, so that an absorption spectrum could be converted into a number.

  The same gap decides a second question. Electrons can either spread out over all five orbitals, keeping their spins parallel, or pile into the lower group in pairs. Which one happens is a contest between the splitting and the cost of pairing two electrons in one orbital, and both quantities are measurable — so whether a complex is magnetic is predictable from two numbers. It is one of the few places in chemistry where a qualitative property follows from an inequality.

key_ideas:
  - term: Crystal field splitting
    definition: >-
      The energy gap, written $\Delta_{\mathrm{oct}}$, between the two sets of d orbitals in an octahedral
      complex: three pointing between the ligands, two pointing at them. Typically 10,000 to 30,000 cm⁻¹,
      which is to say 1 to 4 eV, which is to say visible light.
    turning_point_id: bethe-crystal-field
  - term: High spin and low spin
    definition: >-
      Two ways to fill the split orbitals. Spreading out keeps spins parallel and costs the splitting;
      pairing up pays the splitting and costs the pairing energy. The larger of the two quantities wins,
      so the same metal ion can be strongly magnetic with one ligand and diamagnetic with another.
    turning_point_id: tanabe-sugano-diagrams
  - term: Spectrochemical series
    definition: >-
      Ligands ordered by how large a splitting they produce, found by Tsuchida to be nearly independent of
      the metal: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < CN⁻ < CO. A transferable order of this kind is
      what makes the theory predictive rather than merely descriptive.
    turning_point_id: spectrochemical-series
  - term: Ligand field stabilisation energy
    definition: >-
      The net energy a complex gains from having its d electrons in the lower orbitals rather than spread
      evenly. It varies across a transition series in a double-humped pattern that shows up in hydration
      energies, lattice energies and ionic radii — a thermodynamic fingerprint of the splitting.
    turning_point_id: orgel-griffith-ligand-field
  - term: Jahn–Teller distortion
    definition: >-
      A non-linear molecule in an electronically degenerate state cannot stay symmetric: it distorts until
      the degeneracy is lifted. This is why copper(II) complexes are never regular octahedra but have four
      short bonds and two long ones.
    turning_point_id: jahn-teller-distortion
  - term: Charge-transfer band
    definition: >-
      An absorption in which an electron moves between metal and ligand rather than between d orbitals.
      Because it is not forbidden by symmetry it is a hundred to a thousand times more intense, which is
      why permanganate is violently purple and a copper solution is merely blue.
    turning_point_id: orgel-griffith-ligand-field

turning_points:
  - id: bethe-crystal-field
    date: "1929"
    type: MECHANISM-ESTABLISHED
    title: Bethe splits the d orbitals by symmetry
    description: >-
      Hans Bethe analyses what happens to the energy levels of an ion when it is placed in a lattice
      whose surroundings have a definite symmetry, using group theory to find how the degeneracies break.
      For an octahedral environment the five d orbitals divide into a set of three and a set of two,
      separated by an energy that depends on the field strength. The paper is written as crystal physics
      and treats the ligands as point charges; it would be fifteen years before chemists made much use of
      it, and twenty-five before it was recognised as the explanation of their colours.
    contested: false
    sources:
      - citation: "Bethe, H. (1929). Termaufspaltung in Kristallen. Annalen der Physik 3: 133–208."
        url: null
      - citation: "Ballhausen, C. J. (1962). Introduction to Ligand Field Theory. McGraw-Hill."
        url: null

  - id: cambi-spin-crossover
    date: 1931 – 1964
    type: MECHANISM-ESTABLISHED
    title: A complex that changes its magnetism with temperature
    description: >-
      Luigi Cambi finds that certain iron dithiocarbamate complexes have magnetic moments that do not
      match either expected value and vary strongly with temperature. The interpretation, settled only in
      the 1960s once the splitting and pairing energies could be estimated, is that the two spin states
      are so close in energy that the compound occupies both, shifting from one to the other as the
      temperature changes. Spin crossover is the clearest available demonstration that the two
      arrangements are genuinely in competition rather than being properties of different ligands.
    contested: false
    sources:
      - citation: "Cambi, L. & Szegö, L. (1931). Über die magnetische Susceptibilität der komplexen Verbindungen. Berichte der Deutschen Chemischen Gesellschaft 64: 2591–2598."
        url: null
      - citation: "Gütlich, P. & Goodwin, H. A. (2004). Spin crossover — an overall perspective. Topics in Current Chemistry 233: 1–47."
        url: null

  - id: van-vleck-ligand-field
    date: 1932 – 1935
    type: MECHANISM-ESTABLISHED
    title: Van Vleck connects the splitting to magnetism, and admits covalency
    description: >-
      John Van Vleck works out how the split levels determine magnetic susceptibility, giving the theory
      an observable independent of colour, and shows that the same splitting can be derived either from
      electrostatics or from orbital overlap with the ligands. The second derivation matters: a purely
      electrostatic field cannot explain why cyanide and carbon monoxide, which are neutral or singly
      charged, produce the largest splittings of all. Admitting that the metal and the ligands share
      electrons is what turns crystal field theory into ligand field theory.
    contested: false
    sources:
      - citation: "Van Vleck, J. H. (1932). The Theory of Electric and Magnetic Susceptibilities. Oxford University Press."
        url: null
      - citation: "Van Vleck, J. H. (1935). Valence strength and the magnetism of complex salts. Journal of Chemical Physics 3: 807–813."
        url: null

  - id: jahn-teller-distortion
    date: "1937"
    type: MECHANISM-ESTABLISHED
    title: A degenerate state cannot stay symmetric
    description: >-
      Hermann Jahn and Edward Teller prove that any non-linear molecule in an electronically degenerate
      state has a distortion available to it that lowers its energy, so the symmetric arrangement cannot
      be a minimum. The consequence in coordination chemistry is visible in bond lengths: copper(II),
      with nine d electrons, has an unavoidable degeneracy in the upper pair of orbitals and therefore
      never forms a regular octahedron, adopting instead four short bonds and two long ones. The theorem
      explains a pattern that had been catalogued as an oddity of copper.
    contested: false
    sources:
      - citation: "Jahn, H. A. & Teller, E. (1937). Stability of polyatomic molecules in degenerate electronic states. Proceedings of the Royal Society A 161: 220–235."
        url: https://doi.org/10.1098/rspa.1937.0142
      - citation: "Halcrow, M. A. (2013). Jahn–Teller distortions in transition metal compounds. Chemical Society Reviews 42: 1784–1795."
        url: null

  - id: spectrochemical-series
    date: "1938"
    type: TECHNIQUE-INVENTED
    title: Ligands ordered by the splitting they produce
    description: >-
      Ryutaro Tsuchida, working in Osaka, compares absorption spectra across many complexes and finds that
      the ligands fall into a sequence by the size of the splitting they impose, and that the sequence is
      nearly the same whichever metal is used. Iodide is weakest, then bromide, chloride, fluoride,
      hydroxide, water, ammonia, cyanide and carbon monoxide. Because the order transfers between metals,
      a chemist can predict the colour and the spin state of a complex never made, which is what lifted the
      theory out of description.
    contested: false
    sources:
      - citation: "Tsuchida, R. (1938). Absorption spectra of co-ordination compounds I. Bulletin of the Chemical Society of Japan 13: 388–400."
        url: null
      - citation: "Jørgensen, C. K. (1962). Absorption Spectra and Chemical Bonding in Complexes. Pergamon."
        url: null

  - id: tanabe-sugano-diagrams
    date: "1954"
    type: TECHNIQUE-INVENTED
    title: Diagrams that turn a spectrum into a number
    description: >-
      Yukito Tanabe and Satoru Sugano compute, for each d-electron count, how the energies of all the
      electronic states vary as the field strength increases, and plot the results against the splitting.
      Their diagrams let a chemist take two or three measured absorption bands and read off both the
      splitting and the electron repulsion parameter for that compound, with the spin-state change
      appearing as a kink in the lines. It converted a spectrum from a fingerprint into a measurement.
    contested: false
    sources:
      - citation: "Tanabe, Y. & Sugano, S. (1954). On the absorption spectra of complex ions I. Journal of the Physical Society of Japan 9: 753–766."
        url: null
      - citation: "Tanabe, Y. & Sugano, S. (1954). On the absorption spectra of complex ions II. Journal of the Physical Society of Japan 9: 766–779."
        url: null

  - id: orgel-griffith-ligand-field
    date: 1954 – 1957
    type: THEORY-REPLACED
    title: Chemists take the theory over
    description: >-
      Leslie Orgel and J. S. Griffith bring the physicists' results into chemistry, publishing a review
      that names the subject ligand field theory and shows it accounting for colours, magnetic moments,
      the double-humped variation of hydration energies across a transition series, the stabilities in
      the Irving–Williams order, and the anomalous ionic radii. Pauling's valence-bond account of
      complexes, which had assigned hybrid orbitals case by case, is displaced: it could rationalise a
      known complex but it predicted no colours and no systematic trends.
    contested: false
    sources:
      - citation: "Orgel, L. E. (1952). The effects of crystal fields on the properties of transition-metal ions. Journal of the Chemical Society: 4756–4761."
        url: null
      - citation: "Griffith, J. S. & Orgel, L. E. (1957). Ligand-field theory. Quarterly Reviews of the Chemical Society 11: 381–393."
        url: null

open_problems:
  - id: spin-state-energetics
    name: Computing the gap between two spin states accurately
    status: open
    status_note: Open as of 2026; common density functionals disagree with one another by more than the quantity being predicted.
    description: >-
      Whether a complex is high spin or low spin, and by how much, is a difference of a few kilojoules per
      mole between states of different multiplicity. Density functional calculations of that difference
      vary with the choice of functional by fifty kilojoules per mole or more, and the variation is
      systematic — functionals with more exact exchange favour the high-spin state — so the answer can be
      selected rather than computed. Methods that do better are too expensive for molecules of interesting
      size.
    why_hard: >-
      The two states differ in how electrons are paired, which is exactly the correlation that approximate
      exchange-correlation functionals handle worst, and the error does not cancel between states of
      different spin. Benchmarks against experiment are scarce because the measured quantity is usually a
      solution equilibrium that includes solvation and entropy.
    unlocks: >-
      Spin state controls reactivity in metalloenzymes and in oxidation catalysis, and spin-crossover
      compounds are candidates for molecular switches and memory. All of that design work currently
      proceeds by synthesis and measurement rather than by calculation.
    sources:
      - citation: "Swart, M. (2008). Accurate spin-state energies for iron complexes. Journal of Chemical Theory and Computation 4: 2057–2066."
        url: null
      - citation: "Radoń, M. (2019). Benchmarking quantum chemistry methods for spin-state energetics of iron complexes. Physical Chemistry Chemical Physics 21: 4854–4870."
        url: null

  - id: f-block-ligand-field
    name: A usable ligand field theory for the f elements
    status: open
    status_note: Open as of 2026; parameters are fitted per compound rather than predicted, and the degree of covalency in actinide bonding is still argued.
    description: >-
      For the lanthanides and actinides the f orbitals are shielded by the outer shells, so the splitting
      is small — hundreds of wavenumbers rather than tens of thousands — while the number of electronic
      states is very large and spin–orbit coupling is comparable to everything else. The result is spectra
      with dozens of sharp lines that are assigned by fitting, not predicted, and no transferable series
      of ligands analogous to Tsuchida's.
    why_hard: >-
      Spin–orbit coupling, electron repulsion and the ligand field are all of similar magnitude, so none
      can be treated as a perturbation on the others. Covalency in actinide–ligand bonds is real but small,
      and the experiments that would quantify it require facilities licensed to handle the elements.
    unlocks: >-
      Separating the actinides from the lanthanides is the central chemical difficulty in nuclear waste
      treatment, and it turns on small differences in bonding. Lanthanide luminescence underlies displays,
      lighting and biological probes, and single-molecule magnets are designed around f-element anisotropy.
    sources:
      - citation: "Liu, G. & Jacquier, B. (2005). Spectroscopic Properties of Rare Earths in Optical Materials. Springer."
        url: null
      - citation: "Neidig, M. L., Clark, D. L. & Martin, R. L. (2013). Covalency in f-element complexes. Coordination Chemistry Reviews 257: 394–406."
        url: null

applications:
  - area: Gemstones and pigments
    title: The same ion, two famous colours
    description: >-
      Ruby and emerald both owe their colour to chromium(III) replacing a little aluminium in a host
      crystal. In corundum the sites are small, the field is strong and the absorption sits in the
      yellow-green, leaving red; in beryl the sites are larger, the field weaker, the absorption shifted,
      and the stone is green. One impurity ion, two gemstones, and the difference is a few per cent in a
      bond length. The same reasoning is how cobalt blue, chrome yellow and ultramarine are understood.
    sources:
      - citation: "Burns, R. G. (1993). Mineralogical Applications of Crystal Field Theory, 2nd edition. Cambridge University Press."
        url: null
  - area: Medical imaging
    title: Why the contrast agent is gadolinium
    description: >-
      Magnetic resonance images are sharpened by injecting a paramagnetic complex that shortens the
      relaxation time of nearby water protons. Gadolinium(III) is chosen because it carries seven unpaired
      f electrons with almost no orbital contribution, giving a large magnetic moment and a slow electronic
      relaxation — precisely the combination the relaxation theory calls for. The free ion is toxic, so it
      is administered wrapped in a chelate whose stability constant is large enough to keep it bound for
      the hours it takes to clear.
    domain: biology
    sources:
      - citation: "Caravan, P. et al. (1999). Gadolinium(III) chelates as MRI contrast agents. Chemical Reviews 99: 2293–2352."
        url: null
  - area: Lighting and displays
    title: Phosphors designed around a splitting
    description: >-
      A white light-emitting diode is a blue diode coated with a phosphor that converts part of the blue
      to longer wavelengths, and the phosphor's emission colour is a ligand field problem: the host lattice
      sets the field at the activator ion, and the field sets the emission. Europium and manganese
      activators in nitride and fluoride hosts were developed by moving the emission a few tens of
      nanometres at a time, which is how warm-white lighting with a deep red component was achieved.
    sources:
      - citation: "Xia, Z. & Liu, Q. (2016). Progress in discovery and structural design of colour conversion phosphors for LEDs. Progress in Materials Science 84: 59–117."
        url: null

further_reading:
  - citation: "Ballhausen, C. J. (1962). Introduction to Ligand Field Theory. McGraw-Hill."
    url: null
    note: The book that taught the subject to a generation of chemists; still the clearest derivation.
  - citation: "Figgis, B. N. & Hitchman, M. A. (2000). Ligand Field Theory and Its Applications. Wiley-VCH."
    url: null
    note: Modern, with the magnetism and the spectroscopy worked through on real compounds.
  - citation: "Burns, R. G. (1993). Mineralogical Applications of Crystal Field Theory, 2nd edition. Cambridge University Press."
    url: null
    note: What the theory looks like when the ligands are a mineral rather than a chemist's choice.
---

## Why a Copper Solution Is Blue

The compounds in [coordination chemistry](/chemistry/coordination-chemistry/) were named for their colours before anyone knew what the colours meant. Luteo yellow, purpureo purple, praseo green: a vocabulary of pigments standing in for a vocabulary of structures.

The colours come from the d electrons. A free transition-metal ion has five d orbitals of exactly equal energy, and an electron cannot absorb light by moving between orbitals of equal energy. Surround the ion with ligands and that equality is destroyed, because the orbitals no longer all point the same way relative to the surroundings. Now there is a gap, and a photon matching the gap is absorbed.

The size of the gap is the whole subject. For chromium(III), changing nothing but the ligand:

| Complex | Splitting (cm⁻¹) | Absorption | Colour seen |
| --- | --- | --- | --- |
| [CrCl₆]³⁻ | 13,600 | ~735 nm | green |
| [Cr(H₂O)₆]³⁺ | 17,400 | ~575 nm | violet |
| [Cr(NH₃)₆]³⁺ | 21,600 | ~463 nm | yellow |
| [Cr(CN)₆]³⁻ | 26,600 | ~376 nm | pale yellow |

Same metal, same oxidation state, same coordination number, same geometry. The colour is reporting on the ligand.

There is a second kind of colour in these compounds, and the difference between the two is a matter of intensity rather than wavelength. A d-to-d transition is forbidden by a symmetry rule and occurs only because vibrations spoil the symmetry, so it is weak: the molar absorptivity of [Cu(H₂O)₆]²⁺ is about **10** L mol⁻¹ cm⁻¹. Permanganate's purple is not a d-to-d transition at all — manganese(VII) has no d electrons — but an electron moving from the oxygens to the metal, which no rule forbids, and its absorptivity is about **2,400**. The ratio is why a permanganate solution 240 times more dilute is just as strongly coloured, and why a titration can be run to a permanganate endpoint with no indicator.

## What the Ligands Do to the d Orbitals

{{fig:hans-bethe|Hans Bethe}} did the analysis in 1929, for an ion in a crystal, as a problem in group theory: given the symmetry of the surroundings, which degeneracies survive? In an octahedral environment, two of the five d orbitals point directly at the ligands and three point between them. The two that point at the ligands are raised, the three are lowered, and the separation is the splitting $\Delta_{\mathrm{oct}}$.

Bethe treated the ligands as point charges, which is where the name crystal field comes from, and it works surprisingly well. But it fails on an important case. Carbon monoxide is neutral and cyanide carries one negative charge, while fluoride also carries one — and the splitting from carbon monoxide is the largest known, several times fluoride's. An electrostatic model cannot produce that ordering. {{fig:van-vleck|John Van Vleck}} showed that the same splitting pattern follows from orbital overlap, with the ligands' electrons mixing into the metal's, and that the strong-field ligands are precisely those that accept electron density back from the metal into their own empty orbitals. Once the bonding is admitted, the theory is a ligand field theory, and {{fig:tsuchida|Ryutaro Tsuchida}}'s empirical ordering of ligands — nearly the same for every metal — has a reason behind it.

{{fig:yukito-tanabe|Yukito Tanabe}} and {{fig:satoru-sugano|Satoru Sugano}} then made it quantitative. For each number of d electrons they computed how every electronic state's energy varies with field strength and plotted the lot. Given two or three measured absorption bands, a chemist reads the splitting and the electron repulsion off the diagram. The step from "the colour tells you about the ligand" to "the spectrum gives you two numbers" is what made the theory usable, and it is the reason this field belongs as much to [spectroscopic structure determination](/chemistry/spectroscopic-structure-determination/) as to bonding.

## Shapes That Will Not Stay Regular

{{fig:hermann-jahn|Hermann Jahn}} and {{fig:edward-teller|Edward Teller}} proved something in 1937 that applies to all molecules and bites hardest here. If a non-linear molecule is in an electronically degenerate state, some distortion always exists that lowers its energy. The symmetric geometry cannot be a minimum.

Copper(II) has nine d electrons: six fill the lower three orbitals, three go into the upper two, and there is no way to arrange three electrons in two orbitals without a degeneracy. So copper(II) distorts, always. In [Cu(H₂O)₆]²⁺ four bonds are about 1.95 Å and two are stretched to roughly 2.40 Å — a 23% difference that was catalogued for decades as a peculiarity of copper before it was recognised as a theorem.

{{fig:luigi-cambi|Luigi Cambi}} found the other kind of instability in 1931, and it took thirty years to interpret. Some iron complexes have magnetic moments between the two expected values, and the moment changes with temperature. The explanation is that the two possible electron arrangements are so nearly equal in energy that the compound sits in both at once, the balance shifting with temperature — spin crossover, which is both a confirmation that the two arrangements genuinely compete and the basis of a family of molecular switches.

## A Closer Look: Two Numbers Decide the Spin State

Take iron(II), six d electrons, octahedral. There are two ways to place them.

**Spread out**: four electrons in the lower set, two in the upper, spins kept parallel as far as possible. Four unpaired electrons. Taking the lower orbitals as $-0.4\Delta$ and the upper as $+0.6\Delta$ relative to the mean, the field energy is

$$
4(-0.4\Delta) + 2(+0.6\Delta) = -1.6\Delta + 1.2\Delta = -0.4\Delta.
$$

**Piled up**: all six in the lower set, as three pairs. No unpaired electrons. The field energy is

$$
6(-0.4\Delta) = -2.4\Delta,
$$

which is better by $2.0\Delta$. But it costs something. The free ion has six electrons in five orbitals, so one pair is unavoidable; the spread-out arrangement also has exactly one pair; the piled-up arrangement has three. Two extra pairs, at a pairing energy $P$ each, so the comparison is

$$
E_{\text{low spin}} - E_{\text{high spin}} = -2.0\Delta + 2P.
$$

Piling up wins when $\Delta > P$. One inequality, two measurable quantities.

For iron(II) the pairing energy is about **17,600 cm⁻¹**. Now put in the ligands:

| Complex | $\Delta$ (cm⁻¹) | $\Delta$ vs $P$ | Predicted | Unpaired electrons |
| --- | --- | --- | --- | --- |
| [Fe(H₂O)₆]²⁺ | 10,400 | 10,400 < 17,600 | spread out | 4 |
| [Fe(CN)₆]⁴⁻ | 33,000 | 33,000 > 17,600 | piled up | 0 |

And the prediction is checkable without any spectroscopy, because unpaired electrons are magnetic. For $n$ unpaired electrons the spin-only magnetic moment is

$$
\mu = \sqrt{n(n+2)}\ \mu_{\mathrm{B}},
$$

so four unpaired electrons give $\sqrt{24} = 4.90$ Bohr magnetons and none gives zero. Measured: iron(II) in water sits at 5.1 to 5.5 — above the spin-only figure, because some orbital motion survives, which is itself diagnostic — and the hexacyanoferrate(II) ion is diamagnetic. A bottle of green vitriol is attracted to a magnet and a bottle of yellow prussiate is not.

Two consequences are worth drawing out. First, the splitting is not small compared with chemical energies. Taking $\Delta = 20{,}300$ cm⁻¹, the value for [Ti(H₂O)₆]³⁺:

$$
20{,}300\ \text{cm}^{-1} = 2.52\ \text{eV} = 243\ \text{kJ mol}^{-1},
$$

which is the order of a chemical bond. An effect of that size cannot be a detail, and it is not: it shows up in hydration energies, lattice energies and ionic radii as a double-humped departure from the smooth trend across a transition series, which {{fig:orgel|Leslie Orgel}} and {{fig:js-griffith|J. S. Griffith}} used as the thermodynamic evidence for the theory.

Second, the inequality $\Delta > P$ is a statement about design. Both quantities are adjustable — $P$ by choosing the metal and its oxidation state, $\Delta$ by choosing the ligands — and near the crossing point small changes flip the state. That is where spin crossover lives, and it is why a compound can be switched between magnetic and non-magnetic by temperature, pressure or light. It is also why the calculation of these energies, recorded above as this field's open problem, matters more than its apparent precision suggests: a method whose error is 50 kJ mol⁻¹ cannot resolve a competition decided by a few.

## What the Theory Was Good For

Ligand field theory displaced {{fig:pauling|Pauling}}'s valence-bond account of complexes, which assigned a set of hybrid orbitals to each compound after the fact and predicted neither a colour nor a trend. The replacement was decided on coverage: colours, magnetic moments, the Irving–Williams order of stabilities, the double-humped hydration energies, the anomalous radii and the distortions all came out of one picture.

What it bought beyond explanation is a design variable. Mineralogy reads the field backwards, inferring the site a transition-metal impurity occupies from the colour it produces — which is how ruby and emerald turn out to be the same chromium ion in two different holes. Phosphor chemistry tunes the emission of a lighting-grade material by changing the host lattice around the activator. And in [bioinorganic chemistry](/chemistry/bioinorganic-chemistry/) the spin state of an iron centre is not a spectroscopic curiosity but the thing that decides whether oxygen binds reversibly or tears a molecule apart — a protein holding its metal at a chosen point on the inequality above.
