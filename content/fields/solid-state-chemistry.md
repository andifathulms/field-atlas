---
id: solid-state-chemistry
domain: chemistry
thread: materials
name: Solid-State Chemistry
parent_ids:
  - chemical-thermodynamics
  - periodic-system
era_emerged: 1903 – 2020
core_question: How do you make a solid with a composition and a structure you chose, when the atoms cannot move?

summary: |-
  Most of chemistry happens in solution, where molecules meet by diffusing. Two solids in contact do not diffuse: the atoms are fixed in a lattice and the reaction can only proceed at the interface, as fast as atoms can hop through a crystal. Gustav Tammann established the consequence around 1910 — a solid reacts at a useful rate only above roughly two-thirds of its melting temperature — and it is why solid-state synthesis is still largely a matter of grinding powders together and holding them at 1,000 °C for a day.

  That constraint sets what the field can and cannot do. Because the reaction must pass through every intermediate the thermodynamics allows, what comes out of the furnace is the stable product, not the interesting one. And because the product is an extended structure rather than a molecule, there is no equivalent of a functional group: the unit of design is a structure type, and the variable is which element sits on which site.

  Which turns out to be enough. The perovskite structure accommodates most of the periodic table on its two cation sites, and the resulting compounds are ferroelectric, piezoelectric, catalytic, superconducting, magnetoresistive or photovoltaic according to what was put in. Victor Goldschmidt's radius ratios and Linus Pauling's rules say which substitutions will fit, from numbers tabulated once. The outstanding difficulty is the reverse of organic chemistry's: hundreds of thousands of stable compounds have been predicted by computation and nobody can say which of them can be made, because there is no retrosynthesis for a solid.

key_ideas:
  - term: Tammann temperature
    definition: >-
      Roughly two-thirds of a solid's melting point in kelvin, the temperature at which lattice diffusion
      becomes fast enough for a reaction between solids to proceed. It is why solid-state synthesis means a
      furnace, and why the method delivers whichever phase is thermodynamically stable there.
    turning_point_id: tammann-reactions-in-solids
  - term: Radius ratio
    definition: >-
      The ratio of cation to anion radius, which fixes how many anions can pack around a cation: below 0.414
      four, between 0.414 and 0.732 six, above that eight. The first of Pauling's rules, and the reason the
      common structure types are as few as they are.
    turning_point_id: goldschmidt-pauling-rules
  - term: Tolerance factor
    definition: >-
      Goldschmidt's one-number test of whether three ions will form a perovskite and in what symmetry. Near
      1.0 gives the cubic structure; below it the octahedra tilt; above it the small cation sits off-centre,
      which is what makes a ferroelectric.
    turning_point_id: barium-titanate-perovskites
  - term: Zintl concept
    definition: >-
      In a compound of a very electropositive metal with a semi-metal, treat the electrons as fully
      transferred and the structure of the remaining anion framework follows from ordinary bonding rules. It
      gives intermetallic compounds — which have no molecules and no obvious valences — a structural logic.
    turning_point_id: zintl-electron-counting
  - term: Sintering
    definition: >-
      Consolidating a powder into a dense solid below its melting point, driven by the reduction of surface
      area. Controlling it is what turns a chemical composition into an object, and control of the last
      fraction of a per cent of porosity is the difference between an opaque ceramic and a transparent one.
    turning_point_id: coble-sintering
  - term: Topotactic reaction
    definition: >-
      A reaction in which ions enter or leave a solid while its framework stays intact, so the host is
      changed in composition but not rebuilt. It is the only general way to make a solid at low temperature
      that the furnace would never give, and it is how a battery electrode works.
    turning_point_id: topotactic-intercalation

turning_points:
  - id: tammann-reactions-in-solids
    date: 1903 – 1925
    type: MECHANISM-ESTABLISHED
    title: Why two solids do not react
    description: >-
      Gustav Tammann investigates what happens when powders of two compounds are pressed together and
      heated, and establishes that the reaction is controlled not by chemistry but by transport: product
      forms at the interface and then insulates the reagents from each other, so the rate falls as the layer
      thickens. He finds that appreciable diffusion begins only above roughly two-thirds of the absolute
      melting temperature. The conclusion is that solid-state chemistry is diffusion chemistry, and it
      explains both why the furnace temperatures are so high and why intimate mixing of fine powders matters
      more than any reagent choice.
    contested: false
    sources:
      - citation: "Tammann, G. (1925). Lehrbuch der Metallographie, 3rd edition. Leipzig."
        url: null
      - citation: "Schmalzried, H. (1981). Solid State Reactions, 2nd edition. Verlag Chemie."
        url: null

  - id: goldschmidt-pauling-rules
    date: 1926 – 1929
    type: TECHNIQUE-INVENTED
    title: Rules for where the atoms go
    description: >-
      Victor Goldschmidt compiles a consistent set of ionic radii from the crystal structures then being
      determined, and Linus Pauling formulates five rules governing how ionic structures are built: the
      number of anions round a cation follows from the radius ratio, the charges must balance locally, and
      the coordination polyhedra prefer to share corners rather than edges or faces. Between them these gave
      structural chemistry a predictive apparatus from tabulated numbers — a solid's arrangement could be
      guessed before it was measured, and an unexpected structure became something to explain.
    contested: false
    sources:
      - citation: "Goldschmidt, V. M. (1926). Geochemische Verteilungsgesetze der Elemente VII. Skrifter Norske Videnskaps-Akademi Oslo 2: 1–117."
        url: null
      - citation: "Pauling, L. (1929). The principles determining the structure of complex ionic crystals. Journal of the American Chemical Society 51: 1010–1026."
        url: null

  - id: zintl-electron-counting
    date: 1929 – 1939
    type: MECHANISM-ESTABLISHED
    title: Intermetallics given a valence
    description: >-
      Eduard Zintl examines compounds such as NaTl and finds they are not alloys in any ordinary sense but
      have definite structures that make sense if the electropositive metal is treated as having handed its
      electron over entirely. The thallium atoms, with one extra electron each, then form a diamond-like
      network exactly as carbon does. The idea extends widely: compounds with no molecules and no obvious
      valences acquire a structural logic, and the boundary between a salt, a covalent network and an alloy
      turns out to be a continuum that one electron count can navigate.
    contested: false
    sources:
      - citation: "Zintl, E. (1939). Intermetallische Verbindungen. Angewandte Chemie 52: 1–6."
        url: null
      - citation: "Nesper, R. (2014). The Zintl–Klemm concept. Zeitschrift für Anorganische und Allgemeine Chemie 640: 2639–2648."
        url: null

  - id: barium-titanate-perovskites
    date: 1941 – 1955
    type: SUBSTANCE-ISOLATED
    title: One structure, a thousand compositions
    description: >-
      Barium titanate is found, independently and in secret during the war by groups in the United States,
      the Soviet Union and Japan, to have a dielectric constant more than a hundred times that of any
      material then used in a capacitor. Arthur von Hippel establishes in 1946 that the cause is
      ferroelectricity: the titanium sits off the centre of its oxygen octahedron, and the resulting dipoles
      can be switched by a field. The structure is the perovskite, which accepts most of the periodic table
      on its two cation sites — so a single structural type becomes a family in which the property is
      selected by composition.
    contested: true
    contested_note: >-
      Priority for the discovery of barium titanate's dielectric anomaly is genuinely unresolved, because
      wartime secrecy delayed publication in all three countries. Work by Wainer and Salomon in the United
      States, by Vul in the Soviet Union and by Ogawa in Japan was carried out independently and reported
      after the fact.
    sources:
      - citation: "von Hippel, A. et al. (1946). High dielectric constant ceramics. Industrial and Engineering Chemistry 38: 1097–1109."
        url: null
      - citation: "Cross, L. E. & Newnham, R. E. (1987). History of ferroelectrics. In Ceramics and Civilization III. American Ceramic Society."
        url: null

  - id: coble-sintering
    date: 1949 – 1962
    type: TECHNIQUE-INVENTED
    title: Making a ceramic transparent
    description: >-
      Sintering — consolidating a powder into a dense body below its melting point — had been practised for
      millennia and understood hardly at all. Robert Coble works out the mechanisms, identifies the role of
      the last residual pores sitting on grain boundaries, and shows that a trace of magnesia keeps the
      grains small enough for the pores to be eliminated. The product, polycrystalline alumina with porosity
      below a tenth of a per cent, is translucent — and because it withstands sodium vapour at 1,200 °C, it
      became the envelope of the high-pressure sodium lamp. A property obtained by controlling a
      microstructure rather than a composition.
    contested: false
    sources:
      - citation: "Coble, R. L. (1961). Sintering crystalline solids. Journal of Applied Physics 32: 787–799."
        url: null
      - citation: "Coble, R. L. (1962). Transparent alumina and method of preparation. US Patent 3,026,210."
        url: null

  - id: topotactic-intercalation
    date: 1926 – 1976
    type: TECHNIQUE-INVENTED
    title: Changing a solid without rebuilding it
    description: >-
      Karl Fredenhagen and then Walter Rüdorff establish that alkali metals enter graphite between its
      layers, giving compounds of definite composition in which the host framework is unchanged. The
      reaction runs at or near room temperature, is reversible, and gives products the furnace could never
      produce because they are not the stable phases. Generalised to oxides and sulphides, these topotactic
      reactions became the standard route to metastable solids and to materials whose composition must be
      varied continuously — and, as described in [batteries](/chemistry/batteries/), to the electrode that
      stores lithium by letting it in and out of a lattice.
    contested: false
    sources:
      - citation: "Rüdorff, W. & Hofmann, U. (1938). Über Graphitsalze. Zeitschrift für Anorganische und Allgemeine Chemie 238: 1–50."
        url: null
      - citation: "Whittingham, M. S. & Jacobson, A. J. (1982). Intercalation Chemistry. Academic Press."
        url: null

  - id: high-throughput-materials-prediction
    date: 1995 – 2020
    type: TECHNIQUE-INVENTED
    title: Hundreds of thousands of compounds, computed
    description: >-
      Combinatorial deposition in the 1990s let thousands of compositions be made and screened on one
      substrate, and from around 2011 databases such as the Materials Project applied electronic-structure
      calculation to every entry in the structural catalogues and to systematic substitutions on them. The
      result is a list of hundreds of thousands of compositions computed to be thermodynamically stable, of
      which only a small fraction have ever been prepared. The bottleneck moved decisively from knowing what
      might exist to knowing how to make it.
    contested: false
    sources:
      - citation: "Xiang, X.-D. et al. (1995). A combinatorial approach to materials discovery. Science 268: 1738–1740."
        url: null
      - citation: "Jain, A. et al. (2013). The Materials Project. APL Materials 1: 011002."
        url: https://doi.org/10.1063/1.4812323

open_problems:
  - id: solid-state-retrosynthesis
    name: A retrosynthesis for solids
    status: open
    status_note: Open as of 2026; machine-learned synthesis prediction is being attempted and is not yet reliable for new structure types.
    description: >-
      Organic chemistry can take a target molecule and work backwards to available starting materials, as
      described in [retrosynthetic analysis](/chemistry/retrosynthetic-analysis/). Inorganic chemistry
      cannot. Given a predicted compound, there is no procedure that outputs the precursors, the
      temperature, the atmosphere and the order of steps, and the great majority of computationally stable
      compositions have no published route. Which of the predicted set in
      [chemical composition](/chemistry/chemical-composition/) are reachable is therefore unknown.
    why_hard: >-
      A solid-state reaction passes through whatever intermediate phases are accessible, and which ones
      form depends on the precursors' particle size, the heating rate and the local composition — none of
      which appear in a thermodynamic calculation. The target is often metastable, so the furnace route
      cannot reach it at all, and the kinetic barriers that would decide a low-temperature route are not
      computed.
    unlocks: >-
      The limiting step in materials discovery for batteries, catalysts, thermoelectrics and magnets is
      currently synthesis rather than design. A reliable route-finder would make the computed catalogues
      usable rather than suggestive.
    sources:
      - citation: "Kovnir, K. (2021). Predictive synthesis. Chemistry of Materials 33: 4835–4841."
        url: null
      - citation: "Szymanski, N. J. et al. (2021). Toward autonomous design and synthesis of novel inorganic materials. Materials Horizons 8: 2169–2198."
        url: null

  - id: grain-boundary-chemistry
    name: What the composition is at a grain boundary
    status: open
    status_note: Open as of 2026; individual boundaries are now imaged atom by atom, general predictive rules are not available.
    description: >-
      A polycrystalline solid is mostly grains and partly the few atomic layers between them, and those
      layers have their own composition: impurities segregate there, the structure is disordered, and the
      local stoichiometry differs from the bulk. Conduction, fracture, corrosion and degradation are
      frequently controlled by this small fraction of the material, and predicting what will segregate
      where, and what it will do, remains case by case.
    why_hard: >-
      A boundary is a two-dimensional defect whose structure depends on the relative orientation of the two
      grains, so there is no single boundary to compute — there is a continuum of them. The segregating
      species are present at a fraction of a monolayer, which is at the edge of what analysis can quantify
      spatially, and the structure changes during the measurement.
    unlocks: >-
      Solid electrolytes fail at grain boundaries, ceramics fracture along them, and a battery's lifetime is
      largely a boundary problem. Deliberate boundary engineering would change the durability of most
      functional ceramics.
    sources:
      - citation: "Chiang, Y.-M., Birnie, D. P. & Kingery, W. D. (1997). Physical Ceramics. Wiley."
        url: null
      - citation: "Dillon, S. J. et al. (2007). Complexion transitions in ceramics. Acta Materialia 55: 6208–6218."
        url: null

applications:
  - area: Electronics
    title: A trillion capacitors a year, all the same structure
    description: >-
      Multilayer ceramic capacitors are built from barium titanate with its composition adjusted by partial
      substitution — some of the barium replaced by calcium, some of the titanium by zirconium — to move the
      ferroelectric transition and flatten the temperature dependence. They are made in the region of a
      trillion units a year, which makes this probably the most-manufactured designed inorganic material
      other than cement, and the whole product line is one structure type with the composition used as a
      dial.
    sources:
      - citation: "Pan, M.-J. & Randall, C. A. (2010). A brief introduction to ceramic capacitors. IEEE Electrical Insulation Magazine 26: 44–50."
        url: null
  - area: Lighting
    title: The orange street light needs a transparent ceramic
    description: >-
      A high-pressure sodium lamp runs sodium vapour at over 1,200 °C, which attacks glass and quartz.
      Coble's translucent alumina withstands it, and the lamp — about twice as efficient as the mercury
      lamps it replaced — became the standard street light for decades. The enabling step was not a new
      compound but the removal of the last tenth of a per cent of porosity from a familiar one.
    sources:
      - citation: "Wei, G. C. (2009). Transparent ceramics for lighting. Journal of the European Ceramic Society 29: 237–244."
        url: null
  - area: Planetary interiors
    title: Most of the Earth is one structure type
    description: >-
      Magnesium silicate adopts the perovskite structure above about 24 gigapascals, and that phase makes up
      a large majority of the lower mantle by volume — the most abundant mineral in the planet, named
      bridgmanite only in 2014 because a natural sample had never been held. Its stability field, its
      viscosity and the further transition near the core boundary set how heat leaves the Earth, and they are
      read from the same radius-ratio reasoning used to design a capacitor.
    domain: physics
    sources:
      - citation: "Tschauner, O. et al. (2014). Discovery of bridgmanite, the most abundant mineral in Earth. Science 346: 1100–1102."
        url: null

further_reading:
  - citation: "West, A. R. (2014). Solid State Chemistry and Its Applications, 2nd edition. Wiley."
    url: null
    note: "The standard course: structure types, defects, synthesis and properties in one volume."
  - citation: "Chiang, Y.-M., Birnie, D. P. & Kingery, W. D. (1997). Physical Ceramics. Wiley."
    url: null
    note: Where the microstructure is treated as the subject rather than as an impurity on the chemistry.
  - citation: "Schmalzried, H. (1981). Solid State Reactions, 2nd edition. Verlag Chemie."
    url: null
    note: What actually happens at the interface between two reacting solids, worked out properly.
---

## Chemistry Without a Solvent

Nearly all chemical reactions are run in solution, because a solvent lets molecules find each other. Two solids in contact cannot do that. Each atom is in a lattice site, the reaction can only happen where the two crystals touch, and the first thing the reaction produces is a layer of product that separates the reagents from one another.

{{fig:tammann|Gustav Tammann}} established the consequences in the years around 1910. The rate of a solid-state reaction is set by how fast atoms can diffuse through the growing product layer, which means it falls as the reaction proceeds, and it means nothing happens at all until atoms can move. The threshold is roughly two-thirds of the absolute melting temperature — the **Tammann temperature** — which for a typical oxide puts the furnace somewhere between 800 and 1,400 °C.

This explains the characteristic method of the field, essentially unchanged in a century: grind the oxides or carbonates together as finely as possible, press them, hold them at temperature for hours or days, regrind, repeat. Intimate mixing matters more than any choice of reagent, because the only variable under real control is the diffusion distance.

It also sets a hard limit on what can be made. A reaction that must crawl through every accessible intermediate will arrive at whichever phase is thermodynamically stable at the temperature used. The furnace delivers the stable compound, and the interesting ones are very often metastable — which is why the two routes out of this constraint, topotactic reactions at low temperature and the framework syntheses of [porous frameworks](/chemistry/porous-frameworks/), matter out of proportion to their apparent modesty.

## Rules for Where the Atoms Go

A molecule has functional groups; an extended solid does not. What it has instead is a structure type — rock salt, spinel, perovskite, fluorite — and a set of sites within it. The design variable is which element goes on which site, and the question is which substitutions will fit.

{{fig:goldschmidt|Victor Goldschmidt}} supplied the raw material in 1926 by extracting a consistent set of ionic radii from the crystal structures that {{fig:william-lawrence-bragg|Bragg}}'s diffraction methods, described under [crystallography](/physics/crystallography/), were then producing in quantity. {{fig:pauling|Pauling}} turned radii into rules in 1929. The first and most used of them is simply geometric: the number of anions that can pack around a cation is fixed by the ratio of their radii, four below 0.414, six between 0.414 and 0.732, eight above. The others concern charge balance and the observation that coordination polyhedra prefer to share corners rather than edges, and edges rather than faces, because sharing a face brings two cations uncomfortably close.

{{fig:zintl|Eduard Zintl}} added a different kind of rule for a class the radius arguments cannot touch. Compounds between a very electropositive metal and a semi-metal — NaTl, for instance — are neither salts nor alloys and have no obvious valences. Zintl's move was to hand the electron over completely on paper: thallium with one extra electron has four valence electrons, like carbon, and sure enough the thallium atoms in NaTl form a diamond-like network with the sodium in the gaps. One electron count turns a structure that looked arbitrary into one that follows the ordinary rules of bonding, and the idea generalises across a large region between the salts and the metals.

## One Structure, a Thousand Compositions

The perovskite structure is the clearest demonstration of what a structure type buys. It is a framework of corner-sharing octahedra with a large cation in the cavities, formula ABO₃, and it accepts most of the periodic table.

It came to attention through a wartime secret. Barium titanate was found independently in the United States, the Soviet Union and Japan, in work none of the three could publish, to have a dielectric constant more than a hundred times anything a capacitor then used. {{fig:von-hippel|Arthur von Hippel}} showed in 1946 what was going on: the titanium ion is not at the centre of its octahedron but displaced to one side, giving every unit cell a permanent dipole that an applied field can switch. A ferroelectric.

Once the structure was understood as a family, the property became selectable. Substitute lead and zirconium and the material is strongly piezoelectric, which is the sonar transducer and the ultrasound probe. Substitute lanthanum and manganese and it is magnetoresistive. Substitute copper on a related layered perovskite and it is the high-temperature superconductor of [superconductivity](/physics/superconductivity/). Substitute lead and iodide and it is the photovoltaic absorber that went from 3% to over 25% efficiency in a decade. The chemistry in each case is a substitution on a known framework.

Two methods widen what can be reached. {{fig:robert-coble|Robert Coble}} showed in the late 1950s how to control sintering well enough to eliminate almost all porosity, producing alumina transparent enough to contain sodium vapour at 1,200 °C and so making the high-pressure sodium lamp possible — a property won by controlling microstructure rather than composition. And {{fig:rudorff|Walter Rüdorff}} and others established that ions can be put into a layered solid, and taken out again, at room temperature, leaving the host framework intact. Such **topotactic** reactions reach compositions no furnace can, because they do not require the product to be the stable phase; they are how a battery electrode works, and they are the main escape from the Tammann constraint.

## A Closer Look: Predicting a Structure From Two Radii

The field's oldest predictive tool is a ratio of two tabulated numbers, and it is worth seeing both how well it works and where it stops.

**Which structure type?** Pauling's first rule says the coordination number follows from $r_+/r_-$. Taking Shannon's radii:

| Compound | $r_+$ (Å) | $r_-$ (Å) | Ratio | Predicted CN | Observed structure |
| --- | --- | --- | --- | --- | --- |
| ZnS | 0.60 | 1.84 | 0.326 | 4 | zinc blende, CN 4 |
| NaCl | 1.02 | 1.81 | 0.563 | 6 | rock salt, CN 6 |
| CsCl | 1.70 | 1.81 | 0.939 | 8 | caesium chloride, CN 8 |

Three for three, and these are the three archetypes every chemist learns. It is worth being honest about the rule's reach, though: tested systematically across the binary compounds, the radius-ratio prediction is right about two thirds of the time. It is a guide with a known failure rate, not a law, and part of its apparent success is circular — the radii were themselves fitted to structures.

**Which symmetry, within a structure type?** Goldschmidt's tolerance factor is a sharper test, because it predicts not whether a perovskite forms but which distortion it adopts:

$$
t = \frac{r_A + r_O}{\sqrt{2}\,(r_B + r_O)}.
$$

Take three titanates that differ only in the large cation. With $r_{\mathrm{Ti}^{4+}} = 0.605$ Å and $r_{\mathrm{O}^{2-}} = 1.40$ Å, the denominator is $\sqrt{2} \times 2.005 = 2.835$ Å in all three cases:

| Compound | $r_A$ (Å) | $t$ | What $t$ implies | Observed at 20 °C |
| --- | --- | --- | --- | --- |
| CaTiO₃ | 1.34 | 0.966 | A too small: octahedra tilt | orthorhombic |
| SrTiO₃ | 1.44 | 1.002 | fits exactly | cubic |
| BaTiO₃ | 1.61 | 1.062 | A too big: B rattles off-centre | tetragonal, ferroelectric |

Three compounds of the same formula type, three different symmetries, each one predicted by a number computed from a table in under a minute. And the third line is the commercially decisive one. Because barium is slightly too large for the cavity, the titanium has room to sit about 0.1 Å off-centre; every unit cell is then a dipole, the dipoles align in domains, and the dielectric constant at the transition reaches several thousand against about 5 for a typical glass. That single consequence of $t > 1$ is why barium titanate is in essentially every electronic device made.

The arithmetic also shows where composition becomes a dial rather than a choice. Replacing a fraction $x$ of the barium with calcium moves $t$ smoothly between 1.062 and 0.966, so the transition temperature can be placed where a specification requires it. Capacitor grades differ in exactly this way: the formulation is chosen so that the dielectric peak sits outside the operating range, giving a high and flat permittivity rather than a high and sharp one. A tolerance factor is being used as a design parameter, three quarters of a century after it was proposed to classify minerals.

## Predicted, But Can It Be Made?

The field now has a peculiar problem. Electronic-structure calculation applied systematically to the structural catalogues has produced lists of hundreds of thousands of compositions that should be thermodynamically stable, of which a small minority have ever been prepared. Knowing what might exist is no longer the constraint.

Making it is. There is no retrosynthesis for a solid: nothing takes a target composition and returns the precursors, the temperature, the atmosphere and the sequence. The reason is the one this field began with. A solid-state reaction proceeds through whichever intermediates its particles happen to make accessible, and those depend on grain size, heating rate and local composition — none of which appear in a thermodynamic calculation. Worse, many of the desirable targets are metastable, so the furnace cannot reach them in principle, and the low-temperature routes that could are the least systematised part of the subject.

Three of them are developed further in this thread. [Defect chemistry](/chemistry/defect-chemistry/) takes up what happens when the composition is deliberately not stoichiometric, which turns out to be where ionic conduction and most useful electronic behaviour live. [Porous frameworks](/chemistry/porous-frameworks/) builds solids out of units that assemble in solution, evading the diffusion problem entirely. And [nanomaterials chemistry](/chemistry/nanomaterials-chemistry/) exploits the fact that at small enough sizes the surface is most of the material, so a property can be changed by changing a dimension rather than a composition.
