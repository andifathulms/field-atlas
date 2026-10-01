---
id: quantum-optics
domain: physics
thread: light
name: Quantum Optics
parent_ids:
  - wave-optics
  - quantum-mechanics
era_emerged: 1956 – 2012
core_question: What is left of the wave description when light is counted one photon at a time, and what can be done to light that classical physics forbids?

summary: |-
  Einstein's quanta of 1905 explained how light is absorbed, but for fifty years nobody needed a quantum theory of light itself: Maxwell's waves plus the odd quantised exchange covered every optical experiment. That ended in 1956, when Robert Hanbury Brown and Richard Twiss pointed two photomultipliers at Sirius and correlated their *intensities*, and found that photons from a hot source arrive in clumps. Roy Glauber's theory of optical coherence, in 1963, explained why — and showed that the laser, the thermal lamp and a single atom produce statistically distinguishable kinds of light.

  Once that was clear, light became something to engineer at the level of individual quanta. A single atom can be made to emit photons one at a time, never two. Noise can be moved out of one property of a beam and into another, so that a measurement beats the limit set by random photon arrival. Atoms can be stopped almost dead by the recoil from absorbed photons, which is how the coldest matter in the universe is made. And a single photon can be kept bouncing in a cavity long enough to be examined repeatedly without being destroyed.

key_ideas:
  - term: Coherent state
    definition: >-
      The quantum state that comes closest to a classical wave of definite amplitude and phase. It
      is what a laser well above threshold emits, and its photon number is Poisson-distributed:
      counting photons in a laser beam gives a mean $\bar{n}$ with spread $\sqrt{\bar{n}}$.
    turning_point_id: glauber-coherence
  - term: Second-order correlation
    definition: >-
      The quantity $g^{(2)}(0)$ measures how likely two photons are to arrive together, relative to
      independent arrivals. Thermal light gives 2, a laser gives 1, and a single emitter gives 0 —
      three values that identify the source regardless of its brightness or colour.
    turning_point_id: glauber-coherence
  - term: Bunching and antibunching
    definition: >-
      Photons from a hot body arrive in clumps because its field amplitude fluctuates; photons from
      a single atom arrive spaced out, because after emitting one the atom must be re-excited
      before it can emit again. Antibunching has no classical explanation at all.
    turning_point_id: photon-antibunching
  - term: Squeezed light
    definition: >-
      Uncertainty in a light field is shared between two quantities, like amplitude and phase.
      Squeezing redistributes it — reducing the noise in one below the vacuum level at the cost of
      raising it in the other — so a measurement that depends on only one of them can beat the
      shot-noise limit.
    turning_point_id: squeezed-light
  - term: Radiation pressure cooling
    definition: >-
      An atom moving towards a slightly red-detuned laser sees the light Doppler-shifted into
      resonance, absorbs more photons from ahead than behind, and is slowed by their recoil. Six
      beams make a viscous trap for atoms, cooling them to microkelvin.
    turning_point_id: laser-cooling
  - term: Strong coupling
    definition: >-
      When an atom in a cavity exchanges a photon with the cavity faster than either can lose it
      to the outside, the two stop being separate systems. The photon can then be measured without
      being absorbed, repeatedly.
    turning_point_id: cavity-qed

turning_points:
  - id: hanbury-brown-twiss
    date: 1956
    type: EXPERIMENT
    title: Photons from a star arrive in clumps
    description: >-
      Robert Hanbury Brown and Richard Twiss want to measure stellar diameters without the
      mechanical precision that Michelson's amplitude interferometry demands, so they correlate the
      *intensity* fluctuations recorded by two separated detectors instead of combining the beams.
      It works — they obtain the angular diameter of Sirius — and it reveals something unexpected:
      detections at the two detectors are positively correlated. Photons from a thermal source are
      bunched. Several physicists argued the effect could not exist.
    contested: false
    sources:
      - citation: "Hanbury Brown, R. & Twiss, R. Q. (1956). Correlation between photons in two coherent beams of light. Nature 177: 27–29."
        url: null
      - citation: "Hanbury Brown, R. & Twiss, R. Q. (1956). A test of a new type of stellar interferometer on Sirius. Nature 178: 1046–1048."
        url: null

  - id: glauber-coherence
    date: 1963
    type: THEORY-REPLACED
    title: Glauber's quantum theory of optical coherence
    description: >-
      Roy Glauber replaces the classical notion of coherence with a hierarchy of correlation
      functions defined on the quantised field, and shows what a photodetector actually measures:
      not the field, but normally ordered correlations of it. The coherent states he introduces
      describe laser light; thermal light and single-emitter light appear as statistically distinct
      classes. The Hanbury Brown–Twiss correlation becomes an immediate consequence rather than a
      paradox, and "quantum optics" becomes a subject with its own formalism.
    contested: false
    sources:
      - citation: "Glauber, R. J. (1963). The quantum theory of optical coherence. Physical Review 130: 2529–2539."
        url: null
      - citation: "Glauber, R. J. (1963). Coherent and incoherent states of the radiation field. Physical Review 131: 2766–2788."
        url: null

  - id: photon-antibunching
    date: 1977
    type: EXPERIMENT
    title: Light that no classical field can imitate
    description: >-
      H. Jeff Kimble, Mario Dagenais and Leonard Mandel observe resonance fluorescence from a very
      dilute beam of sodium atoms and find the opposite of bunching: after one photon is detected,
      the probability of a second immediately afterwards is *suppressed*. A single atom cannot emit
      twice without being re-excited, and no classical field can produce $g^{(2)}(0) < 1$. It is
      the first observation of light whose statistics have no classical description.
    contested: false
    sources:
      - citation: "Kimble, H. J., Dagenais, M. & Mandel, L. (1977). Photon antibunching in resonance fluorescence. Physical Review Letters 39: 691–695."
        url: null
      - citation: "Walls, D. F. (1979). Evidence for the quantum nature of light. Nature 280: 451–454."
        url: null

  - id: laser-cooling
    date: 1975 – 1997
    type: EXPERIMENT
    title: Stopping atoms with light
    description: >-
      Theodor Hänsch and Arthur Schawlow, and independently David Wineland and Hans Dehmelt,
      propose in 1975 that a red-detuned laser will preferentially slow atoms moving towards it. By
      1985 Steven Chu's group has made optical molasses; William Phillips builds the Zeeman slower;
      the magneto-optical trap follows in 1987; and Claude Cohen-Tannoudji's group explains why the
      measured temperatures are *below* the supposed Doppler limit, by a polarisation-gradient
      mechanism. Microkelvin atoms made Bose–Einstein condensation and the optical lattice clock
      possible.
    contested: false
    sources:
      - citation: "Hänsch, T. W. & Schawlow, A. L. (1975). Cooling of gases by laser radiation. Optics Communications 13: 68–69."
        url: null
      - citation: "Chu, S. (1998). The manipulation of neutral particles. Reviews of Modern Physics 70: 685–706."
        url: null
      - citation: "Dalibard, J. & Cohen-Tannoudji, C. (1989). Laser cooling below the Doppler limit by polarization gradients. Journal of the Optical Society of America B 6: 2023–2045."
        url: null

  - id: squeezed-light
    date: 1981 – 2019
    type: EXPERIMENT
    title: Noise moved out of the way
    description: >-
      Carlton Caves shows in 1981 that the sensitivity of an interferometer is limited by vacuum
      fluctuations entering its dark port, and that the limit can be beaten by injecting light
      whose uncertainty has been redistributed between amplitude and phase. Richard Slusher's group
      generates such squeezed light in 1985 by four-wave mixing in a sodium beam. In 2019 both LIGO
      detectors began running with squeezed vacuum injected continuously, improving their reach by
      a few tens of per cent — a quantum-optics technique inside a gravitational-wave observatory.
    contested: false
    sources:
      - citation: "Caves, C. M. (1981). Quantum-mechanical noise in an interferometer. Physical Review D 23: 1693–1708."
        url: null
      - citation: "Slusher, R. E., Hollberg, L. W., Yurke, B., Mertz, J. C. & Valley, J. F. (1985). Observation of squeezed states generated by four-wave mixing in an optical cavity. Physical Review Letters 55: 2409–2412."
        url: null
      - citation: "Tse, M. et al. (2019). Quantum-enhanced advanced LIGO detectors in the era of gravitational-wave astronomy. Physical Review Letters 123: 231107."
        url: null

  - id: cavity-qed
    date: 1989 – 2012
    type: EXPERIMENT
    title: Watching a single photon without destroying it
    description: >-
      Serge Haroche's group traps microwave photons between two superconducting mirrors of such
      quality that a photon survives for more than a tenth of a second, travelling some 40,000 km,
      and sends Rydberg atoms through one at a time. Each atom's phase records whether a photon is
      present without absorbing it, so the same photon can be measured repeatedly and its eventual
      death watched. David Wineland achieves the complementary control over single trapped ions
      using light. They shared the 2012 Nobel Prize.
    contested: false
    sources:
      - citation: "Gleyzes, S. et al. (2007). Quantum jumps of light recording the birth and death of a photon in a cavity. Nature 446: 297–300."
        url: null
      - citation: "Haroche, S. & Raimond, J.-M. (2006). Exploring the Quantum: Atoms, Cavities, and Photons. Oxford University Press."
        url: null

open_problems:
  - id: deterministic-single-photon-source
    name: A single-photon source good enough to scale
    status: open
    status_note: Open as of 2026; the best sources reach high purity or high efficiency, not both at scale.
    description: >-
      Photonic quantum computing needs photons produced on demand, one at a time, every time, and
      indistinguishable from one another to within their coherence. Quantum dots and defect centres
      give good purity and brightness but each emitter differs slightly from its neighbours;
      parametric down-conversion gives perfectly matched photons at random times, with multi-photon
      errors that grow as the rate rises.
    why_hard: >-
      The three requirements pull against each other. Making an emitter bright means coupling it
      strongly to its surroundings, which is also what spoils its spectral purity; making photons
      identical means making many solid-state emitters identical to a part in $10^{4}$, which
      fabrication does not yet do.
    unlocks: >-
      Linear-optical quantum computing and long-distance quantum repeaters both have resource
      requirements that scale badly with source imperfection, so a factor of two in efficiency can
      be a factor of a thousand in overhead.
    sources:
      - citation: "Senellart, P., Solomon, G. & White, A. (2017). High-performance semiconductor quantum-dot single-photon sources. Nature Nanotechnology 12: 1026–1039."
        url: null
      - citation: "Aharonovich, I., Englund, D. & Toth, M. (2016). Solid-state single-photon emitters. Nature Photonics 10: 631–641."
        url: null

applications:
  - area: Timekeeping
    title: Clocks that would not have drifted since the Big Bang
    description: >-
      Laser-cooled atoms held in an optical lattice, probed on a narrow transition, give clocks with
      fractional uncertainty near $10^{-18}$ — a second in the age of the universe. They are
      sensitive enough that moving one a centimetre higher measurably changes its rate through
      gravitational redshift, and they are the reason the SI second is expected to be redefined
      optically.
    sources:
      - citation: "Ludlow, A. D., Boyd, M. M., Ye, J., Peik, E. & Schmidt, P. O. (2015). Optical atomic clocks. Reviews of Modern Physics 87: 637–701."
        url: null
      - citation: "Bothwell, T. et al. (2022). Resolving the gravitational redshift across a millimetre-scale atomic sample. Nature 602: 420–424."
        url: null
  - area: Single-molecule biology
    title: Counting the photons from one molecule
    description: >-
      Detecting a single fluorophore means collecting a few thousand photons before it bleaches, and
      distinguishing them from background by their arrival statistics. The photon-counting
      detectors, correlation techniques and photophysics came from quantum optics, and they are what
      make single-molecule localisation microscopy and fluorescence correlation spectroscopy work
      inside living cells.
    domain: biology
    field_id: cell-biology
    sources:
      - citation: "Moerner, W. E. & Kador, L. (1989). Optical detection and spectroscopy of single molecules in a solid. Physical Review Letters 62: 2535–2538."
        url: null
      - citation: "Betzig, E. et al. (2006). Imaging intracellular fluorescent proteins at nanometer resolution. Science 313: 1642–1645."
        url: null
  - area: Gravitational-wave detection
    title: Beating shot noise in a four-kilometre interferometer
    description: >-
      Above a few hundred hertz, LIGO's sensitivity is limited by the random arrival of photons at
      its output. Injecting squeezed vacuum into the dark port reduces that noise at the cost of
      raising radiation-pressure noise at low frequency, and has been running continuously since
      2019. The detectors' reach — and therefore the number of mergers seen per year — depends on a
      1985 tabletop result.
    sources:
      - citation: "Tse, M. et al. (2019). Quantum-enhanced advanced LIGO detectors. Physical Review Letters 123: 231107."
        url: null

further_reading:
  - citation: "Haroche, S. & Raimond, J.-M. (2006). Exploring the Quantum: Atoms, Cavities, and Photons. Oxford University Press."
    url: null
    note: Cavity QED from the people who built it, with the conceptual payoff kept in view.
  - citation: "Loudon, R. (2000). The Quantum Theory of Light, 3rd edition. Oxford University Press."
    url: null
    note: The standard graduate treatment of the quantised field and photon statistics.
  - citation: "Hanbury Brown, R. (1991). Boffin: A Personal Story of the Early Days of Radar, Radio Astronomy and Quantum Optics. Adam Hilger."
    url: null
    note: A first-hand account of the intensity interferometer, including the hostility it met.
---

## Correlating Intensities Instead of Amplitudes

Measuring the angular diameter of a star by interferometry means combining light from two apertures and looking for fringes, which requires the two paths to be matched to a fraction of a wavelength across the whole instrument. {{fig:hanbury-brown|Robert Hanbury Brown}} and {{fig:twiss|Richard Twiss}} wanted to do it with a baseline of hundreds of metres, and realised they could sidestep the mechanical problem by throwing away the phase. Put a photomultiplier at each aperture, record the fluctuations in the *intensity* each one sees, and multiply the two records together. Where the star is unresolved the fluctuations are correlated; as the baseline grows, the correlation falls away, and the shape of the falloff gives the diameter. They measured Sirius in 1956.

The by-product was more important than the instrument. The correlation at zero baseline is positive and large: photons from a hot source arrive bunched together, not independently. Several physicists insisted this was impossible — if photons are independent particles, a coincidence rate above chance has nowhere to come from — and one group published a null result. The effect was real, and it is the simplest fact about light that classical particle intuition gets wrong.

## Three Kinds of Light

{{fig:glauber|Roy Glauber}} supplied the framework in 1963. The question "is this light coherent?" had meant "does it produce fringes?", a statement about the first-order correlation of the field. Glauber showed that a photodetector does not measure the field; it measures normally ordered correlations of the quantised field, and there is a whole hierarchy of them. Light can be first-order coherent and second-order anything.

The second-order quantity, written $g^{(2)}(0)$, is the probability of detecting two photons at once divided by what it would be if detections were independent. It takes three characteristic values. For thermal light — a star, a filament, any hot body — the field amplitude itself fluctuates, bright moments deliver pairs, and $g^{(2)}(0) = 2$: the Hanbury Brown–Twiss bunching. For a laser well above threshold, the amplitude is steady and photon arrivals are Poisson, giving $g^{(2)}(0) = 1$. And for a single atom, $g^{(2)}(0) = 0$, because having just emitted, it has nothing left to emit until it is re-excited.

That third case is the one classical physics cannot reach. Any classical field, however exotic, has $g^{(2)}(0) \ge 1$. {{fig:kimble|Jeff Kimble}}, {{fig:dagenais|Mario Dagenais}} and {{fig:mandel|Leonard Mandel}} measured $g^{(2)}(0) < 1$ from sodium atoms in 1977, and in doing so produced the first light that demonstrably required quantisation of the field, rather than merely of the matter absorbing it.

## A Closer Look: What Photon Statistics Cost a Quantum Cryptographer

Start with the scale. A 1 mW beam at 550 nm carries photons of energy

$$
E = \frac{hc}{\lambda} = \frac{(6.626 \times 10^{-34})(3.00 \times 10^{8})}{550 \times 10^{-9}} = 3.6 \times 10^{-19} \text{ J},
$$

so the flux is $10^{-3} / 3.6 \times 10^{-19} \approx 2.8 \times 10^{15}$ photons per second. Individual photons are not a scarce resource in ordinary light; the issue is their arrival pattern.

For a coherent state of mean photon number $\mu$, the number arriving in a given interval is Poisson:

$$
P(n) = e^{-\mu}\frac{\mu^{n}}{n!}.
$$

Now consider quantum key distribution. The [BB84 protocol](/physics/quantum-information/) is secure because an eavesdropper cannot copy a single photon without disturbing it. If a pulse contains *two* identical photons, she can take one and let the other through, learning a bit with no disturbance at all — the photon-number-splitting attack. Real systems mostly use an attenuated laser rather than a true single-photon source, so what matters is how often a non-empty pulse contains more than one photon.

Attenuate to $\mu = 0.1$ photons per pulse:

$$
P(0) = e^{-0.1} = 0.9048, \quad P(1) = 0.0905, \quad P(2) = 0.00452, \quad P({\ge}2) = 0.00468.
$$

Of the pulses that contain anything at all, the fraction carrying two or more is

$$
\frac{0.00468}{1 - 0.9048} = \frac{0.00468}{0.0952} = 4.9\%.
$$

One pulse in twenty of the useful ones is leaky. Lower $\mu$ to improve that and you lose signal proportionally: at $\mu = 0.01$ the multi-photon fraction falls to about 0.5%, but 99% of pulses are empty, so the key rate falls by a factor of ten. The trade-off is set entirely by Poisson statistics, and it is why decoy-state protocols — which estimate the eavesdropper's advantage by varying $\mu$ — had to be invented, and why a deterministic single-photon source with $g^{(2)}(0) \approx 0$ would be worth so much.

The same arithmetic run backwards is the shot-noise limit. Counting $N$ photons gives a relative precision of $1/\sqrt{N}$, so an interferometer using $10^{20}$ photons per second measures a phase to about $10^{-10}$ radians — unless the light is squeezed, in which case the uncertainty is redistributed and the phase can be measured better at the cost of the amplitude being measured worse. That is the trick running inside LIGO since 2019.

## Light as a Tool on Matter

The last part of the subject turns the relationship around: instead of using matter to make interesting light, use light to control matter. An atom absorbing a photon takes its momentum, $h/\lambda$, which at sodium's 589 nm is $1.1 \times 10^{-27}$ kg·m/s. Divided by the mass of a sodium atom, $3.8 \times 10^{-26}$ kg, that is a velocity change of 2.9 cm/s per photon. Do it ten thousand times a second with a laser tuned slightly below resonance, so that only atoms moving towards the beam are Doppler-shifted into resonance, and the atoms are slowed. Six beams make a viscous medium for atoms, and {{fig:chu|Steven Chu}}, {{fig:phillips|William Phillips}} and {{fig:cohen-tannoudji|Claude Cohen-Tannoudji}} brought sodium to microkelvin temperatures this way — colder, by then, than anything else known. The [Bose–Einstein condensate](/physics/statistical-mechanics/) of 1995 was made from laser-cooled atoms, and the optical lattice clock followed.

{{fig:haroche|Serge Haroche}} took the complementary route: trap the photon and send atoms past it. Microwave photons between superconducting mirrors of extraordinary quality survive more than a tenth of a second, during which the photon travels some 40,000 kilometres between reflections. A Rydberg atom crossing the cavity acquires a phase shift that depends on whether a photon is there, without absorbing it, so the same photon can be interrogated hundreds of times and its eventual disappearance watched as a quantum jump.

The techniques here feed two directions. Engineering light's statistics and entanglement for computation and communication is [quantum information](/physics/quantum-information/). Making light intense, short and coherent enough to be an industrial and scientific instrument is [lasers and photonics](/physics/lasers-photonics/), and almost everything in this chapter was done with a laser in the first place.
