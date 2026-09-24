---
id: monte-carlo-methods
domain: math
thread: computation
name: Monte Carlo Methods
parent_ids:
  - numerical-analysis
  - probability-theory
era_emerged: 1946 – 1953
core_question: How can randomness compute answers that careful deterministic methods cannot reach?

summary: |-
  A Monte Carlo method answers a question by simulating chance. To find the average of a quantity over some huge space, such as all the arrangements of a million atoms or all the paths a neutron might take, pick random samples and average over them. The law of large numbers guarantees that the answer converges, and the central limit theorem says how fast: the error shrinks like one over the square root of the number of samples, whatever the dimension of the space.

  The idea is old, as Buffon's needle of 1777 shows, but it became a method at Los Alamos in 1946–49, when Stanislaw Ulam and John von Neumann saw that the new electronic computers could play games of chance millions of times. In 1953 the Metropolis algorithm showed how to sample from the complicated probability distributions of physics by a random walk. That idea, Markov chain Monte Carlo, spread from physics to statistics in the 1990s and is now among the most used algorithms in science.

key_ideas:
  - term: Estimation by sampling
    definition: >-
      Write the unknown quantity as the average of some random outcome, then simulate the
      outcome many times and average. Buffon's needle turns $\pi$ into a probability.
    turning_point_id: buffon-needle
  - term: The square-root law
    definition: >-
      The error of a Monte Carlo average falls like $1/\sqrt{N}$ for $N$ samples, in any
      dimension. One more correct digit costs a hundred times more samples, but high
      dimension costs nothing extra.
    turning_point_id: ulam-von-neumann-monte-carlo
  - term: Pseudorandom numbers
    definition: >-
      Computers produce "random" numbers by a deterministic rule. A good rule passes
      statistical tests. A bad one hides patterns that can quietly bias every result.
    turning_point_id: randu-planes
  - term: Markov chain Monte Carlo
    definition: >-
      To sample from a complicated distribution, run a random walk that proposes small
      moves and accepts or rejects each one by a simple rule. In the long run, the walk
      visits each state in proportion to its probability.
    turning_point_id: metropolis-algorithm
  - term: Quasi-Monte Carlo
    definition: >-
      Replace random samples by carefully spread-out deterministic points. For smooth
      problems the error can fall almost like $1/N$ instead of $1/\sqrt{N}$.
    turning_point_id: quasi-monte-carlo

turning_points:
  - id: buffon-needle
    date: "1777"
    type: PROOF
    title: Buffon's needle
    description: >-
      Georges-Louis Leclerc, Comte de Buffon, asks for the probability that a needle dropped
      on a floor of parallel boards crosses a crack. When the needle is as long as the
      boards are wide, the answer is $2/\pi$. He had posed the problem in 1733 and published
      the solution in 1777. Dropping needles became, in principle, a way to measure $\pi$,
      and it is the classic first example of computing by chance.
    contested: false
    sources:
      - citation: "Buffon, G.-L. L. (1777). Essai d'arithmétique morale. In Histoire naturelle, générale et particulière, Supplément 4. Imprimerie Royale, Paris."
        url: null
      - citation: "Badger, L. (1994). Lazzarini's lucky approximation of π. Mathematics Magazine 67(2): 83–91."
        url: null

  - id: ulam-von-neumann-monte-carlo
    date: 1946 – 1949
    type: REFORMULATION
    title: The Monte Carlo method at Los Alamos
    description: >-
      Recovering from an illness in 1946, Stanislaw Ulam wonders how likely a game of
      solitaire is to come out, and realises that playing it many times would answer the
      question faster than combinatorics. He and John von Neumann see that the same trick,
      run on the ENIAC, can follow neutrons through a nuclear weapon. Nicholas Metropolis
      names it after the Monte Carlo casino, and Metropolis and Ulam publish the method in
      1949.
    contested: false
    sources:
      - citation: "Metropolis, N. & Ulam, S. (1949). The Monte Carlo method. Journal of the American Statistical Association 44(247): 335–341."
        url: null
      - citation: "Metropolis, N. (1987). The beginning of the Monte Carlo method. Los Alamos Science 15 (Special Issue): 125–130."
        url: null

  - id: metropolis-algorithm
    date: "1953"
    type: REFORMULATION
    title: The Metropolis algorithm
    description: >-
      A paper by Nicholas Metropolis, Arianna and Marshall Rosenbluth and Augusta and Edward
      Teller computes the properties of a simple liquid on the MANIAC computer. Rather than
      sampling configurations blindly, it moves one particle at a time and accepts or
      rejects each move by a rule that makes the walk settle into the Boltzmann
      distribution of statistical physics. It was the first Markov chain Monte Carlo
      method.
    contested: true
    contested_note: >-
      The method bears Metropolis's name because he was first author, but accounts of who
      did what differ. Marshall Rosenbluth later recalled that he and Arianna Rosenbluth
      developed the algorithm, following a suggestion from Edward Teller, and that Arianna
      wrote the code, while Metropolis's role was chiefly in providing the computer. Others
      have defended a larger role for Metropolis. The authors' shares cannot now be settled.
    sources:
      - citation: "Metropolis, N., Rosenbluth, A. W., Rosenbluth, M. N., Teller, A. H. & Teller, E. (1953). Equation of state calculations by fast computing machines. Journal of Chemical Physics 21(6): 1087–1092."
        url: null
      - citation: "Gubernatis, J. E. (2005). Marshall Rosenbluth and the Metropolis algorithm. Physics of Plasmas 12(5): 057303."
        url: null

  - id: quasi-monte-carlo
    date: 1960 – 1967
    type: REFORMULATION
    title: Quasi-random points
    description: >-
      Random points clump and leave gaps by chance. John Halton in 1960 and Ilya Sobol in
      1967 construct deterministic sequences of points that fill a cube far more evenly.
      For smooth problems, averaging over them converges much faster than true random
      sampling. In the 1990s they proved surprisingly effective for pricing financial
      products involving hundreds of variables.
    contested: false
    sources:
      - citation: "Sobol, I. M. (1967). On the distribution of points in a cube and the approximate evaluation of integrals. USSR Computational Mathematics and Mathematical Physics 7(4): 86–112."
        url: null
      - citation: "Niederreiter, H. (1992). Random Number Generation and Quasi-Monte Carlo Methods. SIAM."
        url: null

  - id: randu-planes
    date: "1968"
    type: CRISIS
    title: Random numbers fall mainly in the planes
    description: >-
      George Marsaglia shows that the standard way computers made random numbers, the
      linear congruential generator, has a hidden flaw: consecutive triples of its numbers,
      plotted as points in a cube, lie on a small number of parallel planes. The widely used
      generator RANDU is among the worst, with every point on just 15 planes. Results
      computed with it had to be treated with suspicion, and testing random number
      generators became a subject in its own right.
    contested: false
    sources:
      - citation: "Marsaglia, G. (1968). Random numbers fall mainly in the planes. Proceedings of the National Academy of Sciences 61(1): 25–28."
        url: null
      - citation: "Knuth, D. E. (1997). The Art of Computer Programming, Volume 2: Seminumerical Algorithms, 3rd edition. Addison-Wesley."
        url: null

  - id: mcmc-in-statistics
    date: 1970 – 1990
    type: REFORMULATION
    title: Markov chains enter statistics
    description: >-
      W. Keith Hastings generalises the Metropolis rule in 1970 so that it can sample from
      almost any distribution. The paper is little noticed. In 1990 Alan Gelfand and Adrian
      Smith show statisticians that such samplers make Bayesian models of realistic size
      computable. Within a decade Markov chain Monte Carlo had transformed statistics.
    contested: false
    sources:
      - citation: "Hastings, W. K. (1970). Monte Carlo sampling methods using Markov chains and their applications. Biometrika 57(1): 97–109."
        url: null
      - citation: "Gelfand, A. E. & Smith, A. F. M. (1990). Sampling-based approaches to calculating marginal densities. Journal of the American Statistical Association 85(410): 398–409."
        url: null

open_problems:
  - id: random-colourings-mixing
    name: How fast random colourings mix
    status: open
    status_note: Open as of writing; proved when the number of colours exceeds about 11/6 times the maximum degree.
    description: >-
      Colour the vertices of a network with $q$ colours so that neighbours differ, and
      sample such colourings at random by repeatedly recolouring one vertex. The conjecture
      is that this walk gets close to random in a number of steps only slightly more than
      the number of vertices, whenever $q$ is at least the maximum number of neighbours
      plus two.
    why_hard: >-
      The standard proofs couple two copies of the walk and show they meet. Mark Jerrum
      made that work in 1995 for twice the maximum degree, and Eric Vigoda in 1999 for 11/6
      times it. Below that, local disagreements between the copies can spread, and no
      technique yet controls them all the way down to the conjectured threshold.
    unlocks: >-
      It is the test case for knowing when a Markov chain Monte Carlo run has actually
      converged, a question that every user of the method faces and that is rarely answered
      with proof.
    sources:
      - citation: "Jerrum, M. (1995). A very simple algorithm for estimating the number of k-colorings of a low-degree graph. Random Structures & Algorithms 7(2): 157–165."
        url: null
      - citation: "Vigoda, E. (2000). Improved bounds for sampling colorings. Journal of Mathematical Physics 41(3): 1555–1569."
        url: null

applications:
  - area: Statistical physics
    title: Simulating matter
    description: >-
      Monte Carlo simulation of the Ising model and of liquids, glasses and polymers is a
      basic tool of statistical mechanics. It gives accurate numbers for critical
      temperatures and exponents where no exact solution exists.
    domain: physics
    field_id: statistical-mechanics
    sources:
      - citation: "Landau, D. P. & Binder, K. (2014). A Guide to Monte Carlo Simulations in Statistical Physics, 4th edition. Cambridge University Press."
        url: null
  - area: Evolution
    title: Bayesian family trees of species
    description: >-
      Programs such as MrBayes reconstruct evolutionary trees from DNA sequences by running
      Markov chain Monte Carlo over the enormous space of possible trees. The output is not
      a single tree but a probability for each branch.
    domain: biology
    field_id: evolutionary-biology
    sources:
      - citation: "Huelsenbeck, J. P. & Ronquist, F. (2001). MRBAYES: Bayesian inference of phylogenetic trees. Bioinformatics 17(8): 754–755."
        url: null
  - area: Finance
    title: Pricing by simulation
    description: >-
      Banks price complex financial contracts by simulating thousands of possible futures
      for interest rates and prices and averaging the payoffs, a method introduced by
      Phelim Boyle in 1977.
    sources:
      - citation: "Boyle, P. P. (1977). Options: a Monte Carlo approach. Journal of Financial Economics 4(3): 323–338."
        url: null

further_reading:
  - citation: "Metropolis, N. (1987). The beginning of the Monte Carlo method. Los Alamos Science 15 (Special Issue): 125–130."
    url: null
    note: A first-hand account of the Los Alamos years.
  - citation: "Diaconis, P. (2009). The Markov chain Monte Carlo revolution. Bulletin of the American Mathematical Society 46(2): 179–205."
    url: null
    note: A readable survey of how and why Markov chain Monte Carlo works.
  - citation: "Robert, C. P. & Casella, G. (2004). Monte Carlo Statistical Methods, 2nd edition. Springer."
    url: null
    note: The standard textbook from the statistical side.
---

## Needles and Solitaire

In 1777 {{fig:buffon|Georges-Louis Leclerc, Comte de Buffon}} published the answer to a question he had posed decades earlier. Drop a needle on a floor of parallel boards. If the needle is as long as a board is wide, it crosses a crack with probability $2/\pi$. The problem belongs to [probability theory](/math/probability-theory/), but it can be run backwards: drop enough needles, count the crossings, and estimate $\pi$. A few people tried in the nineteenth century. It was a curiosity, because deterministic formulas gave $\pi$ far faster.

The idea became a method in 1946. {{fig:stanislaw-ulam|Stanislaw Ulam}}, recovering from an illness at Los Alamos, tried to work out the chance that a game of solitaire comes out. The combinatorics was hopeless, but he saw that playing a hundred games and counting would give a good estimate. He told {{fig:von-neumann|John von Neumann}}, who at once saw how to apply it to the problem that mattered at Los Alamos: how neutrons scatter, split nuclei and multiply inside a bomb. Each neutron's life could be simulated as a sequence of random events and repeated thousands of times on the ENIAC. {{fig:nicholas-metropolis|Nicholas Metropolis}} suggested the name, after the casino where Ulam's uncle liked to gamble. Enrico Fermi, it later emerged, had used similar sampling by hand in Rome in the 1930s without publishing it.

## Walking Towards the Answer

Plain sampling fails when the interesting states are rare. In a dense liquid, almost every random placement of the molecules has two overlapping, so almost every sample is worthless. In 1953 a group at Los Alamos, {{fig:nicholas-metropolis|Metropolis}}, {{fig:arianna-rosenbluth|Arianna Rosenbluth}}, {{fig:marshall-rosenbluth|Marshall Rosenbluth}}, Augusta Teller and {{fig:edward-teller|Edward Teller}}, found a way around it. Start with some arrangement. Propose moving one molecule slightly. If the move lowers the energy, accept it. If it raises the energy, accept it only with a probability that shrinks as the energy rises. Otherwise stay put. The resulting random walk visits each arrangement in proportion to its probability in thermal equilibrium, as [ergodic theory](/math/ergodic-theory/) guarantees for a walk of this kind.

The paper carried Metropolis's name first, and the method is named after him. Marshall Rosenbluth later said that he and Arianna had worked out the algorithm and that she had written the program, and the question of credit has been discussed ever since.

Computing by chance needs random numbers, and computers cannot make them. Von Neumann joked that anyone using arithmetic to produce random digits was "in a state of sin". The generators in use were simple formulas that looked random. In 1968 {{fig:george-marsaglia|George Marsaglia}} showed that the most common kind has a hidden structure: its points in three dimensions lie on a few planes. Generators have been tested far more carefully ever since. Others, beginning with Halton and {{fig:ilya-sobol|Ilya Sobol}}, gave up randomness deliberately, choosing points spread more evenly than chance would place them.

## A Closer Look: Buffon's Needle

Let the boards have width 1 and the needle length 1. Where the needle lands is described by two random numbers: the distance $y$ from its centre to the nearest crack, between 0 and $\tfrac12$, and its angle $\theta$ to the cracks, between 0 and $\tfrac{\pi}{2}$. The needle crosses a crack when $y \le \tfrac12 \sin\theta$. The probability is the area under that curve divided by the area of the rectangle:

$$
P = \frac{\int_0^{\pi/2} \tfrac12 \sin\theta \, d\theta}{\tfrac12 \cdot \tfrac{\pi}{2}} = \frac{1/2}{\pi/4} = \frac{2}{\pi} \approx 0.6366.
$$

So if $H$ of $N$ needles cross, $\pi \approx 2N/H$. A computer simulation, with needles dropped by a pseudorandom generator, gives:

| Needles $N$ | Crossings $H$ | Estimate $2N/H$ | Error |
|---|---|---|---|
| 100 | 69 | 2.899 | 0.24 |
| 10,000 | 6,346 | 3.1516 | 0.010 |
| 1,000,000 | 637,106 | 3.13920 | 0.0024 |

Each hundredfold increase in effort buys about one more correct digit. The standard deviation of the estimate is about $2.37/\sqrt{N}$, which is 0.24, 0.024 and 0.0024 for these three sizes, close to what the simulation shows. This is the square-root law, and it is slow: a hundred million needles give only about four correct digits.

It is also why a famous result is suspicious. In 1901 the Italian mathematician Mario Lazzarini reported 3,408 throws of a needle five-sixths as long as the board width, with 1,808 crossings. His estimate was $2 \cdot \tfrac56 \cdot 3408 / 1808 = 355/113 = 3.1415929$, correct to six decimal places. The typical error for that many throws is about 0.05. Getting within $3 \times 10^{-7}$ by luck is wildly unlikely, and the numbers look chosen to produce the well-known fraction $355/113$.

The square-root law has one great virtue: it does not depend on dimension. A grid with 10 points in each direction needs $10^{100}$ points in 100 dimensions, but Monte Carlo error depends only on the number of samples. That is why Monte Carlo wins for the many-dimensional averages of physics, statistics and finance.

## Everywhere at Once

The 1953 algorithm spread slowly. W. Keith Hastings generalised it in 1970, and in 1984 Stuart and Donald Geman's Gibbs sampler brought it to image processing. In 1990 Alan Gelfand and Adrian Smith showed statisticians that it could fit Bayesian models of realistic size, and within a decade Markov chain Monte Carlo had changed how statistics is done. It now runs in [statistical mechanics](/physics/statistical-mechanics/), in the reconstruction of [evolutionary trees](/biology/evolutionary-biology/) and in the training of some machine-learning models. One question is still hard in almost every case: how long must the walk run before its samples can be trusted? For all but a few examples, the honest answer is that nobody can prove it, and users rely on diagnostics and experience. A close relative takes random steps downhill instead of wandering. It is the stochastic gradient descent of [continuous optimisation](/math/continuous-optimization/), and it trains neural networks.
