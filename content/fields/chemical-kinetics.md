---
id: chemical-kinetics
domain: chemistry
thread: reaction
name: Chemical Kinetics
parent_ids:
  - chemical-thermodynamics
era_emerged: 1850 – 1949
core_question: How fast does a reaction go, what does the rate depend on, and what does that reveal about the steps it passes through?

summary: |-
  Thermodynamics says where a reaction will end up and is silent about whether it will take a microsecond or an age. Diamond is unstable with respect to graphite at room temperature, and the conversion has a half-life far longer than the universe has existed. Kinetics is the study of that gap, and it turned out to be the only route to the one thing thermodynamics cannot supply: the *mechanism*, the sequence of elementary steps a reaction actually passes through.

  The connection between the two is indirect and had to be learned. A rate law — the dependence of rate on each concentration — is measured, not derived from the equation, and the exponents in it need bear no relation to the stoichiometric coefficients. That mismatch is the evidence: an observed rate law is consistent with some mechanisms and not others, so kinetics works by elimination. Svante Arrhenius then found in 1889 that rate constants depend on temperature through an exponential containing an energy, which gave the subject its central quantity, an activation barrier, and the first hint that a reaction is not simply a matter of molecules meeting.

key_ideas:
  - term: Rate law
    definition: >-
      The measured dependence of rate on concentrations, with its own exponents — the orders. They are
      determined experimentally and frequently differ from the coefficients in the balanced equation,
      which is the first sign that the equation is not the mechanism.
    turning_point_id: wilhelmy-rate-law
  - term: Elementary step
    definition: >-
      A single molecular event: one bond made or broken, one collision. For an elementary step, and
      only then, the rate law can be read off the equation. A reaction's mechanism is a proposed
      sequence of them.
    turning_point_id: harcourt-esson-rate-equations
  - term: Activation energy
    definition: >-
      The energy a collision must supply before it can lead to reaction. It appears in an exponential,
      so modest changes in it alter rates by orders of magnitude, and modest changes in temperature do
      the same.
    turning_point_id: arrhenius-equation
  - term: Rate-determining step
    definition: >-
      The slowest step in a sequence, which governs the overall rate the way the narrowest section of a
      pipe governs the flow. Identifying it is what allows a complicated reaction to be improved by
      changing one thing.
    turning_point_id: chain-reactions
  - term: Chain reaction
    definition: >-
      A sequence in which a reactive intermediate is regenerated, so one initiation event produces many
      product molecules. If each step produces more than one carrier, the chain branches and the rate
      runs away — which is combustion, and explosion.
    turning_point_id: chain-reactions
  - term: Steady-state approximation
    definition: >-
      Assume a reactive intermediate is consumed as fast as it forms, so its concentration stays small
      and constant. The assumption turns an insoluble set of differential equations into algebra, and it
      is how almost every mechanism is tested against a rate law.
    turning_point_id: lindemann-unimolecular

turning_points:
  - id: wilhelmy-rate-law
    date: "1850"
    type: MECHANISM-ESTABLISHED
    title: The first rate measured
    description: >-
      Ludwig Wilhelmy follows the acid-catalysed inversion of cane sugar by watching the rotation of
      polarised light through the solution change with time — a measurement that needs no sampling and
      no interruption. He finds that the rate at any moment is proportional to the sugar remaining, and
      writes the differential equation for it. It is the first quantitative rate law, published in a
      physics journal, and it was overlooked for thirty years.
    contested: false
    sources:
      - citation: "Wilhelmy, L. (1850). Ueber das Gesetz, nach welchem die Einwirkung der Säuren auf den Rohrzucker stattfindet. Poggendorff's Annalen der Physik und Chemie 81: 413–433, 499–526."
        url: null
      - citation: "Laidler, K. J. (1993). The World of Physical Chemistry. Oxford University Press, chapter 8."
        url: null

  - id: harcourt-esson-rate-equations
    date: 1865 – 1867
    type: TECHNIQUE-INVENTED
    title: Harcourt and Esson integrate the equations
    description: >-
      Augustus Vernon Harcourt measures the reaction of permanganate with oxalic acid and of hydrogen
      peroxide with iodide, timing it by the appearance of colour, and hands the data to the
      mathematician William Esson, who integrates the differential equations and fits the results. The
      collaboration establishes the practice of the field: measure concentration against time, fit an
      integrated rate law, and read off the order and the rate constant. Orders turn out not to match
      stoichiometric coefficients, which is the opening onto mechanism.
    contested: false
    sources:
      - citation: "Harcourt, A. V. & Esson, W. (1866). On the laws of connexion between the conditions of a chemical change and its amount. Philosophical Transactions of the Royal Society 156: 193–221."
        url: null
      - citation: "Shorter, J. (1980). A. V. Harcourt: a founder of chemical kinetics. Journal of Chemical Education 57: 411–416."
        url: null

  - id: arrhenius-equation
    date: "1889"
    type: MECHANISM-ESTABLISHED
    title: Arrhenius and the exponential
    description: >-
      Svante Arrhenius, examining how rate constants vary with temperature, finds that they fit
      $k = A\,e^{-E_a/RT}$ across a wide range of reactions, and interprets $E_a$ as the energy a
      molecule must acquire to become reactive. The exponential form is the single most consequential
      equation in the subject: it explains why rates roughly double for a ten-degree rise, why a
      catalyst that lowers a barrier by 30 kJ/mol multiplies a rate by $10^{5}$, and why some
      thermodynamically favourable reactions never proceed at all.
    contested: false
    sources:
      - citation: "Arrhenius, S. (1889). Über die Reaktionsgeschwindigkeit bei der Inversion von Rohrzucker durch Säuren. Zeitschrift für Physikalische Chemie 4: 226–248."
        url: null
      - citation: "Laidler, K. J. (1984). The development of the Arrhenius equation. Journal of Chemical Education 61: 494–498."
        url: null

  - id: chain-reactions
    date: 1913 – 1934
    type: MECHANISM-ESTABLISHED
    title: Chains, and why mixtures explode
    description: >-
      Max Bodenstein, puzzled that a flash of light can produce enormous quantities of hydrogen
      chloride, proposes that one absorbed photon starts a chain in which a reactive atom is regenerated
      at every turn. Walther Nernst gives the steps. Nikolai Semenov and Cyril Hinshelwood then show
      that if a step produces *two* carriers for every one consumed, the chain branches and the rate
      grows exponentially — which is what an explosion is, and which explains why combustible mixtures
      have pressure and temperature limits outside which they simply will not ignite.
    contested: false
    sources:
      - citation: "Bodenstein, M. (1913). Eine Theorie der photochemischen Reaktionsgeschwindigkeiten. Zeitschrift für Physikalische Chemie 85: 329–397."
        url: null
      - citation: "Semenov, N. N. (1935). Chemical Kinetics and Chain Reactions. Clarendon Press."
        url: null
      - citation: "Hinshelwood, C. N. (1940). The Kinetics of Chemical Change. Clarendon Press."
        url: null

  - id: lindemann-unimolecular
    date: 1922 – 1952
    type: MECHANISM-ESTABLISHED
    title: How a lone molecule gets activated
    description: >-
      A reaction in which one molecule falls apart by itself presents a puzzle: energy has to come from
      somewhere, and there is nothing to collide with but another molecule of the same substance.
      Frederick Lindemann proposes that collisions do energise the molecule, which then either reacts or
      is deactivated by another collision — so the reaction is first order at high pressure and second
      order at low. Hinshelwood, and later the theory of Rice, Ramsperger, Kassel and Marcus, made the
      account quantitative by allowing the energy to be distributed among the molecule's many
      vibrations.
    contested: false
    sources:
      - citation: "Lindemann, F. A. (1922). Discussion on the radiation theory of chemical action. Transactions of the Faraday Society 17: 598–606."
        url: null
      - citation: "Marcus, R. A. (1952). Unimolecular dissociations and free radical recombination reactions. Journal of Chemical Physics 20: 359–364."
        url: null

  - id: flash-photolysis
    date: 1949 – 1967
    type: TECHNIQUE-INVENTED
    title: Seeing the intermediates
    description: >-
      Ronald Norrish and George Porter fire a flash of light intense enough to generate reactive
      fragments in bulk, then take a spectrum a short time later with a second, weaker flash. For the
      first time the intermediates a mechanism had only ever inferred could be observed directly, with
      their own spectra and lifetimes. The time resolution started at milliseconds, reached nanoseconds
      with lasers, and the same pump-and-probe logic taken to the femtosecond became
      [reaction dynamics](/chemistry/reaction-dynamics/).
    contested: false
    sources:
      - citation: "Norrish, R. G. W. & Porter, G. (1949). Chemical reactions produced by very high light intensities. Nature 164: 658."
        url: null
      - citation: "Porter, G. (1968). Flash photolysis and some of its applications. Science 160: 1299–1307."
        url: null

open_problems:
  - id: complex-reaction-networks
    name: Predicting what a network of reactions will do
    status: open
    status_note: Open as of 2026; combustion and atmospheric mechanisms contain thousands of steps with uncertain constants.
    description: >-
      Real systems are not single reactions. A detailed mechanism for burning a hydrocarbon contains
      hundreds of species and thousands of elementary steps; atmospheric chemistry and the chemistry of
      a flow battery are similar. Most of the individual rate constants have never been measured, and
      are estimated from analogy or calculation to within a factor of two to ten — which, through the
      exponential, can be a factor of a hundred in a predicted ignition delay.
    why_hard: >-
      The output depends on a few steps among thousands, and which few changes with temperature and
      pressure, so the mechanism cannot be reduced once and for all. Measuring a single elementary rate
      constant in isolation is a project; measuring thousands is not feasible; and uncertainty
      propagates nonlinearly through a stiff system of differential equations.
    unlocks: >-
      Engine and burner design, predictions of air quality and of the atmospheric lifetime of a
      pollutant, the safety case for a battery, and the yield of any industrial process with side
      reactions.
    sources:
      - citation: "Tomlin, A. S. (2013). The role of sensitivity and uncertainty analysis in combustion modelling. Proceedings of the Combustion Institute 34: 159–176."
        url: null
      - citation: "Green, W. H. (2019). Automatic generation of reaction mechanisms. In Computer Aided Chemical Engineering 45: 259–294."
        url: null

applications:
  - area: Shelf life and storage
    title: Dating by rate constant
    description: >-
      The expiry date on a medicine, the storage temperature of a vaccine and the recommended cellar for
      a wine are kinetics in commercial form. Accelerated stability testing runs the degradation hot,
      fits the Arrhenius equation and extrapolates down — which works when the mechanism does not change
      with temperature, and fails spectacularly when it does, so the extrapolation has to be checked
      against real time.
    sources:
      - citation: "Waterman, K. C. & Adami, R. C. (2005). Accelerated aging: prediction of chemical stability of pharmaceuticals. International Journal of Pharmaceutics 293: 101–125."
        url: null
  - area: Enzymology
    title: The same equations inside a cell
    description: >-
      Michaelis and Menten's treatment of enzyme kinetics is this field's steady-state approximation
      applied to a catalyst that can be saturated: the enzyme binds substrate reversibly, the complex
      turns over at a fixed rate, and the resulting hyperbolic dependence on concentration gives two
      measurable constants. Nearly all quantitative biochemistry is built on that analysis.
    domain: biology
    field_id: biochemistry
    sources:
      - citation: "Michaelis, L. & Menten, M. L. (1913). Die Kinetik der Invertinwirkung. Biochemische Zeitschrift 49: 333–369."
        url: null
  - area: Differential equations
    title: Stiff systems, and the methods built for them
    description: >-
      A mechanism with intermediates that live for nanoseconds alongside species that survive for hours
      produces equations whose timescales differ by ten orders of magnitude. Integrating them with an
      explicit method requires steps set by the fastest process and runs for the duration of the
      slowest, which is impossible; the implicit methods now standard for stiff systems were developed
      largely in response to chemical kinetics and to circuit simulation.
    domain: math
    field_id: differential-equations
    sources:
      - citation: "Gear, C. W. (1971). Numerical Initial Value Problems in Ordinary Differential Equations. Prentice-Hall."
        url: null
      - citation: "Hairer, E. & Wanner, G. (1996). Solving Ordinary Differential Equations II: Stiff and Differential-Algebraic Problems. Springer."
        url: null

further_reading:
  - citation: "Laidler, K. J. (1993). The World of Physical Chemistry. Oxford University Press."
    url: null
    note: A historian who was also a kineticist; the chapters on rates and mechanism are definitive.
  - citation: "Houston, P. L. (2001). Chemical Kinetics and Reaction Dynamics. McGraw-Hill."
    url: null
    note: Modern treatment that carries kinetics through to the dynamics of single collisions.
  - citation: "Semenov, N. N. (1935). Chemical Kinetics and Chain Reactions. Clarendon Press."
    url: null
    note: The founding account of branching chains, by the person who worked out why mixtures explode.
---

## Thermodynamics Does Not Say When

Graphite is the stable form of carbon at room temperature and pressure. Diamond is not, and the conversion has never been observed, because the rate is unmeasurably small. Any account of chemistry built only on free energies would predict that every diamond in the world is on its way to becoming pencil lead, which is true and useless.

The study of rates began in 1850 with a measurement of unusual elegance. Cane sugar, inverted by acid, changes the direction in which it rotates polarised light; {{fig:wilhelmy|Ludwig Wilhelmy}} simply watched the rotation drift as the reaction proceeded, so the reaction was never disturbed and no samples were taken. He found that the rate at any instant is proportional to the sugar remaining, wrote the differential equation, and published in a physics journal where chemists did not read it for thirty years.

{{fig:harcourt|Augustus Vernon Harcourt}} established the practice in the 1860s, with the mathematician {{fig:esson|William Esson}} doing the integration. Their method is still the method: measure concentration against time, fit an integrated rate law, extract the order and the rate constant.

And the orders turned out not to match the balanced equations. A reaction written with two molecules of one reactant may be first order in it, or half order, or of an order that changes with concentration. This mismatch is the most useful fact in the subject, because it means the rate law carries information the equation does not: it constrains the *sequence of steps*. Kinetics cannot prove a mechanism — several mechanisms may predict the same rate law — but it can rule one out, and that is how every mechanism in chemistry has been established.

## How a Rate Law Is Measured

A rate law is not derived; it is determined, and the methods are worth stating because the field's conclusions are only as good as they are.

The direct approach is to follow a concentration against time and fit. Which quantity is followed matters more than it seems: an analysis that requires sampling disturbs the reaction, so the preferred observables are ones that can be read continuously from outside — the rotation of polarised light, as {{fig:wilhelmy|Wilhelmy}} used, or an absorbance, a pressure, a conductivity, a volume of gas. The resulting curve is then fitted to the integrated form for each candidate order: a first-order reaction gives a straight line when the logarithm of concentration is plotted against time, a second-order one when the reciprocal is.

The difficulty is that several orders fit a single run almost equally well over the first half-life, so the determination is made by varying conditions instead. The method of initial rates measures the slope at the very start for several starting concentrations, which gives each order independently without the complication of products accumulating. The isolation method floods the mixture with all reactants but one, so their concentrations barely change and the reaction appears to depend only on the remaining one — the pseudo-first-order trick that makes most biochemical kinetics tractable.

Two diagnostics then test a proposed mechanism. The half-life of a first-order reaction is independent of the starting concentration and nothing else behaves that way, which identifies the order at a glance. And where a mechanism involves a reactive intermediate, the steady-state approximation — assuming the intermediate is consumed as fast as it is made — converts the differential equations into algebra and predicts a specific, often unusual, rate law: an order of one and a half, or an order that falls from two to one as pressure rises. Such predictions are the strongest kinetic evidence available, because they are peculiar enough that a wrong mechanism rarely reproduces them.

## A Closer Look: What the Exponential Does

{{fig:arrhenius|Svante Arrhenius}}'s equation is

$$
k = A\,e^{-E_a/RT},
$$

and almost everything distinctive about chemical rates follows from the fact that the temperature sits in an exponent.

**The ten-degree rule.** Chemists learn that a rate roughly doubles for every 10 °C. That is not a rule of nature but a consequence of a typical barrier. With $E_a = 50$ kJ/mol, the ratio of rate constants between 298 K and 308 K is

$$
\frac{k_{308}}{k_{298}} = \exp\!\left[\frac{E_a}{R}\left(\frac{1}{298} - \frac{1}{308}\right)\right] = \exp\!\left[6014 \times 1.089\times10^{-4}\right] = e^{0.655} = 1.93.
$$

A factor of 1.9, for the most ordinary barrier there is. Double the barrier to 100 kJ/mol and the same ten degrees gives a factor of 3.7.

**Why some reactions never go.** In solution a molecule collides with its neighbours of order $10^{10}$ times a second. With $RT = 2478$ J/mol at 298 K, the fraction of collisions carrying 100 kJ/mol is

$$
e^{-100000/2478} = e^{-40.4} = 2.9\times10^{-18}.
$$

Multiply: productive events occur at about $10^{10} \times 2.9\times10^{-18} = 2.9\times10^{-8}$ per second, which is one reaction per molecule per **year**. The mixture is, for practical purposes, inert — and the free energy change may be enormously favourable. Raise the temperature to 500 K and the same barrier gives $e^{-24.1} = 3.4\times10^{-11}$, a rate up by a factor of $10^{7}$: one event every few seconds. This is why heating works, and why it is so often the only available lever.

**Why a catalyst is worth so much.** Lower the barrier and the gain is exponential. At 298 K, removing 30 kJ/mol multiplies the rate by

$$
e^{30000/2478} = e^{12.1} = 1.8\times10^{5},
$$

and removing 60 kJ/mol — a realistic figure for an enzyme against the uncatalysed reaction — multiplies it by $3\times10^{10}$. A factor of thirty billion, from changing a path rather than a temperature. That is the entire economic case for [catalysis](/chemistry/catalysis/), and it is why industrial chemistry spends so much more effort on catalysts than on reactors.

**What $A$ is.** The prefactor is roughly the frequency with which the molecules attempt the reaction — collision frequency for a bimolecular step, a vibrational frequency for a unimolecular one — modified by how many of those attempts have the right geometry. For reactions between small molecules in the gas phase, collision theory predicts $A$ within an order of magnitude. For anything with structure it does not, because most collisions with enough energy still fail on orientation, and accounting for that properly requires knowing the shape of the barrier rather than just its height — which is [transition state theory](/chemistry/transition-state-theory/).

## Chains, Explosions and Intermediates

Two discoveries showed that a rate law can conceal something qualitatively more interesting than a sequence of steps.

{{fig:bodenstein|Max Bodenstein}} was puzzled that a single flash of light shone into a mixture of hydrogen and chlorine produces a million molecules of hydrogen chloride per photon absorbed. The resolution is that the reaction regenerates its own reactive intermediate: a chlorine atom attacks hydrogen, producing a hydrogen atom, which attacks chlorine, producing a chlorine atom, and so on until a termination event stops the chain. One initiation, many products.

{{fig:semenov|Nikolai Semenov}} and {{fig:hinshelwood|Cyril Hinshelwood}} then identified the dangerous case. If a step produces *two* carriers where one was consumed, the number of chains grows geometrically and the rate accelerates without limit. That is an explosion, and it explains something that had looked arbitrary: combustible mixtures have explosion *limits*, regions of pressure and temperature inside which they detonate and outside which they quietly do nothing, because termination at the vessel walls competes with branching in the gas.

The last step was to stop inferring intermediates and look at them. {{fig:norrish|Ronald Norrish}} and {{fig:george-porter|George Porter}}'s flash photolysis, in 1949, fires a flash bright enough to make radicals in bulk and takes their spectrum microseconds later with a second flash. Species that had existed only as entries in a proposed mechanism acquired spectra and measured lifetimes. The method's time resolution has improved by nine orders of magnitude since, and the pump-and-probe principle has not changed.
