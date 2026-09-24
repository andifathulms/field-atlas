---
id: phase-transitions
domain: physics
thread: entropy
name: Phase Transitions
parent_ids:
  - statistical-mechanics
era_emerged: 1869 – 1973
core_question: Why does matter change its form abruptly, and why do utterly different substances behave identically at the brink of change?

summary: |-
  A phase transition is a sudden change in the organisation of matter as temperature or pressure passes a threshold: water freezing or boiling, iron becoming magnetic, a metal becoming superconducting. The particles and forces do not change at all. What changes is how the particles act collectively.

  Explaining a sharp transition from smooth underlying laws was one of the great challenges of statistical mechanics. The critical point, where the distinction between two phases disappears, turned out to be especially strange, with fluctuations at every scale and behaviour that is identical across completely different materials. Kenneth Wilson's renormalisation group explained this universality in 1971, and the explanation reshaped quantum field theory as well.

key_ideas:
  - term: Order parameter
    definition: >-
      A quantity that is zero in one phase and non-zero in the other, such as the
      magnetisation of iron or the density difference between liquid and gas. Landau
      built the theory of transitions around it.
    turning_point_id: landau-theory
  - term: Critical point
    definition: >-
      The temperature and pressure at which two phases become indistinguishable. For
      water it is 374 °C and 218 atmospheres. Above it, liquid and gas merge into one
      fluid.
    turning_point_id: andrews-critical-point
  - term: Spontaneous symmetry breaking
    definition: >-
      Below the transition, the system picks one of several equivalent states, such as a
      direction of magnetisation, although the laws have no preference.
    turning_point_id: landau-theory
  - term: Critical exponents and universality
    definition: >-
      Near a critical point, quantities vary as powers of the distance from it. The
      powers are the same for whole classes of different systems, fluids and magnets
      alike.
    turning_point_id: wilson-renormalization
  - term: Renormalisation group
    definition: >-
      A method of zooming out step by step, averaging over small-scale details. At a
      critical point, the system looks the same at every scale, and only a few features
      survive the zooming.
    turning_point_id: wilson-renormalization

turning_points:
  - id: andrews-critical-point
    date: "1869"
    type: EXPERIMENT
    title: The critical point of carbon dioxide
    description: >-
      Thomas Andrews in Belfast compresses carbon dioxide at different temperatures.
      Below about 31 °C it condenses abruptly into liquid. Above it, no amount of pressure
      produces a separate liquid, and the gas becomes steadily denser. Liquid and gas are
      two forms of one continuous state of matter, separated only below a critical point.
    contested: false
    sources:
      - citation: "Andrews, T. (1869). On the continuity of the gaseous and liquid states of matter. Philosophical Transactions of the Royal Society of London 159: 575–590."
        url: null

  - id: van-der-waals-equation
    date: "1873"
    type: DISCOVERY
    title: Van der Waals's equation of state
    description: >-
      In his doctoral thesis, Johannes Diderik van der Waals modifies the ideal gas law to
      allow for the size of molecules and the attraction between them. The single
      equation describes both gas and liquid, and predicts a critical point. It was one
      of the first theories of a phase transition, and strong support for the reality of
      molecules.
    contested: false
    sources:
      - citation: "van der Waals, J. D. (1873). Over de continuïteit van den gas- en vloeistoftoestand. Doctoral thesis, Leiden."
        url: null

  - id: landau-theory
    date: "1937"
    type: DISCOVERY
    title: Landau's theory of phase transitions
    description: >-
      Lev Landau describes continuous phase transitions in terms of symmetry: one phase is
      more symmetric than the other, and an order parameter measures how the symmetry is
      broken. The theory unifies magnets, alloys and liquid crystals in one framework.
      Its predictions near the critical point were later found to be quantitatively
      wrong, which pointed to the need for something deeper.
    contested: false
    sources:
      - citation: "Landau, L. D. (1937). On the theory of phase transitions. Zhurnal Eksperimental'noi i Teoreticheskoi Fiziki 7: 19–32."
        url: null

  - id: onsager-ising
    date: "1944"
    type: DISCOVERY
    title: Onsager solves the two-dimensional Ising model
    description: >-
      The Ising model is a grid of tiny magnets that prefer to align with their
      neighbours. Ernst Ising had shown in 1925 that a one-dimensional chain has no phase
      transition. Lars Onsager solves the two-dimensional version exactly, in a
      mathematical tour de force. It showed in exact detail that statistical mechanics
      alone can produce a sharp transition, and its exact critical behaviour contradicted Landau's theory.
    contested: false
    sources:
      - citation: "Onsager, L. (1944). Crystal statistics. I. A two-dimensional model with an order-disorder transition. Physical Review 65(3–4): 117–149."
        url: null
      - citation: "Ising, E. (1925). Beitrag zur Theorie des Ferromagnetismus. Zeitschrift für Physik 31: 253–258."
        url: null

  - id: wilson-renormalization
    date: 1966 – 1972
    type: PARADIGM-SHIFT
    title: The renormalisation group
    description: >-
      Leo Kadanoff suggests in 1966 that near a critical point, blocks of magnets behave
      like single magnets at a larger scale. Kenneth Wilson turns the idea into a
      calculational method in 1971, and with Michael Fisher computes critical exponents
      that match experiment. It explained why fluids and magnets share the same exponents,
      and it changed how physicists understand quantum field theory. Wilson received the
      1982 Nobel prize.
    contested: false
    sources:
      - citation: "Wilson, K. G. (1971). Renormalization group and critical phenomena. Physical Review B 4(9): 3174–3183; 3184–3205."
        url: null
      - citation: "Kadanoff, L. P. (1966). Scaling laws for Ising models near Tc. Physics 2(6): 263–272."
        url: null

  - id: kosterlitz-thouless
    date: 1971 – 1973
    type: DISCOVERY
    title: Topological phase transitions
    description: >-
      Thin films were thought unable to order at all. Michael Kosterlitz and David
      Thouless show that they can undergo a new kind of transition, in which pairs of
      swirling vortices unbind. It was the first transition driven by topology, and it
      opened the study of topological phases of matter.
    contested: true
    contested_note: >-
      Vadim Berezinskii in Moscow reached the key ideas independently in 1971, and the
      transition is often called the BKT transition. Berezinskii died in 1980, and the
      2016 Nobel prize went to Kosterlitz and Thouless, with Duncan Haldane. Some
      physicists regret that his contribution is less widely recognised.
    sources:
      - citation: "Kosterlitz, J. M. & Thouless, D. J. (1973). Ordering, metastability and phase transitions in two-dimensional systems. Journal of Physics C 6(7): 1181–1203."
        url: null
      - citation: "Berezinskii, V. L. (1971). Destruction of long-range order in one-dimensional and two-dimensional systems having a continuous symmetry group I. Soviet Physics JETP 32: 493–500."
        url: null

open_problems:
  - id: ising-3d
    name: The three-dimensional Ising model
    status: open
    status_note: Open as of 2026; the critical exponents are known numerically to many digits, but there is no exact solution.
    description: >-
      Onsager solved the Ising model on a flat grid. The same model in three dimensions,
      the dimension of real magnets and fluids, has resisted every attempt at an exact
      solution for eighty years.
    why_hard: >-
      Onsager's method relies on special structure available only in two dimensions.
      Sorin Istrail showed in 2000 that on three-dimensional lattices with arbitrary
      couplings, computing the partition function is NP-complete, so no general method
      like Onsager's is likely to work. The
      conformal bootstrap now computes its critical exponents to extraordinary precision,
      but that is not a solution.
    unlocks: >-
      An exact description of the critical point shared by every uniaxial magnet and every
      liquid–gas transition in the world, and a solved example of a strongly interacting
      three-dimensional field theory.
    sources:
      - citation: "Kos, F., Poland, D., Simmons-Duffin, D. & Vichi, A. (2016). Precision islands in the Ising and O(N) models. Journal of High Energy Physics 2016(8): 36."
        url: null

applications:
  - area: Cell biology
    title: Cells organise themselves by phase separation
    description: >-
      Many compartments inside cells have no membrane. They are droplets that condense out
      of the cytoplasm like oil from water. The discovery that cells use liquid–liquid
      phase separation to organise their chemistry has changed cell biology since 2009.
    domain: biology
    field_id: molecular-biology
    sources:
      - citation: "Brangwynne, C. P. et al. (2009). Germline P granules are liquid droplets that localize by controlled dissolution/condensation. Science 324(5935): 1729–1732."
        url: null
  - area: Industry
    title: Supercritical fluids
    description: >-
      Above its critical point, carbon dioxide dissolves substances like a liquid but
      flows like a gas. It is used to decaffeinate coffee and extract flavours without
      toxic solvents.
    sources:
      - citation: "McHugh, M. A. & Krukonis, V. J. (1994). Supercritical Fluid Extraction (2nd ed.). Butterworth-Heinemann."
        url: null
  - area: Cosmology
    title: The universe cooled through phase transitions
    description: >-
      As the early universe cooled, the forces of nature are thought to have separated in
      phase transitions, the electroweak transition among them. Tom Kibble showed that such
      transitions could leave defects, like cracks in ice, which astronomers still search
      for.
    sources:
      - citation: "Kibble, T. W. B. (1976). Topology of cosmic domains and strings. Journal of Physics A 9(8): 1387–1398."
        url: null

further_reading:
  - citation: "Yeomans, J. M. (1992). Statistical Mechanics of Phase Transitions. Oxford University Press."
    url: null
    note: A short, clear introduction to critical phenomena and the renormalisation group.
  - citation: "Domb, C. (1996). The Critical Point: A Historical Introduction to the Modern Theory of Critical Phenomena. Taylor & Francis."
    url: null
    note: A history of the subject by one of its participants.
  - citation: "Wilson, K. G. (1979). Problems in physics with many scales of length. Scientific American 241(2): 158–179."
    url: null
    note: Wilson's own non-technical account of the renormalisation group.
---

## Continuity of Liquid and Gas

Water boils at 100 °C, abruptly, not gradually. In 1869 {{fig:thomas-andrews|Thomas Andrews}}, in Belfast, found that this sharp boundary can disappear. Compressing carbon dioxide below 31 °C, he saw it condense suddenly into liquid. Above 31 °C, no pressure produced a separate liquid. The gas simply grew denser, smoothly, until it was as dense as a liquid. Liquid and gas were two faces of one state, separated only below a *critical point*.

Four years later {{fig:johannes-van-der-waals|Johannes Diderik van der Waals}}, a Dutch schoolteacher writing his doctoral thesis, explained it with a simple equation. Molecules take up space and attract each other weakly, and those two corrections to the ideal gas law produce both condensation and a critical point. Maxwell reviewed the thesis and admired it.

## Order and Symmetry

Other transitions followed the same pattern. Iron is magnetic below 770 °C, its Curie point, and not above it. In 1937 {{fig:lev-landau|Lev Landau}} found what they share. The low-temperature phase is less symmetric. A magnet picks a direction, although the laws of physics favour none. An order parameter, such as the magnetisation, measures how much symmetry is broken, and near the transition it grows from zero.

Could statistical mechanics produce such sharpness at all? Every sum over states is a smooth function of temperature. {{fig:ernst-ising|Ernst Ising}} had found in 1925 that a chain of tiny magnets has no transition. In 1944 {{fig:lars-onsager|Lars Onsager}} solved the two-dimensional version exactly and showed a sharp transition emerging when the number of magnets becomes infinite. His exact answers also disagreed with Landau's theory near the critical point.

## Universality

Experiments showed that near critical points, quantities such as the magnetisation or the density difference change as powers of the distance from the transition, and that the powers are *the same* for carbon dioxide, xenon and certain magnets. Why should a fluid and a magnet agree? {{fig:leo-kadanoff|Leo Kadanoff}} suggested in 1966 that at a critical point, fluctuations exist at every scale, so the system looks the same when viewed from further away. {{fig:kenneth-wilson|Kenneth Wilson}} turned this into the renormalisation group in 1971: zoom out step by step, averaging over small details, and follow what survives. Only a few features do, such as the dimension of space and the symmetry of the order parameter. Everything else is washed out, which is why different materials share their critical behaviour. With {{fig:michael-fisher|Michael Fisher}} he computed the exponents, and they matched experiment.

The same ideas transformed [quantum field theory](/physics/quantum-field-theory/), where renormalisation had been a mathematical trick. In the 1970s {{fig:michael-kosterlitz|Michael Kosterlitz}} and {{fig:david-thouless|David Thouless}}, and independently {{fig:vadim-berezinskii|Vadim Berezinskii}}, found a new kind of transition driven by topology, the start of the study of topological matter.

## A Closer Look: Onsager's Numbers

Take a square grid of tiny magnets, each pointing up or down, with energy lowered by an amount $J$ for each pair of aligned neighbours. The simplest approximation, mean-field theory, replaces each magnet's four neighbours by their average. It predicts a transition at

$$
k_B T_c = 4J ,
$$

and near it, the magnetisation should grow as $(T_c - T)^{\beta}$ with $\beta = \tfrac12$. Onsager's exact solution, completed for the magnetisation by C. N. Yang in 1952, gives

$$
k_B T_c = \frac{2J}{\ln(1 + \sqrt2)} \approx 2.269\,J, \qquad \beta = \tfrac18 .
$$

Mean-field theory overestimates the critical temperature by more than 75%, and gets the exponent badly wrong. The reason is fluctuations. Averaging ignores the large, correlated patches of up and down magnets that form near the transition, and those patches are what destroy order at a lower temperature than the average predicts.

In three dimensions, fluctuations matter less but still matter. The exponent is $\beta \approx 0.326$, known from the renormalisation group and computer calculations. It is the same number measured at the liquid–gas critical point of carbon dioxide, xenon and water, and in uniaxial magnets. None of those materials resemble a grid of magnets in detail. At the critical point, the details stop mattering. Above four dimensions, fluctuations become unimportant and mean-field theory's $\beta = \tfrac12$ becomes exact. The dimension of space is one of the few features that survives the zooming out.

## Everywhere

Phase transitions now appear throughout physics and beyond: superconductors, liquid crystals, the early universe, and the droplets that organise the inside of living cells. The three-dimensional Ising model, the simplest description of the critical point of every fluid on Earth, has still not been solved exactly. And many systems never settle into any phase at all. They are driven, flowing and alive, and belong to [non-equilibrium physics](/physics/non-equilibrium-physics/).
