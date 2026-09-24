---
id: special-relativity
domain: physics
thread: relativity
name: Special Relativity
parent_ids:
  - classical-mechanics
  - electromagnetism
era_emerged: "1905"
core_question: How can light have the same speed for every observer, and what does that do to space and time?

summary: |-
  Special relativity starts from two rules: the laws of physics are the same for everyone moving steadily, and light travels at the same speed for all of them. Taken together, they force a strange conclusion. Moving clocks run slow, moving rulers shrink, and two events that are simultaneous for one observer need not be for another.

  Space and time turn out to be two faces of one four-dimensional spacetime. Mass is a form of energy, $E = mc^2$. None of this shows up at everyday speeds, which is why Newton's mechanics worked so well for so long.

key_ideas:
  - term: Principle of relativity
    definition: >-
      The laws of physics take the same form for every observer moving at constant
      velocity. Galileo said this for mechanics; Einstein extended it to all of physics,
      including light.
    turning_point_id: einstein-special-1905
  - term: Invariance of the speed of light
    definition: >-
      Light in a vacuum travels at $c \approx 299{,}792$ km/s for every such observer,
      however fast they move relative to the source.
    turning_point_id: einstein-special-1905
  - term: Relativity of simultaneity
    definition: >-
      Whether two distant events happen "at the same time" depends on the observer's
      motion. There is no universal now.
    turning_point_id: einstein-special-1905
  - term: Time dilation and length contraction
    definition: >-
      A clock moving at speed $v$ runs slow by the factor
      $\gamma = 1/\sqrt{1 - v^2/c^2}$, and a moving ruler shrinks by the same factor
      along its motion. Both are negligible until $v$ approaches $c$.
    turning_point_id: rossi-hall-muons
  - term: Spacetime interval
    definition: >-
      Observers disagree about distances and durations separately, but all agree on
      $s^2 = (c\,\Delta t)^2 - \Delta x^2 - \Delta y^2 - \Delta z^2$. This single
      invariant is the geometry of spacetime.
    turning_point_id: minkowski-spacetime
  - term: Mass–energy equivalence
    definition: >-
      $E = mc^2$: mass is a very concentrated form of energy. A small loss of mass in a
      nuclear reaction releases an enormous amount of energy.
    turning_point_id: einstein-special-1905

turning_points:
  - id: lorentz-transformation
    date: 1892 – 1904
    type: DISCOVERY
    title: Lorentz finds the transformations that hide the ether
    description: >-
      To explain the Michelson–Morley result, Hendrik Lorentz develops a theory of
      electrons moving through the ether in which moving bodies contract and moving
      clocks keep a "local time". By 1904 he has the full set of transformation
      equations that leave Maxwell's equations unchanged. They are the right mathematics,
      still read as effects of motion through an ether.
    contested: false
    sources:
      - citation: "Lorentz, H. A. (1904). Electromagnetic phenomena in a system moving with any velocity smaller than that of light. Proceedings of the Royal Netherlands Academy of Arts and Sciences 6: 809–831."
        url: null

  - id: einstein-special-1905
    date: "1905"
    type: THEORY-REPLACED
    title: Einstein's "On the electrodynamics of moving bodies"
    description: >-
      Albert Einstein, a patent examiner in Bern, derives the same transformations from
      two postulates, the principle of relativity and the constancy of the speed of
      light, and drops the ether as unnecessary. Time itself is relative. A short sequel
      that year shows that a body's mass measures its energy content: $E = mc^2$.
      Newtonian absolute time is replaced.
    contested: true
    contested_note: >-
      Priority for the theory's content is disputed. Henri Poincaré had stated a
      principle of relativity, analysed clock synchronisation, and in 1905 published the
      group structure of the Lorentz transformations, independently of Einstein. The
      historian Edmund Whittaker (1953) credited the theory to Lorentz and Poincaré. Most
      historians credit Einstein with the decisive conceptual step, rebuilding kinematics
      from the postulates and abandoning the ether, while recognising how much of the
      mathematics Lorentz and Poincaré already had.
    sources:
      - citation: "Einstein, A. (1905). Zur Elektrodynamik bewegter Körper. Annalen der Physik 17: 891–921."
        url: null
      - citation: "Einstein, A. (1905). Ist die Trägheit eines Körpers von seinem Energieinhalt abhängig? Annalen der Physik 18: 639–641."
        url: null
      - citation: "Poincaré, H. (1906). Sur la dynamique de l'électron. Rendiconti del Circolo Matematico di Palermo 21: 129–176."
        url: null
      - citation: "Galison, P. (2003). Einstein's Clocks, Poincaré's Maps: Empires of Time. W. W. Norton."
        url: null

  - id: minkowski-spacetime
    date: "1908"
    type: PARADIGM-SHIFT
    title: Minkowski fuses space and time into spacetime
    description: >-
      Hermann Minkowski, Einstein's former mathematics teacher, recasts the theory as the
      geometry of a four-dimensional spacetime with an invariant interval. "Henceforth
      space by itself, and time by itself, are doomed to fade away into mere shadows,"
      he told a Cologne audience. Einstein was initially dismissive. Within a few years,
      the geometric view made general relativity possible.
    contested: false
    sources:
      - citation: "Minkowski, H. (1909). Raum und Zeit. Physikalische Zeitschrift 10: 104–111."
        url: null

  - id: rossi-hall-muons
    date: "1941"
    type: EXPERIMENT
    title: Fast muons live longer
    description: >-
      Muons created by cosmic rays high in the atmosphere decay in about two
      microseconds, too quickly for most to reach the ground if their clocks ran at the
      normal rate. Bruno Rossi
      and David Hall measure how their survival depends on energy and find that fast
      muons live longer, as time dilation predicts. Moving clocks really do run slow.
    contested: false
    sources:
      - citation: "Rossi, B. & Hall, D. B. (1941). Variation of the rate of decay of mesotrons with momentum. Physical Review 59: 223–228."
        url: null

open_problems:
  - id: lorentz-invariance-violation
    name: Is Lorentz invariance exact?
    status: open
    status_note: No violation detected as of 2026, with bounds far tighter than any direct test at the Planck scale.
    description: >-
      Special relativity's symmetry, Lorentz invariance, has passed every test. But many
      approaches to quantum gravity suggest that spacetime might have structure at the
      tiny Planck length, $\sim 10^{-35}$ m, which could break the symmetry very slightly
      at extreme energies.
    why_hard: >-
      Any violation would be suppressed by the ratio of accessible energies to the
      Planck energy, a factor like $10^{-15}$ or smaller. Tests rely on amplifying tiny
      effects: comparing atomic clocks, timing gamma rays that have crossed billions of
      light years, or watching the highest-energy cosmic rays.
    unlocks: >-
      A confirmed violation would be the first experimental window on quantum gravity.
      Continued null results rule out whole families of quantum-gravity models.
    sources:
      - citation: "Mattingly, D. (2005). Modern tests of Lorentz invariance. Living Reviews in Relativity 8: 5."
        url: https://doi.org/10.12942/lrr-2005-5

applications:
  - area: Particle accelerators
    title: Designing for particles near light speed
    description: >-
      Protons in the Large Hadron Collider move so close to $c$ that their energy is
      thousands of times their rest mass. Magnets, timing and detector design all use
      relativistic mechanics, and short-lived particles travel measurably farther
      before decaying because of time dilation.
    sources: []
  - area: Nuclear energy
    title: Mass into energy
    description: >-
      In fission and fusion the products weigh slightly less than the ingredients. The
      missing mass, times $c^2$, is the energy released that powers nuclear reactors and
      the Sun.
    sources: []
  - area: Medical imaging
    title: PET scans count annihilating matter
    description: >-
      In positron emission tomography, a tracer emits positrons that annihilate with
      electrons, turning their mass entirely into two gamma rays of 511 keV each, as
      $E = mc^2$ requires. Detecting the pairs maps metabolic activity in the body.
    domain: biology
    sources:
      - citation: "Phelps, M. E., Hoffman, E. J., Mullani, N. A. & Ter-Pogossian, M. M. (1975). Application of annihilation coincidence detection to transaxial reconstruction tomography. Journal of Nuclear Medicine 16(3): 210–224."
        url: null

further_reading:
  - citation: "Taylor, E. F. & Wheeler, J. A. (1992). Spacetime Physics (2nd ed.). W. H. Freeman."
    url: null
    note: Teaches relativity as spacetime geometry from the first page. A classic for self-study.
  - citation: "Galison, P. (2003). Einstein's Clocks, Poincaré's Maps: Empires of Time. W. W. Norton."
    url: null
    note: A historian on how railway time zones and telegraph cables shaped relativity, and the Einstein–Poincaré story.
  - citation: "Einstein, A. (1920). Relativity: The Special and the General Theory. Trans. R. W. Lawson. Methuen."
    url: null
    note: Einstein's own popular account, still one of the clearest.
---

## Two Theories, One Contradiction

By 1900 physics rested on two pillars that could not both be right. [Classical mechanics](/physics/classical-mechanics/) said, with Galileo, that velocities add: throw a ball forward from a moving train and its speed relative to the ground is the train's speed plus the throw. [Electromagnetism](/physics/electromagnetism/) said that light moves at one fixed speed, $c$. If velocities add, light should move faster for an observer rushing toward its source. So Maxwell's $c$ had to be relative to something, presumably the ether.

But the Earth's motion through the ether would not show up. {{fig:lorentz|Hendrik Lorentz}} built an elaborate theory in which moving bodies contract and moving clocks keep a distorted "local time", in exactly the way needed to hide the ether from every experiment. {{fig:poincare|Henri Poincaré}} went further. He asked whether absolute motion might be undetectable in principle, analysed how distant clocks are synchronised by light signals, and wrote down the symmetry group of Lorentz's transformations. The mathematics was nearly all there. What remained was to take it at its word.

## Einstein's 1905

In June 1905 {{fig:einstein|Albert Einstein}}, a 26-year-old examiner at the Swiss patent office, took that step. He assumed only two things: the principle of relativity holds for all of physics, and light always moves at $c$. Instead of asking how the ether distorts clocks, he asked what "at the same time" means for distant events. It can only mean what clocks synchronised by light signals say, and observers in relative motion synchronise differently. Simultaneity is relative.

From there everything followed as *kinematics*, with no mechanism needed. Moving clocks run slow by the factor $\gamma = 1/\sqrt{1 - v^2/c^2}$, moving lengths contract by the same factor, and velocities combine so that nothing overtakes light. The ether became, in his word, "superfluous". A three-page sequel that September showed that a body's mass is a measure of its energy content, the result now written $E = mc^2$.

## Space and Time Become Spacetime

{{fig:minkowski|Hermann Minkowski}} saw the geometry inside the theory. Observers disagree about time intervals and distances separately, but all agree on one combination,

$$
s^2 = (c\,\Delta t)^2 - \Delta x^2 - \Delta y^2 - \Delta z^2 ,
$$

just as rotated observers in ordinary space disagree about $x$ and $y$ but agree on distance. Special relativity is the geometry of a four-dimensional *spacetime*, and a change of velocity is a kind of rotation in it. The minus sign makes the geometry strange: the space of possible velocities turns out to be a [hyperbolic space](/math/non-euclidean-geometry/), the non-Euclidean geometry of Lobachevsky and Bolyai.

Einstein at first is said to have called this "superfluous learnedness". Within a few years he found he could not build a theory of gravity without it.

## A Closer Look: Muons That Should Not Reach the Ground

Cosmic rays striking the upper atmosphere produce muons, unstable particles that decay with a half-life, in their own rest frame, of about 1.5 microseconds, and an average lifetime of 2.2 microseconds. Suppose a muon is made 10 km up and travels down at 99.5% of the speed of light.

**Without relativity.** The trip takes

$$
t = \frac{10{,}000 \text{ m}}{0.995 \times 3.00 \times 10^8 \text{ m/s}} \approx 33.5 \ \mu\text{s} ,
$$

about fifteen average lifetimes. The fraction surviving would be $e^{-33.5/2.2} \approx 2 \times 10^{-7}$, roughly one in four million. Almost none should reach the ground.

**With relativity.** A clock moving at $v = 0.995c$ runs slow by the factor

$$
\gamma = \frac{1}{\sqrt{1 - v^2/c^2}} = \frac{1}{\sqrt{1 - 0.995^2}} \approx 10 .
$$

The muon's own clock records only $33.5 / 10 \approx 3.35$ microseconds for the trip, about one and a half lifetimes, so the fraction surviving is $e^{-3.35/2.2} \approx 0.22$. About one muon in five arrives.

Muons do reach the ground in large numbers, about one per square centimetre per minute. Rossi and Hall measured it in 1941, and in 1963 David Frisch and James Smith compared the muon counts on the summit of Mount Washington and at sea level, 1,907 metres lower. Far more survived the descent than the muons' lifetime would allow without time dilation, in close agreement with Einstein's factor.

From the muon's point of view, its clock is normal. Instead the atmosphere, rushing past at 0.995c, is contracted by the same factor of 10, to about 1 km thick. Both descriptions give the same count of surviving muons. They are the same prediction, seen from two frames.

## Checked to Many Decimal Places

The predictions are strange but testable. In 1941 {{fig:rossi|Bruno Rossi}} and David Hall showed that muons from cosmic rays survive the trip through the atmosphere only because their internal clocks run slow. Particle accelerators, atomic clocks flown on aircraft and the GPS constellation have confirmed special relativity many times over, to extraordinary precision.

What it could not include was gravity. Newton's gravity acts instantly across any distance, and in a theory where nothing outruns light, "instantly" has no meaning. Fixing that took Einstein another ten years and produced [general relativity](/physics/general-relativity/).
