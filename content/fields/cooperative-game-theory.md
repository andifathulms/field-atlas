---
id: cooperative-game-theory
domain: math
thread: decision
name: Cooperative Game Theory
parent_ids:
  - game-theory
era_emerged: 1944 – 2004
core_question: If a group can agree to act together, how should the gains be divided, and which agreements will hold?

summary: |-
  Non-cooperative game theory asks what people will do when they cannot make binding promises. Cooperative game theory assumes they can, and asks a different question: given that every subset of players could achieve a certain value by working together, what division of the total is fair, and what division is stable? The two criteria are not the same, and the gap between them is most of the subject.

  Stability has a natural definition. A proposed division is in the *core* if no subgroup could do better by walking out. It is an exacting test, and it has two awkward properties: the core is often a large set, offering no guidance, and it is often empty, offering none either. Fairness was axiomatised instead. Lloyd Shapley asked in 1953 what properties a division ought to have — each player's share should reflect what they add, equals should get equal shares, the whole should be divided — and proved that exactly one rule satisfies them: pay each player their average marginal contribution over all orders in which the coalition might have formed. The same style of argument, applied to matching rather than money, produced the algorithm now used to assign medical residents to hospitals, children to schools, and donated kidneys to patients.

key_ideas:
  - term: Characteristic function
    definition: >-
      A function assigning to every subset of players the value that subset can secure on its own.
      It discards all detail about how the value is produced, which is what makes the problem
      tractable and what limits its realism.
    turning_point_id: the-core
  - term: The core
    definition: >-
      The set of divisions of the total that no coalition can beat on its own. It is the natural
      stability requirement, and it can be large, a single point, or empty, depending on the game.
    turning_point_id: the-core
  - term: Shapley value
    definition: >-
      The unique division satisfying efficiency, symmetry, additivity and the null-player condition:
      each player receives their average marginal contribution, averaged over all orders of joining.
      It always exists and is always unique, and it need not lie in the core.
    turning_point_id: shapley-value
  - term: Bargaining solution
    definition: >-
      For two players dividing a surplus, Nash's axioms single out the division that maximises the
      product of the two players' gains over their fallback positions — so the outcome depends on
      what each side can get by walking away.
    turning_point_id: nash-bargaining
  - term: Stable matching
    definition: >-
      A pairing with no blocking pair: no two participants who would both rather be matched to each
      other than to their assigned partners. Gale and Shapley proved one always exists and gave an
      algorithm that finds it.
    turning_point_id: gale-shapley-deferred-acceptance
  - term: Strategyproofness
    definition: >-
      A mechanism is strategyproof for a participant if truthfully reporting preferences is always at
      least as good as misreporting. In two-sided matching, deferred acceptance is strategyproof for
      the proposing side and provably cannot be for both.
    turning_point_id: market-design-practice

turning_points:
  - id: nash-bargaining
    date: "1950"
    type: PROOF
    title: Nash's bargaining solution
    description: >-
      Two parties can share a surplus if they agree and get nothing if they do not. Nash asks what
      properties a solution should satisfy — it should not depend on the units utilities are measured
      in, it should treat symmetric players symmetrically, it should not waste anything, and removing
      an irrelevant alternative should not change it — and proves that exactly one rule satisfies all
      four: maximise the product of the two players' gains above their fallback positions. The
      fallback, not the bargaining, determines the outcome.
    contested: false
    sources:
      - citation: "Nash, J. F. (1950). The bargaining problem. Econometrica 18: 155–162."
        url: null
      - citation: "Rubinstein, A. (1982). Perfect equilibrium in a bargaining model. Econometrica 50: 97–109."
        url: null

  - id: the-core
    date: 1953 – 1959
    type: REFORMULATION
    title: The core
    description: >-
      Donald Gillies and Lloyd Shapley formalise the stability requirement implicit in von Neumann
      and Morgenstern's treatment of coalitions: a division of the gains survives only if no subgroup
      could secure more by itself. The set of such divisions is the core. Herbert Scarf and others
      then connected it to economics, showing that in a large exchange economy the core shrinks to
      the competitive equilibrium — a result that explains what prices are doing in terms of
      coalitions rather than supply curves.
    contested: false
    sources:
      - citation: "Gillies, D. B. (1959). Solutions to general non-zero-sum games. In Contributions to the Theory of Games IV: 47–85. Princeton University Press."
        url: null
      - citation: "Debreu, G. & Scarf, H. (1963). A limit theorem on the core of an economy. International Economic Review 4: 235–246."
        url: null

  - id: shapley-value
    date: "1953"
    type: PROOF
    title: The Shapley value
    description: >-
      Lloyd Shapley asks not what division is stable but what division is fair, and proceeds
      axiomatically. Require that the whole be distributed, that players who contribute identically
      receive identically, that a player who adds nothing to any coalition receives nothing, and that
      the rule be additive across independent games. Exactly one assignment satisfies all four: give
      each player the average of the amount they add to the coalition, over all possible orders in
      which the players might arrive.
    contested: false
    sources:
      - citation: "Shapley, L. S. (1953). A value for n-person games. In Contributions to the Theory of Games II: 307–317. Princeton University Press."
        url: null
      - citation: "Roth, A. E. (ed.) (1988). The Shapley Value: Essays in Honor of Lloyd S. Shapley. Cambridge University Press."
        url: null

  - id: shapley-shubik-power-index
    date: "1954"
    type: REFORMULATION
    title: Measuring voting power
    description: >-
      Lloyd Shapley and Martin Shubik apply the value to a voting body, counting the fraction of
      orderings in which a given member is the one whose vote turns a losing coalition into a winning
      one. The result frequently contradicts the formal allocation of votes: a member with a tenth of
      the votes may hold a fifth of the power, or none at all. Applied to the European Union's
      Council, to shareholder blocks and to the UN Security Council, such indices show how badly
      vote counts measure influence.
    contested: true
    contested_note: >-
      Which power index to use is disputed. The Shapley–Shubik index counts orderings; the
      Banzhaf index counts coalitions; they rank members differently in real voting bodies, and the
      disagreement is not resolvable from within the mathematics because the two answer subtly
      different questions about what "being decisive" means.
    sources:
      - citation: "Shapley, L. S. & Shubik, M. (1954). A method for evaluating the distribution of power in a committee system. American Political Science Review 48: 787–792."
        url: null
      - citation: "Felsenthal, D. S. & Machover, M. (1998). The Measurement of Voting Power. Edward Elgar."
        url: null

  - id: gale-shapley-deferred-acceptance
    date: "1962"
    type: PROOF
    title: Deferred acceptance
    description: >-
      David Gale and Lloyd Shapley ask whether two groups with preferences over each other can always
      be paired so that no two people prefer each other to their assigned partners. They prove the
      answer is yes, by exhibiting an algorithm: each member of one side proposes to their favourite,
      each member of the other side holds the best offer so far and rejects the rest, and rejected
      proposers move down their lists. The process terminates, always produces a stable matching, and
      gives the proposing side its best stable outcome. The paper was six pages and appeared in a
      teaching journal.
    contested: false
    sources:
      - citation: "Gale, D. & Shapley, L. S. (1962). College admissions and the stability of marriage. American Mathematical Monthly 69: 9–15."
        url: null
      - citation: "Knuth, D. E. (1976). Mariages Stables. Les Presses de l'Université de Montréal."
        url: null

  - id: market-design-practice
    date: 1984 – 2004
    type: REFORMULATION
    title: The theory gets used
    description: >-
      Alvin Roth discovers that the American system for assigning medical graduates to hospital
      residencies, designed by trial and error in 1952, is essentially the deferred-acceptance
      algorithm, and that the regional markets which failed had used unstable mechanisms. He then
      redesigns real institutions with the theory: the residency match to accommodate couples in
      1998, New York City's high-school assignment in 2003, and kidney exchange, where incompatible
      donor-patient pairs are matched into cycles and chains so that each patient receives a
      compatible organ.
    contested: false
    sources:
      - citation: "Roth, A. E. (1984). The evolution of the labor market for medical interns and residents: a case study in game theory. Journal of Political Economy 92: 991–1016."
        url: null
      - citation: "Roth, A. E., Sönmez, T. & Ünver, M. U. (2004). Kidney exchange. Quarterly Journal of Economics 119: 457–488."
        url: null
      - citation: "Abdulkadiroğlu, A., Pathak, P. A. & Roth, A. E. (2005). The New York City high school match. American Economic Review 95: 364–367."
        url: null

open_problems:
  - id: matching-with-couples
    name: Stable matching when applicants come in pairs
    status: open
    status_note: Open as of 2026; existence is not guaranteed and deciding it is NP-complete, so practical matches use heuristics.
    description: >-
      The residency match must place couples who want jobs in the same city, which means a pair of
      positions is accepted or rejected together. With such complementarities, a stable matching may
      not exist at all, and deciding whether one exists is NP-complete. The algorithms used in
      practice search for a stable outcome and usually find one, without any guarantee.
    why_hard: >-
      Deferred acceptance works because each participant's preferences over one partner are
      independent of everything else. A couple's preference is over pairs of positions, which breaks
      that independence, and with it the lattice structure that makes the set of stable matchings well
      behaved. Nothing replaces it: the known positive results are asymptotic, requiring the number of
      couples to be small relative to the market.
    unlocks: >-
      Tens of thousands of doctors are placed by such a mechanism every year, and school assignment,
      course allocation and refugee resettlement all have similar complementarities. A general theory
      would say when the heuristics can be trusted.
    sources:
      - citation: "Roth, A. E. (1984). The evolution of the labor market for medical interns and residents. Journal of Political Economy 92: 991–1016."
        url: null
      - citation: "Ashlagi, I., Braverman, M. & Hassidim, A. (2014). Stability in large matching markets with complementarities. Operations Research 62: 713–732."
        url: null

applications:
  - area: Medicine
    title: Kidney exchange
    description: >-
      A patient with a willing but incompatible donor is of no use to a transplant surgeon and of
      great use to an algorithm: two such pairs may be able to swap donors, and longer cycles and
      chains started by an altruistic donor extend the idea. Formulating the problem as finding
      maximum-weight cycles in a directed graph, with the constraint that all transplants in a cycle
      happen simultaneously, has produced thousands of transplants that would not otherwise have
      occurred.
    domain: biology
    field_id: immunology
    sources:
      - citation: "Roth, A. E., Sönmez, T. & Ünver, M. U. (2004). Kidney exchange. Quarterly Journal of Economics 119: 457–488."
        url: null
  - area: Public administration
    title: Assigning children to schools
    description: >-
      The mechanism a city uses to assign school places determines whether families should state their
      true preferences. Boston's old system rewarded strategic misreporting — listing an
      over-subscribed first choice could cost a family its second — which advantaged well-advised
      parents. Replacing it with deferred acceptance in 2005 made truthful reporting optimal for
      families, and the change was argued for on exactly that ground.
    sources:
      - citation: "Abdulkadiroğlu, A. & Sönmez, T. (2003). School choice: a mechanism design approach. American Economic Review 93: 729–747."
        url: null
  - area: Attribution
    title: Dividing credit, from airports to neural networks
    description: >-
      The Shapley value is the standard answer whenever a joint result must be apportioned among
      contributors: the cost of a runway among airlines whose aircraft need different lengths, the
      cost of a shared pipeline, the contribution of each advertising channel to a sale. It is also
      the basis of the most widely used method for explaining a machine-learning prediction, where
      each input feature is treated as a player in a game whose value is the model's output.
    sources:
      - citation: "Littlechild, S. C. & Owen, G. (1973). A simple expression for the Shapley value in a special case. Management Science 20: 370–372."
        url: null
      - citation: "Lundberg, S. M. & Lee, S.-I. (2017). A unified approach to interpreting model predictions. Advances in Neural Information Processing Systems 30: 4765–4774."
        url: null

further_reading:
  - citation: "Roth, A. E. & Sotomayor, M. (1990). Two-Sided Matching. Cambridge University Press."
    url: null
    note: The definitive treatment of matching theory, written just before it was widely deployed.
  - citation: "Moulin, H. (2003). Fair Division and Collective Welfare. MIT Press."
    url: null
    note: The axiomatic approach to fairness, with the trade-offs between axioms made explicit.
  - citation: "Roth, A. E. (2015). Who Gets What — and Why. Houghton Mifflin Harcourt."
    url: null
    note: Market design for general readers, by the person who did most of it.
---

## Two Questions That Have Different Answers

Suppose three people can produce something of value together, and smaller groups among them can produce less. Everything about who does what and how is abstracted away into a single function: for each subset of the players, the amount that subset could secure on its own. This is a drastic simplification, and it leaves two well-posed questions.

The first is about stability. A division of the total is *stable* if no subgroup could do better by leaving. This is the core, formalised by {{fig:gillies|Donald Gillies}} and {{fig:shapley|Lloyd Shapley}} in the 1950s, and it is a demanding requirement — one inequality for every subset, so $2^{n}$ of them.

The second is about fairness, and it cannot be read off the characteristic function without further commitments. Shapley's move in 1953 was to state the commitments as axioms and see what they force. Divide the whole thing; treat interchangeable players alike; give nothing to a player who adds nothing to any coalition; and let the rule be additive when two independent games are played at once. Exactly one assignment satisfies all four, and it has a vivid description: imagine the players arriving in a random order, each being paid what they add to the group already present, and average over all orders.

Both questions are reasonable. Their answers frequently disagree.

## A Closer Look: A Seller, Two Buyers, and a Division That Is Not Stable

Take a market with three players. A seller, $A$, owns an object worth nothing to her. Buyer $B$ values it at 100, buyer $C$ at 80. The characteristic function is

$$
v(A) = v(B) = v(C) = 0, \quad v(AB) = 100, \quad v(AC) = 80, \quad v(BC) = 0, \quad v(ABC) = 100.
$$

**The core.** A division $(x_A, x_B, x_C)$ summing to 100 must satisfy $x_A + x_B \ge 100$, which given that the total is 100 forces $x_C = 0$. It must also satisfy $x_A + x_C \ge 80$, so $x_A \ge 80$. The core is therefore

$$
\{(x_A,\,100 - x_A,\,0) : 80 \le x_A \le 100\}.
$$

The economics is visible in the inequalities. The losing buyer gets nothing, and the seller captures at least 80 — the amount the competing buyer would pay — because $A$ and $C$ could always walk off together. What the seller gets above 80 is indeterminate: the core does not pick a point.

**The Shapley value.** Average each player's marginal contribution over all six orders of arrival:

| Order | $A$ adds | $B$ adds | $C$ adds |
|---|---|---|---|
| $A,B,C$ | 0 | 100 | 0 |
| $A,C,B$ | 0 | 20 | 80 |
| $B,A,C$ | 100 | 0 | 0 |
| $B,C,A$ | 100 | 0 | 0 |
| $C,A,B$ | 80 | 20 | 0 |
| $C,B,A$ | 100 | 0 | 0 |

Summing columns gives 380, 140 and 80, which total 600 as they must, and dividing by six:

$$
\varphi_A = \tfrac{380}{6} = 63.3, \qquad \varphi_B = \tfrac{140}{6} = 23.3, \qquad \varphi_C = \tfrac{80}{6} = 13.3.
$$

The fair division gives the seller 63.3, and the core requires at least 80. **The Shapley value is not in the core.** By the fairness axioms, the losing bidder deserves 13.3 for having been a credible alternative; by the stability requirement, he gets nothing, because the seller and the winning buyer can simply exclude him. No reconciliation is available: these are different questions, and in games like this one — where coalitions substitute rather than complement — they have different answers.

**The core can also be empty.** Take three players where any two can secure 1 and a single player nothing:

$$
v(i) = 0, \quad v(ij) = 1, \quad v(123) = 1.
$$

A core division needs $x_1 + x_2 \ge 1$, $x_1 + x_3 \ge 1$ and $x_2 + x_3 \ge 1$. Adding all three gives $2(x_1+x_2+x_3) \ge 3$, so the total must be at least 1.5, while only 1 exists. The core is empty: whatever the three agree, some pair can do better by abandoning the third. This is the structure of a three-party coalition government, and the instability is not a defect of the players.

The Shapley value, by contrast, always exists and is always unique — here $(1/3, 1/3, 1/3)$ — which is its practical advantage and the reason it is used for allocating costs and apportioning credit. It is a recommendation, not a prediction.

## Matching Without Money

The field's largest practical success came from dropping money altogether. {{fig:gale|David Gale}} and Shapley asked, in 1962, whether two sides with preferences over each other can always be paired so that no two participants would both rather have each other than their assigned partners. Such a blocking pair would, in any real institution, simply go around the mechanism, so a matching containing one will not hold.

The proof is an algorithm. Everyone on one side proposes to their favourite. Each recipient holds the best offer received so far and rejects the others. Rejected proposers approach their next choice, and recipients again keep only the best offer in hand — including, possibly, discarding someone they were holding. Since no proposer ever revisits a rejection, the process must terminate; and at termination there is no blocking pair, because any participant a proposer prefers to their final match must have rejected them for someone better.

Two further facts made this deployable. The outcome depends on which side proposes — the proposing side gets its best achievable stable matching and the other side its worst — and the proposing side cannot gain by misreporting its preferences. The receiving side can, and {{fig:alvin-roth|Alvin Roth}} and others proved no mechanism is strategyproof for both sides at once.

Roth then found that the algorithm had been in use for thirty years without anyone knowing the theory. The American system for placing medical graduates, patched together in 1952 after chaotic competition for interns, turned out to be essentially deferred acceptance, and the regional medical markets that had collapsed were the ones using mechanisms that produced unstable matchings. He went on to redesign the match to handle couples, to replace Boston's school-assignment system — which had punished families for stating their true first choice — and to set up kidney exchange, in which incompatible donor-patient pairs are arranged into cycles so that each patient receives an organ from someone else's donor.

That last application is where this thread touches [immunology](/biology/immunology/): the compatibility graph is built from blood and tissue typing, and the algorithm's job is to find cycles in it. What the division of gains looks like when the players are not negotiating but being selected, and the payoffs are offspring, is the subject of [evolutionary game theory](/math/evolutionary-game-theory/); what happens when the coalition structure is too large to search is [algorithmic game theory](/math/algorithmic-game-theory/).
