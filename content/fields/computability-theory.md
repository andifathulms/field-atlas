---
id: computability-theory
domain: math
thread: foundations
name: Computability Theory
parent_ids:
  - metamathematics
era_emerged: 1931 – 1936
core_question: What can be computed at all, by any mechanical procedure?

summary: |-
  Computability theory asks which problems can be solved by an algorithm, a step-by-step procedure that a machine could follow, given unlimited time and memory. In 1936 Alan Turing and Alonzo Church gave precise definitions of "algorithm" and used them to prove that some problems have no algorithmic solution at all. The most famous is the halting problem: no program can decide, for every program and input, whether it will eventually stop.

  Turing's abstract machine also contained the idea of a *universal* machine, one that can run any other machine's program. That is the concept of the stored-program computer, and every phone and laptop is one.

key_ideas:
  - term: Turing machine
    definition: >-
      An idealised computer: a tape of symbols, a read–write head, and a finite table of
      rules. Anything a modern computer can compute, a Turing machine can too, given
      enough time and tape.
    turning_point_id: entscheidungsproblem
  - term: Church–Turing thesis
    definition: >-
      The claim that every effectively calculable function is computable by a Turing
      machine. It is not a theorem, since "effectively calculable" is informal, but every
      proposed model of computation has turned out equivalent.
    turning_point_id: entscheidungsproblem
  - term: Halting problem
    definition: >-
      No algorithm can decide, for every program and input, whether the program halts.
      The proof is a diagonal argument like Cantor's and Gödel's.
    turning_point_id: entscheidungsproblem
  - term: Universal machine
    definition: >-
      A single machine that, given a description of any other machine as input, can
      simulate it. Software is possible because hardware can be universal.
    turning_point_id: universal-machine
  - term: Undecidable problem
    definition: >-
      A yes-or-no question for which no algorithm always gives the right answer. They turn
      up far from logic, as in Hilbert's tenth problem about whole-number equations.
    turning_point_id: hilberts-tenth

turning_points:
  - id: entscheidungsproblem
    date: "1936"
    type: DISPROOF
    title: The decision problem has no solution
    description: >-
      Hilbert had asked for a mechanical procedure to decide whether any statement follows
      from given axioms. Alonzo Church, using his lambda calculus, and Alan Turing, using
      his imagined machines, independently prove that no such procedure exists. Turing's
      paper also defines computation in a way so clearly mechanical that Gödel accepted it
      as the right definition.
    contested: true
    contested_note: >-
      Church's paper appeared first, by a few weeks. Turing learned of it just before
      submitting and added an appendix proving the two approaches equivalent. Priority for
      the negative answer belongs to Church. Turing's analysis of what computation *is*
      is generally regarded as the more fundamental and convincing, and Turing then went to
      Princeton to study under Church.
    sources:
      - citation: "Turing, A. M. (1936). On computable numbers, with an application to the Entscheidungsproblem. Proceedings of the London Mathematical Society s2-42: 230–265."
        url: null
      - citation: "Church, A. (1936). An unsolvable problem of elementary number theory. American Journal of Mathematics 58(2): 345–363."
        url: null

  - id: universal-machine
    date: 1936 – 1945
    type: REFORMULATION
    title: From universal machine to stored-program computer
    description: >-
      Turing's 1936 paper describes a universal machine that reads another machine's
      rules from its tape and simulates it. In 1945 John von Neumann's report on the EDVAC
      describes an electronic computer that holds its program in the same memory as its
      data. The abstract universal machine becomes the architecture of practically every
      computer since.
    contested: true
    contested_note: >-
      The EDVAC report circulated under von Neumann's name alone, but the stored-program
      design grew out of work with J. Presper Eckert and John Mauchly, who had built ENIAC
      and felt their contribution was taken, a grievance that also cost them patent
      rights. How directly Turing's paper influenced von Neumann is debated too. Turing
      himself designed a stored-program machine, the ACE, in 1945–46.
    sources:
      - citation: "von Neumann, J. (1945). First Draft of a Report on the EDVAC. Moore School of Electrical Engineering, University of Pennsylvania."
        url: null
      - citation: "Davis, M. (2000). The Universal Computer: The Road from Leibniz to Turing. W. W. Norton."
        url: null

  - id: rice-theorem
    date: "1953"
    type: PROOF
    title: Rice's theorem
    description: >-
      Henry Gordon Rice proves that every non-trivial question about what a program
      *does*, as opposed to how it is written, is undecidable. Whether a program ever
      outputs 0, computes a particular function, or contains no bugs of a given kind:
      there is no general algorithm for any of them.
    contested: false
    sources:
      - citation: "Rice, H. G. (1953). Classes of recursively enumerable sets and their decision problems. Transactions of the AMS 74(2): 358–366."
        url: null

  - id: hilberts-tenth
    date: 1950 – 1970
    type: DISPROOF
    title: Hilbert's tenth problem is unsolvable
    description: >-
      Hilbert's tenth problem asked for a method to decide whether any polynomial equation
      with integer coefficients has a whole-number solution. Building on two decades of
      work by Martin Davis, Hilary Putnam and Julia Robinson, the 22-year-old Yuri
      Matiyasevich completes the proof in 1970 that no such method exists. Undecidability
      reaches the oldest questions of number theory.
    contested: false
    sources:
      - citation: "Davis, M., Putnam, H. & Robinson, J. (1961). The decision problem for exponential Diophantine equations. Annals of Mathematics 74(3): 425–436."
        url: null
      - citation: "Matiyasevich, Yu. V. (1970). Enumerable sets are Diophantine. Soviet Mathematics Doklady 11: 354–358."
        url: null

  - id: busy-beaver-5
    date: "2024"
    type: PROOF
    title: The fifth Busy Beaver number is determined
    description: >-
      The Busy Beaver function $BB(n)$, the longest a halting $n$-state Turing machine can
      run, grows faster than any computable function. An online collaboration,
      bbchallenge, classifies every 5-state machine and proves $BB(5) = 47{,}176{,}870$,
      with the proof checked in the Coq proof assistant. It is a rare exact value of an
      uncomputable function.
    contested: false
    sources:
      - citation: "The bbchallenge Collaboration (2024). Announcement and Coq proof that BB(5) = 47,176,870."
        url: https://bbchallenge.org

open_problems:
  - id: busy-beaver-6
    name: What is BB(6)?
    status: open
    status_note: Open as of writing; known to be astronomically large.
    description: >-
      For six states the Busy Beaver value is unknown, and known lower bounds are
      unimaginably large. Some 6-state machines behave like unsolved problems in number
      theory, iterating Collatz-like rules, so deciding whether they halt may be as hard as
      famous open conjectures.
    why_hard: >-
      Each small machine has to be proved to halt or to run forever, and a few resist every
      known technique because their behaviour encodes open mathematical questions. For
      larger $n$, the values are provably independent of ZFC: at some finite size the
      question leaves mathematics' reach entirely.
    unlocks: >-
      Each new value marks exactly how far current mathematics can see into the space of
      programs.
    sources:
      - citation: "Aaronson, S. (2020). The Busy Beaver frontier. ACM SIGACT News 51(3): 32–54."
        url: null

applications:
  - area: Computing
    title: Every computer is a universal machine
    description: >-
      A laptop can run a word processor, a game or a climate model without rewiring,
      because it is a physical approximation of Turing's universal machine: the program
      is just more data.
    sources: []
  - area: Security
    title: Why no antivirus can be perfect
    description: >-
      Fred Cohen showed in 1987 that deciding whether an arbitrary program is a virus is
      undecidable, a consequence of the halting problem. Security tools must rely on
      approximations, and determined attackers can always find gaps.
    sources:
      - citation: "Cohen, F. (1987). Computer viruses: theory and experiments. Computers & Security 6(1): 22–35."
        url: null
  - area: Quantum physics
    title: An undecidable question in physics
    description: >-
      In 2015 Cubitt, Perez-Garcia and Wolf proved that whether a quantum material has a
      "spectral gap", a basic physical property, is undecidable in general. The halting
      problem reappears inside a question about matter.
    domain: physics
    sources:
      - citation: "Cubitt, T. S., Perez-Garcia, D. & Wolf, M. M. (2015). Undecidability of the spectral gap. Nature 528: 207–211."
        url: null

further_reading:
  - citation: "Hodges, A. (1983). Alan Turing: The Enigma. Burnett Books."
    url: null
    note: The definitive biography, covering the mathematics, the codebreaking and his persecution.
  - citation: "Petzold, C. (2008). The Annotated Turing. Wiley."
    url: null
    note: Turing's 1936 paper read line by line, with the background explained.
  - citation: "Sipser, M. (2012). Introduction to the Theory of Computation (3rd ed.). Cengage."
    url: null
    note: The standard undergraduate textbook, admired for its clarity.
---

## What Is an Algorithm?

Hilbert's *Entscheidungsproblem* asked for a mechanical method to decide whether any mathematical statement follows from given axioms. To prove no such method exists, you first have to say exactly what a "mechanical method" is. No one had.

In 1936 two answers arrived within weeks. {{fig:church|Alonzo Church}} at Princeton defined computation with his lambda calculus. {{fig:turing|Alan Turing}}, a 23-year-old at Cambridge, imagined a clerk working with pencil and paper and stripped the process down to its essentials: a tape of symbols, a head that reads and writes one symbol at a time, and a finite table of rules. The two definitions turned out equivalent, as did every later proposal. The *Church–Turing thesis* holds that together they capture everything computable.

## Machines That Cannot Decide

With a definition, impossibility could be proved. Turing showed that no machine can decide, for every machine and input, whether it will eventually halt. Suppose one did. Build a machine that runs it on itself and does the opposite, and a contradiction follows. It is Cantor's diagonal argument again, the same trick Gödel had used in [metamathematics](/math/metamathematics/). The *Entscheidungsproblem* is unsolvable.

Undecidability spread. In 1953 Rice proved that *every* non-trivial question about a program's behaviour is undecidable. In 1970, after twenty years of work by {{fig:julia-robinson|Julia Robinson}}, Martin Davis and Hilary Putnam, the young {{fig:matiyasevich|Yuri Matiyasevich}} proved that no algorithm can decide whether a polynomial equation has whole-number solutions. That was Hilbert's tenth problem, and a question from [elementary number theory](/math/elementary-number-theory/).

## The Universal Machine

Turing's paper held a second idea. A machine's rule table can itself be written on a tape, so one *universal* machine can read any other machine's description and simulate it. Hardware need not change for each task, only software. In 1945 {{fig:von-neumann|John von Neumann}}'s report on the EDVAC described an electronic computer that stored its program in memory alongside its data. The report bore only his name, to the lasting anger of ENIAC's builders, J. Presper Eckert and John Mauchly. Turing designed his own stored-program computer that same year. Every computer since has been a universal machine.

## A Closer Look: The Halting Problem in Five Lines

Suppose someone claims to have written a program `halts(P, x)` that always answers correctly, in finite time, whether program `P` run on input `x` eventually stops. Use it to build a troublemaker:

```
troublemaker(P):
    if halts(P, P):      # would P stop when fed its own code?
        loop forever
    else:
        stop
```

Now run `troublemaker` on its own code. If `halts(troublemaker, troublemaker)` says "it stops", the program loops forever. If it says "it runs forever", the program stops. Either way `halts` gave the wrong answer about this one input. So no program `halts` can be correct on every input.

This is Cantor's diagonal argument again. Picture a table with a row for every program and a column for every input, showing whether that program halts on that input. `troublemaker` is built to disagree with the diagonal, so it cannot be any row of the table, and yet it is a perfectly good program if `halts` exists. The contradiction lies in assuming `halts` exists.

The consequences are practical. A compiler cannot warn about every infinite loop. A verifier cannot check every property of every program (Rice's theorem). An antivirus cannot recognise every virus. Tools in all three areas work around the limit with approximations: they answer "yes", "no" or "don't know", and the undecidable part lives in the "don't know".

It also explains the Busy Beaver function. If $BB(n)$ could be computed, then to decide whether an $n$-state machine halts you could run it for $BB(n)$ steps and see. That would solve the halting problem, so $BB$ cannot be computable, and it must eventually grow faster than any function a program can compute.

## The Edge of the Computable

Some functions outgrow computation itself. The Busy Beaver number $BB(n)$ is the longest any halting $n$-state Turing machine can run, and it eventually exceeds every computable function. In 2024 an online collaboration determined $BB(5) = 47{,}176{,}870$, with a machine-checked proof. $BB(6)$ is out of reach. Some 6-state machines mimic unsolved problems in number theory, and at some finite size the values are provably beyond the axioms of mathematics. Knowing what *can* be computed raised the next question, what can be computed *efficiently*, which is the subject of [computational complexity](/math/computational-complexity/).
