---
id: evolutionary-game-theory
domain: math
thread: decision
name: Evolutionary Game Theory
parent_ids:
  - game-theory
  - dynamical-systems
era_emerged: 1930 – 2006
core_question: What happens to the theory of strategy when the players cannot think, cannot choose, and inherit their strategies — and payoffs are counted in offspring?

summary: |-
  Nothing in the mathematics of games requires a player to reason. It requires only that strategies exist, that payoffs depend on what others are doing, and that successful strategies become more common. Replace deliberation with inheritance and payoff with reproductive success, and the same equilibria appear — reached not by calculation but by selection, which incidentally solves the problem that embarrasses the economic version: there is no question of which equilibrium gets played, because the dynamics decide.

  Ronald Fisher made the first such argument in 1930, explaining why sex ratios are close to equal: the rarer sex has better reproductive prospects, so any deviation is self-correcting. William Hamilton gave the condition under which an organism should sacrifice itself for relatives in 1964. The field took its modern form in 1973, when John Maynard Smith and George Price asked why animals contesting a resource so often display rather than fight to the death, and defined the evolutionarily stable strategy — one that, once common, cannot be displaced by any rare alternative. Five years later the connection to dynamical systems was made explicit: the replicator equation is a differential equation whose rest points are the equilibria, and whose trajectories say which are actually reached.

key_ideas:
  - term: Frequency-dependent selection
    definition: >-
      A trait's fitness depends on how common it is in the population. This is what makes evolution a
      game rather than an optimisation: there is no best strategy, only a best reply to what everyone
      else is doing.
    turning_point_id: fisher-sex-ratio
  - term: Inclusive fitness
    definition: >-
      An individual's reproductive success plus its effect on relatives' success, each weighted by
      relatedness. Hamilton's rule says a costly helping behaviour spreads when $rb > c$: relatedness
      times benefit to the recipient exceeds the cost to the actor.
    turning_point_id: hamilton-kin-selection
  - term: Evolutionarily stable strategy
    definition: >-
      A strategy such that a population playing it cannot be invaded by any rare mutant. It is a Nash
      equilibrium with an extra stability requirement, and it needs no assumption that anyone is
      optimising anything.
    turning_point_id: maynard-smith-price-ess
  - term: Replicator dynamics
    definition: >-
      The equation $\dot{x}_i = x_i(f_i - \bar{f})$: a strategy's share grows in proportion to how far
      its payoff exceeds the population average. Its rest points include every Nash equilibrium, and
      its trajectories determine which ones are reached.
    turning_point_id: taylor-jonker-replicator
  - term: Mixed ESS
    definition: >-
      When no pure strategy is stable, the stable state is a specific proportion of strategies in the
      population — which may be achieved by individuals randomising, or by a fixed ratio of
      specialists. The mathematics does not distinguish the two.
    turning_point_id: maynard-smith-price-ess
  - term: Reciprocity
    definition: >-
      Cooperation can be stable when interactions repeat and defection can be punished later.
      Direct reciprocity needs recognition and memory; indirect reciprocity needs reputation; spatial
      structure substitutes for both by making interactions local and therefore repeated.
    turning_point_id: axelrod-tournament

turning_points:
  - id: fisher-sex-ratio
    date: "1930"
    type: REFORMULATION
    title: Fisher's argument for equal sex ratios
    description: >-
      Why do most species produce sons and daughters in nearly equal numbers, when a few males could
      fertilise many females? Ronald Fisher's answer is the first evolutionary game argument. Every
      individual in the next generation has one mother and one father, so if males are rarer, each
      male has on average more offspring, and a parent biased towards sons has more grandchildren.
      The advantage disappears exactly when the sexes are equally frequent — measured not in numbers
      of offspring but in parental investment, which is why species with unequal costs have unequal
      ratios.
    contested: false
    sources:
      - citation: "Fisher, R. A. (1930). The Genetical Theory of Natural Selection. Clarendon Press, chapter 6."
        url: null
      - citation: "Edwards, A. W. F. (1998). Natural selection and the sex ratio: Fisher's sources. American Naturalist 151: 564–569."
        url: null

  - id: hamilton-kin-selection
    date: "1964"
    type: PROOF
    title: Hamilton's rule
    description: >-
      Behaviour that reduces an animal's own reproduction to help another is a standing difficulty for
      natural selection. William Hamilton resolves it by changing the accounting: what spreads is a
      gene, and a gene in one body is also present, with probability $r$, in a relative's. A helping
      behaviour is favoured when $rb > c$. For full siblings $r = 1/2$, so a behaviour must benefit a
      sibling more than twice what it costs the actor. The rule explains sterile worker castes in
      insects, alarm calls, and why helpers at the nest are usually relatives.
    contested: true
    contested_note: >-
      Whether inclusive fitness is the right formulation, or merely one correct bookkeeping among
      several, has been argued since 2010, when Martin Nowak, Corina Tarnita and E. O. Wilson
      published a critique arguing that standard natural-selection models handle the same cases without
      it. More than a hundred biologists replied in defence. The empirical claims are not in dispute;
      the argument is about which formalism is primary.
    sources:
      - citation: "Hamilton, W. D. (1964). The genetical evolution of social behaviour, I and II. Journal of Theoretical Biology 7: 1–16, 17–52."
        url: null
      - citation: "Nowak, M. A., Tarnita, C. E. & Wilson, E. O. (2010). The evolution of eusociality. Nature 466: 1057–1062."
        url: null
      - citation: "Abbot, P. et al. (2011). Inclusive fitness theory and eusociality. Nature 471: E1–E4."
        url: null

  - id: maynard-smith-price-ess
    date: "1973"
    type: REFORMULATION
    title: The evolutionarily stable strategy
    description: >-
      Animals contesting a territory or a mate usually display, posture and retreat rather than fight
      to the death, which had been explained as restraint for the good of the species. John Maynard
      Smith and George Price show that no such explanation is needed. Modelling a contest between
      Hawks, who escalate, and Doves, who display and withdraw, they find that neither strategy can
      take over when injury is costly: the stable state is a mixture, whose proportion is set by the
      ratio of the resource's value to the cost of injury. They define an evolutionarily stable
      strategy as one that no rare mutant can invade.
    contested: false
    sources:
      - citation: "Maynard Smith, J. & Price, G. R. (1973). The logic of animal conflict. Nature 246: 15–18."
        url: null
      - citation: "Maynard Smith, J. (1982). Evolution and the Theory of Games. Cambridge University Press."
        url: null

  - id: taylor-jonker-replicator
    date: "1978"
    type: PROOF
    title: The replicator equation
    description: >-
      Peter Taylor and Leo Jonker write down the dynamics that the stability argument had left
      implicit: each strategy's share of the population grows at a rate equal to the amount by which
      its payoff exceeds the population mean. The resulting system of differential equations connects
      game theory to [dynamical systems](/math/dynamical-systems/), and the connection is exact —
      every Nash equilibrium is a rest point, every evolutionarily stable strategy is an
      asymptotically stable one, and the converses fail in instructive ways. Games can therefore have
      cycles and chaos as well as equilibria.
    contested: false
    sources:
      - citation: "Taylor, P. D. & Jonker, L. B. (1978). Evolutionarily stable strategies and game dynamics. Mathematical Biosciences 40: 145–156."
        url: null
      - citation: "Hofbauer, J. & Sigmund, K. (1998). Evolutionary Games and Population Dynamics. Cambridge University Press."
        url: null

  - id: axelrod-tournament
    date: 1980 – 1984
    type: REFORMULATION
    title: Axelrod's tournament
    description: >-
      Robert Axelrod invites game theorists, economists and others to submit computer programs to
      play the repeated prisoner's dilemma against each other, and runs a round-robin. The winner,
      submitted by Anatol Rapoport, is the shortest program entered: cooperate on the first move, then
      copy whatever the opponent did last. Tit-for-tat won again in a second tournament whose
      entrants knew the first result, and won an evolutionary version in which successful programs
      were replicated. Axelrod's analysis identified what the successful strategies shared — never
      defecting first, retaliating, and forgiving.
    contested: true
    contested_note: >-
      Tit-for-tat's robustness was oversold. It is not an evolutionarily stable strategy: it cannot
      be invaded by defectors but drifts to unconditional cooperation when all-cooperators are
      neutral, and it performs badly when mistakes occur, since a single error locks two tit-for-tat
      players into endless mutual retaliation. Later tournaments were won by other strategies, and in
      2012 by colluding teams of entries that recognised one another — which says more about
      tournaments than about cooperation.
    sources:
      - citation: "Axelrod, R. & Hamilton, W. D. (1981). The evolution of cooperation. Science 211: 1390–1396."
        url: null
      - citation: "Axelrod, R. (1984). The Evolution of Cooperation. Basic Books."
        url: null
      - citation: "Nowak, M. A. & Sigmund, K. (1993). A strategy of win-stay, lose-shift that outperforms tit-for-tat. Nature 364: 56–58."
        url: null

  - id: spatial-games
    date: 1992 – 2006
    type: REFORMULATION
    title: Cooperation from spatial structure
    description: >-
      Martin Nowak and Robert May place players on a lattice, let each interact only with its
      neighbours and copy whichever neighbour did best, and find that cooperators survive
      indefinitely in shifting clusters — in a game where the well-mixed model says they must go
      extinct. Space substitutes for memory: cooperators meet cooperators more often than chance
      allows. Nowak later organised the mechanisms that can sustain cooperation into a short list,
      each with its own quantitative condition, of which kin selection and network reciprocity are two.
    contested: false
    sources:
      - citation: "Nowak, M. A. & May, R. M. (1992). Evolutionary games and spatial chaos. Nature 359: 826–829."
        url: null
      - citation: "Nowak, M. A. (2006). Five rules for the evolution of cooperation. Science 314: 1560–1563."
        url: null
      - citation: "Ohtsuki, H., Hauert, C., Lieberman, E. & Nowak, M. A. (2006). A simple rule for the evolution of cooperation on graphs. Nature 441: 502–505."
        url: null

open_problems:
  - id: human-cooperation
    name: Why humans cooperate with strangers
    status: open
    status_note: Open as of 2026; the competing accounts have not been separated by evidence.
    description: >-
      People contribute to public goods, punish free-riders at their own expense, and deal fairly with
      strangers they will never meet again — in laboratories across many societies, and at rates the
      standard mechanisms do not predict. Reciprocity requires repetition, reputation requires
      observers, kin selection requires relatives, and one-shot anonymous generosity has none of
      these. Proposed explanations include cultural group selection, norm internalisation that
      misfires in artificial settings, and selection for being the sort of person others want to deal
      with.
    why_hard: >-
      The candidate mechanisms make overlapping predictions, the relevant selection happened over
      tens of thousands of years and left no direct record, and laboratory experiments cannot rule
      out that participants treat an anonymous game as a repeated social interaction because that is
      what their psychology was built for. Cross-cultural variation is large, which constrains the
      theories without selecting among them.
    unlocks: >-
      Whether large-scale cooperation among unrelated people is a stable feature of human societies
      or a fragile one, which bears on how institutions for public goods — taxation, commons
      management, collective action on shared risks — should be designed.
    sources:
      - citation: "Fehr, E. & Gächter, S. (2002). Altruistic punishment in humans. Nature 415: 137–140."
        url: null
      - citation: "Henrich, J. et al. (2010). Markets, religion, community size, and the evolution of fairness and punishment. Science 327: 1480–1484."
        url: null
      - citation: "Raihani, N. J. & Bshary, R. (2015). The reputation of punishers. Trends in Ecology & Evolution 30: 98–103."
        url: null

applications:
  - area: Animal behaviour
    title: Contests, sex ratios and life histories
    description: >-
      Evolutionary game theory supplies behavioural ecology's quantitative predictions: when an animal
      should escalate a fight, the ratio of sons to daughters a parent should produce and how it
      shifts with local conditions, how long a forager should stay in a patch, and why fig wasps in
      single-foundress figs produce overwhelmingly female broods while those sharing a fig do not —
      the last a prediction of local mate competition confirmed across dozens of species.
    domain: biology
    field_id: evolutionary-biology
    sources:
      - citation: "Maynard Smith, J. (1982). Evolution and the Theory of Games. Cambridge University Press."
        url: null
      - citation: "West, S. A., Shuker, D. M. & Sheldon, B. C. (2005). Sex-ratio adjustment when relatives interact. Evolution 59: 1211–1228."
        url: null
  - area: Microbiology
    title: Cheaters in a bacterial colony
    description: >-
      Many bacteria secrete substances that benefit everyone nearby — iron-scavenging siderophores,
      digestive enzymes, the matrix of a biofilm — which makes production a public good and
      non-producers cheats. Such cheats arise reliably in the laboratory, spread, and can collapse
      the population. The dynamics follow the predicted form, and the same framework explains why
      virulence factors are often cooperative, which suggests treatments that select against the
      cooperators rather than killing everything.
    domain: biology
    field_id: microbiology
    sources:
      - citation: "Griffin, A. S., West, S. A. & Buckling, A. (2004). Cooperation and competition in pathogenic bacteria. Nature 430: 1024–1027."
        url: null
      - citation: "West, S. A., Griffin, A. S., Gardner, A. & Diggle, S. P. (2006). Social evolution theory for microorganisms. Nature Reviews Microbiology 4: 597–607."
        url: null
  - area: Oncology
    title: A tumour as a population of competing strategies
    description: >-
      Cells within a tumour differ in growth rate, drug resistance and what they secrete, and they
      compete with one another. Treating resistance as a costly strategy suggests that maximum-dose
      therapy is not optimal: it removes the sensitive cells that were suppressing the resistant ones.
      Adaptive schedules that deliberately maintain a sensitive population have extended time to
      progression in a prostate cancer trial.
    domain: biology
    field_id: cancer-biology
    sources:
      - citation: "Gatenby, R. A., Silva, A. S., Gillies, R. J. & Frieden, B. R. (2009). Adaptive therapy. Cancer Research 69: 4894–4903."
        url: null
      - citation: "Zhang, J., Cunningham, J. J., Brown, J. S. & Gatenby, R. A. (2017). Integrating evolutionary dynamics into treatment of metastatic castrate-resistant prostate cancer. Nature Communications 8: 1816."
        url: null

further_reading:
  - citation: "Maynard Smith, J. (1982). Evolution and the Theory of Games. Cambridge University Press."
    url: null
    note: The founding book; short, clear, and still the best statement of what the ESS concept is for.
  - citation: "Hofbauer, J. & Sigmund, K. (1998). Evolutionary Games and Population Dynamics. Cambridge University Press."
    url: null
    note: The mathematics, with the replicator equation treated as the dynamical system it is.
  - citation: "Nowak, M. A. (2006). Evolutionary Dynamics. Harvard University Press."
    url: null
    note: Covers spatial games, finite populations and the cooperation mechanisms, with the models worked through.
---

## Strategy Without a Strategist

The machinery of [game theory](/math/game-theory/) assumes almost nothing about players. It needs a set of available strategies, a payoff that depends on what others do, and some process that favours better payoffs. Deliberate choice is one such process. Natural selection is another, and it has an advantage: it specifies a dynamic. In the economic version, the theory predicts a set of equilibria and cannot say which one occurs. In the evolutionary version, the population starts somewhere and moves, so the question answers itself.

{{fig:fisher|Ronald Fisher}} made the first argument of this kind in 1930, about sex ratios. If males are scarce, each male fathers more offspring on average than each female bears, so a parent that produces sons has more grandchildren — and the gene for doing so spreads, until males are no longer scarce. The equilibrium is equal investment in the two sexes, and it is maintained by nothing but the fact that everyone has one mother and one father. The prediction fails in exactly the cases where the premise fails: where brothers compete with each other for mates, broods are overwhelmingly female, which is what fig wasps do.

{{fig:bill-hamilton|William Hamilton}} addressed the harder problem in 1964. Sterile workers, alarm calls that attract predators, and animals that forgo breeding to help others raise young all appear to be selected against. Hamilton's resolution was to change the unit being counted. A gene that causes helping is also present in relatives, with probability $r$, so the behaviour spreads when the benefit to the recipient, discounted by relatedness, exceeds the cost to the actor: $rb > c$. For full siblings $r = 1/2$, so helping must do a sibling more than twice as much good as it does the helper harm.

## A Closer Look: Hawks, Doves and Where the Mixture Settles

{{fig:maynard-smith|John Maynard Smith}} and {{fig:george-price|George Price}} asked in 1973 why animals contesting a resource usually posture instead of fighting. The received explanation was restraint for the good of the species, which is not a mechanism natural selection can supply.

Their model has two strategies. A **Hawk** escalates until it wins or is injured; a **Dove** displays and retreats if the opponent escalates. Let the resource be worth $V$ and an injury cost $C$. The payoffs to the row player are:

| | vs Hawk | vs Dove |
|---|---|---|
| **Hawk** | $(V-C)/2$ | $V$ |
| **Dove** | $0$ | $V/2$ |

Two Hawks fight: each wins half the time and is injured half the time. A Hawk against a Dove takes the resource unopposed. Two Doves share, or settle it by display.

Take $V = 50$ and $C = 100$: injury costs twice what the resource is worth.

Is all-Dove stable? The population average is $V/2 = 25$. A rare Hawk meets only Doves and scores $V = 50$. It invades. Is all-Hawk stable? The average is $(V-C)/2 = -25$ — worse than nothing. A rare Dove meets only Hawks and scores 0, which is better. It invades too. Neither pure strategy is an ESS.

So let a fraction $p$ of the population play Hawk. The expected payoffs are

$$
W_H = p\,\frac{V-C}{2} + (1-p)V, \qquad W_D = (1-p)\frac{V}{2}.
$$

The mixture is stable when the two are equal, since then neither type is gaining:

$$
W_H - W_D = \frac{p(V-C) + (1-p)V}{2} = \frac{V - pC}{2} = 0 \;\Longrightarrow\; p^{*} = \frac{V}{C}.
$$

With the numbers above, $p^{*} = 0.5$. Checking: $W_H = 0.5(-25) + 0.5(50) = 12.5$ and $W_D = 0.5(25) = 12.5$. Equal, as required.

The dynamics make the stability explicit. The replicator equation for this game is

$$
\dot{p} = p(1-p)\,(W_H - W_D) = \frac{p(1-p)(V - pC)}{2},
$$

which is positive for $p < V/C$ and negative above it: the population is pushed back towards $p^{*}$ from either side. This is an ordinary one-dimensional dynamical system with an attracting fixed point, and the entire apparatus of [dynamical systems](/math/dynamical-systems/) applies — which matters because games with three or more strategies produce cycles, and some produce chaos.

Now the uncomfortable part. At the stable mixture the average payoff is 12.5. In an all-Dove population it would be 25. Selection has driven the population to a state in which every individual does half as well as they would under universal restraint, and no individual can do anything about it — the structure of the prisoner's dilemma, derived from nothing but the costs of fighting. This is why "for the good of the species" is not available as an explanation: the good of the species is not what selection maximises.

One more reading of $p^{*} = V/C$ deserves notice. The stable proportion of aggressors depends only on how the resource compares with the injury, and says nothing about the species, the weapons or the context. Where injury is cheap relative to the prize — a mating opportunity that will not recur, a contest between animals without dangerous weapons — the model predicts escalation, and that is where fights to the death are in fact observed. The formula also does not care whether the mixture is achieved by half the individuals being aggressive or by every individual escalating half the time. Those are biologically very different and mathematically identical.

## Cooperation and What Sustains It

The hardest case is cooperation that is not explained by relatedness. {{fig:axelrod|Robert Axelrod}} attacked it empirically in 1980 by inviting people to submit programs to play the repeated prisoner's dilemma and running them against each other. The winner was the shortest entry: cooperate first, then do whatever the opponent did last. Tit-for-tat won the second tournament too, against entrants who knew the result of the first, and won an evolutionary version in which programs reproduced in proportion to their scores.

The lesson drawn — that cooperation emerges when interactions repeat — is correct, and the specific claim about tit-for-tat was oversold. It is not evolutionarily stable: once everyone cooperates, unconditional cooperators are neutral and drift in, which lets defectors back. It also handles mistakes badly, since one accidental defection locks two tit-for-tat players into permanent retaliation, and strategies that forgive occasionally beat it. The 2012 tournament was won by a team of colluding entries that identified each other by an opening signature and sacrificed themselves to feed a designated winner, which is a fact about tournaments rather than about cooperation.

{{fig:martin-nowak|Martin Nowak}} and {{fig:robert-may|Robert May}} found a mechanism that needs neither memory nor recognition. Put players on a lattice so that each interacts only with neighbours and imitates whichever neighbour scored best. Cooperators persist indefinitely, in shifting clusters, in a game where the well-mixed model says they must disappear — because a cooperator's neighbours are disproportionately cooperators. Space does the work that reciprocity does. Nowak later reduced the known mechanisms to a short list, each with a quantitative condition: kin selection needs $r > c/b$, network reciprocity needs the benefit-to-cost ratio to exceed the average number of neighbours, and so on.

What none of them explains well is people, which is the open problem above. Humans cooperate with strangers in one-shot anonymous encounters and pay to punish free-riders they will never meet again, at rates that none of the mechanisms predicts. The possibilities — cultural group selection, internalised norms applied outside the conditions they evolved for, selection for being the kind of partner others seek — are hard to separate, and the laboratory cannot easily distinguish a genuine preference from a psychology built for a world where nothing was ever truly anonymous.
