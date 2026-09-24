---
id: probability-theory
domain: math
thread: analysis
name: Probability Theory
parent_ids:
  - calculus
  - real-analysis
era_emerged: 1654 – 1933
core_question: How can chance be measured, and what laws does randomness obey in the long run?

summary: |-
  Probability theory is the mathematics of uncertainty. It assigns numbers between 0 and 1 to events and works out what follows. Individual random events are unpredictable, but in bulk they obey firm laws: averages settle down (the law of large numbers), and sums of many small random effects take a bell shape (the central limit theorem).

  It began with gamblers' questions in the seventeenth century and was long regarded as not quite respectable mathematics. In 1933 Kolmogorov founded it on measure theory, from real analysis, and it became the basis of statistics, statistical physics, genetics, finance and machine learning.

key_ideas:
  - term: Probability space
    definition: >-
      The set of possible outcomes, a collection of events, and a measure assigning each
      event a probability, with total probability 1. Kolmogorov's framework: probability
      is measure theory.
    turning_point_id: kolmogorov-axioms
  - term: Expected value
    definition: >-
      The long-run average of a random quantity, each outcome weighted by its
      probability. The idea grew from Pascal and Fermat's solution to the problem of points, and Huygens made it explicit in 1657.
    turning_point_id: pascal-fermat
  - term: Law of large numbers
    definition: >-
      The average of many independent repetitions converges to the expected value. It is
      why casinos and insurers can count on their long-run averages.
    turning_point_id: bernoulli-lln
  - term: Central limit theorem
    definition: >-
      Sums of many independent random effects are approximately normally distributed,
      whatever each effect looks like. It explains why the bell curve is everywhere.
    turning_point_id: central-limit
  - term: Bayes' theorem
    definition: >-
      $P(A \mid B) = P(B \mid A)\,P(A) / P(B)$: how to update the probability of a
      hypothesis in light of evidence. It is the basis of Bayesian statistics and much of
      machine learning.
    turning_point_id: bayes-theorem

turning_points:
  - id: pascal-fermat
    date: "1654"
    type: REFORMULATION
    title: Pascal and Fermat solve the problem of points
    description: >-
      Asked how to divide the stakes fairly when a game of chance is interrupted, Blaise
      Pascal and Pierre de Fermat work out the answer in a series of letters, by counting
      the ways the game could have continued. Reasoning about chance became mathematics,
      and the idea of expected value, which Huygens made explicit three years later, was born.
    contested: false
    sources:
      - citation: "Devlin, K. (2008). The Unfinished Game: Pascal, Fermat, and the Seventeenth-Century Letter that Made the World Modern. Basic Books."
        url: null

  - id: bernoulli-lln
    date: "1713"
    type: PROOF
    title: Bernoulli's law of large numbers
    description: >-
      Jacob Bernoulli's *Ars Conjectandi*, published eight years after his death, proves
      that as a chance experiment is repeated, the observed frequency of success
      converges to its probability. It was the first limit theorem of probability, and it
      justified learning probabilities from data.
    contested: false
    sources:
      - citation: "Bernoulli, J. (1713). Ars Conjectandi. Thurneysen Brothers, Basel."
        url: null

  - id: central-limit
    date: 1733 – 1810
    type: PROOF
    title: The central limit theorem
    description: >-
      Abraham de Moivre (1733) shows that the number of heads in many coin tosses follows,
      approximately, a bell-shaped curve. Pierre-Simon Laplace (1810) extends this to sums
      of many independent random quantities of almost any kind. The normal distribution
      becomes the universal law of accumulated small errors.
    contested: false
    sources:
      - citation: "Stigler, S. M. (1986). The History of Statistics: The Measurement of Uncertainty before 1900. Harvard University Press."
        url: null

  - id: bayes-theorem
    date: 1763 – 1774
    type: PROOF
    title: Bayes' theorem and inverse probability
    description: >-
      An essay by the Presbyterian minister Thomas Bayes, published after his death by his
      friend Richard Price, shows how to reason from observed outcomes back to the
      probability that produced them. Laplace developed the method independently and in
      far greater generality from 1774. "Inverse probability" is the root of Bayesian
      statistics.
    contested: true
    contested_note: >-
      Credit is disputed. Price edited, extended and introduced the essay, and some
      historians argue that his role was substantial. Laplace, working independently,
      stated the general theorem and applied it widely, so some argue it should bear his
      name. Stephen Stigler (1983) even suggested, half seriously, that the blind
      mathematician Nicholas Saunderson may have found it first.
    sources:
      - citation: "Bayes, T. & Price, R. (1763). An essay towards solving a problem in the doctrine of chances. Philosophical Transactions of the Royal Society of London 53: 370–418."
        url: null
      - citation: "Stigler, S. M. (1983). Who discovered Bayes's theorem? American Statistician 37(4): 290–296."
        url: null

  - id: kolmogorov-axioms
    date: "1933"
    type: REFORMULATION
    title: Kolmogorov's axioms
    description: >-
      Andrey Kolmogorov's *Foundations of the Theory of Probability* defines probability
      as a measure, in Lebesgue's sense, on a space of outcomes, with total measure 1.
      Conditional probability, expectation and independence all get precise definitions.
      Probability becomes a branch of rigorous mathematics, answering part of Hilbert's
      sixth problem of 1900.
    contested: false
    sources:
      - citation: "Kolmogorov, A. N. (1933). Grundbegriffe der Wahrscheinlichkeitsrechnung. Springer (Ergebnisse der Mathematik)."
        url: null

open_problems:
  - id: percolation-3d
    name: Is 3D percolation continuous at its critical point?
    status: open
    status_note: Proved in two dimensions and in high dimensions; open in three dimensions as of 2026.
    description: >-
      Randomly keep each edge of a three-dimensional grid with probability $p$. Above a
      critical value, an infinite connected cluster appears. Does an infinite cluster
      already exist *at* the critical point? It is believed not, so that the transition
      is continuous.
    why_hard: >-
      In two dimensions, symmetry and conformal invariance give powerful tools. In high
      dimensions, a technique called the lace expansion works. Three dimensions falls in
      between, and none of the known methods reaches it.
    unlocks: >-
      Percolation models how fluids seep through rock, how epidemics spread and how
      networks fail. Settling the three-dimensional critical behaviour would confirm the
      physicists' picture of phase transitions in the dimension we live in.
    sources:
      - citation: "Duminil-Copin, H. (2018). Sixty years of percolation. Proceedings of the International Congress of Mathematicians 2018: 2829–2856."
        url: null

applications:
  - area: Population genetics
    title: Genetic drift is a random walk
    description: >-
      In a finite population, which individuals happen to reproduce is partly chance, so
      allele frequencies wander randomly. The Wright–Fisher model and its diffusion
      approximations, pure probability theory, are how population genetics measures drift
      and dates evolutionary events.
    domain: biology
    field_id: population-genetics
    sources:
      - citation: "Ewens, W. J. (2004). Mathematical Population Genetics (2nd ed.). Springer."
        url: null
  - area: Statistical physics
    title: Brownian motion and atoms
    description: >-
      In 1905 Einstein explained the jittering of tiny particles suspended in water as the result of
      random molecular collisions, and predicted how far they would wander. Perrin's
      measurements confirmed it, convincing sceptics that atoms exist. Random walks are
      now a basic tool of physics.
    domain: physics
    field_id: kinetic-theory
    sources:
      - citation: "Einstein, A. (1905). Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen. Annalen der Physik 17: 549–560."
        url: null
  - area: Finance
    title: Pricing risk
    description: >-
      Insurance premiums rest on the law of large numbers, and modern derivative pricing
      on random walks. The Black–Scholes model of 1973 priced options by treating stock
      prices as following a form of Brownian motion.
    sources:
      - citation: "Black, F. & Scholes, M. (1973). The pricing of options and corporate liabilities. Journal of Political Economy 81(3): 637–654."
        url: null

further_reading:
  - citation: "Devlin, K. (2008). The Unfinished Game: Pascal, Fermat, and the Seventeenth-Century Letter that Made the World Modern. Basic Books."
    url: null
    note: The story of the letters that founded probability, for general readers.
  - citation: "Hacking, I. (1975). The Emergence of Probability. Cambridge University Press."
    url: null
    note: A philosopher's history of why probability emerged when it did.
  - citation: "Feller, W. (1968). An Introduction to Probability Theory and Its Applications, Vol. 1 (3rd ed.). Wiley."
    url: null
    note: The classic textbook, rich in examples, and still widely used.
---

## A Gambler's Question

In 1654 the Chevalier de Méré, a gambler, put a puzzle to {{fig:pascal|Blaise Pascal}}. If a game of chance is interrupted before anyone has won, how should the stakes be divided? Pascal wrote to {{fig:fermat|Pierre de Fermat}}, and in a few letters they solved it. Count every way the game could have continued and divide in proportion. For the first time, uncertainty was a quantity that could be calculated. Christiaan Huygens wrote the first textbook on the subject three years later.

## Laws of Large Numbers

Chance individually is unpredictable, yet it has laws in bulk. {{fig:jacob-bernoulli|Jacob Bernoulli}} spent twenty years proving the first. As an experiment is repeated, the fraction of successes converges to the true probability. His *Ars Conjectandi* appeared posthumously in 1713. {{fig:de-moivre|Abraham de Moivre}}, a French Protestant exile in London who earned his living partly advising gamblers, found in 1733 the shape of the fluctuations, the bell curve. {{fig:laplace|Pierre-Simon Laplace}} generalised it to the central limit theorem: sums of many independent small effects are always approximately normal, whatever the effects. It explains why heights, measurement errors and exam scores so often follow the same curve.

Reasoning backwards, from observed data to the chance behind it, came from {{fig:bayes|Thomas Bayes}}, whose essay was published by a friend after his death in 1763, and more powerfully from Laplace. Their "inverse probability" is today's Bayesian inference.

## Respectability

Through the nineteenth century probability was useful but suspect. Its founding notions ("equally likely", "at random") were circular, and paradoxes showed that different, equally natural ways of choosing "at random" gave different answers. Hilbert listed its foundations, within his sixth problem, among the major problems of 1900.

The solution came from [real analysis](/math/real-analysis/). In 1933 {{fig:kolmogorov|Andrey Kolmogorov}} observed that Lebesgue's measure theory already had exactly the right structure. Probability is a measure of total size 1 on a space of outcomes, events are measurable sets, and expectation is the Lebesgue integral. The paradoxes dissolved into precise statements, and probability became a full branch of mathematics.

## A Closer Look: The Test That Is 99% Accurate

A disease affects 1 in 100 people. A test detects it 99% of the time when it is present, and gives a false positive 5% of the time when it is not. You test positive. What is the chance you have the disease?

Most people guess about 95%. Bayes' theorem gives the answer. Picture 10,000 people. About 100 have the disease, and 99 of them test positive. Of the 9,900 healthy people, 5% also test positive: 495 of them. So there are $99 + 495 = 594$ positive results, of which only 99 are true:

$$
P(\text{disease} \mid \text{positive}) = \frac{0.99 \times 0.01}{0.99 \times 0.01 + 0.05 \times 0.99} = \frac{99}{594} = \frac{1}{6} \approx 17\% .
$$

A positive result raises the probability from 1% to about 17%, a big jump, but most positives are still false alarms, because healthy people vastly outnumber sick ones. This is why screening programmes follow a positive result with a second, independent test. If the second test is also positive, Bayes' theorem applied again, starting from 17%, gives about 80%.

The same reasoning, updating a probability as evidence arrives, runs spam filters, medical diagnosis, forensic statistics and much of machine learning. Its misuse has consequences as well. Confusing $P(\text{evidence} \mid \text{innocent})$ with $P(\text{innocent} \mid \text{evidence})$, the "prosecutor's fallacy", has contributed to wrongful convictions.

## Everywhere

Probability now runs through science. It is the mathematics of genetic drift in [population genetics](/biology/population-genetics/), of Brownian motion and statistical physics, of statistics, finance and machine learning. Its frontier includes random structures whose behaviour at a critical point, where a sudden global change happens, is still out of reach, most famously percolation in three dimensions.
