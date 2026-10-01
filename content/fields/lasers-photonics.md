---
id: lasers-photonics
domain: physics
thread: light
name: Lasers and Photonics
parent_ids:
  - quantum-optics
  - solid-state-physics
era_emerged: 1917 – 2005
core_question: How can light be made coherent, intense and directional enough to be an instrument, and then carried, confined and counted?

summary: |-
  Einstein noticed in 1917 that an excited atom can be *provoked* into emitting by a passing photon, and that the emitted photon matches the one that triggered it in direction, phase and frequency. For forty years this was a term in a rate equation. Then Charles Townes realised that if more atoms are excited than not, the provoked emission outruns absorption and a beam amplifies itself, and in 1960 Theodore Maiman made it happen with a ruby rod and a photographic flashlamp.

  What followed is unusual in physics: a tool that outran every use anyone proposed for it. It was called "a solution looking for a problem" in 1960. By 1970 it had become a surgical knife, a ruler accurate to the width of an atom, a way to pick up a single bacterium without touching it, and — once Charles Kao worked out that glass loses light to impurities rather than to glass — the carrier of essentially all long-distance communication on Earth. The frequency comb of 1999 then tied optical frequencies to countable microwave ones, which made the optical clock possible.

key_ideas:
  - term: Stimulated emission
    definition: >-
      A photon passing an excited atom can trigger it to emit a second photon with the same
      frequency, phase, polarisation and direction. The copy is exact, which is why laser light is
      coherent and why the process amplifies rather than merely adds.
    turning_point_id: stimulated-emission
  - term: Population inversion and threshold
    definition: >-
      Amplification requires more atoms in the upper state than the lower, which no equilibrium
      system has. Pumping maintains the inversion, and lasing begins when round-trip gain exceeds
      round-trip loss — a threshold, below which the device is a lamp.
    turning_point_id: maser
  - term: Cavity and mode
    definition: >-
      Two mirrors select the frequencies that fit a whole number of half-wavelengths between them
      and the directions that stay on axis. The cavity is what turns a glowing medium into a narrow
      beam with a narrow spectrum.
    turning_point_id: ruby-laser
  - term: Heterostructure confinement
    definition: >-
      Sandwiching a thin active layer between wider-bandgap material confines both the carriers and
      the light to the same small region. It is what let semiconductor lasers run continuously at
      room temperature instead of in liquid-nitrogen pulses.
    turning_point_id: semiconductor-laser
  - term: Attenuation in decibels
    definition: >-
      Loss is measured logarithmically: 3 dB is a halving, 10 dB a factor of ten, 20 dB a factor of
      a hundred. Expressed per kilometre, it determines how far a signal travels before it must be
      amplified, and the whole case for optical fibre is a change in this one number.
    turning_point_id: optical-fibre
  - term: Optical trapping
    definition: >-
      A tightly focused beam pulls a transparent object towards the region of highest intensity,
      because refraction through the object redirects photon momentum. Forces of piconewtons can be
      applied to a bead, a cell or a single molecule of DNA.
    turning_point_id: optical-tweezers

turning_points:
  - id: stimulated-emission
    date: 1916 – 1917
    type: THEORY-REPLACED
    title: Einstein's stimulated emission
    description: >-
      Deriving Planck's radiation law from first principles, Albert Einstein finds he cannot do it
      with absorption and spontaneous emission alone. A third process is needed: an atom in an
      excited state, struck by radiation of the right frequency, is induced to emit. He writes down
      the coefficients relating the three rates, and notes that the induced emission matches the
      incident radiation. The ingredient for an amplifier of light was in the literature for
      thirty-seven years before anyone tried to build one.
    contested: false
    sources:
      - citation: "Einstein, A. (1917). Zur Quantentheorie der Strahlung. Physikalische Zeitschrift 18: 121–128."
        url: null
      - citation: "Bertolotti, M. (2005). The History of the Laser. Institute of Physics Publishing."
        url: null

  - id: maser
    date: 1954 – 1958
    type: EXPERIMENT
    title: The maser, and the plan for a laser
    description: >-
      James Gordon, Herbert Zeiger and Charles Townes build an amplifier for microwaves out of a
      beam of ammonia molecules sorted so that the excited ones enter a cavity: a maser. Nikolai
      Basov and Alexander Prokhorov arrive at the same principle independently in Moscow. In 1958
      Townes and Arthur Schawlow publish the design for doing it at optical wavelengths, where a
      cavity must be a pair of mirrors many thousands of wavelengths apart, and the race to build
      one begins.
    contested: true
    contested_note: >-
      Priority for the laser concept was litigated for nearly thirty years. Gordon Gould, a graduate
      student who coined the word "laser" in a notarised 1957 notebook, fought the patents through
      the courts and eventually won claims covering optical pumping and laser applications, decades
      after the devices were in use. Who is credited depends on whether one counts the published
      proposal, the notebook, or the working device.
    sources:
      - citation: "Gordon, J. P., Zeiger, H. J. & Townes, C. H. (1955). The maser — new type of microwave amplifier, frequency standard, and spectrometer. Physical Review 99: 1264–1274."
        url: null
      - citation: "Schawlow, A. L. & Townes, C. H. (1958). Infrared and optical masers. Physical Review 112: 1940–1949."
        url: null
      - citation: "Taylor, N. (2000). LASER: The Inventor, the Nobel Laureate, and the Thirty-Year Patent War. Simon & Schuster."
        url: null

  - id: ruby-laser
    date: 1960
    type: EXPERIMENT
    title: Maiman's ruby laser
    description: >-
      Theodore Maiman, at Hughes Research Laboratories, wraps a photographic flashlamp around a
      small ruby cylinder with silvered ends. Chromium ions in the ruby are pumped to an excited
      state; above a threshold flash energy the rod emits a bright, narrow pulse of deep red light
      at 694.3 nm. *Physical Review Letters* rejects the paper as another maser result, so it appears
      in *Nature* in August 1960. Ali Javan's helium–neon laser, the first to run continuously,
      follows in December.
    contested: false
    sources:
      - citation: "Maiman, T. H. (1960). Stimulated optical radiation in ruby. Nature 187: 493–494."
        url: null
      - citation: "Javan, A., Bennett, W. R. & Herriott, D. R. (1961). Population inversion and continuous optical maser oscillation in a gas discharge containing a He–Ne mixture. Physical Review Letters 6: 106–110."
        url: null

  - id: semiconductor-laser
    date: 1962 – 1970
    type: EXPERIMENT
    title: A laser the size of a grain of salt
    description: >-
      Four groups in the United States make gallium arsenide diodes lase in 1962, in pulses, cooled
      with liquid nitrogen. The fix comes from the double heterostructure proposed by Herbert
      Kroemer and Zhores Alferov: a thin active layer between wider-bandgap cladding confines
      carriers and light together, cutting the threshold current by orders of magnitude. In 1970
      Alferov's group in Leningrad and Izuo Hayashi and Morton Panish at Bell Labs achieve
      continuous room-temperature operation. Every fibre transmitter, disc reader and laser pointer
      descends from it.
    contested: false
    sources:
      - citation: "Hall, R. N., Fenner, G. E., Kingsley, J. D., Soltys, T. J. & Carlson, R. O. (1962). Coherent light emission from GaAs junctions. Physical Review Letters 9: 366–368."
        url: null
      - citation: "Alferov, Z. I. (2001). Nobel Lecture: The double heterostructure concept and its applications in physics, electronics, and technology. Reviews of Modern Physics 73: 767–782."
        url: null

  - id: optical-fibre
    date: 1966 – 1987
    type: DISCOVERY
    title: Glass clear enough to signal through
    description: >-
      Glass fibres guided light well but lost it catastrophically — around 1,000 decibels per
      kilometre, which halves a signal every three metres. Charles Kao and George Hockham argue in
      1966 that the loss is caused by dissolved impurities, chiefly iron and water, and not by the
      glass itself, and that below 20 dB/km fibre would beat copper. In 1970 Robert Maurer, Donald
      Keck and Peter Schultz at Corning reach 17 dB/km with fused silica. The erbium-doped fibre
      amplifier, in 1987, removed the need to convert back to electronics at every repeater.
    contested: false
    sources:
      - citation: "Kao, K. C. & Hockham, G. A. (1966). Dielectric-fibre surface waveguides for optical frequencies. Proceedings of the IEE 113(7): 1151–1158."
        url: null
      - citation: "Keck, D. B., Maurer, R. D. & Schultz, P. C. (1973). On the ultimate lower limit of attenuation in glass optical waveguides. Applied Physics Letters 22: 307–309."
        url: null
      - citation: "Desurvire, E., Simpson, J. R. & Becker, P. C. (1987). High-gain erbium-doped travelling-wave fibre amplifier. Optics Letters 12: 888–890."
        url: null

  - id: optical-tweezers
    date: 1970 – 1986
    type: EXPERIMENT
    title: Holding matter with light
    description: >-
      Arthur Ashkin, at Bell Labs, shows in 1970 that a focused laser beam accelerates and guides
      micron-sized latex spheres, and in 1986, with Steven Chu and colleagues, that a single tightly
      focused beam traps a particle in three dimensions: refraction through the bead redirects
      photon momentum and pulls it towards the brightest point. Within a year he was trapping live
      bacteria and viruses without damaging them. The trap measures forces of piconewtons, which is
      the scale at which molecular machines work.
    contested: false
    sources:
      - citation: "Ashkin, A. (1970). Acceleration and trapping of particles by radiation pressure. Physical Review Letters 24: 156–159."
        url: null
      - citation: "Ashkin, A., Dziedzic, J. M., Bjorkholm, J. E. & Chu, S. (1986). Observation of a single-beam gradient force optical trap for dielectric particles. Optics Letters 11: 288–290."
        url: null

  - id: frequency-comb
    date: 1999 – 2005
    type: EXPERIMENT
    title: The optical frequency comb
    description: >-
      Optical frequencies are around $10^{14}$ Hz and electronics counts to about $10^{10}$, so for
      decades measuring an optical frequency meant a chain of lasers and multipliers filling a
      laboratory. John Hall and Theodor Hänsch show that a mode-locked laser's output is a comb of
      evenly spaced lines whose spacing is a countable radio frequency, and that broadening it to a
      full octave fixes the comb's offset too. One tabletop instrument then links any optical
      frequency to the caesium standard.
    contested: false
    sources:
      - citation: "Udem, T., Holzwarth, R. & Hänsch, T. W. (2002). Optical frequency metrology. Nature 416: 233–237."
        url: null
      - citation: "Hall, J. L. (2006). Nobel Lecture: Defining and measuring optical frequencies. Reviews of Modern Physics 78: 1279–1295."
        url: null

open_problems:
  - id: silicon-laser
    name: A practical laser built in silicon
    status: open
    status_note: Open as of 2026; commercial silicon photonics still bonds or grows III–V material for its light source.
    description: >-
      Silicon carries data, switches and detects light superbly, and is the material the entire
      electronics industry can pattern at nanometre scale. It is a very poor emitter, because its
      bandgap is indirect: an electron and hole cannot recombine into a photon without a lattice
      vibration to carry away momentum, so the process is slow and loses out to non-radiative
      paths. Every silicon photonic chip therefore imports its light from another material.
    why_hard: >-
      The obstacle is band structure, not fabrication. Strained germanium, tin alloys, erbium doping,
      nanocrystals and Raman gain have all produced lasing or amplification under restrictive
      conditions, and none has given an electrically pumped, room-temperature, continuous source
      with the efficiency and lifetime that III–V lasers already have.
    unlocks: >-
      Monolithic integration of light sources with transistors, which would change the cost and
      density of optical interconnects inside and between processors — the main bottleneck in large
      computing systems.
    sources:
      - citation: "Liang, D. & Bowers, J. E. (2010). Recent progress in lasers on silicon. Nature Photonics 4: 511–517."
        url: null
      - citation: "Zhou, Z., Yin, B. & Michel, J. (2015). On-chip light sources for silicon photonics. Light: Science & Applications 4: e358."
        url: null

applications:
  - area: Communications
    title: The cables under the oceans
    description: >-
      Essentially all intercontinental data travels as infrared light in silica fibre, in dozens of
      wavelength channels per strand, amplified by erbium-doped fibre every 60 to 100 km. The
      physical layer is a 1962 semiconductor laser, a 1966 insight about impurities, and a 1987
      amplifier; the capacity of a single fibre pair now exceeds tens of terabits per second.
    sources:
      - citation: "Agrawal, G. P. (2012). Fiber-Optic Communication Systems, 4th edition. Wiley."
        url: null
  - area: Single-molecule biology
    title: Pulling on one molecule at a time
    description: >-
      An optical trap applies and measures forces of a few piconewtons with nanometre position
      resolution, which is exactly the range in which motor proteins work. Kinesin stepping 8 nm
      along a microtubule, RNA polymerase pausing as it transcribes, and the force needed to unzip a
      DNA hairpin were all measured by holding a bead in a laser beam.
    domain: biology
    sources:
      - citation: "Svoboda, K., Schmidt, C. F., Schnapp, B. J. & Block, S. M. (1993). Direct observation of kinesin stepping by optical trapping interferometry. Nature 365: 721–727."
        url: null
      - citation: "Bustamante, C., Chemla, Y. R., Forde, N. R. & Izhaky, D. (2004). Mechanical processes in biochemistry. Annual Review of Biochemistry 73: 705–748."
        url: null
  - area: Medicine
    title: Cutting with light
    description: >-
      Because a laser's output can be chosen to be absorbed by one substance and not another, and
      focused to a spot of a few microns, it can destroy tissue selectively. Retinal detachments are
      welded, corneas reshaped by ablating a fraction of a micron per pulse, kidney stones
      fragmented, and port-wine stains cleared by light absorbed in haemoglobin and nowhere else.
    sources:
      - citation: "Anderson, R. R. & Parrish, J. A. (1983). Selective photothermolysis: precise microsurgery by selective absorption of pulsed radiation. Science 220: 524–527."
        url: null

further_reading:
  - citation: "Bertolotti, M. (2005). The History of the Laser. Institute of Physics Publishing."
    url: null
    note: Thorough on who did what, including the Soviet work that is usually skipped.
  - citation: "Hecht, J. (2005). Beam: The Race to Make the Laser. Oxford University Press."
    url: null
    note: A narrative of 1954 to 1960, and of how little anyone knew what the device was for.
  - citation: "Siegman, A. E. (1986). Lasers. University Science Books."
    url: null
    note: The standard technical reference on resonators, gain and modes.
---

## A Term in a Rate Equation

In 1916 {{fig:einstein|Albert Einstein}} tried to derive Planck's blackbody law by balancing the rates at which atoms absorb and emit radiation, and found the books would not balance. Absorption and spontaneous emission alone give the wrong spectrum. A third process is required: an atom already excited, when radiation of the right frequency passes, is *induced* to emit, and the induced photon shares the frequency, phase, polarisation and direction of the one that provoked it.

That last clause is the whole of laser physics. A photon entering a medium of excited atoms can come out as two identical photons, then four. The catch is that the same photon can equally be absorbed by an atom in the lower state, and in any system at equilibrium the lower states are more populated, so absorption always wins. To amplify light you need a population inversion, which is to say a medium held far from equilibrium.

{{fig:townes|Charles Townes}} built one for microwaves in 1954, by sending a beam of ammonia molecules through an electrostatic sorter that discarded the ground-state ones, and letting the survivors into a cavity. {{fig:basov|Nikolai Basov}} and {{fig:prokhorov|Alexander Prokhorov}} did the equivalent in Moscow. In 1958 Townes and {{fig:schawlow|Arthur Schawlow}} published what it would take to do the same at optical wavelengths, where the cavity has to be two mirrors tens of thousands of wavelengths apart, and several laboratories started racing.

{{fig:maiman|Theodore Maiman}} won with the least fashionable approach. The consensus was that ruby would not work, because its chromium ions must be pumped very hard. Maiman noticed that the available photographic flashlamps were absurdly bright, coiled one around a ruby rod with silvered ends, and in May 1960 produced a narrow pulse at 694.3 nm. The paper was rejected by *Physical Review Letters* as yet another maser result and appeared in *Nature* instead.

## From Curiosity to Infrastructure

Nobody knew what it was for. The standard line in 1960 was that the laser was a solution in search of a problem, and the first decade's uses were mostly alignment and ranging.

Two developments turned it into infrastructure. The first was shrinking it. {{fig:alferov|Zhores Alferov}} and {{fig:kroemer|Herbert Kroemer}} independently saw that a thin active layer sandwiched between wider-bandgap material would confine the electrons, the holes and the light in the same small volume, cutting the current needed by orders of magnitude; by 1970 gallium arsenide lasers ran continuously at room temperature. They are now manufactured in the billions.

The second was finding something to send the light through. Glass fibres guided light, but the best optical glass of 1965 lost about 1,000 decibels per kilometre — half the signal every three metres. The received view was that this was intrinsic. {{fig:kao|Charles Kao}} argued in 1966 that it was dissolved iron and water, that purified silica should do far better, and that below 20 dB/km fibre would beat copper cable. Four years later Corning reached 17. Today's fibre loses about 0.2 dB/km.

{{fig:ashkin|Arthur Ashkin}} opened a third direction by noticing that light pushes. A focused beam not only pushes a transparent bead along its axis but pulls it sideways into the brightest region, because refraction through the bead deflects photons and the bead takes the opposite momentum. In 1986 he showed a single focused beam traps in all three dimensions, and a year later he was holding live bacteria. The forces involved are piconewtons — the scale on which [molecular machines](/biology/molecular-machines/) work, which is why biophysics took the technique over.

## A Closer Look: Why 20 Decibels Per Kilometre Was the Whole Argument

Optical loss is logarithmic. A length of fibre that transmits a fraction $T$ of the power has loss

$$
L_{\text{dB}} = 10\log_{10}\frac{1}{T},
$$

so 3 dB is a halving, 10 dB a factor of ten, and 20 dB a factor of a hundred. Per kilometre, this number decides everything about long-distance communication.

The glass of 1965 lost 1,000 dB/km, which is 1 dB/m. Three metres is 3 dB, so half the light is gone in the length of a desk. Over a kilometre the attenuation is $10^{100}$, which is not a number with any physical meaning: the fibre is opaque.

{{fig:kao|Kao}}'s target was 20 dB/km. Suppose a system can tolerate 50 dB between transmitter and receiver before the signal is lost in detector noise. Then the repeater spacing is

$$
\frac{50 \text{ dB}}{20 \text{ dB/km}} = 2.5 \text{ km},
$$

which is roughly what copper coaxial cable managed, and fibre carries far more bandwidth. That is why 20 was the threshold he argued for: not because it is good, but because it is the point at which the comparison tips.

Now put in the modern figure of 0.2 dB/km at 1550 nm:

$$
\frac{50}{0.2} = 250 \text{ km}.
$$

A hundredfold increase in repeater spacing, from one insight about iron contamination. In practice transatlantic systems amplify every 60 to 100 km for other reasons — dispersion, noise accumulation, and the need to keep the optical power in the region where the fibre stays linear.

It is worth seeing what the alternative would be. A transatlantic cable is about 6,600 km. Without amplification the loss is

$$
6{,}600 \times 0.2 = 1{,}320 \text{ dB},
$$

an attenuation factor of $10^{132}$. For comparison, the Sun will emit on the order of $10^{62}$ photons in its entire main-sequence lifetime. There is no transmitter power that compensates for 1,320 dB; the system exists because of the erbium-doped amplifiers spaced along it, each one a short length of fibre doped with erbium ions, pumped by a semiconductor laser, amplifying the signal *as light* without ever converting it to electronics. Every piece of that sentence is from this chapter.

## Counting Optical Frequencies

The last entry in the thread is a measuring instrument. A frequency is counted by comparing cycles, and electronics counts to about $10^{10}$ Hz. Optical frequencies are near $5 \times 10^{14}$ Hz, four orders of magnitude out of reach, so measuring one meant building a chain of lasers and nonlinear multipliers that filled a laboratory and worked for one frequency.

{{fig:john-hall|John Hall}} and {{fig:hansch|Theodor Hänsch}} found the shortcut. A mode-locked laser emitting a train of very short pulses has a spectrum that is a comb of lines spaced by the pulse repetition rate — a radio frequency, around 100 MHz, which electronics counts easily. The comb's lines sit at $f_n = n f_{\text{rep}} + f_0$, and if the comb is broadened until it spans a full octave, the offset $f_0$ can be measured by comparing the low end doubled against the high end. Both parameters then being known, every tooth's absolute frequency is known. Beat an unknown laser against the nearest tooth and the optical frequency is reduced to counting.

This is what makes the optical clocks of [quantum optics](/physics/quantum-optics/) usable as clocks rather than as very narrow lamps, and it is the reason a 1999 tabletop result sits underneath a proposed redefinition of the second. What happens when the pulses are made shorter and more intense still — short enough to resolve an electron's motion, intense enough to tear atoms apart and rebuild the light at harmonics of itself — is [nonlinear and nano-optics](/physics/nonlinear-optics/).
