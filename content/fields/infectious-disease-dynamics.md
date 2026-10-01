---
id: infectious-disease-dynamics
domain: biology
thread: disease
name: Infectious Disease Dynamics
parent_ids:
  - epidemiology
  - population-ecology
era_emerged: 1908 – 2020
core_question: What governs whether an infection dies out, settles into a steady endemic level, or sweeps through a population — and what is the minimum intervention that stops it?

summary: |-
  A pathogen in a population is an ecological system: hosts are its resource, immunity is resource depletion, and transmission is a predator's functional response. Treating it that way turns out to be unreasonably powerful. Ronald Ross showed in 1911 that malaria has a mosquito threshold — below a certain density of mosquitoes per person the parasite cannot persist, so eradication does not require killing every mosquito. Kermack and McKendrick proved in 1927 that an epidemic ends while most of the population is still susceptible, because the supply of susceptibles falls below what transmission needs, not because it runs out.

  From those two results came one number that organises the whole subject. The basic reproduction number $R_0$ is the average count of new infections caused by one case in a fully susceptible population. If it exceeds one the infection spreads; the fraction that must be immune to stop it is $1 - 1/R_0$; the size of an unchecked epidemic follows from it. The number is also the field's main weakness: it is an average over a population that is never homogeneous, and most transmission in most outbreaks comes from a small minority of cases.

key_ideas:
  - term: Mass action
    definition: >-
      New infections occur at a rate proportional to the product of the number of infectious and
      the number of susceptible individuals, as if the population mixed like molecules in a gas.
      Every classical model rests on this approximation, and most of the field's corrections are
      attempts to relax it.
    turning_point_id: kermack-mckendrick
  - term: Basic reproduction number
    definition: >-
      $R_0$, the mean number of secondary infections produced by one typical case in a wholly
      susceptible population. Above one the infection invades; below one it dies out. It bundles
      contact rate, transmission probability per contact and infectious duration into a single
      figure.
    turning_point_id: macdonald-r0
  - term: Threshold theorem
    definition: >-
      An epidemic requires the susceptible fraction to exceed $1/R_0$. Two consequences follow:
      the epidemic turns over once immunity reaches $1 - 1/R_0$, and vaccinating that fraction
      protects the rest without immunising them.
    turning_point_id: kermack-mckendrick
  - term: Final size
    definition: >-
      The total fraction infected over the whole epidemic, which is larger than the herd-immunity
      threshold because infections already in progress continue after transmission turns down. It
      solves $1 - z = e^{-R_0 z}$.
    turning_point_id: kermack-mckendrick
  - term: Vectorial capacity
    definition: >-
      For a vector-borne infection, the number of infectious bites one case eventually generates,
      which depends on the square of the biting rate and very steeply on mosquito survival. It is
      why killing adult mosquitoes beats reducing larvae.
    turning_point_id: ross-mosquito-theorem
  - term: Overdispersion
    definition: >-
      The spread in how many people each case infects. When a few cases cause most transmission,
      the same $R_0$ produces a different epidemic: more outbreaks fizzle out, and those that take
      hold grow explosively.
    turning_point_id: model-based-policy

turning_points:
  - id: ross-mosquito-theorem
    date: 1908 – 1911
    type: SYNTHESIS
    title: Ross's mosquito threshold
    description: >-
      Having shown that mosquitoes transmit malaria, Ronald Ross asks the quantitative question:
      how far must mosquito numbers fall for transmission to stop? He writes down equations tracking
      infected people and infected mosquitoes and finds a threshold — below a critical number of
      mosquitoes per person the parasite cannot sustain itself, and malaria disappears without a
      single mosquito being eliminated. The argument was aimed at colonial officials who thought
      eradication meant killing every insect, and it is the first mathematical model used for a
      public-health decision.
    contested: false
    sources:
      - citation: "Ross, R. (1911). The Prevention of Malaria, 2nd edition. John Murray, London."
        url: null
      - citation: "Smith, D. L. et al. (2012). Ross, Macdonald, and a theory for the dynamics and control of mosquito-transmitted pathogens. PLoS Pathogens 8(4): e1002588."
        url: null

  - id: kermack-mckendrick
    date: "1927"
    type: SYNTHESIS
    title: The threshold theorem
    description: >-
      William Kermack and Anderson McKendrick divide a population into susceptible, infectious and
      removed, assume mass-action transmission, and derive two results that were not expected. An
      epidemic cannot begin unless the susceptible density exceeds a threshold, and — the
      surprising part — it ends with a substantial fraction of the population never infected,
      because transmission falls below replacement long before susceptibles are exhausted.
      Epidemics stop for a reason that has nothing to do with running out of people.
    contested: false
    sources:
      - citation: "Kermack, W. O. & McKendrick, A. G. (1927). A contribution to the mathematical theory of epidemics. Proceedings of the Royal Society A 115: 700–721."
        url: null
      - citation: "Heesterbeek, J. A. P. (2002). A brief history of R0 and a recipe for its calculation. Acta Biotheoretica 50: 189–204."
        url: null

  - id: macdonald-r0
    date: 1952 – 1957
    type: SYNTHESIS
    title: Macdonald and the reproduction number
    description: >-
      George Macdonald reworks Ross's malaria model with field data and extracts the quantity that
      organises everything: the basic reproduction rate, the number of new infections one case
      generates. His analysis shows that it depends on the biting rate squared, because the mosquito
      must bite twice — once to acquire the parasite and once to pass it on — and extremely steeply
      on how long mosquitoes live, since the parasite needs about ten days inside the insect. The
      conclusion directed the global malaria programme towards indoor insecticide, which kills adult
      mosquitoes, rather than draining swamps.
    contested: false
    sources:
      - citation: "Macdonald, G. (1952). The analysis of equilibrium in malaria. Tropical Diseases Bulletin 49: 813–829."
        url: null
      - citation: "Macdonald, G. (1957). The Epidemiology and Control of Malaria. Oxford University Press."
        url: null

  - id: smallpox-eradication
    date: 1967 – 1980
    type: SYNTHESIS
    title: Eradication without universal vaccination
    description: >-
      The World Health Organization's intensified programme begins with the goal of vaccinating 80%
      of the population of every endemic country, which proved impossible in practice. William Foege
      and colleagues in Nigeria, short of vaccine, instead traced each case and vaccinated its
      contacts and their contacts — surveillance and containment, or ring vaccination. Smallpox's
      visible rash and absence of symptomless carriers made this work: the last natural case was in
      Somalia in 1977, and eradication was certified in 1980. It remains the only human disease
      eradicated.
    contested: false
    sources:
      - citation: "Fenner, F., Henderson, D. A., Arita, I., Ježek, Z. & Ladnyi, I. D. (1988). Smallpox and its Eradication. World Health Organization."
        url: null
      - citation: "Foege, W. H., Millar, J. D. & Lane, J. M. (1971). Selective epidemiologic control in smallpox eradication. American Journal of Epidemiology 94: 311–315."
        url: null

  - id: anderson-may
    date: 1979 – 1991
    type: SYNTHESIS
    title: Infectious disease as population biology
    description: >-
      Roy Anderson and Robert May, both ecologists, recast the whole field in the language of
      population dynamics: hosts as a resource, immunity as depletion, pathogen virulence as a
      trait under selection. Their 1979 papers and 1991 book connect $R_0$ to measurable quantities
      such as the average age at infection, derive vaccination thresholds for real diseases, explain
      the two-year cycles of measles, and show why vaccinating against rubella at the wrong coverage
      can increase cases of congenital rubella by shifting infection to older ages.
    contested: false
    sources:
      - citation: "Anderson, R. M. & May, R. M. (1979). Population biology of infectious diseases: part I. Nature 280: 361–367."
        url: null
      - citation: "Anderson, R. M. & May, R. M. (1991). Infectious Diseases of Humans: Dynamics and Control. Oxford University Press."
        url: null

  - id: model-based-policy
    date: 2001 – 2020
    type: CONSENSUS-OVERTURNED
    title: Models enter the room where decisions are made
    description: >-
      During Britain's 2001 foot-and-mouth epidemic, models were used in real time to argue for
      culling animals on farms neighbouring infected ones, and some six million animals were
      destroyed. In 2020 model projections of hospital demand were central to decisions to close
      schools, businesses and borders in dozens of countries. In both cases the models supplied
      conditional projections that were widely read as forecasts, and both left a lasting argument
      about how such results should be presented and audited.
    contested: true
    contested_note: >-
      Whether the 2001 contiguous cull was justified is still disputed: critics argue the models
      were fitted to sparse early data and overstated spread, defenders that the epidemic was
      controlled. The 2020 debates concern how sensitive projections were to assumptions about
      contact rates and overdispersion, and whether scenario ranges were communicated honestly. What
      is not disputed is that no agreed standard existed for the independent scrutiny of models that
      justified decisions of that magnitude.
    sources:
      - citation: "Ferguson, N. M., Donnelly, C. A. & Anderson, R. M. (2001). The foot-and-mouth epidemic in Great Britain: pattern of spread and impact of interventions. Science 292: 1155–1160."
        url: null
      - citation: "Kitching, R. P., Thrusfield, M. V. & Taylor, N. M. (2006). A review of foot-and-mouth disease with special consideration for the clinical and epidemiological factors relevant to predictive modelling of the disease. Revue Scientifique et Technique 25: 293–311."
        url: null
      - citation: "Flaxman, S. et al. (2020). Estimating the effects of non-pharmaceutical interventions on COVID-19 in Europe. Nature 584: 257–261."
        url: null

open_problems:
  - id: epidemic-forecasting
    name: Forecasting an epidemic more than a few weeks out
    status: open
    status_note: Open as of 2026; multi-model comparisons find that skill degrades to no better than naive baselines beyond three to four weeks.
    description: >-
      Short-term projections of cases and hospitalisations are now routine and reasonably accurate
      for one to two weeks. Beyond about a month they are not, and the degradation is not a matter of
      computing power or data volume. Behaviour changes in response to the epidemic, new variants
      alter transmissibility, and the parameters being estimated drift while they are being
      estimated.
    why_hard: >-
      The system is reflexive: forecasts change behaviour, which changes the system being forecast.
      Worse, the key parameters are only weakly identifiable from case counts, because a high
      transmission rate with low susceptibility can produce the same curve as the reverse, and
      reporting of cases varies with testing capacity and public attention.
    unlocks: >-
      Decisions about hospital capacity, vaccine allocation and the timing of restrictions are all
      made weeks to months ahead, so the usable forecast horizon directly sets how much of that
      planning can be evidence-based rather than precautionary.
    sources:
      - citation: "Cramer, E. Y. et al. (2022). Evaluation of individual and ensemble probabilistic forecasts of COVID-19 mortality in the United States. PNAS 119(15): e2113561119."
        url: null
      - citation: "Reich, N. G. et al. (2019). A collaborative multiyear, multimodel assessment of seasonal influenza forecasting in the United States. PNAS 116: 3146–3154."
        url: null

applications:
  - area: Vaccination policy
    title: How much coverage is enough
    description: >-
      Target coverage levels are computed from $1 - 1/R_0$ with corrections for vaccine efficacy and
      imperfect mixing: about 95% for measles, 80 to 85% for rubella and mumps, far less for
      diseases with lower $R_0$. The same framework warns when partial coverage is harmful, by
      raising the average age at infection into a range where the disease is more dangerous — the
      reason rubella programmes must either reach high coverage or not start.
    sources:
      - citation: "Anderson, R. M. & May, R. M. (1991). Infectious Diseases of Humans. Oxford University Press, chapters 5 and 6."
        url: null
      - citation: "Fine, P. E. M. (1993). Herd immunity: history, theory, practice. Epidemiologic Reviews 15: 265–302."
        url: null
  - area: Networks
    title: Contact structure and the vanishing threshold
    description: >-
      Replacing mass action with an explicit network of contacts changes the conclusions. On a
      network whose degree distribution has a heavy tail, the epidemic threshold can vanish entirely
      — any transmissibility above zero spreads — and immunising the best-connected nodes is far more
      effective than immunising at random. These results came out of epidemic modelling and are now
      standard in the study of random graphs.
    domain: math
    field_id: graph-theory
    sources:
      - citation: "Pastor-Satorras, R. & Vespignani, A. (2001). Epidemic spreading in scale-free networks. Physical Review Letters 86: 3200–3203."
        url: null
      - citation: "Newman, M. E. J. (2002). Spread of epidemic disease on networks. Physical Review E 66: 016128."
        url: null
  - area: Veterinary and plant health
    title: The same equations for crops and herds
    description: >-
      Foot-and-mouth disease, avian influenza, citrus greening and ash dieback are managed with the
      same framework: estimate the reproduction number from spread between farms or stands, identify
      the kernel describing how transmission falls with distance, and choose a control radius. The
      stakes differ from human epidemiology in that culling is available as an intervention, which
      makes the models' errors expensive in a different currency.
    sources:
      - citation: "Keeling, M. J. et al. (2001). Dynamics of the 2001 UK foot and mouth epidemic. Science 294: 813–817."
        url: null

further_reading:
  - citation: "Anderson, R. M. & May, R. M. (1991). Infectious Diseases of Humans. Oxford University Press."
    url: null
    note: The book that unified the field; still the reference for how R0 connects to observable data.
  - citation: "Keeling, M. J. & Rohani, P. (2008). Modeling Infectious Diseases in Humans and Animals. Princeton University Press."
    url: null
    note: The standard modern text, with the models built up from assumptions that are stated.
  - citation: "Fenner, F. et al. (1988). Smallpox and its Eradication. World Health Organization."
    url: null
    note: 1,460 pages of how an eradication campaign actually works, free online, and unmatched as a record.
---

## A Threshold Instead of an Extermination

{{fig:ronald-ross|Ronald Ross}} proved in 1897 that mosquitoes carry malaria, which won him a Nobel Prize and left the practical question open. Colonial sanitary officers concluded that eradication meant eliminating mosquitoes, which was obviously impossible, and therefore that nothing could be done.

Ross, who had trained in mathematics before medicine, answered with equations. Track two quantities — the fraction of people infected and the fraction of mosquitoes infected — each feeding the other. Infected people infect mosquitoes that bite them; infected mosquitoes infect people. Both populations lose infection through recovery or death. Writing down the balance shows that the system has two possible fates, and which one obtains depends on the product of the rates. Below a critical mosquito density per person, each infection fails on average to replace itself and malaria dies out, whatever its current prevalence. You do not have to kill every mosquito. You have to get below the threshold.

{{fig:kermack|William Kermack}} and {{fig:mckendrick|Anderson McKendrick}} generalised the insight in 1927 in what is still the most-used model in the field. Divide the population into susceptible, infectious and removed; let infection occur in proportion to the product of the first two; let the infectious recover at a constant rate. The result is three differential equations that cannot be solved in closed form and that nonetheless give two exact statements. An epidemic can only start if the susceptible fraction exceeds a threshold. And it ends with a definite fraction never infected at all.

That second result contradicted intuition then and still does. Epidemics do not stop because they run out of people.

## What the Number Was Used For

The reproduction number was being used to make decisions before anyone had written it down carefully. {{fig:macdonald|George Macdonald}} did for malaria in 1952 what Ross had begun, with field data in hand, and extracted a conclusion that reorganised a global programme. The reproduction number for a vector-borne infection depends on the biting rate *squared* — the mosquito must bite once to acquire the parasite and once to transmit it — and on mosquito survival raised to a high power, because the parasite needs about ten days of development inside the insect before it can be passed on. An intervention that shortens adult mosquito life therefore does far more than one that reduces larval numbers. Indoor residual spraying follows directly from the exponent.

The smallpox campaign supplied the other great practical result. The WHO's stated plan was to vaccinate 80% of the population of every endemic country, and in much of west Africa that was not achievable. {{fig:foege|William Foege}}, short of vaccine in eastern Nigeria, instead found each case and vaccinated the people around it, and the people around them. Surveillance and containment worked because smallpox has a visible rash, no symptomless carriers, and relatively slow spread — so cases could be found faster than they transmitted. The last natural case was in 1977, and the disease is the only human infection eradicated. The method does not transfer: polio, with mostly symptomless infection, has resisted the same approach for three decades.

{{fig:roy-anderson|Roy Anderson}} and {{fig:robert-may|Robert May}}, arriving from ecology rather than medicine, completed the unification in 1979. Hosts are a resource that infection depletes and birth replenishes; immunity is depletion; virulence is a trait under selection. The framework explained the two-year cycles of measles in pre-vaccination cities as the time taken for births to restock the susceptible pool, and it yielded a warning that has repeatedly proved right: a vaccination programme that reduces transmission without reaching the threshold raises the average age at infection, and for rubella, chickenpox and polio, infection at an older age is more dangerous.

## A Closer Look: Why an Epidemic Does Not Stop at the Herd-Immunity Threshold

Write $S$, $I$ and $R$ for the fractions susceptible, infectious and recovered, $\beta$ for the transmission rate and $\gamma$ for the recovery rate, so that $R_0 = \beta/\gamma$. The equations are

$$
\frac{dS}{dt} = -\beta S I, \qquad \frac{dI}{dt} = \beta S I - \gamma I, \qquad \frac{dR}{dt} = \gamma I.
$$

Infections grow while $dI/dt > 0$, which requires $\beta S > \gamma$, that is

$$
S > \frac{\gamma}{\beta} = \frac{1}{R_0}.
$$

So prevalence peaks exactly when the susceptible fraction falls to $1/R_0$, and the immune fraction at that moment is the herd-immunity threshold

$$
H = 1 - \frac{1}{R_0}.
$$

At the peak, however, a large number of people are *currently infectious*, and each of them still infects someone — just fewer than one person each on average. Those infections continue, so the epidemic overshoots. Dividing the first equation by the third and integrating gives the final size relation for the fraction $z$ ever infected:

$$
1 - z = e^{-R_0 z}.
$$

Solving numerically:

| $R_0$ | Herd-immunity threshold $1 - 1/R_0$ | Final size $z$ |
|---|---|---|
| 1.5 | 33% | 58% |
| 2.5 | 60% | 89% |
| 5 | 80% | 99.3% |
| 15 (measles) | 93% | >99.99% |

For an infection with $R_0 = 2.5$, letting the epidemic run infects 89% of the population, while reaching the same immunity by vaccination requires 60%. The gap — 29 percentage points of a population — is the overshoot, and it is the entire quantitative case for not relying on infection to produce herd immunity.

Two cautions belong with the table. First, $R_0$ is an average, and the variance matters enormously. If a minority of cases cause most transmission — measured by the dispersion parameter $k$, estimated near 0.1 for SARS-CoV-2 and for SARS before it — then most introductions fizzle out while occasional events infect dozens. With $R_0 = 2.5$ and $k = 0.1$, roughly 10 to 20% of cases account for 80% of transmission. The same mean produces a different epidemic: more failed chains, faster explosions when a chain catches, and interventions aimed at crowded indoor gatherings doing far more than their share.

Second, the final-size formula assumes a homogeneously mixing population with no behaviour change. Real populations are neither, which lowers the effective overshoot and is why observed attack rates in a first wave are usually well below the table's numbers. The structure of the argument survives: the threshold is where transmission turns over, not where the epidemic stops.

## Models in the Room

The last turning point in this thread is not a result but a change in role. In 2001, during Britain's foot-and-mouth epidemic, models fitted to the first weeks' data were used to argue for pre-emptive slaughter on farms adjoining infected ones, and about six million animals were killed. In 2020, projections of hospital demand were central to decisions that closed schools and borders across dozens of countries.

Both episodes exposed the same mismatch. The models produce conditional statements — if contact rates stay at this level, the peak falls here — and they are received as predictions. Their parameters are weakly identified from the available data, as the open problem above describes, so the range of defensible outputs is wide, and which end of that range reaches a minister depends on presentation rather than on epidemiology. The models were not wrong to be used; nothing else answered the question being asked. What was missing, and is still largely missing, is any settled practice for auditing a model that is about to justify a decision of that size — the kind of scrutiny that [statistical inference](/math/statistical-inference/) applies to a published estimate, applied instead to a projection under pressure of days.
