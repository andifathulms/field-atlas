---
id: elasticity
domain: physics
thread: flow
name: Elasticity and Continuum Mechanics
parent_ids:
  - classical-mechanics
  - fluid-dynamics
era_emerged: 1660 – 1934
core_question: How does a solid deform under load, and why does it break at a tiny fraction of the strength its atomic bonds imply?

summary: |-
  A solid, like a fluid, can be treated as a continuum with a stress at every point. The difference is that a solid remembers its shape: stress depends on how far it has been deformed rather than on how fast it is being deformed. Hooke stated the proportionality in 1678 as an anagram, and the general theory — stress as a tensor with nine components, strain likewise, linked by a matrix of elastic constants — was built by Navier and Cauchy in the 1820s, in parallel with the equations for fluids and from the same continuum idea.

  The surprises are all in the failures. The strength of a material should be calculable from the force needed to pull its atoms apart, and the answer comes out between ten and a hundred times what real materials withstand. Alan Griffith found the reason in 1920 by testing glass fibres: fracture starts at pre-existing flaws, and the stress at the tip of a crack is far higher than the average. Metals have the opposite problem — they are far *weaker* in shear than their bonds imply, which was explained in 1934 by the dislocation, a line defect that lets planes of atoms slip past one another a row at a time. Both results say the same thing: the mechanical properties of solids are set by their defects, not by their chemistry.

key_ideas:
  - term: Stress and strain
    definition: >-
      Stress is force per unit area across an internal surface; strain is the fractional deformation.
      Both are tensors, because the force on a surface need not be perpendicular to it and depends on
      the surface's orientation.
    turning_point_id: cauchy-stress-tensor
  - term: Hooke's law
    definition: >-
      Strain is proportional to stress, up to a limit. The constant of proportionality for stretching
      is Young's modulus — about 200 GPa for steel, 70 for aluminium, 0.001 for rubber.
    turning_point_id: hookes-law
  - term: Buckling
    definition: >-
      A slender column under compression fails not by crushing but by bending sideways, at a load
      proportional to the stiffness and to the inverse square of the length. It is a loss of
      stability, not of strength, which is why doubling a column's length quarters what it carries.
    turning_point_id: euler-buckling
  - term: Stress concentration
    definition: >-
      A hole, notch or crack raises the local stress far above the average — by a factor of three for
      a circular hole, and without bound as a crack tip sharpens. It is why structures fail at
      rivet holes and why a scratch ruins a glass rod.
    turning_point_id: griffith-fracture
  - term: Griffith criterion
    definition: >-
      A crack grows when the elastic energy released by extending it exceeds the energy needed to
      create new surface. This makes fracture strength depend on flaw size as $1/\sqrt{a}$, and
      explains why small samples are stronger than large ones.
    turning_point_id: griffith-fracture
  - term: Dislocation
    definition: >-
      A line defect where a plane of atoms terminates. Shearing a crystal by moving a dislocation
      along costs far less than sliding whole planes at once, which is why metals yield at a
      thousandth of their theoretical shear strength and why they can be hardened by impeding
      dislocation motion.
    turning_point_id: dislocations

turning_points:
  - id: hookes-law
    date: 1660 – 1678
    type: DISCOVERY
    title: Ut tensio, sic vis
    description: >-
      Robert Hooke finds that the extension of a spring is proportional to the load, and publishes it
      in 1678 as the Latin tag *ut tensio, sic vis* — as the extension, so the force — having
      previously secured priority by printing it as the anagram *ceiiinosssttuv*. The law is the
      foundation of the subject and of the spring balance, and Hooke's own interest was in making a
      watch that would keep time at sea.
    contested: false
    sources:
      - citation: "Hooke, R. (1678). De Potentia Restitutiva, or of Spring. John Martyn, London."
        url: null
      - citation: "Timoshenko, S. P. (1953). History of Strength of Materials. McGraw-Hill."
        url: null

  - id: euler-buckling
    date: 1744 – 1757
    type: DISCOVERY
    title: Euler's critical load
    description: >-
      Leonhard Euler analyses the shape a loaded elastic column takes and finds that below a critical
      load the straight column is stable, while above it the column bows out sideways. The critical
      load is proportional to the bending stiffness and inversely proportional to the square of the
      length, so a column twice as long carries a quarter as much. This is the first stability
      calculation in mechanics, and the first demonstration that a structure can fail without any
      material exceeding its strength.
    contested: false
    sources:
      - citation: "Euler, L. (1744). Methodus inveniendi lineas curvas maximi minimive proprietate gaudentes, Additamentum I: De curvis elasticis. Lausanne."
        url: null
      - citation: "Timoshenko, S. P. & Gere, J. M. (1961). Theory of Elastic Stability, 2nd edition. McGraw-Hill."
        url: null

  - id: cauchy-stress-tensor
    date: 1822 – 1828
    type: THEORY-REPLACED
    title: Stress becomes a tensor
    description: >-
      Claude-Louis Navier derives equations for an elastic solid from a molecular model with one
      constant; Augustin-Louis Cauchy, in a series of papers, replaces the molecular picture with a
      continuum one. The force transmitted across an internal surface depends on that surface's
      orientation, and the relationship is linear — so stress is a tensor with nine components, six of
      them independent. Strain is likewise, and the two are linked by a matrix of elastic constants:
      twenty-one for a general crystal, two for an isotropic material.
    contested: true
    contested_note: >-
      The number of independent elastic constants for an isotropic solid was disputed for fifty
      years. The molecular theories of Navier and Poisson predicted one, with a fixed Poisson's ratio
      of 1/4; Cauchy's continuum approach and Green's energy argument allowed two. Measurements
      favoured two, and the "rari-constant" camp held out until the 1880s. The continuum formulation
      won, and the molecular one was not so much refuted as set aside until solid-state physics could
      do it properly.
    sources:
      - citation: "Cauchy, A.-L. (1827). De la pression ou tension dans un corps solide. Exercices de Mathématiques 2: 42–56."
        url: null
      - citation: "Todhunter, I. & Pearson, K. (1886). A History of the Theory of Elasticity and of the Strength of Materials. Cambridge University Press."
        url: null

  - id: rayleigh-surface-waves
    date: 1885 – 1911
    type: DISCOVERY
    title: Waves that travel on a surface
    description: >-
      Lord Rayleigh shows that an elastic half-space supports a wave confined to its surface, decaying
      within a wavelength or so of depth and travelling slightly slower than a shear wave. Augustus
      Love adds a second surface type in a layered medium in 1911. Earthquakes generate both, and
      because surface waves spread in two dimensions rather than three they decay more slowly than
      body waves and carry most of the destructive energy — and most of the information from which the
      Earth's interior has been reconstructed.
    contested: false
    sources:
      - citation: "Rayleigh, Lord (1885). On waves propagated along the plane surface of an elastic solid. Proceedings of the London Mathematical Society 17: 4–11."
        url: null
      - citation: "Love, A. E. H. (1911). Some Problems of Geodynamics. Cambridge University Press."
        url: null

  - id: griffith-fracture
    date: 1920 – 1921
    type: DISCOVERY
    title: Griffith's cracks
    description: >-
      Alan Arnold Griffith, investigating why glass is so much weaker than its bonds imply, notes that
      freshly drawn thin fibres are far stronger than thick rods of the same glass, and that strength
      rises as the fibre is made thinner. He concludes that fracture begins at pre-existing flaws, and
      formulates the criterion: a crack grows when the elastic energy released exceeds the energy
      needed for the new surfaces. Strength then scales as the inverse square root of the largest flaw
      present, which is why strength is a statistical property of a specimen rather than a constant of
      a material.
    contested: false
    sources:
      - citation: "Griffith, A. A. (1921). The phenomena of rupture and flow in solids. Philosophical Transactions of the Royal Society A 221: 163–198."
        url: null
      - citation: "Gordon, J. E. (1976). The New Science of Strong Materials, 2nd edition. Penguin."
        url: null

  - id: dislocations
    date: 1934 – 1956
    type: DISCOVERY
    title: Why metals are soft
    description: >-
      A perfect crystal should resist shear until whole planes of atoms slide over one another, which
      requires a stress around a tenth of the shear modulus. Metals yield at a thousandth of it.
      Geoffrey Ingram Taylor, Egon Orowan and Michael Polanyi independently propose the answer in
      1934: deformation proceeds by the motion of a line defect, where one plane of atoms terminates,
      so only a row of bonds is broken at a time. Dislocations were seen directly by transmission
      electron microscopy in 1956, and understanding them is why alloys, work hardening and heat
      treatment work.
    contested: false
    sources:
      - citation: "Taylor, G. I. (1934). The mechanism of plastic deformation of crystals. Proceedings of the Royal Society A 145: 362–387."
        url: null
      - citation: "Orowan, E. (1934). Zur Kristallplastizität. Zeitschrift für Physik 89: 605–659."
        url: null
      - citation: "Hirsch, P. B., Horne, R. W. & Whelan, M. J. (1956). Direct observations of the arrangement and motion of dislocations in aluminium. Philosophical Magazine 1: 677–684."
        url: null

open_problems:
  - id: friction-from-first-principles
    name: Where the laws of friction come from
    status: open
    status_note: Open as of 2026; Amontons's laws remain empirical, with no derivation from surface physics.
    description: >-
      Friction between dry solids obeys two rules found in 1699: the force is proportional to the load
      and independent of the apparent contact area. Both are strange. Real contact occurs at a small
      fraction of the nominal area, at asperities that deform and adhere, and the number and size of
      those junctions depend on load, roughness, oxide films, humidity and sliding history. No theory
      derives the two laws from a description of the surfaces, and the coefficient of friction cannot
      be predicted for a new pair of materials.
    why_hard: >-
      The relevant physics spans ten orders of magnitude of length, from bond rupture at contacting
      asperities to the elastic deformation of the whole body, and the contacts are hidden between
      the surfaces while they are being made and destroyed. Static and dynamic friction, stick-slip
      and rate dependence all arise from the same multiscale contact problem, and no averaging scheme
      over it has been justified.
    unlocks: >-
      Something like a fifth of the world's energy use goes to overcoming friction. It also controls
      earthquake nucleation, where rate-and-state friction laws fitted in the laboratory are
      extrapolated to faults, and the wear that limits every machine's life.
    sources:
      - citation: "Vakis, A. I. et al. (2018). Modeling and simulation in tribology across scales. Tribology International 125: 169–199."
        url: null
      - citation: "Baumberger, T. & Caroli, C. (2006). Solid friction from stick-slip down to pinning and aging. Advances in Physics 55: 279–348."
        url: null

applications:
  - area: Structural engineering
    title: Designing against instability as well as strength
    description: >-
      A structure must be checked for buckling as well as for stress, because Euler's critical load
      can be reached while every material is well within its limits. Design codes therefore treat
      slenderness, initial out-of-straightness and the residual stresses left by welding and rolling
      as explicit variables, and reduce the theoretical critical load by a factor that depends on
      all three — an admission that the exact formula describes a column nobody can build.
    sources:
      - citation: "Petroski, H. (1994). Design Paradigms: Case Histories of Error and Judgment in Engineering. Cambridge University Press."
        url: null
  - area: Seismology
    title: Reading the Earth's interior from elastic waves
    description: >-
      Compression waves, shear waves and surface waves travel at different speeds that depend on the
      elastic moduli and density of the rock they pass through, so the arrival times of an earthquake's
      waves at stations around the world invert into a profile of the planet's interior. That shear
      waves do not pass through the outer core is how it was discovered to be liquid, in 1926, and the
      same inversion now images mantle plumes and subducted slabs.
    sources:
      - citation: "Jeffreys, H. (1926). The rigidity of the Earth's central core. Monthly Notices of the Royal Astronomical Society 86: 513–516."
        url: null
      - citation: "Shearer, P. M. (2019). Introduction to Seismology, 3rd edition. Cambridge University Press."
        url: null
  - area: Computation
    title: The finite element method came from this problem
    description: >-
      Dividing a structure into small elements, writing the elastic energy of each in terms of the
      displacements of its corners, and minimising the total was devised in the 1940s and 1950s to
      compute stresses in aircraft and dam structures that no closed-form solution could reach. It
      became the general-purpose method for solving partial differential equations of every kind, and
      the largest single use of engineering computing.
    domain: math
    field_id: numerical-pdes
    sources:
      - citation: "Clough, R. W. (1960). The finite element method in plane stress analysis. Proceedings of the 2nd ASCE Conference on Electronic Computation: 345–378."
        url: null
      - citation: "Zienkiewicz, O. C. (1995). Origins, milestones and directions of the finite element method. Archives of Computational Methods in Engineering 2: 1–48."
        url: null

further_reading:
  - citation: "Gordon, J. E. (1976). The New Science of Strong Materials. Penguin."
    url: null
    note: The best popular book on why things break, by an engineer who worked on it.
  - citation: "Landau, L. D. & Lifshitz, E. M. (1986). Theory of Elasticity, 3rd edition. Pergamon."
    url: null
    note: Compact and complete on the continuum theory, including waves and dislocations.
  - citation: "Timoshenko, S. P. (1953). History of Strength of Materials. McGraw-Hill."
    url: null
    note: A history written by a practitioner, strong on how design rules preceded theory.
---

## The Same Continuum, Different Memory

A fluid resists being sheared *faster*; a solid resists being sheared *further*. That one difference, inserted into the same continuum framework, produces the theory of elasticity. {{fig:hooke|Robert Hooke}} found the simplest version of the constitutive law in the 1660s by hanging weights on springs, and published it in 1678 in a form that is characteristic of him — first as the anagram *ceiiinosssttuv*, to secure priority without revealing the result, later unscrambled as *ut tensio, sic vis*.

The general theory arrived with the same people and the same decade as the fluid equations. {{fig:navier|Navier}} built an elastic theory from a molecular model in 1821; {{fig:cauchy|Augustin-Louis Cauchy}} replaced the molecules with a continuum and in doing so invented the stress tensor. The insight is that the force transmitted across an imagined internal surface depends on the orientation of that surface, and depends on it linearly — so the state of stress at a point is not a vector but a nine-component object, of which six are independent.

This produced a fifty-year argument over a number. Navier's and Poisson's molecular theories predicted one independent elastic constant for an isotropic solid, which forces Poisson's ratio to be exactly 1/4. The continuum theory allowed two. Measurements supported two, the "multi-constant" party won, and the molecular approach was not revived until quantum mechanics could compute interatomic forces properly, which is the business of [solid-state physics](/physics/solid-state-physics/).

## Failing Without Breaking

The field's other foundational idea is not about materials at all, and {{fig:euler|Euler}} had it before anyone could measure a stress. A slender column under compression does not fail by being crushed; it bows sideways, at a load

$$
P_{\text{cr}} = \frac{\pi^{2}EI}{L^{2}},
$$

where $EI$ is the bending stiffness. Nothing in the column has exceeded any limit of the material. The straight configuration has simply stopped being stable. Structures fail this way more often than they fail by fracture, and the inverse-square dependence on length is unforgiving: double the column and it carries a quarter.

Buckling is a loss of *stability*, and stability problems behave differently from strength problems in a way that has killed people. A strength calculation is forgiving: exceed the limit by 10% and a ductile material yields locally and redistributes the load. A buckling calculation is not, because beyond the critical load there is no neighbouring equilibrium to fall back into — the column leaves its straight configuration and keeps going. The collapse of the Quebec Bridge in 1907, which killed 75 workers, followed from compression chords whose capacity had been estimated from tests on short specimens and applied to members several times longer, where the inverse-square law governs.

Worse, real structures are imperfect, and buckling is unusually sensitive to imperfection. A perfect cylinder under axial compression has a critical load that can be calculated exactly; a real one, out of round by a fraction of its wall thickness, may carry only a third of it. This imperfection sensitivity is why thin-shell structures — rocket bodies, submarine hulls, silo walls — are designed with large margins against a theoretical figure nobody expects to reach, and why the relevant codes are built on test data rather than on the elegant formula.

## A Closer Look: Why Glass Is a Hundred Times Weaker Than It Should Be

Estimate the strength of glass from its bonds. The theoretical cohesive strength of a brittle solid is roughly

$$
\sigma_{\text{th}} \approx \frac{E}{10},
$$

and for silica glass $E \approx 70$ GPa, giving about **7 GPa**. Measured strength of an ordinary glass rod: around **50 MPa**. The discrepancy is a factor of 140, which is not the kind of error that gets fixed by better measurement.

{{fig:griffith|Alan Griffith}} found the clue in a size effect. Thin glass fibres, freshly drawn, were far stronger than thick rods of the same glass, and the thinner the fibre the stronger it got, approaching the theoretical value as the diameter fell. Strength therefore depends on the specimen, not only on the substance — which means the controlling factor is a *flaw*, and a thinner fibre has less room for a large one.

His criterion is an energy balance. Extending a crack of length $a$ in a stressed plate releases elastic energy, because the material near the crack faces unloads, and the energy released grows as $a^{2}$. It costs surface energy, which grows as $a$. For small cracks the cost wins and the crack is stable; past a critical length the release wins and the crack runs away. Equating the two gives

$$
\sigma_{f} = \sqrt{\frac{2E\gamma}{\pi a}},
$$

with $\gamma$ the surface energy per unit area. Put in glass values: $E = 70$ GPa, $\gamma \approx 0.3$ J/m², and a flaw $a = 1$ µm:

$$
\sigma_{f} = \sqrt{\frac{2(70\times10^{9})(0.3)}{\pi(10^{-6})}} = \sqrt{1.34\times10^{16}} = 1.2\times10^{8}\ \mathrm{Pa} = 116\ \mathrm{MPa}.
$$

A micron-sized flaw accounts for the observed strength within a factor of two. Run the formula backwards for the measured 50 MPa:

$$
a = \frac{2E\gamma}{\pi\sigma_{f}^{2}} = \frac{4.2\times10^{10}}{\pi(2.5\times10^{15})} = 5.3\times10^{-6}\ \mathrm{m}.
$$

A scratch five microns deep — invisible, routinely present on any handled surface — is the difference between 7 GPa and 50 MPa.

Three consequences follow, and all three are engineering practice. Strength depends on $1/\sqrt{a}$, so it is governed by the single largest flaw, which makes it a statistical quantity: large specimens are weaker than small ones because they contain more chances of a big flaw, and brittle materials are specified with a failure probability rather than a strength. Surface condition matters more than bulk composition, which is why glass is tempered or chemically strengthened to put the surface in compression, closing cracks instead of opening them. And toughness, the energy consumed in fracture, is a separate property from strength — a material can be strong and shatter, or weak and absorb enormous energy before failing.

Metals present the mirror-image puzzle. Their *shear* strength should be about $G/10$, roughly 8 GPa for steel, and they yield at a few hundred megapascals — a thousand times too weak. The resolution, found independently by {{fig:gi-taylor|G. I. Taylor}}, {{fig:orowan|Egon Orowan}} and {{fig:polanyi|Michael Polanyi}} in 1934, is the dislocation. Rather than sliding one whole plane of atoms over another, breaking every bond at once, the crystal moves a line defect through itself, breaking one row of bonds at a time — the difference between dragging a carpet and pushing a ruck along it. The defects were not seen until 1956, and in the meantime an entire metallurgy was built on them: alloying elements, precipitates and grain boundaries all work by impeding dislocation motion, and work hardening is dislocations getting in each other's way.

## Waves, and the Interior of a Planet

A continuum with elasticity supports waves, and a solid supports two kinds that a fluid does not: shear waves, in which the motion is transverse, and surface waves. {{fig:rayleigh|Lord Rayleigh}} found the latter in 1885 — a disturbance that decays within about a wavelength of depth and travels just below the shear speed.

This is what made the Earth's interior accessible. An earthquake generates compression waves, shear waves and surface waves; each travels at a speed set by the elastic moduli and density of the rock it is in; each arrives at a seismograph at a different time, refracted and reflected along the way. In 1926 Harold Jeffreys concluded from the absence of shear waves through the centre that the outer core must be liquid, since a fluid has no shear modulus and cannot carry them. The same inversion, with thousands of stations and modern computation, now images subducted slabs and mantle plumes in three dimensions.

Making those computations possible required something else that came out of this field. Stresses in a complicated structure have no closed-form solution, and the method devised for aircraft and dams in the 1940s and 1950s — divide the object into elements, write each one's energy in terms of its corner displacements, minimise the total — turned out to be a general way to solve partial differential equations. The [finite element method](/math/numerical-pdes/) is now the largest single use of engineering computation, and it began as a way of finding out whether a wing would hold.

What happens when a material is neither a simple solid nor a simple fluid — when it flows if pushed slowly and resists if pushed quickly, or when its elasticity comes from entropy rather than from bonds — is [soft matter](/physics/soft-matter/).
