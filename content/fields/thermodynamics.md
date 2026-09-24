---
id: thermodynamics
domain: physics
thread: entropy
name: Thermodynamics
parent_ids: []
era_emerged: 1824 – 1906
core_question: How much work can be got out of heat, and why does heat only ever flow from hot to cold?

summary: |-
  Thermodynamics is the science of heat, work and energy. Its first law says energy is never created or destroyed, only converted from one form to another. Its second law says that in any real process a quantity called entropy increases, which is why heat flows from hot to cold by itself and never the reverse, and why no engine can turn heat entirely into work.

  It began as the engineering of steam engines and became one of the most general theories in physics. Its laws hold for engines, refrigerators, stars, living cells and black holes, and they do not depend on what matter is made of, which is why they survived every later revolution in physics. Einstein called it the only physical theory of universal content that he was convinced would never be overthrown.

key_ideas:
  - term: Energy conservation (first law)
    definition: >-
      Heat is a form of energy, and the total energy of an isolated system is constant.
      Work can become heat and heat can become work, at a fixed exchange rate.
    turning_point_id: mechanical-equivalent-of-heat
  - term: Entropy (second law)
    definition: >-
      A quantity that measures how spread out energy is. In an isolated system it never
      decreases, which gives processes a direction in time.
    turning_point_id: clausius-entropy
  - term: Carnot efficiency
    definition: >-
      No engine working between a hot temperature $T_h$ and a cold one $T_c$ can convert
      more than a fraction $1 - T_c / T_h$ of its heat into work, whatever it is made of.
    turning_point_id: carnot-engine
  - term: Absolute temperature
    definition: >-
      A temperature scale defined by the efficiency of ideal engines, independent of any
      substance. Its zero, about $-273.15\,^\circ\text{C}$, is the lowest temperature
      possible.
    turning_point_id: kelvin-absolute-temperature
  - term: Third law
    definition: >-
      As temperature approaches absolute zero, entropy approaches a minimum. It follows
      that absolute zero can be approached but never reached in a finite number of steps.
    turning_point_id: nernst-third-law

turning_points:
  - id: carnot-engine
    date: "1824"
    type: DISCOVERY
    title: Carnot's limit on engines
    description: >-
      Sadi Carnot, a young French engineer, asks how much work a steam engine can
      possibly produce. He argues that work comes from heat falling from a hot body to a
      cold one, and that the maximum depends only on the two temperatures. He reasoned
      with the caloric theory, which treated heat as a fluid, and was largely ignored. He
      died of cholera in 1832, aged thirty-six.
    contested: false
    sources:
      - citation: "Carnot, S. (1824). Réflexions sur la puissance motrice du feu et sur les machines propres à développer cette puissance. Bachelier, Paris."
        url: null

  - id: mechanical-equivalent-of-heat
    date: 1842 – 1850
    type: THEORY-REPLACED
    title: Heat is a form of energy
    description: >-
      Julius Robert Mayer argues in 1842 that heat and work are interchangeable. James
      Joule measures the exchange rate in careful experiments, most famously by warming
      water with a paddle wheel turned by falling weights. Hermann von Helmholtz states
      the general conservation of energy in 1847. The caloric theory, in which heat was
      an indestructible fluid, was abandoned.
    contested: true
    contested_note: >-
      Priority was bitterly disputed. Mayer, a ship's doctor, stated the principle and
      computed the exchange rate first, but with little experimental support. Joule's
      measurements convinced the scientific community, and British physicists long
      credited him alone. Mayer suffered a breakdown partly over the dispute and was
      recognised only later. Colding in Denmark and others reached similar ideas at the
      same time.
    sources:
      - citation: "Joule, J. P. (1850). On the mechanical equivalent of heat. Philosophical Transactions of the Royal Society of London 140: 61–82."
        url: null
      - citation: "Kuhn, T. S. (1959). Energy conservation as an example of simultaneous discovery. In M. Clagett (ed.), Critical Problems in the History of Science, 321–356. University of Wisconsin Press."
        url: null

  - id: kelvin-absolute-temperature
    date: 1848 – 1854
    type: DISCOVERY
    title: An absolute scale of temperature
    description: >-
      William Thomson, later Lord Kelvin, uses Carnot's theory to define temperature in a
      way that depends on no particular substance, only on the efficiency of ideal
      engines. His first scale of 1848 put infinite cold at minus infinity. In 1854,
      working with Joule, he revised it into the modern form, whose zero is absolute
      zero. Temperature became a fundamental physical quantity.
    contested: false
    sources:
      - citation: "Thomson, W. (1848). On an absolute thermometric scale founded on Carnot's theory of the motive power of heat. Philosophical Magazine 33: 313–317."
        url: null
      - citation: "Joule, J. P. & Thomson, W. (1854). On the thermal effects of fluids in motion. Part II. Philosophical Transactions of the Royal Society of London 144: 321–364."
        url: https://www.jstor.org/stable/108506

  - id: clausius-entropy
    date: 1850 – 1865
    type: PARADIGM-SHIFT
    title: The second law and entropy
    description: >-
      Rudolf Clausius reconciles Carnot with energy conservation. Heat does not flow by
      itself from a colder body to a hotter one. In 1865 he names the quantity that
      measures this one-way tendency entropy, and summarises: the energy of the universe
      is constant, and its entropy tends to a maximum. Physics acquired a law that
      distinguishes past from future.
    contested: false
    sources:
      - citation: "Clausius, R. (1850). Über die bewegende Kraft der Wärme. Annalen der Physik 79: 368–397, 500–524."
        url: null
      - citation: "Clausius, R. (1865). Über verschiedene für die Anwendung bequeme Formen der Hauptgleichungen der mechanischen Wärmetheorie. Annalen der Physik 125: 353–400."
        url: null

  - id: nernst-third-law
    date: "1906"
    type: DISCOVERY
    title: The third law
    description: >-
      Walther Nernst, studying chemical reactions at low temperatures, proposes that
      entropy changes vanish as temperature approaches absolute zero. It lets chemists
      predict which reactions will occur from heat measurements alone, and implies that
      absolute zero can never be reached.
    contested: false
    sources:
      - citation: "Nernst, W. (1906). Über die Berechnung chemischer Gleichgewichte aus thermischen Messungen. Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen 1906: 1–40."
        url: null

open_problems:
  - id: arrow-of-time
    name: Why does time have a direction?
    status: open
    status_note: Open as of writing; there is no consensus explanation.
    description: >-
      The fundamental laws of motion work equally well forwards and backwards in time,
      yet entropy increases only towards the future. The standard answer is that the
      universe began in a state of extraordinarily low entropy. Why it did, and whether
      that fully explains the direction of time, is unresolved.
    why_hard: >-
      Statistical mechanics can explain why entropy increases *given* a low-entropy past,
      but not why the past was like that. The question reaches into cosmology, into the
      initial state of the universe and the entropy of gravity, where there is no agreed
      theory.
    unlocks: >-
      An explanation of why we remember the past and not the future, why causes precede
      effects, and why the universe is not in equilibrium.
    sources:
      - citation: "Albert, D. Z. (2000). Time and Chance. Harvard University Press."
        url: null
      - citation: "Carroll, S. (2010). From Eternity to Here: The Quest for the Ultimate Theory of Time. Dutton."
        url: null

applications:
  - area: Energy
    title: The limit on every power station
    description: >-
      Coal, gas and nuclear plants all turn heat into work, and Carnot's limit sets their
      ceiling. Raising the steam temperature, and combining gas and steam turbines to use
      a wider temperature range, are the main ways efficiency has been increased.
    sources:
      - citation: "Çengel, Y. A. & Boles, M. A. (2019). Thermodynamics: An Engineering Approach (9th ed.). McGraw-Hill."
        url: null
  - area: Life
    title: Living things feed on order
    description: >-
      In *What Is Life?* (1944), Schrödinger argued that organisms maintain their order by
      exporting entropy, and that heredity must be stored in an "aperiodic crystal". The
      book inspired Crick, Watson and others to turn from physics to the molecular basis of
      heredity.
    domain: biology
    field_id: molecular-biology
    sources:
      - citation: "Schrödinger, E. (1944). What Is Life? The Physical Aspect of the Living Cell. Cambridge University Press."
        url: null
  - area: Heating and cooling
    title: Heat pumps
    description: >-
      A heat pump runs a refrigerator in reverse to heat a building, moving several units
      of heat indoors for every unit of electricity. The second law sets how many, and
      explains why heat pumps work best when the temperature difference is small.
    sources:
      - citation: "Çengel, Y. A. & Boles, M. A. (2019). Thermodynamics: An Engineering Approach (9th ed.). McGraw-Hill."
        url: null

further_reading:
  - citation: "Atkins, P. (2010). The Laws of Thermodynamics: A Very Short Introduction. Oxford University Press."
    url: null
    note: A clear, brief introduction for general readers.
  - citation: "von Baeyer, H. C. (1998). Maxwell's Demon: Why Warmth Disperses and Time Passes. Random House."
    url: null
    note: A popular history of the second law, from steam engines to information.
  - citation: "Fermi, E. (1937). Thermodynamics. Prentice-Hall (Dover reprint 1956)."
    url: null
    note: A short, lucid classic textbook.
---

## The Motive Power of Fire

By 1820 steam engines were driving Britain's mines and mills, built by trial and error with no theory behind them. In 1824 {{fig:sadi-carnot|Sadi Carnot}}, a French engineer and son of a revolutionary general, asked the question no one had posed in general: how much work can an engine get from heat? He imagined an ideal engine, perfectly reversible, and showed that nothing could do better. Its output depends only on the temperatures of the hot source and the cold sink, not on steam, air or any other working substance. Carnot thought of heat as a fluid, caloric, falling from hot to cold like water turning a mill wheel. His short book sold few copies and was nearly forgotten.

## Heat Is Energy

In the 1840s the caloric theory broke down. {{fig:julius-robert-mayer|Julius Robert Mayer}}, a ship's doctor, argued in 1842 that heat and motion were two forms of the same thing. {{fig:james-joule|James Joule}}, a brewer's son from Salford, near Manchester, measured the exchange rate: the work of a falling weight, used to turn a paddle wheel in water, always produced the same amount of heat. {{fig:hermann-helmholtz|Hermann von Helmholtz}} generalised the result in 1847 into the conservation of energy. The priority dispute over who found it first was bitter, and Mayer was recognised only late in life.

But if heat was not conserved, Carnot's argument seemed to collapse. {{fig:william-thomson|William Thomson}}, who admired Carnot's work, used it in 1848 to define an absolute temperature scale that does not depend on any substance. In its revised form of 1854, the scale's zero sits at about $-273\,^\circ\text{C}$.

## Entropy

{{fig:rudolf-clausius|Rudolf Clausius}} saw in 1850 that both ideas could be kept. Energy is conserved, but it has a direction: heat does not flow by itself from cold to hot. In 1865 he defined the quantity that captures this, entropy, from the Greek for "transformation", and put the two laws in one sentence: the energy of the universe is constant, and its entropy tends to a maximum. For the first time, a law of physics distinguished past from future. Thomson, and then Helmholtz, had already drawn a bleak conclusion from the dissipation of energy, the "heat death" of the universe, in which everything eventually reaches one uniform temperature.

In 1906 {{fig:walther-nernst|Walther Nernst}} added a third law, about behaviour near absolute zero. The laws made no assumptions about what matter is made of. Explaining *why* they hold required the atoms of [kinetic theory](/physics/kinetic-theory/), and the explanation turned out to be statistical.

## A Closer Look: Carnot's Limit in a Power Station

A modern coal-fired steam plant heats steam to about 565 °C and condenses it at about 30 °C. Carnot's limit is written in absolute temperatures, so add 273: the hot side is 838 K and the cold side 303 K. The best possible efficiency is

$$
1 - \frac{T_c}{T_h} = 1 - \frac{303}{838} \approx 0.64 .
$$

No engine working between those temperatures can turn more than 64% of its heat into work, however well it is engineered. The best real coal plants reach around 40–45%, losing the rest to friction, imperfect heat transfer and other irreversible processes. The remaining heat must go into the cold side, which is why power stations have cooling towers.

The formula also shows how to do better: make $T_h$ higher. Combined-cycle gas plants burn fuel in a turbine at well over 1,000 °C, then use its hot exhaust to raise steam for a second turbine. That widens the temperature range, and the best such plants exceed 60% efficiency.

Run the argument backwards and you have a heat pump. Moving heat from outdoors at 0 °C (273 K) into a house at 20 °C (293 K), an ideal heat pump delivers

$$
\frac{T_h}{T_h - T_c} = \frac{293}{20} \approx 15
$$

units of heat for each unit of work. Real heat pumps manage about three or four, still far better than an electric heater's one. They struggle in severe cold, because as the outdoor temperature falls the difference $T_h - T_c$ grows and the ideal figure drops.

## Universal Laws

Thermodynamics now applies well beyond engines. Chemists use it to predict which reactions will go. Biologists use it to account for how cells power themselves, and astrophysicists to model stars. In the 1970s Bekenstein and Hawking found that black holes have an entropy and a temperature, which tied thermodynamics to [general relativity](/physics/general-relativity/). What the laws do not explain is their own starting point: why the universe began with low entropy, so that time has a direction at all.
