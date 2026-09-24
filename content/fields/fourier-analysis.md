---
id: fourier-analysis
domain: math
thread: analysis
name: Fourier Analysis
parent_ids:
  - calculus
era_emerged: 1807 – 1829
core_question: Can every signal be built from simple waves, and what does that decomposition reveal?

summary: |-
  Fourier analysis breaks a function, whether a sound, an image or the temperature along a rod, into a sum of simple waves (sines and cosines) of different frequencies. The list of how much of each frequency is present, the *spectrum*, is often far easier to work with than the original.

  Fourier's 1807 claim that *any* function can be so decomposed scandalised the leading mathematicians of his day, and the attempt to find out when it is true forced mathematics to define precisely what a function, an integral and even a set are. It also became one of the most useful ideas in science and engineering: every JPEG, MP3, MRI scan and Wi-Fi signal runs on it.

key_ideas:
  - term: Fourier series
    definition: >-
      A periodic function written as a sum of waves:
      $f(x) = a_0 + \sum_{n \ge 1} (a_n \cos nx + b_n \sin nx)$, with each coefficient
      computed by an integral.
    turning_point_id: fourier-heat
  - term: Fourier transform
    definition: >-
      The same idea for non-repeating signals: a function of time becomes a function of
      frequency. Applying the inverse transform recovers the original.
    turning_point_id: fourier-heat
  - term: Spectrum
    definition: >-
      Which frequencies a signal contains, and how strongly. Chords, colours, radio
      stations and crystal structures are all identified by their spectra.
  - term: Convergence
    definition: >-
      Whether the partial sums of a Fourier series actually approach the function. The
      answer is subtle, and working it out created much of rigorous analysis.
    turning_point_id: dirichlet-convergence
  - term: Fast Fourier transform
    definition: >-
      An algorithm that computes a discrete Fourier transform of $n$ samples in about
      $n \log n$ steps instead of $n^2$. It made digital signal processing practical.
    turning_point_id: fft

turning_points:
  - id: vibrating-string
    date: 1747 – 1759
    type: CRISIS
    title: The vibrating string controversy
    description: >-
      Jean d'Alembert writes the wave equation for a vibrating string. Daniel Bernoulli
      argues that every motion of the string is a sum of simple sine vibrations. Euler
      and d'Alembert reject this: a sum of smooth sines could not, they believed,
      represent an arbitrary shape such as a plucked string's corner. The disagreement,
      unresolved for decades, was really about what a function is.
    contested: false
    sources:
      - citation: "Kline, M. (1972). Mathematical Thought from Ancient to Modern Times. Oxford University Press."
        url: null

  - id: fourier-heat
    date: 1807 – 1822
    type: REFORMULATION
    title: Fourier's theory of heat
    description: >-
      Joseph Fourier, studying how heat flows through solids, claims that any function,
      even one with jumps and corners, can be expanded in a trigonometric series. His
      1807 memoir was criticised by the examiners, his prize-winning 1811 essay was faulted
      for lack of rigour, and his *Théorie analytique de la chaleur* appeared only in
      1822. The method worked, and nobody could explain why.
    contested: true
    contested_note: >-
      Both validity and credit were disputed. Lagrange objected that such expansions
      could not represent arbitrary functions, echoing the vibrating-string debate, and
      the 1811 prize jury (including Lagrange and Laplace) criticised his rigour. Fourier,
      for his part, gave little credit to Euler and Daniel Bernoulli, who had used
      trigonometric series earlier. His broad claim was in fact false as stated, and its
      precise limits took a century to establish.
    sources:
      - citation: "Fourier, J. (1822). Théorie analytique de la chaleur. Firmin Didot, Paris."
        url: null
      - citation: "Grattan-Guinness, I. (1972). Joseph Fourier, 1768–1830. MIT Press."
        url: null

  - id: dirichlet-convergence
    date: "1829"
    type: PROOF
    title: Dirichlet proves when Fourier series converge
    description: >-
      Peter Gustav Lejeune Dirichlet gives the first rigorous proof that the Fourier
      series of a function with finitely many jumps and bumps converges to it. To show
      what could go wrong, he describes a function equal to 1 on rational numbers and 0 on
      irrational ones, which no series or integral of the time could handle. The modern
      idea of a function as an arbitrary rule starts here.
    contested: false
    sources:
      - citation: "Dirichlet, P. G. L. (1829). Sur la convergence des séries trigonométriques qui servent à représenter une fonction arbitraire entre des limites données. Journal für die reine und angewandte Mathematik 4: 157–169."
        url: null

  - id: fft
    date: "1965"
    type: REFORMULATION
    title: The fast Fourier transform
    description: >-
      James Cooley and John Tukey publish an algorithm that computes a discrete Fourier
      transform of $n$ points in about $n \log n$ operations. For a million points that
      is a speed-up of tens of thousands of times, and it made digital audio, imaging and
      communications practical. It is often listed among the most important algorithms
      of the twentieth century.
    contested: true
    contested_note: >-
      Priority is qualified. Gauss had devised essentially the same algorithm around 1805,
      to interpolate asteroid orbits, but it appeared only posthumously, in Latin, and was
      overlooked. Several partial rediscoveries followed in the twentieth century.
      Cooley and Tukey's independent rediscovery came when computers could exploit it.
    sources:
      - citation: "Cooley, J. W. & Tukey, J. W. (1965). An algorithm for the machine calculation of complex Fourier series. Mathematics of Computation 19(90): 297–301."
        url: null
      - citation: "Heideman, M. T., Johnson, D. H. & Burrus, C. S. (1984). Gauss and the history of the fast Fourier transform. IEEE ASSP Magazine 1(4): 14–21."
        url: null

  - id: carleson-theorem
    date: "1966"
    type: PROOF
    title: Carleson's theorem
    description: >-
      Lennart Carleson proves that the Fourier series of every square-integrable function
      converges to it at almost every point. Many experts, following Kolmogorov's 1923
      example of an integrable function whose Fourier series diverges almost everywhere, had
      expected the opposite. The central convergence question raised by Fourier's claim
      had its answer after 150 years.
    contested: false
    sources:
      - citation: "Carleson, L. (1966). On convergence and growth of partial sums of Fourier series. Acta Mathematica 116: 135–157."
        url: null

open_problems:
  - id: kakeya-conjecture
    name: The Kakeya conjecture
    status: open
    status_note: Proved in three dimensions (Hong Wang and Joshua Zahl, 2025 preprint); open in four or more dimensions as of writing.
    description: >-
      A Kakeya set contains a unit line segment pointing in every direction, like the
      region needed to turn a needle all the way round. Such sets can have zero volume.
      The conjecture says they are nevertheless as large as possible in the sense of
      dimension: in $n$-dimensional space, their dimension is $n$.
    why_hard: >-
      It looks like a puzzle about needles, but it controls how waves travelling in
      different directions can pile up. It is linked to the "restriction" and
      "Bochner–Riesz" conjectures at the core of modern harmonic analysis. Progress
      requires combining geometry, combinatorics and analysis, and the three-dimensional
      case alone took decades.
    unlocks: >-
      Full resolution would advance the restriction conjecture and with it the
      understanding of how solutions to wave and Schrödinger equations concentrate.
    sources:
      - citation: "Tao, T. (2001). From rotating needles to stability of waves: emerging connections between combinatorics, analysis, and PDE. Notices of the AMS 48(3): 294–303."
        url: null
      - citation: "Wang, H. & Zahl, J. (2025). Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions. Preprint."
        url: null

applications:
  - area: Structural biology
    title: Crystallography is a Fourier transform
    description: >-
      The pattern of spots an X-ray beam makes after passing through a crystal is the
      Fourier transform of the crystal's electron density. Inverting it, once the lost
      phase information is recovered, reveals the positions of atoms, which is how the
      structures of DNA and proteins were solved.
    domain: biology
    field_id: molecular-biology
    sources:
      - citation: "Glusker, J. P. & Trueblood, K. N. (2010). Crystal Structure Analysis: A Primer (3rd ed.). Oxford University Press."
        url: null
  - area: Media
    title: JPEG, MP3 and video compression
    description: >-
      Image and audio compression transform small blocks of data into frequencies with
      the discrete cosine transform, a Fourier relative, and then discard the
      frequencies people barely perceive. Most of the images and sound on the internet
      are stored this way.
    sources:
      - citation: "Ahmed, N., Natarajan, T. & Rao, K. R. (1974). Discrete cosine transform. IEEE Transactions on Computers C-23(1): 90–93."
        url: null
  - area: Medical imaging
    title: Reconstructing MRI scans
    description: >-
      An MRI scanner measures the Fourier transform of the image it is making, one line
      of frequencies at a time. The picture a radiologist sees is computed by an inverse
      Fourier transform.
    domain: biology
    sources: []
  - area: Communications
    title: Wi-Fi and 4G/5G
    description: >-
      Modern wireless standards split a channel into many narrow frequency sub-carriers
      (OFDM), using the fast Fourier transform in every modem to send and receive them.
    sources: []

further_reading:
  - citation: "Körner, T. W. (1988). Fourier Analysis. Cambridge University Press."
    url: null
    note: A delightful tour through theory, history and applications in short chapters.
  - citation: "Stein, E. M. & Shakarchi, R. (2003). Fourier Analysis: An Introduction. Princeton University Press."
    url: null
    note: A clear rigorous introduction by a master of the modern subject.
  - citation: "Grattan-Guinness, I. (1972). Joseph Fourier, 1768–1830. MIT Press."
    url: null
    note: The historian's account of Fourier's work and its reception.
---

## Waves on a String

In 1747 Jean d'Alembert wrote down the equation for a vibrating string, and a quarrel began. Daniel Bernoulli argued that every possible vibration is a sum of simple sine waves, the fundamental tone and its overtones. {{fig:euler|Euler}} and d'Alembert disagreed: a plucked string starts with a sharp corner, and how could a sum of smooth sines have one? The argument ran for decades. Underneath it was a question [calculus](/math/calculus/) had never asked: what exactly is a function?

## Fourier's Claim

{{fig:fourier|Joseph Fourier}} gave a bold answer while studying something else. A prefect under Napoleon and a veteran of the Egyptian expedition, he was working out how heat spreads through solid bodies. In 1807 he claimed that *any* function on an interval, however jagged, can be written as a sum of sines and cosines, with coefficients given by integrals:

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left(a_n \cos nx + b_n \sin nx\right), \qquad a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos nx\,dx .
$$

The examiners, among them Lagrange and Laplace, were unconvinced, and Lagrange in particular insisted it could not be true. Fourier won a prize in 1812 for the work, with the jury complaining about its rigour, and published his great book only in 1822. His method solved problems nothing else could, and its foundations were shaky.

## When Does It Work?

Making sense of Fourier's claim occupied the rest of the century and forced analysis to grow up. In 1829 {{fig:dirichlet|Dirichlet}} proved convergence for reasonably well-behaved functions. To show the limits, he offered a function equal to 1 at rational points and 0 at irrational ones, which fits no reasonable notion of a curve at all. Riemann defined the integral precisely in order to handle Fourier coefficients. Georg Cantor, asking where a Fourier series could fail and still determine its function, was led to infinite sets and the beginnings of set theory. The rigorous [real analysis](/math/real-analysis/) of the nineteenth century grew largely out of Fourier's problem.

The final answer came late. {{fig:carleson|Lennart Carleson}} proved in 1966 that the Fourier series of every square-integrable function converges almost everywhere, a result so hard that many experts had expected the opposite.

## A Closer Look: Building a Square Wave from Smooth Waves

Fourier's boldest claim was that even a function with jumps is a sum of smooth sine waves. Take the square wave that switches between $+1$ and $-1$ every half-period. Its Fourier series is

$$
f(x) = \frac{4}{\pi}\left(\sin x + \frac{\sin 3x}{3} + \frac{\sin 5x}{5} + \frac{\sin 7x}{7} + \cdots\right).
$$

One term gives a rounded hump. Adding the third harmonic flattens the top, and with each odd harmonic the sum squares off further, closer and closer to the corners. Every term is smooth, yet the infinite sum jumps. This is exactly what Euler and Lagrange had thought impossible.

Two surprises lie in the details. Put $x = \frac{\pi}{2}$, where the square wave equals 1. The series becomes

$$
1 = \frac{4}{\pi}\left(1 - \frac13 + \frac15 - \frac17 + \cdots\right), \quad \text{so} \quad \frac{\pi}{4} = 1 - \frac13 + \frac15 - \frac17 + \cdots ,
$$

the Leibniz series for $\pi$, falling out as a by-product. Second, near each jump the partial sums always overshoot, by about 9% of the jump, however many terms are added. The overshoot squeezes closer to the jump but never shrinks. This is the *Gibbs phenomenon*, observed in 1898 when a machine built to sum Fourier series drew stubborn spikes at the corners. It shows up today as "ringing" around sharp edges in compressed images.

That the series converges at every point except the jumps, and exactly what happens at the jumps (it converges to the midpoint, 0), was proved by Dirichlet in 1829. It was one of the first theorems of rigorous analysis.

## Everywhere at Once

Meanwhile the idea escaped into science. Light splits into a spectrum, sound into frequencies, and the X-ray pattern of a crystal is the Fourier transform of its atoms, which is how [molecular biology](/biology/molecular-biology/) read the structure of DNA. In 1965 {{fig:cooley|James Cooley}} and {{fig:tukey|John Tukey}} published the fast Fourier transform, and made the transform cheap enough to run on every phone, camera and modem. Gauss, it later emerged, had found the same algorithm around 1805.

At the research frontier, harmonic analysis now asks how waves travelling in many directions can pile up. That question is disguised as a puzzle about rotating a needle, the Kakeya problem, which was solved in three dimensions only in 2025.
