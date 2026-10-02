---
id: cross-coupling
domain: chemistry
thread: synthesis
name: Cross-Coupling and Bond Construction
parent_ids:
  - total-synthesis
  - catalysis
era_emerged: 1900 – 2022
core_question: How can two specified carbon atoms be joined, reliably and in the presence of everything else a complicated molecule contains?

summary: |-
  Carbon–carbon bonds are what organic molecules are made of, and for most of chemistry's history they were the hardest thing to make on purpose. Victor Grignard's organomagnesium reagents of 1900 gave the first general method, and they are so reactive that they attack almost anything — which is a reason a long synthesis spends a third of its steps protecting sites that must be left alone.

  The modern answer is catalysis. A palladium atom will take two different partners, each stable and unreactive on its own, bring them together in its coordination sphere, join them, and release the product unchanged — millions of times over. The reactions named after Heck, Suzuki and Negishi are now among the most used in the pharmaceutical industry, because they tolerate the esters, amines, alcohols and heterocycles that a drug molecule carries and the Grignard reagent would destroy. Olefin metathesis does the same for carbon–carbon double bonds, exchanging the ends of two alkenes as though swapping dance partners. The remaining frontier is the bond that is not reactive at all: a molecule with forty carbon–hydrogen bonds, and the problem of functionalising one chosen one.

key_ideas:
  - term: Organometallic reagent
    definition: >-
      A compound with a carbon–metal bond, in which the carbon is electron-rich and attacks
      electron-poor centres. Grignard reagents made carbon–carbon bond formation general and are
      indiscriminate, which is both their utility and their cost.
    turning_point_id: grignard-reagents
  - term: Cycloaddition
    definition: >-
      Two molecules joining to form a ring in one step, with all the bonds made simultaneously. The
      Diels–Alder reaction builds a six-membered ring and controls up to four stereocentres at once,
      with no reagent and no catalyst.
    turning_point_id: diels-alder
  - term: Catalytic cycle
    definition: >-
      The sequence a catalyst passes through and returns from: take up one partner, take up the other,
      join them, release the product. The metal's oxidation state changes and comes back, so a few
      hundredths of a mole per cent can convert a tonne.
    turning_point_id: palladium-cross-coupling
  - term: Functional group tolerance
    definition: >-
      Whether a reaction leaves alone the other groups a complicated molecule carries. It is the
      property that decides whether a method is usable late in a synthesis, and it is what distinguishes
      catalytic coupling from classical organometallic chemistry.
    turning_point_id: palladium-cross-coupling
  - term: Bioorthogonality
    definition: >-
      A reaction that proceeds in water, at body temperature, between two partners that ignore every
      functional group biology contains. It allows a molecule to be joined to another inside a living
      cell without disturbing the cell.
    turning_point_id: click-chemistry
  - term: C–H activation
    definition: >-
      Making a carbon–hydrogen bond react deliberately. Since such bonds are everywhere in an organic
      molecule and nearly identical in strength, the problem is almost entirely one of choosing between
      them.
    turning_point_id: ch-activation

turning_points:
  - id: grignard-reagents
    date: 1900 – 1912
    type: TECHNIQUE-INVENTED
    title: Grignard's reagents
    description: >-
      Victor Grignard finds that magnesium metal reacts with an organic halide in dry ether to give a
      solution that attacks aldehydes, ketones, esters and nitriles, forming a new carbon–carbon bond in
      each case. It is the first general method for joining carbon to carbon, it works on a bench with
      ordinary glassware, and it earned the 1912 Nobel Prize. Its weakness is the same as its strength:
      the reagent is so reactive that any other sensitive group in the molecule must be protected first.
    contested: false
    sources:
      - citation: "Grignard, V. (1900). Sur quelques nouvelles combinaisons organométalliques du magnésium. Comptes Rendus 130: 1322–1324."
        url: null
      - citation: "Seyferth, D. (2009). The Grignard reagents. Organometallics 28: 1598–1605."
        url: null

  - id: diels-alder
    date: 1928 – 1950
    type: MECHANISM-ESTABLISHED
    title: The Diels–Alder reaction
    description: >-
      Otto Diels and Kurt Alder find that a diene and an alkene combine to form a six-membered ring in a
      single step, with no catalyst, no reagent and nothing discarded. All four new stereocentres are set
      at once and their relative arrangement is determined by how the two partners approach, so the
      reaction creates rings and stereochemistry together. It is probably the single most used
      ring-forming reaction in synthesis, and the rules governing when it proceeds are the orbital
      symmetry rules of [quantum chemistry](/chemistry/quantum-chemistry/).
    contested: false
    sources:
      - citation: "Diels, O. & Alder, K. (1928). Synthesen in der hydroaromatischen Reihe. Annalen der Chemie 460: 98–122."
        url: null
      - citation: "Nicolaou, K. C., Snyder, S. A., Montagnon, T. & Vassilikogiannakis, G. (2002). The Diels–Alder reaction in total synthesis. Angewandte Chemie International Edition 41: 1668–1698."
        url: null

  - id: palladium-cross-coupling
    date: 1968 – 1979
    type: SYNTHESIS-ACHIEVED
    title: Palladium joins two partners
    description: >-
      Richard Heck finds that palladium couples an organohalide to an alkene; Ei-ichi Negishi that
      organozinc and organozirconium compounds couple to halides under palladium catalysis; Akira Suzuki
      and Norio Miyaura that organoboron compounds do the same, and tolerate water and air. The boron
      variant is the one that spread furthest, because boronic acids are stable, commercially available
      by the thousand and non-toxic. Between them these reactions let two complicated fragments be joined
      late in a synthesis without disturbing anything else, and they shared the 2010 Nobel Prize.
    contested: false
    sources:
      - citation: "Heck, R. F. & Nolley, J. P. (1972). Palladium-catalyzed vinylic hydrogen substitution reactions. Journal of Organic Chemistry 37: 2320–2322."
        url: null
      - citation: "Miyaura, N. & Suzuki, A. (1979). Stereoselective synthesis of arylated (E)-alkenes by the reaction of alk-1-enylboranes with aryl halides. Journal of the Chemical Society, Chemical Communications: 866–867."
        url: null
      - citation: "Negishi, E. (2011). Magical power of transition metals. Angewandte Chemie International Edition 50: 6738–6764."
        url: null

  - id: olefin-metathesis
    date: 1964 – 2005
    type: SYNTHESIS-ACHIEVED
    title: Swapping the ends of two double bonds
    description: >-
      Industrial chemists observe in the 1960s that certain metal compounds make alkenes exchange their
      ends, and Yves Chauvin proposes in 1971 the mechanism — a metal–carbon double bond that adds across
      the alkene and comes apart the other way. Richard Schrock makes such complexes deliberately and
      Robert Grubbs develops ruthenium catalysts that are stable to air, water and most functional
      groups. Closing a large ring by metathesis became a standard move, and the reaction is used from
      pharmaceuticals to the polymers in a dental filling.
    contested: false
    sources:
      - citation: "Hérisson, J.-L. & Chauvin, Y. (1971). Catalyse de transformation des oléfines par les complexes du tungstène. Makromolekulare Chemie 141: 161–176."
        url: null
      - citation: "Grubbs, R. H. (2006). Olefin-metathesis catalysts for the preparation of molecules and materials. Angewandte Chemie International Edition 45: 3760–3765."
        url: null

  - id: click-chemistry
    date: 2001 – 2022
    type: SYNTHESIS-ACHIEVED
    title: Reactions that work in a cell
    description: >-
      Barry Sharpless and Morten Meldal independently find that copper makes an azide and an alkyne
      combine, fast and almost quantitatively, in water, at room temperature, ignoring every other
      functional group present. Carolyn Bertozzi then develops variants that need no copper and so work
      inside living organisms, letting a sugar or a protein be tagged in a cell without disturbing it.
      The three shared the 2022 Nobel Prize; the underlying reaction had been reported by Huisgen in the
      1960s and was unusable until the catalyst was found.
    contested: false
    sources:
      - citation: "Rostovtsev, V. V., Green, L. G., Fokin, V. V. & Sharpless, K. B. (2002). A stepwise Huisgen cycloaddition process. Angewandte Chemie International Edition 41: 2596–2599."
        url: null
      - citation: "Tornøe, C. W., Christensen, C. & Meldal, M. (2002). Peptidotriazoles on solid phase. Journal of Organic Chemistry 67: 3057–3064."
        url: null
      - citation: "Sletten, E. M. & Bertozzi, C. R. (2009). Bioorthogonal chemistry: fishing for selectivity in a sea of functionality. Angewandte Chemie International Edition 48: 6974–6998."
        url: null

  - id: ch-activation
    date: 1982 – 2018
    type: SYNTHESIS-ACHIEVED
    title: Making an unreactive bond react
    description: >-
      Alexander Shilov had shown in the 1960s that platinum salts attack methane; Robert Bergman and
      William Graham Jones demonstrate in 1982 that a metal complex can insert into the carbon–hydrogen
      bond of an unactivated hydrocarbon cleanly. Directing groups, designed ligands and photoredox
      methods have since made the transformation practical for a growing list of substrates, and it
      shortens routes by removing the need to install a reactive handle first. Selectivity between the
      many similar bonds in a real molecule remains the limiting problem.
    contested: false
    sources:
      - citation: "Janowicz, A. H. & Bergman, R. G. (1982). Carbon–hydrogen activation in saturated hydrocarbons. Journal of the American Chemical Society 104: 352–354."
        url: null
      - citation: "Hartwig, J. F. (2016). Evolution of C–H bond functionalization from methane to methodology. Journal of the American Chemical Society 138: 2–24."
        url: null

open_problems:
  - id: selective-ch-functionalisation
    name: Choosing one C–H bond out of forty
    status: open
    status_note: Open as of 2026; general site-selective functionalisation of a complex molecule has not been achieved.
    description: >-
      A typical drug-sized molecule contains thirty to fifty carbon–hydrogen bonds whose strengths lie
      within about 20 kJ/mol of one another. Functionalising a chosen one, without a directing group
      attached nearby for the purpose, requires discriminating between sites on the basis of differences
      smaller than a hydrogen bond. Enzymes do it routinely, by holding the substrate in a fixed
      orientation; synthetic catalysts mostly cannot.
    why_hard: >-
      Rate ratios depend exponentially on free energy differences, so a 95:5 preference between two sites
      needs only 7.3 kJ/mol of differentiation at room temperature — which sounds achievable and means
      the selectivity is decided by effects of a size that no current catalyst controls reliably across
      different substrates. Approaches that work by holding the substrate, as enzymes do, must be
      redesigned for every new molecule.
    unlocks: >-
      Late-stage functionalisation: taking a finished drug molecule and installing a fluorine, a
      hydroxyl or a label at a chosen position, instead of rebuilding the molecule from the start. It
      would shorten medicinal chemistry's iteration cycle from weeks to days.
    sources:
      - citation: "Hartwig, J. F. & Larsen, M. A. (2016). Undirected, homogeneous C–H bond functionalization: challenges and opportunities. ACS Central Science 2: 281–292."
        url: null
      - citation: "Cernak, T., Dykstra, K. D., Tyagarajan, S., Vachal, P. & Krska, S. W. (2016). The medicinal chemist's toolbox for late stage functionalization. Chemical Society Reviews 45: 546–576."
        url: null

applications:
  - area: Pharmaceutical manufacture
    title: The reactions a drug is actually made with
    description: >-
      Surveys of process routes to marketed drugs find palladium-catalysed couplings among the most used
      carbon–carbon bond-forming steps, with the boron variant dominant because the reagents are stable
      and the by-products are innocuous. The reason is tolerance rather than elegance: these reactions
      survive the amines, amides, alcohols and heterocycles that a drug molecule is largely made of, and
      can therefore be used on the complicated fragment rather than on a simplified stand-in.
    sources:
      - citation: "Magano, J. & Dunetz, J. R. (2011). Large-scale applications of transition metal-catalyzed couplings for the synthesis of pharmaceuticals. Chemical Reviews 111: 2177–2250."
        url: null
  - area: Cell biology
    title: Labelling a molecule inside a living cell
    description: >-
      A bioorthogonal pair — an azide and a strained alkyne, say — reacts with each other and with
      nothing a cell contains, so a sugar fed to an organism can be tagged with a fluorophore afterwards
      and watched. The technique made it possible to image where particular glycans are made and
      trafficked in a living animal, and it is now the standard way to attach a label, a drug or a probe
      to a biomolecule in place.
    domain: biology
    field_id: cell-biology
    sources:
      - citation: "Prescher, J. A. & Bertozzi, C. R. (2005). Chemistry in living systems. Nature Chemical Biology 1: 13–21."
        url: null
      - citation: "Agard, N. J., Prescher, J. A. & Bertozzi, C. R. (2004). A strain-promoted [3+2] azide–alkyne cycloaddition for covalent modification of biomolecules in living systems. Journal of the American Chemical Society 126: 15046–15047."
        url: null
  - area: Materials
    title: Conjugated polymers and the screens made from them
    description: >-
      Light-emitting and semiconducting polymers are made by repeating a cross-coupling along a chain, so
      the same palladium chemistry that joins two fragments of a drug assembles a conducting backbone
      hundreds of units long. Control of the coupling's regiochemistry determines whether the resulting
      polymer conducts, which is why the display and organic photovoltaic industries depend on these
      reactions.
    domain: physics
    field_id: soft-matter
    sources:
      - citation: "Yokozawa, T. & Ohta, Y. (2016). Transformation of step-growth polymerization into chain-growth polymerization. Chemical Reviews 116: 1950–1988."
        url: null

further_reading:
  - citation: "Hartwig, J. F. (2010). Organotransition Metal Chemistry: From Bonding to Catalysis. University Science Books."
    url: null
    note: The standard treatment of how these catalytic cycles work, mechanism by mechanism.
  - citation: "Magano, J. & Dunetz, J. R. (2011). Large-scale applications of transition metal-catalyzed couplings. Chemical Reviews 111: 2177–2250."
    url: null
    note: What is used industrially rather than what is published, with the reasons.
  - citation: "Sletten, E. M. & Bertozzi, C. R. (2009). Bioorthogonal chemistry. Angewandte Chemie International Edition 48: 6974–6998."
    url: null
    note: How a reaction is designed to ignore an entire cell's worth of chemistry.
---

## Reactive Enough to Be a Nuisance

{{fig:grignard|Victor Grignard}} found in 1900 that magnesium turnings and an organic halide in dry ether give a solution that will attack almost any carbon bearing an oxygen: aldehydes, ketones, esters, nitriles. A new carbon–carbon bond forms in each case. It was the first general method for the operation organic synthesis most needs, it requires no special equipment, and it won a Nobel Prize twelve years later.

Its defect is the same sentence read differently: *almost any* carbon bearing an oxygen. A Grignard reagent cannot be used on a molecule that already contains an ester you wish to keep, or an alcohol, or an amine with a free hydrogen. So the other sites are blocked first and unblocked afterwards, which is where a long synthesis spends a third of its steps and most of its material.

{{fig:diels|Otto Diels}} and {{fig:alder|Kurt Alder}} found in 1928 a reaction of the opposite character. A diene and an alkene simply combine, with no reagent and no catalyst, to give a six-membered ring — and because all the bonds form at once in a single ordered encounter, up to four stereocentres are set simultaneously with their relative arrangement fixed by the geometry of the approach. Nothing is discarded; the atom economy is 100%. It is probably the most used ring-forming reaction in synthesis, and why it works when it works is exactly what the orbital symmetry rules explain.

## A Metal That Holds Both Partners

The modern solution to selectivity is to let a metal do the joining. The cycle, in outline, is the same for all the named reactions: palladium takes up the first partner, usually by inserting into a carbon–halogen bond; the second partner, carried on boron, zinc or tin, transfers its organic group to the metal; the two groups, now adjacent on the same atom, join and leave; and the metal returns to its starting state ready to do it again.

Two consequences follow, and they are what made the chemistry so widely used. First, turnover: the metal is regenerated, so catalyst loadings of a few hundredths of a mole per cent suffice, and a few grams of palladium can convert a tonne of material. Second, and more important, *tolerance*. Neither partner is reactive on its own — an aryl boronic acid is a stable solid you can weigh out in air — so the reagents ignore the esters, amides, alcohols and heterocycles that a drug molecule carries. A Grignard reagent cannot be let near those; a Suzuki coupling can.

{{fig:heck|Richard Heck}}, {{fig:negishi|Ei-ichi Negishi}} and {{fig:suzuki|Akira Suzuki}} developed the variants that bear their names between 1968 and 1979 and shared the 2010 Nobel Prize. The boron version spread furthest, for unglamorous reasons: boronic acids are stable, cheap, available by the thousand, and their by-products are harmless. Surveys of how marketed drugs are actually manufactured find these couplings among the most used carbon–carbon bond-forming steps in the industry.

{{fig:chauvin|Yves Chauvin}}, {{fig:schrock|Richard Schrock}} and {{fig:grubbs|Robert Grubbs}} did the equivalent for double bonds. In olefin metathesis two alkenes exchange their ends — the mechanism is a metal–carbon double bond that adds across the alkene and comes apart the other way — so a chain with alkenes at both ends can be closed into a large ring, an operation that is otherwise extremely difficult. Grubbs's ruthenium catalysts tolerate air, water and most functional groups, which took the reaction from a curiosity of industrial polymer chemistry to a standard step in total synthesis.

## A Closer Look: Choosing One Bond Out of Forty

The frontier is the bond that is not reactive at all. A carbon–hydrogen bond is strong, unpolarised and present everywhere: a drug-sized molecule has thirty to fifty of them. Making one react is now possible; making the *right* one react is the problem, and its difficulty can be stated exactly.

Selectivity between two competing sites is a ratio of rates, and rates depend exponentially on free energy, so the selectivity follows from the difference in activation free energy between the two pathways:

$$
\frac{k_1}{k_2} = \exp\!\left(\frac{\Delta\Delta G^{\ddagger}}{RT}\right).
$$

With $RT = 2.48$ kJ/mol at 298 K, a useful 95:5 preference — a ratio of 19 — needs only

$$
\Delta\Delta G^{\ddagger} = RT\ln 19 = 2.48 \times 2.94 = 7.3 \text{ kJ/mol}.
$$

Seven kilojoules. That is less than a hydrogen bond, about a tenth of a typical reaction barrier, and well inside the error of a routine quantum chemical calculation.

This cuts both ways, and that is the point. On the optimistic side, controlling selectivity does not require a large energetic difference — a modest steric preference or a weak attraction between catalyst and substrate suffices, which is why enzymes can be so selective using nothing but shape. On the pessimistic side, differences that small are produced by almost anything: a change of solvent, a nearby substituent, a slight distortion of the catalyst. So selectivity achieved on one substrate frequently vanishes on the next, and a method that works on toluene fails on a molecule with four other aromatic rings.

The arithmetic also explains why the available strategies look as they do. One is to attach a *directing group* that coordinates the metal and holds it next to the intended bond, converting an energetic problem into a geometric one — effective, and it costs two steps, which is what the method was meant to save. Another is to exploit the small intrinsic differences that do exist: bonds adjacent to nitrogen are weaker by 15 to 25 kJ/mol, which is worth a factor of several hundred and is enough. The third, and the one that would generalise, is to build a catalyst that holds the whole substrate in a fixed orientation, as an enzyme does — which requires a new catalyst for each substrate, and is where the field is.

For comparison, the same calculation run on an enzyme shows what is being competed against. A selectivity of $10^{6}$, routine for a hydroxylase choosing among the C–H bonds of a steroid, corresponds to

$$
\Delta\Delta G^{\ddagger} = 2.48 \times \ln(10^{6}) = 34 \text{ kJ/mol},
$$

achieved not by activating one bond but by presenting only one bond to the catalytic centre.

## Reactions That Ignore an Entire Cell

The most extreme form of the selectivity problem has an unexpectedly clean solution. Suppose you want to join two molecules inside a living organism, where there are thousands of amines, alcohols, thiols and carboxylic acids, all more reactive than anything you would ordinarily choose, and where the only acceptable conditions are water at 37 °C.

{{fig:sharpless|Barry Sharpless}} and {{fig:meldal|Morten Meldal}} found in 2001 that copper makes an azide and a terminal alkyne combine rapidly and almost quantitatively under exactly those conditions, and that neither partner reacts with anything biological. {{fig:bertozzi|Carolyn Bertozzi}} then removed the copper, which is toxic to cells, by building the strain into the alkyne so that no catalyst is needed.

The result is a pair of groups that see only each other. Feed a cell a sugar carrying an azide, let it be incorporated into the molecules on the cell's surface, then add a fluorescent alkyne, and the label attaches to that sugar and nowhere else — in a living animal. The approach is now the standard way to attach a probe, a drug or a tag to a biomolecule in place, and it is discussed from the other side under [cell biology](/biology/cell-biology/). Selectivity, in the end, was achieved not by discriminating between similar bonds but by introducing two groups that chemistry had no other use for.
