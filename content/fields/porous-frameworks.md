---
id: porous-frameworks
domain: chemistry
thread: materials
name: Porous Frameworks
parent_ids:
  - solid-state-chemistry
  - catalysis
era_emerged: 1756 – 2025
core_question: How do you build a solid that is mostly empty space, with holes of one chosen size, and keep it from collapsing?

summary: |-
  Axel Cronstedt heated a mineral in 1756 and it frothed, giving off water and then taking it back. He called the class zeolites, boiling stones, and what he had found was a solid with channels running through it large enough for a water molecule and too small for much else. Nearly two centuries later James McBain gave the property its name: a molecular sieve, a solid that sorts molecules by size rather than by chemistry.

  Richard Barrer and Robert Milton then showed that such frameworks need not be collected from basalt. Crystallised from hot alkaline gels, with an organic molecule in the mixture acting as a mould around which the framework grows, they can be made to topologies that occur nowhere in nature. By the 1970s the pore had become a reagent: a channel the width of a molecule forces a reaction to proceed only through intermediates that fit, and one such zeolite is why petrol is cracked the way it is.

  The second route arrived in 1989, when Bernard Hoskins and Richard Robson proposed building frameworks deliberately out of metal nodes joined by rigid organic struts. The difficulty was not making them but emptying them — almost all collapsed when the solvent was removed — until Omar Yaghi's frameworks from the late 1990s held their shape, and with it internal surface areas several times greater than a sheet of graphene offers per gram. Susumu Kitagawa, Robson and Yaghi shared the 2025 Nobel Prize in Chemistry for the work.

key_ideas:
  - term: Molecular sieve
    definition: >-
      A solid whose pores admit molecules below a certain size and exclude the rest, so that a mixture is
      separated by dimension rather than by boiling point or affinity. Zeolite A separates straight-chain
      from branched hydrocarbons on a difference of about one ångström.
    turning_point_id: cronstedt-zeolites
  - term: Structure-directing agent
    definition: >-
      An organic molecule or hydrated cation included in the synthesis mixture, around which the framework
      crystallises, so that the channel it leaves behind has roughly its shape. Changing the template changes
      the topology, which is the nearest thing framework synthesis has to a design step.
    turning_point_id: barrer-milton-synthetic-zeolites
  - term: Shape selectivity
    definition: >-
      Selectivity imposed by the pore rather than by the catalyst's chemistry: a reaction can only give
      products that fit through the channel, or can only pass through transition states the cavity
      accommodates. It lets one catalyst make a single isomer where the intrinsic chemistry would make several.
    turning_point_id: zeolite-shape-selective-catalysis
  - term: Reticular chemistry
    definition: >-
      Designing a framework by choosing a net — a topology of nodes and links — and then selecting a metal
      cluster and an organic strut that will realise it. Lengthen the strut without changing the net and the
      pores expand while the topology stays, which is the closest the field comes to a predictable step.
    turning_point_id: hoskins-robson-open-frameworks
  - term: Permanent porosity
    definition: >-
      Keeping the voids open after the solvent that filled them during synthesis has been removed. Most early
      frameworks failed here, collapsing under the capillary forces of drying, and distinguishing a genuinely
      porous solid from a collapsed one requires measuring gas uptake rather than inspecting a crystal structure.
    turning_point_id: mof-permanent-porosity
  - term: Secondary building unit
    definition: >-
      A rigid polyatomic cluster — four zinc atoms about a central oxygen, say — that behaves as a single
      multi-connected node. Using clusters rather than single metal ions is what makes the resulting framework
      rigid enough to survive emptying.
    turning_point_id: mof-permanent-porosity

turning_points:
  - id: cronstedt-zeolites
    date: 1756 – 1932
    type: SUBSTANCE-ISOLATED
    title: A stone that boils
    description: >-
      Axel Fredrik Cronstedt heats the mineral stilbite and finds it froths and gives off steam, then reabsorbs
      water on cooling, and names the class zeolites — boiling stones. The behaviour implies channels within a
      rigid solid, large enough for water and small enough to be selective, which is a structure nobody had
      reason to expect. In 1932 James McBain established that such solids separate gas mixtures by molecular
      size and coined the term molecular sieve for them, which turned a mineralogical curiosity into a
      category of material defined by what it does.
    contested: false
    sources:
      - citation: "Cronstedt, A. F. (1756). Observation and description of an unknown species of rock called zeolites. Kongliga Svenska Vetenskaps Academiens Handlingar 17: 120–123."
        url: null
      - citation: "McBain, J. W. (1932). The Sorption of Gases and Vapours by Solids. Routledge."
        url: null

  - id: barrer-milton-synthetic-zeolites
    date: 1948 – 1959
    type: SYNTHESIS-ACHIEVED
    title: Frameworks that are not minerals
    description: >-
      Richard Barrer works out how to crystallise zeolites from hot alkaline solution and converts one
      framework into another, establishing that the structures are synthetic targets rather than geological
      accidents. Robert Milton, at Union Carbide, then prepares zeolites A and X — topologies with no natural
      counterpart — and by 1954 they are sold as drying agents and gas separators. The decisive discovery is
      that a species included in the gel acts as a mould: the framework crystallises around a hydrated cation
      or an organic molecule, and changing it changes the channel left behind.
    contested: false
    sources:
      - citation: "Barrer, R. M. (1948). Synthesis of a zeolitic mineral with chabazite-like sorptive properties. Journal of the Chemical Society: 127–132."
        url: null
      - citation: "Milton, R. M. (1989). Molecular sieve science and technology: a historical perspective. ACS Symposium Series 398: 1–10."
        url: null

  - id: zeolite-shape-selective-catalysis
    date: 1962 – 1976
    type: TECHNIQUE-INVENTED
    title: The pore as a reagent
    description: >-
      Zeolite Y replaces amorphous silica-alumina in petroleum cracking in 1962 and raises the yield of petrol
      per barrel sharply, because the acid sites inside its channels are both stronger and sorted by what can
      reach them. Paul Weisz names the principle shape selectivity. ZSM-5, reported in 1972, makes it explicit:
      its channels admit the para isomer of a substituted benzene and not the bulkier ortho and meta ones, so a
      reaction that would give a mixture gives one product. Selectivity is being imposed by a cavity rather
      than by a reagent.
    contested: false
    sources:
      - citation: "Weisz, P. B. & Frilette, V. J. (1960). Intracrystalline and molecular-shape-selective catalysis by zeolite salts. Journal of Physical Chemistry 64: 382."
        url: null
      - citation: "Argauer, R. J. & Landolt, G. R. (1972). Crystalline zeolite ZSM-5 and method of preparing the same. US Patent 3,702,886."
        url: null

  - id: mesoporous-templating
    date: 1990 – 1992
    type: SYNTHESIS-ACHIEVED
    title: Pore size as a dial
    description: >-
      Zeolite channels stop at about one nanometre, which excludes most molecules of interest in fine
      chemistry. Tsuneo Yanagisawa and Kazuyuki Kuroda, and then Charles Kresge and Jeffrey Beck at Mobil,
      use not a single molecule as a template but an assembly of them: surfactant micelles arrange into rods,
      silica condenses around the array, and burning out the organic leaves a honeycomb of parallel channels.
      Because the micelle diameter depends on the surfactant chain length, the pore diameter becomes
      continuously adjustable from roughly two to ten nanometres.
    contested: false
    sources:
      - citation: "Yanagisawa, T. et al. (1990). The preparation of alkyltrimethylammonium–kanemite complexes. Bulletin of the Chemical Society of Japan 63: 988–992."
        url: null
      - citation: "Kresge, C. T., Leonowicz, M. E., Roth, W. J., Vartuli, J. C. & Beck, J. S. (1992). Ordered mesoporous molecular sieves synthesized by a liquid-crystal template mechanism. Nature 359: 710–712."
        url: https://doi.org/10.1038/359710a0

  - id: hoskins-robson-open-frameworks
    date: 1989 – 1994
    type: SYNTHESIS-ACHIEVED
    title: Node and strut
    description: >-
      Bernard Hoskins and Richard Robson propose building frameworks on purpose: take a metal ion that bonds in
      a known geometry, join it with a rigid organic molecule carrying binding groups at both ends, and the
      product should be an extended net whose topology follows from the geometry of the two pieces. They
      demonstrate it with a diamond-like copper framework containing large empty channels. The argument is
      that a crystal structure can be designed rather than discovered, with the organic strut setting the
      distance and the metal setting the angles.
    contested: false
    sources:
      - citation: "Hoskins, B. F. & Robson, R. (1989). Infinite polymeric frameworks consisting of three-dimensionally linked rod-like segments. Journal of the American Chemical Society 111: 5962–5964."
        url: null
      - citation: "Hoskins, B. F. & Robson, R. (1990). Design and construction of a new class of scaffolding-like materials. Journal of the American Chemical Society 112: 1546–1554."
        url: null

  - id: mof-permanent-porosity
    date: 1995 – 2025
    type: SYNTHESIS-ACHIEVED
    title: Frameworks that survive being emptied
    description: >-
      Designing an open framework turned out to be easier than keeping it open: nearly all early examples
      collapsed when the solvent filling their channels was removed. Omar Yaghi's approach — using rigid
      polyatomic metal clusters as the nodes rather than single ions — produced frameworks that retained their
      structure after activation, with gas uptake confirming the voids were real, and internal surface areas
      quickly exceeding anything previously measured. Susumu Kitagawa established in parallel that some
      frameworks are deliberately flexible, breathing open and shut as gas is admitted. Kitagawa, Robson and
      Yaghi shared the 2025 Nobel Prize in Chemistry.
    contested: false
    sources:
      - citation: "Li, H., Eddaoudi, M., O'Keeffe, M. & Yaghi, O. M. (1999). Design and synthesis of an exceptionally stable and highly porous metal-organic framework. Nature 402: 276–279."
        url: https://doi.org/10.1038/46248
      - citation: "Kitagawa, S., Kitaura, R. & Noro, S. (2004). Functional porous coordination polymers. Angewandte Chemie International Edition 43: 2334–2375."
        url: null

open_problems:
  - id: framework-stability-tradeoff
    name: Porosity and durability pull in opposite directions
    status: open
    status_note: Open as of 2026; zirconium and titanium frameworks are water-stable at moderate areas, the record-area frameworks are not.
    description: >-
      The frameworks with the largest internal surfaces are built from long, thin struts and sparse nodes,
      which is exactly what makes them fragile: they collapse under modest pressure, they lose crystallinity in
      humid air, and the carboxylate–zinc bonds that hold many of them together are hydrolysed by water. The
      frameworks that survive steam and acid are built from more strongly bound metals at lower porosity. No
      material yet combines the two, which is the main reason a class of solids thirty years old is still
      barely used at industrial scale.
    why_hard: >-
      The strut that creates volume is the member that must carry load, so the two requirements act on the same
      component. Hydrolytic stability depends on the metal–linker bond, and the metals that bind carboxylates
      most strongly form clusters of lower connectivity or less open geometry. Stability also has to be judged
      under working conditions rather than as synthesised, which is slow to measure.
    unlocks: >-
      Carbon capture from flue gas, which is wet; natural gas storage at modest pressure; and water harvesting
      in cycles numbering thousands rather than dozens. Each of these has been demonstrated on a framework that
      would not survive a year of service.
    sources:
      - citation: "Howarth, A. J. et al. (2016). Chemical, thermal and mechanical stabilities of metal-organic frameworks. Nature Reviews Materials 1: 15018."
        url: null
      - citation: "Burtch, N. C., Jasuja, H. & Walton, K. S. (2014). Water stability and adsorption in metal-organic frameworks. Chemical Reviews 114: 10575–10612."
        url: null

  - id: which-framework-crystallises
    name: Predicting which framework a given recipe will give
    status: open
    status_note: Open as of 2026; around 260 zeolite framework types are known against millions computed to be feasible.
    description: >-
      Enumeration of plausible four-connected silicate nets produces millions of structures within the energy
      range of known zeolites, and about 260 have ever been made. Which one crystallises from a particular gel,
      with a particular template, at a particular temperature and alkalinity, cannot be predicted; the
      relationship between a template's shape and the channel it produces is suggestive rather than
      determining, and small changes in the recipe give different frameworks or none.
    why_hard: >-
      The product is selected kinetically during nucleation from a disordered gel, so thermodynamic stability
      of the final framework is nearly irrelevant to which one appears. The nucleus is a few nanometres across
      and transient, which puts it beyond most characterisation, and the energy differences between competing
      frameworks are a few kilojoules per mole of silicon.
    unlocks: >-
      Shape-selective catalysis currently uses whichever pore geometries happen to be obtainable. Being able
      to target a chosen channel shape would let a catalyst be designed around a transition state rather than
      the reverse.
    sources:
      - citation: "Li, Y., Yu, J. & Xu, R. (2013). Criteria for zeolite frameworks realizable for target synthesis. Angewandte Chemie International Edition 52: 1673–1677."
        url: null
      - citation: "Pophale, R., Cheeseman, P. A. & Deem, M. W. (2011). A database of new zeolite-like materials. Physical Chemistry Chemical Physics 13: 12407–12412."
        url: null

applications:
  - area: Petroleum refining
    title: The largest catalytic process in the world runs inside pores
    description: >-
      Fluid catalytic cracking converts heavy petroleum fractions into petrol and light olefins, processing
      millions of barrels a day, and since 1962 it has used zeolite Y. The pore does two things at once: it
      concentrates very strong acid sites in a confined space, and it limits which molecules reach them and
      which products can leave. The step change in petrol yield when zeolites replaced amorphous catalysts is
      among the largest single efficiency gains in industrial chemistry, and the chemistry of the acid site
      itself belongs to [catalysis](/chemistry/catalysis/).
    sources:
      - citation: "Vogt, E. T. C. & Weckhuysen, B. M. (2015). Fluid catalytic cracking: recent developments. Chemical Society Reviews 44: 7342–7370."
        url: null
  - area: Gas separation
    title: Oxygen from air without cooling it
    description: >-
      Nitrogen is adsorbed by a cation-exchanged zeolite more strongly than oxygen, because its quadrupole
      interacts with the exposed cations in the channels. Alternating the pressure on two beds therefore
      delivers a continuous oxygen stream, which is how industrial oxygen is made where a cryogenic plant
      cannot be justified and how a portable medical concentrator works — a device that lets a patient needing
      supplementary oxygen leave the house, with no cylinder to refill.
    sources:
      - citation: "Yang, R. T. (2003). Adsorbents: Fundamentals and Applications. Wiley."
        url: null
  - area: Water supply
    title: Drinking water out of desert air
    description: >-
      A framework with pores of the right size takes up water vapour steeply at low humidity and releases it
      with mild warming, which allows water to be collected from air too dry for a condenser. Devices built on
      zirconium and aluminium frameworks have produced on the order of 0.1 to 0.3 litres of water per kilogram
      of adsorbent per day at 20% relative humidity, using sunlight alone for the release step. The limit is
      not the thermodynamics but how many cycles the framework survives.
    sources:
      - citation: "Kim, H. et al. (2017). Water harvesting from air with metal-organic frameworks powered by natural sunlight. Science 356: 430–434."
        url: null
      - citation: "Hanikel, N., Prévot, M. S. & Yaghi, O. M. (2020). MOF water harvesters. Nature Nanotechnology 15: 348–355."
        url: null

further_reading:
  - citation: "Čejka, J., Corma, A. & Zones, S., eds. (2010). Zeolites and Catalysis. Wiley-VCH."
    url: null
    note: How zeolites are made, why the recipes work, and what the pores do to a reaction.
  - citation: "Yaghi, O. M., Kalmutzki, M. J. & Diercks, C. S. (2019). Introduction to Reticular Chemistry. Wiley-VCH."
    url: null
    note: The design argument set out by its author, with the nets and the building units enumerated.
  - citation: "Barrer, R. M. (1982). Hydrothermal Chemistry of Zeolites. Academic Press."
    url: null
    note: The synthesis chemistry by the person who established it; still the reference on what controls the product.
---

## A Stone That Boils

{{fig:cronstedt|Axel Fredrik Cronstedt}} put a mineral in a flame in 1756 and watched it froth. It gave off water, and on cooling it took the water back. He named the class **zeolites**, boiling stones, and the behaviour implies a structure that nothing then known would have suggested: a rigid solid with channels running through it, wide enough for water to enter and leave, narrow enough to be particular about what else can.

That the channels are particular took until 1932 to state properly, when {{fig:mcbain|James McBain}} showed that such solids separate gas mixtures by molecular size and called them **molecular sieves**. The name is the important part. Almost every separation in chemistry works on chemical affinity or on boiling point; a sieve works on dimension, which is a property no solvent and no distillation column can address. Zeolite A will admit a straight-chain hydrocarbon and exclude the branched isomer of the same formula, a discrimination of about one ångström.

The natural zeolites are aluminosilicates: a framework of silicon and aluminium, each at the centre of an oxygen tetrahedron, corner-linked into an open net. Replacing a silicon with an aluminium leaves the framework one charge short, so a cation must sit in the channel — and because that cation is exchangeable, the same framework can be loaded with sodium, calcium or a proton. The last of those is a very strong acid in a very confined space, which is what makes the material a catalyst.

## Making Frameworks That Are Not Minerals

{{fig:barrer|Richard Barrer}} established from 1948 that zeolites can be crystallised from hot alkaline gels, and converted one framework into another. {{fig:robert-milton|Robert Milton}} at Union Carbide then made zeolites A and X, which do not occur in nature at all, and had them on sale as drying agents within five years.

The mechanism of control is a mould. The framework crystallises around whatever is in the gel — a hydrated cation, or an organic amine — leaving a channel of roughly that shape and size. Change the **structure-directing agent** and a different topology appears. This is the nearest the field gets to design, and it is a good deal weaker than it sounds, as the open problems below record.

What the channels then bought was selectivity of a new kind. In 1962 zeolite Y replaced amorphous silica-alumina in petroleum cracking and raised the petrol yield per barrel substantially, which at the scale of global refining is one of the largest efficiency gains in the history of industrial chemistry. {{fig:weisz|Paul Weisz}} named the principle: **shape selectivity**, in which the pore decides. ZSM-5, patented in 1972, is the clean demonstration — its channels pass the para isomer of a disubstituted benzene and obstruct the ortho and meta, so a reaction whose intrinsic chemistry gives a mixture gives one product. The catalyst's selectivity is not in its chemistry but in its architecture.

Zeolite channels stop at about a nanometre, which rules out most molecules a pharmaceutical chemist cares about. The way past it, found by {{fig:yanagisawa|Tsuneo Yanagisawa}} and {{fig:kuroda|Kazuyuki Kuroda}} and developed by {{fig:kresge|Charles Kresge}} and {{fig:beck|Jeffrey Beck}} at Mobil in 1992, was to template with an assembly instead of a molecule. Surfactant molecules in water arrange themselves into rods, the rods pack into a hexagonal array, silica condenses in the spaces between, and burning out the organic leaves a honeycomb of parallel channels. Since micelle diameter depends on the surfactant's chain length, the pore diameter became a continuously adjustable quantity between roughly two and ten nanometres — the self-assembly of [soft matter](/physics/soft-matter/) used as a mould for a hard solid.

## Node and Strut

{{fig:hoskins|Bernard Hoskins}} and {{fig:robson|Richard Robson}} proposed a different construction in 1989. Rather than crystallising a framework from a gel and finding out what you got, take a metal ion whose coordination geometry is known from [coordination chemistry](/chemistry/coordination-chemistry/), join it with a rigid organic molecule carrying a binding group at each end, and the extended net should follow from the geometry of the two components. The strut sets the distance; the metal sets the angles. They demonstrated it with a copper framework of diamond topology containing large channels, and argued explicitly that a crystal structure could now be designed.

Making such frameworks turned out to be the easy half. Emptying them was the problem: the channels are full of solvent during synthesis, and when it is removed the capillary forces pull the structure down. A great many papers reported open frameworks that were, once dried, dense amorphous solids. The distinguishing test is not a crystal structure but a gas uptake measurement — does the empty volume actually admit a gas?

{{fig:yaghi|Omar Yaghi}}'s contribution was to make the nodes rigid. Instead of a single metal ion, use a small polyatomic cluster — four zinc atoms around a central oxygen, say — which behaves as one node with six fixed directions and far more resistance to twisting. Frameworks built this way survive activation, and their measured surface areas went past anything previously recorded within a few years. {{fig:kitagawa|Susumu Kitagawa}} established in parallel that flexibility need not be a defect: some frameworks breathe, opening and closing as gas enters, which gives adsorption isotherms with steps rather than curves and a release that can be triggered. Kitagawa, Robson and Yaghi shared the 2025 Nobel Prize in Chemistry.

## A Closer Look: How a Solid Gets More Surface Than Graphene

Two numbers make the case that these materials are a different kind of solid, and both can be got from a formula and a lattice constant.

**How light is it?** MOF-5 is Zn₄O(BDC)₃, where BDC is benzene-1,4-dicarboxylate, and it crystallises cubic with a cell edge of 25.9 Å containing eight formula units. The formula mass is

$$
4(65.38) + 16.00 + 3(164.1) = 261.5 + 16.0 + 492.4 = 769.9\ \text{g mol}^{-1}.
$$

The cell volume is $25.9^3 = 17{,}370$ Å³ $= 1.737 \times 10^{-20}$ cm³, and it holds $8 \times 769.9 / (6.022 \times 10^{23}) = 1.023 \times 10^{-20}$ g. So the crystal density is

$$
\rho = \frac{1.023 \times 10^{-20}}{1.737 \times 10^{-20}} = 0.59\ \text{g cm}^{-3}.
$$

A crystalline solid built of zinc and benzene rings, less dense than water, and about a quarter the density of quartz. Nothing has been foamed or powdered; this is the density of a single perfect crystal, which is to say the structure itself is mostly void.

**How much surface?** The internal areas of these frameworks are usually compared against a benchmark worth stating precisely. A single sheet of graphene, one atom thick, exposes both of its faces, and its area per unit mass is

$$
2{,}630\ \text{m}^2\text{g}^{-1},
$$

which is the most surface a two-dimensional material can offer. Yet measured framework areas exceed it:

| Material | Internal area (m² g⁻¹) |
| --- | --- |
| Zeolite Y | ~900 |
| MCM-41 silica | ~1,000 |
| Graphene, both faces | 2,630 |
| MOF-5 | ~3,800 |
| NU-110 | ~7,100 |

The explanation is dimensional. A sheet has two sides; a thin rod has a whole circumference, and a framework made of struts a single benzene ring wide presents nearly every atom to the void. Going from sheets to struts is worth a factor of two or three in area per gram, and the table is that factor.

Put the top entry in physical terms. One gram of NU-110 has an internal surface of about 7,100 square metres. A full-size football pitch, 105 by 68 metres, is 7,140 square metres. **A gram of powder, less than a teaspoon, with the surface area of a football pitch folded inside it.**

**What the surface buys.** Surface area alone is not useful; the pores must bind the right molecule at the right pressure. Water harvesting is the cleanest demonstration, because the thermodynamics is unforgiving. Air at 20% relative humidity holds about 3.5 grams of water per cubic metre at 25 °C, and its dew point is around 0 °C — so a condenser must cool the air below freezing, which costs more energy than the water is worth. An adsorbent does not have to: if its pores fill steeply at 20% humidity and empty on warming to 65 °C, the cycle runs on sunlight. Demonstrated devices collect on the order of 0.1 to 0.3 litres of water per kilogram of framework per day under those conditions.

Which puts the field's real difficulty in view. The framework that gives the largest area is built of the longest, thinnest struts and is therefore the most fragile, and the carboxylate–zinc bonds holding many of them are hydrolysed by the very water they are meant to collect. The materials that survive steam and acid are built on zirconium or aluminium at considerably lower area. Thirty years after the first permanently porous framework, that trade-off is why almost none of these solids is yet used at industrial scale, and it is recorded above as the field's first open problem.

## What the Space Is For

A pore does four distinguishable jobs, and the field's applications sort neatly by which one is being used.

It can **sieve**, admitting one molecule and excluding another by size — the oxygen concentrator that lets a patient on supplementary oxygen leave the house, and the separation of hydrocarbon isomers that no distillation can achieve. It can **store**, holding a gas at a far higher density than compression would give at the same pressure, because adsorbed molecules pack against a wall. It can **catalyse**, concentrating very strong acid sites in a confined space and permitting only the transition states that fit. And it can **cycle**, taking up a molecule under one condition and releasing it under another, which is what a water harvester and a carbon capture bed both do.

What is not yet available is the ability to choose the pore. The enumerated silicate frameworks within the energy range of known zeolites number in the millions; about 260 have ever been made; and which one a given gel and template will give cannot be predicted, because the selection happens kinetically in a nucleus a few nanometres across. Shape-selective catalysis therefore still works the wrong way round — a chemist surveys the pore geometries that happen to be obtainable and finds a reaction to suit one, rather than designing a cavity around a transition state. That is the counterpart, for an extended solid, of the synthesis problem set out in [solid-state chemistry](/chemistry/solid-state-chemistry/), and it is why the next field in this thread turns to solids whose properties are controlled by size alone.
