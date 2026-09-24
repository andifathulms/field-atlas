---
id: combinatorial-optimization
domain: math
thread: combinatorics
name: Combinatorial Optimisation
parent_ids:
  - graph-theory
  - computational-complexity
era_emerged: 1939 – 1979
core_question: Among astronomically many possible arrangements, how can the best one be found without trying them all?

summary: |-
  Combinatorial optimisation looks for the best choice among a finite but enormous set: the shortest delivery route, the cheapest way to connect a set of towns, the best assignment of workers to jobs. Trying every option is hopeless, since there are more ways to order 25 cities than there are grains of sand on Earth. The subject finds structure that leads straight to the optimum, or proves that no such shortcut is likely to exist.

  It grew from wartime and post-war planning: Soviet plywood production, American military logistics, railway networks. Linear programming, network flows and matching algorithms are its classical core. After 1971 the theory of NP-completeness split its problems into those with efficient algorithms and those, like the travelling salesman problem, for which approximation became the realistic goal.

key_ideas:
  - term: Linear programming
    definition: >-
      Maximising a linear quantity, like profit, subject to linear constraints, like
      available materials. Most of optimisation reduces to it or builds on it.
    turning_point_id: linear-programming
  - term: Duality
    definition: >-
      Every maximisation problem of this kind has a mirror-image minimisation problem
      with the same optimal value. The maximum flow through a network equals the capacity
      of its narrowest cut.
    turning_point_id: max-flow-min-cut
  - term: Greedy algorithm
    definition: >-
      Build a solution by always taking the best-looking next step. It is optimal for
      shortest paths and for cheapest connecting networks, and fails for many other
      problems.
    turning_point_id: dijkstra-shortest-paths
  - term: Approximation algorithm
    definition: >-
      For problems where finding the optimum is NP-hard, a fast method with a guarantee,
      such as "never more than 50% above the best possible".
    turning_point_id: metric-tsp-approximation

turning_points:
  - id: linear-programming
    date: 1939 – 1947
    type: REFORMULATION
    title: Linear programming and the simplex method
    description: >-
      Leonid Kantorovich, asked in 1939 to optimise plywood production in Leningrad,
      formulates planning problems as maximising a linear objective under linear
      constraints. In 1947 George Dantzig, working on US Air Force logistics,
      independently formulates linear programming and invents the simplex method to solve
      it. It became one of the most used algorithms in history.
    contested: true
    contested_note: >-
      Priority is divided. Kantorovich had the formulation and a solution method first,
      but his work was little known in the West and was discouraged in the Soviet Union.
      Dantzig's simplex method made the subject practical and widespread. The 1975 Nobel
      memorial prize in economics went to Kantorovich and Tjalling Koopmans, not Dantzig,
      which many, including Koopmans, regarded as an injustice.
    sources:
      - citation: "Kantorovich, L. V. (1960). Mathematical methods of organizing and planning production. Management Science 6(4): 366–422. (Translation of the 1939 Russian original.)"
        url: null
      - citation: "Dantzig, G. B. (1963). Linear Programming and Extensions. Princeton University Press."
        url: null

  - id: max-flow-min-cut
    date: "1956"
    type: PROOF
    title: The max-flow min-cut theorem
    description: >-
      Lester Ford and Delbert Fulkerson, at the RAND Corporation, prove that the largest
      flow that can be pushed through a network equals the capacity of its narrowest
      bottleneck, and give an algorithm to find both. The question came from a study of
      the Soviet railway network's capacity to move goods to Eastern Europe. Many other
      problems turned out to be flow problems in disguise.
    contested: false
    sources:
      - citation: "Ford, L. R. & Fulkerson, D. R. (1956). Maximal flow through a network. Canadian Journal of Mathematics 8: 399–404."
        url: null
      - citation: "Schrijver, A. (2002). On the history of the transportation and maximum flow problems. Mathematical Programming 91(3): 437–445."
        url: null

  - id: dijkstra-shortest-paths
    date: "1959"
    type: PROOF
    title: Dijkstra's shortest-path algorithm
    description: >-
      Edsger Dijkstra, a Dutch programmer, publishes a simple method for finding the
      shortest route between two points in a network: repeatedly settle the nearest point
      not yet settled. He had designed it in 1956 in about twenty minutes at a café in
      Amsterdam, without pencil and paper. Versions of it run in every route planner.
    contested: false
    sources:
      - citation: "Dijkstra, E. W. (1959). A note on two problems in connexion with graphs. Numerische Mathematik 1: 269–271."
        url: null

  - id: edmonds-blossom
    date: "1965"
    type: PROOF
    title: Edmonds's matching algorithm
    description: >-
      Jack Edmonds finds an efficient algorithm for pairing up the points of any network
      as fully as possible, handling the odd cycles, "blossoms", that defeat simpler
      methods. In the same paper, "Paths, trees, and flowers", he argues that an
      algorithm is good if its running time grows polynomially. Optimisation and the
      theory of efficient computation were born together.
    contested: false
    sources:
      - citation: "Edmonds, J. (1965). Paths, trees, and flowers. Canadian Journal of Mathematics 17: 449–467."
        url: null

  - id: metric-tsp-approximation
    date: 1976 – 2020
    type: PROOF
    title: Half again as long, and then slightly less
    description: >-
      The travelling salesman problem is NP-hard. Nicos Christofides gives a fast method
      that always finds a tour at most 50% longer than the shortest, when distances obey
      the triangle inequality. For 44 years nobody could improve the 50%. In 2020 Anna
      Karlin, Nathan Klein and Shayan Oveis Gharan beat it, by about $10^{-36}$, a tiny
      margin that broke a long-standing barrier.
    contested: true
    contested_note: >-
      Anatoliy Serdyukov found the same algorithm independently in the Soviet Union, and
      published it in 1978. His work was largely unknown in the West until an English translation and
      historical note appeared in 2020, and the method is now often called the Christofides–Serdyukov algorithm.
    sources:
      - citation: "Christofides, N. (1976). Worst-case analysis of a new heuristic for the travelling salesman problem. Report 388, Graduate School of Industrial Administration, Carnegie Mellon University."
        url: null
      - citation: "Karlin, A. R., Klein, N. & Oveis Gharan, S. (2021). A (slightly) improved approximation algorithm for metric TSP. Proceedings of the 53rd ACM Symposium on Theory of Computing: 32–45."
        url: null
      - citation: "van Bevern, R. & Slugina, V. A. (2020). A historical note on the 3/2-approximation algorithm for the metric traveling salesman problem. Historia Mathematica 53: 118–127."
        url: https://doi.org/10.1016/j.hm.2020.04.003

  - id: khachiyan-ellipsoid
    date: "1979"
    type: PROOF
    title: Linear programming in polynomial time
    description: >-
      The simplex method is fast in practice, but examples found in 1972 showed it can take
      exponentially many steps. Leonid Khachiyan proves that linear programming can be
      solved in polynomial time, by the ellipsoid method. The result reached the front
      page of the *New York Times*. In 1984 Narendra Karmarkar found a polynomial method
      that was also fast in practice.
    contested: false
    sources:
      - citation: "Khachiyan, L. G. (1979). A polynomial algorithm in linear programming. Doklady Akademii Nauk SSSR 244: 1093–1096."
        url: null

open_problems:
  - id: strongly-polynomial-lp
    name: A strongly polynomial algorithm for linear programming
    status: open
    status_note: Open as of 2026; one of Stephen Smale's eighteen problems for the twenty-first century.
    description: >-
      Known polynomial algorithms for linear programming take longer when the numbers in
      the problem have more digits. Is there an algorithm whose number of arithmetic steps
      depends only on the number of variables and constraints, not on the size of the
      numbers?
    why_hard: >-
      The natural candidate is the simplex method with a clever rule for choosing each
      step, but for every rule studied, bad examples exist. Whether a short path of steps
      always exists is itself open. The Hirsch conjecture, which predicted a very short
      one, was disproved by Francisco Santos in 2010.
    unlocks: >-
      A deeper understanding of the geometry of high-dimensional polytopes, and an
      algorithm for the most widely used optimisation problem whose speed depended only on
      the problem's shape.
    sources:
      - citation: "Smale, S. (1998). Mathematical problems for the next century. Mathematical Intelligencer 20(2): 7–15."
        url: null
      - citation: "Santos, F. (2012). A counterexample to the Hirsch conjecture. Annals of Mathematics 176(1): 383–412."
        url: null

applications:
  - area: Medicine
    title: Kidney exchange
    description: >-
      A patient whose willing donor is incompatible can swap donors with another such
      pair. Finding the most transplants among hundreds of pairs is a matching problem.
      National kidney exchange programmes now run optimisation algorithms to choose the
      swaps.
    sources:
      - citation: "Roth, A. E., Sönmez, T. & Ünver, M. U. (2004). Kidney exchange. Quarterly Journal of Economics 119(2): 457–488."
        url: null
  - area: Statistical physics
    title: Ground states of spin glasses
    description: >-
      Finding the lowest-energy state of a disordered magnet in two dimensions is a
      matching problem and can be solved efficiently. In three dimensions it is NP-hard.
      The boundary between easy and hard optimisation matches a boundary in the physics.
    domain: physics
    field_id: statistical-mechanics
    sources:
      - citation: "Barahona, F. (1982). On the computational complexity of Ising spin glass models. Journal of Physics A 15(10): 3241–3253."
        url: null
  - area: Transport
    title: Airline schedules and delivery routes
    description: >-
      Airlines assign crews to flights, and delivery companies plan millions of routes a
      day, with linear programming and its extensions. Solvers routinely handle problems
      with millions of variables.
    sources:
      - citation: "Cook, W. J. (2012). In Pursuit of the Traveling Salesman. Princeton University Press."
        url: null

further_reading:
  - citation: "Cook, W. J. (2012). In Pursuit of the Traveling Salesman: Mathematics at the Limits of Computation. Princeton University Press."
    url: null
    note: The history and mathematics of the travelling salesman problem, for general readers.
  - citation: "Schrijver, A. (2003). Combinatorial Optimization: Polyhedra and Efficiency. Springer."
    url: null
    note: The comprehensive reference, with detailed historical notes.
  - citation: "Dantzig, G. B. (1963). Linear Programming and Extensions. Princeton University Press."
    url: null
    note: The founder's own account of linear programming.
---

## Planning

Optimisation problems came from planning. In 1939 the Leningrad plywood trust asked {{fig:leonid-kantorovich|Leonid Kantorovich}} how to divide work among its machines to produce the most. He saw that the question, and many like it, meant maximising a linear quantity subject to linear constraints. In 1947 {{fig:george-dantzig|George Dantzig}}, planning logistics for the US Air Force, reached the same formulation independently and invented the simplex method to solve it. The method walks from corner to corner of a many-sided region, improving at each step. It was soon running on the first commercial computers.

Kantorovich's work was met with suspicion at home, since it attached prices to resources in a planned economy, but he later shared the 1975 Nobel memorial prize in economics. Dantzig did not, although for many the simplex method is his monument.

## Networks

At the RAND Corporation in 1955, a study of how much freight the Soviet railway network could carry to Eastern Europe posed a question about flow through a network. {{fig:lester-ford|Lester Ford}} and {{fig:delbert-fulkerson|Delbert Fulkerson}} answered it in 1956: the maximum flow equals the capacity of the narrowest cut. At about the same time {{fig:edsger-dijkstra|Edsger Dijkstra}}, demonstrating a new computer in Amsterdam, needed a problem the public could understand. He chose finding the shortest route between Dutch cities and designed his algorithm in twenty minutes.

In 1965 {{fig:edmonds|Jack Edmonds}} solved the matching problem for general networks, and in doing so proposed that "efficient" should mean polynomial time. That proposal became the foundation of [computational complexity](/math/computational-complexity/). When Richard Karp showed in 1972 that the travelling salesman problem and many other optimisation problems are NP-complete, the field divided: some problems have fast exact algorithms, and the rest need approximations or careful search.

## A Closer Look: The Narrowest Cut

A small network carries water from a source $s$ to a sink $t$ through two junctions, $a$ and $b$. Each pipe has a capacity:

| Pipe | Capacity |
|---|---|
| $s \to a$ | 3 |
| $s \to b$ | 2 |
| $a \to b$ | 1 |
| $a \to t$ | 2 |
| $b \to t$ | 3 |

How much can flow from $s$ to $t$? Push 2 units along $s \to a \to t$, 2 along $s \to b \to t$, and 1 along $s \to a \to b \to t$. Every pipe stays within its capacity ($s \to a$ carries 3, $b \to t$ carries 3), and 5 units arrive.

Can more get through? Draw a line around $s$ alone. Everything leaving it must pass through $s \to a$ or $s \to b$, whose capacities add to $3 + 2 = 5$. No flow can exceed that. A set of pipes whose removal disconnects $s$ from $t$ is a *cut*, and no flow can exceed any cut's capacity. Here a flow of 5 matches a cut of 5, so both are optimal, and each proves the other is the best possible.

Ford and Fulkerson proved that this always happens: in every network, the maximum flow equals the minimum cut, and their algorithm finds both. The two are a matching pair of problems, one maximising and one minimising, with the same answer. That duality runs through all of linear programming, and it is what lets optimisation software certify that an answer is optimal rather than just good.

## Hard Problems, Good Answers

For NP-hard problems, the goal became guaranteed approximation. In 1976 {{fig:nicos-christofides|Nicos Christofides}}, and independently {{fig:anatoliy-serdyukov|Anatoliy Serdyukov}}, found a method that finds a travelling-salesman tour at most 50% longer than the shortest. For 44 years that was the best guarantee known, until {{fig:anna-karlin|Anna Karlin}}, {{fig:nathan-klein|Nathan Klein}} and {{fig:shayan-oveis-gharan|Shayan Oveis Gharan}} improved it in 2020 by a fraction of about $10^{-36}$. In practice, exact methods do much better than the guarantees suggest: in 2006 an optimal tour through 85,900 locations was found and proved optimal.

Linear programming itself was proved efficient in 1979 by {{fig:leonid-khachiyan|Leonid Khachiyan}}. Whether it can be solved in a number of steps independent of the size of its numbers is still open.
