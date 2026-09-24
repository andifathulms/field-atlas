---
id: astronomical-spectroscopy
domain: physics
thread: stars
name: Astronomical Spectroscopy
parent_ids:
  - electromagnetism
  - old-quantum-theory
era_emerged: 1814 – 1925
core_question: What can the light of a star, spread into its colours, reveal about what the star is made of?

summary: |-
  Spread starlight through a prism and it forms a rainbow crossed by dark lines. Each chemical element absorbs light at its own set of wavelengths, so the lines are a fingerprint of the elements in a star's atmosphere. Their strengths reveal the star's temperature, their shifts its motion towards or away from us, and their widths its pressure and spin.

  Spectroscopy turned astronomy, which had measured where stars are, into astrophysics, which asks what they are. Within a lifetime of its invention it had found a new element in the Sun, sorted hundreds of thousands of stars into a single temperature sequence, and uncovered the pattern of stellar evolution. Its biggest surprise, explained only with quantum theory in 1925, was that stars are made almost entirely of hydrogen.

key_ideas:
  - term: Spectral lines
    definition: >-
      Dark or bright lines at specific wavelengths, produced when atoms absorb or emit
      light. Each element has its own pattern, fixed by the structure of its atoms.
    turning_point_id: kirchhoff-bunsen
  - term: Spectral classification
    definition: >-
      Stars sorted by the lines in their spectra, in the sequence O, B, A, F, G, K, M.
      The sequence turned out to be one of decreasing surface temperature.
    turning_point_id: harvard-classification
  - term: Hertzsprung–Russell diagram
    definition: >-
      A plot of stars' brightness against their temperature. Most fall on a band, the main
      sequence, and the others reveal stages in stellar lives.
    turning_point_id: hr-diagram
  - term: Ionisation and temperature
    definition: >-
      How strongly a line appears depends on how many atoms are in the right state to
      absorb, which depends on temperature. Saha's equation, from quantum physics,
      quantifies it.
    turning_point_id: payne-hydrogen

turning_points:
  - id: fraunhofer-lines
    date: "1814"
    type: DISCOVERY
    title: Fraunhofer's dark lines
    description: >-
      Joseph von Fraunhofer, a Bavarian glassmaker testing prisms for telescope lenses,
      maps more than 500 dark lines crossing the spectrum of sunlight. He finds the same
      lines in light reflected from the Moon and planets, and different patterns in
      bright stars. He did not know what caused them.
    contested: false
    sources:
      - citation: "Fraunhofer, J. (1817). Bestimmung des Brechungs- und Farbenzerstreuungs-Vermögens verschiedener Glasarten. Denkschriften der Königlichen Akademie der Wissenschaften zu München 5: 193–226."
        url: null

  - id: kirchhoff-bunsen
    date: 1859 – 1860
    type: DISCOVERY
    title: Each element has its own lines
    description: >-
      Gustav Kirchhoff and Robert Bunsen in Heidelberg show that every element, heated in
      a flame, emits light at its own characteristic wavelengths, and absorbs at the same
      wavelengths when cooler light shines through it. Fraunhofer's lines are the
      signatures of sodium, iron and other elements in the Sun. The chemistry of the stars
      could be read from their light.
    contested: false
    sources:
      - citation: "Kirchhoff, G. & Bunsen, R. (1860). Chemische Analyse durch Spectralbeobachtungen. Annalen der Physik und Chemie 110: 161–189."
        url: null

  - id: helium-in-the-sun
    date: "1868"
    type: DISCOVERY
    title: A new element found in the Sun
    description: >-
      Observing a solar eclipse, Pierre Janssen sees a bright yellow line in the Sun's
      prominences that matches no known element. Norman Lockyer attributes it to a new
      element and names it helium, after the Greek for the Sun. Helium was found on Earth
      only in 1895, by William Ramsay.
    contested: false
    sources:
      - citation: "Nath, B. B. (2013). The Story of Helium and the Birth of Astrophysics. Springer."
        url: null

  - id: harvard-classification
    date: 1890 – 1924
    type: DISCOVERY
    title: The Harvard classification
    description: >-
      At Harvard College Observatory, Edward Pickering employs a team of women, the
      "computers", to classify stellar spectra from photographic plates. Williamina
      Fleming, Antonia Maury and above all Annie Jump Cannon build the scheme still used
      today, O, B, A, F, G, K, M. Cannon alone classified around 350,000 stars, and the
      Henry Draper Catalogue became the basis of stellar astronomy.
    contested: false
    sources:
      - citation: "Cannon, A. J. & Pickering, E. C. (1918–1924). The Henry Draper Catalogue. Annals of Harvard College Observatory 91–99."
        url: null
      - citation: "Sobel, D. (2016). The Glass Universe: How the Ladies of the Harvard Observatory Took the Measure of the Stars. Viking."
        url: null

  - id: hr-diagram
    date: 1911 – 1913
    type: DISCOVERY
    title: The Hertzsprung–Russell diagram
    description: >-
      Ejnar Hertzsprung in Denmark and Henry Norris Russell at Princeton independently plot
      stars' true brightness against their spectral type. Most stars lie on one band, the
      main sequence, and a few are bright giants or faint dwarfs. The diagram became the
      central tool for understanding how stars live and die.
    contested: false
    sources:
      - citation: "Russell, H. N. (1914). Relations between the spectra and other characteristics of the stars. Popular Astronomy 22: 275–294."
        url: null

  - id: payne-hydrogen
    date: "1925"
    type: PARADIGM-SHIFT
    title: Stars are made of hydrogen
    description: >-
      Using Meghnad Saha's quantum theory of ionisation, Cecilia Payne shows in her Harvard
      doctoral thesis that the differences between stellar spectra reflect temperature,
      not composition, and that stars are overwhelmingly hydrogen and helium. It was
      thought impossible, because the Sun's spectrum is full of lines of iron and other
      metals. Otto Struve later called it the most brilliant thesis ever written in
      astronomy.
    contested: true
    contested_note: >-
      Henry Norris Russell, reviewing the thesis, told Payne that the hydrogen abundance was
      "clearly impossible", and she described her result as "almost certainly not real".
      In 1929 Russell reached the same conclusion by other methods and is sometimes credited
      with it. Historians now credit Payne with the discovery, and her case is often cited
      as an example of a woman's result credited to a senior man.
    sources:
      - citation: "Payne, C. H. (1925). Stellar Atmospheres. Harvard Observatory Monographs 1. Harvard College Observatory."
        url: null
      - citation: "Saha, M. N. (1920). Ionization in the solar chromosphere. Philosophical Magazine 40: 472–488."
        url: null

open_problems:
  - id: solar-abundance-problem
    name: The solar abundance problem
    status: open
    status_note: Open as of 2026. Revised abundance analyses have narrowed but not closed the gap.
    description: >-
      In the 2000s, improved models of the Sun's atmosphere lowered the measured abundance
      of carbon, nitrogen, oxygen and other heavy elements. But helioseismology, which
      probes the Sun's interior through its vibrations, agrees much better with the older,
      higher values. Either the spectroscopy, the models of the Sun's interior, or the
      physics of how radiation passes through hot matter is wrong.
    why_hard: >-
      Each input, the three-dimensional modelling of the Sun's turbulent surface, atomic
      data for thousands of lines, and the opacity of plasma at millions of degrees, is
      difficult to test independently. Laboratory measurements of iron opacity at solar
      interior conditions have themselves disagreed with theory.
    unlocks: >-
      The Sun is the reference for measuring every other star's composition, so its
      abundances set the scale for stellar ages, galactic chemistry and the properties of
      exoplanet hosts.
    sources:
      - citation: "Asplund, M., Grevesse, N., Sauval, A. J. & Scott, P. (2009). The chemical composition of the Sun. Annual Review of Astronomy and Astrophysics 47: 481–522."
        url: null

applications:
  - area: Chemistry
    title: New elements from their spectra
    description: >-
      Within two years of inventing spectral analysis, Bunsen and Kirchhoff discovered
      caesium and rubidium from unfamiliar lines in mineral water and minerals. Thallium,
      indium, helium and several rare gases followed the same way.
    sources:
      - citation: "Kirchhoff, G. & Bunsen, R. (1861). Chemische Analyse durch Spectralbeobachtungen. Zweite Abhandlung. Annalen der Physik und Chemie 113: 337–381."
        url: null
  - area: Environmental analysis
    title: Measuring trace metals
    description: >-
      Atomic absorption spectroscopy, developed by Alan Walsh in 1955 on Kirchhoff's
      principle, measures traces of lead, mercury and other metals in water, blood and
      food, and is a standard tool of environmental and clinical laboratories.
    sources:
      - citation: "Walsh, A. (1955). The application of atomic absorption spectra to chemical analysis. Spectrochimica Acta 7: 108–117."
        url: null

further_reading:
  - citation: "Sobel, D. (2016). The Glass Universe: How the Ladies of the Harvard Observatory Took the Measure of the Stars. Viking."
    url: null
    note: The story of Cannon, Leavitt, Payne and the Harvard computers.
  - citation: "Hearnshaw, J. B. (1986). The Analysis of Starlight: One Hundred and Fifty Years of Astronomical Spectroscopy. Cambridge University Press."
    url: null
    note: A detailed scholarly history of the field.
  - citation: "Hirshfeld, A. (2014). Starlight Detectives: How Astronomers, Inventors, and Eccentrics Discovered the Modern Universe. Bellevue Literary Press."
    url: null
    note: A popular history of photography and spectroscopy in astronomy.
---

## Lines in the Rainbow

In 1835 the philosopher Auguste Comte gave, as an example of knowledge forever beyond reach, the chemical composition of the stars. The key to it had already been found. In 1814 {{fig:joseph-fraunhofer|Joseph von Fraunhofer}}, a Bavarian optician who had survived the collapse of the workshop where he was apprenticed as a boy, spread sunlight through a fine prism and found it crossed by hundreds of dark lines. He mapped more than 500 and saw different patterns in the light of bright stars.

In 1859 {{fig:gustav-kirchhoff|Gustav Kirchhoff}} and {{fig:robert-bunsen|Robert Bunsen}}, using Bunsen's clean, nearly colourless gas burner, explained them. Every element heated in a flame glows at its own set of wavelengths, and cooler gas of the same element absorbs those wavelengths from light passing through it. The dark lines in sunlight were the Sun's elements absorbing light from the hotter layers below: sodium, iron, calcium and many more. Chemistry could be done at a distance of 150 million kilometres. [Electromagnetism](/physics/electromagnetism/) soon explained that light is an electromagnetic wave, and the lines were its wavelengths.

## A Sequence of Stars

Spectroscopy found things chemistry had not. In 1868 {{fig:pierre-janssen|Pierre Janssen}} and {{fig:norman-lockyer|Norman Lockyer}} saw a yellow line in the Sun that belonged to no known element, and Lockyer named it helium. William Huggins found in 1864 that some nebulae are glowing gas, not unresolved stars.

Photography made spectra of faint stars possible, and at Harvard {{fig:edward-pickering|Edward Pickering}} hired women to analyse them at a fraction of a man's wage. {{fig:williamina-fleming|Williamina Fleming}}, first employed as his housekeeper, devised an early scheme. {{fig:annie-jump-cannon|Annie Jump Cannon}} refined it into the sequence O, B, A, F, G, K, M and classified hundreds of thousands of stars by eye. In 1911–13 {{fig:ejnar-hertzsprung|Ejnar Hertzsprung}} and {{fig:henry-norris-russell|Henry Norris Russell}} plotted brightness against spectral type and found that most stars lie on a single band, the main sequence. Stars were not a random assortment. They followed patterns that a theory of their lives would have to explain.

## Made of Hydrogen

What did the sequence mean? The Sun's spectrum is dominated by lines of iron, calcium and other metals, and it was assumed that stars resemble the Earth in composition. In 1920 {{fig:meghnad-saha|Meghnad Saha}} used the new [quantum theory](/physics/old-quantum-theory/) of the atom to show how temperature controls which atoms can absorb which lines. In 1925 {{fig:cecilia-payne|Cecilia Payne}}, a young British astronomer at Harvard, applied Saha's theory to Cannon's spectra. The spectral sequence was a temperature sequence, and once temperature was accounted for, stars had almost the same composition. And that composition was mostly hydrogen and helium, with hydrogen about a million times more abundant than the metals whose lines are so prominent.

Russell told her it was impossible, and she called it "almost certainly not real" in print. Four years later Russell confirmed it himself.

## A Closer Look: Reading Temperature From Colour

A hot, dense body glows with a spectrum whose peak wavelength shifts as its temperature changes, following Wien's law:

$$
\lambda_{\text{peak}} = \frac{2.898 \times 10^{-3}\ \text{m·K}}{T} .
$$

| Star | Surface temperature | Peak wavelength | Colour |
|---|---|---|---|
| Betelgeuse (M) | about 3,600 K | about 805 nm (infrared) | red |
| The Sun (G) | 5,772 K | about 502 nm | yellow-white |
| Sirius (A) | about 9,900 K | about 290 nm (ultraviolet) | blue-white |
| Rigel (B) | about 12,100 K | about 240 nm (ultraviolet) | blue |

The Sun's output peaks in the green-blue, in the middle of the range our eyes evolved to see. The mixture of all its colours looks white from space.

The lines tell a subtler story. Hydrogen's visible lines, the Balmer series, are absorbed only by hydrogen atoms whose electron is already in the second energy level. In a cool star like Betelgeuse, almost all hydrogen atoms sit in the lowest level, so the lines are weak. In very hot stars, most hydrogen is ionised and cannot absorb at all. The lines are strongest in between, around 10,000 K, in A stars like Sirius. In the Sun, only a few hydrogen atoms in every billion are in the right state. That is why hydrogen's lines looked unimpressive, and why astronomers concluded that the Sun contains little hydrogen. Saha's equation lets the tiny fraction be corrected for, and when Payne did so, hydrogen turned out to be by far the most common element. It is now known to make up about three-quarters of the Sun's mass.

## Astrophysics

Spectroscopy also measures motion. A star moving away has its lines shifted to longer wavelengths, and one moving towards us to shorter. That shift showed that stars orbit each other, measured the rotation of galaxies, and in the 1920s revealed that the galaxies are receding, the evidence for the expanding universe of [physical cosmology](/physics/physical-cosmology/). It now reveals planets around other stars by the tiny wobble they cause. The question Payne's result raised, how stars made of hydrogen shine, belonged to [stellar astrophysics](/physics/stellar-astrophysics/).
