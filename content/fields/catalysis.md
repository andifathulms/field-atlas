---
id: catalysis
domain: chemistry
thread: reaction
name: Catalysis
parent_ids:
  - chemical-kinetics
era_emerged: 1835 – 2001
core_question: How can a substance accelerate a reaction enormously, by factors of millions, without being consumed and without shifting the equilibrium at all?

summary: |-
  A catalyst does not make an impossible reaction possible. Wilhelm Ostwald was explicit about this when he defined the term in 1894: a catalyst alters the rate and cannot alter the equilibrium, because if it could it would be a perpetual motion machine of the second kind. What it does is provide a different route — one with a lower barrier — and since the barrier sits in an exponential, a modest reduction buys an enormous factor in rate.

  The quantitative payoff is easiest to see in the reaction that matters most. Nitrogen in the air is held by the strongest bond in ordinary chemistry, 941 kJ/mol, and the uncatalysed dissociation of $\mathrm{N_2}$ at 700 K would occur about once in $10^{70}$ collisions. An iron surface does not lower that barrier; it replaces the step entirely, binding both nitrogen atoms to the metal so that the molecule comes apart with almost no barrier at all. Fritz Haber found conditions under which this works, Carl Bosch and Alwin Mittasch built a plant around it after testing some twenty thousand catalyst formulations, and the resulting fertiliser now supports roughly half the nitrogen in the human population — at the cost of about one per cent of the world's energy, and with the same chemistry having supplied explosives for two world wars.

key_ideas:
  - term: Catalysis
    definition: >-
      Acceleration of a reaction by a substance that is regenerated, so that a small amount processes an
      unlimited quantity. The catalyst appears in the rate law and not in the balanced equation.
    turning_point_id: berzelius-names-catalysis
  - term: Equilibrium is untouched
    definition: >-
      A catalyst speeds the forward and reverse reactions by exactly the same factor, so the position of
      equilibrium is unchanged. Anything that moved it could be used to build a perpetual motion machine.
    turning_point_id: ostwald-catalysis
  - term: An alternative path
    definition: >-
      The catalyst does not lower the barrier of the original route; it supplies a different route with
      its own, lower barrier — usually by binding fragments so that bonds can be broken one at a time
      instead of all at once.
    turning_point_id: haber-bosch-ammonia
  - term: Sabatier principle
    definition: >-
      The best catalyst binds the reacting species neither too weakly, in which case nothing sticks, nor
      too strongly, in which case the surface is poisoned by its own products. Plotting activity against
      binding strength gives a volcano, and the summit is the design target.
    turning_point_id: sabatier-principle
  - term: Turnover number and frequency
    definition: >-
      How many molecules one catalytic site converts, and how fast. These, rather than yield, are what
      make catalysts comparable: an enzyme may turn over a thousand times a second, an industrial
      heterogeneous site a few times.
    turning_point_id: ostwald-catalysis
  - term: Stereospecific catalysis
    definition: >-
      A catalyst that controls not only whether a bond forms but the three-dimensional arrangement
      produced, so that one of two mirror-image products is made almost exclusively.
    turning_point_id: asymmetric-catalysis

turning_points:
  - id: berzelius-names-catalysis
    date: 1812 – 1835
    type: MECHANISM-ESTABLISHED
    title: Berzelius names a force he cannot explain
    description: >-
      Gottlieb Kirchhoff finds in 1812 that dilute acid converts starch to sugar and is not consumed;
      Humphry Davy that platinum makes gases combine without itself changing; Johann Döbereiner builds a
      lighter from the effect. Jöns Jacob Berzelius collects these in 1835 and names the common factor
      catalysis, attributing it to a catalytic force residing in the substance. The name outlived the
      explanation by sixty years, and the phenomenon was suspected of being disreputable throughout.
    contested: false
    sources:
      - citation: "Berzelius, J. J. (1836). Einige Ideen über eine bei der Bildung organischer Verbindungen in der lebenden Naturwirksame. Jahresbericht über die Fortschritte der physischen Wissenschaften 15: 237–245."
        url: null
      - citation: "Lindström, B. & Pettersson, L. J. (2003). A brief history of catalysis. CATTECH 7: 130–138."
        url: null

  - id: ostwald-catalysis
    date: 1894 – 1901
    type: MECHANISM-ESTABLISHED
    title: Ostwald's definition, and what it forbids
    description: >-
      Wilhelm Ostwald defines a catalyst as a substance that changes the rate of a reaction without
      appearing in its final products, and draws the consequence that it cannot shift the equilibrium:
      a catalyst that favoured one direction could be used to drive a cycle without work. Catalysis is
      therefore a kinetic phenomenon entirely, which is what made it respectable. He then demonstrated
      the industrial case by oxidising ammonia to nitric acid over platinum gauze, a process still in use.
    contested: false
    sources:
      - citation: "Ostwald, W. (1894). Über Katalyse. Zeitschrift für Physikalische Chemie 15: 705–706."
        url: null
      - citation: "Ostwald, W. (1902). Verfahren zur Darstellung von Salpetersäure. German patent DE 698 and British patent GB 190200698."
        url: null

  - id: haber-bosch-ammonia
    date: 1909 – 1913
    type: SYNTHESIS-ACHIEVED
    title: Nitrogen from the air
    description: >-
      Fritz Haber demonstrates in a bench apparatus that nitrogen and hydrogen combine over an osmium
      catalyst at 200 atmospheres and around 550 °C, giving a few per cent conversion per pass. Carl
      Bosch at BASF turns it into a plant — high-pressure steel vessels, hydrogen from coal, recycle of
      unreacted gas — and Alwin Mittasch tests some twenty thousand formulations to replace the
      unobtainable osmium, arriving at iron promoted with alumina and potassium, which is essentially
      the catalyst still used. Production began at Oppau in 1913.
    contested: true
    contested_note: >-
      Credit and judgement are both disputed. The science was Haber's and the process was Bosch's and
      Mittasch's; naming it after Haber alone understates an engineering achievement — sustained high
      pressure at industrial scale — that was at least as difficult. The moral assessment is harder:
      the same plant supplied nitrates for German munitions through the First World War, and Haber
      directed the chlorine attacks at Ypres in 1915. His 1918 Nobel Prize was protested at the time and
      is still argued about.
    sources:
      - citation: "Haber, F. (1913). Über die Darstellung des Ammoniaks aus Stickstoff und Wasserstoff. Zeitschrift für Elektrochemie 19: 53–72."
        url: null
      - citation: "Smil, V. (2001). Enriching the Earth: Fritz Haber, Carl Bosch, and the Transformation of World Food Production. MIT Press."
        url: null
      - citation: "Mittasch, A. (1950). Geschichte der Ammoniaksynthese. Verlag Chemie."
        url: null

  - id: sabatier-principle
    date: 1913 – 1960
    type: MECHANISM-ESTABLISHED
    title: Not too weakly, not too strongly
    description: >-
      Paul Sabatier, working on hydrogenation over nickel, observes that the best metals are those that
      form intermediate compounds of middling stability: too unstable and the intermediate never forms,
      too stable and it will not come apart again. Balandin and later Russian and Danish schools made it
      quantitative by plotting catalytic activity against the strength with which the surface binds the
      key intermediate, which produces a volcano curve with the best catalysts at the summit. It remains
      the organising principle of catalyst design.
    contested: false
    sources:
      - citation: "Sabatier, P. (1920). La Catalyse en Chimie Organique. Béranger, Paris."
        url: null
      - citation: "Nørskov, J. K., Bligaard, T., Rossmeisl, J. & Christensen, C. H. (2009). Towards the computational design of solid catalysts. Nature Chemistry 1: 37–46."
        url: null

  - id: ziegler-natta
    date: 1953 – 1955
    type: SYNTHESIS-ACHIEVED
    title: Catalysts that control a chain's shape
    description: >-
      Karl Ziegler finds that titanium chloride with an aluminium alkyl polymerises ethylene at ordinary
      pressure, where the existing process needed a thousand atmospheres, and gives a linear rather than
      branched chain. Giulio Natta shows that the same class of catalyst polymerises propylene with the
      methyl groups all on the same side — isotactic polypropylene, which crystallises and is therefore
      strong, where the random arrangement is a grease. A catalyst was controlling stereochemistry at
      every step of a chain thousands of units long.
    contested: false
    sources:
      - citation: "Ziegler, K., Holzkamp, E., Breil, H. & Martin, H. (1955). Das Mülheimer Normaldruck-Polyäthylen-Verfahren. Angewandte Chemie 67: 541–547."
        url: null
      - citation: "Natta, G. (1955). Stereospezifische Katalysen und isotaktische Polymere. Angewandte Chemie 67: 430–456."
        url: null

  - id: asymmetric-catalysis
    date: 1968 – 2001
    type: SYNTHESIS-ACHIEVED
    title: Making one hand and not the other
    description: >-
      William Knowles at Monsanto hydrogenates a prochiral alkene using a rhodium complex with a chiral
      phosphine and obtains an excess of one mirror image — then develops it into the industrial synthesis
      of L-DOPA for Parkinson's disease. Ryōji Noyori's BINAP catalysts and Barry Sharpless's oxidations
      extend the approach, reaching enantiomeric excesses above 99% with a catalyst present at a fraction
      of a per cent. One chiral molecule, used over and over, imposes its handedness on tonnes of product.
    contested: false
    sources:
      - citation: "Knowles, W. S. (1986). Asymmetric hydrogenation. Accounts of Chemical Research 16: 106–112."
        url: null
      - citation: "Noyori, R. (2002). Asymmetric catalysis: science and opportunities. Angewandte Chemie International Edition 41: 2008–2022."
        url: null
      - citation: "Katsuki, T. & Sharpless, K. B. (1980). The first practical method for asymmetric epoxidation. Journal of the American Chemical Society 102: 5974–5976."
        url: null

open_problems:
  - id: ambient-nitrogen-fixation
    name: Fixing nitrogen the way a bacterium does
    status: open
    status_note: Open as of 2026; no synthetic system approaches nitrogenase's conditions at useful rate.
    description: >-
      Haber–Bosch runs at 400 to 500 °C and 150 to 300 atmospheres and consumes something like one to
      two per cent of the world's primary energy, most of it to make hydrogen from methane. The enzyme
      nitrogenase performs the same conversion in soil bacteria at 20 °C and one atmosphere. Dozens of
      molecular catalysts and electrochemical routes reproduce the reaction at ambient conditions, and
      none does so at a rate, selectivity and durability that would replace a plant — the competing
      reduction of water to hydrogen usually wins.
    why_hard: >-
      The nitrogen triple bond must be broken while six electrons and six protons are delivered in
      sequence, and every intermediate is more reactive than the starting material. Nitrogenase does it
      with an iron–molybdenum cluster whose mechanism, after fifty years and a crystal structure, is
      still not agreed — including what the central carbon atom found in 2011 is for.
    unlocks: >-
      Ammonia is the second most produced industrial chemical and the basis of the fertiliser that
      roughly half the world's food depends on. An ambient-condition route would decouple it from natural
      gas, and the same chemistry is wanted for ammonia as a carbon-free fuel.
    sources:
      - citation: "Smil, V. (2001). Enriching the Earth. MIT Press."
        url: null
      - citation: "Hoffman, B. M., Lukoyanov, D., Yang, Z.-Y., Dean, D. R. & Seefeldt, L. C. (2014). Mechanism of nitrogen fixation by nitrogenase. Chemical Reviews 114: 4041–4062."
        url: null

applications:
  - area: Agriculture
    title: Half the nitrogen in a human body
    description: >-
      Synthetic fertiliser supplies the nitrogen for a large share of world food production, and isotopic
      analysis indicates that roughly half the nitrogen atoms in an average person today passed through a
      Haber–Bosch plant. The same flux is the dominant human perturbation of the nitrogen cycle, driving
      the nutrient loading that produces algal blooms and oxygen-depleted coastal water.
    domain: biology
    field_id: ecosystem-ecology
    sources:
      - citation: "Erisman, J. W., Sutton, M. A., Galloway, J., Klimont, Z. & Winiwarter, W. (2008). How a century of ammonia synthesis changed the world. Nature Geoscience 1: 636–639."
        url: null
  - area: Energy and transport
    title: Converting most of the world's oil
    description: >-
      Catalytic cracking over zeolites breaks heavy petroleum fractions into the molecules that make
      petrol, and reforming, hydrotreating and the three-way catalytic converter handle the rest of the
      chain to the exhaust pipe. Something like nine tenths of industrial chemical production passes over
      a catalyst at some stage, and the converter alone — platinum, palladium and rhodium on a ceramic
      honeycomb — removes most of the carbon monoxide and nitrogen oxides from a car's exhaust.
    sources:
      - citation: "Vogt, E. T. C. & Weckhuysen, B. M. (2015). Fluid catalytic cracking: recent developments. Chemical Society Reviews 44: 7342–7370."
        url: null
  - area: Pharmaceuticals
    title: Why handedness is regulated
    description: >-
      Two mirror-image forms of a drug can differ completely in effect, and regulators therefore require
      single enantiomers for most new molecules. Asymmetric catalysis is how that is achieved at scale:
      a chiral catalyst at a fraction of a mole per cent converts an achiral starting material into one
      hand of the product, which is cheaper and cleaner than making both and throwing half away.
    domain: biology
    field_id: pharmacology
    sources:
      - citation: "Blaser, H.-U. & Schmidt, E. (eds) (2004). Asymmetric Catalysis on Industrial Scale. Wiley-VCH."
        url: null

further_reading:
  - citation: "Smil, V. (2001). Enriching the Earth. MIT Press."
    url: null
    note: What ammonia synthesis did to the world, counted carefully, including the parts that are not good.
  - citation: "Chorkendorff, I. & Niemantsverdriet, J. W. (2017). Concepts of Modern Catalysis and Kinetics, 3rd edition. Wiley-VCH."
    url: null
    note: The standard modern text; works through the Sabatier analysis and surface kinetics quantitatively.
  - citation: "Nørskov, J. K. et al. (2009). Towards the computational design of solid catalysts. Nature Chemistry 1: 37–46."
    url: null
    note: How volcano plots are now computed rather than measured, and what that has and has not achieved.
---

## A Name Before an Explanation

Three unrelated observations in the 1810s and 1820s had the same shape. Dilute acid turns starch into sugar and is still there afterwards. A platinum wire makes hydrogen and oxygen combine, glowing, while remaining platinum. {{fig:berzelius|Berzelius}} gathered them in 1835, called the phenomenon catalysis, and ascribed it to a catalytic force — which is a name for the puzzle rather than a solution.

For sixty years the subject was faintly disreputable, because it looked like getting something for nothing. {{fig:ostwald|Wilhelm Ostwald}} made it respectable in 1894 with a definition and a prohibition. A catalyst changes the rate and does not appear in the products; and it *cannot* change the position of equilibrium, because a substance that favoured one direction over the other could be used to run a cycle indefinitely without work, which the second law forbids. Catalysis is therefore entirely kinetic. It cannot make an unfavourable reaction go; it can only make a favourable one go sooner.

That constraint is worth keeping in view, because it is routinely forgotten. A catalyst in an ammonia plant does not improve the yield that thermodynamics allows at a given temperature — it allows a lower temperature, where the allowed yield is better.

## Three Kinds of Catalyst

Catalysts divide into three classes that share a principle and little else, and the differences decide what each is used for.

A **homogeneous** catalyst is dissolved in the reaction mixture, usually a metal complex with organic ligands. Every molecule of it is accessible, so activity per atom is high; the ligands can be modified one at a time, which makes the structure-activity relationship legible and is why asymmetric catalysis is almost entirely homogeneous; and the catalyst must be separated from the product afterwards, which for a pharmaceutical means removing a toxic metal to parts per million. Turnover frequencies are typically one to a thousand per second.

A **heterogeneous** catalyst is a solid that the reactants flow over. Separation is free — the catalyst stays in the reactor — which is why essentially all bulk chemistry is heterogeneous, and the price is that only the surface atoms work. For a 15-nanometre particle that is about a tenth of them; dispersed as 2-nanometre particles, three quarters. The sites are also not identical: a surface has terraces, steps and corners that bind differently, so measured activity is an average over a population, and the most active sites may be a per cent of the total.

An **enzyme** is a protein with a pocket built around one reaction. Rate enhancements reach $10^{17}$ over the uncatalysed reaction, selectivity is essentially complete, and the conditions are water at ambient temperature — against which both other classes compare badly. The costs are fragility, a narrow range of tolerable conditions, and that each enzyme does one thing.

The numbers worth holding together are these. An industrial iron ammonia catalyst turns over a few times per second per site and lasts years. A homogeneous hydrogenation catalyst turns over hundreds of times per second and is discarded after one batch. Carbonic anhydrase turns over a million times per second. The spread is nine orders of magnitude, and the design trade-off running through it is between activity, selectivity and the ease of getting the catalyst back.

## A Closer Look: The Strongest Bond in the Air

Four fifths of the atmosphere is nitrogen, and almost nothing can use it. The reason is one number: the $\mathrm{N{\equiv}N}$ bond energy is **941 kJ/mol**, the strongest bond in common chemistry.

Ask what that implies for an uncatalysed reaction. At 700 K the fraction of collisions carrying enough energy to break the bond is

$$
e^{-941000/(8.314 \times 700)} = e^{-161.7} = 10^{-70.2}.
$$

With collision frequencies of order $10^{10}$ per second, a given molecule reacts about once every $10^{60}$ seconds. The age of the universe is $4\times10^{17}$ seconds. Heating is not a solution: to get the exponent down to something workable the temperature would have to be thousands of degrees, at which ammonia is unstable anyway.

The catalyst does not help with this barrier. It removes the step. On an iron surface, a nitrogen molecule adsorbs, and each nitrogen atom forms bonds to several iron atoms; the energy released on forming those metal–nitrogen bonds pays for most of the cost of pulling the molecule apart, so the dissociation barrier on the surface is of the order of tens of kJ/mol rather than 941. The atoms are then hydrogenated one step at a time, each step with a modest barrier of its own, and ammonia leaves. Six small barriers in place of one impossible one.

{{fig:sabatier|Paul Sabatier}}'s principle says why only a few metals do this. The surface must bind nitrogen strongly enough to dissociate it and weakly enough to let the product go. Bind too weakly — silver, gold — and nothing adsorbs. Bind too strongly — tungsten, molybdenum — and the surface fills with nitrogen atoms that will not react on. Plot activity against binding energy and the result is a volcano, with iron and ruthenium near the summit. That curve, now computed from first principles rather than measured, is the modern form of catalyst design.

**What it cost and what it bought.** {{fig:haber|Haber}}'s bench demonstration gave a few per cent conversion per pass. {{fig:bosch|Carl Bosch}} had to build vessels that would hold 200 atmospheres of hydrogen at 500 °C without embrittling, and {{fig:mittasch|Alwin Mittasch}} ran some twenty thousand catalyst tests to replace osmium, which was unobtainable in quantity, finally arriving at iron promoted with alumina and potassium. The modern plant still uses that catalyst, at 400–500 °C and 150–300 bar, and the process consumes on the order of one to two per cent of the world's primary energy — most of it not for the ammonia reaction itself but for making hydrogen from methane.

The return is the largest single intervention of chemistry in human life. Isotopic evidence indicates that about half the nitrogen atoms in a person alive today were fixed in such a plant. The same nitrates, in the same years, made the munitions of two world wars, and Haber personally directed the first chlorine gas attack at Ypres in 1915. The Nobel committee honoured him in 1918 and was protested for it.

Meanwhile a soil bacterium does the identical conversion at 20 °C and one atmosphere, using an iron–molybdenum cluster, and nobody can reproduce that. The gap between 500 °C and room temperature is the field's standing reproach to itself, recorded above as its open problem.

## Controlling More Than the Rate

The second half of the subject's history is catalysts that control *which* product forms, not just how fast.

{{fig:ziegler|Karl Ziegler}} found in 1953 that titanium chloride with an aluminium alkyl polymerises ethylene at ordinary pressure — the existing process needed a thousand atmospheres — and produces unbranched chains that pack and crystallise. {{fig:natta|Giulio Natta}} then showed that the same catalyst class polymerises propylene with every methyl group on the same side of the chain. The regularity matters enormously: isotactic polypropylene crystallises and is a structural plastic, while the randomly arranged polymer is a soft grease. The catalyst is imposing a stereochemical choice at every one of thousands of successive additions, which is the behaviour described under [soft matter](/physics/soft-matter/) as the reason polymer properties depend on architecture rather than composition.

The logical end point is asymmetric catalysis. Many molecules exist as two non-superimposable mirror images, and in a biological setting the two can differ entirely in effect. {{fig:knowles|William Knowles}} hydrogenated a prochiral alkene in 1968 using rhodium with a chiral phosphine ligand, got an excess of one hand, and developed it into the industrial route to L-DOPA. {{fig:noyori|Ryōji Noyori}}'s BINAP catalysts and {{fig:sharpless|Barry Sharpless}}'s oxidations pushed the selectivity above 99%, with the catalyst present at a fraction of a mole per cent. One chiral molecule, recycled, transmits its handedness to tonnes of product — and why handedness is worth that trouble is a question about [stereochemistry](/chemistry/stereochemistry/) and about what a receptor can tell apart.
