---
id: reaction-dynamics
domain: chemistry
thread: reaction
name: Reaction Dynamics
parent_ids:
  - transition-state-theory
era_emerged: 1955 – 2021
core_question: What happens during a single collision between two molecules, and can a reaction be watched as it occurs rather than inferred from what is left?

summary: |-
  Everything in classical kinetics is an average. A rate constant describes $10^{20}$ molecules in a flask at a distribution of speeds, orientations and internal energies, colliding at random. Reaction dynamics asks the question underneath: what happens in one encounter, between molecules in known quantum states, approaching at a known speed and angle.

  Answering it required two inventions. Crossed molecular beams, developed from the 1950s, let two thin streams of molecules intersect in a vacuum so that each product is formed in a single collision and can be detected by the direction and speed with which it flies off. The result is a picture of the mechanism no rate law could give: whether the reagents rebound or pass through each other, how the released energy is divided between recoil and vibration, which collisions work and which bounce. Then, in the late 1980s, Ahmed Zewail realised that laser pulses had become shorter than the time a bond takes to break — a hundred femtoseconds — so a reaction could be started with one pulse and photographed with a second. The transition state that transition state theory had treated as an inference became something to take a spectrum of.

key_ideas:
  - term: Single-collision conditions
    definition: >-
      In crossed beams at low enough density, a product molecule has been formed by exactly one collision
      and has not collided again before detection. Everything measured therefore refers to one event, not
      to an average over a thermal distribution.
    turning_point_id: crossed-molecular-beams
  - term: Angular distribution
    definition: >-
      Where the products go. Forward scattering means the reagents passed through each other in a glancing
      encounter; backward scattering means they rebounded. The pattern distinguishes a direct collision
      from one that forms a complex living long enough to forget which way it came in.
    turning_point_id: crossed-molecular-beams
  - term: Energy disposal
    definition: >-
      How the energy released by a reaction is divided between translation, vibration and rotation of the
      products. It is far from statistical, and it is a direct readout of the shape of the potential energy
      surface near the exit.
    turning_point_id: infrared-chemiluminescence
  - term: Femtosecond timescale
    definition: >-
      $10^{-15}$ s. A bond vibrates with a period of 10 to 50 fs and separating fragments clear each other
      in about 100 fs, so a pulse shorter than that can resolve the act of breaking.
    turning_point_id: femtochemistry
  - term: Mode-selective chemistry
    definition: >-
      Putting energy into a specific vibration rather than heating the molecule, and finding that the
      reaction outcome depends on which vibration — so the energy has not had time to redistribute, and a
      bond can be chosen.
    turning_point_id: mode-selective-chemistry
  - term: Reactive resonance
    definition: >-
      A transient quantum state, trapped for a few vibrational periods near the transition state, which
      makes the reaction probability spike at particular collision energies. It is the clearest evidence
      that a reaction is a wave phenomenon rather than a trajectory.
    turning_point_id: reactive-resonances

turning_points:
  - id: crossed-molecular-beams
    date: 1955 – 1972
    type: TECHNIQUE-INVENTED
    title: Crossed molecular beams
    description: >-
      Edward Taylor and Sheldon Datz cross a beam of potassium atoms with one of hydrogen bromide in 1955
      and detect the product by surface ionisation. Dudley Herschbach develops the method through the
      1960s, and Yuan Tseh Lee replaces the element-specific detector with a universal mass spectrometer,
      which opens the technique to any reaction rather than only those involving alkali metals. For the
      first time a measurement referred to one collision: the products' direction and speed, recorded in
      a vacuum chamber where nothing collides twice.
    contested: false
    sources:
      - citation: "Taylor, E. H. & Datz, S. (1955). Study of chemical reaction mechanisms with molecular beams. Journal of Chemical Physics 23: 1711–1718."
        url: null
      - citation: "Herschbach, D. R. (1987). Molecular dynamics of elementary chemical reactions. Angewandte Chemie International Edition 26: 1221–1243."
        url: null
      - citation: "Lee, Y. T. (1987). Molecular beam studies of elementary chemical processes. Science 236: 793–798."
        url: null

  - id: infrared-chemiluminescence
    date: 1958 – 1972
    type: TECHNIQUE-INVENTED
    title: Listening to where the energy went
    description: >-
      John Polanyi measures the infrared light emitted by freshly formed molecules and finds that the
      vibrational states are populated in a way nothing like thermal equilibrium: the reaction of hydrogen
      with chlorine deposits most of its energy in vibration of the new bond, while other reactions put it
      into recoil. The distribution is a fingerprint of the potential energy surface — an early barrier
      sends energy into translation, a late one into vibration — and the population inversion it revealed
      is the basis of the chemical laser.
    contested: false
    sources:
      - citation: "Polanyi, J. C. (1972). Some concepts in reaction dynamics. Accounts of Chemical Research 5: 161–168."
        url: null
      - citation: "Polanyi, J. C. (1987). Some concepts in reaction dynamics. Science 236: 680–690."
        url: null

  - id: transition-state-spectroscopy
    date: 1987 – 1993
    type: TECHNIQUE-INVENTED
    title: A spectrum of the species that cannot exist
    description: >-
      Daniel Neumark starts from a stable negative ion whose geometry resembles the transition state of a
      neutral reaction, removes the extra electron with a photon, and measures the kinetic energy of the
      electron released. The spectrum reports on the neutral system at the moment of its creation — that
      is, at the transition state — revealing its vibrational structure and, in some cases, resonances
      trapped there. A configuration defined by being unstable had been given a spectrum.
    contested: false
    sources:
      - citation: "Neumark, D. M. (1992). Transition state spectroscopy of bimolecular chemical reactions. Annual Review of Physical Chemistry 43: 153–176."
        url: null
      - citation: "Manolopoulos, D. E. et al. (1993). The transition state of the F + H2 reaction. Science 262: 1852–1855."
        url: null

  - id: femtochemistry
    date: 1987 – 1999
    type: TECHNIQUE-INVENTED
    title: Femtochemistry
    description: >-
      Ahmed Zewail starts a reaction with a laser pulse of a few tens of femtoseconds and interrogates it
      with a second pulse at a controlled delay, building up the course of the reaction frame by frame. In
      sodium iodide the pair of atoms is seen to separate and return, oscillating several times before
      finally dissociating; in other systems the moment of bond breaking is located to within tens of
      femtoseconds. The method made the transition state an object of observation rather than inference,
      and depended entirely on pulses from the laser physics of the preceding decade.
    contested: false
    sources:
      - citation: "Zewail, A. H. (1988). Laser femtochemistry. Science 242: 1645–1653."
        url: null
      - citation: "Rosker, M. J., Dantus, M. & Zewail, A. H. (1988). Femtosecond clocking of the chemical bond. Science 241: 1200–1202."
        url: null
      - citation: "Zewail, A. H. (2000). Femtochemistry: atomic-scale dynamics of the chemical bond. Journal of Physical Chemistry A 104: 5660–5694."
        url: null

  - id: mode-selective-chemistry
    date: 1990 – 2004
    type: MECHANISM-ESTABLISHED
    title: Choosing which bond breaks
    description: >-
      The received assumption was that energy put into a polyatomic molecule redistributes among its
      vibrations faster than it can react, so only the total matters. F. Fleming Crim, Richard Zare and
      others show that this is not always so: exciting a particular O–H stretch in water, or a specific
      C–H stretch in a larger molecule, changes which bond a subsequent collision attacks, and by large
      factors. Chemistry can, in favourable cases, be steered by the choice of vibration rather than by
      temperature.
    contested: false
    sources:
      - citation: "Crim, F. F. (1999). Vibrational state control of bimolecular reactions. Accounts of Chemical Research 32: 877–884."
        url: null
      - citation: "Zare, R. N. (1998). Laser control of chemical reactions. Science 279: 1875–1879."
        url: null

  - id: reactive-resonances
    date: 1988 – 2018
    type: MECHANISM-ESTABLISHED
    title: Resonances in a reaction
    description: >-
      Theory had predicted that a reacting system can be briefly trapped near the transition state in a
      quantum state with a lifetime of a few vibrations, making the reaction probability rise sharply at
      particular collision energies. Observing it took thirty years of improvement in beam monochromaticity
      and product detection, in the reactions of fluorine with hydrogen and of hydrogen with its isotopes.
      A reaction turns out to show interference structure, which no trajectory picture produces.
    contested: false
    sources:
      - citation: "Skodje, R. T. et al. (2000). Resonance-mediated chemical reaction: F + HD → HF + D. Physical Review Letters 85: 1206–1209."
        url: null
      - citation: "Yang, T. et al. (2018). Extremely short-lived reaction resonances in Cl + HD. Science 361: 1234–1238."
        url: null

open_problems:
  - id: polyatomic-reaction-dynamics
    name: Exact dynamics for a molecule worth reacting
    status: open
    status_note: Open as of 2026; exact quantum treatment is routine for three or four atoms and infeasible beyond about six.
    description: >-
      The reactions whose dynamics are understood exactly contain three or four atoms. Solving the quantum
      dynamics scales exponentially with the number of degrees of freedom, so systems of ten atoms — a
      small organic molecule — are beyond reach, and the reactions chemists care about have dozens. Mixed
      approaches treat most degrees of freedom classically, which loses exactly the quantum effects
      resonance experiments have shown to matter.
    why_hard: >-
      The same dimensional problem that limits electronic structure recurs for nuclear motion, and here
      there is no analogue of density functional theory to collapse it. A full treatment also needs a
      potential energy surface over all those coordinates, which must itself be computed point by point or
      fitted, and the fitting error propagates into the dynamics unpredictably.
    unlocks: >-
      Rate constants and product distributions predicted for reactions nobody has run, including the ones
      in flames, in the atmosphere and in interstellar clouds, where the conditions cannot be reproduced in
      a laboratory.
    sources:
      - citation: "Guo, H. (2012). Quantum dynamics of complex-forming bimolecular reactions. International Reviews in Physical Chemistry 31: 1–68."
        url: null
      - citation: "Bowman, J. M., Czakó, G. & Fu, B. (2011). High-dimensional ab initio potential energy surfaces for reaction dynamics calculations. Physical Chemistry Chemical Physics 13: 8094–8111."
        url: null

applications:
  - area: Astrochemistry
    title: Reactions that only happen in space
    description: >-
      Interstellar clouds are at 10 K and a few thousand molecules per cubic centimetre, where a collision
      is a once-in-a-century event and three-body collisions never occur. Beam and trap experiments supply
      the rate constants for those conditions directly, which is how the chemistry producing the two
      hundred-odd known interstellar molecules is modelled — and why the discovery that some reactions
      speed up as the temperature falls mattered.
    domain: physics
    field_id: galactic-astronomy
    sources:
      - citation: "Smith, I. W. M. (2011). Laboratory astrochemistry: gas-phase processes. Annual Review of Astronomy and Astrophysics 49: 29–66."
        url: null
  - area: Lasers
    title: The chemical laser
    description: >-
      Polanyi's measurements showed that some reactions deposit most of their energy in a single vibration
      of the product, leaving more molecules in an excited state than in the ground state. That is a
      population inversion produced by chemistry rather than by pumping, and it is the basis of the
      hydrogen fluoride and chemical oxygen–iodine lasers, which reach megawatt powers without any
      electrical supply.
    domain: physics
    field_id: lasers-photonics
    sources:
      - citation: "Polanyi, J. C. (1961). Proposal for an infrared maser dependent on vibrational excitation. Journal of Chemical Physics 34: 347–348."
        url: null
  - area: Combustion and atmosphere
    title: The rate constants nobody can measure in a flask
    description: >-
      Models of flames and of the atmosphere need rate constants for radical reactions at temperatures and
      pressures where the species cannot be kept long enough to titrate. Beam and laser methods supply them
      one elementary step at a time, and the resulting database is what makes a detailed combustion
      mechanism possible at all — which is where this field feeds back into the networks problem of
      [chemical kinetics](/chemistry/chemical-kinetics/).
    sources:
      - citation: "Baulch, D. L. et al. (2005). Evaluated kinetic data for combustion modeling: supplement II. Journal of Physical and Chemical Reference Data 34: 757–1397."
        url: null

further_reading:
  - citation: "Levine, R. D. (2005). Molecular Reaction Dynamics. Cambridge University Press."
    url: null
    note: The standard graduate text, built around what a single collision can be made to reveal.
  - citation: "Zewail, A. H. (2000). Femtochemistry. Journal of Physical Chemistry A 104: 5660–5694."
    url: null
    note: A long Nobel review; the best account of how the pulses and the chemistry were matched.
  - citation: "Herschbach, D. R. (1987). Molecular dynamics of elementary chemical reactions. Angewandte Chemie International Edition 26: 1221–1243."
    url: null
    note: Crossed beams explained by the person who made them a method.
---

## One Collision at a Time

A rate constant is an average over everything. In a flask the molecules have a spread of speeds, every possible mutual orientation, a distribution of vibrational and rotational states, and they collide repeatedly. Whatever the mechanism does in detail is washed out before the measurement is made.

The way to see underneath it is to arrange for exactly one collision. Two beams of molecules, each a few centimetres wide, are crossed in a chamber evacuated so hard that a molecule's mean free path is metres; where the beams intersect, collisions occur; and the products fly off and are detected before they can hit anything else. {{fig:edward-taylor|Edward Taylor}} and {{fig:datz|Sheldon Datz}} did it first in 1955 with potassium and hydrogen bromide, detecting the product on a hot wire. {{fig:herschbach|Dudley Herschbach}} spent the 1960s turning it into a method, and {{fig:yuan-lee|Yuan Tseh Lee}} replaced the alkali-specific detector with a mass spectrometer, which freed the technique from the handful of reactions a hot wire can see.

What the measurement gives is the direction and speed of the products, and that turns out to be unexpectedly eloquent. If the products emerge mostly *backwards* relative to the incoming reagent, the collision was a rebound: the two met head-on, exchanged an atom and recoiled. If they emerge *forwards*, the reagent passed through in a glancing stripping encounter. And if they emerge equally in all directions, the two stuck together long enough to lose all memory of how they met — a complex, living for many rotations. Three mechanisms, distinguished by where the products go.

{{fig:john-polanyi|John Polanyi}} measured the complementary quantity: not where the energy went in space but which motion it went into. Fresh product molecules glow in the infrared, and the spectrum of that glow says how the released energy is divided between vibration, rotation and recoil. The division is nothing like thermal. Hydrogen and chlorine put most of the energy into vibration of the new bond; other reactions put it into flinging the fragments apart. The pattern maps directly onto the shape of the potential energy surface — whether the barrier comes early in the approach or late — and the fact that it produced more excited molecules than unexcited ones is a population inversion, which is to say a laser.

## A Spectrum of the Saddle Point

The transition state is defined by being unstable, which seems to rule out observing it: a species that survives for less than one vibration cannot be put in a cell and have a spectrum taken. Two methods get at it anyway, from opposite directions.

{{fig:neumark|Daniel Neumark}}'s approach starts from a stable species with the right shape. Many neutral transition states resemble the equilibrium geometry of a corresponding negative ion — the arrangement $\mathrm{[F \cdots H \cdots H]^{-}}$, for instance, is a bound anion and also approximately the saddle point for fluorine attacking hydrogen. Remove the extra electron with a photon of known energy and measure the kinetic energy of the electron that leaves: the difference reports the energy of the neutral system *at the geometry it was created in*, which is the transition state. The resulting spectrum shows vibrational structure in a species with no bound vibrations along the reaction coordinate, and in several cases shows sharp features that are not vibrations at all.

Those features are **reactive resonances**: states in which the system is held near the saddle point for a few vibrational periods, long enough for the wavefunction to interfere with itself, before committing to products. Theory had predicted them for decades. Observing them required beams monochromatic enough that the collision energy is defined to a fraction of a kilojoule, and they appear as a spike in the reaction probability at one particular energy — reported for fluorine with hydrogen deuteride in 2000 and for chlorine with the same partner in 2018, with lifetimes of tens of femtoseconds.

Resonances matter beyond their novelty. A trajectory picture of a reaction — a ball rolling over a pass — cannot produce them, and they are therefore direct evidence that a chemical reaction is a wave phenomenon in which amplitude can be trapped and interfere. They also mean that a rate constant is not always a smooth function of energy, which no form of transition state theory anticipates.

## A Closer Look: Why a Hundred Femtoseconds Is the Right Shutter Speed

Watching a bond break requires knowing how long it takes. Two estimates, which agree.

**From the vibration.** A bond's stretching frequency, expressed as a wavenumber, is typically 1000 to 3000 cm⁻¹. Converting, a vibration at 1000 cm⁻¹ has frequency

$$
\nu = 1000 \times 2.998\times10^{10} = 3.0\times10^{13}\ \mathrm{Hz},
$$

so its period is $1/\nu = 33$ fs. A C–H stretch at 2900 cm⁻¹ has a period of 11 fs. Any process that involves a bond extending must therefore be resolved on a timescale of tens of femtoseconds or it is simply blurred.

**From the separation.** Suppose a bond breaks and the two fragments fly apart with 50 kJ/mol of relative translational energy — a typical figure. For a fragment of mass 20 atomic units, the energy per molecule is

$$
\frac{50000}{6.022\times10^{23}} = 8.3\times10^{-20}\ \mathrm{J}, \qquad m = 20 \times 1.66\times10^{-27} = 3.3\times10^{-26}\ \mathrm{kg},
$$

giving a speed of

$$
v = \sqrt{\frac{2E}{m}} = \sqrt{\frac{2(8.3\times10^{-20})}{3.3\times10^{-26}}} = 2.2\times10^{3}\ \mathrm{m/s}.
$$

The fragments must separate by about 2 Å before the bond can be called broken, which takes

$$
t = \frac{2\times10^{-10}}{2.2\times10^{3}} = 9\times10^{-14}\ \mathrm{s} = 90\ \mathrm{fs}.
$$

Bond breaking takes roughly a hundred femtoseconds. To photograph it, the flash must be shorter than that.

In 1987 such pulses existed, for the reasons set out under [lasers and photonics](/physics/lasers-photonics/) — mode-locked lasers and chirped pulse amplification had brought durations below 100 fs. {{fig:zewail|Ahmed Zewail}} put the two facts together: start the reaction with one pulse, probe it with a second at a controlled delay, and vary the delay to assemble the reaction frame by frame. The delay is set by path length, and 100 fs of delay is 30 µm of extra travel, so the clock is a translation stage.

The results included one that no inference would have produced. In sodium iodide, the excited pair of atoms does not simply fly apart: it separates, is pulled back, separates again, oscillating with a period of about 1 ps and leaking a fraction of its population to dissociation on each outward swing. The reaction was watched hesitating. {{fig:neumark|Daniel Neumark}} reached the same region a different way, by photodetaching an electron from a stable negative ion whose shape resembles the transition state and recording what the neutral system does at the instant it is created.

So the configuration that [transition state theory](/chemistry/transition-state-theory/) treats as a thermodynamic abstraction has been given a spectrum, a lifetime and, in several reactions, interference structure — resonances in which the system is briefly trapped near the saddle point, making the reaction probability spike at particular collision energies. A reaction is a wave phenomenon, and at this resolution it looks like one.

## Choosing the Bond, and the Cold Frontier

Two further results have changed what seemed possible.

The textbook assumption was that energy put into a polyatomic molecule spreads among all its vibrations within a picosecond, far faster than the molecule reacts, so only the total energy can matter and selectivity is impossible. {{fig:crim|F. Fleming Crim}} and {{fig:zare|Richard Zare}} showed that in favourable cases this is false. Excite one particular O–H stretch in a water molecule, and a colliding hydrogen atom attacks that bond rather than the other one, by a large factor. The energy had not had time to redistribute, and the choice of vibration chose the chemistry.

The opposite extreme has opened more recently. Molecules cooled to a few hundred nanokelvin, by the methods of [quantum optics](/physics/quantum-optics/), collide so slowly that only a single quantum state is involved and the interaction time is microseconds rather than picoseconds. In 2019 and 2020 the intermediate complex of a four-atom reaction was detected directly in such a system — a species that in an ordinary flask exists for a fraction of a picosecond, held together long enough to be observed. At those temperatures, reaction rates are governed by quantum statistics and can be tuned with a magnetic field, which is about as far from a flask of warm liquid as chemistry has got.
