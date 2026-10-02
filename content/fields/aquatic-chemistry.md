---
id: aquatic-chemistry
domain: chemistry
thread: environment
name: Aquatic Chemistry
parent_ids:
  - electrolyte-theory
  - geochemistry
era_emerged: 1957 – 2020
core_question: What fixes the composition of natural water, and why does the ocean's acidity barely move when the atmosphere's carbon dioxide rises — until it does?

summary: |-
  Seawater is not simply salty water. It is a buffered solution whose acidity is held within about a tenth of a pH unit over the whole ocean, and the thing holding it is the carbonate system: dissolved carbon dioxide, bicarbonate and carbonate in equilibrium with each other and with the calcium carbonate of shells and sediments. Roger Revelle and Hans Suess asked in 1957 how much of the carbon dioxide being added to the atmosphere this system would take up, and the answer turned out to be the most consequential number in the field.

  The buffer makes the ocean absorb about twenty times more carbon dioxide than plain dissolution would. It also stops well short of absorbing all of it, because the reaction consumes carbonate ion and there is a limited supply — so a one per cent increase in the ocean's total carbon requires a ten per cent increase in the pressure of carbon dioxide above it. That factor of ten is why carbon dioxide accumulates in the air rather than vanishing into the sea, and it is the reason the Keeling curve exists to be measured.

  The same reaction says what the cost is. Carbon dioxide is taken up by converting carbonate into bicarbonate — which means the ocean absorbs the gas by spending the ion that shells are built from. Surface ocean pH has fallen by about 0.1 units since the industrial revolution, a 26 per cent rise in hydrogen ion concentration, and the carbonate ion concentration has fallen by roughly a sixth. Both numbers follow from one equation, and the second is the one that matters to anything with a shell.

key_ideas:
  - term: Total alkalinity
    definition: >-
      The charge balance of the weak-acid anions in a water sample, which is unchanged by adding or removing
      carbon dioxide. Because it is conserved under the reaction of interest, it is the right master variable:
      fix alkalinity and any one other carbonate quantity, and the whole system is determined.
    turning_point_id: stumm-morgan-aquatic-chemistry
  - term: Revelle factor
    definition: >-
      The fractional change in the partial pressure of carbon dioxide produced by a given fractional change in
      the water's total dissolved carbon. About ten in modern surface water, and rising as carbon accumulates,
      so the ocean becomes a less efficient sink the more it absorbs.
    turning_point_id: revelle-suess-buffer-factor
  - term: Saturation state
    definition: >-
      The product of the calcium and carbonate ion concentrations divided by the solubility product of the
      mineral, written $\Omega$. Above one a shell is stable, below one it dissolves, and the depth at which
      the transition occurs moves upward as carbon dioxide is absorbed.
    turning_point_id: ocean-acidification-quantified
  - term: Redox ladder
    definition: >-
      The sequence in which oxidants are consumed as organic matter is respired: oxygen, then nitrate, then
      manganese and iron oxides, then sulphate, then carbon dioxide. The order is the order of free energy
      yield, and it appears as visible layers in a sediment core.
    turning_point_id: redox-zonation-in-sediments
  - term: Surface complexation
    definition: >-
      Binding of a dissolved ion to the hydroxyl groups on a particle's surface, treated as a chemical
      equilibrium with its own constant. It is why most of a trace metal in a river is on the suspended solids
      rather than in solution, and why a change of pH releases it.
    turning_point_id: stumm-morgan-aquatic-chemistry
  - term: Limitation by a trace metal
    definition: >-
      A nutrient present at parts per trillion can limit productivity as effectively as one present at parts
      per million. Iron is insoluble in oxygenated seawater, arrives mostly as windblown dust, and leaves large
      regions of the ocean with unused nitrate and phosphate.
    turning_point_id: martin-iron-limitation

turning_points:
  - id: revelle-suess-buffer-factor
    date: "1957"
    type: MECHANISM-ESTABLISHED
    title: Why the ocean does not simply absorb it
    description: >-
      Roger Revelle and Hans Suess calculate how the ocean will respond to carbon dioxide added to the
      atmosphere, and find that the simple expectation — a vast solvent swallowing the emissions — is wrong in
      two ways. The carbonate buffer means that a given fractional increase in the ocean's dissolved carbon
      requires a roughly tenfold larger fractional increase in the gas pressure above it, so the sea's capacity
      is a tenth of what an unbuffered solution would offer. And only the surface layer is in contact with the
      air, with mixing to depth taking centuries. The conclusion, that the atmospheric concentration must rise
      measurably, is what prompted the measurements that became the
      [Keeling curve](/biology/ecosystem-ecology/).
    contested: false
    sources:
      - citation: "Revelle, R. & Suess, H. E. (1957). Carbon dioxide exchange between atmosphere and ocean. Tellus 9: 18–27."
        url: null
      - citation: "Sabine, C. L. et al. (2004). The oceanic sink for anthropogenic CO₂. Science 305: 367–371."
        url: null

  - id: sillen-ocean-equilibrium
    date: 1961 – 1967
    type: THEORY-REPLACED
    title: Treating the sea as a chemical equilibrium
    description: >-
      Lars Gunnar Sillén argues that the composition of seawater should be calculated rather than merely
      measured: if the ocean, its sediments and the atmosphere are near equilibrium, then the concentrations
      follow from the solubility products and association constants of the minerals present. The strong version
      is wrong — biology and the slowness of silicate reactions both matter — but the move was decisive, because
      it made the composition of the ocean a quantity requiring explanation rather than a table of
      observations, and it displaced the view that seawater is whatever the rivers happen to have delivered.
    contested: true
    contested_note: >-
      How close the ocean is to equilibrium with its sediments remains argued. Sillén's calculations work well
      for the carbonate system and poorly for silicate and clay reactions, which are kinetically limited; the
      competing account gives the controlling role to the rates of reaction at the sediment surface rather than
      to equilibrium.
    sources:
      - citation: "Sillén, L. G. (1961). The physical chemistry of sea water. In Oceanography, AAAS Publication 67: 549–581."
        url: null
      - citation: "Mackenzie, F. T. & Garrels, R. M. (1966). Chemical mass balance between rivers and oceans. American Journal of Science 264: 507–525."
        url: null

  - id: stumm-morgan-aquatic-chemistry
    date: 1970 – 1981
    type: TECHNIQUE-INVENTED
    title: A method for calculating what is in the water
    description: >-
      Werner Stumm and James Morgan assemble equilibrium chemistry, acid–base and redox systematics,
      coordination chemistry and the behaviour of particle surfaces into a single apparatus for natural waters.
      The characteristic tools are the conservative master variable — alkalinity, which carbon dioxide cannot
      change — and the logarithmic concentration diagram, on which the dominant species at any pH can be read
      off directly. Their treatment of surface complexation, binding to the hydroxyl groups of a suspended
      particle as an equilibrium with its own constant, explained why most trace metal in a river is on the
      solids.
    contested: false
    sources:
      - citation: "Stumm, W. & Morgan, J. J. (1970). Aquatic Chemistry. Wiley-Interscience."
        url: null
      - citation: "Stumm, W. (1992). Chemistry of the Solid–Water Interface. Wiley."
        url: null

  - id: redox-zonation-in-sediments
    date: 1979 – 1990
    type: MECHANISM-ESTABLISHED
    title: Thermodynamics visible as layers in mud
    description: >-
      Philip Froelich and colleagues analyse pore waters down a sediment core and find the oxidants consumed
      in a strict sequence: oxygen first, then nitrate, then manganese oxides, then iron oxides, then sulphate,
      and finally carbon dioxide to methane. The order is the order of free energy released per electron
      transferred, so a thermodynamic table appears as a stack of coloured bands a few centimetres thick. Each
      zone has its own chemistry and its own microbial community, and the position of the boundaries records
      how much organic matter is arriving from above.
    contested: false
    sources:
      - citation: "Froelich, P. N. et al. (1979). Early oxidation of organic matter in pelagic sediments of the eastern equatorial Atlantic. Geochimica et Cosmochimica Acta 43: 1075–1090."
        url: null
      - citation: "Canfield, D. E. & Thamdrup, B. (2009). Towards a consistent classification scheme for geochemical environments. Geobiology 7: 385–392."
        url: null

  - id: martin-iron-limitation
    date: 1988 – 2004
    type: MECHANISM-ESTABLISHED
    title: An ocean short of a metal present at parts per trillion
    description: >-
      Large regions of the ocean carry unused nitrate and phosphate, which should not happen if the major
      nutrients limit growth. John Martin, using the contamination-free methods developed for lead, shows that
      dissolved iron in those regions is present at a fraction of a nanomole per litre — iron is almost
      insoluble in oxygenated seawater and arrives mainly as windblown dust, so the open ocean far from deserts
      is starved of it. The hypothesis was tested by deliberately fertilising patches of open ocean with iron
      sulphate, and the plankton bloomed as predicted, which is among the few controlled experiments ever
      performed on an ocean.
    contested: true
    contested_note: >-
      That iron limits productivity in these regions is established. Whether iron fertilisation removes carbon
      to the deep ocean durably is not: the blooms were reproducible, the export of carbon below the mixed
      layer was small, variable and hard to measure, and the side effects on nutrient supply downstream are
      disputed.
    sources:
      - citation: "Martin, J. H. (1990). Glacial–interglacial CO₂ change: the iron hypothesis. Paleoceanography 5: 1–13."
        url: null
      - citation: "Boyd, P. W. et al. (2007). Mesoscale iron enrichment experiments 1993–2005. Science 315: 612–617."
        url: null

  - id: ocean-acidification-quantified
    date: 1999 – 2015
    type: MECHANISM-ESTABLISHED
    title: The other half of the carbon sink
    description: >-
      Ken Caldeira and Michael Wickett compute the pH change the ocean will undergo as it absorbs fossil carbon,
      and find a shift larger and faster than anything in the geological record that can be resolved. The
      measured change by then was already about 0.1 pH units since pre-industrial times — a 26 per cent increase
      in hydrogen ion concentration — and the carbonate ion concentration had fallen by roughly a sixth. Richard
      Feely and colleagues then mapped the depth at which calcium carbonate begins to dissolve and showed it
      rising towards the surface. The ocean's service as a carbon sink and the dissolution of shells are the same
      reaction.
    contested: false
    sources:
      - citation: "Caldeira, K. & Wickett, M. E. (2003). Anthropogenic carbon and ocean pH. Nature 425: 365."
        url: https://doi.org/10.1038/425365a
      - citation: "Feely, R. A. et al. (2004). Impact of anthropogenic CO₂ on the CaCO₃ system in the oceans. Science 305: 362–366."
        url: null

open_problems:
  - id: ocean-alkalinity-budget
    name: The alkalinity budget does not close
    status: open
    status_note: Open as of 2026; river, sediment and carbonate-production terms disagree, and the discrepancy is of the same size as proposed interventions.
    description: >-
      Alkalinity enters the ocean from weathering delivered by rivers and leaves when carbonate is buried, and
      the two are supposed to balance over tens of thousands of years. The measured terms do not balance: the
      production and dissolution of carbonate in the upper ocean, the contribution of dissolution above the
      saturation horizon, and the alkalinity released from sediments are each uncertain by a large fraction.
      This now matters practically, because the proposal to remove carbon dioxide by adding alkali to the sea
      requires measuring an addition smaller than the existing uncertainty.
    why_hard: >-
      Alkalinity must be measured to a few parts in ten thousand to see a signal against a background of 2,300
      microequivalents per kilogram, over an ocean that mixes on century timescales. The carbonate produced by
      organisms is partly dissolved again within the water column by processes that leave no distinctive trace,
      so the gross fluxes cannot be separated from the net.
    unlocks: >-
      Whether ocean alkalinity enhancement can be verified well enough to be paid for, how fast the ocean will
      neutralise the carbon dioxide already emitted, and the interpretation of past carbon cycle events recorded
      in sediments.
    sources:
      - citation: "Middelburg, J. J., Soetaert, K. & Hagens, M. (2020). Ocean alkalinity, buffering and biogeochemical processes. Reviews of Geophysics 58: e2019RG000681."
        url: null
      - citation: "Ho, D. T. et al. (2023). Monitoring, reporting and verification for ocean alkalinity enhancement. State of the Planet 2-oae2023."
        url: null

  - id: metal-organic-speciation-in-seawater
    name: What the organic ligands binding the metals are
    status: open
    status_note: Open as of 2026; binding strengths are measured routinely, the molecules responsible are identified only in part.
    description: >-
      More than 99 per cent of the dissolved iron in seawater, and most of the copper, is bound to organic
      ligands rather than present as free ion — which is why any iron is in solution at all, since the free ion
      would precipitate. The binding strengths are measurable by titration. The identities of the ligands are
      mostly not known: some are bacterial siderophores, some are breakdown products of cells, and the rest are
      inferred from their constants alone. Bioavailability depends on which, so productivity cannot be predicted
      from a total concentration.
    why_hard: >-
      The ligands are present at sub-nanomolar concentrations in a matrix of 35 grams per litre of salt, which
      defeats most separations, and the operationally defined classes from titration need not correspond to
      single compounds. This is the marine case of the speciation problem recorded under
      [coordination chemistry](/chemistry/coordination-chemistry/).
    unlocks: >-
      How much iron the ocean can hold, how dust deposition translates into productivity, and whether a
      fertilisation or a changing dust supply will have the effect calculated from total iron. Copper
      speciation similarly decides whether the metal is a nutrient or a toxin.
    sources:
      - citation: "Gledhill, M. & Buck, K. N. (2012). The organic complexation of iron in the marine environment. Frontiers in Microbiology 3: 69."
        url: null
      - citation: "Boiteau, R. M. et al. (2016). Siderophore-based microbial adaptations to iron scarcity. PNAS 113: 14237–14242."
        url: null

applications:
  - area: Drinking water
    title: Whether the pipe dissolves is a chemistry decision
    description: >-
      A lead service pipe is tolerable only because its interior carries a scale of insoluble lead compounds,
      and whether that scale stays put depends on the water's pH, alkalinity, chloride-to-sulphate ratio and
      added orthophosphate. Change the source water without adjusting the treatment and the scale dissolves,
      which is what happened in Flint, Michigan in 2014. The underlying chemistry is the passive film of
      [corrosion](/chemistry/corrosion/) applied to a pipe carrying something people drink, and the control
      variable is a calculated saturation index rather than a measurement of lead.
    sources:
      - citation: "Pieper, K. J., Tang, M. & Edwards, M. A. (2017). Flint water crisis caused by interrupted corrosion control. Environmental Science and Technology 51: 2007–2014."
        url: null
  - area: Fisheries and conservation
    title: The shell is made of the ion the ocean is spending
    description: >-
      Oysters, corals, pteropods and coccolithophores build structures from calcium carbonate, and the
      saturation state that determines whether those structures are stable falls as carbon dioxide is absorbed.
      Hatcheries on the Pacific coast of North America recorded larval oyster failures from 2007 traceable to
      upwelled water of low saturation, and now monitor the chemistry and buffer their intake. The ecological
      consequences are the subject of [conservation biology](/biology/conservation-biology/).
    domain: biology
    field_id: conservation-biology
    sources:
      - citation: "Barton, A. et al. (2012). The Pacific oyster, Crassostrea gigas, shows negative correlation to naturally elevated carbon dioxide levels. Limnology and Oceanography 57: 698–710."
        url: null
  - area: Carbon accounting
    title: A quarter of the emissions, and where they went
    description: >-
      The ocean has absorbed roughly a quarter of all carbon dioxide emitted from fossil fuels, and the amount
      is known not from models alone but from measurement: the anthropogenic component can be separated from
      the natural background using the carbonate system together with tracers of how long the water has been
      out of contact with the air. Repeating the global survey of ocean carbon every decade is how the sink is
      audited, and it is the largest sustained analytical chemistry programme in existence.
    sources:
      - citation: "Gruber, N. et al. (2019). The oceanic sink for anthropogenic CO₂ from 1994 to 2007. Science 363: 1193–1199."
        url: null

further_reading:
  - citation: "Stumm, W. & Morgan, J. J. (1996). Aquatic Chemistry, 3rd edition. Wiley."
    url: null
    note: The book that made the field a field; every calculation is set out so it can be redone.
  - citation: "Zeebe, R. E. & Wolf-Gladrow, D. (2001). CO₂ in Seawater: Equilibrium, Kinetics, Isotopes. Elsevier."
    url: null
    note: The carbonate system in full, including the kinetics usually assumed away.
  - citation: "Sarmiento, J. L. & Gruber, N. (2006). Ocean Biogeochemical Dynamics. Princeton University Press."
    url: null
    note: Where the chemistry is joined to the circulation, which is what turns a local equilibrium into a global sink.
---

## Why the Ocean Is Not Just Salty Water

The pH of the open ocean lies between about 7.8 and 8.3 everywhere, at every depth, in every basin. That is a remarkably narrow range for a body of water receiving rivers, rain, volcanic gas, decaying organic matter and dissolving rock, and it is not an accident of mixing. It is a buffer.

The buffer is the carbonate system: dissolved carbon dioxide, bicarbonate ion and carbonate ion, interconverting, and in contact with solid calcium carbonate in shells and sediments. In surface seawater the proportions are lopsided in a way that matters:

| Species | Concentration (µmol/kg) | Share of total carbon |
| --- | --- | --- |
| Bicarbonate, HCO₃⁻ | ~1,870 | 89% |
| Carbonate, CO₃²⁻ | ~220 | 10% |
| Dissolved CO₂ | ~10 | 0.5% |

The dissolved gas is half a per cent of the carbon present. Almost all of the ocean's carbon is in ionic forms, which is why the sea holds roughly fifty times as much carbon as the atmosphere, and why the question of how much more it will hold is not a solubility calculation.

{{fig:sillen|Lars Gunnar Sillén}} proposed in 1961 that seawater's whole composition should be *calculated*, as the equilibrium state of water in contact with the minerals of its own sediments. The strong form of the claim was wrong — silicate reactions are too slow and biology moves too much material — but the move mattered more than its accuracy, because it turned the composition of the ocean from a table of measurements into something that required explanation.

{{fig:stumm|Werner Stumm}} and {{fig:james-morgan|James Morgan}} supplied the working apparatus in 1970, and its central device is a choice of variable. Adding carbon dioxide to seawater changes the pH, the carbonate, the bicarbonate and the total carbon all at once, which makes bookkeeping awkward. **Total alkalinity** — the charge balance of the weak-acid anions — does not change at all, because carbon dioxide is electrically neutral and the protons it releases are taken up by the anions it creates. So alkalinity is conserved under the reaction of interest, and fixing it plus any one other carbonate quantity determines the entire system. Almost all practical work in the field runs on that fact.

## The Thermodynamic Ladder

The second organising idea concerns not acidity but electrons, and it is visible to the eye.

{{fig:froelich|Philip Froelich}} and colleagues analysed the water held between the grains of a sediment core in 1979, centimetre by centimetre, and found the oxidants being consumed in a strict order. Oxygen disappears first, within millimetres of the surface where organic matter is plentiful. Then nitrate. Then manganese oxides, then iron oxides, then sulphate — and finally, when all of those are gone, carbon dioxide itself, reduced to methane.

The order is the order of free energy released per electron transferred. An organism that respires with oxygen gets more energy than one using nitrate, which gets more than one using sulphate, so each oxidant is used until it runs out before the next is touched. A thermodynamic table, several pages of standard potentials from [electrode potentials](/chemistry/electrode-potentials/), appears in nature as a stack of coloured bands a few centimetres thick, with a distinct microbial community living in each.

The consequence is that redox potential is a second master variable alongside pH, and the pair of them determines what dissolved form an element takes — which is {{fig:pourbaix|Pourbaix}}'s diagram applied to mud. It is why iron is mobile in a waterlogged soil and immobile in a drained one, why arsenic is released from aquifer sediments when the oxygen is used up, and why phosphate stored in lake sediments returns to the water when the lake bottom goes anoxic.

## Iron at Parts Per Trillion

Large tracts of the Southern Ocean, the equatorial Pacific and the subarctic Pacific carry nitrate and phosphate that the plankton never use. On any ordinary account of nutrient limitation that should not happen.

{{fig:john-martin|John Martin}} applied the contamination-free methods that {{fig:clair-patterson|Patterson}} had developed for lead, described in [geochemistry](/chemistry/geochemistry/), and found the reason. Dissolved iron in those regions is present at a fraction of a nanomole per litre — parts per trillion. Iron(III) is almost insoluble in oxygenated water at seawater pH, the open ocean is far from any source of dust, and so the plankton are starved of a metal while swimming in nitrate.

The hypothesis was testable in an unusually direct way, and was tested: patches of open ocean several kilometres across were fertilised with iron sulphate, with a tracer added to follow the patch, and the plankton bloomed. These are among the very few controlled experiments ever performed on an ocean. What they did not show is the thing the experiments were widely expected to settle — whether the carbon fixed is exported to the deep sea and stays there. The export measured was small, variable and extremely hard to quantify, which is why the question of iron fertilisation as a carbon removal method remains contested in exactly the way the blooms themselves do not.

Martin's finding also sharpened a problem that remains open. If free iron(III) is insoluble, the iron that is in solution must be held by something, and it is: over ninety-nine per cent of dissolved iron in seawater is bound to organic ligands. Their binding strengths can be titrated. What they actually are is mostly unknown.

## A Closer Look: The Buffer That Spends the Shells

{{fig:revelle|Roger Revelle}} and {{fig:hans-suess|Hans Suess}} asked in 1957 how much of the carbon dioxide being emitted the ocean would absorb. The arithmetic has three steps and each one says something different.

**Step one: the buffer multiplies the uptake.** Without any chemistry, carbon dioxide would simply dissolve according to Henry's law. Surface seawater holds about 10 µmol/kg of dissolved CO₂ at present; double the pressure above it and that becomes 20, an increase of **10 µmol/kg**.

But the dissolved gas does not stay as gas. It reacts with the carbonate already present:

$$
\mathrm{CO_2} + \mathrm{H_2O} + \mathrm{CO_3^{2-}} \longrightarrow 2\,\mathrm{HCO_3^{-}}.
$$

Each carbon dioxide molecule that enters is converted into bicarbonate, which clears the way for another. The Revelle factor measures how efficiently: it is the fractional change in CO₂ pressure per fractional change in total dissolved carbon, and it is about **10** in modern surface water. So doubling the pressure above the water requires the total carbon to rise by

$$
\Delta \mathrm{DIC} = \frac{\mathrm{DIC}}{R} = \frac{2{,}100}{10} = 210\ \mathrm{\mu mol/kg}.
$$

Twenty-one times what plain dissolution would give. **This is why the ocean holds most of the carbon** — it has absorbed roughly a quarter of all fossil carbon dioxide emitted, and without the carbonate reaction it would have taken up almost nothing.

**Step two: the buffer is not free, and it weakens.** If the buffer were perfect — every added molecule converted, $R = 1$ — the ocean would absorb 2,100 µmol/kg for a doubling instead of 210. The factor of ten is the shortfall, and it exists because the reaction consumes carbonate ion, of which there is only 220 µmol/kg. The supply is the constraint.

And it gets tighter. As carbon accumulates, carbonate is consumed, so the next increment is buffered less well and $R$ rises — from about 8 in pre-industrial surface water to around 10 now, heading to 15 and beyond. The ocean becomes a worse sink the more it absorbs, which is a positive feedback with no threshold and no drama, just a slowly worsening exchange rate.

**Step three: the same equation is the damage.** Look again at what the reaction consumes. The ocean absorbs carbon dioxide **by spending carbonate ion**, and carbonate ion is what shells are made of. The two are not separate phenomena to be weighed against each other; they are one equation read twice.

The numbers, since 1750:

| Quantity | Change |
| --- | --- |
| Surface pH | 8.2 → 8.1 |
| Hydrogen ion concentration | **+26%** |
| Carbonate ion concentration | about −16% |
| Aragonite saturation state $\Omega$ | ~3.5 → ~2.9 |

The pH figure looks small and the hydrogen ion figure does not, and they are the same measurement: a drop of 0.1 in a logarithm is a factor of $10^{0.1} = 1.26$.

The quantity that decides whether a shell survives is the saturation state,

$$
\Omega = \frac{[\mathrm{Ca^{2+}}][\mathrm{CO_3^{2-}}]}{K_{\mathrm{sp}}},
$$

which is above one where carbonate is stable and below one where it dissolves. Calcium does not change; carbonate does. $\Omega$ for aragonite — the form corals and pteropods use, more soluble than calcite — has already fallen from about 3.5 to about 2.9 in surface water, and because carbonate solubility increases with pressure and with the carbon dioxide released by respiration, there is a depth below which $\Omega < 1$ everywhere. That horizon has risen by tens to over a hundred metres in parts of the ocean. In cold polar surface water, where carbon dioxide is more soluble to begin with, $\Omega$ is projected to fall below one this century on high-emissions trajectories — surface water in which an aragonite shell is thermodynamically unstable.

The practical form of this reached shellfish hatcheries on the Pacific coast of North America from 2007, when larval oysters began failing in water upwelled from depth with low saturation. The hatcheries now monitor the carbonate chemistry of their intake and buffer it, which is this calculation run as a production control.

## Water as the Reservoir That Records

The thread's three atmospheric fields deal with a reservoir that turns over in days to centuries. The ocean turns over in a thousand years and the sediments in millions, so water is where the record accumulates — which makes aquatic chemistry both the slowest-responding part of the system and the part that remembers.

It is also where the thread's arguments converge. The weathering thermostat of [geochemistry](/chemistry/geochemistry/) delivers its alkalinity here. The carbon dioxide whose atmospheric lifetime [atmospheric chemistry](/chemistry/atmospheric-chemistry/) cannot assign a single number to is removed, over ten thousand years, by the reactions in this field. And the one quantity that would say how fast — the alkalinity budget — does not currently balance, by a margin comparable to the size of the interventions now proposed to accelerate it. A field whose central number was computed in 1957 is still unable to close its own accounts.
