---
id: chemical-bonding
domain: chemistry
thread: substance
name: Chemical Bonding
parent_ids:
  - periodic-system
era_emerged: 1852 – 1957
core_question: What holds two atoms together, how strongly, and why does it fix the shape of the molecule they make?

summary: |-
  By 1860 chemists could say which atoms were in a compound and in what numbers. What held them there was unknown, and the leading account — Berzelius's, that combination is electrical attraction between oppositely charged atoms — was contradicted by the existence of molecules like $\mathrm{Cl_2}$, where the two partners are identical. Edward Frankland supplied the first useful abstraction in 1852: each element has a fixed combining power, a number of attachments it can make. Valence explained formulas without explaining anything about mechanism, and it worked so well that chemistry used it for sixty years as a bookkeeping rule drawn as a dash between letters.

  The dash acquired a content in 1916, when Gilbert Lewis proposed that it stands for a *pair of electrons shared* between two atoms, with eight around each as the stable configuration. In the same years Walther Kossel developed the opposite case, complete transfer of electrons to give ions held by electrostatics, and the Born–Haber cycle made that case quantitative: the energy of an ionic crystal can be computed from first principles and checked against measured heats. Linus Pauling then showed that the two pictures are ends of a continuum, with a numerical scale — electronegativity — saying where any given bond sits on it.

key_ideas:
  - term: Valence
    definition: >-
      The fixed number of bonds an atom forms: one for hydrogen, four for carbon. A combining capacity
      inferred from formulas, with no account of what a bond is, and sufficient to predict thousands
      of compounds.
    turning_point_id: frankland-valence
  - term: Shared electron pair
    definition: >-
      A covalent bond is two electrons belonging to both atoms at once. The pair, not the transfer, is
      what holds identical atoms together, and the dash chemists had been drawing since the 1860s turns
      out to stand for it.
    turning_point_id: lewis-electron-pair
  - term: Octet rule
    definition: >-
      Atoms tend towards eight electrons in their outer shell, by sharing or transfer. It fails for
      hydrogen, for the transition metals and for a good number of main-group compounds, and it
      predicts the formulas of the rest.
    turning_point_id: lewis-electron-pair
  - term: Lattice energy
    definition: >-
      The energy released when gaseous ions assemble into a crystal. It cannot be measured directly
      and can be obtained two independent ways — from a thermodynamic cycle, and from a sum over
      electrostatic attractions — which is what established that ionic bonding is simply charges.
    turning_point_id: born-haber-cycle
  - term: Electronegativity
    definition: >-
      A number, per element, for how strongly an atom draws the shared electrons towards itself.
      Differences predict a bond's polarity: near zero is covalent, above about 1.7 is substantially
      ionic, and everything in between is the normal case.
    turning_point_id: pauling-nature-of-the-chemical-bond
  - term: Hydrogen bond
    definition: >-
      A weak directional attraction between a hydrogen already bonded to a very electronegative atom
      and a lone pair on another. At about a twentieth the strength of a covalent bond it is strong
      enough to organise liquids and biological structures and weak enough to be broken at room
      temperature.
    turning_point_id: hydrogen-bond

turning_points:
  - id: frankland-valence
    date: 1852 – 1864
    type: MECHANISM-ESTABLISHED
    title: Frankland's combining power
    description: >-
      Edward Frankland, working on organometallic compounds, notices that an element's compounds are
      always satisfied by the same number of partners: nitrogen takes three or five, zinc two, and the
      pattern holds whatever the partners are. He proposes that each element has a definite combining
      power. The notion is entirely formal — it says how many, not why — and within a decade it had
      become the dash drawn between atoms in a structural formula, which is how chemistry still
      represents a bond.
    contested: false
    sources:
      - citation: "Frankland, E. (1852). On a new series of organic bodies containing metals. Philosophical Transactions of the Royal Society 142: 417–444."
        url: null
      - citation: "Russell, C. A. (1971). The History of Valency. Leicester University Press."
        url: null

  - id: lewis-electron-pair
    date: 1916 – 1923
    type: THEORY-REPLACED
    title: Lewis's shared pair
    description: >-
      Gilbert Lewis proposes that a chemical bond is a pair of electrons held jointly by two atoms, and
      that atoms seek eight outer electrons — drawing the arrangement as dots at the corners of a cube.
      The idea accounts for the one thing electrical theories of combination could not: a bond between
      two identical atoms, which no transfer of charge can explain. Irving Langmuir publicised and
      extended it, and Lewis's 1923 monograph also generalised acids and bases as electron-pair
      acceptors and donors.
    contested: false
    sources:
      - citation: "Lewis, G. N. (1916). The atom and the molecule. Journal of the American Chemical Society 38: 762–785."
        url: null
      - citation: "Lewis, G. N. (1923). Valence and the Structure of Atoms and Molecules. Chemical Catalog Company."
        url: null
      - citation: "Jensen, W. B. (1984). Abegg, Lewis, Langmuir, and the octet rule. Journal of Chemical Education 61: 191–200."
        url: null

  - id: born-haber-cycle
    date: 1919
    type: TECHNIQUE-INVENTED
    title: The Born–Haber cycle
    description: >-
      Walther Kossel had argued in 1916 that in salts the electrons are transferred outright, leaving
      ions held together electrostatically. Max Born and Fritz Haber supply the test. The energy of the
      crystal lattice cannot be measured directly, but it can be obtained by a cycle: add the heats of
      sublimation, ionisation, dissociation and electron attachment to the heat of formation, and the
      remainder is the lattice energy. Compare that with a direct sum over all the electrostatic
      attractions and repulsions in the lattice, and the two agree within a few per cent.
    contested: false
    sources:
      - citation: "Born, M. (1919). Eine thermochemische Anwendung der Gittertheorie. Verhandlungen der Deutschen Physikalischen Gesellschaft 21: 13–24."
        url: null
      - citation: "Haber, F. (1919). Betrachtungen zur Theorie der Wärmetönung. Verhandlungen der Deutschen Physikalischen Gesellschaft 21: 750–768."
        url: null
      - citation: "Kossel, W. (1916). Über Molekülbildung als Frage des Atombaus. Annalen der Physik 49: 229–362."
        url: null

  - id: hydrogen-bond
    date: 1920 – 1939
    type: MECHANISM-ESTABLISHED
    title: The weak bond that organises everything
    description: >-
      Wendell Latimer and Worth Rodebush, in Lewis's laboratory, explain water's extraordinary boiling
      point, dielectric constant and association by proposing that a hydrogen atom bonded to oxygen can
      be held weakly by a lone pair on a second oxygen. Pauling's 1939 book established the name and
      the geometry. At 20 to 40 kJ/mol it is an order of magnitude weaker than a covalent bond, which
      is exactly why it matters: strong enough to impose structure, weak enough to be made and broken
      continually at room temperature.
    contested: false
    sources:
      - citation: "Latimer, W. M. & Rodebush, W. H. (1920). Polarity and ionization from the standpoint of the Lewis theory of valence. Journal of the American Chemical Society 42: 1419–1433."
        url: null
      - citation: "Pauling, L. (1939). The Nature of the Chemical Bond. Cornell University Press, chapter 9."
        url: null

  - id: pauling-nature-of-the-chemical-bond
    date: 1931 – 1939
    type: MECHANISM-ESTABLISHED
    title: Pauling's synthesis
    description: >-
      Linus Pauling brings quantum mechanics to bear on bonding in a form chemists could use, without
      requiring them to solve anything. Hybridisation explains why carbon's four bonds point to the
      corners of a tetrahedron; resonance describes molecules, like benzene, that no single structure
      fits; and the electronegativity scale, derived from bond energies, puts a number on how polar any
      bond is. *The Nature of the Chemical Bond* (1939) is among the most cited books in science, and
      its arguments are mostly qualitative conclusions from quantitative reasoning.
    contested: true
    contested_note: >-
      Pauling's valence-bond approach, built from localised pairs, competed with the molecular-orbital
      approach of Hund and Mulliken, in which electrons occupy orbitals spread over the whole molecule.
      Pauling's was more intuitive and dominated chemistry for thirty years; molecular orbital theory
      explains spectra, excited states and the paramagnetism of $\mathrm{O_2}$ better and now dominates
      calculation. They are different approximations to the same thing, and the argument over resonance
      — which some chemists held to be an artefact of the method — was sharp enough to be conducted
      politically in the Soviet Union.
    sources:
      - citation: "Pauling, L. (1931). The nature of the chemical bond. Journal of the American Chemical Society 53: 1367–1400."
        url: null
      - citation: "Pauling, L. (1939). The Nature of the Chemical Bond. Cornell University Press."
        url: null
      - citation: "Hager, T. (1995). Force of Nature: The Life of Linus Pauling. Simon & Schuster."
        url: null

  - id: vsepr-shapes
    date: 1940 – 1957
    type: MECHANISM-ESTABLISHED
    title: Shape from counting pairs
    description: >-
      Nevil Sidgwick and Herbert Powell observe that a molecule's shape follows from the number of
      electron pairs around its central atom, and Ronald Gillespie and Ronald Nyholm turn it into a
      procedure: count bonding and lone pairs, arrange them as far apart as possible, and read off the
      geometry. Four pairs give a tetrahedron, three a flat triangle, and a lone pair pushes harder
      than a bonding pair, which is why water is bent by 104.5° rather than 109.5°. It is the most
      successful piece of back-of-envelope prediction in chemistry.
    contested: false
    sources:
      - citation: "Sidgwick, N. V. & Powell, H. M. (1940). Stereochemical types and valency groups. Proceedings of the Royal Society A 176: 153–180."
        url: null
      - citation: "Gillespie, R. J. & Nyholm, R. S. (1957). Inorganic stereochemistry. Quarterly Reviews of the Chemical Society 11: 339–380."
        url: null

open_problems:
  - id: what-counts-as-a-bond
    name: What counts as a chemical bond
    status: open
    status_note: Open as of 2026; there is no agreed operational definition, and the standard analyses disagree on real molecules.
    description: >-
      Chemistry's central object has no definition that survives hard cases. The methods used to
      extract bonds from a calculated electron density — topological analysis of the density, electron
      localisation functions, natural bond orbitals, delocalisation indices — assign different bonds
      and different bond orders to the same molecule. One well-known dispute concerns whether two
      hydrogen atoms pressed against each other in a crowded hydrocarbon are bonded or repelling: one
      method finds a bond path between them, another finds a destabilising contact.
    why_hard: >-
      A molecule's wavefunction is a single object that does not partition uniquely into bonds, so
      every scheme for recovering them introduces a convention. The conventions agree on easy
      molecules, which is why the concept works, and diverge wherever the interesting chemistry is:
      metal–metal interactions, charge-shift bonds, hypervalent compounds, weak contacts.
    unlocks: >-
      Bond energies and bond orders are used to rationalise reactivity, assign structures and teach the
      subject. A definition that agreed with the calculations would turn a working intuition into
      something that can be computed without choosing a school first.
    sources:
      - citation: "Bader, R. F. W. (1990). Atoms in Molecules: A Quantum Theory. Clarendon Press."
        url: null
      - citation: "Shaik, S. et al. (2009). Charge-shift bonding and its manifestations in chemistry. Nature Chemistry 1: 443–449."
        url: null
      - citation: "Frenking, G. & Shaik, S. (eds) (2014). The Chemical Bond: Fundamental Aspects of Chemical Bonding. Wiley-VCH."
        url: null

applications:
  - area: Molecular biology
    title: Why the double helix has two strands
    description: >-
      The structures that hold biological molecules in shape are hydrogen bonds — strong enough to
      specify which base pairs with which and to hold a protein's helix together, weak enough that a
      polymerase can separate the strands without breaking anything covalent. Pauling's geometry of the
      hydrogen bond is the constraint that made the base pairing in DNA work out, and the
      alpha-helix came out of the same analysis.
    domain: biology
    field_id: molecular-biology
    sources:
      - citation: "Pauling, L. (1939). The Nature of the Chemical Bond. Cornell University Press, chapter 9."
        url: null
      - citation: "Watson, J. D. & Crick, F. H. C. (1953). Molecular structure of nucleic acids. Nature 171: 737–738."
        url: null
  - area: Materials
    title: Hardness, melting point and what a solid is for
    description: >-
      Whether a solid is held together by shared pairs, by ions, by delocalised metallic electrons or
      by weak intermolecular forces decides almost everything practical about it: diamond and graphite
      are the same element bonded differently, salt is hard and brittle and dissolves, metals conduct
      and deform. Choosing a material is largely choosing a bonding type, and the strength of the bonds
      sets the melting point to within a rough factor.
    sources:
      - citation: "Pettifor, D. G. (1995). Bonding and Structure of Molecules and Solids. Oxford University Press."
        url: null
  - area: Solid-state physics
    title: Why some lattices conduct
    description: >-
      The chemist's bonding types and the physicist's band structure are two descriptions of the same
      electrons. A covalent solid's filled bonding and empty antibonding levels are a full valence band
      and an empty conduction band; a metal's delocalised electrons are a partly filled band. Reading
      one language into the other is how semiconductors are designed, by choosing elements for their
      electronegativity difference and so for their gap.
    domain: physics
    field_id: solid-state-physics
    sources:
      - citation: "Hoffmann, R. (1988). Solids and Surfaces: A Chemist's View of Bonding in Extended Structures. VCH."
        url: null

further_reading:
  - citation: "Pauling, L. (1939). The Nature of the Chemical Bond. Cornell University Press."
    url: null
    note: Still readable, and a lesson in how far qualitative reasoning from quantum mechanics can be pushed.
  - citation: "Russell, C. A. (1971). The History of Valency. Leicester University Press."
    url: null
    note: How chemists worked with a concept they could not explain, for sixty years.
  - citation: "Frenking, G. & Shaik, S. (eds) (2014). The Chemical Bond. Wiley-VCH."
    url: null
    note: Modern perspectives, including the disagreements about what a bond is.
---

## A Number Before a Mechanism

Berzelius had an account of why atoms combine: they carry opposite electrical charges and attract. It explained salts well, and it could not explain $\mathrm{Cl_2}$, $\mathrm{O_2}$ or $\mathrm{H_2}$, in which the two partners are identical and so cannot differ in charge. That difficulty sat unresolved for most of the nineteenth century, during which chemistry made enormous progress by not asking.

What it used instead was {{fig:frankland|Edward Frankland}}'s observation of 1852. Study enough compounds of an element and its partners always add up the same way: nitrogen is satisfied by three attachments or five, oxygen by two, carbon by four, whatever the partners are. Frankland called it combining power; the word valence came later. The concept says nothing about what an attachment *is*, and within a decade chemists were drawing it as a dash between letters, counting the dashes to check a formula, and building the whole of structural organic chemistry on it.

This is worth pausing on, because it is a pattern the atlas meets repeatedly: a formal rule with no mechanism can carry a field for decades, provided it is quantitative enough to be wrong.

## The Dash Acquires a Content

{{fig:gilbert-lewis|Gilbert Lewis}} filled it in 1916, and the key move was to stop thinking about transfer. A bond, he proposed, is a *pair of electrons shared* between two atoms, counted by both. Two chlorine atoms can hold a pair jointly without either becoming charged, which disposes of the difficulty Berzelius left. Lewis drew the electrons as dots at the corners of a cube around each atom, and noted that eight is the stable number — the octet rule. {{fig:langmuir|Irving Langmuir}} publicised the idea energetically enough that it was known for some years as the Lewis–Langmuir theory.

Lewis's 1923 monograph went further and redefined acids and bases in terms of the same pair: an acid accepts one, a base donates one. That definition is broader than the proton-transfer account and is the one still used for most of inorganic and organometallic chemistry.

Meanwhile {{fig:kossel|Walther Kossel}} had developed the other half of the picture in 1916. In a salt, the electron really is transferred, leaving ions of opposite charge held by plain electrostatics. For a while these looked like rival theories of the bond. They are two limits of one continuum, and settling that required making the ionic case quantitative.

## A Closer Look: Two Routes to the Energy of a Crystal

The energy holding a crystal of common salt together cannot be measured directly — there is no experiment that pulls a lattice apart into gaseous ions. It can be reached two completely different ways, and the agreement between them is the evidence that the ionic picture is right.

**Route one: a thermodynamic cycle.** {{fig:max-born|Max Born}} and {{fig:haber|Fritz Haber}}'s construction uses the fact that energy is a state function, so a sum round a closed path must vanish. To go from sodium metal and chlorine gas to a crystal of salt, either react them directly, or take the long way: vaporise the sodium, ionise it, split the chlorine, add the electron, and let the gaseous ions collapse into a lattice. All the steps but the last are measurable:

| Step | Energy (kJ/mol) |
|---|---|
| Sublimation of sodium | +108 |
| Ionisation of Na(g) | +496 |
| Dissociation of ½ Cl₂ | +121 |
| Electron attachment to Cl(g) | −349 |
| **Sum of the measurable steps** | **+376** |
| Heat of formation of NaCl(s) | −411 |

The lattice energy is whatever closes the cycle:

$$
U = -411 - (+376) = -787 \text{ kJ/mol}.
$$

**Route two: adding up the charges.** Now compute it from electrostatics alone, with no thermochemistry. Each ion attracts its six nearest neighbours of opposite charge, is repelled by twelve at $\sqrt{2}$ times the distance, attracted by eight at $\sqrt{3}$, and so on. That infinite sum converges to a constant for a given lattice type — the Madelung constant, 1.7476 for rock salt. Allowing for the short-range repulsion that stops the ions collapsing, with Born exponent $n = 8$:

$$
U = -\frac{N_A M e^{2}}{4\pi\varepsilon_0 r_0}\left(1 - \frac{1}{n}\right).
$$

With $r_0 = 2.82 \times 10^{-10}$ m, the Coulomb term for one mole of ion pairs is

$$
\frac{N_A e^{2}}{4\pi\varepsilon_0 r_0} = \frac{(6.022\times10^{23})(1.602\times10^{-19})^{2}}{(1.1127\times10^{-10})(2.82\times10^{-10})} = 4.93\times10^{5} \text{ J/mol} = 493 \text{ kJ/mol},
$$

so

$$
U = -493 \times 1.7476 \times 0.875 = -753 \text{ kJ/mol}.
$$

Two routes, nothing in common but the substance: **−787** from calorimetry, **−753** from a lattice sum and a measured interionic distance. They agree to 4%.

That margin is the interesting part. The agreement is close enough to establish that salt is held together by nothing but charges — no sharing, no directed bonds, just a sum over an infinite array. And the 4% discrepancy is real: it is the part of the cohesion that the point-charge model misses, chiefly the van der Waals attraction and the zero-point vibrational energy. Run the same comparison on silver chloride and the gap widens to about 8%, because silver's electrons are polarisable and the bonding has acquired covalent character. The size of the disagreement therefore measures how ionic a compound actually is.

{{fig:pauling|Pauling}} put a number on the same thing from the other direction. His electronegativity scale, derived from bond energies, gives each element a value: caesium 0.79, sodium 0.93, hydrogen 2.20, chlorine 3.16, fluorine 3.98. The difference across a bond predicts its character — 2.23 for Na–Cl, substantially ionic; 0.96 for H–Cl, polar covalent; zero for Cl–Cl. There is no boundary in the scale, because there is no boundary in nature.

## Shape, and the Limits of Counting

The last piece is geometry. A formula says what is attached; it does not say where. {{fig:sidgwick|Nevil Sidgwick}} and Herbert Powell noticed in 1940 that shape follows from the *number of electron pairs* round the central atom, and {{fig:gillespie|Ronald Gillespie}} and {{fig:nyholm|Ronald Nyholm}} made it a recipe: count the bonding pairs and the lone pairs, push them as far apart as possible, read off the arrangement. Four pairs give a tetrahedron, three a flat triangle, five a curious see-saw. A lone pair, being held by one nucleus rather than two, spreads wider and squeezes the others — which is why methane's angles are 109.5° and water's are 104.5°.

It is a remarkable piece of prediction for something done on the back of an envelope, and it is not a theory of bonding. Neither, quite, is any of the above: Lewis's pairs, Pauling's hybrids and Gillespie's repulsions are all ways of talking about a system whose actual description is a many-electron wavefunction. {{fig:pauling|Pauling}}'s localised-pair approach and the rival molecular-orbital picture of Hund and Mulliken — electrons spread over the whole molecule — compete precisely because neither is the truth, and the argument about which is primary was fierce for decades. Solving the underlying equations, and discovering how much had to be approximated to do it, is [quantum chemistry](/chemistry/quantum-chemistry/).
