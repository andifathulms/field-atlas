---
id: spectroscopic-structure-determination
domain: chemistry
thread: analysis
name: Spectroscopic Structure Determination
parent_ids:
  - chemical-analysis
  - chemical-bonding
era_emerged: 1905 – 1991
core_question: Can the structure of a molecule be read from how it absorbs radiation, without taking it apart or crystallising it?

summary: |-
  Determining a structure in 1940 meant destroying the substance. The compound was degraded to fragments that could be recognised, each fragment's structure inferred, and the whole reassembled by argument — a campaign that took a career for something like strychnine. Thirty years later a chemist could run three spectra in an afternoon and have the answer, on a few milligrams, with the sample recoverable.

  The decisive instrument was nuclear magnetic resonance, and what made it decisive was an accident of physics. A nucleus in a magnetic field absorbs radio waves at a frequency set by the field it actually experiences, which differs slightly from the applied field because the surrounding electrons shield it. That shift is a few parts per million and it is exquisitely sensitive to chemical environment, so each distinct kind of hydrogen in a molecule gives its own signal. The area under each signal counts how many hydrogens of that kind there are, and the way each signal is split into a multiplet counts their neighbours. Integration and splitting together mean that a proton spectrum is close to a map of the molecule's connectivity, which is an extraordinary thing to get from a radio receiver.

key_ideas:
  - term: Group frequency
    definition: >-
      A bond vibrates at a frequency set mainly by the two atoms and the bond order, nearly independent of
      the rest of the molecule — so a carbonyl absorbs near 1700 cm⁻¹ wherever it sits. An infrared
      spectrum therefore lists which functional groups are present.
    turning_point_id: infrared-group-frequencies
  - term: Chemical shift
    definition: >-
      The small displacement of a nucleus's resonance frequency caused by the electrons around it,
      expressed in parts per million so that it is the same number on any instrument. It reports on the
      immediate chemical environment.
    turning_point_id: nmr-chemical-shift
  - term: Spin–spin coupling
    definition: >-
      A signal is split into a multiplet by the magnetic states of nuclei a few bonds away: $n$ equivalent
      neighbours give $n+1$ lines, with intensities following Pascal's triangle. The splitting counts
      neighbours, which is connectivity information.
    turning_point_id: spin-spin-coupling
  - term: Integration
    definition: >-
      The area under a signal is proportional to the number of nuclei producing it, so a proton spectrum
      yields the ratio of hydrogens in each environment directly — three to two to one for ethanol.
    turning_point_id: nmr-chemical-shift
  - term: Fourier transform acquisition
    definition: >-
      Excite all frequencies at once with a pulse and record the decaying signal, then transform it to a
      spectrum, instead of sweeping slowly through frequencies. It improves the signal-to-noise ratio by
      the square root of the number of scans in a given time, by a large factor.
    turning_point_id: ernst-ft-nmr
  - term: Two-dimensional spectrum
    definition: >-
      Correlate two frequency axes so that a cross-peak appears wherever two nuclei are coupled, or close
      in space. It converts a crowded one-dimensional spectrum into a map in which connectivity can be
      traced from atom to atom.
    turning_point_id: two-dimensional-nmr

turning_points:
  - id: infrared-group-frequencies
    date: 1905 – 1950
    type: MECHANISM-ESTABLISHED
    title: Each functional group has its own frequency
    description: >-
      William Coblentz records infrared absorption spectra of several hundred compounds between 1903 and
      1905, by hand, with a thermopile, and notices that particular structural features produce absorption
      at characteristic frequencies regardless of the rest of the molecule. The observation sat largely
      unused until wartime demand for rubber analysis produced commercial instruments, after which the
      correlation table — carbonyl near 1700, hydroxyl broad near 3300, nitrile sharp near 2250 — became
      the first thing a chemist consults about an unknown.
    contested: false
    sources:
      - citation: "Coblentz, W. W. (1905). Investigations of Infra-Red Spectra. Carnegie Institution of Washington."
        url: null
      - citation: "Rabkin, Y. M. (1987). Technological innovation in science: the adoption of infrared spectroscopy by chemists. Isis 78: 31–54."
        url: null

  - id: nmr-chemical-shift
    date: 1946 – 1951
    type: MECHANISM-ESTABLISHED
    title: The shift that makes NMR chemistry
    description: >-
      Edward Purcell and Felix Bloch independently detect nuclear magnetic resonance in condensed matter in
      1946, as a physics result about nuclei. Four years later several groups find something the physicists
      had regarded as a nuisance: the resonance frequency depends slightly on the chemical environment,
      because the surrounding electrons shield the nucleus from the applied field. Ethanol's three kinds of
      hydrogen give three separate signals. A nuclear measurement became a chemical one.
    contested: false
    sources:
      - citation: "Purcell, E. M., Torrey, H. C. & Pound, R. V. (1946). Resonance absorption by nuclear magnetic moments in a solid. Physical Review 69: 37–38."
        url: null
      - citation: "Proctor, W. G. & Yu, F. C. (1950). The dependence of a nuclear magnetic resonance frequency upon chemical compound. Physical Review 77: 717."
        url: null
      - citation: "Arnold, J. T., Dharmatti, S. S. & Packard, M. E. (1951). Chemical effects on nuclear induction signals from organic compounds. Journal of Chemical Physics 19: 507."
        url: null

  - id: spin-spin-coupling
    date: 1951 – 1957
    type: MECHANISM-ESTABLISHED
    title: Splitting counts the neighbours
    description: >-
      Signals turn out to be split into regular multiplets, and the splitting is independent of the applied
      field, so it cannot be a shielding effect. Herbert Gutowsky and others establish that it arises from
      magnetic interaction between nuclei transmitted through the bonding electrons, which means it reports
      on connectivity: a hydrogen with $n$ equivalent neighbours three bonds away gives $n+1$ lines. The
      magnitude of the coupling also depends on the dihedral angle, so the splitting carries stereochemical
      information as well.
    contested: false
    sources:
      - citation: "Gutowsky, H. S., McCall, D. W. & Slichter, C. P. (1951). Coupling among nuclear magnetic dipoles in molecules. Physical Review 84: 589–590."
        url: null
      - citation: "Karplus, M. (1959). Contact electron-spin coupling of nuclear magnetic moments. Journal of Chemical Physics 30: 11–15."
        url: null

  - id: ernst-ft-nmr
    date: 1966 – 1975
    type: TECHNIQUE-INVENTED
    title: Pulse instead of sweep
    description: >-
      A continuous-wave spectrometer sweeps slowly through frequencies, listening to one at a time, so most
      of the experiment is spent not measuring most of the spectrum. Richard Ernst and Weston Anderson
      apply a short radio pulse that excites every frequency at once, record the decaying signal, and
      Fourier transform it. The same information arrives in a second rather than minutes, so scans can be
      accumulated — and since noise averages down as the square root of the number of scans, sensitivity
      improves by one to two orders of magnitude. Carbon-13 spectra became possible.
    contested: false
    sources:
      - citation: "Ernst, R. R. & Anderson, W. A. (1966). Application of Fourier transform spectroscopy to magnetic resonance. Review of Scientific Instruments 37: 93–102."
        url: null
      - citation: "Ernst, R. R. (1992). Nuclear magnetic resonance Fourier transform spectroscopy. Angewandte Chemie International Edition 31: 805–823."
        url: null

  - id: two-dimensional-nmr
    date: 1971 – 1979
    type: TECHNIQUE-INVENTED
    title: A spectrum with two frequency axes
    description: >-
      Jean Jeener proposes at a summer school in 1971 that a second time variable be introduced into the
      pulse sequence, and Richard Ernst's group develops it: the result is a spectrum with two frequency
      axes, in which a cross-peak appears wherever two nuclei are coupled. Tracing cross-peaks walks along
      the molecule's bonds. Related experiments correlate nuclei that are close in space rather than
      bonded, which is what makes structures of proteins in solution possible at all.
    contested: false
    sources:
      - citation: "Aue, W. P., Bartholdi, E. & Ernst, R. R. (1976). Two-dimensional spectroscopy: application to nuclear magnetic resonance. Journal of Chemical Physics 64: 2229–2246."
        url: null
      - citation: "Ernst, R. R., Bodenhausen, G. & Wokaun, A. (1987). Principles of Nuclear Magnetic Resonance in One and Two Dimensions. Clarendon Press."
        url: null

  - id: structure-in-an-afternoon
    date: 1960 – 1991
    type: TECHNIQUE-INVENTED
    title: Three spectra and an answer
    description: >-
      By the 1980s the standard practice for an unknown organic compound was fixed: accurate mass for the
      formula, infrared for the functional groups, and one- and two-dimensional NMR for the skeleton, with
      a crystal structure only if the result was still ambiguous. A determination that had taken Woodward's
      group years took an afternoon, on a few milligrams, non-destructively. The change is why natural
      product chemistry shifted from structure elucidation to synthesis and biology, and why thousands of
      new structures a year became publishable.
    contested: false
    sources:
      - citation: "Silverstein, R. M., Webster, F. X. & Kiemle, D. J. (2005). Spectrometric Identification of Organic Compounds, 7th edition. Wiley."
        url: null
      - citation: "Reynolds, W. F. & Enríquez, R. G. (2002). Choosing the best pulse sequences for structure elucidation. Journal of Natural Products 65: 221–244."
        url: null

open_problems:
  - id: automatic-structure-elucidation
    name: Getting a structure out of spectra without a chemist
    status: open
    status_note: Open as of 2026; natural product structures are still revised after synthesis contradicts the spectroscopic assignment.
    description: >-
      Programs that propose structures consistent with a set of spectra have existed since the 1960s and
      remain unreliable for molecules with unfamiliar skeletons, dense heteroatom substitution or few
      hydrogens. The evidence that the problem is unsolved is a steady stream of revisions: several hundred
      natural product structures assigned from spectra have been corrected, usually when a synthesis of the
      proposed structure gave something with different spectra.
    why_hard: >-
      Predicting a chemical shift to the accuracy needed to distinguish candidate structures requires
      computing a magnetic response to within a fraction of a part per million, which is at the edge of what
      quantum chemistry delivers. Coupling constants depend on conformation, so a flexible molecule gives an
      average over shapes. And the search over candidate structures consistent with a formula is enormous.
    unlocks: >-
      Correct structures for the compounds that drug discovery starts from. A misassigned structure wastes
      the synthetic campaign built on it, and the error is usually found only by that campaign failing.
    sources:
      - citation: "Nicolaou, K. C. & Snyder, S. A. (2005). Chasing molecules that were never there: misassigned natural products. Angewandte Chemie International Edition 44: 1012–1044."
        url: null
      - citation: "Grimblat, N. & Sarotti, A. M. (2016). Computational chemistry to the rescue: modern toolboxes for the assignment of complex molecules by GIAO NMR calculations. Chemistry – A European Journal 22: 12246–12261."
        url: null

applications:
  - area: Medicine
    title: The same physics, imaged
    description: >-
      Magnetic resonance imaging is this spectroscopy with a field gradient applied, so that resonance
      frequency encodes position rather than chemical environment. The contrast comes from how quickly
      the signal decays in different tissues, which is chemistry at a coarse scale, and spectroscopic
      imaging can report metabolite concentrations from a chosen volume inside a living brain.
    domain: biology
    field_id: neuroanatomy
    sources:
      - citation: "Lauterbur, P. C. (1973). Image formation by induced local interactions. Nature 242: 190–191."
        url: null
      - citation: "Mansfield, P. (1977). Multi-planar image formation using NMR spin echoes. Journal of Physics C 10: L55–L58."
        url: null
  - area: Quality control
    title: Verifying what is in the bottle
    description: >-
      Infrared spectroscopy identifies an incoming raw material in seconds by comparing its spectrum with a
      reference, which is why every pharmaceutical warehouse has a handheld instrument, and NMR is used to
      confirm the identity and purity of an active ingredient. The same comparison detects adulteration —
      of olive oil, of honey, of heparin, where a contaminated batch killed patients in 2008 and was caught
      spectroscopically.
    sources:
      - citation: "Guerrini, M. et al. (2008). Oversulfated chondroitin sulfate is a contaminant in heparin associated with adverse clinical events. Nature Biotechnology 26: 669–675."
        url: null
  - area: Art and archaeology
    title: Analysis without taking a sample
    description: >-
      Infrared and Raman spectroscopy identify pigments, binders and varnishes on a painting without
      touching it, which is the only acceptable condition for examining an object of value. The same methods
      distinguish an original pigment from a restoration, and date a work by the presence of a compound not
      manufactured before a known year.
    sources:
      - citation: "Vandenabeele, P., Edwards, H. G. M. & Moens, L. (2007). A decade of Raman spectroscopy in art and archaeology. Chemical Reviews 107: 675–686."
        url: null

further_reading:
  - citation: "Silverstein, R. M., Webster, F. X. & Kiemle, D. J. (2005). Spectrometric Identification of Organic Compounds, 7th edition. Wiley."
    url: null
    note: The standard text for how a structure is actually assigned from spectra, with worked problems.
  - citation: "Ernst, R. R. (1992). Nuclear magnetic resonance Fourier transform spectroscopy. Angewandte Chemie International Edition 31: 805–823."
    url: null
    note: The Nobel lecture; the clearest account of why pulsing beats sweeping.
  - citation: "Becker, E. D. (1993). A brief history of nuclear magnetic resonance. Analytical Chemistry 65: 295A–302A."
    url: null
    note: How a physics experiment became the chemist's standard instrument in fifteen years.
---

## Reading Instead of Dismantling

Determining the structure of a natural product in 1940 was a campaign. The substance was broken into fragments by controlled degradation, each fragment identified by comparison with a known compound, and the original structure reassembled by argument about which arrangements were consistent with all the fragments. The work consumed grams of material and years of effort, and the answer was sometimes wrong.

Three instruments replaced it, and the first was the least discriminating. Infrared absorption had been surveyed by {{fig:coblentz|William Coblentz}} between 1903 and 1905, by hand, using a thermopile and a rock-salt prism, across several hundred compounds. His observation was that particular structural features absorb at particular frequencies almost regardless of what else the molecule contains — a carbonyl near 1700 cm⁻¹, a hydroxyl as a broad band near 3300, a nitrile sharp near 2250. A spectrum therefore lists the functional groups present. That is a strong constraint and nothing like a structure, and the correlation tables sat largely unused until wartime rubber analysis produced commercial instruments.

What produced structures was nuclear magnetic resonance, and it arrived as a physics result with no chemical content at all.

## A Closer Look: What a Proton Spectrum Tells You, and What It Costs

{{fig:purcell|Edward Purcell}} and {{fig:felix-bloch|Felix Bloch}} detected nuclear magnetic resonance in 1946: a nucleus with spin, placed in a magnetic field, absorbs radio waves at a frequency proportional to the field. For hydrogen in a modern 9.4 tesla magnet that frequency is 400 MHz.

The chemistry is in a detail the physicists found inconvenient. The nucleus does not feel the applied field exactly, because the electrons around it circulate and shield it slightly. The shift is tiny — parts per million — and it depends on the electron density, which is to say on the chemical environment. Divide the shift by the operating frequency and the result is a number independent of the instrument, which is why shifts are quoted in ppm and are the same on any spectrometer.

Take ethanol, $\mathrm{CH_3CH_2OH}$, the molecule on which the effect was first seen in 1951. Its spectrum has:

| Signal | Shift (ppm) | Area | Multiplicity |
|---|---|---|---|
| $\mathrm{CH_3}$ | 1.2 | 3 | triplet |
| $\mathrm{CH_2}$ | 3.7 | 2 | quartet |
| $\mathrm{OH}$ | 2–5 | 1 | singlet |

Three pieces of information, each independent.

**The shifts** place each group: a methyl attached to carbon sits near 1, a methylene attached to oxygen is pulled downfield to about 3.7 because oxygen withdraws electron density and so removes shielding.

**The areas** count. Three to two to one, which is the ratio of hydrogens in the three environments — so integration gives the formula's distribution directly.

**The multiplicities** count neighbours. The methyl is split into three lines by the two hydrogens of the methylene, and the methylene into four by the three of the methyl: $n$ equivalent neighbours give $n+1$ lines, with intensities 1:2:1 and 1:3:3:1 from Pascal's triangle. The splitting is transmitted through the bonding electrons, and it reaches about three bonds — so it says *which groups are adjacent to which*. That is connectivity, obtained without breaking anything.

Now the cost, which explains why the technique took thirty years to become routine. NMR is insensitive, for a reason that is fundamental rather than instrumental. The signal comes from the small excess of nuclei in the lower of two spin states, and at 400 MHz and 298 K the energy gap is

$$
\Delta E = h\nu = (6.626\times10^{-34})(4.0\times10^{8}) = 2.65\times10^{-25}\ \mathrm{J},
$$

against a thermal energy of

$$
k_BT = (1.381\times10^{-23})(298) = 4.12\times10^{-21}\ \mathrm{J}.
$$

The ratio is $6.4\times10^{-5}$, so the population difference between the two states is about half of that:

$$
\frac{N_{\text{lower}} - N_{\text{upper}}}{N_{\text{total}}} \approx 3.2\times10^{-5},
$$

**one nucleus in 31,000**. Everything else cancels out. Compare an infrared or ultraviolet transition, where essentially every molecule is in the ground state and contributes.

Two developments closed that gap, and both multiply. {{fig:richard-ernst|Richard Ernst}} and Weston Anderson replaced the slow frequency sweep with a single pulse that excites everything at once, recording the decaying signal and transforming it — so a spectrum takes a second instead of minutes, and hundreds or thousands of scans can be accumulated. Since random noise averages down as $\sqrt{n}$, 1,000 scans improve the signal-to-noise ratio by a factor of 32, and 10,000 by 100. Carbon-13, present at 1.1% and with a smaller magnetic moment, became measurable only because of this. Superconducting magnets then raised the field, and since both the population difference and the induced signal grow with it, sensitivity rises faster than linearly.

The last step was {{fig:jeener|Jean Jeener}}'s, proposed at a summer school in 1971 and developed by Ernst's group: introduce a second time variable into the pulse sequence and transform in both, giving a spectrum with two frequency axes. A cross-peak appears wherever two nuclei are coupled, so tracing cross-peaks walks along the molecule's bonds; a related experiment correlates nuclei that are merely *close in space*, which is what allows a folded protein's structure to be worked out in solution, as [structural biology](/biology/structural-biology/) describes.

## An Afternoon Instead of a Career

By the 1980s the procedure for an unknown organic compound had settled into something a graduate student could complete in a day. Accurate mass gives the formula. Infrared gives the functional groups. A proton spectrum gives the hydrogen distribution and the local connectivity; a carbon spectrum counts the distinct carbons; two-dimensional experiments link them into a skeleton. Crystallography is reserved for the cases that remain ambiguous, because it needs a crystal and the others need only a few milligrams in a tube, recoverable afterwards.

The consequence for chemistry was structural rather than technical. Structure elucidation had been a large share of what organic chemists did, and it stopped being a career-sized problem — which is part of why [total synthesis](/chemistry/total-synthesis/) shifted from proving structures to making useful quantities, and why the number of characterised natural products rose from hundreds to hundreds of thousands.

The method is not infallible, and its failures are documented in an unusual way. Several hundred natural product structures assigned from spectra have been revised, and the revision usually came about because somebody synthesised the proposed structure and found its spectra did not match the natural material. Synthesis remains the court of final appeal, which is the one respect in which the nineteenth-century method has not been superseded.
