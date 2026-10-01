---
id: algorithmic-game-theory
domain: math
thread: decision
name: Algorithmic Game Theory
parent_ids:
  - social-choice
  - computational-complexity
era_emerged: 1999 – 2017
core_question: What does it cost to let a system be run by participants pursuing their own interests, and can equilibria be found, or mechanisms run, in reasonable time?

summary: |-
  Two assumptions in classical game theory stopped being harmless when the players became computers. The first is that an equilibrium, once proved to exist, can be found: Nash's theorem is a fixed-point argument and gives no procedure. The second is that an equilibrium outcome is what matters, with no accounting for how much worse it is than what a planner could arrange. The internet made both pressing, because it is a system with no central authority, run by millions of parties optimising locally, carrying traffic for which someone had to decide whether decentralisation is expensive.

  The field's organising quantity, introduced in 1999, is the price of anarchy: the ratio of the worst equilibrium's cost to the optimum's. It is often reassuringly small — for traffic routing with linear congestion it is exactly 4/3, so selfish routing wastes at most a third — and the bound holds for every network, which is the surprising part. The complexity side was settled less comfortably. Finding a Nash equilibrium was shown in 2006 to be complete for a class called PPAD, which means no efficient algorithm is expected, so an equilibrium can exist, be unique, and be beyond reach. Meanwhile mechanism design acquired a hard constraint: the general truthful mechanism requires solving an allocation problem exactly, and approximating it usually destroys the truthfulness.

key_ideas:
  - term: Price of anarchy
    definition: >-
      The ratio between the cost of the worst equilibrium and the cost of the best centrally planned
      outcome. It measures what decentralisation costs in the worst case, and for many natural games
      it is a small constant independent of the system's size.
    turning_point_id: koutsoupias-papadimitriou-poa
  - term: Braess's paradox
    definition: >-
      Adding a road to a network can make everyone's journey longer, because the new route changes
      where the equilibrium sits. The phenomenon is a corollary of equilibrium reasoning rather than
      a curiosity, and it has been observed when real streets were closed.
    turning_point_id: roughgarden-tardos-selfish-routing
  - term: PPAD
    definition: >-
      The complexity class of problems guaranteed to have a solution by a parity argument on a
      directed graph, of which finding a fixed point is the archetype. Nash equilibrium is complete
      for it, which places it below NP-hardness and well outside what is believed computable in
      polynomial time.
    turning_point_id: daskalakis-nash-ppad
  - term: Algorithmic mechanism design
    definition: >-
      Designing procedures that are simultaneously incentive-compatible and computationally
      tractable. The two requirements conflict: the standard truthful mechanism needs an exact
      optimum, and substituting an approximation generally lets participants gain by lying.
    turning_point_id: nisan-ronen
  - term: Smoothness
    definition: >-
      A property of a game that yields a price-of-anarchy bound automatically, and the bound then
      applies not only to equilibria but to the long-run behaviour of players who are merely
      learning — which matters because nobody computes equilibria in practice.
    turning_point_id: smoothness-framework
  - term: Generalised second-price auction
    definition: >-
      The rule used to sell search advertising: bidders are ranked, each pays just enough to keep its
      position. With more than one slot it is not truthful, unlike the single-item second-price
      auction it resembles, and its equilibria had to be analysed after it was already running at
      scale.
    turning_point_id: gsp-sponsored-search

turning_points:
  - id: koutsoupias-papadimitriou-poa
    date: "1999"
    type: REFORMULATION
    title: The price of anarchy
    description: >-
      Elias Koutsoupias and Christos Papadimitriou ask a question that classical game theory had no
      reason to pose: given that a system will settle at an equilibrium rather than at the optimum,
      how much is lost? They define the ratio of the worst equilibrium's cost to the optimal cost and
      compute it for a simple load-balancing problem. The quantity turned out to be bounded by small
      constants in a surprising range of settings, which converted a qualitative worry about
      decentralised systems into a measurable one.
    contested: false
    sources:
      - citation: "Koutsoupias, E. & Papadimitriou, C. (1999). Worst-case equilibria. Proceedings of STACS 1999: 404–413."
        url: null
      - citation: "Nisan, N., Roughgarden, T., Tardos, É. & Vazirani, V. V. (eds) (2007). Algorithmic Game Theory. Cambridge University Press."
        url: null

  - id: nisan-ronen
    date: 1999 – 2001
    type: REFORMULATION
    title: Mechanism design meets complexity
    description: >-
      Noam Nisan and Amir Ronen observe that mechanism design had always assumed the designer can
      compute the optimal allocation, which for combinatorial problems is NP-hard. They show the
      conflict is real and not an artefact: the Vickrey–Clarke–Groves mechanism is truthful because
      each participant's payment is tied to the exact optimum, and replacing that optimum with an
      approximation generally breaks truthfulness. Designing procedures that are both tractable and
      incentive-compatible becomes a subject in its own right.
    contested: false
    sources:
      - citation: "Nisan, N. & Ronen, A. (2001). Algorithmic mechanism design. Games and Economic Behavior 35: 166–196."
        url: null
      - citation: "Lehmann, D., O'Callaghan, L. I. & Shoham, Y. (2002). Truth revelation in approximately efficient combinatorial auctions. Journal of the ACM 49: 577–602."
        url: null

  - id: roughgarden-tardos-selfish-routing
    date: 2000 – 2004
    type: PROOF
    title: Selfish routing costs at most a third
    description: >-
      Tim Roughgarden and Éva Tardos prove that when each unit of traffic chooses its own route and
      congestion delays grow linearly with load, the total travel time at equilibrium is at most 4/3
      of the best possible — for every network, whatever its size or topology. They further show the
      worst case is attained by a two-edge example of Arthur Pigou's from 1920, and that the bound
      depends only on the class of delay functions, not on the graph. For polynomial delays of degree
      $d$ the ratio grows, but slowly.
    contested: false
    sources:
      - citation: "Roughgarden, T. & Tardos, É. (2002). How bad is selfish routing? Journal of the ACM 49: 236–259."
        url: null
      - citation: "Roughgarden, T. (2005). Selfish Routing and the Price of Anarchy. MIT Press."
        url: null

  - id: daskalakis-nash-ppad
    date: 2006 – 2009
    type: PROOF
    title: Finding a Nash equilibrium is hard
    description: >-
      Constantinos Daskalakis, Paul Goldberg and Christos Papadimitriou prove that computing a Nash
      equilibrium of a game with four or more players is complete for PPAD, the class of problems whose
      solutions are guaranteed by a parity argument; Xi Chen and Xiaotie Deng extend it to two
      players. Since PPAD-complete problems are not believed solvable in polynomial time, Nash's
      existence theorem is non-constructive in a precise and permanent sense. An equilibrium may
      exist, be unique, and be unreachable by any efficient procedure — which undermines using it to
      predict what agents will do.
    contested: false
    sources:
      - citation: "Daskalakis, C., Goldberg, P. W. & Papadimitriou, C. H. (2009). The complexity of computing a Nash equilibrium. SIAM Journal on Computing 39: 195–259."
        url: null
      - citation: "Chen, X., Deng, X. & Teng, S.-H. (2009). Settling the complexity of computing two-player Nash equilibria. Journal of the ACM 56: 1–57."
        url: null

  - id: gsp-sponsored-search
    date: 2006 – 2007
    type: REFORMULATION
    title: Analysing the auction that was already running
    description: >-
      Search engines were selling advertising slots by a rule invented in-house: rank bidders, and
      charge each just above the bid below it. Benjamin Edelman, Michael Ostrovsky and Michael
      Schwarz, and independently Hal Varian, analyse it and find it is *not* truthful once there is
      more than one slot, although it resembles the auction that is. They characterise its equilibria
      and show that a particular one reproduces the truthful mechanism's outcome. Hundreds of billions
      of pounds of revenue had accumulated before the mechanism was understood.
    contested: false
    sources:
      - citation: "Edelman, B., Ostrovsky, M. & Schwarz, M. (2007). Internet advertising and the generalized second-price auction. American Economic Review 97: 242–259."
        url: null
      - citation: "Varian, H. R. (2007). Position auctions. International Journal of Industrial Organization 25: 1163–1178."
        url: null

  - id: smoothness-framework
    date: 2009 – 2015
    type: PROOF
    title: Bounds that survive players who only learn
    description: >-
      Equilibrium is an uncomfortable assumption once finding one is known to be hard. Tim Roughgarden
      identifies a structural property — smoothness — that yields a price-of-anarchy bound by a short
      argument, and proves that any bound obtained this way applies automatically to much weaker
      notions of rational behaviour: correlated equilibria, and the time-averaged outcome of players
      using any no-regret learning rule. The guarantees therefore do not depend on anyone computing an
      equilibrium, only on nobody persistently losing to a fixed alternative.
    contested: false
    sources:
      - citation: "Roughgarden, T. (2015). Intrinsic robustness of the price of anarchy. Journal of the ACM 62: 32."
        url: null
      - citation: "Blum, A., Hajiaghayi, M., Ligett, K. & Roth, A. (2008). Regret minimization and the price of total anarchy. Proceedings of STOC 2008: 373–382."
        url: null

  - id: fcc-incentive-auction
    date: 2016 – 2017
    type: REFORMULATION
    title: An auction with a solver inside it
    description: >-
      The United States repurposed television spectrum for mobile broadband by running two auctions at
      once: broadcasters bid to relinquish channels, and mobile operators bid for the cleared
      spectrum. Deciding whether a given set of remaining broadcasters can be packed into fewer
      channels without interference is an NP-hard graph-colouring problem, and the auction had to
      answer it tens of thousands of times, within seconds, as part of the price-setting rule. A
      specialised satisfiability solver did it. The auction cleared 84 MHz and moved about $19 billion.
    contested: false
    sources:
      - citation: "Leyton-Brown, K., Milgrom, P. & Segal, I. (2017). Economics and computer science of a radio spectrum reallocation. PNAS 114: 7202–7209."
        url: null
      - citation: "Milgrom, P. & Segal, I. (2020). Clock auctions and radio spectrum reallocation. Journal of Political Economy 128: 1–31."
        url: null

open_problems:
  - id: approximate-nash-complexity
    name: How well a Nash equilibrium can be approximated quickly
    status: open
    status_note: Open as of 2026; the gap between the best algorithm and the best lower bound has not closed.
    description: >-
      Exact Nash equilibria are PPAD-complete, so the question becomes approximation: find a profile
      in which no player can gain more than $\varepsilon$ by deviating. For two-player games there is
      an algorithm running in time roughly $n^{O(\log n / \varepsilon^{2})}$ — quasi-polynomial — and
      a matching hardness result under a plausible complexity assumption, but no polynomial-time
      algorithm for constant $\varepsilon$ and no proof that none exists.
    why_hard: >-
      The quasi-polynomial algorithm works by searching over equilibria with small support, and the
      hardness results rely on assumptions about PPAD that are themselves unproven. Closing the gap
      appears to require either a genuinely new algorithmic idea for fixed points or a strengthening
      of complexity-theoretic hypotheses that has resisted the same barriers as P versus NP.
    unlocks: >-
      Equilibrium prediction is used throughout economics, and whether an approximate equilibrium is
      efficiently findable determines whether that prediction is about something agents could
      plausibly reach. The same approximate-fixed-point machinery also governs market equilibria and
      the convergence of learning dynamics.
    sources:
      - citation: "Lipton, R. J., Markakis, E. & Mehta, A. (2003). Playing large games using simple strategies. Proceedings of EC 2003: 36–41."
        url: null
      - citation: "Rubinstein, A. (2018). Inapproximability of Nash equilibrium. SIAM Journal on Computing 47: 917–959."
        url: null

applications:
  - area: Advertising markets
    title: The auctions that fund the web
    description: >-
      Search and display advertising is sold by auction, billions of times a day, with reserve prices,
      quality scores and budget pacing layered on top. The mechanisms must clear in milliseconds, so
      every design decision is simultaneously an incentive question and an algorithmic one, and the
      theory of this field is what is used to reason about them — including the finding that the rule
      everyone was already using is not truthful.
    sources:
      - citation: "Edelman, B., Ostrovsky, M. & Schwarz, M. (2007). Internet advertising and the generalized second-price auction. American Economic Review 97: 242–259."
        url: null
  - area: Transport
    title: Closing a road to speed up traffic
    description: >-
      Braess's paradox says a new link can raise everyone's travel time, and the converse has been
      observed: closing 42nd Street in New York in 1990 and a central artery in Stuttgart improved
      flow. Congestion pricing is the systematic remedy — charging each driver for the delay they
      impose on others moves the equilibrium to the optimum, which is the practical content of the
      price-of-anarchy analysis.
    sources:
      - citation: "Youn, H., Gastner, M. T. & Jeong, H. (2008). Price of anarchy in transportation networks. Physical Review Letters 101: 128701."
        url: null
      - citation: "Roughgarden, T. (2005). Selfish Routing and the Price of Anarchy. MIT Press."
        url: null
  - area: Networks
    title: Protocols as games
    description: >-
      Internet routing between autonomous networks, congestion control, peer-to-peer file sharing and
      the consensus rules of distributed ledgers are all systems where participants can deviate from
      the protocol if it pays. Analysing them as games has found both reassurance — standard
      congestion control is close to a stable equilibrium — and genuine vulnerabilities, including
      mining strategies that earn more than following the rules.
    sources:
      - citation: "Eyal, I. & Sirer, E. G. (2014). Majority is not enough: Bitcoin mining is vulnerable. Proceedings of Financial Cryptography 2014: 436–454."
        url: null

further_reading:
  - citation: "Nisan, N., Roughgarden, T., Tardos, É. & Vazirani, V. V. (eds) (2007). Algorithmic Game Theory. Cambridge University Press."
    url: null
    note: The field's founding collection; free online, and each chapter is a readable survey.
  - citation: "Roughgarden, T. (2016). Twenty Lectures on Algorithmic Game Theory. Cambridge University Press."
    url: null
    note: A teachable route through the main results, with the proofs that are short actually given.
  - citation: "Papadimitriou, C. H. (2007). The complexity of finding Nash equilibria. In Algorithmic Game Theory, 29–51. Cambridge University Press."
    url: null
    note: The complexity story told by one of the people who settled it.
---

## Two Assumptions That Broke

Classical game theory was built to analyse people and institutions, and it took two things for granted. The first is that equilibrium is the right object of study, so whatever it costs relative to a well-planned alternative is not the theory's business. The second is that once existence is proved, computing an equilibrium is a detail.

The internet made both assumptions visible. Here was a system of global importance with no central authority, in which every router, network and user optimises locally, and with no one in a position to impose an allocation. Two questions follow immediately. How much worse is the result than if someone were in charge? And can the participants — or anyone — actually find the equilibrium they are supposed to be in?

{{fig:koutsoupias|Elias Koutsoupias}} and {{fig:papadimitriou|Christos Papadimitriou}} named the first quantity in 1999. The price of anarchy is the ratio of the worst equilibrium's cost to the optimum's, and the hope that it might be a small constant across whole classes of games turned out to be justified.

## A Closer Look: Pigou's Two Roads and Braess's Extra One

**One unit of traffic, two routes.** This example is due to {{fig:pigou|Arthur Pigou}} in 1920 and is the worst case of the general theorem. A unit of traffic travels from $s$ to $t$. The upper road is wide: its travel time is 1 regardless of load. The lower road is short but congests: carrying a fraction $x$ of the traffic, its travel time is $x$.

At equilibrium, every driver takes the lower road, because its time is at most 1 and strictly less whenever anyone is on the upper road. Total travel time is

$$
C_{\text{eq}} = 1 \times 1 = 1.
$$

The social optimum splits the traffic. Sending a fraction $x$ below and $1-x$ above costs

$$
C(x) = x \cdot x + (1-x)\cdot 1 = x^{2} - x + 1,
$$

minimised at $x = 1/2$:

$$
C_{\text{opt}} = \tfrac{1}{4} - \tfrac{1}{2} + 1 = 0.75.
$$

So the price of anarchy is

$$
\frac{C_{\text{eq}}}{C_{\text{opt}}} = \frac{1}{0.75} = \frac{4}{3}.
$$

{{fig:roughgarden|Tim Roughgarden}} and {{fig:tardos|Éva Tardos}} proved that this is not merely an example but the *bound*: for any network of any size and topology, with travel times that are linear in load, selfish routing costs at most 4/3 of the optimum, and this little two-edge graph attains it. The size of the network is irrelevant. That is a remarkable thing to be able to say about an arbitrary graph, and it is the kind of result that made the field.

**Now add a road.** Four nodes. From $s$ to $a$ the delay is $x$ (the flow on that edge); from $a$ to $t$ it is 1; from $s$ to $b$ it is 1; from $b$ to $t$ it is $x$. One unit of traffic goes from $s$ to $t$ by one of two routes, $s\!\to\!a\!\to\!t$ or $s\!\to\!b\!\to\!t$, which are symmetric. At equilibrium the traffic splits evenly and each driver's time is

$$
0.5 + 1 = 1.5.
$$

Build a new road from $a$ to $b$ with zero delay. Consider a driver on the upper route: on reaching $a$, the remaining journey via $t$ costs 1, while via $b$ it costs $0 + x_{bt}$. Every driver now prefers $s\!\to\!a\!\to\!b\!\to\!t$, and once all of them do, both congesting edges carry the full unit:

$$
1 + 0 + 1 = 2.
$$

Everyone's journey is a third longer than before the road was built, and no one can improve by deviating: the old routes now cost $1 + 1 = 2$ as well. This is {{fig:braess|Dietrich Braess}}'s paradox, it is a consequence of equilibrium rather than of anything irrational, and it has been seen in practice — traffic in New York improved when 42nd Street was closed in 1990.

Both examples point to the same remedy, which is why this is a mathematical result with a policy attached. The inefficiency arises because a driver pays their own delay and not the delay they add to everyone else. Charge the difference — a congestion toll equal to the externality — and the equilibrium moves to the optimum exactly.

## Equilibria That Cannot Be Found

{{fig:nash|Nash}}'s existence proof applies Kakutani's fixed-point theorem, and fixed-point theorems are notoriously non-constructive. Whether that mattered was an open question for fifty years, and in 2006 it was answered. {{fig:daskalakis|Constantinos Daskalakis}}, {{fig:goldberg|Paul Goldberg}} and Papadimitriou showed that computing a Nash equilibrium is complete for PPAD — the class of problems whose solutions are guaranteed by a parity argument on a directed graph, with finding a fixed point as the archetype — and Chen and Deng extended the result to two-player games.

PPAD-completeness is a weaker statement than NP-hardness, and in this context it is bad enough: these problems are not believed to admit polynomial-time algorithms, and the same barriers that obstruct [P versus NP](/math/computational-complexity/) obstruct progress here. The consequence for economics is sharp. An equilibrium can exist, be unique, and be beyond the reach of any efficient procedure. Predicting that agents will be at it then requires believing they can do something no algorithm can.

The field's response is instructive, because it did not consist of trying harder. It consisted of weakening the assumption. Real participants do not compute equilibria; they adjust, repeatedly, using simple learning rules that guarantee only that in hindsight no single fixed strategy would have done much better — the no-regret property. Roughgarden's smoothness framework shows that price-of-anarchy bounds proved in a particular short form automatically apply to the time-averaged behaviour of any such learners. The 4/3 bound for selfish routing therefore holds without anyone ever being at equilibrium, which is a considerably more defensible claim about traffic.

## Mechanisms That Have to Run

The design side ran into the complementary obstacle. The general truthful mechanism — Vickrey–Clarke–Groves, the multi-item generalisation of the [second-price auction](/math/social-choice/) — works by charging each participant the harm they do to everyone else, computed as a difference of two optimal allocations. {{fig:nisan|Noam Nisan}} and {{fig:ronen|Amir Ronen}} pointed out in 1999 that for combinatorial problems those optima are NP-hard, and that substituting an approximation generally destroys truthfulness, because a participant can now gain by reporting values that steer the heuristic.

Two decades of work went into finding mechanisms that are both approximately optimal and exactly truthful, with real successes in restricted settings and no general solution. Meanwhile the practical world did not wait. Search advertising was sold for years by a ranking rule that resembles a second-price auction and is not truthful with more than one slot, a fact established by {{fig:edelman|Benjamin Edelman}} and colleagues and by {{fig:varian|Hal Varian}} only after the mechanism was handling enormous sums.

The clearest demonstration that the two halves can be made to meet is the American spectrum incentive auction of 2016. Broadcasters bid to give up channels while mobile operators bid for cleared bandwidth, and the price offered to each broadcaster depended on whether the remaining stations could be repacked into fewer channels without interference — an NP-hard graph-colouring question that had to be answered tens of thousands of times, in seconds each, inside the auction's own pricing rule. A purpose-built satisfiability solver did it, and the auction reallocated 84 MHz of spectrum. It is the closest thing the subject has to a controlled demonstration that incentives and computation can be designed together, and it took sixty years from {{fig:vickrey|Vickrey}}'s paper to get there.
