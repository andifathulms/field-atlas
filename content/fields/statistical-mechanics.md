---
id: statistical-mechanics
domain: physics
thread: entropy
name: Statistical Mechanics
parent_ids:
  - kinetic-theory
era_emerged: 1877 – 1926
core_question: How do the laws of heat emerge from the statistics of vast numbers of particles?

summary: |-
  Statistical mechanics derives the behaviour of matter in bulk from the behaviour of its particles, without tracking any of them individually. It counts the microscopic arrangements compatible with what we observe and assumes each is equally likely. From that alone come temperature, pressure, entropy and the laws of thermodynamics.

  Boltzmann's formula $S = k \log W$ identified entropy with the number of arrangements, and Gibbs turned the idea into a general method in 1902. When quantum mechanics arrived, the same method, with new counting rules, explained the behaviour of light, metals, white dwarf stars and superfluids. It is now used wherever many parts interact, from magnets to neural networks.

key_ideas:
  - term: Microstate and macrostate
    definition: >-
      A macrostate is what we observe, such as temperature and pressure. A microstate is a
      complete specification of every particle. Each macrostate corresponds to an
      enormous number of microstates.
    turning_point_id: boltzmann-entropy-formula
  - term: Entropy as counting
    definition: >-
      $S = k \log W$, where $W$ is the number of microstates in a macrostate. Entropy
      increases because high-entropy macrostates contain overwhelmingly more
      arrangements.
    turning_point_id: boltzmann-entropy-formula
  - term: Ensemble and Boltzmann factor
    definition: >-
      Gibbs's method: consider all the states a system could be in, each weighted by
      $e^{-E/kT}$. Low-energy states are favoured, and more so the lower the temperature.
    turning_point_id: gibbs-ensembles
  - term: Bosons and fermions
    definition: >-
      Identical quantum particles are counted differently. Bosons, like photons, can
      share a state and pile up together. Fermions, like electrons, cannot, which is why
      matter takes up space.
    turning_point_id: fermi-dirac-statistics

turning_points:
  - id: boltzmann-entropy-formula
    date: "1877"
    type: DISCOVERY
    title: Entropy counts arrangements
    description: >-
      Responding to Loschmidt's objection, Ludwig Boltzmann reinterprets the second law.
      Entropy measures how many microscopic arrangements are consistent with a
      macroscopic state, and systems drift towards states with more arrangements because
      there are so many more of them. The formula $S = k \log W$, in the form Planck later
      gave it, is carved on Boltzmann's tomb in Vienna.
    contested: false
    sources:
      - citation: "Boltzmann, L. (1877). Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung. Sitzungsberichte der Kaiserlichen Akademie der Wissenschaften Wien 76: 373–435."
        url: null

  - id: gibbs-ensembles
    date: "1902"
    type: PARADIGM-SHIFT
    title: Gibbs's statistical mechanics
    description: >-
      Josiah Willard Gibbs, at Yale, publishes *Elementary Principles in Statistical
      Mechanics*. Instead of following a gas's molecules, he considers an ensemble of all
      the states the system could be in, weighted by their energies. The method works
      for any system, not just gases, and it survived the arrival of quantum mechanics
      almost unchanged.
    contested: false
    sources:
      - citation: "Gibbs, J. W. (1902). Elementary Principles in Statistical Mechanics. Charles Scribner's Sons, New York."
        url: null

  - id: bose-einstein-statistics
    date: 1924 – 1925
    type: DISCOVERY
    title: Bose–Einstein statistics
    description: >-
      Satyendra Nath Bose, in Dacca, derives Planck's law for light by counting photons as
      indistinguishable. Rejected by a journal, he sends the paper to Einstein, who
      translates it into German and extends it to atoms. Einstein predicts that at low
      enough temperature many atoms will crowd into the lowest energy state, a new state
      of matter.
    contested: false
    sources:
      - citation: "Bose, S. N. (1924). Plancks Gesetz und Lichtquantenhypothese. Zeitschrift für Physik 26: 178–181."
        url: null
      - citation: "Einstein, A. (1925). Quantentheorie des einatomigen idealen Gases. Zweite Abhandlung. Sitzungsberichte der Preussischen Akademie der Wissenschaften: 3–14."
        url: null

  - id: fermi-dirac-statistics
    date: "1926"
    type: DISCOVERY
    title: Fermi–Dirac statistics
    description: >-
      Enrico Fermi and Paul Dirac independently work out the statistics of particles that
      obey Pauli's exclusion principle, no two in the same state. It explains why metals
      conduct but store little heat in their electrons, and, applied by Ralph Fowler the
      same year, what holds up white dwarf stars against gravity.
    contested: false
    sources:
      - citation: "Fermi, E. (1926). Zur Quantelung des idealen einatomigen Gases. Zeitschrift für Physik 36: 902–912."
        url: null
      - citation: "Dirac, P. A. M. (1926). On the theory of quantum mechanics. Proceedings of the Royal Society A 112: 661–677."
        url: null

  - id: bose-einstein-condensate
    date: "1995"
    type: EXPERIMENT
    title: A Bose–Einstein condensate is made
    description: >-
      Seventy years after Einstein's prediction, Eric Cornell and Carl Wieman in Boulder
      cool a cloud of rubidium atoms to about 170 billionths of a degree above absolute
      zero, and thousands of atoms fall into a single quantum state. Wolfgang Ketterle at
      MIT achieves it with sodium months later. All three shared the 2001 Nobel prize.
    contested: false
    sources:
      - citation: "Anderson, M. H., Ensher, J. R., Matthews, M. R., Wieman, C. E. & Cornell, E. A. (1995). Observation of Bose–Einstein condensation in a dilute atomic vapor. Science 269(5221): 198–201."
        url: null

open_problems:
  - id: glass-transition
    name: What is a glass?
    status: open
    status_note: Open as of writing; there is no accepted theory of the glass transition.
    description: >-
      Cool most liquids quickly and they do not crystallise. They become ever more viscous
      until they are rigid, a glass, while their molecules remain as disordered as in a
      liquid. Is this a true phase transition, with a sharp temperature, or just a
      liquid slowing down beyond our patience to watch it flow?
    why_hard: >-
      Viscosity rises by more than ten orders of magnitude over a narrow temperature range,
      with no visible change in structure. The relevant timescales are too long to
      simulate or measure near the proposed transition, and competing theories make
      predictions that are hard to tell apart. Philip Anderson called it the deepest
      unsolved problem in solid state theory.
    unlocks: >-
      Understanding of glasses, plastics, metallic glasses and amorphous materials, and
      of other systems that get stuck far from equilibrium, from granular materials to the
      interior of cells.
    sources:
      - citation: "Anderson, P. W. (1995). Through the glass lightly. Science 267(5204): 1615–1616."
        url: null

applications:
  - area: Biophysics
    title: Why proteins fold
    description: >-
      A protein chain folds into the shape that minimises its free energy, the balance
      between energy and entropy that statistical mechanics defines. Folding models and
      simulations, and the understanding of misfolding diseases, are built on this
      picture.
    domain: biology
    field_id: molecular-biology
    sources:
      - citation: "Dill, K. A. & MacCallum, J. L. (2012). The protein-folding problem, 50 years on. Science 338(6110): 1042–1046."
        url: null
  - area: Astrophysics
    title: White dwarfs and neutron stars
    description: >-
      A dead star is held up not by heat but by fermion statistics: electrons, or
      neutrons, cannot share states, and so resist being squeezed. Chandrasekhar used
      this in 1931 to find the maximum mass of a white dwarf, about 1.4 solar masses.
    sources:
      - citation: "Chandrasekhar, S. (1931). The maximum mass of ideal white dwarfs. Astrophysical Journal 74: 81–82."
        url: null
  - area: Machine learning
    title: Neural networks as magnets
    description: >-
      John Hopfield described memory in a network of neurons using the statistical
      mechanics of magnets, and Geoffrey Hinton's Boltzmann machine used the Boltzmann
      factor to learn. The two shared the 2024 Nobel prize in physics for founding work in
      machine learning.
    sources:
      - citation: "Hopfield, J. J. (1982). Neural networks and physical systems with emergent collective computational abilities. Proceedings of the National Academy of Sciences 79(8): 2554–2558."
        url: null

further_reading:
  - citation: "Sethna, J. P. (2021). Statistical Mechanics: Entropy, Order Parameters, and Complexity (2nd ed.). Oxford University Press."
    url: https://sethna.lassp.cornell.edu/statistical_mechanics_entropy_order_parameters_and_complexity
    note: A modern textbook with wide-ranging examples. Free to download from the author.
  - citation: "Lindley, D. (2001). Boltzmann's Atom: The Great Debate That Launched a Revolution in Physics. Free Press."
    url: null
    note: The story of Boltzmann and the statistical view, for general readers.
  - citation: "Kittel, C. & Kroemer, H. (1980). Thermal Physics (2nd ed.). W. H. Freeman."
    url: null
    note: A classic introduction that starts from counting states.
---

## Counting Arrangements

[Kinetic theory](/physics/kinetic-theory/) had left a puzzle. If the laws of motion run equally well backwards, how can entropy only increase? In 1877 {{fig:boltzmann|Ludwig Boltzmann}} answered by counting. A macroscopic state, such as "the gas fills the box evenly", can be realised by a vast number of microscopic arrangements of the molecules. A state such as "all the gas is in one corner" can be realised by comparatively few. Entropy is a measure of that number, and systems move towards higher entropy because almost all arrangements are high-entropy ones. The second law is a statement about overwhelming probability.

{{fig:max-planck|Max Planck}} wrote the relation in its famous form, $S = k \log W$, and it is engraved on Boltzmann's gravestone.

## Gibbs's Ensembles

In 1902 {{fig:josiah-willard-gibbs|Josiah Willard Gibbs}}, a reserved professor at Yale who had spent decades on thermodynamics, published a general method. Forget the individual molecules. Imagine every state the whole system could be in, and weight each by the factor $e^{-E/kT}$, so that states of lower energy are more likely at lower temperature. Every thermodynamic quantity can then be computed from a single sum over states. Gibbs cautioned that the approach could not explain everything: some predictions, like the heat stored in gases, disagreed with experiment. The disagreements were the first signs of quantum mechanics.

## Quantum Counting

When quantum theory arrived, statistical mechanics needed only new rules for counting. In 1924 {{fig:satyendra-nath-bose|Satyendra Nath Bose}}, a young physicist in Dacca, derived Planck's law for light by treating photons as truly indistinguishable. His paper was rejected, and he sent it to {{fig:einstein|Einstein}}, who translated it himself and applied the idea to atoms. He predicted that very cold atoms would pile into a single state, a Bose–Einstein condensate. In 1926 {{fig:enrico-fermi|Enrico Fermi}} and {{fig:paul-dirac|Paul Dirac}} found the rules for particles that refuse to share, such as electrons. Those two kinds of counting explain lasers and superfluids on one side, and metals, chemistry and white dwarf stars on the other.

The condensate took seventy years to make. In 1995 {{fig:eric-cornell|Eric Cornell}} and {{fig:carl-wieman|Carl Wieman}} cooled rubidium atoms to 170 billionths of a degree above absolute zero and saw them condense. {{fig:wolfgang-ketterle|Wolfgang Ketterle}} did the same with sodium months later.

## A Closer Look: Why Gas Never Gathers in One Half of a Room

Divide a box into two equal halves and put $N$ molecules in it, each equally likely to be in either half. What is the chance that all of them are in the left half at a given moment?

Each molecule is on the left with probability $\tfrac12$, so all $N$ are there with probability $2^{-N}$:

| Molecules $N$ | Chance all are on the left |
|---|---|
| 1 | 1 in 2 |
| 10 | 1 in 1,024 |
| 100 | about 1 in $10^{30}$ |
| $6 \times 10^{23}$ (one mole) | about 1 in $10^{1.8 \times 10^{23}}$ |

With ten molecules it would happen regularly. With a hundred, you would wait far longer than the age of the universe, about $4 \times 10^{17}$ seconds. With a mole, about 24 litres of gas at room temperature and pressure, the number $10^{1.8 \times 10^{23}}$ has $1.8 \times 10^{23}$ digits. Written out at one digit per millimetre, it would stretch about 19,000 light-years. Nothing forbids the gas from gathering on one side. It is just that the arrangements where it does are a vanishingly small fraction of all arrangements.

This is Boltzmann's second law. When a gas spreads from one half of a box into the whole box, each molecule has twice as many places to be, so the number of arrangements $W$ is multiplied by $2^N$. The entropy increases by

$$
\Delta S = k \log 2^N = N k \ln 2 ,
$$

which for one mole is $6.02 \times 10^{23} \times 1.38 \times 10^{-23} \times 0.693 \approx 5.76$ J/K. That is exactly the value thermodynamics gives for this expansion, measured with heat and thermometers. The macroscopic law and the microscopic count agree.

## Many Bodies

Statistical mechanics now reaches well beyond gases. Its most spectacular successes concern systems where the particles act together, in [phase transitions](/physics/phase-transitions/) such as boiling and magnetisation. Its methods have spread into biology, economics and machine learning, wherever many interacting parts must be understood without following each one. Its hardest open problems are about systems that never reach equilibrium, from glasses that take longer than the age of the universe to settle to the [non-equilibrium physics](/physics/non-equilibrium-physics/) of living cells.
