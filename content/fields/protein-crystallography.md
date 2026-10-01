---
id: protein-crystallography
domain: biology
thread: structure
name: Protein Crystallography
parent_ids:
  - biochemistry
era_emerged: 1931 – 1969
core_question: How can the position of every atom in a molecule of ten thousand atoms be determined, when the only measurement available is the brightness of diffracted spots?

summary: |-
  By 1930 enzymes were known to be proteins and proteins were known to be chains of amino acids, and nobody had any idea what one looked like. The obstacle was not resolution but information. X-rays diffracted by a crystal produce a pattern of spots whose intensities can be measured precisely, and the arrangement of atoms is the Fourier transform of that pattern — except that a Fourier transform needs both the amplitude and the phase of each component, and a detector records only the amplitude. Half the data is destroyed by the act of measurement.

  This phase problem took twenty years to defeat. Max Perutz's solution, worked out over two decades on haemoglobin, was to attach a heavy atom to the protein at a known site: the extra scattering interferes with the protein's, and the resulting change in each spot's brightness depends on the phase that is missing. In 1958 John Kendrew produced the first three-dimensional structure of a protein, myoglobin, and it looked like nothing anyone had predicted — an irregular, lumpy arrangement of helical segments with no symmetry at all. The field's founding result was that proteins do not have tidy structures.

key_ideas:
  - term: Diffraction and Bragg's law
    definition: >-
      A crystal scatters X-rays strongly in directions where waves from successive planes of atoms
      arrive in step: $n\lambda = 2d\sin\theta$. Each spot in the pattern corresponds to one Fourier
      component of the electron density, and finer detail appears at larger angles.
    turning_point_id: astbury-fibre-diffraction
  - term: The phase problem
    definition: >-
      A diffraction pattern gives the magnitude of each Fourier component and not its phase. Without
      phases the density cannot be reconstructed, and the phases cannot be measured directly because
      detectors respond to intensity.
    turning_point_id: perutz-phase-problem
  - term: Isomorphous replacement
    definition: >-
      Soak a heavy atom into the crystal without disturbing its packing. Its scattering interferes
      with the protein's, so the intensity changes measurably, and the size of the change in each
      spot constrains the missing phase. Two or more such derivatives determine it.
    turning_point_id: perutz-phase-problem
  - term: Resolution
    definition: >-
      The finest spacing resolved, set by the largest diffraction angle at which usable spots appear.
      At 5 Å a protein is a shape; at 3 Å the chain can be traced and side chains placed; below 1.5 Å
      individual atoms separate.
    turning_point_id: kendrew-myoglobin
  - term: Secondary structure
    definition: >-
      Local regular folds of the backbone — the $\alpha$-helix and the $\beta$-sheet — stabilised by
      hydrogen bonds between backbone atoms. Pauling derived both from bond geometry before either was
      seen in a protein.
    turning_point_id: pauling-corey-alpha-helix

turning_points:
  - id: astbury-fibre-diffraction
    date: 1931 – 1934
    type: DISCOVERY
    title: Astbury's wool fibres
    description: >-
      William Astbury, hired by the Leeds textile industry to study wool, finds that keratin fibres
      give X-ray patterns that change when the fibre is stretched: an unstretched form with a repeat
      near 5 Å and a stretched form with a repeat near 3.4 Å. He infers that the protein chain can
      exist in a coiled and an extended state — the first evidence that polypeptides adopt regular
      conformations, and the data that later work on helices and sheets had to explain.
    contested: false
    sources:
      - citation: "Astbury, W. T. & Street, A. (1932). X-ray studies of the structure of hair, wool and related fibres. Philosophical Transactions of the Royal Society A 230: 75–101."
        url: null
      - citation: "Hall, K. T. (2014). The Man in the Monkeynut Coat: William Astbury and the Forgotten Road to the Double-Helix. Oxford University Press."
        url: null

  - id: bernal-crowfoot-pepsin
    date: "1934"
    type: TECHNIQUE-INVENTED
    title: The first protein diffraction pattern
    description: >-
      Pepsin crystals had been photographed before and gave almost nothing. John Desmond Bernal and
      Dorothy Crowfoot realise why: taking the crystals out of their mother liquor collapses them.
      Mounted wet, in a sealed capillary, a pepsin crystal produces a pattern of hundreds of sharp
      spots extending to high angles. Protein molecules are therefore identical, ordered objects with
      definite internal structure, and that structure is in principle determinable. Nobody had a way
      to determine it.
    contested: false
    sources:
      - citation: "Bernal, J. D. & Crowfoot, D. (1934). X-ray photographs of crystalline pepsin. Nature 133: 794–795."
        url: null
      - citation: "Ferry, G. (1998). Dorothy Hodgkin: A Life. Granta."
        url: null

  - id: hodgkin-penicillin-b12
    date: 1945 – 1956
    type: TECHNIQUE-INVENTED
    title: Hodgkin solves structures nobody could guess
    description: >-
      Dorothy Hodgkin determines the structure of penicillin in 1945, settling a chemical argument by
      showing it contains a strained four-membered β-lactam ring that leading chemists had ruled out,
      and in 1956 that of vitamin B12, a molecule of 181 atoms with a cobalt at its centre and no
      chemical route to its structure at all. The B12 work used one of the first computers applied to
      crystallography. She established that X-ray analysis could outrun chemical inference on
      molecules of biological size.
    contested: false
    sources:
      - citation: "Crowfoot, D., Bunn, C. W., Rogers-Low, B. W. & Turner-Jones, A. (1949). The X-ray crystallographic investigation of the structure of penicillin. In The Chemistry of Penicillin, 310–367. Princeton University Press."
        url: null
      - citation: "Hodgkin, D. C. et al. (1956). Structure of vitamin B12. Nature 178: 64–66."
        url: null

  - id: pauling-corey-alpha-helix
    date: 1951
    type: DISCOVERY
    title: The alpha helix from first principles
    description: >-
      Linus Pauling, Robert Corey and Herman Branson derive the regular conformations available to a
      polypeptide from the geometry of the peptide bond, which Pauling had established to be planar
      with partial double-bond character, and from the requirement that every backbone amide form a
      hydrogen bond. Two solutions emerge: a helix with 3.6 residues per turn and a rise of 1.5 Å, and
      a pleated sheet. The helix was derived on paper, from bond lengths and angles, before any protein
      structure existed to check it against.
    contested: false
    sources:
      - citation: "Pauling, L., Corey, R. B. & Branson, H. R. (1951). The structure of proteins: two hydrogen-bonded helical configurations of the polypeptide chain. PNAS 37: 205–211."
        url: null
      - citation: "Eisenberg, D. (2003). The discovery of the α-helix and β-sheet. PNAS 100: 11207–11210."
        url: null

  - id: perutz-phase-problem
    date: 1953 – 1959
    type: TECHNIQUE-INVENTED
    title: Perutz solves the phase problem
    description: >-
      Max Perutz had been photographing haemoglobin crystals since 1937 with no way to convert the
      intensities into a structure. In 1953 he shows that attaching mercury atoms to two reactive
      sulphydryl groups changes the intensities measurably without altering the crystal packing, and
      that the changes give the phases. Francis Crick and Daniel Magdoff worked out how large the
      effect should be, confirming it was detectable for a molecule of haemoglobin's size. The method
      made every subsequent protein structure possible.
    contested: false
    sources:
      - citation: "Green, D. W., Ingram, V. M. & Perutz, M. F. (1954). The structure of haemoglobin IV: sign determination by the isomorphous replacement method. Proceedings of the Royal Society A 225: 287–307."
        url: null
      - citation: "Crick, F. H. C. & Magdoff, B. S. (1956). The theory of the method of isomorphous replacement for protein crystals. Acta Crystallographica 9: 901–908."
        url: null

  - id: kendrew-myoglobin
    date: 1958 – 1960
    type: DISCOVERY
    title: The first protein structure
    description: >-
      John Kendrew, working on myoglobin because it is smaller than haemoglobin and crystallises from
      sperm whale muscle, produces a 6 Å map in 1958 and a 2 Å map in 1960. The molecule is a compact
      irregular object made of eight helical segments connected by non-repeating turns, with the haem
      group in a pocket and no symmetry whatsoever. Kendrew described it as having an almost total lack
      of the regularity anyone had expected. Perutz's haemoglobin structure followed, and the pair
      shared the 1962 Nobel Prize in Chemistry.
    contested: false
    sources:
      - citation: "Kendrew, J. C. et al. (1958). A three-dimensional model of the myoglobin molecule obtained by X-ray analysis. Nature 181: 662–666."
        url: null
      - citation: "Kendrew, J. C. et al. (1960). Structure of myoglobin: a three-dimensional Fourier synthesis at 2 Å resolution. Nature 185: 422–427."
        url: null
      - citation: "Perutz, M. F. et al. (1960). Structure of haemoglobin: a three-dimensional Fourier synthesis at 5.5 Å resolution. Nature 185: 416–422."
        url: null

open_problems:
  - id: crystallisation-prediction
    name: Predicting whether a protein will crystallise
    status: open
    status_note: Open as of 2026; crystallisation remains a screen over thousands of conditions.
    description: >-
      Growing a crystal good enough to diffract remains the rate-limiting step for most proteins and
      is attempted by brute force: robots dispense thousands of combinations of precipitant, buffer,
      salt, temperature and additive, and most proteins yield nothing. Membrane proteins, flexible
      proteins and large complexes are the worst cases, and no theory predicts from a sequence which
      conditions to try, or whether any exist.
    why_hard: >-
      Crystallisation requires a protein to make a specific set of weak, ordered contacts with copies
      of itself, which depends on surface charge patches, flexible loops and bound water in ways that
      vary with every condition in the drop. The relevant free-energy differences are a few $k_BT$,
      and nucleation is a rare stochastic event, so the outcome is not reproducible even between
      identical drops.
    unlocks: >-
      Crystallography still gives the highest-resolution structures available, and the method remains
      blocked for whole classes of medically important proteins. Cryo-electron microscopy has reduced
      the pressure without removing it.
    sources:
      - citation: "McPherson, A. & Gavira, J. A. (2014). Introduction to protein crystallization. Acta Crystallographica F 70: 2–20."
        url: null
      - citation: "Chayen, N. E. & Saridakis, E. (2008). Protein crystallization: from purified protein to diffraction-quality crystal. Nature Methods 5: 147–153."
        url: null

applications:
  - area: Medicine
    title: Sickle-cell anaemia, read from a structure
    description: >-
      Perutz's haemoglobin work showed where every amino acid sits, including position 6 of the β
      chain, where the glutamate replaced by valine in sickle-cell disease creates a sticky
      hydrophobic patch on the deoxygenated form. The patch fits a complementary pocket on a
      neighbouring molecule, so deoxygenated sickle haemoglobin polymerises into fibres that deform
      the cell. A single-base substitution, a changed surface, and a disease — the first such chain
      established in molecular detail.
    sources:
      - citation: "Perutz, M. F. & Mitchison, J. M. (1950). State of haemoglobin in sickle-cell anaemia. Nature 166: 677–679."
        url: null
      - citation: "Eaton, W. A. & Hofrichter, J. (1990). Sickle cell hemoglobin polymerization. Advances in Protein Chemistry 40: 63–279."
        url: null
  - area: Crystallography
    title: What X-rays did for biology, biology did for X-rays
    description: >-
      Protein crystals are mostly water, diffract weakly, and die under the beam, so they forced the
      development of cryo-cooling, synchrotron sources, area detectors and direct methods for phasing
      that then served chemistry and materials science. The traffic ran both ways: the physics of
      [crystallography](/physics/crystallography/) supplied the method, and the demands of proteins
      drove its instrumentation for fifty years.
    domain: physics
    field_id: crystallography
    sources:
      - citation: "Helliwell, J. R. (1992). Macromolecular Crystallography with Synchrotron Radiation. Cambridge University Press."
        url: null
  - area: Computing
    title: An early consumer of serious computation
    description: >-
      A Fourier synthesis over ten thousand reflections at a few thousand grid points was beyond hand
      calculation, and crystallographers were among the first scientific users of digital computers:
      Hodgkin's vitamin B12 work used machines in Los Angeles and Manchester, and Kendrew's myoglobin
      maps were computed on the EDSAC in Cambridge. The field's demand for fast Fourier transforms
      preceded and motivated some of the standard numerical practice.
    domain: math
    field_id: numerical-analysis
    sources:
      - citation: "Ferry, G. (1998). Dorothy Hodgkin: A Life. Granta."
        url: null

further_reading:
  - citation: "Perutz, M. F. (1998). I Wish I'd Made You Angry Earlier. Cold Spring Harbor Laboratory Press."
    url: null
    note: Essays by the person who solved the phase problem, including on how long it took.
  - citation: "Ferry, G. (1998). Dorothy Hodgkin: A Life. Granta."
    url: null
    note: A biography that conveys what structure determination involved before computers.
  - citation: "Rhodes, G. (2006). Crystallography Made Crystal Clear, 3rd edition. Academic Press."
    url: null
    note: The clearest explanation of the phase problem and how it is solved.
---

## A Pattern With Half Its Information Missing

By the early 1930s proteins were known to be chains of amino acids, and enzymes were known to be proteins. What a protein molecule looked like was entirely open; the respectable guesses included regular rods, flat sheets and symmetric cages, on the general principle that a molecule with thousands of atoms must be built on some simple plan.

{{fig:astbury|William Astbury}}, employed by the Leeds wool industry, got the first hint of local order. Keratin fibres gave X-ray patterns that changed reproducibly when stretched, implying that the polypeptide chain has at least two regular conformations — a coiled one and an extended one. {{fig:bernal|John Desmond Bernal}} and {{fig:dorothy-hodgkin|Dorothy Crowfoot}} then showed, in 1934, that a protein crystal can give a rich diffraction pattern at all. The trick was to keep the crystal wet: taken out of its mother liquor, a pepsin crystal collapses, which is why earlier attempts had failed. Mounted in a sealed capillary, it produced hundreds of sharp spots.

That settled the existence question — protein molecules are identical, ordered objects — and exposed the real difficulty. The electron density in the crystal is the Fourier transform of the diffraction pattern, and a Fourier transform needs each component's amplitude *and* phase. A photographic plate or a counter records intensity, which gives the amplitude. The phase is not recorded, cannot be inferred from the intensities for a molecule of this size, and is half of what is needed. Twenty years of work on protein crystals produced beautiful patterns and no structures.

## Two Routes That Did Not Need the Phases

While the phase problem stood, two kinds of result were obtained around it, and both mattered.

The first was to work on molecules small enough to be solved by trial. For a structure with a few dozen atoms, one can guess an arrangement, compute the diffraction pattern it would give, compare with the measured intensities, and adjust — and if a heavy atom is present its position can often be found from the pattern of intensities alone. {{fig:dorothy-hodgkin|Dorothy Hodgkin}} made this a method. Her structure of penicillin, completed in 1945, settled a chemical argument by showing a strained four-membered ring that senior chemists had declared impossible; her structure of vitamin B12, in 1956, located 181 atoms around a central cobalt in a molecule for which no chemical route to the answer existed at all. The B12 work used one of the first digital computers applied to crystallography, and it demonstrated that X-ray analysis could now outrun chemical inference.

The second route did not use diffraction patterns to find a structure at all; it used them to check one. {{fig:pauling|Linus Pauling}} had established that the peptide bond is planar, with partial double-bond character that prevents rotation about it, and he knew the hydrogen bond's preferred length and geometry. With {{fig:corey|Robert Corey}} and Herman Branson he asked what regular conformations a polypeptide chain can adopt if every backbone amide is to make a hydrogen bond and no bond angle is to be strained. The question has only a few answers. One is a helix with 3.6 residues per turn and a rise of 1.5 Å per residue — the $\alpha$-helix — and another is a pleated sheet in which neighbouring strands hydrogen-bond to each other.

Both were published in 1951, derived from bond lengths and angles on paper, with no protein structure in existence to test them against. {{fig:astbury|Astbury}}'s stretched and unstretched keratin patterns from the 1930s turned out to correspond to the two forms. Seven years later the helices appeared in the first protein structure, at the predicted dimensions. It is the clearest case in structural biology of a prediction from chemical principles arriving before the measurement, and it is worth noting what it did not predict: how the helices are arranged relative to each other, which is the part that required the phases.

## A Closer Look: How a Mercury Atom Supplies a Phase

The reasoning behind the solution is worth following, because it is a case of extracting missing information by deliberately perturbing the sample.

First, the scale of the problem. Each diffraction spot is one Fourier component, and the number of them grows as the inverse cube of the resolution. Myoglobin's 2 Å map required about ten thousand independent measurements, each needing a phase angle somewhere between 0 and 360 degrees. Guessing is not available: a Fourier synthesis with wrong phases gives noise that looks like nothing.

{{fig:perutz|Max Perutz}}'s idea was to add a heavy atom. Haemoglobin has two reactive sulphydryl groups that will bind mercury, and if the crystal's packing is undisturbed — an *isomorphous* derivative — then every spot's amplitude becomes the sum of two contributions: the protein's, unknown in phase, and the mercury's, whose phase is calculable once its position is known. The two interfere. Where they are in step the spot gets brighter; where they oppose, dimmer. The *change* in each amplitude therefore carries information about the protein's phase at that reflection.

Whether the effect would be big enough to measure was not obvious, and {{fig:crick|Francis Crick}} and Beatrice Magdoff computed it in 1956. For $N_H$ heavy atoms of scattering factor $f_H$ in a protein of $N_P$ light atoms of average factor $f_P$, the typical fractional change in amplitude is

$$
\frac{\Delta F}{F} \approx \sqrt{\frac{2N_H}{N_P}} \cdot \frac{f_H}{f_P}.
$$

Haemoglobin has about 4,500 non-hydrogen atoms, mostly carbon, nitrogen and oxygen, so $f_P \approx 7$ electrons. Mercury has $f_H = 80$. With two mercury sites:

$$
\frac{\Delta F}{F} \approx \sqrt{\frac{4}{4500}} \times \frac{80}{7} = 0.030 \times 11.4 = 0.34.
$$

A third. Intensity measurements of the day were good to a few per cent, so the signal is comfortably above the noise — which is why the method works for a molecule of 65,000 daltons, and why it begins to fail for much larger ones, since the effect falls as $1/\sqrt{N_P}$. For a protein of a million daltons, two mercuries would change the amplitudes by about 7%, and that is the practical ceiling of the technique.

One derivative is not quite enough: the interference fixes the phase to one of two values, so a second derivative with a different heavy atom at a different site is needed to break the tie. Perutz's haemoglobin work used several. With phases in hand, the Fourier synthesis can be computed — ten thousand terms summed at every point of a grid, which on the machines of 1959 took weeks.

The resolution the map achieves follows from Bragg's law, $n\lambda = 2d\sin\theta$. With copper X-rays at $\lambda = 1.54$ Å, resolving $d = 2$ Å needs spots out to

$$
\sin\theta = \frac{1.54}{2 \times 2} = 0.385, \qquad \theta = 22.6^{\circ}.
$$

Spots at larger angles are weaker and are the first casualties of radiation damage, which is why resolution is a measure of how good the crystal was rather than how good the instrument is.

## What the First Structure Showed

{{fig:kendrew|John Kendrew}} chose myoglobin because it is a quarter the size of haemoglobin and crystallises well from the muscle of sperm whales, which were then still being hunted. His 6 Å map of 1958 showed a sausage of electron density; the 2 Å map of 1960 showed the chain.

It was a mess. Eight helical segments of varying length, joined by irregular turns, packed into a compact lump with the haem group wedged in a pocket, and no symmetry of any kind. Kendrew wrote that the most striking feature was the almost total absence of the regularity that had been expected. The helical segments were exactly the ones Pauling and Corey had derived on paper seven years earlier, at the predicted pitch. The way those segments were arranged relative to one another was not derivable from anything.

This is the result the field was founded on, and it set the agenda for everything after. A protein's shape is specific, reproducible and irregular, which means it must be determined rather than deduced — and, as the chemistry turned out, it is determined by the amino acid sequence alone, a fact established at almost the same time and discussed under [protein structure prediction](/biology/structure-prediction/). The immediate payoff was medical: Perutz's haemoglobin maps located the glutamate at position 6 of the β chain whose replacement by valine causes sickle-cell disease, and showed that the substitution creates a sticky hydrophobic patch on the deoxygenated molecule — a surface defect that makes the molecules polymerise into fibres.

What could then be done with structures of enzymes, membrane proteins and assemblies of hundreds of components is [structural biology](/biology/structural-biology/). The crystals themselves remain the bottleneck: growing one is still done by dispensing thousands of conditions and hoping.
