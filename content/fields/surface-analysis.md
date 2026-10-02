---
id: surface-analysis
domain: chemistry
thread: analysis
name: Surface and Imaging Analysis
parent_ids:
  - spectroscopic-structure-determination
  - catalysis
era_emerged: 1916 – 2010
core_question: How can the composition of the outermost few atomic layers be determined, when they are a billionth of the sample's mass?

summary: |-
  Catalysis, corrosion, adhesion, lubrication, semiconductor fabrication and the behaviour of a cell on an implant all happen in the top few atomic layers, and nothing in bulk analysis sees them. A monolayer on a square centimetre is about $10^{15}$ atoms — a nanogram — against grams of material underneath, so any method that samples the bulk is swamped a billion to one.

  The answer is to use probes that cannot escape from deep inside: an electron knocked out of an atom by an X-ray loses its energy within a nanometre or two of travel, so only electrons from the top few layers reach the detector with their original energy intact. Kai Siegbahn built that into a quantitative method in the 1960s, and the energy of the escaping electron reports not only which element it came from but what that element is bonded to — the chemical state, so that oxidised and metallic iron are distinguishable in the same spectrum. Before any of it, Langmuir's adsorption analysis and the Brunauer–Emmett–Teller extension gave the measurement everything else depends on: how much surface a powder actually has, which for a catalyst is typically hundreds of square metres per gram.

key_ideas:
  - term: Monolayer
    definition: >-
      One layer of atoms or molecules on a surface, about $10^{15}$ per square centimetre. It is the natural
      unit of surface chemistry and about a nanogram of material, which is why surface analysis needs
      methods blind to the bulk.
    turning_point_id: langmuir-adsorption
  - term: Specific surface area
    definition: >-
      Area per gram, measured by how much gas it takes to cover the surface with one layer. A finely divided
      catalyst reaches hundreds of square metres per gram, which is what makes a few grams of it industrially
      useful.
    turning_point_id: bet-surface-area
  - term: Inelastic mean free path
    definition: >-
      How far an electron travels in a solid before losing energy — one to three nanometres for the energies
      involved. It is the reason photoelectron spectroscopy is surface-specific: deeper electrons arrive with
      the wrong energy or not at all.
    turning_point_id: xps-chemical-state
  - term: Chemical shift in core levels
    definition: >-
      The binding energy of a core electron shifts by a few electronvolts depending on the atom's oxidation
      state and neighbours, so a spectrum distinguishes metal from oxide, and sulfide from sulfate, as well
      as counting elements.
    turning_point_id: xps-chemical-state
  - term: Depth profile
    definition: >-
      Sputtering the surface away with an ion beam while analysing continuously, which converts a
      surface-specific method into a measurement of composition against depth — at the cost of destroying
      the sample and rearranging what remains.
    turning_point_id: sims-depth-profiling
  - term: Operando measurement
    definition: >-
      Observing a material while it is working — a catalyst under reaction conditions, an electrode under
      potential — rather than before and after in a vacuum. It matters because the working surface is
      frequently not the surface that was characterised.
    turning_point_id: operando-spectroscopy

turning_points:
  - id: langmuir-adsorption
    date: 1916 – 1918
    type: MECHANISM-ESTABLISHED
    title: Langmuir counts the sites
    description: >-
      Irving Langmuir treats adsorption as a chemical equilibrium between gas molecules and a fixed number
      of identical sites on a surface, each holding at most one molecule. The resulting relation between
      pressure and coverage rises and saturates at one monolayer, and inverting it gives the number of
      sites. It is the first quantitative treatment of a surface as a chemical entity with a definite
      capacity, and it earned the 1932 Nobel Prize in Chemistry.
    contested: false
    sources:
      - citation: "Langmuir, I. (1918). The adsorption of gases on plane surfaces of glass, mica and platinum. Journal of the American Chemical Society 40: 1361–1403."
        url: null
      - citation: "Somorjai, G. A. & Li, Y. (2010). Introduction to Surface Chemistry and Catalysis, 2nd edition. Wiley."
        url: null

  - id: bet-surface-area
    date: "1938"
    type: TECHNIQUE-INVENTED
    title: Measuring how much surface a powder has
    description: >-
      Langmuir's analysis assumes a single layer, and real adsorption continues into multilayers, so it fits
      the data only over a narrow range. Stephen Brunauer, Paul Emmett and Edward Teller extend the
      treatment to multilayer adsorption, and the resulting equation, fitted over a modest pressure range,
      gives the quantity of gas needed for exactly one layer — and hence the surface area, once the area
      occupied by one adsorbed molecule is known. Measuring a catalyst's area became a routine
      determination, and remains the standard specification for porous solids.
    contested: false
    sources:
      - citation: "Brunauer, S., Emmett, P. H. & Teller, E. (1938). Adsorption of gases in multimolecular layers. Journal of the American Chemical Society 60: 309–319."
        url: null
      - citation: "Rouquerol, J., Rouquerol, F. & Sing, K. (1999). Adsorption by Powders and Porous Solids. Academic Press."
        url: null

  - id: leed-surface-structure
    date: 1927 – 1970
    type: TECHNIQUE-INVENTED
    title: Diffraction from the top layer
    description: >-
      Clinton Davisson and Lester Germer's 1927 electron diffraction experiment was, incidentally, a surface
      measurement — low-energy electrons penetrate only a few layers. Turning it into a structural method
      required ultra-high vacuum, which became available in the 1960s, since a surface in ordinary vacuum is
      covered by contaminants within seconds. Low-energy electron diffraction then showed that a clean
      surface is not simply the bulk cut in half: the top layers reconstruct into their own periodic
      arrangements, with silicon's famous seven-by-seven pattern taking two decades to solve.
    contested: false
    sources:
      - citation: "Davisson, C. & Germer, L. H. (1927). Diffraction of electrons by a crystal of nickel. Physical Review 30: 705–740."
        url: null
      - citation: "Takayanagi, K., Tanishiro, Y., Takahashi, S. & Takahashi, M. (1985). Structure analysis of Si(111)-7×7 reconstructed surface. Surface Science 164: 367–392."
        url: null

  - id: xps-chemical-state
    date: 1954 – 1967
    type: TECHNIQUE-INVENTED
    title: Siegbahn reads the chemical state
    description: >-
      Kai Siegbahn's group builds electron spectrometers of high enough resolution to measure the kinetic
      energy of photoelectrons ejected by X-rays to a fraction of an electronvolt. Two things follow. The
      binding energies identify the elements present, and the small shifts in those energies — a few
      electronvolts — identify the chemical state, so metallic and oxidised forms of the same element appear
      as separate peaks. Because the escaping electrons come only from the top nanometres, the method is
      surface-specific, and it won the 1981 Nobel Prize in Physics.
    contested: false
    sources:
      - citation: "Siegbahn, K. et al. (1967). ESCA: Atomic, Molecular and Solid State Structure Studied by Means of Electron Spectroscopy. Almqvist & Wiksell."
        url: null
      - citation: "Siegbahn, K. (1982). Electron spectroscopy for atoms, molecules and condensed matter. Reviews of Modern Physics 54: 709–728."
        url: null

  - id: sims-depth-profiling
    date: 1949 – 1980
    type: TECHNIQUE-INVENTED
    title: Sputtering a sample away and weighing what comes off
    description: >-
      Herbert Herzog and Friedrich Viehböck show that bombarding a surface with ions ejects secondary ions
      from it, which a mass spectrometer can analyse. Georges Slodzian and Raimond Castaing build it into a
      quantitative instrument with imaging capability. Because the beam erodes the surface as it measures,
      composition can be followed into the sample layer by layer, with depth resolution of a few nanometres
      — which made it the standard method for checking dopant profiles in semiconductor manufacture, and for
      measuring isotope ratios in single mineral grains.
    contested: false
    sources:
      - citation: "Castaing, R. & Slodzian, G. (1962). Microanalyse par émission ionique secondaire. Journal de Microscopie 1: 395–410."
        url: null
      - citation: "Vickerman, J. C. & Gilmore, I. S. (eds) (2009). Surface Analysis: The Principal Techniques, 2nd edition. Wiley."
        url: null

  - id: operando-spectroscopy
    date: 1990 – 2010
    type: TECHNIQUE-INVENTED
    title: Watching the surface while it works
    description: >-
      Surface science was built in ultra-high vacuum on single crystals, and catalysis happens at
      atmospheres on powders — a difference of thirteen orders of magnitude in pressure, and of material.
      High-pressure cells, ambient-pressure photoelectron spectroscopy at synchrotrons, and
      X-ray absorption under reaction conditions closed part of the gap, and immediately showed that it
      mattered: catalysts restructure, oxidise, segregate and sinter when working, so the active surface is
      often not the one that had been characterised.
    contested: false
    sources:
      - citation: "Bañares, M. A. (2005). Operando methodology: combination of in situ spectroscopy and simultaneous activity measurements. Catalysis Today 100: 71–77."
        url: null
      - citation: "Salmeron, M. & Schlögl, R. (2008). Ambient pressure photoelectron spectroscopy. Surface Science Reports 63: 169–199."
        url: null

open_problems:
  - id: working-catalyst-structure
    name: What the surface of a working catalyst is
    status: open
    status_note: Open as of 2026; the gap between characterised and working surfaces is narrowed, not closed.
    description: >-
      Surface science's quantitative results come from single crystals in ultra-high vacuum; industrial
      catalysis uses powders at atmospheres or more, often in liquids. Both the pressure gap and the
      materials gap matter: surfaces reconstruct under adsorbates, metals segregate, oxides reduce, particles
      sinter and the active site may be a minority feature such as a step or a defect that constitutes a per
      cent of the surface and does most of the work.
    why_hard: >-
      Techniques that are surface-specific generally require vacuum, because the probe is an electron and
      electrons do not travel far in gas. Methods that tolerate pressure usually average over the whole
      sample, so the minority active site is invisible. And the surface changes while being measured,
      including in response to the probe.
    unlocks: >-
      Catalyst design currently proceeds by screening because the thing being designed cannot be observed in
      operation. Identifying active sites under working conditions is the prerequisite for designing them
      deliberately, which is the open problem of [catalysis](/chemistry/catalysis/) seen from the
      instrumental side.
    sources:
      - citation: "Somorjai, G. A. & Park, J. Y. (2008). Molecular surface chemistry by metal single crystals and nanoparticles from vacuum to high pressure. Chemical Society Reviews 37: 2155–2162."
        url: null
      - citation: "Tao, F. & Salmeron, M. (2011). In situ studies of chemistry and structure of materials in reactive environments. Science 331: 171–174."
        url: null

applications:
  - area: Semiconductor manufacture
    title: Composition measured to the atomic layer
    description: >-
      A transistor's behaviour depends on dopant concentrations in layers nanometres thick, on the
      composition of gate dielectrics a few atoms across, and on the absence of contaminants at parts per
      billion of a monolayer. Secondary ion mass spectrometry supplies the depth profiles and photoelectron
      spectroscopy the chemical states, as routine process control rather than research.
    domain: physics
    field_id: solid-state-physics
    sources:
      - citation: "Vickerman, J. C. & Gilmore, I. S. (eds) (2009). Surface Analysis: The Principal Techniques, 2nd edition. Wiley."
        url: null
  - area: Corrosion and coatings
    title: Why a passive film is only nanometres thick
    description: >-
      The oxide that protects stainless steel or aluminium is two to five nanometres thick, which no bulk
      method can examine and photoelectron spectroscopy measures directly — its thickness, its composition
      and the proportion of chromium enriched in it. Testing whether a treatment improves corrosion
      resistance is therefore a surface measurement, and the failure of a coating is diagnosed the same way.
    sources:
      - citation: "Olefjord, I. & Wegrelius, L. (1990). Surface analysis of passive state. Corrosion Science 31: 89–98."
        url: null
  - area: Biomaterials
    title: What a cell actually meets
    description: >-
      A cell approaching an implant encounters neither titanium nor polymer but the layer of protein that
      adsorbed from the surrounding fluid within seconds, on an oxide a few nanometres thick. Whether the
      implant integrates or is walled off depends on that layer's composition and conformation, which is a
      surface-analytical question, and it is why implant surfaces are specified by their chemistry and
      topography rather than by the bulk material.
    domain: biology
    field_id: cell-biology
    sources:
      - citation: "Castner, D. G. & Ratner, B. D. (2002). Biomedical surface science: foundations to frontiers. Surface Science 500: 28–60."
        url: null

further_reading:
  - citation: "Somorjai, G. A. & Li, Y. (2010). Introduction to Surface Chemistry and Catalysis, 2nd edition. Wiley."
    url: null
    note: The standard text linking surface structure to catalytic behaviour, with the vacuum-to-pressure problem discussed throughout.
  - citation: "Vickerman, J. C. & Gilmore, I. S. (eds) (2009). Surface Analysis: The Principal Techniques, 2nd edition. Wiley."
    url: null
    note: Each technique's physics, depth sensitivity and limitations, written by practitioners.
  - citation: "Duke, P. J. (2000). Synchrotron Radiation: Production and Properties. Oxford University Press."
    url: null
    note: Where the photons for ambient-pressure surface spectroscopy come from, and why a synchrotron is needed.
---

## A Billionth of the Sample

Everything a solid does to its surroundings happens at its surface. A catalyst's activity, a metal's corrosion, whether glue sticks, whether a cell attaches to an implant, whether a transistor works — all are determined in the outermost few atomic layers, and all are invisible to the analysis of the material as a whole.

The numbers make the difficulty plain. A square centimetre of surface carries about $10^{15}$ atoms, which is roughly a nanogram. A gram of the same material contains $10^{22}$ atoms. Any technique that samples the bulk sees the surface diluted by a factor of $10^{7}$ or more, which is to say it does not see it at all.

{{fig:langmuir|Irving Langmuir}} made the first quantitative progress without any surface-specific instrument, by treating the surface as a set of chemical sites. Adsorption, he argued in 1916, is an equilibrium: gas molecules land on a fixed number of identical sites, each holding one molecule, and desorb again. The resulting relation between pressure and coverage rises and then saturates, and the saturation level counts the sites. A surface acquired a measurable capacity.

{{fig:brunauer|Stephen Brunauer}}, {{fig:emmett|Paul Emmett}} and {{fig:edward-teller|Edward Teller}} extended it in 1938 to the case that actually occurs — molecules continuing to pile up in further layers once the first is full — and their equation, fitted over a modest range of pressures, extracts the amount of gas corresponding to exactly one layer. That is the measurement on which the whole of heterogeneous catalysis rests, and it is still what a catalyst's specification quotes.

## Probes That Cannot Escape From Deep

The breakthrough in surface specificity came from choosing a signal that is absorbed by the material itself. An X-ray penetrates micrometres into a solid and ejects electrons all the way down; but an electron travelling through a solid loses energy within one to three nanometres. So electrons arriving at a detector with their full original energy must have come from the top few atomic layers. Depth sensitivity is obtained not by focusing but by attenuation.

{{fig:siegbahn|Kai Siegbahn}} built spectrometers able to measure those energies to a fraction of an electronvolt, and found more than he needed. The binding energies identify the elements, as expected. The *small shifts* in those energies — typically one to six electronvolts — identify the chemical state, because an atom that has given up electron density to a neighbour holds its remaining core electrons more tightly. Metallic iron and iron in an oxide give separate peaks a few electronvolts apart, so a single spectrum reports both what is there and what it is bonded to. He called it electron spectroscopy for chemical analysis, and the shifts are the reason it is a chemical technique rather than an elemental one.

Two companions complete the toolkit. Low-energy electron diffraction, available once ultra-high vacuum could keep a surface clean for hours rather than seconds, showed that a clean crystal surface is not the bulk structure cut in half — the top layers rearrange into periodicities of their own, and silicon's reconstruction took twenty years to solve. And secondary ion mass spectrometry sputters the surface away with an ion beam while weighing what comes off, which destroys the sample and in exchange gives composition against depth at a few nanometres' resolution, the measurement semiconductor manufacturing depends on.

## A Closer Look: How Much Surface Is in a Gram

Before any of those instruments, the measurement everything else rests on is the crudest: how much surface there is. A commercial catalyst support is quoted at 200 square metres per gram. Both halves of that figure repay checking, because the number sounds impossible and follows from simple geometry.

**From area to particle size.** For spheres of diameter $d$ and density $\rho$, the area per unit mass is

$$
\frac{A}{m} = \frac{\pi d^{2}}{\rho \cdot \tfrac{\pi}{6}d^{3}} = \frac{6}{\rho d}.
$$

Setting $A/m = 200$ m²/g $= 2\times10^{5}$ m²/kg and $\rho = 2000$ kg/m³:

$$
d = \frac{6}{\rho (A/m)} = \frac{6}{(2000)(2\times10^{5})} = 1.5\times10^{-8}\ \mathrm{m} = 15\ \mathrm{nm}.
$$

So 200 m²/g corresponds to particles about 15 nanometres across — or to a porous solid whose internal pores are of that scale, which is what a zeolite or a silica gel is. Two hundred square metres is nearly the area of a tennis court, inside one gram.

**How much of it is actually surface.** For a 15 nm particle the fraction of atoms in the outermost layer is roughly $6a/d$, where $a$ is an atomic diameter of about 0.25 nm:

$$
\frac{6 \times 0.25}{15} = 10\%.
$$

A tenth of the atoms are available to do chemistry, which for an expensive metal is the difference between a viable process and an uneconomic one. Dispersing platinum as 2 nm particles raises that fraction to about three quarters, and this is why catalytic converters contain grams rather than kilograms of the metal.

**What the instrument measures.** A nitrogen molecule occupies 0.162 nm² when packed in a monolayer, so covering 200 m² requires

$$
\frac{200}{0.162\times10^{-18}} = 1.23\times10^{21} \text{ molecules} = 2.05\ \mathrm{mmol},
$$

which at standard temperature and pressure is

$$
2.05\times10^{-3} \times 22{,}414 = 46\ \mathrm{cm^{3}}.
$$

Forty-six cubic centimetres of nitrogen gas, measured by the pressure drop in a known volume as a cooled sample takes it up. That is the entire BET experiment, and it is why the area of a powder can be stated to a few per cent from a measurement of gas pressure.

**The limits.** The method assumes that all the gas taken up is on an accessible surface and that the molecule's footprint is known. For pores only slightly wider than the molecule, neither holds — gas condenses in them by a different mechanism, and the area reported is an artefact of applying the equation outside its range. Areas quoted for microporous materials above about 3,000 m²/g should be read as a characterisation parameter rather than as a geometric area, since they begin to exceed what the atoms present could physically expose.

## The Gap That Remains

All of that was built in ultra-high vacuum on single crystals, and its subject matter mostly operates at atmospheric pressure on powders. The difference is thirteen orders of magnitude in pressure and a different material, and it is not a detail: surfaces reconstruct when covered by adsorbates, alloys segregate so that one component enriches at the surface, oxides reduce, and particles sinter together while working.

Ambient-pressure photoelectron spectroscopy, which uses differential pumping and a synchrotron's brightness to keep a usable signal with gas present, and X-ray absorption measurements taken during reaction, have narrowed the gap and made its importance obvious. Catalysts routinely turn out to be something other than what was loaded into the reactor, and the active site is often a minority feature — a step edge, a defect, an interface — that constitutes a per cent or two of the surface and does most of the chemistry.

That is the open problem above, and it is the same problem [catalysis](/chemistry/catalysis/) records from the other side: the reason catalyst development still proceeds by screening thousands of formulations is that the thing being designed cannot yet be watched while it works.
