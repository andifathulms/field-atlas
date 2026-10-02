---
id: photochemical-smog
domain: chemistry
thread: environment
name: Photochemical Smog
parent_ids:
  - atmospheric-chemistry
era_emerged: 1943 – 2020
core_question: Why does sunlight turn traffic exhaust into something more harmful than the exhaust was?

summary: |-
  Los Angeles filled with an eye-stinging haze in the summer of 1943 that damaged crops and did not resemble the coal smoke of London or Pittsburgh. For seven years the cause was argued over and mostly blamed on individual factories. Arie Haagen-Smit, a plant biochemist who had been working on the flavour of pineapples, established in 1952 what it actually was: the irritant is ozone, ozone is not emitted by anything, and it is manufactured in the air when hydrocarbons and nitrogen oxides are exposed to sunlight. He proved it by making smog in a chamber.

  That makes this the first environmental problem in which the harmful substance had no source. The regulated emissions — unburnt fuel, nitric oxide — are not themselves the main damage; they are the reagents. And the chemistry that converts them is the same chain of hydroxyl radical reactions that cleans the remote atmosphere, run in the presence of enough nitrogen oxide that it manufactures ozone instead of consuming it.

  The relationship between the reagents and the product is strongly non-linear, which has cost a great deal. Twenty years of American air-quality policy concentrated on reducing hydrocarbons, and in many cities it failed, because those cities were limited by nitrogen oxides instead. In the same cities ozone is still often higher at the weekend, when there are fewer lorries. A control that reduces an emission can increase the pollutant, and knowing which case a given city is in remains difficult.

key_ideas:
  - term: Photostationary state
    definition: >-
      The fast balance between nitrogen dioxide photolysis, which makes ozone, and the reaction of ozone with
      nitric oxide, which destroys it. It fixes ground-level ozone in terms of the ratio of NO₂ to NO rather
      than the total amount of either.
    turning_point_id: leighton-photostationary-relation
  - term: Radical chain with NOₓ recycling
    definition: >-
      Hydroxyl attacks a hydrocarbon, the resulting peroxy radicals oxidise nitric oxide to nitrogen dioxide,
      and hydroxyl is regenerated. Because the NO is oxidised without consuming ozone, each turn of the chain
      leaves one more ozone molecule behind.
    turning_point_id: haagen-smit-smog-is-photochemical
  - term: Peroxyacetyl nitrate
    definition: >-
      A secondary pollutant with no primary source whatever, responsible for much of smog's eye irritation and
      plant damage. Being thermally unstable, it decomposes when warm and survives when cold, which lets it
      carry nitrogen oxides from a city to places with no emissions of their own.
    turning_point_id: pan-identified
  - term: NOₓ-limited and VOC-limited
    definition: >-
      Two regimes. Where nitrogen oxides are scarce, adding them increases ozone; where they are abundant they
      consume the radicals that drive the chain, so adding more *reduces* ozone and removing them raises it.
      Most city centres are in the second regime and most countryside in the first.
    turning_point_id: nox-voc-regimes
  - term: Incremental reactivity
    definition: >-
      The mass of ozone produced per unit mass of a particular hydrocarbon emitted. It varies by a factor of
      forty across common species, which means a regulation written in terms of total hydrocarbon mass is
      regulating close to the wrong quantity.
    turning_point_id: nox-voc-regimes
  - term: Three-way catalyst
    definition: >-
      A single converter that oxidises carbon monoxide and hydrocarbons while reducing nitrogen oxides, which
      requires the exhaust to be held within about one per cent of stoichiometric. It works only with a sensor
      in the pipe and only on unleaded fuel.
    turning_point_id: catalytic-converter-and-lead

turning_points:
  - id: haagen-smit-smog-is-photochemical
    date: 1943 – 1952
    type: MECHANISM-ESTABLISHED
    title: The pollutant with no source
    description: >-
      Los Angeles develops a recurring summer haze that irritates eyes, damages crops and bears no resemblance
      to the sulphurous coal smoke of older industrial cities. Arie Haagen-Smit, asked to identify what was
      ruining the local lettuce, establishes that the active agent is ozone, that no source emits it, and that
      it appears when hydrocarbons and nitrogen oxides are irradiated with sunlight — which he demonstrates by
      producing the damage in a chamber from automobile exhaust and light. The pollutant is manufactured in the
      air from substances that are themselves comparatively harmless, and the finding was disputed by the
      petroleum industry for most of a decade.
    contested: false
    sources:
      - citation: "Haagen-Smit, A. J. (1952). Chemistry and physiology of Los Angeles smog. Industrial and Engineering Chemistry 44: 1342–1346."
        url: null
      - citation: "Jacobs, C. & Kelly, W. J. (2008). Smogtown: The Lung-Burning History of Pollution in Los Angeles. Overlook."
        url: null

  - id: pan-identified
    date: 1956 – 1961
    type: SUBSTANCE-ISOLATED
    title: Compound X
    description: >-
      Chamber experiments on irradiated exhaust produce an unknown compound, labelled compound X, that is
      responsible for much of the eye irritation and for a characteristic glazing damage on leaves. Edgar
      Stephens and colleagues identify it as peroxyacetyl nitrate, a species emitted by nothing and formed
      entirely in the air. It has a second consequence: because it decomposes on warming and persists in the
      cold, it acts as a reservoir, carrying nitrogen oxides out of a city at altitude and releasing them
      where the air descends — so a region with no emissions can receive the ingredients of smog from a
      thousand kilometres away.
    contested: false
    sources:
      - citation: "Stephens, E. R., Hanst, P. L., Doerr, R. C. & Scott, W. E. (1956). Reactions of nitrogen dioxide and organic compounds in air. Industrial and Engineering Chemistry 48: 1498–1504."
        url: null
      - citation: "Singh, H. B. (1987). Reactive nitrogen in the troposphere. Environmental Science and Technology 21: 320–327."
        url: null

  - id: leighton-photostationary-relation
    date: "1961"
    type: MECHANISM-ESTABLISHED
    title: Ozone as a ratio rather than an amount
    description: >-
      Philip Leighton assembles the photochemistry of polluted air into a quantitative scheme, and identifies
      the relation that governs ground-level ozone: nitrogen dioxide photolysis makes it and reaction with
      nitric oxide destroys it, both fast, so the concentration settles at a value determined by the ratio of
      the two oxides and the intensity of the sunlight. The consequence is that these three reactions alone
      produce no net ozone at all — they merely shuttle oxygen between forms. Net production requires some
      other way of converting nitric oxide to nitrogen dioxide, which is what the hydrocarbons supply.
    contested: false
    sources:
      - citation: "Leighton, P. A. (1961). Photochemistry of Air Pollution. Academic Press."
        url: null
      - citation: "Finlayson-Pitts, B. J. & Pitts, J. N. (2000). Chemistry of the Upper and Lower Atmosphere. Academic Press."
        url: null

  - id: catalytic-converter-and-lead
    date: 1970 – 1981
    type: TECHNIQUE-INVENTED
    title: A catalyst that forced the lead out of petrol
    description: >-
      The 1970 Clean Air Act requires a ninety per cent reduction in American vehicle emissions, which no
      engine modification could deliver, so the response is a catalytic converter in the exhaust. Lead poisons
      the catalyst irreversibly, so unleaded fuel became a technical requirement rather than only a health one
      — the toxicological case made from the geochemistry in [geochemistry](/chemistry/geochemistry/) and the
      catalyst's intolerance arrived at the same conclusion from opposite directions. The three-way version,
      which also reduces nitrogen oxides, needs the air-to-fuel ratio held within about one per cent, which is
      why it waited for the oxygen sensor.
    contested: false
    sources:
      - citation: "Shelef, M. & McCabe, R. W. (2000). Twenty-five years after introduction of automotive catalysts. Catalysis Today 62: 35–50."
        url: null
      - citation: "Mondt, J. R. (2000). Cleaner Cars: The History and Technology of Emission Control. SAE."
        url: null

  - id: nox-voc-regimes
    date: 1977 – 1991
    type: MECHANISM-ESTABLISHED
    title: A control strategy that did not work
    description: >-
      Model calculations displayed as contours of ozone against hydrocarbon and nitrogen oxide emissions show
      two regimes with opposite behaviour: where nitrogen oxides are scarce, ozone rises with them; where they
      are abundant they scavenge the radicals driving the chain, so ozone falls as they rise. American policy
      had concentrated on hydrocarbons since 1970, and a 1991 National Research Council report concluded that
      this was why so many cities had failed to meet the ozone standard — they were limited by nitrogen oxides,
      and the controls applied had the wrong lever. William Carter's reactivity scales added a second
      correction, showing that hydrocarbons differ among themselves by a factor of forty in ozone formed per
      gram.
    contested: false
    sources:
      - citation: "National Research Council (1991). Rethinking the Ozone Problem in Urban and Regional Air Pollution. National Academies Press."
        url: null
      - citation: "Carter, W. P. L. (1994). Development of ozone reactivity scales for volatile organic compounds. Journal of the Air and Waste Management Association 44: 881–899."
        url: null

  - id: smog-changes-character
    date: 1990 – 2020
    type: MECHANISM-ESTABLISHED
    title: The sources move, and so does the chemistry
    description: >-
      As vehicle controls take effect in North America and Europe, the remaining hydrocarbon emissions in those
      cities turn out to be dominated not by fuel but by volatile chemical products — coatings, adhesives,
      cleaning agents, pesticides and personal care products — which Brian McDonald and colleagues showed in
      2018 now rival or exceed transport as a source. Meanwhile the severe episodes moved to Asian megacities
      and changed character, with secondary particulate haze rather than ozone as the dominant harm, formed
      through chemistry involving sulphur dioxide and ammonia that the Los Angeles mechanism did not include.
    contested: false
    sources:
      - citation: "McDonald, B. C. et al. (2018). Volatile chemical products emerging as largest petrochemical source of urban organic emissions. Science 359: 760–764."
        url: null
      - citation: "Huang, R.-J. et al. (2014). High secondary aerosol contribution to particulate pollution during haze events in China. Nature 514: 218–222."
        url: null

open_problems:
  - id: diagnosing-the-regime
    name: Telling which lever a given city is on
    status: open
    status_note: Open as of 2026; satellite and surface indicators disagree, and the regime shifts with season and with successful control.
    description: >-
      Whether reducing nitrogen oxides in a particular city will lower its ozone or raise it depends on which
      regime it is in, and there is no reliable way to determine that from routine monitoring. Indicators have
      been proposed — the ratio of formaldehyde to nitrogen dioxide measured from satellites is the most used —
      but their thresholds are model-derived and they disagree with surface measurements and with each other.
      The regime also moves: a city that successfully cuts nitrogen oxides crosses from one regime into the
      other, so the correct policy reverses partway through its own implementation.
    why_hard: >-
      The quantity that distinguishes the regimes is the fate of radicals, which is not measured; it is
      inferred from a mechanism that is itself incomplete. Ozone at a monitoring site is also partly produced
      elsewhere and transported, so a local measurement does not report local chemistry.
    unlocks: >-
      Billions are spent on emission controls whose sign of effect on ozone is uncertain. A reliable diagnostic
      would let a city choose between controlling nitrogen oxides and controlling hydrocarbons on evidence
      rather than on a model's choice of inputs.
    sources:
      - citation: "Sillman, S. (1995). The use of NO_y, H₂O₂ and HNO₃ as indicators for ozone–NOₓ–hydrocarbon sensitivity. Journal of Geophysical Research 100: 14175–14188."
        url: null
      - citation: "Jin, X. et al. (2020). Evaluating a space-based indicator of surface ozone–NOₓ–VOC sensitivity. Journal of Geophysical Research Atmospheres 125: e2019JD032178."
        url: null

  - id: aromatic-oxidation-mechanism
    name: What happens when sunlight oxidises a benzene ring in air
    status: open
    status_note: Open as of 2026; mechanisms reproduce chamber ozone only with adjustable parameters, and the ring-opening products are largely unidentified.
    description: >-
      Aromatic hydrocarbons — toluene, the xylenes, trimethylbenzenes — are a large share of urban hydrocarbon
      emissions and produce much of the ozone and secondary particulate matter. Their oxidation mechanism is
      not closed: after hydroxyl adds to the ring, the subsequent steps open it through intermediates that have
      mostly not been observed, and the mechanisms used in models reproduce chamber experiments only with
      parameters adjusted to fit.
    why_hard: >-
      The intermediates are bicyclic peroxy radicals and ring-opened dicarbonyls with lifetimes of
      milliseconds, present at parts per trillion, and many share a molecular formula. Chamber experiments
      against which mechanisms are tested have their own wall artefacts, so the target the mechanism is being
      fitted to is itself uncertain by tens of per cent.
    unlocks: >-
      Which hydrocarbons to control, and by how much, rests on the ozone each produces, and for the aromatics
      that number comes from a mechanism known to be incomplete. The same intermediates are a major source of
      the particulate matter whose formation cannot yet be predicted.
    sources:
      - citation: "Calvert, J. G. et al. (2002). The Mechanisms of Atmospheric Oxidation of Aromatic Hydrocarbons. Oxford University Press."
        url: null
      - citation: "Xu, L. et al. (2020). Experimental characterization of aromatic oxidation. Environmental Science and Technology 54: 13736–13745."
        url: null

applications:
  - area: Vehicle regulation
    title: Three reactions in one converter
    description: >-
      A three-way catalyst oxidises carbon monoxide and unburnt hydrocarbons while simultaneously reducing
      nitrogen oxides to nitrogen — reactions that want opposite conditions, which is why the air-to-fuel ratio
      must be held within about one per cent of stoichiometric. It works because of the zirconia oxygen sensor
      described in [defect chemistry](/chemistry/defect-chemistry/) and because of the finely divided precious
      metal described in [nanomaterials chemistry](/chemistry/nanomaterials-chemistry/). Emissions per vehicle
      fell by roughly ninety-nine per cent over four decades while vehicle numbers rose.
    sources:
      - citation: "Shelef, M. & McCabe, R. W. (2000). Twenty-five years after introduction of automotive catalysts. Catalysis Today 62: 35–50."
        url: null
  - area: Agriculture
    title: Ozone takes a tenth of the harvest
    description: >-
      Ozone enters leaves through the stomata and oxidises the photosynthetic machinery, and the plants most
      sensitive to it include wheat, soybean and cotton. Estimated global yield losses run to several per cent
      for wheat and around a tenth for soybean, which makes smog a larger agricultural problem than it is a
      visible one — the damage happens at concentrations well below those that irritate a human eye, and
      downwind of the cities rather than in them. The effect on primary production is the subject of
      [ecosystem ecology](/biology/ecosystem-ecology/).
    domain: biology
    field_id: ecosystem-ecology
    sources:
      - citation: "Ainsworth, E. A. et al. (2012). The effects of tropospheric ozone on net primary productivity. Annual Review of Plant Biology 63: 637–661."
        url: null
  - area: Consumer products
    title: The paint and the shampoo now rival the traffic
    description: >-
      Once vehicle hydrocarbon emissions had been reduced by two orders of magnitude, what remained became
      visible. In American and European cities the volatile organic compounds now emitted by coatings,
      adhesives, cleaning agents, printing inks and personal care products are comparable to or larger than
      those from transport — a conclusion reached partly from the chemical composition of urban air and partly
      from reconciling industry solvent-use statistics with it. Regulation designed around fuel does not reach
      these sources.
    sources:
      - citation: "McDonald, B. C. et al. (2018). Volatile chemical products emerging as largest petrochemical source of urban organic emissions. Science 359: 760–764."
        url: null

further_reading:
  - citation: "Finlayson-Pitts, B. J. & Pitts, J. N. (2000). Chemistry of the Upper and Lower Atmosphere. Academic Press."
    url: null
    note: The standard reference, with the smog mechanism assembled step by step from measured rate constants.
  - citation: "National Research Council (1991). Rethinking the Ozone Problem in Urban and Regional Air Pollution. National Academies Press."
    url: null
    note: A regulatory post-mortem that is also a clear exposition of the non-linearity that caused it.
  - citation: "Jacobs, C. & Kelly, W. J. (2008). Smogtown: The Lung-Burning History of Pollution in Los Angeles. Overlook."
    url: null
    note: How the science was argued over in public for a decade before it was acted on.
---

## A Pollutant Nobody Emitted

Los Angeles filled with haze in the summer of 1943. It stung the eyes, cut visibility, cracked rubber and ruined the local lettuce, and it was not the smoke that older industrial cities knew. London's killing fog of December 1952 was coal smoke and sulphur dioxide, produced by burning, visible at the chimney, and worst in cold windless weather; Los Angeles's haze was worst on bright hot afternoons and had no obvious chimney at all. For seven years individual factories were blamed in turn.

{{fig:haagen-smit|Arie Haagen-Smit}} was a plant biochemist working on the volatile compounds that give pineapple its flavour when he was asked to find out what was damaging the crops. His answer, published in 1952, had three parts. The irritant is ozone. Nothing emits ozone. And ozone appears when hydrocarbons and nitrogen oxides are illuminated — which he demonstrated by putting exhaust and light into a chamber and reproducing both the plant damage and the eye irritation.

This is the first environmental problem in which the harmful substance had no source. What came out of the tailpipe was the reagent; sunlight was the reactor; the pollutant was the product. The implication for policy is awkward and permanent: the thing being measured at a monitoring station is not the thing that can be regulated.

The chamber work produced a second surprise. An unidentified compound, called compound X, accounted for much of the eye irritation and for a characteristic glazing of leaf undersides. {{fig:stephens|Edgar Stephens}} identified it in 1956 as peroxyacetyl nitrate, which again nothing emits. It has a useful instability: it falls apart when warm and survives when cold, so it forms in a city, rises, travels for days at altitude, and releases nitrogen oxides when the air descends somewhere with no emissions of its own. Smog became a regional phenomenon rather than an urban one.

## The Mechanism

{{fig:leighton|Philip Leighton}} assembled the quantitative scheme in 1961, and the first thing it shows is that the obvious mechanism cannot work.

Three reactions dominate, and all are fast. Nitrogen dioxide is photolysed to nitric oxide and an oxygen atom; the atom adds to O₂ to make ozone; and ozone reacts with nitric oxide to give back nitrogen dioxide. Follow them round: oxygen has been shuffled between forms and **nothing has been produced**. The cycle is null. Ozone sits at whatever concentration balances the two directions, which depends on the ratio of nitrogen dioxide to nitric oxide and on how bright the sunlight is.

So accumulating ozone requires some other way of turning nitric oxide into nitrogen dioxide — one that does not consume an ozone molecule in the process. That is exactly what the hydrocarbons provide, and the chain is the one from [atmospheric chemistry](/chemistry/atmospheric-chemistry/) with a different consequence:

1. Hydroxyl abstracts a hydrogen from a hydrocarbon, giving an organic radical.
2. Oxygen adds, giving a peroxy radical.
3. The peroxy radical oxidises NO to NO₂ — **without touching ozone** — and becomes an alkoxy radical.
4. Further steps give an aldehyde and a hydroperoxy radical, which oxidises another NO and regenerates hydroxyl.

Hydroxyl comes back, so the chain continues, and each NO oxidised this way is one that photolysis can split again to make a *net* new ozone molecule. The identical chemistry that removes methane from the remote atmosphere, run where there is plenty of nitric oxide, becomes an ozone factory. Nothing about the mechanism changed; only the concentration of one reagent.

## Controls That Worked and One That Did Not

The engineering response was a catalyst in the exhaust pipe, forced by the 1970 Clean Air Act's requirement for a ninety per cent reduction that no engine adjustment could meet. The three-way converter does something awkward — oxidising carbon monoxide and hydrocarbons while reducing nitrogen oxides, reactions that want opposite conditions — which is why it needs the air-to-fuel ratio held within about one per cent, and therefore why it needed the zirconia sensor described in [defect chemistry](/chemistry/defect-chemistry/).

It also had a consequence outside its brief. Lead poisons the catalyst irreversibly, so unleaded petrol became an engineering requirement at the same time that {{fig:clair-patterson|Patterson}}'s measurements, described in [geochemistry](/chemistry/geochemistry/), were making it a public health one. Two arguments from different directions arrived at the same conclusion, and the regulation is usually credited to the one that was less contested at the time.

The other strategy did not work. From 1970 American policy concentrated on reducing hydrocarbons, and by the end of the 1980s a large number of cities had still not met the ozone standard despite substantial reductions. A National Research Council report in 1991 explained why, and the explanation is the non-linearity worked through below: those cities were limited by nitrogen oxides, not hydrocarbons, so two decades of effort had been applied to the lever with less effect. {{fig:carter|William Carter}} then showed that even within the hydrocarbons the policy was aimed loosely, because different species produce vastly different amounts of ozone per gram.

## A Closer Look: Why More Traffic Can Mean Less Ozone

Start with the null cycle, which fixes the baseline. At steady state the rate of NO₂ photolysis equals the rate at which ozone and NO consume each other:

$$
J_{\mathrm{NO_2}}[\mathrm{NO_2}] = k[\mathrm{O_3}][\mathrm{NO}] \quad\Longrightarrow\quad [\mathrm{O_3}] = \frac{J_{\mathrm{NO_2}}}{k}\cdot\frac{[\mathrm{NO_2}]}{[\mathrm{NO}]}.
$$

At midday, $J_{\mathrm{NO_2}} \approx 8 \times 10^{-3}$ s⁻¹ and $k = 1.9 \times 10^{-14}$ cm³ molecule⁻¹ s⁻¹, so

$$
\frac{J}{k} = \frac{8 \times 10^{-3}}{1.9 \times 10^{-14}} = 4.2 \times 10^{11}\ \text{molecules cm}^{-3},
$$

and since one part per billion at sea level is $2.5 \times 10^{10}$ molecules cm⁻³,

$$
[\mathrm{O_3}] \approx 17 \times \frac{[\mathrm{NO_2}]}{[\mathrm{NO}]}\ \text{ppb}.
$$

**Ozone is a ratio, not an amount.** Equal NO₂ and NO give 17 ppb; a ratio of five gives 84 ppb, which breaches most air quality standards; a ratio of ten gives 170. Doubling total NOₓ with the ratio unchanged does nothing at all. Everything therefore depends on what is oxidising NO to NO₂, and the hydrocarbons' entire role is to do that without spending ozone.

Now the two corrections that cost American policy twenty years.

**First: hydrocarbons are not interchangeable.** Carter's incremental reactivity scale gives grams of ozone formed per gram of compound emitted:

| Compound | Ozone formed (g per g) |
| --- | --- |
| Ethane | 0.28 |
| Propane | 0.49 |
| Ethanol | 1.53 |
| Formaldehyde | 9.46 |
| *m*-Xylene | 10.6 |
| Propene | 11.6 |

A factor of **forty** between ethane and propene. A regulation written as a limit on total hydrocarbon mass treats those as equivalent, and they are not: replacing a kilogram of propene with a kilogram of ethane cuts the ozone produced by about 97% while leaving the regulated quantity unchanged. California eventually wrote reactivity-weighted limits for this reason.

**Second: nitrogen oxides can go either way.** The radical chain needs radicals, and NO₂ consumes them — the reaction OH + NO₂ → HNO₃ removes a hydroxyl radical and a nitrogen oxide together, terminating the chain. So nitrogen oxides are both the fuel for ozone production and the brake on it:

- Where NOₓ is **scarce** (rural air, downwind regions), the chain runs out of NO to oxidise. Adding NOₓ increases ozone. The system is NOₓ-limited.
- Where NOₓ is **abundant** (city centres, near motorways), radicals are being destroyed faster than the chain can use them. Adding NOₓ *decreases* ozone, and removing it increases ozone. The system is VOC-limited.

Which produces an effect that can be seen in the data without any modelling: the **weekend effect**. In many urban centres, ozone is measurably higher on Saturday and Sunday, when heavy-goods traffic — the dominant source of nitrogen oxides — is much reduced. Less NOₓ, more ozone. For decades this was treated as an anomaly to be explained away; it is the straightforward prediction of a VOC-limited regime.

The practical sting is in the geometry. A city centre is VOC-limited and the countryside around it is NOₓ-limited, so the same reduction in nitrogen oxides lowers rural ozone and raises urban ozone at the same time. And a city that successfully reduces its nitrogen oxides eventually crosses from one regime into the other, at which point the policy that was increasing ozone begins decreasing it. The correct action reverses partway through its own implementation, and telling where the line is remains the field's first open problem.

## The Same Chemistry Somewhere Else

Two things changed after the controls worked.

In North America and Europe, vehicle hydrocarbon emissions fell by roughly two orders of magnitude per vehicle, and what was left became visible. {{fig:brian-mcdonald|Brian McDonald}} and colleagues showed in 2018 that the volatile organic compounds now emitted in those cities by coatings, adhesives, cleaning products, inks and personal care products are comparable to or larger than those from transport. The emissions are diffuse, domestic, individually tiny and almost entirely unregulated, because the regulatory apparatus was built around fuel.

Elsewhere the problem grew and changed character. The severe episodes moved to Asian megacities, and there the dominant harm is not ozone but secondary particulate haze — formed through chemistry involving sulphur dioxide, ammonia from agriculture, and oxidation inside the particles, which the Los Angeles mechanism did not contain. The reagents are different and the sunlight is doing the same job.

Both of those lead back into the problems of [atmospheric chemistry](/chemistry/atmospheric-chemistry/): a substantial fraction of what is consuming the oxidant has never been identified, and the amount of particulate matter a given emission will produce cannot be predicted. And the molecules that escape all of this chemistry entirely, because the troposphere has no way to attack them, rise instead — which is [stratospheric ozone](/chemistry/stratospheric-ozone/).
