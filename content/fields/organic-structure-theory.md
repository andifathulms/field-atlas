---
id: organic-structure-theory
domain: chemistry
thread: synthesis
name: Organic Structure Theory
parent_ids:
  - atomic-theory
era_emerged: 1830 – 1950
core_question: If two substances contain the same atoms in the same proportions and behave completely differently, what else is there to differ in?

summary: |-
  In 1830 Berzelius found two substances — silver fulminate and silver cyanate — with identical composition and nothing else in common, and named the situation isomerism. The discovery was a problem of the first order, because composition was all chemistry had. Something besides the inventory of atoms must distinguish substances, and the only candidate is the arrangement.

  Working that out took thirty years and produced the most productive idea in the history of the subject. Carbon is tetravalent and its atoms bond to each other, so they form chains and rings of unlimited length; a molecule is therefore a specific connected structure, drawable on paper, and the number of distinct structures a formula permits should equal the number of isomers found. The prediction is quantitative and it held. Benzene resisted for another seven years until Kekulé proposed a ring, and the ring in turn raised a question — why this particular arrangement is so unusually stable — that was not answered until quantum mechanics supplied Hückel's rule in 1931.

key_ideas:
  - term: Isomerism
    definition: >-
      Two or more distinct substances with the same molecular formula. Its existence proves that
      composition does not determine identity, and so forces chemistry to represent arrangement.
    turning_point_id: berzelius-isomerism
  - term: Structural formula
    definition: >-
      A drawing of which atom is bonded to which, with carbon tetravalent. It is not a picture of a
      molecule's shape but a statement of its connectivity, and for a century it was the only thing
      chemistry could say about structure.
    turning_point_id: kekule-structure-theory
  - term: Catenation
    definition: >-
      Carbon's ability to bond to itself indefinitely, giving chains, branches and rings. It is why
      organic chemistry is a separate subject with millions of compounds while most elements have
      dozens.
    turning_point_id: kekule-structure-theory
  - term: Aromaticity
    definition: >-
      The unusual stability of certain flat rings with delocalised electrons. Hückel's rule says the
      ring must hold $4n+2$ such electrons, which is why benzene with six is stable and
      cyclobutadiene with four is not.
    turning_point_id: huckel-aromaticity
  - term: Conformation
    definition: >-
      The arrangements a molecule can adopt by rotating about single bonds, without breaking any. Two
      conformations are the same substance and can differ enormously in energy and reactivity, which
      is why cyclohexane is a chair and not a hexagon.
    turning_point_id: conformational-analysis

turning_points:
  - id: berzelius-isomerism
    date: 1824 – 1832
    type: MECHANISM-ESTABLISHED
    title: Two substances, one formula
    description: >-
      Justus Liebig analyses silver fulminate and Friedrich Wöhler silver cyanate, and the compositions
      come out identical while the substances are not — one detonates. Berzelius, after checking the
      analyses, accepts the result in 1830 and names the phenomenon isomerism. The implication is
      uncomfortable: composition, the only thing chemistry could then determine, does not identify a
      substance. Something about the arrangement of the same atoms must differ, and no notation existed
      for it.
    contested: false
    sources:
      - citation: "Berzelius, J. J. (1831). Jahresbericht über die Fortschritte der physischen Wissenschaften 10: 47–55."
        url: null
      - citation: "Esteban, S. (2008). Liebig–Wöhler controversy and the concept of isomerism. Journal of Chemical Education 85: 1201–1203."
        url: null

  - id: kekule-structure-theory
    date: 1857 – 1861
    type: MECHANISM-ESTABLISHED
    title: Carbon chains
    description: >-
      August Kekulé and, independently and with clearer diagrams, Archibald Scott Couper propose that
      carbon has four bonds and that carbon atoms link to one another, so that organic molecules are
      chains and branches of carbon carrying hydrogen and other groups. Alexander Butlerov coined the
      term chemical structure in 1861 and stated that the properties of a compound are determined by
      it. A formula becomes a graph, and the number of distinct graphs consistent with a formula becomes
      a testable prediction about how many isomers exist.
    contested: false
    sources:
      - citation: "Kekulé, A. (1858). Über die Constitution und die Metamorphosen der chemischen Verbindungen. Annalen der Chemie und Pharmacie 106: 129–159."
        url: null
      - citation: "Couper, A. S. (1858). On a new chemical theory. Philosophical Magazine 16: 104–116."
        url: null
      - citation: "Rocke, A. J. (2010). Image and Reality: Kekulé, Kopp, and the Scientific Imagination. University of Chicago Press."
        url: null

  - id: benzene-ring
    date: 1861 – 1865
    type: MECHANISM-ESTABLISHED
    title: The benzene ring
    description: >-
      Benzene, $\mathrm{C_6H_6}$, has too few hydrogens for any chain and shows none of the reactivity
      that would imply. Kekulé proposes in 1865 that the six carbons form a closed ring with alternating
      single and double bonds, later adding that the two arrangements oscillate. The ring accounts for
      why there is only one monosubstituted derivative and three disubstituted ones, and it opened the
      whole of aromatic chemistry.
    contested: true
    contested_note: >-
      Priority and the account of how Kekulé arrived at it are both disputed. Josef Loschmidt had
      published ring-like diagrams for benzene derivatives in 1861, in a privately printed pamphlet;
      how much Kekulé knew of it is argued. Kekulé's own story, told at a jubilee in 1890, of dreaming
      of a snake biting its tail, is regarded by historians as a late reconstruction. The alternating
      double bonds were also wrong as drawn — the bonds are all equal, which resonance and then
      molecular orbital theory explained.
    sources:
      - citation: "Kekulé, A. (1865). Sur la constitution des substances aromatiques. Bulletin de la Société Chimique de Paris 3: 98–110."
        url: null
      - citation: "Loschmidt, J. (1861). Chemische Studien I. Privately printed, Vienna."
        url: null
      - citation: "Rocke, A. J. (1985). Hypothesis and experiment in the early development of Kekulé's benzene theory. Annals of Science 42: 355–381."
        url: null

  - id: korner-absolute-method
    date: 1869 – 1874
    type: TECHNIQUE-INVENTED
    title: Körner tells the isomers apart by counting
    description: >-
      Benzene has three disubstituted isomers and nothing distinguishes them chemically, so which is
      which was unknown. Wilhelm Körner finds an argument that needs no new measurement: add a third
      substituent to each isomer and count how many distinct products result. The counts differ — one,
      two and three — and the numbers follow from the symmetry of the ring alone. Positions in a
      molecule were assigned by combinatorics, with no instrument capable of seeing them.
    contested: false
    sources:
      - citation: "Körner, W. (1874). Studj sull'isomeria delle così dette sostanze aromatiche a sei atomi di carbonio. Gazzetta Chimica Italiana 4: 305–446."
        url: null
      - citation: "Brock, W. H. (1992). The Fontana History of Chemistry. Fontana, chapter 7."
        url: null

  - id: huckel-aromaticity
    date: 1931 – 1938
    type: MECHANISM-ESTABLISHED
    title: Hückel's rule
    description: >-
      Erich Hückel applies a simplified molecular orbital treatment to flat rings of carbon atoms with
      delocalised electrons and finds that stability depends on the count: a ring is unusually stable
      when it holds $4n+2$ such electrons and unusually unstable at $4n$. Benzene has six and is
      exceptionally robust; cyclobutadiene has four and was not isolated for another forty years.
      Chemistry acquired a numerical criterion for a property it had been describing by analogy with
      benzene.
    contested: false
    sources:
      - citation: "Hückel, E. (1931). Quantentheoretische Beiträge zum Benzolproblem. Zeitschrift für Physik 70: 204–286."
        url: null
      - citation: "Berson, J. A. (1999). Chemical Creativity: Ideas from the Work of Woodward, Hückel, Meerwein, and Others. Wiley-VCH."
        url: null

  - id: conformational-analysis
    date: 1950 – 1969
    type: MECHANISM-ESTABLISHED
    title: Shape without changing structure
    description: >-
      Odd Hassel's electron-diffraction work shows that cyclohexane is not a flat hexagon but a puckered
      chair, and Derek Barton argues in 1950 that the reactivity of steroids and terpenes depends on
      which conformation a group occupies — axial or equatorial — so that two compounds of identical
      structure can react at completely different rates. Rotation about single bonds, previously treated
      as free and irrelevant, becomes a determinant of chemistry. Barton and Hassel shared the 1969
      Nobel Prize.
    contested: false
    sources:
      - citation: "Barton, D. H. R. (1950). The conformation of the steroid nucleus. Experientia 6: 316–320."
        url: null
      - citation: "Hassel, O. (1953). Structure of cyclohexane. Quarterly Reviews of the Chemical Society 7: 221–230."
        url: null

open_problems:
  - id: defining-aromaticity
    name: What aromaticity is
    status: open
    status_note: Open as of 2026; the standard criteria disagree on a growing list of molecules.
    description: >-
      Aromaticity is among the most used concepts in chemistry and has no agreed definition, because it
      is not a measurable quantity. The criteria in use — extra stability relative to a hypothetical
      reference, a ring current detectable by magnetic resonance, equalised bond lengths, a computed
      index of electron delocalisation — rank molecules differently. Cases where they conflict are no
      longer exotic: metal clusters, excited states, three-dimensional cages and all-metal rings have
      each been declared aromatic on one criterion and not on another.
    why_hard: >-
      Every energetic criterion needs a non-aromatic reference molecule that does not exist and must be
      imagined, so the stabilisation depends on the choice of fiction. Magnetic criteria measure a
      response rather than a structure and are contaminated by local effects. The concept began as a
      family resemblance to benzene and has been asked to carry a precision it was never given.
    unlocks: >-
      Aromaticity is used to predict stability, reactivity and spectra across organic, inorganic and
      materials chemistry. A criterion that agreed with the others would settle a large number of
      individual disputes and make the concept computable rather than arguable.
    sources:
      - citation: "Schleyer, P. v. R. (2001). Introduction: aromaticity. Chemical Reviews 101: 1115–1118."
        url: null
      - citation: "Solà, M. (2017). Why aromaticity is a suspicious concept. Frontiers in Chemistry 5: 22."
        url: null

applications:
  - area: Combinatorics
    title: Counting the isomers
    description: >-
      How many distinct structures a formula permits is a question about labelled graphs under a symmetry
      group, and chemistry asked it first. Arthur Cayley counted alkane trees in 1875 and got some of the
      numbers wrong; the general machinery — counting arrangements up to the action of a group — was
      developed by Redfield and then Pólya, with isomer enumeration as the motivating example. The counts
      are a check on structure theory: $\mathrm{C_4H_{10}}$ permits two structures and two are known,
      $\mathrm{C_6H_{14}}$ permits five and five are known.
    domain: math
    field_id: enumerative-combinatorics
    sources:
      - citation: "Cayley, A. (1875). On the analytical forms called trees, with applications to the theory of chemical combinations. Report of the British Association for the Advancement of Science 45: 257–305."
        url: null
      - citation: "Pólya, G. (1937). Kombinatorische Anzahlbestimmungen für Gruppen, Graphen und chemische Verbindungen. Acta Mathematica 68: 145–254."
        url: null
  - area: Industry
    title: The first science-based industry
    description: >-
      Once a dye's structure was known, variants could be designed rather than found, and the German dye
      firms that became BASF, Bayer and Hoechst were built on exactly that — the first industry in which
      a research laboratory was the productive unit. Structure theory is what made a chemist's drawing
      into a specification a works could be asked to make.
    sources:
      - citation: "Travis, A. S. (1993). The Rainbow Makers: The Origins of the Synthetic Dyestuffs Industry in Western Europe. Lehigh University Press."
        url: null
  - area: Biochemistry
    title: Drawing the molecules of life
    description: >-
      Sugars, fats, amino acids, nucleotides and steroids were all established as structures by the
      methods of this field — degradation to identifiable fragments, counting isomers, and synthesis to
      confirm. The whole of molecular biology presupposes that these are definite connected structures,
      which is a nineteenth-century chemical result rather than a biological one.
    domain: biology
    field_id: biochemistry
    sources:
      - citation: "Fruton, J. S. (1999). Proteins, Enzymes, Genes: The Interplay of Chemistry and Biology. Yale University Press."
        url: null

further_reading:
  - citation: "Rocke, A. J. (2010). Image and Reality: Kekulé, Kopp, and the Scientific Imagination. University of Chicago Press."
    url: null
    note: How chemists came to reason with pictures of molecules, and what they thought the pictures were.
  - citation: "Brock, W. H. (1992). The Fontana History of Chemistry. Fontana."
    url: null
    note: Clear on the isomerism crisis and on the long argument about benzene.
  - citation: "Eliel, E. L. & Wilen, S. H. (1994). Stereochemistry of Organic Compounds. Wiley."
    url: null
    note: The reference work; its early chapters cover conformational analysis thoroughly.
---

## A Crisis Made of Two Substances

Silver fulminate detonates when struck. Silver cyanate does not. {{fig:liebig|Justus Liebig}} analysed the first and {{fig:friedrich-wohler|Friedrich Wöhler}} the second, and the compositions came out the same. Each suspected the other of carelessness; neither was careless. {{fig:berzelius|Berzelius}}, whose analytical authority was unquestioned, checked and accepted the result in 1830, naming the phenomenon isomerism.

This was a crisis rather than a curiosity, because composition was the whole of what chemistry could determine. If two substances can have identical composition, then composition does not identify a substance, and the thing that distinguishes them is something for which no notation and no concept existed.

The resolution took thirty years and arrived as a proposal about carbon. {{fig:kekule|August Kekulé}} and {{fig:couper|Archibald Scott Couper}} argued in 1857–58 that carbon forms four bonds and — the decisive part — that carbon atoms bond to each other. A molecule is then a specific pattern of connections: a chain, a branched chain, a ring. {{fig:butlerov|Alexander Butlerov}} stated the principle in 1861: the properties of a compound are determined by its structure, and each compound has exactly one.

The claim is testable, and sharply so, because the number of distinct structures a formula permits is a matter of counting. $\mathrm{C_4H_{10}}$ allows two arrangements and two butanes were known; $\mathrm{C_5H_{12}}$ allows three and three pentanes were known; $\mathrm{C_6H_{14}}$ allows five. A theory of arrangement predicts isomer counts, and the counts came out right — which is why structure theory was accepted quickly, and also why chemistry became a source of problems for [combinatorics](/math/enumerative-combinatorics/).

## A Closer Look: Finding a Position Without Seeing It

Benzene presented the sharpest case, and the way it was solved is a piece of reasoning rather than a measurement.

{{fig:kekule|Kekulé}}'s ring explains the isomer counts immediately. There is one monosubstituted benzene, because all six positions are equivalent in a ring. There are three disubstituted ones, because the second substituent can be adjacent to the first, one position further round, or opposite — what chemists came to call ortho, meta and para. Three isomers were known, so the ring survived its first test.

But *which* known isomer was which? Nothing in their chemistry distinguishes them, and no instrument in 1874 could look. {{fig:korner|Wilhelm Körner}} found the answer in a count. Take each disubstituted isomer, add a third identical substituent, and ask how many distinct trisubstituted products it can give.

Number the ring 1 to 6 and put the two substituents down:

| Starting isomer | Free positions | Distinct products |
|---|---|---|
| **para**, 1 and 4 | 2, 3, 5, 6 — all equivalent by symmetry | **1** |
| **ortho**, 1 and 2 | 3, 4, 5, 6 — equivalent in pairs (3≡6, 4≡5) | **2** |
| **meta**, 1 and 3 | 2, 4, 5, 6 — position 2 alone, 4≡6, 5 alone | **3** |

Work through the middle row to see how it goes. With substituents at 1 and 2, the mirror plane running between them maps position 3 onto 6 and 4 onto 5, so adding the third group at 3 gives the same substance as adding it at 6. Two distinct products, no more.

So the isomer that yields a single trisubstituted product is para; the one that yields two is ortho; the one that yields three is meta. Körner carried out the substitutions, counted the products and assigned all three. The positions of atoms in a molecule were established by pure combinatorics on a hexagon, from a theory that had been proposed nine years earlier, using no observation of the molecule at all.

Two further notes make the episode more interesting, not less. Kekulé's alternating single and double bonds are *wrong*: all six bonds in benzene are identical, as the equivalence of the positions already hints and as {{fig:kathleen-lonsdale|Kathleen Lonsdale}}'s X-ray work confirmed in 1929 when she showed the ring is flat with equal bond lengths — described under [crystallography](/physics/crystallography/). And the famous story of the dream of a snake seizing its own tail was told by Kekulé twenty-five years after the fact, at a banquet in his honour, and historians treat it as reconstruction. {{fig:josef-loschmidt|Josef Loschmidt}} had meanwhile drawn ring diagrams in a privately printed pamphlet of 1861, which is one of chemistry's unresolved priority questions.

## Why That Ring Is So Stable

Benzene's isomer counts were explained. Its *behaviour* was not. A compound with three double bonds should be eager to add things across them; benzene prefers to have a hydrogen replaced and keep the ring intact, and its heat of hydrogenation is some 150 kJ/mol less than three separate double bonds would predict. Chemists called this aromaticity, after the smell of the compounds in which it was first met, and used benzene itself as the definition.

{{fig:huckel|Erich Hückel}} supplied a criterion in 1931 using a drastically simplified molecular orbital calculation — the method described under [quantum chemistry](/chemistry/quantum-chemistry/). For a flat ring of carbons sharing delocalised electrons, the orbital energies come out in a pattern such that the stable, closed-shell arrangements occur at $4n + 2$ electrons: 2, 6, 10, 14. Benzene has six and is exceptionally stable. Cyclobutadiene has four, falls in the $4n$ case, and is so unstable it was not isolated until 1965 and only then trapped in frozen argon.

A property defined by resemblance had become a count. It has not become a measurement, though, which is the open problem recorded above: the stability criterion needs an imaginary reference molecule, the magnetic criterion measures a response, and the two disagree on a growing list of compounds.

## Shape Without Changing Anything

The last layer took until 1950 and is easy to underestimate. A structural formula fixes connectivity and says nothing about the arrangement single bonds can rotate into. For a long time that rotation was assumed to be free and therefore unimportant.

{{fig:hassel|Odd Hassel}} showed by electron diffraction that cyclohexane is not a flat hexagon but a puckered chair, in which six hydrogens stand roughly vertical and six roughly horizontal. {{fig:barton|Derek Barton}} then argued in 1950 that this matters enormously for reactivity: a group in the vertical position is hindered and reacts slowly, the same group in the horizontal position does not, and steroid chemistry — where the anomalies had been accumulating for years — becomes intelligible once each substituent's orientation is specified. Two compounds with identical structural formulas, differing only in which ring conformation they prefer, can react at rates differing by orders of magnitude.

Connectivity, then, is not the end of the story. The next layer down is arrangement in three dimensions that *cannot* be interconverted by rotation — the difference between a left hand and a right — which is [stereochemistry](/chemistry/stereochemistry/).
