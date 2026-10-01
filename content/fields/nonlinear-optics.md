---
id: nonlinear-optics
domain: physics
thread: light
name: Nonlinear and Nano-Optics
parent_ids:
  - lasers-photonics
  - wave-optics
era_emerged: 1961 – 2023
core_question: What does light do when its field rivals the fields inside atoms, and what does matter do when it is structured on the scale of a wavelength?

summary: |-
  Classical optics is linear: beams pass through one another unchanged, and a medium's response is proportional to the field applied. That is not a law of nature but a consequence of ordinary light being weak. A year after the ruby laser, Peter Franken focused one into a quartz crystal and found ultraviolet light at exactly twice the frequency coming out — the medium had responded to the square of the field. Everything in this field follows from pushing that further: light that changes colour, light that steers itself, light intense enough to strip an atom and then be re-emitted as a hundredth harmonic.

  The second half of the subject does the opposite. Instead of making light extreme, it structures matter on the scale of the wavelength, so that the effective refractive index becomes a design variable rather than a material property. Photonic crystals forbid propagation in a band of frequencies the way a semiconductor forbids electron energies; metamaterials made of sub-wavelength resonators can be given a negative index, which Maxwell's equations permit and no natural substance provides.

key_ideas:
  - term: Nonlinear susceptibility
    definition: >-
      Expand a material's polarisation in powers of the applied field. The second-order term
      generates sum and difference frequencies, so a beam at $\omega$ produces light at $2\omega$;
      the third-order term shifts the refractive index in proportion to intensity. The coefficients
      are tiny, which is why lasers were needed to see them.
    turning_point_id: franken-second-harmonic
  - term: Phase matching
    definition: >-
      Converted light generated at one point must stay in step with light generated further along,
      or the contributions cancel. Since the index depends on frequency, this requires engineering —
      choosing a crystal orientation, or periodically reversing the crystal's sign.
    turning_point_id: franken-second-harmonic
  - term: Optical soliton
    definition: >-
      A pulse whose spreading by dispersion is exactly cancelled by an intensity-dependent index
      shift, so that it propagates without changing shape over thousands of kilometres. Nonlinearity
      here stabilises rather than distorts.
    turning_point_id: optical-solitons
  - term: Chirped pulse amplification
    definition: >-
      Stretch a short pulse in time by a factor of ten thousand, amplify it while it is too long to
      destroy the amplifier, then recompress it. It is the reason tabletop lasers reach petawatt
      peak powers.
    turning_point_id: chirped-pulse-amplification
  - term: Photonic bandgap
    definition: >-
      A periodic structure with a period near the wavelength reflects a band of frequencies
      completely, from any direction. Light in that band cannot propagate, which allows waveguides
      with sharp bends and cavities with almost no loss.
    turning_point_id: photonic-crystals
  - term: Negative refractive index
    definition: >-
      If both the electric permittivity and magnetic permeability are negative, waves refract the
      wrong way at a boundary and phase travels backwards relative to energy. Maxwell's equations
      allow it; no natural material does it, and sub-wavelength resonator arrays can be built to.
    turning_point_id: negative-index-metamaterials

turning_points:
  - id: franken-second-harmonic
    date: 1961
    type: DISCOVERY
    title: Light that doubles its own frequency
    description: >-
      Peter Franken, Alan Hill, Wilbur Peters and Gabriel Weinreich focus a pulsed ruby laser at
      694.3 nm into a quartz crystal and detect ultraviolet light at 347.2 nm, exactly half the
      wavelength. The material's response contains a term proportional to the square of the field,
      which no previous light source had been bright enough to reveal. The conversion was so weak
      that in the published figure the spot of second-harmonic light was accidentally removed by the
      printer, who took it for a speck of dirt.
    contested: false
    sources:
      - citation: "Franken, P. A., Hill, A. E., Peters, C. W. & Weinreich, G. (1961). Generation of optical harmonics. Physical Review Letters 7: 118–119."
        url: null
      - citation: "Bloembergen, N. (1996). Nonlinear Optics, 4th edition. World Scientific."
        url: null

  - id: negative-index-metamaterials
    date: 1968 – 2006
    type: DISCOVERY
    title: A refractive index below zero
    description: >-
      Victor Veselago works out in 1968 what would happen in a material with both permittivity and
      permeability negative: light refracts to the wrong side of the normal, the Doppler shift
      reverses, and a flat slab can focus. No such material was known. In 2000 John Pendry shows
      that arrays of sub-wavelength wires and split rings can supply both, that such a slab would
      recover evanescent waves and so beat the diffraction limit, and David Smith's group builds one
      for microwaves. A cloak that routes microwaves around a region followed in 2006.
    contested: true
    contested_note: >-
      Pendry's "perfect lens" and the cloaking work provoked years of argument over how much is
      achievable in practice. Negative index itself is well established, but the sub-wavelength
      imaging it was supposed to enable is limited by absorption in the resonators, and later work
      proved that a passive linear cloak cannot hide an object across a broad band of frequencies.
      What remains is real and narrower than the first claims.
    sources:
      - citation: "Veselago, V. G. (1968). The electrodynamics of substances with simultaneously negative values of ε and μ. Soviet Physics Uspekhi 10: 509–514."
        url: null
      - citation: "Pendry, J. B. (2000). Negative refraction makes a perfect lens. Physical Review Letters 85: 3966–3969."
        url: null
      - citation: "Monticone, F. & Alù, A. (2013). Do cloaked objects really scatter less? Physical Review X 3: 041005."
        url: null

  - id: optical-solitons
    date: 1973 – 1980
    type: EXPERIMENT
    title: Pulses that refuse to spread
    description: >-
      A short pulse in fibre spreads out, because its different frequency components travel at
      different speeds. Akira Hasegawa and Frederick Tappert predict that at the right power the
      intensity-dependent index shift exactly cancels the spreading, giving a pulse that propagates
      unchanged: an optical soliton, obeying the same equation as the solitary water waves John Scott
      Russell chased on a canal in 1834. Linn Mollenauer, Roger Stolen and James Gordon observe them
      in 1980.
    contested: false
    sources:
      - citation: "Hasegawa, A. & Tappert, F. (1973). Transmission of stationary nonlinear optical pulses in dispersive dielectric fibers. Applied Physics Letters 23: 142–144."
        url: null
      - citation: "Mollenauer, L. F., Stolen, R. H. & Gordon, J. P. (1980). Experimental observation of picosecond pulse narrowing and solitons in optical fibers. Physical Review Letters 45: 1095–1098."
        url: null

  - id: chirped-pulse-amplification
    date: 1985
    type: EXPERIMENT
    title: Chirped pulse amplification
    description: >-
      A short pulse cannot be amplified directly: long before it reaches useful energy its peak
      intensity destroys the amplifier. Donna Strickland and Gérard Mourou stretch the pulse in time
      by a factor of ten thousand using the fact that a grating pair delays red and blue differently,
      amplify the harmlessly long pulse, then recompress it with a matched grating pair. Peak powers
      rose by six orders of magnitude within a decade, reaching petawatts on a tabletop.
    contested: false
    sources:
      - citation: "Strickland, D. & Mourou, G. (1985). Compression of amplified chirped optical pulses. Optics Communications 55: 447–449."
        url: null
      - citation: "Mourou, G. (2019). Nobel Lecture: Extreme light physics and application. Reviews of Modern Physics 91: 030501."
        url: null

  - id: photonic-crystals
    date: 1987
    type: THEORY-REPLACED
    title: Photonic band structure
    description: >-
      Eli Yablonovitch and Sajeev John, independently, point out that a dielectric structure
      periodic on the scale of the wavelength does to photons what a crystal lattice does to
      electrons: it produces bands and, if the contrast is high enough, a gap in which no
      propagating state exists at all. Light in the gap simply cannot travel, so it can be guided
      round sharp corners, trapped in a cavity the size of a wavelength, or stopped from being
      emitted at all.
    contested: false
    sources:
      - citation: "Yablonovitch, E. (1987). Inhibited spontaneous emission in solid-state physics and electronics. Physical Review Letters 58: 2059–2062."
        url: null
      - citation: "John, S. (1987). Strong localization of photons in certain disordered dielectric superlattices. Physical Review Letters 58: 2486–2489."
        url: null

  - id: high-harmonic-attosecond
    date: 1987 – 2001
    type: DISCOVERY
    title: High harmonics and the attosecond pulse
    description: >-
      Focus an intense infrared pulse into a gas and the emitted spectrum contains odd harmonics up
      to the hundredth order and beyond, extending into the extreme ultraviolet. The mechanism, set
      out by Paul Corkum in 1993, is that the field rips an electron from the atom, accelerates it,
      and drives it back to recombine, releasing the accumulated energy as one high-frequency photon
      per cycle. Because the emission is confined to a fraction of an optical cycle, the resulting
      bursts last a few hundred attoseconds — in 2001 Ferenc Krausz's group and Pierre Agostini's
      group measured them.
    contested: false
    sources:
      - citation: "Ferray, M., L'Huillier, A., Li, X. F., Lompré, L. A., Mainfray, G. & Manus, C. (1988). Multiple-harmonic conversion of 1064 nm radiation in rare gases. Journal of Physics B 21: L31–L35."
        url: null
      - citation: "Corkum, P. B. (1993). Plasma perspective on strong field multiphoton ionization. Physical Review Letters 71: 1994–1997."
        url: null
      - citation: "Hentschel, M. et al. (2001). Attosecond metrology. Nature 414: 509–513."
        url: null

open_problems:
  - id: tunnelling-time
    name: How long quantum tunnelling takes
    status: open
    status_note: Open as of 2026; attosecond experiments have been read as supporting both zero and non-zero delays.
    description: >-
      When a strong laser field pulls an electron out of an atom, the electron passes through a
      barrier. Asking how long that passage takes turns out to be ill-posed in ordinary quantum
      mechanics: there is no operator for the time spent in a region, and several competing
      definitions give different answers. Attosecond "attoclock" measurements, which encode time in
      the rotating direction of the laser field, have been interpreted as showing delays of tens of
      attoseconds and as showing none at all.
    why_hard: >-
      The measured quantity is the final momentum of the electron, and extracting a time from it
      requires a model of everything that happens after the barrier — the parent ion's attraction,
      the electron's initial transverse momentum, the shape of the field. Different models shift the
      inferred delay by more than the effect being measured.
    unlocks: >-
      A well-defined operational meaning for duration in quantum processes, which bears on anything
      timed at the scale of electron motion, from photoemission delays to the speed limits of
      light-driven electronics.
    sources:
      - citation: "Eckle, P. et al. (2008). Attosecond ionization and tunneling delay time measurements in helium. Science 322: 1525–1529."
        url: null
      - citation: "Sainadh, U. S. et al. (2019). Attosecond angular streaking and tunnelling time in atomic hydrogen. Nature 568: 75–77."
        url: null

applications:
  - area: Microscopy
    title: Breaking the diffraction limit with saturation
    description: >-
      Abbe's limit applies to linear optics. Stimulated-emission-depletion microscopy switches
      fluorophores off everywhere except a central spot, using a doughnut-shaped beam intense enough
      to saturate the depletion, and the effective spot shrinks without bound as intensity rises.
      Nonlinearity, not better lenses, is what let light microscopy resolve tens of nanometres inside
      living cells.
    domain: biology
    field_id: cell-biology
    sources:
      - citation: "Hell, S. W. & Wichmann, J. (1994). Breaking the diffraction resolution limit by stimulated emission. Optics Letters 19: 780–782."
        url: null
      - citation: "Hell, S. W. (2007). Far-field optical nanoscopy. Science 316: 1153–1158."
        url: null
  - area: Accelerators
    title: Accelerating electrons in a plasma wave
    description: >-
      A chirped-pulse laser focused into a gas drives a plasma wave whose electric field reaches
      100 GV/m, about a thousand times what a radio-frequency cavity can sustain before breaking
      down. Electrons surfing that wave reach several GeV in a few centimetres. Whether this becomes
      a usable accelerator depends on beam quality and repetition rate rather than on gradient.
    sources:
      - citation: "Tajima, T. & Dawson, J. M. (1979). Laser electron accelerator. Physical Review Letters 43: 267–270."
        url: null
      - citation: "Esarey, E., Schroeder, C. B. & Leemans, W. P. (2009). Physics of laser-driven plasma-based electron accelerators. Reviews of Modern Physics 81: 1229–1285."
        url: null
  - area: Consumer and telecom hardware
    title: Frequency conversion everywhere
    description: >-
      A green laser pointer is an infrared diode laser at 1064 nm doubled in a crystal. Periodically
      poled lithium niobate, in which the crystal's sign is reversed every few microns to maintain
      phase matching, converts wavelengths for telecommunications, generates the entangled photon
      pairs used in quantum optics, and supplies the mid-infrared sources used for gas sensing.
    sources:
      - citation: "Fejer, M. M., Magel, G. A., Jundt, D. H. & Byer, R. L. (1992). Quasi-phase-matched second harmonic generation. IEEE Journal of Quantum Electronics 28: 2631–2654."
        url: null

further_reading:
  - citation: "Boyd, R. W. (2020). Nonlinear Optics, 4th edition. Academic Press."
    url: null
    note: The standard text; clear about where the susceptibilities come from and how small they are.
  - citation: "Joannopoulos, J. D., Johnson, S. G., Winn, J. N. & Meade, R. D. (2008). Photonic Crystals: Molding the Flow of Light, 2nd edition. Princeton University Press."
    url: null
    note: Photonic band structure developed by analogy with solids, with the analogy's limits stated.
  - citation: "Krausz, F. & Ivanov, M. (2009). Attosecond physics. Reviews of Modern Physics 81: 163–234."
    url: null
    note: How attosecond pulses are made and what has been measured with them.
---

## When Beams Stop Ignoring Each Other

Everything in [wave optics](/physics/wave-optics/) assumes linearity: two beams crossing pass through one another untouched, and a material's polarisation is proportional to the field applied. This is an extremely good approximation for sunlight, and it is an approximation. Expand the polarisation in powers of the field,

$$
P = \varepsilon_0\left(\chi^{(1)}E + \chi^{(2)}E^{2} + \chi^{(3)}E^{3} + \cdots\right),
$$

and the higher terms are always there. They are simply unobservable until the field is large, because $\chi^{(2)}$ is of order $10^{-12}$ metres per volt.

{{fig:peter-franken|Peter Franken}} made them observable within a year of Maiman's laser. Focusing a ruby pulse at 694.3 nm into quartz, his group detected light at 347.2 nm — exactly twice the frequency, which is what a term in $E^2$ produces when $E$ oscillates. The conversion efficiency was about one part in $10^{8}$, and the published photograph of the spectrum is famous for not showing the result: the printer took the faint spot of ultraviolet for dirt on the plate and removed it.

The second-order term also makes trouble that had to be engineered away. Light converted at the front of the crystal travels onwards at the index for $2\omega$ while the driving beam travels at the index for $\omega$, so they drift out of step and later contributions cancel earlier ones. Phase matching — orienting a birefringent crystal so the two speeds agree, or periodically reversing the crystal's sign every few microns so the mismatch resets — is the difference between a laboratory curiosity and the green laser pointer, which is an infrared diode doubled in a crystal.

The third-order term gives an index that depends on intensity. In a fibre this does something useful: a pulse spreading out through dispersion can be held together by the index shift its own peak creates. {{fig:hasegawa|Akira Hasegawa}} and {{fig:tappert|Frederick Tappert}} predicted these optical solitons in 1973, and they obey the same equation as the solitary wave {{fig:scott-russell|John Scott Russell}} followed on horseback along a Scottish canal in 1834.

## Structure Instead of Substance

The other half of the subject leaves light alone and builds the material. Two observations in 1987, by {{fig:yablonovitch|Eli Yablonovitch}} and {{fig:sajeev-john|Sajeev John}}, pointed out that a dielectric patterned periodically at the scale of a wavelength does to photons what a crystal lattice does to electrons: bands, and with enough index contrast a complete gap in which no propagating mode exists in any direction. Inside a photonic bandgap, light cannot travel, so a line defect becomes a waveguide that turns a right angle without loss, and a point defect becomes a cavity the size of a wavelength.

{{fig:pendry|John Pendry}} went further and asked what properties could be synthesised rather than found. A lattice of thin wires behaves as a medium with negative electric permittivity; a lattice of split metal rings has a magnetic resonance and can present negative permeability. {{fig:veselago|Victor Veselago}} had worked out in 1968 what a material with both would do: refract to the wrong side of the normal, reverse the Doppler shift, and focus with a flat slab. In 2000 {{fig:david-smith|David Smith}}'s group built one for microwaves, and in 2006 a structure that routed microwaves around a central region, leaving it in a shadowless hole.

The claims outran the physics for a while. Pendry's perfect lens was supposed to recover evanescent waves and so beat the diffraction limit outright; absorption in the resonators limits how much of that survives. Later analysis showed that a passive linear cloak cannot hide an object across a wide band of frequencies at all. What is left is substantial — engineered index, flat metasurface optics now shipping in sensors — and narrower than the first announcements.

## A Closer Look: The Field That Rivals an Atom's Own

How intense does light have to be before an atom stops being a small perturbation on it? Compare the laser's field to the field the electron already feels. In hydrogen, the electron sits at the Bohr radius $a_0 = 5.29 \times 10^{-11}$ m, where the proton's field is

$$
E_{\text{at}} = \frac{e}{4\pi\varepsilon_0 a_0^{2}} = 5.14 \times 10^{11} \text{ V/m}.
$$

A light wave of amplitude $E$ carries intensity $I = \tfrac{1}{2}\varepsilon_0 c E^{2}$, so matching the atomic field takes

$$
I = \tfrac{1}{2}\left(8.854\times10^{-12}\right)\left(3.00\times10^{8}\right)\left(5.14\times10^{11}\right)^{2} \approx 3.5\times10^{20} \text{ W/m}^{2} = 3.5\times10^{16} \text{ W/cm}^{2}.
$$

That is the dividing line. Below it, light nudges electrons; above it, light dominates the nucleus's hold on them. Chirped pulse amplification clears the line by six orders of magnitude: focused petawatt pulses reach $10^{22}$ W/cm², where the electron's oscillation velocity approaches $c$ and the physics becomes relativistic.

Just above the line, something more useful than destruction happens. The field pulls an electron out of the atom, accelerates it away, then — half a cycle later, as the field reverses — drives it back into its parent ion, where it recombines and dumps all the kinetic energy it gathered as a single high-energy photon. This happens once per half-cycle, in phase across the gas, producing odd harmonics of the driving laser out to the hundredth order and beyond.

Why bother? Because of what short pulses require. The time-bandwidth relation for a Gaussian pulse is $\Delta t\,\Delta\nu \ge 0.441$, so a pulse lasting 100 attoseconds needs a spectral width of

$$
\Delta\nu \ge \frac{0.441}{100\times10^{-18}} = 4.4\times10^{15} \text{ Hz}.
$$

The entire visible spectrum, from 400 to 700 nm, spans only $3.9\times10^{14}$ Hz — a tenth of what is needed. A pulse must also contain fewer than one cycle's worth of ambiguity, so its carrier frequency has to exceed its bandwidth, which means

$$
\lambda < \frac{c}{4.4\times10^{15}} = 68 \text{ nm}.
$$

Attosecond pulses are therefore impossible in visible light as a matter of arithmetic. They must be made in the extreme ultraviolet, and high harmonic generation is the only practical way to get coherent light there on a tabletop.

What this buys is a shutter fast enough for electrons. The electron in the Bohr orbit travels at $\alpha c = 2.19\times10^{6}$ m/s around a circumference of $2\pi a_0 = 3.33\times10^{-10}$ m, giving a period of

$$
T = \frac{3.33\times10^{-10}}{2.19\times10^{6}} = 1.52\times10^{-16}\text{ s} = 152 \text{ attoseconds}.
$$

A 100-attosecond flash resolves a fraction of that orbit. It is the first time scale on which the motion of a bound electron is slow.

## What the Limits Turn Out to Be

The pattern across this field is that each apparent barrier gives way to a nonlinearity, and then a new barrier appears one level down. Abbe's diffraction limit stands for linear optics, and {{fig:stefan-hell|Stefan Hell}}'s depletion microscopy walks around it by saturating a transition, so that the effective spot shrinks as the square root of intensity — the technique described under [cell biology](/biology/cell-biology/), whose resolution is now limited by how many photons a fluorophore emits before it bleaches rather than by the wavelength. The amplifier damage threshold that capped pulse energy gave way to chirped pulse amplification, and the limit became the gratings. The electron's motion, once unresolvable, became measurable in attoseconds, and the new difficulty is conceptual: asking how long an electron takes to tunnel turns out not to have a well-defined answer, which is an unusual place for an optics experiment to end up.

Light began this thread as something to explain, in [classical optics](/physics/classical-optics/). It ends as the most precisely controlled thing in physics, and the instrument with which most of the rest is now measured.
