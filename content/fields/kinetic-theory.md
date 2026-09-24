---
id: kinetic-theory
domain: physics
thread: entropy
name: Kinetic Theory of Gases
parent_ids:
  - thermodynamics
  - classical-mechanics
era_emerged: 1738 – 1908
core_question: Can pressure, temperature and heat be explained as the motion of countless invisible molecules?

summary: |-
  Kinetic theory explains the behaviour of gases from the motion of the molecules they are made of. Pressure is the drumming of molecules on a container's walls. Temperature measures their average energy of motion. Heat is that motion passed from molecule to molecule. With Newton's laws and some statistics, the gas laws, viscosity, diffusion and heat conduction all follow.

  The idea was proposed in 1738 and ignored for a century, because the existence of atoms was unproven and many scientists thought it unprovable. Clausius, Maxwell and Boltzmann developed it into a precise theory between 1857 and 1872. Its reliance on probability, and on atoms, remained controversial until 1908, when Jean Perrin's measurements of Brownian motion convinced almost everyone that molecules are real.

key_ideas:
  - term: Pressure from collisions
    definition: >-
      The pressure of a gas is the average force of molecules bouncing off a surface.
      Doubling the number of molecules in a box doubles the pressure.
    turning_point_id: bernoulli-gas-pressure
  - term: Temperature as motion
    definition: >-
      Absolute temperature is proportional to the average kinetic energy of the
      molecules. At room temperature, air molecules move at about 500 metres per second.
    turning_point_id: clausius-kinetic-heat
  - term: Mean free path
    definition: >-
      The average distance a molecule travels between collisions, about 70 nanometres in
      air. It explains why gases mix slowly although their molecules move fast.
    turning_point_id: clausius-kinetic-heat
  - term: Maxwell–Boltzmann distribution
    definition: >-
      Molecular speeds are not all equal but spread out in a definite pattern set by the
      temperature. It was the first law of physics stated as a probability distribution.
    turning_point_id: maxwell-distribution
  - term: H-theorem
    definition: >-
      Boltzmann's proof that collisions drive any gas towards Maxwell's distribution,
      with a quantity that always decreases, his mechanical version of entropy's increase.
    turning_point_id: boltzmann-h-theorem

turning_points:
  - id: bernoulli-gas-pressure
    date: "1738"
    type: DISCOVERY
    title: Bernoulli's moving particles
    description: >-
      In *Hydrodynamica*, Daniel Bernoulli explains the pressure of air as the impacts of
      tiny particles moving rapidly in all directions, and derives Boyle's law from it. He
      even notes that heating the gas should speed the particles up. The idea was
      ignored for over a century.
    contested: false
    sources:
      - citation: "Bernoulli, D. (1738). Hydrodynamica, sive de viribus et motibus fluidorum commentarii, ch. 10. Dulsecker, Strasbourg."
        url: null

  - id: clausius-kinetic-heat
    date: 1857 – 1858
    type: DISCOVERY
    title: The kind of motion we call heat
    description: >-
      Rudolf Clausius revives the kinetic theory, computing molecular speeds from
      measured pressures: hundreds of metres per second. Christophorus Buys Ballot objects
      that gases would then mix almost instantly. Clausius answers in 1858 with the mean
      free path: molecules collide so often that each one's path is a tangled zigzag.
    contested: false
    sources:
      - citation: "Clausius, R. (1857). Über die Art der Bewegung, welche wir Wärme nennen. Annalen der Physik 100: 353–380."
        url: null
      - citation: "Clausius, R. (1858). Über die mittlere Länge der Wege, welche bei der Molecularbewegung gasförmiger Körper von den einzelnen Molecülen zurückgelegt werden. Annalen der Physik 105: 239–258."
        url: null

  - id: maxwell-distribution
    date: "1860"
    type: DISCOVERY
    title: Maxwell's distribution of speeds
    description: >-
      James Clerk Maxwell, aged twenty-eight, argues that in equilibrium molecular speeds
      follow a definite statistical law, and derives it. He then predicts something that
      seemed absurd: a gas's viscosity should not depend on its pressure. Probability
      entered physics as a law of nature, not just a measure of ignorance.
    contested: false
    sources:
      - citation: "Maxwell, J. C. (1860). Illustrations of the dynamical theory of gases. Philosophical Magazine 19: 19–32; 20: 21–37."
        url: null

  - id: maxwell-viscosity
    date: "1866"
    type: EXPERIMENT
    title: Viscosity independent of pressure
    description: >-
      In their London house, James and Katherine Maxwell measure the viscosity of air
      with swinging discs, across a wide range of pressures. It is indeed independent of
      pressure, as kinetic theory predicted against intuition. It was the first strong
      experimental support for the theory.
    contested: false
    sources:
      - citation: "Maxwell, J. C. (1866). On the viscosity or internal friction of air and other gases. Philosophical Transactions of the Royal Society of London 156: 249–268."
        url: null

  - id: boltzmann-h-theorem
    date: "1872"
    type: DISCOVERY
    title: Boltzmann's equation and H-theorem
    description: >-
      Ludwig Boltzmann writes an equation for how the distribution of molecular speeds
      changes through collisions, and proves that a quantity he calls H always decreases
      until Maxwell's distribution is reached. It seemed to derive the second law of
      thermodynamics from mechanics.
    contested: true
    contested_note: >-
      Josef Loschmidt objected in 1876 that Newton's laws are reversible, so reversing
      every velocity would make H increase, and no purely mechanical proof could give a
      one-way law. Boltzmann conceded that the theorem holds only with overwhelming
      probability, not with certainty. How to state the assumption hidden in his proof,
      and why it holds, is still discussed.
    sources:
      - citation: "Boltzmann, L. (1872). Weitere Studien über das Wärmegleichgewicht unter Gasmolekülen. Sitzungsberichte der Kaiserlichen Akademie der Wissenschaften Wien 66: 275–370."
        url: null
      - citation: "Brush, S. G. (1976). The Kind of Motion We Call Heat (2 vols.). North-Holland."
        url: null

  - id: perrin-atoms
    date: 1905 – 1909
    type: EXPERIMENT
    title: Atoms are real
    description: >-
      Einstein predicts in 1905 that the random jiggling of small particles in water,
      Brownian motion, is caused by molecular impacts, and says how far the particles
      should wander. Jean Perrin measures it in 1908 and gets consistent values for the
      number of molecules in a mole by several independent methods. Most of the remaining
      sceptics, including Wilhelm Ostwald, accepted that atoms exist.
    contested: false
    sources:
      - citation: "Perrin, J. (1909). Mouvement brownien et réalité moléculaire. Annales de Chimie et de Physique (8) 18: 5–114."
        url: null
      - citation: "Nye, M. J. (1972). Molecular Reality: A Perspective on the Scientific Work of Jean Perrin. Macdonald."
        url: null

open_problems:
  - id: hilbert-sixth-problem
    name: Deriving fluid equations from molecules (Hilbert's sixth problem)
    status: recently_resolved
    status_note: >-
      Resolved for an idealised dilute gas of hard spheres by Yu Deng, Zaher Hani and
      Xiao Ma (2024–25), work cited in Deng's 2026 Fields Medal. Some argue that dense
      gases and liquids, and realistic forces between molecules, still lie outside it.
    description: >-
      Hilbert asked in 1900 for a rigorous derivation of the equations of gases and
      fluids from the motion of individual molecules. The chain runs from Newton's laws
      for particles, to Boltzmann's equation, to the equations of fluid flow. Each step
      is believed, but proving it for realistic time spans has resisted mathematicians
      for a century.
    why_hard: >-
      Oscar Lanford proved in 1975 that Boltzmann's equation follows from Newton's laws,
      but only for a tiny fraction of the time between collisions. Extending that to long
      times means controlling how correlations between molecules build up through
      repeated collisions, which is exactly where irreversibility comes from. Deng, Hani
      and Ma did this for hard spheres in 2024 by tracking whole collision histories, and
      in 2025 carried the chain on to the fluid equations.
    unlocks: >-
      A mathematical account of how reversible molecular motion produces the
      irreversible behaviour of fluids, answering Loschmidt's objection with a theorem.
    sources:
      - citation: "Lanford, O. E. (1975). Time evolution of large classical systems. Lecture Notes in Physics 38: 1–111."
        url: null
      - citation: "Deng, Y., Hani, Z. & Ma, X. (2024). Long time derivation of the Boltzmann equation from hard sphere dynamics. arXiv:2408.07818."
        url: https://arxiv.org/abs/2408.07818
      - citation: "Deng, Y., Hani, Z. & Ma, X. (2025). Hilbert's sixth problem: derivation of fluid equations via Boltzmann's kinetic theory. arXiv:2503.01800."
        url: https://arxiv.org/abs/2503.01800

applications:
  - area: Nuclear engineering
    title: Separating uranium isotopes
    description: >-
      Lighter molecules move faster at the same temperature. The Manhattan Project's K-25
      plant used this to enrich uranium, forcing uranium hexafluoride gas through
      thousands of porous barriers, each of which slightly favoured the lighter isotope.
    sources:
      - citation: "Rhodes, R. (1986). The Making of the Atomic Bomb. Simon & Schuster."
        url: null
  - area: Planetary science
    title: Why Earth has no hydrogen atmosphere
    description: >-
      In the upper atmosphere, a fraction of molecules in the fast tail of Maxwell's
      distribution exceed escape velocity. Light hydrogen and helium leak away over
      geological time, while heavier nitrogen and oxygen stay. The same calculation
      explains why the Moon has almost no atmosphere.
    sources:
      - citation: "Jeans, J. H. (1916). The Dynamical Theory of Gases. Cambridge University Press."
        url: null

further_reading:
  - citation: "Lindley, D. (2001). Boltzmann's Atom: The Great Debate That Launched a Revolution in Physics. Free Press."
    url: null
    note: A popular account of Boltzmann and the fight over atoms.
  - citation: "Brush, S. G. (1976). The Kind of Motion We Call Heat (2 vols.). North-Holland."
    url: null
    note: The standard scholarly history of kinetic theory.
  - citation: "Feynman, R. P., Leighton, R. B. & Sands, M. (1963). The Feynman Lectures on Physics, Vol. I, ch. 39–43. Addison-Wesley."
    url: https://www.feynmanlectures.caltech.edu/I_39.html
    note: Kinetic theory explained with Feynman's usual clarity. Free online.
---

## Particles in Motion

In 1738 {{fig:daniel-bernoulli|Daniel Bernoulli}} proposed that air is made of tiny particles flying in all directions, and that its pressure is their impacts on the walls of the container. From this he derived Boyle's law: squeeze a gas into half the volume and the particles hit the walls twice as often. The idea fitted nothing else known at the time. Heat was thought to be a fluid, and atoms were speculation. It was forgotten for over a hundred years.

## Speeds and Collisions

After [thermodynamics](/physics/thermodynamics/) established that heat is energy, the idea returned. In 1857 {{fig:rudolf-clausius|Rudolf Clausius}} calculated from measured pressures that air molecules must travel at hundreds of metres per second. The Dutch meteorologist Buys Ballot raised an obvious objection: then a smell released across a room should arrive instantly, yet it takes minutes. Clausius answered with the mean free path. Molecules are so crowded that each collides billions of times a second, and its path is a random zigzag that makes little progress.

In 1860 {{fig:maxwell|James Clerk Maxwell}} took a decisive step. The molecules do not all move at the same speed. Their speeds are spread out in a pattern fixed by the temperature, the first law of physics expressed as a probability distribution. From it he predicted that a gas's viscosity should be the same at any pressure, which seemed absurd. In 1866 he and {{fig:katherine-maxwell|Katherine Maxwell}}, whose role in the experiments he acknowledged, measured it in their attic. The prediction held.

## Boltzmann and the Second Law

{{fig:boltzmann|Ludwig Boltzmann}} wanted more: to derive the second law of thermodynamics from mechanics. In 1872 he wrote an equation for how collisions change the distribution of speeds and proved that a quantity, $H$, always decreases until Maxwell's distribution is reached. {{fig:josef-loschmidt|Josef Loschmidt}} objected. Newton's laws run equally well backwards, so reversing every molecule's velocity would make $H$ increase. Boltzmann's answer changed physics. The second law is not absolutely certain but overwhelmingly probable. Entropy-decreasing states are possible, just unimaginably rare. That idea became [statistical mechanics](/physics/statistical-mechanics/).

## A Closer Look: How Fast Is Air?

Kinetic theory gives the typical speed of a molecule from its mass $m$ and the temperature $T$:

$$
v_{\text{rms}} = \sqrt{\frac{3 k_B T}{m}} ,
$$

where $k_B = 1.38 \times 10^{-23}$ J/K is Boltzmann's constant. A nitrogen molecule, the main component of air, has mass $28 \times 1.66 \times 10^{-27} \approx 4.65 \times 10^{-26}$ kg. At room temperature, 300 K:

$$
v_{\text{rms}} = \sqrt{\frac{3 \times 1.38 \times 10^{-23} \times 300}{4.65 \times 10^{-26}}} \approx 517 \text{ m/s} .
$$

That is about twice the cruising speed of an airliner, and faster than the speed of sound, about 350 m/s in air. The two are related: sound is a disturbance passed from molecule to molecule, so it cannot outrun the molecules carrying it.

So why does a smell take minutes to cross a room? Each cubic metre of air holds about $2.4 \times 10^{25}$ molecules. With so many, a nitrogen molecule travels only about 70 nanometres, around a thousandth of the width of a human hair, before hitting another. At 500 m/s that means about 7 billion collisions every second, each sending it off in a new random direction. A random walk of $N$ steps gets only about $\sqrt N$ steps from its start. So diffusion alone moves a scent molecule only a few millimetres in a second, and in a real room it is mostly carried by air currents.

The same calculation, run backwards, measured the size of molecules. In 1865 Loschmidt combined the mean free path, inferred from viscosity, with the density of liquids to estimate how many molecules a gas contains: the first estimate of what is now Avogadro's number.

## Atoms Made Real

Even so, many physicists and chemists around 1900, led by Ernst Mach and Wilhelm Ostwald, regarded atoms as a convenient fiction. Boltzmann, who felt he was fighting alone, took his own life in 1906. Proof came within two years. {{fig:einstein|Albert Einstein}} had predicted in 1905 how far a pollen-sized particle in water should wander under random molecular impacts. In 1908 {{fig:jean-perrin|Jean Perrin}} measured it and obtained the number of molecules in a mole. Several other independent methods gave the same value. Ostwald conceded, and atoms became as real as anything in physics. Deriving fluid equations rigorously from the motion of molecules, Hilbert's sixth problem, took much longer. A proof for an idealised gas of hard spheres came only in 2025.
