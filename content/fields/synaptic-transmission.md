---
id: synaptic-transmission
domain: biology
thread: brain
name: Synaptic Transmission
parent_ids:
  - electrophysiology
  - biochemistry
era_emerged: 1904 – 1973
core_question: How does one nerve cell pass its signal to the next, and how does that connection change with experience?

summary: |-
  Synaptic transmission is the passing of a signal from a neuron to another cell across a synapse. At most synapses the arriving impulse makes the nerve ending release a chemical, a neurotransmitter, which crosses a gap about twenty nanometres wide and binds to receptor proteins on the far side. The receptors open channels or start chemical signals that excite or inhibit the receiving cell. A human brain has around a hundred trillion synapses, and nearly every drug that acts on the mind works at them.

  Whether synapses work by chemistry or by electricity was argued for thirty years, in a dispute nicknamed the soups and the sparks. Loewi's frog hearts of 1921 showed that nerves can release chemicals. Katz found that the chemical is released in packets of fixed size, and Eccles, the leading champion of sparks, was converted by his own recordings. From the 1970s Kandel and others showed that synapses change their strength with use, and that these changes are a basis of learning and memory.

key_ideas:
  - term: Neurotransmitter
    definition: >-
      A chemical released by a nerve ending that carries the signal across the synapse.
      Acetylcholine, glutamate, GABA, dopamine and serotonin are among the most important.
    turning_point_id: loewi-vagusstoff
  - term: Quantal release
    definition: >-
      Transmitter is released in packets of fixed size, each the contents of one small
      membrane sac, a synaptic vesicle. A signal is a whole number of packets.
    turning_point_id: katz-quantal-release
  - term: Excitation and inhibition
    definition: >-
      Some synapses push the receiving cell towards firing, others hold it back. Inhibitory
      synapses make the inside more negative.
    turning_point_id: soups-and-sparks
  - term: Receptor
    definition: >-
      A protein on the receiving cell that binds a particular transmitter and responds,
      often by opening an ion channel built into the protein itself.
    turning_point_id: nicotinic-receptor-isolated
  - term: Synaptic plasticity
    definition: >-
      The strengthening or weakening of synapses by use. Long-term potentiation, a lasting
      increase in strength after intense activity, is the best-studied form.
    turning_point_id: synaptic-plasticity-memory

turning_points:
  - id: loewi-vagusstoff
    date: "1921"
    type: DISCOVERY
    title: Loewi's two frog hearts
    description: >-
      Otto Loewi stimulates the vagus nerve of a frog's heart, which slows its beat, and
      transfers the fluid bathing it to a second heart with no nerve attached. The second
      heart slows too. The nerve had released a chemical, which Loewi called Vagusstoff.
      It proved to be acetylcholine, and Henry Dale's group showed the same substance acts
      at the junction of nerve and muscle. Loewi and Dale shared the 1936 Nobel prize.
    contested: false
    sources:
      - citation: "Loewi, O. (1921). Über humorale Übertragbarkeit der Herznervenwirkung. Pflügers Archiv für die gesamte Physiologie 189(1): 239–242."
        url: https://doi.org/10.1007/BF01738910
      - citation: "Dale, H. H., Feldberg, W. & Vogt, M. (1936). Release of acetylcholine at voluntary motor nerve endings. Journal of Physiology 86(4): 353–380."
        url: https://doi.org/10.1113/jphysiol.1936.sp003371

  - id: soups-and-sparks
    date: 1935 – 1952
    type: CONSENSUS-OVERTURNED
    title: The soups and the sparks
    description: >-
      Chemical transmission was accepted at slow junctions, but many physiologists, led by
      John Eccles, held that fast synapses in the brain and spinal cord must be electrical,
      because chemicals seemed too slow. In 1951 in Dunedin, Eccles and his colleagues
      record from inside spinal motor neurons of cats and find that inhibition makes the
      inside more negative, which no electrical theory of the time could explain. Eccles
      accepted chemical transmission. Electrical synapses were found in crayfish in 1957,
      but they are the exception.
    contested: false
    sources:
      - citation: "Brock, L. G., Coombs, J. S. & Eccles, J. C. (1952). The recording of potentials from motoneurones with an intracellular electrode. Journal of Physiology 117(4): 431–460."
        url: https://doi.org/10.1113/jphysiol.1952.sp004759
      - citation: "Valenstein, E. S. (2005). The War of the Soups and the Sparks. Columbia University Press."
        url: null

  - id: katz-quantal-release
    date: 1952 – 1954
    type: DISCOVERY
    title: Transmitter comes in packets
    description: >-
      Paul Fatt and Bernard Katz, at University College London, find small spontaneous
      voltage blips at the frog's nerve–muscle junction, each about half a millivolt. With
      José del Castillo, Katz shows in 1954 that the response to a nerve impulse is built
      from whole numbers of these units, following the statistics of chance. Electron
      microscopists were at the same time finding small vesicles packed in nerve endings,
      the packets themselves. Katz shared the 1970 Nobel prize.
    contested: false
    sources:
      - citation: "Fatt, P. & Katz, B. (1952). Spontaneous subthreshold activity at motor nerve endings. Journal of Physiology 117(1): 109–128."
        url: https://doi.org/10.1113/jphysiol.1952.sp004735
      - citation: "del Castillo, J. & Katz, B. (1954). Quantal components of the end-plate potential. Journal of Physiology 124(3): 560–573."
        url: https://doi.org/10.1113/jphysiol.1954.sp005129

  - id: carlsson-dopamine
    date: 1957 – 1960
    type: DISCOVERY
    title: Dopamine is a transmitter
    description: >-
      Arvid Carlsson finds that rabbits given the drug reserpine, which empties nerve
      endings of their transmitters, become immobile, and that L-DOPA, the chemical
      precursor of dopamine, revives them. He shows that dopamine is concentrated in the
      basal ganglia, which control movement. Oleh Hornykiewicz finds in 1960 that the brains
      of people who died with Parkinson's disease have lost most of their dopamine there.
      L-DOPA became the standard treatment.
    contested: true
    contested_note: >-
      Carlsson shared the 2000 Nobel prize with Paul Greengard and Eric Kandel. Hornykiewicz,
      whose finding in human brains linked dopamine to Parkinson's disease and led to the
      treatment, was not included, and more than two hundred neuroscientists signed a
      letter protesting the omission.
    sources:
      - citation: "Carlsson, A., Lindqvist, M. & Magnusson, T. (1957). 3,4-Dihydroxyphenylalanine and 5-hydroxytryptophan as reserpine antagonists. Nature 180(4596): 1200."
        url: https://doi.org/10.1038/1801200a0
      - citation: "Ehringer, H. & Hornykiewicz, O. (1960). Verteilung von Noradrenalin und Dopamin (3-Hydroxytyramin) im Gehirn des Menschen und ihr Verhalten bei Erkrankungen des extrapyramidalen Systems. Klinische Wochenschrift 38(24): 1236–1239."
        url: https://doi.org/10.1007/BF01485901

  - id: nicotinic-receptor-isolated
    date: "1970"
    type: DISCOVERY
    title: A receptor is isolated
    description: >-
      The idea of a "receptive substance" on the muscle goes back to John Langley in 1905,
      but no one had held one. Jean-Pierre Changeux and colleagues use a snake venom toxin,
      which binds the acetylcholine receptor tightly, to label the receptor in the electric
      organ of an eel and extract it. It was a protein. Later work showed that it is itself an ion
      channel, opened by acetylcholine, the model for a large family of receptors.
    contested: false
    sources:
      - citation: "Changeux, J.-P., Kasai, M. & Lee, C. Y. (1970). Use of a snake venom toxin to characterize the cholinergic receptor protein. Proceedings of the National Academy of Sciences 67(3): 1241–1247."
        url: https://doi.org/10.1073/pnas.67.3.1241

  - id: synaptic-plasticity-memory
    date: 1970 – 1973
    type: DISCOVERY
    title: Synapses that learn
    description: >-
      Eric Kandel studies the sea slug Aplysia, whose few large neurons can be identified
      one by one. In 1970 his group shows that when the slug's gill-withdrawal reflex
      weakens with repetition, the synapse between sensory and motor neuron weakens too.
      In 1973 Tim Bliss and Terje Lømo find that brief intense stimulation of a pathway in
      the rabbit hippocampus strengthens its synapses for hours or longer. Learning could
      be seen as a change in synaptic strength.
    contested: false
    sources:
      - citation: "Castellucci, V., Pinsker, H., Kupfermann, I. & Kandel, E. R. (1970). Neuronal mechanisms of habituation and dishabituation of the gill-withdrawal reflex in Aplysia. Science 167(3926): 1745–1748."
        url: https://doi.org/10.1126/science.167.3926.1745
      - citation: "Bliss, T. V. P. & Lømo, T. (1973). Long-lasting potentiation of synaptic transmission in the dentate area of the anaesthetized rabbit following stimulation of the perforant path. Journal of Physiology 232(2): 331–356."
        url: https://doi.org/10.1113/jphysiol.1973.sp010273

open_problems:
  - id: brain-memory-engram
    name: Where and how is a memory stored?
    status: open
    status_note: Open as of writing; memory traces can be tagged in mice, but how they last for decades is unknown.
    description: >-
      A memory must leave a physical trace, which Richard Semon called an engram in 1904.
      The leading idea is that it is stored as a pattern of changed synaptic strengths
      across a group of neurons. Since 2012, neurons active during learning have been
      tagged in mice and later reactivated with light to recall the memory. What exactly is
      stored, and how it survives while the molecules of every synapse are replaced many
      times over, is not known.
    why_hard: >-
      A single memory is spread across many neurons in several brain regions and is
      reorganised over time. The synapses involved cannot be watched for years in a living
      brain, and the proteins that make them up turn over in days, so the trace must be
      actively maintained.
    unlocks: >-
      Treatments for memory loss and for memories that harm, such as those of
      post-traumatic stress, and a physical account of how experience is kept.
    sources:
      - citation: "Martin, S. J., Grimwood, P. D. & Morris, R. G. M. (2000). Synaptic plasticity and memory: an evaluation of the hypothesis. Annual Review of Neuroscience 23: 649–711."
        url: https://doi.org/10.1146/annurev.neuro.23.1.649
      - citation: "Josselyn, S. A. & Tonegawa, S. (2020). Memory engrams: recalling the past and imagining the future. Science 367(6473): eaaw4325."
        url: https://doi.org/10.1126/science.aaw4325

applications:
  - area: Medicine
    title: L-DOPA for Parkinson's disease
    description: >-
      Parkinson's disease kills the neurons that supply dopamine to the basal ganglia.
      Giving L-DOPA, which the surviving cells turn into dopamine, restored movement to
      patients who could barely walk, and high oral doses became the standard treatment in
      the late 1960s.
    sources:
      - citation: "Cotzias, G. C., Van Woert, M. H. & Schiffer, L. M. (1967). Aromatic amino acids and modification of parkinsonism. New England Journal of Medicine 276(7): 374–379."
        url: https://doi.org/10.1056/NEJM196702162760703
  - area: Psychiatry
    title: Drugs that act at synapses
    description: >-
      Most drugs for depression, anxiety and psychosis act on transmitters and their
      receptors. Fluoxetine (Prozac) was designed to block the reuptake of serotonin, so it
      lingers longer in the synapse. Why such drugs help some patients and not others is
      still poorly understood.
    sources:
      - citation: "Wong, D. T., Perry, K. W. & Bymaster, F. P. (2005). The discovery of fluoxetine hydrochloride (Prozac). Nature Reviews Drug Discovery 4(9): 764–774."
        url: https://doi.org/10.1038/nrd1821

further_reading:
  - citation: "Valenstein, E. S. (2005). The War of the Soups and the Sparks. Columbia University Press."
    url: null
    note: A readable history of the argument over chemical and electrical transmission.
  - citation: "Katz, B. (1966). Nerve, Muscle, and Synapse. McGraw-Hill."
    url: null
    note: A short classic textbook by the discoverer of quantal release.
  - citation: "Kandel, E. R. (2006). In Search of Memory: The Emergence of a New Science of Mind. W. W. Norton."
    url: null
    note: Kandel's memoir and account of the biology of memory.
---

## Soups

[Neuroanatomy](/biology/neuroanatomy/) had shown that neurons are separate cells, and [electrophysiology](/biology/electrophysiology/) that they signal with electrical pulses. How did a pulse cross the gap? In 1904 Thomas Elliott, a Cambridge student, noticed that adrenaline mimics the effects of certain nerves and suggested that the nerves might release it. Few followed up.

The decisive experiment, by his own account, came to {{fig:otto-loewi|Otto Loewi}} in a dream on the night before Easter Sunday 1921. He woke, scribbled a note, and in the morning could not read it. The next night the dream returned, and he went straight to his laboratory in Graz. He stimulated the vagus nerve of a frog's heart, which slowed it, then moved the fluid bathing that heart to a second heart. The second heart slowed as well. The nerve had released a substance. It proved to be acetylcholine, and in 1936 {{fig:henry-dale|Henry Dale}} in London showed that it also carries the signal from nerve to skeletal muscle. Loewi and Dale shared the Nobel prize that year. Two years later Loewi, who was Jewish, was arrested after the Nazi annexation of Austria and released only after handing over his prize money.

## And Sparks

The fastest synapses act within a millisecond, and many physiologists doubted that chemistry could be so quick. The ablest of them, {{fig:john-eccles|John Eccles}}, argued through the 1940s that synapses in the brain and spinal cord are electrical. In Dunedin the philosopher Karl Popper encouraged him to state his theory so that an experiment could refute it. In 1951 Eccles and his colleagues pushed fine glass electrodes inside motor neurons in the spinal cord of cats. Inhibitory signals made the inside more negative, which his electrical theory could not produce. Eccles announced that he had been wrong and became one of the chief investigators of chemical synapses. He shared the 1963 Nobel prize with Hodgkin and Huxley.

Sparks were not wholly extinguished. In 1957 Edwin Furshpan and David Potter found an electrical synapse in the crayfish, where current passes directly through channels joining two cells. Such synapses exist in mammals too, but chemical synapses are the rule.

## Packets

At University College London, {{fig:bernard-katz|Bernard Katz}}, a refugee from Leipzig, studied the junction between nerve and muscle in frogs. In 1952 he and Paul Fatt saw that even when the nerve was silent, the muscle showed small random blips of about half a millivolt. With José del Castillo he lowered the calcium in the bathing fluid so that each nerve impulse released only a little transmitter. The responses then jumped in steps the size of a blip. Transmitter was released in fixed packets, and at the same time electron microscopists were seeing nerve endings crammed with tiny vesicles, each about 50 nanometres across, which proved to be the packets.

Acetylcholine was soon joined by others. {{fig:arvid-carlsson|Arvid Carlsson}} showed in 1957 and 1958 that dopamine is a transmitter in its own right, concentrated in the basal ganglia, and {{fig:oleh-hornykiewicz|Oleh Hornykiewicz}} found it depleted in Parkinson's disease. Glutamate turned out to be the main excitatory transmitter of the brain and GABA the main inhibitory one. In 1970 {{fig:jean-pierre-changeux|Jean-Pierre Changeux}} used a snake toxin to extract the acetylcholine receptor, among the first receptors to be isolated. It was a protein with a channel through its middle, and the chemistry of [biochemistry](/biology/biochemistry/) had reached the synapse.

## A Closer Look: Counting Packets

If transmitter comes in packets, the response to each impulse should be a whole number of units, and the number should vary by chance. Katz's model was that a nerve ending holds many packets, each released with a small probability. The number released per impulse then follows a Poisson distribution with mean $m$, the quantal content:

$$
P(k) = e^{-m} \frac{m^k}{k!} .
$$

This makes a prediction that can be checked two ways. Take an illustrative low-calcium experiment with 400 impulses. Spontaneous blips average 0.40 mV, and responses to impulses average 0.92 mV. Dividing gives

$$
m = \frac{0.92}{0.40} = 2.3 \text{ packets per impulse} .
$$

The Poisson formula then predicts how often an impulse releases nothing at all, $e^{-2.3} = 0.10$, or about 40 failures in 400. Counting the failures directly gives a second, independent estimate, $m = \ln(400/40) = 2.30$. Del Castillo and Katz found that the two estimates agreed in their experiments. The whole distribution can be predicted too:

| Packets released | Expected impulses (of 400) | Response size |
|---|---|---|
| 0 | 40.1 | 0 mV |
| 1 | 92.2 | 0.4 mV |
| 2 | 106.1 | 0.8 mV |
| 3 | 81.3 | 1.2 mV |
| 4 | 46.8 | 1.6 mV |
| 5 | 21.5 | 2.0 mV |
| 6 | 8.2 | 2.4 mV |
| 7 or more | 3.7 | 2.8 mV and up |

A histogram of measured responses showed peaks at multiples of 0.4 mV, in roughly these proportions. In normal calcium the same junction releases a hundred packets or more per impulse, and the chance of a failure is about $e^{-100}$, which is effectively zero. That is why a nerve impulse reliably makes a muscle contract, while many synapses in the brain, which release only a few packets, fail often and by design.

## Synapses That Learn

A synapse is not a fixed wire. {{fig:eric-kandel|Eric Kandel}} chose the sea slug Aplysia because its neurons are few and large, and showed in 1970 that when the slug learns to ignore a harmless touch, the synapse from sensory to motor neuron weakens. Later he found that lasting memories need new proteins and changes in which genes are active. In 1973 {{fig:tim-bliss|Tim Bliss}} and {{fig:terje-lomo|Terje Lømo}} found that a brief burst of stimulation strengthens synapses in the rabbit hippocampus for hours, and later work showed it can last for weeks. This long-term potentiation became the leading model of how memories are laid down. Carlsson, Paul Greengard and Kandel shared the 2000 Nobel prize.

The rule that a synapse strengthens when the cells on both sides are active together had been guessed in 1949 by Donald Hebb, and it became a founding idea of [computational neuroscience](/biology/computational-neuroscience/). Where a particular memory resides, and how it lasts a lifetime when every molecule of a synapse is replaced within weeks, is still not known.
