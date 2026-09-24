---
id: magnetism
domain: physics
thread: matter
name: Magnetism
parent_ids:
  - solid-state-physics
  - statistical-mechanics
era_emerged: 1895 – 1949
core_question: Why are a few materials, such as iron, permanently magnetic, and what holds their tiny atomic magnets in line?

summary: |-
  Lodestones and compasses are among the oldest objects of physics, yet why iron is magnetic was not understood until 1928. Pierre Curie showed in 1895 that iron loses its magnetism above a sharp temperature, and Pierre Weiss explained this in 1907 by supposing that each atomic magnet feels an enormous internal field from its neighbours. Nobody could say where such a field came from. A theorem proved independently by Niels Bohr and Hendrika van Leeuwen then showed that classical physics cannot produce magnetism at all.

  The answer was quantum mechanical. Heisenberg showed in 1928 that the exclusion principle, combined with the electric repulsion between electrons, makes neighbouring spins prefer to line up, an effect thousands of times stronger than any magnetic force between them. Louis Néel found materials in which neighbouring spins point in opposite directions. The study of disordered magnets, called spin glasses, later fed into optimisation and neural networks, and layered magnetic films gave the read heads that made modern hard drives possible.

key_ideas:
  - term: Curie temperature
    definition: >-
      The temperature above which a ferromagnet loses its permanent magnetism: 770 °C for
      iron, about 19 °C for gadolinium. Above it, the material is only weakly attracted to
      a magnet.
    turning_point_id: magnet-curie-law
  - term: Molecular field
    definition: >-
      Weiss's idea that each atomic magnet feels an internal field produced by its
      neighbours, strong enough to align them. It worked well, but its size was far too
      large to be magnetic in origin.
    turning_point_id: magnet-weiss-field
  - term: Exchange interaction
    definition: >-
      An effect of the exclusion principle and the electric repulsion between electrons,
      which makes the energy of two neighbouring atoms depend on whether their spins are
      parallel. It is the true source of the molecular field.
    turning_point_id: magnet-heisenberg-exchange
  - term: Antiferromagnetism
    definition: >-
      An ordered state in which neighbouring atomic magnets point in opposite directions, so
      the material has no overall magnetisation. It is more common than ferromagnetism.
    turning_point_id: magnet-neel-antiferromagnetism
  - term: Giant magnetoresistance
    definition: >-
      A large change in electrical resistance in stacked magnetic layers a few atoms thick,
      depending on whether the layers are magnetised parallel or opposite. It lets a tiny
      field from a disc be read as a change in current.
    turning_point_id: magnet-gmr

turning_points:
  - id: magnet-curie-law
    date: "1895"
    type: EXPERIMENT
    title: Magnetism and temperature
    description: >-
      For his doctoral thesis, Pierre Curie measures the magnetic properties of many
      substances over a wide range of temperatures. Weakly magnetic, paramagnetic,
      materials become less magnetic in proportion to the inverse of temperature, a rule now
      called Curie's law. Iron loses its strong magnetism abruptly above a critical
      temperature, now called the Curie point.
    contested: false
    sources:
      - citation: "Curie, P. (1895). Propriétés magnétiques des corps à diverses températures. Annales de Chimie et de Physique, 7th series, 5: 289–405."
        url: null

  - id: magnet-weiss-field
    date: "1907"
    type: DISCOVERY
    title: The molecular field
    description: >-
      Pierre Weiss proposes that each atomic magnet in iron feels a molecular field
      proportional to the magnetisation around it. The idea explains the Curie point and
      the behaviour above it. To explain why an iron nail is not always a magnet, Weiss
      also proposes that iron divides into small domains, each fully magnetised but pointing
      in different directions.
    contested: false
    sources:
      - citation: "Weiss, P. (1907). L'hypothèse du champ moléculaire et la propriété ferromagnétique. Journal de Physique Théorique et Appliquée 6: 661–690."
        url: null

  - id: magnet-bohr-van-leeuwen
    date: 1911 – 1919
    type: DISCOVERY
    title: Classical physics cannot make a magnet
    description: >-
      In his doctoral thesis of 1911, Niels Bohr proves that in classical statistical
      mechanics a collection of moving electrons in thermal equilibrium has no net
      magnetism at all. Hendrika van Leeuwen proves the same result independently in her
      thesis of 1919. Magnetism, the most familiar of physical effects, had to be quantum
      mechanical.
    contested: false
    sources:
      - citation: "van Leeuwen, H.-J. (1921). Problèmes de la théorie électronique du magnétisme. Journal de Physique et le Radium 2(12): 361–377."
        url: null
      - citation: "Van Vleck, J. H. (1932). The Theory of Electric and Magnetic Susceptibilities. Oxford University Press."
        url: null

  - id: magnet-heisenberg-exchange
    date: "1928"
    type: DISCOVERY
    title: The exchange interaction
    description: >-
      Werner Heisenberg shows that the source of Weiss's field is electrostatic. Because of
      the exclusion principle, electrons with parallel spins must keep apart, which changes
      their electric repulsion. The energy of two neighbouring atoms therefore depends on
      the relative direction of their spins. Heisenberg's model of interacting spins
      became the basic model of magnetism.
    contested: false
    sources:
      - citation: "Heisenberg, W. (1928). Zur Theorie des Ferromagnetismus. Zeitschrift für Physik 49: 619–636."
        url: null

  - id: magnet-neel-antiferromagnetism
    date: 1936 – 1949
    type: DISCOVERY
    title: Antiferromagnets and ferrites
    description: >-
      Louis Néel in Strasbourg and Grenoble predicts that when the exchange interaction
      favours opposite spins, a material orders with neighbouring magnets alternating up and
      down. In 1948 he explains ferrites, the magnetic oxides used in transformers, as two
      unequal alternating sets of magnets. In 1949 Clifford Shull and J. Samuel Smart see
      the alternating order in manganese oxide directly by diffracting neutrons. Néel and
      Shull later received Nobel prizes.
    contested: false
    sources:
      - citation: "Néel, L. (1948). Propriétés magnétiques des ferrites; ferrimagnétisme et antiferromagnétisme. Annales de Physique 12(3): 137–198."
        url: null
      - citation: "Shull, C. G. & Smart, J. S. (1949). Detection of antiferromagnetism by neutron diffraction. Physical Review 76(8): 1256–1257."
        url: null

  - id: magnet-spin-glass
    date: 1975 – 1979
    type: DISCOVERY
    title: Spin glasses
    description: >-
      In some dilute alloys, such as a little iron in gold, the interactions between spins
      are random in sign. The spins freeze into a disordered pattern, like the atoms of a
      glass. Sam Edwards and Philip Anderson write a model of this in 1975. Giorgio Parisi
      solves its infinite-range version in 1979 and finds a vast landscape of nearly equal
      frozen states. Parisi shared the 2021 Nobel prize.
    contested: false
    sources:
      - citation: "Edwards, S. F. & Anderson, P. W. (1975). Theory of spin glasses. Journal of Physics F 5(5): 965–974."
        url: null
      - citation: "Parisi, G. (1979). Infinite number of order parameters for spin-glasses. Physical Review Letters 43(23): 1754–1756."
        url: null

  - id: magnet-gmr
    date: 1988 – 1989
    type: DISCOVERY
    title: Giant magnetoresistance
    description: >-
      Albert Fert in Orsay and Peter Grünberg in Jülich independently find that stacks of
      iron and chromium layers, each a few atoms thick, change their resistance greatly when
      a magnetic field swings the iron layers from opposite to parallel. The effect arises
      because electrons scatter differently depending on their spin. Read heads based on it
      reached hard drives in 1997. Fert and Grünberg shared the 2007 Nobel prize.
    contested: false
    sources:
      - citation: "Baibich, M. N. et al. (1988). Giant magnetoresistance of (001)Fe/(001)Cr magnetic superlattices. Physical Review Letters 61(21): 2472–2475."
        url: null
      - citation: "Binasch, G., Grünberg, P., Saurenbach, F. & Zinn, W. (1989). Enhanced magnetoresistance in layered magnetic structures with antiferromagnetic interlayer exchange. Physical Review B 39(7): 4828–4830."
        url: null

open_problems:
  - id: magnet-spin-liquids
    name: Quantum spin liquids
    status: open
    status_note: Open as of writing; several materials are strong candidates, but none is universally accepted.
    description: >-
      In 1973 Philip Anderson proposed that in some magnets the spins never order, even at
      absolute zero, but form a fluctuating quantum superposition of paired states. Such a
      quantum spin liquid would have exotic properties, including excitations that carry a
      fraction of an electron's quantum numbers. Do real materials behave this way?
    why_hard: >-
      A spin liquid is defined by what it lacks, namely order, so it is hard to prove one
      exists. Small amounts of disorder or weak extra interactions can mimic or destroy the
      signatures. The theoretical models are hard to solve except in special cases.
    unlocks: >-
      A new kind of quantum matter, possible routes to high-temperature superconductivity,
      and a medium for topologically protected quantum computing.
    sources:
      - citation: "Anderson, P. W. (1973). Resonating valence bonds: a new kind of insulator? Materials Research Bulletin 8(2): 153–160."
        url: null
      - citation: "Savary, L. & Balents, L. (2017). Quantum spin liquids: a review. Reports on Progress in Physics 80(1): 016502."
        url: null

applications:
  - area: Data storage
    title: The hard-drive read head
    description: >-
      Read heads based on giant magnetoresistance let hard drives detect much smaller
      magnetic bits, and storage density rose steeply after their introduction in 1997.
      Later heads use a related effect, tunnelling magnetoresistance. The same physics of
      electron spin in layered films, called spintronics, now underlies magnetic memory
      chips.
    sources:
      - citation: "Fert, A. (2008). Nobel lecture: Origin, development, and future of spintronics. Reviews of Modern Physics 80(4): 1517–1530."
        url: null
  - area: Optimisation
    title: Simulated annealing
    description: >-
      Finding the lowest-energy state of a spin glass is like solving a hard optimisation
      problem, such as the shortest tour of many cities. In 1983 Scott Kirkpatrick and
      colleagues at IBM turned this around. They solved optimisation problems by imitating a
      slowly cooled magnet, letting the solution wander and gradually lowering a
      temperature. Simulated annealing is still widely used to lay out chips and schedules.
    domain: math
    field_id: combinatorial-optimization
    sources:
      - citation: "Kirkpatrick, S., Gelatt, C. D. & Vecchi, M. P. (1983). Optimization by simulated annealing. Science 220(4598): 671–680."
        url: null
  - area: Neural networks
    title: Memories as low-energy states
    description: >-
      In 1982 John Hopfield described a network of model neurons as a spin glass whose
      stored memories are low-energy states. Given part of a pattern, the network slides
      downhill to the whole. The work helped revive neural networks, and Hopfield shared the
      2024 Nobel prize in physics for it.
    domain: biology
    sources:
      - citation: "Hopfield, J. J. (1982). Neural networks and physical systems with emergent collective computational abilities. Proceedings of the National Academy of Sciences 79(8): 2554–2558."
        url: null

further_reading:
  - citation: "Mattis, D. C. (2006). The Theory of Magnetism Made Simple. World Scientific."
    url: null
    note: An introduction to the theory of magnetism, with historical chapters.
  - citation: "Blundell, S. (2001). Magnetism in Condensed Matter. Oxford University Press."
    url: null
    note: A clear undergraduate textbook.
  - citation: "Stein, D. L. & Newman, C. M. (2013). Spin Glasses and Complexity. Princeton University Press."
    url: null
    note: An accessible account of spin glasses and their links to computing and biology.
---

## The Curie Point

A magnet heated red-hot stops being a magnet. In 1895 {{fig:pierre-curie|Pierre Curie}} measured this carefully for his doctoral thesis. Iron loses its strong magnetism abruptly at about 770 °C. Above that temperature it behaves like the many substances that are only weakly attracted to a magnet, and for those Curie found a simple rule: the magnetism induced by a field falls in proportion to the inverse of temperature. Heat jostles the atomic magnets out of line.

In 1907 {{fig:pierre-weiss|Pierre Weiss}} explained the Curie point. Suppose each atomic magnet feels an internal field proportional to the magnetisation of its surroundings. Below a certain temperature this feedback sustains itself, and the magnets line up spontaneously. Above it, heat wins. The same kind of self-consistent argument would later become Landau's theory of [phase transitions](/physics/phase-transitions/). Weiss also saw why an ordinary nail is not a magnet. It is divided into small domains, each fully magnetised but pointing in different directions. But his molecular field had to be enormous, more than a thousand tesla, far stronger than the magnetic field of any atom could be.

## A Quantum Effect

Worse was to come. In his doctoral thesis of 1911, {{fig:niels-bohr|Niels Bohr}} proved that classical [statistical mechanics](/physics/statistical-mechanics/) allows no magnetism at all. In a field, electrons curve, but in thermal equilibrium their effects cancel exactly. {{fig:hendrika-van-leeuwen|Hendrika van Leeuwen}} proved the same in 1919. Magnetism, the oldest known force after gravity, cannot be explained without quantum mechanics.

The electron's spin, discovered in 1925, made each electron a tiny magnet. In 1928 {{fig:werner-heisenberg|Werner Heisenberg}} found the force that aligns them. It is not magnetic at all. The exclusion principle forces two electrons with parallel spins to stay apart, and that changes their electric repulsion. So the energy of two neighbouring atoms depends on whether their spins are parallel. This *exchange* interaction is electric in strength, which is why it can hold spins in line at hundreds of degrees.

The exchange interaction can also favour opposite spins. {{fig:louis-neel|Louis Néel}} predicted in 1936 that such materials would order with alternating magnets, showing no outward magnetism at all. In 1949 {{fig:clifford-shull|Clifford Shull}} confirmed it by diffracting neutrons from manganese oxide, since neutrons, unlike X-rays, feel the spins. In his Nobel lecture of 1970, Néel remarked that antiferromagnets were interesting but seemed to have no applications.

## Frustration and Films

In some alloys the interactions are random, so no arrangement can satisfy every pair. The spins freeze into a disordered pattern, a *spin glass*. {{fig:sam-edwards|Sam Edwards}} and {{fig:philip-anderson|Philip Anderson}} wrote a model of this in 1975, and {{fig:giorgio-parisi|Giorgio Parisi}} solved a version of it in 1979, finding a rugged landscape of countless nearly equal frozen states. The mathematics proved useful far outside magnetism, in optimisation, in models of memory and in the theory of computation. Mathematicians took until 2006 to prove Parisi's solution rigorously.

Magnetism also became engineering at the scale of atoms. In 1988 {{fig:albert-fert|Albert Fert}} and {{fig:peter-grunberg|Peter Grünberg}} independently found that stacks of alternating iron and chromium layers, a few atoms thick, change their electrical resistance dramatically in a magnetic field. The iron layers are coupled antiparallel through the chromium, and electrons of one spin pass easily through layers magnetised one way. Within ten years the effect was reading data in hard drives, and it often used an antiferromagnet to pin one layer in place.

## A Closer Look: Why Magnetism Is Not Magnetic

Weiss's molecular field must be strong enough that an atomic magnet gains an energy comparable to the thermal energy at the Curie point. An electron's magnetic moment is the Bohr magneton, $\mu_B = 9.27 \times 10^{-24}$ J/T. Setting $\mu_B B_W \approx k_B T_C$ gives a rough size for the field:

| Metal | Curie point | $k_B T_C$ (meV) | Rough molecular field $k_B T_C / \mu_B$ |
|---|---|---|---|
| Iron | 1043 K (770 °C) | 89.9 | 1,553 T |
| Cobalt | 1388 K (1115 °C) | 119.6 | 2,066 T |
| Nickel | 627 K (354 °C) | 54.0 | 933 T |
| Gadolinium | 292 K (19 °C) | 25.2 | 435 T |

These are order-of-magnitude estimates, since the exact factor depends on the atom's spin and number of neighbours. The strongest steady magnets in any laboratory reach about 45 T.

Now compare the real magnetic field one atomic magnet produces at its neighbour, about 0.25 nm away. The field of a magnetic dipole is

$$
B \approx \frac{\mu_0}{4\pi} \frac{\mu_B}{r^3} = 10^{-7} \times \frac{9.27 \times 10^{-24}}{(2.5 \times 10^{-10})^3} \approx 0.059 \ \text{T} .
$$

That is about 26,000 times too weak to explain iron. The energy $\mu_B B$ is only 3.4 µeV, equivalent to a temperature of 0.04 K. If magnetic forces alone aligned the atoms, iron would be magnetic only within a few hundredths of a degree of absolute zero. The force that actually does it is Heisenberg's exchange, which is electric.

The consequence for technology is concrete. A magnetic bit is a patch of grains magnetised one way. At a storage density of one terabit per square inch, reached by hard drives in the 2010s, each bit occupies about 645 square nanometres, a square 25 nm on a side. At one gigabit per square inch, reached in the mid-1990s, the side was about 800 nm. Reading bits that small needed a sensor with a large response to weak fields, which is what giant magnetoresistance supplied.

## Order of Every Kind

Magnetism turned out to be a laboratory for all of statistical physics. The Ising model of [phase transitions](/physics/phase-transitions/) is a model of a magnet, and magnets remain the cleanest test of theories of critical behaviour. Magnetic fluctuations are the leading suspect behind high-temperature [superconductivity](/physics/superconductivity/). And the search for quantum spin liquids, magnets that never order, joins the study of [topological matter](/physics/topological-matter/), where order is defined not by aligned spins but by the shape of quantum states.
