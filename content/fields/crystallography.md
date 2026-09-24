---
id: crystallography
domain: physics
thread: matter
name: Crystallography
parent_ids:
  - electromagnetism
era_emerged: 1784 – 1913
core_question: How are atoms arranged inside a solid, and how can we see an arrangement far too small for any microscope?

summary: |-
  A crystal is matter in which atoms repeat in a regular pattern, like tiles on a floor that extends in three dimensions. The flat faces and fixed angles of quartz, salt and snowflakes had long hinted at an inner order. In the eighteenth and nineteenth centuries mineralogists and mathematicians worked out what repeating patterns are possible, long before anyone could see a single atom.

  In 1912 Max von Laue showed that X-rays are diffracted by crystals, and within a year the Braggs, father and son, had turned diffraction into a way of reading atomic positions. The method went on to reveal the structures of salt, diamond, penicillin, vitamin B12, insulin and DNA. In 1982 it also produced a pattern that the rules said was impossible, and the definition of a crystal had to change.

key_ideas:
  - term: Lattice
    definition: >-
      The grid of points at which a crystal's pattern repeats. Bravais showed that in
      three dimensions there are only 14 distinct kinds of lattice.
    turning_point_id: xtal-bravais-lattices
  - term: X-ray diffraction
    definition: >-
      X-rays have wavelengths close to the spacing between atoms, so the rows of atoms in a
      crystal scatter them into a pattern of sharp spots. The pattern encodes where the
      atoms are.
    turning_point_id: xtal-laue-diffraction
  - term: Bragg's law
    definition: >-
      Waves reflected from parallel planes of atoms reinforce each other only at angles
      where $n\lambda = 2d\sin\theta$. Measuring the angles gives the spacing $d$ between
      the planes.
    turning_point_id: xtal-bragg-law
  - term: Structure determination
    definition: >-
      Working back from the spots of a diffraction pattern to a three-dimensional map of
      electron density, and so to the position of every atom in a molecule.
    turning_point_id: xtal-hodgkin-structures
  - term: Quasicrystal
    definition: >-
      A solid whose atoms are ordered but never repeat exactly. Its diffraction pattern is
      sharp, yet shows symmetries, such as fivefold, that no repeating lattice can have.
    turning_point_id: xtal-quasicrystals

turning_points:
  - id: xtal-hauy-molecules
    date: "1784"
    type: DISCOVERY
    title: Crystals built from repeated blocks
    description: >-
      René Just Haüy notices that calcite always breaks into smaller rhombs with the same
      angles as the original. He proposes that every crystal is built by stacking identical
      tiny units, and that its faces follow from how the stacking is stepped. It was the
      first theory linking the outward shape of a crystal to an inner repeating structure.
    contested: false
    sources:
      - citation: "Haüy, R. J. (1784). Essai d'une théorie sur la structure des crystaux, appliquée à plusieurs genres de substances crystallisées. Gogué et Née de la Rochelle, Paris."
        url: null

  - id: xtal-bravais-lattices
    date: 1848 – 1850
    type: DISCOVERY
    title: The fourteen lattices
    description: >-
      Auguste Bravais, a French naval officer and physicist, classifies the ways points can
      be arranged so that the surroundings of every point look the same. He finds exactly
      14 lattices in three dimensions. In 1891 Evgraf Fedorov and Arthur Schoenflies
      extended the count to all 230 symmetry groups of crystals, decades before anyone
      could test them.
    contested: false
    sources:
      - citation: "Bravais, A. (1850). Mémoire sur les systèmes formés par des points distribués régulièrement sur un plan ou dans l'espace. Journal de l'École Polytechnique 19: 1–128."
        url: null

  - id: xtal-laue-diffraction
    date: "1912"
    type: EXPERIMENT
    title: X-rays diffracted by a crystal
    description: >-
      In Munich, Max von Laue suggests that if X-rays are waves and crystals are lattices,
      a crystal should act as a diffraction grating for X-rays. Walter Friedrich and Paul
      Knipping pass a beam through copper sulphate and find a pattern of spots on a
      photographic plate. The experiment proved both ideas at once. Laue received the 1914
      Nobel prize.
    contested: false
    sources:
      - citation: "Friedrich, W., Knipping, P. & Laue, M. (1912). Interferenz-Erscheinungen bei Röntgenstrahlen. Sitzungsberichte der Königlich Bayerischen Akademie der Wissenschaften: 303–322."
        url: null
      - citation: "Authier, A. (2013). Early Days of X-ray Crystallography. Oxford University Press."
        url: null

  - id: xtal-bragg-law
    date: 1912 – 1913
    type: DISCOVERY
    title: The Braggs read a crystal
    description: >-
      William Lawrence Bragg, a 22-year-old student at Cambridge, explains Laue's spots as
      reflections from planes of atoms and states the law that bears his name. His father,
      William Henry Bragg, builds an X-ray spectrometer to measure the reflections. Together
      they solve the structures of rock salt and diamond. Salt has no separate molecules at
      all, only alternating sodium and chlorine. Father and son shared the 1915 Nobel prize.
    contested: false
    sources:
      - citation: "Bragg, W. L. (1913). The diffraction of short electromagnetic waves by a crystal. Proceedings of the Cambridge Philosophical Society 17: 43–57."
        url: null
      - citation: "Bragg, W. H. & Bragg, W. L. (1913). The reflection of X-rays by crystals. Proceedings of the Royal Society A 88: 428–438."
        url: null

  - id: xtal-lonsdale-benzene
    date: "1929"
    type: EXPERIMENT
    title: The benzene ring is flat
    description: >-
      Kathleen Lonsdale, trained in W. H. Bragg's laboratory and now at the University of Leeds, solves the structure of
      hexamethylbenzene and shows that its ring of six carbon atoms is flat and regular. It
      settled a long argument among chemists about the shape of benzene. In 1945 she and
      the microbiologist Marjory Stephenson became the first women elected Fellows of the
      Royal Society.
    contested: false
    sources:
      - citation: "Lonsdale, K. (1929). The structure of the benzene ring in C6(CH3)6. Proceedings of the Royal Society A 123: 494–515."
        url: https://doi.org/10.1098/rspa.1929.0081

  - id: xtal-hodgkin-structures
    date: 1945 – 1969
    type: EXPERIMENT
    title: The molecules of medicine
    description: >-
      Dorothy Hodgkin solves the structure of penicillin in 1945, of vitamin B12 in 1956
      and, after 34 years of work, of insulin in 1969. Each was among the most complex
      molecules solved up to then. She used early computers to handle the
      calculations, and received the 1964 Nobel prize in chemistry.
    contested: false
    sources:
      - citation: "Hodgkin, D. C. et al. (1956). Structure of vitamin B12. Nature 178: 64–66."
        url: https://doi.org/10.1038/178064a0
      - citation: "Ferry, G. (1998). Dorothy Hodgkin: A Life. Granta Books."
        url: null

  - id: xtal-quasicrystals
    date: 1982 – 1984
    type: PARADIGM-SHIFT
    title: The forbidden symmetry
    description: >-
      Dan Shechtman, visiting the US National Bureau of Standards, sees a diffraction
      pattern with tenfold symmetry in a rapidly cooled aluminium–manganese alloy. Every
      textbook said a crystal could not have it. His report was rejected at first and met
      open hostility, but it was published in 1984 and soon reproduced. In 1992 the
      International Union of Crystallography redefined a crystal by its sharp diffraction
      rather than by repetition. Shechtman received the 2011 Nobel prize in chemistry.
    contested: true
    contested_note: >-
      Linus Pauling argued until his death in 1994 that the patterns came from ordinary
      crystals twinned together, and he was not alone at first. The dispute was over
      interpretation of the data, not the data themselves. Later crystals of much higher
      quality settled it in Shechtman's favour for almost all crystallographers.
    sources:
      - citation: "Shechtman, D., Blech, I., Gratias, D. & Cahn, J. W. (1984). Metallic phase with long-range orientational order and no translational symmetry. Physical Review Letters 53(20): 1951–1953."
        url: null
      - citation: "Levine, D. & Steinhardt, P. J. (1984). Quasicrystals: a new class of ordered structures. Physical Review Letters 53(26): 2477–2480."
        url: null

open_problems:
  - id: xtal-structure-prediction
    name: Predicting a crystal from its molecule
    status: open
    status_note: Open as of 2026; computer predictions now often succeed for small, rigid molecules, but not reliably.
    description: >-
      Given a molecule, which crystal will it form? Many molecules can pack in several
      different ways, called polymorphs, with different solubility, strength and colour. In
      1988 the editor of Nature called the inability to predict crystal structures one of
      the continuing scandals of the physical sciences.
    why_hard: >-
      Rival packings often differ in energy by less than the errors of the best
      calculations, and which one actually grows can depend on how fast the crystal forms,
      the solvent and traces of impurity. The number of possible packings to search is
      enormous.
    unlocks: >-
      Drugs and materials designed on a computer with the right crystal form from the
      start, and no more surprise polymorphs appearing after a medicine is on the market.
    sources:
      - citation: "Maddox, J. (1988). Crystals from first principles. Nature 335: 201."
        url: https://doi.org/10.1038/335201a0
      - citation: "Oganov, A. R. (ed.) (2010). Modern Methods of Crystal Structure Prediction. Wiley-VCH."
        url: null

applications:
  - area: Structural biology
    title: A library of protein structures
    description: >-
      The Protein Data Bank holds over two hundred thousand molecular structures, most of
      them solved by X-ray crystallography. Drug designers use them to shape molecules that
      fit an enzyme's active site, and in 2020 they supplied the training data for
      AlphaFold, which predicts protein structures from sequence alone.
    domain: biology
    field_id: biochemistry
    sources:
      - citation: "Berman, H. M. et al. (2000). The Protein Data Bank. Nucleic Acids Research 28(1): 235–242."
        url: null
      - citation: "Jumper, J. et al. (2021). Highly accurate protein structure prediction with AlphaFold. Nature 596: 583–589."
        url: null
  - area: Geometry
    title: Penrose tilings and quasicrystals
    description: >-
      In the 1970s Roger Penrose found two shapes of tile that cover the plane only in
      patterns that never repeat, with fivefold symmetry everywhere. Alan Mackay showed in
      1982 that such a pattern would diffract into sharp spots. Shechtman's quasicrystals
      turned a recreational curiosity of tiling theory into real matter, and renewed
      mathematical interest in aperiodic order.
    domain: math
    field_id: euclidean-geometry
    sources:
      - citation: "Gardner, M. (1977). Extraordinary nonperiodic tiling that enriches the theory of tiles. Scientific American 236(1): 110–121."
        url: null
  - area: Pharmaceuticals
    title: The drug that changed its crystal
    description: >-
      In 1998 the HIV drug ritonavir began to fail in its capsules. A new, less soluble
      crystal form had appeared that no one had seen in development, and once it existed
      the old form became almost impossible to make. The drug had to be reformulated.
      Screening for polymorphs is now a routine step in drug development.
    sources:
      - citation: "Bauer, J. et al. (2001). Ritonavir: an extraordinary example of conformational polymorphism. Pharmaceutical Research 18(6): 859–866."
        url: null

further_reading:
  - citation: "Authier, A. (2013). Early Days of X-ray Crystallography. Oxford University Press."
    url: null
    note: A detailed history of the discoveries of 1912–1913 and what came before them.
  - citation: "Jenkin, J. (2008). William and Lawrence Bragg, Father and Son: The Most Extraordinary Collaboration in Science. Oxford University Press."
    url: null
    note: A double biography, including the strain the shared credit put on them.
  - citation: "Ferry, G. (1998). Dorothy Hodgkin: A Life. Granta Books."
    url: null
    note: A biography of the crystallographer who solved the molecules of medicine.
---

## Shapes Without Atoms

Crystals have flat faces that meet at fixed angles. A quartz crystal from the Alps and one from Brazil have the same angles between the same faces, whatever their size. In 1784 {{fig:rene-just-hauy|René Just Haüy}} found that calcite always breaks into smaller rhombs of the same shape. He proposed that a crystal is a stack of identical tiny blocks, and that its faces are the stepped edges of the stack.

Nobody could see the blocks, so the next advances were mathematical. Which repeating patterns are possible at all? In 1848 {{fig:auguste-bravais|Auguste Bravais}} showed that there are exactly 14 kinds of *lattice*, the grid of points at which a pattern repeats. In 1891 Evgraf Fedorov and Arthur Schoenflies counted every combination of lattice and symmetry, and found 230, a result of [Euclidean geometry](/math/euclidean-geometry/). One rule stood out. A repeating pattern can have twofold, threefold, fourfold or sixfold rotational symmetry, but never fivefold, just as regular pentagons cannot tile a floor.

## X-Rays Meet Crystals

X-rays were discovered in 1895, and for years no one knew whether they were particles or waves. In 1912 {{fig:max-von-laue|Max von Laue}} in Munich reasoned that if they were very short waves, the regular rows of atoms in a crystal should scatter them the way closely ruled lines scatter light. {{fig:walter-friedrich|Walter Friedrich}} and {{fig:paul-knipping|Paul Knipping}} tried it with a crystal of copper sulphate and found a pattern of spots. X-rays were waves, and crystals were lattices, as the theory of [electromagnetism](/physics/electromagnetism/) and the crystallographers had both supposed.

Laue's own analysis of the spots was complicated. That autumn {{fig:william-lawrence-bragg|William Lawrence Bragg}}, a 22-year-old student at Cambridge, found a far simpler picture. Each plane of atoms reflects a little of the beam, and the reflections from many parallel planes add up only at particular angles. His father, {{fig:william-henry-bragg|William Henry Bragg}}, built an instrument to measure those angles precisely. In 1913 the Braggs solved rock salt and diamond. In salt, each sodium atom sits among six chlorine atoms and each chlorine among six sodium atoms, with nothing that could be called a molecule of sodium chloride. Some chemists found this hard to accept. They shared the 1915 Nobel prize, although the son felt for years that the public credited his father with his law.

## Molecules Made Visible

The method spread from minerals to chemistry. In 1929 {{fig:kathleen-lonsdale|Kathleen Lonsdale}} showed that the benzene ring, the backbone of organic chemistry, is flat. Solving larger molecules was a matter of heavy calculation, since the diffraction spots record how strongly each set of planes reflects but not the timing, or *phase*, of the reflected waves. Crystallographers found ways round this, such as adding a heavy atom as a marker.

{{fig:dorothy-hodgkin|Dorothy Hodgkin}} pushed the method furthest. She solved penicillin in 1945, which showed chemists the unusual ring at the heart of the drug, then vitamin B12 in 1956, with the help of some of the first electronic computers. Insulin took her 34 years and was finished in 1969. Meanwhile X-ray photographs of DNA fibres helped reveal the double helix, and Max Perutz and John Kendrew solved the first protein structures, the start of [molecular biology](/biology/molecular-biology/) as a science of shapes.

In 1982 the rules themselves were broken. {{fig:dan-shechtman|Dan Shechtman}} saw a sharp diffraction pattern with tenfold symmetry in a rapidly cooled alloy of aluminium and manganese. The symmetry was forbidden for any repeating lattice. By his own account, his group leader asked him to leave, and Linus Pauling is reported to have said that there were no quasicrystals, only quasi-scientists. But others reproduced the result, and theorists explained it as order without repetition, like a Penrose tiling. In 1992 the definition of a crystal was changed to fit.

## A Closer Look: Reading Rock Salt

X-rays reflected from two neighbouring planes of atoms, a distance $d$ apart, travel paths that differ by $2d\sin\theta$, where $\theta$ is the angle between the beam and the planes. The reflections reinforce only when that difference is a whole number of wavelengths:

$$
n\lambda = 2d\sin\theta .
$$

The Braggs could measure angles, but to get distances they needed one length to start from. They took it from the density of salt. A cube of rock salt with side $a$ holds four sodium and four chlorine atoms. Salt's density is 2.165 g/cm³ and a mole of NaCl weighs 58.44 g, so

$$
a^3 = \frac{4 \times 58.44}{2.165 \times 6.022 \times 10^{23}} \ \text{cm}^3, \qquad a \approx 5.64 \times 10^{-8} \ \text{cm} = 5.64 \ \text{Å} .
$$

One ångström, Å, is $10^{-10}$ m. With the spacing known, the angles give the X-ray wavelength, and after that any crystal can be measured.

Take the X-rays used in most laboratories today, from copper, with $\lambda = 1.5406$ Å. The planes in salt that hold alternate layers of sodium and chlorine are $a/2 = 2.82$ Å apart. Other sets of planes cut the cube at slants:

| Planes | Spacing $d$ (Å) | $\sin\theta$ for $n = 1$ | Angle $\theta$ |
|---|---|---|---|
| (111), across the cube's corner | 3.256 | 0.2366 | 13.68° |
| (200), parallel to a face | 2.820 | 0.2732 | 15.85° |
| (220), across a face diagonal | 1.994 | 0.3863 | 22.72° |

For the (200) planes, the second and third orders, $n = 2$ and $n = 3$, appear at 33.11° and 55.03°. A fourth order would need $\sin\theta > 1$, so it does not exist.

The same arithmetic shows why visible light cannot do this. Green light has $\lambda \approx 5000$ Å, and reflecting it from planes 2.82 Å apart would need $\sin\theta \approx 890$. Only waves shorter than $2d = 5.64$ Å can be reflected at all. X-rays, with wavelengths near one ångström, are the right size for atoms.

## From Salt to Proteins

Crystallography grew from a branch of mineralogy into the basic tool for seeing matter at the scale of atoms. It showed physicists the lattices through which electrons move, the starting point of [solid-state physics](/physics/solid-state-physics/). It gave chemists the shapes of molecules and biologists the shapes of proteins. Neutrons and electrons are now diffracted as well as X-rays, and electron microscopes can image single frozen proteins. Yet the simplest question, which crystal a given molecule will form, still cannot be answered reliably in advance.
