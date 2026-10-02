---
id: bioinorganic-chemistry
domain: chemistry
thread: coordination
name: Bioinorganic Chemistry
parent_ids:
  - coordination-chemistry
  - ligand-field-theory
era_emerged: 1869 – 2011
core_question: Which metals does life use, held in what coordination, and what can a metal do that an amino acid cannot?

summary: |-
  About a third of all known proteins contain a metal, and the metals are not incidental passengers. Oxygen is carried by iron, respiration runs on iron and copper changing oxidation state, carbon dioxide is hydrated by zinc, nitrogen is fixed at an iron–molybdenum cluster, and water is split by four manganese atoms and a calcium. Strip the metal out and the protein does nothing.

  The reason is that the twenty amino acids are chemically narrow. None of them changes oxidation state usefully, none is a strong Lewis acid, none binds molecular oxygen. A metal ion supplies all three, and the protein's contribution is to put it in a particular coordination environment — often a strained one the metal would never adopt on its own — and so to tune what it does. The same iron atom carries oxygen reversibly in one protein and inserts it into an unactivated hydrocarbon in another, and the difference is the ligands.

  Reading that back the other way gives the field its programme. If the environment sets the function, then measuring the environment — by spectroscopy, by the colours and magnetism that ligand field theory interprets, and eventually by crystallography — tells you what a site is for. It also makes failure diagnosable: half the inherited diseases of metabolism, and a long list of poisonings, are a metal in the wrong place.

key_ideas:
  - term: Metalloenzyme
    definition: >-
      An enzyme whose activity requires a metal ion held at the active site. Roughly a third of
      characterised proteins qualify, and the metal is doing one of a small number of jobs: changing
      oxidation state, acting as a Lewis acid, binding a small molecule, or holding a structure rigid.
    turning_point_id: keilin-cytochromes
  - term: Redox-active and redox-inert metals
    definition: >-
      Iron, copper, manganese and cobalt move between oxidation states and are used where electrons must
      be moved. Zinc and magnesium do not, and are used where a positive charge is wanted without any risk
      of radical chemistry — which is why zinc, not iron, sits in the enzymes that handle DNA.
    turning_point_id: carbonic-anhydrase-zinc
  - term: Entatic state
    definition: >-
      A metal site held by the protein in a geometry the free ion would not adopt, so that it is already
      part of the way towards the transition state. Blue copper proteins are the classic case: the
      distorted site makes the copper exchange electrons far faster than a relaxed one would.
    turning_point_id: blue-copper-electron-transfer
  - term: Long-range electron tunnelling
    definition: >-
      Electrons move between metal centres fifteen or twenty ångströms apart through the intervening
      protein, with the rate falling off exponentially with distance. It is what lets a respiratory chain be
      built out of separated redox centres rather than requiring them to touch.
    turning_point_id: blue-copper-electron-transfer
  - term: The oxygen problem
    definition: >-
      Molecular oxygen has two unpaired electrons, so its reaction with an ordinary paired-electron
      molecule is spin-forbidden and slow — which is why we are not already burnt. A transition metal, with
      unpaired electrons of its own, is the catalyst that lets life use oxygen at all, and the one that makes
      it dangerous.
    turning_point_id: haem-cooperativity
  - term: Metal homeostasis
    definition: >-
      The cellular machinery that gets the right metal to the right site despite the binding preferences
      running the wrong way: copper and zinc bind more tightly than iron or manganese almost everywhere.
      Free copper in a cell is kept below one atom per cell, and delivery is by dedicated carrier proteins.
    turning_point_id: essential-metals-established

turning_points:
  - id: essential-metals-established
    date: 1869 – 1957
    type: MECHANISM-ESTABLISHED
    title: A list of metals an organism cannot do without
    description: >-
      Jules Raulin shows in 1869 that a mould will not grow in a medium lacking zinc, and the method —
      a chemically defined diet with one element left out — becomes the standard test. Copper is
      established as essential in 1928, cobalt in 1935, molybdenum in 1953, selenium in 1957. The
      resulting list is short and specific: a handful of metals, at concentrations from per cent down to
      parts per billion, each required and each toxic in excess. That a trace of a metal could be
      indispensable was not obvious, and distinguishing requirement from contamination demanded
      analytical chemistry of a standard that barely existed.
    contested: false
    sources:
      - citation: "Raulin, J. (1869). Études chimiques sur la végétation. Annales des Sciences Naturelles 11: 93–299."
        url: null
      - citation: "Mertz, W. (1981). The essential trace elements. Science 213: 1332–1338."
        url: null

  - id: haem-cooperativity
    date: 1904 – 1970
    type: MECHANISM-ESTABLISHED
    title: An iron atom that moves, and a protein that follows
    description: >-
      Christian Bohr finds in 1904 that haemoglobin's oxygen binding curve is sigmoid rather than
      hyperbolic — the molecule binds more eagerly once it has begun — and that acid shifts it. The
      structural explanation came from Max Perutz's crystallography: on binding oxygen the iron changes
      spin state, shrinks, and moves into the plane of its haem ring by roughly half an ångström, dragging
      the histidine behind it and triggering a rearrangement of the whole four-subunit assembly. A
      sub-ångström motion at one metal atom, amplified into a change in affinity at the other three.
    contested: false
    sources:
      - citation: "Bohr, C., Hasselbalch, K. & Krogh, A. (1904). Über einen in biologischer Beziehung wichtigen Einfluss. Skandinavisches Archiv für Physiologie 16: 402–412."
        url: null
      - citation: "Perutz, M. F. (1970). Stereochemistry of cooperative effects in haemoglobin. Nature 228: 726–739."
        url: null

  - id: keilin-cytochromes
    date: 1925
    type: MECHANISM-ESTABLISHED
    title: Respiration is a chain of metals
    description: >-
      David Keilin, examining the flight muscle of a horse botfly with a hand spectroscope, sees four
      absorption bands that appear and disappear as the insect uses oxygen. He names the pigments
      cytochromes, establishes that they are iron compounds cycling between the +2 and +3 states, and shows
      the same bands in yeast, plants and mammals. Respiration therefore is not a single oxidation but a
      sequence of metal centres passing electrons along — a conclusion reached with an optical instrument
      and no chemistry at all.
    contested: false
    sources:
      - citation: "Keilin, D. (1925). On cytochrome, a respiratory pigment common to animals, yeast and higher plants. Proceedings of the Royal Society B 98: 312–339."
        url: null
      - citation: "Keilin, D. (1966). The History of Cell Respiration and Cytochrome. Cambridge University Press."
        url: null

  - id: carbonic-anhydrase-zinc
    date: 1939 – 1972
    type: MECHANISM-ESTABLISHED
    title: Zinc, and the first metal that is not there for electrons
    description: >-
      David Keilin and Thaddeus Mann find zinc in carbonic anhydrase, the first zinc enzyme identified.
      Zinc cannot change oxidation state, so its role had to be something else: it binds a water molecule
      and makes it far more acidic, generating hydroxide at neutral pH where there would otherwise be
      almost none. The structure, solved by Anders Liljas in 1972, showed the zinc held by three histidines
      with the fourth position occupied by that water. The enzyme turns over a million times a second, and
      the whole acceleration comes from one coordinated water.
    contested: false
    sources:
      - citation: "Keilin, D. & Mann, T. (1939). Carbonic anhydrase. Nature 144: 442–443."
        url: null
      - citation: "Liljas, A. et al. (1972). Crystal structure of human carbonic anhydrase C. Nature New Biology 235: 131–137."
        url: null

  - id: blue-copper-electron-transfer
    date: 1962 – 1992
    type: MECHANISM-ESTABLISHED
    title: Sites built strained, and electrons that tunnel
    description: >-
      The blue copper proteins are coloured a thousand times more intensely than an ordinary copper
      complex, because the absorption is a charge transfer from sulphur to copper rather than a d-to-d
      transition. Crystallography showed why: the copper is held in a distorted site it would never adopt
      freely, which makes it exchange electrons with little reorganisation and therefore very fast. Harry
      Gray and others then measured electron transfer between centres deliberately placed at known
      separations in a protein, finding rates that fall off exponentially with distance — so the protein is
      a medium electrons tunnel through, not an insulator they must be carried around.
    contested: false
    sources:
      - citation: "Malmström, B. G. (1994). Rack-induced bonding in blue-copper proteins. European Journal of Biochemistry 223: 711–718."
        url: null
      - citation: "Gray, H. B. & Winkler, J. R. (1996). Electron transfer in proteins. Annual Review of Biochemistry 65: 537–561."
        url: null

  - id: rosenberg-cisplatin
    date: 1965 – 1978
    type: MECHANISM-ESTABLISHED
    title: An electrode that stopped bacteria dividing
    description: >-
      Barnett Rosenberg, studying whether electric fields affect cell division, finds that bacteria in his
      apparatus grow into long filaments without dividing — and traces the cause not to the field but to
      platinum compounds leaching from the electrodes. The active species is cis-diamminedichloroplatinum,
      and its trans isomer is inactive, so the effect is stereochemical: the cis arrangement can bind two
      adjacent guanines on the same DNA strand and the trans cannot. Approved in 1978, it turned metastatic
      testicular cancer from almost always fatal into usually curable. Chernyaev's trans effect is what makes
      the correct isomer obtainable pure.
    contested: false
    sources:
      - citation: "Rosenberg, B., Van Camp, L., Trosko, J. E. & Mansour, V. H. (1969). Platinum compounds: a new class of potent antitumour agents. Nature 222: 385–386."
        url: https://doi.org/10.1038/222385a0
      - citation: "Jamieson, E. R. & Lippard, S. J. (1999). Structure, recognition and processing of cisplatin–DNA adducts. Chemical Reviews 99: 2467–2498."
        url: null

  - id: oxygen-evolving-complex
    date: 1969 – 2011
    type: MECHANISM-ESTABLISHED
    title: Four manganese atoms and a calcium, counted by flashes
    description: >-
      Pierre Joliot and Bessel Kok give plants single flashes of light and find that oxygen is released in a
      pattern with a period of four, so the catalyst stores four oxidising equivalents before releasing O₂ in
      one step. What the catalyst was took forty years more: in 2011 Yasufumi Umena, Keisuke Kawakami,
      Jian-Ren Shen and Nobuo Kamiya reported the structure at 1.9 ångströms, resolving a cluster of four
      manganese atoms, one calcium and five oxygens. It performs the most thermodynamically demanding
      reaction in biology, in every leaf, and it rebuilds itself every half hour because the reaction
      destroys it.
    contested: false
    sources:
      - citation: "Kok, B., Forbush, B. & McGloin, M. (1970). Cooperation of charges in photosynthetic oxygen evolution. Photochemistry and Photobiology 11: 457–475."
        url: null
      - citation: "Umena, Y., Kawakami, K., Shen, J.-R. & Kamiya, N. (2011). Crystal structure of oxygen-evolving photosystem II at 1.9 Å. Nature 473: 55–60."
        url: https://doi.org/10.1038/nature09913

open_problems:
  - id: metalloenzyme-from-scratch
    name: Building a metal site that performs like a natural one
    status: open
    status_note: Open as of 2026; designed metalloproteins reach useful activity for simple reactions and fall short by orders of magnitude for hard ones.
    description: >-
      Natural metal sites achieve rates and selectivities that synthetic catalysts do not approach, using
      the same metals. Designing one from scratch — choosing the ligands, the second coordination shell, the
      channels that admit substrate and expel product — now succeeds for hydrolysis and simple oxidations,
      and fails for the reactions that matter most. The hardest case is nitrogen fixation, recorded as an
      open problem of its own in [catalysis](/chemistry/catalysis/).
    why_hard: >-
      The metal is only part of the site. Much of the catalytic power comes from a precisely placed second
      shell of residues that position the substrate, shuttle protons and tune the metal's potential, and
      these contributions are individually small and collectively decisive. Computing them requires accuracy
      in spin-state and redox energies that is not currently available.
    unlocks: >-
      Catalysts for oxidation with air, for carbon dioxide reduction and for water splitting that work at
      ambient conditions on abundant metals. It would also test whether the natural sites are optimal or
      merely the ones evolution happened to find.
    sources:
      - citation: "Lu, Y., Yeung, N., Sieracki, N. & Marshall, N. M. (2009). Design of functional metalloproteins. Nature 460: 855–862."
        url: null
      - citation: "Schwizer, F. et al. (2018). Artificial metalloenzymes: reaction scope and optimization strategies. Chemical Reviews 118: 142–231."
        url: null

  - id: metal-trafficking
    name: How a cell gets the right metal to the right site
    status: open
    status_note: Open as of 2026; carrier proteins identified for copper and some others, the general logic not established.
    description: >-
      The affinities of divalent metals for almost any ligand set follow the same order, with copper and
      zinc at the top and manganese and iron below. A protein that needs manganese would therefore be
      expected to fill with copper. It does not. Cells maintain free copper below one atom per cell,
      deliver metals by dedicated chaperones, and discriminate by kinetics and compartment rather than by
      thermodynamics — but how the specificity is achieved in general, and how a newly folded protein is
      matched to its metal, is not settled.
    why_hard: >-
      The quantity that matters is the free concentration of each metal in each compartment, and those
      concentrations are far too low to measure directly; they are inferred from sensor proteins whose own
      affinities must be calibrated. Metals also exchange during the extraction of a protein, so the metal
      found in a purified sample need not be the one that was there.
    unlocks: >-
      Metal misdistribution underlies Wilson's and Menkes' diseases, contributes to neurodegeneration, and
      is a route by which pathogens are starved of iron by their hosts and fight back. It also sets whether
      a metal supplement or a chelating drug will reach its target.
    sources:
      - citation: "Rae, T. D. et al. (1999). Undetectable intracellular free copper. Science 284: 805–808."
        url: null
      - citation: "Foster, A. W., Osman, D. & Robinson, N. J. (2014). Metal preferences and metallation. Journal of Biological Chemistry 289: 28095–28103."
        url: null

applications:
  - area: Oncology
    title: A coordination compound that cures a cancer
    description: >-
      Cisplatin and its successors are given to a large fraction of all patients receiving chemotherapy, and
      for testicular cancer the cure rate exceeds ninety per cent. The mechanism is coordination chemistry:
      the two chlorides are slowly replaced by water inside the cell, and the resulting electrophilic
      platinum binds two adjacent guanine bases, bending the DNA so that repair and replication fail. The
      geometry is the drug — the trans isomer makes the same bonds to separate sites and does nothing.
    domain: biology
    field_id: cancer-biology
    sources:
      - citation: "Kelland, L. (2007). The resurgence of platinum-based cancer chemotherapy. Nature Reviews Cancer 7: 573–584."
        url: null
  - area: Public health
    title: The commonest nutritional deficiency is a stability-constant problem
    description: >-
      Iron deficiency affects over a billion people, and in cereal-based diets the cause is not a shortage of
      iron but its sequestration: phytate, the storage form of phosphate in grain, binds iron and zinc with
      constants large enough that the metal passes through unabsorbed. Vitamin C competes for the iron and
      increases uptake several-fold; tea and coffee polyphenols compete the other way. Fortification
      programmes therefore have to choose a chemical form of iron, not merely a quantity.
    domain: biology
    field_id: epidemiology
    sources:
      - citation: "Hurrell, R. & Egli, I. (2010). Iron bioavailability and dietary reference values. American Journal of Clinical Nutrition 91: 1461S–1467S."
        url: null
  - area: Energy
    title: Copying a cluster that destroys itself twice an hour
    description: >-
      The manganese–calcium cluster of photosystem II splits water using visible light, at a rate and
      overpotential no synthetic catalyst matches. Attempts to copy it have produced manganese and cobalt
      oxide catalysts that work, and that share with the natural system a tendency to fall apart — which the
      leaf solves by continuous repair rather than by durability. The overpotential that limits every such
      catalyst is the open problem of
      [electrode potentials](/chemistry/electrode-potentials/).
    sources:
      - citation: "Kanan, M. W. & Nocera, D. G. (2008). In situ formation of an oxygen-evolving catalyst. Science 321: 1072–1075."
        url: null

further_reading:
  - citation: "Lippard, S. J. & Berg, J. M. (1994). Principles of Bioinorganic Chemistry. University Science Books."
    url: null
    note: The book that defined the subject as a subject; short, and organised by what metals do.
  - citation: "Bertini, I., Gray, H. B., Stiefel, E. I. & Valentine, J. S. (2007). Biological Inorganic Chemistry. University Science Books."
    url: null
    note: The comprehensive modern treatment, with the spectroscopy worked through.
  - citation: "Keilin, D. (1966). The History of Cell Respiration and Cytochrome. Cambridge University Press."
    url: null
    note: Written by the discoverer; a model of how an optical observation becomes a mechanism.
---

## What a Metal Does That an Amino Acid Cannot

A protein is built from twenty amino acids, and chemically they are a narrow set. They offer acids, bases, hydrogen bond donors and acceptors, and a range of greasiness. What they do not offer is a usable change of oxidation state, a strong Lewis acid, or anything that binds molecular oxygen.

Life needs all three, so it borrows metals. About a third of characterised proteins contain one, and the division of labour is clean enough to tabulate:

| Metal | What it is used for | Example |
| --- | --- | --- |
| Iron | carrying O₂; moving electrons; activating O₂ | haemoglobin, cytochromes |
| Copper | moving electrons; reducing O₂ to water | plastocyanin, cytochrome oxidase |
| Zinc | Lewis acid; structural | carbonic anhydrase, zinc-finger proteins |
| Magnesium | charge neutralisation; phosphate chemistry | every ATP-using enzyme |
| Manganese | accumulating oxidising equivalents | photosystem II |
| Molybdenum | two-electron oxygen atom transfer | nitrogenase, nitrate reductase |
| Cobalt | the one biological metal–carbon bond | coenzyme B₁₂ |

The split in the middle of that table is the organising distinction of the field. Iron, copper and manganese change oxidation state, so they go where electrons must move — and they bring with them the risk of radical chemistry. Zinc and magnesium do not change oxidation state at all, so they go where a positive charge is wanted and radicals would be a catastrophe. This is why the enzymes that cut, join and copy DNA use zinc and magnesium: an iron atom next to a nucleic acid would eventually destroy it.

{{fig:keilin|David Keilin}} established in 1925 that respiration is organised this way, using a hand spectroscope and the flight muscle of a botfly. Watching four absorption bands come and go as the insect consumed oxygen, he concluded that oxidation proceeds along a chain of iron-containing pigments passing electrons from one to the next, and found the same bands in yeast and in plants. The whole result was obtained optically.

## The Protein Decides What the Metal Does

An iron atom in a haem ring carries oxygen reversibly in haemoglobin, reduces oxygen to water in cytochrome oxidase, destroys hydrogen peroxide in catalase, and inserts an oxygen atom into an unreactive C–H bond in cytochrome P450. Same metal, same ring. The difference is what else is coordinated and what surrounds it.

Two numbers from haemoglobin show how little it takes. {{fig:christian-bohr|Christian Bohr}} found in 1904 that the oxygen binding curve is sigmoid: the Hill coefficient is about 2.8, where an independent binding site would give 1.0, so the four subunits are communicating. {{fig:perutz|Max Perutz}}'s structures said what the signal is. Deoxygenated iron(II) is high-spin, five-coordinate, and sits about half an ångström out of the plane of its ring. On binding oxygen it becomes low-spin, smaller, and pulls into the plane — a spin-state change of exactly the kind [ligand field theory](/chemistry/ligand-field-theory/) describes — dragging the attached histidine with it and setting off a rearrangement of the whole assembly. A motion of half an ångström at one atom, amplified into a change of affinity at three others fifteen ångströms away.

The blue copper proteins make the point in the opposite direction, by showing the protein imposing a geometry on the metal. Their colour is roughly a thousand times more intense than an ordinary copper complex's, because it is a charge transfer from a coordinated sulphur rather than a forbidden d-to-d transition. Crystallography showed the copper held in a distorted site it would never adopt in solution. That distortion is the point: the site is already partway to the geometry the oxidised form wants, so almost no reorganisation is needed when the electron leaves, and the transfer is fast — the **entatic state**, a metal kept uncomfortable on purpose. The rate theory this draws on is {{fig:marcus|Marcus}}'s, set out under [transition state theory](/chemistry/transition-state-theory/).

{{fig:harry-gray|Harry Gray}} then settled how electrons get between sites that do not touch. By attaching a redox partner at chosen positions on a protein and measuring the rates, he showed they fall off exponentially with distance, with transfers remaining fast over fifteen to twenty ångströms. The protein is a tunnelling medium, which is what makes a respiratory chain of separated centres possible at all.

## The Hardest Reactions in Biology

Two reactions stand out for how much they demand, and both are performed by metal clusters rather than single ions.

Nitrogen fixation breaks the 941 kJ mol⁻¹ triple bond of N₂ at an iron–molybdenum–sulphur cluster, at ambient temperature and pressure, where the industrial process described in [catalysis](/chemistry/catalysis/) needs 400 °C and 200 atmospheres. That gap is catalysis's standing open problem, and it is a bioinorganic problem in its details.

Water oxidation is the other. {{fig:joliot|Pierre Joliot}} and {{fig:bessel-kok|Bessel Kok}} established the arithmetic in 1970 by giving plants single flashes of light and watching the oxygen come off: the yield oscillates with a period of **four**, so the catalyst accumulates four oxidising equivalents and then releases O₂ in one event. What the catalyst was took another forty years, until {{fig:umena|Yasufumi Umena}}, {{fig:kawakami|Keisuke Kawakami}}, {{fig:jian-ren-shen|Jian-Ren Shen}} and {{fig:kamiya|Nobuo Kamiya}} resolved it at 1.9 ångströms in 2011: four manganese atoms, one calcium, five bridging oxygens. It is the most thermodynamically demanding reaction life performs, it happens in every leaf, and the reaction damages the protein that performs it badly enough that photosystem II is disassembled and rebuilt roughly every half hour. Durability was not available, so the organism bought repair instead — which is a design decision no synthetic catalyst has yet been allowed to make.

## A Closer Look: How Zinc Buys a Factor of Ten Million

Those clusters are the extreme. The commonest thing a metal does in a protein needs only one ion and no redox chemistry at all, and it is worth seeing how much that buys.

Zinc cannot change oxidation state. Whatever it is doing in an enzyme is not electron chemistry, and carbonic anhydrase shows what the alternative is.

The reaction is the hydration of carbon dioxide, CO₂ + H₂O → HCO₃⁻ + H⁺, and it is needed because a red blood cell has to load the carbon dioxide from a whole tissue's metabolism during its passage through a capillary. Uncatalysed, the rate constant at 25 °C is about **0.04 s⁻¹**. A red cell's transit takes roughly 0.75 s, so the fraction of dissolved CO₂ that would react in the time available is

$$
1 - e^{-0.04 \times 0.75} = 3\%.
$$

That is not a workable physiology. The enzyme's turnover number is about **10⁶ s⁻¹** — one of the fastest known — giving an acceleration of some $2.7 \times 10^7$.

The whole of it comes from one water molecule. The reaction's difficulty is that CO₂ is attacked by hydroxide, not by water, and at pH 7 there is very little hydroxide about. Water's $\mathrm{p}K_a$ is 15.7, so the fraction of water molecules ionised at pH 7 is

$$
10^{7 - 15.7} = 2 \times 10^{-9}.
$$

Coordinate that water to a zinc ion held by three histidines, and the metal's positive charge pulls electron density from the oxygen and makes the O–H bond far easier to break. The measured $\mathrm{p}K_a$ of the zinc-bound water in carbonic anhydrase is about **7.0**. So at physiological pH half of the enzyme molecules carry a hydroxide, against two in a billion for free water: an increase in the concentration of the actual nucleophile of roughly

$$
\frac{0.5}{2 \times 10^{-9}} \approx 2 \times 10^{8}.
$$

In energy terms, shifting a $\mathrm{p}K_a$ by 8.7 units is worth

$$
2.303\,RT \times 8.7 = 5.71 \times 8.7 = 50\ \text{kJ mol}^{-1},
$$

about half a typical activation barrier, delivered by putting a water molecule next to a divalent cation. The rest of the protein's contribution is logistics: a hydrophobic pocket that holds the CO₂ in position, and a histidine that shuttles the released proton out to the solvent, which is needed because without it the proton transfer becomes the slow step.

Two conclusions follow. First, the choice of zinc is not arbitrary. A metal is wanted that is a strong Lewis acid, binds water with a $\mathrm{p}K_a$ near neutral, exchanges ligands quickly, and cannot do redox chemistry next to a membrane full of oxidisable lipid. Zinc satisfies all four; iron would satisfy the first three and fail the fourth. Second, the enzyme is operating within a factor of a few of the diffusion limit, with $k_{\mathrm{cat}}/K_{\mathrm{M}}$ around $10^8$ M⁻¹ s⁻¹. There is nothing left to optimise; the protein has run out of room to improve, and what remains is the rate at which CO₂ arrives.

## Metals Out of Place

Because the metal is the function, a metal in the wrong place is a disease or a drug, and both show up here.

{{fig:rosenberg|Barnett Rosenberg}} found the drug by accident in 1965. Looking for an effect of electric fields on cell division, he saw bacteria elongate without dividing, and traced it to platinum dissolving from his electrodes. The active compound was *cis*-diamminedichloroplatinum; the *trans* isomer does nothing. The reason is geometric — the cis arrangement can bind two adjacent guanines on one DNA strand and kink it, the trans arrangement reaches two sites that are too far apart to matter — and the only reason the pure cis isomer can be made at all is {{fig:chernyaev|Chernyaev}}'s trans effect from [coordination chemistry](/chemistry/coordination-chemistry/). Approved in 1978, it turned metastatic testicular cancer from a disease that killed almost everyone into one that is usually cured.

The failures run the other way. Wilson's disease is copper accumulating because the protein that exports it is defective; Menkes' disease is copper never arriving. Both are treated with the chelating ligands of coordination chemistry, chosen by stability constant. And the commonest nutritional deficiency in the world is not a shortage of iron in the diet but iron bound up by phytate in cereal grains tightly enough that it is never absorbed — a public health problem whose decisive quantity is an equilibrium constant.

Which returns the field to the question it started from. The cell's difficulty, recorded above as an open problem, is that the metals it must distribute have affinities in almost the same order for every ligand set, with copper and zinc at the top. A site that needs manganese should fill with copper and does not. The answer is not thermodynamics but control: free copper is held below one atom per cell, and every metal is handed over by a carrier that will not let go to the wrong recipient. Having spent a century learning what a metal site does, the field is now mostly asking how one gets built.
