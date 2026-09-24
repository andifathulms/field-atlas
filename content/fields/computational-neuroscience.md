---
id: computational-neuroscience
domain: biology
thread: brain
name: Computational Neuroscience
parent_ids:
  - systems-neuroscience
  - synaptic-transmission
era_emerged: 1943 – 1986
core_question: Can what the brain does be described as computation, and if so, what does it compute and how?

summary: |-
  Computational neuroscience uses mathematics and computer models to explain how nervous systems process information. It builds models at every scale, from the ion channels of a single neuron to networks of millions, and asks which computations they perform. It also asks the reverse question: given a task such as seeing or remembering, what must any system that performs it be doing?

  The field began in 1943, when McCulloch and Pitts showed that idealised neurons could compute any logical statement. Hebb proposed in 1949 that learning strengthens the synapses between neurons that fire together. The perceptron learned from examples, Marr set out the levels at which a brain can be explained, and Hopfield showed how memories could be stable states of a network. Artificial neural networks, which descend from these ideas, now power much of modern computing. Meanwhile complete wiring diagrams, first of a worm and in 2024 of a fly, give models a real circuit to explain.

key_ideas:
  - term: Threshold unit
    definition: >-
      A model neuron that adds up its weighted inputs and fires if the total reaches a
      threshold. Networks of such units can compute any logical function.
    turning_point_id: brain-mcculloch-pitts
  - term: Hebbian learning
    definition: >-
      The rule that a synapse strengthens when the cell before it repeatedly helps to fire
      the cell after it, often summarised as "cells that fire together wire together".
    turning_point_id: brain-hebb-rule
  - term: Learning from examples
    definition: >-
      Adjusting the weights of a network a little after each mistake, so that its
      responses to a set of training examples improve. Backpropagation does this for
      networks with many layers.
    turning_point_id: brain-perceptron
  - term: Levels of explanation
    definition: >-
      Marr's three levels: what problem a system solves and why, what representations and
      steps it uses, and how these are built in physical hardware.
    turning_point_id: brain-marr-levels
  - term: Connectome
    definition: >-
      A complete map of the neurons in a nervous system and the synapses between them.
    turning_point_id: brain-connectomes

turning_points:
  - id: brain-mcculloch-pitts
    date: "1943"
    type: SYNTHESIS
    title: The logical neuron
    description: >-
      The neurophysiologist Warren McCulloch and the young logician Walter Pitts treat each
      neuron as an all-or-none switch that fires when enough excitatory inputs arrive and no
      inhibitory one does. They show that networks of such units can compute any statement
      of logic, and with a memory tape could compute whatever a Turing machine can. The
      paper shaped von Neumann's design of the stored-program computer.
    contested: false
    sources:
      - citation: "McCulloch, W. S. & Pitts, W. (1943). A logical calculus of the ideas immanent in nervous activity. Bulletin of Mathematical Biophysics 5(4): 115–133."
        url: https://doi.org/10.1007/BF02478259

  - id: brain-hebb-rule
    date: "1949"
    type: SYNTHESIS
    title: Hebb's rule
    description: >-
      The psychologist Donald Hebb, in The Organization of Behavior, proposes that when one
      neuron repeatedly takes part in firing another, some change makes it more effective
      at doing so. Groups of neurons that are active together would bind into cell
      assemblies that stand for ideas. The rule was a guess, and long-term potentiation,
      found in 1973, was its first strong support.
    contested: false
    sources:
      - citation: "Hebb, D. O. (1949). The Organization of Behavior: A Neuropsychological Theory. Wiley."
        url: null

  - id: brain-perceptron
    date: 1958 – 1969
    type: TECHNIQUE-INVENTED
    title: The perceptron
    description: >-
      Frank Rosenblatt, at the Cornell Aeronautical Laboratory, describes the perceptron, a
      network of threshold units whose weights are adjusted after each error, and builds a
      machine that learns to tell simple shapes apart. In 1969 Marvin Minsky and Seymour
      Papert prove that a single layer of such units cannot compute some simple functions,
      such as whether a figure is connected, and research on neural networks waned for more
      than a decade.
    contested: true
    contested_note: >-
      How far Minsky and Papert's book caused the decline of neural network research is
      disputed. The usual story says it killed the field. Historians have argued that
      funding decisions, Rosenblatt's death in 1971 and the limits of the computers of the
      day mattered as much, and Minsky and Papert said their results were misread.
    sources:
      - citation: "Rosenblatt, F. (1958). The perceptron: a probabilistic model for information storage and organization in the brain. Psychological Review 65(6): 386–408."
        url: https://doi.org/10.1037/h0042519
      - citation: "Minsky, M. & Papert, S. (1969). Perceptrons: An Introduction to Computational Geometry. MIT Press."
        url: null
      - citation: "Olazaran, M. (1996). A sociological study of the official history of the perceptrons controversy. Social Studies of Science 26(3): 611–659."
        url: https://doi.org/10.1177/030631296026003005

  - id: brain-marr-levels
    date: 1969 – 1982
    type: SYNTHESIS
    title: Marr's levels
    description: >-
      David Marr publishes in 1969 a theory of how the cerebellum could learn movements,
      using the structure of its circuits. At MIT he then turns to vision and argues that a
      brain process must be understood at three levels: the problem it solves, the
      representations and steps that solve it, and the hardware that carries them out. His
      book Vision was published in 1982, two years after his death at 35.
    contested: false
    sources:
      - citation: "Marr, D. (1969). A theory of cerebellar cortex. Journal of Physiology 202(2): 437–470."
        url: https://doi.org/10.1113/jphysiol.1969.sp008820
      - citation: "Marr, D. (1982). Vision: A Computational Investigation into the Human Representation and Processing of Visual Information. W. H. Freeman."
        url: null

  - id: brain-hopfield-backprop
    date: 1982 – 1986
    type: SYNTHESIS
    title: Networks that remember and learn
    description: >-
      John Hopfield, a physicist, shows in 1982 that a network of symmetrically connected
      units has an energy that falls as the network settles. Stored memories are valleys of
      that energy, and a partial cue rolls down into the whole memory. In 1986 David
      Rumelhart, Geoffrey Hinton and Ronald Williams show that backpropagation of errors can
      train networks with hidden layers to learn useful internal representations. Hopfield
      and Hinton shared the 2024 Nobel prize in physics.
    contested: true
    contested_note: >-
      The method of backpropagation had been described earlier, by Seppo Linnainmaa in 1970
      for computing derivatives and by Paul Werbos in 1974 for training networks, and
      some researchers argue that credit has gone too much to the 1986 paper. Whether the
      2024 prize was rightly a physics prize was also debated.
    sources:
      - citation: "Hopfield, J. J. (1982). Neural networks and physical systems with emergent collective computational abilities. Proceedings of the National Academy of Sciences 79(8): 2554–2558."
        url: https://doi.org/10.1073/pnas.79.8.2554
      - citation: "Rumelhart, D. E., Hinton, G. E. & Williams, R. J. (1986). Learning representations by back-propagating errors. Nature 323(6088): 533–536."
        url: https://doi.org/10.1038/323533a0

  - id: brain-connectomes
    date: 1986 – 2024
    type: TECHNIQUE-INVENTED
    title: Complete wiring diagrams
    description: >-
      John White, Sydney Brenner and colleagues trace every neuron and synapse of the
      nematode worm C. elegans through thousands of electron micrographs, after more than a
      decade of work: 302 neurons and about 7,000 connections. In 2024 the FlyWire
      consortium, combining machine learning with human proofreaders, publishes the wiring
      diagram of a whole adult fruit fly brain, about 140,000 neurons and 50 million
      synapses.
    contested: false
    sources:
      - citation: "White, J. G., Southgate, E., Thomson, J. N. & Brenner, S. (1986). The structure of the nervous system of the nematode Caenorhabditis elegans. Philosophical Transactions of the Royal Society of London B 314(1165): 1–340."
        url: https://doi.org/10.1098/rstb.1986.0056
      - citation: "Dorkenwald, S. et al. (2024). Neuronal wiring diagram of an adult brain. Nature 634(8032): 124–138."
        url: https://doi.org/10.1038/s41586-024-07558-y

open_problems:
  - id: brain-credit-assignment
    name: How does the brain learn?
    status: open
    status_note: Open as of writing; several biologically plausible learning rules have been proposed, none established.
    description: >-
      Artificial networks learn by backpropagation, which sends precise error signals
      backwards through every layer. Real neurons do not seem able to do this. Yet the brain
      learns, somehow working out which of its trillions of synapses to change after a
      mistake. This is the credit assignment problem. Does the brain approximate
      backpropagation, or use a different principle altogether?
    why_hard: >-
      Learning rules act at synapses too small and numerous to watch in large numbers over
      the days a skill takes to learn. Several candidate rules can train model networks
      equally well, so success at a task does not show which one the brain uses.
    unlocks: >-
      A theory of learning that links synapses to behaviour, and possibly artificial
      systems that learn from far less data and energy than today's.
    sources:
      - citation: "Lillicrap, T. P., Santoro, A., Marris, L., Akerman, C. J. & Hinton, G. (2020). Backpropagation and the brain. Nature Reviews Neuroscience 21(6): 335–346."
        url: https://doi.org/10.1038/s41583-020-0277-3

applications:
  - area: Mathematics
    title: Finite automata and regular expressions
    description: >-
      Stephen Kleene asked exactly which patterns of input a McCulloch–Pitts network can
      recognise. His answer, the regular events, defined what are now called regular
      expressions and the theory of finite automata, the simplest machines of computation
      theory and the basis of text search in every computer.
    domain: math
    field_id: computability-theory
    sources:
      - citation: "Kleene, S. C. (1956). Representation of events in nerve nets and finite automata. In Shannon, C. E. & McCarthy, J. (eds.), Automata Studies, pp. 3–41. Princeton University Press."
        url: null
  - area: Computing
    title: Deep learning
    description: >-
      Networks of simple units with many layers, trained by backpropagation on large data
      sets, now recognise speech and images and generate text. They descend directly from
      the perceptron and the connectionist models of the 1980s.
    sources:
      - citation: "LeCun, Y., Bengio, Y. & Hinton, G. (2015). Deep learning. Nature 521(7553): 436–444."
        url: https://doi.org/10.1038/nature14539
  - area: Engineering
    title: Neuromorphic chips
    description: >-
      Carver Mead proposed in the late 1980s building chips whose circuits work like
      neurons, with analogue signals and spikes. Such chips can run neural networks on a
      small fraction of the power of ordinary processors.
    sources:
      - citation: "Mead, C. (1990). Neuromorphic electronic systems. Proceedings of the IEEE 78(10): 1629–1636."
        url: https://doi.org/10.1109/5.58356

further_reading:
  - citation: "Cobb, M. (2020). The Idea of the Brain: The Past and Future of Neuroscience. Profile Books."
    url: null
    note: A history of how each era has pictured the brain, from hydraulics to computers.
  - citation: "Dayan, P. & Abbott, L. F. (2001). Theoretical Neuroscience: Computational and Mathematical Modeling of Neural Systems. MIT Press."
    url: null
    note: The standard graduate textbook of the field.
  - citation: "Marr, D. (1982). Vision. W. H. Freeman."
    url: null
    note: A founding book, still read for its first chapter on levels of explanation.
---

## Neurons as Logic

In 1943 the idea that the brain computes was put in precise form. {{fig:warren-mcculloch|Warren McCulloch}}, a neurophysiologist in Chicago, and {{fig:walter-pitts|Walter Pitts}}, a largely self-taught teenage logician, took the all-or-none impulse of [electrophysiology](/biology/electrophysiology/) and the excitatory and inhibitory synapses of Sherrington, and stripped them to essentials. A model neuron adds its inputs and fires if the sum reaches a threshold. They proved that networks of such units can compute any statement of logic, and, given a tape for memory, anything a Turing machine can. John von Neumann borrowed their notation when he described the design of the stored-program computer in 1945.

In 1949 the Canadian psychologist {{fig:donald-hebb|Donald Hebb}} proposed how such networks could learn. When one neuron repeatedly helps to fire another, the connection between them grows stronger. Groups of neurons that are often active together would bind into assemblies that stand for things and ideas. It was a guess, and a quarter of a century passed before long-term potentiation, found by the students of [synaptic transmission](/biology/synaptic-transmission/), gave it strong support.

## Machines That Learn

In 1958 {{fig:frank-rosenblatt|Frank Rosenblatt}} described the perceptron, a network of threshold units with a rule for learning. After each wrong answer, the weights of the active inputs are nudged towards the right answer. He proved that if some setting of the weights solves a classification, the rule will find it, and built a machine, wired to a camera of 400 light sensors, that learned to tell simple shapes apart. Newspapers promised machines that would soon walk, talk and think.

In 1969 {{fig:marvin-minsky|Marvin Minsky}} and {{fig:seymour-papert|Seymour Papert}} published Perceptrons, which proved that a single layer of trainable units cannot compute some simple functions. Multilayer networks could, but nobody knew how to train them. Rosenblatt died in 1971, and research on neural networks waned.

Meanwhile {{fig:david-marr|David Marr}} in Cambridge and then at MIT built theories tied to real circuits, first of the cerebellum and then of vision. His lasting contribution was a way of thinking. A process in the brain must be understood at three levels: what problem it solves, what representation and procedure solve it, and how the hardware carries that out. Knowing every neuron is not enough without the first level.

## A Closer Look: Logic from Thresholds

A McCulloch–Pitts unit, in the simplified form usually taught today, takes inputs $x_1, x_2, \ldots$ that are each 0 or 1, multiplies each by a weight $w_i$, and fires, giving output 1, if

$$
w_1 x_1 + w_2 x_2 + \cdots \geq \theta ,
$$

where $\theta$ is its threshold. With two inputs of weight 1, a threshold of 2 makes an AND gate, since both inputs must be active. A threshold of 1 makes an OR gate. A single input of weight $-1$ with threshold 0 makes a NOT gate: it fires when the input is 0, because $0 \geq 0$, and is silent when it is 1, because $-1 < 0$.

| $x_1$ | $x_2$ | AND ($\theta = 2$) | OR ($\theta = 1$) | XOR |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 |

The last column, exclusive or, fires when exactly one input is active. No single unit can compute it. The unit must be silent for input $(0,0)$, so $0 < \theta$. It must fire for $(1,0)$ and $(0,1)$, so $w_1 \geq \theta$ and $w_2 \geq \theta$. Adding these gives $w_1 + w_2 \geq 2\theta$, which is greater than $\theta$ because $\theta$ is positive. So the unit would also fire for $(1,1)$, which is wrong. A computer search over every integer weight and threshold from $-5$ to $5$ finds none that works, as the argument says it must.

Two layers solve it. Feed $x_1$ and $x_2$ to an OR unit and an AND unit, then feed those to a third unit with weights $+1$ from OR and $-2$ from AND, and threshold 1. For $(1,0)$ the third unit receives $1 - 0 = 1$ and fires. For $(1,1)$ it receives $1 - 2 = -1$ and stays silent. This is the whole of Minsky and Papert's objection and its answer in miniature: one layer cannot, two layers can, and the difficulty was finding the weights of the hidden layer by learning rather than by hand.

## Energy, Errors and Wiring

In 1982 {{fig:john-hopfield|John Hopfield}}, a physicist, gave a network of symmetrically connected units an energy that can only fall as the units update. Memories stored by a Hebbian rule become valleys in this energy, and a network started from a fragment slides into the nearest whole memory, the same mathematics as a magnet in [statistical mechanics](/physics/statistical-mechanics/). A network of 1,000 units can hold about 138 random memories before they blur together. In 1986 {{fig:david-rumelhart|David Rumelhart}}, {{fig:geoffrey-hinton|Geoffrey Hinton}} and Ronald Williams showed that backpropagation, passing errors backwards through the layers, trains the hidden units that Minsky and Papert had found lacking. Deep learning grew from this.

Models also needed real circuits. In 1986 John White and {{fig:sydney-brenner|Sydney Brenner}} published the complete wiring of the worm C. elegans, and in 2024 the FlyWire consortium mapped all 140,000 neurons of a fruit fly's brain. Even with the worm's wiring known for decades, its behaviour cannot yet be predicted from it, because the diagram does not say how strong each synapse is or what signals it uses. How the brain itself solves the problem that backpropagation solves for machines, deciding which synapses to change after a mistake, is still unknown.
