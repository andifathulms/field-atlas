---
id: game-theory
domain: math
thread: decision
name: Game Theory
parent_ids:
  - probability-theory
era_emerged: 1713 – 1952
core_question: When the best thing to do depends on what someone else does, and their best move depends on yours, what counts as a solution?

summary: |-
  Probability handles uncertainty about nature, which has no interest in the outcome. Game theory handles uncertainty about other people, who do. The difference is not a technicality: in a game there may be no best strategy at all, because every candidate invites a reply that defeats it, and the reasoning threatens to regress forever — I do this because you will do that, which you do because you expect me to do this.

  John von Neumann cut the regress in 1928, for the case where one player's gain is exactly the other's loss. Allow strategies to be chosen at random, and there is always a pair of random mixtures from which neither player can profitably deviate, with a definite value. In 1944 he and Oskar Morgenstern extended the apparatus to economics, and in 1950 John Nash, in a doctoral thesis of 27 pages, proved that an equilibrium of the same kind exists in *any* finite game with any number of players, zero-sum or not. In the same year, two researchers at RAND wrote down a game with a unique equilibrium in which both players do worse than they could have, and the subject acquired its central and least comfortable result.

key_ideas:
  - term: Strategy and payoff
    definition: >-
      A strategy is a complete plan: what to do in every situation that might arise. Payoffs are
      numbers representing each player's preference over outcomes, which von Neumann and Morgenstern
      showed can be constructed from consistent choices under risk.
    turning_point_id: theory-of-games
  - term: Zero-sum
    definition: >-
      A game in which the payoffs always add to zero: whatever one player gains, the other loses.
      Pure conflict, with no scope for cooperation, and the only case in which a completely
      satisfying solution concept exists.
    turning_point_id: von-neumann-minimax
  - term: Mixed strategy
    definition: >-
      A probability distribution over actions. Randomising is not a confession of ignorance but a
      strategic necessity: in a game of pure conflict, any predictable pattern can be exploited.
    turning_point_id: von-neumann-minimax
  - term: Minimax theorem
    definition: >-
      In a finite two-player zero-sum game, the best guaranteed outcome a player can secure equals
      the best the opponent can hold them to. The game has a definite value, and optimal mixed
      strategies always exist.
    turning_point_id: von-neumann-minimax
  - term: Nash equilibrium
    definition: >-
      A profile of strategies, one per player, such that no player can gain by changing theirs alone.
      It always exists in mixed strategies for a finite game, and it says nothing about whether the
      outcome is good for anyone.
    turning_point_id: nash-equilibrium
  - term: Dominance
    definition: >-
      A strategy is dominated if another does at least as well whatever the others do. Rational
      players do not play dominated strategies — which is what makes the prisoner's dilemma so
      unsettling, since there the dominant strategies lead both players to a worse outcome.
    turning_point_id: prisoners-dilemma

turning_points:
  - id: waldegrave-le-her
    date: "1713"
    type: PROOF
    title: The first mixed-strategy solution
    description: >-
      In a letter to Pierre Rémond de Montmort, James Waldegrave analyses the two-player card game
      *le Her* and finds that neither player has a good deterministic rule: whichever one adopts, the
      opponent can exploit it. He computes the probabilities with which each should randomise to
      guarantee the best outcome against any reply — a minimax solution in mixed strategies, two
      centuries before the concept was named. Montmort published the letter, nobody developed it, and
      the result was rediscovered rather than built upon.
    contested: false
    sources:
      - citation: "Montmort, P. R. de (1713). Essay d'analyse sur les jeux de hazard, 2nd edition, 409–412. Quillau, Paris."
        url: null
      - citation: "Bellhouse, D. (2007). The problem of Waldegrave. Journal Électronique d'Histoire des Probabilités et de la Statistique 3(2): 1–12."
        url: null

  - id: zermelo-chess
    date: "1913"
    type: PROOF
    title: Zermelo on chess
    description: >-
      Ernst Zermelo asks what it means, mathematically, for a position in chess to be won, and proves
      that in a finite game of perfect information with no chance the positions divide cleanly: from
      any position, either one player can force a win in a bounded number of moves or the other can
      avoid losing indefinitely. The argument — work backwards from terminal positions — is the first
      use of backward induction and the ancestor of every game-tree search. It says nothing about
      which case chess falls into, and nobody knows.
    contested: true
    contested_note: >-
      What Zermelo actually proved is routinely misreported. His theorem concerns the set of
      positions from which a win can be forced within a given number of moves, and he did not state
      the modern trichotomy of win, lose or draw; Dénes Kőnig and László Kalmár supplied pieces of
      the argument in the 1920s and 1930s. The popular version — "chess is strictly determined" — is
      a later consolidation of several papers.
    sources:
      - citation: "Zermelo, E. (1913). Über eine Anwendung der Mengenlehre auf die Theorie des Schachspiels. Proceedings of the Fifth International Congress of Mathematicians 2: 501–504."
        url: null
      - citation: "Schwalbe, U. & Walker, P. (2001). Zermelo and the early history of game theory. Games and Economic Behavior 34: 123–137."
        url: null

  - id: von-neumann-minimax
    date: "1928"
    type: PROOF
    title: The minimax theorem
    description: >-
      John von Neumann proves that every finite two-player zero-sum game has a value: there is a
      number $v$ such that one player can guarantee at least $v$ and the other can guarantee losing
      at most $v$, provided both are allowed to randomise. Émile Borel had introduced mixed
      strategies and conjectured that no such theorem held in general. Von Neumann's proof used a
      fixed-point argument; he later remarked that without the minimax theorem there would be no
      theory of games at all.
    contested: false
    sources:
      - citation: "von Neumann, J. (1928). Zur Theorie der Gesellschaftsspiele. Mathematische Annalen 100: 295–320."
        url: null
      - citation: "Kjeldsen, T. H. (2001). John von Neumann's conception of the minimax theorem. Archive for History of Exact Sciences 56: 39–68."
        url: null

  - id: theory-of-games
    date: "1944"
    type: REFORMULATION
    title: Theory of Games and Economic Behavior
    description: >-
      Von Neumann and the economist Oskar Morgenstern publish six hundred pages proposing that
      economics be rebuilt on the analysis of strategic interaction rather than on the assumption
      that each agent faces a fixed environment. The book supplies the axioms under which consistent
      choices under risk can be represented by a utility function, develops the zero-sum theory in
      full, and attempts a theory of coalitions. Its reception was enormous and its direct influence
      on economics took twenty years to arrive.
    contested: false
    sources:
      - citation: "von Neumann, J. & Morgenstern, O. (1944). Theory of Games and Economic Behavior. Princeton University Press."
        url: null
      - citation: "Leonard, R. (2010). Von Neumann, Morgenstern, and the Creation of Game Theory. Cambridge University Press."
        url: null

  - id: nash-equilibrium
    date: 1950 – 1951
    type: PROOF
    title: Nash's equilibrium
    description: >-
      John Nash, aged 21, proves that every finite game with any number of players has at least one
      equilibrium in mixed strategies: a profile from which no player can gain by deviating alone.
      The proof is a page long and applies Kakutani's fixed-point theorem to the best-response
      correspondence. It removes the restriction to two players and to pure conflict, which is what
      made game theory usable in economics, political science and biology — at the price of a
      concept that guarantees stability and promises nothing about efficiency.
    contested: false
    sources:
      - citation: "Nash, J. F. (1950). Equilibrium points in n-person games. PNAS 36: 48–49."
        url: null
      - citation: "Nash, J. F. (1951). Non-cooperative games. Annals of Mathematics 54: 286–295."
        url: null

  - id: prisoners-dilemma
    date: 1950 – 1952
    type: REFORMULATION
    title: The prisoner's dilemma
    description: >-
      Merrill Flood and Melvin Dresher, at RAND, construct a two-player game in which each player has
      a dominant strategy — one that is better whatever the other does — and in which both players
      following it produces an outcome worse for both than the alternative. Albert Tucker later gave
      it the story about two prisoners interrogated separately, and the name. The game shows that
      individual rationality and collective welfare can conflict with no uncertainty, no
      irrationality and no communication failure involved.
    contested: false
    sources:
      - citation: "Flood, M. M. (1958). Some experimental games. Management Science 5: 5–26."
        url: null
      - citation: "Poundstone, W. (1992). Prisoner's Dilemma. Doubleday."
        url: null

open_problems:
  - id: equilibrium-selection
    name: Which equilibrium gets played
    status: open
    status_note: Open as of 2026; no selection theory commands general agreement.
    description: >-
      Most games have many Nash equilibria, and the concept says nothing about which one occurs. A
      coordination game where both players prefer to meet has two equilibria and no reason to prefer
      either. Refinements — subgame perfection, trembling-hand perfection, Harsanyi and Selten's
      tracing procedure, risk dominance, evolutionary stability — each rule out some equilibria, and
      they disagree with one another and with what people actually do.
    why_hard: >-
      Selection appears to depend on things the formal description of the game deliberately omits:
      how the situation is labelled, what the players expect each other to expect, what happened the
      last time, which outcome is salient. Any theory that imports these ceases to be a theory of the
      game and becomes a theory of a context.
    unlocks: >-
      Every applied use of the theory — predicting an auction, a standards war, a negotiation —
      requires knowing which equilibrium to expect, so a selection principle is what separates
      description from prediction.
    sources:
      - citation: "Harsanyi, J. C. & Selten, R. (1988). A General Theory of Equilibrium Selection in Games. MIT Press."
        url: null
      - citation: "Schelling, T. C. (1960). The Strategy of Conflict. Harvard University Press."
        url: null

applications:
  - area: Strategic studies
    title: Deterrence as a game
    description: >-
      The theory was developed at RAND in the years when the United States was working out a nuclear
      posture, and it supplied the vocabulary: credible threats, second-strike capability, commitment
      devices that work by removing one's own options, and the distinction between a game of pure
      conflict and one with shared interest in avoiding catastrophe. How much the analysis improved
      the policy is disputed; that it shaped how the policy was discussed is not.
    sources:
      - citation: "Schelling, T. C. (1960). The Strategy of Conflict. Harvard University Press."
        url: null
      - citation: "Amadae, S. M. (2003). Rationalizing Capitalist Democracy. University of Chicago Press."
        url: null
  - area: Experimental economics
    title: Where the predictions fail, and how
    description: >-
      Laboratory play departs from equilibrium in specific, repeatable ways: people cooperate in
      finitely repeated prisoner's dilemmas, reject unfair offers in ultimatum games at material cost
      to themselves, and reason only a step or two about others rather than to a fixed point. The
      deviations are structured enough to have produced their own models — level-$k$ reasoning,
      quantal response, inequity aversion — and are one of the main empirical constraints on the
      theory.
    sources:
      - citation: "Camerer, C. F. (2003). Behavioral Game Theory. Princeton University Press."
        url: null
  - area: Biology
    title: Strategy without strategists
    description: >-
      Nothing in the mathematics requires players to think. If strategies are inherited and payoffs
      are offspring, the same equilibria describe sex ratios, animal contests, plant root growth and
      the behaviour of bacteria in a colony. The transfer is the subject of
      [evolutionary game theory](/math/evolutionary-game-theory/), and it supplied the field's most
      successful body of quantitative predictions.
    domain: biology
    field_id: evolutionary-biology
    sources:
      - citation: "Maynard Smith, J. (1982). Evolution and the Theory of Games. Cambridge University Press."
        url: null

further_reading:
  - citation: "Schelling, T. C. (1960). The Strategy of Conflict. Harvard University Press."
    url: null
    note: Almost no mathematics, and the best book on what strategic reasoning actually involves.
  - citation: "Osborne, M. J. & Rubinstein, A. (1994). A Course in Game Theory. MIT Press."
    url: null
    note: The standard graduate treatment; precise about what each solution concept assumes.
  - citation: "Leonard, R. (2010). Von Neumann, Morgenstern, and the Creation of Game Theory. Cambridge University Press."
    url: null
    note: How the subject was made, and why it took economics two decades to absorb it.
---

## The Regress, and How to Stop It

Suppose you and an opponent each choose heads or tails, and you win if the choices match. There is no best choice. If you would pick heads, the opponent picks tails; knowing that, you pick tails; knowing *that*, they pick heads. The reasoning never terminates, and the trouble is not psychological but structural: the problem has no solution among deterministic strategies.

{{fig:waldegrave|James Waldegrave}} found the way out in 1713, in a letter about a card game. Choose at random, with carefully computed probabilities, and the question of what the opponent anticipates becomes irrelevant — against *any* reply, the randomised strategy guarantees a known expected outcome. He calculated the mixture for *le Her*, {{fig:montmort|Montmort}} published the letter, and nothing happened for two hundred years.

{{fig:emile-borel|Émile Borel}} reintroduced mixed strategies in the 1920s and conjectured that no general theorem existed. {{fig:von-neumann|John von Neumann}} proved one in 1928. For any finite two-player game of pure opposition, there is a number $v$ — the value — such that the first player can guarantee at least $v$ whatever the opponent does, and the opponent can guarantee that the first player gets no more. The two bounds coincide, which is the content of the theorem and the reason the regress stops: at the optimum, there is nothing left to anticipate, because each player is indifferent among their own options and nothing can be exploited.

## When the Interests Are Not Opposed

Everything above requires that one player's gain be the other's loss. Most situations are not like that, and the general case defeated von Neumann's methods; the 1944 book handles non-zero-sum games through an awkward theory of coalitions.

{{fig:nash|John Nash}}, a 21-year-old graduate student, dissolved the problem in a page. Define an equilibrium as a profile of strategies in which no single player can gain by changing theirs alone. Consider the map that takes each profile to the set of best responses to it. Kakutani's fixed-point theorem guarantees that this map has a fixed point, and a fixed point is exactly an equilibrium. So *every* finite game has one, with any number of players and any payoffs.

The generality came at a cost that the field has been living with since. A Nash equilibrium is stable, not good. It need not be unique, it need not be efficient, and it need not be reachable by any plausible process of reasoning or learning.

{{fig:merrill-flood|Merrill Flood}} and {{fig:melvin-dresher|Melvin Dresher}} produced the clearest demonstration in the same year, 1950. Two players each choose to cooperate or defect, with payoffs:

| | Cooperate | Defect |
|---|---|---|
| **Cooperate** | 3, 3 | 0, 5 |
| **Defect** | 5, 0 | 1, 1 |

Defecting is better whatever the other does — 5 beats 3, and 1 beats 0 — so defection dominates, and the unique equilibrium is (Defect, Defect), paying 1 each. Both would prefer (Cooperate, Cooperate) at 3 each. Nothing here involves miscalculation, mistrust or limited information. Two perfectly rational players, each doing the demonstrably right thing, arrive somewhere both regret. {{fig:albert-tucker|Albert Tucker}} supplied the story of the two interrogated prisoners when he needed to explain the game to an audience of psychologists, and the name stuck.

## A Closer Look: Solving a Penalty Kick

Before leaving the zero-sum case, it is worth seeing one solved. Take a game that is genuinely zero-sum and genuinely played. A penalty taker can shoot to the natural side or the other side; the goalkeeper can dive one way or the other, committing before the ball is struck. Scoring probabilities, roughly as measured in professional football, make the kicker's payoff matrix:

| | Keeper dives L | Keeper dives R |
|---|---|---|
| **Kicker shoots L** | 0.60 | 0.95 |
| **Kicker shoots R** | 0.90 | 0.70 |

No pure strategy survives. If the kicker always shoots left, the keeper always dives left and the kicker scores 60%. The solution must be a mixture, and the mixture is determined by a requirement that looks backwards at first: *the kicker chooses probabilities that make the keeper indifferent.*

Let the kicker shoot left with probability $p$. The keeper's two options then yield the kicker

$$
\text{keeper dives L}: \quad 0.60p + 0.90(1-p) = 0.90 - 0.30p,
$$
$$
\text{keeper dives R}: \quad 0.95p + 0.70(1-p) = 0.70 + 0.25p.
$$

If these differ, the keeper picks the smaller and the kicker is being exploited. Setting them equal:

$$
0.90 - 0.30p = 0.70 + 0.25p \;\Longrightarrow\; 0.20 = 0.55p \;\Longrightarrow\; p = \frac{4}{11} = 0.364.
$$

The kicker should shoot left on 36.4% of penalties. The guaranteed value is

$$
v = 0.90 - 0.30(0.364) = 0.791.
$$

By the same argument the keeper dives left with probability $q$ chosen to make the *kicker* indifferent:

$$
0.95 - 0.35q = 0.70 + 0.20q \;\Longrightarrow\; q = \frac{5}{11} = 0.455,
$$

and substituting back gives the kicker 0.791 either way — the same number, which is the minimax theorem doing its work. Neither player can do better than 79.1% and 20.9%, and any deviation can be punished: a kicker who always shoots right faces a keeper who always dives right and scores 70%.

Three things in this are worth keeping. First, each player's optimal mixture is computed from the *opponent's* payoffs, not their own, which is counterintuitive and correct. Second, a mixed equilibrium makes both players indifferent, so neither has any positive reason to play their equilibrium mixture rather than anything else — the mixture is sustained by the fact that departing from it would be noticed. Third, the prediction is testable, and it survives: records of thousands of professional penalties show frequencies close to the computed mixtures, no serial correlation that an opponent could exploit, and equal scoring rates across sides, which is exactly the indifference condition. Professionals, without computing anything, play the minimax solution.

## What the Equilibrium Does Not Tell You

The subject's subsequent history is largely about the gaps Nash's theorem leaves. {{fig:reinhard-selten|Reinhard Selten}} ruled out equilibria sustained by threats a player would not actually carry out, by requiring the strategies to be an equilibrium in every subgame. {{fig:john-harsanyi|John Harsanyi}} showed in 1967 how to handle games where players do not know each other's payoffs, by treating nature as making a prior draw of "types" — which turned incomplete information into a tractable problem and made auction theory possible. {{fig:robert-aumann|Robert Aumann}} formalised common knowledge and showed that correlated signals expand the set of achievable outcomes.

None of these answers the question of which equilibrium is played when several remain, and that gap is the open problem above. It is also why the subject's most productive developments ran away from the assumption that players reason at all. If strategies are inherited and payoffs are reproductive success, the equilibrium is reached by selection rather than by thought, and the selection dynamics pick out which one — the subject of [evolutionary game theory](/math/evolutionary-game-theory/). If the players are computers, the question becomes whether an equilibrium can be found in reasonable time, which is [algorithmic game theory](/math/algorithmic-game-theory/). And if the players can make binding agreements, the question is how to divide the gains, which is [cooperative game theory](/math/cooperative-game-theory/).
