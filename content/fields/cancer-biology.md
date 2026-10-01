---
id: cancer-biology
domain: biology
thread: disease
name: Cancer Biology
parent_ids:
  - genetics
  - cell-biology
era_emerged: 1911 – 2013
core_question: What kind of process turns one of a body's own cells into a lineage that grows without limit, and why does it take decades?

summary: |-
  Cancer is not one disease and for most of the twentieth century it was not clear that it had one kind of cause. Chemicals caused it, radiation caused it, some viruses caused it, and families carried it — a list with no obvious common factor. The resolution came from statistics before it came from molecules. In 1954 Armitage and Doll noticed that the incidence of common carcinomas rises as roughly the fifth power of age, which is the signature of a process requiring several independent rare events in one lineage of cells. In 1971 Knudson showed from the age distribution of a childhood eye tumour that the number of required events could be counted, and that inherited cases start with one of them already in place.

  Molecular biology then found what the events are. The oncogenes that tumour viruses carry turned out to be corrupted copies of genes the cell already had; a second class of genes normally restrains division, and cancer requires losing both copies. By 2013, sequencing whole tumour genomes gave a direct count: a typical adult solid tumour carries two to eight mutations that drive it, among thousands that do not. Three independent routes — age curves from 1954, a childhood tumour from 1971 and genome sequencing from 2013 — arrived at the same small number.

key_ideas:
  - term: Somatic mutation theory
    definition: >-
      Cancer arises from heritable changes in a single body cell and its descendants, not from a
      change in the organism as a whole. The tumour is a clone, and its properties are the
      properties of a lineage under selection.
    turning_point_id: armitage-doll-multistage
  - term: Multistage carcinogenesis
    definition: >-
      Several independent rare events must occur in the same lineage, in roughly the right order.
      A process requiring $k$ such steps produces incidence rising as the $(k-1)$th power of age,
      which is how the number of steps can be read off an epidemiological curve.
    turning_point_id: armitage-doll-multistage
  - term: Two-hit hypothesis
    definition: >-
      A tumour suppressor gene must lose both copies to have an effect. An inherited defective copy
      supplies one hit in every cell of the body, so only one further event is needed — which makes
      hereditary cancers earlier, multiple and bilateral.
    turning_point_id: knudson-two-hit
  - term: Proto-oncogene
    definition: >-
      A normal cellular gene that promotes growth and division, which becomes an oncogene when
      mutation, amplification or translocation leaves it permanently switched on. The cancer-causing
      genes of tumour viruses are stolen, altered copies of these.
    turning_point_id: oncogene-src
  - term: Tumour suppressor
    definition: >-
      A gene whose normal job is to restrain division or to force damaged cells to stop or die. Loss
      of function, in both copies, removes a brake; *TP53* is mutated in roughly half of all human
      cancers.
    turning_point_id: p53-reclassified
  - term: Driver and passenger
    definition: >-
      Of the thousands of mutations in a tumour genome, a handful confer a growth advantage and were
      selected for; the rest were carried along by the clone that happened to contain them.
      Distinguishing the two is a statistical problem, not a biochemical one.
    turning_point_id: cancer-genome-landscapes

turning_points:
  - id: rous-sarcoma-virus
    date: "1911"
    type: DISCOVERY
    title: A tumour transmitted by a filtrate
    description: >-
      Peyton Rous grinds up a sarcoma from a Plymouth Rock hen, passes the extract through a filter
      that holds back cells and bacteria, injects it into healthy birds, and produces the same
      tumour. Cancer could therefore be caused by something transmissible and submicroscopic. The
      result was regarded as a curiosity of chickens and largely ignored; Rous received the Nobel
      Prize fifty-five years later, once the virus had become the tool that identified the first
      oncogene.
    contested: false
    sources:
      - citation: "Rous, P. (1911). A sarcoma of the fowl transmissible by an agent separable from the tumor cells. Journal of Experimental Medicine 13: 397–411."
        url: null
      - citation: "Vogt, P. K. (1996). Peyton Rous: homage and appraisal. FASEB Journal 10: 1559–1562."
        url: null

  - id: armitage-doll-multistage
    date: "1954"
    type: DISCOVERY
    title: Reading the number of steps off an age curve
    description: >-
      Peter Armitage and Richard Doll plot the incidence of common carcinomas against age on
      logarithmic axes and find straight lines of slope about five. A process in which $k$
      independent rare events must accumulate in one cell lineage produces incidence proportional
      to the $(k-1)$th power of age, so the slope counts the steps: about six. Cancer is therefore a
      multistage somatic process, and the long latency between exposure and disease is the time
      taken to accumulate the stages.
    contested: false
    sources:
      - citation: "Armitage, P. & Doll, R. (1954). The age distribution of cancer and a multi-stage theory of carcinogenesis. British Journal of Cancer 8: 1–12."
        url: null
      - citation: "Frank, S. A. (2007). Dynamics of Cancer: Incidence, Inheritance, and Evolution. Princeton University Press."
        url: null

  - id: knudson-two-hit
    date: "1971"
    type: SYNTHESIS
    title: Knudson counts the hits
    description: >-
      Alfred Knudson analyses 48 cases of retinoblastoma, a childhood eye tumour that occurs in both
      a hereditary and a sporadic form. Hereditary cases appear earlier, often in both eyes and at
      several sites; sporadic cases appear later, in one eye, singly. He shows the age distributions
      fit a model in which two events are needed, with hereditary patients born already carrying
      one. The prediction — that a normal gene is lost rather than an abnormal one gained — defined
      the tumour suppressor fifteen years before one was cloned.
    contested: false
    sources:
      - citation: "Knudson, A. G. (1971). Mutation and cancer: statistical study of retinoblastoma. PNAS 68: 820–823."
        url: null
      - citation: "Friend, S. H. et al. (1986). A human DNA segment with properties of the gene that predisposes to retinoblastoma and osteosarcoma. Nature 323: 643–646."
        url: null

  - id: oncogene-src
    date: 1976 – 1982
    type: DISCOVERY
    title: The cancer gene was ours already
    description: >-
      Dominique Stehelin, Harold Varmus, J. Michael Bishop and Peter Vogt show that the gene by
      which Rous sarcoma virus transforms cells, *src*, has a close relative in the normal DNA of
      uninfected chickens — and of every vertebrate examined. The virus had picked up a cellular
      growth-control gene and damaged it. In 1982 three groups independently pull a human oncogene,
      *RAS*, straight out of a bladder carcinoma, differing from the normal gene by a single base.
      Cancer genes are corrupted versions of the cell's own.
    contested: false
    sources:
      - citation: "Stehelin, D., Varmus, H. E., Bishop, J. M. & Vogt, P. K. (1976). DNA related to the transforming gene(s) of avian sarcoma viruses is present in normal avian DNA. Nature 260: 170–173."
        url: null
      - citation: "Tabin, C. J. et al. (1982). Mechanism of activation of a human oncogene. Nature 300: 143–149."
        url: null

  - id: p53-reclassified
    date: 1979 – 1989
    type: CONSENSUS-OVERTURNED
    title: p53 changes sides
    description: >-
      A 53-kilodalton protein found bound to a viral antigen in 1979 is abundant in transformed
      cells and, when its gene is introduced, cooperates in transforming them — so it is classified
      as an oncogene and studied as one for a decade. In 1989 Bert Vogelstein's group finds that
      colorectal tumours have *lost* the gene from both chromosomes, and Arnold Levine's group shows
      that the clones everyone had been using were mutants. The normal protein suppresses tumours;
      the mutants are dominant-negative versions of it. It is now the most commonly mutated gene in
      human cancer.
    contested: false
    sources:
      - citation: "Baker, S. J. et al. (1989). Chromosome 17 deletions and p53 gene mutations in colorectal carcinomas. Science 244: 217–221."
        url: null
      - citation: "Finlay, C. A., Hinds, P. W. & Levine, A. J. (1989). The p53 proto-oncogene can act as a suppressor of transformation. Cell 57: 1083–1093."
        url: null
      - citation: "Levine, A. J. & Oren, M. (2009). The first 30 years of p53: growing ever more complex. Nature Reviews Cancer 9: 749–758."
        url: null

  - id: hallmarks-of-cancer
    date: 2000 – 2011
    type: SYNTHESIS
    title: The hallmarks of cancer
    description: >-
      Faced with a literature of thousands of genes and dozens of tissue types, Douglas Hanahan and
      Robert Weinberg propose that all cancers must acquire the same small set of capabilities:
      sustained growth signalling, evasion of growth suppressors, resistance to cell death,
      unlimited replicative potential, induced blood supply, and invasion. The 2011 revision adds
      altered metabolism, immune evasion, genome instability and inflammation. It is a framework
      rather than a discovery, and it organised the field.
    contested: false
    sources:
      - citation: "Hanahan, D. & Weinberg, R. A. (2000). The hallmarks of cancer. Cell 100: 57–70."
        url: null
      - citation: "Hanahan, D. & Weinberg, R. A. (2011). Hallmarks of cancer: the next generation. Cell 144: 646–674."
        url: null

  - id: cancer-genome-landscapes
    date: 2008 – 2013
    type: DISCOVERY
    title: Sequencing the tumours
    description: >-
      The Cancer Genome Atlas and the International Cancer Genome Consortium sequence thousands of
      tumours against matched normal tissue. The results settle several arguments at once: a typical
      adult solid tumour carries thousands of somatic mutations but only two to eight that drive it;
      the drivers fall into about a dozen signalling pathways; and the pattern of base changes
      records the mutagen responsible, so that tobacco, ultraviolet light and a failed repair
      pathway each leave a recognisable signature.
    contested: false
    sources:
      - citation: "Vogelstein, B. et al. (2013). Cancer genome landscapes. Science 339: 1546–1558."
        url: null
      - citation: "Alexandrov, L. B. et al. (2013). Signatures of mutational processes in human cancer. Nature 500: 415–421."
        url: null

open_problems:
  - id: metastasis-mechanism
    name: What makes a tumour metastasise
    status: open
    status_note: Open as of 2026; no consistent set of metastasis-specific driver mutations has been found.
    description: >-
      Metastasis causes the great majority of cancer deaths, and it is the part of the process
      least understood. Sequencing metastases against their primary tumours has not revealed
      mutations that are specific to the ability to spread; the capability appears to come from
      changes in gene expression, from interactions with the immune system and the surrounding
      tissue, and from the properties of the distant site that accepts the cell.
    why_hard: >-
      The events are rare, transient and almost impossible to observe: a cell leaves, survives in
      the circulation, lodges somewhere, and may sit dormant for years before growing. Model systems
      that metastasise reliably do so by routes that may not be the human ones, and by the time a
      metastasis is sampled the informative steps are long past.
    unlocks: >-
      Preventing or controlling spread would change cancer outcomes more than any improvement in
      treating primary tumours, since a localised cancer is usually curable by surgery.
    sources:
      - citation: "Lambert, A. W., Pattabiraman, D. R. & Weinberg, R. A. (2017). Emerging biological principles of metastasis. Cell 168: 670–691."
        url: null
      - citation: "Birkbak, N. J. & McGranahan, N. (2020). Cancer genome evolutionary trajectories in metastasis. Cancer Cell 37: 8–19."
        url: null

applications:
  - area: Clinical practice
    title: Treating by mutation rather than by organ
    description: >-
      Knowing the driver changes what is prescribed. A lung adenocarcinoma with an *EGFR* mutation is
      treated with an inhibitor of that kinase rather than with chemotherapy; tumours with defective
      mismatch repair respond to immune checkpoint blockade regardless of which organ they arose in,
      and such a treatment has been licensed on that basis alone. The logic descends directly from
      the oncogene work of the 1970s.
    sources:
      - citation: "Le, D. T. et al. (2015). PD-1 blockade in tumors with mismatch-repair deficiency. New England Journal of Medicine 372: 2509–2520."
        url: null
  - area: Prevention
    title: Mutational signatures as a record of exposure
    description: >-
      Each mutagen leaves a characteristic pattern of base substitutions in the genomes it damages.
      The signature of tobacco smoke, of ultraviolet light, of aflatoxin and of a failed repair
      pathway can each be read out of a tumour sequence, which turns a cancer genome into a partial
      exposure history and gives epidemiology a biomarker rather than a questionnaire.
    domain: biology
    sources:
      - citation: "Alexandrov, L. B. et al. (2020). The repertoire of mutational signatures in human cancer. Nature 578: 94–101."
        url: null
  - area: Stochastic processes
    title: Carcinogenesis as a multi-type branching process
    description: >-
      The multistage model is a mathematical object in its own right: a population of cells, each
      able to divide, die, or acquire one of several mutations, with the first cell to complete a
      required set initiating a tumour. Analysing the waiting time for that event drove work on
      multi-type branching processes and on the statistics of the fastest of many independent
      accumulating processes.
    domain: math
    field_id: stochastic-processes
    sources:
      - citation: "Moolgavkar, S. H. & Knudson, A. G. (1981). Mutation and cancer: a model for human carcinogenesis. Journal of the National Cancer Institute 66: 1037–1052."
        url: null
      - citation: "Durrett, R. (2015). Branching Process Models of Cancer. Springer."
        url: null

further_reading:
  - citation: "Weinberg, R. A. (2013). The Biology of Cancer, 2nd edition. Garland Science."
    url: null
    note: The standard textbook, built around the hallmarks framework its author proposed.
  - citation: "Mukherjee, S. (2010). The Emperor of All Maladies. Scribner."
    url: null
    note: A history of cancer and its treatment, strong on the clinical side the laboratory literature omits.
  - citation: "Frank, S. A. (2007). Dynamics of Cancer. Princeton University Press."
    url: null
    note: The quantitative thread — age-incidence curves, multistage models, and what they can and cannot identify.
---

## A Disease With No Common Cause

By 1950 the list of things that cause cancer was long and incoherent. Coal tar painted on rabbit ears caused it, as Yamagiwa had shown in 1915. Radium caused it, as the dial painters of New Jersey demonstrated at the cost of their lives. {{fig:peyton-rous|Peyton Rous}} had shown in 1911 that a cell-free filtrate from a chicken sarcoma transmits the tumour, so something infectious and submicroscopic could cause it — a result so unlike the rest that it was treated as a peculiarity of poultry for forty years. Some families clearly carried a tendency. {{fig:boveri|Theodor Boveri}} had suggested in 1914, from watching abnormal cell divisions in sea urchin eggs, that the cause was a disordered chromosome complement.

What unified the list was not a mechanism but a curve. {{fig:peter-armitage|Peter Armitage}} and {{fig:richard-doll|Richard Doll}} plotted the incidence of stomach, colon and other common carcinomas against age, on logarithmic axes, and got straight lines — not the rising-then-falling shape of an infectious disease, nor a constant hazard, but a steep power law. They identified what produces it: a sequence of several independent rare events that must all occur within the descendants of a single cell.

That inference deserves emphasis, because it was made in 1954 with no molecular knowledge at all. From the shape of an epidemiological curve they concluded that cancer is somatic, clonal, and multistage, and they estimated the number of stages at about six.

## The Genes Turn Out to Be Ours

The molecular identification began with Rous's chicken virus, which had been kept alive in laboratories as a curiosity. By the 1970s the gene responsible for its transforming power had been localised: *src*. In 1976 {{fig:varmus|Harold Varmus}} and {{fig:bishop|J. Michael Bishop}}, with Dominique Stehelin and Peter Vogt, used a radioactive probe for viral *src* to look for related sequences in the DNA of *uninfected* chickens — and found one. So did every other vertebrate they tested. The virus had not invented a cancer gene; it had picked up a normal gene for growth control, some time in the past, and carried a damaged copy.

This reframed everything. Cancer genes are not foreign; they are the cell's own machinery stuck in the on position, and a virus is only one of the ways to break them. In 1982 three groups pulled an active oncogene straight out of a human bladder carcinoma and found it differed from the normal *RAS* gene by a single base.

The other class of gene was harder to see, because losing something is harder to detect than gaining it, and the story of p53 shows how hard. A 53-kilodalton protein found in 1979 bound to a viral antigen was abundant in transformed cells and, when introduced into cells, helped transform them. It was classified as an oncogene and studied as one for ten years. Then {{fig:vogelstein|Bert Vogelstein}}'s group found that colorectal tumours have lost the gene from both copies of chromosome 17, and {{fig:levine|Arnold Levine}}'s group discovered that the clones everyone had been working with were mutants. The normal protein is a brake — it arrests or kills damaged cells — and the mutants jam the brake for the remaining normal copy as well. *TP53* is now known to be mutated in roughly half of all human cancers.

## A Closer Look: Three Ways to Count the Hits

**From the age curve.** Suppose a cell must accumulate $k$ specific rare changes, each occurring at a small rate per unit time, in order to become malignant. The probability that all $k$ have happened by time $t$ goes as $t^{k}$, so the *incidence* — the rate at which new cases appear — goes as the derivative,

$$
I(t) \propto t^{\,k-1}.
$$

On log–log axes that is a straight line of slope $k - 1$. For large-bowel cancer the observed slope is about 5, so $k \approx 6$. The same arithmetic explains the brutal age dependence in ordinary terms: if incidence rises as the fifth power of age, then doubling age from 40 to 80 multiplies it by

$$
2^{5} = 32.
$$

Cancer is overwhelmingly a disease of the old not because old tissues are weak but because the required events take that long to pile up in one lineage.

**From a childhood tumour.** {{fig:knudson|Alfred Knudson}} found a case where $k$ is small enough to see. Retinoblastoma occurs in two forms. In the hereditary form, tumours appear in infancy, usually in both eyes, often at several points in each retina; in the sporadic form, later, in one eye, singly. He showed that this is what a two-event process looks like when the first event is either inherited or not.

If a hereditary patient already carries one defective copy in every retinal cell, only one further event is needed, so tumours appear at a rate roughly constant in time: the number per patient follows a Poisson distribution, and Knudson's data fitted a mean of about three. The chance of having no tumour at all in either eye is then $e^{-3} \approx 5\%$, which matches the small fraction of carriers who escape. For sporadic cases both events must happen in the same cell, a far rarer coincidence, producing one tumour, later, and almost never two.

The prediction hidden in this is the striking part. For the inherited form to act as one hit, the mutation must *remove* a function rather than add one, and the second event must remove the remaining copy — so the gene involved is a brake, and cancer requires losing both copies of it. That was 1971. *RB1* was cloned in 1986 and behaved exactly so.

**From the genomes.** The third count came from sequencing. A typical adult solid tumour carries thousands of somatic mutations, the great majority of them irrelevant passengers. Distinguishing drivers requires statistics — a gene mutated more often than the local background rate predicts, or mutated at a specific site repeatedly. The 2013 synthesis of thousands of tumours gave the answer: **two to eight driver mutations** per tumour, falling into about a dozen pathways.

Three methods, three eras, three kinds of data: an age curve from 1954, 48 childhood cases from 1971, and whole-genome sequencing from 2013. All land on a handful of required events. That convergence is the strongest evidence the field has that the multistage clonal picture is right, and it is the reason the number of steps is now treated as a fact rather than a model parameter.

## A Clone Under Selection

What holds the picture together is that a tumour is an evolving population. Peter Nowell set this out in 1976: the cells of a tumour are a clone with variation, their environment selects among them, and treatment is a selection pressure like any other. This is why resistance emerges — not because cells learn, but because the rare cell that already had the resistant mutation is the one that survives and repopulates. It is the same arithmetic as the resistance calculation in [pharmacology](/biology/pharmacology/) and the quasispecies problem in [virology](/biology/virology/), applied to a lineage of human cells.

It also explains the field's hardest unsolved problem. Metastasis is what kills, and sequencing has not found mutations specific to it. If the capacity to spread comes from the state a cell is in rather than from a gene it acquired, then the thing to find is not another driver but a configuration — which is a considerably harder object to look for, and the reason the most lethal step in the process is the least understood.
