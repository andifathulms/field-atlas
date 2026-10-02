---
id: total-synthesis
domain: chemistry
thread: synthesis
name: Total Synthesis
parent_ids:
  - stereochemistry
era_emerged: 1856 – 1994
core_question: Can a complicated natural molecule be built from simple commercial starting materials, and what is proved by doing so?

summary: |-
  A total synthesis is the construction of a naturally occurring molecule from materials bought in a bottle. It began as an industrial accident — William Perkin, trying to make quinine at eighteen, made a purple dye instead and founded an industry — and became, for most of the twentieth century, the discipline's demonstration of competence. Before spectroscopy could determine a structure, synthesis was the proof: make the substance by a route in which every step's outcome is known, and if the product is identical to the natural material, the structure was right.

  Robert Woodward made it a form of design rather than a trial. His syntheses of quinine, cholesterol, strychnine, reserpine and finally vitamin B12 — the last with Albert Eschenmoser, a hundred collaborators and eleven years — were planned in advance, with the stereochemistry of each step controlled on purpose. The arithmetic is unforgiving, though. A linear route of forty steps, each running at a very respectable 90% yield, delivers one and a half per cent of the theoretical product, which is why strategy in this field is mostly about avoiding long linear sequences.

key_ideas:
  - term: Total synthesis
    definition: >-
      Building a target molecule from simple, commercially available compounds, with no step relying on
      material isolated from a natural source. A partial or formal synthesis starts from an advanced
      natural product, which is a weaker claim.
    turning_point_id: perkin-mauveine
  - term: Synthesis as structure proof
    definition: >-
      Before spectroscopy, the best evidence for a proposed structure was to build that structure by
      unambiguous steps and compare the product with the natural substance. The logic runs the other way
      now, and the practice is still used to confirm contested assignments.
    turning_point_id: komppa-camphor
  - term: Overall yield
    definition: >-
      The product of every step's yield. Because it is a product rather than an average, long sequences
      are punished exponentially: forty steps at 90% give 1.5%, and at 80% give 0.013%.
    turning_point_id: woodward-structural-era
  - term: Longest linear sequence
    definition: >-
      The length of the longest unbranched chain of steps in a route. Since only that chain multiplies
      through to the final yield, a convergent plan that joins two shorter branches late beats a linear
      plan of the same total length by orders of magnitude.
    turning_point_id: woodward-eschenmoser-b12
  - term: Stereocontrol
    definition: >-
      Arranging each step so that it produces one of the possible three-dimensional outcomes rather than
      a mixture. With $n$ centres there are $2^{n}$ possibilities, so control is not optional for
      anything complicated.
    turning_point_id: palytoxin-and-taxol

turning_points:
  - id: perkin-mauveine
    date: "1856"
    type: SYNTHESIS-ACHIEVED
    title: Perkin fails to make quinine
    description: >-
      William Henry Perkin, eighteen years old and working in a home laboratory during the Easter
      holiday, tries to make quinine by oxidising an aniline derivative — on a formula that could not
      possibly have worked, since the composition was right and the structure unknown. He gets a black
      sludge, extracts a brilliant purple dye from it, patents it, and with his father's money builds a
      works. Mauveine made a fortune, created the synthetic dye industry, and demonstrated that
      laboratory organic chemistry could manufacture substances nature had monopolised.
    contested: false
    sources:
      - citation: "Perkin, W. H. (1862). On the colouring matters derived from coal tar. Journal of the Chemical Society 15: 206–211."
        url: null
      - citation: "Garfield, S. (2000). Mauve: How One Man Invented a Colour That Changed the World. Faber."
        url: null

  - id: komppa-camphor
    date: 1903 – 1907
    type: SYNTHESIS-ACHIEVED
    title: The first industrial synthesis of a natural product
    description: >-
      Camphor was needed in quantity for celluloid and for smokeless powder, and came from a tree in
      Taiwan whose supply was controlled and erratic. Gustaf Komppa builds it from camphoric acid
      precursors in a sequence that establishes the structure as it goes, and by 1907 a Finnish plant was
      producing it. The synthesis is the first of a complex natural product carried to industrial scale,
      and it shows the two motives that have driven the field ever since: proving a structure and
      escaping a monopoly.
    contested: false
    sources:
      - citation: "Komppa, G. (1903). Die vollständige Synthese der Camphersäure und Dehydrocamphersäure. Berichte der Deutschen Chemischen Gesellschaft 36: 4332–4335."
        url: null
      - citation: "Nicolaou, K. C. & Sorensen, E. J. (1996). Classics in Total Synthesis. VCH, chapter 1."
        url: null

  - id: woodward-quinine
    date: "1944"
    type: SYNTHESIS-ACHIEVED
    title: Quinine, and what counts as a total synthesis
    description: >-
      With wartime supplies of quinine cut off by the occupation of Java, Robert Woodward and William
      Doering announce a synthesis of the compound, and it is reported in the press as a triumph of
      American chemistry. What they made was quinotoxine, which Paul Rabe had reported converting to
      quinine in 1918 — so the claim rested on a reaction nobody had repeated and whose published detail
      was incomplete.
    contested: true
    contested_note: >-
      Whether the 1944 work constituted a total synthesis of quinine was argued for sixty years. The
      objection was not that Woodward and Doering had claimed something false but that the final link
      depended on Rabe's unrepeated 1918 procedure. Smith and Williams finally reproduced that conversion
      in 2008, after considerable difficulty, which retrospectively vindicated the claim — and the
      episode remains the standard example of the difference between a formal and a complete synthesis.
    sources:
      - citation: "Woodward, R. B. & Doering, W. E. (1944). The total synthesis of quinine. Journal of the American Chemical Society 66: 849."
        url: null
      - citation: "Smith, A. C. & Williams, R. M. (2008). Rabe rest in peace: confirmation of the Rabe–Kindler conversion of d-quinotoxine into quinine. Angewandte Chemie International Edition 47: 1736–1740."
        url: null

  - id: woodward-structural-era
    date: 1951 – 1958
    type: SYNTHESIS-ACHIEVED
    title: Synthesis becomes design
    description: >-
      In seven years Woodward's group completes cholesterol and cortisone, strychnine, lysergic acid,
      reserpine and chlorophyll. What changes is not the difficulty but the method: each route is planned
      in advance from the target backwards, each step chosen because its stereochemical outcome is
      predictable, and conformational arguments of the kind Barton had introduced are used to decide
      which face of a ring a reagent will attack. Synthesis stops being a search and becomes a
      construction.
    contested: false
    sources:
      - citation: "Woodward, R. B. et al. (1954). The total synthesis of strychnine. Journal of the American Chemical Society 76: 4749–4751."
        url: null
      - citation: "Woodward, R. B. et al. (1956). The total synthesis of reserpine. Journal of the American Chemical Society 78: 2023–2025."
        url: null
      - citation: "Nicolaou, K. C. & Sorensen, E. J. (1996). Classics in Total Synthesis. VCH."
        url: null

  - id: woodward-eschenmoser-b12
    date: 1960 – 1973
    type: SYNTHESIS-ACHIEVED
    title: Vitamin B12
    description: >-
      Vitamin B12 has a corrin ring, nine stereocentres, a cobalt atom and no symmetry worth exploiting.
      Woodward's group at Harvard and Albert Eschenmoser's at Zurich attack it jointly, with around a
      hundred collaborators over eleven years, converging two separately built halves. The project
      produced something besides the molecule: an unexpected stereochemical outcome in a ring closure
      sent Woodward to Roald Hoffmann, and the result was the orbital symmetry rules described under
      [quantum chemistry](/chemistry/quantum-chemistry/).
    contested: false
    sources:
      - citation: "Woodward, R. B. (1973). The total synthesis of vitamin B12. Pure and Applied Chemistry 33: 145–177."
        url: null
      - citation: "Eschenmoser, A. & Wintner, C. E. (1977). Natural product synthesis and vitamin B12. Science 196: 1410–1420."
        url: null

  - id: palytoxin-and-taxol
    date: 1989 – 1994
    type: SYNTHESIS-ACHIEVED
    title: The limit of what can be assembled
    description: >-
      Yoshito Kishi's group completes palytoxin, a molecule from a soft coral with 64 stereocentres and a
      molecular weight near 2,700 — so that of the $2^{64}$ possible stereoisomers, the synthesis had to
      deliver exactly one. Five years later two groups publish syntheses of taxol within weeks of each
      other, in a widely watched race driven by the drug's clinical value and the scarcity of the Pacific
      yew. Both demonstrate that complexity is no longer the obstacle; the number of steps, and what they
      cost, is.
    contested: false
    sources:
      - citation: "Armstrong, R. W. et al. (1989). Total synthesis of palytoxin carboxylic acid and palytoxin amide. Journal of the American Chemical Society 111: 7530–7533."
        url: null
      - citation: "Nicolaou, K. C. et al. (1994). Total synthesis of taxol. Nature 367: 630–634."
        url: null
      - citation: "Holton, R. A. et al. (1994). First total synthesis of taxol. Journal of the American Chemical Society 116: 1597–1600."
        url: null

open_problems:
  - id: synthesis-efficiency
    name: Making a complex molecule in few steps
    status: open
    status_note: Open as of 2026; state-of-the-art routes to complex natural products still run to dozens of steps.
    description: >-
      A plant assembles a complex alkaloid in perhaps ten enzymatic transformations from primary
      metabolites, in water, at ambient temperature, with no protecting groups and no purification between
      steps. The corresponding laboratory synthesis typically takes twenty to sixty steps, a third of
      which do nothing but attach and remove protecting groups, with an overall yield below a few per
      cent. The gap has narrowed since the 1970s and has not closed.
    why_hard: >-
      Laboratory reagents are promiscuous where enzymes are selective, so the chemist blocks everything
      that must not react and unblocks it later — steps that add no structure. Selectivity between
      chemically similar sites, control of stereochemistry without a chiral environment built for the
      purpose, and the need to purify after each step all push the count up.
    unlocks: >-
      Step count determines whether a molecule can be made at the scale a medicine requires. Several
      effective natural-product drugs are supplied by fermentation or semi-synthesis because the total
      synthesis, though accomplished, is not economic.
    sources:
      - citation: "Hendrickson, J. B. (1975). Systematic synthesis design. Journal of the American Chemical Society 97: 5784–5800."
        url: null
      - citation: "Wender, P. A., Verma, V. A., Paxton, T. J. & Pillow, T. H. (2008). Function-oriented synthesis, step economy, and drug design. Accounts of Chemical Research 41: 40–49."
        url: null

applications:
  - area: Medicine
    title: Supplying a drug that a plant makes slowly
    description: >-
      Taxol was isolated from the bark of the Pacific yew at a yield that would have required felling
      tens of thousands of mature trees per year of treatment for a modest patient population. Total
      synthesis solved the structural question and semi-synthesis from a related compound in yew needles,
      then plant cell culture, solved the supply. Artemisinin followed a similar path, with a
      semi-synthetic route from engineered yeast providing a buffer against crop failure.
    domain: biology
    field_id: pharmacology
    sources:
      - citation: "Cragg, G. M. (1998). Paclitaxel (Taxol): a success story with valuable lessons for natural product drug discovery. Medicinal Research Reviews 18: 315–331."
        url: null
      - citation: "Paddon, C. J. et al. (2013). High-level semi-synthetic production of the potent antimalarial artemisinin. Nature 496: 528–532."
        url: null
  - area: Structure determination
    title: The proof of last resort
    description: >-
      Spectroscopy has replaced synthesis as the normal route to a structure, and synthesis remains the
      arbiter when spectroscopy is ambiguous. Several natural product structures assigned from
      spectroscopic data have been revised after a synthesis of the proposed structure gave a substance
      with different spectra — which is a strong argument, since the synthetic route's outcome is known
      step by step.
    sources:
      - citation: "Nicolaou, K. C. & Snyder, S. A. (2005). Chasing molecules that were never there: misassigned natural products. Angewandte Chemie International Edition 44: 1012–1044."
        url: null
  - area: Training
    title: What the field was for
    description: >-
      For much of the twentieth century a total synthesis was how a research group demonstrated
      competence and how a graduate student was trained, which is why so many methodological advances —
      new reactions, new protecting groups, new ways of controlling stereochemistry — were reported as
      part of a campaign towards some natural product. The target was often less valuable than the
      methods invented on the way to it.
    sources:
      - citation: "Seeman, J. I. (2007). The Woodward–Doering/Rabe–Kindler total synthesis of quinine. Angewandte Chemie International Edition 46: 1378–1413."
        url: null

further_reading:
  - citation: "Nicolaou, K. C. & Sorensen, E. J. (1996). Classics in Total Synthesis. VCH."
    url: null
    note: Thirty landmark syntheses worked through step by step, with the strategy explained.
  - citation: "Seeman, J. I. (2007). The Woodward–Doering/Rabe–Kindler total synthesis of quinine. Angewandte Chemie International Edition 46: 1378–1413."
    url: null
    note: A hundred pages on one disputed claim, and the best account of what "total" means.
  - citation: "Hoffmann, R. W. (2009). Elements of Synthesis Planning. Springer."
    url: null
    note: How routes are actually designed, including the arithmetic of yields and step counts.
---

## An Accident That Founded an Industry

In 1856 {{fig:perkin|William Henry Perkin}} was eighteen, working at the Royal College of Chemistry under Hofmann, and spending his Easter holiday trying to make quinine in a laboratory at home. The attempt was hopeless in a way nobody could have known: quinine's composition was known, its structure was not, and Perkin's plan amounted to oxidising something of roughly the right formula and hoping. He got a black precipitate, and when he washed it with alcohol the liquid turned brilliant purple.

He recognised a dye, patented it, persuaded his father to finance a works, and had mauveine in commercial production within two years. The consequences were out of all proportion: a synthetic dye industry, the German chemical firms that grew to dominate it, and the demonstration that a laboratory could manufacture a substance better than nature supplied it.

The first *deliberate* synthesis of a complex natural product at scale came in 1903, and the motive was supply. Camphor was needed for celluloid and for smokeless powder, and came from a Taiwanese tree under monopoly control. {{fig:komppa|Gustaf Komppa}} built it, establishing its structure in the process, and a Finnish plant was making it by 1907. Those two motives — prove a structure, escape a monopoly — have driven the field ever since.

## Synthesis as Proof, and as Design

Before spectroscopy, a proposed structure could be confirmed in only one way that was fully convincing: build that structure by steps whose outcomes are individually known, and compare the product with the natural substance. Every degradation is ambiguous — fragments could have come from several arrangements — whereas a synthesis that arrives at the same substance from a known starting point leaves little room for argument. Structure determination and synthesis were therefore one activity.

{{fig:woodward|Robert Woodward}} changed what the activity was. Between 1951 and 1958 his group completed cholesterol, cortisone, strychnine, lysergic acid, reserpine and chlorophyll, and the difference from earlier work was that the routes were *planned*. Each step was chosen because its stereochemical outcome could be predicted, using the conformational reasoning {{fig:barton|Barton}} had just introduced to decide which face of a ring a reagent would attack. Woodward reportedly worked out the reserpine route on paper before any of it was attempted.

The culmination was vitamin B12: a corrin ring, nine stereocentres, a cobalt atom, no useful symmetry. Woodward at Harvard and {{fig:eschenmoser|Albert Eschenmoser}} at Zurich ran it jointly with about a hundred collaborators over eleven years, building two halves separately and joining them. The project's most durable product was a by-product. A ring closure gave the wrong stereochemistry, reproducibly; thinking about why sent Woodward to {{fig:hoffmann|Roald Hoffmann}}, and the answer was the orbital symmetry rules.

## A Closer Look: Why Convergent Beats Linear

The arithmetic of a multi-step synthesis is harsher than intuition allows, because yields multiply.

A step that gives 90% of the theoretical product is a good step. Forty of them in sequence give

$$
0.90^{40} = e^{40\ln 0.9} = e^{-4.21} = 0.0148,
$$

one and a half per cent. At 80% per step — still a publishable yield — forty steps give

$$
0.80^{40} = e^{-8.93} = 1.3\times10^{-4},
$$

about one part in eight thousand. To finish with a gram of product requires nearly eight kilograms of the first intermediate, before accounting for the mass lost as the molecular weight changes.

| Steps | 95% each | 90% each | 80% each |
|---|---|---|---|
| 10 | 60% | 35% | 11% |
| 20 | 36% | 12% | 1.2% |
| 40 | 13% | 1.5% | 0.013% |

Now the strategic point. Only the *longest linear sequence* multiplies through to the final product. Suppose a target needs 40 bond-forming operations. Done as one chain at 90% per step, the yield is 1.5%. Done as two branches of 20 steps each, built separately and joined in a final coupling, the longest linear sequence is 21 steps, and

$$
0.90^{21} = e^{-2.21} = 0.109,
$$

eleven per cent — a sevenfold improvement from rearranging the same chemistry. The gain is larger still in practice, because each branch can be made in quantity on its own schedule, and a failure late in one branch does not destroy material from the other. This is why convergent, fragment-coupling design has been the dominant strategy since the 1970s, and why a long linear route is read as a planning failure rather than as diligence.

The second number worth stating is the stereochemical one. {{fig:kishi|Yoshito Kishi}}'s palytoxin has **64 stereocentres**. The number of distinct stereoisomers is

$$
2^{64} = 1.8\times10^{19},
$$

and the synthesis had to deliver one of them. Nothing about this is achievable by purification: the isomers are mostly diastereomers, separable in principle, and there are ten billion billion of them. Every centre has to be set correctly at the step that creates it. That is what stereocontrol means operationally, and why [asymmetric catalysis](/chemistry/catalysis/) and the methods of the next two fields mattered so much more than any individual target.

## What the Field Is For Now

The obstacles have moved. Complexity is no longer the barrier — palytoxin settled that — and structure determination has passed almost entirely to spectroscopy and crystallography. What remains is efficiency, and the comparison is with biology.

A plant builds a complex alkaloid in perhaps ten enzymatic steps from primary metabolites, in water, at ambient temperature, with no protecting groups and no purification between steps. The laboratory equivalent runs to twenty, forty, sixty steps, of which a large fraction install and remove protecting groups and so add no structure at all. The reason is selectivity: an enzyme acts on one site, while a laboratory reagent attacks everything of a given type, so everything else must be blocked first.

That gap is this field's open problem, and the two responses to it are the subjects that follow. One is to plan better, which is [retrosynthetic analysis](/chemistry/retrosynthetic-analysis/) and now machine search. The other is to invent reactions selective enough that blocking becomes unnecessary, which is [cross-coupling](/chemistry/cross-coupling/) and the long pursuit of functionalising one carbon–hydrogen bond out of forty.
