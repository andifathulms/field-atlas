---
id: quantum-information
domain: physics
thread: quantum
name: Quantum Information
parent_ids:
  - quantum-mechanics
era_emerged: 1935 – 1996
core_question: What can be computed and communicated using superposition and entanglement that cannot be done classically?

summary: |-
  Quantum information science treats the strangest features of quantum mechanics as resources. A qubit can be in a superposition of 0 and 1. Two qubits can be entangled, so that measurements on them are correlated more strongly than any classical mechanism allows, however far apart they are. These effects make possible key distribution whose security rests on physics, and computers that could solve certain problems exponentially faster than any known classical method.

  The field grew out of a philosophical argument. In 1935 Einstein used entanglement to argue that quantum mechanics was incomplete. In 1964 John Bell turned the argument into an experimental test, and experiments since 1972 have shown that nature violates Bell's inequality, as quantum mechanics predicts. From the 1980s, physicists and computer scientists realised that the same effects could be used for computation and cryptography.

key_ideas:
  - term: Qubit
    definition: >-
      A quantum bit: a two-state system, such as a photon's polarisation, that can be in
      any superposition of 0 and 1. Measuring it gives 0 or 1 with probabilities set by
      the superposition.
    turning_point_id: quantum-computing-proposed
  - term: Entanglement
    definition: >-
      A joint state of two or more systems that cannot be described by giving each its
      own state. Measurements on entangled particles are correlated regardless of
      distance.
    turning_point_id: epr-paradox
  - term: Bell's inequality
    definition: >-
      A limit on correlations that any theory with pre-existing, local properties must
      obey. Quantum mechanics predicts, and experiments confirm, that it is violated.
    turning_point_id: bell-theorem
  - term: Quantum key distribution
    definition: >-
      Sharing a secret key using quantum states. Any eavesdropper must measure the states
      and so disturbs them, which the users can detect.
    turning_point_id: bb84
  - term: Quantum error correction
    definition: >-
      Protecting fragile quantum information by spreading one logical qubit across many
      physical ones, so that errors can be detected and undone without measuring the
      information itself.
    turning_point_id: quantum-error-correction

turning_points:
  - id: epr-paradox
    date: "1935"
    type: DISCOVERY
    title: The EPR argument and entanglement
    description: >-
      Albert Einstein, Boris Podolsky and Nathan Rosen argue that quantum mechanics must be
      incomplete. Measuring one of two correlated particles seems to fix the other's
      properties instantly at a distance, which Einstein later called "spooky action at a
      distance". Responding the same year, Erwin Schrödinger names the phenomenon
      entanglement and calls it the characteristic trait of quantum mechanics.
    contested: false
    sources:
      - citation: "Einstein, A., Podolsky, B. & Rosen, N. (1935). Can quantum-mechanical description of physical reality be considered complete? Physical Review 47(10): 777–780."
        url: null
      - citation: "Schrödinger, E. (1935). Discussion of probability relations between separated systems. Mathematical Proceedings of the Cambridge Philosophical Society 31(4): 555–563."
        url: null

  - id: bell-theorem
    date: "1964"
    type: DISCOVERY
    title: Bell's theorem
    description: >-
      John Bell, a physicist at CERN working on the question in his spare time, proves
      that no theory in which particles carry pre-set local properties can reproduce all
      the predictions of quantum mechanics for entangled particles. The disagreement is
      a measurable inequality. A debate about interpretation became a question for the
      laboratory.
    contested: false
    sources:
      - citation: "Bell, J. S. (1964). On the Einstein Podolsky Rosen paradox. Physics 1(3): 195–200."
        url: null

  - id: bell-tests
    date: 1972 – 2015
    type: EXPERIMENT
    title: Bell's inequality is violated
    description: >-
      Stuart Freedman and John Clauser (1972) find the first violation with entangled
      photons. Alain Aspect's experiments (1982) switch the measurement settings while
      the photons are in flight. In 2015 teams in Delft, Vienna and Boulder close the
      remaining loopholes. Nature is not locally realistic. Aspect, Clauser and Anton
      Zeilinger shared the 2022 Nobel prize.
    contested: false
    sources:
      - citation: "Aspect, A., Grangier, P. & Roger, G. (1982). Experimental realization of Einstein–Podolsky–Rosen–Bohm Gedankenexperiment: a new violation of Bell's inequalities. Physical Review Letters 49(2): 91–94."
        url: null
      - citation: "Aspect, A., Dalibard, J. & Roger, G. (1982). Experimental test of Bell's inequalities using time-varying analyzers. Physical Review Letters 49(25): 1804–1807."
        url: null
      - citation: "Hensen, B. et al. (2015). Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres. Nature 526: 682–686."
        url: null

  - id: quantum-computing-proposed
    date: 1982 – 1985
    type: DISCOVERY
    title: Quantum computers proposed
    description: >-
      Richard Feynman points out that simulating quantum systems on ordinary computers
      takes exponentially long, and suggests building computers out of quantum parts. In
      1985 David Deutsch defines a universal quantum computer and gives the first task it
      does faster than any classical machine. In 1994 Peter Shor showed that such a
      computer could factor large numbers quickly, threatening public-key cryptography.
    contested: false
    sources:
      - citation: "Feynman, R. P. (1982). Simulating physics with computers. International Journal of Theoretical Physics 21(6–7): 467–488."
        url: null
      - citation: "Deutsch, D. (1985). Quantum theory, the Church–Turing principle and the universal quantum computer. Proceedings of the Royal Society A 400(1818): 97–117."
        url: null

  - id: bb84
    date: "1984"
    type: DISCOVERY
    title: Quantum key distribution
    description: >-
      Charles Bennett and Gilles Brassard describe a way to share a secret key by sending
      single photons in randomly chosen polarisation bases. Any eavesdropper must measure
      the photons and so introduces detectable errors. Its security rests on the laws of
      physics rather than on the difficulty of a mathematical problem.
    contested: false
    sources:
      - citation: "Bennett, C. H. & Brassard, G. (1984). Quantum cryptography: public key distribution and coin tossing. Proceedings of the IEEE International Conference on Computers, Systems and Signal Processing, Bangalore: 175–179."
        url: null

  - id: quantum-error-correction
    date: 1995 – 1996
    type: DISCOVERY
    title: Quantum error correction
    description: >-
      It seemed that quantum computers could never work, because any disturbance destroys
      superpositions, and quantum states cannot be copied for backup. Peter Shor and
      Andrew Steane show that quantum information can nonetheless be protected by
      spreading it across several qubits. Threshold theorems followed: if errors are rare
      enough, arbitrarily long computations are possible.
    contested: false
    sources:
      - citation: "Shor, P. W. (1995). Scheme for reducing decoherence in quantum computer memory. Physical Review A 52(4): R2493–R2496."
        url: null
      - citation: "Steane, A. M. (1996). Error correcting codes in quantum theory. Physical Review Letters 77(5): 793–797."
        url: null

  - id: below-threshold
    date: "2024"
    type: EXPERIMENT
    title: Error correction below threshold
    description: >-
      Google Quantum AI shows on a superconducting chip that making an error-correcting
      code larger makes its logical qubit more reliable, not less, cutting the error rate
      roughly in half at each step up in size. It was the first clear demonstration of
      the regime in which fault-tolerant quantum computing becomes possible.
    contested: false
    sources:
      - citation: "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature 638: 920–926."
        url: null

open_problems:
  - id: fault-tolerant-quantum-computer
    name: Can a large fault-tolerant quantum computer be built?
    status: open
    status_note: Open as of 2026. Small error-corrected logical qubits have been demonstrated.
    description: >-
      Running Shor's algorithm on numbers used in real cryptography is estimated to need
      about a thousand or more error-corrected logical qubits, and so up to a million
      physical qubits. The largest machines have far fewer, and they are too noisy for long
      computations.
    why_hard: >-
      Qubits must be isolated from their environment yet controlled precisely, and errors
      must be corrected faster than they occur across the whole machine. No physical
      principle is known to forbid it, but it has never been done at scale, and some
      physicists doubt it will work.
    unlocks: >-
      Simulation of molecules and materials beyond classical reach, and the breaking of
      today's public-key cryptography. A proof that it is impossible would reveal
      something new about quantum mechanics itself.
    sources:
      - citation: "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum 2: 79."
        url: null
      - citation: "Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917."
        url: https://arxiv.org/abs/2505.15917

applications:
  - area: Cryptography
    title: Breaking and remaking public-key cryptography
    description: >-
      Shor's algorithm would break RSA and elliptic-curve cryptography on a large quantum
      computer. That threat drove the design of new, "post-quantum" public-key systems,
      standardised in 2024, and quantum key distribution offers an alternative whose
      security rests on physics.
    domain: math
    field_id: public-key-cryptography
    sources:
      - citation: "Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. SIAM Journal on Computing 26(5): 1484–1509."
        url: null
  - area: Security
    title: Randomness certified by Bell tests
    description: >-
      If a Bell inequality is violated, the measurement results cannot have been
      predetermined. Experiments use this to generate random numbers whose
      unpredictability is guaranteed by physics, not by trust in the device.
    sources:
      - citation: "Pironio, S. et al. (2010). Random numbers certified by Bell's theorem. Nature 464: 1021–1024."
        url: null

further_reading:
  - citation: "Aaronson, S. (2013). Quantum Computing Since Democritus. Cambridge University Press."
    url: null
    note: A witty tour of quantum computing and complexity for readers with some mathematics.
  - citation: "Gilder, L. (2008). The Age of Entanglement: When Quantum Physics Was Reborn. Knopf."
    url: null
    note: A history of entanglement from Einstein to Bell tests.
  - citation: "Nielsen, M. A. & Chuang, I. L. (2010). Quantum Computation and Quantum Information (10th anniversary ed.). Cambridge University Press."
    url: null
    note: The standard textbook.
---

## Spooky Action

In 1935 {{fig:einstein|Albert Einstein}}, with {{fig:boris-podolsky|Boris Podolsky}} and {{fig:nathan-rosen|Nathan Rosen}}, published an argument that [quantum mechanics](/physics/quantum-mechanics/) is incomplete. Two particles that have interacted can be left in a joint state such that measuring one immediately tells you the result of measuring the other, however far away. Either the measurement affects the distant particle instantly, which Einstein thought absurd, or the particles carried definite answers all along, which quantum mechanics does not describe. {{fig:erwin-schrodinger|Erwin Schrödinger}} named the phenomenon *entanglement* and called it the characteristic trait of quantum mechanics.

For thirty years the argument was treated as philosophy. Bohr replied, most physicists sided with him, and the calculations went on regardless.

## Bell's Test

In 1964 {{fig:john-bell|John Bell}}, a CERN physicist who worked on the foundations in his spare time, found that the dispute had observable consequences. Any theory in which particles carry pre-set answers, and in which nothing travels faster than light, must obey a certain limit on correlations. Quantum mechanics predicts a violation. The question could be settled in a laboratory.

{{fig:john-clauser|John Clauser}} and Stuart Freedman did the first test in 1972 with entangled photons, and found the quantum prediction. {{fig:alain-aspect|Alain Aspect}} in 1982 changed the measurement settings while the photons were in flight, so that no signal could coordinate them. In 2015 teams including {{fig:ronald-hanson|Ronald Hanson}}'s in Delft and {{fig:anton-zeilinger|Anton Zeilinger}}'s in Vienna closed the last loopholes. Einstein's picture of pre-existing local properties is wrong.

## A Closer Look: Bell's Inequality in Numbers

Two labs each receive one photon of an entangled pair. Alice measures hers with a polariser set at angle $a$ or $a'$, chosen at random. Bob does the same with $b$ or $b'$. Each measurement gives $+1$ (the photon passes) or $-1$ (it is blocked).

Suppose each photon carries pre-set answers for every setting: $A, A'$ for Alice's settings and $B, B'$ for Bob's, each $\pm 1$. Consider

$$
S = AB - AB' + A'B + A'B' = A(B - B') + A'(B + B') .
$$

Since $B$ and $B'$ are each $\pm 1$, one of $(B - B')$ and $(B + B')$ is 0 and the other is $\pm 2$. So $S$ is always $+2$ or $-2$, and the average over many pairs obeys

$$
|\langle S \rangle| \le 2 .
$$

That is the Clauser–Horne–Shimony–Holt form of Bell's inequality. It assumes nothing except pre-set answers and no influence of one lab's choice on the other.

For photons entangled in polarisation, quantum mechanics predicts that the average of $AB$ is $\cos 2(a - b)$. Choose $a = 0^\circ$, $a' = 45^\circ$, $b = 22.5^\circ$, $b' = 67.5^\circ$:

| Pair of settings | Angle difference | Predicted average |
|---|---|---|
| $a, b$ | $-22.5^\circ$ | $\cos(-45^\circ) = 0.707$ |
| $a, b'$ | $-67.5^\circ$ | $\cos(-135^\circ) = -0.707$ |
| $a', b$ | $22.5^\circ$ | $\cos 45^\circ = 0.707$ |
| $a', b'$ | $-22.5^\circ$ | $\cos(-45^\circ) = 0.707$ |

So quantum mechanics predicts $S = 0.707 - (-0.707) + 0.707 + 0.707 = 2\sqrt2 \approx 2.83$, well above 2. One of Aspect's 1982 experiments, with fixed settings, measured $S = 2.697 \pm 0.015$, close to the quantum prediction once imperfect equipment is accounted for, and more than forty standard deviations above the classical limit. No assignment of pre-set answers can produce these correlations.

This cannot be used to send messages faster than light: each lab alone sees a random sequence of $\pm 1$. The correlation shows up only when the two records are compared.

## From Paradox to Resource

In the 1980s entanglement and superposition began to look like resources. {{fig:richard-feynman|Richard Feynman}} pointed out in 1982 that ordinary computers need exponential time to simulate quantum systems, and proposed building computers from quantum parts. {{fig:david-deutsch|David Deutsch}} defined the universal quantum computer in 1985. In 1984 {{fig:charles-bennett|Charles Bennett}} and {{fig:gilles-brassard|Gilles Brassard}} showed how to share secret keys whose security rests on quantum mechanics. In 1994 {{fig:shor|Peter Shor}} found a quantum algorithm that factors large numbers quickly, which would break the [public-key cryptography](/math/public-key-cryptography/) that secures the internet.

Quantum states are fragile, and it seemed they could never be protected, since they cannot be copied. In 1995–96 Shor and {{fig:andrew-steane|Andrew Steane}} showed that quantum error correction is possible. In 2024 a Google team showed, for the first time clearly, error correction improving as the code grows. Whether a machine large enough to run Shor's algorithm on real cryptographic keys can be built is the field's open question.
