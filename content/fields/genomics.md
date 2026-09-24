---
id: genomics
domain: biology
thread: heredity
name: Genomics
parent_ids:
  - molecular-biology
  - population-genetics
era_emerged: 1977 – 2003
core_question: What can be learned by reading entire genomes, and comparing them?

summary: |-
  Genomics reads the complete DNA of organisms, their genomes, and compares them. A human genome is about three billion letters long. The first took thirteen years and billions of dollars to read. Today one can be read in a day for a few hundred dollars.

  Reading genomes at that scale has turned genetics from the study of single genes into the study of whole systems, and population genetics into a data science. It has also rewritten human prehistory, transformed cancer medicine, and led to tools that can edit genomes as well as read them.

key_ideas:
  - term: Genome
    definition: >-
      The complete set of an organism's DNA. Only about 1–2% of the human genome codes
      for proteins, in roughly 20,000 genes.
    turning_point_id: human-genome
  - term: DNA sequencing
    definition: >-
      Determining the exact order of the letters (A, C, G, T) in a stretch of DNA.
      Modern machines read billions of short fragments in parallel and reassemble them
      by computer.
    turning_point_id: sanger-sequencing
  - term: PCR
    definition: >-
      The polymerase chain reaction copies a chosen stretch of DNA over and over,
      doubling it each cycle, so that a single molecule becomes billions in a few hours.
    turning_point_id: pcr
  - term: Genetic variation and GWAS
    definition: >-
      Any two people's genomes differ at a few million positions. Genome-wide
      association studies scan hundreds of thousands of people to link such variants to
      traits and diseases.
  - term: Genome editing
    definition: >-
      Changing a genome at a chosen position, most commonly with CRISPR–Cas9, which uses
      a short guide RNA to steer a DNA-cutting enzyme to a matching sequence.
    turning_point_id: crispr-editing

turning_points:
  - id: sanger-sequencing
    date: "1977"
    type: TECHNIQUE-INVENTED
    title: Sanger sequencing
    description: >-
      Frederick Sanger's chain-termination method reads DNA by copying it with a small
      fraction of "stopper" letters, then sorting the stopped fragments by length.
      Earlier that year, with a forerunner of the method, his lab had read the first
      complete DNA genome, a small virus of 5,386 letters.
      Allan Maxam and Walter Gilbert published a chemical method the same year. It was
      Sanger's second Nobel Prize.
    contested: false
    sources:
      - citation: "Sanger, F., Nicklen, S. & Coulson, A. R. (1977). DNA sequencing with chain-terminating inhibitors. Proceedings of the National Academy of Sciences 74(12): 5463–5467."
        url: https://doi.org/10.1073/pnas.74.12.5463

  - id: pcr
    date: 1983 – 1985
    type: TECHNIQUE-INVENTED
    title: The polymerase chain reaction
    description: >-
      Kary Mullis, a chemist at the biotech company Cetus, conceives of copying a chosen
      stretch of DNA exponentially with repeated heating and cooling cycles. Developed
      into a working method at Cetus and later automated with a heat-stable enzyme, PCR
      became one of the most widely used techniques in molecular biology.
    contested: true
    contested_note: >-
      Mullis received the 1993 Nobel Prize, but Cetus colleagues, notably Randall Saiki,
      Henry Erlich and Norman Arnheim, did much of the work that turned the idea into a
      reliable method. Kjell Kleppe and Gobind Khorana had described a similar
      replication scheme in 1971. How to divide the credit, and how novel the idea was,
      was fought over in patent litigation and among historians.
    sources:
      - citation: "Saiki, R. K. et al. (1985). Enzymatic amplification of β-globin genomic sequences and restriction site analysis for diagnosis of sickle cell anemia. Science 230(4732): 1350–1354."
        url: https://doi.org/10.1126/science.2999980
      - citation: "Rabinow, P. (1996). Making PCR: A Story of Biotechnology. University of Chicago Press."
        url: null

  - id: human-genome
    date: 2001 – 2003
    type: DISCOVERY
    title: The human genome is read
    description: >-
      The international Human Genome Project and the company Celera Genomics publish
      draft sequences of the human genome in February 2001. The big surprise is how few
      genes it contains, an estimated 30,000 to 40,000, later revised to about 20,000,
      far fewer than the up to 100,000 many had expected. The project was declared complete in 2003, though the last 8% of hard,
      repetitive regions were only filled in 2022.
    contested: true
    contested_note: >-
      The public and private efforts raced, and their relationship was bitter. Celera,
      led by Craig Venter, used a faster whole-genome "shotgun" method and planned to
      restrict access. The public project, led by Francis Collins, released data daily.
      Each side disputed the other's contribution, including how far Celera's assembly
      depended on public data. The joint announcement at the White House in 2000 was a
      negotiated truce.
    sources:
      - citation: "International Human Genome Sequencing Consortium (2001). Initial sequencing and analysis of the human genome. Nature 409(6822): 860–921."
        url: https://doi.org/10.1038/35057062
      - citation: "Venter, J. C. et al. (2001). The sequence of the human genome. Science 291(5507): 1304–1351."
        url: https://doi.org/10.1126/science.1058040
      - citation: "Nurk, S. et al. (2022). The complete sequence of a human genome. Science 376(6588): 44–53."
        url: https://doi.org/10.1126/science.abj6987

  - id: neanderthal-genome
    date: "2010"
    type: DISCOVERY
    title: Neanderthal DNA lives on in us
    description: >-
      Svante Pääbo's team sequences a Neanderthal genome from bones about 40,000 years
      old and finds that people outside Africa carry a small percentage of Neanderthal
      DNA. Our ancestors interbred with them. A finger bone from a Siberian cave soon
      revealed another archaic group, the Denisovans. Pääbo received the 2022 Nobel
      Prize.
    contested: false
    sources:
      - citation: "Green, R. E. et al. (2010). A draft sequence of the Neandertal genome. Science 328(5979): 710–722."
        url: https://doi.org/10.1126/science.1188021

  - id: crispr-editing
    date: "2012"
    type: TECHNIQUE-INVENTED
    title: CRISPR–Cas9 becomes a programmable genome editor
    description: >-
      Jennifer Doudna and Emmanuelle Charpentier show that Cas9, part of a bacterial
      immune system, can be programmed with a short RNA to cut any chosen DNA sequence.
      Within a year it was editing human cells. Cheap, precise genome editing arrived
      in almost every biology lab, and Doudna and Charpentier shared the 2020 Nobel
      Prize in Chemistry.
    contested: true
    contested_note: >-
      Priority and patents were fiercely contested. Virginijus Šikšnys's group reached
      similar results independently in 2012. Feng Zhang's group at the Broad Institute
      published editing in human cells in early 2013 and holds key US patents. Its long
      legal dispute with Doudna's and Charpentier's institutions over who invented it
      first was reopened on appeal in 2025. Scientists who
      discovered and characterised CRISPR in bacteria years earlier, such as Francisco
      Mojica, are often left out of the story.
    sources:
      - citation: "Jinek, M., Chylinski, K., Fonfara, I., Hauer, M., Doudna, J. A. & Charpentier, E. (2012). A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity. Science 337(6096): 816–821."
        url: https://doi.org/10.1126/science.1225829
      - citation: "Doudna, J. A. & Sternberg, S. H. (2017). A Crack in Creation: Gene Editing and the Unthinkable Power to Control Evolution. Houghton Mifflin Harcourt."
        url: null

open_problems:
  - id: missing-heritability
    name: Missing heritability
    status: open
    status_note: Narrowed by very large studies but not closed, as of 2026.
    description: >-
      Twin and family studies show that traits like height and many common diseases are
      highly heritable. Yet the genetic variants found by early genome-wide scans
      explained only a small fraction of that heritability. Where is the rest?
    why_hard: >-
      Most of it seems to be spread across thousands of variants, each with a tiny
      effect, which only enormous studies can detect. Rare variants, interactions
      between genes, and flaws in the twin-study estimates may account for the remainder,
      and each is hard to measure.
    unlocks: >-
      It would determine how far disease risk can be predicted from DNA, and clarify
      what heritability does and does not mean.
    sources:
      - citation: "Manolio, T. A. et al. (2009). Finding the missing heritability of complex diseases. Nature 461(7265): 747–753."
        url: https://doi.org/10.1038/nature08494

  - id: noncoding-function
    name: How much of the genome does anything?
    status: open
    status_note: Actively disputed as of 2026; estimates of the functional fraction range from under 10% to much higher.
    description: >-
      Only about 1–2% of the human genome codes for proteins. In 2012 the ENCODE project
      reported biochemical activity across about 80% of the genome and called it
      functional. Evolutionary biologists objected strongly, since only a small fraction
      appears to be preserved by natural selection.
    why_hard: >-
      "Function" means different things to a biochemist (something happens there) and to
      an evolutionary biologist (mutations there matter to fitness). Testing the effect
      of each stretch of DNA directly is slow. Much of the genome is repetitive remains
      of ancient viruses and mobile elements.
    unlocks: >-
      It would identify which non-coding mutations can cause disease, and settle how much
      of our DNA is, in effect, evolutionary debris.
    sources:
      - citation: "ENCODE Project Consortium (2012). An integrated encyclopedia of DNA elements in the human genome. Nature 489(7414): 57–74."
        url: https://doi.org/10.1038/nature11247
      - citation: "Graur, D. et al. (2013). On the immortality of television sets: \"function\" in the human genome according to the evolution-free gospel of ENCODE. Genome Biology and Evolution 5(3): 578–590."
        url: https://doi.org/10.1093/gbe/evt028

applications:
  - area: Public health
    title: Tracking a pandemic by its genome
    description: >-
      The genome of the virus that causes COVID-19 was sequenced and shared within weeks
      of the first cases, allowing tests and vaccines to be designed immediately. Millions
      of viral genomes were then sequenced worldwide to track new variants as they
      spread.
    sources:
      - citation: "Wu, F. et al. (2020). A new coronavirus associated with human respiratory disease in China. Nature 579(7798): 265–269."
        url: https://doi.org/10.1038/s41586-020-2008-3
  - area: Oncology
    title: Treating cancers by their mutations
    description: >-
      Cancer is a disease of mutated genomes. Sequencing a tumour reveals which mutations
      drive it, and increasingly the treatment is chosen by the mutation rather than the
      organ where the cancer started.
    sources:
      - citation: "Stratton, M. R., Campbell, P. J. & Futreal, P. A. (2009). The cancer genome. Nature 458(7239): 719–724."
        url: https://doi.org/10.1038/nature07943
  - area: Diagnosis
    title: Finding the cause of rare diseases
    description: >-
      For children with undiagnosed conditions, sequencing the whole genome can find the
      responsible mutation among millions of variants, often ending years of uncertainty
      and sometimes pointing to treatment.
    sources: []

further_reading:
  - citation: "Sulston, J. & Ferry, G. (2002). The Common Thread: A Story of Science, Politics, Ethics and the Human Genome. Joseph Henry Press."
    url: null
    note: An insider's account of the public Human Genome Project and its fight to keep the data free.
  - citation: "Pääbo, S. (2014). Neanderthal Man: In Search of Lost Genomes. Basic Books."
    url: null
    note: The story of ancient DNA told by the scientist who pioneered it.
  - citation: "Doudna, J. A. & Sternberg, S. H. (2017). A Crack in Creation: Gene Editing and the Unthinkable Power to Control Evolution. Houghton Mifflin Harcourt."
    url: null
    note: CRISPR from one of its discoverers, including the ethical questions it raises.
---

## Reading DNA

[Molecular biology](/biology/molecular-biology/) had shown that genes are sequences of four letters, but for twenty years the letters could hardly be read. In 1977 {{fig:sanger|Frederick Sanger}} changed that. His method copies DNA with a small fraction of letters that stop the copying, then sorts the stopped fragments by length, and the sequence can be read off in order. Earlier that year, with a forerunner of the method, his lab had read the first complete DNA genome, a small virus of 5,386 letters.

The second tool was copying. In 1983 {{fig:mullis|Kary Mullis}}, by his own account while driving through the California hills at night, imagined using repeated heating and cooling to double a chosen stretch of DNA again and again. His colleagues at Cetus turned the idea into a reliable method, the polymerase chain reaction, which can turn a single molecule into billions. It now underpins everything from forensic DNA to COVID tests.

## The Human Genome

In 1990 the international Human Genome Project set out to read all three billion letters of human DNA within fifteen years. In 1998 {{fig:venter|Craig Venter}}'s company Celera announced it would do the job faster, and privately. The race that followed, between Celera and the public consortium led by {{fig:francis-collins|Francis Collins}}, ended in a truce announced at the White House in June 2000, and in rival draft papers in 2001.

The draft's great surprise was a small number: perhaps 30,000 protein-coding genes, since revised to about 20,000, not much more than a roundworm has. Complexity came from how genes are regulated and combined, not from how many there are. The project was declared complete in 2003. The hardest 8%, highly repetitive regions, was finished only in 2022.

## Genomes and Evolution

Cheap sequencing made genomes comparable by the thousand, and [population genetics](/biology/population-genetics/) became a science of whole genomes. The most startling result came from ancient DNA. In 2010 {{fig:paabo|Svante Pääbo}}'s team read a Neanderthal genome from 40,000-year-old bones and found traces of it in everyone whose ancestors lived outside Africa. Our ancestors had interbred with Neanderthals, and, a finger bone soon showed, with Denisovans. Genomes also confirmed, in exquisite detail, the tree of life that [evolutionary biology](/biology/evolutionary-biology/) had drawn from anatomy.

## A Closer Look: How Many Times Must a Genome Be Read?

Sequencing machines cannot read a chromosome from end to end. They read short fragments, a few hundred letters long for most of the history of genomics, from random positions, and a computer assembles the fragments by their overlaps. How much sequencing is enough?

Suppose the fragments add up to $c$ times the length of the genome, the *coverage*. Each base is then read on average $c$ times. Because the fragments land at random, the number of times a given base is covered follows a Poisson distribution, and the probability that it is never read at all is

$$
P(\text{missed}) = e^{-c} .
$$

Eric Lander and Michael Waterman worked out this and related formulas in 1988. They show why reading the genome once is useless:

| Coverage $c$ | Fraction of bases never read | For a 3.1-billion-base genome |
|---|---|---|
| 1× | $e^{-1} \approx 37\%$ | 1.1 billion bases missed |
| 3× | $e^{-3} \approx 5\%$ | 150 million missed |
| 8× | $e^{-8} \approx 0.03\%$ | about 1 million missed |
| 30× | $e^{-30} \approx 10^{-13}$ | none, on average |

Sequencing the same total amount again gives diminishing returns, but each extra round of coverage cuts the gaps by a factor of $e$. The draft human genome of 2001 used several-fold coverage and had many gaps. Clinical genome sequencing today typically uses about 30× coverage, which also allows the two copies of each chromosome to be told apart and errors to be outvoted.

Random coverage is not the only problem. About half the human genome consists of repeated sequences, and a short fragment from inside a repeat could belong to any copy of it, so the formula's gaps are the easy part. The last 8% of the genome, mostly long repeats, was finished in 2022 only with new machines that read single molecules tens of thousands of letters long. The cost of reading a human genome has meanwhile fallen from billions of dollars for the first to a few hundred dollars today.

## Writing Genomes

In 2012 {{fig:doudna|Jennifer Doudna}} and {{fig:charpentier|Emmanuelle Charpentier}} showed that CRISPR–Cas9, part of a bacterial defence against viruses, can be programmed to cut DNA wherever its guide RNA matches. {{fig:feng-zhang|Feng Zhang}}'s lab and others used it in human cells within months. Genome editing became cheap and routine, and the first CRISPR-based therapy, for sickle cell disease, was approved in 2023. In 2018 He Jiankui's announcement that he had edited the genomes of twin babies was condemned almost universally, and it set off a new debate about where limits belong.

The edge of the map here is less about new techniques than about understanding what is read. Most of the heritability of common traits is still hard to pin down, and how much of the genome actually does anything is still openly disputed.
