---
id: coordination-chemistry
domain: chemistry
thread: coordination
name: Coordination Chemistry
parent_ids:
  - chemical-bonding
era_emerged: 1798 – 1945
core_question: Why does a metal salt combine with more ammonia than its valence allows, and what holds the extra on?

summary: |-
  Dissolve cobalt chloride in ammonia and the solid that crystallises is CoCl₃·6NH₃. The cobalt has used up its three bonds on the chlorines already; the six ammonias have no valence left to attach to. Yet the compound is stable, it has a definite composition, and a whole family of such compounds — orange, purple, green — could be made at will by the 1880s. For most of a century nobody could say what the extra ammonias were bonded to.

  Alfred Werner's answer, in 1893, was that a metal atom has two kinds of combining capacity: the ordinary valence that balances charge, and a second, separate capacity — a fixed number of positions arranged in space around the metal — that can be filled by whole neutral molecules. Cobalt holds six, always six, and a chloride can occupy one of those positions instead of sitting outside as an ion. Werner then proved the geometry by counting: the number of isomers an octahedron permits differs from the number a flat hexagon or a prism permits, and only the octahedral count matched what could be isolated.

  The proof that settled it was stranger. In 1914 Werner resolved a compound into left- and right-handed forms that contained no carbon atom at all — four cobalts, twelve ammonias, six hydroxides — demonstrating that handedness is a property of arrangement in space, not a privilege of organic chemistry.

key_ideas:
  - term: Coordination number
    definition: >-
      The number of positions around a metal centre that can be occupied, independent of the metal's
      ionic charge. Six for cobalt(III) and platinum(IV), four for many of platinum(II) and zinc, and
      fixed enough that a series of compounds can be assigned formulae by counting what is left over.
    turning_point_id: werner-coordination-theory
  - term: Primary and secondary valence
    definition: >-
      Werner's distinction: primary valence balances ionic charge and can be satisfied at a distance,
      secondary valence binds molecules or ions into definite positions in contact with the metal. The
      modern words are oxidation state and coordination number.
    turning_point_id: werner-coordination-theory
  - term: Ligand
    definition: >-
      A molecule or ion occupying a coordination position, bonded by donating a lone pair of its own
      electrons to the metal. Ammonia, water, chloride, cyanide and carbon monoxide are the classical
      cases; a ligand may be neutral, which is what the old valence bookkeeping could not accommodate.
    turning_point_id: sidgwick-coordinate-bond
  - term: Inner and outer sphere
    definition: >-
      Species bonded directly to the metal are inner-sphere and travel with it; counter-ions merely
      balancing charge are outer-sphere and dissociate in water. The distinction is measurable, because
      only outer-sphere chloride is precipitated instantly by silver nitrate.
    turning_point_id: werner-miolati-conductivity
  - term: Chelate
    definition: >-
      A ligand that grips the metal at two or more positions at once, forming a ring. Chelates are far
      more stable than the equivalent number of separate ligands — the chelate effect — which is mostly
      an entropy argument: one molecule is released where several were bound.
    turning_point_id: chelate-and-stability-constants
  - term: Stability constant
    definition: >-
      The equilibrium constant for a ligand replacing water at a metal centre, defined stepwise. Tabulated
      for thousands of metal–ligand pairs, these numbers turn "does it bind?" into arithmetic and are what
      makes a complexometric titration or a chelation therapy calculable.
    turning_point_id: chelate-and-stability-constants

turning_points:
  - id: metal-ammines-accumulate
    date: 1798 – 1894
    type: SUBSTANCE-ISOLATED
    title: A family of compounds nobody could write a formula for
    description: >-
      B. M. Tassaert adds ammonia to a cobalt salt in 1798 and obtains a crystalline orange compound of
      definite composition. Over the following century dozens of relatives are prepared from cobalt,
      chromium, platinum and iridium, in colours vivid enough to serve as names. All of them contain more
      ammonia than the metal's valence can account for. Christian Wilhelm Blomstrand proposes that the
      extra ammonias form chains, as carbon atoms do, and Sophus Mads Jørgensen spends sixteen years in
      Copenhagen making the compounds that theory calls for — with analyses to a fraction of a per cent
      and deliberate hunts for the isomers it predicted. The theory was wrong and the preparations were
      right, which is why the dispute that followed was settled quickly rather than slowly.
    contested: false
    sources:
      - citation: "Tassaert, B. M. (1798). Annales de Chimie 28: 92."
        url: null
      - citation: "Jørgensen, S. M. (1894). Zur Konstitution der Kobalt-, Chrom- und Rhodiumbasen. Zeitschrift für Anorganische Chemie 5: 147–196."
        url: null
      - citation: "Kauffman, G. B. (1959). Sophus Mads Jørgensen and the Werner–Jørgensen controversy. Chymia 6: 180–204."
        url: null

  - id: werner-coordination-theory
    date: "1893"
    type: THEORY-REPLACED
    title: Werner's two kinds of valence
    description: >-
      Alfred Werner, aged 26, proposes that a metal possesses a primary valence that balances charge and
      a secondary valence of fixed number — six for cobalt — directed to definite positions in space.
      Neutral molecules occupy those positions, an anion may occupy one instead of standing outside as a
      free ion, and the total is conserved as ammonia is replaced by chloride. The chain theory is
      abandoned, chemistry acquires a second structural principle alongside carbon's tetravalence, and
      Werner receives the 1913 Nobel Prize in Chemistry, the first awarded for inorganic work.
    contested: false
    sources:
      - citation: "Werner, A. (1893). Beitrag zur Konstitution anorganischer Verbindungen. Zeitschrift für Anorganische Chemie 3: 267–330."
        url: null
      - citation: "Kauffman, G. B. (1966). Alfred Werner: Founder of Coordination Chemistry. Springer."
        url: null

  - id: werner-miolati-conductivity
    date: 1893 – 1896
    type: TECHNIQUE-INVENTED
    title: Counting the ions a complex releases
    description: >-
      Werner and Arturo Miolati measure the electrical conductivity of the ammine series and read off how
      many ions each compound produces in water. The numbers fall in a staircase — four ions, three,
      two, then none — as ammonia is replaced by chloride that enters the coordination sphere and stops
      being an ion at all. In the platinum series the conductivity falls to that of a non-electrolyte and
      then rises again as potassium salts are formed, which is a prediction of the theory and not
      something the chain picture suggests. It is among the earliest uses of a physical measurement to
      decide a question of chemical structure.
    contested: false
    sources:
      - citation: "Werner, A. & Miolati, A. (1893). Beiträge zur Konstitution anorganischer Verbindungen. Zeitschrift für Physikalische Chemie 12: 35–55."
        url: null
      - citation: "Kauffman, G. B. (1973). Classics in Coordination Chemistry, Part 1. Dover."
        url: null

  - id: werner-hexol-resolution
    date: 1911 – 1914
    type: MECHANISM-ESTABLISHED
    title: A handed molecule with no carbon in it
    description: >-
      Werner and Victor King resolve a cobalt complex into optically active forms in 1911, and in 1914
      Werner does it for the hexol — a cluster of four cobalt atoms bridged by hydroxide, carrying twelve
      ammonias and not a single carbon atom. The two forms rotate polarised light in opposite senses.
      Since Pasteur, optical activity had been tied to the asymmetric carbon atom and treated as a mark
      of organic, even living, chemistry; the hexol showed it is a consequence of arrangement in space,
      available to any element. It also closed the remaining loophole in the octahedral assignment,
      because the alternatives are not chiral.
    contested: false
    sources:
      - citation: "Werner, A. & King, V. L. (1911). Zur Kenntnis des asymmetrischen Kobaltatoms I. Berichte der Deutschen Chemischen Gesellschaft 44: 1887–1898."
        url: null
      - citation: "Werner, A. (1914). Zur Kenntnis des asymmetrischen Kobaltatoms V. Berichte der Deutschen Chemischen Gesellschaft 47: 3087–3094."
        url: null

  - id: chernyaev-trans-effect
    date: 1926
    type: MECHANISM-ESTABLISHED
    title: The trans effect, and making one isomer on purpose
    description: >-
      Ilya Chernyaev finds that in square platinum(II) complexes a ligand strongly influences which
      position reacts next: a strongly bound ligand labilises the site opposite to itself. The
      consequence is practical rather than theoretical — a chemist can choose the order of substitution
      and so direct the synthesis to the cis or the trans isomer deliberately, rather than separating a
      mixture. Chernyaev's rules were worked out on the platinum chemistry of the Urals refineries and
      are the reason cis and trans platinum compounds can be obtained pure, which later mattered a great
      deal.
    contested: false
    sources:
      - citation: "Chernyaev, I. I. (1926). Annales de l'Institut du Platine 4: 243."
        url: null
      - citation: "Basolo, F. & Pearson, R. G. (1962). The trans effect in metal complexes. Progress in Inorganic Chemistry 4: 381–453."
        url: null

  - id: sidgwick-coordinate-bond
    date: 1923 – 1927
    type: MECHANISM-ESTABLISHED
    title: The bond is a donated pair
    description: >-
      Nevil Sidgwick gives Werner's secondary valence an electronic content: the ligand donates a lone
      pair into an empty orbital of the metal, forming what he called a coordinate or dative bond, which
      explains at once why neutral molecules with lone pairs — ammonia, water, carbon monoxide — are the
      ligands and why those without are not. He adds a counting rule: complexes are most stable when the
      metal's electrons plus those donated reach the configuration of the next noble gas, the effective
      atomic number rule that organometallic chemistry would later use as the eighteen-electron rule.
    contested: false
    sources:
      - citation: "Sidgwick, N. V. (1927). The Electronic Theory of Valency. Oxford University Press."
        url: null
      - citation: "Jensen, W. B. (2013). The origin of the ionic-radius ratio rules and the coordinate bond. Journal of Chemical Education 90: 1434–1437."
        url: null

  - id: chelate-and-stability-constants
    date: 1920 – 1945
    type: TECHNIQUE-INVENTED
    title: Chelates, and numbers for how tightly a metal is held
    description: >-
      Gilbert Morgan and Harry Drew coin "chelate" in 1920 for a ligand that grips a metal at two points
      like a claw, and such ligands prove far more tenacious than the separate pieces. Jannik Bjerrum
      shows in 1941 how to measure the equilibrium constants step by step, so that binding becomes a
      table of numbers rather than an impression. Gerold Schwarzenbach then develops the aminopolycarboxylic
      acids, EDTA above all, whose constants are so large and so general that a single reagent can titrate
      most metal ions — and can be used to pull one out of a human patient.
    contested: false
    sources:
      - citation: "Morgan, G. T. & Drew, H. D. K. (1920). Researches on residual affinity and co-ordination. Journal of the Chemical Society 117: 1456–1465."
        url: null
      - citation: "Schwarzenbach, G. (1952). Der Chelateffekt. Helvetica Chimica Acta 35: 2344–2359."
        url: null

open_problems:
  - id: aqueous-speciation
    name: What is actually in a solution of a metal salt
    status: open
    status_note: Open as of 2026; speciation models disagree by orders of magnitude for hydrolysing and trivalent ions.
    description: >-
      A dissolved metal ion is rarely one species. It exchanges its water, loses protons from it, bridges
      to its neighbours and forms clusters, with the distribution depending on pH, concentration,
      temperature and what else is present. For iron(III), aluminium and the actinides the result is a
      population of hydrolysis products and polynuclear clusters whose identities are inferred from
      titration curves and whose stability constants, compiled from different laboratories, disagree by
      factors of thousands.
    why_hard: >-
      The species interconvert faster than most methods can distinguish them, and the usual evidence —
      a potentiometric titration curve — is a single scalar that many different species distributions can
      reproduce equally well. Spectroscopy that sees individual species often needs concentrations far
      above the range of interest, and the solid that crystallises out need not have existed in solution.
    unlocks: >-
      How a contaminant travels in groundwater, whether a nutrient metal is available to a plant, how
      buried nuclear waste behaves over ten thousand years, and the reliability of every geochemical
      equilibrium model, all rest on speciation numbers that are presently the weakest link.
    sources:
      - citation: "Baes, C. F. & Mesmer, R. E. (1976). The Hydrolysis of Cations. Wiley."
        url: null
      - citation: "Casey, W. H. (2006). Large aqueous aluminium hydroxide molecules. Chemical Reviews 106: 1–16."
        url: null

  - id: predicting-complex-geometry
    name: Predicting the geometry and lability a complex will adopt
    status: open
    status_note: Open as of 2026; routine for the first transition series, unreliable for heavy, f-block and spin-crossover systems.
    description: >-
      Given a metal ion and a set of ligands, the coordination number, the geometry, the spin state and
      the rate at which ligands exchange are all in principle consequences of the electronic structure.
      In practice the energy differences between competing geometries are often smaller than the error of
      the calculation, several arrangements coexist in solution, and substitution rates across the
      periodic table span fifteen orders of magnitude for reasons that are only partly systematic.
    why_hard: >-
      Transition-metal complexes have many low-lying electronic states of different spin, which is
      precisely the situation in which single-determinant methods are least trustworthy; the solvent is
      not a background but a competing ligand; and relativistic effects reorder the preferences for the
      heavier metals.
    unlocks: >-
      Designing a catalyst, a contrast agent, a metal-extraction reagent or a sensor currently means
      making and testing a series of candidates. Reliable prediction would move that work from the bench
      to the screen.
    sources:
      - citation: "Helm, L. & Merbach, A. E. (2005). Inorganic and bioinorganic solvent exchange mechanisms. Chemical Reviews 105: 1923–1959."
        url: null
      - citation: "Harvey, J. N. (2019). On the accuracy of density functional theory in transition metal chemistry. Annual Reports Section C 102: 203–226."
        url: null

applications:
  - area: Analytical chemistry
    title: One reagent that titrates most of the metals
    description: >-
      Because EDTA binds almost every metal ion with a large constant, and because the constants differ
      enough to be selected between by controlling pH, a single titration determines calcium and
      magnesium in water, lead in paint, or aluminium in an alloy. Water hardness has been measured this
      way for seventy years, and the method needs a burette rather than an instrument.
    sources:
      - citation: "Schwarzenbach, G. & Flaschka, H. (1969). Complexometric Titrations, 2nd edition. Methuen."
        url: null
  - area: Medicine
    title: Pulling a metal out of a patient
    description: >-
      Chelation therapy treats poisoning by lead, arsenic, copper and iron with a ligand chosen so that
      its complex is stable enough to capture the offending metal, soluble enough to be excreted, and not
      so indiscriminate that it strips out essential zinc as well. Desferrioxamine for iron overload in
      transfusion-dependent patients turned a condition fatal in adolescence into a managed one, and
      dimercaprol was developed in wartime as an antidote to arsenical weapons.
    domain: biology
    field_id: pharmacology
    sources:
      - citation: "Flora, S. J. S. & Pachauri, V. (2010). Chelation in metal intoxication. International Journal of Environmental Research and Public Health 7: 2745–2788."
        url: null
  - area: Metallurgy and separation
    title: Separating metals that behave almost identically
    description: >-
      The rare earths differ so little in chemistry that early separations took thousands of repeated
      crystallisations. Solvent extraction with chelating ligands exploits the small, regular change in
      ionic radius across the series: a tailored ligand prefers one ion over its neighbour by a few per
      cent, and a cascade of hundreds of such stages, run continuously, delivers single elements at
      purities above 99.99%. The same chemistry recovers copper from leach solutions too dilute to smelt.
    sources:
      - citation: "Xie, F. et al. (2014). A critical review on solvent extraction of rare earths. Minerals Engineering 56: 10–28."
        url: null

further_reading:
  - citation: "Kauffman, G. B. (1966). Alfred Werner: Founder of Coordination Chemistry. Springer."
    url: null
    note: The life and the controversy, with the experiments laid out in enough detail to follow the argument.
  - citation: "Kauffman, G. B. (1973). Classics in Coordination Chemistry. Dover."
    url: null
    note: The original papers of Tassaert, Jørgensen and Werner in translation.
  - citation: "Housecroft, C. E. & Sharpe, A. G. (2018). Inorganic Chemistry, 5th edition. Pearson."
    url: null
    note: The standard modern course, where coordination numbers, isomerism and stability constants are set out systematically.
---

## More Ammonia Than the Valence Allows

Cobalt chloride is CoCl₃. Cobalt has used three combining capacities, the chlorines have used one each, and the books balance. Add ammonia and an orange crystalline solid comes out whose composition is CoCl₃·6NH₃ — stable, pure, reproducible, and impossible to write a structure for, because nothing in the compound has a spare valence to hold the ammonia on.

This was not an isolated curiosity. By the 1880s the shelves held dozens of such compounds, and their colours were so characteristic that they served as names: luteo for the yellow CoCl₃·6NH₃, purpureo for the purple CoCl₃·5NH₃, praseo for the green and violeo for the violet forms of CoCl₃·4NH₃. Two compounds with the same formula and different colours — that is isomerism, the problem that had already forced [organic structure theory](/chemistry/organic-structure-theory/) into existence. Here it was happening in compounds with no carbon in them at all.

The explanation on offer came from {{fig:blomstrand|Christian Wilhelm Blomstrand}} and was developed by {{fig:sophus-jorgensen|Sophus Mads Jørgensen}}: ammonia molecules link into chains, as carbon atoms do, with the chain attached to the metal through one ordinary valence. It was a reasonable transfer of the one structural principle chemistry had that worked. Jørgensen spent sixteen years making the compounds the theory called for, and his preparations and analyses were the best in the field — which is why, when the chain theory lost, it lost on the evidence of its own supporter's experiments.

## Two Kinds of Valence

{{fig:alfred-werner|Alfred Werner}} was twenty-six when he proposed, in 1893, that the trouble was the assumption of a single kind of valence. A metal atom has two. The first balances ionic charge and can be satisfied by an ion anywhere in the solution. The second is a fixed number of positions, arranged in a definite geometry in contact with the metal, which can be occupied by *whole neutral molecules*.

For cobalt(III) that number is six, and it is six regardless of the charge. This makes the whole luteo–purpureo–praseo series one pattern:

| Compound | Werner's formula | Positions occupied |
| --- | --- | --- |
| CoCl₃·6NH₃ | [Co(NH₃)₆]Cl₃ | six ammonias |
| CoCl₃·5NH₃ | [Co(NH₃)₅Cl]Cl₂ | five ammonias, one chloride |
| CoCl₃·4NH₃ | [Co(NH₃)₄Cl₂]Cl | four ammonias, two chlorides |
| CoCl₃·3NH₃ | [Co(NH₃)₃Cl₃] | three ammonias, three chlorides |

Ammonia leaves, chloride takes its place, and the total never changes. The square brackets are doing real work: a chloride inside them is bonded to the cobalt and is not an ion, while a chloride outside is an ion and nothing else. {{fig:sidgwick|Nevil Sidgwick}} supplied the electronic reason thirty years later — the ligand donates a lone pair into an empty metal orbital, which is why molecules with lone pairs are the ligands and molecules without are not — but Werner's structural claim stood on its own, and it stood because it could be tested two ways at once.

## A Handed Molecule With No Carbon In It

The isomer and ion counts, set out below, left one alternative standing in principle. Werner closed it with an experiment that was also a demonstration about chemistry in general.

Since {{fig:louis-pasteur|Pasteur}}, optical activity had been tied to the asymmetric carbon atom — and, in the hands of those who wanted it to be, to the chemistry of living things. If a complex is octahedral, then one with three identical two-point ligands exists in two mirror-image forms, with nothing organic required. Werner and {{fig:victor-king|Victor King}} resolved such a cobalt complex into its enantiomers in 1911.

Then in 1914 he did it with the hexol: a central cobalt bridged by pairs of hydroxide groups to three more cobalts, each carrying four ammonias. Four cobalt atoms, twelve ammonias, six hydroxides, six bromides as counter-ions, and **not one carbon atom**. The two forms rotate the plane of polarised light in opposite directions by equal amounts. Handedness, it turned out, is a property of arrangement in space and is available to any element that has a shape — the point taken up in [stereochemistry](/chemistry/stereochemistry/) from the organic side.

## A Closer Look: Deciding Between Three Geometries by Counting

Werner's claim had two parts: that the number of positions is six, and that they lie at the corners of an octahedron. Each part was settled by a count, and the counts are worth doing because they show a structural question being answered with no structural method available — there would be no X-ray crystallography for another twenty years.

**First count: how many ions?** {{fig:miolati|Arturo Miolati}} measured molar conductivities, which rise with the number of ions a formula unit releases. Silver nitrate gave an independent check, since it precipitates free chloride at once and coordinated chloride not at all. Werner's formulae predict both:

| Compound | Ions predicted | Cl⁻ precipitated at once |
| --- | --- | --- |
| [Co(NH₃)₆]Cl₃ | 4 | 3 of 3 |
| [Co(NH₃)₅Cl]Cl₂ | 3 | 2 of 3 |
| [Co(NH₃)₄Cl₂]Cl | 2 | 1 of 3 |
| [Co(NH₃)₃Cl₃] | 0 | 0 of 3 |

Both staircases were found. The last entry is the striking one: a compound built from an ionic salt and a gas that conducts no better than sugar water. The platinum series does something better still. Running down PtCl₄·6NH₃ to PtCl₄·2NH₃ the conductivity falls to that of a non-electrolyte — and then *rises again* for K[PtCl₅(NH₃)] and K₂[PtCl₆], because the coordination sphere is now full of chloride and the potassium ions are outside it. A curve with a minimum is a prediction of the theory. The chain picture gives no reason to expect one.

**Second count: what shape?** Six positions can be arranged in three ways a chemist of 1893 would consider: a flat hexagon, a trigonal prism, or an octahedron. They are distinguished by how many isomers they permit. For a complex with four of one ligand and two of another, MA₄B₂:

| Arrangement | Isomers of MA₄B₂ | Isomers of MA₃B₃ |
| --- | --- | --- |
| Planar hexagon | 3 (1,2 and 1,3 and 1,4) | 3 |
| Trigonal prism | 3 | 3 |
| **Octahedron** | **2** (cis, trans) | **2** (facial, meridional) |

The octahedron is the only one of the three that predicts **two**. And two was what existed: praseo-green and violeo-violet CoCl₃·4NH₃, with every search for a third — including Jørgensen's, conducted in the hope of refuting Werner — failing. The argument is of a particular kind, and worth naming: it is not that the octahedron explains the two known isomers, but that its rivals require a third compound which repeated, motivated, competent searching could not find.

The hexol finishes it. Of the three arrangements, only the octahedron is chiral when three two-point ligands are fitted to it; the hexagon and the prism both have a mirror plane in that case and cannot give optical isomers. So a resolution into enantiomers excludes the other two outright. Three counts — ions, geometric isomers, optical isomers — none of them requiring any apparatus beyond a conductivity bridge, a balance and a polarimeter, and the structure of a class of thousands of compounds was fixed.

## Numbers for How Tightly a Metal Is Held

Werner's theory says what a complex is. It does not say how strongly the ligands are held, which is the question every practical use turns on.

{{fig:gilbert-morgan|Gilbert Morgan}} and {{fig:harry-drew|Harry Drew}} named the key structural trick in 1920: a **chelate**, a ligand that grips the metal at two or more positions and closes a ring. Chelates are bound far more tightly than the equivalent separate ligands, and the reason is mostly bookkeeping of a kind that belongs to [chemical thermodynamics](/chemistry/chemical-thermodynamics/). Replacing six waters with six ammonias exchanges six molecules for six: no change in the number of free particles. Replacing six waters with three two-point ligands exchanges six for three, releasing three molecules into solution. The entropy gain is worth a factor of roughly a hundred to a thousand in the equilibrium constant, for no change in the bonds formed.

{{fig:jannik-bjerrum|Jannik Bjerrum}} showed in 1941 how to measure such constants one step at a time, turning binding into a table. {{fig:gerold-schwarzenbach|Gerold Schwarzenbach}} then built ligands to exploit the effect — EDTA grips at six positions at once, with constants so large and so general that one reagent titrates most of the metals in the periodic table, as described in [chemical analysis](/chemistry/chemical-analysis/). The same property, pointed the other way, pulls lead out of a poisoned child.

Two directions lead out of this field. The colours that gave the compounds their names are not incidental: they encode how the metal's d electrons are split by the ligands around them, which is the subject of [ligand field theory](/chemistry/ligand-field-theory/). And Werner's positions need not be filled by ammonia or chloride. Fill one with a carbon atom and the result belongs to [organometallic chemistry](/chemistry/organometallic-chemistry/), where the coordination number and Sidgwick's electron count become the working rules of a catalytic cycle.
