---
id: molecular-machines
domain: biology
thread: structure
name: Molecular Machines
parent_ids:
  - structural-biology
  - cell-biology
era_emerged: 1954 – 1997
core_question: How does a single protein molecule convert chemical energy into directed motion, in a world where thermal collisions are larger than the forces it exerts?

summary: |-
  Muscle shortens, cilia beat, chromosomes are pulled apart, vesicles travel along nerve axons a metre long, bacteria swim. All of this is done by individual protein molecules that consume ATP and move, and the question of how is unlike any question in ordinary mechanics. A molecular motor is a few nanometres across, so it is being struck by water molecules constantly; the energy of one ATP is about twenty times the thermal energy, which is enough to bias motion and nowhere near enough to overpower it. These machines do not push against thermal noise. They ratchet it.

  The experimental history runs from inference to observation. In 1954 two pairs of researchers deduced from light microscopy and X-ray patterns that muscle contracts by filaments sliding past one another rather than by proteins coiling up. In 1973 Howard Berg showed that a bacterial flagellum is not a whip but a propeller turned by a rotary motor. In 1993 an optical trap recorded single kinesin molecules taking 8-nanometre steps along a microtubule, one at a time, and in 1997 a fluorescent actin filament attached to a single ATP synthase was seen to rotate — a protein, watched turning like a crankshaft, three steps per revolution.

key_ideas:
  - term: Sliding filament
    definition: >-
      Muscle shortens because two sets of filaments slide past each other, driven by projections on one
      that attach to the other, pull and release. Nothing changes length; the overlap changes.
    turning_point_id: huxley-sliding-filament
  - term: Cross-bridge cycle
    definition: >-
      A motor's working stroke: bind, change shape, pull, release, reset. Each cycle consumes one ATP,
      and the shape change that does the pulling is a small movement at the nucleotide site amplified
      by a lever arm.
    turning_point_id: myosin-crossbridge-structure
  - term: Processivity
    definition: >-
      Whether a motor stays attached while working. Kinesin has two heads that alternate, so one is
      always bound and a single molecule can walk a hundred steps; muscle myosin detaches after each
      stroke and works only in large teams.
    turning_point_id: kinesin-single-molecule-steps
  - term: Rotary motor
    definition: >-
      A machine whose output is continuous rotation about an axis rather than a linear stroke. ATP
      synthase and the bacterial flagellum are both of this kind, both driven by ions flowing down a
      gradient across a membrane.
    turning_point_id: flagellar-rotation
  - term: Brownian ratchet
    definition: >-
      A mechanism that does not generate motion but rectifies it: thermal fluctuations supply the
      movement, and energy from ATP is spent making backward steps less likely than forward ones. At
      this scale it is the efficient design, not a compromise.
    turning_point_id: brownian-ratchet-theory
  - term: Piconewtons and nanometres
    definition: >-
      The natural units. One ATP yields about 80 pN·nm of usable energy, thermal energy at body
      temperature is about 4 pN·nm, and motors generate a few piconewtons over steps of a few
      nanometres — so a single working stroke is roughly ten times thermal energy.
    turning_point_id: kinesin-single-molecule-steps

turning_points:
  - id: huxley-sliding-filament
    date: "1954"
    type: DISCOVERY
    title: Muscle contracts by sliding
    description: >-
      Two papers appear in the same issue of *Nature*. Hugh Huxley and Jean Hanson, using phase-contrast
      microscopy of isolated myofibrils, and Andrew Huxley and Rolf Niedergerke, using interference
      microscopy of living fibres, independently conclude that the thick and thin filaments do not
      shorten — they slide past one another, and the regions of overlap change. The prevailing view, that
      contraction came from protein chains folding up, was wrong. The sliding model made the force a
      matter of something stepping along something else.
    contested: false
    sources:
      - citation: "Huxley, H. E. & Hanson, J. (1954). Changes in the cross-striations of muscle during contraction and stretch. Nature 173: 973–976."
        url: null
      - citation: "Huxley, A. F. & Niedergerke, R. (1954). Structural changes in muscle during contraction. Nature 173: 971–973."
        url: null

  - id: flagellar-rotation
    date: 1973 – 1974
    type: DISCOVERY
    title: The bacterial flagellum rotates
    description: >-
      A swimming bacterium's flagellum had been assumed to wave like a sperm tail. Howard Berg and
      Robert Anderson argue from the mechanics that a helical filament beating would not produce the
      observed motion, and that it must instead rotate rigidly like a propeller. Michael Silverman and
      Melvin Simon prove it by tethering a cell to a slide by its single flagellum and watching the
      whole body spin. The motor turns at a few hundred revolutions per second, reverses direction in
      a millisecond, and is driven by protons flowing down the membrane gradient rather than by ATP.
    contested: false
    sources:
      - citation: "Berg, H. C. & Anderson, R. A. (1973). Bacteria swim by rotating their flagellar filaments. Nature 245: 380–382."
        url: null
      - citation: "Silverman, M. & Simon, M. (1974). Flagellar rotation and the mechanism of bacterial motility. Nature 249: 73–74."
        url: null
      - citation: "Berg, H. C. (2003). The rotary motor of bacterial flagella. Annual Review of Biochemistry 72: 19–54."
        url: null

  - id: kinesin-single-molecule-steps
    date: 1993
    type: TECHNIQUE-INVENTED
    title: Watching one motor take one step
    description: >-
      Karel Svoboda, Christoph Schmidt, Bruce Schnapp and Steven Block attach a silica bead to a single
      kinesin molecule, hold the bead in an optical trap, and record its position to within a few
      nanometres. The trace is a staircase: the motor advances in discrete 8-nanometre increments,
      matching the spacing of tubulin subunits, with dwell times between them that depend on ATP
      concentration. Increasing the trap's stiffness measures the force at which the motor stalls, about
      5 piconewtons. Molecular mechanics became a measurement on one molecule at a time.
    contested: false
    sources:
      - citation: "Svoboda, K., Schmidt, C. F., Schnapp, B. J. & Block, S. M. (1993). Direct observation of kinesin stepping by optical trapping interferometry. Nature 365: 721–727."
        url: null
      - citation: "Block, S. M. (2007). Kinesin motor mechanics: binding, stepping, tracking, gating, and limping. Biophysical Journal 92: 2986–2995."
        url: null

  - id: myosin-crossbridge-structure
    date: 1993 – 1999
    type: DISCOVERY
    title: The lever arm
    description: >-
      Ivan Rayment and Hazel Holden solve the myosin head, and the structure explains how a small event
      becomes a large motion. Changes at the nucleotide-binding site, of a few ångströms, are transmitted
      through a converter domain to a long α-helical lever arm whose tip swings by around 10 nm.
      Shortening or lengthening the lever arm by protein engineering changes the step size in
      proportion, which confirmed the mechanism in the most direct way available.
    contested: false
    sources:
      - citation: "Rayment, I. et al. (1993). Three-dimensional structure of myosin subfragment-1: a molecular motor. Science 261: 50–58."
        url: null
      - citation: "Uyeda, T. Q. P., Abramson, P. D. & Spudich, J. A. (1996). The neck region of the myosin motor domain acts as a lever arm to generate movement. PNAS 93: 4459–4464."
        url: null

  - id: atp-synthase-rotation
    date: 1994 – 1997
    type: DISCOVERY
    title: A protein seen to rotate
    description: >-
      John Walker's group solves the structure of the F1 part of ATP synthase and finds three pairs of
      subunits arranged around a central asymmetric shaft, each pair caught in a different state — which
      implies the shaft turns. Paul Boyer had predicted exactly this on kinetic grounds and called it
      binding change. In 1997 Kazuhiko Kinosita's group, with Masasuke Yoshida, fix an F1 unit to a glass
      slide, attach a fluorescent actin filament to the shaft, add ATP, and watch the filament rotate —
      anticlockwise, in three 120° steps per revolution.
    contested: false
    sources:
      - citation: "Abrahams, J. P., Leslie, A. G. W., Lutter, R. & Walker, J. E. (1994). Structure at 2.8 Å resolution of F1-ATPase from bovine heart mitochondria. Nature 370: 621–628."
        url: null
      - citation: "Noji, H., Yasuda, R., Yoshida, M. & Kinosita, K. (1997). Direct observation of the rotation of F1-ATPase. Nature 386: 299–302."
        url: null
      - citation: "Boyer, P. D. (1997). The ATP synthase — a splendid molecular machine. Annual Review of Biochemistry 66: 717–749."
        url: null

  - id: brownian-ratchet-theory
    date: 1993 – 1997
    type: SYNTHESIS
    title: Motors as rectifiers of noise
    description: >-
      Rather than modelling a motor as a machine that pushes, theorists treat it as a particle diffusing
      in a potential that switches between shapes as the chemical cycle proceeds. Frank Jülicher, Armand
      Ajdari and Jacques Prost formalise this: the motion comes from thermal fluctuations, and ATP is
      spent biasing which fluctuations are retained. The picture explains why steps are stochastic, why
      motors sometimes step backwards, and why efficiency can approach the thermodynamic limit — and it
      connects molecular motors to the wider physics of systems held out of equilibrium.
    contested: false
    sources:
      - citation: "Jülicher, F., Ajdari, A. & Prost, J. (1997). Modeling molecular motors. Reviews of Modern Physics 69: 1269–1281."
        url: null
      - citation: "Astumian, R. D. (1997). Thermodynamics and kinetics of a Brownian motor. Science 276: 917–922."
        url: null

open_problems:
  - id: motor-coordination
    name: How the two heads are coordinated
    status: open
    status_note: Open as of 2026; the gating mechanism is agreed to exist and not agreed in detail.
    description: >-
      Kinesin and dynein walk hand-over-hand for a hundred steps or more without letting go, which
      requires that the trailing head release only once the leading head has bound. Something must
      communicate between the two heads — mechanical strain through the linker, or a nucleotide state
      relayed between them — and the competing accounts differ in which chemical step is gated and by
      what. Dynein, with a larger and more complicated motor domain, is less understood still.
    why_hard: >-
      The coordination involves transient states lasting microseconds, in a molecule that must be under
      load for the mechanism to operate at all. Structures are of static states, and single-molecule
      measurements report position and force rather than chemistry, so the two kinds of evidence meet
      only through models with many free parameters.
    unlocks: >-
      Intracellular transport failures cause neurodegenerative disease, and motors are increasingly
      targets. A quantitative account of gating would also settle how the design constraints on a
      processive motor differ from those on a team motor like muscle myosin.
    sources:
      - citation: "Hancock, W. O. (2016). The kinesin-1 chemomechanical cycle: stepping toward a consensus. Biophysical Journal 110: 1216–1225."
        url: null
      - citation: "Reck-Peterson, S. L., Redwine, W. B., Vale, R. D. & Carter, A. P. (2018). The cytoplasmic dynein transport machinery and its many cargoes. Nature Reviews Molecular Cell Biology 19: 382–398."
        url: null

applications:
  - area: Neurology
    title: A metre of axon to supply
    description: >-
      A motor neuron's axon can be a metre long while its protein synthesis happens in the cell body, so
      everything the far end needs is carried there by kinesin and brought back by dynein, at around a
      micrometre per second. Mutations in these motors and their adaptors cause hereditary spastic
      paraplegia and forms of motor neuron disease, and transport failure is an early event in several
      neurodegenerative conditions.
    sources:
      - citation: "Millecamps, S. & Julien, J.-P. (2013). Axonal transport deficits and neurodegenerative diseases. Nature Reviews Neuroscience 14: 161–176."
        url: null
  - area: Physics of small systems
    title: Testing fluctuation theorems on one molecule
    description: >-
      A single motor or a single stretched molecule is a system in which work and heat fluctuate by
      amounts comparable to their averages, which is exactly the regime that the fluctuation theorems of
      non-equilibrium statistical mechanics describe. Pulling experiments on RNA hairpins and
      measurements on single motors have been used to verify those relations and to recover free-energy
      differences from irreversible work.
    domain: physics
    field_id: non-equilibrium-physics
    sources:
      - citation: "Collin, D. et al. (2005). Verification of the Crooks fluctuation theorem and recovery of RNA folding free energies. Nature 437: 231–234."
        url: null
      - citation: "Bustamante, C., Liphardt, J. & Ritort, F. (2005). The nonequilibrium thermodynamics of small systems. Physics Today 58(7): 43–48."
        url: null
  - area: Engineering
    title: Synthetic molecular machines
    description: >-
      Chemists have built rotaxanes, catenanes and molecular motors that rotate in one direction when
      driven by light or chemical fuel, work recognised by the 2016 Nobel Prize in Chemistry. They are
      far slower and weaker than the biological versions, and the design problems they face — rectifying
      thermal motion, avoiding backward steps — are the ones biology solved, which is why the natural
      motors are studied as a specification.
    sources:
      - citation: "Erbas-Cakmak, S., Leigh, D. A., McTernan, C. T. & Nussbaumer, A. L. (2015). Artificial molecular machines. Chemical Reviews 115: 10081–10206."
        url: null

further_reading:
  - citation: "Howard, J. (2001). Mechanics of Motor Proteins and the Cytoskeleton. Sinauer."
    url: null
    note: The standard quantitative treatment; works in piconewtons and nanometres throughout.
  - citation: "Berg, H. C. (2004). E. coli in Motion. Springer."
    url: null
    note: Short and superb on the flagellar motor and what swimming at low Reynolds number requires.
  - citation: "Hoffmann, P. M. (2012). Life's Ratchet. Basic Books."
    url: null
    note: A popular account of molecular motors as rectifiers of thermal noise.
---

## Sliding, Not Shortening

Muscle was the obvious place to start, because it is the one case where molecular motion produces an effect visible to the naked eye. The received explanation into the 1950s was that contraction came from protein chains coiling up, as a stretched rubber band retracts.

Two papers in one issue of *Nature* in 1954 showed otherwise. {{fig:hugh-huxley|Hugh Huxley}} and {{fig:jean-hanson|Jean Hanson}} watched isolated myofibrils under phase contrast; {{fig:andrew-huxley|Andrew Huxley}} and {{fig:niedergerke|Rolf Niedergerke}} used interference microscopy on living fibres. Both found that the dark and light bands of striated muscle change in a particular way during contraction: one set of filaments keeps its length and the other set keeps its length, while the region where they overlap grows. Nothing shortens. Things slide.

That changes the problem completely. If filaments slide, something must be stepping along something — attaching, pulling, letting go, reattaching further on. The projections visible between the filaments became the obvious candidate, and the question became what a single one of them does.

## Two Designs, and the Difference Between Them

Once filaments were known to slide, the motors divided into kinds, and the division is not cosmetic.

A **team motor** detaches after every working stroke. Muscle myosin spends most of its cycle unattached, so a single head accomplishes nothing: force is produced because a thick filament carries hundreds of heads whose cycles are uncorrelated, and at any instant a few per cent of them are pulling. The design suits a situation where the load is large and the distance short, and it is why muscle can be enormously strong and cannot move a single cargo.

A **processive motor** must never let go. Kinesin, dragging a vesicle along a microtubule for tens of micrometres, has two heads that alternate: the rear head detaches only after the front one has bound, so the molecule is always attached by at least one point and walks hand over hand for a hundred steps or more. That requires the two heads to communicate, which is the field's main unsolved mechanical problem.

A third design abandons the stroke entirely. {{fig:howard-berg|Howard Berg}} established in 1973 that a bacterium's flagellum is not a whip but a propeller, turned by a rotary motor embedded in the membrane, driven by protons flowing down their gradient rather than by ATP, spinning at a few hundred revolutions per second and reversing in about a millisecond. The reason rotation rather than reciprocation is the right answer is hydrodynamic: at the Reynolds number of a swimming bacterium, around $10^{-5}$, the equations are time-reversible, so any stroke that merely runs backwards on the return brings the organism back where it started. A corkscrew does not have a return stroke. The constraint belongs to [fluid dynamics](/physics/fluid-dynamics/) and the solution to this chapter.

ATP synthase is rotary too, and runs the same machinery in reverse: instead of consuming ATP to turn, it is turned by a proton gradient and makes ATP, which is how almost all of the ATP in the biosphere is produced.

## A Closer Look: What One ATP Buys

The arithmetic of this field is conducted in piconewtons and nanometres, and it is worth establishing the three numbers that bound everything.

**Thermal energy.** At body temperature,

$$
k_B T = (1.38\times10^{-23})(310) = 4.3\times10^{-21}\ \mathrm{J} = 4.3\ \mathrm{pN\,nm}.
$$

**One ATP.** Hydrolysis under cellular conditions releases about 50 kJ/mol, so per molecule

$$
\frac{50{,}000}{6.022\times10^{23}} = 8.3\times10^{-20}\ \mathrm{J} = 83\ \mathrm{pN\,nm},
$$

which is about **20 $k_BT$**. This is the entire budget for one step of one motor.

**One kinesin step.** The optical-trap measurements give a step of 8.2 nm — the spacing of tubulin subunits along a microtubule — and a stall force of about 5 to 6 pN. The work done against that load is

$$
W = (6\ \mathrm{pN})(8.2\ \mathrm{nm}) = 49\ \mathrm{pN\,nm}.
$$

So the efficiency is

$$
\frac{49}{83} = 59\%.
$$

A protein converting chemical energy to mechanical work at nearly 60% efficiency, which is better than a car engine and close to the thermodynamic constraints of the cycle.

The same calculation for ATP synthase, approached from the other direction, agrees in a way that is worth noticing. The motor turns through 120° for each ATP, three per revolution, against a measured torque of about 40 pN·nm. The work per revolution is $2\pi \times 40 = 251$ pN·nm, so per ATP

$$
\frac{251}{3} = 84\ \mathrm{pN\,nm},
$$

which is the full energy of one ATP. The enzyme runs at essentially 100% efficiency, and since it normally runs in reverse — using a proton gradient to *make* ATP — that is what it has to do.

Now the complication that makes this field distinctive. A working stroke is about 50 pN·nm and thermal energy is 4.3 pN·nm, so the ratio is only about twelve. The probability of a thermal fluctuation large enough to undo a step goes as $e^{-12} \approx 6\times10^{-6}$, so backward steps are rare but real, and they are observed. More importantly, during the step itself the motor is being struck by water molecules at every moment; it is not pushing through a vacuum. Estimate the viscous drag on a 5-nm domain moving 8 nm in a millisecond, at $6\pi\eta a v$ with water's viscosity: the force required is of order $10^{-4}$ pN, four orders of magnitude below what the motor generates. Viscosity is not the obstacle. Randomness is.

The resolution, formalised by {{fig:julicher|Frank Jülicher}}, {{fig:ajdari|Armand Ajdari}} and {{fig:prost|Jacques Prost}} in 1997, is that these machines do not fight thermal motion but exploit it. Model the motor as a particle diffusing in an energy landscape whose shape switches as the chemical cycle proceeds. The movement is supplied by thermal collisions, free of charge; what the ATP pays for is biasing the landscape so that a fluctuation in the forward direction is captured and one in the backward direction is not. At this scale a ratchet is the right design, and the stochastic stepping, the occasional backward step and the high efficiency are all consequences of it rather than imperfections. The connection is to the physics of systems held away from equilibrium, which is why single-molecule experiments became the test bed for [non-equilibrium statistical mechanics](/physics/non-equilibrium-physics/).

## Seeing One Molecule Work

The measurements behind those numbers were made possible by an instrument from another thread entirely. An optical trap — a laser focused tightly enough that its intensity gradient pulls a transparent bead towards the focus — exerts and measures forces of exactly a few piconewtons, with position resolution of a nanometre. {{fig:ashkin|Arthur Ashkin}}'s invention, described under [lasers and photonics](/physics/lasers-photonics/), turned out to be matched to biology's scale by coincidence.

{{fig:svoboda|Karel Svoboda}} and {{fig:block|Steven Block}} used one in 1993 to record a single kinesin molecule. The position trace is a staircase: flat dwells punctuated by abrupt 8-nanometre advances, with the dwell times lengthening as ATP is diluted, which shows one ATP per step. Increasing the trap stiffness loads the motor until it stalls, giving the force. This is mechanics on one molecule, and it made the quantities in the previous section measurable rather than inferred.

{{fig:rayment|Ivan Rayment}}'s structure of the myosin head, the same year, explained how a motor amplifies. The chemical event at the nucleotide site is a rearrangement of a few ångströms. It is relayed through a converter domain to a long helix acting as a lever arm, whose far end sweeps about 10 nm. Protein engineers then shortened and lengthened that helix and found the step size changed in proportion — about as direct a confirmation of a mechanical hypothesis as molecular biology affords.

The most startling observation came in 1997, and needed no interpretation at all. {{fig:kinosita|Kazuhiko Kinosita}}'s group fixed single F1-ATPase molecules to a slide, attached a fluorescent actin filament to the central shaft of each, and added ATP. Under the microscope the filaments turned — anticlockwise, in discrete 120° steps, three per revolution, exactly as {{fig:paul-boyer|Paul Boyer}}'s kinetic model had predicted and {{fig:walker|John Walker}}'s structure had implied. A single protein molecule, visibly rotating.

What remains unresolved is the coordination itself. The gating between kinesin's two heads, and the far more elaborate cycle of dynein, involve states lasting microseconds in a molecule that must be under load for the mechanism to work at all — so structures catch the wrong moments and single-molecule traces report position rather than chemistry. The physics of these machines, meanwhile, has become a test bed for [non-equilibrium statistical mechanics](/physics/non-equilibrium-physics/), since a single motor is a system in which work and heat fluctuate by as much as their averages, and the fluctuation relations that describe that regime were verified on exactly this kind of apparatus.
