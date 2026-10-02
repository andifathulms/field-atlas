---
id: nanomaterials-chemistry
domain: chemistry
thread: materials
name: Nanomaterials Chemistry
parent_ids:
  - solid-state-chemistry
  - surface-analysis
era_emerged: 1857 – 2023
core_question: What changes about a substance when the piece of it is small enough that most of its atoms are on the surface?

summary: |-
  Michael Faraday made colloidal gold in 1857 and could not explain why it was ruby red rather than yellow. The samples are still at the Royal Institution and still red. Nothing about the gold had changed; the pieces were simply very small, and that was enough to change what colour the metal is.

  The reason is a ratio. Chop a solid finer and the surface grows relative to the volume, slowly at first and then not slowly at all: a hundred-nanometre gold particle has under two per cent of its atoms at the surface, a three-nanometre one has about half. At that point the material is no longer a solid with a surface but something closer to a very large molecule, and the quantities a chemist takes to be constants of a substance — melting point, band gap, colour, catalytic activity — become functions of a dimension. Gold melts at 1,064 °C in a crucible and below 400 °C at two and a half nanometres.

  What makes this a branch of chemistry rather than a curiosity is that the dimension is synthetically controllable, and that the control is exercised through the surface. A molecule bound to one crystal face and not another makes the particle grow into a rod instead of a sphere. Separating nucleation from growth in time makes every particle the same size, which is what it takes for a cadmium selenide dot to emit a single pure colour chosen by its diameter. The remaining difficulty is that a recipe which works reproducibly in a flask often does not survive being made a thousand times larger.

key_ideas:
  - term: Surface-to-volume ratio
    definition: >-
      The fraction of a particle's atoms that sit at its surface, which scales as the inverse of the diameter.
      Below about ten nanometres it stops being a correction and becomes the dominant term, so surface energy
      starts to decide the structure and the thermodynamics.
    turning_point_id: faraday-gold-colloids
  - term: Quantum confinement
    definition: >-
      When a semiconductor crystal is smaller than the natural separation of an electron and the hole it
      leaves, the carriers are squeezed and their energies rise. The band gap therefore widens as the particle
      shrinks, roughly as the inverse square of the radius, so colour becomes a function of size.
    turning_point_id: quantum-dots
  - term: Plasmon resonance
    definition: >-
      A collective oscillation of a metal's conduction electrons, which in a nanoparticle has a frequency in
      the visible range set by the particle's size, shape and surroundings. It is why colloidal gold is red
      rather than yellow, and why gold rods can be tuned to the near infrared.
    turning_point_id: faraday-gold-colloids
  - term: Capping ligand
    definition: >-
      A molecule bound to the growing crystal's surface. It stops particles merging, it makes them dispersible,
      and because it binds some crystal faces more strongly than others it decides what shape the particle
      grows into. The ligand shell is as much part of the material as the core.
    turning_point_id: nanocrystal-shape-control
  - term: Separation of nucleation and growth
    definition: >-
      Creating all the nuclei in a brief burst and then letting them grow slowly with no new ones forming, so
      that every particle has the same history and therefore the same size. It is the whole basis of making a
      monodisperse sample, and the reason the synthesis involves injecting a reagent into a hot solution.
    turning_point_id: quantum-dots
  - term: Size-dependent thermodynamics
    definition: >-
      Melting point, solubility, phase stability and redox potential all shift with particle size, because the
      surface energy term in the free energy scales as the inverse of the diameter. Below ten nanometres these
      are not small corrections.
    turning_point_id: faraday-gold-colloids

turning_points:
  - id: faraday-gold-colloids
    date: 1857 – 1908
    type: SUBSTANCE-ISOLATED
    title: Gold that is red
    description: >-
      Michael Faraday reduces a gold salt with phosphorus and obtains a clear ruby-red fluid that he
      establishes contains finely divided metallic gold rather than a compound, noting that adding salt turns
      it blue and that the change is reversible by adding gelatin. The samples are preserved at the Royal
      Institution and remain red. Gustav Mie provides the explanation in 1908 by solving the scattering of
      light by a small metal sphere, showing that the colour comes from a resonance of the conduction
      electrons whose frequency depends on the particle's size and surroundings.
    contested: false
    sources:
      - citation: "Faraday, M. (1857). Experimental relations of gold (and other metals) to light. Philosophical Transactions of the Royal Society 147: 145–181."
        url: null
      - citation: "Edwards, P. P. & Thomas, J. M. (2007). Gold in a metallic divided state. Angewandte Chemie International Edition 46: 5480–5486."
        url: null

  - id: quantum-dots
    date: 1981 – 2023
    type: SUBSTANCE-ISOLATED
    title: Colour chosen by diameter
    description: >-
      Alexei Ekimov finds that copper chloride crystallites grown in a glass absorb at wavelengths that depend
      on their size, and Louis Brus observes the same in cadmium sulphide grown in solution — the band gap of a
      semiconductor widens as the crystal shrinks, because the electron and hole are confined. Moungi Bawendi's
      group then solved the synthetic problem in 1993: inject the precursors into a hot coordinating solvent so
      that nucleation happens in a burst and growth afterwards, giving particles uniform enough to emit one
      narrow colour. Ekimov, Brus and Bawendi shared the 2023 Nobel Prize in Chemistry.
    contested: false
    sources:
      - citation: "Rossetti, R., Nakahara, S. & Brus, L. E. (1983). Quantum size effects in the redox potentials of small CdS crystallites. Journal of Chemical Physics 79: 1086–1088."
        url: null
      - citation: "Murray, C. B., Norris, D. J. & Bawendi, M. G. (1993). Synthesis and characterization of nearly monodisperse CdE semiconductor nanocrystallites. Journal of the American Chemical Society 115: 8706–8715."
        url: null

  - id: fullerene-c60
    date: 1985 – 1990
    type: SUBSTANCE-ISOLATED
    title: A third form of carbon
    description: >-
      Harold Kroto, Richard Smalley, Robert Curl, James Heath and Sean O'Brien vaporise graphite with a laser
      and find in the mass spectrum an unexpectedly intense peak at sixty carbon atoms, which they propose is a
      closed cage of twelve pentagons and twenty hexagons. For five years the structure rested on a mass
      spectrum alone, and the proposal was disputed; then Wolfgang Krätschmer and Donald Huffman found that an
      arc between graphite electrodes makes it by the gram, so it could be crystallised and its structure
      confirmed. Carbon, the most-studied element, had a third allotrope nobody had looked for.
    contested: true
    contested_note: >-
      Between 1985 and 1990 the cage structure rested entirely on the mass spectrum's intensity pattern, and
      alternative explanations for the peak were put forward. Priority was also argued, since Eiji Osawa had
      proposed a truncated-icosahedral C₆₀ on structural grounds in 1970 in a Japanese-language paper that the
      discoverers had not seen.
    sources:
      - citation: "Kroto, H. W., Heath, J. R., O'Brien, S. C., Curl, R. F. & Smalley, R. E. (1985). C₆₀: Buckminsterfullerene. Nature 318: 162–163."
        url: https://doi.org/10.1038/318162a0
      - citation: "Krätschmer, W., Lamb, L. D., Fostiropoulos, K. & Huffman, D. R. (1990). Solid C₆₀: a new form of carbon. Nature 347: 354–358."
        url: null

  - id: iijima-nanotubes
    date: 1991 – 1996
    type: SUBSTANCE-ISOLATED
    title: Carbon rolled into a tube
    description: >-
      Sumio Iijima, examining the soot from a carbon arc by electron microscopy, finds concentric cylinders of
      graphitic carbon a few nanometres across and micrometres long, and single-walled versions follow in 1993.
      The tubes have a measured tensile strength above a hundred gigapascals, the highest of any material, and
      conduct along their length either as a metal or as a semiconductor depending purely on the angle at which
      the sheet is rolled. A structure whose electronic character is set by geometry rather than composition
      was new, and the same insight underlies the two-dimensional case taken up in
      [topological matter](/physics/topological-matter/).
    contested: false
    sources:
      - citation: "Iijima, S. (1991). Helical microtubules of graphitic carbon. Nature 354: 56–58."
        url: https://doi.org/10.1038/354056a0
      - citation: "Dresselhaus, M. S., Dresselhaus, G. & Eklund, P. C. (1996). Science of Fullerenes and Carbon Nanotubes. Academic Press."
        url: null

  - id: nanocrystal-shape-control
    date: 1993 – 2015
    type: TECHNIQUE-INVENTED
    title: A molecule that chooses which face grows
    description: >-
      Once particles could be made uniform in size, the next variable was shape, and the lever turned out to be
      the capping ligand. Because a given molecule binds some crystal faces more strongly than others, it slows
      their growth, and the particle elongates, flattens or facets accordingly: rods, plates, cubes, stars and
      branched forms all come from the same reagents with a different surfactant. Seed-mediated growth made the
      process stepwise, adding material to preformed particles. Shape matters because plasmon frequency,
      catalytic activity and packing all depend on which facets are exposed.
    contested: false
    sources:
      - citation: "Peng, X. et al. (2000). Shape control of CdSe nanocrystals. Nature 404: 59–61."
        url: null
      - citation: "Xia, Y., Xiong, Y., Lim, B. & Skrabalak, S. E. (2009). Shape-controlled synthesis of metal nanocrystals. Angewandte Chemie International Edition 48: 60–103."
        url: null

  - id: halide-perovskite-solution-processing
    date: 2009 – 2021
    type: SYNTHESIS-ACHIEVED
    title: A solar absorber spun on from solution
    description: >-
      Akihiro Kojima and Tsutomu Miyasaka use a lead halide perovskite as the light absorber in a
      dye-sensitised cell, reaching 3.8% efficiency in 2009. Replacing the liquid electrolyte with a solid hole
      conductor in 2012 took it past 10%, and within a decade certified efficiencies exceeded 25% — a rate of
      improvement no other photovoltaic material has matched. The material is deposited from solution at
      temperatures a hundred degrees below silicon processing, and it tolerates the defect concentrations that
      such a method inevitably produces, which is the property that makes it work at all.
    contested: false
    sources:
      - citation: "Kojima, A., Teshima, K., Shirai, Y. & Miyasaka, T. (2009). Organometal halide perovskites as visible-light sensitizers. Journal of the American Chemical Society 131: 6050–6051."
        url: null
      - citation: "Lee, M. M., Teuscher, J., Miyasaka, T., Murakami, T. N. & Snaith, H. J. (2012). Efficient hybrid solar cells based on meso-superstructured organometal halide perovskites. Science 338: 643–647."
        url: null

open_problems:
  - id: nanocrystal-surface-structure
    name: What the surface of a nanocrystal actually looks like
    status: open
    status_note: Open as of 2026; ligand counts and binding modes are established for a few model systems and assumed for the rest.
    description: >-
      A nanocrystal is a core plus a shell of bound molecules, and for a three-nanometre particle the shell is
      a substantial fraction of the mass and essentially all of the chemistry: it sets solubility, stability,
      electronic passivation and catalytic behaviour. How many ligands are present, which atoms they bind,
      which facets they prefer and how fast they exchange are known in detail for a handful of systems and
      guessed for nearly everything in use.
    why_hard: >-
      The surface is disordered, the ligands are mobile, and every averaging technique returns a mean over
      facets and binding modes that may each behave differently. Crystallography requires the periodicity the
      surface lacks, and the methods that are surface-specific need the ultra-high vacuum in which the ligand
      shell does not survive.
    unlocks: >-
      Nearly every unexplained batch-to-batch variation traces back to the surface, and the electronic losses
      that keep quantum-dot devices below their theoretical limits are surface recombination. Knowing the
      structure would turn passivation from a screening exercise into a design one.
    sources:
      - citation: "Boles, M. A., Ling, D., Hyeon, T. & Talapin, D. V. (2016). The surface science of nanocrystals. Nature Materials 15: 141–153."
        url: null
      - citation: "Owen, J. S. (2015). The coordination chemistry of nanocrystal surfaces. Science 347: 615–616."
        url: null

  - id: nanomaterial-scale-up
    name: A synthesis that survives being made a thousand times larger
    status: open
    status_note: Open as of 2026; continuous-flow reactors solve it for some systems, and the general problem of reproducibility remains.
    description: >-
      Many nanomaterial syntheses depend on how fast a reagent is injected and how quickly the mixture becomes
      homogeneous, because the whole method rests on separating nucleation from growth in time. In a flask of
      ten millilitres, mixing is complete in well under a second; in a vessel of ten litres it is not, so
      nucleation continues while early particles are already growing and the size distribution broadens
      irrecoverably. Published syntheses frequently fail to reproduce between laboratories for the same reason.
    why_hard: >-
      The controlling variable is a transient concentration field during mixing, which is neither measured nor
      reported in a typical procedure. Scaling rules for mixing do not preserve the quantities nucleation
      depends on, and the particle population records the mixing history permanently because nuclei cannot be
      unmade.
    unlocks: >-
      Most of the proposed applications of nanomaterials need tonnes rather than grams, and the gap between a
      demonstration and a product is usually this. Reliable scale-up also makes reproducibility between
      laboratories possible, which the field's literature currently lacks.
    sources:
      - citation: "Phillips, T. W. et al. (2014). Scaling up nanoparticle synthesis in flow. Lab on a Chip 14: 3172–3180."
        url: null
      - citation: "Baumgartner, J. et al. (2022). Reproducibility in nanoparticle research. Chemistry of Materials 34: 7439–7451."
        url: null

applications:
  - area: Displays
    title: A television whose colours are set by particle size
    description: >-
      A quantum-dot display uses a blue diode and a film of nanocrystals that convert part of its light to
      narrow red and green bands, with the wavelengths chosen by the diameter of the dots rather than by the
      choice of compound. The emission is narrower than a phosphor's, which is why the colour range is wider,
      and the narrowness depends directly on the uniformity of the particles — so the product is a consumer
      application of monodispersity.
    sources:
      - citation: "Shirasaki, Y., Supran, G. J., Bawendi, M. G. & Bulović, V. (2013). Emergence of colloidal quantum-dot light-emitting technologies. Nature Photonics 7: 13–23."
        url: null
  - area: Diagnostics
    title: The red line in a rapid test is colloidal gold
    description: >-
      A lateral-flow test works by conjugating antibodies to gold nanoparticles: where the target is captured,
      the particles accumulate and their plasmon resonance makes a visible line. Faraday's ruby colour is the
      readout, chosen because gold is inert, binds proteins readily and is intensely coloured at concentrations
      far too low to see by any other means. The specificity belongs to the antibody, as described in
      [immunology](/biology/immunology/); the visibility belongs to the particle.
    domain: biology
    field_id: immunology
    sources:
      - citation: "Koczula, K. M. & Gallotta, A. (2016). Lateral flow assays. Essays in Biochemistry 60: 111–120."
        url: null
  - area: Catalysis
    title: Why a gram of platinum is enough
    description: >-
      Dispersing a precious metal as particles a few nanometres across converts almost all of it into surface,
      which is the only part that does anything. A car's three-way catalyst contains a few grams of platinum
      group metals; as foil it would do essentially nothing. The same reasoning sets fuel-cell loadings, and
      the behaviour frequently depends on which facets the particles expose — so shape control is a catalytic
      variable, which is where this meets [catalysis](/chemistry/catalysis/) and
      [surface analysis](/chemistry/surface-analysis/).
    sources:
      - citation: "Bell, A. T. (2003). The impact of nanoscience on heterogeneous catalysis. Science 299: 1688–1691."
        url: null

further_reading:
  - citation: "Talapin, D. V., Lee, J.-S., Kovalenko, M. V. & Shevchenko, E. V. (2010). Prospects of colloidal nanocrystals for electronic and optoelectronic applications. Chemical Reviews 110: 389–458."
    url: null
    note: The synthesis and the properties together, with the surface treated as part of the material.
  - citation: "Boles, M. A., Ling, D., Hyeon, T. & Talapin, D. V. (2016). The surface science of nanocrystals. Nature Materials 15: 141–153."
    url: null
    note: What is actually known about the ligand shell, and how much is assumed.
  - citation: "Dresselhaus, M. S., Dresselhaus, G. & Eklund, P. C. (1996). Science of Fullerenes and Carbon Nanotubes. Academic Press."
    url: null
    note: Written while the field was being established; the structural reasoning is still the clearest available.
---

## Most of the Atoms Are on the Outside

{{fig:faraday|Michael Faraday}} reduced a gold salt with phosphorus in 1857 and got a clear ruby-red fluid. He established that the gold in it was metallic and finely divided rather than chemically combined, noted that adding salt turned the liquid blue and that gelatin reversed the change, and kept the samples. They are still at the Royal Institution and they are still red.

Nothing about the gold was different. The pieces were small, and smallness turned out to be sufficient to change the colour of a metal.

The reason is a ratio that behaves badly. Divide a solid finer and the surface grows relative to the volume as the inverse of the diameter — gently while the pieces are large, and then not gently at all. For gold, where neighbouring atoms are 0.288 nm apart:

| Particle diameter | Fraction of atoms at the surface |
| --- | --- |
| 100 nm | 1.7% |
| 10 nm | 16% |
| 5 nm | 31% |
| 3 nm | 47% |
| 2 nm | 64% |

Below ten nanometres the surface stops being a correction to a bulk solid and becomes most of the material. And since surface atoms have fewer neighbours, higher energy and different reactivity, every quantity a chemist is accustomed to treating as a property of a substance becomes a function of a dimension instead. {{fig:buffat|Philippe Buffat}} and {{fig:borel|Jean-Pierre Borel}} measured the extreme case in 1976: gold, which melts at 1,064 °C in a crucible, melts below 400 °C at two and a half nanometres.

So a nanomaterial is not a small piece of a known substance. It is closer to a very large molecule, whose properties depend on how many atoms it has.

## Carbon Found Three New Forms

The element with the largest literature acquired two new allotropes in six years, both by looking at soot properly.

{{fig:kroto|Harold Kroto}}, {{fig:smalley|Richard Smalley}}, {{fig:curl|Robert Curl}}, {{fig:heath|James Heath}} and {{fig:obrien|Sean O'Brien}} were vaporising graphite with a laser in 1985 to study carbon chains in interstellar space, and found an unexpectedly intense mass-spectral peak at exactly sixty carbon atoms. Their proposal — a closed cage of twelve pentagons and twenty hexagons, the pattern of a football — was an inference from one number, and it was disputed for five years because a mass spectrum does not show a structure. The argument ended when {{fig:kratschmer|Wolfgang Krätschmer}} and {{fig:huffman|Donald Huffman}} found that an ordinary carbon arc makes the stuff by the gram, at which point it could be crystallised and settled.

{{fig:iijima|Sumio Iijima}} looked at arc soot by electron microscopy in 1991 and found concentric cylinders of graphitic carbon, nanometres across and micrometres long. Carbon nanotubes have the highest measured tensile strength of any material, above a hundred gigapascals, and they conduct along their length as either a metal or a semiconductor — determined not by composition, which is pure carbon, but by the angle at which the sheet is notionally rolled up. Electronic character following from geometry is the same point the two-dimensional case makes in [topological matter](/physics/topological-matter/).

## Colour by Size, and Shape by Ligand

The semiconductor case is where the field's chemistry became exact.

{{fig:ekimov|Alexei Ekimov}} noticed in 1981 that semiconductor crystallites grown inside a glass absorbed at wavelengths depending on their size, and {{fig:brus|Louis Brus}} found the same in solution. The cause is confinement: in a crystal smaller than the natural separation of an electron and its hole, the carriers are squeezed into a smaller box and their energies rise, so the band gap widens as the particle shrinks.

Turning that into a usable material was a synthetic problem, because a mixture of sizes gives a mixture of colours. {{fig:bawendi|Moungi Bawendi}}'s group solved it in 1993 with a method whose logic is worth stating plainly: inject the precursors rapidly into a hot coordinating solvent, so that the concentration spikes above the nucleation threshold, collapses as nuclei form, and then stays in the range where existing particles grow but new ones cannot start. All the particles are born within the same instant and grow for the same time, so they end up the same size. Separating nucleation from growth in time is the whole technique, and {{fig:ekimov|Ekimov}}, {{fig:brus|Brus}} and {{fig:bawendi|Bawendi}} shared the 2023 Nobel Prize for the work.

Once size was controlled, shape followed, and the lever was the ligand shell. A molecule bound to the growing crystal binds some faces more strongly than others and slows their growth, so the particle elongates, flattens or facets. {{fig:peng|Xiaogang Peng}} and others showed that rods, plates, cubes and branched forms come from the same reagents with a different surfactant. This is a genuinely chemical kind of control — a coordination preference, of the sort set out in [coordination chemistry](/chemistry/coordination-chemistry/), deciding a crystal's morphology.

The same solution-processing instinct produced an unexpected photovoltaic. {{fig:kojima|Akihiro Kojima}} and {{fig:miyasaka|Tsutomu Miyasaka}} used a lead halide perovskite as a light absorber in 2009 and got 3.8% efficiency; replacing the liquid electrolyte with a solid hole conductor in 2012 took it past 10%; certified efficiencies passed 25% within a decade. Nothing else has improved that fast. The material is spun on from solution a hundred degrees below silicon's processing temperature, which should fill it with the defects that would destroy a conventional semiconductor — and it works anyway, because its defect levels fall outside the gap rather than inside it. A material that tolerates being made badly, which is a design criterion the [defect chemistry](/chemistry/defect-chemistry/) of silicon never permitted.

## A Closer Look: What Changes at Three Nanometres

Take a gold sphere three nanometres across and count what is in it. Gold is face-centred cubic with a lattice parameter of 0.408 nm and four atoms per cell, so each atom occupies

$$
\frac{(0.408)^3}{4} = \frac{0.0679}{4} = 0.0170\ \text{nm}^3.
$$

The sphere's volume is $\frac{\pi}{6}(3)^3 = 14.1$ nm³, so it contains

$$
\frac{14.1}{0.0170} \approx 830\ \text{atoms}.
$$

Of those, the fraction within one atomic layer of the surface is $1 - (1 - 2a/d)^3$ with $a = 0.288$ nm, which gives 47% — about **390 surface atoms out of 830**. Half the material is interface. There is no meaningful bulk to speak of, and a quantity like melting point, which is defined by a competition between bulk and surface free energy, has no reason to keep its bulk value. It does not: the measured melting point falls from 1,337 K to under 700 K by two and a half nanometres.

Now the semiconductor case, where the effect is used rather than merely observed. Cadmium selenide has a bulk band gap of 1.74 eV, corresponding to 713 nm — just past the red end of the visible. Confining it raises the gap, and because the confinement energy of a particle in a box scales as $1/R^2$, halving the diameter quadruples the shift. Measured emission wavelengths:

| Diameter | Emission | Colour |
| --- | --- | --- |
| 2.1 nm | 510 nm | green |
| 3.0 nm | 545 nm | yellow-green |
| 4.0 nm | 590 nm | orange |
| 5.5 nm | 620 nm | red |
| 6.5 nm | 645 nm | deep red |
| bulk | 713 nm | invisible |

One compound, one crystal structure, the entire visible spectrum covered by changing a diameter by a factor of three. It is worth noting honestly that the simple effective-mass formula gets this trend right and the magnitude wrong — it over-predicts the shift badly below about three nanometres, because a particle of 800 atoms is not well described by treating the electron as a free carrier in a dielectric continuum.

The third number explains why the synthesis has the form it does. Differentiating the confinement term, a relative spread in radius $\delta R/R$ produces a relative spread in confinement energy of about $2\,\delta R/R$. A display needs an emission linewidth of roughly 30 nm at 550 nm, which is 5% in wavelength; the confinement term is most of the photon energy's variable part, so the particles must be uniform to within a few per cent in **diameter** — which for an 830-atom particle means within about a single atomic layer.

That is an extraordinary requirement to place on a precipitation from solution, and it is why the procedure is an injection into a hot flask rather than a mixing of two reagents. It is also exactly why the field's scale-up problem, recorded above, is severe. The method depends on the mixture becoming homogeneous faster than nuclei form. In ten millilitres that takes well under a second and the condition holds; in ten litres it does not, so nucleation continues while the first particles are already growing, the distribution broadens, and nothing downstream can narrow it again, because a nucleus cannot be unmade. The gap between a flask and a factory is, in this field, a mixing time.

## Small, and Then What?

The chemistry of making these materials is in good order. Size is controlled to an atomic layer, shape to a facet, composition to a shell-by-shell structure. What is not in good order is everything on either side of the synthesis.

On the inward side, the surface is largely uncharacterised. For a three-nanometre particle the ligand shell is a substantial share of the mass and effectively all of the chemistry — it sets solubility, stability, electronic passivation and catalytic behaviour — and how many ligands there are, what they bind and how fast they come and go is established for a few model systems and assumed for the rest. The electronic losses that keep quantum-dot devices below their limits are surface recombination, so this is not a question of tidiness.

On the outward side is scale, and the mixing argument above is most of the reason. The applications that have arrived are the ones that need grams and tolerate variation: the red line of a rapid diagnostic test, which is Faraday's colloid read by eye; the few grams of platinum in a catalytic converter, dispersed so finely that almost every atom is working surface; the conversion film in a quantum-dot display. The ones that have not arrived mostly need tonnes.

Which leaves the thread's recurring difficulty in a new form. [Solid-state chemistry](/chemistry/solid-state-chemistry/) cannot predict a route to a compound it can compute; [porous frameworks](/chemistry/porous-frameworks/) cannot predict which framework a recipe will give; and here a recipe that works cannot be relied on to work at a different volume. In each case the obstacle is that the product is selected during nucleation, in a few nanometres and a few milliseconds, which is the part of the process nobody can see.
