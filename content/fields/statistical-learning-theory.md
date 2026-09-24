---
id: statistical-learning-theory
domain: math
thread: statistics
name: Statistical Learning Theory
parent_ids:
  - statistical-inference
  - information-theory
  - computational-complexity
era_emerged: 1958 – 1995
core_question: When can a rule learned from examples be trusted on cases it has never seen?

summary: |-
  Statistical learning theory asks when learning from examples works. A program is shown pictures labelled "cat" or "dog" and finds a rule that fits them. The question is whether the rule will also be right on new pictures. Fitting the examples is easy. Any list can be memorised. What matters is generalisation, and the theory says it depends on how flexible the family of candidate rules is, measured by a number called the VC dimension.

  The subject began with the perceptron, a learning machine of 1958, and with the hard lessons of its limits. Vapnik and Chervonenkis gave the mathematics of generalisation in 1971, Valiant joined it to the theory of computation in 1984, and support vector machines of 1995 put the theory directly into practice. Then deep neural networks, with far more parameters than examples, began to generalise in ways the theory said they should not. Explaining why is its central open question.

key_ideas:
  - term: Generalisation
    definition: >-
      Performing well on new data drawn from the same source as the training examples.
      The gap between error on the training data and error on new data is what the
      theory bounds.
    turning_point_id: slt-vc-theory
  - term: VC dimension
    definition: >-
      The largest number of points that a family of rules can label in every possible
      way. Lines in the plane have VC dimension 3. Finite VC dimension is exactly what
      makes learning from enough examples possible.
    turning_point_id: slt-vc-theory
  - term: PAC learning
    definition: >-
      "Probably approximately correct": a learner succeeds if, with high probability, it
      outputs a rule with small error, using a reasonable number of examples and a
      reasonable amount of computation.
    turning_point_id: slt-pac-learning
  - term: Margin
    definition: >-
      The width of the gap between two classes and the boundary separating them. A
      support vector machine picks the boundary with the widest margin, which controls
      generalisation even in very many dimensions.
    turning_point_id: slt-svm
  - term: Double descent
    definition: >-
      As a model grows past the point where it fits the training data exactly, its error
      on new data can fall again, contradicting the classical picture of overfitting.
    turning_point_id: slt-double-descent

turning_points:
  - id: slt-perceptron
    date: "1958"
    type: REFORMULATION
    title: The perceptron
    description: >-
      Frank Rosenblatt, a psychologist at Cornell, proposes a learning machine modelled
      loosely on neurons: it weighs its inputs, adds them up and fires if the total
      exceeds a threshold, and it adjusts the weights after each mistake. The perceptron
      convergence theorem, proved in the early 1960s, shows that it always learns to
      separate two classes when a straight boundary exists.
    contested: false
    sources:
      - citation: "Rosenblatt, F. (1958). The perceptron: a probabilistic model for information storage and organization in the brain. Psychological Review 65(6): 386–408."
        url: null

  - id: slt-minsky-papert
    date: "1969"
    type: DISPROOF
    title: The limits of perceptrons
    description: >-
      Marvin Minsky and Seymour Papert prove that a single-layer perceptron cannot compute
      some simple functions, such as whether two inputs differ, or whether a figure is
      connected, without resources that grow impossibly fast. Funding and interest in
      neural networks declined for more than a decade afterwards.
    contested: true
    contested_note: >-
      Its influence is disputed. Supporters of neural networks later argued that the book
      was read as condemning all networks, including multi-layer ones it did not analyse,
      and so set the field back. Minsky and Papert replied that their theorems were
      correct and precisely stated, and that the decline had other causes.
    sources:
      - citation: "Minsky, M. & Papert, S. (1969). Perceptrons: An Introduction to Computational Geometry. MIT Press."
        url: null
      - citation: "Olazaran, M. (1996). A sociological study of the official history of the perceptrons controversy. Social Studies of Science 26(3): 611–659."
        url: null

  - id: slt-vc-theory
    date: "1971"
    type: PROOF
    title: Vapnik–Chervonenkis theory
    description: >-
      Vladimir Vapnik and Alexey Chervonenkis, in Moscow, find the condition under which
      observed frequencies converge to true probabilities uniformly over a whole family
      of events. The answer is a single combinatorial number, now called the VC
      dimension. When it is finite, error on a large enough sample reliably predicts
      error on new data, whichever rule in the family is chosen.
    contested: false
    sources:
      - citation: "Vapnik, V. N. & Chervonenkis, A. Ya. (1971). On the uniform convergence of relative frequencies of events to their probabilities. Theory of Probability and Its Applications 16(2): 264–280."
        url: null

  - id: slt-pac-learning
    date: "1984"
    type: REFORMULATION
    title: A theory of the learnable
    description: >-
      Leslie Valiant defines learning as a computational task: a learner must find, with
      high probability, a nearly correct rule, using a number of examples and an amount of
      computation that grow only polynomially. In 1989 Blumer, Ehrenfeucht, Haussler and
      Warmuth show that the number of examples needed is governed by the VC dimension,
      uniting the Soviet and American theories.
    contested: false
    sources:
      - citation: "Valiant, L. G. (1984). A theory of the learnable. Communications of the ACM 27(11): 1134–1142."
        url: null
      - citation: "Blumer, A., Ehrenfeucht, A., Haussler, D. & Warmuth, M. K. (1989). Learnability and the Vapnik–Chervonenkis dimension. Journal of the ACM 36(4): 929–965."
        url: null

  - id: slt-backpropagation
    date: "1986"
    type: REFORMULATION
    title: Backpropagation
    description: >-
      David Rumelhart, Geoffrey Hinton and Ronald Williams show that networks with hidden
      layers of neurons can be trained by passing the error backwards through the network
      and adjusting every weight a little. The hidden layers learn useful internal
      features of their own. Multi-layer networks overcame the limits Minsky and Papert
      had proved for a single layer.
    contested: true
    contested_note: >-
      Priority is disputed. The underlying method, reverse-mode differentiation, was
      published by Seppo Linnainmaa in 1970, and Paul Werbos proposed using it to train
      neural networks in his 1974 thesis. The 1986 paper is credited with demonstrating
      that it works and making it widely known.
    sources:
      - citation: "Rumelhart, D. E., Hinton, G. E. & Williams, R. J. (1986). Learning representations by back-propagating errors. Nature 323: 533–536."
        url: null

  - id: slt-svm
    date: 1992 – 1995
    type: PROOF
    title: Support vector machines
    description: >-
      At Bell Labs, Vapnik, with Bernhard Boser, Isabelle Guyon and Corinna Cortes, turns
      the theory into an algorithm. A support vector machine separates two classes by the
      boundary with the widest margin, and a mathematical device called a kernel lets it
      draw curved boundaries in effectively unlimited dimensions while keeping the
      generalisation guarantee. For a decade it was the leading method in machine
      learning.
    contested: false
    sources:
      - citation: "Cortes, C. & Vapnik, V. (1995). Support-vector networks. Machine Learning 20(3): 273–297."
        url: null

  - id: slt-double-descent
    date: 2016 – 2019
    type: CRISIS
    title: Deep networks break the rules
    description: >-
      Chiyuan Zhang and colleagues show that standard image-recognition networks can
      memorise the training data perfectly even when the labels are replaced by random
      ones, so their capacity is enormous, yet on real labels they generalise well. The
      classical bounds say nothing useful about them. In 2019 Mikhail Belkin and
      colleagues describe "double descent": past the point of perfect fit, adding
      parameters can reduce error on new data.
    contested: false
    sources:
      - citation: "Zhang, C., Bengio, S., Hardt, M., Recht, B. & Vinyals, O. (2017). Understanding deep learning requires rethinking generalization. International Conference on Learning Representations. arXiv:1611.03530."
        url: https://arxiv.org/abs/1611.03530
      - citation: "Belkin, M., Hsu, D., Ma, S. & Mandal, S. (2019). Reconciling modern machine-learning practice and the classical bias–variance trade-off. Proceedings of the National Academy of Sciences 116(32): 15849–15854."
        url: null

open_problems:
  - id: slt-deep-generalisation
    name: Why do overparameterised networks generalise?
    status: open
    status_note: Open as of 2026; partial explanations exist for simplified models.
    description: >-
      Modern neural networks have far more adjustable parameters than training examples.
      They can fit random noise perfectly, yet trained on real data they predict new
      cases well. What property of the networks, the data or the training method
      explains this, and can it be turned into a guarantee?
    why_hard: >-
      Bounds based on the VC dimension or the number of parameters are vacuous for such
      networks, predicting error rates above 100%. The answer seems to depend on which of
      the many perfect fits the training algorithm happens to find, and on the structure
      of real data, and neither is easy to describe mathematically.
    unlocks: >-
      Guarantees for systems now used in medicine, science and transport, principled
      ways to design networks instead of trial and error, and an understanding of when
      they will fail.
    sources:
      - citation: "Belkin, M. (2021). Fit without fear: remarkable mathematical phenomena of deep learning through the prism of interpolation. Acta Numerica 30: 203–248."
        url: null
      - citation: "Zhang, C., Bengio, S., Hardt, M., Recht, B. & Vinyals, O. (2021). Understanding deep learning (still) requires rethinking generalization. Communications of the ACM 64(3): 107–115."
        url: null

applications:
  - area: Structural biology
    title: Predicting protein shapes
    description: >-
      AlphaFold 2, a deep network trained on the structures in the Protein Data Bank,
      predicted the shapes of proteins from their sequences with accuracy close to
      experiment in the 2020 CASP assessment, largely solving a fifty-year-old problem.
    domain: biology
    field_id: molecular-biology
    sources:
      - citation: "Jumper, J. et al. (2021). Highly accurate protein structure prediction with AlphaFold. Nature 596: 583–589."
        url: null
  - area: Condensed matter physics
    title: Learning phases of matter
    description: >-
      A neural network shown snapshots of a magnet model at different temperatures can
      learn to tell the ordered and disordered phases apart without being told what
      magnetisation is, and locates the critical temperature.
    domain: physics
    field_id: phase-transitions
    sources:
      - citation: "Carrasquilla, J. & Melko, R. G. (2017). Machine learning phases of matter. Nature Physics 13: 431–434."
        url: null
  - area: Pattern recognition
    title: Reading handwriting
    description: >-
      Convolutional neural networks trained by backpropagation read the handwritten
      amounts on bank cheques in the 1990s. The benchmark of handwritten digits built for
      that work became the standard first test of every new learning method.
    sources:
      - citation: "LeCun, Y., Bottou, L., Bengio, Y. & Haffner, P. (1998). Gradient-based learning applied to document recognition. Proceedings of the IEEE 86(11): 2278–2324."
        url: null

further_reading:
  - citation: "Shalev-Shwartz, S. & Ben-David, S. (2014). Understanding Machine Learning: From Theory to Algorithms. Cambridge University Press."
    url: null
    note: A rigorous introduction to PAC learning and the VC dimension.
  - citation: "Vapnik, V. N. (1995). The Nature of Statistical Learning Theory. Springer."
    url: null
    note: The theory explained by its founder, with little heavy mathematics.
  - citation: "Hastie, T., Tibshirani, R. & Friedman, J. (2009). The Elements of Statistical Learning (2nd ed.). Springer."
    url: null
    note: The standard reference on learning methods from a statistical point of view.
---

## Machines That Learn

In 1958 {{fig:frank-rosenblatt|Frank Rosenblatt}} announced the perceptron, a machine that learned to classify patterns by adjusting the weights on its inputs after each mistake. The press predicted machines that would walk, talk and be conscious. In 1969 {{fig:marvin-minsky|Marvin Minsky}} and {{fig:seymour-papert|Seymour Papert}} proved what a single perceptron cannot do. It cannot tell whether two inputs differ, because no single straight boundary separates the cases. Multi-layer networks might, but nobody knew how to train them. Interest in neural networks collapsed for more than a decade. In 1986 {{fig:david-rumelhart|David Rumelhart}}, {{fig:geoffrey-hinton|Geoffrey Hinton}} and Ronald Williams showed that backpropagation, sending the error backwards through the layers, trains them.

## The Mathematics of Generalisation

Meanwhile a theory of why learning works had been built in Moscow. Fitting examples is the problem of [statistical inference](/math/statistical-inference/), but with a twist: the learner chooses its rule from a huge family after seeing the data, so the usual error bars do not apply. In 1971 {{fig:vladimir-vapnik|Vladimir Vapnik}} and {{fig:alexey-chervonenkis|Alexey Chervonenkis}} found the condition under which training error is a reliable guide to future error for every rule in the family at once. It depends on one number, the largest set of points the family can label in all possible ways.

In 1984 {{fig:leslie-valiant|Leslie Valiant}}, a computer scientist at Harvard, asked a different question. Which concepts can be learned efficiently, with polynomially many examples and polynomial computation? His PAC model brought learning into [computational complexity](/math/computational-complexity/), and it turned out that some concepts are learnable from few examples yet impossible to learn efficiently if cryptography is secure. Five years later it was shown that the number of examples needed is set by the VC dimension, joining the two theories. At Bell Labs, Vapnik and {{fig:corinna-cortes|Corinna Cortes}} turned the theory into the support vector machine in 1995, and for a decade it outperformed neural networks on many tasks.

## A Closer Look: How Many Ways Can a Line Divide Points?

Take the simplest learner: it draws a straight line across the plane and labels points on one side "yes" and on the other "no". How flexible is this family?

Three points not on one line can be labelled in $2^3 = 8$ ways, and a line achieves every one of them. All three "yes", or all "no": put the line off to one side. One point different from the other two: a line cuts that corner of the triangle off. So lines shatter three points. Four points never. If the four form a convex quadrilateral, the labelling that gives "yes" to one pair of opposite corners and "no" to the other pair cannot be made by a line, because the two diagonals cross. If one point lies inside the triangle of the other three, labelling it differently from all three is impossible. So the VC dimension of lines in the plane is 3.

The payoff is in counting. With $n$ points there are $2^n$ labellings, but a family of VC dimension $d$ can produce at most $\binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{d}$ of them, a polynomial in $n$, not an exponential. For lines, the exact count for $n$ points in general position is $n(n-1) + 2$, a result of Thomas Cover's from 1965:

| Points $n$ | All labellings $2^n$ | Bound with $d = 3$ | Achieved by lines |
|---|---|---|---|
| 3 | 8 | 8 | 8 |
| 4 | 16 | 15 | 14 |
| 5 | 32 | 26 | 22 |
| 10 | 1,024 | 176 | 92 |

With ten points, lines can produce only 92 of the 1,024 labellings. If a line fits ten points labelled at random, that would be a coincidence, and so a line that fits real data is probably capturing a real pattern. Vapnik and Chervonenkis turned this into a guarantee: once the number of examples is large compared with $d$, training error and future error are close for every rule in the family. The same argument fails for a family that can fit every labelling. It can fit anything, so fitting proves nothing.

## The Deep Learning Puzzle

From 2012, deep neural networks trained by backpropagation on large data sets and fast hardware began to beat every other method at recognising images and speech, translating languages and, in 2020, predicting protein structures. They have millions or billions of parameters, far more than their training examples. In 2016 a team including Chiyuan Zhang showed that such networks can memorise pictures whose labels have been randomly shuffled, so by Vapnik's measure they can fit anything. Yet on real labels they generalise well. In 2019 Mikhail Belkin and colleagues showed that past the point of perfect fit, test error can fall a second time.

The classical theory is not wrong, but its bounds say nothing useful about these networks. Explanations under study involve the implicit preferences of the training algorithm, the margins and compressibility of the learned networks, links to [information theory](/math/information-theory/), and the structure of natural data. Why overparameterised networks generalise is the central open question of the field, and it matters, because such systems are now trusted with decisions far beyond recognising handwriting.
