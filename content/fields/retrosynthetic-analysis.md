---
id: retrosynthetic-analysis
domain: chemistry
thread: synthesis
name: Retrosynthetic Analysis
parent_ids:
  - total-synthesis
era_emerged: 1967 – 2022
core_question: Given a molecule nobody has made, how is a route to it found — and can the search be done by machine?

summary: |-
  Until the 1960s, planning a synthesis was a craft taught by apprenticeship. Elias James Corey gave it a logic. Work backwards: take the target, identify a bond whose formation corresponds to a reaction you trust, and break it on paper, leaving two simpler fragments. Repeat on each fragment until everything can be bought. The analysis is a tree, the breaks are called disconnections, and the fictitious fragments they leave are synthons, which must then be matched to real reagents.

  Stated that way, route planning is a search problem, and Corey said so immediately — he and Todd Wipke had a program attempting it by 1969. The difficulty is the size of the tree. A molecule of moderate complexity offers tens of plausible disconnections, each leading to fragments offering tens more, so a ten-step plan sits somewhere in $10^{10}$ to $10^{17}$ possibilities, with no way to score a position as chess can. Fifty years of rule-based programs made little impression. Neural networks trained on the tens of millions of reactions in the literature, searching the tree by the method that had beaten human players at Go, did better: in 2018 chemists shown machine-generated routes and literature routes could not reliably tell them apart.

key_ideas:
  - term: Disconnection
    definition: >-
      Breaking a bond in the target on paper, in the reverse direction of a reaction known to form it.
      The arrow is drawn backwards, from product to precursors, to mark that this is analysis and not a
      proposal about what happens in a flask.
    turning_point_id: corey-retrosynthesis
  - term: Synthon
    definition: >-
      An idealised fragment left by a disconnection — often a charged species that does not exist as
      such — which must then be matched to a real, available reagent that behaves equivalently.
    turning_point_id: corey-retrosynthesis
  - term: Strategic bond
    definition: >-
      Not all disconnections are equal. Breaking a bond that simplifies the ring system, or that sits
      between two halves of similar size, reduces the problem far more than breaking a peripheral one —
      which is why the analysis is guided by heuristics rather than enumerated.
    turning_point_id: lhasa
  - term: Protecting group
    definition: >-
      A temporary modification that blocks a reactive site so a reagent attacks elsewhere, removed
      afterwards. Orthogonal sets can be removed independently, which is what allows several sites to be
      managed at once — at the price of two steps per group that build nothing.
    turning_point_id: protecting-group-orthogonality
  - term: Atom economy
    definition: >-
      The fraction of the mass of all reactants that ends up in the product. It measures what
      conventional yield hides: a reaction can give 95% yield and discard most of the atoms it consumed.
    turning_point_id: synthesis-metrics
  - term: Tree search with a learned policy
    definition: >-
      Explore the retrosynthetic tree by sampling, using a network trained on known reactions to suggest
      which disconnections are worth trying and another to judge whether a fragment looks purchasable.
      It is the method that made machine route-finding work, and it came from game playing.
    turning_point_id: machine-retrosynthesis

turning_points:
  - id: corey-retrosynthesis
    date: 1967 – 1989
    type: TECHNIQUE-INVENTED
    title: Corey formalises working backwards
    description: >-
      Elias James Corey sets out synthesis planning as an explicit procedure conducted in reverse:
      identify bonds in the target whose formation corresponds to a reliable reaction, disconnect them to
      give simpler precursors, and recurse until the precursors are commercial. He names the fictitious
      fragments synthons and distinguishes strategic disconnections — those that simplify the skeleton —
      from cosmetic ones. The method is teachable, which is its point; it converted a tacit skill into a
      curriculum, and Corey received the 1990 Nobel Prize for it and for the syntheses that demonstrated it.
    contested: false
    sources:
      - citation: "Corey, E. J. (1967). General methods for the construction of complex molecules. Pure and Applied Chemistry 14: 19–37."
        url: null
      - citation: "Corey, E. J. & Cheng, X.-M. (1989). The Logic of Chemical Synthesis. Wiley."
        url: null

  - id: lhasa
    date: 1969 – 1985
    type: TECHNIQUE-INVENTED
    title: The first program that planned syntheses
    description: >-
      Corey and Todd Wipke write LHASA — Logic and Heuristics Applied to Synthetic Analysis — which takes
      a structure drawn on a screen, applies a library of hand-encoded transforms in reverse, and offers
      the chemist a tree of precursors to explore. It was interactive by design: the program proposes and
      the chemist prunes. Several similar systems followed over the next two decades. All of them
      depended on rules written by experts, and all of them produced trees too large to search and
      suggestions too numerous to rank.
    contested: false
    sources:
      - citation: "Corey, E. J. & Wipke, W. T. (1969). Computer-assisted design of complex organic syntheses. Science 166: 178–192."
        url: null
      - citation: "Todd, M. H. (2005). Computer-aided organic synthesis. Chemical Society Reviews 34: 247–266."
        url: null

  - id: protecting-group-orthogonality
    date: 1963 – 1990
    type: TECHNIQUE-INVENTED
    title: Blocking what must not react
    description: >-
      Robert Bruce Merrifield's solid-phase peptide synthesis required a set of protecting groups that
      could be removed independently of one another — one at each coupling, another at the end, and the
      anchor to the resin last — so that a chain could be assembled one residue at a time without the
      intermediate ever being purified. The idea of orthogonal protection generalised, and with it the
      standard criticism of the practice: in a long synthesis a third of the steps may install or remove
      groups that contribute nothing to the structure.
    contested: false
    sources:
      - citation: "Merrifield, R. B. (1963). Solid phase peptide synthesis I. Journal of the American Chemical Society 85: 2149–2154."
        url: null
      - citation: "Wuts, P. G. M. & Greene, T. W. (2007). Greene's Protective Groups in Organic Synthesis, 4th edition. Wiley."
        url: null

  - id: synthesis-metrics
    date: 1975 – 1992
    type: MECHANISM-ESTABLISHED
    title: Measuring a route rather than admiring it
    description: >-
      James Hendrickson defines the ideal synthesis — every step builds skeleton, nothing is protected,
      no step is wasted — as a standard to be measured against. Barry Trost introduces atom economy, the
      fraction of reactant mass appearing in the product, which exposes reactions that give high yields
      while discarding most of their atoms. Roger Sheldon adds the E-factor, kilograms of waste per
      kilogram of product, and reports values from about 1 for bulk chemicals to between 25 and 100 for
      pharmaceuticals. Route choice acquires numbers.
    contested: false
    sources:
      - citation: "Hendrickson, J. B. (1975). Systematic synthesis design. Journal of the American Chemical Society 97: 5784–5800."
        url: null
      - citation: "Trost, B. M. (1991). The atom economy — a search for synthetic efficiency. Science 254: 1471–1477."
        url: null
      - citation: "Sheldon, R. A. (2017). The E factor 25 years on. Green Chemistry 19: 18–43."
        url: null

  - id: automated-synthesis-platforms
    date: 2015 – 2019
    type: TECHNIQUE-INVENTED
    title: Machines that run the steps
    description: >-
      Martin Burke's group builds a platform that assembles small molecules from a standardised set of
      building blocks by one repeated coupling-and-deprotection cycle, with purification handled by a
      common procedure — fourteen classes of molecule made by one machine. Lee Cronin's group publishes a
      chemical programming language and a robotic platform that executes a published procedure from a
      machine-readable description. Both reduce synthesis to operations a machine can be instructed to
      perform, for the subset of chemistry that fits their format.
    contested: false
    sources:
      - citation: "Li, J. et al. (2015). Synthesis of many different types of organic small molecules using one automated process. Science 347: 1221–1226."
        url: null
      - citation: "Steiner, S. et al. (2019). Organic synthesis in a modular robotic system driven by a chemical programming language. Science 363: eaav2211."
        url: null

  - id: machine-retrosynthesis
    date: 2018 – 2022
    type: TECHNIQUE-INVENTED
    title: Search that works
    description: >-
      Marwin Segler, Mike Preuss and Mark Waller combine three neural networks — one proposing
      disconnections, one filtering implausible ones, one estimating whether a fragment is reachable —
      with Monte Carlo tree search, the method that had beaten human players at Go. Trained on the
      literature's reactions, it finds routes for molecules it has not seen, about thirty times faster
      than rule-based systems; in a double-blind test, chemists shown machine routes and literature
      routes rated them equally. Bartosz Grzybowski's Chematica had meanwhile planned eight routes that
      were then executed successfully in the laboratory.
    contested: false
    sources:
      - citation: "Segler, M. H. S., Preuss, M. & Waller, M. P. (2018). Planning chemical syntheses with deep neural networks and symbolic AI. Nature 555: 604–610."
        url: null
      - citation: "Klucznik, T. et al. (2018). Efficient syntheses of diverse, medicinally relevant targets planned by computer and executed in the laboratory. Chem 4: 522–532."
        url: null

open_problems:
  - id: route-to-execution
    name: From a planned route to a working one
    status: open
    status_note: Open as of 2026; machine planning is useful and machine execution of an arbitrary plan is not.
    description: >-
      Planning and doing have come apart. Software now proposes routes that chemists judge reasonable,
      and the step from a proposed route to material in a flask still requires a trained person: choosing
      solvents, temperatures, concentrations and work-ups, diagnosing why a step gave tar, and deciding
      when to abandon a branch. The literature the planners learn from records what worked and almost
      never what failed, so the models have no training signal for the most useful judgement of all.
    why_hard: >-
      Reaction conditions are high-dimensional, interact, and are reported inconsistently; negative
      results are unpublished; and yields in the literature are optimistic and irreproducible often
      enough to matter. A planner trained on successes cannot learn to avoid failures it has never seen,
      and automated platforms handle only reaction classes that fit their hardware.
    unlocks: >-
      A molecule designed on a screen and delivered without a specialist would change the pace of drug
      and materials discovery, where synthesis is usually the slowest stage.
    sources:
      - citation: "Coley, C. W. et al. (2019). A robotic platform for flow synthesis of organic compounds informed by AI planning. Science 365: eaax1566."
        url: null
      - citation: "Strieth-Kalthoff, F., Sandfort, F., Segler, M. H. S. & Glorius, F. (2020). Machine learning the ropes: principles, applications and directions in synthetic chemistry. Chemical Society Reviews 49: 6154–6168."
        url: null

applications:
  - area: Pharmaceutical process chemistry
    title: Choosing the route that can be run at a tonne
    description: >-
      A medicinal chemist's route makes milligrams; manufacturing needs tonnes, with constraints the
      first route ignores — no chromatography, no reagents that explode at scale, solvents that can be
      recovered, and an E-factor the regulator and the accountant will both accept. Process chemistry is
      retrosynthetic analysis performed again under those constraints, and it routinely cuts step counts
      by half or more.
    sources:
      - citation: "Caron, S. & Thomson, N. M. (2015). Pharmaceutical process chemistry: evolution of a contemporary data-rich laboratory environment. Journal of Organic Chemistry 80: 2943–2958."
        url: null
  - area: Search algorithms
    title: A tree too large to enumerate
    description: >-
      Retrosynthesis is a search over a branching tree with no exact evaluation function, which is the
      shape of problem that defeated rule-based programs for fifty years and that Monte Carlo tree
      search with learned policies solved for board games. The transfer went in that direction — from
      game playing to chemistry — and it is among the clearest cases of an algorithm designed for one
      domain working in another because the two share a structure.
    domain: math
    field_id: computational-complexity
    sources:
      - citation: "Segler, M. H. S., Preuss, M. & Waller, M. P. (2018). Planning chemical syntheses with deep neural networks and symbolic AI. Nature 555: 604–610."
        url: null
  - area: Green chemistry
    title: Counting the waste
    description: >-
      The E-factor made visible something yield conceals. Producing a kilogram of a pharmaceutical
      generates on the order of 25 to 100 kilograms of waste, most of it solvent, against about 1 to 5
      for a fine chemical and under 1 for a bulk commodity. Reporting that number changed which routes
      companies chose, which is an unusually direct case of a metric altering practice.
    sources:
      - citation: "Sheldon, R. A. (2017). The E factor 25 years on. Green Chemistry 19: 18–43."
        url: null

further_reading:
  - citation: "Corey, E. J. & Cheng, X.-M. (1989). The Logic of Chemical Synthesis. Wiley."
    url: null
    note: The method stated by its author, with a hundred worked analyses.
  - citation: "Hoffmann, R. W. (2009). Elements of Synthesis Planning. Springer."
    url: null
    note: Shorter and more candid about the trade-offs, including when to accept a longer route.
  - citation: "Segler, M. H. S., Preuss, M. & Waller, M. P. (2018). Planning chemical syntheses with deep neural networks and symbolic AI. Nature 555: 604–610."
    url: null
    note: The paper that made machine planning work, and clear about what it is and is not doing.
---

## Working Backwards

Asked how to make a molecule, the natural impulse is to start from something available and build. {{fig:ej-corey|Elias James Corey}}'s insight, formalised in 1967, is that the search is far better conducted from the other end.

Take the target. Find a bond in it whose formation corresponds to a reaction you trust. Break that bond on paper — a *disconnection*, drawn with a special arrow to signal that this is analysis rather than a claim about what happens in a flask — and you are left with two simpler pieces. Repeat on each piece. Stop when everything in hand can be ordered from a catalogue. Reverse the whole thing and you have a plan.

Two features make this more than a change of direction. The fragments a disconnection leaves are often not real substances — one half may be a carbon atom bearing a negative charge — and Corey called these *synthons*, idealised pieces that must subsequently be matched to real reagents that behave equivalently. And not all disconnections are worth making: breaking a bond that dismantles a ring system, or that divides the molecule into halves of comparable size, simplifies the problem enormously, while breaking a peripheral bond barely helps. Corey's term for the first kind is a strategic bond, and recognising them is what the method teaches.

The result was a curriculum. Synthesis planning had been a tacit skill acquired by watching; after 1967 it could be set as an exercise, and that is most of why Corey's influence on the field exceeded even his own syntheses.

## What a Metric Changed

Running alongside the planning problem is a measurement problem: what makes one route better than another?

Yield alone is a poor answer, because it says nothing about what was consumed. {{fig:trost|Barry Trost}}'s atom economy — the fraction of the total mass of reactants that ends up in the product — exposes reactions that proceed in 95% yield while discarding four fifths of the atoms they used, which a great many classical reactions do. {{fig:roger-sheldon|Roger Sheldon}} then defined the E-factor, kilograms of waste per kilogram of product, and published the figures that followed from it: around 1 for bulk chemicals, 5 to 50 for fine chemicals, and **25 to 100 for pharmaceuticals**, most of it solvent.

{{fig:hendrickson|James Hendrickson}} had already defined the standard those numbers are measured against. In an ideal synthesis every step builds skeleton, nothing is protected and unprotected, nothing is purified between steps. Real routes fall short mainly through protecting groups — a third of the steps in a long synthesis may install and remove them, contributing nothing to the structure — which is the cost of using reagents less selective than enzymes, and the subject of the next field.

Publishing those numbers changed behaviour, which metrics in science do not always do. Process chemists now report E-factors, companies set targets for them, and the difference between a medicinal chemist's first route and the manufacturing route is routinely a halving of the step count.

## A Closer Look: The Size of the Tree

Return to the planning problem itself. {{fig:ej-corey|Corey}} saw at once that a procedure this explicit could be given to a computer, and by 1969 he and {{fig:wipke|Todd Wipke}} had LHASA running. The programme of the next fifty years was to make it work. The obstacle is arithmetic.

Consider the branching. A molecule of moderate complexity offers somewhere between ten and a hundred disconnections that a chemist would take seriously. Each produces fragments that offer about as many again. For a route of depth $d$ with branching factor $b$, the number of distinct routes is of order $b^{d}$:

| Branching factor | Depth 5 | Depth 10 |
|---|---|---|
| 10 | $10^{5}$ | $10^{10}$ |
| 50 | $3\times10^{8}$ | $10^{17}$ |

For comparison, chess has a branching factor around 35 and games of about 80 moves; Go has around 250 and 150. Retrosynthesis sits between them in size — and lacks the one thing that makes game search tractable. In chess a position can be scored: count material, assess structure, and you have an estimate of how good it is. In retrosynthesis there is no reliable function that looks at a set of fragments and says how close they are to being purchasable, because the answer depends on the whole of chemical practice.

Rule-based programs failed on exactly this. They could generate the tree — that was never the difficulty — and could not rank what they generated, so they handed the chemist thousands of suggestions, which is less useful than handing over none.

What changed is that both missing pieces were learned rather than written. {{fig:segler|Marwin Segler}}, {{fig:preuss|Mike Preuss}} and {{fig:waller|Mark Waller}} trained one network on roughly 12 million published reactions to propose which disconnections are plausible for a given structure, a second to filter proposals that would not actually work, and a third to estimate whether a fragment is reachable. The tree is then explored by Monte Carlo tree search — sample a path to the end, use the outcome to update which branches are worth revisiting — which is the method that had just beaten human players at Go.

The result in 2018 was a system about thirty times faster than its rule-based predecessors, finding routes for molecules absent from its training set. The evaluation is the part worth noting: chemists were shown pairs of routes, one from the literature and one from the machine, without being told which was which, and rated them as equally plausible. In the same year {{fig:grzybowski|Bartosz Grzybowski}}'s group took eight computer-planned routes into the laboratory and executed all eight.

## Planning Is Not Making

The gap that remains is the one recorded in the open problem above, and it has widened as planning improved. Software proposes routes that chemists accept as reasonable. Turning such a route into material still requires a trained person to choose a solvent, a temperature, a concentration and a work-up, to recognise why a step produced tar, and to judge when a branch is not worth pursuing.

Part of the reason is in the data. The literature records what worked, in conditions chosen after unreported optimisation, with yields that are systematically optimistic. It almost never records what failed. A planner trained on that corpus learns what good chemistry looks like and has no training signal at all for the judgement a chemist uses most — recognising a route that will not survive contact with a flask.

The automated platforms attack the other half. {{fig:burke|Martin Burke}}'s machine builds molecules from standardised blocks by one repeated coupling-and-deprotection cycle with a common purification, and {{fig:cronin|Lee Cronin}}'s executes published procedures from a machine-readable description. Both work, for the chemistry that fits their format, which is a small fraction of chemistry. The thing neither has is the thing the next field is about: reactions selective enough that most of the protecting and blocking could be dispensed with altogether.
