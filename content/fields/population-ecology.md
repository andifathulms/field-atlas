---
id: population-ecology
domain: biology
thread: ecology
name: Population Ecology
parent_ids:
  - biogeography
era_emerged: 1838 – 1934
core_question: What sets the size of a population, and why do some populations boom and crash?

summary: |-
  Population ecology studies how the numbers of a species change over time: how fast a population grows, what stops it growing, and why some populations hold steady while others swing wildly from year to year. It treats births, deaths, predators and competitors as quantities, and describes their effects with equations.

  Its first models were written by a demographer and two mathematicians. Verhulst's logistic curve described growth that slows as resources run short, and Lotka and Volterra showed that predators and their prey can cycle for ever without any outside cause. Gause tested the equations in test tubes, and field ecologists argued for decades over whether crowding or weather controls numbers. In the 1970s Robert May showed that the simplest population models can behave chaotically, a result that helped launch chaos theory in mathematics.

key_ideas:
  - term: Carrying capacity
    definition: >-
      The largest population an environment can sustain. In the logistic model, growth
      slows in proportion as a population approaches it, written $K$.
    turning_point_id: verhulst-logistic
  - term: Predator–prey cycles
    definition: >-
      Prey increase, predators then increase and eat them down, predators then starve
      and decline, and prey recover. The two populations rise and fall in turn, with the
      predator lagging behind.
    turning_point_id: lotka-volterra
  - term: Competitive exclusion
    definition: >-
      Two species that compete for exactly the same limiting resource cannot coexist
      indefinitely. The slightly better competitor eventually drives the other out.
    turning_point_id: gause-competitive-exclusion
  - term: Density dependence
    definition: >-
      Birth or death rates that change with how crowded a population is. It is what
      holds a population near a steady level, as opposed to weather and other
      disturbances that act whatever the density.
    turning_point_id: density-dependence-debate
  - term: Deterministic chaos
    definition: >-
      Erratic, unpredictable fluctuations produced by a simple rule with no randomness
      in it. A population that overshoots strongly when crowded can fluctuate chaotically.
    turning_point_id: may-population-chaos

turning_points:
  - id: verhulst-logistic
    date: "1838"
    type: DISCOVERY
    title: Verhulst's logistic curve
    description: >-
      Malthus had argued in 1798 that populations grow geometrically until checked by
      famine and disease. The Belgian mathematician Pierre-François Verhulst proposes a
      smoother law, in which growth slows steadily as a population approaches a ceiling,
      giving an S-shaped curve he later called logistic. Pearl and Reed rediscovered it
      in 1920.
    contested: false
    sources:
      - citation: "Verhulst, P.-F. (1838). Notice sur la loi que la population suit dans son accroissement. Correspondance mathématique et physique 10: 113–121."
        url: null
      - citation: "Pearl, R. & Reed, L. J. (1920). On the rate of growth of the population of the United States since 1790 and its mathematical representation. Proceedings of the National Academy of Sciences 6(6): 275–288."
        url: null

  - id: lynx-hare-cycle
    date: 1924 – 1942
    type: DISCOVERY
    title: The ten-year cycle of lynx and hare
    description: >-
      Charles Elton, a young Oxford zoologist, collects evidence that many animal
      populations fluctuate in regular cycles. The fur returns of the Hudson's Bay
      Company show lynx numbers peaking roughly every ten years, a little after the peaks
      of the snowshoe hares they eat.
    contested: true
    contested_note: >-
      What drives the cycle has been argued for decades. Some ecologists held that the
      lynx drive the hare cycle, others that hares crash when they exhaust their winter
      food. Large field experiments in the Yukon in the 1980s and 1990s found that food
      and predators both matter and interact, and the relative weight of each is still
      discussed.
    sources:
      - citation: "Elton, C. & Nicholson, M. (1942). The ten-year cycle in numbers of the lynx in Canada. Journal of Animal Ecology 11(2): 215–244."
        url: null

  - id: lotka-volterra
    date: 1925 – 1926
    type: DISCOVERY
    title: The Lotka–Volterra equations
    description: >-
      The American chemist and statistician Alfred Lotka, and independently the Italian
      mathematician Vito Volterra, write down a pair of equations for a predator and its
      prey. Their solutions cycle for ever. Volterra was answering a question about the
      Adriatic fish catch during the First World War.
    contested: true
    contested_note: >-
      Priority was disputed at the time. Lotka had published the cyclical solution in
      1920 and wrote to Nature to point this out after Volterra's paper appeared.
      Volterra acknowledged the earlier work, and the equations now carry both names,
      though Volterra's much fuller analysis was reached independently.
    sources:
      - citation: "Lotka, A. J. (1925). Elements of Physical Biology. Williams & Wilkins, Baltimore."
        url: null
      - citation: "Volterra, V. (1926). Fluctuations in the abundance of a species considered mathematically. Nature 118: 558–560."
        url: null

  - id: gause-competitive-exclusion
    date: "1934"
    type: DISCOVERY
    title: Gause's struggle for existence
    description: >-
      The young Moscow biologist Georgii Gause tests the Lotka–Volterra equations with
      microbes in test tubes. Grown separately, two species of Paramecium each settle at a
      steady density. Grown together on the same food, one always drives the other out.
      Two species that do share a tube survive only when they feed in different places.
      The result became the principle of competitive exclusion.
    contested: false
    sources:
      - citation: "Gause, G. F. (1934). The Struggle for Existence. Williams & Wilkins, Baltimore."
        url: null

  - id: density-dependence-debate
    date: 1933 – 1954
    type: DISCOVERY
    title: Crowding or weather
    description: >-
      The Australian entomologist Alexander Nicholson argues that populations are held in
      balance by competition, which intensifies as they grow. His caged blowflies, fed a
      fixed ration, cycle in number for years. Herbert Andrewartha and Charles Birch
      reply with field data on insects whose numbers track the weather and are rarely
      limited by crowding. The two sides defined what population regulation means.
    contested: true
    contested_note: >-
      The dispute was one of interpretation and was never settled by either side
      conceding. Most ecologists now hold that both kinds of factor act together, and
      argue instead about how strong density dependence is in particular populations and
      how it can be detected in noisy data.
    sources:
      - citation: "Nicholson, A. J. (1933). The balance of animal populations. Journal of Animal Ecology 2(1): 132–178."
        url: null
      - citation: "Andrewartha, H. G. & Birch, L. C. (1954). The Distribution and Abundance of Animals. University of Chicago Press."
        url: null

  - id: may-population-chaos
    date: 1974 – 1976
    type: CONSENSUS-OVERTURNED
    title: Populations that fluctuate by themselves
    description: >-
      Ecologists had assumed that a population left alone settles to a steady level, and
      that erratic fluctuations must come from outside. Robert May shows that a
      population with separate generations, following a simple rule in which crowding
      cuts growth, can instead cycle or fluctuate chaotically when its growth rate is
      high.
    contested: true
    contested_note: >-
      How common chaos is in nature is disputed. Hassell, Lawton and May found most field
      populations in the stable range. Chaos was later demonstrated convincingly in
      laboratory flour beetles, but in wild populations, with their short and noisy
      records, it is hard to tell chaos from random disturbance.
    sources:
      - citation: "May, R. M. (1974). Biological populations with nonoverlapping generations: stable points, stable cycles, and chaos. Science 186(4164): 645–647."
        url: null
      - citation: "Hassell, M. P., Lawton, J. H. & May, R. M. (1976). Patterns of dynamical behaviour in single-species populations. Journal of Animal Ecology 45(2): 471–486."
        url: null

open_problems:
  - id: rodent-population-cycles
    name: Why voles and lemmings cycle
    status: open
    status_note: Open as of writing; a century after Elton described them, no single explanation is accepted.
    description: >-
      Voles and lemmings in northern Europe and North America often rise to plagues and
      crash every three to five years. Elton described the lemming cycles in 1924. In
      some places the cycles have faded since the 1980s, and in others they persist.
    why_hard: >-
      Many explanations fit part of the evidence: predators such as weasels, food
      shortage, disease, changes in the animals' own behaviour and physiology at high
      density, and winter snow conditions. The cycles take years to observe, and
      large-scale experiments on wild rodents are difficult and slow.
    unlocks: >-
      A general understanding of what makes populations cycle, and of why some cycles
      are now fading as winters change, with effects on the owls, foxes and other
      predators that depend on them.
    sources:
      - citation: "Krebs, C. J. (2013). Population Fluctuations in Rodents. University of Chicago Press."
        url: null

applications:
  - area: Fisheries
    title: Maximum sustainable yield
    description: >-
      The logistic model implies that a population grows fastest at half its carrying
      capacity, so a harvest taken there could in principle be sustained for ever. From
      the 1950s this maximum sustainable yield became the goal of fisheries management
      worldwide. Its failures, including the collapse of the northern cod off
      Newfoundland in 1992, taught managers to leave wide margins for error.
    sources:
      - citation: "Schaefer, M. B. (1954). Some aspects of the dynamics of populations important to the management of the commercial marine fisheries. Bulletin of the Inter-American Tropical Tuna Commission 1(2): 27–56."
        url: null
  - area: Mathematics
    title: The standard example of a nonlinear system
    description: >-
      The Lotka–Volterra equations became a model system in the theory of differential
      equations: a nonlinear pair with a conserved quantity and closed orbits, simple
      enough to analyse completely. They appear in almost every textbook on the subject.
    domain: math
    field_id: differential-equations
    sources:
      - citation: "Hirsch, M. W., Smale, S. & Devaney, R. L. (2013). Differential Equations, Dynamical Systems, and an Introduction to Chaos (3rd ed.). Academic Press."
        url: null
  - area: Mathematics
    title: Population models and the discovery of chaos
    description: >-
      May's review of 1976 put the logistic map, a population model, in front of
      mathematicians and physicists, and urged that it be taught to every student. It
      became the most studied example of the route from order to chaos.
    domain: math
    field_id: chaos-theory
    sources:
      - citation: "May, R. M. (1976). Simple mathematical models with very complicated dynamics. Nature 261: 459–467."
        url: null

further_reading:
  - citation: "Kingsland, S. E. (1995). Modeling Nature: Episodes in the History of Population Ecology (2nd ed.). University of Chicago Press."
    url: null
    note: The history of Pearl, Lotka, Volterra, Gause and the arguments over mathematical ecology.
  - citation: "Elton, C. S. (1927). Animal Ecology. Sidgwick & Jackson, London."
    url: null
    note: The short book that set the agenda for animal ecology, still readable today.
  - citation: "Gotelli, N. J. (2008). A Primer of Ecology (4th ed.). Sinauer Associates."
    url: null
    note: A gentle introduction to the equations of population ecology.
---

## Malthus and the Logistic Curve

In 1798 Thomas Malthus argued that human numbers, left unchecked, grow geometrically, doubling again and again, while food supplies grow far more slowly. Famine, disease and war must hold populations down. Darwin and Wallace both read Malthus and saw that the same pressure acts on every species, which gave them [natural selection](/biology/evolutionary-biology/). But Malthus described a collision, not a curve.

In 1838 the Belgian mathematician {{fig:pierre-francois-verhulst|Pierre-François Verhulst}} proposed that growth slows gradually instead. The rate of growth falls in proportion as a population approaches a ceiling, now called the carrying capacity. The resulting S-shaped curve rises slowly, then steeply, then levels off. Verhulst's paper was forgotten for eighty years. In 1920 Raymond Pearl and Lowell Reed rediscovered the curve and fitted it to the United States census, and it became the founding model of population ecology. Their prediction that the country would level off at about 197 million people was wrong, but the logistic curve described yeast in flasks and flies in bottles well.

## Predators, Prey and the Fur Trade

In 1924 {{fig:charles-elton|Charles Elton}}, a young Oxford zoologist who had been on expeditions to Arctic Spitsbergen, pointed out that many animals rise and fall in regular cycles. The most spectacular record came from the Hudson's Bay Company, which had counted the furs brought in by Canadian trappers for over a century. Lynx numbers peaked about every ten years, just after the snowshoe hares they hunt. In his 1927 book *Animal Ecology* Elton also set out the idea of the food chain, and of each species' niche, its role in the community.

At the same time two scientists wrote down the mathematics. {{fig:alfred-lotka|Alfred Lotka}}, an American chemist interested in the physics of living systems, and {{fig:vito-volterra|Vito Volterra}}, one of Italy's leading mathematicians, each described a predator and its prey with a pair of equations. Prey multiply unless eaten. Predators multiply in proportion to the prey they catch, and die without them. The solutions go round in endless cycles, with predators lagging about a quarter of a cycle behind their prey.

Volterra had been set the problem by his son-in-law, the marine biologist Umberto D'Ancona. During the First World War, when fishing in the Adriatic was reduced, sharks and other predatory fish had made up a larger share of the catch. The equations showed why: reduced fishing helps the predators more than the prey. The same logic explains why a pesticide that kills pests and their natural enemies alike can leave the pests more numerous than before.

## Struggles in a Test Tube

The equations were easy to write and hard to test in the wild. In Moscow in the early 1930s, {{fig:georgii-gause|Georgii Gause}}, still in his early twenties, tested them with microbes. He grew two species of *Paramecium* on the same bacterial food. Each alone grew along a logistic curve. Together, one always drove the other extinct. When he paired species that fed in different parts of the tube, they coexisted. The rule that complete competitors cannot coexist became known as the competitive exclusion principle.

In the field, ecologists argued about what really controls numbers. {{fig:alexander-nicholson|Alexander Nicholson}} in Australia held that crowding does: as a population grows, competition for food and space raises deaths and cuts births. His blowflies, kept in cages on a fixed ration of meat, cycled in number for years. His compatriots {{fig:herbert-andrewartha|Herbert Andrewartha}} and {{fig:charles-birch|Charles Birch}} replied in 1954 that most insects never get crowded, because the weather kills them first. The argument ran for two decades and ended with both sides partly right.

Then, in 1974, {{fig:robert-may|Robert May}}, a physicist who had turned to ecology, showed that crowding alone can produce wild fluctuations. In a population with separate generations, if numbers overshoot strongly when crowded, the simplest density-dependent rule gives steady numbers, then two-year cycles, then four-year cycles, and then chaos, fluctuations that never repeat and cannot be predicted far ahead. With Michael Hassell and John Lawton he fitted the model to real insect populations, and found most of them in the stable range. Whether many wild populations are chaotic is still debated. What changed for good was the assumption that erratic numbers need an outside cause.

## A Closer Look: How Much Fish Can We Take?

The logistic model says that a population of size $N$ grows at the rate

$$
\frac{dN}{dt} = rN\left(1 - \frac{N}{K}\right),
$$

where $r$ is the growth rate when the population is small and $K$ is the carrying capacity. Take a fish stock with $K = 1{,}000{,}000$ tonnes and $r = 0.4$ per year. Its yearly growth, the surplus a fishery could remove without shrinking the stock, depends on how big the stock is:

| Stock (tonnes) | Growth per year (tonnes) |
|---|---|
| 100,000 | 36,000 |
| 250,000 | 75,000 |
| 500,000 | 100,000 |
| 750,000 | 75,000 |
| 900,000 | 36,000 |

Growth is small when the stock is small, because there are few fish to breed. It is also small near $K$, because the fish are crowded. It peaks at half the carrying capacity, and the peak is the maximum sustainable yield:

$$
\text{MSY} = \frac{rK}{4} = \frac{0.4 \times 1{,}000{,}000}{4} = 100{,}000 \text{ tonnes per year}.
$$

The danger is in what happens below the peak. Suppose managers set a fixed quota of 100,000 tonnes, but the stock has already fallen to 400,000 tonnes. It now grows by only $0.4 \times 400{,}000 \times 0.6 = 96{,}000$ tonnes a year, less than is taken. The stock shrinks, so it grows even more slowly, and the gap widens. In this model the fishery removes the last fish in about twenty years. A quota of 110,000 tonnes, just 10% above the maximum, also empties the stock within about twenty years, even starting from the best possible size.

A smaller fixed quota is safer, but only down to a point. A quota of 80,000 tonnes has two balance points, at about 724,000 tonnes and 276,000 tonnes. The upper one is stable, and a stock near it recovers from a bad year. Below 276,000 tonnes the stock can no longer keep up, and it collapses even under this modest quota. Real stocks add uncertainty about $r$ and $K$, random bad years and fish counted from the catch itself, which is why fixed quotas near the maximum led to collapses, and why modern management aims well below it.

## From One Species to Many

The models of Lotka, Volterra and Gause dealt with one species, or two. Real habitats hold hundreds, competing, preying on each other and depending on each other. How so many species manage to live together, and how they are organised, became the subject of [community ecology](/biology/community-ecology/).

The equations also travelled the other way. The Lotka–Volterra system became a standard example in the theory of [differential equations](/math/differential-equations/), and May's population model became a founding example of [chaos theory](/math/chaos-theory/).
