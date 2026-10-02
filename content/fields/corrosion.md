---
id: corrosion
domain: chemistry
thread: electrochemistry
name: Corrosion
parent_ids:
  - electrode-potentials
era_emerged: 1763 – 1960
core_question: Why do some metals destroy themselves in ordinary water and others coat themselves in a film and survive?

summary: |-
  Corrosion is a battery nobody wanted. Where two different metals touch in the presence of moisture, or where one metal has regions that differ slightly, the arrangement is a short-circuited cell: one region oxidises and dissolves, the other consumes the electrons. The Royal Navy discovered this in 1763 by sheathing a frigate's hull in copper to keep off worms and finding that the iron nails holding the sheathing on had dissolved. Humphry Davy, asked to explain it, got the mechanism right and proposed the cure that is still used — attach a block of a metal that corrodes more readily, and let it be consumed instead.

  The puzzling part is not that metals corrode but that some stop. Aluminium is thermodynamically far more reactive than iron and survives in air and water indefinitely, because its oxide forms a dense film that seals the surface; iron's oxide occupies more than twice the volume of the metal it came from, so it cracks and flakes and exposes fresh metal. That difference can be computed from densities and molar masses alone, which is the nearest thing this field has to a predictive law — and it is far from sufficient, because the failures that matter are local: a pit, a crevice, a crack, where a small area corrodes fast while the rest of the surface looks perfect.

key_ideas:
  - term: Galvanic couple
    definition: >-
      Two metals in electrical contact in an electrolyte form a cell in which the less noble one
      dissolves. The rate depends on the area ratio, so a small anode joined to a large cathode — iron
      nails in a copper hull — fails fast.
    turning_point_id: davy-sacrificial-anodes
  - term: Sacrificial protection
    definition: >-
      Deliberately attaching a metal that corrodes more readily, so that it is consumed and the structure
      is not. Zinc on steel, as a block or as a galvanised coating, is the standard case.
    turning_point_id: davy-sacrificial-anodes
  - term: Passivation
    definition: >-
      Formation of a thin, adherent oxide that blocks further reaction, so that a reactive metal behaves
      as an inert one. It is why aluminium, titanium, chromium and stainless steel survive, and it fails
      locally rather than uniformly.
    turning_point_id: faraday-passivation
  - term: Pilling–Bedworth ratio
    definition: >-
      The volume of oxide formed divided by the volume of metal consumed. Below one the film cannot cover
      the surface; far above one it is in compression and spalls; between about one and two it protects.
    turning_point_id: pilling-bedworth-ratio
  - term: Local cell
    definition: >-
      Corrosion of a single metal proceeds by separating into anodic and cathodic regions micrometres
      apart, driven by differences in composition, stress, oxygen access or surface film. The current
      flows within the metal, and the attack is therefore uneven.
    turning_point_id: evans-corrosion-cells
  - term: Localised attack
    definition: >-
      Pitting, crevice corrosion and stress-corrosion cracking, in which a tiny area dissolves rapidly
      inside a self-sustaining local chemistry while the surrounding surface remains passive. Most
      structural failures by corrosion are of this kind, and they are the hardest to predict.
    turning_point_id: localised-corrosion

turning_points:
  - id: davy-sacrificial-anodes
    date: 1763 – 1824
    type: MECHANISM-ESTABLISHED
    title: Copper hulls and iron nails
    description: >-
      The Royal Navy sheathes HMS *Alarm*'s hull in copper in 1763 to stop shipworm, and the iron nails
      holding the copper on are found to have dissolved — the first recorded galvanic corrosion, and an
      expensive one. Sixty years later the Admiralty asks Humphry Davy, who identifies the cause as an
      electrical couple between the two metals and proposes attaching blocks of zinc or iron to be
      consumed instead. The chemistry worked and the practice failed at first: protected copper stopped
      releasing the copper ions that had been killing the worms, and the hulls fouled.
    contested: false
    sources:
      - citation: "Davy, H. (1824). On the corrosion of copper sheeting by sea water, and on methods of preventing this effect. Philosophical Transactions of the Royal Society 114: 151–158."
        url: null
      - citation: "Harris, L. A. (1998). Davy's sacrificial protection of copper-sheathed hulls. Journal of Chemical Education 75: 1377."
        url: null

  - id: faraday-passivation
    date: 1836 – 1840
    type: MECHANISM-ESTABLISHED
    title: Iron that will not dissolve
    description: >-
      Iron dipped in concentrated nitric acid, which ought to destroy it, is attacked briefly and then
      stops; the same iron in dilute acid dissolves vigorously. Michael Faraday and Christian Schönbein
      investigate what Schönbein named passivity, and conclude that the strong acid forms a thin adherent
      film which the dilute acid does not. The explanation was disputed for a century, with a rival
      account positing an altered state of the metal rather than a film, and the film won.
    contested: false
    sources:
      - citation: "Faraday, M. (1840). Experimental researches in electricity, seventeenth series. Philosophical Transactions of the Royal Society 130: 93–127."
        url: null
      - citation: "Uhlig, H. H. (1978). Passivity in metals and alloys. Corrosion Science 19: 777–791."
        url: null

  - id: stainless-steel-chromium
    date: 1904 – 1913
    type: SUBSTANCE-ISOLATED
    title: Chromium makes steel passive
    description: >-
      Several workers — Léon Guillet and Albert Portevin in France, Philip Monnartz in Germany, Harry
      Brearley in Sheffield — find that steels containing more than about twelve per cent chromium resist
      acids and do not rust. Monnartz identifies the threshold and attributes it to passivation; Brearley,
      looking for an erosion-resistant gun-barrel steel, notices that his rejected samples will not etch
      and that cutlery made from them does not stain. The film responsible is a few nanometres of
      chromium-rich oxide, and it reforms when scratched.
    contested: true
    contested_note: >-
      Priority for stainless steel is divided and was commercially contested. Monnartz published the
      systematic chromium threshold and the passivation explanation in 1911; Brearley made and marketed
      cutlery and is popularly credited; Guillet and Portevin had described chromium steels earlier
      without noting the corrosion behaviour, and Elwood Haynes filed in America. There is no single
      inventor, and the national accounts differ.
    sources:
      - citation: "Monnartz, P. (1911). Beitrag zum Studium der Eisen-Chromlegierungen unter besonderer Berücksichtigung der Säurebeständigkeit. Metallurgie 8: 161–176."
        url: null
      - citation: "Cobb, H. M. (2010). The History of Stainless Steel. ASM International."
        url: null

  - id: pilling-bedworth-ratio
    date: "1923"
    type: MECHANISM-ESTABLISHED
    title: A ratio that predicts whether an oxide protects
    description: >-
      Norman Pilling and Richard Bedworth, studying how metals oxidise in hot gas, propose that the
      decisive quantity is the volume of oxide produced divided by the volume of metal consumed. Below one,
      the oxide cannot cover the surface and the metal continues to oxidise freely. Far above two, the
      film is in compression and cracks away. Between about one and two it covers and adheres, and the
      metal protects itself. The ratio is computed from molar masses and densities, with no experiment.
    contested: false
    sources:
      - citation: "Pilling, N. B. & Bedworth, R. E. (1923). The oxidation of metals at high temperatures. Journal of the Institute of Metals 29: 529–582."
        url: null
      - citation: "Birks, N., Meier, G. H. & Pettit, F. S. (2006). Introduction to the High-Temperature Oxidation of Metals, 2nd edition. Cambridge University Press."
        url: null

  - id: evans-corrosion-cells
    date: 1923 – 1948
    type: MECHANISM-ESTABLISHED
    title: Evans shows corrosion is a circuit
    description: >-
      Ulick Evans demonstrates that a single piece of metal corroding in water is operating as a cell with
      anodic and cathodic areas on its own surface, and measures the current flowing between them. A drop
      of salt solution on steel, with an indicator added, shows the pattern directly: iron dissolves at the
      centre where oxygen is scarce and oxygen is reduced at the rim where it is plentiful, with rust
      forming in a ring between. Corrosion became an electrochemical measurement rather than a
      description of damage.
    contested: false
    sources:
      - citation: "Evans, U. R. (1948). Metallic Corrosion, Passivity and Protection, 2nd edition. Edward Arnold."
        url: null
      - citation: "Evans, U. R. & Hoar, T. P. (1932). The velocity of corrosion from the electrochemical standpoint. Proceedings of the Royal Society A 137: 343–365."
        url: null

  - id: localised-corrosion
    date: 1930 – 1960
    type: MECHANISM-ESTABLISHED
    title: Why a passive surface fails at one point
    description: >-
      Stainless steel in seawater does not rust generally; it develops pits a fraction of a millimetre
      across that bore inward at millimetres per year. The mechanism is self-sustaining: chloride breaks
      the film locally, the metal inside the pit dissolves, hydrolysis makes the trapped solution acidic,
      and the acidity prevents the film from reforming, while the whole passive surface outside acts as
      the cathode. Crevice corrosion and stress-corrosion cracking follow the same logic in a gap or at a
      crack tip.
    contested: false
    sources:
      - citation: "Fontana, M. G. & Greene, N. D. (1967). Corrosion Engineering. McGraw-Hill."
        url: null
      - citation: "Frankel, G. S. (1998). Pitting corrosion of metals: a review of the critical factors. Journal of the Electrochemical Society 145: 2186–2198."
        url: null

open_problems:
  - id: predicting-localised-corrosion
    name: Predicting when and where a pit will start
    status: open
    status_note: Open as of 2026; design still relies on empirical tables, accelerated tests and margins.
    description: >-
      General corrosion rates can be measured and extrapolated. Localised attack cannot: pitting
      initiation is a stochastic event depending on an inclusion, a scratch, a local chloride
      concentration or a fluctuation in the passive film, and a component may sit for years before the
      first pit forms and then fail in months. Stress-corrosion cracking is worse, since it needs a
      coincidence of alloy, environment and stress that laboratory tests reproduce unreliably.
    why_hard: >-
      The initiating events are rare, microscopic and buried under a film a few nanometres thick, so
      there is little to measure before failure begins. The statistics are extreme-value rather than
      average — what matters is the worst site on a structure, not the typical one — and accelerated tests
      change the mechanism they are meant to accelerate.
    unlocks: >-
      Corrosion costs an estimated 3 to 4% of world GDP, and the predictions that matter most are the
      longest: a geological repository for nuclear waste requires canisters to survive for thousands of
      years, which no test can demonstrate and only a mechanism could justify.
    sources:
      - citation: "Koch, G. et al. (2016). International Measures of Prevention, Application, and Economics of Corrosion Technologies Study. NACE International."
        url: null
      - citation: "Macdonald, D. D. (2011). The history of the point defect model for the passive state. Electrochimica Acta 56: 1761–1772."
        url: null

applications:
  - area: Infrastructure
    title: Cathodic protection, and why concrete holds steel
    description: >-
      Pipelines, ship hulls, harbour piles and storage tanks are protected by attaching sacrificial anodes
      or by driving a small current from an inert electrode, which holds the structure at a potential where
      iron does not dissolve — Davy's remedy, applied by the kilometre. Reinforced concrete protects its
      steel differently: the pore water is strongly alkaline, which is the one region of iron's
      potential–pH map where it passivates, and corrosion begins when carbonation or chloride destroys
      that alkalinity.
    sources:
      - citation: "Bertolini, L., Elsener, B., Pedeferri, P. & Polder, R. (2013). Corrosion of Steel in Concrete, 2nd edition. Wiley-VCH."
        url: null
  - area: Economics
    title: A few per cent of everything
    description: >-
      Corrosion's direct and indirect cost has been estimated at 3 to 4% of global GDP — of the order of
      two and a half trillion dollars a year — most of it not dramatic failures but replacement,
      overdesign, coatings and inspection. It is one of the few scientific subjects whose central
      quantity is a fraction of world output, and the estimate is used to argue for the inspection
      budgets that prevent the dramatic failures.
    sources:
      - citation: "Koch, G. et al. (2016). International Measures of Prevention, Application, and Economics of Corrosion Technologies Study. NACE International."
        url: null
  - area: Archaeology and conservation
    title: Metal objects that have survived, and why
    description: >-
      Whether a buried artefact survives depends on the electrochemistry of its surroundings: iron
      dissolves in aerated soil and persists in waterlogged anaerobic ground, bronze acquires a protective
      patina, and raising a shipwreck exposes iron that has been stable for centuries to oxygen and
      destroys it within months. Conservation is the deliberate control of a corrosion cell, often by
      electrochemical reduction of the corrosion products.
    sources:
      - citation: "Selwyn, L. (2004). Metals and Corrosion: A Handbook for the Conservation Professional. Canadian Conservation Institute."
        url: null

further_reading:
  - citation: "Evans, U. R. (1948). Metallic Corrosion, Passivity and Protection, 2nd edition. Edward Arnold."
    url: null
    note: The book that made corrosion an electrochemical science; the drop experiments are worth reading in the original.
  - citation: "Fontana, M. G. (1986). Corrosion Engineering, 3rd edition. McGraw-Hill."
    url: null
    note: The practitioner's text, organised by the eight forms of corrosion it distinguishes.
  - citation: "Frankel, G. S. (1998). Pitting corrosion of metals. Journal of the Electrochemical Society 145: 2186–2198."
    url: null
    note: Why localised attack is hard to predict, by someone who has spent a career on it.
---

## A Cell Nobody Wanted

In 1763 the Royal Navy sheathed the hull of HMS *Alarm* in copper, to stop shipworm boring into the timber. It worked. When the ship was examined, the iron nails holding the copper on had largely dissolved, and the sheathing was in danger of falling off.

Sixty years later the Admiralty asked {{fig:davy|Humphry Davy}} what was happening. His answer was correct and is the foundation of the subject: copper and iron in contact in seawater constitute an electrical cell, and the iron, being the less noble metal, is the one that dissolves. The cure follows from the diagnosis. Attach to the copper a block of some metal still less noble — zinc, or iron itself — and that block will be consumed while the copper, and anything coupled to it, is protected.

Davy's remedy is used today on every ship, pipeline and harbour pile in the world. Its first trial was a failure of a kind worth recording. Protected copper no longer releases copper ions into the water, and it was the copper ions that had been poisoning the shipworm. The Navy got hulls that did not corrode and did foul, and went back to unprotected copper.

What made the subject quantitative was {{fig:ulick-evans|Ulick Evans}}'s demonstration, a century later, that a *single* metal corroding behaves the same way. Put a drop of salt solution containing an indicator on a clean steel plate and watch: the centre of the drop, where oxygen cannot reach, turns blue as iron dissolves, the rim turns pink as oxygen is reduced, and rust forms in a ring between them. The metal has separated itself into anode and cathode millimetres apart, and the current flowing between them can be measured. Corrosion became electrochemistry rather than description, with a rate in amperes.

## Eight Ways Metal Fails

Corrosion engineering classifies failures by *form* rather than by metal, because the form determines what will stop it. The conventional list is eight, and the distinctions are practical.

**Uniform attack** removes metal evenly. It is the least dangerous kind, because it can be measured, extrapolated and allowed for as a corrosion allowance in the wall thickness.

**Galvanic corrosion** is the two-metal couple Davy diagnosed, and its severity depends on the ratio of areas: a small anode joined to a large cathode concentrates all the dissolution into a small place. Steel bolts in a copper plate fail; copper bolts in a steel plate do not.

**Pitting** and **crevice corrosion** are the self-sustaining local attacks described above, the first starting at a flaw in a passive film and the second in any gap where solution stagnates — under a washer, a gasket, a barnacle.

**Intergranular corrosion** follows grain boundaries, and the classic case is a welded stainless steel in which chromium carbides have precipitated at the boundaries during cooling, leaving the adjacent metal depleted in chromium and so unable to passivate. The weld looks sound and falls apart along the lines beside it.

**Selective leaching** removes one component of an alloy — zinc from brass, leaving a porous copper skeleton with the original shape and almost no strength.

**Erosion corrosion** is mechanical removal of the protective film by flow, which is why a pipe fails at the elbows and a pump at the impeller tips.

**Stress-corrosion cracking** needs a tensile stress, a specific environment and a susceptible alloy together; given all three, cracks grow through the metal with almost no general corrosion and no warning. Stainless steel in hot chloride and brass in ammonia are the standard pairs.

**Hydrogen embrittlement**, often counted with it, is hydrogen generated by the cathodic reaction diffusing into the steel and making it brittle — which is how cathodic protection, applied too aggressively, can destroy the thing it protects.

The list's value is diagnostic. A failed component's appearance identifies the form, the form identifies the mechanism, and the mechanism dictates the remedy — change the alloy, break the couple, eliminate the crevice, relieve the stress, or reduce the flow.

## A Closer Look: Why Aluminium Survives and Iron Does Not

Thermodynamics says aluminium should be destroyed. Its standard potential is $-1.66$ V against iron's $-0.44$, so it is far more eager to oxidise — and aluminium window frames last decades in the rain while an iron equivalent would be gone. The explanation is not in the thermodynamics but in the oxide, and the decisive quantity can be calculated without any experiment.

{{fig:pilling|Norman Pilling}} and {{fig:bedworth|Richard Bedworth}}'s ratio is the volume of oxide formed divided by the volume of metal consumed:

$$
\mathrm{PBR} = \frac{M_{\text{oxide}}\,\rho_{\text{metal}}}{n\,M_{\text{metal}}\,\rho_{\text{oxide}}},
$$

where $n$ is the number of metal atoms in the oxide formula. Work through three metals.

**Aluminium**, forming $\mathrm{Al_2O_3}$: $M_{\text{oxide}} = 101.96$, $\rho_{\text{oxide}} = 3.95$, $M = 26.98$, $\rho = 2.70$, $n = 2$:

$$
\mathrm{PBR} = \frac{101.96 \times 2.70}{2 \times 26.98 \times 3.95} = \frac{275.3}{213.1} = 1.29.
$$

**Magnesium**, forming $\mathrm{MgO}$: $40.30$, $3.58$, $24.31$, $1.74$, $n = 1$:

$$
\mathrm{PBR} = \frac{40.30 \times 1.74}{24.31 \times 3.58} = \frac{70.1}{87.0} = 0.81.
$$

**Iron**, forming $\mathrm{Fe_2O_3}$: $159.69$, $5.24$, $55.85$, $7.87$, $n = 2$:

$$
\mathrm{PBR} = \frac{159.69 \times 7.87}{2 \times 55.85 \times 5.24} = \frac{1256.7}{585.3} = 2.15.
$$

Now read the three numbers.

Aluminium's 1.29 is in the protective range. The oxide occupies slightly more space than the metal it replaced, so it covers the surface completely and sits in mild compression — enough to seal, not enough to buckle. The film is 2 to 4 nm thick, it forms within milliseconds of exposure to air, and if scratched it reforms instantly. Everything useful about aluminium follows from that one number being a little above one.

Magnesium's 0.81 is below one: there is *not enough oxide to cover the metal*. The film is porous by necessity, oxygen reaches the surface through it, and oxidation continues without limit. Magnesium alloys must be coated or they corrode steadily, and magnesium burns.

Iron's 2.15 is too large. The oxide occupies more than twice the volume of the metal consumed, so it grows in compression, buckles, cracks and flakes away, exposing fresh metal to repeat the process. Rust is not a protective film; it is a film that keeps failing, which is why iron corrodes to destruction while aluminium stops.

The ratio is a necessary condition and nothing like a sufficient one — it says nothing about whether the oxide conducts ions, adheres, or survives chloride — and it is the only predictive law in the subject that needs no measurement at all. Stainless steel is the ratio exploited deliberately: add more than about 12% chromium to iron and the film that forms is chromium-rich, with a ratio near 2.0 and, crucially, adherent, so the alloy passivates where the iron alone does not.

**Where the calculation stops being useful.** Everything above concerns *uniform* attack, and uniform attack is rarely what destroys a structure. Stainless steel in seawater does not rust generally; it pits. A chloride ion breaks the film at one point, the metal inside dissolves, the trapped solution becomes acidic by hydrolysis, and the acidity prevents the film from reforming — while the entire passive surface outside serves as the cathode feeding the reaction. A pit a tenth of a millimetre across, with square metres of cathode behind it, can bore through a plate in a year while the plate looks new. That asymmetry of areas, which Davy had identified in the iron nails, is what makes localised corrosion the hardest thing in the field to predict, and the open problem above.

## What It Costs

Two numbers give the scale. Corrosion's direct and indirect cost has been estimated at 3 to 4% of global GDP — of the order of two and a half trillion dollars a year — of which the large majority is not spectacular failure but replacement, inspection, coatings and metal used in excess of what strength requires.

And the longest prediction anyone has been asked for: a geological repository for high-level nuclear waste requires its canisters to resist corrosion for thousands of years, in groundwater whose chemistry will change over that period. No accelerated test can demonstrate it, since accelerating a corrosion test tends to change the mechanism. Only a mechanistic model could justify such a claim, and the mechanism of passive film breakdown — the thing that would have to be modelled — is exactly what remains unsettled.
