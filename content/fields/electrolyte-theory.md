---
id: electrolyte-theory
domain: chemistry
thread: electrochemistry
name: Ions in Solution
parent_ids:
  - electrochemistry
  - chemical-thermodynamics
era_emerged: 1869 – 1995
core_question: What is actually present when a salt dissolves, and why does the solution conduct?

summary: |-
  Faraday's vocabulary assumed that something travels through an electrolyte and said nothing about what. The received view through the nineteenth century was that the current tears molecules apart as it passes, so the ions exist only while the current flows. Svante Arrhenius proposed in his 1884 thesis that this is backwards: a salt dissolves by falling apart into charged fragments immediately, and the current merely moves fragments that are already there. His examiners thought so little of it that they awarded the lowest passing grade, and he received the Nobel Prize for it nineteen years later.

  The evidence was quantitative and came from conductivity, freezing points and osmotic pressure, which all indicated more dissolved particles than formula units. What then needed explaining was why the agreement with ideal behaviour is so poor above the most dilute solutions — and the answer, from Peter Debye and Erich Hückel in 1923, is that each ion is surrounded by a loose cloud of opposite charge which drags on it and lowers its effective activity. Their theory predicts the deviation exactly in the limit of high dilution, which is both a triumph and the field's lasting frustration, since nothing of industrial interest is that dilute.

key_ideas:
  - term: Electrolytic dissociation
    definition: >-
      A salt in water is already separated into ions before any current flows. The current moves them; it
      does not create them. This reverses the earlier assumption and explains why dilute solutions behave
      as though they contain more particles than formula units.
    turning_point_id: arrhenius-dissociation
  - term: Independent ionic migration
    definition: >-
      Each kind of ion contributes its own fixed amount to a solution's conductivity, regardless of what
      it is paired with. Measuring conductivities of many salts therefore yields a table of per-ion
      values, which only makes sense if the ions move separately.
    turning_point_id: kohlrausch-ionic-conductivity
  - term: pH
    definition: >-
      The negative logarithm of the hydrogen ion activity. A logarithmic scale is unavoidable because the
      concentration spans fourteen orders of magnitude across ordinary solutions.
    turning_point_id: sorensen-ph
  - term: Proton donor and acceptor
    definition: >-
      An acid is anything that gives up a proton and a base anything that takes one, so acidity is a
      relation between a pair rather than a property of a substance. It replaced a definition that only
      worked in water.
    turning_point_id: bronsted-lowry-acids
  - term: Ionic atmosphere
    definition: >-
      Each ion is statistically surrounded by a slight excess of opposite charge, of radius a few
      nanometres in dilute solution, which screens it and reduces its effective concentration. Its
      thickness shrinks as the square root of concentration, which is where the characteristic
      square-root dependence comes from.
    turning_point_id: debye-huckel
  - term: Structural diffusion
    definition: >-
      A proton moves through water not by swimming but by rearranging hydrogen bonds — the charge hops
      from one molecule to the next while the atoms barely move. It is why protons conduct several times
      faster than any comparable ion.
    turning_point_id: grotthuss-proton-hopping

turning_points:
  - id: kohlrausch-ionic-conductivity
    date: 1869 – 1876
    type: TECHNIQUE-INVENTED
    title: Kohlrausch measures the ions separately
    description: >-
      Direct current electrolyses the solution it is meant to measure, so conductivity data were
      unreliable. Friedrich Kohlrausch uses alternating current with a telephone receiver as a null
      detector, which polarises nothing, and obtains conductivities good to a fraction of a per cent. The
      results show that each ion contributes a fixed amount independent of its partner, so the
      conductivity of any salt can be predicted by adding two tabulated numbers — strong evidence that
      the ions move independently.
    contested: false
    sources:
      - citation: "Kohlrausch, F. (1876). Über das Leitungsvermögen der in Wasser gelösten Elektrolyte. Göttinger Nachrichten: 213–224."
        url: null
      - citation: "Laidler, K. J. (1993). The World of Physical Chemistry. Oxford University Press, chapter 7."
        url: null

  - id: arrhenius-dissociation
    date: 1884 – 1887
    type: THEORY-REPLACED
    title: Arrhenius says the ions are already there
    description: >-
      Svante Arrhenius's doctoral thesis argues that an electrolyte dissociates into ions on dissolving,
      spontaneously, with the fraction dissociated rising towards completeness as the solution is diluted
      — and that the current moves pre-existing ions rather than creating them. The committee at Uppsala,
      unconvinced that charged fragments could exist in water without an applied field, passed it with
      the lowest grade that permitted a degree. Ostwald and van 't Hoff took it up immediately, and it
      became the foundation of solution chemistry.
    contested: false
    sources:
      - citation: "Arrhenius, S. (1887). Über die Dissoziation der in Wasser gelösten Stoffe. Zeitschrift für Physikalische Chemie 1: 631–648."
        url: null
      - citation: "Crawford, E. (1996). Arrhenius: From Ionic Theory to the Greenhouse Effect. Science History Publications."
        url: null

  - id: sorensen-ph
    date: 1909
    type: TECHNIQUE-INVENTED
    title: Sørensen's pH
    description: >-
      Søren Peder Lauritz Sørensen, studying enzymes at the Carlsberg laboratory, needs a compact way to
      state hydrogen ion concentrations that range over fourteen orders of magnitude, and introduces the
      exponent notation that became pH. The scale is logarithmic out of necessity, and it was defined
      operationally from the start — pH is what a particular electrochemical measurement gives, which
      matters because the quantity it approximates turns out not to be measurable in principle.
    contested: false
    sources:
      - citation: "Sørensen, S. P. L. (1909). Enzymstudien II: Über die Messung und die Bedeutung der Wasserstoffionenkonzentration bei enzymatischen Prozessen. Biochemische Zeitschrift 21: 131–304."
        url: null
      - citation: "Buck, R. P. et al. (2002). Measurement of pH: definition, standards, and procedures. Pure and Applied Chemistry 74: 2169–2200."
        url: null

  - id: debye-huckel
    date: "1923"
    type: MECHANISM-ESTABLISHED
    title: Debye and Hückel explain the deviations
    description: >-
      Arrhenius's theory predicts ideal behaviour and real solutions depart from it measurably even at
      millimolar concentrations. Peter Debye and Erich Hückel treat the problem statistically: each ion
      attracts a diffuse cloud of opposite charge, which screens its field and lowers its effective
      activity. Solving for the potential around an ion gives a correction proportional to the square
      root of the ionic strength — exactly the dependence that had been found empirically — and it is
      quantitatively right below about 0.01 molar and increasingly wrong above it.
    contested: false
    sources:
      - citation: "Debye, P. & Hückel, E. (1923). Zur Theorie der Elektrolyte. Physikalische Zeitschrift 24: 185–206."
        url: null
      - citation: "Kontogeorgis, G. M., Maribo-Mogensen, B. & Thomsen, K. (2018). The Debye–Hückel theory and its importance in modeling electrolyte solutions. Fluid Phase Equilibria 462: 130–152."
        url: null

  - id: bronsted-lowry-acids
    date: "1923"
    type: THEORY-REPLACED
    title: Acids as proton donors
    description: >-
      Arrhenius had defined an acid as a substance that releases hydrogen ions in water, which makes
      acidity a property of a compound and confines the concept to aqueous solution. Johannes Brønsted
      and Thomas Lowry, independently in the same year, redefine it as a relation: an acid gives a proton
      to a base, so every acid implies a conjugate base and the same substance may act either way
      depending on its partner. The definition extends to non-aqueous solvents and to the gas phase, and
      it makes acid strength a comparison rather than an absolute.
    contested: false
    sources:
      - citation: "Brønsted, J. N. (1923). Einige Bemerkungen über den Begriff der Säuren und Basen. Recueil des Travaux Chimiques des Pays-Bas 42: 718–728."
        url: null
      - citation: "Lowry, T. M. (1923). The uniqueness of hydrogen. Journal of the Society of Chemical Industry 42: 43–47."
        url: null

  - id: grotthuss-proton-hopping
    date: 1806 – 1995
    type: MECHANISM-ESTABLISHED
    title: Why a proton outruns every other ion
    description: >-
      Theodor Grotthuss suggested in 1806 that water molecules in a chain pass charge from one to the
      next, each handing on a hydrogen while barely moving. The idea was premature and roughly right. The
      hydrogen ion conducts five to seven times better than any comparable cation, which no account based
      on a hydrated particle pushing through water can explain, and simulations by Dominik Marx and
      Michele Parrinello in the 1990s showed the mechanism: the excess proton is shared between molecules
      and the identity of the charged species shifts as hydrogen bonds rearrange.
    contested: true
    contested_note: >-
      Which species predominates is still argued. The excess proton has been described as the Eigen
      cation, a hydronium with three tightly bound neighbours, and as the Zundel cation, a proton shared
      equally between two molecules; current simulations suggest a continuum of structures interconverting
      within picoseconds rather than one well-defined species. The hopping picture is agreed; the object
      that hops is not.
    sources:
      - citation: "Marx, D., Tuckerman, M. E., Hutter, J. & Parrinello, M. (1999). The nature of the hydrated excess proton in water. Nature 397: 601–604."
        url: null
      - citation: "Agmon, N. (1995). The Grotthuss mechanism. Chemical Physics Letters 244: 456–462."
        url: null

open_problems:
  - id: single-ion-activities
    name: Whether a single ion's activity means anything
    status: open
    status_note: Open as of 2026; pH is defined by convention because the quantity it reports is not independently measurable.
    description: >-
      Thermodynamics constrains the activity of an electrically neutral combination of ions and not that
      of one ion on its own, because adding a single charged species to a solution is not a process that
      can be carried out. Yet pH is defined as a function of the hydrogen ion activity alone. The
      quantity measured by a pH meter is therefore fixed by an agreed convention for splitting a
      measurable mean activity into single-ion parts, not by a measurement.
    why_hard: >-
      The obstacle is thermodynamic rather than technical: any experiment that changes the amount of one
      ion changes the electrical state of the whole solution, so the free energy attributable to that ion
      cannot be separated from the work done against the resulting potential. Proposed extra-thermodynamic
      assumptions each give slightly different single-ion activities, and none can be tested against the
      others.
    unlocks: >-
      pH underlies clinical chemistry, water treatment, soil science and most of biochemistry. Making the
      quantity determinate rather than conventional would remove a layer of agreed fiction from a number
      used billions of times a year.
    sources:
      - citation: "Buck, R. P. et al. (2002). Measurement of pH: definition, standards, and procedures. Pure and Applied Chemistry 74: 2169–2200."
        url: null
      - citation: "Malatesta, F. (2000). The impossibility of measuring individual ion activity coefficients. Journal of Solution Chemistry 29: 771–779."
        url: null

applications:
  - area: Physiology
    title: Gradients as stored energy
    description: >-
      A cell maintains ion concentrations across its membrane very far from equilibrium — roughly
      tenfold for sodium and thirtyfold for potassium — and the resulting electrochemical potential is
      what drives nerve signalling, nutrient transport and ATP synthesis. The Nernst arithmetic of these
      gradients is the quantitative core of electrophysiology, and the ion-selective electrode that
      measures them is a direct descendant of the pH meter.
    domain: biology
    field_id: electrophysiology
    sources:
      - citation: "Hille, B. (2001). Ion Channels of Excitable Membranes, 3rd edition. Sinauer."
        url: null
  - area: Water and soil
    title: Hardness, salinity and what plants can take up
    description: >-
      Ionic strength and pH decide which species are present and which precipitate: whether calcium stays
      in solution or forms scale, whether aluminium is mobile enough to poison roots, whether phosphate is
      available to a crop. Agricultural and water-treatment practice is applied ion chemistry, conducted
      in solutions concentrated enough that the activity coefficients must be fitted rather than
      predicted.
    sources:
      - citation: "Stumm, W. & Morgan, J. J. (1996). Aquatic Chemistry, 3rd edition. Wiley."
        url: null
  - area: Statistical physics
    title: Screening, and a length that recurs everywhere
    description: >-
      Debye and Hückel's result — that a charge in a sea of mobile charges is screened over a
      characteristic length that shrinks as the square root of concentration — turned out to be general.
      The same Debye length appears in plasma physics, in semiconductor junctions and in colloid
      stability, and the derivation is the same: solve for the potential around a charge in a medium whose
      mobile charges rearrange in response to it.
    domain: physics
    field_id: statistical-mechanics
    sources:
      - citation: "Debye, P. & Hückel, E. (1923). Zur Theorie der Elektrolyte. Physikalische Zeitschrift 24: 185–206."
        url: null
      - citation: "Israelachvili, J. N. (2011). Intermolecular and Surface Forces, 3rd edition. Academic Press."
        url: null

further_reading:
  - citation: "Robinson, R. A. & Stokes, R. H. (2002). Electrolyte Solutions, 2nd revised edition. Dover."
    url: null
    note: The classic reference on activities and conductivities, with the data the theories are tested against.
  - citation: "Crawford, E. (1996). Arrhenius: From Ionic Theory to the Greenhouse Effect. Science History Publications."
    url: null
    note: Including the thesis examination, and how the ionic theory was received.
  - citation: "Agmon, N. (1995). The Grotthuss mechanism. Chemical Physics Letters 244: 456–462."
    url: null
    note: A short review of why the proton is anomalous and what hops.
---

## Ions Before the Current

Faraday had named the travelling species and left its nature open. The consensus that followed held that the current itself splits the molecules as it passes — that ions are produced by electrolysis rather than present beforehand — which seemed necessary, since charged particles in water ought to attract each other and recombine.

{{fig:kohlrausch|Friedrich Kohlrausch}} supplied the first decisive evidence, and it came from improving a measurement. Conductivity had been measured with direct current, which electrolyses the solution under test and so changes it; Kohlrausch used alternating current and a telephone earpiece as a null detector, and got results good to a fraction of a per cent. The data showed something unexpected: each ion contributes a fixed amount to the conductivity, independent of its partner. Sodium contributes the same whether it arrives as the chloride, the nitrate or the sulfate. Conductivities could be predicted by adding two numbers from a table.

That is hard to explain if the ions are produced in pairs by the current, and easy if they are moving independently and were already there. {{fig:arrhenius|Svante Arrhenius}} argued exactly that in his 1884 thesis, adding that the fraction dissociated increases with dilution, which accounted for the longstanding puzzle that dilute solutions depress a freezing point as though they contained more particles than formula units. The Uppsala examiners gave the thesis the lowest passing grade. {{fig:ostwald|Ostwald}} read it, travelled to meet him, and the theory became the foundation of solution chemistry; Arrhenius took the 1903 Nobel Prize for it.

## Why the Theory Only Works When Dilute

Arrhenius's picture predicts that a dissolved salt behaves ideally, each ion independent. Measurements disagree measurably at a thousandth of a mole per litre, which is very dilute indeed.

{{fig:debye|Peter Debye}} and {{fig:huckel|Erich Hückel}} explained the deviation in 1923 by treating the problem statistically. An ion is not in a uniform medium: it attracts opposite charges and repels like ones, so it sits at the centre of a diffuse atmosphere carrying a slight net charge of the opposite sign. That atmosphere screens the ion, lowering its effective concentration — its activity — and it drags on the ion when it moves, lowering its conductivity.

Solving for the potential gives a characteristic screening distance, the Debye length, which shrinks as the square root of concentration, and hence the limiting law

$$
\log \gamma_{\pm} = -0.509\, z_{+}|z_{-}|\sqrt{I}
$$

for water at 25 °C, with $I$ the ionic strength. For 0.01 molar sodium chloride this gives $\log\gamma = -0.0509$, so $\gamma = 0.889$: ions behave as though eleven per cent of them were absent. At 0.1 molar the prediction is $\gamma = 0.69$ and the measured value is about 0.78, so the theory has gone wrong by the second figure. At one molar it is useless.

The result is therefore exact in a limit nothing of interest occupies, which is the frustration recorded under [chemical thermodynamics](/chemistry/chemical-thermodynamics/) as an open problem. Its compensation is unexpected generality: the same screening argument, with electrons or ions as the mobile charges, gives the Debye length of a plasma, the depletion width of a semiconductor junction and the range of the forces that keep a colloid from flocculating.

## A Closer Look: The Ion That Moves Too Fast

One entry in Kohlrausch's tables took nearly a century to explain, and the anomaly is visible at a glance. Limiting molar conductivities in water at 25 °C, in S cm² mol⁻¹:

| Cation | Conductivity | Anion | Conductivity |
|---|---|---|---|
| H⁺ | **349.8** | OH⁻ | **198.0** |
| Li⁺ | 38.7 | F⁻ | 55.4 |
| Na⁺ | 50.1 | Cl⁻ | 76.3 |
| K⁺ | 73.5 | Br⁻ | 78.1 |
| Cs⁺ | 77.3 | NO₃⁻ | 71.4 |

The ordinary cations behave sensibly. Lithium, the smallest, is the *slowest*, because a small ion holds its shell of water molecules tightly and must drag them along; caesium, large and weakly hydrated, moves fastest. The trend is explicable by Stokes' law applied to a hydrated sphere.

Then there is the hydrogen ion, five to seven times faster than any of them. A bare proton does not exist in water — it is bound to a water molecule as $\mathrm{H_3O^+}$, which is about the size of a sodium ion with its shell and ought to move like one. Hydroxide is anomalous in the same way, by a factor of about three.

A quick estimate shows how large the discrepancy is. Taking sodium's 50.1 as the expected value for a comparable hydrated species, the proton's 349.8 is a factor of **7.0** too high. In terms of the diffusion coefficient, the proton would have to be about seven times smaller than a water molecule to move that fast while pushing through water, which is impossible.

{{fig:grotthuss|Theodor Grotthuss}} had the resolution in 1806, before anything else in this chapter existed. The charge moves without the atoms moving far. Picture a chain of water molecules linked by hydrogen bonds: the molecule at one end gives up a proton to its neighbour, which gives up one of its own to the next, and so on. Each atom shifts by a fraction of an ångström while the *charge* travels the length of the chain. Nothing has to be dragged through the liquid.

Simulations in the 1990s by {{fig:marx|Dominik Marx}} and {{fig:parrinello|Michele Parrinello}} showed the mechanism in detail, and also why the question of what exactly hops has stayed open. The excess proton is sometimes centred on one molecule with three neighbours attached, sometimes shared equally between two, and the structures interconvert within picoseconds — so the species is a continuum rather than one of the two canonical ions that textbooks name. The hopping is agreed; the hopper is not.

The same mechanism is why a pH electrode responds in seconds, why acid-catalysed reactions proceed as fast as they do, and why proton transport in a fuel-cell membrane can approach that in water. It is also a case where an 1806 hypothesis, abandoned as unfounded, turned out to be the right picture.

## Acidity as a Relation

One conceptual tidying belongs here. Arrhenius's definition — an acid releases hydrogen ions in water — makes acidity a property a substance has, and works only in water. {{fig:bronsted|Johannes Brønsted}} and {{fig:lowry|Thomas Lowry}}, independently in 1923, redefined it as a transfer: an acid donates a proton to a base. Acidity becomes a relation between a pair, every acid has a conjugate base, and the same substance can act as either depending on what it meets — water being the standard example, since it both donates and accepts.

The practical scale, meanwhile, had already been fixed by {{fig:sorensen|Søren Sørensen}} in 1909, working on enzymes at the Carlsberg brewery's laboratory and needing to record hydrogen ion concentrations spanning fourteen orders of magnitude. He defined the logarithmic exponent that became pH, and defined it operationally — as what a particular electrochemical measurement yields. That caution was better judged than he can have known: the quantity pH purports to report, the activity of a single ionic species, turns out not to be thermodynamically measurable at all, which is the open problem above.
