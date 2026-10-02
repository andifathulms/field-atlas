---
id: mass-spectrometry
domain: chemistry
thread: analysis
name: Mass Spectrometry
parent_ids:
  - chemical-analysis
era_emerged: 1942 – 2005
core_question: If a molecule can be weighed to five decimal places and then broken deliberately, how much of its structure can be read from the pieces?

summary: |-
  Physicists built mass spectrographs to separate isotopes. Chemists took the instrument and asked a different question: what happens if the thing being weighed is a molecule? Two answers emerged. The exact mass of the intact molecule, measured to a few parts per million, identifies its elemental formula outright — because atomic masses are not whole numbers, and the fractional parts add up differently for every combination of carbon, hydrogen, nitrogen and oxygen. And the fragments into which the molecule breaks on ionisation are not random: they correspond to the weakest bonds and to particular rearrangements, so the pattern is a structural fingerprint.

  The method's reach was limited for forty years by the need to get the molecule into the gas phase as an ion, which heating does not achieve for anything large or fragile. The solution, found independently in the mid-1980s, was to ionise from solution by spraying through a strong electric field, or from a solid surface with a laser pulse. Both deliver intact proteins. Mass spectrometry therefore became the instrument of proteomics and metabolomics, able to weigh a 50-kilodalton protein to within a dalton and to detect a hormone at attomole levels — and to leave the great majority of the features in a biological sample unidentified.

key_ideas:
  - term: Mass-to-charge ratio
    definition: >-
      What a mass spectrometer actually measures. For singly charged ions it is the mass; for the
      multiply charged ions that electrospray produces, a 50-kilodalton protein appears at a few thousand,
      which is how large molecules fit into the range of ordinary analysers.
    turning_point_id: electron-ionisation
  - term: Fragmentation pattern
    definition: >-
      The set of pieces an ionised molecule breaks into, which reflects bond strengths and favourable
      rearrangements rather than chance. It is reproducible enough to serve as a fingerprint and to be
      searched against libraries of hundreds of thousands of spectra.
    turning_point_id: electron-ionisation
  - term: Accurate mass
    definition: >-
      Measuring the mass precisely enough to determine the elemental formula, because the fractional parts
      of atomic masses differ. Carbon monoxide and nitrogen both weigh 28 to the nearest unit and differ by
      0.011, which a resolving power of 2,500 distinguishes.
    turning_point_id: orbitrap-accurate-mass
  - term: Soft ionisation
    definition: >-
      Getting a large, fragile molecule into the gas phase as an ion without tearing it apart — by spraying
      a solution through a high field, or by firing a laser at it embedded in a matrix. It is what extended
      the method from small molecules to proteins.
    turning_point_id: electrospray-ionisation
  - term: Tandem mass spectrometry
    definition: >-
      Select one ion by mass, break it on purpose, and weigh the pieces. The second stage turns a mixture
      into a set of separate structural problems, and for a peptide the fragment masses give the amino acid
      sequence.
    turning_point_id: tandem-ms-sequencing
  - term: Coupling to a separation
    definition: >-
      Feeding a chromatographic column's output straight into the ion source, so that every component is
      weighed as it emerges. Retention time plus mass spectrum is a far stronger identification than either
      alone, and it is the standard of proof in forensic and doping work.
    turning_point_id: gc-ms-coupling

turning_points:
  - id: electron-ionisation
    date: 1942 – 1959
    type: TECHNIQUE-INVENTED
    title: Molecules break in a reproducible way
    description: >-
      Wartime refineries needed to analyse hydrocarbon mixtures faster than distillation allowed, and
      Consolidated Engineering built instruments that bombarded vapour with electrons and recorded the ions
      produced. The spectra turned out to be reproducible fingerprints, and the fragments interpretable:
      Fred McLafferty described in 1959 the rearrangement that bears his name, in which a hydrogen migrates
      through a six-membered transition state before cleavage. Fragmentation became a body of structural
      rules rather than a complication.
    contested: false
    sources:
      - citation: "McLafferty, F. W. (1959). Mass spectrometric analysis: molecular rearrangements. Analytical Chemistry 31: 82–87."
        url: null
      - citation: "Grayson, M. A. (ed.) (2002). Measuring Mass: From Positive Rays to Proteins. Chemical Heritage Press."
        url: null

  - id: gc-ms-coupling
    date: 1957 – 1964
    type: TECHNIQUE-INVENTED
    title: Separation feeding identification
    description: >-
      Roland Gohlke and Fred McLafferty connect a gas chromatograph to a mass spectrometer, so that each
      component is weighed and fragmented in the seconds after it emerges from the column. The combination
      answers both questions at once — when did it come off, and what is it — and is far harder to argue
      with than either alone. It became the reference method for drugs of abuse, pesticide residues,
      environmental contaminants and doping control, and the instrument that was carried to Mars on the
      Viking landers.
    contested: false
    sources:
      - citation: "Gohlke, R. S. (1959). Time-of-flight mass spectrometry and gas–liquid partition chromatography. Analytical Chemistry 31: 535–541."
        url: null
      - citation: "Gohlke, R. S. & McLafferty, F. W. (1993). Early gas chromatography/mass spectrometry. Journal of the American Society for Mass Spectrometry 4: 367–371."
        url: null

  - id: electrospray-ionisation
    date: 1984 – 1989
    type: TECHNIQUE-INVENTED
    title: Spraying proteins into a mass spectrometer
    description: >-
      Malcolm Dole had proposed in 1968 that charged droplets evaporating in air would leave bare ions
      behind. John Fenn made it work: push a solution through a fine needle held at a few kilovolts, and the
      spray produces droplets that shrink until the molecules they carry are released as multiply charged
      ions. Because the charge is multiple, a 50-kilodalton protein appears at a mass-to-charge ratio of
      about a thousand, within reach of an ordinary analyser. Fenn published the protein spectra in 1989 and
      shared the 2002 Nobel Prize.
    contested: false
    sources:
      - citation: "Fenn, J. B., Mann, M., Meng, C. K., Wong, S. F. & Whitehouse, C. M. (1989). Electrospray ionization for mass spectrometry of large biomolecules. Science 246: 64–71."
        url: null
      - citation: "Fenn, J. B. (2003). Electrospray wings for molecular elephants. Angewandte Chemie International Edition 42: 3871–3894."
        url: null

  - id: maldi
    date: 1985 – 1988
    type: TECHNIQUE-INVENTED
    title: A laser pulse and a sacrificial matrix
    description: >-
      Firing a laser at a large molecule destroys it. Michael Karas and Franz Hillenkamp find that
      embedding the molecule in a large excess of a small compound that absorbs strongly at the laser
      wavelength changes everything: the matrix absorbs the energy and vaporises, carrying the intact
      analyte with it as an ion. Koichi Tanaka demonstrated a related approach with metal powder in
      glycerol. Matrix-assisted laser desorption gives mainly singly charged ions, suits
      time-of-flight analysers, and became the standard way to weigh peptides from a gel spot.
    contested: true
    contested_note: >-
      The 2002 Nobel Prize went to Tanaka rather than to Karas and Hillenkamp, which was widely questioned
      at the time and since: Tanaka's cobalt-powder method was published first but is not the technique in
      use, while the organic-matrix approach that became universal is Karas and Hillenkamp's. The committee
      cited the demonstration that macromolecules could be desorbed intact.
    sources:
      - citation: "Karas, M. & Hillenkamp, F. (1988). Laser desorption ionization of proteins with molecular masses exceeding 10,000 daltons. Analytical Chemistry 60: 2299–2301."
        url: null
      - citation: "Tanaka, K. et al. (1988). Protein and polymer analyses up to m/z 100,000 by laser ionization time-of-flight mass spectrometry. Rapid Communications in Mass Spectrometry 2: 151–153."
        url: null

  - id: tandem-ms-sequencing
    date: 1994 – 2001
    type: TECHNIQUE-INVENTED
    title: Reading a sequence from fragment masses
    description: >-
      Select a peptide ion by mass, collide it with gas so that it breaks along the backbone, and weigh the
      fragments: the differences between successive fragment masses are the residue masses, and so give the
      sequence. John Yates and Jimmy Eng's SEQUEST matches such spectra against sequences predicted from a
      genome database rather than interpreting them from scratch, which converts sequencing into a search
      problem. Identifying thousands of proteins from one sample became routine, and proteomics became a
      field.
    contested: false
    sources:
      - citation: "Eng, J. K., McCormack, A. L. & Yates, J. R. (1994). An approach to correlate tandem mass spectral data of peptides with amino acid sequences in a protein database. Journal of the American Society for Mass Spectrometry 5: 976–989."
        url: null
      - citation: "Aebersold, R. & Mann, M. (2003). Mass spectrometry-based proteomics. Nature 422: 198–207."
        url: null

  - id: orbitrap-accurate-mass
    date: 1999 – 2005
    type: TECHNIQUE-INVENTED
    title: Mass measured to parts per million, routinely
    description: >-
      Alexander Makarov develops an analyser in which ions orbit a spindle-shaped electrode while
      oscillating along it, with the oscillation frequency depending on mass; recording the image current
      and taking its Fourier transform gives masses to about one part per million at high resolving power,
      in a bench instrument. Accurate mass stops being a specialist measurement and becomes a routine
      one, which makes formula determination part of ordinary analysis.
    contested: false
    sources:
      - citation: "Makarov, A. (2000). Electrostatic axially harmonic orbital trapping: a high-performance technique of mass analysis. Analytical Chemistry 72: 1156–1162."
        url: null
      - citation: "Zubarev, R. A. & Makarov, A. (2013). Orbitrap mass spectrometry. Analytical Chemistry 85: 5288–5296."
        url: null

open_problems:
  - id: dark-metabolome
    name: Identifying the features nobody recognises
    status: open
    status_note: Open as of 2026; a typical untargeted run annotates well under a fifth of its detected features.
    description: >-
      An untargeted analysis of a biological sample detects thousands to tens of thousands of distinct
      masses. Most cannot be identified. Accurate mass gives a formula, and a formula corresponds to many
      possible structures; fragmentation narrows it, and matching requires a reference spectrum that for
      most compounds does not exist, because the compound has never been purified or synthesised. Published
      annotation rates for untargeted metabolomics are commonly 2 to 20%.
    why_hard: >-
      The reference libraries contain tens of thousands of compounds against a metabolome plausibly an
      order of magnitude larger, including compounds from diet, gut bacteria and the environment.
      Predicting a fragmentation spectrum from a structure accurately enough to search in silico is
      improving and not yet reliable, and the same mass and formula can belong to dozens of isomers that
      only a separation would distinguish.
    unlocks: >-
      Metabolomics is the measurement closest to phenotype, and most of what it detects is currently
      unnamed — so associations are found between a disease and a feature that cannot be chemically
      identified, and therefore cannot be acted on.
    sources:
      - citation: "da Silva, R. R., Dorrestein, P. C. & Quinn, R. A. (2015). Illuminating the dark matter in metabolomics. PNAS 112: 12549–12550."
        url: null
      - citation: "Dührkop, K. et al. (2019). SIRIUS 4: a rapid tool for turning tandem mass spectra into metabolite structure information. Nature Methods 16: 299–302."
        url: null

applications:
  - area: Proteomics
    title: Counting the proteins in a cell
    description: >-
      Digest a cell's proteins into peptides, separate them by liquid chromatography, and fragment each in
      turn: a single run identifies and quantifies thousands of proteins, and the deepest analyses cover
      most of the expressed proteome. It is how post-translational modifications are located, how protein
      complexes are mapped by what co-purifies, and how turnover is measured by feeding labelled amino
      acids.
    domain: biology
    field_id: structural-biology
    sources:
      - citation: "Aebersold, R. & Mann, M. (2016). Mass-spectrometric exploration of proteome structure and function. Nature 537: 347–355."
        url: null
  - area: Clinical screening
    title: A pinprick of blood, forty disorders
    description: >-
      Newborn screening tests a dried blood spot by tandem mass spectrometry for several dozen inherited
      metabolic disorders at once, by measuring the acylcarnitines and amino acids that accumulate when a
      particular enzyme is missing. One instrument replaced a panel of separate assays, and the conditions
      detected are ones where treatment within days prevents permanent harm.
    domain: biology
    field_id: biochemistry
    sources:
      - citation: "Chace, D. H., Kalas, T. A. & Naylor, E. W. (2003). Use of tandem mass spectrometry for multianalyte screening of dried blood specimens from newborns. Clinical Chemistry 49: 1797–1817."
        url: null
  - area: Geochronology and provenance
    title: Ratios rather than amounts
    description: >-
      Measuring the ratio of two isotopes rather than the quantity of an element supports dating, forensic
      provenance and dietary reconstruction, because the ratio is set by history rather than by how much
      sample was taken. The same instruments that date a rock establish where a sample of ivory, honey or
      cocaine came from.
    domain: physics
    field_id: radiometric-dating
    sources:
      - citation: "Hoefs, J. (2018). Stable Isotope Geochemistry, 8th edition. Springer."
        url: null

further_reading:
  - citation: "Grayson, M. A. (ed.) (2002). Measuring Mass: From Positive Rays to Proteins. Chemical Heritage Press."
    url: null
    note: A short illustrated history of the instrument, from Thomson's parabolas to biological applications.
  - citation: "Gross, J. H. (2017). Mass Spectrometry: A Textbook, 3rd edition. Springer."
    url: null
    note: The standard text; thorough on ionisation methods and on how formulas are assigned.
  - citation: "Fenn, J. B. (2003). Electrospray wings for molecular elephants. Angewandte Chemie International Edition 42: 3871–3894."
    url: null
    note: The Nobel lecture, and an unusually frank account of how long the idea took to be believed.
---

## A Physicist's Instrument, Repurposed

Mass spectrographs were built to separate isotopes, and that work belongs to [nuclear structure](/physics/nuclear-structure/). What chemistry did with the instrument was ask what happens when the particle being weighed is a molecule.

The immediate difficulty is that a molecule must be ionised to be weighed, and ionising it tends to break it. For forty years the standard method was to knock an electron off with a beam of fast electrons, which deposits far more energy than the ionisation requires and leaves the molecular ion unstable. It fragments.

That looked like a defect and turned out to be the method's second source of information. The fragments are not random: a molecule breaks preferentially at its weakest bonds, and certain rearrangements are strongly favoured. {{fig:mclafferty|Fred McLafferty}} described the best known in 1959 — a hydrogen atom migrating through a six-membered arrangement before the bond breaks — and a body of interpretive rules grew up around such patterns. A spectrum became a fingerprint, reproducible enough to be matched against a library, and in favourable cases readable as a structure.

The wartime driver was petroleum. Refineries needed to know the composition of hydrocarbon streams faster than distillation could tell them, and the instruments built for that purpose established the practice. Then {{fig:gohlke|Roland Gohlke}} and McLafferty connected a gas chromatograph to the inlet, so that components arriving one at a time from a column were each weighed and fragmented in turn. Retention time plus mass spectrum is a much stronger claim than either alone, which is why the combination became the standard of proof in forensic toxicology and doping control, and why an instrument of this kind was sent to Mars on the Viking landers.

## Fragments as a Language

The electron-ionisation spectra that dominated the field's first forty years were read rather than computed, and the reading rests on the fact that molecules do not break at random.

Three regularities do most of the work. A bond adjacent to a heteroatom breaks preferentially, because the resulting fragment is stabilised by the lone pair — so an amine or an ether announces itself by losing the group next to the nitrogen or oxygen. A molecule containing a carbonyl with a hydrogen four atoms away undergoes the rearrangement {{fig:mclafferty|McLafferty}} described in 1959, in which that hydrogen migrates through a six-membered arrangement before the bond breaks, giving a fragment of characteristic mass. And stable neutral molecules — water, carbon monoxide, ethene — are lost in preference to anything else, so a difference of 18, 28 or 44 between two peaks is read immediately.

Two counting rules come free. The *nitrogen rule*: a molecule of carbon, hydrogen, oxygen and nitrogen has an odd nominal mass only if it contains an odd number of nitrogens. And the isotope satellites: carbon is 1.1% carbon-13, so a compound with $n$ carbons shows a peak one mass unit above the main one with intensity about $1.1n$ per cent of it — which counts the carbons directly. Chlorine's isotopes in a 3:1 ratio and bromine's in nearly 1:1 make halogenated compounds unmistakable at a glance.

The whole of this was then mechanised. Spectra proved reproducible enough between instruments that a library search works: measure a spectrum, compare it against a few hundred thousand reference spectra, and rank the matches. That is how a gas chromatography–mass spectrometry run identifies a pesticide or a drug metabolite without a chemist interpreting anything — and it is also the method's limit, since a compound absent from the library cannot be identified this way at all, which is the problem the open question below describes in its modern form.

## A Closer Look: Weighing a Molecule Precisely Enough to Count Its Atoms

The most useful thing a mass spectrometer does is determine an elemental formula, and it works because atomic masses are not integers.

By definition carbon-12 weighs exactly 12. Everything else is slightly off: hydrogen is 1.00783, nitrogen 14.00307, oxygen 15.99491. The departures from whole numbers — the mass defects — are small, systematic, and different for each element, so different formulas with the same nominal mass have different exact masses.

Take the classic pair at nominal mass 28:

$$
\mathrm{CO} = 12.00000 + 15.99491 = 27.99491, \qquad \mathrm{N_2} = 2 \times 14.00307 = 28.00614.
$$

They differ by 0.01123 daltons, which as a fraction is

$$
\frac{0.01123}{28} = 4.0\times10^{-4} = 400 \text{ ppm}.
$$

Separating them needs a resolving power of

$$
\frac{m}{\Delta m} = \frac{28}{0.01123} = 2{,}500,
$$

which a modest instrument achieves. The two gases are chemically unrelated, both weigh 28 on a balance, and a mass spectrometer tells them apart without hesitation.

The harder and more valuable case is a molecule of 300 daltons, where the candidate formulas are numerous. The number of combinations of carbon, hydrogen, nitrogen and oxygen whose exact mass falls within a window $\Delta m$ grows in proportion to that window, so accuracy translates directly into how many candidates survive:

| Mass accuracy at $m/z$ 300 | Window | Candidate formulas (C, H, N, O) |
|---|---|---|
| 100 ppm | 0.03 Da | dozens |
| 10 ppm | 0.003 Da | several |
| 1 ppm | 0.0003 Da | typically one or two |

At one part per million, measuring a mass to the fourth decimal place, the formula is usually determined. That is what {{fig:makarov|Alexander Makarov}}'s analyser made routine: ions orbiting a spindle-shaped electrode oscillate at a frequency set by their mass, and taking the Fourier transform of the induced current gives masses to about a part per million on a bench instrument.

Two refinements come free with the same measurement. The *nitrogen rule* — an organic molecule with an odd nominal mass contains an odd number of nitrogens — and the count of double bonds and rings, which follows from the formula by arithmetic on the valences. And the isotope pattern: carbon is 1.1% carbon-13, so a molecule with 20 carbons shows a satellite peak at $M+1$ with about 22% of the main peak's intensity, which counts the carbons directly. Chlorine's two isotopes in a 3:1 ratio make a chlorinated compound unmistakable.

So a single accurate mass plus an isotope pattern yields a formula; fragmentation then constrains how those atoms are joined. What neither gives is the structure itself, which is why this field and [spectroscopic structure determination](/chemistry/spectroscopic-structure-determination/) are used together.

## Getting the Molecule In

Everything above requires a gas-phase ion, and for forty years that restricted the method to substances that could be vaporised — which excludes proteins, nucleic acids, polymers and most pharmaceuticals in their biological form. Heating them destroys them.

Two solutions arrived within four years, from different directions. {{fig:fenn|John Fenn}} took up a suggestion of Malcolm Dole's from 1968: push a solution through a fine needle held at several kilovolts, and it emerges as a mist of charged droplets. As each droplet evaporates its charge density rises until it breaks up, and eventually the molecules it carried are left as bare, *multiply* charged ions. The multiple charge is the crucial detail, because an instrument measures mass divided by charge — so a 50-kilodalton protein carrying 40 charges appears at 1,250, comfortably inside an ordinary range. Fenn published protein spectra in 1989 and titled his Nobel lecture "Electrospray wings for molecular elephants".

{{fig:karas|Michael Karas}} and {{fig:hillenkamp|Franz Hillenkamp}} solved it from the solid side. A laser pulse fired at a protein destroys it; fired at a protein embedded in a thousandfold excess of a small molecule chosen to absorb strongly at that wavelength, the matrix takes the energy, vaporises, and carries the analyte along intact. The method gives mainly singly charged ions and suits a time-of-flight analyser, and it is how a protein spot cut out of a gel is identified.

Together these turned mass spectrometry into the central instrument of molecular biology. Select a peptide, break it along its backbone, and the differences between successive fragment masses are the residue masses — so the spectrum spells out the sequence. {{fig:yates|John Yates}} and {{fig:eng|Jimmy Eng}}'s SEQUEST then made the interpretation a search: rather than deducing the sequence, compare the observed spectrum against spectra predicted from every peptide in a genome database. Thousands of proteins identified per run, which is what [proteomics](/biology/structural-biology/) consists of.

The limit is the one recorded above. For proteins the database exists, because genomes supply it. For metabolites there is no equivalent: an untargeted run on blood or soil detects tens of thousands of masses, most of which correspond to compounds that have never been purified, so no reference spectrum exists to match against — and the great majority of what the instrument sees stays unnamed.
