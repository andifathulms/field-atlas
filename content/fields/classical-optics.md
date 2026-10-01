---
id: classical-optics
domain: physics
thread: light
name: Classical Optics
parent_ids: []
era_emerged: c. 984 – 1704
core_question: What is light, how does it travel, and why does it bend?

summary: |-
  Optics is the oldest quantitative physics that is still physics. Light does something regular when it meets glass or water, and the rule governing it — the ratio of the sines of the angles is a constant for any pair of materials — was written down in Baghdad around 984, six centuries before Snell and Descartes arrived at it again. Ibn al-Haytham then settled what vision is: light travels from objects into the eye, not out of it, and he argued it with experiments rather than authority.

  Two questions remained. How fast does light go, which Ole Rømer answered in 1676 from the clockwork of Jupiter's moons, and what *is* it. On the second, the seventeenth century split. Newton's prisms showed that white light is a mixture already present in the beam, which fitted a stream of corpuscles; Huygens built an exact theory of refraction from spreading wavefronts. Both explained the available facts. The question was not settled for over a century, and the eventual answer was neither.

key_ideas:
  - term: Law of refraction
    definition: >-
      When light crosses a boundary, $n_1 \sin\theta_1 = n_2 \sin\theta_2$, where the refractive
      index $n$ is a property of the material. Beyond a critical angle, light leaving a dense
      medium cannot escape at all and is totally reflected.
    turning_point_id: ibn-sahl-refraction
  - term: Intromission
    definition: >-
      Vision happens because light from an object enters the eye. The rival theory, that
      something is emitted by the eye, had been respectable for a thousand years; ruling it out
      made optics the study of light rather than of seeing.
    turning_point_id: ibn-al-haytham-optics
  - term: Principle of least time
    definition: >-
      Of all the paths light could take between two points, it takes the one traversed in the
      shortest time. Refraction follows from it in a line of algebra, and the idea that a path is
      selected by making a quantity extremal became a template for the whole of physics.
    turning_point_id: fermat-least-time
  - term: Dispersion
    definition: >-
      Different colours refract by different amounts, so a prism separates them. Newton's point
      was that the colours are already in the white light; the glass sorts them rather than
      making them.
    turning_point_id: newton-prism
  - term: Wavefront construction
    definition: >-
      Treat every point of a wavefront as a source of a new spherical wave; the envelope of those
      wavelets is the wavefront an instant later. Huygens derived reflection, refraction and the
      strange double image in calcite from this one rule.
    turning_point_id: huygens-wave-principle

turning_points:
  - id: ibn-sahl-refraction
    date: c. 984
    type: DISCOVERY
    title: Ibn Sahl's law of refraction
    description: >-
      In *On Burning Instruments*, written in Baghdad, Ibn Sahl analyses lenses and mirrors that
      focus sunlight and states the law of refraction as a constant ratio between two lengths in
      his construction — the relation now written with sines. He uses it to design a lens that
      brings rays to a point. The manuscript was identified and read by Roshdi Rashed only in
      1990, which is why the law carries the names of two seventeenth-century Europeans.
    contested: false
    sources:
      - citation: "Rashed, R. (1990). A pioneer in anaclastics: Ibn Sahl on burning mirrors and lenses. Isis 81(3): 464–491."
        url: null
      - citation: "Rashed, R. (1993). Géométrie et dioptrique au Xe siècle: Ibn Sahl, al-Qūhī et Ibn al-Haytham. Les Belles Lettres, Paris."
        url: null

  - id: ibn-al-haytham-optics
    date: c. 1011 – 1021
    type: PARADIGM-SHIFT
    title: The Book of Optics
    description: >-
      Ibn al-Haytham argues that vision is caused by light entering the eye from every point of an
      object, and supports it with experiments: a dark chamber with a small hole forms an inverted
      image, looking at the sun hurts, afterimages persist. The rival emission theories of Euclid
      and Ptolemy are dismantled on the evidence. Translated into Latin as *De aspectibus*, it
      shaped European optics for five centuries and was still being used by Kepler.
    contested: false
    sources:
      - citation: "Ibn al-Haytham (c. 1021). Kitāb al-Manāẓir. Translated by A. I. Sabra as The Optics of Ibn al-Haytham, Books I–III (1989). Warburg Institute."
        url: null
      - citation: "Lindberg, D. C. (1976). Theories of Vision from al-Kindi to Kepler. University of Chicago Press."
        url: null

  - id: fermat-least-time
    date: "1662"
    type: THEORY-REPLACED
    title: Fermat's principle of least time
    description: >-
      Descartes had published the refraction law in 1637 with a derivation assuming light moves
      *faster* in denser media. Pierre de Fermat objects, and derives the same law from the
      opposite assumption plus a single principle: light takes the path that takes the least time.
      The result is identical in form and opposite in physical content, and it was Fermat who was
      right about the speed. The principle also introduced a way of reasoning — find the path that
      makes a quantity extremal — that runs through mechanics, relativity and quantum field
      theory.
    contested: false
    sources:
      - citation: "Fermat, P. de (1662). Letter to Marin Cureau de la Chambre, 1 January 1662. Œuvres de Fermat II: 457–463."
        url: null
      - citation: "Sabra, A. I. (1981). Theories of Light from Descartes to Newton. Cambridge University Press."
        url: null

  - id: newton-prism
    date: 1666 – 1704
    type: DISCOVERY
    title: Newton's prisms and the nature of colour
    description: >-
      Isaac Newton passes a narrow beam of sunlight through a prism and obtains a spread of
      colours, then — the step that mattered — passes one colour through a second prism and finds
      it unchanged. Colour is therefore a property of the light, not something the glass creates,
      and white light is a mixture. He reports it in 1672 and is attacked, chiefly by Hooke, over
      whether the experiment supports his corpuscular leanings. *Opticks* (1704) set out the
      programme, and his authority made the particle view dominant in Britain for a century.
    contested: false
    sources:
      - citation: "Newton, I. (1672). New theory about light and colours. Philosophical Transactions of the Royal Society 6: 3075–3087."
        url: null
      - citation: "Newton, I. (1704). Opticks. London."
        url: null
      - citation: "Shapiro, A. E. (1980). The evolving structure of Newton's theory of white light and color. Isis 71: 211–235."
        url: null

  - id: romer-light-speed
    date: "1676"
    type: DISCOVERY
    title: Rømer times light across the Earth's orbit
    description: >-
      Ole Rømer, timing the eclipses of Jupiter's moon Io at the Paris Observatory, finds that
      they run late when the Earth is far from Jupiter and early when it is near, by a total of
      about twenty-two minutes over the year. He concludes that light takes that long to cross
      the diameter of the Earth's orbit, and predicts an eclipse eleven minutes late for November
      1676. The prediction held. Light has a finite speed, and it is enormous.
    contested: false
    sources:
      - citation: "Rømer, O. (1676). Démonstration touchant le mouvement de la lumière. Journal des Sçavans, 7 December 1676: 233–236."
        url: null
      - citation: "Bobis, L. & Lequeux, J. (2008). Cassini, Rømer and the velocity of light. Journal of Astronomical History and Heritage 11(2): 97–105."
        url: null

  - id: huygens-wave-principle
    date: "1690"
    type: THEORY-REPLACED
    title: Huygens's wave construction
    description: >-
      In the *Traité de la Lumière*, Christiaan Huygens treats light as a disturbance spreading
      through a medium, with every point of a wavefront acting as the source of a new spherical
      wavelet. Reflection and refraction follow geometrically, the refractive index becomes a
      ratio of speeds, and the double image produced by calcite — which no corpuscular account
      could touch — is explained by two wave surfaces. It was the first theory to predict that
      light goes *slower* in glass.
    contested: false
    sources:
      - citation: "Huygens, C. (1690). Traité de la Lumière. Leiden."
        url: null
      - citation: "Shapiro, A. E. (1973). Kinematic optics: a study of the wave theory of light in the seventeenth century. Archive for History of Exact Sciences 11: 134–266."
        url: null

open_problems:
  - id: abraham-minkowski
    name: The momentum of light inside matter
    status: open
    status_note: Widely regarded as resolved by Barnett's 2010 reconciliation; still disputed in detail as of 2026.
    description: >-
      Two expressions for the momentum of a photon in a medium of refractive index $n$ have been
      defended since 1908: Minkowski's, which is $n$ times the vacuum value, and Abraham's, which
      is the vacuum value divided by $n$. They differ by a factor of $n^2$, and experiments have
      been read as supporting each. Stephen Barnett's resolution assigns Abraham's to the kinetic
      momentum and Minkowski's to the canonical momentum, so that each answers a different
      question.
    why_hard: >-
      Any measurement moves the medium as well as the light, and dividing the total momentum
      between field and matter is a matter of definition rather than observation. Experiments that
      appear to settle it usually differ in which part of the system they are sensitive to.
    unlocks: >-
      Correct accounting of radiation forces in optical trapping, in laser cooling of
      nanoparticles and in optomechanics, where the distinction has practical consequences for
      what a photon does to a suspended object.
    sources:
      - citation: "Barnett, S. M. (2010). Resolution of the Abraham–Minkowski dilemma. Physical Review Letters 104: 070401."
        url: null
      - citation: "Pfeifer, R. N. C., Nieminen, T. A., Heckenberg, N. R. & Rubinsztein-Dunlop, H. (2007). Momentum of an electromagnetic wave in dielectric media. Reviews of Modern Physics 79: 1197–1216."
        url: null

applications:
  - area: Instruments
    title: Every lens ever designed
    description: >-
      Spectacles, telescopes, microscopes, cameras and photolithographic steppers are all built by
      tracing rays through surfaces using the refraction law and the geometry Ibn Sahl used for
      burning lenses. Modern design software solves the same equations a few billion times to
      balance aberrations across a field of view, but the physics in the inner loop is from 984.
    sources:
      - citation: "Smith, W. J. (2007). Modern Optical Engineering, 4th edition. McGraw-Hill."
        url: null
  - area: Variational methods
    title: Least time becomes least action
    description: >-
      Fermat's principle is the first statement that nature selects a path by making a quantity
      extremal. Maupertuis, Euler and Lagrange generalised it to mechanics as least action, and
      the mathematics of finding a function that extremises an integral — the calculus of
      variations — grew out of exactly this family of problems.
    domain: math
    field_id: continuous-optimization
    sources:
      - citation: "Goldstine, H. H. (1980). A History of the Calculus of Variations from the 17th through the 19th Century. Springer."
        url: null
  - area: Navigation and surveying
    title: Mirages, dip and the bending of sightlines
    description: >-
      Air's refractive index varies with density, so light bends in the atmosphere. Surveyors
      correct for it, navigators correct the apparent altitude of a star by about 34 arcminutes at
      the horizon, and the same gradient produces mirages and the flattened Sun at sunset. The
      corrections were tabulated long before anyone agreed what light was.
    sources:
      - citation: "Lehn, W. H. & van der Werf, S. (2005). Atmospheric refraction: a history. Applied Optics 44(27): 5624–5636."
        url: null

further_reading:
  - citation: "Sabra, A. I. (1981). Theories of Light from Descartes to Newton. Cambridge University Press."
    url: null
    note: The standard account of the seventeenth-century argument, fair to both sides.
  - citation: "Lindberg, D. C. (1976). Theories of Vision from al-Kindi to Kepler. University of Chicago Press."
    url: null
    note: How the question "what is seeing" was settled, and why it took so long.
  - citation: "Hecht, E. (2017). Optics, 5th edition. Pearson."
    url: null
    note: The standard textbook; its historical notes are unusually good.
---

## The Rule for Bending

Put a stick in water and it appears to break at the surface. The rule behind that appearance was found in Baghdad. {{fig:ibn-sahl|Ibn Sahl}}, writing around 984 about mirrors and lenses that set things alight, drew a construction in which the ratio of two lengths stays fixed as the angle changes — the relation we write as $n_1 \sin\theta_1 = n_2 \sin\theta_2$ — and used it to design a lens that focuses rays to a point. His manuscript sat unread until 1990, so the law is named for Willebrord Snell, who found it in 1621 and did not publish, and for René Descartes, who published it in 1637.

A generation after Ibn Sahl, {{fig:ibn-al-haytham|Ibn al-Haytham}} settled a more basic question. For a thousand years there had been two accounts of vision: light travels from the object to the eye, or something travels from the eye to the object. He argued the first, and argued it the way we would — a dark room with a small hole makes an inverted image on the far wall, bright light leaves an afterimage, staring at the sun injures the eye. All of these make sense if light arrives and none if it departs. The *Book of Optics* reached Europe in Latin translation and was the standard work for five hundred years. {{fig:kepler|Kepler}} was still working from it in 1604.

## Least Time

Descartes had the right law from the wrong premise: his derivation required light to move faster in glass than in air. {{fig:fermat|Pierre de Fermat}} objected in 1662, and replaced the premise with a principle. Of all paths from a point in air to a point in water, light takes the one that takes the least time. Since it travels more slowly in water, the quickest route is not the straight one — it spends more of its length in the fast medium — and working out which route minimises the total time gives exactly the sine law.

The principle is more important than the problem. It says that the path is determined by making a quantity extremal, and that way of thinking propagated: Maupertuis and Euler to least action in mechanics, Lagrange and Hamilton to the whole structure of classical dynamics, Feynman to the sum over histories. The [calculus of variations](/math/continuous-optimization/) was built to handle problems of this shape, and the first of them was a ray of light entering water.

## Particles, Waves, and a Standoff

{{fig:newton|Isaac Newton}} let a thin beam of sunlight through a prism and got a band of colours. That much was known. His decisive addition was to take one colour out of the band and send it through a second prism: it emerged the same colour, bent by the same amount, unchanged. So the prism does not manufacture colour; it sorts a mixture that was in the white light all along. The *experimentum crucis* was published in 1672, attacked immediately by Hooke, and defended by Newton for the rest of his life.

{{fig:huygens|Christiaan Huygens}} built the other theory. In the *Traité de la Lumière* of 1690, light is a disturbance spreading through a medium, and every point on a wavefront is treated as a source of a new spherical wavelet whose envelope gives the front an instant later. From this he derived reflection, derived refraction with the index as a ratio of speeds, and — the triumph — explained the double image formed by a calcite crystal, which no account made of particles could approach. His theory required light to go slower in glass, which was correct and, at the time, unmeasurable.

Two theories, both quantitative, both covering nearly all the evidence, separated by a measurement nobody could make for 160 years. Newton's prestige settled the matter socially rather than physically, and the particle view prevailed in Britain until {{fig:thomas-young|Thomas Young}} put two slits in front of a light source — the beginning of [wave optics](/physics/wave-optics/).

## A Closer Look: Timing Light with Jupiter's Moon

Io circles Jupiter every 42.5 hours and is eclipsed by it each orbit, so the Jupiter system is a clock visible from Earth. {{fig:romer|Ole Rømer}} compiled eclipse times at the Paris Observatory through the 1670s and found they did not keep step with a uniform period. When the Earth was approaching Jupiter the eclipses came early; when receding, late. The discrepancy accumulated to something like twenty-two minutes between the two extremes.

His interpretation: the eclipses happen when they happen, and the *news* of them travels at a finite speed. When the Earth is on the far side of its orbit the news has an extra distance to cross, equal to the diameter of the Earth's orbit. So

$$
c = \frac{\text{diameter of Earth's orbit}}{\text{accumulated delay}}.
$$

Take the modern value for the diameter, $2 \text{ AU} = 2.99 \times 10^{11}$ m, and Rømer's twenty-two minutes, 1,320 seconds:

$$
c = \frac{2.99 \times 10^{11}}{1320} = 2.3 \times 10^{8} \text{ m/s}.
$$

That is 25% low, and the error is entirely in the delay. With the true value of $c$, the crossing takes

$$
\frac{2.99 \times 10^{11}}{2.998 \times 10^{8}} = 997 \text{ s} = 16.6 \text{ minutes},
$$

so Rømer's figure was about a third too large. Timing an eclipse of a moon by eye, through a seventeenth-century refractor, with Jupiter's shadow edge being soft, is good to a minute or two at best, and the orbital period itself had to be fitted from the same contaminated data. Note also what he did not need: the size of the Earth's orbit. Rømer published a *time*, eleven minutes one way, and a prediction that an eclipse in November 1676 would run late by that much. The prediction held. {{fig:huygens|Huygens}} supplied the astronomical unit and turned the time into a speed.

Two things are worth taking from this. First, a 25% measurement that settles a qualitative question — light is not instantaneous — is worth more than a precise measurement of something nobody disputes. Second, the method is differential: Rømer never measured a one-way travel time, only how the delay *changed* as the geometry changed, which is why a crude clock sufficed. The terrestrial measurements of {{fig:fizeau|Fizeau}} and {{fig:foucault|Foucault}} in the 1850s used the same trick with a spinning wheel instead of a planet, and they finally showed that light slows in water, as Fermat and Huygens had required and Newton's followers had denied.
