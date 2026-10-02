---
id: stratospheric-ozone
domain: chemistry
thread: environment
name: Stratospheric Ozone
parent_ids:
  - atmospheric-chemistry
era_emerged: 1971 – 2023
core_question: How did a refrigerant that nothing in the lower atmosphere can attack destroy a layer thirty kilometres up?

summary: |-
  Chlorofluorocarbons were designed to be harmless. They do not burn, they are not toxic, they do not corrode, and they do not react with anything in the lower atmosphere — which is why they replaced ammonia and sulphur dioxide in refrigeration and why they were considered a model of responsible chemistry. Mario Molina and Sherwood Rowland pointed out in 1974 that having no sink is not the same as having no consequence. A molecule the troposphere cannot touch does not disappear; it circulates for a century, and a few per cent of it each year drifts up to where the ultraviolet is strong enough to break a carbon–chlorine bond.

  What is released there is a catalyst. A chlorine atom destroys an ozone molecule, is regenerated, and does it again, and over its years in the stratosphere one atom accounts for on the order of a hundred thousand. That is the leverage: total stratospheric chlorine peaked at under four parts per billion against ozone at a few parts per million, and it was enough.

  The expected result was a slow global thinning. What was found, by Joe Farman's team in 1985 using an instrument from 1957, was a forty per cent springtime collapse over Antarctica — which no model had predicted and which the satellite data had recorded and flagged as instrument error. The explanation required chemistry nobody had included: reactions on the surfaces of polar stratospheric cloud particles that convert stored, unreactive chlorine into forms sunlight can split. The Montreal Protocol followed in 1987, the layer is recovering, and it remains the only global environmental agreement that has demonstrably worked.

key_ideas:
  - term: Catalytic chain length
    definition: >-
      How many ozone molecules one chlorine atom destroys before it is removed. Within a single sequence it is
      of order a thousand; because the species that stops the chain is itself recycled, the total over a
      chlorine atom's residence in the stratosphere is of order a hundred thousand.
    turning_point_id: molina-rowland-cfc-hypothesis
  - term: Reservoir species
    definition: >-
      A form in which a catalyst is held unreactive — hydrogen chloride and chlorine nitrate for chlorine.
      Most stratospheric chlorine is in a reservoir at any moment, which is why gas-phase models predicted
      modest loss, and why a process that empties the reservoirs changes everything.
    turning_point_id: solomon-heterogeneous-chemistry
  - term: Heterogeneous activation
    definition: >-
      Reactions on the surfaces of particles rather than in the gas. On polar stratospheric cloud particles,
      hydrogen chloride and chlorine nitrate react to release molecular chlorine, which sunlight splits
      immediately — so the winter stores the chlorine and the returning spring sunlight releases it all at once.
    turning_point_id: solomon-heterogeneous-chemistry
  - term: The ClO dimer cycle
    definition: >-
      Two chlorine monoxide radicals combine, and the dimer is photolysed to give two chlorine atoms. Unlike
      the standard cycle it needs no free oxygen atom, so it works in the cold, weakly lit polar spring where
      the ordinary mechanism cannot.
    turning_point_id: solomon-heterogeneous-chemistry
  - term: Dobson unit
    definition: >-
      The thickness the whole ozone column would have if brought to the surface at standard conditions, in
      hundredths of a millimetre. A typical mid-latitude column is about 300 — three millimetres of gas — and
      the Antarctic October minimum has fallen below 100.
    turning_point_id: farman-antarctic-hole
  - term: Ozone-depletion potential
    definition: >-
      The ozone a gas will destroy relative to the same mass of CFC-11, which allowed a treaty to regulate a
      whole class of compounds on one scale and to permit substitutes that scored low. It is the device that
      made a negotiated, phased replacement possible.
    turning_point_id: montreal-protocol-and-recovery

turning_points:
  - id: johnston-sst-nitrogen-oxides
    date: 1971 – 1974
    type: MECHANISM-ESTABLISHED
    title: The layer is vulnerable to something flown into it
    description: >-
      Harold Johnston calculates that a planned fleet of several hundred supersonic airliners, cruising in the
      stratosphere, would inject enough nitrogen oxides to deplete the ozone column measurably through the
      catalytic cycle Crutzen had identified. The claim was contested sharply and the aircraft were never built
      in numbers, so the prediction was never tested. Its importance is that it established the stratosphere as
      a place where a small human input could have a large chemical effect, and it assembled the community and
      the measurement programmes that recognised the next case.
    contested: true
    contested_note: >-
      The magnitude of Johnston's predicted depletion was disputed at the time and his estimate is now regarded
      as too large, partly because the chemistry of the lower stratosphere turned out to involve competing
      cycles that moderate the nitrogen oxide effect. That aircraft emissions in the stratosphere affect ozone
      is not disputed; how much is still revised.
    sources:
      - citation: "Johnston, H. (1971). Reduction of stratospheric ozone by nitrogen oxide catalysts from supersonic transport exhaust. Science 173: 517–522."
        url: null
      - citation: "Dotto, L. & Schiff, H. (1978). The Ozone War. Doubleday."
        url: null

  - id: molina-rowland-cfc-hypothesis
    date: "1974"
    type: MECHANISM-ESTABLISHED
    title: Having no sink is not the same as having no consequence
    description: >-
      Mario Molina and Sherwood Rowland ask what eventually happens to chlorofluorocarbons, which are inert in
      the lower atmosphere and were being released at increasing rates with no accounting of their fate. The
      answer is that they accumulate, mix throughout the atmosphere over a year or two, and are slowly carried
      into the stratosphere, where ultraviolet light short enough to break a carbon–chlorine bond finally
      reaches them. The chlorine atom released destroys ozone catalytically. Richard Stolarski and Ralph
      Cicerone independently identified the chlorine cycle the same year. Molina and Rowland shared the 1995
      Nobel Prize with Crutzen.
    contested: false
    sources:
      - citation: "Molina, M. J. & Rowland, F. S. (1974). Stratospheric sink for chlorofluoromethanes. Nature 249: 810–812."
        url: https://doi.org/10.1038/249810a0
      - citation: "Stolarski, R. S. & Cicerone, R. J. (1974). Stratospheric chlorine: a possible sink for ozone. Canadian Journal of Chemistry 52: 1610–1615."
        url: null

  - id: farman-antarctic-hole
    date: "1985"
    type: THEORY-REPLACED
    title: A hole nobody predicted, in data that had been discarded
    description: >-
      Joe Farman, Brian Gardiner and Jonathan Shanklin report that the ozone column over Halley Bay in
      Antarctica had fallen by about forty per cent each October since the late 1970s, measured with a Dobson
      spectrophotometer of a design dating from 1924. No model had predicted it; the expectation was a gradual
      few-per-cent global thinning. The satellite instrument in orbit had recorded the same collapse, but the
      values lay so far outside the expected range that the processing software had been flagging them as
      instrument error and setting them aside. A ground station with one old instrument found what a satellite
      had been measuring and rejecting.
    contested: false
    sources:
      - citation: "Farman, J. C., Gardiner, B. G. & Shanklin, J. D. (1985). Large losses of total ozone in Antarctica reveal seasonal ClOₓ/NOₓ interaction. Nature 315: 207–210."
        url: https://doi.org/10.1038/315207a0
      - citation: "Christie, M. (2000). The Ozone Layer: A Philosophy of Science Perspective. Cambridge University Press."
        url: null

  - id: solomon-heterogeneous-chemistry
    date: 1986 – 1989
    type: MECHANISM-ESTABLISHED
    title: Chemistry on the surface of a cloud
    description: >-
      Gas-phase models could not produce the Antarctic loss because most stratospheric chlorine is held in
      unreactive reservoirs. Susan Solomon and colleagues propose that in the extreme cold of the polar winter,
      clouds of nitric acid and water form, and reactions on their surfaces convert hydrogen chloride and
      chlorine nitrate into molecular chlorine, which sunlight splits at once. The winter therefore loads the
      chlorine and the returning spring fires it, through a cycle involving the ClO dimer that needs no oxygen
      atom. James Anderson's aircraft flights into the vortex in 1987 found chlorine monoxide and ozone varying
      in exact opposition — the result that ended the argument.
    contested: false
    sources:
      - citation: "Solomon, S., Garcia, R. R., Rowland, F. S. & Wuebbles, D. J. (1986). On the depletion of Antarctic ozone. Nature 321: 755–758."
        url: null
      - citation: "Anderson, J. G., Brune, W. H. & Proffitt, M. H. (1989). Ozone destruction by chlorine radicals within the Antarctic vortex. Journal of Geophysical Research 94: 11465–11479."
        url: null

  - id: montreal-protocol-and-recovery
    date: 1987 – 2016
    type: MECHANISM-ESTABLISHED
    title: The one that worked, and the evidence that it did
    description: >-
      The Montreal Protocol is signed in 1987, before the mechanism was settled, and strengthened repeatedly as
      it was — from a fifty per cent cut to a full phase-out within three years of the original text. Measured
      stratospheric chlorine peaked in the late 1990s and has declined since. Susan Solomon and colleagues
      demonstrated in 2016 that the Antarctic hole is shrinking in a way attributable to that decline rather
      than to meteorological variability, which required separating the chemical trend from very large
      year-to-year swings. It remains the only global environmental agreement whose intended effect has been
      measured.
    contested: false
    sources:
      - citation: "Solomon, S. et al. (2016). Emergence of healing in the Antarctic ozone layer. Science 353: 269–274."
        url: null
      - citation: "World Meteorological Organization (2022). Scientific Assessment of Ozone Depletion: 2022. WMO Global Ozone Research and Monitoring Project Report 278."
        url: null

  - id: unreported-emissions-detected
    date: 2018 – 2021
    type: TECHNIQUE-INVENTED
    title: A treaty verified by measuring the air
    description: >-
      Stephen Montzka and colleagues find that the atmospheric decline of CFC-11 had slowed sharply after 2012,
      implying new emissions of some thirteen thousand tonnes a year from a substance in global phase-out.
      Regional measurements then localised a large part of the increase to eastern China, where the compound was
      being used in insulating foam. Enforcement followed and the emissions fell back within three years. The
      episode established the atmospheric monitoring networks as a compliance instrument: a treaty obligation
      checked not against reported inventories but against the composition of the air itself.
    contested: false
    sources:
      - citation: "Montzka, S. A. et al. (2018). An unexpected and persistent increase in global emissions of ozone-depleting CFC-11. Nature 557: 413–417."
        url: null
      - citation: "Park, S. et al. (2021). A decline in emissions of CFC-11 and related chemicals from eastern China. Nature 590: 433–437."
        url: null

open_problems:
  - id: very-short-lived-substances
    name: Gases that should not reach the stratosphere but do
    status: open
    status_note: Open as of 2026; contributions are estimated and rising, and these compounds are not controlled.
    description: >-
      The Montreal Protocol regulates compounds with long atmospheric lifetimes, on the reasoning that only
      those survive the journey upwards. Chlorinated solvents with lifetimes of a few months — dichloromethane
      above all, whose atmospheric burden has roughly doubled since 2000 — turn out to reach the stratosphere
      anyway, because deep tropical convection can lift air from the surface to the tropopause in hours. Their
      contribution to stratospheric chlorine is growing while the controlled compounds decline, and nothing
      restricts them.
    why_hard: >-
      The amount delivered depends on where emissions occur relative to the convective regions and on transport
      in cloud systems of a few kilometres' scale, which global models represent only crudely. Emissions
      themselves are poorly reported because these are feedstocks and solvents rather than named ozone-depleting
      substances.
    unlocks: >-
      Whether the ozone layer's recovery continues on schedule depends on total chlorine, not only on the
      regulated part. If the short-lived contribution keeps rising it could offset a meaningful fraction of the
      decline the protocol achieved.
    sources:
      - citation: "Hossaini, R. et al. (2017). The increasing threat to stratospheric ozone from dichloromethane. Nature Communications 8: 15962."
        url: null
      - citation: "Claxton, T. et al. (2020). A synthesis inversion to constrain global emissions of very short-lived chlorocarbons. Journal of Geophysical Research Atmospheres 125: e2019JD031818."
        url: null

  - id: recovery-in-a-changing-stratosphere
    name: Recovery into a stratosphere that is not the one that was damaged
    status: open
    status_note: Open as of 2026; projections of the recovery date span decades depending on circulation and temperature assumptions.
    description: >-
      Rising carbon dioxide cools the stratosphere, which slows the gas-phase reactions that destroy ozone and
      should speed recovery, while also making polar clouds more likely and so favouring the heterogeneous
      chemistry that destroys it fastest. The large-scale circulation that carries air into and out of the
      stratosphere appears to be accelerating, which changes how long any gas stays there. Proposals to cool
      the planet by injecting sulphate aerosol would supply exactly the particle surfaces that activate
      chlorine.
    why_hard: >-
      Ozone, temperature and circulation are coupled, so the chemistry cannot be assessed against a fixed
      background. The polar clouds that matter form in narrow temperature ranges that models resolve poorly,
      and the circulation trend is inferred from tracers rather than measured.
    unlocks: >-
      When and whether the layer returns to its pre-1980 state, and whether deliberate aerosol injection for
      climate purposes would cost a part of that recovery — which is a question any such proposal has to answer
      before it is attempted.
    sources:
      - citation: "Butchart, N. (2014). The Brewer–Dobson circulation. Reviews of Geophysics 52: 157–184."
        url: null
      - citation: "Tilmes, S. et al. (2008). The sensitivity of polar ozone depletion to proposed geoengineering schemes. Science 320: 1201–1204."
        url: null

applications:
  - area: Public health
    title: The skin cancers that did not happen
    description: >-
      Ultraviolet-B is absorbed by stratospheric ozone and causes the DNA damage behind most skin cancer and
      behind cortical cataract, so a thinner column raises both. Assessments of the Montreal Protocol estimate
      that it will avoid on the order of two million skin cancer cases a year by the middle of this century,
      together with many millions of cataracts. The damage mechanism — pyrimidine dimers in DNA and the repair
      systems that handle them — belongs to [cancer biology](/biology/cancer-biology/).
    domain: biology
    field_id: cancer-biology
    sources:
      - citation: "van Dijk, A. et al. (2013). Skin cancer risks avoided by the Montreal Protocol. Photochemistry and Photobiology 89: 234–246."
        url: null
  - area: Refrigeration engineering
    title: Four generations of substitute, each solving the last one's problem
    description: >-
      Chlorofluorocarbons replaced ammonia because they were safe to handle. Hydrochlorofluorocarbons replaced
      them because adding a hydrogen gives hydroxyl something to attack, cutting the lifetime and so the ozone
      damage. Hydrofluorocarbons removed the chlorine entirely and solved the ozone problem completely — and
      are potent greenhouse gases with lifetimes of years to decades, which the 2016 Kigali Amendment now
      phases down. The current generation, the unsaturated hydrofluoroolefins, has a double bond that hydroxyl
      attacks within days. Each step is one atom's worth of chemistry, and each created the next problem.
    sources:
      - citation: "Velders, G. J. M. et al. (2009). The large contribution of projected HFC emissions to future climate forcing. PNAS 106: 10949–10954."
        url: null
  - area: Treaty verification
    title: Checking compliance against the atmosphere instead of the paperwork
    description: >-
      Because a long-lived gas mixes globally, its atmospheric trend is an independent audit of the world's
      reported emissions. The slowing decline of CFC-11 after 2012 was detected this way, attributed to a
      region by denser regional measurements, and reversed after enforcement. The approach is now being applied
      to methane and to the hydrofluorocarbons under Kigali, which makes a global measurement network a piece
      of legal infrastructure.
    sources:
      - citation: "Montzka, S. A. et al. (2018). An unexpected and persistent increase in global emissions of ozone-depleting CFC-11. Nature 557: 413–417."
        url: null
      - citation: "Weiss, R. F. & Prinn, R. G. (2011). Quantifying greenhouse-gas emissions from atmospheric measurements. Philosophical Transactions of the Royal Society A 369: 1925–1942."
        url: null

further_reading:
  - citation: "Solomon, S. (1999). Stratospheric ozone depletion: a review of concepts and history. Reviews of Geophysics 37: 275–316."
    url: null
    note: The authoritative account of the chemistry and how it was established, by one of those who established it.
  - citation: "Dotto, L. & Schiff, H. (1978). The Ozone War. Doubleday."
    url: null
    note: Written while the question was open; useful for how the dispute looked before it was settled.
  - citation: "World Meteorological Organization (2022). Scientific Assessment of Ozone Depletion: 2022. WMO Report 278."
    url: null
    note: "The quadrennial assessment: current chlorine burdens, recovery projections and what is still unresolved."
---

## Molecules That Arrive Where Nothing Else Does

Chlorofluorocarbons were a success of responsible chemistry before they were a failure of it. Refrigeration in the 1920s used ammonia, sulphur dioxide or methyl chloride, all of which killed people when a seal failed. {{fig:midgley|Thomas Midgley}}'s CFCs were non-flammable, non-toxic, odourless and chemically inert, and they were adopted for exactly those properties. They were then used in aerosols, in foam blowing and in solvent cleaning, and released, with nobody asking where they went.

{{fig:molina|Mario Molina}} and {{fig:rowland|Sherwood Rowland}} asked in 1974, and their answer follows from the lifetime argument in [atmospheric chemistry](/chemistry/atmospheric-chemistry/). CFC-12 has no hydrogen atom for hydroxyl to abstract and does not absorb the sunlight that reaches the lower atmosphere, so the troposphere has no mechanism to begin on it. It therefore accumulates, mixes through the whole atmosphere within a year or two, and a small fraction each year is carried up into the stratosphere — where, above about 25 kilometres, the ultraviolet is finally short enough to break a carbon–chlorine bond.

The chlorine atom released is a catalyst of the kind {{fig:bates|Bates}} and {{fig:nicolet|Nicolet}} had identified decades earlier: it destroys an ozone molecule, is regenerated, and continues. {{fig:stolarski|Richard Stolarski}} and {{fig:cicerone|Ralph Cicerone}} identified the same cycle independently that year.

The groundwork had been laid by a different scare. {{fig:johnston|Harold Johnston}} argued in 1971 that a fleet of supersonic airliners flying in the stratosphere would inject enough nitrogen oxides to thin the ozone column — a claim that was fiercely disputed, is now thought to have been too large, and which the aircraft were never built in sufficient numbers to test. Its value was indirect: it established that the stratosphere was somewhere a small human input could matter, and it created the research programmes and the measurement networks that recognised the chlorine case when it arrived.

## A Hole Nobody Predicted

The expectation through the early 1980s was a gradual global thinning of a few per cent, concentrated at mid-latitudes and arriving over decades. Industry disputed even that, and the models' predictions were revised downward more than once, so the issue stalled.

{{fig:farman|Joe Farman}}, {{fig:gardiner|Brian Gardiner}} and {{fig:shanklin|Jonathan Shanklin}} reported in 1985 that the ozone column above Halley Bay in Antarctica had been collapsing by about forty per cent every October since the late 1970s. The instrument was a Dobson spectrophotometer, a design from the 1920s, operated by hand.

Two things about that report are worth dwelling on. The first is that no model predicted it, and the chemistry then known could not produce it. The second is that the satellite in orbit had been measuring the same collapse for years. Its processing software contained a plausibility filter — values far outside the expected range were presumed to be instrument malfunction — and the Antarctic readings were so low that they were being flagged and set aside. The data existed; the expectation of what the data could look like prevented it from being seen. A ground station with one old instrument found what a satellite had been rejecting.

{{fig:susan-solomon|Susan Solomon}} and colleagues supplied the missing chemistry in 1986, and the key to it is that most stratospheric chlorine is not in a reactive form. It sits in **reservoirs** — hydrogen chloride and chlorine nitrate — which is why gas-phase calculations gave modest losses. But the Antarctic winter stratosphere falls below −78 °C, cold enough for clouds of nitric acid and water to form, and on the surfaces of those particles the two reservoirs react with each other to release molecular chlorine. Sunlight splits that instantly. So the long polar night accumulates the chlorine in a launchable form, and the returning spring sunlight fires all of it at once, through a cycle involving the ClO dimer that requires no free oxygen atom and therefore works in weak light.

{{fig:james-anderson|James Anderson}} flew instrumented aircraft into the vortex in 1987 and measured chlorine monoxide and ozone along the same flight track. The two traces are mirror images: where ClO rises, ozone falls, with the transition at the vortex edge sharp enough to see on the chart. The argument ended there.

## The One Treaty That Worked

The Montreal Protocol was signed in September 1987, before Anderson's flights had been published and before the mechanism was settled — a decision taken under scientific uncertainty that turned out to be correct. It was then strengthened repeatedly as the evidence came in: from a fifty per cent cut to a complete phase-out of the principal compounds within three years of the original text.

Measured stratospheric chlorine peaked in the late 1990s and has fallen since. Detecting the layer's response took longer, because Antarctic ozone varies enormously from year to year with the meteorology, and the chemical trend had to be separated from that; {{fig:susan-solomon|Solomon}} and colleagues demonstrated the attributable recovery in 2016.

It is the only global environmental agreement whose intended effect has been measured, and it is worth being precise about why it succeeded, because the features are not generic. The number of producing firms was small. Substitutes existed or could be developed by the same companies, so compliance was commercially survivable and in places commercially attractive. The harm — skin cancer — was personal and legible. And the quantity to be regulated could be reduced to one number per compound, the ozone-depletion potential, which let a treaty cover a whole class and permit replacements that scored low. None of those conditions holds for carbon dioxide, which is why the protocol is a weaker precedent than it is usually taken to be.

It also acquired an enforcement mechanism nobody designed. {{fig:montzka|Stephen Montzka}} and colleagues noticed in 2018 that CFC-11's atmospheric decline had slowed after 2012, implying some thirteen thousand tonnes a year of new emissions of a banned substance. Regional measurements localised much of it to eastern China, where it was being used to blow insulating foam; enforcement followed and the emissions fell back within three years. A treaty obligation audited against the composition of the air rather than against submitted paperwork.

## A Closer Look: How One Chlorine Atom Destroys a Hundred Thousand Ozone Molecules

The figure usually quoted is a hundred thousand. It is worth deriving, because the derivation has two stages and the second is the interesting one.

**Stage one: the chain, and what stops it.** The catalytic cycle is

$$
\mathrm{Cl} + \mathrm{O_3} \rightarrow \mathrm{ClO} + \mathrm{O_2}, \qquad \mathrm{ClO} + \mathrm{O} \rightarrow \mathrm{Cl} + \mathrm{O_2},
$$

net $\mathrm{O_3} + \mathrm{O} \rightarrow 2\,\mathrm{O_2}$, with the chlorine returned. The chain is broken when a chlorine atom meets methane instead of ozone and becomes hydrogen chloride. The chain length is the ratio of the two rates:

$$
L = \frac{k_{\mathrm{Cl+O_3}}[\mathrm{O_3}]}{k_{\mathrm{Cl+CH_4}}[\mathrm{CH_4}]}.
$$

At 20 km and 220 K, $k_{\mathrm{Cl+O_3}} = 1.2 \times 10^{-11}$ and $k_{\mathrm{Cl+CH_4}} = 2.2 \times 10^{-14}$ cm³ molecule⁻¹ s⁻¹ — a factor of 550 in favour of ozone even before concentrations. With $[\mathrm{O_3}] \approx 5 \times 10^{12}$ and $[\mathrm{CH_4}] \approx 2.7 \times 10^{12}$ cm⁻³,

$$
L = \frac{1.2 \times 10^{-11} \times 5 \times 10^{12}}{2.2 \times 10^{-14} \times 2.7 \times 10^{12}} = \frac{60}{0.059} \approx 1{,}000.
$$

A thousand, not a hundred thousand. The usual figure is two orders of magnitude larger, and the discrepancy is the point.

**Stage two: the sink is not a sink.** Hydrogen chloride does not leave the stratosphere quickly. It is attacked by hydroxyl:

$$
\mathrm{HCl} + \mathrm{OH} \rightarrow \mathrm{Cl} + \mathrm{H_2O},
$$

with $k = 5.3 \times 10^{-13}$ at 220 K. With stratospheric $[\mathrm{OH}] \approx 10^{6}$ cm⁻³ the lifetime of the reservoir is

$$
\tau = \frac{1}{5.3 \times 10^{-13} \times 10^{6}} = 1.9 \times 10^{6}\ \text{s} \approx 3\ \text{weeks}.
$$

So the chlorine comes back. A chlorine atom spends four to five years in the stratosphere before the air carrying it descends into the troposphere where rain removes it, and in that time it is parked in the reservoir and released again perhaps seventy times. Seventy cycles of a thousand each:

$$
70 \times 1{,}000 \approx 10^{5}.
$$

The hundred thousand is a *lifetime-integrated* total, and the reason it is so large is not that any single chain is long but that the thing which terminates the chain is temporary.

**What that buys.** Total stratospheric chlorine peaked at about 3.7 parts per billion, against ozone at a few parts per million — so chlorine was outnumbered roughly eight hundred to one. Multiply by a chain total of $10^5$ and the destructive capacity exceeds the entire ozone column by two orders of magnitude. The layer survives because production continues and because most of the chlorine is in a reservoir most of the time. That second clause is load-bearing, which is exactly why the heterogeneous chemistry was so devastating: it empties the reservoirs.

**The polar case, in the same units.** Over Antarctica in late winter, reactions on cloud particles convert nearly all the reservoir chlorine to active forms, so the usual ratio reverses. Then the ClO dimer cycle takes over, needing no oxygen atom and so able to run in weak returning sunlight. The result is not a few per cent:

| Measurement | Typical value |
| --- | --- |
| Mid-latitude ozone column | ~300 DU (3 mm of gas) |
| Antarctic October minimum, pre-1980 | ~280 DU |
| Antarctic October minimum, 1990s–2000s | 90–120 DU |
| Loss between 14 and 20 km altitude | approaching 100% |

Within that altitude band, in that season, essentially all of the ozone is destroyed. Not thinned — removed. And the mechanism that does it was absent from every model until a year after the observation, which is the honest summary of how well the field understood the stratosphere in 1985.

## What It Was a Rehearsal For

The chemistry here is the leverage argument from [atmospheric chemistry](/chemistry/atmospheric-chemistry/) taken to its limit: a catalyst at parts per trillion governing a constituent at parts per million, in the one place where that constituent's absence reaches the ground as ultraviolet light.

The substitutes tell the field's story in miniature, one atom at a time. Add a hydrogen to a CFC and hydroxyl can attack it, so the lifetime falls from a century to years and most of the chlorine never arrives: the hydrochlorofluorocarbons, a deliberate transitional compromise. Remove the chlorine entirely and the ozone problem is solved completely: the hydrofluorocarbons — which are potent greenhouse gases, now being phased down under the 2016 Kigali Amendment. Put a double bond in so that hydroxyl attacks within days: the current generation. Each step was a correct solution to the problem as stated, and each created the next.

What remains unresolved is on both sides of the regulated list. Chlorinated solvents with lifetimes of months, which the protocol does not cover because they were assumed not to survive the journey, reach the stratosphere anyway through deep tropical convection, and their burden is rising while the controlled compounds decline. And the stratosphere recovering is not the stratosphere that was damaged: rising carbon dioxide is cooling it, which helps the gas-phase chemistry and favours the polar clouds, and any proposal to cool the planet by injecting sulphate aerosol would supply precisely the particle surfaces that activate chlorine. The field's success is measured and real, and its accounting is not closed.
