---
id: structural-biology
domain: biology
thread: structure
name: Structural Biology
parent_ids:
  - protein-crystallography
  - molecular-biology
era_emerged: 1965 – 2017
core_question: Once a molecule's atoms can be located, what does the arrangement explain — and how large an assembly can be solved?

summary: |-
  Myoglobin showed what a protein looks like. The next question was whether a structure *explains* anything, and the answer arrived in 1965 with lysozyme, the first enzyme to be solved. Its active site is a groove with a sugar chain lying in it and two acidic side chains positioned on either side of the bond that gets broken. The mechanism was readable from the picture, and the field's central claim — that function follows from shape, in detail — was established.

  What followed was a sixty-year climb in the size of what could be solved. A membrane protein, long thought impossible to crystallise, was done in 1985. Nuclear magnetic resonance made it possible to determine structures in solution rather than in crystals. In 2000 three groups solved the ribosome, a machine of some quarter of a million atoms, and found that its catalytic centre contains no protein at all within 18 Å — the ribosome is a ribozyme, which settled a long argument about what came first. Then electron microscopy, after thirty years as the method of last resort, acquired detectors good enough to work from single particles, and structures of objects that will not crystallise became routine.

key_ideas:
  - term: Structure–function relation
    definition: >-
      The claim that what a molecule does is determined by, and legible from, the arrangement of its
      atoms. Lysozyme's groove with two catalytic residues flanking the scissile bond was the first
      case where a mechanism was read off a map.
    turning_point_id: phillips-lysozyme
  - term: Active site
    definition: >-
      A pocket or cleft, usually a small fraction of the molecule's volume, in which a few precisely
      positioned residues do the chemistry. The rest of the protein is largely scaffolding that holds
      them in place.
    turning_point_id: phillips-lysozyme
  - term: Structural database
    definition: >-
      A public archive of coordinates, deposited on publication. It converted structures from
      individual results into a dataset that could be mined for folds, motifs and statistics, and it
      is the training set every prediction method depends on.
    turning_point_id: protein-data-bank
  - term: Solution NMR
    definition: >-
      Determining a structure from nuclear magnetic resonance measurements of distances between atoms
      in solution, with no crystal. It works for smaller proteins, reports on flexibility rather than
      averaging it away, and is the main source of information about disordered regions.
    turning_point_id: wuthrich-nmr
  - term: Single-particle reconstruction
    definition: >-
      Build a three-dimensional map by averaging tens of thousands of low-dose electron micrographs of
      individual copies of a molecule, each frozen in a random orientation. No crystal is needed, and
      different conformations can be separated rather than merged.
    turning_point_id: cryo-em-revolution
  - term: Ribozyme
    definition: >-
      A catalyst made of RNA. The ribosome's peptide-bond-forming site is one, which means protein
      synthesis is carried out by RNA and is evidence that RNA catalysis preceded protein catalysis.
    turning_point_id: ribosome-structure

turning_points:
  - id: phillips-lysozyme
    date: 1965 – 1967
    type: DISCOVERY
    title: Lysozyme, the first enzyme structure
    description: >-
      David Phillips and colleagues at the Royal Institution solve hen egg-white lysozyme at 2 Å, and
      then solve it again with an inhibitory sugar bound in its cleft. The result is a mechanism: the
      substrate lies in a groove, two acidic residues sit on either side of the bond to be broken, one
      donating a proton and the other stabilising the resulting positive charge, and the sugar must be
      distorted to fit — which is the first structural picture of how an enzyme accelerates a reaction
      by straining its substrate towards the transition state.
    contested: false
    sources:
      - citation: "Blake, C. C. F. et al. (1965). Structure of hen egg-white lysozyme. Nature 206: 757–761."
        url: null
      - citation: "Phillips, D. C. (1967). The hen egg-white lysozyme molecule. PNAS 57: 484–495."
        url: null

  - id: protein-data-bank
    date: "1971"
    type: TECHNIQUE-INVENTED
    title: The Protein Data Bank
    description: >-
      At a Cold Spring Harbor meeting, crystallographers agree to deposit their atomic coordinates in a
      public archive rather than keeping them, and the Protein Data Bank opens at Brookhaven with seven
      structures. Mandatory deposition on publication came in the late 1980s after a long argument about
      ownership and credit. The archive passed 100,000 structures in 2014, and it is the reason
      prediction methods have anything to learn from — a decision about data policy that turned out to
      be a precondition for a later revolution.
    contested: false
    sources:
      - citation: "Protein Data Bank (1971). Protein Data Bank. Nature New Biology 233: 223."
        url: null
      - citation: "Berman, H. M. (2008). The Protein Data Bank: a historical perspective. Acta Crystallographica A 64: 88–95."
        url: null

  - id: wuthrich-nmr
    date: 1982 – 1986
    type: TECHNIQUE-INVENTED
    title: Structures without crystals
    description: >-
      Kurt Wüthrich develops a strategy for determining protein structures in solution: assign each
      proton's resonance to a specific atom in the sequence, measure which protons are close enough to
      transfer magnetisation to each other, and compute the structures consistent with the resulting
      list of short distances. The first complete protein structure by NMR appears in 1985. The method
      works only for smaller molecules, and it reports the range of conformations a protein occupies
      rather than a single averaged one.
    contested: false
    sources:
      - citation: "Williamson, M. P., Havel, T. F. & Wüthrich, K. (1985). Solution conformation of proteinase inhibitor IIA from bull seminal plasma. Journal of Molecular Biology 182: 295–315."
        url: null
      - citation: "Wüthrich, K. (1986). NMR of Proteins and Nucleic Acids. Wiley."
        url: null

  - id: membrane-protein-structure
    date: "1985"
    type: TECHNIQUE-INVENTED
    title: The first membrane protein solved
    description: >-
      Membrane proteins have a greasy belt that must sit in lipid, so they do not dissolve in water and
      were thought uncrystallisable. Hartmut Michel finds conditions — a mild detergent plus a small
      amphiphile — that crystallise the photosynthetic reaction centre of a purple bacterium, and
      Johann Deisenhofer and Robert Huber solve it at 3 Å. The structure shows the chain of pigments
      down which an electron passes after a photon is absorbed, with the distances that explain why
      the transfer is fast in one direction and not the other.
    contested: false
    sources:
      - citation: "Deisenhofer, J., Epp, O., Miki, K., Huber, R. & Michel, H. (1985). Structure of the protein subunits in the photosynthetic reaction centre of Rhodopseudomonas viridis at 3 Å resolution. Nature 318: 618–624."
        url: null
      - citation: "Michel, H. (1982). Three-dimensional crystals of a membrane protein complex. Journal of Molecular Biology 158: 567–572."
        url: null

  - id: ribosome-structure
    date: 2000 – 2001
    type: DISCOVERY
    title: The ribosome, and the proof that it is RNA that catalyses
    description: >-
      Three groups publish atomic structures of ribosomal subunits within months: Thomas Steitz and
      Peter Moore on the large subunit, Venkatraman Ramakrishnan and Ada Yonath on the small one, and
      then the whole particle. The large subunit's peptidyl transferase centre — where amino acids are
      joined — turns out to be lined entirely by RNA, with no protein side chain within about 18 Å.
      Protein synthesis is catalysed by RNA, as Crick, Orgel and Woese had speculated in the 1960s and
      as nobody had been able to establish.
    contested: false
    sources:
      - citation: "Ban, N., Nissen, P., Hansen, J., Moore, P. B. & Steitz, T. A. (2000). The complete atomic structure of the large ribosomal subunit at 2.4 Å resolution. Science 289: 905–920."
        url: null
      - citation: "Nissen, P., Hansen, J., Ban, N., Moore, P. B. & Steitz, T. A. (2000). The structural basis of ribosome activity in peptide bond synthesis. Science 289: 920–930."
        url: null
      - citation: "Wimberly, B. T. et al. (2000). Structure of the 30S ribosomal subunit. Nature 407: 327–339."
        url: null

  - id: cryo-em-revolution
    date: 2012 – 2017
    type: TECHNIQUE-INVENTED
    title: The resolution revolution
    description: >-
      Electron cryo-microscopy had been able to image frozen molecules since Jacques Dubochet's
      vitrification method of the early 1980s, and Joachim Frank had developed the mathematics for
      averaging images of randomly oriented particles, but the maps were too blurred for atoms. Direct
      electron detectors, which record each electron individually and allow drift during exposure to be
      corrected frame by frame, changed that between 2012 and 2014. Structures at better than 3 Å
      became routine for objects that had never crystallised, and distinct conformations in one sample
      could be separated computationally.
    contested: false
    sources:
      - citation: "Kühlbrandt, W. (2014). The resolution revolution. Science 343: 1443–1444."
        url: null
      - citation: "Dubochet, J. et al. (1988). Cryo-electron microscopy of vitrified specimens. Quarterly Reviews of Biophysics 21: 129–228."
        url: null
      - citation: "Frank, J. (2006). Three-Dimensional Electron Microscopy of Macromolecular Assemblies, 2nd edition. Oxford University Press."
        url: null

open_problems:
  - id: structures-of-disordered-proteins
    name: What to do about proteins with no fixed structure
    status: open
    status_note: Open as of 2026; no agreed representation exists for an ensemble rather than a structure.
    description: >-
      A third or more of human proteins contain long regions with no stable fold, and many are
      disordered throughout. They are not defective: disorder is conserved, and these regions mediate
      a large share of regulatory interactions and form the condensates that organise parts of the
      cell. Crystallography sees nothing of them, and the question of what should replace a set of
      coordinates — an ensemble of what size, weighted how, described by which parameters — has no
      settled answer.
    why_hard: >-
      Experiments report averages over an ensemble, and many different ensembles give the same average,
      so the inverse problem is badly underdetermined. Simulations can generate ensembles but depend on
      force fields calibrated on folded proteins, and there is no benchmark of known answers to
      validate against, because the quantity to be predicted is not a single structure.
    unlocks: >-
      Regulation, signalling and the formation of membraneless compartments all involve these regions,
      and most are undruggable by methods that assume a pocket. A workable description of a disordered
      ensemble would open a third of the proteome to structural reasoning.
    sources:
      - citation: "van der Lee, R. et al. (2014). Classification of intrinsically disordered regions and proteins. Chemical Reviews 114: 6589–6631."
        url: null
      - citation: "Bonomi, M., Heller, G. T., Camilloni, C. & Vendruscolo, M. (2017). Principles of protein structural ensemble determination. Current Opinion in Structural Biology 42: 106–116."
        url: null

applications:
  - area: Drug discovery
    title: Designing against a pocket
    description: >-
      Structure-based design starts from the shape and chemistry of a target's binding site and builds a
      molecule to fit it. HIV protease inhibitors were produced this way within a decade of the
      enzyme's structure; so were the influenza neuraminidase inhibitors, and the kinase inhibitors
      that dominate modern oncology. The approach does not remove the need for medicinal chemistry, and
      it changes where the chemistry starts.
    sources:
      - citation: "Wlodawer, A. & Vondrasek, J. (1998). Inhibitors of HIV-1 protease. Annual Review of Biophysics 27: 249–284."
        url: null
      - citation: "Blundell, T. L. (2017). Protein crystallography and drug discovery. IUCrJ 4: 308–321."
        url: null
  - area: Antibiotics
    title: Where the ribosome-binding drugs bind
    description: >-
      Over half of clinically used antibiotics act on the bacterial ribosome, and before 2000 nobody
      knew where. The structures showed the binding sites for the macrolides, tetracyclines,
      aminoglycosides and oxazolidinones, the differences from the human ribosome that give
      selectivity, and the mutations by which resistance arises — which turned resistance from an
      observation into something addressable by design.
    sources:
      - citation: "Wilson, D. N. (2014). Ribosome-targeting antibiotics and mechanisms of bacterial resistance. Nature Reviews Microbiology 12: 35–48."
        url: null
  - area: Origin of life
    title: Evidence for an RNA world
    description: >-
      That the ribosome's catalytic centre is pure RNA is among the strongest pieces of evidence that
      RNA catalysis preceded protein catalysis, since the machine that makes all proteins cannot
      itself have required proteins to work. It is a structural result bearing on a question about
      events four billion years ago, and it is cited in every account of life's origin.
    sources:
      - citation: "Cech, T. R. (2000). The ribosome is a ribozyme. Science 289: 878–879."
        url: null
      - citation: "Fox, G. E. (2010). Origin and evolution of the ribosome. Cold Spring Harbor Perspectives in Biology 2: a003483."
        url: null

further_reading:
  - citation: "Branden, C. & Tooze, J. (1999). Introduction to Protein Structure, 2nd edition. Garland."
    url: null
    note: The standard illustrated introduction to folds and what they do.
  - citation: "Ramakrishnan, V. (2018). Gene Machine. Basic Books."
    url: null
    note: A first-hand account of the race to solve the ribosome, unusually candid about competition.
  - citation: "Kühlbrandt, W. (2014). The resolution revolution. Science 343: 1443–1444."
    url: null
    note: Two pages on why cryo-EM suddenly worked, written as it was happening.
---

## A Mechanism Read Off a Map

The first protein structure, [myoglobin](/biology/protein-crystallography/), explained very little. Myoglobin stores oxygen, and seeing where the haem sits confirmed that it has a pocket for it, which was not news. The question was whether structures would ever explain chemistry.

Lysozyme answered it. {{fig:david-phillips|David Phillips}}'s group solved the enzyme at 2 Å in 1965, and then did the decisive experiment: solved it again with a sugar inhibitor bound. The substrate lies in a long groove across the molecule's face. Two acidic residues sit on either side of the bond that gets cut — Glu35 positioned to donate a proton to the leaving oxygen, Asp52 positioned to stabilise the positive charge that develops on the sugar. And the sugar in the fourth subsite cannot fit without being distorted out of its relaxed shape, towards the flattened geometry it must adopt in the transition state.

Everything in that paragraph is visible in the map. An enzyme accelerates a reaction by binding the transition state better than the substrate, and here was a picture of it being done. After lysozyme, "solve the structure" became the standard move for understanding any protein, and the rest of the field is about extending the range of what can be solved.

## Three Barriers, Removed in Turn

**Crystals.** {{fig:wuthrich|Kurt Wüthrich}} showed in the 1980s that a structure can be obtained in solution instead. Nuclear magnetic resonance can report which protons are within about 5 Å of each other; collect enough such constraints, assign each resonance to a specific atom in the sequence, and compute the conformations consistent with the list. The method is limited to smaller proteins, and it has an advantage crystallography lacks: it sees motion, and reports a family of conformations rather than one.

**Membranes.** A membrane protein has a hydrophobic belt that must be in contact with lipid, so it will not dissolve in water, and the detergents that keep it soluble interfere with crystal packing. The consensus was that these proteins could not be crystallised, which was awkward, since they are about a quarter of the proteome and most drug targets. {{fig:hartmut-michel|Hartmut Michel}} found conditions that worked for a bacterial photosynthetic reaction centre, and {{fig:deisenhofer|Johann Deisenhofer}} and {{fig:huber|Robert Huber}} solved it in 1985. The structure shows the pigments down which an electron hops after a photon is absorbed, at spacings that explain the direction and speed of the transfer — a result that belongs as much to [wave optics](/physics/wave-optics/) and quantum mechanics as to biology.

**Size.** By the late 1990s the frontier was the ribosome: two subunits, three RNA chains of several thousand bases, more than fifty proteins, a quarter of a million atoms, and a crystal that diffracts badly. Three groups solved it between 1999 and 2001, in a race described frankly by one of the participants.

## A Closer Look: Eighteen Ångströms of Nothing

The ribosome structures settled a question that biochemistry had been unable to touch. The peptidyl transferase centre is where an incoming amino acid is joined to the growing chain — the chemical step at the heart of all protein synthesis. Was it catalysed by one of the ribosome's fifty-odd proteins, or by its RNA?

The argument from the structure is a distance measurement. In the 2.4 Å map of the large subunit, with a transition-state analogue bound in the active site, the nearest atom of any protein side chain is about **18 Å** from the site of the reaction. For comparison:

| Distance | What is at that range |
|---|---|
| 1.5 Å | a covalent bond |
| 2.8 Å | a hydrogen bond |
| 3–4 Å | van der Waals contact |
| 18 Å | five water molecules' worth of nothing |

No chemistry reaches 18 Å. Acid–base catalysis requires a proton donor in hydrogen-bonding range; electrostatic stabilisation falls off with distance and, through water, is screened within a few ångströms. Whatever the ribosomal proteins do — and they do stabilise the structure, and assist assembly — they cannot be performing the catalysis. The catalytic site is lined by RNA bases, and the ribosome is therefore a ribozyme.

The consequence reaches back four billion years. Protein synthesis cannot have required proteins to begin with, so the machine that makes proteins is made of the other polymer. {{fig:crick|Crick}}, Orgel and {{fig:woese|Woese}} had each suggested in the 1960s that RNA came first, on the grounds that it can both carry information and fold; catalytic RNAs were found in the 1980s, which showed it was possible; the ribosome structure showed that the most fundamental process in the cell still works that way.

There is a second lesson in the numbers, about what resolution buys. At 5 Å the ribosome is a shape, and the argument above cannot be made. At 2.4 Å individual bases, bound waters and the analogue's geometry are all placed, and an 18 Å gap becomes a measurement rather than an impression. The difference between the two maps is a factor of four in the number of reflections measured — and about fifteen years of work.

## Pictures Instead of Crystals

The last barrier fell for a mundane reason: better cameras. Electron microscopy of frozen biological molecules had been possible since {{fig:dubochet|Jacques Dubochet}} worked out in the early 1980s how to freeze a sample so fast that the water becomes glass rather than ice, and {{fig:joachim-frank|Joachim Frank}} had developed the mathematics for taking tens of thousands of images of individual particles lying in random orientations and averaging them into a three-dimensional map. The resulting maps were blurry, and the field was nicknamed blobology.

What changed between 2012 and 2014 was the detector. Direct electron detectors record individual electrons and read out fast enough to split an exposure into frames, so the drift of the specimen during exposure — previously an irreducible blur — can be tracked and corrected. Resolutions crossed 3 Å, and then went further.

The consequences have been larger than an improvement in resolution. No crystal is needed, so complexes that had resisted crystallisation for decades were solved within months, including the spliceosome and many membrane receptors. And because each image is of one particle, a sample containing several conformations can be sorted computationally into separate maps instead of being averaged into an uninterpretable mean — so a machine can be caught in several states of its cycle, which is what [molecular machines](/biology/molecular-machines/) requires.

What structural biology still cannot handle is the third of the proteome that has no fixed structure at all. Disordered regions are conserved, functional, and invisible to every method in this chapter, and the question of what should replace a list of coordinates for them is open.
