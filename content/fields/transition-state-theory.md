---
id: transition-state-theory
domain: chemistry
thread: reaction
name: Transition State Theory
parent_ids:
  - chemical-kinetics
  - quantum-chemistry
era_emerged: 1928 – 1965
core_question: If a reaction passes through a configuration that exists for a fraction of a vibration and cannot be isolated, how can its rate be calculated from the properties of that configuration?

summary: |-
  Arrhenius's activation energy was an empirical fitting parameter: the number in the exponent that made the temperature dependence come out right. Transition state theory turned it into a structure. Along the path from reactants to products the energy rises to a maximum and falls again, and the configuration at that maximum — the transition state — is a real arrangement of atoms with definite bond lengths, definite vibrations, and one direction in which it is unstable.

  The theory's claim is that the reaction rate is governed entirely by the population of that configuration, which thermodynamics can supply, multiplied by the frequency at which it falls apart, which turns out to be universal: $k_BT/h$, about $6 \times 10^{12}$ per second at room temperature, with no reference to the reaction at all. Henry Eyring, and Meredith Evans and Michael Polanyi independently, published it in 1935. It is an approximation, resting on an assumption — that anything reaching the top goes over and does not come back — which is not exactly true. It is also the framework in which essentially all of chemistry now discusses reactivity, because it converts a question about dynamics into a question about the structure and energy of one arrangement of atoms, which quantum chemistry can compute.

key_ideas:
  - term: Potential energy surface
    definition: >-
      The energy of a collection of atoms as a function of their positions. Reactants and products are
      valleys, the transition state is the pass between them, and a reaction is a trajectory across the
      landscape.
    turning_point_id: london-eyring-surface
  - term: Transition state
    definition: >-
      The configuration at the highest point along the lowest path between valleys: a saddle, stable
      against every displacement but one. It has a structure and a free energy, and it cannot be
      isolated because the one unstable direction is a vibration that tears it apart.
    turning_point_id: eyring-equation
  - term: The universal prefactor
    definition: >-
      In the Eyring equation the attempt frequency is $k_BT/h$ — temperature times Boltzmann's constant
      over Planck's — the same for every reaction. At 298 K it is $6.2 \times 10^{12}$ per second, which
      sets the fastest a barrier-free unimolecular process can be.
    turning_point_id: eyring-equation
  - term: Kinetic isotope effect
    definition: >-
      Replace hydrogen by deuterium and the rate changes, because the heavier isotope sits lower in the
      bond's vibrational well. The size of the change says whether that bond is being broken in the
      rate-determining step — the most direct experimental probe of a transition state there is.
    turning_point_id: kinetic-isotope-effect
  - term: Linear free energy relationship
    definition: >-
      Across a family of related reactions, the logarithm of the rate constant varies linearly with the
      logarithm of an equilibrium constant. Structural effects on a barrier can therefore be predicted
      by adding tabulated numbers, with no calculation.
    turning_point_id: hammett-equation
  - term: Reorganisation energy
    definition: >-
      For an electron transfer, the energy needed to rearrange the surrounding molecules into the
      geometry the product requires. It, rather than any bond, is what constitutes the barrier — and
      making a reaction more favourable past a certain point makes it *slower*.
    turning_point_id: marcus-theory

turning_points:
  - id: london-eyring-surface
    date: 1928 – 1931
    type: MECHANISM-ESTABLISHED
    title: The landscape a reaction crosses
    description: >-
      Fritz London writes an approximate expression for the energy of three hydrogen atoms as a function
      of their separations, and Henry Eyring and Michael Polanyi use it to construct the first potential
      energy surface for a reaction — a contour map on which $\mathrm{H} + \mathrm{H_2}$ proceeds up a
      valley, over a pass and down into the symmetric product. The picture supplies the vocabulary the
      subject has used ever since: reaction coordinate, saddle point, barrier height, and the
      recognition that a mechanism is a path on a surface.
    contested: false
    sources:
      - citation: "Eyring, H. & Polanyi, M. (1931). Über einfache Gasreaktionen. Zeitschrift für Physikalische Chemie B 12: 279–311."
        url: null
      - citation: "London, F. (1929). Quantenmechanische Deutung des Vorgangs der Aktivierung. Zeitschrift für Elektrochemie 35: 552–555."
        url: null

  - id: kinetic-isotope-effect
    date: 1933 – 1961
    type: TECHNIQUE-INVENTED
    title: Weighing the bond that breaks
    description: >-
      Deuterium, discovered in 1931, gave chemistry a label that changes mass without changing chemistry.
      Because a C–D bond vibrates more slowly than a C–H bond, it sits lower in its well and needs more
      energy to break, so substituting deuterium slows a reaction — but only if that bond is being
      broken in the rate-determining step. Frank Westheimer and others turned the size of the effect into
      a diagnostic for where the hydrogen sits in the transition state, and anomalously large effects
      became the signature of quantum tunnelling.
    contested: false
    sources:
      - citation: "Westheimer, F. H. (1961). The magnitude of the primary kinetic isotope effect for compounds of hydrogen and deuterium. Chemical Reviews 61: 265–273."
        url: null
      - citation: "Bigeleisen, J. & Wolfsberg, M. (1958). Theoretical and experimental aspects of isotope effects in chemical kinetics. Advances in Chemical Physics 1: 15–76."
        url: null

  - id: eyring-equation
    date: "1935"
    type: MECHANISM-ESTABLISHED
    title: The Eyring equation
    description: >-
      Henry Eyring, and Meredith Evans with Michael Polanyi in the same year, propose that the species at
      the top of the barrier can be treated as being in equilibrium with the reactants, so its
      concentration follows from thermodynamics, and that it decomposes at a frequency of $k_BT/h$. The
      rate constant becomes $k = (k_BT/h)\exp(-\Delta G^{\ddagger}/RT)$, which splits the barrier into
      an enthalpy and an entropy of activation — the second being how much order the reaction must
      impose before it can proceed.
    contested: true
    contested_note: >-
      Whether the transition state can properly be said to be in equilibrium with the reactants was
      disputed from the start, since it is by construction not a stable species, and the theory smuggles
      in a transmission coefficient — assumed to be one — to cover trajectories that cross the barrier
      and come back. Evans and Polanyi's derivation and Eyring's differ in exactly this respect. The
      theory's accuracy in practice, usually within a factor of a few, is better than the status of its
      central assumption.
    sources:
      - citation: "Eyring, H. (1935). The activated complex in chemical reactions. Journal of Chemical Physics 3: 107–115."
        url: null
      - citation: "Evans, M. G. & Polanyi, M. (1935). Some applications of the transition state method. Transactions of the Faraday Society 31: 875–894."
        url: null
      - citation: "Truhlar, D. G., Garrett, B. C. & Klippenstein, S. J. (1996). Current status of transition-state theory. Journal of Physical Chemistry 100: 12771–12800."
        url: null

  - id: hammett-equation
    date: "1937"
    type: MECHANISM-ESTABLISHED
    title: Hammett's substituent constants
    description: >-
      Louis Hammett notices that the effect of a substituent on the rate of one reaction predicts its
      effect on a quite different one. He assigns each substituent a constant $\sigma$, measured from the
      acidity of substituted benzoic acids, and each reaction a sensitivity $\rho$, so that the change in
      the logarithm of the rate is simply their product. The relationship holds over many orders of
      magnitude, and its sign tells a mechanist whether the transition state carries more positive or
      negative charge than the reactant — structural information from a table of numbers.
    contested: false
    sources:
      - citation: "Hammett, L. P. (1937). The effect of structure upon the reactions of organic compounds. Journal of the American Chemical Society 59: 96–103."
        url: null
      - citation: "Hansch, C., Leo, A. & Taft, R. W. (1991). A survey of Hammett substituent constants. Chemical Reviews 91: 165–195."
        url: null

  - id: transition-state-analogues
    date: 1946 – 1972
    type: MECHANISM-ESTABLISHED
    title: What an enzyme binds
    description: >-
      Linus Pauling proposes that an enzyme accelerates a reaction by binding the transition state more
      tightly than the substrate, so that the catalytic power is a binding affinity for a species that
      exists for a hundredth of a picosecond. Richard Wolfenden and Gustav Lienhard draw the practical
      consequence in the early 1970s: a stable molecule shaped like the transition state should bind
      enormously tightly and inhibit the enzyme. Such transition-state analogues are among the most
      potent inhibitors known, with dissociation constants below $10^{-12}$ molar.
    contested: false
    sources:
      - citation: "Pauling, L. (1946). Molecular architecture and biological reactions. Chemical and Engineering News 24: 1375–1377."
        url: null
      - citation: "Wolfenden, R. (1972). Analog approaches to the structure of the transition state in enzyme reactions. Accounts of Chemical Research 5: 10–18."
        url: null
      - citation: "Schramm, V. L. (2011). Enzymatic transition states, transition-state analogs, dynamics, thermodynamics, and lifetimes. Annual Review of Biochemistry 80: 703–732."
        url: null

  - id: marcus-theory
    date: 1956 – 1965
    type: MECHANISM-ESTABLISHED
    title: Marcus and the inverted region
    description: >-
      For a reaction in which nothing happens but an electron moving from one species to another, Rudolph
      Marcus shows that the barrier comes from the surrounding molecules: the solvent and the bonds must
      reorganise into the arrangement the product needs, and the energy for that is the barrier. The
      theory makes a prediction nobody expected and everyone doubted — past a certain driving force,
      making the reaction *more* favourable makes it *slower*. The inverted region was confirmed
      experimentally in 1984, nearly thirty years later.
    contested: false
    sources:
      - citation: "Marcus, R. A. (1956). On the theory of oxidation–reduction reactions involving electron transfer. Journal of Chemical Physics 24: 966–978."
        url: null
      - citation: "Miller, J. R., Calcaterra, L. T. & Closs, G. L. (1984). Intramolecular long-distance electron transfer in radical anions. Journal of the American Chemical Society 106: 3047–3049."
        url: null

open_problems:
  - id: beyond-the-saddle-point
    name: Reactions that do not go over the pass
    status: open
    status_note: Open as of 2026; no general replacement for the saddle-point picture exists.
    description: >-
      Transition state theory assumes a reaction crosses a single well-defined bottleneck and does not
      come back. Both halves fail in known cases. Trajectories in solution recross the barrier many
      times before committing, so the computed rate must be corrected by a factor nobody can obtain
      without simulating the dynamics the theory was meant to avoid. And some reactions bypass the saddle
      point altogether: in roaming mechanisms, found in formaldehyde photodissociation in 2004, a nearly
      free hydrogen atom wanders around the molecule at long range and abstracts a second hydrogen,
      giving products the saddle-point analysis does not predict.
    why_hard: >-
      The theory's value is that it needs only the properties of one configuration. Every correction —
      recrossing, tunnelling, roaming, anharmonicity, solvent dynamics — reintroduces the full
      trajectory problem, and there is no principled way to know in advance which reactions need which
      correction.
    unlocks: >-
      Rate constants computed rather than measured. The ambition is to predict a rate for a reaction
      nobody has run to within a factor of ten, which is the accuracy a process designer needs, and
      which is currently achievable only for small gas-phase systems.
    sources:
      - citation: "Truhlar, D. G., Garrett, B. C. & Klippenstein, S. J. (1996). Current status of transition-state theory. Journal of Physical Chemistry 100: 12771–12800."
        url: null
      - citation: "Townsend, D. et al. (2004). The roaming atom: straying from the reaction path in formaldehyde photodissociation. Science 306: 1158–1161."
        url: null

applications:
  - area: Mechanistic chemistry
    title: Deciding between mechanisms without seeing one
    description: >-
      A chemist proposing a mechanism tests it against measurements that probe the transition state: the
      kinetic isotope effect says which bond is breaking, the Hammett sensitivity says how the charge is
      distributed, the entropy of activation says how much order has to be imposed, and the volume of
      activation says whether the step is an association or a dissociation. Four numbers, none of them
      an observation of the species in question.
    sources:
      - citation: "Anslyn, E. V. & Dougherty, D. A. (2006). Modern Physical Organic Chemistry. University Science Books."
        url: null
  - area: Biochemistry
    title: Inhibitors shaped like a transition state
    description: >-
      If an enzyme's catalytic power is affinity for the transition state, a stable molecule that
      resembles it will bind far more tightly than the substrate does. Designed on that principle,
      transition-state analogues have produced some of the tightest-binding inhibitors known —
      including drugs against influenza neuraminidase and against purine metabolism — with affinities a
      million times that of the natural substrate.
    domain: biology
    field_id: pharmacology
    sources:
      - citation: "Schramm, V. L. (2011). Enzymatic transition states and transition-state analogs. Annual Review of Biochemistry 80: 703–732."
        url: null
  - area: Photosynthesis and respiration
    title: Why electron transfer is fast in one direction only
    description: >-
      In a photosynthetic reaction centre an electron crosses a chain of pigments in picoseconds and
      does not fall back, although falling back is far more favourable energetically. Marcus theory
      explains it: the return step is so exothermic that it lies in the inverted region, where extra
      driving force slows the rate. The arrangement of distances and energies in the protein is a
      design that exploits that inversion.
    domain: biology
    field_id: biochemistry
    sources:
      - citation: "Moser, C. C., Keske, J. M., Warncke, K., Farid, R. S. & Dutton, P. L. (1992). Nature of biological electron transfer. Nature 355: 796–802."
        url: null

further_reading:
  - citation: "Truhlar, D. G., Garrett, B. C. & Klippenstein, S. J. (1996). Current status of transition-state theory. Journal of Physical Chemistry 100: 12771–12800."
    url: null
    note: A candid review of what the theory assumes and when each assumption breaks.
  - citation: "Anslyn, E. V. & Dougherty, D. A. (2006). Modern Physical Organic Chemistry. University Science Books."
    url: null
    note: How transition states are probed in practice; the best treatment of isotope effects and Hammett plots.
  - citation: "Laidler, K. J. & King, M. C. (1983). The development of transition-state theory. Journal of Physical Chemistry 87: 2657–2664."
    url: null
    note: Where the theory came from, and the differences between Eyring's and Polanyi's versions.
---

## A Map Instead of a Fitting Parameter

Arrhenius's $E_a$ was a number extracted from a graph. It said how strongly a rate depended on temperature and nothing about what the molecules were doing.

The replacement came from the new quantum mechanics, applied not to a molecule but to a reaction. {{fig:fritz-london|Fritz London}} produced an approximate expression in 1929 for the energy of three hydrogen atoms as a function of their mutual distances, and {{fig:eyring|Henry Eyring}} and {{fig:polanyi|Michael Polanyi}} turned it into a contour map. On that map the reaction $\mathrm{H} + \mathrm{H_2} \rightarrow \mathrm{H_2} + \mathrm{H}$ is a journey: up a valley in which one bond is long and one short, over a pass where both are intermediate, and down a symmetric valley on the other side.

The potential energy surface gave the subject its working vocabulary — reaction coordinate, barrier, saddle point — and it made the activation energy a *height on a landscape* rather than a fitted constant. It also made clear what the species at the top is. It is a definite arrangement of atoms, stable against every distortion except one: along the reaction coordinate it is at a maximum, so that one vibration has an imaginary frequency and tears the thing apart. It cannot be bottled, and it has a structure.

## A Closer Look: What a Barrier Costs

{{fig:eyring|Eyring}}'s equation of 1935 is

$$
k = \frac{k_B T}{h}\,e^{-\Delta G^{\ddagger}/RT},
$$

and both factors repay a close look.

**The prefactor is universal.** $k_BT/h$ contains no property of the reaction whatever. At 298 K,

$$
\frac{k_B T}{h} = \frac{(1.381\times10^{-23})(298)}{6.626\times10^{-34}} = 6.2\times10^{12}\ \mathrm{s^{-1}},
$$

which is of the order of a molecular vibration, as it should be: the transition state falls apart on its first attempt. This sets a speed limit. No unimolecular process at room temperature can be faster than about $6\times10^{12}$ per second, and a reaction with no barrier at all runs at exactly that rate.

**The exponent buys orders of magnitude cheaply.** Take $\Delta G^{\ddagger} = 100$ kJ/mol, an ordinary barrier for something that happens over hours:

$$
k = 6.2\times10^{12} \times e^{-100000/2478} = 6.2\times10^{12} \times 2.9\times10^{-18} = 1.8\times10^{-5}\ \mathrm{s^{-1}},
$$

a half-life of $\ln 2 / k = 3.8\times10^{4}$ s, or about 10.5 hours. Now the sensitivity. Since $RT\ln 10 = 2478 \times 2.303 = 5.7$ kJ/mol,

$$
\textbf{every 5.7 kJ/mol of barrier costs a factor of ten in rate.}
$$

In the units organic chemists grew up with that is 1.36 kcal/mol per decade — the single most useful number in physical organic chemistry. It means a barrier computed to ±10 kJ/mol, which is about as well as a good density functional manages, gives a rate uncertain by a factor of fifty. It also means a reaction can be made a million times faster by finding 34 kJ/mol, which is less than half a hydrogen bond.

**Splitting the barrier in two.** Writing $\Delta G^{\ddagger} = \Delta H^{\ddagger} - T\Delta S^{\ddagger}$ separates two different obstacles. The enthalpy is the bonds that must be stretched. The entropy is how much order the reaction has to impose: bringing two molecules together into one transition state is a large entropy loss, so bimolecular reactions have $\Delta S^{\ddagger}$ of around $-100$ J/K/mol, worth 30 kJ/mol of free energy at room temperature — a factor of $10^{5}$ in rate, paid simply for having to meet. That is why tethering two reacting groups into one molecule can accelerate a reaction enormously without changing any bond energy, and it is a large part of what enzymes do.

**Weighing the bond that breaks.** The most direct probe of the transition state is to change an isotope. A C–H stretch sits near 2900 cm⁻¹; replacing the hydrogen with deuterium, which is twice as heavy, lowers the frequency by roughly $\sqrt{2}$ to about 2100 cm⁻¹. The zero-point energy of the bond is $\tfrac{1}{2}h\nu$, so the deuterated bond starts

$$
\tfrac{1}{2}(2900 - 2100)\ \mathrm{cm^{-1}} = 400\ \mathrm{cm^{-1}} = 4.8\ \mathrm{kJ/mol}
$$

lower in its well, using 1 cm⁻¹ = 11.96 J/mol. If that bond is fully broken at the transition state, the extra barrier gives

$$
\frac{k_H}{k_D} = e^{4800/2478} = e^{1.94} = 7.
$$

So a measured isotope effect near 7 says the C–H bond is breaking in the rate-determining step; a value near 1 says it is not; and a value of 20 or 50, which does occur, says the hydrogen is *tunnelling* through the barrier rather than going over it, since tunnelling depends far more steeply on mass. One number, obtained by swapping an isotope, locates a bond in a species that exists for a hundredth of a picosecond.

## Predicting Without Calculating

Transition state theory's influence on practice came less from calculation than from two empirical frameworks it legitimised.

{{fig:hammett|Louis Hammett}} found in 1937 that substituent effects transfer between reactions. Measure how a nitro group or a methoxy group shifts the acidity of benzoic acid, assign it a constant, and the same constant predicts its effect on the rate of an ester hydrolysis, scaled by a single number characteristic of that reaction. The relationship is linear in the logarithms over many orders of magnitude, and the *sign* of the scaling tells the mechanist whether the transition state has become more positive or more negative than the starting material. A table of numbers, and no calculation, yields structural information about an unobservable species.

{{fig:marcus|Rudolph Marcus}} did something stranger for the simplest reaction there is — an electron moving from one place to another, with no bonds broken at all. The barrier, he showed, comes from the surroundings: solvent molecules and bond lengths must reorganise into the arrangement the product requires, and the cost of that reorganisation is the barrier. The theory then predicts something that sounds wrong. As the reaction is made more favourable the rate rises, reaches a maximum when the driving force equals the reorganisation energy, and then *falls*. For nearly thirty years the inverted region was regarded as the theory's embarrassment, until it was demonstrated in 1984. Photosynthesis exploits it: the back-reaction that would waste an absorbed photon is so energetically favourable that it is slow, which is a large part of why a leaf works — a connection taken up under [biochemistry](/biology/biochemistry/).

The theory's own limits are recorded in the open problem above. Its power is that it needs only one configuration; every correction it needs — barrier recrossing, tunnelling, reactions that wander round the saddle point instead of over it — puts the full dynamics back, which is the business of [reaction dynamics](/chemistry/reaction-dynamics/).
