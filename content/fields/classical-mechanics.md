---
id: classical-mechanics
domain: physics
thread: relativity
name: Classical Mechanics
parent_ids: []
era_emerged: 1600s – 1687
core_question: What laws govern how things move, from a falling stone to an orbiting planet?

summary: |-
  Classical mechanics is the physics of motion and force: why a ball follows a parabola, why the Moon stays in orbit, how bridges carry loads and rockets reach Mars. Newton's three laws and his law of gravity, published in 1687, explained the heavens and the Earth with one set of rules.

  For two centuries it looked like the final word, and it still works superbly for everything slower than light and larger than atoms. This thread follows the places where it cracked: the speed of light, and a small wobble in Mercury's orbit.

key_ideas:
  - term: Inertia
    definition: >-
      A body keeps moving in a straight line at constant speed unless a force acts on
      it. Motion needs no cause; *changes* in motion do.
    turning_point_id: galileo-falling-bodies
  - term: Galilean relativity
    definition: >-
      The laws of motion are the same in any laboratory moving steadily, like Galileo's
      ship cabin, where a dropped object falls straight down whether or not the ship is
      moving. Velocities simply add. This rule is what special relativity would revise.
    turning_point_id: galileo-falling-bodies
  - term: Force and acceleration
    definition: >-
      Newton's second law, $F = ma$: a force changes a body's velocity at a rate
      inversely proportional to its mass.
    turning_point_id: newton-principia
  - term: Universal gravitation
    definition: >-
      Every mass attracts every other with a force $F = G\,m_1 m_2 / r^2$. The same
      law makes apples fall and keeps planets in their elliptical orbits.
    turning_point_id: newton-principia
  - term: Conservation laws
    definition: >-
      Energy, momentum and angular momentum stay constant in an isolated system. They
      later turned out to be the deepest part of mechanics, since they survive in
      relativity and in quantum physics.

turning_points:
  - id: galileo-falling-bodies
    date: c. 1604 – 1638
    type: EXPERIMENT
    title: Galileo times falling bodies on inclined planes
    description: >-
      Rolling balls down gentle ramps to slow the fall enough to time it, Galileo finds
      that falling bodies accelerate uniformly, with distance growing as the square of
      time, independent of their weight. His *Two New Sciences* (1638) sets out
      uniformly accelerated motion, parabolic projectiles and the germ of inertia. The
      famous drop from the Leaning Tower of Pisa is probably legend.
    contested: false
    sources:
      - citation: "Galilei, G. (1638). Discorsi e dimostrazioni matematiche intorno a due nuove scienze. Leiden."
        url: null
      - citation: "Drake, S. (1978). Galileo at Work: His Scientific Biography. University of Chicago Press."
        url: null

  - id: kepler-laws
    date: 1609 – 1619
    type: DISCOVERY
    title: Kepler's laws of planetary motion
    description: >-
      Working from Tycho Brahe's naked-eye observations, Johannes Kepler finds that
      planets move on ellipses with the Sun at one focus, sweep out equal areas in equal
      times (*Astronomia nova*, 1609), and have orbital periods whose squares scale with
      the cubes of their distances (*Harmonices mundi*, 1619). The perfect circles of
      two thousand years of astronomy were gone.
    contested: false
    sources:
      - citation: "Kepler, J. (1609). Astronomia nova. Heidelberg."
        url: null
      - citation: "Kepler, J. (1619). Harmonices mundi. Linz."
        url: null

  - id: newton-principia
    date: "1687"
    type: PARADIGM-SHIFT
    title: Newton's Principia unites Earth and heavens
    description: >-
      Isaac Newton's *Philosophiæ Naturalis Principia Mathematica* states three laws of
      motion and a law of universal gravitation, and derives Kepler's laws from them. The
      same physics governs a falling apple and the Moon. For the next two centuries,
      physics largely meant working out the consequences.
    contested: true
    contested_note: >-
      Robert Hooke claimed that he had given Newton the inverse-square law. In letters of
      1679–80 he had suggested that orbits combine straight-line motion with an
      attraction toward the Sun falling off as the inverse square of distance. Newton
      conceded nothing and struck nearly all references to Hooke from the manuscript. Historians generally credit
      Hooke with the suggestion and Newton with the mathematical demonstration that made
      it a theory, but how much the correspondence shaped Newton's thinking is debated.
    sources:
      - citation: "Newton, I. (1687). Philosophiæ Naturalis Principia Mathematica. London."
        url: null
      - citation: "Westfall, R. S. (1980). Never at Rest: A Biography of Isaac Newton. Cambridge University Press."
        url: null

  - id: neptune-discovery
    date: "1846"
    type: DISCOVERY
    title: Neptune is found where the mathematics said it would be
    description: >-
      Urbain Le Verrier calculates that the unexplained drift of Uranus is caused by an
      unseen planet and predicts its position. Johann Galle finds Neptune within a degree
      of the prediction on his first night of searching. Newtonian mechanics had
      discovered a planet with pen and paper.
    contested: true
    contested_note: >-
      The British astronomer John Couch Adams had made similar calculations in 1845 but
      did not publish them, and after the discovery Britain claimed co-prediction.
      Papers rediscovered in the late 1990s led several historians to conclude that
      Adams's predictions were less definite, and the British claim weaker, than long
      believed. Others still credit Adams with independent work.
    sources:
      - citation: "Standage, T. (2000). The Neptune File: A Story of Astronomical Rivalry and the Pioneers of Planet Hunting. Walker & Company."
        url: null
      - citation: "Sheehan, W., Kollerstrom, N. & Waff, C. B. (2004). The case of the pilfered planet. Scientific American 291(6): 92–99."
        url: null

  - id: mercury-perihelion-anomaly
    date: "1859"
    type: DISCOVERY
    title: Mercury's orbit refuses to close
    description: >-
      Le Verrier finds that the point of Mercury's closest approach to the Sun advances
      slightly faster than all the known planets' pulls can explain. The modern figure is
      43 arcseconds per century. A hypothetical inner planet, Vulcan, was sought for
      decades and never found. The discrepancy would be explained only by general
      relativity in 1915.
    contested: false
    sources:
      - citation: "Le Verrier, U. J. J. (1859). Lettre de M. Le Verrier à M. Faye sur la théorie de Mercure et sur le mouvement du périhélie de cette planète. Comptes rendus de l'Académie des Sciences 49: 379–383."
        url: null

open_problems:
  - id: navier-stokes
    name: Navier–Stokes existence and smoothness
    status: open
    status_note: Open as of 2026; a Clay Millennium Prize Problem.
    description: >-
      The Navier–Stokes equations describe how fluids like water and air flow: they are
      Newton's second law applied to every parcel of a fluid. Do smooth starting flows in
      three dimensions always stay smooth, or can the equations develop infinite
      velocities in finite time?
    why_hard: >-
      Turbulence moves energy across a huge range of scales, and the known conserved
      quantities are too weak to control the smallest ones. Estimates that close the
      argument in two dimensions fail in three. Computers can suggest behaviour but
      cannot prove it.
    unlocks: >-
      A proof of smoothness would put the equations behind weather forecasting, aircraft
      design and blood-flow modelling on a secure mathematical footing. A blow-up would
      show that the equations themselves break down, a sign that new physics is needed
      at small scales.
    sources:
      - citation: "Fefferman, C. L. (2006). Existence and smoothness of the Navier–Stokes equation. In J. Carlson, A. Jaffe & A. Wiles (eds.), The Millennium Prize Problems: 57–67. Clay Mathematics Institute / AMS."
        url: null

applications:
  - area: Spaceflight
    title: Orbits, transfers and gravity assists
    description: >-
      Every spacecraft trajectory is Newtonian mechanics. A close pass by a planet can
      steal some of its orbital momentum. Michael Minovitch and Gary Flandro's work in
      the 1960s on such gravity assists made the Voyager "Grand Tour" of the outer
      planets possible.
    sources:
      - citation: "Flandro, G. A. (1966). Fast reconnaissance missions to the outer solar system utilizing energy derived from the gravitational field of Jupiter. Astronautica Acta 12: 329–337."
        url: null
  - area: Planetary defence
    title: Nudging an asteroid
    description: >-
      In 2022 NASA's DART spacecraft deliberately struck the small asteroid Dimorphos and
      shortened its nearly 12-hour orbit around its companion by about 33 minutes. It
      was the first test of changing a celestial body's motion on purpose, planned and
      measured with classical mechanics.
    sources:
      - citation: "Thomas, C. A. et al. (2023). Orbital period change of Dimorphos due to the DART kinetic impact. Nature 616: 448–451."
        url: null
  - area: Weather and climate
    title: Forecasting as fluid mechanics
    description: >-
      Numerical weather prediction solves the equations of fluid motion on a grid
      covering the planet. Lewis Fry Richardson attempted it by hand during the First World War and published
      the method in 1922. Modern
      forecasts and climate models are the same idea at vastly larger scale.
    sources:
      - citation: "Richardson, L. F. (1922). Weather Prediction by Numerical Process. Cambridge University Press."
        url: null
  - area: Engineering
    title: Structures and machines
    description: >-
      Bridges, buildings, engines and vehicles are designed with Newton's laws extended
      to solid and fluid bodies. At everyday speeds and sizes, the corrections from
      relativity and quantum mechanics are far too small to matter.
    sources: []

further_reading:
  - citation: "Feynman, R. P., Leighton, R. B. & Sands, M. (1963). The Feynman Lectures on Physics, Vol. I. Addison-Wesley."
    url: https://www.feynmanlectures.caltech.edu/
    note: Mechanics taught for insight rather than drill. The full text is free online.
  - citation: "Westfall, R. S. (1980). Never at Rest: A Biography of Isaac Newton. Cambridge University Press."
    url: null
    note: The standard scholarly biography, including the Principia and its disputes.
  - citation: "Taylor, J. R. (2005). Classical Mechanics. University Science Books."
    url: null
    note: A clear undergraduate textbook, from Newton's laws through Lagrangian mechanics and chaos.
---

## Falling and Orbiting

For two thousand years, motion meant Aristotle. Heavy things fall faster than light ones, moving things stop unless something keeps pushing them, and the heavens obey different rules from the Earth. {{fig:galileo|Galileo Galilei}} broke the first two rules with experiments. Rolling balls down gentle ramps slowed falling enough to time with a water clock, and the result was simple: every body falls with the same steady acceleration, and distance grows with the square of the time.

He also saw that motion needs no cause. A ball rolling on a perfectly smooth, level surface would roll forever. In his 1632 *Dialogue* he imagined a closed cabin below decks on a smoothly sailing ship: butterflies fly and water drips exactly as they would in harbour. No experiment inside can tell whether the ship is moving. This *principle of relativity* would become the seed of Einstein's theory three centuries later.

Meanwhile {{fig:kepler|Johannes Kepler}}, fitting Tycho Brahe's observations, found that the planets move not in circles but in ellipses, with regular laws linking their speeds and distances. The heavens had their own mathematics. What was missing was a reason.

## Newton's Synthesis

{{fig:newton|Isaac Newton}}'s *Principia* (1687) supplied it. Three laws of motion (inertia, $F = ma$, action and reaction) and one law of gravity, an attraction between every pair of masses falling off as the square of the distance, reproduce Kepler's ellipses exactly. The Moon is falling toward the Earth just as an apple does. It simply moves sideways fast enough to keep missing.

The achievement was contested from the start. {{fig:hooke|Robert Hooke}} insisted he had suggested the inverse-square law to Newton in their correspondence, and Newton answered by striking nearly every mention of Hooke from his book. Others objected to gravity itself: a force acting instantly across empty space, with no mechanism. Newton famously declined to explain it: *hypotheses non fingo*, "I frame no hypotheses". That unease about how gravity acts at a distance would be answered only by [general relativity](/physics/general-relativity/).

## The Clockwork Universe

Over the next century and a half, Euler, Lagrange, Laplace and Hamilton rewrote Newton's mechanics in more powerful mathematical forms. Laplace imagined an intellect that, knowing every position and velocity at one instant, could compute the whole future.

The theory's greatest triumph came in 1846. Uranus was drifting from its predicted path, and {{fig:le-verrier|Urbain Le Verrier}} worked backwards to the position of an unseen planet pulling on it. {{fig:galle|Johann Galle}} pointed his telescope there and found Neptune on his first night. In England, {{fig:adams|John Couch Adams}}'s unpublished calculations were later put forward as a rival prediction, and how seriously to take them is still argued.

## A Closer Look: The Moon Is Falling

Newton's key test of universal gravitation, which he said he first tried in the plague years of 1665–66, needs only a few numbers. If the same force that pulls an apple also holds the Moon, and it weakens with the square of distance, then the Moon's acceleration towards the Earth should be the apple's divided by the square of how much farther away it is.

The Moon orbits at about 384,400 km from the Earth's centre, about 60 times the Earth's radius of 6,371 km. So gravity there should be $60^2 = 3{,}600$ times weaker than at the surface:

$$
\frac{9.81 \text{ m/s}^2}{3600} \approx 0.00272 \text{ m/s}^2 .
$$

Now measure the Moon's actual acceleration, from its orbit alone. A body moving in a circle of radius $r$ with period $T$ accelerates towards the centre at $4\pi^2 r / T^2$. The Moon's period is 27.32 days, or $2.36 \times 10^6$ seconds:

$$
\frac{4\pi^2 \times 3.844 \times 10^8 \text{ m}}{(2.36 \times 10^6 \text{ s})^2} \approx 0.00272 \text{ m/s}^2 .
$$

The two agree. The fall of an apple in an orchard and the orbit of the Moon are the same phenomenon, given one rule about how gravity weakens with distance.

Put differently, in one second the Moon falls about $\tfrac12 \times 0.00272 \approx 1.4$ millimetres towards the Earth, while moving about a kilometre sideways. The curve of its path is exactly that fall. Newton's first attempt did not match as well, partly because the Earth's radius was poorly known. The close agreement, published in the *Principia*, showed that a law found on Earth governs the heavens.

## Cracks at the Edges

The same method failed with Mercury. In 1859 Le Verrier found that its orbit swings around the Sun slightly faster than the other planets' pulls allow: 43 arcseconds per century by modern measurement. He predicted another unseen planet, Vulcan, inside Mercury's orbit. Astronomers looked for decades and never found it. The problem was not a missing planet but Newton's gravity itself.

A second crack was quieter. Galileo's relativity says that velocities simply add, so light should travel at different speeds for observers moving at different speeds. But [electromagnetism](/physics/electromagnetism/) was about to predict a single, fixed speed of light. The two theories could not both be right, and their collision produced [special relativity](/physics/special-relativity/).

Classical mechanics was not overthrown so much as bounded. Within its domain it remains exact enough to fly spacecraft and forecast weather, and even there it holds open problems. Whether the equations of fluid flow always have smooth solutions is still unknown.
