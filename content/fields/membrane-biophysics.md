---
id: membrane-biophysics
domain: biology
thread: structure
name: Membrane Biophysics
parent_ids:
  - structural-biology
  - cell-biology
era_emerged: 1925 – 2010
core_question: What are the physical properties of a sheet two molecules thick, and how do the proteins embedded in it let selected substances through?

summary: |-
  Every cell is bounded by a film about five nanometres thick, made of two layers of lipid molecules with their greasy tails facing each other. That it is two layers was established in 1925 by a measurement of beautiful economy: extract the lipid from a counted number of red blood cells, spread it as a monolayer on water, measure the area, and compare with the total surface area of the cells. The ratio was two.

  A bilayer is a remarkable material. It is self-sealing, almost impermeable to ions, fluid in the plane but ordered across it, and it behaves mechanically as a surface with bending stiffness rather than as a solid sheet — which is why red blood cells have the shape they do, and why the mathematics of membrane shape is the differential geometry of surfaces minimising a curvature energy. The electrical insulation is nearly perfect, which is what makes the voltage across a membrane useful and makes the proteins that selectively break the insulation so important. The structure of one of them, a potassium channel solved in 1998, showed how a protein can pass potassium ten thousand times more readily than sodium, which is smaller.

key_ideas:
  - term: Lipid bilayer
    definition: >-
      Two sheets of amphipathic molecules, polar heads out and hydrophobic tails inward. It assembles
      spontaneously in water, reseals when punctured, and has no covalent bonds holding it together —
      the structure is maintained entirely by the hydrophobic effect.
    turning_point_id: gorter-grendel-bilayer
  - term: Specific capacitance
    definition: >-
      About 1 microfarad per square centimetre for every biological membrane measured, which
      corresponds to about 2 nm of hydrocarbon between two conducting solutions. The electrical
      measurement independently fixes the thickness.
    turning_point_id: mueller-black-membrane
  - term: Bending energy
    definition: >-
      A bilayer resists being curved, with an energy per unit area quadratic in curvature. Minimising
      that energy at fixed area and volume predicts the shapes a red blood cell and a vesicle adopt,
      and makes membrane shape a problem in the geometry of surfaces.
    turning_point_id: helfrich-curvature-elasticity
  - term: Selectivity filter
    definition: >-
      The narrow stretch of a channel that discriminates between ions. In a potassium channel, carbonyl
      oxygens are positioned to replace the water a potassium ion loses on entering, at a spacing that
      suits potassium and not the smaller sodium.
    turning_point_id: mackinnon-potassium-channel
  - term: Gating
    definition: >-
      A channel is not a hole but a valve, opening and closing in response to voltage, a bound ligand,
      or mechanical tension in the surrounding membrane. Which stimulus opens it defines the channel's
      role.
    turning_point_id: piezo-channels
  - term: Water channel
    definition: >-
      A pore that passes water at enormous rates while excluding protons, which it must do by presenting
      a geometry in which a hydrogen-bonded chain of water cannot carry charge along it.
    turning_point_id: agre-aquaporin

turning_points:
  - id: gorter-grendel-bilayer
    date: "1925"
    type: DISCOVERY
    title: The membrane is two molecules thick
    description: >-
      Evert Gorter and François Grendel extract the lipids from a measured volume of blood of known cell
      count, spread them on a water surface in a Langmuir trough, and compress until a monolayer forms.
      The area of that monolayer is about twice the total surface area of the cells it came from, so the
      membrane must be two molecular layers thick. Their individual numbers contained compensating
      errors, and the conclusion was right and has never been displaced.
    contested: false
    sources:
      - citation: "Gorter, E. & Grendel, F. (1925). On bimolecular layers of lipoids on the chromocytes of the blood. Journal of Experimental Medicine 41: 439–443."
        url: null
      - citation: "Edidin, M. (2003). Lipids on the frontier: a century of cell-membrane bilayers. Nature Reviews Molecular Cell Biology 4: 414–418."
        url: null

  - id: mueller-black-membrane
    date: 1962 – 1963
    type: TECHNIQUE-INVENTED
    title: An artificial membrane to measure
    description: >-
      Paul Mueller and Donald Rudin paint a lipid solution across a small hole separating two
      compartments of salt solution, and the film thins spontaneously until it is black in reflected
      light — a single bilayer. Its electrical properties can then be measured directly: a capacitance
      near 1 µF/cm², and a resistance so high that the bilayer is one of the best insulators known for
      its thickness. Adding a trace of certain antibiotics makes the resistance drop in discrete steps,
      which was the first observation of single ion channels opening and closing.
    contested: false
    sources:
      - citation: "Mueller, P., Rudin, D. O., Tien, H. T. & Wescott, W. C. (1962). Reconstitution of cell membrane structure in vitro and its transformation into an excitable system. Nature 194: 979–980."
        url: null
      - citation: "Hladky, S. B. & Haydon, D. A. (1970). Discreteness of conductance change in bimolecular lipid membranes in the presence of certain antibiotics. Nature 225: 451–453."
        url: null

  - id: helfrich-curvature-elasticity
    date: "1973"
    type: SYNTHESIS
    title: Membrane shape as a minimisation problem
    description: >-
      Wolfgang Helfrich proposes that a bilayer be treated as a two-dimensional elastic sheet whose
      energy depends on how it is curved, with a bending modulus and a spontaneous curvature, in direct
      analogy with the elastic theory of liquid crystals. Minimising that energy at fixed area and
      enclosed volume reproduces the biconcave disc shape of the red blood cell and the sequence of
      shapes a vesicle passes through as its volume is changed. Membrane shape becomes a calculus of
      variations problem on a surface.
    contested: false
    sources:
      - citation: "Helfrich, W. (1973). Elastic properties of lipid bilayers: theory and possible experiments. Zeitschrift für Naturforschung C 28: 693–703."
        url: null
      - citation: "Seifert, U. (1997). Configurations of fluid membranes and vesicles. Advances in Physics 46: 13–137."
        url: null

  - id: agre-aquaporin
    date: 1992 – 2000
    type: DISCOVERY
    title: The water channel
    description: >-
      Water crosses some membranes far faster than diffusion through lipid can explain, and a protein
      channel had been postulated for decades without being found. Peter Agre identifies a 28-kilodalton
      red-cell protein of unknown function, shows that expressing it in frog eggs makes them swell and
      burst in dilute solution, and that the effect is blocked by mercury. The structure, solved in 2000,
      shows how the pore passes billions of water molecules per second while excluding protons: a single
      charged arginine and a break in the hydrogen-bond chain at the pore's centre.
    contested: false
    sources:
      - citation: "Preston, G. M., Carroll, T. P., Guggino, W. B. & Agre, P. (1992). Appearance of water channels in Xenopus oocytes expressing red cell CHIP28 protein. Science 256: 385–387."
        url: null
      - citation: "Murata, K. et al. (2000). Structural determinants of water permeation through aquaporin-1. Nature 407: 599–605."
        url: null

  - id: mackinnon-potassium-channel
    date: 1998 – 2003
    type: DISCOVERY
    title: How a channel chooses potassium over sodium
    description: >-
      Roderick MacKinnon solves the structure of a bacterial potassium channel, the first ion channel to
      be determined atomically. The selectivity filter is a narrow stretch lined by backbone carbonyl
      oxygens, positioned so that a potassium ion stripped of its hydration shell is coordinated by them
      at almost exactly the distances water had provided. Sodium, being smaller, cannot be coordinated
      properly at that spacing, so the energetic cost of dehydrating it is not repaid — which is why a
      channel passes the larger ion and blocks the smaller by a factor of ten thousand.
    contested: false
    sources:
      - citation: "Doyle, D. A. et al. (1998). The structure of the potassium channel: molecular basis of K+ conduction and selectivity. Science 280: 69–77."
        url: null
      - citation: "MacKinnon, R. (2003). Potassium channels. FEBS Letters 555: 62–65."
        url: null

  - id: piezo-channels
    date: 2010
    type: DISCOVERY
    title: Channels that feel force
    description: >-
      Touch, hearing, blood-pressure sensing and the sensation of a full bladder all require a protein
      that converts mechanical force into an electrical signal, and for decades none was identified in
      vertebrates. Ardem Patapoutian's group screens a cell line that responds to poking, silencing
      candidate genes one at a time, and finds two: Piezo1 and Piezo2. Their structures turned out to be
      three-bladed propellers that locally curve the membrane, so that tension in the bilayer flattens
      the blades and opens the pore — gating by membrane mechanics rather than by voltage or ligand.
    contested: false
    sources:
      - citation: "Coste, B. et al. (2010). Piezo1 and Piezo2 are essential components of distinct mechanically activated cation channels. Science 330: 55–60."
        url: null
      - citation: "Ge, J. et al. (2015). Architecture of the mammalian mechanosensitive Piezo1 channel. Nature 527: 64–69."
        url: null

open_problems:
  - id: lipid-organisation-in-vivo
    name: How lipids are organised in a living membrane
    status: open
    status_note: Open as of 2026; the existence of rafts is accepted, their size, lifetime and composition are not.
    description: >-
      A membrane contains hundreds of distinct lipid species, asymmetrically distributed between the two
      leaflets, and the proposal that some of them cluster into ordered domains — rafts — enriched in
      cholesterol and sphingolipids has been debated since 1997. Model membranes show such domains
      readily, at micron scale. In living cells the evidence points to assemblies of tens of nanometres
      lasting milliseconds, at the edge of what any method can resolve, and most of the techniques used
      to detect them perturb what they measure.
    why_hard: >-
      The structures in question are smaller than the optical diffraction limit and shorter-lived than
      most labels' response time, and adding a fluorescent tag to a lipid changes its partitioning.
      Fixation, cooling and detergent extraction — the classical approaches — all create or destroy
      domains, so the controls are as contested as the results.
    unlocks: >-
      Signalling receptors, viral entry and the sorting of membrane proteins are all claimed to depend on
      lipid organisation, so whether and how lipids cluster determines whether a large body of cell
      biology has a physical basis or a convenient metaphor.
    sources:
      - citation: "Simons, K. & Ikonen, E. (1997). Functional rafts in cell membranes. Nature 387: 569–572."
        url: null
      - citation: "Sezgin, E., Levental, I., Mayor, S. & Eggeling, C. (2017). The mystery of membrane organization. Nature Reviews Molecular Cell Biology 18: 361–374."
        url: null

applications:
  - area: Pharmacology
    title: Channels as drug targets
    description: >-
      Ion channels are the targets of local anaesthetics, many antiepileptics, antiarrhythmics,
      sulfonylureas for diabetes and a large share of analgesics. Their structures turned a trade
      conducted by screening into one that can reason about where a molecule binds and why it is
      selective between closely related channels — which is the central difficulty, since the human
      genome encodes some seventy potassium channels alone.
    domain: biology
    field_id: pharmacology
    sources:
      - citation: "Hille, B. (2001). Ion Channels of Excitable Membranes, 3rd edition. Sinauer."
        url: null
  - area: Geometry
    title: Red blood cells as a variational problem
    description: >-
      Minimising Helfrich's bending energy over all closed surfaces of given area and enclosed volume
      produces the biconcave disc of a red blood cell as a solution, with no reference to biology. The
      resulting equations are a fourth-order problem in the differential geometry of surfaces, related
      to the Willmore functional, and membrane shape has become one of the standard applications of
      geometric analysis to a physical system.
    domain: math
    field_id: differential-geometry
    sources:
      - citation: "Seifert, U., Berndl, K. & Lipowsky, R. (1991). Shape transformations of vesicles. Physical Review A 44: 1182–1202."
        url: null
      - citation: "Deuling, H. J. & Helfrich, W. (1976). Red blood cell shapes as explained on the basis of curvature elasticity. Biophysical Journal 16: 861–868."
        url: null
  - area: Drug delivery
    title: Lipid nanoparticles
    description: >-
      Getting a fragile molecule such as messenger RNA into a cell means wrapping it in something that
      fuses with a membrane, and the ionisable lipid nanoparticles used in the COVID-19 mRNA vaccines are
      the result of thirty years of work on how bilayer composition controls fusion, endosomal escape and
      stability. The formulation problem is membrane biophysics applied in reverse.
    sources:
      - citation: "Hou, X., Zaks, T., Langer, R. & Dong, Y. (2021). Lipid nanoparticles for mRNA delivery. Nature Reviews Materials 6: 1078–1094."
        url: null

further_reading:
  - citation: "Hille, B. (2001). Ion Channels of Excitable Membranes, 3rd edition. Sinauer."
    url: null
    note: The reference on channels, quantitative and historically careful.
  - citation: "Phillips, R., Kondev, J., Theriot, J. & Garcia, H. (2012). Physical Biology of the Cell, 2nd edition. Garland."
    url: null
    note: Works membrane mechanics and channel energetics out in numbers, as estimates to be checked.
  - citation: "Edidin, M. (2003). Lipids on the frontier: a century of cell-membrane bilayers. Nature Reviews Molecular Cell Biology 4: 414–418."
    url: null
    note: A short history of how the bilayer picture was established and revised.
---

## A Sheet Two Molecules Thick

The cell membrane was, for most of the nineteenth century, an inference: something must be keeping the inside in, because cells swell in dilute solutions and shrink in concentrated ones. Charles Overton showed around 1900 that substances cross in order of how well they dissolve in oil, which implied the barrier is lipid.

{{fig:gorter|Evert Gorter}} and {{fig:grendel|François Grendel}} determined its thickness in 1925 by an argument that requires no microscope. Take blood with a counted number of red cells. Extract the lipid with acetone. Spread the extract on the surface of water in a Langmuir trough and compress it until the molecules are packed upright in a single layer, which shows as a sharp rise in surface pressure. Measure that area and compare it with the total surface area of the cells the lipid came from.

The answer was about two. Not one, not twenty — two layers of molecules, which is the thinnest self-sealing barrier chemistry allows, and the structure has been confirmed by every later technique.

## A Closer Look: Three Independent Ways to Measure a Membrane

**By counting molecules.** A human red blood cell has a surface area of about 140 µm². A phospholipid headgroup occupies about 0.65 nm² in a packed bilayer, so one leaflet needs

$$
\frac{140 \times 10^{-12}\ \mathrm{m^{2}}}{0.65 \times 10^{-18}\ \mathrm{m^{2}}} = 2.2 \times 10^{8}\ \text{molecules},
$$

and both leaflets about $4\times10^{8}$ lipid molecules per cell. That figure is what Gorter and Grendel's monolayer area amounts to, and it is the sort of number that makes the bilayer concrete: four hundred million molecules, held in place by nothing but their dislike of water.

**By electricity.** A bilayer separating two salt solutions is a capacitor: conductor, insulator, conductor. Its specific capacitance is

$$
\frac{C}{A} = \frac{\varepsilon_0 \varepsilon_r}{d}.
$$

Hydrocarbon has a relative permittivity of about 2.2, and the measured capacitance of every biological membrane and every artificial black film is close to 1 µF/cm², or $10^{-2}$ F/m². Solving for the thickness of the insulating layer:

$$
d = \frac{(8.854\times10^{-12})(2.2)}{10^{-2}} = 1.9 \times 10^{-9}\ \mathrm{m} \approx 2\ \mathrm{nm}.
$$

Two nanometres of hydrocarbon — the thickness of two lipid tails meeting tail-to-tail, with the headgroups and their water outside the dielectric. An electrical measurement, with no chemistry in it, reproduces the structural answer. This is why the capacitance figure appears in every textbook of membrane physiology: it is a thickness measurement disguised as a circuit parameter.

**By the field it sustains.** A resting cell holds about 70 mV across a membrane some 4 nm thick overall, so the electric field inside it is

$$
E = \frac{0.07\ \mathrm{V}}{4\times10^{-9}\ \mathrm{m}} = 1.8\times10^{7}\ \mathrm{V/m},
$$

or 18 megavolts per metre. Dry air breaks down at about 3 MV/m, so the membrane holds six times the field that would arc across a spark gap, and does so continuously, for the life of the cell, in a film that is held together by no covalent bonds at all. It is among the best insulators per unit thickness in nature, and the entire electrical activity described under [electrophysiology](/biology/electrophysiology/) consists of proteins briefly and selectively spoiling that insulation.

The same numbers set the scale of what a channel must do. A potassium channel passing $10^{7}$ ions per second carries a current of

$$
(10^{7})(1.6\times10^{-19}) = 1.6\ \mathrm{pA},
$$

which is a picoampere — measurable, one molecule at a time, which is what the patch clamp does.

## Choosing Between Two Ions

The hardest thing a channel does is discriminate. Potassium channels pass K⁺ at near the diffusion limit and exclude Na⁺ by a factor of about ten thousand, and sodium is the *smaller* ion, so a simple size filter would do the opposite.

{{fig:mackinnon|Roderick MacKinnon}}'s 1998 structure shows the trick. An ion in water is surrounded by a shell of water molecules whose oxygens coordinate it, and pulling it out of that shell costs energy — more for sodium, because it is smaller and holds its water more tightly. The channel's selectivity filter is lined with backbone carbonyl oxygens held rigidly at spacings that reproduce almost exactly the coordination geometry that water provided for potassium. A potassium ion therefore pays nothing on balance to enter. A sodium ion, being 0.3 Å smaller in radius, cannot reach those oxygens at the right distances; the filter cannot repay its larger dehydration cost, and it stays out. Selectivity comes from a structure rigid enough to be wrong for the smaller ion.

{{fig:agre|Peter Agre}}'s aquaporin solves a related problem in the opposite direction: pass water at enormous rates while blocking protons, which travel through hydrogen-bonded water chains faster than any ion diffuses. The pore's answer is a positively charged arginine and a geometry that forces one water molecule in the middle to break the chain by reorienting — so there is no continuous hydrogen-bonded path for a proton to hop along.

## A Sheet With Mechanics

A bilayer is fluid in its own plane — lipids diffuse through it like molecules in a two-dimensional liquid — and it has no shear rigidity at all. What it does resist is bending, and {{fig:helfrich|Wolfgang Helfrich}} wrote down the energy for that in 1973 by analogy with liquid crystals: an energy per unit area quadratic in the curvature, with a bending modulus of about 20 $k_BT$.

This converts the shape of a cell into a variational problem. Minimise bending energy over all closed surfaces with a given area and a given enclosed volume, and the solution for a red blood cell's ratio of the two is the biconcave disc it actually has. Changing the volume moves the solution through a family of shapes that matches those observed in vesicles under osmotic stress. The equations that result are fourth-order and belong to the [differential geometry](/math/differential-geometry/) of surfaces, close relatives of the Willmore functional — one of the clearest cases in biology where a shape is explained by a minimisation rather than by a mechanism.

The mechanics is not only descriptive. {{fig:patapoutian|Ardem Patapoutian}}'s Piezo channels, found in 2010, are gated by tension in the surrounding bilayer: each is a three-bladed propeller that dimples the membrane locally, and pulling the membrane taut flattens the blades and opens the pore. Touch, hearing and the sensing of blood pressure all run through a protein that reads the mechanical state of a sheet two molecules thick.

What remains unsettled is how the hundreds of lipid species in a real membrane are arranged, and whether the ordered domains seen readily in model bilayers exist in living cells as anything more than fleeting assemblies at the edge of detectability. That argument has run since 1997 and is the open problem above.
