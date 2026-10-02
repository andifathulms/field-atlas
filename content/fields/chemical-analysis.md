---
id: chemical-analysis
domain: chemistry
thread: analysis
name: Quantitative Analysis
parent_ids:
  - chemical-composition
era_emerged: 1824 – 1990
core_question: How much of a substance is present in a sample, and how well can that number be known?

summary: |-
  Chemistry's oldest service to the rest of the world is to say what is in something and how much. The techniques that made it reliable are nineteenth-century and mostly unglamorous: weigh a precipitate, titrate to a colour change, burn a sample and weigh the products. What made them *analysis* rather than guesswork is the discipline around them — a systematic scheme for identifying ions in an unknown, a standard against which a reagent's strength is checked, a stated uncertainty.

  The subject's central and least appreciated result is about where the error comes from. An instrument reporting a concentration to four figures tells you about the aliquot it was given; whether that aliquot represents the lorryload of ore, the field of grain or the patient is a different question, and usually a much larger source of error. Pierre Gy formalised this in the 1950s, and the arithmetic is unforgiving: a heterogeneous material sampled at the gram scale can give an answer wrong by tens of per cent while every measurement in the laboratory is good to a tenth.

key_ideas:
  - term: Titration
    definition: >-
      Adding a reagent of known strength until a reaction is just complete, and reading the volume. It
      converts an amount into a volume measurement, which is cheap, fast and — with a good endpoint —
      accurate to a few parts in a thousand.
    turning_point_id: gay-lussac-titrimetry
  - term: Systematic qualitative analysis
    definition: >-
      A fixed sequence of reagents that divides the cations in an unknown into groups and then separates
      the members of each. It makes identification a procedure that a student can follow rather than a
      skill, and it is how the composition of minerals was established across the nineteenth century.
    turning_point_id: fresenius-scheme
  - term: Beer–Lambert law
    definition: >-
      Absorbance is proportional to concentration and to path length. It turns a colour into a number,
      and it underlies every spectrophotometric measurement, with the proviso that it fails at high
      concentrations and with stray light.
    turning_point_id: beer-lambert-law
  - term: Microanalysis
    definition: >-
      Performing elemental analysis on milligrams rather than grams. It made analysis possible on
      substances available only in small quantity, which is most natural products, and required a balance
      and a technique an order of magnitude better than before.
    turning_point_id: pregl-microanalysis
  - term: Traceability
    definition: >-
      An unbroken chain of comparisons linking a measurement to a national or international standard,
      with an uncertainty stated at each step. It is what makes two laboratories' numbers comparable, and
      it is a bureaucratic achievement as much as a scientific one.
    turning_point_id: reference-materials
  - term: Sampling error
    definition: >-
      The difference between the composition of the portion analysed and that of the material it came
      from. For heterogeneous solids it is usually the dominant uncertainty, and it cannot be reduced by
      improving the instrument.
    turning_point_id: gy-sampling-theory

turning_points:
  - id: gay-lussac-titrimetry
    date: 1824 – 1835
    type: TECHNIQUE-INVENTED
    title: Measuring by volume
    description: >-
      Joseph Louis Gay-Lussac develops volumetric analysis into a reliable method: a solution of known
      strength is added from a graduated tube until an indicator shows the reaction complete, and the
      volume gives the amount. He applies it to silver assay and to bleaching powder, publishing
      procedures precise enough for commerce. Titration is faster than weighing a precipitate, needs no
      filtration or drying, and became the standard industrial method for a century and a half.
    contested: false
    sources:
      - citation: "Gay-Lussac, J. L. (1832). Instruction sur l'essai des matières d'argent par voie humide. Imprimerie Royale, Paris."
        url: null
      - citation: "Szabadváry, F. (1966). History of Analytical Chemistry. Pergamon, chapter 10."
        url: null

  - id: fresenius-scheme
    date: 1841 – 1862
    type: TECHNIQUE-INVENTED
    title: Fresenius makes identification a procedure
    description: >-
      Carl Remigius Fresenius publishes a systematic scheme for qualitative analysis: treat the unknown
      with a fixed sequence of reagents that precipitate the cations in groups, then separate within each
      group by further reactions. His textbook ran to seventeen editions and was translated everywhere, he
      founded the first laboratory devoted to analysis and the first analytical journal, and the scheme
      taught generations to work by procedure rather than by intuition.
    contested: false
    sources:
      - citation: "Fresenius, C. R. (1841). Anleitung zur qualitativen chemischen Analyse. Vieweg, Braunschweig."
        url: null
      - citation: "Szabadváry, F. (1966). History of Analytical Chemistry. Pergamon."
        url: null

  - id: beer-lambert-law
    date: 1729 – 1852
    type: MECHANISM-ESTABLISHED
    title: Colour becomes a measurement
    description: >-
      Pierre Bouguer and Johann Heinrich Lambert establish that light is attenuated in proportion to the
      thickness of the absorbing layer, and August Beer shows in 1852 that the same proportionality holds
      for the concentration of an absorbing solute. The combined law makes absorbance — the logarithm of
      the ratio of incident to transmitted intensity — directly proportional to concentration, which is
      the basis of colorimetry and of every spectrophotometric assay since.
    contested: false
    sources:
      - citation: "Beer, A. (1852). Bestimmung der Absorption des rothen Lichts in farbigen Flüssigkeiten. Annalen der Physik und Chemie 86: 78–88."
        url: null
      - citation: "Mayerhöfer, T. G., Pahlow, S. & Popp, J. (2020). The Bouguer–Beer–Lambert law: shining light on the obscure. ChemPhysChem 21: 2029–2046."
        url: null

  - id: pregl-microanalysis
    date: 1911 – 1923
    type: TECHNIQUE-INVENTED
    title: Analysis on milligrams
    description: >-
      Elemental analysis by combustion needed a few hundred milligrams, which is more than many natural
      products are available in. Fritz Pregl, frustrated by having only small quantities of bile acids,
      redesigns the apparatus and the balance until carbon, hydrogen and nitrogen can be determined on
      three to five milligrams with the same accuracy. The 1923 Nobel Prize followed, and the
      quantity of material a chemist needs to characterise a compound fell by two orders of magnitude.
    contested: false
    sources:
      - citation: "Pregl, F. (1917). Die quantitative organische Mikroanalyse. Springer, Berlin."
        url: null
      - citation: "Niederl, J. B. (1938). Fritz Pregl and quantitative organic microanalysis. Journal of Chemical Education 15: 191–194."
        url: null

  - id: gy-sampling-theory
    date: 1950 – 1979
    type: MECHANISM-ESTABLISHED
    title: Gy shows where the error is
    description: >-
      Pierre Gy, working on ore grading in French mines, develops a theory of sampling for heterogeneous
      materials and derives the minimum mass a representative sample must have. The result depends on the
      size of the largest particles, cubed, so halving the grain size by crushing reduces the required
      sample mass eightfold. The theory shows that for many real materials the sampling error dwarfs the
      analytical error, and that no improvement in instrumentation touches it.
    contested: false
    sources:
      - citation: "Gy, P. (1979). Sampling of Particulate Materials: Theory and Practice. Elsevier."
        url: null
      - citation: "Petersen, L., Minkkinen, P. & Esbensen, K. H. (2005). Representative sampling for reliable data analysis: theory of sampling. Chemometrics and Intelligent Laboratory Systems 77: 261–277."
        url: null

  - id: reference-materials
    date: 1906 – 1990
    type: TECHNIQUE-INVENTED
    title: Standards that make numbers comparable
    description: >-
      The United States National Bureau of Standards begins issuing certified samples of steel and iron in
      1906, with their composition established by multiple independent methods, so that any laboratory can
      check its procedure against a known answer. The idea grew into a system of certified reference
      materials, interlaboratory comparisons and formal traceability to the SI, which is what allows a
      result measured in one country to be accepted in another — and which exposed how often
      laboratories using the same method disagreed.
    contested: false
    sources:
      - citation: "Cali, J. P. & Reed, W. P. (1976). The role of the National Bureau of Standards in reference materials. National Bureau of Standards Special Publication 408."
        url: null
      - citation: "Thompson, M. & Wood, R. (1993). The international harmonised protocol for the proficiency testing of analytical chemistry laboratories. Pure and Applied Chemistry 65: 2123–2144."
        url: null

open_problems:
  - id: representative-sampling
    name: Knowing whether a sample represents anything
    status: open
    status_note: Open as of 2026; sampling uncertainty is rarely estimated and often exceeds analytical uncertainty.
    description: >-
      Analytical uncertainty is routinely quantified; sampling uncertainty usually is not, although for
      heterogeneous materials it is the larger of the two by an order of magnitude or more. There is no
      general method for estimating it in advance for a material whose heterogeneity has not been
      characterised — which includes contaminated land, food consignments, mineral deposits and clinical
      specimens.
    why_hard: >-
      Estimating the sampling variance requires knowing the scale and amplitude of the heterogeneity,
      which is itself a sampling problem. Gy's theory handles particulate materials with a known size
      distribution; it does not cover segregation, clustering at scales between grain and lot, or the
      biological variability of a clinical sample. And the cost of taking enough material is usually
      what the exercise is trying to avoid.
    unlocks: >-
      Decisions worth very large sums — whether a cargo meets specification, whether a site is
      contaminated, whether a batch of medicine is uniform — rest on measurements whose dominant
      uncertainty is unestimated.
    sources:
      - citation: "Ramsey, M. H. & Ellison, S. L. R. (eds) (2007). Measurement Uncertainty Arising from Sampling. Eurachem."
        url: null
      - citation: "Esbensen, K. H. & Wagner, C. (2014). Theory of sampling: four critical success factors before analysis. Journal of AOAC International 97: 1–7."
        url: null

applications:
  - area: Trade and regulation
    title: Numbers that money depends on
    description: >-
      The price of an ore cargo, the strength of a fertiliser, the purity of a pharmaceutical and the
      declared composition of a food are all contractual quantities established by analysis, with agreed
      methods and agreed tolerances. Assay disputes are settled by referee laboratories against certified
      reference materials, which is why the apparatus of traceability exists at all.
    sources:
      - citation: "Thompson, M. & Wood, R. (1993). The international harmonised protocol for the proficiency testing of analytical chemistry laboratories. Pure and Applied Chemistry 65: 2123–2144."
        url: null
  - area: Environmental monitoring
    title: Parts per billion, and what they mean
    description: >-
      Detecting lead in drinking water or dioxins in soil at parts per billion required the detection
      limits that instrumental methods brought, and it created a problem the methods do not solve:
      at those levels the analyte in the laboratory's own glassware, reagents and air becomes comparable
      to the analyte in the sample. Blank control, clean rooms and isotope dilution exist because of it.
    sources:
      - citation: "Patterson, C. C. (1965). Contaminated and natural lead environments of man. Archives of Environmental Health 11: 344–360."
        url: null
  - area: Medicine
    title: A reference range is an analytical construct
    description: >-
      A clinical result is interpreted against a range derived from a population measured by some method,
      so changing the method shifts the range. Standardising creatinine and HbA1c measurement across
      laboratories took decades of interlaboratory comparison, and until it was done the same patient
      could be diabetic in one hospital and not in another.
    domain: biology
    field_id: epidemiology
    sources:
      - citation: "Miller, W. G. et al. (2011). Roadmap for harmonization of clinical laboratory measurement procedures. Clinical Chemistry 57: 1108–1117."
        url: null

further_reading:
  - citation: "Szabadváry, F. (1966). History of Analytical Chemistry. Pergamon."
    url: null
    note: The standard history, from assaying to instrumental methods, strong on the nineteenth century.
  - citation: "Ramsey, M. H. & Ellison, S. L. R. (eds) (2007). Measurement Uncertainty Arising from Sampling. Eurachem."
    url: null
    note: Short, practical, and the clearest statement of why the sample dominates the error budget.
  - citation: "Currie, L. A. (1995). Nomenclature in evaluation of analytical methods. Pure and Applied Chemistry 67: 1699–1723."
    url: null
    note: What detection limits, blanks and uncertainties actually mean, stated carefully.
---

## Procedures Instead of Skill

Analysis was the first thing chemistry sold. Assayers established the silver content of coin and the metal content of ore long before anyone knew what an element was, and they did it by weighing: dissolve, precipitate, filter, dry, weigh. Gravimetry is slow, demands care at every step, and is accurate — the reference methods against which modern instruments are calibrated are still gravimetric.

Two nineteenth-century developments turned it into a discipline. {{fig:gay-lussac|Gay-Lussac}} made volumetric analysis reliable: a reagent of known strength added from a graduated tube until an indicator changes, with the volume giving the amount. A titration takes minutes where a gravimetric determination takes a day, and it reaches a few parts per thousand, which is enough for commerce. His procedures for silver assay were adopted by the French mint.

{{fig:fresenius|Carl Remigius Fresenius}} did something less tangible and more consequential. His 1841 scheme for qualitative analysis prescribes a sequence: add hydrochloric acid and whatever precipitates belongs to one group, then hydrogen sulfide for the next, then ammonium sulfide, and so on, each group then separated internally by further reactions. The point is that the sequence is *fixed*. A student who follows it correctly identifies the metals present without needing judgement, and the composition of thousands of minerals was established this way. Fresenius founded the first laboratory devoted to analysis and the first journal for it, and his textbook ran through seventeen editions.

{{fig:beer|August Beer}} supplied the third ingredient in 1852 by making colour quantitative. Light passing through an absorbing solution is attenuated in proportion to both the path length and the concentration, so the logarithm of the attenuation is proportional to concentration — which means a colour can be read off a scale. Nearly every clinical and environmental assay performed today is a descendant.

## What a Number Needs Behind It

A result consists of a number and a statement of how much to trust it, and the second part is the harder half. Four pieces of apparatus, none of them an instrument, do that work.

A **blank** is the whole procedure carried out with no sample: same reagents, same glassware, same operator. Whatever it reports is contributed by the process rather than the specimen, and at trace levels it is frequently the larger part of the signal. Clair Patterson's lead measurements in the 1960s are the standard case — the figures then accepted for natural lead concentrations were almost entirely laboratory contamination, and establishing the true values required rebuilding the laboratory in order to lower the blank by three orders of magnitude.

A **calibration** relates signal to concentration, using standards of known composition, and it has to be re-established often enough that drift does not matter. The *detection limit* then follows from the blank's variability, conventionally as three times its standard deviation — which makes a detection limit a property of the procedure on that day rather than of the instrument, and the reason two laboratories quote different limits for the same method.

A **reference material** checks the whole chain. Its composition has been established independently by several methods, so analysing it answers a question no internal check can: not whether the measurement is reproducible, but whether it is right. Running one alongside real samples converts an unverifiable number into a verified one.

And **proficiency testing** distributes the same material to many laboratories and publishes the spread. Those exercises are humbling and are the main reason the apparatus above exists: when a well-characterised sample is sent to fifty competent laboratories using a published method, the results routinely span a factor of two, and the outliers are rarely the laboratories that suspected a problem.

## A Closer Look: Why the Sample Matters More Than the Instrument

Here is the calculation that the rest of this thread's instrumentation cannot help with.

Take an ore to be assayed for a mineral that makes up 1% of the grains. The rock has been crushed to 1 mm, and its density is 2.7 g/cm³. A 1 mm grain has volume $10^{-3}$ cm³ and so mass

$$
2.7 \times 10^{-3} \text{ g} = 2.7 \text{ mg}.
$$

A 1 gram sample therefore contains

$$
\frac{1}{2.7\times10^{-3}} = 370 \text{ grains},
$$

of which, on average, **3.7** carry the mineral. Grains arrive in the sample independently, so the count follows Poisson statistics, and the relative standard deviation is

$$
\frac{1}{\sqrt{3.7}} = 52\%.
$$

Fifty-two per cent. The instrument may report 0.94% with a precision of 0.1%, and the number means almost nothing about the deposit, because the aliquot it was handed was not representative. No improvement in the spectrometer changes this; the error was committed before the sample reached the laboratory.

Now work out what would be needed. For a relative standard deviation of 1%, the sample must contain

$$
N = \frac{1}{(0.01)^{2}} = 10^{4}
$$

analyte grains, hence $10^{6}$ grains in total, hence a mass of

$$
10^{6} \times 2.7\times10^{-3} = 2{,}700 \text{ g} = 2.7 \text{ kg}.
$$

Nearly three kilograms, to support a measurement made on a few milligrams. That is why mine laboratories handle sacks rather than vials.

The alternative is {{fig:gy|Pierre Gy}}'s: crush finer. Required mass scales as the cube of grain diameter, because grain mass does, so reducing the grain size from 1 mm to 0.1 mm cuts the required sample by a factor of a thousand — from 2.7 kg to 2.7 g. This is exactly why the sample preparation line in an assay laboratory is a sequence of crushers and pulverisers, and why the rule of thumb is that the sample must be *comminuted* before it is divided, never after.

Two further consequences are worth drawing, because they generalise beyond ore.

The error budget of an analysis is a sum of variances, $s^{2}_{\text{total}} = s^{2}_{\text{sampling}} + s^{2}_{\text{preparation}} + s^{2}_{\text{measurement}}$, and the largest term dominates. If sampling contributes 30% and the instrument 1%, improving the instrument to 0.1% changes the total from 30.02% to 30.00%. Effort spent on instrumentation is wasted until the sampling is fixed — which is the single most reliable way to tell a well-run analytical operation from a badly run one.

And the same reasoning applies wherever a small portion stands for a large heterogeneous whole: a biopsy for a tumour, a core for a soil, a swab for a surface, a blood sample for a patient whose analyte concentration varies through the day. The statistics are the same statistics, and in clinical chemistry the biological variability of the patient routinely exceeds the analytical variability of the assay by a factor of several.

## Smaller Samples, and Then Standards

Two later developments complete the classical picture.

{{fig:pregl|Fritz Pregl}} ran out of material. Working on bile acids, which he could obtain only in small quantities, he found that combustion analysis required more sample than he had, and spent years rebuilding the apparatus and the balance until carbon, hydrogen and nitrogen could be determined on three to five milligrams to the same accuracy as on three hundred. The 1923 Nobel Prize was for an improvement in technique, which is unusual, and it mattered because it changed what could be characterised at all: a natural product available in milligram quantity became a compound whose formula could be established.

The last ingredient is institutional. Two laboratories using the same published method on the same material routinely disagreed, by more than either one's stated uncertainty, and nothing internal to either could settle it. The answer was the certified reference material — a sample whose composition has been established by several independent methods and distributed so that anyone can check their procedure against a known answer. The United States National Bureau of Standards began issuing certified steels in 1906; the system of traceability, proficiency testing and stated uncertainty that grew from it is why an analysis performed in one country is accepted in another.

What came next was instrumentation, and it changed the subject's economics completely: methods that separate dozens of components in one run, identify them from their mass to five decimal places, and determine a structure from a spectrum in an afternoon. Those are the four fields that follow, beginning with [chromatography](/chemistry/chromatography/).
