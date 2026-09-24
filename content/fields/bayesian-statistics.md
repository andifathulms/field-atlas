---
id: bayesian-statistics
domain: math
thread: statistics
name: Bayesian Statistics
parent_ids:
  - probability-theory
  - statistical-inference
era_emerged: 1774 – 1990
core_question: How should a degree of belief be updated as evidence arrives, and can probability measure belief at all?

summary: |-
  Bayesian statistics treats probability as a degree of belief. Anything uncertain, including an unknown constant of nature, gets a probability distribution. Before the data this is the prior. Bayes' theorem combines it with the data to give the posterior, and the posterior is the complete answer: every estimate, interval and prediction is read off from it.

  Laplace used the method for fifty years, but in the twentieth century it was nearly banished. Its critics objected that priors are subjective, and the frequentist methods of Fisher and Neyman took over. A small group, Jeffreys, de Finetti, Savage and the code-breakers of Bletchley Park, kept it alive. What finally brought it back was computation: from 1990 Markov chain Monte Carlo made Bayesian answers computable for realistic models, and the approach now runs through science and machine learning.

key_ideas:
  - term: Prior and posterior
    definition: >-
      The prior is the distribution of belief before seeing the data. The posterior is the
      distribution after. Bayes' theorem says the posterior is proportional to the prior
      times the likelihood of the data.
    turning_point_id: bs-rule-of-succession
  - term: Subjective probability
    definition: >-
      Probability as a coherent degree of belief of a particular person. De Finetti showed
      that beliefs which violate the rules of probability can be exploited by a series of
      bets that loses whatever happens.
    turning_point_id: bs-subjective-probability
  - term: Weight of evidence
    definition: >-
      The logarithm of the factor by which evidence multiplies the odds of a hypothesis.
      Turing measured it in "bans" and tenths of a ban, so that independent clues simply
      add up.
    turning_point_id: bs-banburismus
  - term: Markov chain Monte Carlo
    definition: >-
      Computing a posterior by running a random walk whose long-run behaviour is exactly
      that posterior, and averaging along the walk. It replaced integrals that could not
      be done by hand with simulations a computer can do.
    turning_point_id: bs-gelfand-smith
  - term: Objective prior
    definition: >-
      A prior chosen by a rule instead of personal judgement, meant to express ignorance.
      Jeffreys's rule gives the same answer however the unknown quantity is measured.
    turning_point_id: bs-jeffreys

turning_points:
  - id: bs-rule-of-succession
    date: 1774 – 1814
    type: PROOF
    title: Laplace's rule of succession
    description: >-
      Pierre-Simon Laplace shows that if an event has happened in all $n$ of $n$ trials,
      and nothing was known about its chance beforehand, the probability that it happens
      next time is $(n+1)/(n+2)$. In his *Philosophical Essay on Probabilities* of 1814 he
      applies it to the sunrise. He then uses the same reasoning on real problems, such as
      whether boys are more likely than girls to be born in Paris.
    contested: false
    sources:
      - citation: "Laplace, P.-S. (1814). Essai philosophique sur les probabilités. Courcier, Paris."
        url: null
      - citation: "Stigler, S. M. (1986). The History of Statistics: The Measurement of Uncertainty before 1900. Harvard University Press."
        url: null

  - id: bs-fisher-rejects-inverse
    date: 1922 – 1925
    type: CRISIS
    title: The eclipse of inverse probability
    description: >-
      Following objections by George Boole and John Venn, Ronald Fisher builds statistics
      on the likelihood, which needs no prior, and in 1925 writes that inverse
      probability is "founded upon an error". With Neyman's methods, which also avoid priors, the
      frequentist view becomes orthodoxy for half a century. Bayesian reasoning survives
      mainly outside university statistics departments.
    contested: false
    sources:
      - citation: "Fisher, R. A. (1922). On the mathematical foundations of theoretical statistics. Philosophical Transactions of the Royal Society of London A 222: 309–368."
        url: null
      - citation: "Fisher, R. A. (1925). Statistical Methods for Research Workers. Oliver & Boyd, Edinburgh."
        url: null
      - citation: "Fienberg, S. E. (2006). When did Bayesian inference become \"Bayesian\"? Bayesian Analysis 1(1): 1–40."
        url: null

  - id: bs-subjective-probability
    date: 1926 – 1954
    type: REFORMULATION
    title: Probability as degree of belief
    description: >-
      Frank Ramsey (1926, published 1931) and Bruno de Finetti (1937) show independently
      that consistent betting behaviour must obey the rules of probability, so personal
      belief can be measured on the same scale as chance. Leonard Jimmie Savage's *The
      Foundations of Statistics* (1954) derives both probability and utility from
      axioms of rational choice, giving Bayesian statistics a complete foundation.
    contested: false
    sources:
      - citation: "de Finetti, B. (1937). La prévision: ses lois logiques, ses sources subjectives. Annales de l'Institut Henri Poincaré 7(1): 1–68."
        url: null
      - citation: "Savage, L. J. (1954). The Foundations of Statistics. Wiley."
        url: null

  - id: bs-jeffreys
    date: "1939"
    type: REFORMULATION
    title: Jeffreys's Theory of Probability
    description: >-
      Harold Jeffreys, a Cambridge geophysicist who had deduced that the Earth's core is
      liquid, publishes a systematic Bayesian treatment of scientific inference. He
      proposes rules for priors that express ignorance, and Bayes factors for comparing
      hypotheses. It was largely ignored by statisticians for thirty years.
    contested: false
    sources:
      - citation: "Jeffreys, H. (1939). Theory of Probability. Clarendon Press, Oxford."
        url: null

  - id: bs-banburismus
    date: 1940 – 1941
    type: REFORMULATION
    title: Bayes breaks the Enigma
    description: >-
      At Bletchley Park, Alan Turing devises Banburismus, a Bayesian procedure for
      narrowing down the settings of the German naval Enigma. Evidence from pairs of
      intercepted messages is scored in "decibans", logarithms of odds, and added up.
      His assistant I. J. Good later developed the ideas into a general theory of weight
      of evidence. The work stayed secret for decades.
    contested: false
    sources:
      - citation: "Good, I. J. (1979). Studies in the history of probability and statistics. XXXVII. A. M. Turing's statistical work in World War II. Biometrika 66(2): 393–396."
        url: null
      - citation: "McGrayne, S. B. (2011). The Theory That Would Not Die. Yale University Press."
        url: null

  - id: bs-gelfand-smith
    date: "1990"
    type: REFORMULATION
    title: The MCMC revolution
    description: >-
      Alan Gelfand and Adrian Smith show statisticians that the Gibbs sampler, introduced
      by Stuart and Donald Geman in 1984 for restoring images, can compute the posterior
      of almost any Bayesian model. Problems that had been impossible became routine.
      Within a decade general-purpose software such as BUGS made Bayesian analysis a
      standard tool.
    contested: false
    sources:
      - citation: "Gelfand, A. E. & Smith, A. F. M. (1990). Sampling-based approaches to calculating marginal densities. Journal of the American Statistical Association 85(410): 398–409."
        url: null
      - citation: "Geman, S. & Geman, D. (1984). Stochastic relaxation, Gibbs distributions, and the Bayesian restoration of images. IEEE Transactions on Pattern Analysis and Machine Intelligence 6(6): 721–741."
        url: null

open_problems:
  - id: bs-mcmc-mixing
    name: How long must a sampler run?
    status: open
    status_note: Open in general as of 2026; sharp answers exist only for special classes of chains.
    description: >-
      A Markov chain Monte Carlo sampler is only correct in the long run. How many steps
      are needed before its output is a fair sample from the posterior? In practice,
      convergence is judged by diagnostics that can detect some failures but never prove
      success.
    why_hard: >-
      The mixing time depends on the shape of the posterior in spaces with thousands or
      millions of dimensions, which is exactly what is unknown. Rigorous bounds, from
      the geometry and spectra of Markov chains, exist for card shuffling and some
      physical models, but rarely for the models statisticians actually fit.
    unlocks: >-
      Guaranteed error bars on Bayesian answers, and principled ways to design faster
      samplers for the large models of genetics, cosmology and machine learning.
    sources:
      - citation: "Diaconis, P. (2009). The Markov chain Monte Carlo revolution. Bulletin of the American Mathematical Society 46(2): 179–205."
        url: null

applications:
  - area: Search and rescue
    title: Finding what is lost
    description: >-
      Bayesian search theory divides the sea into cells, gives each a prior probability,
      and updates after every unsuccessful search. It guided the hunt for a lost hydrogen
      bomb off Palomares in 1966 and, in 2011, the search for Air France flight 447, found within
      a week of resuming the search in the area the analysis ranked highest.
    sources:
      - citation: "Stone, L. D., Keller, C. M., Kratzke, T. M. & Strumpfer, J. P. (2014). Search for the wreckage of Air France Flight AF 447. Statistical Science 29(1): 69–80."
        url: null
  - area: Evolution
    title: Bayesian family trees
    description: >-
      Reconstructing the tree of life from DNA means choosing among astronomically many
      possible trees. Bayesian phylogenetics samples trees by MCMC in proportion to their
      posterior probability, and reports how certain each branch is.
    domain: biology
    field_id: evolutionary-biology
    sources:
      - citation: "Huelsenbeck, J. P. & Ronquist, F. (2001). MRBAYES: Bayesian inference of phylogenetic trees. Bioinformatics 17(8): 754–755."
        url: null
  - area: Cosmology
    title: Weighing the universe
    description: >-
      The amounts of ordinary matter, dark matter and dark energy are estimated by
      fitting models to the cosmic microwave background with Markov chain Monte Carlo,
      which maps out the posterior of half a dozen parameters at once.
    domain: physics
    field_id: physical-cosmology
    sources:
      - citation: "Lewis, A. & Bridle, S. (2002). Cosmological parameters from CMB and other data: a Monte Carlo approach. Physical Review D 66: 103511."
        url: null

further_reading:
  - citation: "McGrayne, S. B. (2011). The Theory That Would Not Die. Yale University Press."
    url: null
    note: A popular history of Bayes' rule, from Laplace to the code-breakers and beyond.
  - citation: "Jaynes, E. T. (2003). Probability Theory: The Logic of Science. Cambridge University Press."
    url: null
    note: A forceful argument that probability is the logic of plausible reasoning.
  - citation: "Gelman, A., Carlin, J. B., Stern, H. S., Dunson, D. B., Vehtari, A. & Rubin, D. B. (2013). Bayesian Data Analysis (3rd ed.). CRC Press."
    url: null
    note: The standard modern textbook.
---

## Laplace's Method

The theorem that bears Bayes's name, from [probability theory](/math/probability-theory/), says how to turn the probability of the data given a cause into the probability of the cause given the data. {{fig:laplace|Pierre-Simon Laplace}} turned it into a working method. From 1774 he used it to estimate the masses of planets, to decide whether boys are genuinely more likely than girls to be born, and to judge the reliability of witnesses. His rule of succession, derived by assuming that before any evidence every chance is equally likely, became the method's best-known result and its best-known target.

## The Eclipse

Critics asked where the prior came from. George Boole and John Venn objected that "equally likely" was an arbitrary assumption dressed up as ignorance, and that a different way of describing the same ignorance gave a different answer. {{fig:fisher|Ronald Fisher}} agreed and in 1922 built his statistics on the likelihood alone. With the Neyman–Pearson theory of tests from [statistical inference](/math/statistical-inference/), frequentist methods, which speak only of long-run error rates, became the orthodoxy of the twentieth century.

A few people kept the other view alive. {{fig:frank-ramsey|Frank Ramsey}} and {{fig:bruno-de-finetti|Bruno de Finetti}} showed that anyone whose betting odds break the rules of probability can be made to lose money whatever happens, so rational degrees of belief must be probabilities. {{fig:harold-jeffreys|Harold Jeffreys}}, a geophysicist, wrote a Bayesian manual for scientists in 1939, and {{fig:leonard-savage|Leonard Jimmie Savage}} gave the subject axioms in 1954.

The most consequential Bayesian work was secret. At Bletchley Park, {{fig:turing|Alan Turing}} attacked the naval Enigma with a procedure he called Banburismus. Each clue multiplied the odds on a candidate setting, so he worked with logarithms and simply added the scores, in units of decibans. {{fig:i-j-good|I. J. Good}}, his assistant, later developed the ideas in public and spent a career arguing for them.

## A Closer Look: Will the Sun Rise Tomorrow?

Suppose a coin of unknown bias lands heads 7 times in 10 tosses. What should we believe about its chance $p$ of heads?

Laplace started from a flat prior: every value of $p$ between 0 and 1 equally plausible. The likelihood of 7 heads and 3 tails is proportional to $p^7(1-p)^3$. Multiplying by the flat prior, the posterior is proportional to $p^7(1-p)^3$, a beta distribution written $\text{Beta}(8, 4)$. In general, starting from $\text{Beta}(a, b)$ and seeing $h$ heads and $t$ tails gives $\text{Beta}(a+h, b+t)$: updating just adds the counts. The posterior mean is

$$
\frac{a}{a+b} = \frac{8}{12} = \frac{2}{3} \approx 0.667 ,
$$

a little closer to one half than the raw frequency 0.7, because the prior acts like one extra head and one extra tail. The posterior also gives a direct answer to a question the frequentist cannot phrase: the probability that the coin favours heads, $P(p > 1/2)$, is $1816/2048 \approx 0.89$.

| Evidence | Posterior | Mean | $P(\text{next is heads})$ |
|---|---|---|---|
| None | Beta(1, 1) | 0.500 | 0.500 |
| 7 heads, 3 tails | Beta(8, 4) | 0.667 | 0.667 |
| $n$ heads, no tails | Beta($n$+1, 1) | $(n+1)/(n+2)$ | $(n+1)/(n+2)$ |

The last row is the rule of succession. Laplace applied it to the sunrise, assuming, for the sake of the example, that recorded history covered 5,000 years, or 1,826,213 days. The probability of another sunrise comes out as $1{,}826{,}214 / 1{,}826{,}215$, odds of 1,826,214 to 1, the figure Laplace gave. He added at once that anyone who knows the laws governing the Sun would bet far more heavily. The example was meant to show the method, and critics ever since have used it to mock the flat prior.

## Computing the Posterior

For a coin the posterior has a formula. For a model with hundreds of unknowns it is an integral in hundreds of dimensions that nobody can do. The way out came from physics. In 1953 a Los Alamos team including Nicholas Metropolis and Arianna Rosenbluth, who wrote the program, sampled the states of a simulated liquid with a random walk, the [Metropolis algorithm](/math/monte-carlo-methods/), designed so that it visits each state in proportion to its probability. Averages along the walk then give the answer. In 1990 {{fig:alan-gelfand|Alan Gelfand}} and {{fig:adrian-smith|Adrian Smith}} showed statisticians that the same trick, in the form of the Gibbs sampler, computes Bayesian posteriors in general. Within a decade Bayesian methods were everywhere, from genetics to cosmology.

The random walks are Markov chains, the subject of [stochastic processes](/math/stochastic-processes/), and how long they must run to be trusted is still open. Priors that learn from data, and posteriors over millions of parameters, now connect Bayesian statistics to [statistical learning theory](/math/statistical-learning-theory/).
