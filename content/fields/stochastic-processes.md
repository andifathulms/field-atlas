---
id: stochastic-processes
domain: math
thread: statistics
name: Stochastic Processes
parent_ids:
  - probability-theory
  - real-analysis
era_emerged: 1900 – 1944
core_question: What laws govern quantities that change randomly over time?

summary: |-
  A stochastic process is a quantity that evolves by chance: a share price, the position of a pollen grain in water, the length of a queue, the page a web surfer is reading. Classical probability studied independent trials, such as repeated coin tosses. Stochastic processes allow each step to depend on the past, and follow the whole random path, not just its endpoint.

  Two models dominate. In a Markov chain, the future depends on the present state only, not on how it was reached. In Brownian motion, a path moves continuously but so erratically that it has no speed at any instant. Markov, Bachelier, Wiener and Kolmogorov built the theory between 1900 and 1931, and Itô's calculus of 1944 made it possible to do calculus along random paths. The result became the language of finance, of physics at small scales, and of the algorithms that rank the web.

key_ideas:
  - term: Markov property
    definition: >-
      The future depends on the past only through the present. Given today's state,
      yesterday's adds nothing to the forecast.
    turning_point_id: sp-markov-chains
  - term: Stationary distribution
    definition: >-
      The long-run proportion of time a Markov chain spends in each state. For a
      well-connected chain it exists, is unique, and does not depend on the starting
      point.
    turning_point_id: sp-markov-chains
  - term: Brownian motion
    definition: >-
      A random path whose increments over separate time intervals are independent and
      normally distributed, with variance proportional to the elapsed time. Wiener proved
      it exists as a mathematical object, with continuous but nowhere differentiable
      paths.
    turning_point_id: sp-wiener-process
  - term: Stochastic differential equation
    definition: >-
      An equation for a quantity driven partly by a smooth trend and partly by random
      noise. Itô's calculus gives such equations a precise meaning, with its own rule for
      the chain rule.
    turning_point_id: sp-ito-calculus
  - term: Kolmogorov equations
    definition: >-
      Differential equations for how the probability distribution of a process evolves.
      They link random paths to the heat equation and its relatives.
    turning_point_id: sp-kolmogorov-equations

turning_points:
  - id: sp-bachelier
    date: "1900"
    type: REFORMULATION
    title: Bachelier's theory of speculation
    description: >-
      In a doctoral thesis examined by Henri Poincaré, Louis Bachelier models prices on
      the Paris stock exchange as a random walk, and in the limit as what is now called
      Brownian motion, five years before Einstein. He derives the diffusion equation for
      prices and uses it to value options. The thesis was little read for half a century,
      until economists rediscovered it in the 1950s.
    contested: false
    sources:
      - citation: "Bachelier, L. (1900). Théorie de la spéculation. Annales scientifiques de l'École Normale Supérieure (3) 17: 21–86."
        url: null
      - citation: "Davis, M. & Etheridge, A. (2006). Louis Bachelier's Theory of Speculation: The Origins of Modern Finance. Princeton University Press."
        url: null

  - id: sp-markov-chains
    date: 1906 – 1913
    type: PROOF
    title: Markov chains
    description: >-
      To refute a claim that the law of large numbers needs independent events, Andrey
      Markov proves it for sequences in which each outcome depends on the one before. In
      1913 he tests the idea on the first 20,000 letters of Pushkin's *Eugene Onegin*,
      counting how often a vowel follows a vowel and a consonant follows a consonant. It
      was an early statistical analysis of a literary text, and the chains now bear his
      name.
    contested: false
    sources:
      - citation: "Markov, A. A. (1913). An example of statistical investigation of the text Eugene Onegin concerning the connection of samples in chains. Bulletin of the Imperial Academy of Sciences of St. Petersburg 7(3): 153–162. English translation in Science in Context 19(4): 591–600 (2006)."
        url: null
      - citation: "Hayes, B. (2013). First links in the Markov chain. American Scientist 101(2): 92–97."
        url: null

  - id: sp-wiener-process
    date: "1923"
    type: PROOF
    title: Wiener constructs Brownian motion
    description: >-
      Norbert Wiener, at MIT, builds a probability measure on the space of continuous
      paths and so proves that Brownian motion exists as a mathematical object. Its
      paths are continuous everywhere and differentiable nowhere. It was one of the first
      probability measures on an infinite-dimensional space, ten years before
      Kolmogorov's axioms.
    contested: false
    sources:
      - citation: "Wiener, N. (1923). Differential space. Journal of Mathematics and Physics 2: 131–174."
        url: null

  - id: sp-kolmogorov-equations
    date: "1931"
    type: PROOF
    title: Kolmogorov's equations
    description: >-
      Andrey Kolmogorov founds the general theory of Markov processes in continuous
      time. He shows that their transition probabilities satisfy two partial
      differential equations, now called the forward and backward equations, which
      include the heat equation and the Fokker–Planck equation of physics. Random paths
      and differential equations became two views of the same object.
    contested: false
    sources:
      - citation: "Kolmogorov, A. N. (1931). Über die analytischen Methoden in der Wahrscheinlichkeitsrechnung. Mathematische Annalen 104: 415–458."
        url: null

  - id: sp-ito-calculus
    date: "1944"
    type: REFORMULATION
    title: Itô's stochastic calculus
    description: >-
      Kiyosi Itô, who developed his ideas while at the Japanese government's statistics
      bureau, defines
      integrals along Brownian paths, which ordinary calculus cannot handle because the
      paths have no slope. His rule for changing variables, Itô's lemma, contains an
      extra term that comes from the roughness of the path. Stochastic differential
      equations became a working tool.
    contested: true
    contested_note: >-
      A question of priority. In 1940 Wolfgang Doeblin, a French soldier and
      mathematician who died that year, sent the Academy of Sciences a sealed envelope.
      Opened in 2000, it contained a version of Itô's change-of-variables formula. Itô's
      work was entirely independent and far more developed, and it is his theory that was
      used. Some authors now write of the Itô–Doeblin formula.
    sources:
      - citation: "Itô, K. (1944). Stochastic integral. Proceedings of the Imperial Academy (Tokyo) 20(8): 519–524."
        url: null
      - citation: "Bru, B. & Yor, M. (2002). Comments on the life and mathematical legacy of Wolfgang Doeblin. Finance and Stochastics 6(1): 3–47."
        url: null

  - id: sp-black-scholes
    date: "1973"
    type: REFORMULATION
    title: The Black–Scholes formula
    description: >-
      Fischer Black and Myron Scholes, with Robert Merton, show that a share and an
      option on it can be combined into a portfolio whose risk cancels, so the option's
      price follows from a stochastic differential equation without knowing the
      investor's attitude to risk. Option trading exploded. Scholes and Merton received
      the 1997 economics prize. Black had died in 1995.
    contested: false
    sources:
      - citation: "Black, F. & Scholes, M. (1973). The pricing of options and corporate liabilities. Journal of Political Economy 81(3): 637–654."
        url: null
      - citation: "Merton, R. C. (1973). Theory of rational option pricing. Bell Journal of Economics and Management Science 4(1): 141–183."
        url: null

  - id: sp-pagerank
    date: "1998"
    type: REFORMULATION
    title: The web as a Markov chain
    description: >-
      Sergey Brin and Larry Page, graduate students at Stanford, rank web pages by the
      stationary distribution of a random surfer who follows links at random and
      occasionally jumps to a random page. A page is important if important pages link to
      it. The ranking, PageRank, was the basis of the Google search engine.
    contested: false
    sources:
      - citation: "Brin, S. & Page, L. (1998). The anatomy of a large-scale hypertextual Web search engine. Computer Networks and ISDN Systems 30(1–7): 107–117."
        url: null

open_problems:
  - id: sp-self-avoiding-walk
    name: The self-avoiding walk
    status: open
    status_note: Open as of writing in two, three and four dimensions; solved above four dimensions (1992).
    description: >-
      A self-avoiding walk on a grid never visits the same point twice, a simple model of
      a long polymer molecule. How far from its start does a typical walk of $n$ steps
      end? Physicists predict a distance of about $n^{3/4}$ in two dimensions, and that the
      walk then looks, at large scales, like a random curve called SLE with parameter
      $8/3$. Neither is proved.
    why_hard: >-
      The walk is not a Markov chain: each step depends on the whole past path. The
      tools that tame ordinary random walks do not apply. Above four dimensions, where a
      walk rarely comes near its past, Hara and Slade proved it behaves like Brownian
      motion. Below, even basic scaling is unproved.
    unlocks: >-
      A rigorous theory of polymers in solution, and a proof of one of the central
      conjectures linking random curves in the plane to conformal field theory.
    sources:
      - citation: "Madras, N. & Slade, G. (1993). The Self-Avoiding Walk. Birkhäuser."
        url: null
      - citation: "Duminil-Copin, H. & Smirnov, S. (2012). The connective constant of the honeycomb lattice equals √(2+√2). Annals of Mathematics 175(3): 1653–1665."
        url: null

applications:
  - area: Physics
    title: Newton's law with noise
    description: >-
      In 1908 Paul Langevin described a particle in a fluid by Newton's second law plus a
      random force from molecular impacts. The Langevin equation, the first stochastic
      differential equation, is still how physicists model Brownian motion and thermal
      noise.
    domain: physics
    field_id: kinetic-theory
    sources:
      - citation: "Langevin, P. (1908). Sur la théorie du mouvement brownien. Comptes Rendus de l'Académie des Sciences 146: 530–533."
        url: null
  - area: Cell biology
    title: Noisy genes
    description: >-
      Inside a single cell, a gene may be present as one or two copies and its messenger
      RNA as a few molecules, so chemical reactions happen one random event at a time.
      Gillespie's algorithm simulates them exactly as a Markov process, and experiments
      since 2002 have measured how this noise makes genetically identical cells differ.
    domain: biology
    field_id: cell-biology
    sources:
      - citation: "Gillespie, D. T. (1977). Exact stochastic simulation of coupled chemical reactions. Journal of Physical Chemistry 81(25): 2340–2361."
        url: null
      - citation: "Elowitz, M. B., Levine, A. J., Siggia, E. D. & Swain, P. S. (2002). Stochastic gene expression in a single cell. Science 297(5584): 1183–1186."
        url: null
  - area: Telecommunications
    title: The mathematics of waiting
    description: >-
      Agner Krarup Erlang, an engineer at the Copenhagen Telephone Company, modelled
      calls arriving at an exchange as a random process in 1909, to decide how many lines
      were needed. Queueing theory, built on Markov processes, now sizes call centres,
      computer networks and hospital wards.
    sources:
      - citation: "Erlang, A. K. (1909). The theory of probabilities and telephone conversations. Nyt Tidsskrift for Matematik B 20: 33–39."
        url: null

further_reading:
  - citation: "Norris, J. R. (1997). Markov Chains. Cambridge University Press."
    url: null
    note: A clear introduction to Markov chains in discrete and continuous time.
  - citation: "Grimmett, G. R. & Stirzaker, D. R. (2001). Probability and Random Processes (3rd ed.). Oxford University Press."
    url: null
    note: A standard textbook, from basic probability to Brownian motion.
  - citation: "Davis, M. & Etheridge, A. (2006). Louis Bachelier's Theory of Speculation: The Origins of Modern Finance. Princeton University Press."
    url: null
    note: Bachelier's thesis in translation, with a history of its influence.
---

## Chance That Remembers

[Probability theory](/math/probability-theory/) grew up on independent trials. The law of large numbers said that the average of independent coin tosses settles down. In 1902 the Russian mathematician Pavel Nekrasov argued that independence was therefore necessary for the law to hold, and drew conclusions about free will from it. {{fig:andrey-markov|Andrey Markov}}, a combative atheist, set out to prove him wrong. In 1906 he showed that the law also holds for chains of events in which each depends on the one before. To show that such chains occur in reality, he spent part of 1913 counting letters in Pushkin's verse novel *Eugene Onegin*.

## Brownian Paths

In 1900, in Paris, {{fig:louis-bachelier|Louis Bachelier}} modelled the price of a government bond as a random walk that, in the limit of many small steps, moves continuously. He derived the equation that governs the spread of its probability, the same diffusion equation that Einstein would derive for pollen grains in 1905. His examiner, Henri Poincaré, praised the work, but for half a century it was little read.

The mathematical object came from [real analysis](/math/real-analysis/). In 1923 {{fig:norbert-wiener|Norbert Wiener}} constructed a probability measure on the space of all continuous paths, proving that Brownian motion exists. Its paths are continuous but so jagged that they have no slope at any point. In 1931 {{fig:kolmogorov|Andrey Kolmogorov}} showed that the probabilities of any Markov process in continuous time obey two differential equations, joining random paths to the heat equation. Two years later he gave all of probability its axioms.

Calculus along a Brownian path still made no sense, because the path has no derivative. In 1944 {{fig:kiyosi-ito|Kiyosi Itô}}, who had developed his ideas at a government statistics office in Tokyo, defined the integral that makes it work. His chain rule has an extra term, because the square of a small Brownian step is not negligible: it is proportional to the time elapsed. In 2000 a sealed envelope that {{fig:wolfgang-doeblin|Wolfgang Doeblin}} had sent to the Paris Academy in 1940, shortly before he died as a soldier, was opened. It held a version of the same formula.

## A Closer Look: Markov Counts Letters

Markov's data from the first 20,000 letters of *Eugene Onegin* are simple enough to follow completely. He found 8,638 vowels and 11,362 consonants. A vowel was followed by another vowel 1,104 times, and a consonant by another consonant 3,827 times. So:

| After a … | Next is a vowel | Next is a consonant |
|---|---|---|
| Vowel | $1104 / 8638 \approx 0.128$ | 0.872 |
| Consonant | $7535 / 11362 \approx 0.663$ | 0.337 |

The letters are clearly not independent. If they were, a vowel would follow a vowel about 43% of the time, about 3,700 times in the text, not 1,104. Russian alternates. Treat the text as a two-state Markov chain with these transition probabilities. In the long run, the fraction $v$ of vowels must stay the same from one letter to the next: vowels arise from vowels at rate 0.128 and from consonants at rate 0.663, so

$$
v = 0.128\,v + 0.663\,(1 - v) \quad\Longrightarrow\quad v = \frac{0.663}{1 - 0.128 + 0.663} \approx 0.432 .
$$

This is the stationary distribution, and it matches the observed share of vowels, $8638 / 20000 = 0.432$. The chain, knowing only which letter class came last, reproduces the overall frequency exactly, as Markov's theorem says it should.

The same calculation ranks the web. Take three pages: A links to B and C, B links to C, and C links back to A. A surfer clicking links at random settles into spending 40% of the time on A, 20% on B and 40% on C. With PageRank's rule that the surfer jumps to a random page 15% of the time, the shares become about 38.8%, 21.5% and 39.7%. C, with two incoming links, edges ahead of A.

## Random Worlds

After 1950 the theory spread in every direction. Economists rediscovered Bachelier, and in 1973 {{fig:fischer-black|Fischer Black}} and {{fig:myron-scholes|Myron Scholes}}, with {{fig:robert-merton|Robert Merton}}, used Itô's calculus to price options, founding modern financial mathematics. In 1998 {{fig:sergey-brin|Sergey Brin}} and {{fig:larry-page|Larry Page}} ranked the web by the stationary distribution of a random surfer. Markov chains also power the samplers of [Bayesian statistics](/math/bayesian-statistics/), and physicists use random walks to model molecules, as in [kinetic theory](/physics/kinetic-theory/).

The theory is least complete where a process remembers its whole past. A walk that is forbidden to revisit its own path, the simplest model of a polymer, has resisted proof for more than seventy years in the dimensions where polymers live.
