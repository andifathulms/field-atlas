---
id: non-equilibrium-physics
domain: physics
thread: entropy
name: Non-Equilibrium Physics
parent_ids:
  - statistical-mechanics
era_emerged: 1867 – 1999
core_question: What laws govern systems that are driven, flowing and never at rest, and what does information cost?

summary: |-
  Thermodynamics and statistical mechanics describe matter in equilibrium, settled and unchanging. Most of the world is not like that. Rivers flow, weather churns, computers switch, and every living cell is driven by a constant flow of energy. Non-equilibrium physics studies such systems, where heat and matter are always moving through.

  It has no general theory comparable to Gibbs's for equilibrium, but it has found some exact laws. Onsager's reciprocal relations connect different flows near equilibrium. The fluctuation theorems of the 1990s hold arbitrarily far from equilibrium. Along the way, a puzzle Maxwell posed in 1867, a demon that seems to break the second law, was resolved by showing that information is physical: erasing one bit has a minimum cost in energy.

key_ideas:
  - term: Maxwell's demon
    definition: >-
      A thought experiment: a being that sorts fast and slow molecules could make one side
      of a box hot and the other cold without doing work, apparently violating the second
      law.
    turning_point_id: maxwell-demon
  - term: Landauer's principle
    definition: >-
      Erasing one bit of information releases at least $k_B T \ln 2$ of heat. The demon
      is defeated because it must eventually erase its memory.
    turning_point_id: landauer-principle
  - term: Onsager reciprocity
    definition: >-
      Near equilibrium, the effect of one kind of push on another kind of flow equals the
      reverse effect. A temperature difference driving an electric current is matched by a
      voltage driving heat.
    turning_point_id: onsager-reciprocal
  - term: Fluctuation theorem
    definition: >-
      In small systems, entropy can briefly decrease. Fluctuation theorems give the exact
      odds, and show that decreases become exponentially rarer as they get larger.
    turning_point_id: fluctuation-theorems
  - term: Dissipative structure
    definition: >-
      An ordered pattern maintained by a constant flow of energy, such as convection
      cells, chemical waves or a living organism.
    turning_point_id: dissipative-structures

turning_points:
  - id: maxwell-demon
    date: "1867"
    type: DISCOVERY
    title: Maxwell's demon
    description: >-
      In a letter to Peter Guthrie Tait, James Clerk Maxwell imagines a being that opens
      and closes a trapdoor between two chambers, letting only fast molecules through one
      way and slow ones the other. Without doing work, it would make one side hot and the
      other cold. The second law, he concluded, is statistical, not absolute. Kelvin named
      the being a "demon" in 1874.
    contested: false
    sources:
      - citation: "Maxwell, J. C. (1871). Theory of Heat, ch. 22. Longmans, Green."
        url: null
      - citation: "Leff, H. S. & Rex, A. F. (eds.) (2003). Maxwell's Demon 2: Entropy, Classical and Quantum Information, Computing. Institute of Physics Publishing."
        url: null

  - id: landauer-principle
    date: 1929 – 1982
    type: DISCOVERY
    title: Information is physical
    description: >-
      Leo Szilard reduces the demon to a single molecule in 1929 and argues that acquiring
      information must cost entropy. Rolf Landauer at IBM argues in 1961 that the
      unavoidable cost lies in erasing information: at least $k_B T \ln 2$ per bit.
      Charles Bennett shows in 1982 that measurement can in principle be free, so erasure
      is what saves the second law.
    contested: true
    contested_note: >-
      Philosophers of physics, notably John Earman and John Norton, have argued that the
      standard exorcism of the demon is circular, assuming the second law in order to
      save it, and that Landauer's principle has not been derived from more basic
      physics. Most physicists accept the principle, which has since been confirmed in
      experiments, but its foundations are still debated.
    sources:
      - citation: "Landauer, R. (1961). Irreversibility and heat generation in the computing process. IBM Journal of Research and Development 5(3): 183–191."
        url: null
      - citation: "Bennett, C. H. (1982). The thermodynamics of computation — a review. International Journal of Theoretical Physics 21(12): 905–940."
        url: null
      - citation: "Earman, J. & Norton, J. D. (1999). Exorcist XIV: The wrath of Maxwell's demon. Part II. Studies in History and Philosophy of Modern Physics 30(1): 1–40."
        url: null

  - id: onsager-reciprocal
    date: "1931"
    type: DISCOVERY
    title: Onsager's reciprocal relations
    description: >-
      Lars Onsager shows that near equilibrium, the coefficients linking different flows
      and forces are symmetric, a consequence of the reversibility of molecular motion. It
      was one of the first general laws of non-equilibrium thermodynamics, and it earned him the
      1968 Nobel prize in chemistry.
    contested: false
    sources:
      - citation: "Onsager, L. (1931). Reciprocal relations in irreversible processes. I. Physical Review 37(4): 405–426."
        url: null

  - id: dissipative-structures
    date: 1951 – 1977
    type: DISCOVERY
    title: Order far from equilibrium
    description: >-
      Boris Belousov finds a chemical reaction that oscillates between colours, and journals
      reject it as impossible. Anatol Zhabotinsky develops it in the 1960s. Ilya Prigogine
      argues that systems driven far from equilibrium can spontaneously form ordered
      "dissipative structures", sustained by the energy flowing through them, and receives
      the 1977 Nobel prize in chemistry.
    contested: false
    sources:
      - citation: "Nicolis, G. & Prigogine, I. (1977). Self-Organization in Nonequilibrium Systems. Wiley."
        url: null
      - citation: "Winfree, A. T. (1984). The prehistory of the Belousov–Zhabotinsky oscillator. Journal of Chemical Education 61(8): 661–663."
        url: null

  - id: fluctuation-theorems
    date: 1993 – 1999
    type: DISCOVERY
    title: The fluctuation theorems
    description: >-
      Denis Evans, Ezechiel Cohen and Gary Morriss find in computer simulations an exact
      law for how often entropy decreases in small systems driven far from equilibrium.
      Christopher Jarzynski (1997) and Gavin Crooks (1999) find related equalities that
      extract equilibrium free energies from irreversible experiments. They are among
      the few exact results valid arbitrarily far from equilibrium.
    contested: false
    sources:
      - citation: "Evans, D. J., Cohen, E. G. D. & Morriss, G. P. (1993). Probability of second law violations in shearing steady states. Physical Review Letters 71(15): 2401–2404."
        url: null
      - citation: "Jarzynski, C. (1997). Nonequilibrium equality for free energy differences. Physical Review Letters 78(14): 2690–2693."
        url: null

  - id: landauer-experiment
    date: "2012"
    type: EXPERIMENT
    title: Landauer's limit measured
    description: >-
      Antoine Bérut and colleagues in Lyon, with the theorist Eric Lutz, trap a single
      glass bead in a double-well laser trap to store one bit, and erase it slowly. The
      average heat released approaches Landauer's limit of $k_B T \ln 2$ from above, as
      predicted half a century earlier.
    contested: false
    sources:
      - citation: "Bérut, A., Arakelyan, A., Petrosyan, A., Ciliberto, S., Dillenschneider, R. & Lutz, E. (2012). Experimental verification of Landauer's principle linking information and thermodynamics. Nature 483: 187–189."
        url: null

open_problems:
  - id: far-from-equilibrium-theory
    name: A general theory far from equilibrium
    status: open
    status_note: Open as of 2026; exact results exist only in special cases.
    description: >-
      Equilibrium has one universal recipe: weight each state by $e^{-E/kT}$. Is there
      anything comparable for systems held far from equilibrium by a constant flow of
      energy, such as a heated fluid, a sheared material or a living cell? Which of their
      states are likely, and what principle selects them?
    why_hard: >-
      Far from equilibrium, the likelihood of a state depends on the whole history of
      flows through the system, not just its energy. Proposed general principles, such as
      maximum or minimum entropy production, hold only in special cases, and the
      fluctuation theorems constrain the statistics without determining them.
    unlocks: >-
      A physics of living matter, of climate and of active materials, and a principled
      account of how order arises in driven systems.
    sources:
      - citation: "Seifert, U. (2012). Stochastic thermodynamics, fluctuation theorems and molecular machines. Reports on Progress in Physics 75(12): 126001."
        url: null

applications:
  - area: Molecular biology
    title: Measuring energy by pulling on RNA
    description: >-
      Liphardt and colleagues unfolded single RNA molecules with optical tweezers, too
      fast for equilibrium, and used Jarzynski's equality to recover the equilibrium
      folding energy from the irreversible pulls. Such methods now measure the energetics
      of molecular motors and protein folding.
    domain: biology
    field_id: molecular-biology
    sources:
      - citation: "Liphardt, J., Dumont, S., Smith, S. B., Tinoco, I. & Bustamante, C. (2002). Equilibrium information from nonequilibrium measurements in an experimental test of Jarzynski's equality. Science 296(5574): 1832–1835."
        url: null
  - area: Computing
    title: The ultimate energy cost of computation
    description: >-
      Landauer's principle sets the minimum energy for irreversible computing. Today's
      chips dissipate thousands of times more per operation, so the limit is not yet
      binding, but it motivates reversible and adiabatic computing, which avoid erasing
      information.
    sources:
      - citation: "Bennett, C. H. (1982). The thermodynamics of computation — a review. International Journal of Theoretical Physics 21(12): 905–940."
        url: null
  - area: Transport
    title: Traffic jams from nowhere
    description: >-
      Traffic is a driven system of interacting particles. Simple models from
      non-equilibrium physics show jams forming spontaneously, with no accident or
      bottleneck, once density passes a threshold, as experiments on circular tracks have
      confirmed.
    sources:
      - citation: "Nagel, K. & Schreckenberg, M. (1992). A cellular automaton model for freeway traffic. Journal de Physique I 2(12): 2221–2229."
        url: null

further_reading:
  - citation: "von Baeyer, H. C. (1998). Maxwell's Demon: Why Warmth Disperses and Time Passes. Random House."
    url: null
    note: A popular history of the demon and the physics of information.
  - citation: "Leff, H. S. & Rex, A. F. (eds.) (2003). Maxwell's Demon 2: Entropy, Classical and Quantum Information, Computing. Institute of Physics Publishing."
    url: null
    note: The key papers on the demon, collected with commentary.
  - citation: "Seifert, U. (2012). Stochastic thermodynamics, fluctuation theorems and molecular machines. Reports on Progress in Physics 75(12): 126001."
    url: null
    note: A technical review of the modern theory of small driven systems.
---

## The Demon

In 1867, in a letter to his friend Tait, {{fig:maxwell|James Clerk Maxwell}} imagined a tiny being guarding a trapdoor between two chambers of gas. It lets fast molecules pass one way and slow ones the other. Without any work being done, one chamber heats up and the other cools, in apparent violation of the second law. Maxwell's point was that the second law is statistical: it holds because we cannot handle molecules one by one. {{fig:william-thomson|William Thomson}} called the being a demon, and for a century physicists argued about what stops it.

In 1929 {{fig:leo-szilard|Leo Szilard}} reduced the problem to a box containing a single molecule and argued that the demon's knowledge must carry a cost in entropy. The full answer came from computing. {{fig:rolf-landauer|Rolf Landauer}} at IBM argued in 1961 that the unavoidable cost lies in *erasing* information, and {{fig:charles-bennett|Charles Bennett}} showed in 1982 that the demon can measure for free but must eventually clear its memory, and that erasure pays back the entropy it saved. Information is physical.

## Flows Near Equilibrium

Most real processes involve flows: heat through a wall, current through a wire, salt through a membrane. In 1931 {{fig:lars-onsager|Lars Onsager}} found a general law for such flows near equilibrium. When a temperature difference drives an electric current, as in a thermocouple, the reverse effect, a voltage driving heat, is governed by the same coefficient. His reciprocal relations follow from the reversibility of molecular motion, and they are the foundation of non-equilibrium thermodynamics.

## Order From Flow

Far from equilibrium, systems can organise themselves. In 1951 {{fig:boris-belousov|Boris Belousov}} found a chemical mixture that oscillated between colours for hours. Journals rejected his paper because chemical reactions were supposed to run steadily towards equilibrium. Anatol Zhabotinsky developed it in the 1960s, and it produces spirals and travelling waves. {{fig:ilya-prigogine|Ilya Prigogine}} argued that such "dissipative structures", ordered patterns sustained by a flow of energy, are common. Convection cells, chemical waves and living organisms all maintain their order by exporting entropy.

In the 1990s exact laws were found that hold arbitrarily far from equilibrium. {{fig:denis-evans|Denis Evans}} and colleagues found how often small systems briefly run "backwards", with entropy decreasing. {{fig:christopher-jarzynski|Christopher Jarzynski}} and {{fig:gavin-crooks|Gavin Crooks}} found equalities that extract equilibrium quantities from violently irreversible processes. Biophysicists now use them on single molecules.

## A Closer Look: The Price of Forgetting One Bit

Landauer's limit for erasing one bit at temperature $T$ is $k_B T \ln 2$. At room temperature, 300 K:

$$
k_B T \ln 2 = 1.38 \times 10^{-23} \times 300 \times 0.693 \approx 2.9 \times 10^{-21} \text{ J},
$$

or about 0.018 electronvolts. To see where it comes from, picture Szilard's engine: one molecule in a box, with a partition in the middle. A bit of memory records which half the molecule is in. Erasing the bit means resetting it to a standard value, say "left", whatever it was. The only way to do that without looking is to push the molecule into the left half, compressing its one-molecule gas to half its volume. The work needed is the heat released, $k_B T \ln 2$, exactly the entropy change $k_B \ln 2$ times the temperature, the same factor of $\ln 2$ that appears when a gas doubles its volume.

Erasing a gigabyte, $8 \times 10^9$ bits, therefore costs at least

$$
8 \times 10^9 \times 2.9 \times 10^{-21} \approx 2.3 \times 10^{-11} \text{ J} ,
$$

a trivially small amount. Real chips dissipate thousands of times more per operation, because their switches are far from ideal. Landauer's limit is not what makes phones warm today. But it is a floor that no technology can go below, unless computation is made reversible, never erasing anything.

In 2012 {{fig:antoine-berut|Antoine Bérut}}, {{fig:eric-lutz|Eric Lutz}} and colleagues stored a bit as the position of a glass bead in a laser trap with two wells, then erased it, slowly. The average heat released approached $k_B T \ln 2$ from above, as the erasure was made slower. The demon's century-old puzzle had become a bench-top measurement.

## Life and Other Driven Systems

The central challenge is still open: no general principle is known that says which states a system far from equilibrium prefers, as the Boltzmann factor does in [statistical mechanics](/physics/statistical-mechanics/). The need for one is most pressing for living matter. Cells are driven chemical machines, running molecular motors, copying DNA with error correction and sensing their environment, all at energetic costs that non-equilibrium physics can now begin to measure. The arrow of time that [thermodynamics](/physics/thermodynamics/) left unexplained is, in the end, what powers them all.
