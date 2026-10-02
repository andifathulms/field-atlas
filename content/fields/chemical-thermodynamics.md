---
id: chemical-thermodynamics
domain: chemistry
thread: reaction
name: Chemical Thermodynamics
parent_ids:
  - chemical-composition
era_emerged: 1840 – 1923
core_question: Which way will a reaction go, how far, and what can be done to move it?

summary: |-
  A reaction that is possible on paper may not happen, and one that happens may stop half way. For most of the nineteenth century the rule of thumb was that reactions proceed in the direction that releases the most heat — a principle associated with Julius Thomsen and Marcellin Berthelot, and plainly false, since ammonium nitrate dissolves spontaneously while getting cold enough to frost the beaker.

  The correct criterion came from Josiah Willard Gibbs, in a paper of 1876–78 published in the transactions of a Connecticut academy and read by almost nobody for fifteen years. The quantity that decides direction is not the heat but the heat minus the temperature times the entropy change; a reaction proceeds while that combination falls, and stops when it reaches a minimum, which is equilibrium rather than exhaustion. Gibbs also introduced chemical potential and the phase rule, which between them govern every distillation, alloy and mineral assemblage. Wilhelm Ostwald translated the paper into German in 1892; Jacobus van 't Hoff and Henry Le Chatelier had meanwhile worked out how equilibrium responds to temperature and pressure, which is the knowledge an industrial chemist actually uses.

key_ideas:
  - term: Thermochemical additivity
    definition: >-
      The heat of a reaction is the same whatever route it takes, so heats of reaction can be added and
      subtracted like any other state function. It is Hess's law, and it means a heat that cannot be
      measured directly can be assembled from ones that can.
    turning_point_id: hess-law
  - term: Equilibrium constant
    definition: >-
      At equilibrium the concentrations of products and reactants stand in a fixed ratio, each raised
      to the power of its coefficient. The reaction has not stopped; it is proceeding equally fast in
      both directions.
    turning_point_id: guldberg-waage-mass-action
  - term: Chemical potential
    definition: >-
      The change in a system's free energy when one more particle of a given species is added. Matter
      flows from high chemical potential to low, which is what drives diffusion, dissolution, osmosis
      and every phase change.
    turning_point_id: gibbs-heterogeneous-equilibria
  - term: Free energy
    definition: >-
      $\Delta G = \Delta H - T\Delta S$. The combination that decides direction: negative and the
      reaction proceeds, zero and it is at equilibrium. Heat alone is the wrong criterion because it
      ignores the second term.
    turning_point_id: gibbs-heterogeneous-equilibria
  - term: Le Chatelier's principle
    definition: >-
      Disturb a system at equilibrium and it shifts so as to oppose the disturbance. Qualitative,
      occasionally misleading, and the most used piece of reasoning in industrial chemistry.
    turning_point_id: le-chatelier-principle
  - term: Activity
    definition: >-
      The effective concentration of a species, which in anything but a dilute ideal solution differs
      from the actual one. Replacing concentrations by activities is what lets the thermodynamics of
      ideal systems be applied to real ones.
    turning_point_id: lewis-activity-and-fugacity

turning_points:
  - id: hess-law
    date: "1840"
    type: MECHANISM-ESTABLISHED
    title: Hess's law of constant heat summation
    description: >-
      Germain Hess, measuring the heats evolved when acids are neutralised and hydrates formed, finds
      that the total heat of a reaction is fixed by its start and end points and not by the path. The
      consequence is practical: a heat of reaction that cannot be measured — because the reaction will
      not go cleanly, or at all — can be computed by adding and subtracting reactions that can.
      Thermochemistry becomes an accounting system, eighteen years before the first law of
      thermodynamics was stated in general form.
    contested: false
    sources:
      - citation: "Hess, G. H. (1840). Recherches thermochimiques. Bulletin Scientifique de l'Académie Impériale des Sciences de Saint-Pétersbourg 8: 257–272."
        url: null
      - citation: "Leicester, H. M. (1951). Germain Henri Hess and the foundations of thermochemistry. Journal of Chemical Education 28: 581–583."
        url: null

  - id: guldberg-waage-mass-action
    date: 1864 – 1879
    type: MECHANISM-ESTABLISHED
    title: The law of mass action
    description: >-
      Cato Guldberg and Peter Waage, working in Christiania, propose that the rate at which substances
      react depends on the product of their active masses — concentrations — and that equilibrium is
      the state in which the forward and reverse rates are equal. The resulting expression, a ratio of
      concentrations each raised to the power of its stoichiometric coefficient, is constant at a given
      temperature. Published in Norwegian in 1864 and in German only in 1879, the law explains why
      reactions stop short of completion without anything being used up.
    contested: false
    sources:
      - citation: "Guldberg, C. M. & Waage, P. (1879). Über die chemische Affinität. Journal für Praktische Chemie 19: 69–114."
        url: null
      - citation: "Lund, E. W. (1965). Guldberg and Waage and the law of mass action. Journal of Chemical Education 42: 548–550."
        url: null

  - id: gibbs-heterogeneous-equilibria
    date: 1876 – 1892
    type: THEORY-REPLACED
    title: Gibbs supplies the criterion
    description: >-
      In *On the Equilibrium of Heterogeneous Substances*, Josiah Willard Gibbs replaces heat release
      with a correct criterion for spontaneity, introduces the chemical potential, and derives the phase
      rule — the relation between the number of components, phases and degrees of freedom in any
      equilibrium. The work covers phase diagrams, surface tension and electrochemical cells. It
      appeared in the *Transactions of the Connecticut Academy*, in a notation of punishing austerity,
      and was effectively unread until Ostwald translated it into German in 1892 and van der Waals's
      school in Amsterdam began using the phase rule on real systems.
    contested: false
    sources:
      - citation: "Gibbs, J. W. (1878). On the equilibrium of heterogeneous substances. Transactions of the Connecticut Academy of Arts and Sciences 3: 108–248, 343–524."
        url: null
      - citation: "Rukeyser, M. (1942). Willard Gibbs. Doubleday."
        url: null

  - id: vant-hoff-chemical-dynamics
    date: 1884 – 1886
    type: MECHANISM-ESTABLISHED
    title: Van 't Hoff puts temperature into equilibrium
    description: >-
      Jacobus Henricus van 't Hoff's *Études de dynamique chimique* treats reaction rates, equilibrium
      and affinity as one subject, and derives how the equilibrium constant varies with temperature: its
      logarithm changes in proportion to the heat of reaction divided by the temperature squared. He
      also shows that dilute solutions obey a law formally identical to the gas law, with osmotic
      pressure playing the part of pressure. He received the first Nobel Prize in Chemistry in 1901.
    contested: false
    sources:
      - citation: "van 't Hoff, J. H. (1884). Études de dynamique chimique. Frederik Muller, Amsterdam."
        url: null
      - citation: "van 't Hoff, J. H. (1887). Die Rolle des osmotischen Druckes in der Analogie zwischen Lösungen und Gasen. Zeitschrift für Physikalische Chemie 1: 481–508."
        url: null

  - id: le-chatelier-principle
    date: 1884 – 1888
    type: MECHANISM-ESTABLISHED
    title: Le Chatelier's principle
    description: >-
      Henry Le Chatelier, a mining engineer working on explosions and furnaces, states the rule that
      any system at equilibrium responds to a disturbance in the direction that opposes it: raise the
      pressure and it shifts towards fewer molecules of gas, add heat and it shifts the endothermic way.
      Karl Ferdinand Braun arrived at the same rule independently. It is qualitative, has exceptions
      when several constraints change at once, and is the reasoning by which industrial conditions are
      chosen.
    contested: false
    sources:
      - citation: "Le Chatelier, H. (1884). Sur un énoncé général des lois des équilibres chimiques. Comptes Rendus 99: 786–789."
        url: null
      - citation: "Quílez, J. (2009). From chemical forces to chemical rates: a historical/philosophical foundation for the teaching of chemical equilibrium. Science & Education 18: 1203–1251."
        url: null

  - id: lewis-activity-and-fugacity
    date: 1901 – 1923
    type: TECHNIQUE-INVENTED
    title: Activity, and thermodynamics for real mixtures
    description: >-
      The equations work for ideal gases and dilute solutions, and nothing industrial is either. Gilbert
      Lewis introduces fugacity for gases and activity for solutions: effective quantities, defined so
      that the ideal equations stay exactly true, with the departure from reality packed into an
      activity coefficient to be measured. *Thermodynamics and the Free Energy of Chemical Substances*,
      written with Merle Randall in 1923, made the subject usable and taught a generation of chemists to
      think in free energies.
    contested: false
    sources:
      - citation: "Lewis, G. N. (1907). Outlines of a new system of thermodynamic chemistry. Proceedings of the American Academy of Arts and Sciences 43: 259–293."
        url: null
      - citation: "Lewis, G. N. & Randall, M. (1923). Thermodynamics and the Free Energy of Chemical Substances. McGraw-Hill."
        url: null

open_problems:
  - id: concentrated-electrolytes
    name: Thermodynamics of concentrated electrolyte solutions
    status: open
    status_note: Open as of 2026; models are fitted to data rather than derived, and extrapolate badly.
    description: >-
      Debye–Hückel theory predicts activity coefficients in dilute ionic solutions from first
      principles, and fails above roughly 0.01 molar. Above that — which includes seawater, blood,
      battery electrolytes, geothermal brines and most industrial streams — practice relies on fitted
      expressions such as Pitzer's equations, with dozens of empirical parameters per system, no
      reliable route from molecular structure, and poor behaviour outside the range of the data they
      were fitted to.
    why_hard: >-
      In a concentrated solution the ions are close enough that their interactions are not pairwise
      additive, the solvent cannot be treated as a structureless dielectric because ions reorganise the
      water around them, and specific effects of ion identity dominate — which is why sodium and
      potassium salts of the same anion behave differently in ways the theory does not capture.
    unlocks: >-
      Battery and electrolyser design, desalination, carbon capture by amine solutions, geochemical
      modelling of ore deposits and the predictions of nuclear waste chemistry all require activities
      in concentrated solution.
    sources:
      - citation: "Pitzer, K. S. (1973). Thermodynamics of electrolytes I. Journal of Physical Chemistry 77: 268–277."
        url: null
      - citation: "Kontogeorgis, G. M., Maribo-Mogensen, B. & Thomsen, K. (2018). The Debye–Hückel theory and its importance in modeling electrolyte solutions. Fluid Phase Equilibria 462: 130–152."
        url: null

applications:
  - area: Industry
    title: Choosing the conditions
    description: >-
      Whether to run a reaction hot or cold, at high pressure or low, concentrated or dilute, is decided
      by the sign and size of the enthalpy and entropy changes. Ammonia synthesis is run under pressure
      because it consumes gas molecules and as cool as the catalyst allows because it is exothermic;
      steam reforming is run hot for the opposite reason. The same arithmetic sets the limits of what no
      amount of engineering can achieve.
    sources:
      - citation: "Smith, J. M., Van Ness, H. C. & Abbott, M. M. (2005). Introduction to Chemical Engineering Thermodynamics, 7th edition. McGraw-Hill."
        url: null
  - area: Geology
    title: Which minerals can coexist
    description: >-
      Gibbs's phase rule says how many phases can be in equilibrium given the number of components and
      the constraints, which turns a rock into a record: the assemblage of minerals present fixes the
      pressure and temperature at which it last equilibrated, so a thin section can be read as a
      depth and a temperature in the Earth's crust. Geology is not one of the domains this atlas
      surveys, so the use is recorded here and lands nowhere.
    sources:
      - citation: "Spear, F. S. (1993). Metamorphic Phase Equilibria and Pressure–Temperature–Time Paths. Mineralogical Society of America."
        url: null
  - area: Biochemistry
    title: Coupling a reaction that will not go
    description: >-
      Many reactions a cell needs have positive free energy and cannot proceed alone. They are driven by
      being coupled to the hydrolysis of ATP, which supplies about 50 kJ/mol under cellular conditions,
      so that the *sum* of the two has negative free energy. Metabolism is therefore an exercise in
      thermodynamic bookkeeping, and the standard free energies of its intermediates are tabulated for
      exactly that purpose.
    domain: biology
    field_id: biochemistry
    sources:
      - citation: "Alberty, R. A. (2003). Thermodynamics of Biochemical Reactions. Wiley."
        url: null
      - citation: "Nicholls, D. G. & Ferguson, S. J. (2013). Bioenergetics, 4th edition. Academic Press."
        url: null

further_reading:
  - citation: "Atkins, P. & de Paula, J. (2014). Physical Chemistry, 10th edition. Oxford University Press."
    url: null
    note: The standard text; the chapters on free energy and equilibrium are the clearest short route in.
  - citation: "Rukeyser, M. (1942). Willard Gibbs. Doubleday."
    url: null
    note: A biography by a poet, and still the best account of why Gibbs went unread for fifteen years.
  - citation: "Lewis, G. N. & Randall, M. (1923). Thermodynamics and the Free Energy of Chemical Substances. McGraw-Hill."
    url: null
    note: The book that taught chemists to use thermodynamics; readable, and historically decisive.
---

## The Wrong Criterion

By 1860 chemists could balance an equation and measure the heat a reaction gives out. The natural guess, made independently by {{fig:thomsen|Julius Thomsen}} and {{fig:berthelot|Marcellin Berthelot}}, was that the heat *is* the driving force: among the reactions available to a mixture, the one that occurs is the one releasing most heat.

The guess is wrong, and the counterexample is on any laboratory shelf. Dissolve ammonium nitrate in water and it absorbs heat — enough to drop the beaker's temperature by twenty degrees and frost its outside — and it dissolves anyway, completely, without being pushed. Ice melting in a warm room does the same thing. Whatever decides direction, it is not the heat alone.

{{fig:josiah-willard-gibbs|Josiah Willard Gibbs}} had the answer in print by 1878, in a paper of 300 pages that essentially nobody read. The quantity that must decrease is not the heat released but

$$
\Delta G = \Delta H - T\Delta S,
$$

the enthalpy change less the temperature times the entropy change. A reaction proceeds while $\Delta G$ is negative and stops when it reaches zero — which is equilibrium, not exhaustion. Gibbs also introduced the chemical potential, the quantity whose differences drive matter from one place or phase to another, and the phase rule relating the number of coexisting phases to the number of components. The paper covered heterogeneous equilibria, surfaces and electrochemical cells, and it was published in the *Transactions of the Connecticut Academy of Arts and Sciences* in a notation of such austerity that {{fig:ostwald|Wilhelm Ostwald}}, who translated it into German in 1892, said it was like reading a book written in a language one had to invent first.

## Heat Before Free Energy

Thermochemistry preceded thermodynamics, and for a while it was the whole of the quantitative subject. {{fig:lavoisier|Lavoisier}} and Laplace had built an ice calorimeter in 1783 — a jacket of packed ice around a reaction vessel, with the mass of meltwater measuring the heat released — and the heats of combustion, neutralisation and solution were being tabulated long before anyone could say what they implied.

{{fig:hess|Germain Hess}} supplied the rule that makes a table of such numbers more useful than the sum of its entries. The heat of a reaction depends only on its start and end points, not on the path, so reactions can be added and subtracted and their heats added and subtracted with them. The consequence is practical: a heat that cannot be measured directly, because the reaction will not go cleanly or at all, can be assembled from ones that can. The heat of formation of carbon monoxide is impossible to measure, since burning carbon in limited oxygen always gives a mixture — and it follows immediately from the heats of combustion of carbon and of carbon monoxide, which are both straightforward.

The same construction run over bond-breaking steps gives average bond enthalpies, from which the heat of an unmeasured reaction can be estimated to within ten or twenty kilojoules by counting bonds broken and formed. That is poor accuracy by thermodynamic standards and often enough to decide whether a proposed reaction is worth attempting.

What the heats could not do was predict direction, and this is where the subject stalled for thirty years. Reactions that absorb heat happen; reactions that release it sometimes do not. The missing term was entropy, and the reason it took so long to find is that entropy is not a heat and cannot be measured by a calorimeter directly — it has to be assembled from heat capacities measured down towards absolute zero, which is a twentieth-century capability.

## A Closer Look: Why Heat Release Is the Wrong Criterion

Take the counterexample and do the arithmetic. Ammonium nitrate dissolving in water:

$$
\mathrm{NH_4NO_3(s)} \longrightarrow \mathrm{NH_4^+(aq)} + \mathrm{NO_3^-(aq)}
$$

with $\Delta H = +25.7$ kJ/mol — it absorbs heat — and $\Delta S = +108$ J/K/mol, because an ordered crystal becomes two freely moving ions. At 298 K,

$$
T\Delta S = 298 \times 0.108 = 32.2 \text{ kJ/mol},
$$
$$
\Delta G = 25.7 - 32.2 = -6.5 \text{ kJ/mol}.
$$

Negative, so it dissolves, and the entropy term is what pays for the heat absorbed. Thomsen and Berthelot's rule predicts the opposite because it leaves the second term out.

The same number fixes *how far* a reaction goes, through

$$
\Delta G^{\circ} = -RT\ln K.
$$

With $RT = 8.314 \times 298 = 2478$ J/mol,

$$
K = \exp\!\left(\frac{6500}{2478}\right) = e^{2.62} = 13.7,
$$

so at equilibrium the dissolved form is favoured about fourteen to one. Note the sensitivity: because $K$ is exponential in $\Delta G$, a change of $RT\ln 10 = 5.7$ kJ/mol moves the equilibrium constant by a factor of ten. That is less than the strength of a single hydrogen bond, which is why small structural changes make large differences to a yield.

Now the industrially decisive case, which also shows the trade-off that creates the need for a catalyst. Ammonia synthesis:

$$
\mathrm{N_2} + 3\,\mathrm{H_2} \rightleftharpoons 2\,\mathrm{NH_3}, \qquad \Delta H = -92.2 \text{ kJ/mol}, \quad \Delta S = -198 \text{ J/K/mol}.
$$

The entropy change is strongly negative because four molecules of gas become two. At room temperature,

$$
\Delta G = -92.2 + (298)(0.198) = -92.2 + 59.0 = -33.2 \text{ kJ/mol},
$$

which is comfortably favourable: $K \approx 7 \times 10^{5}$. But at room temperature the reaction does not happen at any measurable rate, so it must be heated. At 700 K,

$$
\Delta G = -92.2 + (700)(0.198) = -92.2 + 138.6 = +46.4 \text{ kJ/mol},
$$
$$
K = \exp\!\left(-\frac{46400}{8.314 \times 700}\right) = e^{-7.97} = 3.5 \times 10^{-4}.
$$

Heating the reaction to make it go destroys the yield — a factor of $10^{9}$ in the equilibrium constant between 298 K and 700 K. This is {{fig:le-chatelier|Le Chatelier}}'s principle as a number: the reaction is exothermic, so heat pushes it backwards.

Two escapes exist, and both are used. Pressure, because the forward reaction consumes gas molecules: at 200 atmospheres the equilibrium shifts far enough to be worth having. And a catalyst, which does not touch the equilibrium at all — {{fig:ostwald|Ostwald}} was explicit that a catalyst cannot — but allows a usable rate at a lower temperature, where the equilibrium is better. The whole design of the Haber–Bosch process is contained in the two calculations above, and it is taken up under [catalysis](/chemistry/catalysis/).

## Equilibrium Is Not Stasis

{{fig:guldberg|Cato Guldberg}} and {{fig:waage|Peter Waage}} supplied the other half of the picture in 1864, and it is easy to underrate because it now looks obvious. A reaction that has stopped changing has not stopped. It is proceeding in both directions at equal rates, and the ratio of concentrations that results — each raised to the power of its coefficient — is a constant at a given temperature.

That reframing explains things the older picture could not: why a reaction leaves reactants behind, why adding product reverses it, why a sealed flask reaches a steady state rather than running to completion. {{fig:vant-hoff|Van 't Hoff}} then connected the constant to temperature, showing that its logarithm shifts in proportion to the heat of reaction — the same relation that appears in the calculation above — and, in a separate stroke, that dilute solutions obey a law formally identical to the gas law, with osmotic pressure in the role of pressure.

The last piece was making all of it apply to anything real. The equations above hold exactly for ideal gases and dilute solutions, and a concentrated brine is neither. {{fig:gilbert-lewis|Gilbert Lewis}}'s solution was definitional: introduce *activity*, an effective concentration chosen so that the ideal equations remain exactly true, and put all the deviation from reality into an activity coefficient to be measured. It works, and it leaves the field with the awkwardness recorded above as its open problem — those coefficients can be predicted from first principles only when the solution is dilute enough not to matter.
