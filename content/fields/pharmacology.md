---
id: pharmacology
domain: biology
thread: disease
name: Pharmacology
parent_ids:
  - biochemistry
  - microbiology
era_emerged: 1878 – 2001
core_question: How can a molecule be chosen or designed to interfere with one process in the body, or in a pathogen, and almost nothing else?

summary: |-
  Every effective drug is an act of discrimination. It must reach a target, bind it tightly enough to matter at an achievable concentration, and leave the rest of a body's tens of thousands of proteins alone. Paul Ehrlich put the principle into a slogan — a substance cannot act unless it is bound — and into practice in 1909, when a systematic search through six hundred arsenic compounds produced the first synthetic drug designed to kill a specific pathogen without killing the patient.

  Pharmacology became quantitative in the 1930s, when A. J. Clark showed that the relation between dose and effect follows the mathematics of molecules binding to a finite number of sites, which made affinity and efficacy measurable. From there the discipline split into finding drugs by screening — the sulfonamides, the antibiotics — and designing them from knowledge of the target, which James Black did for the adrenaline and histamine receptors, and which reached its clearest form in 2001 with a drug built against a single abnormal enzyme found only in one leukaemia. Running underneath all of it is an arms race: any population that reproduces fast enough will evolve around a single drug, which is why serious infections and cancers are treated with combinations.

key_ideas:
  - term: Receptor
    definition: >-
      A specific molecule, usually a protein, to which a drug binds to produce its effect. Langley
      inferred its existence from the fact that nicotine and curare act on the same place in
      opposite ways; Ehrlich from the specificity of dyes and toxins.
    turning_point_id: ehrlich-magic-bullet
  - term: Selective toxicity
    definition: >-
      The difference between the dose that harms the target and the dose that harms the host.
      Ehrlich's chemotherapeutic index is the ratio of the two, and it is the single number that
      decides whether a compound can be a drug at all.
    turning_point_id: ehrlich-magic-bullet
  - term: Dose–response and occupancy
    definition: >-
      Effect rises with dose along a curve that saturates, because there are finitely many receptors.
      Plotted against log dose it is a sigmoid whose midpoint, the concentration giving half the
      maximal effect, measures how tightly the drug binds.
    turning_point_id: clark-dose-response
  - term: Agonist and antagonist
    definition: >-
      An agonist binds and activates; an antagonist binds and blocks. The distinction separates
      affinity, which is about getting there, from efficacy, which is about what happens next, and
      it is what makes receptor blockade a design strategy.
    turning_point_id: black-receptor-design
  - term: Antimetabolite
    definition: >-
      A molecule close enough to a natural substrate to be taken up by an enzyme and wrong enough
      to jam it. Designing one requires knowing the pathway, which is why this approach had to wait
      for biochemistry.
    turning_point_id: elion-hitchings
  - term: Combination therapy
    definition: >-
      Using several drugs with independent mechanisms at once, so that resistance requires several
      simultaneous mutations rather than one. The rationale is arithmetical, and it is the reason
      tuberculosis, HIV and most cancers are never treated with a single agent.
    turning_point_id: haart

turning_points:
  - id: ehrlich-magic-bullet
    date: 1878 – 1909
    type: TECHNIQUE-INVENTED
    title: Ehrlich's magic bullet
    description: >-
      John Newport Langley, finding that nicotine and curare act at the same point in opposite
      directions, infers a "receptive substance" in the tissue. Paul Ehrlich, who had already shown
      that dyes stain some tissues and not others, generalises it: a substance acts only where it
      binds, so a compound might be found that binds a pathogen and not its host. With Sahachiro
      Hata he tests hundreds of arsenic compounds against the syphilis spirochaete, and number 606,
      marketed as Salvarsan in 1910, becomes the first synthetic antimicrobial drug and the most
      prescribed medicine in the world for the next thirty years.
    contested: false
    sources:
      - citation: "Ehrlich, P. & Hata, S. (1910). Die experimentelle Chemotherapie der Spirillosen. Julius Springer, Berlin."
        url: null
      - citation: "Langley, J. N. (1905). On the reaction of cells and of nerve-endings to certain poisons. Journal of Physiology 33: 374–413."
        url: null
      - citation: "Bosch, F. & Rosich, L. (2008). The contributions of Paul Ehrlich to pharmacology. Pharmacology 82: 171–179."
        url: null

  - id: clark-dose-response
    date: 1926 – 1937
    type: SYNTHESIS
    title: Clark makes the dose–response curve a measurement
    description: >-
      Alfred Joseph Clark applies the mathematics of adsorption to drugs acting on frog hearts and
      muscles, and shows that the relation between concentration and effect follows the same
      hyperbolic law that describes molecules occupying a finite number of binding sites — the form
      Michaelis and Menten had derived for enzymes. Affinity becomes a number, extractable from a
      curve; a drug's potency and its maximum effect become separate, measurable properties. It is
      the point at which pharmacology stops being a catalogue of effects.
    contested: false
    sources:
      - citation: "Clark, A. J. (1933). The Mode of Action of Drugs on Cells. Edward Arnold, London."
        url: null
      - citation: "Colquhoun, D. (2006). The quantitative analysis of drug–receptor interactions: a short history. Trends in Pharmacological Sciences 27: 149–157."
        url: null

  - id: sulfa-drugs
    date: 1932 – 1940
    type: DISCOVERY
    title: The sulfonamides
    description: >-
      Gerhard Domagk, screening dyes at Bayer, finds that a red azo compound protects mice against
      lethal streptococcal infection. Prontosil, announced in 1935, is the first drug effective
      against common bacterial infections, and French workers soon show that the active agent is a
      fragment, sulfanilamide, which the body releases from it — an unpatented molecule that
      anyone could make. By 1940 the mechanism was understood: sulfanilamide mimics
      para-aminobenzoic acid and jams the bacterial synthesis of folate, which humans obtain from
      food and do not make.
    contested: false
    sources:
      - citation: "Domagk, G. (1935). Ein Beitrag zur Chemotherapie der bakteriellen Infektionen. Deutsche Medizinische Wochenschrift 61: 250–253."
        url: null
      - citation: "Woods, D. D. (1940). The relation of p-aminobenzoic acid to the mechanism of the action of sulphanilamide. British Journal of Experimental Pathology 21: 74–90."
        url: null
      - citation: "Lesch, J. E. (2007). The First Miracle Drugs: How the Sulfa Drugs Transformed Medicine. Oxford University Press."
        url: null

  - id: elion-hitchings
    date: 1948 – 1977
    type: TECHNIQUE-INVENTED
    title: Designing drugs from a pathway
    description: >-
      George Hitchings and Gertrude Elion take the sulfonamide lesson as a programme: find a
      metabolic step that the target needs and the host does not, or needs less, and build a
      molecule close enough to the substrate to be accepted and wrong enough to block the enzyme.
      From nucleic acid metabolism alone they produce 6-mercaptopurine for childhood leukaemia,
      allopurinol for gout, azathioprine for transplant rejection, pyrimethamine for malaria, and in
      1977 acyclovir, the first antiviral selective enough to be safe — it is only activated by an
      enzyme the herpes virus brings with it.
    contested: false
    sources:
      - citation: "Elion, G. B. (1989). The purine path to chemotherapy. Science 244: 41–47."
        url: null
      - citation: "Elion, G. B. et al. (1977). Selectivity of action of an antiherpetic agent, 9-(2-hydroxyethoxymethyl)guanine. PNAS 74: 5716–5720."
        url: null

  - id: black-receptor-design
    date: 1962 – 1976
    type: TECHNIQUE-INVENTED
    title: Black designs against a receptor
    description: >-
      James Black reasons that angina is best treated not by dilating arteries but by reducing the
      heart's demand for oxygen, which means blocking the receptor through which adrenaline drives
      it. Propranolol, from 1964, is the result, and beta-blockers became the standard treatment for
      angina, hypertension and arrhythmia. He then repeats the method on a receptor nobody had
      isolated: inferring a second class of histamine receptor in the stomach from pharmacological
      data alone, he produces cimetidine, which made most ulcer surgery unnecessary.
    contested: false
    sources:
      - citation: "Black, J. W. & Stephenson, J. S. (1962). Pharmacology of a new adrenergic beta-receptor-blocking compound. The Lancet 280: 311–314."
        url: null
      - citation: "Black, J. W., Duncan, W. A. M., Durant, C. J., Ganellin, C. R. & Parsons, E. M. (1972). Definition and antagonism of histamine H2-receptors. Nature 236: 385–390."
        url: null

  - id: haart
    date: 1995 – 1996
    type: SYNTHESIS
    title: Three drugs at once
    description: >-
      Single antiretroviral drugs reduced HIV in the blood for a few months and then failed as
      resistant virus took over. Measurements by David Ho and Alan Perelson of how fast the virus
      turns over — a population replaced every day or two, with around $10^{10}$ new virions
      produced daily — explained why, and implied the remedy: enough drugs with independent
      resistance pathways that no single mutation escapes all of them. Three-drug combinations
      announced in 1996 drove viral load below detection and kept it there, turning a fatal
      infection into a managed condition.
    contested: false
    sources:
      - citation: "Ho, D. D. et al. (1995). Rapid turnover of plasma virions and CD4 lymphocytes in HIV-1 infection. Nature 373: 123–126."
        url: null
      - citation: "Perelson, A. S., Neumann, A. U., Markowitz, M., Leonard, J. M. & Ho, D. D. (1996). HIV-1 dynamics in vivo. Science 271: 1582–1586."
        url: null
      - citation: "Gulick, R. M. et al. (1997). Treatment with indinavir, zidovudine, and lamivudine in adults with HIV infection. New England Journal of Medicine 337: 734–739."
        url: null

  - id: imatinib
    date: 1996 – 2001
    type: SYNTHESIS
    title: A drug against one abnormal enzyme
    description: >-
      Chronic myeloid leukaemia has a single, consistent cause: a translocation between chromosomes
      9 and 22, found by Peter Nowell in 1960 and characterised by Janet Rowley in 1973, which fuses
      two genes into a permanently active tyrosine kinase. Nicholas Lydon's chemists find a compound
      that occupies that kinase's ATP pocket, and Brian Druker shows it kills the leukaemic cells and
      spares normal ones. In the 1998 trial, 53 of 54 patients achieved remission. Five-year survival
      for the disease rose from around 30% to about 90%.
    contested: false
    sources:
      - citation: "Druker, B. J. et al. (2001). Efficacy and safety of a specific inhibitor of the BCR-ABL tyrosine kinase in chronic myeloid leukemia. New England Journal of Medicine 344: 1031–1037."
        url: null
      - citation: "Rowley, J. D. (1973). A new consistent chromosomal abnormality in chronic myelogenous leukaemia. Nature 243: 290–293."
        url: null

open_problems:
  - id: antimicrobial-resistance
    name: Staying ahead of resistance
    status: open
    status_note: Open as of 2026; no new class of antibiotic against Gram-negative bacteria has reached wide clinical use since the 1960s.
    description: >-
      Resistance is not a failure of any particular drug but the expected behaviour of a population
      that reproduces quickly under selection. Every antibiotic class has been met with resistance,
      usually within years of introduction, and the pipeline of new classes has nearly stopped —
      partly for scientific reasons, since Gram-negative bacteria have an outer membrane and efflux
      pumps that exclude most compounds, and partly economic, since a drug that should be reserved
      for emergencies cannot be sold in volume.
    why_hard: >-
      The targets that are both essential and absent from human cells are few and have all been
      used. Compounds that cross the Gram-negative envelope must satisfy chemical constraints that
      conflict with the ones that make a molecule a good inhibitor. And resistance genes already
      exist in environmental bacteria, so deployment selects rather than creates them.
    unlocks: >-
      Routine surgery, chemotherapy, transplantation and intensive care all assume that bacterial
      infection can be treated. Sustaining that assumption for another century requires either new
      chemistry or a different strategy altogether, such as phages, antibodies, or targeting
      virulence instead of growth.
    sources:
      - citation: "O'Neill, J. (2016). Tackling Drug-Resistant Infections Globally: Final Report and Recommendations. Review on Antimicrobial Resistance, London."
        url: null
      - citation: "Lewis, K. (2020). The science of antibiotic discovery. Cell 181: 29–45."
        url: null

applications:
  - area: Clinical medicine
    title: Drugs as the main tool of treatment
    description: >-
      Of the interventions that extended life expectancy in the twentieth century, pharmacology
      supplies a large share: antibiotics for infection, antihypertensives and statins for
      cardiovascular disease, insulin and metformin for diabetes, antiretrovirals for HIV,
      anaesthetics and analgesics that make surgery possible. Each is a molecule chosen for binding
      one target more than everything else.
    sources:
      - citation: "Rang, H. P., Ritter, J. M., Flower, R. J. & Henderson, G. (2019). Rang & Dale's Pharmacology, 9th edition. Elsevier."
        url: null
  - area: Differential equations
    title: Pharmacokinetics as a compartment model
    description: >-
      Deciding a dose and an interval is a problem in differential equations: the body is treated as
      one or two well-mixed compartments, the drug enters, distributes and is cleared at rates
      proportional to concentration, and the resulting exponentials determine the half-life, the
      steady-state level after repeated doses, and how long to wait between them. The compartment
      models of pharmacokinetics are among the oldest applied uses of linear systems of
      differential equations, and the inverse problem — fitting rates from sparse blood samples —
      drove work on parameter identifiability.
    domain: math
    field_id: differential-equations
    sources:
      - citation: "Gibaldi, M. & Perrier, D. (1982). Pharmacokinetics, 2nd edition. Marcel Dekker."
        url: null
      - citation: "Bellman, R. & Åström, K. J. (1970). On structural identifiability. Mathematical Biosciences 7: 329–339."
        url: null
  - area: Agriculture
    title: Where most antibiotics are used
    description: >-
      A large share of global antibiotic consumption by mass goes to livestock, much of it for growth
      promotion and prophylaxis rather than treatment of disease. The practice selects for resistance
      in bacteria that reach people through food, water and farm workers, which is why several
      countries have banned growth-promotion use and why resistance is managed as an
      agricultural policy question as much as a clinical one.
    sources:
      - citation: "Van Boeckel, T. P. et al. (2015). Global trends in antimicrobial use in food animals. PNAS 112: 5649–5654."
        url: null

  - area: Chemistry
    title: A regulatory requirement that created a field
    description: >-
      Once regulators required single enantiomers rather than mixtures, making one hand of a molecule
      at scale stopped being an academic exercise and became a manufacturing necessity. Asymmetric
      catalysis was developed largely in response — the first industrial example, Knowles's route to
      L-DOPA, was a pharmaceutical process — and the demand continues to set which chemistry is worth
      developing.
    domain: chemistry
    field_id: catalysis
    sources:
      - citation: "Agranat, I., Caner, H. & Caldwell, J. (2002). Putting chirality to work: the strategy of chiral switches. Nature Reviews Drug Discovery 1: 753–768."
        url: null
further_reading:
  - citation: "Lesch, J. E. (2007). The First Miracle Drugs. Oxford University Press."
    url: null
    note: How the sulfonamides changed what medicine thought it could do, and why that is forgotten.
  - citation: "Colquhoun, D. (2006). The quantitative analysis of drug–receptor interactions: a short history. Trends in Pharmacological Sciences 27: 149–157."
    url: null
    note: Where the dose–response mathematics came from, by someone who worked on its foundations.
  - citation: "Le Fanu, J. (2011). The Rise and Fall of Modern Medicine, revised edition. Little, Brown."
    url: null
    note: A sceptical account of the therapeutic era, useful as a counterweight to triumphal histories.
---

## Nothing Acts Unless It Binds

Two lines of work converged on the same idea around 1900. {{fig:langley|John Newport Langley}}, studying the nerve endings in muscle, found that nicotine stimulates where curare blocks, and that the two interfere with each other rather than with the nerve or the muscle. Something in the tissue must be the point of attachment for both — a "receptive substance", which is where the word receptor comes from.

{{fig:paul-ehrlich|Paul Ehrlich}} came from staining. He had spent years finding dyes that mark one tissue, one cell type, one granule and nothing else, and he drew the obvious conclusion: chemical affinity is specific enough to discriminate between parts of a body. If a dye can find one structure, a poison can find one organism. *Corpora non agunt nisi fixata* — substances do not act unless bound.

Making that into a drug took a systematic search. Ehrlich and {{fig:hata|Sahachiro Hata}} worked through hundreds of organic arsenic compounds against the spirochaete of syphilis, looking for one that killed the organism at a dose a rabbit could survive. Compound 606, marketed as Salvarsan in 1910, was it. The drug was difficult and dangerous — a weekly intravenous infusion, for over a year, with serious toxicity — and it was the only effective treatment for a common fatal disease, and it was *designed*, in the sense that the search was directed by a principle rather than by folklore.

Ehrlich also gave the field its central number. The chemotherapeutic index is the ratio of the dose that harms the host to the dose that harms the target. Everything else about a drug is negotiable; a ratio near one means there is no drug.

## From Effects to Measurements

{{fig:aj-clark|Alfred Joseph Clark}} turned the subject into a quantitative science in the 1930s by assuming the simplest possible thing: a drug molecule occupies a site, there are finitely many sites, and the effect is proportional to the fraction occupied. That gives the same hyperbolic saturation curve that {{fig:leonor-michaelis|Michaelis}} and {{fig:maud-menten|Menten}} had derived for enzymes, described under [biochemistry](/biology/biochemistry/). Plotted against the logarithm of concentration it becomes a sigmoid, and the concentration at half-maximal effect measures affinity.

The consequences are practical. Potency and maximum effect become separate quantities, so a drug can be weak but complete, or strong but partial. Antagonism becomes testable: a competitive blocker shifts the agonist's curve to the right without lowering its ceiling, while a non-competitive one lowers the ceiling. And the existence of a receptor can be *inferred* from the pharmacology before anyone has isolated the protein, which is exactly what {{fig:james-black|James Black}} did twice.

Black's first target was the receptor through which adrenaline drives the heart. The received approach to angina was to widen the coronary arteries; he argued it would be better to reduce the heart's demand for oxygen, by blocking the signal that raises it. Propranolol followed in 1964 and became one of the most-used drugs in the world. He then inferred, from data alone, that histamine acts on a second class of receptor in the stomach distinct from the one antihistamines block, and set his chemists to build an antagonist for it. Cimetidine made most surgery for peptic ulcer unnecessary.

Meanwhile {{fig:gertrude-elion|Gertrude Elion}} and {{fig:hitchings|George Hitchings}} pursued the other strategy: attack a metabolic step. The sulfonamides, found by screening dyes at Bayer, had turned out to work by mimicking a precursor of folate — a vitamin bacteria must synthesise and humans eat, which is the selectivity in one sentence. Elion and Hitchings applied the logic to nucleic acid metabolism deliberately and produced drugs for leukaemia, gout, transplant rejection and malaria from a single pathway. Their best demonstration of selectivity was acyclovir: the compound is inert until phosphorylated, and the enzyme that phosphorylates it efficiently is one the herpes virus supplies. An uninfected cell does essentially nothing with it.

## A Closer Look: Why HIV Takes Three Drugs

The arithmetic that forced combination therapy is worth doing, because it is short and it decided clinical practice.

Measurements in 1995 and 1996 established the scale of HIV replication in an untreated patient: on the order of $10^{10}$ new virions produced per day. The viral reverse transcriptase makes errors at roughly

$$
\mu \approx 3 \times 10^{-5} \text{ per base per replication}.
$$

Suppose resistance to a particular drug requires one specific base change. The number of virions produced each day already carrying it is about

$$
10^{10} \times 3\times10^{-5} = 3\times10^{5}.
$$

Three hundred thousand resistant virions per day, before treatment starts. Monotherapy cannot work: the mutant is not created by the drug, it is merely given the field. This is precisely what was observed — viral load fell for weeks to months, then returned as the resistant lineage took over.

Now two drugs, requiring two independent mutations in the same genome. Assuming independence,

$$
10^{10} \times (3\times10^{-5})^{2} = 10^{10} \times 9\times10^{-10} = 9 \text{ per day}.
$$

Nine doubly resistant virions a day is still certain failure, on a timescale of months rather than weeks.

Three drugs:

$$
10^{10} \times (3\times10^{-5})^{3} = 10^{10} \times 2.7\times10^{-14} = 2.7\times10^{-4} \text{ per day},
$$

or about one triply resistant virion every

$$
\frac{1}{2.7\times10^{-4}} \approx 3{,}700 \text{ days} \approx 10 \text{ years}.
$$

That is the whole argument for triple therapy, and in 1996 it worked as the arithmetic said it would: viral loads fell below detection and stayed there, and HIV became a managed chronic infection.

The assumptions deserve to be stated, because each is a known failure mode. Independence is optimistic — recombination between two virions in a co-infected cell can combine resistance mutations in one step, and a single mutation sometimes confers resistance to several drugs in the same class, which is why combinations must mix mechanisms and not just molecules. The calculation also assumes the drugs reach the virus everywhere; sanctuary sites where concentrations are low support replication and therefore evolution. And it assumes doses are taken, which is why adherence, rather than pharmacology, is the main determinant of treatment failure in practice.

The same arithmetic explains tuberculosis, treated with four drugs for six months, and the resistance that follows interrupted courses. It explains why [cancer](/biology/cancer-biology/) chemotherapy is given in combination — the tumour is also a fast-reproducing population under selection — and why a single targeted agent against a kinase usually buys months before a mutation in the binding pocket appears. Imatinib's unusual durability comes from the leukaemia being driven by one abnormal enzyme on which the cells have become entirely dependent, which is rarer than anyone hoped in 2001.

## The Race That Does Not End

Ehrlich saw the problem in 1907: he reported that trypanosomes exposed to his arsenicals became resistant, and that resistance was inherited. The sulfonamides met resistance within a decade, penicillin within years of mass production, and every class since has followed. The explanation is in the preceding section, applied to bacteria rather than viruses, and it means that resistance is not a sign that a drug was flawed.

What has changed is the supply of replacements. The pathway from a new target to a usable antibiotic against Gram-negative bacteria has produced almost nothing for sixty years, because the chemical properties that let a molecule cross an outer membrane and resist efflux pumps conflict with the properties that make it a good inhibitor. The incentives are also perverse: a drug that should be held in reserve cannot be sold in quantity. The open problem above is the field's clearest case of a difficulty that is simultaneously biochemical, evolutionary and economic, and it is the reason routine surgery, transplantation and cancer treatment — all of which assume infection is treatable — are considered at risk.
