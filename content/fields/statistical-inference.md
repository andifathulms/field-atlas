---
id: statistical-inference
domain: math
thread: statistics
name: Statistical Inference
parent_ids:
  - probability-theory
era_emerged: 1805 – 1935
core_question: How can conclusions about a whole population be drawn from a limited sample, with a known risk of being wrong?

summary: |-
  Statistical inference is probability run backwards. Probability theory starts from a known chance mechanism and predicts the data. Inference starts from the data and asks what mechanism produced them: what the true average is, whether a treatment works, whether two quantities are related. Its answers always carry a margin of error, and its central achievement is to make that margin exact.

  It grew from astronomy, where observations had to be combined, through the study of heredity, where Galton and Pearson measured variation, to agriculture, where Fisher invented the randomised experiment. By 1935 it had the tools still taught today: estimates, confidence intervals, significance tests and p-values. Its success made it the gatekeeper of published science, and the replication crisis of the 2010s showed how badly those tools can be misused.

key_ideas:
  - term: Least squares
    definition: >-
      Choose the values that make the sum of the squared errors as small as possible. It
      is the standard way to fit a line or a curve to noisy measurements.
    turning_point_id: si-least-squares
  - term: Regression
    definition: >-
      Predicting one quantity from another. Galton noticed that extreme parents have
      children closer to the average, "regression to the mean", and the name stuck to the
      whole method.
    turning_point_id: si-galton-regression
  - term: Significance test and p-value
    definition: >-
      The p-value is the probability, if nothing but chance were at work, of seeing data
      at least as extreme as those observed. A small p-value is evidence against pure
      chance, not the probability that chance is the explanation.
    turning_point_id: si-pearson-chi-squared
  - term: Maximum likelihood
    definition: >-
      Estimate an unknown quantity by the value that makes the observed data most
      probable. Fisher argued that in large samples no other method does better, a claim
      later work made precise.
    turning_point_id: si-fisher-likelihood
  - term: Randomisation
    definition: >-
      Assign treatments by chance, so that no hidden factor can systematically favour one
      group. It turns an experiment into a chance mechanism whose behaviour is known
      exactly.
    turning_point_id: si-fisher-likelihood

turning_points:
  - id: si-least-squares
    date: 1805 – 1809
    type: REFORMULATION
    title: The method of least squares
    description: >-
      Adrien-Marie Legendre publishes the method of least squares in 1805, in an appendix
      on the orbits of comets. In 1809 Carl Friedrich Gauss publishes it too, justifies it
      by assuming errors follow the bell-shaped curve now named after him, and says he
      had used it since 1795. Combining imperfect observations became a calculation
      rather than a judgement.
    contested: true
    contested_note: >-
      A priority dispute. Legendre published first and objected to Gauss's claim of
      earlier use. Gauss had told colleagues of the method before 1805, but left little
      published trace of it. Legendre is credited with the first publication, and Gauss
      with the probabilistic justification that made it a method of inference.
    sources:
      - citation: "Legendre, A.-M. (1805). Nouvelles méthodes pour la détermination des orbites des comètes. Courcier, Paris."
        url: null
      - citation: "Stigler, S. M. (1981). Gauss and the invention of least squares. Annals of Statistics 9(3): 465–474."
        url: null

  - id: si-galton-regression
    date: "1886"
    type: REFORMULATION
    title: Galton's regression to the mean
    description: >-
      Comparing the heights of 928 adult children with those of their parents, Francis
      Galton finds that children of very tall or very short parents are, on average,
      closer to the mean than their parents. He calls it regression towards mediocrity,
      fits a regression line to the data, and with it opens the statistical study of how
      two quantities vary together, later made exact as correlation.
    contested: false
    sources:
      - citation: "Galton, F. (1886). Regression towards mediocrity in hereditary stature. Journal of the Anthropological Institute of Great Britain and Ireland 15: 246–263."
        url: null

  - id: si-pearson-chi-squared
    date: "1900"
    type: PROOF
    title: Pearson's chi-squared test
    description: >-
      Karl Pearson gives a single number that measures how far observed counts lie from
      the counts a theory predicts, and works out its probability distribution when the
      theory is true. For the first time a whole theory could be tested against data with
      a stated probability of error. The p-value appears here in its modern form.
    contested: false
    sources:
      - citation: "Pearson, K. (1900). On the criterion that a given system of deviations from the probable in the case of a correlated system of variables is such that it can be reasonably supposed to have arisen from random sampling. Philosophical Magazine (5) 50: 157–175."
        url: null

  - id: si-student-t
    date: "1908"
    type: PROOF
    title: Student's t-distribution
    description: >-
      William Sealy Gosset, a chemist at the Guinness brewery in Dublin, needs to judge
      barley and yeast from a handful of samples. The large-sample methods of the day fail
      when the spread must be estimated from the same few measurements. He finds the
      correct distribution for small samples and publishes it under the pen name
      "Student", because Guinness did not allow its staff to publish under their own
      names.
    contested: false
    sources:
      - citation: "Student (1908). The probable error of a mean. Biometrika 6(1): 1–25."
        url: null

  - id: si-fisher-likelihood
    date: 1922 – 1935
    type: REFORMULATION
    title: Fisher rebuilds statistics
    description: >-
      At the Rothamsted agricultural research station, Ronald Fisher lays out the
      theory of estimation, including maximum likelihood (1922), writes the handbook
      *Statistical Methods for Research Workers* (1925), and in *The Design of
      Experiments* (1935) makes randomisation the foundation of experimental science.
      The analysis of variance, significance at the 5% level and the randomised field
      trial all come from this period.
    contested: false
    sources:
      - citation: "Fisher, R. A. (1922). On the mathematical foundations of theoretical statistics. Philosophical Transactions of the Royal Society of London A 222: 309–368."
        url: null
      - citation: "Fisher, R. A. (1935). The Design of Experiments. Oliver & Boyd, Edinburgh."
        url: null

  - id: si-neyman-pearson
    date: "1933"
    type: REFORMULATION
    title: The Neyman–Pearson theory of testing
    description: >-
      Jerzy Neyman and Egon Pearson, Karl's son, recast a test as a decision between two
      hypotheses with two kinds of error, a false alarm and a missed effect. They show how
      to find the test that misses least for a fixed rate of false alarms. With Neyman's
      confidence intervals of 1937, this became the second pillar of classical
      statistics.
    contested: true
    contested_note: >-
      A dispute of interpretation. Fisher regarded a p-value as graded evidence in a
      single experiment and attacked the decision framework as fit for factories, not
      science. Neyman held that only long-run error rates have a clear meaning. Their
      feud lasted until Fisher's death, and modern practice mixes the two approaches in a
      way neither accepted.
    sources:
      - citation: "Neyman, J. & Pearson, E. S. (1933). On the problem of the most efficient tests of statistical hypotheses. Philosophical Transactions of the Royal Society of London A 231: 289–337."
        url: null
      - citation: "Lehmann, E. L. (2011). Fisher, Neyman, and the Creation of Classical Statistics. Springer."
        url: null

  - id: si-replication-crisis
    date: 2005 – 2015
    type: CRISIS
    title: The replication crisis
    description: >-
      John Ioannidis argues in 2005 that, given small studies, flexible analyses and the
      habit of publishing only results with p below 0.05, most published research
      findings are likely to be false. In 2015 the Open Science Collaboration repeats 100
      psychology experiments and obtains a significant result in only about a third of
      them, against 97% of the originals. Significance testing, meant as a safeguard, had
      become a target.
    contested: true
    contested_note: >-
      The scale of the problem is disputed. Critics of the 2015 project argued that many
      replications differed from the originals and that its numbers overstate the
      failure. Others argue that similar rates appear across fields. That the published
      record is biased towards positive results is widely accepted.
    sources:
      - citation: "Ioannidis, J. P. A. (2005). Why most published research findings are false. PLoS Medicine 2(8): e124."
        url: https://doi.org/10.1371/journal.pmed.0020124
      - citation: "Open Science Collaboration (2015). Estimating the reproducibility of psychological science. Science 349(6251): aac4716."
        url: null

open_problems:
  - id: si-reliable-inference
    name: Making published findings reliable
    status: open
    status_note: Open as of writing; proposed remedies are being tried, and none is agreed as sufficient.
    description: >-
      How should evidence from data be summarised and reported so that published
      findings replicate at the rate their stated error rates promise? Proposals include
      a stricter threshold of $p < 0.005$, reporting estimates and intervals instead of
      verdicts, Bayesian measures of evidence, and registering the analysis before the
      data are seen.
    why_hard: >-
      The mathematics of a single test is settled. The difficulty is that a p-value is
      only valid if the analysis was fixed in advance and every result is reported,
      and real research involves many choices made after seeing the data. Measuring the
      effect of those hidden choices, and designing rules that researchers will follow,
      is as much a question about incentives as about probability.
    unlocks: >-
      Trustworthy medicine, psychology, economics and biology. Every field that tests
      hypotheses on noisy data depends on its published record being a fair sample of
      what was found.
    sources:
      - citation: "Wasserstein, R. L. & Lazar, N. A. (2016). The ASA statement on p-values: context, process, and purpose. American Statistician 70(2): 129–133."
        url: null
      - citation: "Benjamin, D. J. et al. (2018). Redefine statistical significance. Nature Human Behaviour 2: 6–10."
        url: null

applications:
  - area: Medicine
    title: The randomised controlled trial
    description: >-
      Fisher's randomised field plots became the randomised clinical trial. The Medical
      Research Council's 1948 trial of streptomycin for tuberculosis, designed by Austin
      Bradford Hill, allocated patients by chance. It is now the standard of evidence for
      every new drug.
    sources:
      - citation: "Medical Research Council (1948). Streptomycin treatment of pulmonary tuberculosis. British Medical Journal 2(4582): 769–782."
        url: null
  - area: Genetics
    title: Splitting variation into its causes
    description: >-
      Fisher invented the analysis of variance to divide the variation in a trait among
      its causes, first to reconcile Mendel with continuous traits. Heritability, the
      share of variation due to genes, is still estimated this way.
    domain: biology
    field_id: population-genetics
    sources:
      - citation: "Fisher, R. A. (1918). The correlation between relatives on the supposition of Mendelian inheritance. Transactions of the Royal Society of Edinburgh 52: 399–433."
        url: null
  - area: Genomics
    title: A million tests at once
    description: >-
      A genome-wide association study tests around a million genetic variants for a link
      with a disease. At the usual 5% level, tens of thousands would pass by chance, so
      the field adopted a threshold of $p < 5 \times 10^{-8}$, a correction for multiple
      testing that made its findings replicate.
    domain: biology
    field_id: genomics
    sources:
      - citation: "Risch, N. & Merikangas, K. (1996). The future of genetic studies of complex human diseases. Science 273(5281): 1516–1517."
        url: null

further_reading:
  - citation: "Stigler, S. M. (1986). The History of Statistics: The Measurement of Uncertainty before 1900. Harvard University Press."
    url: null
    note: The standard history, from least squares to Pearson.
  - citation: "Salsburg, D. (2001). The Lady Tasting Tea: How Statistics Revolutionized Science in the Twentieth Century. W. H. Freeman."
    url: null
    note: A readable account of the people who built modern statistics.
  - citation: "Stigler, S. M. (2016). The Seven Pillars of Statistical Wisdom. Harvard University Press."
    url: null
    note: A short book on the handful of ideas that make statistics work.
---

## Combining Observations

Astronomers were the first to face the problem. They had more measurements than unknowns, and the measurements disagreed. Which orbit fits them best? In 1805 {{fig:legendre|Adrien-Marie Legendre}} proposed choosing the orbit that makes the sum of the squared errors as small as possible. In 1809 {{fig:gauss|Carl Friedrich Gauss}} published the same method, claimed he had used it for years, and gave it a reason. If errors follow a bell-shaped curve, least squares picks the most probable orbit. Legendre was indignant, and the priority dispute was never settled to both men's satisfaction. Laplace then tied the bell curve to his central limit theorem from [probability theory](/math/probability-theory/). Errors made of many small causes are normally distributed, so least squares is the right method almost everywhere.

## Measuring Variation

For most of the nineteenth century statistics measured the heavens and averaged away variation. {{fig:francis-galton|Francis Galton}}, Darwin's cousin, made variation the object of study. In 1886 he found that tall parents have children who are tall, but on average less tall than their parents. He called it regression towards mediocrity and drew a line through the data to measure it. {{fig:karl-pearson|Karl Pearson}} turned Galton's ideas into mathematics, founded the journal *Biometrika*, and in 1900 gave the chi-squared test: one number measuring the misfit between observed counts and a theory, with a known distribution when the theory is true.

Pearson's methods assumed large samples. {{fig:william-gosset|William Sealy Gosset}}, a brewer at Guinness, had samples of four or five. In 1908, writing as "Student", he found how the average of a small sample really behaves when its spread is estimated from the same data. The t-test is still one of the most used significance tests in science.

## Fisher and His Rivals

{{fig:fisher|Ronald Fisher}} spent fourteen years at the Rothamsted agricultural station, where decades of harvest records had never been analysed properly. From 1922 he rebuilt statistics around the likelihood, the probability of the data as a function of the unknown quantities, and argued that estimating by its maximum is, in large samples, as accurate as any method can be. Later work made this precise. He invented the analysis of variance and insisted that treatments be assigned to plots at random. Randomisation means that the only differences between groups, apart from the treatment, are due to chance, and chance can be calculated.

{{fig:jerzy-neyman|Jerzy Neyman}} and {{fig:egon-pearson|Egon Pearson}} wanted a test to be a rule with guaranteed error rates. In 1933 they framed it as a choice between two hypotheses and found the best tests. Fisher thought this confused science with quality control, and the two sides fought for thirty years. Textbooks later merged their approaches into a single ritual: compute a p-value, compare it with 0.05, declare a result.

## A Closer Look: The Lady Tasting Tea

Fisher's favourite example of an experiment was a colleague at Rothamsted, usually identified as Muriel Bristol, who claimed she could tell whether milk had been poured into the cup before or after the tea. How should the claim be tested?

Fisher's design: prepare eight cups, four of each kind, and present them in random order. She knows there are four of each and must pick the four with milk first. If she cannot taste the difference, every choice of four cups is equally likely. The number of ways to choose four cups from eight is

$$
\binom{8}{4} = 70 ,
$$

so the chance of picking all four correctly by luck is $1/70$, about 1.4%. That is the p-value of a perfect score. Getting three right is much weaker evidence. There are $4 \times 4 = 16$ ways to pick exactly three correct cups and one wrong one, so three or more correct happens by chance $17/70$ of the time, about 24%. The design decides in advance how strong the evidence can be.

Pearson's chi-squared test measures the misfit between counts and a theory. Mendel reported 7,324 pea seeds from his hybrids, and his theory predicted round and wrinkled seeds in the ratio 3 to 1:

| | Round | Wrinkled |
|---|---|---|
| Observed | 5,474 | 1,850 |
| Expected (3 : 1) | 5,493 | 1,831 |

Each count is off by 19. The statistic adds up the squared misfits, each scaled by its expected count:

$$
\chi^2 = \frac{19^2}{5493} + \frac{19^2}{1831} \approx 0.066 + 0.197 = 0.263 .
$$

With one degree of freedom, a value this large or larger occurs by chance about 61% of the time, so the data sit comfortably with the theory. A value above 3.84 would have been needed to reject it at the 5% level. In 1936 Fisher applied the same test to all of Mendel's experiments together and found the fit too good: chance would rarely give results so close to the predictions. Whether Mendel, an assistant or simple selective reporting was responsible is still debated.

## Significance Under Pressure

By the late twentieth century, $p < 0.05$ decided what journals published and what careers were built on. In 2005 {{fig:john-ioannidis|John Ioannidis}} argued that, given small studies and flexible analyses, most published findings were probably false. Large replication projects in psychology, cancer biology and economics found many famous results that did not repeat. The mathematics of a single test was not wrong. The problem was that a p-value only means what it says if the analysis was fixed before the data were seen and every result was reported.

Statistics answered with more than one proposal. Some want stricter thresholds, some want estimates and intervals instead of verdicts, and some want to measure evidence the Bayesian way, the approach Fisher had tried to banish, which returns in [Bayesian statistics](/math/bayesian-statistics/). The same questions of fitting and generalising, asked of machines instead of scientists, became [statistical learning theory](/math/statistical-learning-theory/).
