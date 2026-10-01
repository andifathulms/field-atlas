---
id: epidemiology
domain: biology
thread: disease
name: Epidemiology
parent_ids: []
era_emerged: 1662 – 1965
core_question: How can the cause of a disease be identified from patterns in populations, when no experiment on people is permissible?

summary: |-
  Most of what is known about why people fall ill was not discovered in a laboratory. It was inferred from counting: who died, of what, where they lived, what they did. John Graunt began in 1662 by reading London's weekly bills of mortality and building the first life table; William Farr turned the counting into a state function; and by 1950 the method was strong enough to show that smoking causes lung cancer using nothing but interviews with hospital patients.

  The difficulty is permanent and structural. People cannot be assigned at random to smoke, to be poor, or to live beside a motorway, so the comparison groups differ in a thousand unmeasured ways, and any of those ways might be the real cause. Epidemiology is largely a set of defences against that problem: the randomised trial where randomisation is possible, the cohort followed forwards, the case-control study that works backwards from the ill, and Bradford Hill's checklist for deciding when an association deserves to be called a cause. The defences are imperfect, which is why a great many published associations have not survived.

key_ideas:
  - term: Life table
    definition: >-
      A table showing, of a cohort born together, how many survive to each age. It converts raw
      death counts into a comparable measure of mortality, and it is the common ancestor of
      demography, actuarial science and survival analysis.
    turning_point_id: graunt-bills-of-mortality
  - term: Rate and denominator
    definition: >-
      A count of cases means nothing without the population it came from. Farr's insistence on
      dividing by the population at risk, and on standardising for age, is what allows two places
      or two decades to be compared at all.
    turning_point_id: farr-vital-statistics
  - term: Randomised controlled trial
    definition: >-
      Allocate treatment by chance, so that the groups differ only by luck and not by any property
      of the patients, known or unknown. It is the only design that removes confounding by things
      nobody thought to measure.
    turning_point_id: streptomycin-trial
  - term: Case-control and cohort designs
    definition: >-
      A case-control study starts from people who are ill and looks backwards at their exposures; a
      cohort study starts from the exposed and the unexposed and waits. The first is fast and
      vulnerable to how controls were chosen; the second is slow and gives absolute risks.
    turning_point_id: doll-hill-smoking
  - term: Risk factor
    definition: >-
      A measurable characteristic that raises the probability of later disease without being a
      cause in any single case. The concept, named in the Framingham study, made prevention a
      matter of shifting distributions rather than curing individuals.
    turning_point_id: framingham-cohort
  - term: Confounding
    definition: >-
      A third variable associated with both exposure and outcome, which produces an association
      where no causal link exists. Statistical adjustment can remove it only for confounders that
      were measured, which is the permanent weakness of observational work.
    turning_point_id: bradford-hill-criteria

turning_points:
  - id: graunt-bills-of-mortality
    date: "1662"
    type: TECHNIQUE-INVENTED
    title: Graunt reads the bills of mortality
    description: >-
      London's parishes published weekly counts of burials and their causes, kept mainly as a
      plague warning. John Graunt, a haberdasher, analyses decades of them in *Natural and
      Political Observations*: he estimates the city's population, shows that male births slightly
      exceed female, separates steady causes of death from epidemic ones, and builds the first life
      table, estimating how many of a hundred people born survive to each decade. It is the first
      attempt to reason quantitatively about health in a population.
    contested: false
    sources:
      - citation: "Graunt, J. (1662). Natural and Political Observations Mentioned in a following Index, and made upon the Bills of Mortality. London."
        url: null
      - citation: "Rothman, K. J. (1996). Lessons from John Graunt. The Lancet 347: 37–39."
        url: null

  - id: farr-vital-statistics
    date: 1839 – 1852
    type: TECHNIQUE-INVENTED
    title: Farr builds a national register
    description: >-
      William Farr, appointed to the new General Register Office, turns death registration into a
      research instrument. He imposes a classification of causes, insists that counts be divided by
      the population at risk and standardised for age, and publishes annual analyses comparing
      districts and occupations. His study of the 1849 cholera epidemic found mortality falling with
      elevation above the Thames — a real pattern with the wrong explanation, since what fell with
      elevation was the chance of drinking river water.
    contested: false
    sources:
      - citation: "Farr, W. (1852). Report on the Mortality of Cholera in England, 1848–49. HMSO, London."
        url: null
      - citation: "Eyler, J. M. (1979). Victorian Social Medicine: The Ideas and Methods of William Farr. Johns Hopkins University Press."
        url: null

  - id: streptomycin-trial
    date: 1946 – 1948
    type: TECHNIQUE-INVENTED
    title: The streptomycin trial
    description: >-
      The Medical Research Council has a small supply of a promising new antibiotic and many
      patients with pulmonary tuberculosis. Austin Bradford Hill designs the allocation to be
      random, using sealed envelopes drawn in a predetermined order, with concurrent controls
      receiving bed rest alone and X-rays assessed by readers who did not know the allocation. Of
      55 patients given streptomycin, 4 died in six months, against 14 of 52 controls. The design,
      more than the drug, is what the trial established.
    contested: false
    sources:
      - citation: "Medical Research Council (1948). Streptomycin treatment of pulmonary tuberculosis: a Medical Research Council investigation. British Medical Journal 2: 769–782."
        url: null
      - citation: "Chalmers, I. (2003). Fisher and Bradford Hill: theory and pragmatism? International Journal of Epidemiology 32: 922–924."
        url: null

  - id: doll-hill-smoking
    date: 1950 – 1964
    type: DISCOVERY
    title: Smoking causes lung cancer
    description: >-
      Lung cancer deaths in Britain had risen fifteenfold in thirty years, and the suspected causes
      included tarred roads and motor exhaust. Richard Doll and Austin Bradford Hill interview 649
      male lung-cancer patients and matched hospital controls: 0.3% of the cases were non-smokers
      against 4.2% of the controls. Unconvinced by their own case-control design, they then
      recruited 40,000 British doctors and followed them forwards, finding a dose-response
      relationship and, among those who quit, a falling risk.
    contested: true
    contested_note: >-
      Ronald Fisher, the statistician who had done most to establish randomisation, attacked the
      conclusion for a decade, arguing that a genetic predisposition might cause both the smoking
      habit and the cancer, and that the direction of causation was unproven. He was wrong, and the
      objection was legitimate in form: it is exactly what a confounder would look like. The dose-
      response gradient, the fall in risk after quitting, and animal and cellular work answered it.
    sources:
      - citation: "Doll, R. & Hill, A. B. (1950). Smoking and carcinoma of the lung. British Medical Journal 2: 739–748."
        url: null
      - citation: "Doll, R. & Hill, A. B. (1964). Mortality in relation to smoking: ten years' observations of British doctors. British Medical Journal 1: 1399–1410."
        url: null
      - citation: "Fisher, R. A. (1958). Cancer and smoking. Nature 182: 596."
        url: null

  - id: framingham-cohort
    date: 1948 – 1961
    type: SYNTHESIS
    title: Framingham and the risk factor
    description: >-
      Over five thousand residents of Framingham, Massachusetts, are enrolled and examined every
      two years for the rest of their lives, with no particular hypothesis beyond finding what
      precedes heart disease. Blood pressure, cholesterol and smoking emerge as predictors, and in
      1961 the study's authors introduce the term "risk factor". Cardiovascular disease, previously
      regarded as an inevitable consequence of ageing, became something with modifiable
      antecedents.
    contested: false
    sources:
      - citation: "Kannel, W. B., Dawber, T. R., Kagan, A., Revotskie, N. & Stokes, J. (1961). Factors of risk in the development of coronary heart disease. Annals of Internal Medicine 55: 33–50."
        url: null
      - citation: "Mahmood, S. S., Levy, D., Vasan, R. S. & Wang, T. J. (2014). The Framingham Heart Study and the epidemiology of cardiovascular disease. The Lancet 383: 999–1008."
        url: null

  - id: bradford-hill-criteria
    date: "1965"
    type: SYNTHESIS
    title: Association or causation
    description: >-
      In his presidential address to the Royal Society of Medicine, Austin Bradford Hill sets out
      nine considerations for deciding whether an observed association is causal: strength,
      consistency, specificity, temporality, biological gradient, plausibility, coherence,
      experiment and analogy. He is explicit that these are aids to judgement and not a checklist
      to be scored, and that only temporality is strictly necessary. The paper is among the most
      cited in medicine and among the most often used in exactly the way he warned against.
    contested: false
    sources:
      - citation: "Hill, A. B. (1965). The environment and disease: association or causation? Proceedings of the Royal Society of Medicine 58: 295–300."
        url: null
      - citation: "Rothman, K. J., Greenland, S. & Lash, T. L. (2008). Modern Epidemiology, 3rd edition. Lippincott Williams & Wilkins, chapter 2."
        url: null

open_problems:
  - id: observational-reliability
    name: Which observational findings to believe
    status: open
    status_note: Open as of 2026; large trials continue to contradict well-established observational associations.
    description: >-
      Observational epidemiology has produced findings that later trials reversed: hormone
      replacement therapy appeared to protect against heart disease and did not, beta-carotene
      appeared protective against cancer and raised it in smokers, moderate drinking appeared
      beneficial and the appearance largely dissolves once former drinkers are classified
      correctly. Nutritional epidemiology in particular has a poor record, and no agreed way exists
      to tell in advance which associations will hold.
    why_hard: >-
      Adjustment can only remove confounding by variables that were measured, and the variables
      that matter most — how healthy, careful and well-off a person is — are exactly the ones that
      resist measurement. Effect sizes of interest are often small relative to those biases, and
      the analytic choices available in a large dataset are numerous enough that some combination
      will produce a significant result.
    unlocks: >-
      Most public-health guidance concerns exposures that cannot be randomised. Knowing which
      observational designs are trustworthy for which questions would determine how much of that
      guidance is sound.
    sources:
      - citation: "Ioannidis, J. P. A. (2005). Why most published research findings are false. PLoS Medicine 2(8): e124."
        url: null
      - citation: "Lawlor, D. A., Davey Smith, G. & Ebrahim, S. (2004). Commentary: the hormone replacement–coronary heart disease conundrum. International Journal of Epidemiology 33: 464–467."
        url: null

applications:
  - area: Regulation
    title: The evidence that changed tobacco law
    description: >-
      The 1962 Royal College of Physicians report and the 1964 US Surgeon General's report were
      built on case-control and cohort studies, and they began sixty years of advertising bans,
      taxation, labelling and smoke-free legislation. Male smoking prevalence in the United
      Kingdom fell from around 65% in the 1950s to under 15% by the 2020s, and lung cancer
      mortality followed with the expected lag of two to three decades.
    sources:
      - citation: "US Surgeon General (1964). Smoking and Health: Report of the Advisory Committee to the Surgeon General. US Public Health Service."
        url: null
      - citation: "Peto, R. et al. (2000). Smoking, smoking cessation, and lung cancer in the UK since 1950. British Medical Journal 321: 323–329."
        url: null
  - area: Statistics
    title: Survival analysis, invented for a medical question
    description: >-
      Following people until an event occurs produces data that standard regression cannot handle,
      because some subjects are still alive when the study ends. The Kaplan–Meier estimator (1958)
      and David Cox's proportional hazards model (1972) were developed to deal with exactly that,
      and both are now standard statistical tools used far outside medicine, from reliability
      engineering to customer churn.
    domain: math
    field_id: statistical-inference
    sources:
      - citation: "Kaplan, E. L. & Meier, P. (1958). Nonparametric estimation from incomplete observations. Journal of the American Statistical Association 53: 457–481."
        url: null
      - citation: "Cox, D. R. (1972). Regression models and life-tables. Journal of the Royal Statistical Society B 34: 187–220."
        url: null
  - area: Screening
    title: When finding disease early does not help
    description: >-
      Screening programmes are evaluated epidemiologically, and the evaluation has to defeat two
      artefacts. Lead-time bias makes earlier diagnosis look like longer survival even if death
      comes at the same moment, and length bias means screening preferentially finds slow-growing
      tumours that were least dangerous. Only mortality in a randomised population, not survival
      among those diagnosed, distinguishes a useful programme from a harmful one.
    sources:
      - citation: "Welch, H. G. & Black, W. C. (2010). Overdiagnosis in cancer. Journal of the National Cancer Institute 102: 605–613."
        url: null

further_reading:
  - citation: "Rothman, K. J., Greenland, S. & Lash, T. L. (2008). Modern Epidemiology, 3rd edition. Lippincott Williams & Wilkins."
    url: null
    note: The standard graduate text; unusually careful about what study designs can and cannot support.
  - citation: "Doll, R. (2002). Proof of causality: deduction from epidemiological observation. Perspectives in Biology and Medicine 45: 499–515."
    url: null
    note: A retrospective on the smoking argument by the person who made it.
  - citation: "Eyler, J. M. (1979). Victorian Social Medicine. Johns Hopkins University Press."
    url: null
    note: How vital statistics became a state function, and what Farr thought he was doing.
---

## Counting the Dead

London's parishes published a weekly bill of mortality: how many were buried, and of what. It existed as an early-warning system for plague, and nobody had tried to reason from it until {{fig:john-graunt|John Graunt}}, a haberdasher with a taste for arithmetic, worked through several decades of them and published his conclusions in 1662.

He estimated the population of the city, which no one knew. He noticed that slightly more boys than girls are born, consistently, year after year. He separated causes of death that occur at a steady rate from those that come in waves, which is the distinction between endemic and epidemic. And he constructed a table showing how many of a hundred people born would be expected to survive to each decade — the first life table, the ancestor of every actuarial calculation since.

Nearly two centuries later {{fig:william-farr|William Farr}} made the counting official. Appointed to the new General Register Office, he imposed a classification of causes of death, and insisted on two things that look obvious and are not: that counts be divided by the population at risk, and that comparisons between places be standardised for age, since a district full of young people will have fewer deaths whatever its conditions. His analysis of the 1849 cholera epidemic found that mortality fell steadily with height above the Thames, which he attributed to bad air being denser at low elevation. The pattern was real. The explanation was wrong, and the right one — that elevation predicts whose water came from the river — was being assembled a few streets away by {{fig:john-snow|John Snow}}, whose investigation is a waypoint on [microbiology](/biology/microbiology/).

That is the characteristic difficulty of the whole field in one example. An association can be solid and repeatable and still point to the wrong cause.

## Making the Groups Comparable

The only clean way to compare two groups of people is to decide which is which by chance. {{fig:bradford-hill|Austin Bradford Hill}} built the first properly randomised therapeutic trial around a shortage: the Medical Research Council had a little streptomycin and many patients with tuberculosis. Allocation was by sealed envelopes in a predetermined random order, controls received bed rest alone, and the chest X-rays were read by assessors who did not know which patients had received the drug. Four of 55 treated patients died within six months, against 14 of 52 controls.

Randomisation is unavailable for most of what makes people ill. Nobody can be assigned to smoke for thirty years. The two designs that work without it both have a characteristic weakness. A case-control study collects people who already have the disease and compares their reported exposures with those of controls, which is quick and cheap and depends entirely on whether the controls were drawn from the same population as the cases. A cohort study enrols people before anyone is ill and follows them, which gives absolute risks and takes decades.

{{fig:richard-doll|Richard Doll}} and Bradford Hill used both on the same question. In 1950, lung cancer deaths in Britain had risen fifteenfold in three decades, and the leading suspects were tarred roads and car exhaust. Their case-control study of 649 male patients found that almost none of them were non-smokers. Doubting their own design, they then recruited 40,000 doctors and followed them forward for decades, which produced the two findings that settled the matter: risk rose with the number of cigarettes, and it fell after quitting.

{{fig:fisher|Ronald Fisher}}, who had done more than anyone to establish randomisation as a principle, spent a decade arguing that they were wrong — that some constitutional factor might cause both the taste for tobacco and the susceptibility to cancer. He was mistaken, and the objection was exactly the right shape. Confounding by something unmeasured is the permanent occupational hazard of this field, and Fisher's error was not in raising it but in refusing the evidence that answered it.

## A Closer Look: What 649 Interviews Established

Doll and Hill's 1950 study is small enough to work through. Of 649 male lung-cancer patients, 0.3% were non-smokers — two men. Of 649 matched hospital controls, 4.2% were non-smokers, or 27 men. The four cells are:

| | Smokers | Non-smokers |
|---|---|---|
| Lung cancer cases | 647 | 2 |
| Controls | 622 | 27 |

A case-control study cannot give the risk of cancer among smokers, because the number of cases was fixed by the investigators. What it gives is the odds ratio:

$$
\mathrm{OR} = \frac{647 \times 27}{2 \times 622} = \frac{17{,}469}{1{,}244} = 14.0.
$$

The odds of having smoked are fourteen times higher among the cases. For a disease this rare in the population, the odds ratio approximates the relative risk, so smokers are of the order of fourteen times more likely to develop lung cancer.

Now notice what that figure does *not* say. The lifetime risk of lung cancer for a lifelong non-smoker is roughly 0.5%. Multiplying by 14 gives about 7% — a large and terrible number, and also a reminder that most smokers do not get lung cancer, which was a common argument against the finding at the time. A fourteenfold relative risk on a small base is still a small absolute risk for any one person, and an enormous one for a country where most men smoked.

The strength of the association is what makes it hard to explain away, and this is the first of Bradford Hill's nine considerations. Suppose Fisher were right that some genetic factor causes both smoking and cancer. For that confounder to manufacture a fourteenfold association, it would have to be strongly associated with *both* — roughly, if it multiplied cancer risk by $k$ and the odds of smoking by $m$, the spurious association is bounded by something like the smaller of $k$ and $m$. Producing 14 from nothing requires a hidden factor with an effect on cancer larger than almost any known risk factor, and an equally strong effect on behaviour. Possible; implausible; and testable, because it predicts no dose-response and no benefit from quitting.

The cohort study delivered both tests. Doctors smoking 25 or more cigarettes a day had about 20 to 25 times the lung-cancer mortality of non-smokers; those smoking a few had two or three times. Doctors who stopped had risks that declined with years since quitting, approaching but not reaching that of those who never smoked. A constitutional confounder does not behave that way. Changing behaviour changed outcome, which is as close to an experiment as the data could come.

This is the pattern of a successful epidemiological argument: a large effect, a gradient, a reversal on removal of exposure, and a mechanism that fits. Where only the first is available — a modest association, no gradient, no intervention — the record of the field is much worse, which is what the open problem below is about.

## Nine Considerations and Their Misuse

In 1965 Bradford Hill set out what he had learned about the inference. Strength of association, consistency across studies and populations, specificity of effect, temporality — exposure must precede disease — a biological gradient, plausibility of mechanism, coherence with other knowledge, experimental evidence where available, and analogy with similar established causes.

He said plainly that these are not a checklist and cannot be scored, that none except temporality is required, and that the real question is always whether some alternative explanation is more likely than cause and effect. They have been used as a scorecard ever since.

The field's subsequent history has justified his caution. Hormone replacement therapy was observed to protect against heart disease across many cohorts, and the randomised trial found the opposite. Beta-carotene was observed to protect against lung cancer, and the trial found increased incidence among smokers. Both reversals happened because the exposed groups differed systematically from the unexposed in ways the adjustments did not capture, and both are the reason that where randomisation is possible, nothing else is accepted.

Where it is impossible, the field has turned to designs that approximate it: natural experiments, instrumental variables, and Mendelian randomisation, which uses the random allocation of genetic variants at conception as a proxy for assigning an exposure. The methods are increasingly statistical, and the questions increasingly arrive from the laboratory — from the mechanism of [cancer](/biology/cancer-biology/), the transmission of [infection](/biology/infectious-disease-dynamics/), and the effects of the drugs that [pharmacology](/biology/pharmacology/) produces.
