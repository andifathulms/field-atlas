---
id: chromatography
domain: chemistry
thread: analysis
name: Chromatography
parent_ids:
  - chemical-analysis
era_emerged: 1903 – 1990
core_question: How can a mixture of hundreds of similar substances be separated into its components, one after another, by making each one hesitate for a different length of time?

summary: |-
  Mikhail Tsvet poured a solution of leaf pigments through a column of chalk in 1906 and watched them separate into coloured bands, each pigment held back by a different amount. The principle generalises completely: give the components of a mixture a choice between a stationary phase that retains them and a mobile phase that carries them along, and anything that differs in that preference, however slightly, will emerge at a different time.

  What made it the dominant technique in chemistry is that the resolving power can be *bought*. Each element of the column acts as a separate equilibration, so a long column performs the separation thousands of times over, and the separation between two peaks improves as the square root of the number of such stages. A 30-metre capillary column with 150,000 stages separates components whose affinities differ by one per cent — which is how a petroleum fraction with hundreds of hydrocarbons, or the amino acids from a hydrolysed protein, became analysable at all. Archer Martin and Richard Synge's partition theory of 1941 earned a Nobel Prize, and their paper noted in passing that a gas would work as the mobile phase, which took eleven years for anyone to try.

key_ideas:
  - term: Two phases, one choice
    definition: >-
      A stationary phase that retains and a mobile phase that carries. Every component partitions between
      them continuously, so its speed down the column depends on the fraction of time it spends in each,
      and components that differ at all in that fraction separate.
    turning_point_id: tsvet-chromatography
  - term: Partition and the plate
    definition: >-
      Treating the column as a series of stages, each reaching equilibrium between the phases. The number
      of stages — theoretical plates — measures the column's power, and the separation between peaks grows
      as its square root.
    turning_point_id: martin-synge-partition
  - term: Retention time
    definition: >-
      When a component emerges. Under fixed conditions it identifies the substance, and the area under its
      peak measures how much there was — so one run gives both qualitative and quantitative answers.
    turning_point_id: gas-chromatography
  - term: Gradient elution
    definition: >-
      Changing the mobile phase during the run, so that strongly retained components are pushed off
      without the weakly retained ones emerging in a single rush. It extends the range of a single
      analysis by orders of magnitude.
    turning_point_id: hplc
  - term: Peak capacity
    definition: >-
      How many components a run can resolve, which is set by how many peak widths fit into the available
      time. It is a few hundred for a good single separation and a few thousand for two dimensions, against
      samples containing far more.
    turning_point_id: capillary-electrophoresis
  - term: Electro-driven separation
    definition: >-
      Using an electric field rather than pressure to move the sample, so the flow has no parabolic
      profile and the peaks stay sharp. In a narrow capillary it gives hundreds of thousands of plates and
      needs nanolitres of sample.
    turning_point_id: capillary-electrophoresis

turning_points:
  - id: tsvet-chromatography
    date: 1903 – 1906
    type: TECHNIQUE-INVENTED
    title: Tsvet separates the leaf pigments
    description: >-
      Mikhail Tsvet, a Russian-Italian botanist working in Warsaw, passes a petroleum-ether extract of
      leaves through a column packed with calcium carbonate and finds the pigments resolve into distinct
      coloured zones — chlorophylls and xanthophylls, several of each where one had been assumed. He names
      the method chromatography, writing in German and Russian in botanical journals, and the chemical
      community ignored it for thirty years, partly because his conclusion that chlorophyll is more than
      one substance was disputed.
    contested: false
    sources:
      - citation: "Tswett, M. (1906). Physikalisch-chemische Studien über das Chlorophyll: Die Adsorptionen. Berichte der Deutschen Botanischen Gesellschaft 24: 316–323."
        url: null
      - citation: "Ettre, L. S. & Sakodynskii, K. I. (1993). M. S. Tswett and the discovery of chromatography. Chromatographia 35: 223–231."
        url: null

  - id: martin-synge-partition
    date: 1941 – 1952
    type: MECHANISM-ESTABLISHED
    title: Partition chromatography and the theory of plates
    description: >-
      Archer Martin and Richard Synge, trying to separate amino acids from wool protein, replace adsorption
      with partition between two liquids, one held on a support, and develop the theory: the column behaves
      as a succession of equilibrations, and its resolving power is measured by how many. Their 1941 paper
      remarks that the mobile phase need not be a liquid — a gas would do — and nobody acted on it for
      eleven years. They shared the 1952 Nobel Prize in Chemistry.
    contested: false
    sources:
      - citation: "Martin, A. J. P. & Synge, R. L. M. (1941). A new form of chromatogram employing two liquid phases. Biochemical Journal 35: 1358–1368."
        url: null
      - citation: "Martin, A. J. P. (1952). The development of partition chromatography. Nobel Lecture."
        url: null

  - id: paper-chromatography
    date: 1944 – 1958
    type: TECHNIQUE-INVENTED
    title: A separation anyone could run
    description: >-
      Raphael Consden, Alfred Gordon and Archer Martin spot a mixture on filter paper and let solvent
      creep through it, then run a second solvent at right angles — a two-dimensional map in which each
      amino acid occupies its own position. The apparatus is a sheet of paper and a sealed tank. Within a
      decade it had been used to establish the amino acid composition of proteins, to read the products of
      partial hydrolysis in Sanger's insulin sequencing, and to identify the intermediates of
      photosynthesis.
    contested: false
    sources:
      - citation: "Consden, R., Gordon, A. H. & Martin, A. J. P. (1944). Qualitative analysis of proteins: a partition chromatographic method using paper. Biochemical Journal 38: 224–232."
        url: null
      - citation: "Sanger, F. (1952). The arrangement of amino acids in proteins. Advances in Protein Chemistry 7: 1–67."
        url: null

  - id: gas-chromatography
    date: 1952 – 1958
    type: TECHNIQUE-INVENTED
    title: Gas as the mobile phase
    description: >-
      Archer Martin and Anthony James finally try the suggestion of 1941, using nitrogen to carry volatile
      components through a packed column, and find the separations far faster and sharper than with a
      liquid. Marcel Golay then replaces the packing with a tube whose wall carries the stationary phase:
      an open capillary, metres to tens of metres long, with a hundred thousand theoretical plates and no
      pressure drop problem. Petroleum, flavours, pesticides and breath became analysable component by
      component.
    contested: false
    sources:
      - citation: "James, A. T. & Martin, A. J. P. (1952). Gas–liquid partition chromatography. Biochemical Journal 50: 679–690."
        url: null
      - citation: "Golay, M. J. E. (1958). Theory of chromatography in open and coated tubular columns. In Gas Chromatography: 36–55. Butterworths."
        url: null

  - id: hplc
    date: 1967 – 1980
    type: TECHNIQUE-INVENTED
    title: Pressure in place of gravity
    description: >-
      Gas chromatography requires the analyte to be volatile, which excludes most of biochemistry and
      pharmacy. Csaba Horváth, and then Jack Kirkland and others, show that a liquid separation can be made
      fast and sharp by packing the column with particles a few micrometres across and forcing solvent
      through under hundreds of atmospheres. With gradient elution, reversed-phase packings and ultraviolet
      detection, high-performance liquid chromatography became the standard method of the pharmaceutical
      industry, where it is used for identity, purity and stability alike.
    contested: false
    sources:
      - citation: "Horváth, C. G., Preiss, B. A. & Lipsky, S. R. (1967). Fast liquid chromatography. Analytical Chemistry 39: 1422–1428."
        url: null
      - citation: "Snyder, L. R., Kirkland, J. J. & Dolan, J. W. (2010). Introduction to Modern Liquid Chromatography, 3rd edition. Wiley."
        url: null

  - id: capillary-electrophoresis
    date: 1981 – 1998
    type: TECHNIQUE-INVENTED
    title: Separation by electric field in a hair-thin tube
    description: >-
      James Jorgenson and Krynn Lukacs run an electrophoretic separation inside a fused-silica capillary
      75 µm across, where the walls carry away the heat that would otherwise destroy the resolution, and
      obtain hundreds of thousands of plates from nanolitres of sample. Because the field drives the liquid
      with a flat rather than parabolic profile, peaks stay narrow. Applied to DNA fragments in a polymer
      sieve, the method replaced slab gels and became the separation stage of the sequencing machines that
      read the human genome.
    contested: false
    sources:
      - citation: "Jorgenson, J. W. & Lukacs, K. D. (1981). Zone electrophoresis in open-tubular glass capillaries. Analytical Chemistry 53: 1298–1302."
        url: null
      - citation: "Dovichi, N. J. & Zhang, J. (2000). How capillary electrophoresis sequenced the human genome. Angewandte Chemie International Edition 39: 4463–4468."
        url: null

open_problems:
  - id: peak-capacity-limit
    name: Separating a sample with more components than peaks
    status: open
    status_note: Open as of 2026; real samples routinely exceed the resolving power of the best available separations.
    description: >-
      A good single chromatographic run resolves a few hundred components; coupling two separations with
      different selectivities raises it to a few thousand. Blood plasma contains on the order of $10^{4}$
      metabolites and proteoforms, crude oil more than $10^{5}$ distinct compounds, and environmental
      samples an unknown number. Most peaks in such an analysis are therefore mixtures, and the statistics
      of random overlap make it worse: when the sample has as many components as the run has peak slots,
      the chance that any given peak is pure is small.
    why_hard: >-
      Resolution improves only as the square root of column length or time, so a tenfold gain costs a
      hundredfold in both. Two-dimensional methods multiply the capacity only when the two separations are
      genuinely independent, which real stationary phases are not. And the detector cannot report what the
      separation failed to divide.
    unlocks: >-
      Untargeted metabolomics, environmental screening for unknown contaminants and the characterisation of
      biological drugs all depend on resolving components that have never been listed in advance.
    sources:
      - citation: "Giddings, J. C. (1991). Unified Separation Science. Wiley."
        url: null
      - citation: "Stoll, D. R. & Carr, P. W. (2017). Two-dimensional liquid chromatography: a state of the art tutorial. Analytical Chemistry 89: 519–531."
        url: null

applications:
  - area: Molecular biology
    title: Reading a sequence by separating fragments
    description: >-
      Sanger's protein sequencing used two-dimensional paper chromatography to identify the fragments of
      partial hydrolysis, and his DNA sequencing method is a separation at its core: fragments differing by
      one nucleotide, resolved by length. The replacement of slab gels by capillary arrays is what made
      sequencing fast enough to finish a human genome, so a separation technique sits under the whole of
      genomics.
    domain: biology
    field_id: genomics
    sources:
      - citation: "Dovichi, N. J. & Zhang, J. (2000). How capillary electrophoresis sequenced the human genome. Angewandte Chemie International Edition 39: 4463–4468."
        url: null
  - area: Pharmaceutical quality
    title: What a purity specification means
    description: >-
      A medicine's specification is largely chromatographic: the active substance must give a peak at the
      right retention time, of the right area, with no impurity peak above a threshold that is often 0.1%
      or less. Stability testing is the same analysis repeated over months. The method is the regulatory
      object, validated and filed, which is why changing a column supplier is a documented event.
    sources:
      - citation: "International Council for Harmonisation (2005). Validation of Analytical Procedures: Q2(R1)."
        url: null
  - area: Doping and forensics
    title: Finding a nanogram in a litre
    description: >-
      Anti-doping and forensic toxicology depend on separating a trace compound from a biological matrix
      containing thousands of others, then identifying it unambiguously. Chromatography supplies the
      separation and mass spectrometry the identification; neither alone would stand up in a hearing,
      which is why the coupling of the two is the legal standard of proof.
    sources:
      - citation: "Thevis, M. & Schänzer, W. (2007). Current role of LC-MS(/MS) in doping control. Analytical and Bioanalytical Chemistry 388: 1351–1358."
        url: null

further_reading:
  - citation: "Ettre, L. S. & Zlatkis, A. (eds) (1979). 75 Years of Chromatography: A Historical Dialogue. Elsevier."
    url: null
    note: Reminiscences by the people who built the methods, including why gas chromatography waited eleven years.
  - citation: "Giddings, J. C. (1991). Unified Separation Science. Wiley."
    url: null
    note: All separation methods as one subject, with the peak-capacity argument made properly.
  - citation: "Snyder, L. R., Kirkland, J. J. & Dolan, J. W. (2010). Introduction to Modern Liquid Chromatography, 3rd edition. Wiley."
    url: null
    note: The practitioner's reference; the chapters on resolution and gradient design are the useful ones.
---

## Hesitation as a Separation

{{fig:tsvet|Mikhail Tsvet}} was trying to settle whether chlorophyll is one substance or several. He poured an extract of leaves, dissolved in petroleum ether, through a glass tube packed with powdered chalk, and the extract separated as it descended into distinct bands of green and yellow. Each pigment stuck to the chalk to a different degree, so each travelled at its own speed. He named the method after the colours — chromatography — and published in botanical journals, in German and Russian, in 1906.

Chemists did not notice for thirty years, which is one of the longer delays in the atlas. Part of the reason is that his conclusion was unpopular: the great Richard Willstätter held that chlorophyll was a single compound, and Tsvet's bands said otherwise. Part is that the technique looked like a botanist's trick rather than a general method.

It is in fact entirely general, because the only requirement is that components differ in how much they prefer one phase to another. Adsorption on a solid will do it; so will dissolving in a liquid held on a support, which is what {{fig:archer-martin|Archer Martin}} and {{fig:synge|Richard Synge}} used in 1941 when they needed to separate the amino acids from wool. Their contribution was as much theoretical as practical, and it is the reason the technique became quantitative.

## A Closer Look: Why Columns Are Thirty Metres Long

Martin and Synge's model treats the column as a sequence of discrete stages, each of which brings the two phases to equilibrium — theoretical plates, borrowed from distillation. A column of length $L$ with plate height $H$ has

$$
N = \frac{L}{H}
$$

plates, and a peak emerging from it has a width that grows as $\sqrt{N}$ while its retention grows as $N$. So the sharpness of a peak relative to its position improves as the square root of the plate count, and the resolution between two peaks is

$$
R = \frac{\sqrt{N}}{4} \cdot \frac{\alpha - 1}{\alpha} \cdot \frac{k}{1+k},
$$

where $\alpha$ is the ratio of the two components' affinities and $k$ their retention factor. Take the last factor as about 1, which it is for a well-chosen method, and ask what $N$ is needed for the minimum useful resolution, $R = 1$.

**Two components differing by 5% in affinity** ($\alpha = 1.05$):

$$
\sqrt{N} = \frac{4\alpha}{\alpha - 1} = \frac{4 \times 1.05}{0.05} = 84, \qquad N = 7{,}100.
$$

**Two components differing by 1%** ($\alpha = 1.01$):

$$
\sqrt{N} = \frac{4 \times 1.01}{0.01} = 404, \qquad N = 163{,}000.
$$

That is the whole explanation of the shape of the apparatus. Resolving a one per cent difference requires of order $10^{5}$ equilibrations, and since a packed column achieves a plate every few hundred micrometres, $10^{5}$ plates means tens of metres. A packed column that long cannot be used, because forcing gas through the packing requires a pressure drop that nothing survives. {{fig:golay|Marcel Golay}}'s open capillary solves exactly that: coat the stationary phase on the inside wall of a tube a quarter of a millimetre across and leave the middle empty, and 30 metres can be coiled into a palm-sized spiral with a modest pressure drop and 150,000 plates.

The square root is also the field's permanent frustration. To double the resolution, quadruple the plates: four times the length, four times the run time. The gain is real and it is expensive, which is why the other lever — changing $\alpha$ by choosing a different stationary phase — is pulled first. A tenfold improvement in selectivity costs nothing but a different column; a tenfold improvement in plate count costs a hundredfold in time.

That leads to the limit recorded above as an open problem. Peak capacity — the number of resolvable components — is roughly the run time divided by the average peak width, which for a good gas chromatogram is a few hundred. Blood plasma contains of order $10^{4}$ small molecules. When a sample has more components than the run has slots, most peaks are mixtures, and the statistics of random arrival make it worse than a naive count suggests: filling 200 slots with 200 randomly placed components leaves well under half of them pure.

## What It Was Used For

The first great application was biological, and it used the least impressive apparatus in the field. {{fig:consden|Raphael Consden}}, {{fig:gordon|Alfred Gordon}} and Martin spotted a protein hydrolysate on filter paper, let one solvent creep through it, dried it, and ran a second solvent at right angles. Every amino acid lands at its own coordinates, and the result is a map that can be read off by eye. For a sheet of paper and two jars of solvent, the method determined the amino acid composition of proteins, identified the intermediates of photosynthesis, and supplied {{fig:sanger|Sanger}} with the means to identify the fragments in his insulin sequencing.

Then came the two instrumental versions, each opening a class of compounds the other could not reach. Gas chromatography, from 1952, is fast and extraordinarily resolving and requires the analyte to be volatile — excellent for hydrocarbons, flavours, pesticides and solvents, useless for a protein or most drugs. {{fig:horvath|Csaba Horváth}}'s high-performance liquid chromatography, from 1967, works for anything that dissolves, by packing the column with particles a few micrometres across and pushing solvent through at hundreds of atmospheres. The pharmaceutical industry runs on it: a drug's identity, its purity and its stability are all defined by what a specified liquid chromatographic method shows.

{{fig:jorgenson|James Jorgenson}} added the last variant in 1981 by replacing pressure with an electric field inside a capillary 75 micrometres across. The field drives the liquid with a flat velocity profile rather than the parabolic one that pressure produces, so the peaks do not smear, and the narrow bore carries away the heat that would otherwise wreck the separation. Hundreds of thousands of plates, from nanolitres of sample. Loaded with a polymer sieve and DNA fragments, arrays of such capillaries replaced slab gels in sequencing machines — which is how a separation technique ended up underneath [genomics](/biology/genomics/).

What chromatography cannot do is say what a peak *is*. It reports a time, and a time identifies a compound only by comparison with a standard that somebody has already obtained. Coupling the separation to an instrument that weighs each component as it emerges is [mass spectrometry](/chemistry/mass-spectrometry/), and the combination is the most powerful analytical tool chemistry has.
