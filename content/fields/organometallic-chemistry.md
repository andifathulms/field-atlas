---
id: organometallic-chemistry
domain: chemistry
thread: coordination
name: Organometallic Chemistry
parent_ids:
  - coordination-chemistry
era_emerged: 1827 – 1977
core_question: What happens when one of a metal's coordination positions is filled by a carbon atom, and why does that make a catalyst?

summary: |-
  In 1827 William Zeise boiled platinum chloride in ethanol and isolated a crystalline salt that contained ethylene bonded to platinum. Nobody could say how. A double bond has no lone pair to donate, so by every account of bonding available for the next hundred and twenty-five years the compound should not exist. It sat in the literature as a curiosity, joined in 1890 by Ludwig Mond's nickel carbonyl — a metal that boils at 43 °C — and by little else.

  Two things changed in the early 1950s. Ferrocene was made by accident and turned out to be a sandwich: an iron atom between two flat five-membered rings, stable in air, stable to 400 °C, and unlike any structure in the existing vocabulary. And Michael Dewar, Joseph Chatt and L. A. Duncanson explained the bonding, with a mechanism that runs both ways — the ligand donates electrons from a π bond to the metal, and the metal donates electrons back into the ligand's empty antibonding orbital. Once that two-way flow is admitted, ethylene, carbon monoxide and the metal–carbon bond all become ordinary.

  What the field then produced was not mainly compounds but a vocabulary. Oxidative addition, migratory insertion, β-hydride elimination, reductive elimination: a small set of elementary steps that combine into cycles, with an electron count that says which species can be isolated and which will react. Almost every homogeneous catalyst in industrial use is described in those terms.

key_ideas:
  - term: Hapticity
    definition: >-
      How many contiguous atoms of a ligand are bonded to the metal, written $\eta^n$. Ethylene binds
      through both carbons of its double bond ($\eta^2$) and a cyclopentadienyl ring through all five
      ($\eta^5$). The concept was needed because a ligand can bind through a bond rather than through an
      atom, which Werner's positions did not anticipate.
    turning_point_id: ferrocene-sandwich
  - term: Back-bonding
    definition: >-
      Electron density flowing from a filled metal d orbital into an empty antibonding orbital of the
      ligand, in the opposite direction to the ordinary donation. It strengthens the metal–ligand bond
      while weakening the bond inside the ligand, and it is measurable: the carbon–oxygen stretching
      frequency of bound CO falls by up to 300 cm⁻¹.
    turning_point_id: dewar-chatt-duncanson
  - term: Eighteen-electron rule
    definition: >-
      Complexes of the transition metals are most often stable when the metal's d electrons plus those
      donated by the ligands total eighteen, the configuration of the next noble gas. Sixteen-electron
      species are the reactive ones, because they have a vacancy — which is why most catalytic cycles
      alternate between the two counts.
    turning_point_id: tolman-ligand-parameters
  - term: Oxidative addition and reductive elimination
    definition: >-
      A metal inserts itself into a bond, taking both fragments onto itself and rising two in oxidation
      state and electron count; the reverse step joins two fragments and releases them. Together they let
      a metal pick up two pieces, hold them next to each other, and put them out joined.
    turning_point_id: vaska-elementary-steps
  - term: Migratory insertion
    definition: >-
      A ligand already bonded to the metal migrates onto a neighbouring ligand, forming a carbon–carbon or
      carbon–hydrogen bond and opening a coordination site. Repeated, it is how a polymer chain grows; used
      once, it is how an aldehyde is made from an alkene.
    turning_point_id: vaska-elementary-steps
  - term: Cone angle
    definition: >-
      Tolman's measure of how much room a ligand takes up at the metal, in degrees. Together with his
      electronic parameter it reduced ligand choice to two coordinates, so that a catalyst could be tuned
      by moving on a map rather than by trying compounds at random.
    turning_point_id: tolman-ligand-parameters

turning_points:
  - id: zeise-salt
    date: "1827"
    type: SUBSTANCE-ISOLATED
    title: A compound nobody could write a bond for
    description: >-
      William Christopher Zeise, in Copenhagen, boils platinum chloride with ethanol and isolates a
      yellow crystalline potassium salt. Analysis showed it contained an intact ethylene molecule attached
      to the platinum. This was impossible on any available theory of bonding, since a carbon–carbon
      double bond has no lone pair to offer, and Justus von Liebig disputed the composition for twenty
      years. Zeise was right. The structure was not determined until 1954 and the bonding not explained
      until the early 1950s, so the compound stood as an unexplained fact for over a century.
    contested: true
    contested_note: >-
      Liebig, then the most influential chemist in Europe, rejected Zeise's formula on the grounds that an
      unsaturated hydrocarbon could not be held by a metal salt, and the dispute ran through the 1830s and
      1840s. The analytical question was settled in Zeise's favour; the structural question stayed open
      until single-crystal diffraction.
    sources:
      - citation: "Zeise, W. C. (1831). Von der Wirkung zwischen Platinchlorid und Alkohol. Poggendorffs Annalen der Physik und Chemie 21: 497–541."
        url: null
      - citation: "Hunt, L. B. (1984). The first organometallic compounds: William Christopher Zeise. Platinum Metals Review 28: 76–83."
        url: null

  - id: mond-nickel-carbonyl
    date: "1890"
    type: SUBSTANCE-ISOLATED
    title: A metal that boils at 43 degrees
    description: >-
      Ludwig Mond, investigating why carbon monoxide was corroding the nickel valves in his alkali works,
      finds that the two combine to give a colourless liquid, Ni(CO)₄, which boils at 43 °C and decomposes
      back to pure nickel on heating. He turned the observation into the Mond process, which refines nickel
      by volatilising it, and in doing so produced the first metal carbonyl — a compound in which a neutral,
      apparently inert gas is bound firmly to a metal in its zero oxidation state. The bonding was as
      inexplicable as Zeise's.
    contested: false
    sources:
      - citation: "Mond, L., Langer, C. & Quincke, F. (1890). Action of carbon monoxide on nickel. Journal of the Chemical Society, Transactions 57: 749–753."
        url: null
      - citation: "Mond, R. L. (1930). Ludwig Mond and the nickel carbonyl process. Journal of the Society of Chemical Industry 49: 271."
        url: null

  - id: ferrocene-sandwich
    date: 1951 – 1952
    type: SYNTHESIS-ACHIEVED
    title: The sandwich
    description: >-
      Thomas Kealy and Peter Pauson, attempting something else, obtain an orange solid of formula
      Fe(C₅H₅)₂ that is stable in air, melts at 173 °C and survives to above 400 °C. Samuel Miller's group
      had made it independently from cyclopentadiene over iron. The proposed open structure was wrong:
      Geoffrey Wilkinson, Myron Rosenblum, Mark Whiting and Robert Woodward, and independently Ernst Otto
      Fischer, showed the iron sits between two parallel rings bonded through all five carbons of each.
      Nothing in the existing structural vocabulary covered it. Wilkinson and Fischer shared the 1973 Nobel
      Prize, and the field dates from this compound.
    contested: false
    sources:
      - citation: "Kealy, T. J. & Pauson, P. L. (1951). A new type of organo-iron compound. Nature 168: 1039–1040."
        url: https://doi.org/10.1038/1681039b0
      - citation: "Wilkinson, G., Rosenblum, M., Whiting, M. C. & Woodward, R. B. (1952). The structure of iron bis-cyclopentadienyl. Journal of the American Chemical Society 74: 2125–2126."
        url: null

  - id: dewar-chatt-duncanson
    date: 1951 – 1953
    type: MECHANISM-ESTABLISHED
    title: Electrons going both ways
    description: >-
      Michael Dewar, and then Joseph Chatt and L. A. Duncanson, account for the bonding in Zeise's salt
      with a two-part description: the ligand's filled π orbital donates into an empty metal orbital, and
      a filled metal d orbital donates back into the ligand's empty antibonding π* orbital. The second flow
      is what the old theories lacked. It explains why carbon monoxide binds a neutral metal at all, why it
      produces the largest ligand field splitting known, and why the carbon–oxygen bond weakens as the
      metal–carbon bond strengthens — which makes the model testable by infrared spectroscopy.
    contested: false
    sources:
      - citation: "Dewar, M. J. S. (1951). A review of the π-complex theory. Bulletin de la Société Chimique de France 18: C71–C79."
        url: null
      - citation: "Chatt, J. & Duncanson, L. A. (1953). Olefin co-ordination compounds. Journal of the Chemical Society: 2939–2947."
        url: null

  - id: vaska-elementary-steps
    date: 1961 – 1968
    type: MECHANISM-ESTABLISHED
    title: A metal that takes a molecule apart and puts it back
    description: >-
      Lauri Vaska prepares an iridium complex that binds oxygen reversibly and inserts itself into the
      bonds of hydrogen, hydrogen chloride and methyl iodide, rising two in oxidation state each time and
      releasing the fragments again on demand. The step is named oxidative addition, and with its reverse
      and with migratory insertion it supplies a vocabulary of elementary moves. Any catalytic cycle can
      now be written as a sequence of them, with the electron count checked at each stage — which converted
      catalyst design from empirical screening into something resembling retrosynthesis.
    contested: false
    sources:
      - citation: "Vaska, L. & DiLuzio, J. W. (1961). Carbonyl and hydrido-carbonyl complexes of iridium. Journal of the American Chemical Society 83: 2784–2785."
        url: null
      - citation: "Collman, J. P. (1968). Patterns of organometallic reactions related to homogeneous catalysis. Accounts of Chemical Research 1: 136–143."
        url: null

  - id: fischer-schrock-carbenes
    date: 1964 – 1975
    type: SYNTHESIS-ACHIEVED
    title: Double bonds between a metal and a carbon
    description: >-
      Ernst Otto Fischer makes the first complex containing a metal–carbon double bond, with the carbon
      bearing substituents that make it electron-poor. Ten years later Richard Schrock makes one of the
      opposite polarity, in which the carbon is nucleophilic — a tantalum alkylidene that attacks carbonyl
      compounds in the manner of a Wittig reagent. The two classes behave as opposites, and between them
      they establish that the metal–carbon multiple bond is a general feature with tunable reactivity
      rather than an exotic case.
    contested: false
    sources:
      - citation: "Fischer, E. O. & Maasböl, A. (1964). On the existence of a tungsten carbonyl carbene complex. Angewandte Chemie International Edition 3: 580–581."
        url: null
      - citation: "Schrock, R. R. (1974). Alkylidene complexes of niobium and tantalum. Journal of the American Chemical Society 96: 6796–6797."
        url: null

  - id: tolman-ligand-parameters
    date: 1970 – 1977
    type: TECHNIQUE-INVENTED
    title: Two numbers for every ligand
    description: >-
      Chadwick Tolman measures, for a long list of phosphine ligands, how far each shifts the carbon–oxygen
      stretch of a nickel carbonyl — an electronic parameter — and constructs from space-filling models the
      cone angle each sweeps out at the metal. Plotting the two against each other produces a map on which
      ligands can be compared and chosen. Tolman also sets out the rules for writing catalytic cycles, with
      the sixteen- and eighteen-electron counts as the permitted states, so that a proposed mechanism can be
      checked for bookkeeping before it is tested.
    contested: false
    sources:
      - citation: "Tolman, C. A. (1977). Steric effects of phosphorus ligands in organometallic chemistry and homogeneous catalysis. Chemical Reviews 77: 313–348."
        url: null
      - citation: "Tolman, C. A. (1972). The 16 and 18 electron rule in organometallic chemistry and homogeneous catalysis. Chemical Society Reviews 1: 337–353."
        url: null

open_problems:
  - id: catalyst-resting-state
    name: Knowing which species in the flask is the catalyst
    status: open
    status_note: Open as of 2026; a general case-by-case problem rather than one awaiting a single result.
    description: >-
      A catalytic reaction contains the precatalyst that was added, the species that accumulate because
      they are stable, and the species that actually turns over — which may be present at a fraction of a
      per cent and may not be the one the mechanism was drawn around. Reactions believed to be homogeneous
      have repeatedly turned out to be catalysed by metal nanoparticles formed in situ, and the opposite
      has happened too. Kinetics constrain the active species without identifying it.
    why_hard: >-
      The active species is by definition the one with the shortest lifetime and the lowest concentration,
      which is the hardest combination to observe. Removing it for study changes the conditions that
      produced it, and the usual tests for heterogeneity — filtration, mercury poisoning, kinetic
      hysteresis — give answers that can be argued either way.
    unlocks: >-
      Optimisation currently proceeds by varying conditions on a mechanism that may be wrong. Knowing the
      resting and active states would make ligand design rational, and would settle how much precious metal
      a process actually needs, which is often far less than is added.
    sources:
      - citation: "Crabtree, R. H. (2012). Resolving heterogeneity problems and impurity artifacts in homogeneous catalysis. Chemical Reviews 112: 1536–1554."
        url: null
      - citation: "Blackmond, D. G. (2005). Reaction progress kinetic analysis. Angewandte Chemie International Edition 44: 4302–4320."
        url: null

  - id: base-metal-substitution
    name: Doing with iron what is done with palladium
    status: open
    status_note: Open as of 2026; individual successes exist for most reaction classes, general replacements for none.
    description: >-
      The homogeneous catalysts of industry are built on palladium, platinum, rhodium, iridium and
      ruthenium, which are among the rarest elements in the crust and are mined in a handful of places.
      Iron, cobalt, nickel and manganese sit directly above or beside them and are thousands of times more
      abundant, but they do not behave the same way: they change oxidation state in single-electron steps,
      they have several accessible spin states, and they form radicals where the heavier metals form
      two-electron intermediates.
    why_hard: >-
      The clean two-electron cycles that make the precious metals predictable depend on a large gap between
      oxidation states and a single accessible spin state. First-row metals have neither, so the same
      ligand set gives different and often uncontrolled chemistry — and predicting which spin surface a
      reaction will follow runs into the spin-state energy problem recorded in
      [ligand field theory](/chemistry/ligand-field-theory/).
    unlocks: >-
      Platinum-group metals are a standing cost and a supply risk in pharmaceutical manufacture, fuel cells
      and emissions control, and residual metal limits in drug substances are strict. Replacing them with
      iron would change the economics of a large part of chemical manufacture.
    sources:
      - citation: "Chirik, P. J. (2015). Iron- and cobalt-catalyzed alkene hydrogenation. Accounts of Chemical Research 48: 1687–1695."
        url: null
      - citation: "Fürstner, A. (2016). Iron catalysis in organic synthesis: a critical assessment. ACS Central Science 2: 778–789."
        url: null

applications:
  - area: Biochemistry
    title: The one place life makes a metal–carbon bond
    description: >-
      Coenzyme B₁₂ contains a cobalt–carbon bond, and it is the only well-established organometallic
      chemistry in biology. The bond is weak enough to break homolytically on demand, generating a radical
      that the enzyme uses to move a hydrogen atom between adjacent carbons — a rearrangement with no
      ordinary route. The same chemistry has an unwanted side: bacteria methylate mercury by a related
      pathway, which is how an industrial discharge of inorganic mercury becomes the methylmercury that
      accumulates in fish.
    domain: biology
    field_id: biochemistry
    sources:
      - citation: "Banerjee, R. & Ragsdale, S. W. (2003). The many faces of vitamin B12. Annual Review of Biochemistry 72: 209–247."
        url: null
      - citation: "Parks, J. M. et al. (2013). The genetic basis for bacterial mercury methylation. Science 339: 1332–1335."
        url: null
  - area: Industrial chemistry
    title: Aldehydes from alkenes, by the million tonnes
    description: >-
      Hydroformylation adds carbon monoxide and hydrogen across a double bond to make an aldehyde, and it
      is written as a textbook cycle: oxidative addition, migratory insertion of the alkene, insertion of
      CO, then reductive elimination. Otto Roelen found it over a cobalt catalyst in 1938; the switch to
      rhodium with bulky phosphines let the process run near atmospheric pressure and choose the linear
      product over the branched one. It is among the largest-volume homogeneous catalytic processes in
      existence, and the selectivity is set by Tolman's two parameters.
    sources:
      - citation: "Franke, R., Selent, D. & Börner, A. (2012). Applied hydroformylation. Chemical Reviews 112: 5675–5732."
        url: null
  - area: Semiconductor manufacture
    title: Growing a crystal from a volatile metal compound
    description: >-
      Metalorganic vapour-phase epitaxy builds semiconductor layers atom by atom by passing volatile
      compounds — trimethylgallium, trimethylindium — over a hot substrate where they decompose and deposit.
      The method exists because organometallic compounds can be made volatile and clean-decomposing by
      choice of ligand, and it is how blue light-emitting diodes, laser diodes and high-efficiency solar
      cells are manufactured. The precursor chemistry is the limiting factor in layer purity.
    sources:
      - citation: "Stringfellow, G. B. (1999). Organometallic Vapor-Phase Epitaxy, 2nd edition. Academic Press."
        url: null

further_reading:
  - citation: "Crabtree, R. H. (2019). The Organometallic Chemistry of the Transition Metals, 7th edition. Wiley."
    url: null
    note: The standard course, organised around the elementary steps rather than around the elements.
  - citation: "Tolman, C. A. (1977). Steric effects of phosphorus ligands in organometallic chemistry and homogeneous catalysis. Chemical Reviews 77: 313–348."
    url: null
    note: The review that reduced ligand choice to a two-dimensional map; still consulted as a data source.
  - citation: "Seyferth, D. (2002). Bis(benzene)chromium and the beginnings of a field. Organometallics 21: 1520–1530."
    url: null
    note: How the 1950s sandwich compounds were made and argued over, by someone who was there.
---

## A Compound Nobody Could Explain for 125 Years

{{fig:zeise|William Christopher Zeise}} boiled platinum chloride with ethanol in 1827 and got yellow crystals. The analysis said the salt contained a whole ethylene molecule bonded to the platinum, which was not a thing a molecule could do. A carbon–carbon double bond has no lone pair; there is nothing for it to donate. {{fig:liebig|Justus von Liebig}}, who was in a position to make his doubts count, argued for two decades that the formula must be wrong.

It was not wrong. But it was also not explicable, and so it remained for a remarkably long time: the structure was not determined by diffraction until 1954, and the bonding not accounted for until the early 1950s.

Zeise's salt acquired a companion in 1890 by way of an industrial nuisance. {{fig:ludwig-mond|Ludwig Mond}} was trying to find out why carbon monoxide was eating the nickel valves in his alkali works. The answer was that nickel and carbon monoxide combine to give Ni(CO)₄, a colourless liquid boiling at 43 °C that decomposes back to pure metal when warmed — so a metal can be distilled. Mond built a refinery on it. Here again was a neutral molecule, carbon monoxide, held firmly by a metal in its zero oxidation state, with no account of why.

Meanwhile the useful organometallic chemistry of the period was reagent chemistry: {{fig:grignard|Grignard}}'s magnesium compounds from 1900, described in [cross-coupling](/chemistry/cross-coupling/), which were made, used and destroyed in the same flask. The idea that the metal–carbon bond was a structural principle in its own right had nothing to stand on.

## The Sandwich

In 1951 {{fig:kealy|Thomas Kealy}} and {{fig:pauson|Peter Pauson}} were trying to make a different compound and obtained an orange solid, Fe(C₅H₅)₂, with properties that did not fit. It melted at 173 °C, sublimed, was indifferent to air and water, and survived above 400 °C. Organometallic compounds were supposed to be unstable. {{fig:samuel-miller|Samuel Miller}}'s group had made the same substance independently by passing cyclopentadiene over hot iron, and had not recognised what they had.

The structure Kealy and Pauson proposed, with the iron bonded to one carbon of each ring, was wrong, and the error mattered because the right answer was new. {{fig:geoffrey-wilkinson|Geoffrey Wilkinson}}, {{fig:rosenblum|Myron Rosenblum}}, {{fig:whiting|Mark Whiting}} and {{fig:woodward|Robert Woodward}}, with {{fig:ernst-otto-fischer|Ernst Otto Fischer}} arriving at it independently, showed that the iron sits between two parallel rings, bonded to all five carbons of each.

No existing notion of a bond described that. The ring is not donating a lone pair from one atom; it is donating from a delocalised π system across five atoms at once. The vocabulary had to be extended, and the extension is **hapticity** — a count of how many contiguous ligand atoms are involved, written $\eta^5$ for a cyclopentadienyl ring and $\eta^2$ for Zeise's ethylene. Werner's coordination positions had been places for atoms with lone pairs; now a position could be filled by a bond, or by a face of a ring.

Wilkinson and Fischer shared the 1973 Nobel Prize for this chemistry, and the field dates itself from the compound rather than from Zeise.

## Why a Neutral Molecule Binds a Metal at All

{{fig:dewar|Michael Dewar}}, and then {{fig:chatt|Joseph Chatt}} and {{fig:duncanson|L. A. Duncanson}}, supplied the missing bonding picture, and it has two halves going in opposite directions.

The ligand donates electron density from its filled π orbital into an empty orbital of the metal. That much is ordinary donation, as in [coordination chemistry](/chemistry/coordination-chemistry/). The new part is that a filled d orbital of the metal donates density **back** into the ligand's empty antibonding π\* orbital. Both flows strengthen the metal–ligand bond. But the second one weakens the bond inside the ligand, because it is putting electrons into an antibonding orbital — and that is what makes the model testable rather than merely plausible.

Free carbon monoxide stretches at 2143 cm⁻¹. Bound to nickel in Ni(CO)₄ it stretches at 2057. The bond has been weakened by the metal, by an amount that can be read off an infrared spectrum in a minute, and the amount tracks how electron-rich the metal is. This is also the reason carbon monoxide produces the largest ligand field splitting of any common ligand despite being neutral: it is not a strong electrostatic ligand, it is a strong π acceptor.

{{fig:vaska|Lauri Vaska}} then found the steps. His iridium complex binds oxygen reversibly — which was interesting to biochemists — and inserts itself into the bond of hydrogen, of hydrogen chloride, of methyl iodide, taking both fragments onto the metal and rising two in oxidation state. Reverse the step and the two fragments leave joined together. Add the move in which one bound ligand migrates onto another, and a metal can pick up two molecules, hold them adjacent, rearrange them and put out a product, returning to where it started. That is a catalytic cycle, written as a sequence of named steps instead of described as a black box.

## A Closer Look: Counting to Eighteen

The bookkeeping rule of the field is that stable complexes usually have eighteen electrons around the metal — the d electrons plus two for each pair donated. The rule is not exact, but it sorts compounds into isolable and reactive with surprising reliability, and the arithmetic takes seconds.

| Complex | Metal d electrons | Ligand donation | Total |
| --- | --- | --- | --- |
| Ni(CO)₄ | Ni(0): 10 | 4 × 2 | **18** |
| Fe(C₅H₅)₂ | Fe(II): 6 | 2 × 6 | **18** |
| Cr(CO)₆ | Cr(0): 6 | 6 × 2 | **18** |
| [PtCl₃(C₂H₄)]⁻ | Pt(II): 8 | 3 × 2 + 2 | **16** |
| IrCl(CO)(PPh₃)₂ | Ir(I): 8 | 2 + 2 + 2 × 2 | **16** |

The three eighteen-electron compounds are the ones you can buy in a bottle. Ferrocene survives 400 °C; nickel carbonyl is unpleasant but perfectly stable as a liquid. The two sixteen-electron compounds are the ones that react: Zeise's anion exchanges its ethylene readily, and Vaska's complex is a catalyst precursor precisely because it has a vacancy. Add H₂ to Vaska's complex by oxidative addition and the count goes to eighteen, the iridium goes from (I) to (III), and the product is isolable — then reductive elimination returns it to sixteen. **A cycle is a loop between the two counts.**

Now the back-bonding, quantitatively. Take three carbonyl complexes that all have eighteen electrons and all have six CO ligands in an octahedron, and differ only in charge:

| Complex | Metal | ν(CO), cm⁻¹ |
| --- | --- | --- |
| [Mn(CO)₆]⁺ | Mn(I) | 2,090 |
| Cr(CO)₆ | Cr(0) | 2,000 |
| [V(CO)₆]⁻ | V(−I) | 1,860 |
| free CO | — | 2,143 |

A span of **230 cm⁻¹** across the three, produced by nothing but the charge on the metal. The more electron-rich the metal, the more density it pushes into the π\* orbital, the weaker the C–O bond, the lower the frequency. Every one of the three is below free CO, so every one of them is back-bonding; the vanadium complex has weakened the C–O bond by 283 cm⁻¹, roughly 13% in frequency.

{{fig:tolman|Chadwick Tolman}} turned this into a measuring instrument. Make Ni(CO)₃L for a long list of ligands L and record the CO stretch: the frequency is a number for how electron-donating L is. For phosphines it runs from 2056.1 cm⁻¹ for tri-*tert*-butylphosphine, a strong donor, to 2110.8 cm⁻¹ for trifluorophosphine, a poor one. Then he built space-filling models and measured the **cone angle** each ligand sweeps out: 118° for trimethylphosphine, 145° for triphenylphosphine, 182° for tri-*tert*-butylphosphine, 194° for tri(*o*-tolyl)phosphine.

Two numbers per ligand, and ligand selection becomes navigation on a map. This is not a small thing. The reason the rhodium hydroformylation process makes the straight-chain aldehyde rather than the branched one is that a bulky phosphine — high cone angle — makes the metal's remaining sites crowded, so the alkene inserts in the less hindered orientation. Selectivity worth hundreds of millions of tonnes of product follows from a number measured off a plastic model.

## A Vocabulary of Steps

What organometallic chemistry contributed was less a class of compounds than a way of writing down what a catalyst does. Oxidative addition, migratory insertion, β-hydride elimination, reductive elimination, ligand substitution: a handful of steps, each with a known effect on the electron count and the oxidation state, which combine into cycles that can be checked for consistency before being tested in a flask.

The consequences are elsewhere in the atlas. The palladium cycles of [cross-coupling](/chemistry/cross-coupling/) are built from these steps, and so is the chain growth in the Ziegler–Natta polymerisation described under [catalysis](/chemistry/catalysis/) — one migratory insertion per monomer, thousands of times over, with the stereochemistry set at each one. {{fig:ernst-otto-fischer|Fischer}}'s and {{fig:schrock|Schrock}}'s metal–carbon double bonds became the catalysts that swap the ends of alkenes.

Two things the field has not done are recorded above as its open problems, and they are of different kinds. One is epistemic: in a working catalytic reaction it is often unknown which of the species present is doing the catalysis, and reactions long believed homogeneous have turned out to run on nanoparticles formed in the flask. The other is a resource problem with a chemical cause. The metals that make these cycles clean — palladium, rhodium, iridium, platinum — are among the rarest in the crust, and the abundant metals directly above them in the periodic table do not substitute, because they prefer one-electron steps and have several spin states available. That is the same difficulty that [ligand field theory](/chemistry/ligand-field-theory/) cannot yet compute, arriving from the other direction.
