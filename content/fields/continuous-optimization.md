---
id: continuous-optimization
domain: math
thread: computation
name: Continuous Optimisation
parent_ids:
  - numerical-analysis
  - real-analysis
era_emerged: 1847 – 1970
core_question: How do you find the lowest point of a function of thousands or billions of variables?

summary: |-
  Optimisation looks for the best choice among infinitely many: the shape of a wing with the least drag, the portfolio with the least risk for a given return, the settings of a neural network that make the fewest mistakes. When the choices vary continuously, calculus gives the starting point. At a minimum the slope is zero, and constraints add terms called Lagrange multipliers. Continuous optimisation turns these conditions into algorithms that find the minimum, step by step, when the variables number in the millions.

  Cauchy proposed the simplest algorithm, gradient descent, in 1847: repeatedly step downhill. The twentieth century added the conditions for optimisation under inequality constraints, first written down by William Karush in a forgotten thesis of 1939. It added quasi-Newton methods, which learn the curvature of the function as they go, and, from 1984, interior-point methods that solve convex problems in polynomial time. Stochastic gradient descent, going back to Robbins and Monro in 1951, now trains the neural networks of modern artificial intelligence, and why it works as well as it does is not fully understood.

key_ideas:
  - term: Lagrange multipliers
    definition: >-
      To minimise a function subject to an equation constraint, look for points where the
      function's gradient is a multiple of the constraint's gradient. The multiple measures
      how much the optimum would improve if the constraint were relaxed slightly.
    turning_point_id: lagrange-multipliers
  - term: Gradient descent
    definition: >-
      The gradient points in the direction of steepest increase. Step a little in the
      opposite direction, recompute, and repeat. Progress is fast when the function is
      shaped like a round bowl and slow when it is a long, narrow valley.
    turning_point_id: cauchy-gradient-descent
  - term: KKT conditions
    definition: >-
      The conditions a minimum must satisfy when there are inequality constraints. Each
      constraint either holds with room to spare, in which case it can be ignored, or holds
      exactly and acts like a Lagrange constraint.
    turning_point_id: karush-kuhn-tucker
  - term: Convexity
    definition: >-
      A function is convex if the straight line between any two points on its graph lies
      above the graph. For convex problems every local minimum is a global minimum, and
      efficient algorithms with guarantees exist.
    turning_point_id: interior-point-convex
  - term: Stochastic gradient
    definition: >-
      When the function is an average over millions of data points, estimate its gradient
      from a small random sample at each step. The steps are noisy but cheap, and with
      shrinking step sizes they still converge.
    turning_point_id: robbins-monro

turning_points:
  - id: lagrange-multipliers
    date: "1788"
    type: REFORMULATION
    title: Lagrange multipliers
    description: >-
      In his *Mécanique analytique*, Joseph-Louis Lagrange handles the constraints of a
      mechanical system by adding each one to the equations with an unknown multiplier.
      The same device solves the problem of minimising a function subject to constraints.
      It turned constrained problems into unconstrained ones, and the multipliers turned out
      to have meaning of their own, as forces in mechanics and prices in economics.
    contested: false
    sources:
      - citation: "Lagrange, J.-L. (1788). Mécanique analytique. Veuve Desaint, Paris."
        url: null

  - id: cauchy-gradient-descent
    date: "1847"
    type: REFORMULATION
    title: Gradient descent
    description: >-
      Augustin-Louis Cauchy, wanting to solve the systems of equations that arise in
      computing the orbits of heavenly bodies, proposes turning them into a minimisation
      problem and moving repeatedly in the direction in which the function decreases
      fastest. His three-page note is the origin of the method of steepest descent, which
      is still the basis of most large-scale optimisation.
    contested: false
    sources:
      - citation: "Cauchy, A.-L. (1847). Méthode générale pour la résolution des systèmes d'équations simultanées. Comptes Rendus de l'Académie des Sciences 25: 536–538."
        url: null

  - id: karush-kuhn-tucker
    date: 1939 – 1951
    type: PROOF
    title: The Karush–Kuhn–Tucker conditions
    description: >-
      William Karush, in a master's thesis at the University of Chicago in 1939, states and
      proves the conditions for a minimum under inequality constraints. The thesis is never
      published. Fritz John publishes related conditions in 1948, and Harold Kuhn and
      Albert Tucker publish them in 1951 in a paper that founds the field of nonlinear
      programming. Karush's priority is noticed only in the 1970s.
    contested: true
    contested_note: >-
      The conditions were long called the Kuhn–Tucker conditions. After Karush's thesis
      came to light, his name was added, and Kuhn himself acknowledged Karush's priority.
      Opinions still differ on how much weight an unpublished thesis should carry, and on
      the place of Fritz John's 1948 paper, so the naming varies between authors.
    sources:
      - citation: "Kuhn, H. W. & Tucker, A. W. (1951). Nonlinear programming. Proceedings of the Second Berkeley Symposium on Mathematical Statistics and Probability: 481–492. University of California Press."
        url: null
      - citation: "Kjeldsen, T. H. (2000). A contextualized historical analysis of the Kuhn–Tucker theorem in nonlinear programming: the impact of World War II. Historia Mathematica 27(4): 331–361."
        url: null

  - id: robbins-monro
    date: "1951"
    type: REFORMULATION
    title: Stochastic approximation
    description: >-
      Herbert Robbins and Sutton Monro show how to find the root of a function that can
      only be measured with random noise. Take a step based on each noisy measurement, with
      step sizes that shrink at the right rate, and the steps converge to the true answer.
      Applied to gradients, this is stochastic gradient descent, the method that trains
      almost every modern neural network.
    contested: false
    sources:
      - citation: "Robbins, H. & Monro, S. (1951). A stochastic approximation method. Annals of Mathematical Statistics 22(3): 400–407."
        url: null
      - citation: "Bottou, L., Curtis, F. E. & Nocedal, J. (2018). Optimization methods for large-scale machine learning. SIAM Review 60(2): 223–311."
        url: null

  - id: quasi-newton-methods
    date: 1959 – 1970
    type: REFORMULATION
    title: Quasi-Newton methods
    description: >-
      Newton's method for minimisation needs the matrix of second derivatives, which is
      costly to compute. William Davidon, a physicist at Argonne, finds a way to build up an
      approximation to it from the gradients alone, as the method runs. His 1959 report is
      rejected by a journal. Roger Fletcher and Michael Powell publish an improved version
      in 1963, and in 1970 four authors independently find the BFGS update, still the most
      used method of its kind.
    contested: false
    sources:
      - citation: "Davidon, W. C. (1991). Variable metric method for minimization. SIAM Journal on Optimization 1(1): 1–17. (Argonne report ANL-5990 of 1959.)"
        url: null
      - citation: "Fletcher, R. & Powell, M. J. D. (1963). A rapidly convergent descent method for minimization. The Computer Journal 6(2): 163–168."
        url: null

  - id: interior-point-convex
    date: 1984 – 1994
    type: PROOF
    title: Interior-point methods for convex problems
    description: >-
      In 1984 Narendra Karmarkar finds a polynomial-time method for linear programming that
      travels through the inside of the feasible region rather than along its edges. Yurii
      Nesterov and Arkadi Nemirovski then show in 1994 that the same approach, guided by
      special barrier functions, solves a very wide class of convex problems in polynomial
      time. Convex optimisation became a technology, with software that can be used almost
      like a formula.
    contested: false
    sources:
      - citation: "Karmarkar, N. (1984). A new polynomial-time algorithm for linear programming. Combinatorica 4(4): 373–395."
        url: null
      - citation: "Nesterov, Y. & Nemirovskii, A. (1994). Interior-Point Polynomial Algorithms in Convex Programming. SIAM."
        url: null

open_problems:
  - id: why-deep-networks-train
    name: Why gradient descent trains deep networks
    status: open
    status_note: Open as of 2026; understood for some simplified models, not for networks used in practice.
    description: >-
      Training a neural network means minimising a function of millions or billions of
      variables that is far from convex, with countless local minima and saddle points.
      Classical theory gives no reason to expect that stochastic gradient descent will find
      a good minimum, or that the network found will work well on new data. In practice it
      usually does both.
    why_hard: >-
      The functions involved are too complicated for the tools of convex analysis, and
      their structure depends on the data. In 2016 experiments showed that networks can fit
      even randomly labelled data perfectly, so the usual explanations of why they
      generalise cannot be the whole story. Results exist for very wide networks and other
      simplified cases, but they do not explain the networks actually used.
    unlocks: >-
      A theory would say when training will succeed, how to choose step sizes and network
      shapes without costly trial and error, and when a trained system can be trusted.
    sources:
      - citation: "Zhang, C., Bengio, S., Hardt, M., Recht, B. & Vinyals, O. (2017). Understanding deep learning requires rethinking generalization. International Conference on Learning Representations (ICLR)."
        url: null

applications:
  - area: Structural biology
    title: Predicting protein structures
    description: >-
      AlphaFold predicts the three-dimensional shape of a protein from its sequence. It is
      a neural network with millions of parameters, fitted to the known structures of the
      Protein Data Bank by stochastic gradient methods. In 2020 its predictions reached
      accuracy close to experiment for many proteins.
    domain: biology
    field_id: molecular-biology
    sources:
      - citation: "Jumper, J. et al. (2021). Highly accurate protein structure prediction with AlphaFold. Nature 596: 583–589."
        url: null
  - area: Finance
    title: Portfolio selection
    description: >-
      Harry Markowitz's portfolio theory chooses investments that minimise risk, measured
      by variance, for a required expected return. It is a quadratic optimisation problem
      with constraints, solved every day by fund managers.
    sources:
      - citation: "Markowitz, H. (1952). Portfolio selection. Journal of Finance 7(1): 77–91."
        url: null
  - area: Medical imaging
    title: Compressed sensing
    description: >-
      A convex optimisation, minimising the sum of absolute values, can recover an image
      exactly from far fewer measurements than was thought necessary, when the image is
      simple in a suitable sense. It has shortened MRI scans, which matters most for
      children and the seriously ill.
    sources:
      - citation: "Candès, E. J., Romberg, J. & Tao, T. (2006). Robust uncertainty principles: exact signal reconstruction from highly incomplete frequency information. IEEE Transactions on Information Theory 52(2): 489–509."
        url: null

further_reading:
  - citation: "Nocedal, J. & Wright, S. J. (2006). Numerical Optimization, 2nd edition. Springer."
    url: null
    note: The standard textbook on algorithms for continuous optimisation.
  - citation: "Boyd, S. & Vandenberghe, L. (2004). Convex Optimization. Cambridge University Press."
    url: null
    note: A widely used introduction to convex problems and interior-point methods.
  - citation: "Bottou, L., Curtis, F. E. & Nocedal, J. (2018). Optimization methods for large-scale machine learning. SIAM Review 60(2): 223–311."
    url: null
    note: A survey of stochastic gradient methods and the theory behind them.
---

## Downhill

[Real analysis](/math/real-analysis/) says that at a smooth minimum the slope is zero. For constraints, {{fig:lagrange|Joseph-Louis Lagrange}} added a trick in 1788: attach each constraint to the function with an unknown multiplier, and look for points where everything balances. These conditions describe the answer but do not say how to find it. For that, one needs an algorithm.

The first came from astronomy. In 1847 {{fig:cauchy|Augustin-Louis Cauchy}}, facing large systems of equations for planetary orbits, proposed to minimise the sum of their squared errors by stepping repeatedly in the direction in which that sum decreases fastest, the direction opposite the gradient. This is gradient descent. It is simple, it needs only first derivatives, and it is slow on functions whose valleys are long and narrow. [Newton's method](/math/numerical-analysis/), applied to the gradient, is much faster near a minimum but needs second derivatives, which for many variables form a large matrix that is costly to compute and to solve with.

## Constraints

Real problems have limits: a budget that cannot be exceeded, a beam that cannot be thinner than a millimetre. In 1939 {{fig:william-karush|William Karush}}, a master's student at Chicago, worked out the conditions for a minimum with inequality constraints. His thesis was never published. The same conditions appeared in 1951 in a paper by {{fig:harold-kuhn|Harold Kuhn}} and {{fig:albert-tucker|Albert Tucker}}, which launched nonlinear programming as a field, alongside the linear programming of [combinatorial optimisation](/math/combinatorial-optimization/). Karush's work was rediscovered in the 1970s, and the conditions now carry all three names.

In 1959 {{fig:william-davidon|William Davidon}}, a physicist at Argonne National Laboratory whose computer kept crashing before his long optimisations finished, found a way to learn the second-derivative matrix gradually from the gradients themselves. His report was rejected for publication. It was printed, as a historical document, only in 1991. {{fig:roger-fletcher|Roger Fletcher}} and {{fig:michael-powell|Michael Powell}} refined the method in 1963, and in 1970 four people independently found the BFGS formula. Quasi-Newton methods became the standard for smooth problems of moderate size.

## A Closer Look: A Narrow Valley

Take the function

$$
f(x, y) = \tfrac12\left(x^2 + 10y^2\right),
$$

a bowl ten times steeper in one direction than the other. Its minimum is at $(0, 0)$ and its gradient is $(x, 10y)$. Gradient descent with step size $h$ updates

$$
x \leftarrow (1 - h)\,x, \qquad y \leftarrow (1 - 10h)\,y.
$$

The two directions shrink at different rates. The best fixed step balances them, $h = 2/11$, and then both shrink by a factor of $9/11 \approx 0.818$ at every step. Start at $(10, 1)$, where $f = 55$:

| Step | $x$ | $y$ | $f(x, y)$ |
|---|---|---|---|
| 0 | 10 | 1 | 55 |
| 1 | 8.18 | −0.818 | 36.8 |
| 2 | 6.69 | 0.669 | 24.7 |
| 5 | 3.67 | −0.367 | 7.39 |
| 10 | 1.34 | 0.134 | 0.994 |
| 20 | 0.181 | 0.0181 | 0.0180 |

The steps zigzag across the valley, the sign of $y$ flipping each time, while creeping along it. A slightly larger step, $h = 0.21$, makes $1 - 10h = -1.1$, and the $y$ coordinate grows by 10% per step: after 20 steps $f$ has risen from 55 to 226. Any step above $2/10 = 0.2$ diverges.

The ratio of the steepest to the shallowest curvature, here 10, is the condition number $\kappa$. With the best step, the error shrinks by $(\kappa - 1)/(\kappa + 1)$ per step. To cut it by a factor of a million:

| Condition number $\kappa$ | Gradient descent steps | Best momentum method |
|---|---|---|
| 10 | 69 | 22 |
| 100 | 691 | 69 |
| 1,000 | 6,908 | 219 |

The cost grows in proportion to $\kappa$. Methods with momentum, which let each step carry on partly in the direction of the last, such as conjugate gradients and Nesterov's accelerated method, need a number of steps proportional to about $\sqrt{\kappa}$ instead. For badly conditioned problems, that difference decides whether an optimisation finishes at all.

## Convexity and Scale

For a convex function, one whose graph curves upwards everywhere, every local minimum is the global minimum, and there is hope of guarantees. In 1984 Narendra Karmarkar gave a fast method for linear programming that moves through the interior of the feasible region. {{fig:yurii-nesterov|Yurii Nesterov}} and {{fig:arkadi-nemirovski|Arkadi Nemirovski}} showed in 1994 that interior-point methods solve a very wide class of convex problems in polynomial time. Convex optimisation became a reliable technology, used in engineering design, signal processing, finance and control.

The largest problems went the other way. {{fig:herbert-robbins|Herbert Robbins}} and {{fig:sutton-monro|Sutton Monro}} had shown in 1951 that steps based on noisy estimates still converge if the step sizes shrink correctly. Estimating a gradient from a small random batch of data, rather than all of it, is exactly such a step, and stochastic gradient descent, often with momentum, now trains neural networks with billions of parameters. Their training functions are not convex, and theory gives little reason to expect success. Yet training usually works, and explaining why is one of the central open questions where [Monte Carlo methods](/math/monte-carlo-methods/), [linear algebra](/math/numerical-linear-algebra/) and optimisation meet.
