---
id: real-analysis
domain: math
thread: analysis
name: Real Analysis
parent_ids:
  - calculus
  - fourier-analysis
era_emerged: 1821 – 1902
core_question: What exactly are limits, continuity and the real numbers, and why did calculus need them defined?

summary: |-
  Real analysis is calculus rebuilt on precise definitions. Instead of infinitely small quantities, it uses *limits*, defined by a game of tolerances: for every accuracy you demand, there is a point beyond which the values stay that close. Continuity, derivatives, integrals and infinite series are all defined this way, and so, finally, are the real numbers themselves.

  It was forced into existence by failures. Intuition said every continuous curve has a slope somewhere, that series of continuous functions stay continuous, and that every function worth studying has an integral. Each turned out to be false. What came out of the repair (rigorous proof, set theory, measure) became the foundation of modern mathematics.

key_ideas:
  - term: Limit (ε–δ)
    definition: >-
      $\lim_{x \to a} f(x) = L$ means: for every $\varepsilon > 0$ there is a
      $\delta > 0$ such that $|f(x) - L| < \varepsilon$ whenever
      $0 < |x - a| < \delta$. Infinitesimals are replaced by a precise promise.
    turning_point_id: cauchy-cours
  - term: Continuity
    definition: >-
      A function is continuous if small changes in input give small changes in output,
      defined with limits. Continuity does not imply smoothness, as Weierstrass showed.
    turning_point_id: weierstrass-monster
  - term: Completeness of the real numbers
    definition: >-
      The real number line has no gaps: every bounded increasing sequence has a limit.
      Dedekind and Cantor constructed the reals from the rationals to guarantee it.
    turning_point_id: dedekind-cantor-reals
  - term: Uniform convergence
    definition: >-
      A sequence of functions converging at the same rate everywhere, strong enough to
      guarantee that limits of continuous functions stay continuous. Ordinary pointwise
      convergence is not.
    turning_point_id: cauchy-cours
  - term: Measure and the Lebesgue integral
    definition: >-
      A way to assign a size to very general sets, and an integral built on it that
      handles far wilder functions and limits than Riemann's. It is the modern standard.
    turning_point_id: lebesgue-integral

turning_points:
  - id: cauchy-cours
    date: "1821"
    type: REFORMULATION
    title: Cauchy's Cours d'analyse
    description: >-
      Augustin-Louis Cauchy's textbook for the École Polytechnique defines limits,
      continuity and convergence in terms of quantities that become arbitrarily small,
      and proves theorems from those definitions. It is the first systematic attempt to
      answer Berkeley and ground calculus without infinitesimals. It still contained
      errors, including a false theorem that a convergent sum of continuous functions is
      continuous.
    contested: true
    contested_note: >-
      Bernard Bolzano, in Prague, had published similar definitions of continuity in 1817
      in an obscure pamphlet. In 1970 the historian Ivor Grattan-Guinness argued that
      Cauchy had read and used Bolzano's work without acknowledgement. Others, including
      Hans Freudenthal, rejected the charge as unsupported. The question remains open.
      Bolzano is in any case recognised as an independent pioneer.
    sources:
      - citation: "Cauchy, A.-L. (1821). Cours d'analyse de l'École royale polytechnique. Paris."
        url: null
      - citation: "Grattan-Guinness, I. (1970). Bolzano, Cauchy and the 'new analysis' of the early nineteenth century. Archive for History of Exact Sciences 6: 372–400."
        url: null
      - citation: "Grabiner, J. V. (1981). The Origins of Cauchy's Rigorous Calculus. MIT Press."
        url: null

  - id: riemann-integral
    date: 1854 (published 1868)
    type: REFORMULATION
    title: Riemann defines the integral
    description: >-
      In his habilitation thesis on trigonometric series, Bernhard Riemann gives the first
      precise general definition of the integral, by limits of sums over finer and finer
      partitions. He needs it to decide which functions have Fourier coefficients at all.
      He also constructs a function that is discontinuous at a dense set of points yet
      still integrable.
    contested: false
    sources:
      - citation: "Riemann, B. (1868). Über die Darstellbarkeit einer Function durch eine trigonometrische Reihe. Abhandlungen der Königlichen Gesellschaft der Wissenschaften zu Göttingen 13."
        url: null

  - id: weierstrass-monster
    date: "1872"
    type: DISPROOF
    title: A continuous curve with no slope anywhere
    description: >-
      Karl Weierstrass presents to the Berlin Academy a function, a sum of cosine waves of
      rapidly increasing frequency, that is continuous everywhere and differentiable
      nowhere. It refutes the belief, held by nearly every mathematician, that a
      continuous curve must be smooth at most points. Hermite called such functions a
      "lamentable plague". Intuition could no longer be trusted, and only definitions
      could be.
    contested: false
    sources:
      - citation: "Weierstrass, K. (1872). Über continuirliche Functionen eines reellen Arguments, die für keinen Werth des letzteren einen bestimmten Differentialquotienten besitzen. Lecture to the Königlich Preussische Akademie der Wissenschaften, Berlin, 18 July 1872."
        url: null

  - id: dedekind-cantor-reals
    date: 1872 – 1874
    type: REFORMULATION
    title: The real numbers are constructed
    description: >-
      In 1872 Richard Dedekind (by "cuts" of the rationals) and Georg Cantor (by
      convergent sequences) independently construct the real numbers, proving the gap-free
      property that calculus had always assumed. In 1874 Cantor shows that the real
      numbers cannot be listed, so there are more of them than of the whole numbers. The
      theory of infinite sets begins.
    contested: false
    sources:
      - citation: "Dedekind, R. (1872). Stetigkeit und irrationale Zahlen. Vieweg, Braunschweig."
        url: null
      - citation: "Cantor, G. (1874). Über eine Eigenschaft des Inbegriffes aller reellen algebraischen Zahlen. Journal für die reine und angewandte Mathematik 77: 258–262."
        url: null

  - id: lebesgue-integral
    date: "1902"
    type: REFORMULATION
    title: Lebesgue's integral
    description: >-
      Henri Lebesgue's thesis measures the size of general sets and builds an integral on
      that measure. Riemann slices the domain; Lebesgue slices the range. His integral
      handles functions like Dirichlet's, and it behaves well under limits, which
      Riemann's does not. Measure theory became the language of modern analysis and,
      through Kolmogorov, of probability.
    contested: false
    sources:
      - citation: "Lebesgue, H. (1902). Intégrale, longueur, aire. Annali di Matematica Pura ed Applicata 7: 231–359."
        url: null

open_problems: []

further_reading:
  - citation: "Bressoud, D. M. (2007). A Radical Approach to Real Analysis (2nd ed.). Mathematical Association of America."
    url: null
    note: Teaches the subject through the Fourier-series crisis that created it. The ideal companion to this page.
  - citation: "Abbott, S. (2015). Understanding Analysis (2nd ed.). Springer."
    url: null
    note: A friendly, well-motivated first course in rigorous analysis.
  - citation: "Grabiner, J. V. (1981). The Origins of Cauchy's Rigorous Calculus. MIT Press."
    url: null
    note: How the ε–δ definitions came to be.
---

## Answering Berkeley

For a century after Berkeley's attack, [calculus](/math/calculus/) ran on results rather than foundations. What changed that was teaching. At the École Polytechnique, {{fig:cauchy|Augustin-Louis Cauchy}} had to explain calculus to engineering students, and his *Cours d'analyse* (1821) tried to prove everything. It defined a limit as a value that quantities approach as closely as desired, a continuous function as one where small changes in input give small changes in output, and an infinite series as convergent when its partial sums settle down. The ghosts of departed quantities were replaced by statements about arbitrarily small, but always finite, numbers.

In Prague, the priest-philosopher {{fig:bolzano|Bernard Bolzano}} had reached similar definitions a few years earlier, in pamphlets almost no one read. Whether Cauchy saw them is still argued.

## Fourier's Pressure

What made rigour urgent was [Fourier analysis](/math/fourier-analysis/). Fourier series produced functions with jumps and corners as limits of smooth waves, contradicting a theorem in Cauchy's own book that limits of continuous functions are continuous. To say which functions *have* Fourier series, {{fig:riemann|Riemann}} had to define the integral itself, in 1854. To say where a Fourier series could fail, Cantor was led to study strange infinite sets of points.

Then came the counterexamples. In 1872 {{fig:weierstrass|Karl Weierstrass}}, who taught analysis in Berlin with ε and δ exactly as students learn it today, presented a function that is continuous everywhere and has a slope nowhere: a curve that is all corners. Charles Hermite wrote of turning away "with fright and horror from this lamentable plague of functions which have no derivatives". The lesson was blunt. Geometric intuition had misled the best mathematicians for two centuries, and only precise definitions could be trusted.

## What Is a Real Number?

Limits need something to converge to. If the number line had gaps, a sequence could close in on a hole. Nobody had defined the real numbers; everyone had assumed them. In 1872 {{fig:dedekind|Richard Dedekind}} and {{fig:cantor|Georg Cantor}} independently constructed them from the rationals, Dedekind by cutting the rational line into two pieces, Cantor by sequences that bunch together. Two years later Cantor proved that the real numbers cannot be listed one by one: there are strictly more of them than whole numbers. Infinity came in different sizes, and set theory was born.

## Measure

The last repair was to the integral. Riemann's integral cannot handle Dirichlet's function (1 on rationals, 0 on irrationals), and it behaves badly under limits. In 1902 {{fig:lebesgue|Henri Lebesgue}} built a new one on a theory of *measure*, a consistent way of assigning size to very general sets. He compared it to counting money. Riemann adds up coins in the order he picks them up, while Lebesgue first sorts them by value. Measure theory became the foundation of modern analysis, and thirty years later the foundation of [probability](/math/probability-theory/) too.
