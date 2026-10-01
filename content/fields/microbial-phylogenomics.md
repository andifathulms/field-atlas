---
id: microbial-phylogenomics
domain: biology
thread: phylogeny
name: Microbial Phylogenomics
parent_ids:
  - phylogenetics
  - microbiology
era_emerged: 1985 – 2020
core_question: How can the ancestry of organisms be read when almost none of them can be grown, and when their genes move sideways between lineages?

summary: |-
  For a century microbiology could study only what would grow on a plate, and classification rested on what a colony looked like and what sugars it fermented. Both limits fell between 1985 and 2005. Ribosomal RNA could be sequenced straight out of seawater or soil, with no culture step, and it showed that the organisms known to microbiologists were a sliver of what is there. Then whole communities were shotgun-sequenced, and genomes could be assembled for organisms nobody had ever seen.

  The results broke two expectations. The number of major bacterial lineages roughly doubled, and most of the new ones have no cultured representative and no known physiology. And the tree itself came under suspicion: genes move between unrelated microbes often enough that different genes give different histories, which raises the question of what a microbial lineage even is. The current best reading of the deepest branches puts eukaryotes *inside* the archaea, which would mean there are two primary domains of life rather than three.

key_ideas:
  - term: The great plate count anomaly
    definition: >-
      Direct microscopic counts of cells in a water or soil sample exceed the number of colonies
      that grow from it by two to three orders of magnitude. The gap is not a technical slip; it
      is the normal state of affairs, and it means culture-based microbiology sampled under one
      per cent of its subject.
    turning_point_id: great-plate-count-anomaly
  - term: Culture-independent survey
    definition: >-
      Extract DNA from an environmental sample, amplify a gene that every organism has — the
      small-subunit ribosomal RNA gene — sequence the products, and infer who was present from
      the sequences alone. The organism never has to be grown, or even seen.
    turning_point_id: environmental-rrna
  - term: Horizontal gene transfer
    definition: >-
      Genes passing between lineages rather than from parent to offspring, by conjugation,
      viruses or uptake of free DNA. In microbes it is common enough that a genome is a mosaic
      with several histories, and a single tree cannot represent all of them.
    turning_point_id: web-of-life
  - term: Metagenome-assembled genome
    definition: >-
      A genome reconstructed by shotgun-sequencing a whole community and sorting the fragments
      into bins by composition and abundance. It is a consensus over a population rather than a
      clone, and it is how most known microbial genomes were obtained.
    turning_point_id: metagenomics
  - term: Candidate phylum
    definition: >-
      A deep lineage known only from sequences, with no cultured member and no formal name under
      the bacteriological code. Many have reduced genomes and appear to live attached to other
      cells.
    turning_point_id: candidate-phyla-radiation
  - term: Two domains or three
    definition: >-
      Whether archaea and eukaryotes are sister groups, giving three domains, or eukaryotes
      branch from within the archaea, giving two. The second reading makes our own ancestry
      archaeal.
    turning_point_id: asgard-archaea

turning_points:
  - id: great-plate-count-anomaly
    date: 1985
    type: DISCOVERY
    title: The great plate count anomaly
    description: >-
      James Staley and Allan Konopka name a discrepancy microbiologists had lived with for
      decades: counting cells in a natural sample under the microscope gives a number a hundred
      to a thousand times larger than the number of colonies the same sample produces on rich
      medium. Whatever the uncultured majority are doing, standard microbiology had no access to
      them, and no way to know what it was missing.
    contested: false
    sources:
      - citation: "Staley, J. T. & Konopka, A. (1985). Measurement of in situ activities of nonphotosynthetic microorganisms in aquatic and terrestrial habitats. Annual Review of Microbiology 39: 321–346."
        url: null
      - citation: "Hugenholtz, P., Goebel, B. M. & Pace, N. R. (1998). Impact of culture-independent studies on the emerging phylogenetic view of bacterial diversity. Journal of Bacteriology 180(18): 4765–4774."
        url: null

  - id: environmental-rrna
    date: 1986 – 1991
    type: TECHNIQUE-INVENTED
    title: Sequencing what cannot be grown
    description: >-
      Norman Pace proposes that the ribosomal RNA gene be sequenced directly from environmental
      DNA, skipping culture entirely, and his group does it. In 1990 Stephen Giovannoni and
      colleagues clone ribosomal genes from Sargasso Sea water and find an abundant bacterial
      group, later called SAR11, that no one had cultured — it turned out to be among the most
      numerous organisms on Earth. The method converted microbial diversity from a catalogue of
      laboratory strains into a survey of the planet.
    contested: false
    sources:
      - citation: "Giovannoni, S. J., Britschgi, T. B., Moyer, C. L. & Field, K. G. (1990). Genetic diversity in Sargasso Sea bacterioplankton. Nature 345: 60–63."
        url: null
      - citation: "Pace, N. R. (1997). A molecular view of microbial diversity and the biosphere. Science 276: 734–740."
        url: null

  - id: web-of-life
    date: 1999 – 2002
    type: CONSENSUS-OVERTURNED
    title: The tree becomes a web
    description: >-
      As complete microbial genomes accumulated, it became clear that large fractions of them had
      arrived from elsewhere: genes whose nearest relatives sit in distant lineages, whole operons
      shared between unrelated organisms living in the same place. W. Ford Doolittle argues that
      a single universal tree may be the wrong representation for early evolution, and that a
      reticulated web is closer to the truth. The claim was resisted, and a core of
      rarely transferred genes — those of the ribosome and of transcription — was identified as
      still tree-like.
    contested: true
    contested_note: >-
      How much of microbial evolution is reticulate is unsettled. Estimates of the fraction of
      genes in a typical bacterial genome that were acquired horizontally range from a few per
      cent to a third, depending on the detection method, and whether that makes the tree a bad
      model or a good model with noise is partly a question about what a tree is being used for.
    sources:
      - citation: "Doolittle, W. F. (1999). Phylogenetic classification and the universal tree. Science 284: 2124–2129."
        url: null
      - citation: "Puigbò, P., Wolf, Y. I. & Koonin, E. V. (2009). Search for a 'tree of life' in the thicket of the phylogenetic forest. Journal of Biology 8: 59."
        url: null

  - id: metagenomics
    date: 2004
    type: TECHNIQUE-INVENTED
    title: Sequencing whole communities
    description: >-
      Two papers show that shotgun sequencing can be applied to an entire community at once.
      Gene Tyson and Jillian Banfield's group reconstructs near-complete genomes of the few
      species in an acid mine drainage biofilm; Craig Venter's group sequences Sargasso Sea
      water, reporting over a billion base pairs and more than a million genes, most of them
      new. Genomes could now be assembled for organisms that had never been isolated, named or
      seen.
    contested: false
    sources:
      - citation: "Tyson, G. W. et al. (2004). Community structure and metabolism through reconstruction of microbial genomes from the environment. Nature 428: 37–43."
        url: null
      - citation: "Venter, J. C. et al. (2004). Environmental genome shotgun sequencing of the Sargasso Sea. Science 304: 66–74."
        url: null

  - id: candidate-phyla-radiation
    date: 2013 – 2016
    type: DISCOVERY
    title: Half the tree has never been cultured
    description: >-
      Groundwater filtered to exclude ordinary cells yields genomes of bacteria with tiny
      genomes, no biosynthetic pathways for most of what they need, and no cultured relatives:
      the candidate phyla radiation. In 2016 Laura Hug and colleagues publish a tree of life
      built from over 3,000 genomes, more than half of its bacterial lineages represented only
      by sequences. The picture of bacterial diversity doubled in a decade, and the new half is
      mostly unstudied physiology.
    contested: false
    sources:
      - citation: "Brown, C. T. et al. (2015). Unusual biology across a group comprising more than 15% of domain Bacteria. Nature 523: 208–211."
        url: null
      - citation: "Hug, L. A. et al. (2016). A new view of the tree of life. Nature Microbiology 1: 16048."
        url: null

  - id: asgard-archaea
    date: 2015 – 2020
    type: DISCOVERY
    title: Our own branch inside the archaea
    description: >-
      Metagenomes from marine sediment near a hydrothermal vent yield Lokiarchaeota, archaea
      carrying genes previously thought exclusive to eukaryotes: actin relatives, ESCRT
      components, small GTPases. Further Asgard lineages followed, and in 2020 Hiroyuki Imachi's
      group cultured one after twelve years, finding a cell with branching protrusions.
      Phylogenies that include them place eukaryotes *within* the Asgard archaea, implying two
      primary domains rather than three.
    contested: true
    contested_note: >-
      The two-domain tree is now the majority view but not settled. Its opponents argue that
      archaea evolve fast and unevenly, so eukaryotes may be drawn artificially into the archaeal
      radiation by the same long-branch effects that trouble every deep phylogeny, and that the
      eukaryote-like genes could reflect transfer rather than ancestry. Which Asgard lineage is
      closest to us, and whether the host was archaeal or a third thing, remain open.
    sources:
      - citation: "Spang, A. et al. (2015). Complex archaea that bridge the gap between prokaryotes and eukaryotes. Nature 521: 173–179."
        url: null
      - citation: "Imachi, H. et al. (2020). Isolation of an archaeon at the prokaryote–eukaryote interface. Nature 577: 519–525."
        url: null
      - citation: "Williams, T. A., Cox, C. J., Foster, P. G., Szöllősi, G. J. & Embley, T. M. (2020). Phylogenomics provides robust support for a two-domains tree of life. Nature Ecology & Evolution 4: 138–147."
        url: null

open_problems:
  - id: root-of-the-universal-tree
    name: Where the universal tree is rooted
    status: open
    status_note: Open as of 2026; the two-domain topology is favoured, but the root's position within it is not fixed.
    description: >-
      A tree without a root has no direction, and nothing outside life can serve as an outgroup
      for all of life. The root has been placed on the bacterial branch, between bacteria and
      archaea, and inside the bacteria, using ancient gene duplications, models of gene gain and
      loss, and arguments from which features are likely to be primitive. No placement commands
      agreement.
    why_hard: >-
      The events in question are some 3.5 billion years old, the sequences are saturated, and
      every candidate outgroup is a duplicated gene whose own history must be assumed. Horizontal
      transfer in the deep past erases the distinction between inheritance and acquisition for
      exactly the genes that would be most informative.
    unlocks: >-
      What the last universal common ancestor was like — whether it was a cell, a community, or
      something less tidy — and therefore what the earliest biology looked like.
    sources:
      - citation: "Gogarten, J. P. et al. (1989). Evolution of the vacuolar H+-ATPase: implications for the origin of eukaryotes. PNAS 86: 6661–6665."
        url: null
      - citation: "Coleman, G. A. et al. (2021). A rooted phylogeny resolves early bacterial evolution. Science 372: eabe0511."
        url: null

  - id: microbial-dark-matter-function
    name: What the uncultured majority does
    status: open
    status_note: Open as of 2026; most candidate phyla still have no characterised member.
    description: >-
      Thousands of lineages are known only as genomes. Their gene content suggests dependence on
      other organisms — missing pathways for amino acids, nucleotides and lipids — but for most of
      them nobody knows the host, the exchange, or the role in any cycle of matter. Several
      attempts to culture them have taken a decade each.
    why_hard: >-
      A genome lists capacities, not behaviour, and roughly a third of the genes in these organisms
      match nothing characterised. Growing an organism whose requirements are unknown is a search
      over media, partners and conditions with no gradient to follow.
    unlocks: >-
      The accounting of the planet's carbon, nitrogen and sulphur cycles, which currently assigns
      fluxes to organisms whose metabolism is inferred from sequence alone.
    sources:
      - citation: "Rinke, C. et al. (2013). Insights into the phylogeny and coding potential of microbial dark matter. Nature 499: 431–437."
        url: null
      - citation: "Lewis, W. H., Tahon, G., Geesink, P., Sousa, D. Z. & Ettema, T. J. G. (2021). Innovations to culturing the uncultured microbial majority. Nature Reviews Microbiology 19: 225–240."
        url: null

applications:
  - area: Biotechnology
    title: Gene editors found in groundwater
    description: >-
      CRISPR systems are bacterial defences, and most of the known variants were discovered not in
      cultures but in metagenomes. CasX, found in genomes assembled from groundwater sediment, is
      compact enough to be delivered where Cas9 will not fit, and the Cas12 and Cas13 families
      came from similar surveys. The uncultured majority is a parts catalogue that nobody had been
      able to open.
    sources:
      - citation: "Burstein, D. et al. (2017). New CRISPR–Cas systems from uncultivated microbes. Nature 542: 237–241."
        url: null
  - area: Biogeochemistry
    title: Who runs the nitrogen cycle
    description: >-
      Culture-independent surveys overturned the textbook account of nitrogen in the sea twice.
      Ammonia-oxidising archaea, unknown before environmental sequencing, turned out to be among
      the most abundant organisms in the ocean and to perform a step attributed to bacteria; and
      anaerobic ammonium oxidation, carried out by a bacterial group with no cultured
      representative when it was found, accounts for a large share of the nitrogen leaving the
      ocean.
    sources:
      - citation: "Könneke, M. et al. (2005). Isolation of an autotrophic ammonia-oxidizing marine archaeon. Nature 437: 543–546."
        url: null
      - citation: "Kuypers, M. M. M. et al. (2003). Anaerobic ammonium oxidation by anammox bacteria in the Black Sea. Nature 422: 608–611."
        url: null
  - area: Conservation
    title: Surveying by the DNA an ecosystem sheds
    description: >-
      The same logic applied to larger organisms gives environmental DNA surveys: filter a litre of
      river water, amplify a standard marker, and list the fish, amphibians and invertebrates
      upstream without catching any of them. It has become a standard monitoring method, with the
      same interpretive problems — what the reference library lacks, the survey cannot report.
    sources:
      - citation: "Deiner, K. et al. (2017). Environmental DNA metabarcoding: transforming how we survey animal and plant communities. Molecular Ecology 26: 5872–5895."
        url: null

further_reading:
  - citation: "Pace, N. R. (1997). A molecular view of microbial diversity and the biosphere. Science 276: 734–740."
    url: null
    note: The programmatic paper for culture-independent microbiology, still the clearest statement of why it mattered.
  - citation: "Doolittle, W. F. (1999). Phylogenetic classification and the universal tree. Science 284: 2124–2129."
    url: null
    note: The case that the tree is the wrong picture for microbial history.
  - citation: "Quince, C., Walker, A. W., Simpson, J. T., Loman, N. J. & Segata, N. (2017). Shotgun metagenomics, from sampling to analysis. Nature Biotechnology 35: 833–844."
    url: null
    note: How metagenome-assembled genomes are actually produced, and where they go wrong.
---

## The Ninety-Nine Per Cent

Microbiology was built on the plate. Robert Koch's solid media let a single cell be grown into a visible, pure colony, and for a century that technique defined what a microbe was: something you could isolate, feed and describe. The trouble was visible from early on and named in 1985 by {{fig:james-staley|James Staley}} and {{fig:allan-konopka|Allan Konopka}}. Stain a millilitre of seawater and count the cells under a microscope and you find hundreds of thousands. Spread the same millilitre on rich agar and you get a few hundred colonies. The ratio is roughly a thousand to one, and it is normal — the same gap appears in soil, in sediment, in the gut.

So the organisms in the textbooks were the ones that happened to like laboratory conditions. {{fig:norman-pace|Norman Pace}} drew the conclusion that mattered: if a cell cannot be grown, sequence it anyway. The ribosomal RNA gene is present in every organism, changes slowly enough to compare across the whole tree, and — crucially — can be amplified from DNA extracted straight out of mud. {{fig:woese|Carl Woese}} had already used it to show that the archaea are a lineage apart, work described in [evolutionary biology](/biology/evolutionary-biology/). Pace's move was to point the same molecule at environments instead of strains.

In 1990 {{fig:giovannoni|Stephen Giovannoni}} cloned ribosomal genes from Sargasso Sea water and found an abundant group with no cultured member. SAR11 is now thought to be among the most numerous organisms on the planet, and it was not isolated until 2002.

## Reading Genomes Nobody Owns

Amplifying one gene tells you who is present. It says nothing about what they do. The next step was to sequence everything in a sample at once and reassemble genomes out of the mixture. In 2004 {{fig:jillian-banfield|Jillian Banfield}}'s group did this for an acid mine drainage biofilm, simple enough — five dominant organisms — that near-complete genomes came out, and {{fig:venter|Craig Venter}}'s group did it for Sargasso seawater, returning more than a billion base pairs and over a million genes, most without any known relative.

Metagenome-assembled genomes are a strange kind of object. They are consensus sequences over a population rather than a clone; they can be contaminated by binning errors; they describe organisms that have never been in a flask. They are also now the majority of known microbial genomes, and they revealed a large part of the tree that culture had missed entirely. Filtering groundwater to remove anything cell-sized left a residue of bacteria with genomes under a megabase, lacking the pathways to make their own amino acids and nucleotides, belonging to dozens of lineages as distinct from each other as the familiar phyla are. {{fig:laura-hug|Laura Hug}}'s 2016 tree of life, built from over 3,000 genomes, has more than half of its bacterial branches populated only by sequences.

## The Tree, the Web, and Two Domains

Whole genomes brought a harder problem than diversity. Genes move sideways in microbes. A gene for antibiotic resistance, for a metabolic step, for a toxin, can pass between unrelated organisms by conjugation, by virus, or by uptake of DNA from the water, and once arrived it is inherited normally. {{fig:ford-doolittle|W. Ford Doolittle}} argued in 1999 that if this happens often enough, the universal tree is not an approximation to microbial history but the wrong shape for it. A genome is a mosaic, and each tile may have its own ancestry.

The partial reply is that not all genes travel equally. Those of the ribosome and the transcription machinery are embedded in so many interactions that a transferred copy rarely works, and trees built from them agree with one another far more than chance allows. That core is what deep phylogenies use, and it is why a universal tree is still drawn — with the understanding that it is the history of a conserved core, not of every gene in any genome.

That core tree then produced the field's largest surprise. In 2015, metagenomes from marine sediment near Loki's Castle, a vent field on the Mid-Atlantic Ridge, yielded archaea carrying genes that were supposed to be eukaryotic: relatives of actin, components of the membrane-remodelling ESCRT machinery, small GTPases. More Asgard lineages followed, and in 2020 one was cultured, after twelve years of coaxing, as a small cell with branching protrusions. When these organisms are included, phylogenies place eukaryotes not as a sister group to the archaea but *inside* them. If that is right, there are two primary domains of life, not three, and our own lineage is a branch of the archaea that acquired a bacterium — the event discussed under [endosymbiosis](/biology/evolutionary-biology/).

## A Closer Look: Why the Rare Biosphere Appeared Only When Reads Got Cheap

Take a millilitre of coastal seawater. Direct counts give roughly $5 \times 10^{5}$ cells; plating gives a few hundred colonies, so culture reaches of order

$$
\frac{5 \times 10^{2}}{5 \times 10^{5}} = 0.1\%.
$$

Now sequence instead. A Sanger-era survey cloned perhaps $n = 100$ ribosomal genes. If a taxon makes up a fraction $f$ of the community, the chance that at least one of $n$ independent reads comes from it is

$$
P(\text{detected}) = 1 - (1-f)^{n}.
$$

For a taxon at 10% abundance and 100 clones, detection is a certainty: $1 - 0.9^{100} \approx 1 - 3 \times 10^{-5}$. At 1%, $1 - 0.99^{100} = 0.63$ — better than a coin flip. At 0.1%,

$$
1 - 0.999^{100} = 0.095,
$$

so nine times out of ten the organism is simply absent from the result. A survey of a hundred clones is blind below about one part in a thousand, and it is blind in a way that leaves no trace: the output looks like a complete community of a dozen abundant types.

Modern amplicon sequencing returns $n = 10^{5}$ reads from one sample. For a taxon at $f = 10^{-4}$ the expected number of reads is $nf = 10$, and

$$
P(\text{detected}) = 1 - (1 - 10^{-4})^{10^{5}} \approx 1 - e^{-10} = 0.99995.
$$

Three orders of magnitude deeper, and the long tail becomes visible: thousands of low-abundance types in a single sample, the "rare biosphere". Nothing about the ocean changed between 1990 and 2006. The detection limit moved, and with it the apparent shape of microbial diversity — which is a warning worth carrying. Every claim about how many kinds of organism are present is a claim about sampling depth, and the curve of new types against reads has, in most environments, not yet flattened.

The scale underneath these numbers is worth stating plainly. Estimates put the number of bacterial and archaeal cells on Earth at $4$ to $6 \times 10^{30}$, with a large fraction in sediments and the deep subsurface, and bacteria alone hold some 70 gigatonnes of carbon, about fifteen times the mass of all animals. Most of that is in lineages described in the last twenty years, by people who never saw a cell of it.

## What Counts as a Lineage

The practical response to all this has been to stop asking what a microbial species is and to define an operational unit instead. Two genomes sharing more than about 95% average nucleotide identity are treated as one species; ribosomal sequences above 98.7% identity likewise. The Genome Taxonomy Database rebuilt bacterial and archaeal classification on these rules in 2018, renaming a great many organisms and producing a taxonomy in which ranks are defined by evolutionary distance rather than by judgement.

It works, and it is an admission. The units are stipulated, not discovered, which is the species problem of [systematics](/biology/systematics/) in its sharpest form: for most of life on Earth, the kinds are drawn by threshold. What the resulting lineages have done over geological time — whether they diversify, saturate, or turn over — is a question the fossil record can barely address for microbes, and that [macroevolution](/biology/macroevolution/) answers mainly for animals and plants.
