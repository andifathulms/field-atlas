---
id: fluid-dynamics
domain: physics
thread: flow
name: Fluid Dynamics
parent_ids:
  - classical-mechanics
era_emerged: 1738 – 1904
core_question: What equations govern a substance that has no fixed shape, and why do they so often refuse to be solved?

summary: |-
  Newton's laws apply to a parcel of water as surely as to a planet, and writing them down for a continuous medium is not difficult: Euler did it in 1757, Navier and Stokes added internal friction by 1845, and the resulting equations have been believed ever since. They are also, for almost every case of interest, unsolvable. The nonlinear term that describes fluid carrying its own momentum couples every scale of motion to every other, and the consequence is that a subject with settled foundations spent two centuries unable to predict the drag on a sphere.

  The field's most instructive episode is a paradox. In 1752 d'Alembert proved that a body moving steadily through an ideal fluid experiences no drag at all — a flat contradiction of every observation ever made, derived correctly from the accepted equations. The resolution took 152 years. Ludwig Prandtl showed in 1904 that however small the viscosity, it dominates in a thin layer at the surface, and that this layer determines the drag, the separation of the flow and the lift of a wing. Everything that matters happens in the part of the fluid that the idealisation discards.

key_ideas:
  - term: Continuum hypothesis
    definition: >-
      Treat the fluid as a smooth field of density, velocity and pressure rather than as molecules.
      The approximation holds whenever the mean free path is far smaller than the scale of interest,
      which is almost always, and fails in rarefied gases and at the walls of microchannels.
    turning_point_id: euler-equations
  - term: Bernoulli's relation
    definition: >-
      Along a streamline in steady, frictionless flow, pressure falls where speed rises. It is
      energy conservation for a fluid parcel, and it is the first quantitative statement linking
      the two things one can measure about a flow.
    turning_point_id: bernoulli-hydrodynamica
  - term: Viscosity
    definition: >-
      The internal friction by which a fluid resists shearing. It converts a kinematic problem into
      one with a diffusive term, supplies the condition that fluid sticks to a solid surface, and
      sets the scale on which velocity differences are smoothed out.
    turning_point_id: navier-stokes-equations
  - term: Reynolds number
    definition: >-
      The ratio of inertial to viscous forces, $\mathrm{Re} = UL/\nu$. Two flows with the same
      Reynolds number behave identically whatever their size, which is why a model in a wind
      tunnel means anything; and whether $\mathrm{Re}$ is $10^{-5}$ or $10^{8}$ changes the physics
      completely.
    turning_point_id: stokes-drag
  - term: Boundary layer
    definition: >-
      The thin region next to a solid surface in which the velocity rises from zero to that of the
      outer flow. Its thickness scales as $L/\sqrt{\mathrm{Re}}$, and it carries the drag, decides
      when flow separates, and is the reason the inviscid theory fails.
    turning_point_id: prandtl-boundary-layer
  - term: Nonlinearity
    definition: >-
      The term describing fluid advecting its own momentum is quadratic in the velocity, so
      solutions cannot be superposed and scales do not decouple. Nearly every unsolved problem in
      the subject traces back to this one term.
    turning_point_id: navier-stokes-equations

turning_points:
  - id: bernoulli-hydrodynamica
    date: "1738"
    type: DISCOVERY
    title: Bernoulli's Hydrodynamica
    description: >-
      Daniel Bernoulli treats a flowing fluid as a mechanical system subject to the conservation of
      *vis viva*, living force, and obtains the relation between the speed of a flow and its
      pressure: where water moves faster, it presses less. It is the first quantitative law of fluid
      motion derived rather than measured, and it supplied the working principle for the venturi,
      the pitot tube, the carburettor and the explanation of lift that every pilot is taught.
    contested: false
    sources:
      - citation: "Bernoulli, D. (1738). Hydrodynamica, sive de viribus et motibus fluidorum commentarii. Strasbourg."
        url: null
      - citation: "Darrigol, O. (2005). Worlds of Flow: A History of Hydrodynamics from the Bernoullis to Prandtl. Oxford University Press."
        url: null

  - id: dalembert-paradox
    date: "1752"
    type: DISCOVERY
    title: D'Alembert's paradox
    description: >-
      Jean le Rond d'Alembert shows that a body moving at constant speed through an incompressible,
      frictionless fluid experiences no resistance whatsoever: the pressure pushing on the front is
      exactly balanced by the pressure pushing on the back. The derivation is sound and the
      conclusion is absurd, since resistance is the most obvious fact about moving through water. He
      wrote that the result was "a singular paradox which I leave to geometers to explain", and it
      remained unexplained for 152 years.
    contested: false
    sources:
      - citation: "d'Alembert, J. le R. (1752). Essai d'une nouvelle théorie de la résistance des fluides. David, Paris."
        url: null
      - citation: "Grimberg, G., Pauls, W. & Frisch, U. (2008). Genesis of d'Alembert's paradox and analytical elaboration of the drag problem. Physica D 237: 1878–1886."
        url: null

  - id: euler-equations
    date: "1757"
    type: THEORY-REPLACED
    title: Euler's equations of fluid motion
    description: >-
      Leonhard Euler writes Newton's second law for a continuous medium: a field of velocity and
      pressure, with the acceleration of each fluid element set by the pressure gradient acting on
      it. Together with the requirement that mass be conserved, these are the equations of ideal
      flow, and they are still the starting point of the subject. They contain no friction, which is
      both why they can sometimes be solved and why they predict no drag.
    contested: false
    sources:
      - citation: "Euler, L. (1757). Principes généraux du mouvement des fluides. Mémoires de l'Académie des Sciences de Berlin 11: 274–315."
        url: null
      - citation: "Darrigol, O. & Frisch, U. (2008). From Newton's mechanics to Euler's equations. Physica D 237: 1855–1869."
        url: null

  - id: navier-stokes-equations
    date: 1822 – 1845
    type: THEORY-REPLACED
    title: The Navier–Stokes equations
    description: >-
      Claude-Louis Navier adds a term for internal friction in 1822, reasoning from a molecular
      picture that was wrong in detail; George Gabriel Stokes derives the same equations in 1845
      from the continuum assumption that stress depends linearly on the rate of strain, and states
      the condition that fluid does not slip at a solid wall. The result is the equation set still
      used for every flow from blood to the atmosphere, and the one whose solutions nobody has
      proved exist.
    contested: false
    sources:
      - citation: "Navier, C. L. M. H. (1823). Mémoire sur les lois du mouvement des fluides. Mémoires de l'Académie des Sciences 6: 389–440."
        url: null
      - citation: "Stokes, G. G. (1845). On the theories of the internal friction of fluids in motion. Transactions of the Cambridge Philosophical Society 8: 287–319."
        url: null

  - id: stokes-drag
    date: 1851
    type: DISCOVERY
    title: Drag on a sphere, and the number that governs it
    description: >-
      Stokes solves the flow around a slowly moving sphere exactly, obtaining a drag of
      $6\pi\mu a U$ — proportional to speed, not to its square, and to the radius, not the
      cross-sectional area. The solution works because at low speeds the troublesome nonlinear term
      is negligible. Identifying *when* it is negligible produced the dimensionless ratio of
      inertial to viscous forces, which Osborne Reynolds measured against in 1883 and which now
      carries his name.
    contested: false
    sources:
      - citation: "Stokes, G. G. (1851). On the effect of the internal friction of fluids on the motion of pendulums. Transactions of the Cambridge Philosophical Society 9: 8–106."
        url: null
      - citation: "Purcell, E. M. (1977). Life at low Reynolds number. American Journal of Physics 45: 3–11."
        url: null

  - id: prandtl-boundary-layer
    date: "1904"
    type: PARADIGM-SHIFT
    title: Prandtl's boundary layer
    description: >-
      In an eight-page conference paper, Ludwig Prandtl resolves d'Alembert's paradox. However small
      the viscosity, the fluid must come to rest at a solid surface, so there is a thin layer in
      which velocity gradients are enormous and friction is not negligible, however negligible it
      is elsewhere. The layer's thickness scales as $L/\sqrt{\mathrm{Re}}$; it carries essentially
      all the drag; and when it separates from the surface the whole character of the flow changes.
      The paper founded modern aerodynamics.
    contested: false
    sources:
      - citation: "Prandtl, L. (1905). Über Flüssigkeitsbewegung bei sehr kleiner Reibung. Verhandlungen des III. Internationalen Mathematiker-Kongresses, Heidelberg 1904: 484–491."
        url: null
      - citation: "Anderson, J. D. (2005). Ludwig Prandtl's boundary layer. Physics Today 58(12): 42–48."
        url: null

open_problems:
  - id: navier-stokes-regularity
    name: Existence and smoothness for Navier–Stokes
    status: open
    status_note: Open as of 2026; one of the seven Clay Millennium Prize problems, unclaimed.
    description: >-
      Given smooth initial data for an incompressible fluid in three dimensions, does a smooth
      solution exist for all time, or can the velocity become infinite somewhere in finite time? In
      two dimensions the answer is known to be yes. In three, only short-time existence and weak
      solutions of uncertain uniqueness have been proved, despite the equations being used every day
      to design aircraft.
    why_hard: >-
      The nonlinear term transfers energy to ever smaller scales, and the viscous term removes it;
      whether dissipation always wins is exactly the question. The known conserved quantities do not
      control the right norms, so the standard route — find a quantity that stays bounded and
      conclude the solution stays smooth — has no candidate in three dimensions.
    unlocks: >-
      It would say whether turbulence is a feature of the equations or an artefact of our inability
      to solve them, and whether the computations that aircraft, reactors and weather forecasts rely
      on approximate something that exists.
    sources:
      - citation: "Fefferman, C. L. (2006). Existence and smoothness of the Navier–Stokes equation. In The Millennium Prize Problems, 57–67. Clay Mathematics Institute."
        url: null
      - citation: "Tao, T. (2016). Finite time blowup for an averaged three-dimensional Navier–Stokes equation. Journal of the American Mathematical Society 29: 601–674."
        url: null

applications:
  - area: Aeronautics
    title: Lift, and why the usual explanation is wrong
    description: >-
      A wing's lift follows from the circulation around it, by the Kutta–Joukowski theorem of
      1902–1906, and the circulation is established by the boundary layer leaving the trailing edge
      cleanly. The popular account — that air takes longer over the curved upper surface and
      therefore moves faster by Bernoulli — fails on inspection, since the parcels do not arrive
      together and a flat plate at an angle generates lift perfectly well.
    sources:
      - citation: "Anderson, J. D. (2016). Fundamentals of Aerodynamics, 6th edition. McGraw-Hill."
        url: null
      - citation: "Babinsky, H. (2003). How do wings work? Physics Education 38: 497–503."
        url: null
  - area: Physiology
    title: Blood through tubes that branch thirty times
    description: >-
      Flow in the larger arteries is pulsatile and inertial, while in capillaries 8 µm across the
      Reynolds number falls below $10^{-3}$ and viscosity rules entirely. Poiseuille's law, that
      resistance scales as the inverse fourth power of radius, is why a 20% narrowing of an artery
      more than doubles its resistance, and why the body regulates flow by changing vessel diameter.
    domain: biology
    sources:
      - citation: "Poiseuille, J. L. M. (1846). Recherches expérimentales sur le mouvement des liquides dans les tubes de très petits diamètres. Mémoires des Savants Étrangers 9: 433–544."
        url: null
      - citation: "Fung, Y. C. (1997). Biomechanics: Circulation, 2nd edition. Springer."
        url: null
  - area: Engineering design
    title: Model testing and dynamic similarity
    description: >-
      Because flows with equal Reynolds number are the same flow, a scale model in a wind tunnel or
      towing tank predicts the behaviour of the full-size object — provided the number is matched,
      which usually means raising the speed or the pressure. The whole practice of experimental
      engineering design rests on this one dimensionless group, and on the recognition that where
      several groups matter at once, no single model can match them all.
    sources:
      - citation: "Barenblatt, G. I. (1996). Scaling, Self-Similarity, and Intermediate Asymptotics. Cambridge University Press."
        url: null

further_reading:
  - citation: "Darrigol, O. (2005). Worlds of Flow. Oxford University Press."
    url: null
    note: The history from the Bernoullis to Prandtl, including how long the paradox was tolerated.
  - citation: "Batchelor, G. K. (1967). An Introduction to Fluid Dynamics. Cambridge University Press."
    url: null
    note: The standard rigorous text; careful about what the continuum assumption costs.
  - citation: "Purcell, E. M. (1977). Life at low Reynolds number. American Journal of Physics 45: 3–11."
    url: null
    note: Eleven pages on what the world is like for a swimming bacterium; the best short paper in the subject.
---

## Newton's Laws for Something With No Shape

A solid has a shape to keep track of; a fluid does not, and the first problem is deciding what to apply the laws of motion *to*. The answer that worked was to stop tracking matter and track the field: at each point in space, a density, a pressure and a velocity, changing with time. {{fig:euler|Leonhard Euler}} wrote the equations in 1757, and they say exactly what Newton's second law says — the acceleration of the fluid at a point equals the force per unit mass acting there, which for an ideal fluid is the pressure gradient — plus the requirement that mass not appear or vanish.

{{fig:daniel-bernoulli|Daniel Bernoulli}} had already extracted the most useful consequence, in 1738, before the general equations existed. Along a streamline in steady frictionless flow, pressure and speed trade off: speed up and the pressure drops. This is energy conservation for a fluid parcel, and it is the basis of the venturi, the pitot tube that tells an aircraft its airspeed, and a great many wrong explanations of lift.

What the Euler equations lacked was friction. {{fig:navier|Claude-Louis Navier}} supplied a term for it in 1822 by an argument about intermolecular forces that was wrong in its reasoning and right in its result; {{fig:stokes|George Gabriel Stokes}} rederived it properly in 1845 from the assumption that internal stress depends linearly on the rate at which the fluid is being sheared, and added the condition that has done more work than any other in the subject: at a solid surface, the fluid does not slip. Its velocity there is zero.

## The Paradox That Took 152 Years

Before the friction term existed, {{fig:dalembert|Jean le Rond d'Alembert}} had already derived something impossible. Solve the ideal-flow equations around a body moving at constant speed, and the pressure distribution comes out symmetric: whatever pushes back on the front pushes forward on the rear by exactly as much. The net force is zero. An ideal fluid offers no resistance.

Every rower, swimmer and sailor knew otherwise. D'Alembert said plainly that he could not explain it and left it "to geometers". The gap between theory and observation was not small — the theory predicted zero — and it split the subject in two for a century and a half. Mathematicians developed an elegant theory of ideal flow that engineers could not use; engineers compiled empirical tables of resistance with no theory behind them. Water, in the British physicist Horace Lamb's later account of the situation, was studied by one group and hydraulics by another, and the two did not meet.

{{fig:prandtl|Ludwig Prandtl}} closed it in 1904, in eight pages, with an argument about where an approximation fails. Viscosity is small for air and water, in the sense that the Reynolds number is large, so throwing the viscous term away looks safe. But the no-slip condition forces the velocity to zero at the surface while the outer flow is moving at full speed, which means the velocity gradient near the wall is enormous — and the viscous stress is proportional to that gradient. In a thin layer, viscosity is never negligible, however large the Reynolds number is. The layer gets thinner as $\mathrm{Re}$ grows, and the stress in it does not vanish correspondingly.

Three consequences follow, and they are the whole of applied aerodynamics. The layer carries the skin-friction drag. The layer can *separate* from the surface when pressure rises downstream, at which point a large wake forms and the drag rises by an order of magnitude — the difference between a streamlined and a blunt body. And the way the layer leaves a wing's trailing edge fixes the circulation around the wing, which by the Kutta–Joukowski theorem fixes the lift.

## A Closer Look: One Number Across Twelve Orders of Magnitude

Non-dimensionalise the Navier–Stokes equations for a flow of speed $U$ over an object of size $L$ in a fluid of kinematic viscosity $\nu$, and exactly one parameter survives:

$$
\mathrm{Re} = \frac{UL}{\nu} = \frac{\text{inertial forces}}{\text{viscous forces}}.
$$

Two flows with the same $\mathrm{Re}$ are the same flow, scaled. That is why a model tells you anything about an aircraft, and it is why a single number organises a subject that spans bacteria and hurricanes.

**A car on a motorway.** $U = 30$ m/s, $L = 4$ m, and for air $\nu = 1.5\times10^{-5}$ m²/s:

$$
\mathrm{Re} = \frac{30 \times 4}{1.5\times10^{-5}} = 8\times10^{6}.
$$

Prandtl's estimate puts the boundary layer thickness at roughly $5L/\sqrt{\mathrm{Re}}$:

$$
\delta \approx \frac{5 \times 4}{\sqrt{8\times10^{6}}} = \frac{20}{2830} = 7 \text{ mm}.
$$

Seven millimetres out of four metres. All of the friction drag, and the decision whether the flow separates behind the rear window, happens in that 0.2% of the length scale. This is why the inviscid theory can be simultaneously correct about the pressure field and useless about the force.

**A swimming bacterium.** $U = 30$ µm/s, $L = 1$ µm, and for water $\nu = 10^{-6}$ m²/s:

$$
\mathrm{Re} = \frac{(3\times10^{-5})(10^{-6})}{10^{-6}} = 3\times10^{-5}.
$$

Eleven orders of magnitude below the car. Inertia does not merely matter less; it does not exist. Ask how far such an organism coasts if it stops swimming. Its mass is about

$$
m = \tfrac{4}{3}\pi(0.5\times10^{-6})^{3} \times 1000 = 5.2\times10^{-16} \text{ kg},
$$

and Stokes drag gives a friction coefficient $6\pi\mu a = 6\pi(10^{-3})(0.5\times10^{-6}) = 9.4\times10^{-9}$ kg/s. The coasting distance is $mU$ divided by that coefficient:

$$
\frac{(5.2\times10^{-16})(3\times10^{-5})}{9.4\times10^{-9}} \approx 2\times10^{-12} \text{ m},
$$

two picometres — a fiftieth of the width of an atom. A bacterium that stops beating its flagellum stops instantly and absolutely. It cannot glide, cannot throw anything, and cannot swim by any stroke that is merely reversed on the return, because at $\mathrm{Re} \to 0$ the equations are time-reversible and a reciprocal motion returns the organism exactly where it began. The corkscrew flagellum and the breaststroke-with-a-twist of a flagellate are solutions to a constraint that has no analogue at human scale.

Between the two lie everything else: $\mathrm{Re} \approx 10^{2}$ for a swimming tadpole, $10^{4}$ for a sparrow, $10^{8}$ for a whale, $10^{9}$ for a weather system. The transition from the viscous regime to the inertial one is not a smooth loss of accuracy. Around $\mathrm{Re} \approx 2000$ in a pipe, steady flow stops being stable at all, and the subject changes into [turbulence](/physics/turbulence/).

## What Is Settled and What Is Not

The foundations of this field have been secure for 180 years, which makes its unsolved problems unusual in character. Nobody doubts the Navier–Stokes equations; the question is whether they have solutions. For smooth initial data in three dimensions it has never been proved that the velocity stays finite — the nonlinear term pumps energy into ever smaller scales, viscosity removes it there, and whether dissipation always wins is open and carries a million-dollar prize. Two-dimensional flow is proved well behaved, which is of no comfort, since the world is not two-dimensional and the mechanism in question exists only in three.

This is an odd situation for an engineering science. Aircraft are certified using numerical solutions of equations that may, for all anyone can prove, develop infinities. In practice the computations agree with wind tunnels, and the agreement is the justification. How those computations are done, and why the cost grows so steeply with Reynolds number, belongs to [numerical methods for partial differential equations](/math/numerical-pdes/) and to the next field in this thread.
