---
id: complex-dynamics
domain: math
thread: dynamics
name: Complex Dynamics
parent_ids:
  - dynamical-systems
  - complex-analysis
era_emerged: 1918 – 1985
core_question: What happens when a simple formula on the complex numbers is applied over and over again?

summary: |-
  Complex dynamics studies what happens when a function of a complex number, as simple as $z \mapsto z^2 + c$, is applied repeatedly. Some starting points stay bounded forever and others escape to infinity. The boundary between them, the Julia set, is usually a fractal of infinite intricacy. The Mandelbrot set catalogues, for every $c$ at once, which kind of Julia set appears.

  Pierre Fatou and Gaston Julia founded the subject around 1918 using the tools of complex analysis, without being able to see what they described. It was largely dormant until computers drew the pictures in the late 1970s. Douady, Hubbard, Sullivan and others then turned the pictures into theorems, and the Mandelbrot set became the best-known image in mathematics. Whether it is locally connected is still unknown.

key_ideas:
  - term: Iteration
    definition: >-
      Applying the same function again and again: $z_0$, $f(z_0)$, $f(f(z_0))$, and so
      on. The sequence of results is the orbit of $z_0$.
    turning_point_id: fatou-julia
  - term: Julia set and Fatou set
    definition: >-
      The Fatou set is where iteration behaves tamely, so nearby points stay nearby. The
      Julia set is the rest, where it is chaotic. For polynomials, the Julia set is the
      boundary of the set of points whose orbits stay bounded.
    turning_point_id: fatou-julia
  - term: Mandelbrot set
    definition: >-
      The set of values $c$ for which the orbit of 0 under $z \mapsto z^2 + c$ stays
      bounded. It is exactly the set of $c$ whose Julia set is connected.
    turning_point_id: douady-hubbard-connected
  - term: Fractal
    definition: >-
      A shape with detail at every scale, often with a fractional dimension. Mandelbrot
      coined the word in 1975, and Julia sets are among the richest examples.
    turning_point_id: mandelbrot-set-pictures

turning_points:
  - id: fatou-julia
    date: 1918 – 1920
    type: REFORMULATION
    title: Fatou and Julia found the theory of iteration
    description: >-
      The Paris Academy offers its 1918 Grand Prix for work on iterating functions.
      Gaston Julia, who had lost his nose to a wound in the First World War, wins it with a
      long memoir, and Pierre Fatou publishes closely overlapping results. Using Montel's
      theory of normal families from complex analysis, they split the plane into regions
      of tame and chaotic behaviour. They could not draw what they had described.
    contested: true
    contested_note: >-
      Fatou and Julia reached many of the same results independently at the same time,
      and there was a bitter priority dispute between them, with both lodging sealed
      notes with the Academy. Historians generally treat them as co-founders, and the two
      halves of the plane are named after one each.
    sources:
      - citation: "Julia, G. (1918). Mémoire sur l'itération des fonctions rationnelles. Journal de Mathématiques Pures et Appliquées (8) 1: 47–245."
        url: null
      - citation: "Fatou, P. (1919–1920). Sur les équations fonctionnelles. Bulletin de la Société Mathématique de France 47: 161–271; 48: 33–94, 208–314."
        url: null

  - id: mandelbrot-set-pictures
    date: 1978 – 1980
    type: REFORMULATION
    title: The Mandelbrot set is drawn
    description: >-
      With computers able to test millions of points, the set of parameters $c$ for which
      $z^2 + c$ keeps 0 bounded is drawn for the first time. Robert Brooks and Peter
      Matelski publish a crude picture in 1978. Benoit Mandelbrot, at IBM, publishes
      detailed studies in 1980. The images reveal an object of unexpected, endless
      complexity, and brought the field back to life.
    contested: true
    contested_note: >-
      Brooks and Matelski produced the first published picture, in a paper written in
      1978, and some mathematicians thought the set should not carry Mandelbrot's name.
      Mandelbrot's detailed computer exploration, his recognition of its significance, and
      his publicity made it famous, and Douady and Hubbard named it after him.
    sources:
      - citation: "Mandelbrot, B. B. (1980). Fractal aspects of the iteration of z ↦ λz(1−z) for complex λ and z. Annals of the New York Academy of Sciences 357: 249–259."
        url: null
      - citation: "Brooks, R. & Matelski, J. P. (1981). The dynamics of 2-generator subgroups of PSL(2,C). In Riemann Surfaces and Related Topics, Annals of Mathematics Studies 97: 65–71."
        url: null

  - id: douady-hubbard-connected
    date: "1982"
    type: PROOF
    title: The Mandelbrot set is connected
    description: >-
      Computer pictures showed apparently separate islands scattered around the Mandelbrot
      set. Adrien Douady and John Hubbard prove that the set is connected: every island is
      joined to the main body by filaments too thin to see. Their Orsay notes built the
      tools, external rays and parameter-space analysis, that the subject still uses.
    contested: false
    sources:
      - citation: "Douady, A. & Hubbard, J. H. (1982). Itération des polynômes quadratiques complexes. Comptes Rendus de l'Académie des Sciences Paris 294: 123–126."
        url: null

  - id: sullivan-no-wandering
    date: "1985"
    type: PROOF
    title: No wandering domains
    description: >-
      Fatou had asked whether a region of tame behaviour could wander forever without
      returning. Dennis Sullivan proves that for rational functions it cannot, by
      importing quasiconformal methods from the study of Kleinian groups. The proof
      completed the classification of tame behaviour that Fatou had begun, and showed the
      power of the dictionary between iteration and Kleinian groups.
    contested: false
    sources:
      - citation: "Sullivan, D. (1985). Quasiconformal homeomorphisms and dynamics I. Solution of the Fatou–Julia problem on wandering domains. Annals of Mathematics 122(3): 401–418."
        url: null

  - id: shishikura-dimension
    date: "1998"
    type: PROOF
    title: The boundary has dimension two
    description: >-
      Mitsuhiro Shishikura proves that the boundary of the Mandelbrot set, a curve-like
      set, is so wrinkled that its Hausdorff dimension is 2, as large as that of a filled
      region of the plane. It is as complicated as a boundary in the plane can possibly be.
    contested: false
    sources:
      - citation: "Shishikura, M. (1998). The Hausdorff dimension of the boundary of the Mandelbrot set and Julia sets. Annals of Mathematics 147(2): 225–267."
        url: null

open_problems:
  - id: mlc-conjecture
    name: Is the Mandelbrot set locally connected? (MLC)
    status: open
    status_note: Open as of writing; proved at many parameter values, beginning with Yoccoz's work around 1990.
    description: >-
      Douady and Hubbard conjectured that the Mandelbrot set is locally connected: near
      each of its points, the nearby parts are connected to each other, with no infinitely
      fine comb-like structure. If true, their theory gives a complete combinatorial
      description of the whole set.
    why_hard: >-
      Local connectivity has to be proved at every point of the boundary, and different
      points need different techniques. Jean-Christophe Yoccoz proved it at all points
      except those lying in infinitely many nested smaller copies of the set, where
      renormalisation methods are needed and are only partly understood.
    unlocks: >-
      MLC implies the density of hyperbolicity for quadratic polynomials: almost every
      small change of $c$ can be made to reach a parameter with stable, predictable
      dynamics. It would complete the description of the simplest non-trivial family of
      dynamical systems.
    sources:
      - citation: "Douady, A. & Hubbard, J. H. (1984–1985). Étude dynamique des polynômes complexes I–II. Publications Mathématiques d'Orsay."
        url: null
      - citation: "Milnor, J. (2006). Dynamics in One Complex Variable (3rd ed.). Princeton University Press."
        url: null

applications:
  - area: Numerical computation
    title: Where Newton's method goes
    description: >-
      Newton's method for finding roots is an iteration, and Cayley asked in 1879 which
      starting points lead to which root. Complex dynamics answers it: the basins are
      separated by fractal Julia sets. The theory also gives explicit starting points that
      are guaranteed to find every root of a polynomial.
    sources:
      - citation: "Hubbard, J., Schleicher, D. & Sutherland, S. (2001). How to find all roots of complex polynomials by Newton's method. Inventiones Mathematicae 146(1): 1–33."
        url: null
  - area: Computer graphics
    title: Fractal landscapes
    description: >-
      Fractal geometry gave graphics a way to generate mountains, coastlines and clouds
      from a few rules. Loren Carpenter's fractal terrain in 1980 led to the first
      computer-generated planet sequence in a feature film, in *Star Trek II* (1982).
    sources:
      - citation: "Fournier, A., Fussell, D. & Carpenter, L. (1982). Computer rendering of stochastic models. Communications of the ACM 25(6): 371–384."
        url: null
  - area: Universality
    title: Why Feigenbaum's constant is universal
    description: >-
      Physicists explained the universality of period doubling with a renormalisation
      argument, a zoom that turns a system into a smaller copy of itself. Mathematicians
      working in complex dynamics, notably Sullivan, McMullen and Lyubich, turned that
      argument into a proof, explaining numbers measured in fluids and circuits.
    domain: physics
    sources:
      - citation: "Lyubich, M. (1999). Feigenbaum–Coullet–Tresser universality and Milnor's hairiness conjecture. Annals of Mathematics 149(2): 319–420."
        url: null

further_reading:
  - citation: "Peitgen, H.-O. & Richter, P. H. (1986). The Beauty of Fractals. Springer."
    url: null
    note: The book of pictures that popularised Julia and Mandelbrot sets, with the mathematics behind them.
  - citation: "Mandelbrot, B. B. (1982). The Fractal Geometry of Nature. W. H. Freeman."
    url: null
    note: Mandelbrot's manifesto for fractals, wide-ranging and idiosyncratic.
  - citation: "Milnor, J. (2006). Dynamics in One Complex Variable (3rd ed.). Princeton University Press."
    url: null
    note: The standard graduate text, clearly written.
---

## Iteration Without Pictures

In 1918 the Paris Academy of Sciences offered its Grand Prix for work on iterating functions. The winner was {{fig:gaston-julia|Gaston Julia}}, aged twenty-five, who had lost his nose to a wound in the First World War and wore a leather patch for the rest of his life. {{fig:pierre-fatou|Pierre Fatou}} had reached many of the same results independently, and the two quarrelled bitterly over priority. Between them they used the new theory of normal families from [complex analysis](/math/complex-analysis/) to split the plane into a region where iteration is tame and a region where it is chaotic.

They could only imagine what these regions looked like. Calculating even one picture by hand would have taken a lifetime. After a burst of activity, the subject lay mostly dormant for sixty years.

## The Pictures Arrive

By the late 1970s computers could test millions of points. {{fig:robert-brooks|Robert Brooks}} and {{fig:peter-matelski|Peter Matelski}} printed a crude image in 1978 of the set of parameters $c$ for which $z^2 + c$ keeps 0 bounded. {{fig:benoit-mandelbrot|Benoit Mandelbrot}}, at IBM, drew it in detail and saw that it was extraordinary. Zooming in reveals spirals, filaments and tiny copies of the whole set, without end. Mandelbrot had coined the word "fractal" in 1975 for shapes with detail at every scale, and this became its emblem.

Then the pictures became theorems. {{fig:adrien-douady|Adrien Douady}} and {{fig:john-hubbard|John Hubbard}} proved in 1982 that the set is connected, although the pictures seemed to show separate islands, and named it after Mandelbrot. In 1985 {{fig:dennis-sullivan|Dennis Sullivan}} settled a question left open by Fatou, using methods borrowed from hyperbolic geometry.

## A Closer Look: Bounded or Escaping?

Take the rule $z \mapsto z^2 + c$, start from $z = 0$ and watch what happens for a few values of $c$:

| $c$ | Orbit of 0 | Fate |
|---|---|---|
| $0$ | $0, 0, 0, \ldots$ | fixed, bounded |
| $-1$ | $-1, 0, -1, 0, \ldots$ | cycle of length 2, bounded |
| $i$ | $i,\ -1+i,\ -i,\ -1+i,\ -i, \ldots$ | eventually a 2-cycle, bounded |
| $-2$ | $-2, 2, 2, 2, \ldots$ | fixed from then on, bounded |
| $1$ | $1, 2, 5, 26, 677, \ldots$ | escapes to infinity |

For $c = i$, squaring $-1 + i$ gives $(-1)^2 + 2(-1)(i) + i^2 = -2i$, and adding $i$ gives $-i$. Squaring $-i$ gives $-1$, and adding $i$ gives $-1 + i$ again. The orbit is trapped.

The Mandelbrot set is the set of all $c$ whose orbit stays bounded, so $0$, $-1$, $i$ and $-2$ are in it and $1$ is not. There is a simple test: once an orbit gets farther than 2 from the origin, it must escape. That is how computers draw the set, colouring each $c$ by how many steps its orbit takes to pass distance 2.

The boundary is where it gets hard. The real number $c = 0.25$ is in the set: its orbit creeps up towards $0.5$ and never passes it. But $c = 0.26$, only a hundredth larger, escapes after 30 steps, and $c = 0.251$ after 97. The closer $c$ is to the boundary, the longer it takes to decide. For points exactly on the boundary, no finite computation can settle the question. That is why the set's finest structure is still not fully understood.

## Still Unmapped

In 1998 {{fig:mitsuhiro-shishikura|Mitsuhiro Shishikura}} proved that the boundary of the Mandelbrot set is as complicated as a boundary in the plane can be, with dimension 2. The central conjecture of the field, that the set is locally connected, would give a complete description of it, and with it of all quadratic [dynamical systems](/math/dynamical-systems/). Jean-Christophe Yoccoz proved it at most points, and his work contributed to his Fields Medal in 1994. The remaining points, deep inside nested copies of the set, are still out of reach. The same zooming, or renormalisation, that produces those copies also explains the universal constants of [chaos theory](/math/chaos-theory/).
