---
id: electrophysiology
domain: biology
thread: brain
name: Electrophysiology
parent_ids:
  - neuroanatomy
era_emerged: 1791 – 1952
core_question: What is a nerve impulse, and how does a nerve cell make and carry it?

summary: |-
  Electrophysiology studies the electrical activity of living cells, above all of nerve and muscle. A neuron keeps its inside about 70 thousandths of a volt negative relative to the outside. When stimulated enough, it fires an action potential: a brief pulse, lasting about a millisecond, in which the voltage swings positive and back. The pulse travels along the axon without fading and is the basic unit of signalling in every nervous system.

  The story began with Galvani's twitching frog legs in the 1780s and a quarrel with Volta over whether the electricity came from the animal or the metals. Nineteenth-century physiologists detected the electrical wave that runs along a nerve and measured its speed. In the twentieth century Adrian showed that impulses are all the same size, and Hodgkin and Huxley explained, with equations that predicted the pulse's shape and speed, how it is made by sodium and potassium ions flowing through the membrane. The patch clamp later recorded the current through a single protein channel.

key_ideas:
  - term: Resting potential
    definition: >-
      The steady voltage across a nerve cell's membrane at rest, typically 60 to 70
      millivolts negative inside. It exists because the membrane lets potassium ions leak
      out more easily than other ions.
    turning_point_id: hodgkin-huxley-model
  - term: Action potential
    definition: >-
      A brief, self-renewing pulse of voltage that travels along an axon. Sodium ions rush
      in and drive the voltage positive, then potassium ions flow out and restore it.
    turning_point_id: hodgkin-huxley-model
  - term: All-or-none
    definition: >-
      A nerve fibre either fires a full-sized impulse or none at all. Stronger stimuli
      produce more impulses per second, not bigger ones.
    turning_point_id: adrian-all-or-none
  - term: Conduction velocity
    definition: >-
      The speed at which impulses travel along a nerve, from about one to over a hundred
      metres per second depending on the fibre's thickness and insulation.
    turning_point_id: helmholtz-nerve-speed
  - term: Ion channel
    definition: >-
      A protein that forms a pore through the membrane and opens or closes to let
      particular ions through. Each channel passes a current of a few trillionths of an
      ampere.
    turning_point_id: neher-sakmann-patch-clamp

turning_points:
  - id: galvani-animal-electricity
    date: "1791"
    type: DISCOVERY
    title: Galvani's frog legs
    description: >-
      In Bologna, Luigi Galvani finds that the legs of a dissected frog twitch when a nerve
      and muscle are joined by an arc of metal, or when a spark is drawn from a nearby
      machine. He concludes that animals generate their own electricity, which flows from
      nerve to muscle. Alessandro Volta replies that the electricity comes from the contact
      of two different metals, and in 1800 builds the first battery to prove it.
    contested: true
    contested_note: >-
      Galvani and Volta each held part of the truth. Volta was right that two dissimilar
      metals generate a current, and his battery was the lasting result. Galvani later made
      frog muscles contract with no metal at all, and nerves do carry electrical signals.
      How to apportion credit, and whether the dispute delayed electrophysiology, is still
      discussed by historians.
    sources:
      - citation: "Pera, M. (1992). The Ambiguous Frog: The Galvani–Volta Controversy on Animal Electricity. Princeton University Press."
        url: null
      - citation: "Piccolino, M. (1998). Animal electricity and the birth of electrophysiology: the legacy of Luigi Galvani. Brain Research Bulletin 46(5): 381–407."
        url: null

  - id: du-bois-reymond-action-current
    date: 1843 – 1849
    type: DISCOVERY
    title: The electrical wave in a nerve
    description: >-
      Emil du Bois-Reymond, in Berlin, builds galvanometers sensitive enough to detect the
      tiny currents of living tissue. He finds that when a nerve is stimulated, its resting
      current briefly drops, a "negative variation" that travels along the nerve with the
      impulse. It was the first detection of what is now called the action potential. His
      results were published in a long treatise from 1848.
    contested: false
    sources:
      - citation: "du Bois-Reymond, E. (1848–1884). Untersuchungen über thierische Elektricität. Reimer, Berlin."
        url: null
      - citation: "Finkelstein, G. (2013). Emil du Bois-Reymond: Neuroscience, Self, and Society in Nineteenth-Century Germany. MIT Press."
        url: null

  - id: helmholtz-nerve-speed
    date: 1849 – 1850
    type: DISCOVERY
    title: Helmholtz times the nerve impulse
    description: >-
      Johannes Müller had doubted that the speed of nerve signals could ever be measured.
      His student Hermann von Helmholtz stimulates a frog's nerve at two points at
      different distances from the muscle and times the delay in the twitch. The impulse
      travels at only about 30 metres per second, slower than sound in air. Thought and
      movement take measurable time, and the nerve signal could not be simple electricity
      flowing through a wire.
    contested: false
    sources:
      - citation: "Schmidgen, H. (2014). The Helmholtz Curves: Tracing Lost Time. Fordham University Press."
        url: null

  - id: adrian-all-or-none
    date: 1912 – 1928
    type: DISCOVERY
    title: Adrian records single nerve fibres
    description: >-
      Keith Lucas and Edgar Adrian at Cambridge show that a nerve fibre responds to a
      stimulus with a full impulse or none. With valve amplifiers, Adrian and Yngve
      Zotterman record in 1926 from a single sensory fibre of a frog muscle. Every impulse
      has the same size, and a stronger stretch produces impulses more often. The nervous
      system signals intensity by the rate of firing. Adrian shared the 1932 Nobel prize
      with Sherrington.
    contested: false
    sources:
      - citation: "Adrian, E. D. & Zotterman, Y. (1926). The impulses produced by sensory nerve endings. Part 2. The response of a single end-organ. Journal of Physiology 61(2): 151–171."
        url: null
      - citation: "Adrian, E. D. (1928). The Basis of Sensation. Christophers, London."
        url: null

  - id: hodgkin-huxley-model
    date: 1939 – 1952
    type: SYNTHESIS
    title: Hodgkin and Huxley explain the action potential
    description: >-
      Using the giant axon of the squid, up to a millimetre thick, Alan Hodgkin and Andrew
      Huxley push a fine wire inside a nerve fibre in 1939 and find that the voltage during
      an impulse overshoots zero. After the war, with the voltage clamp, they measure the
      separate sodium and potassium currents. In 1952 they write four equations that
      reproduce the shape of the action potential and predict its speed within about 10%.
      They shared the 1963 Nobel prize with John Eccles.
    contested: false
    sources:
      - citation: "Hodgkin, A. L. & Huxley, A. F. (1939). Action potentials recorded from inside a nerve fibre. Nature 144: 710–711."
        url: null
      - citation: "Hodgkin, A. L. & Huxley, A. F. (1952). A quantitative description of membrane current and its application to conduction and excitation in nerve. Journal of Physiology 117(4): 500–544."
        url: null

  - id: neher-sakmann-patch-clamp
    date: 1976 – 1981
    type: TECHNIQUE-INVENTED
    title: The patch clamp
    description: >-
      Hodgkin and Huxley's currents were the sum of thousands of unseen pores. Erwin Neher
      and Bert Sakmann press a fine glass pipette against the membrane of a frog muscle
      cell, isolate a tiny patch, and in 1976 record the current through single ion
      channels opening and closing, a few trillionths of an ampere each. A tighter seal,
      found in 1980, made the method routine. They shared the 1991 Nobel prize.
    contested: false
    sources:
      - citation: "Neher, E. & Sakmann, B. (1976). Single-channel currents recorded from membrane of denervated frog muscle fibres. Nature 260: 799–802."
        url: null
      - citation: "Hamill, O. P., Marty, A., Neher, E., Sakmann, B. & Sigworth, F. J. (1981). Improved patch-clamp techniques for high-resolution current recording from cells and cell-free membrane patches. Pflügers Archiv 391(2): 85–100."
        url: null

open_problems:
  - id: brain-neuron-homeostasis
    name: How do neurons keep their electrical character?
    status: open
    status_note: Open as of writing; the rules of homeostatic regulation are only partly known.
    description: >-
      A neuron's firing pattern depends on the numbers of a dozen or more kinds of ion
      channel in its membrane. The channel proteins are replaced every few days or weeks,
      yet the neuron keeps firing the same way for a lifetime. Studies of small crab
      circuits have found that the same behaviour can arise from very different mixtures
      of channels. How does each neuron sense its own activity and adjust its channels to
      stay on target?
    why_hard: >-
      Many combinations of channel numbers give the same output, so measuring one neuron
      does not reveal the rule it follows. The regulation acts over hours to days and
      involves gene expression, calcium signals and channel trafficking all at once.
    unlocks: >-
      An understanding of why nervous systems are robust to change and injury, and why that
      robustness sometimes fails, as in epilepsy.
    sources:
      - citation: "Marder, E. & Goaillard, J.-M. (2006). Variability, compensation and homeostasis in neuron and network function. Nature Reviews Neuroscience 7: 563–574."
        url: null

applications:
  - area: Electricity
    title: The battery
    description: >-
      Volta built his pile of zinc and copper discs separated by brine-soaked card to prove
      that Galvani's electricity came from metals, not frogs. It was the first source of
      steady current. With it Ørsted found in 1820 that a current deflects a compass needle,
      the start of electromagnetism.
    domain: physics
    field_id: electromagnetism
    sources:
      - citation: "Volta, A. (1800). On the electricity excited by the mere contact of conducting substances of different kinds. Philosophical Transactions of the Royal Society of London 90: 403–431."
        url: null
  - area: Mathematics
    title: Excitable systems
    description: >-
      The Hodgkin–Huxley equations became a model problem for the geometric study of
      differential equations. Richard FitzHugh reduced them to two variables in 1961 and
      analysed them in the phase plane, explaining thresholds and repetitive firing as
      features of the flow. The same ideas now describe heart rhythms and chemical waves.
    domain: math
    field_id: dynamical-systems
    sources:
      - citation: "FitzHugh, R. (1961). Impulses and physiological states in theoretical models of nerve membrane. Biophysical Journal 1(6): 445–466."
        url: null
  - area: Medicine
    title: Drugs that block channels
    description: >-
      Local anaesthetics such as lidocaine stop pain by blocking the sodium channels that
      make action potentials. Many drugs for epilepsy and irregular heartbeat act on the same
      channels, and their effects are measured with the patch clamp.
    sources:
      - citation: "Hille, B. (2001). Ion Channels of Excitable Membranes (3rd ed.). Sinauer."
        url: null

further_reading:
  - citation: "Hille, B. (2001). Ion Channels of Excitable Membranes (3rd ed.). Sinauer."
    url: null
    note: The standard reference on ion channels, with good historical chapters.
  - citation: "Pera, M. (1992). The Ambiguous Frog: The Galvani–Volta Controversy on Animal Electricity. Princeton University Press."
    url: null
    note: A history of the dispute that founded both electrophysiology and the battery.
  - citation: "Hodgkin, A. L. (1964). The Conduction of the Nervous Impulse. Liverpool University Press."
    url: null
    note: A short, clear account of the ionic theory by one of its authors.
---

## Animal Electricity

In the 1780s {{fig:luigi-galvani|Luigi Galvani}}, a professor of anatomy in Bologna, found that the legs of a dissected frog twitched when a nerve and muscle were joined by an arc of metal. He concluded that animals make their own electricity, stored in the muscle and carried by the nerves, and published in 1791. {{fig:alessandro-volta|Alessandro Volta}} at first agreed, then argued that the current came from the contact of two different metals, with the frog merely detecting it. To prove his point, in 1800 he stacked discs of zinc and copper separated by wet card and made the first battery. Galvani's reply, that a nerve touching a muscle could make it twitch with no metal at all, attracted less notice.

Both were partly right, and the instruments to settle the matter came slowly. In the 1840s {{fig:emil-du-bois-reymond|Emil du Bois-Reymond}} in Berlin wound galvanometers with thousands of turns of wire, sensitive enough to detect the currents of living tissue. He found that a stimulated nerve showed a "negative variation", a brief drop in its resting current that ran along the nerve with the impulse. It was the first detection of the action potential.

## The Speed of Thought

Johannes Müller, the leading physiologist of the day, thought nerve signals too fast ever to be timed. In 1850 his student {{fig:hermann-helmholtz|Hermann von Helmholtz}} did it. He stimulated a frog's nerve at two points and measured how much longer the muscle took to twitch when the signal had further to go. The answer was about 30 metres per second. Nerve impulses were not electricity flowing through a wire, which would be millions of times faster, but some slower process in the living fibre.

What the process was remained unclear. In 1902 Julius Bernstein proposed that the membrane of a resting nerve lets through only potassium ions, which sets up a voltage, and that during an impulse the membrane briefly lets everything through. At Cambridge, Keith Lucas and then {{fig:edgar-adrian|Edgar Adrian}} showed that a fibre fires all or nothing. In 1926 Adrian and Yngve Zotterman, using new valve amplifiers, recorded single sensory fibres and found that every impulse is the same size. Information lies in how often they come.

## The Squid Axon

The answer to Bernstein's question came from the squid, whose giant axons, up to a millimetre across, control its jet escape. In 1939 {{fig:alan-hodgkin|Alan Hodgkin}} and {{fig:andrew-huxley|Andrew Huxley}} at Plymouth slid a fine wire inside one and recorded the voltage directly. During an impulse it did not just fall to zero, as Bernstein's theory said. It overshot to about 40 millivolts positive. Then the war intervened.

Afterwards they used the voltage clamp, developed by Kenneth Cole and George Marmont, which holds the membrane voltage fixed and measures the current needed to hold it. By replacing the sodium in the seawater, they separated the current into two parts. When the voltage rises, the membrane first opens to sodium ions, which rush in and drive the voltage higher, then closes to sodium and opens to potassium, which flows out and restores it. In 1952 they fitted the measurements with four differential equations. Huxley solved them on a hand-cranked calculator, and they reproduced the shape of the action potential and predicted a speed of 18.8 metres per second against a measured 21.2.

## A Closer Look: The Voltage from Salt

Why is the inside of a nerve negative? The membrane separates two salt solutions of different composition. For the squid axon, the concentrations in millimoles per litre are:

| Ion | Inside | Outside |
|---|---|---|
| Potassium, K⁺ | 400 | 20 |
| Sodium, Na⁺ | 50 | 440 |
| Chloride, Cl⁻ | 52 | 560 |

Suppose the membrane lets through only potassium. Potassium leaks out down its concentration gradient, leaving the inside negative, until the voltage pulls back as hard as the gradient pushes. The balance point is given by the Nernst equation, from the physical chemist Walther Nernst:

$$
E = \frac{RT}{zF} \ln \frac{c_{\text{out}}}{c_{\text{in}}} ,
$$

where $R$ is the gas constant, $T$ the absolute temperature, $F$ the charge on a mole of ions and $z$ the ion's charge. At 18 °C, $RT/F = 25.1$ millivolts, so

$$
E_{\mathrm{K}} = 25.1 \ln \frac{20}{400} = -75 \text{ mV}, \qquad E_{\mathrm{Na}} = 25.1 \ln \frac{440}{50} = +55 \text{ mV} .
$$

The real membrane lets several ions through, and the resting voltage is a weighted compromise, given by the Goldman equation. Hodgkin and Bernard Katz found in 1949 that at rest the membrane is 25 times less permeable to sodium than to potassium, and about half as permeable to chloride. With relative permeabilities $1 : 0.04 : 0.45$ for potassium, sodium and chloride,

$$
V = 25.1 \ln \frac{1 \times 20 + 0.04 \times 440 + 0.45 \times 52}{1 \times 400 + 0.04 \times 50 + 0.45 \times 560} = 25.1 \ln \frac{61}{654} \approx -60 \text{ mV} .
$$

At the peak of an impulse the sodium permeability rises to about 20 times that of potassium. The same equation then gives $25.1 \ln (8843/1652) \approx +42$ mV, close to the overshoot Hodgkin and Huxley measured. The action potential is a switch between two permeabilities.

How many ions does this take? The membrane stores about 1 microfarad per square centimetre, so a 100 millivolt swing moves $10^{-7}$ coulombs per square centimetre, about $6 \times 10^{11}$ ions. One centimetre of a half-millimetre squid axon has 0.16 cm² of membrane, so about $10^{11}$ ions cross it per impulse. The same length contains about $5 \times 10^{17}$ potassium ions. One impulse changes the inside by roughly one part in five million, which is why an axon can fire thousands of times with its pumps switched off.

## Channels

The equations described currents, not the machinery that carried them. In 1976 {{fig:erwin-neher|Erwin Neher}} and {{fig:bert-sakmann|Bert Sakmann}} pressed a polished glass pipette against a muscle cell and recorded the current through a single channel, a rectangular pulse of a few picoamperes that switched on and off at random. Hodgkin and Huxley's smooth currents were the average of many such pores. In 1998 Roderick MacKinnon's group solved the structure of a potassium channel and showed how it lets potassium through but not the smaller sodium ion.

How signals pass from one neuron to the next, across Sherrington's synapse, became [synaptic transmission](/biology/synaptic-transmission/). Recording from single neurons in living animals became [systems neuroscience](/biology/systems-neuroscience/), and the Hodgkin–Huxley equations became the first great model of [computational neuroscience](/biology/computational-neuroscience/) and a classic of [dynamical systems](/math/dynamical-systems/). How a neuron keeps its mix of channels stable for a lifetime is still not understood.
