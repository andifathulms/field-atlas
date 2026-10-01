---
id: social-choice
domain: math
thread: decision
name: Social Choice and Mechanism Design
parent_ids:
  - game-theory
era_emerged: 1770 – 1981
core_question: Can individual preferences be combined into a collective decision without arbitrariness, and can a procedure be built so that honesty is each participant's best policy?

summary: |-
  Two commissioners of the French Academy of Sciences discovered the subject's central difficulty before the Revolution. Jean-Charles de Borda showed that plurality voting can elect a candidate whom a majority ranks last. The Marquis de Condorcet showed something worse: majority preference can cycle, with the electorate preferring A to B, B to C and C to A, so that there is no candidate a majority would not rather replace. Neither result is about bad voters or bad luck. They are properties of the aggregation itself.

  Kenneth Arrow turned this into a theorem in 1951. Write down four mild requirements on any rule that converts individual rankings into a social ranking, and no rule satisfies all of them except dictatorship. Gibbard and Satterthwaite then proved the corresponding result about honesty: any non-trivial deterministic voting rule can sometimes be manipulated by a voter who lies about their preferences. The constructive response was mechanism design, which asks what *can* be achieved: William Vickrey showed in 1961 that in a sealed-bid auction where the winner pays the second-highest bid, bidding one's true value is optimal no matter what anyone else does, and Roger Myerson showed in 1981 how to find the revenue-maximising mechanism for a whole class of such problems.

key_ideas:
  - term: Condorcet cycle
    definition: >-
      Majority preference need not be transitive. With three groups of voters ranking three options
      in rotation, each option loses a head-to-head majority vote against another, so no option is
      unbeatable.
    turning_point_id: borda-condorcet
  - term: Independence of irrelevant alternatives
    definition: >-
      The social ranking of A against B should depend only on how voters rank A against B, not on
      where C sits. It is the most demanding of Arrow's conditions and the one most rules violate —
      Borda counts, for instance, can be reversed by adding a candidate nobody supports.
    turning_point_id: arrow-impossibility
  - term: Arrow's impossibility theorem
    definition: >-
      No rule converting individual rankings into a transitive social ranking satisfies unrestricted
      domain, unanimity, independence of irrelevant alternatives and non-dictatorship simultaneously.
    turning_point_id: arrow-impossibility
  - term: Strategyproofness
    definition: >-
      A rule is strategyproof if no participant can ever gain by misreporting their preferences.
      Gibbard and Satterthwaite showed that for deterministic choices among three or more outcomes,
      only dictatorial rules achieve it.
    turning_point_id: gibbard-satterthwaite
  - term: Second-price auction
    definition: >-
      The highest bidder wins and pays the second-highest bid. Because a bidder's payment does not
      depend on their own bid, bidding one's true valuation is a dominant strategy, and the seller
      learns the valuations without having to ask.
    turning_point_id: vickrey-auction
  - term: Revelation principle
    definition: >-
      Anything achievable by some mechanism in which participants strategise is achievable by a
      mechanism in which they report truthfully. This collapses the search over all conceivable
      procedures into a search over truthful ones, which is what made mechanism design tractable.
    turning_point_id: myerson-optimal-auction

turning_points:
  - id: borda-condorcet
    date: 1770 – 1785
    type: DISPROOF
    title: Borda's objection and Condorcet's paradox
    description: >-
      Jean-Charles de Borda tells the Academy of Sciences that electing whoever has the most first
      preferences can choose a candidate a majority would rank last, and proposes a rule awarding
      points by position. The Marquis de Condorcet objects that the right test is pairwise majority
      comparison — and then finds that pairwise majorities can cycle, so that for some profiles of
      preferences no candidate beats all others. He also proved the opposite-tending jury theorem:
      if voters are more likely right than wrong on a binary question, large majorities are almost
      certainly right.
    contested: false
    sources:
      - citation: "Borda, J.-C. de (1781). Mémoire sur les élections au scrutin. Histoire de l'Académie Royale des Sciences, 657–665."
        url: null
      - citation: "Condorcet, M. de (1785). Essai sur l'application de l'analyse à la probabilité des décisions rendues à la pluralité des voix. Imprimerie Royale, Paris."
        url: null
      - citation: "Black, D. (1958). The Theory of Committees and Elections. Cambridge University Press."
        url: null

  - id: arrow-impossibility
    date: 1950 – 1951
    type: DISPROOF
    title: Arrow's impossibility theorem
    description: >-
      Kenneth Arrow asks what any reasonable procedure for aggregating preferences must satisfy, and
      states four conditions: it must accept any profile of individual rankings, it must respect
      unanimity, the ranking of two options must not depend on a third, and no single individual's
      preference may always prevail. He proves no procedure satisfies all four. The theorem was
      presented as a doctoral thesis at Columbia and reorganised political philosophy, welfare
      economics and voting theory around a single negative result.
    contested: true
    contested_note: >-
      What the theorem *means* is disputed, not whether it is true. One reading is that democratic
      aggregation is incoherent; another, now more common, is that one condition — independence of
      irrelevant alternatives — is too strong, since it forbids using any information about
      intensity or about the whole ranking. Which escape route to take determines whether the theorem
      is read as a limit on collective choice or as a constraint on a particular formalisation of it.
    sources:
      - citation: "Arrow, K. J. (1951). Social Choice and Individual Values. Wiley."
        url: null
      - citation: "Sen, A. (2014). Arrow and the impossibility theorem. In The Arrow Impossibility Theorem, 29–42. Columbia University Press."
        url: null

  - id: sen-liberal-paradox
    date: "1970"
    type: DISPROOF
    title: The impossibility of a Paretian liberal
    description: >-
      Amartya Sen shows that a second pair of attractive principles collide. Suppose each person is
      decisive over at least one private matter — whether they sleep on their back, what they read —
      and suppose the social ranking respects unanimity. Sen constructs preferences, involving two
      people who care what the other reads, for which no social ranking satisfies both. Minimal
      individual rights and the Pareto criterion are logically incompatible once preferences range
      over other people's business.
    contested: false
    sources:
      - citation: "Sen, A. (1970). The impossibility of a Paretian liberal. Journal of Political Economy 78: 152–157."
        url: null
      - citation: "Sen, A. (1976). Liberty, unanimity and rights. Economica 43: 217–245."
        url: null

  - id: gibbard-satterthwaite
    date: 1973 – 1975
    type: PROOF
    title: Every voting rule can be gamed
    description: >-
      Allan Gibbard and, independently, Mark Satterthwaite prove that any deterministic rule choosing
      among three or more possible outcomes, which can produce any of them and is not dictatorial, is
      manipulable: for some profile of preferences, some voter does better by submitting a ranking
      that is not their own. Tactical voting is therefore not a flaw of particular electoral systems
      to be designed away, but a property of all of them.
    contested: false
    sources:
      - citation: "Gibbard, A. (1973). Manipulation of voting schemes: a general result. Econometrica 41: 587–601."
        url: null
      - citation: "Satterthwaite, M. A. (1975). Strategy-proofness and Arrow's conditions. Journal of Economic Theory 10: 187–217."
        url: null

  - id: vickrey-auction
    date: "1961"
    type: PROOF
    title: The second-price auction
    description: >-
      William Vickrey analyses the standard auction formats as games and finds a remarkable property
      of one that nobody used: if the highest bidder wins but pays the *second*-highest bid, then
      bidding one's true value is optimal regardless of what others do. The payment does not depend
      on the winner's own bid, so shading it can only cost the auction. Vickrey also showed that the
      common formats yield the same expected revenue under symmetric private values — the first
      revenue equivalence result.
    contested: false
    sources:
      - citation: "Vickrey, W. (1961). Counterspeculation, auctions, and competitive sealed tenders. Journal of Finance 16: 8–37."
        url: null
      - citation: "Klemperer, P. (2004). Auctions: Theory and Practice. Princeton University Press."
        url: null

  - id: myerson-optimal-auction
    date: 1979 – 1981
    type: PROOF
    title: Optimal mechanisms, and the revelation principle
    description: >-
      Roger Myerson establishes that any outcome achievable by a mechanism in which participants
      strategise is also achievable by one in which they report their private information truthfully —
      the revelation principle — which reduces the search over all possible procedures to a
      manageable optimisation. He then solves for the revenue-maximising auction when valuations are
      drawn independently from known distributions, showing that it is a second-price auction with a
      reserve price, and that the reserve is set as if the seller were a monopolist facing one buyer.
    contested: false
    sources:
      - citation: "Myerson, R. B. (1981). Optimal auction design. Mathematics of Operations Research 6: 58–73."
        url: null
      - citation: "Myerson, R. B. (1979). Incentive compatibility and the bargaining problem. Econometrica 47: 61–73."
        url: null

open_problems:
  - id: multi-item-optimal-auction
    name: The optimal way to sell several items
    status: open
    status_note: Open as of 2026; no general characterisation exists even for one buyer and two items.
    description: >-
      Myerson solved the revenue-maximising sale of a single item completely. For two or more items
      sold to a single buyer with independently drawn values, the optimal mechanism is unknown in
      general, and the known examples are strange: the best mechanism may require offering randomised
      bundles rather than deterministic prices, the revenue can be a discontinuous function of the
      distributions, and the number of distinct offers needed can be infinite for perfectly ordinary
      value distributions.
    why_hard: >-
      With one item the buyer's private information is a single number and the incentive constraints
      reduce to a monotonicity condition. With several items it is a vector, the constraints become a
      partial differential inequality on a multidimensional domain, and the one-dimensional machinery
      has no known replacement. Most progress is on approximation — simple mechanisms that guarantee a
      constant fraction of the unknown optimum.
    unlocks: >-
      Nearly every real auction sells multiple goods: spectrum licences, advertising slots, electricity
      across a network, landing rights. Knowing the optimum, or that a simple mechanism is close to it,
      determines how billions of pounds of public assets should be sold.
    sources:
      - citation: "Hart, S. & Nisan, N. (2017). Approximate revenue maximization with multiple items. Journal of Economic Theory 172: 313–347."
        url: null
      - citation: "Daskalakis, C., Deckelbaum, A. & Tzamos, C. (2017). Strong duality for a multiple-good monopolist. Econometrica 85: 735–767."
        url: null

applications:
  - area: Electoral systems
    title: Choosing a voting rule is choosing which failure to accept
    description: >-
      Plurality can elect a candidate a majority ranks last; Borda counts can be reversed by adding a
      hopeless candidate; instant-runoff can eliminate a candidate who would beat everyone head to
      head; Condorcet methods must specify what to do when there is a cycle. Arrow's theorem
      guarantees that there is no rule without such a defect, so the design question is which defect
      matters least for a given electorate — a mathematical result with direct constitutional
      consequences.
    sources:
      - citation: "Brams, S. J. & Fishburn, P. C. (2002). Voting procedures. In Handbook of Social Choice and Welfare, volume 1: 173–236. Elsevier."
        url: null
  - area: Public asset sales
    title: Spectrum auctions
    description: >-
      Governments have sold radio spectrum by auction since 1994, with designs drawn directly from
      this theory, and the differences between designs have been worth billions. The 1990s British 3G
      auction raised £22.5 billion from a simultaneous ascending design, while an otherwise similar
      Swiss auction raised a twentieth as much per head after bidders were allowed to merge, leaving
      too few to compete. The lesson that has survived is that attracting entry matters more than the
      fine structure of the rules.
    sources:
      - citation: "Klemperer, P. (2002). What really matters in auction design. Journal of Economic Perspectives 16: 169–189."
        url: null
      - citation: "Milgrom, P. (2004). Putting Auction Theory to Work. Cambridge University Press."
        url: null
  - area: Computing
    title: Mechanisms that must also run fast
    description: >-
      Search advertising, cloud resource allocation and spectrum reallocation all require mechanisms
      that are not merely incentive-compatible but computable at scale, which turns out to constrain
      the designs available: the general truthful mechanism for combinatorial problems requires
      solving an NP-hard allocation exactly, and approximating it usually destroys truthfulness.
      Reconciling the two is the subject of [algorithmic game theory](/math/algorithmic-game-theory/).
    sources:
      - citation: "Nisan, N. & Ronen, A. (2001). Algorithmic mechanism design. Games and Economic Behavior 35: 166–196."
        url: null

further_reading:
  - citation: "Arrow, K. J. (1951). Social Choice and Individual Values. Wiley."
    url: null
    note: Short, readable, and the source of the argument; the second edition's added essay is worth the detour.
  - citation: "Sen, A. (2017). Collective Choice and Social Welfare, expanded edition. Harvard University Press."
    url: null
    note: The impossibility results placed in the context of what welfare judgements require.
  - citation: "Milgrom, P. (2004). Putting Auction Theory to Work. Cambridge University Press."
    url: null
    note: Mechanism design as practised, by someone who designed auctions that sold real spectrum.
---

## Two Commissioners and a Bad Surprise

In 1770 {{fig:borda|Jean-Charles de Borda}} pointed out to the Académie des Sciences that its elections could go wrong in a specific way. If three candidates stand and the vote splits, the winner on first preferences may be the candidate whom most voters place *last*. His remedy was to score candidates by position on every ballot and sum.

{{fig:condorcet|The Marquis de Condorcet}} objected that the proper criterion is simpler: a candidate should win if they would beat each rival in a head-to-head majority vote. Then he found that this criterion can fail to pick anybody. For some distributions of preferences, A beats B, B beats C, and C beats A, all by majorities. Collective preference, built from perfectly transitive individual preferences, need not be transitive itself.

This is not a paradox in the sense of a puzzle to be dissolved. It is a fact about majority aggregation, and it means that "what the electorate wants" may not name anything.

## A Closer Look: Three Rules, One Set of Ballots, Three Winners

Take an electorate of 100 voters with these preferences:

| Voters | Ranking |
|---|---|
| 40 | A > C > B |
| 35 | B > C > A |
| 25 | C > B > A |

**Plurality.** Count first preferences only: A has 40, B has 35, C has 25. **A wins.**

**Pairwise majorities.** Compare each pair across all ballots.

- A vs B: A is preferred by the 40; B by the 35 and the 25, so 40 to 60. **B beats A.**
- A vs C: A by the 40; C by the 35 and the 25, so 40 to 60. **C beats A.**
- B vs C: B by the 35; C by the 40 and the 25, so 35 to 65. **C beats B.**

C beats both rivals head to head, so C is the Condorcet winner — with the fewest first preferences. And A, the plurality winner, loses to each of the other two by 60 to 40. Sixty per cent of the electorate prefers *anyone* to the person plurality elects.

**Borda count.** Award 2 points for a first place, 1 for second, 0 for third.

$$
\begin{aligned}
A &= 40(2) + 0 + 0 = 80,\\
B &= 35(2) + 25(1) = 95,\\
C &= 25(2) + 40(1) + 35(1) = 125.
\end{aligned}
$$

The totals sum to 300, as they must with 100 voters and 3 points each. **C wins**, agreeing with Condorcet here but not in general.

The three rules are all defensible and they do not agree, and nothing in the ballots adjudicates between them. Note also what happens to the Borda count if a fourth candidate D, whom everyone ranks last, is added: nothing. But if D is inserted in the middle of some voters' rankings, the gaps between A, B and C change, and the Borda winner can flip without a single voter altering their opinion about A, B or C. That is the violation of independence of irrelevant alternatives, and it is what {{fig:arrow|Kenneth Arrow}}'s theorem says cannot be avoided except by giving up something else.

Arrow's conditions are: the rule must handle every possible profile of preferences; if everyone prefers A to B the social ranking must too; the social ranking of A against B must depend only on individual rankings of A against B; and no individual's preference may dictate the outcome regardless of everyone else's. No rule satisfies all four. The theorem is a page of combinatorics and has generated seventy years of argument over which condition to relinquish — most commonly independence, since insisting on it throws away all information about how strongly options are preferred.

{{fig:sen|Amartya Sen}} added a second impossibility in 1970 with a different moral. Grant each person decisiveness over at least one matter that is their own business, and also require the Pareto criterion. With preferences about what *other* people read, these two collide: there are profiles for which no social ranking respects both minimal liberty and unanimity.

## Honesty as a Design Problem

{{fig:gibbard|Allan Gibbard}} and {{fig:satterthwaite|Mark Satterthwaite}} then showed the strategic counterpart. Any deterministic rule that can select among three or more outcomes, and is not a dictatorship, can be manipulated: there is some situation in which a voter does better by submitting a ranking that misstates their preferences. Tactical voting is therefore structural. The familiar advice not to "waste" a vote on a third candidate is not a failure of civic virtue but a correct response to a feature of the rule.

Faced with two impossibilities, the field turned the question around. Instead of asking which rule is best, ask what *is* achievable, and design the procedure to make the behaviour you want into each participant's self-interest. {{fig:vickrey|William Vickrey}} gave the founding example in 1961, and it is worth stating exactly because the argument is three lines.

In a sealed-bid auction, let the highest bidder win and pay the **second**-highest bid. Suppose your value is 100. If you bid 100 and the next bid is 80, you win and pay 80, gaining 20. Could you do better by bidding 90? Only if that changes the outcome — and it changes it only when the highest rival bid is between 90 and 100, in which case you now lose an auction you would have won at a profit. Could you gain by bidding 110? Only when the highest rival bid is between 100 and 110, in which case you win and pay more than the item is worth to you. In every other case your bid makes no difference, because the price is set by someone else. Truthful bidding is a dominant strategy: optimal whatever anyone else does, with no need to guess at their values at all.

Vickrey also proved the first revenue equivalence result: the familiar formats raise the same expected revenue when values are drawn independently from the same distribution. With two bidders whose values are uniform on $[0,1]$, the second-price auction collects the lower of two draws, whose expectation is $1/3$. In a first-price auction the equilibrium is to bid half one's value, so the seller receives half the higher draw, and the higher of two uniform draws averages $2/3$ — giving $1/3$ again. The strategic behaviour differs completely and the revenue is identical.

{{fig:myerson|Roger Myerson}} completed the framework in 1981 with two results. The revelation principle says that anything achievable by *any* mechanism is achievable by one in which participants simply tell the truth, which collapses an unmanageable search over procedures into an optimisation over truthful ones. And the revenue-maximising auction for a single item turns out to be the second-price auction with a reserve price — the reserve chosen exactly as a monopolist facing one buyer would choose a price, ignoring competition entirely.

That clean answer has resisted every attempt to extend it to more than one item, which is the open problem above, and the reason real multi-item auctions — spectrum, advertising, electricity — are designed by judgement and simulation rather than derived. The further constraint, that a mechanism must also be computable when there are exponentially many possible allocations, is where this field meets [computational complexity](/math/computational-complexity/), in [algorithmic game theory](/math/algorithmic-game-theory/).
