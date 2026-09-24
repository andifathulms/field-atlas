---
id: information-theory
domain: math
thread: statistics
name: Information Theory
parent_ids:
  - probability-theory
era_emerged: 1924 – 1952
core_question: How much information does a message contain, and how fast can it be sent reliably through a noisy channel?

summary: |-
  Information theory measures information in bits. A message is informative to the extent that it is unpredictable, so the information in a source is set by its probabilities, not by what its messages mean. That single number, the entropy, is the least number of bits per symbol that any compression scheme can achieve. A second number, the capacity, is the most that any channel, from a telephone wire to a deep-space radio link, can carry without error.

  Engineers at Bell Labs had groped towards a measure of information in the 1920s. In 1948 Claude Shannon created the whole subject in one paper, proving that reliable communication over a noisy channel is possible at any rate below capacity. He did not say how. Finding practical codes that approach his limit took forty-five years, and they now run every phone, disk drive and space probe.

key_ideas:
  - term: Entropy
    definition: >-
      The average unpredictability of a source, $H = -\sum p_i \log_2 p_i$ bits per
      symbol. A fair coin has one bit per toss. A coin that lands heads 90% of the time
      has less than half a bit.
    turning_point_id: it-shannon-1948
  - term: Channel capacity
    definition: >-
      The highest rate at which information can be sent through a noisy channel with an
      error probability as small as desired. Below capacity it can be done, above it it
      cannot.
    turning_point_id: it-shannon-1948
  - term: Error-correcting code
    definition: >-
      A way of adding structured redundancy to a message so that errors introduced in
      transmission can be detected and corrected at the other end.
    turning_point_id: it-hamming-codes
  - term: Optimal prefix code
    definition: >-
      A code in which frequent symbols get short codewords and no codeword begins another.
      Huffman's method finds the best one for any known set of probabilities.
    turning_point_id: it-huffman
  - term: Kolmogorov complexity
    definition: >-
      The information in a single object, measured as the length of the shortest program
      that prints it. A string is random if it has no description shorter than itself.
    turning_point_id: it-kolmogorov-complexity

turning_points:
  - id: it-nyquist-hartley
    date: 1924 – 1928
    type: REFORMULATION
    title: Nyquist and Hartley measure the telegraph
    description: >-
      Harry Nyquist, at the American Telephone and Telegraph Company, relates the speed
      of telegraph signalling to the range of frequencies a line can carry. Ralph Hartley,
      at Bell Labs, proposes measuring the information in a message by the logarithm of
      the number of possible messages, deliberately setting aside what the messages mean.
      Neither allowed for some messages being more likely than others.
    contested: false
    sources:
      - citation: "Nyquist, H. (1924). Certain factors affecting telegraph speed. Bell System Technical Journal 3(2): 324–346."
        url: null
      - citation: "Hartley, R. V. L. (1928). Transmission of information. Bell System Technical Journal 7(3): 535–563."
        url: null

  - id: it-shannon-1948
    date: "1948"
    type: PROOF
    title: A mathematical theory of communication
    description: >-
      Claude Shannon defines the entropy of a source and the capacity of a channel, and
      proves the two coding theorems: a source can be compressed to its entropy and no
      further, and a noisy channel can carry information with vanishing error at any rate
      below its capacity. The proof chooses a code at random and shows that on average it
      works, so good codes exist, though it gives no practical way to find one.
    contested: false
    sources:
      - citation: "Shannon, C. E. (1948). A mathematical theory of communication. Bell System Technical Journal 27: 379–423, 623–656."
        url: null

  - id: it-hamming-codes
    date: "1950"
    type: PROOF
    title: Hamming's error-correcting codes
    description: >-
      Frustrated that the Bell Labs relay computers halted at weekends when they detected
      an error, Richard Hamming constructs codes that correct errors instead of merely
      detecting them. His simplest code adds three check bits to every four data bits and
      corrects any single flipped bit. Coding theory became a branch of algebra.
    contested: false
    sources:
      - citation: "Hamming, R. W. (1950). Error detecting and error correcting codes. Bell System Technical Journal 29(2): 147–160."
        url: null

  - id: it-huffman
    date: "1952"
    type: PROOF
    title: Huffman coding
    description: >-
      David Huffman, a graduate student at MIT, is given the choice by his teacher Robert
      Fano of sitting the final exam or writing a term paper on finding the most
      efficient binary code. He finds a simple method that repeatedly merges the two
      least likely symbols, and proves it optimal. Huffman codes are still a stage in
      ZIP files, JPEG images and MP3 audio.
    contested: false
    sources:
      - citation: "Huffman, D. A. (1952). A method for the construction of minimum-redundancy codes. Proceedings of the IRE 40(9): 1098–1101."
        url: null

  - id: it-kolmogorov-complexity
    date: 1964 – 1969
    type: REFORMULATION
    title: The information in a single object
    description: >-
      Shannon's entropy measures a random source, not one message. Ray Solomonoff (1964),
      Andrey Kolmogorov (1965) and Gregory Chaitin (1966–69) define the complexity of an
      individual string as the length of the shortest computer program that produces it.
      It gives a precise meaning to "random sequence", and connects information to the
      limits of computation.
    contested: true
    contested_note: >-
      The idea was found independently three times, and credit varies. Solomonoff
      published first, in the context of inductive inference. Kolmogorov's formulation
      is the one that gave the concept its usual name. Chaitin found it as a student and
      developed its links to incompleteness. Many authors now speak of
      Solomonoff–Kolmogorov–Chaitin complexity.
    sources:
      - citation: "Kolmogorov, A. N. (1965). Three approaches to the quantitative definition of information. Problems of Information Transmission 1(1): 1–7."
        url: null
      - citation: "Li, M. & Vitányi, P. (2008). An Introduction to Kolmogorov Complexity and Its Applications (3rd ed.). Springer."
        url: null

  - id: it-turbo-codes
    date: 1993 – 1996
    type: REFORMULATION
    title: Codes that reach Shannon's limit
    description: >-
      Claude Berrou and colleagues present turbo codes, which pass guesses back and forth
      between two simple decoders and come within a fraction of a decibel of Shannon's
      limit. Many experts were at first sceptical. In 1996 David MacKay and Radford
      Neal show that Robert Gallager's low-density parity-check codes of 1962, forgotten
      for thirty years, do as well. After forty-five years, capacity was a practical
      target.
    contested: false
    sources:
      - citation: "Berrou, C., Glavieux, A. & Thitimajshima, P. (1993). Near Shannon limit error-correcting coding and decoding: turbo-codes. Proceedings of the IEEE International Conference on Communications 1993: 1064–1070."
        url: null
      - citation: "MacKay, D. J. C. & Neal, R. M. (1996). Near Shannon limit performance of low density parity check codes. Electronics Letters 32(18): 1645–1646."
        url: null

open_problems:
  - id: it-interference-channel
    name: The capacity of the interference channel
    status: open
    status_note: Open as of 2026; the Gaussian case is known to within one bit (2008).
    description: >-
      Two senders talk to two receivers at once, and each receiver hears the other
      sender as noise. What combinations of rates can both pairs achieve reliably? For a
      single sender and receiver Shannon gave a formula. For this simplest network with
      two of each, no formula is known.
    why_hard: >-
      Each receiver can treat the unwanted signal as noise, decode it and subtract it,
      or do something in between, and senders can split their messages to help. The
      classic scheme, Han and Kobayashi's of 1981, was shown in 2015 to fall short for
      some channels, and the upper bounds meet the achievable rates only in special
      cases.
    unlocks: >-
      The limits of every shared wireless network. Mobile phones, Wi-Fi and satellite
      links all interfere with one another, and network information theory has almost
      no exact answers beyond the single link.
    sources:
      - citation: "Etkin, R. H., Tse, D. N. C. & Wang, H. (2008). Gaussian interference channel capacity to within one bit. IEEE Transactions on Information Theory 54(12): 5534–5562."
        url: null
      - citation: "El Gamal, A. & Kim, Y.-H. (2011). Network Information Theory. Cambridge University Press."
        url: null

applications:
  - area: Statistical physics
    title: Entropy is missing information
    description: >-
      In 1957 Edwin Jaynes showed that the distributions of statistical mechanics are
      exactly those with the greatest Shannon entropy consistent with what is measured,
      such as the average energy. Thermodynamic entropy became a measure of what we do
      not know about a system's microscopic state.
    domain: physics
    field_id: statistical-mechanics
    sources:
      - citation: "Jaynes, E. T. (1957). Information theory and statistical mechanics. Physical Review 106(4): 620–630."
        url: null
  - area: Molecular biology
    title: Reading information in DNA
    description: >-
      The sites where proteins bind DNA are recognised by patterns, not exact sequences.
      Sequence logos show, position by position, how many bits of information a binding
      site carries, measured as the drop in entropy from the random value of two bits per
      base.
    domain: biology
    field_id: molecular-biology
    sources:
      - citation: "Schneider, T. D. & Stephens, R. M. (1990). Sequence logos: a new way to display consensus sequences. Nucleic Acids Research 18(20): 6097–6100."
        url: null
  - area: Communication
    title: From deep space to mobile phones
    description: >-
      Turbo codes carried data from spacecraft and third-generation phones, and LDPC
      codes now protect Wi-Fi, digital television and 5G data. Polar codes, found by
      Erdal Arıkan in 2009, were the first proved to reach capacity with a practical
      decoder, and 5G uses them too.
    sources:
      - citation: "Arıkan, E. (2009). Channel polarization: a method for constructing capacity-achieving codes for symmetric binary-input memoryless channels. IEEE Transactions on Information Theory 55(7): 3051–3073."
        url: null

further_reading:
  - citation: "Shannon, C. E. & Weaver, W. (1949). The Mathematical Theory of Communication. University of Illinois Press."
    url: null
    note: Shannon's paper in book form, with an introduction for general readers.
  - citation: "Cover, T. M. & Thomas, J. A. (2006). Elements of Information Theory (2nd ed.). Wiley."
    url: null
    note: The standard textbook.
  - citation: "Gleick, J. (2011). The Information: A History, a Theory, a Flood. Pantheon."
    url: null
    note: A popular history of information, with Shannon at its centre.
---

## Measuring the Telegraph

Telephone engineers of the 1920s needed to know how many messages a line could carry. {{fig:harry-nyquist|Harry Nyquist}} showed in 1924 that the speed of signalling is limited by the range of frequencies the line transmits. {{fig:ralph-hartley|Ralph Hartley}} proposed in 1928 that the information in a message be measured by the logarithm of the number of messages that could have been sent, and insisted that meaning be left out of it. His measure treated every possible message as equally likely. That is exactly what messages in a real language are not.

## Shannon's Paper

{{fig:claude-shannon|Claude Shannon}} had already shown, in his master's thesis of 1937, that Boole's logic could design switching circuits. In 1948, at Bell Labs, he published "A Mathematical Theory of Communication". It brought probability into Hartley's measure. The information in a source is its entropy, $H = -\sum p_i \log_2 p_i$, in bits, a name Shannon credited to his colleague John Tukey. He proved that a source can be compressed to $H$ bits per symbol and no further. Then came the surprise. Every noisy channel has a capacity, and below it information can be sent with as few errors as desired, not by slowing down but by coding long blocks cleverly. His proof picked a code at random and showed it works on average. It proved that good codes exist without exhibiting one.

Others took up the search. In 1950 {{fig:richard-hamming|Richard Hamming}}, tired of Bell Labs computers giving up on weekend jobs at the first error, published codes that correct errors themselves. In 1952 {{fig:david-huffman|David Huffman}}, a student who chose a term paper over an exam, found the optimal way to compress a source with known probabilities. The gap to capacity stayed wide for decades.

## A Closer Look: Squeezing a Biased Coin

A fair coin needs one bit per toss: nothing can be saved. Now take a coin that lands heads with probability 0.9. Its entropy is

$$
H = -0.9 \log_2 0.9 - 0.1 \log_2 0.1 \approx 0.469 \text{ bits per toss},
$$

so Shannon's theorem says a long record of tosses can be stored in less than half the space. How do we get there? One symbol at a time we cannot: any code must use at least one bit per toss. The trick is to code blocks. Take pairs of tosses:

| Pair | Probability | Huffman codeword | Length |
|---|---|---|---|
| HH | 0.81 | 0 | 1 |
| HT | 0.09 | 10 | 2 |
| TH | 0.09 | 110 | 3 |
| TT | 0.01 | 111 | 3 |

Huffman's rule builds this table by repeatedly merging the two least likely entries: TT with TH, then that pair with HT, then everything with HH. The average length is $0.81 \times 1 + 0.09 \times 2 + 0.09 \times 3 + 0.01 \times 3 = 1.29$ bits per pair, or 0.645 bits per toss, already a saving of about a third. With blocks of three tosses the Huffman code needs 0.533 bits per toss, and longer blocks approach 0.469 as closely as desired, but never beat it. That limit is the entropy.

The same measure applies to language. Twenty-six letters and a space would need $\log_2 27 \approx 4.75$ bits each if all were equally likely. But English is predictable: after "q" comes "u". In 1951 Shannon asked people to guess the next letter of a text and estimated that English carries only about one bit per letter, so most of its letters could, in principle, be predicted from what came before. That redundancy is why a text with some letters missing can still be read, and why it compresses so well.

## Codes, Complexity and Physics

In 1965 {{fig:kolmogorov|Andrey Kolmogorov}}, independently of {{fig:ray-solomonoff|Ray Solomonoff}} and {{fig:gregory-chaitin|Gregory Chaitin}}, defined the information in a single string as the length of the shortest program that prints it. The idea tied information to [computability theory](/math/computability-theory/): the complexity of a string is itself uncomputable. Kolmogorov also carried Shannon's entropy into [ergodic theory](/math/ergodic-theory/) as a measure of chaos.

Shannon's limit was finally approached in practice in 1993, when {{fig:claude-berrou|Claude Berrou}} and his colleagues announced turbo codes. {{fig:david-mackay|David MacKay}} and Radford Neal then showed that Robert Gallager's low-density parity-check codes of 1962, built from the sparse random graphs of [probabilistic combinatorics](/math/probabilistic-combinatorics/), were just as good. Entropy has also returned to physics, where erasing a bit is known to cost energy, as [non-equilibrium physics](/physics/non-equilibrium-physics/) describes. And the question of how much information a finite sample carries about a whole distribution lies at the root of [statistical learning theory](/math/statistical-learning-theory/).
