---
id: phylogenetics
domain: biology
thread: phylogeny
name: Phylogenetics
parent_ids:
  - systematics
  - evolutionary-biology
era_emerged: 1950 – 2001
core_question: Given only the organisms alive now, how can the branching order of their ancestry be reconstructed, and how confident may we be in the answer?

summary: |-
  If all life descends from common ancestors, there is one true tree, and every classification is a hypothesis about it. Phylogenetics is the business of inferring that tree from evidence — originally from anatomy, since the 1960s mostly from sequences — and of saying how much of the inferred tree is supported by the data and how much is an artefact of the method.

  Two ideas made it a science rather than a craft. Willi Hennig's, in 1950, was that only shared *novelties* carry information about grouping: the fact that birds and crocodiles both have scales says nothing, because their common ancestor had scales too. Emile Zuckerkandl and Linus Pauling's, in 1962, was that molecules are documents — the number of differences between two proteins measures the time since their lineages parted. From there the problem became statistical, and in some of its forms provably hard: the number of possible trees for fifty species exceeds the number of atoms in the Earth.

key_ideas:
  - term: Synapomorphy
    definition: >-
      A character state that is new in the common ancestor of a group and inherited by its
      descendants. Only these group things. A state retained unchanged from a remoter ancestor —
      a plesiomorphy — is shared by too many organisms to delimit anything.
    turning_point_id: hennig-cladistics
  - term: Monophyly
    definition: >-
      A group containing an ancestor and *all* of its descendants. On this criterion birds belong
      inside the reptiles, and "reptiles excluding birds" is not a group. Groups that omit some
      descendants are paraphyletic; groups assembled from convergence are polyphyletic.
    turning_point_id: hennig-cladistics
  - term: Molecular clock
    definition: >-
      Over long intervals, substitutions in a protein or gene accumulate at a roughly steady
      rate, so sequence difference is a measure of elapsed time. The rate differs between genes
      and between lineages, which is what makes calibration the hard part.
    turning_point_id: molecular-clock
  - term: Parsimony
    definition: >-
      Prefer the tree that requires the fewest character changes. It needs no model of
      substitution, which is its appeal, and it is biased when change is fast, which is its
      weakness.
    turning_point_id: parsimony-methods
  - term: Likelihood and posterior support
    definition: >-
      Specify a probabilistic model of substitution, and every tree acquires a likelihood: the
      probability of the observed sequences given that tree. Maximising it selects a tree;
      sampling from the posterior with Markov chain Monte Carlo attaches a probability to every
      branch.
    turning_point_id: bayesian-phylogenetics
  - term: Long-branch attraction
    definition: >-
      Two rapidly evolving lineages accumulate so many changes that some coincide, and parsimony
      reads the coincidences as shared novelty. The two are drawn together on the tree however
      distant they really are, and adding more data makes the error more confident, not less.
    turning_point_id: felsenstein-likelihood

turning_points:
  - id: hennig-cladistics
    date: 1950 – 1966
    type: CONSENSUS-OVERTURNED
    title: Hennig's phylogenetic systematics
    description: >-
      Willi Hennig, an entomologist who wrote much of his theory as a prisoner of war, argues
      that classification must express branching order and nothing else, and that branching order
      can only be inferred from shared derived characters. Published in German in 1950 and
      largely ignored outside it, the argument reached the English-speaking world in 1966 and
      within fifteen years had displaced both phenetics and evolutionary taxonomy. It is the
      reason modern classifications contain no Reptilia in the old sense.
    contested: false
    sources:
      - citation: "Hennig, W. (1950). Grundzüge einer Theorie der phylogenetischen Systematik. Deutscher Zentralverlag, Berlin."
        url: null
      - citation: "Hennig, W. (1966). Phylogenetic Systematics. University of Illinois Press."
        url: null

  - id: molecular-clock
    date: 1962 – 1965
    type: DISCOVERY
    title: Molecules as documents of history
    description: >-
      Emile Zuckerkandl and Linus Pauling compare haemoglobins from several mammals and find that
      the number of amino-acid differences between two species is roughly proportional to the time
      since they diverged, as estimated from fossils. They propose that a protein is a
      document of evolutionary history and that its rate of change is a clock. The claim was
      received badly by palaeontologists and morphologists, and it turned out to be
      approximately right, with rate variation that took thirty years to model.
    contested: false
    sources:
      - citation: "Zuckerkandl, E. & Pauling, L. (1965). Molecules as documents of evolutionary history. Journal of Theoretical Biology 8(2): 357–366."
        url: null
      - citation: "Morgan, G. J. (1998). Emile Zuckerkandl, Linus Pauling, and the molecular evolutionary clock, 1959–1965. Journal of the History of Biology 31: 155–178."
        url: null

  - id: parsimony-methods
    date: 1965 – 1971
    type: TECHNIQUE-INVENTED
    title: Trees computed from characters
    description: >-
      Joseph Camin and Robert Sokal propose choosing the tree that requires the fewest character
      changes, and test it on artificial organisms whose true history they knew. Margaret Dayhoff
      and Richard Eck publish the first protein phylogeny computed this way in 1966; Walter Fitch
      and Emanuel Margoliash build trees from distance matrices in 1967; and Fitch's algorithm of
      1971 scores any tree against any alignment in one pass. Inference of trees becomes
      something a computer does.
    contested: false
    sources:
      - citation: "Camin, J. H. & Sokal, R. R. (1965). A method for deducing branching sequences in phylogeny. Evolution 19: 311–326."
        url: null
      - citation: "Fitch, W. M. & Margoliash, E. (1967). Construction of phylogenetic trees. Science 155: 279–284."
        url: null
      - citation: "Fitch, W. M. (1971). Toward defining the course of evolution: minimum change for a specific tree topology. Systematic Zoology 20: 406–416."
        url: null

  - id: felsenstein-likelihood
    date: 1978 – 1985
    type: TECHNIQUE-INVENTED
    title: Likelihood, inconsistency and the bootstrap
    description: >-
      Joseph Felsenstein shows in 1978 that parsimony can be statistically inconsistent: for
      certain branch lengths it converges on the wrong tree as data accumulate, because
      coincidental changes in two fast lineages mimic shared ancestry. In 1981 he gives a
      practical algorithm for the likelihood of a tree under an explicit substitution model, and
      in 1985 he adapts the bootstrap to phylogenies, so that each branch carries a number saying
      how often it survives resampling of the sites. Trees acquire error bars.
    contested: false
    sources:
      - citation: "Felsenstein, J. (1978). Cases in which parsimony or compatibility methods will be positively misleading. Systematic Zoology 27: 401–410."
        url: null
      - citation: "Felsenstein, J. (1981). Evolutionary trees from DNA sequences: a maximum likelihood approach. Journal of Molecular Evolution 17: 368–376."
        url: null
      - citation: "Felsenstein, J. (1985). Confidence limits on phylogenies: an approach using the bootstrap. Evolution 39: 783–791."
        url: null

  - id: bayesian-phylogenetics
    date: 1996 – 2001
    type: TECHNIQUE-INVENTED
    title: Sampling trees with Markov chains
    description: >-
      Bruce Rannala and Ziheng Yang, Bob Mau and Michael Newton, and Brian Larget and Donald
      Simon independently put phylogenetics in a Bayesian frame: treat the tree as a parameter,
      place a prior on it, and sample the posterior with Markov chain Monte Carlo. John
      Huelsenbeck and Fredrik Ronquist's MrBayes, released in 2001, made it routine. The method
      gives a posterior probability for every clade and can carry relaxed clocks, fossil
      calibrations and partitioned models at the same time.
    contested: false
    sources:
      - citation: "Rannala, B. & Yang, Z. (1996). Probability distribution of molecular evolutionary trees. Journal of Molecular Evolution 43: 304–311."
        url: null
      - citation: "Huelsenbeck, J. P. & Ronquist, F. (2001). MRBAYES: Bayesian inference of phylogenetic trees. Bioinformatics 17(8): 754–755."
        url: null

  - id: gene-tree-species-tree
    date: 1997 – 2010
    type: CONSENSUS-OVERTURNED
    title: One species tree, many gene trees
    description: >-
      Wayne Maddison points out that different genes in the same organisms legitimately give
      different trees. Ancestral polymorphism can be sorted into descendants in an order that
      does not follow the species branching — incomplete lineage sorting — and the shorter the
      interval between speciations, the more often it happens. Concatenating genes to get a
      single answer can then be confidently wrong. Methods that model the coalescent inside the
      species tree followed, and genome-scale data made the problem unavoidable rather than
      theoretical.
    contested: false
    sources:
      - citation: "Maddison, W. P. (1997). Gene trees in species trees. Systematic Biology 46(3): 523–536."
        url: null
      - citation: "Degnan, J. H. & Rosenberg, N. A. (2009). Gene tree discordance, phylogenetic inference and the multispecies coalescent. Trends in Ecology & Evolution 24(6): 332–340."
        url: null

open_problems:
  - id: animal-root
    name: The first split among animals
    status: open
    status_note: Open as of 2026; the answer still changes with the substitution model chosen.
    description: >-
      Are sponges or comb jellies the sister group to all other animals? The two answers imply
      opposite histories for nerves and muscles: either they arose once after sponges branched
      off, or they arose early and were lost in sponges. Analyses of the same genomes support
      either topology depending on which genes are included, how saturated sites are treated, and
      which outgroup is used.
    why_hard: >-
      The split is more than 600 million years old and was probably rapid, so the informative
      signal is a thin layer of substitutions under 600 million years of subsequent noise.
      Comb jellies evolve fast, which makes them a textbook candidate for long-branch attraction,
      and the models used to correct for it are themselves what the answer depends on.
    unlocks: >-
      The order in which nervous systems, muscle and gut arose, and therefore whether the animal
      body plan was assembled once or converged on twice.
    sources:
      - citation: "Dunn, C. W. et al. (2008). Broad phylogenomic sampling improves resolution of the animal tree of life. Nature 452: 745–749."
        url: null
      - citation: "Schultz, D. T. et al. (2023). Ancient gene linkages support ctenophores as sister to other animals. Nature 618: 110–117."
        url: null

  - id: clock-rate-variation
    name: Dating divergences without good fossils
    status: open
    status_note: Open as of 2026; molecular and fossil dates still disagree by tens of millions of years in several groups.
    description: >-
      Molecular clocks put the origin of placental mammals and of flowering plants well before
      their first fossils, by margins of 30 million years or more. Either the fossil record is
      systematically missing early members, or the clocks run fast when applied across a change
      in body size, generation time or population size, or both. The disagreement has not
      converged despite twenty years of relaxed-clock models.
    why_hard: >-
      Rate and time are multiplied together in the data, so separating them requires external
      information, which comes from fossils whose placement is exactly what is in dispute. Priors
      on calibration dates do a large share of the work in the result, and it is difficult to
      tell how large.
    unlocks: >-
      Whether major groups diversified before or after the end-Cretaceous extinction, which is
      the difference between ecological opportunity and gradual accumulation as the cause of
      modern diversity.
    sources:
      - citation: "dos Reis, M., Donoghue, P. C. J. & Yang, Z. (2016). Bayesian molecular clock dating of species divergences in the genomics era. Nature Reviews Genetics 17: 71–80."
        url: null
      - citation: "Springer, M. S. et al. (2003). Placental mammal diversification and the Cretaceous–Tertiary boundary. PNAS 100(3): 1056–1061."
        url: null

applications:
  - area: Public health
    title: Reading an outbreak from its genomes
    description: >-
      Pathogen genomes sampled during an epidemic form a phylogeny whose branch lengths are
      measured in weeks. The tree shows which introductions seeded which clusters, whether a
      hospital outbreak is one transmission chain or several, and when a new variant arose. During
      the COVID-19 pandemic millions of SARS-CoV-2 genomes were placed on a single growing tree,
      and lineage designations came out of it.
    sources:
      - citation: "Hadfield, J. et al. (2018). Nextstrain: real-time tracking of pathogen evolution. Bioinformatics 34(23): 4121–4123."
        url: null
      - citation: "Grubaugh, N. D. et al. (2019). Tracking virus outbreaks in the twenty-first century. Nature Microbiology 4: 10–19."
        url: null
  - area: Combinatorics
    title: Counting the trees
    description: >-
      The number of distinct unrooted binary trees on $n$ labelled tips is the double factorial
      $(2n-5)!! = 1 \cdot 3 \cdot 5 \cdots (2n-5)$. The formula, and the bijections used to
      derive and sample from it, are combinatorics; phylogenetics is the reason anyone needs to
      enumerate or search such a set.
    domain: math
    field_id: enumerative-combinatorics
    sources:
      - citation: "Felsenstein, J. (1978). The number of evolutionary trees. Systematic Zoology 27: 27–33."
        url: null
  - area: Algorithms
    title: Finding the best tree is NP-hard
    description: >-
      Deciding the most parsimonious tree is equivalent to the Steiner tree problem in a Hamming
      space and is NP-hard; maximum-likelihood tree inference is too. Practical software therefore
      does heuristic search — branch swapping, stochastic restarts — and reports a local optimum.
      That phylogenetic software never promises the best tree is a statement about complexity, not
      about biology.
    domain: math
    field_id: computational-complexity
    sources:
      - citation: "Foulds, L. R. & Graham, R. L. (1982). The Steiner problem in phylogeny is NP-complete. Advances in Applied Mathematics 3: 43–49."
        url: null
      - citation: "Roch, S. (2006). A short proof that phylogenetic tree reconstruction by maximum likelihood is hard. IEEE/ACM Transactions on Computational Biology and Bioinformatics 3(1): 92–94."
        url: null

further_reading:
  - citation: "Felsenstein, J. (2004). Inferring Phylogenies. Sinauer."
    url: null
    note: The standard account of the methods, by the person who made most of them statistical.
  - citation: "Yang, Z. (2014). Molecular Evolution: A Statistical Approach. Oxford University Press."
    url: null
    note: Rigorous on substitution models, likelihood and Bayesian dating.
  - citation: "Hull, D. L. (1988). Science as a Process. University of Chicago Press."
    url: null
    note: How Hennig's argument won, as institutional history rather than logic.
---

## Only Novelties Group

By the 1950s everyone agreed that classification should reflect descent. Nobody could say how to get from characters to descent without judgement. {{fig:willi-hennig|Willi Hennig}}, a specialist in flies who drafted his theory in an Allied prisoner-of-war camp, supplied the missing rule in 1950, and it is almost embarrassingly simple: a shared character groups organisms only if it is *new*.

Birds and crocodiles both lay shelled eggs, but so did their remote ancestors, and so do turtles and lizards; the character cannot separate any group from any other. Birds and crocodiles also share a four-chambered heart and a particular arrangement of skull openings that their common ancestor acquired and that lizards never had. Those are evidence. Hennig called a shared novelty a synapomorphy and a retained ancestral state a plesiomorphy, and insisted that only the former counts. From the rule follows a severe consequence: a named group must contain *all* of its ancestor's descendants. Reptilia without birds fails that test and is therefore not a group at all — which is why, in every modern classification, birds are reptiles.

Published in German, the book went unread for sixteen years. Its 1966 translation arrived at the moment when [systematics](/biology/systematics/) was tearing itself apart over method, and it won, comprehensively and acrimoniously.

## Molecules as Documents

The second idea came from chemistry. {{fig:zuckerkandl|Emile Zuckerkandl}} and {{fig:pauling|Linus Pauling}} lined up haemoglobin sequences from several mammals and counted differences. Horse and human differ in about 18 of 141 residues in the alpha chain; the gorilla differs from the human in one. Plotted against divergence times estimated from fossils, the counts fell roughly on a line. In 1965 they drew the conclusion: a protein is a document of evolutionary history, and its rate of change is a clock that runs whether or not anything visible is happening to the organism.

Morphologists were unimpressed, and the claim was overstated — rates differ between genes, between lineages and between sites, and modelling that variation is still the hardest part of molecular dating. But the consequence was immediate and permanent. Every organism carries a record of its ancestry in a form that can be read without fossils, and the record is the same kind of data for a bacterium, an oak and a whale. Relationships that anatomy could never settle, because the organisms have no anatomy in common, became answerable.

## From Counting Steps to Fitting Models

The first computational methods counted. {{fig:joseph-camin|Joseph Camin}} and {{fig:robert-sokal|Robert Sokal}} proposed in 1965 that the best tree is the one needing fewest character changes, and tested the idea on plasticine "caminalcules" whose true genealogy they had invented and therefore knew. {{fig:margaret-dayhoff|Margaret Dayhoff}} and Richard Eck published the first protein tree computed by that principle in 1966. {{fig:walter-fitch|Walter Fitch}} and Emanuel Margoliash built trees from distance matrices in 1967, and Fitch's 1971 algorithm scored a tree against an alignment in a single pass over the sites.

Then {{fig:joseph-felsenstein|Joseph Felsenstein}} showed that counting can fail in a specific and dangerous way. If two lineages on opposite sides of the tree both evolve fast, some of their changes will coincide by chance, and parsimony reads coincidence as shared novelty. In 1978 he proved that for some branch lengths the method is statistically *inconsistent*: more data make it more certain of the wrong tree. The fix was to model substitution explicitly, which he did in 1981 — a tree's likelihood is the probability of the observed sequences given the tree and the model, computed by pruning up from the tips. In 1985 he added the bootstrap: resample the sites, rebuild the tree a hundred times, and report for each branch how often it appears. For the first time a published phylogeny carried numbers that meant something about confidence.

By the end of the 1990s the Bayesian version was in place. Put a prior on trees, sample the posterior with Markov chain Monte Carlo, and read off a probability for each clade; {{fig:huelsenbeck|John Huelsenbeck}} and {{fig:ronquist|Fredrik Ronquist}}'s MrBayes made this a command line away in 2001. The machinery came straight from [Bayesian statistics](/math/bayesian-statistics/) and [Monte Carlo methods](/math/monte-carlo-methods/), and phylogenetics became one of their largest consumers.

## A Closer Look: Scoring Three Trees for Four Species

With four species there are exactly three possible unrooted trees, given by which pair is grouped: $(AB)(CD)$, $(AC)(BD)$, $(AD)(BC)$. Take this alignment of eight sites:

| Site | A | B | C | D | Pattern |
|---|---|---|---|---|---|
| 1 | G | G | A | A | supports $(AB)(CD)$ |
| 2 | C | C | T | T | supports $(AB)(CD)$ |
| 3 | T | T | G | G | supports $(AB)(CD)$ |
| 4 | A | C | A | C | supports $(AC)(BD)$ |
| 5 | G | T | G | T | supports $(AC)(BD)$ |
| 6 | A | T | T | A | supports $(AD)(BC)$ |
| 7 | C | C | C | C | constant |
| 8 | G | G | G | A | unique to D |

For a four-taxon tree, a site with two taxa in one state and two in another needs **one** change if the split matches the tree's internal branch, and **two** if it does not. A constant site needs none; a site unique to one tip needs one on every tree. So:

$$
\begin{aligned}
(AB)(CD): &\quad 3(1) + 2(2) + 1(2) + 0 + 1 = 10,\\
(AC)(BD): &\quad 3(2) + 2(1) + 1(2) + 0 + 1 = 11,\\
(AD)(BC): &\quad 3(2) + 2(2) + 1(1) + 0 + 1 = 12.
\end{aligned}
$$

Parsimony picks $(AB)(CD)$, by one step. That margin is the whole evidence: three sites for it, two against, one for the third topology. Resample those eight sites with replacement and the winner changes often — which is exactly what Felsenstein's bootstrap measures.

Now scale up. The number of unrooted binary trees on $n$ tips is $(2n-5)!!$:

| Tips | Trees |
|---|---|
| 4 | 3 |
| 10 | 2,027,025 |
| 20 | $2.2 \times 10^{20}$ |
| 50 | $2.8 \times 10^{74}$ |

Fifty species — a modest study — give more trees than there are atoms in the Earth, which is about $10^{50}$. No search can visit them, and deciding the best one is NP-hard, so every published tree is the end point of a heuristic walk through that space.

The deeper trouble is that more sites do not always help. Under the Jukes–Cantor model, if a fraction $p$ of sites differ between two sequences, the number of substitutions per site that actually happened is

$$
d = -\tfrac{3}{4}\ln\!\left(1 - \tfrac{4}{3}p\right).
$$

At $p = 0.05$ this gives $d = 0.052$ — observed difference and real change are nearly the same. At $p = 0.3$, $d = 0.38$: a quarter of the history is already hidden by sites that changed twice. At $p = 0.6$, $d = 1.21$, and at $p = 0.75$ the formula diverges, because two random sequences over four bases differ at three sites in four. Past that point the sequences carry no information about time at all — they are saturated — and two long branches will look alike simply because both have gone random. That is long-branch attraction in one line, and it is why the sister group of all other animals is still disputed with whole genomes in hand.

## One Tree, or Many?

A tree assumes that a lineage splits and the parts stay separate. Real histories break the assumption in two ways. {{fig:wayne-maddison|Wayne Maddison}} pointed out in 1997 that even with no gene flow at all, different genes can have genuinely different trees: a polymorphism present in the ancestor gets sorted into the descendant species in whatever order chance dictates, and when speciations follow one another quickly, that order often disagrees with the species tree. Concatenating hundreds of genes does not fix this; it can produce high confidence in the wrong answer. Modern analyses model the gene trees inside the species tree, using the coalescent, rather than hoping the conflict averages out.

The second break is worse, and it is not about statistics. Genes move sideways between lineages, and in microbes they move constantly — so constantly that the tree may not be the right shape for the history at all. That is the problem of [microbial phylogenomics](/biology/microbial-phylogenomics/). Where the tree does hold, calibrating it against the dated strata of [palaeontology](/biology/paleontology/) turns branching order into a chronology, and what that chronology shows over hundreds of millions of years is the subject of [macroevolution](/biology/macroevolution/).
