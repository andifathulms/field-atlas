---
id: population-genetics
domain: biology
thread: heredity
name: Population Genetics
parent_ids:
  - evolutionary-biology
  - genetics
era_emerged: 1908 – 1947
core_question: How do gene frequencies change in populations, and is that enough to explain evolution?

summary: |-
  Population genetics describes evolution as change in how common different gene versions are in a population, and works out mathematically what makes those frequencies change: natural selection, random chance, mutation, and migration. It was built between 1918 and the 1940s to reconcile Darwin's natural selection with Mendel's genetics, which for twenty years had seemed to contradict each other.

  The result, called the Modern Synthesis, made natural selection working on Mendelian genes the central theory of biology. It is also where much of modern statistics was invented.

key_ideas:
  - term: Allele frequency
    definition: >-
      The fraction of copies of a gene in a population that are a particular version.
      In this view, evolution *is* change in allele frequencies over generations.
  - term: Hardy–Weinberg equilibrium
    definition: >-
      With no selection, drift, mutation or migration, allele frequencies stay constant
      and genotypes settle at $p^2 : 2pq : q^2$. It is the null model against which
      evolution is measured.
    turning_point_id: hardy-weinberg
  - term: Fitness and selection
    definition: >-
      Fitness is an allele's average contribution to future generations. Even a 1%
      advantage spreads an allele through a large population in a few thousand
      generations.
    turning_point_id: classical-population-genetics
  - term: Genetic drift
    definition: >-
      Random fluctuation in allele frequencies because only some individuals happen to
      reproduce. It matters most in small populations and can fix or lose alleles
      regardless of their effect.
    turning_point_id: classical-population-genetics
  - term: Neutral theory
    definition: >-
      Kimura's proposal that most changes at the level of DNA are neither helpful nor
      harmful and spread by drift, which makes the molecular "clock" tick at a steady
      rate.
    turning_point_id: neutral-theory

turning_points:
  - id: hardy-weinberg
    date: "1908"
    type: DISCOVERY
    title: The Hardy–Weinberg principle
    description: >-
      Asked why dominant traits don't take over populations, the pure mathematician
      G. H. Hardy shows in a short letter that Mendelian inheritance by itself keeps
      allele frequencies constant. The German physician Wilhelm Weinberg derived the
      same result the same year. Heredity alone does not change a population, and
      something else must.
    contested: true
    contested_note: >-
      Credit is shared and was long lopsided. Weinberg's paper, in German in a regional
      journal, was overlooked for decades, and the principle was known as "Hardy's law"
      until the 1940s. William Castle had described a special case in 1903, and Karl
      Pearson and Udny Yule had discussed related results.
    sources:
      - citation: "Hardy, G. H. (1908). Mendelian proportions in a mixed population. Science 28(706): 49–50."
        url: https://doi.org/10.1126/science.28.706.49
      - citation: "Weinberg, W. (1908). Über den Nachweis der Vererbung beim Menschen. Jahreshefte des Vereins für vaterländische Naturkunde in Württemberg 64: 368–382."
        url: null

  - id: fisher-1918
    date: "1918"
    type: SYNTHESIS
    title: Fisher shows Mendelism explains continuous variation
    description: >-
      Biometricians, who measured continuous traits like height, and Mendelians, who
      studied discrete ones, had been feuding since 1900. Ronald Fisher shows that many
      Mendelian genes of small effect produce exactly the smooth, bell-shaped variation
      and family resemblances the biometricians measured. The feud ends. The paper also
      introduces the idea of analysing variance.
    contested: false
    sources:
      - citation: "Fisher, R. A. (1918). The correlation between relatives on the supposition of Mendelian inheritance. Transactions of the Royal Society of Edinburgh 52(2): 399–433."
        url: https://doi.org/10.1017/S0080456800012163

  - id: classical-population-genetics
    date: 1930 – 1932
    type: SYNTHESIS
    title: Fisher, Haldane and Wright found population genetics
    description: >-
      In three landmark works, Ronald Fisher, J. B. S. Haldane and Sewall Wright build
      the mathematical theory of how selection, drift, mutation and migration change
      allele frequencies. Natural selection acting on Mendelian genes turns out to be
      powerful enough to drive evolution.
    contested: true
    contested_note: >-
      The founders disagreed sharply about causation. Fisher saw evolution as mostly
      selection in large populations. Wright gave a central role to genetic drift in
      small, partly isolated populations (his "shifting balance" theory). Their dispute
      ran for decades, and the relative importance of the two processes is still
      debated.
    sources:
      - citation: "Fisher, R. A. (1930). The Genetical Theory of Natural Selection. Clarendon Press, Oxford."
        url: null
      - citation: "Wright, S. (1931). Evolution in Mendelian populations. Genetics 16(2): 97–159."
        url: https://doi.org/10.1093/genetics/16.2.97
      - citation: "Haldane, J. B. S. (1932). The Causes of Evolution. Longmans, Green."
        url: null

  - id: dobzhansky-synthesis
    date: 1937 – 1947
    type: SYNTHESIS
    title: The Modern Synthesis
    description: >-
      Theodosius Dobzhansky's *Genetics and the Origin of Species* (1937) carries the
      mathematics to wild populations of fruit flies. Ernst Mayr on species, George
      Gaylord Simpson on fossils and Julian Huxley, who named the "Modern Synthesis" in
      1942, bring the rest of biology in. By 1947 natural selection on Mendelian genes is
      the consensus framework of evolutionary biology.
    contested: false
    sources:
      - citation: "Dobzhansky, T. (1937). Genetics and the Origin of Species. Columbia University Press."
        url: null
      - citation: "Huxley, J. (1942). Evolution: The Modern Synthesis. Allen & Unwin."
        url: null

  - id: neutral-theory
    date: "1968"
    type: CONSENSUS-OVERTURNED
    title: Kimura's neutral theory
    description: >-
      Protein sequences from different species reveal far more variation, and far more
      steady change, than selection alone seemed able to explain. Motoo Kimura proposes
      that most molecular change is selectively neutral and spreads by drift. The
      assumption that selection governs everything at the molecular level is
      overturned, and the steady ticking of neutral change becomes the "molecular clock"
      for dating evolutionary splits.
    contested: true
    contested_note: >-
      The neutralist–selectionist debate has never fully ended. That much molecular
      variation is neutral is now widely accepted, but how much, and how strongly
      selection on nearby sites shapes the rest, is still argued with genome-scale data.
    sources:
      - citation: "Kimura, M. (1968). Evolutionary rate at the molecular level. Nature 217(5129): 624–626."
        url: https://doi.org/10.1038/217624a0

open_problems:
  - id: lewontins-paradox
    name: Lewontin's paradox
    status: open
    status_note: Open as of writing; candidate explanations exist, but none accounts for the full pattern.
    description: >-
      Simple theory says a species' genetic diversity should scale with its population
      size. Yet diversity varies less than a thousandfold across animal species whose
      populations differ by many orders of magnitude, from whales to
      insects. Richard Lewontin highlighted the puzzle in 1974.
    why_hard: >-
      Candidate explanations include selection at linked sites sweeping away diversity,
      fluctuating population sizes that keep diversity low, and differences in mutation
      rate. Each accounts for part of the pattern, and measuring long-term population
      sizes and selection across many species is difficult.
    unlocks: >-
      It would reveal how strongly natural selection shapes whole genomes, and improve
      the tools used to reconstruct species' histories from their DNA.
    sources:
      - citation: "Lewontin, R. C. (1974). The Genetic Basis of Evolutionary Change. Columbia University Press."
        url: null
      - citation: "Leffler, E. M. et al. (2012). Revisiting an old riddle: what determines genetic diversity levels within species? PLoS Biology 10(9): e1001388."
        url: https://doi.org/10.1371/journal.pbio.1001388

applications:
  - area: Statistics
    title: The invention of modern statistical method
    description: >-
      Much of modern statistics was invented to do population genetics and agricultural
      science. Fisher introduced the analysis of variance, randomised experiments and
      maximum likelihood, now used in every field that runs experiments, from medicine
      to economics.
    domain: math
    field_id: probability-theory
    sources:
      - citation: "Fisher, R. A. (1935). The Design of Experiments. Oliver & Boyd."
        url: null
  - area: Conservation
    title: Genetic rescue of endangered populations
    description: >-
      Small, isolated populations lose diversity to drift and suffer from inbreeding.
      When only a few dozen Florida panthers remained, eight female pumas from Texas were
      released among them in 1995. Heart defects and other inbreeding problems fell, and
      the population grew, as population-genetic theory predicted.
    sources:
      - citation: "Johnson, W. E. et al. (2010). Genetic restoration of the Florida panther. Science 329(5999): 1641–1645."
        url: https://doi.org/10.1126/science.1192891
  - area: Human history
    title: Reading migrations from gene frequencies
    description: >-
      Differences in allele frequencies between populations record their history: when
      they split, how large they were, and when they mixed. These methods underlie the
      reconstruction of humanity's spread out of Africa and of later migrations.
    sources: []

further_reading:
  - citation: "Provine, W. B. (1971). The Origins of Theoretical Population Genetics. University of Chicago Press."
    url: null
    note: The history of the biometrician–Mendelian feud and its mathematical resolution.
  - citation: "Mayr, E. & Provine, W. B. (eds.) (1980). The Evolutionary Synthesis: Perspectives on the Unification of Biology. Harvard University Press."
    url: null
    note: Participants and historians look back on the Modern Synthesis.
  - citation: "Hartl, D. L. & Clark, A. G. (2007). Principles of Population Genetics (4th ed.). Sinauer Associates."
    url: null
    note: The standard textbook.
---

## Two Camps That Could Not Agree

The rediscovery of Mendel in 1900 should have rescued Darwin. It did the opposite. The early Mendelians, led by William Bateson, saw evolution in the sudden jumps of discrete mutations and thought gradual natural selection was unnecessary. The biometricians, led by Karl Pearson and W. F. R. Weldon, measured continuous traits like height, which vary smoothly and do not look Mendelian at all, and defended gradual selection. For nearly twenty years the two camps fought, often bitterly, and [evolutionary biology](/biology/evolutionary-biology/) and [genetics](/biology/genetics/) pulled apart.

The first bridge came from mathematics. In 1908 {{fig:gh-hardy|G. H. Hardy}}, a pure mathematician who took pride in the uselessness of his own work, answered a biologist's question in a short letter. Mendelian inheritance alone does not change allele frequencies. {{fig:wilhelm-weinberg|Wilhelm Weinberg}} found the same result independently. Evolution needs a force that changes the frequencies, and natural selection was the obvious candidate.

## The Mathematics of Evolution

{{fig:fisher|Ronald Fisher}} ended the feud in 1918. Many Mendelian genes, each with a small effect, add up to exactly the smooth variation and family resemblances the biometricians measured. Discrete inheritance and continuous traits were compatible after all. To prove it he invented new statistics, including the analysis of variance.

Over the next fourteen years Fisher, {{fig:haldane|J. B. S. Haldane}} and {{fig:sewall-wright|Sewall Wright}} built a full mathematical theory of evolution in terms of allele frequencies. They worked out how fast selection spreads a favourable allele, how mutation supplies new variation, how migration mixes populations, and how chance, *genetic drift*, can fix or erase alleles in small populations. Fisher and Wright disagreed for the rest of their lives about how much evolution is selection and how much is drift.

## The Synthesis

The mathematics convinced mathematicians. {{fig:dobzhansky|Theodosius Dobzhansky}} convinced naturalists. His *Genetics and the Origin of Species* (1937) showed the theory at work in wild fruit-fly populations. Ernst Mayr explained how new species arise when populations are isolated, George Gaylord Simpson reconciled the fossil record, and Julian Huxley named the result the *Modern Synthesis*. By the late 1940s natural selection acting on Mendelian genes was the framework of all of biology. Dobzhansky later summed it up: "Nothing in biology makes sense except in the light of evolution."

## A Closer Look: Carriers and the Speed of Selection

**Hidden alleles.** Cystic fibrosis affects about 1 in 2,500 babies of northern European descent. It is recessive: a child is affected only with two copies of the faulty allele. If the allele has frequency $q$ and mating is random, Hardy and Weinberg's rule says a fraction $q^2$ of people carry two copies. So

$$
q^2 = \frac{1}{2500}, \qquad q = \frac{1}{50} = 0.02 .
$$

The fraction who carry exactly one copy is $2pq$, with $p = 1 - q = 0.98$:

$$
2pq = 2 \times 0.98 \times 0.02 \approx 0.039 ,
$$

about 1 person in 25. For every affected child there are about a hundred healthy carriers. This is why selection against rare recessive diseases is so slow: almost all copies of the allele are hidden in carriers, where selection cannot see them.

**Selection at work.** Now take an allele that gives its carriers a 1% advantage in survival or reproduction, a difference far too small to notice in any one family. Fisher and Haldane showed how its frequency changes. When the allele's effect adds up in each copy, the time to rise from a frequency of 1% to 99% is roughly

$$
t \approx \frac{1}{s} \ln\!\left(\frac{0.99/0.01}{0.01/0.99}\right) = \frac{\ln 9801}{0.01} \approx 920 \text{ generations} .
$$

For humans, with generations of about 25 years, that is some 23,000 years. For bacteria dividing every half hour, it is under three weeks. On the timescale of evolution this is almost instantaneous. Haldane's calculations of this kind convinced biologists that small, invisible advantages were enough to drive evolution, and they are why antibiotic resistance spreads through bacterial populations within years of a new drug's introduction.

## Molecules and Neutrality

When protein and DNA sequences arrived in the 1960s, they held a surprise. Species carried far more molecular variation, and changed at a steadier rate, than selection-driven theory expected. {{fig:kimura|Motoo Kimura}} proposed in 1968 that most molecular changes are neutral and drift at random, and the neutralist–selectionist debate is still running. That debate is now fought with whole genomes, which is where population genetics meets [genomics](/biology/genomics/).
