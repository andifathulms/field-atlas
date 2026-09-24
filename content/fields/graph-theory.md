---
id: graph-theory
domain: math
thread: combinatorics
name: Graph Theory
parent_ids: []
era_emerged: 1736 – 1936
core_question: What can be said about a network from the pattern of its connections alone?

summary: |-
  A graph is a set of points, called vertices, joined by lines, called edges. It keeps only who is connected to whom and throws away distance, shape and position. That turns out to be exactly the information that matters for a huge range of problems: road maps, electrical circuits, molecules, friendships, the links between web pages.

  The subject began with Euler's solution of a puzzle about the bridges of Königsberg in 1736, and for two centuries it grew from scattered problems in recreation, chemistry and electrical engineering. Its most famous question, whether four colours suffice for any map, took 124 years and became the first major theorem proved with essential help from a computer.

key_ideas:
  - term: Vertex, edge and degree
    definition: >-
      Vertices are the points, edges are the connections, and the degree of a vertex is
      the number of edges that meet it. Adding up all the degrees always gives twice the
      number of edges.
    turning_point_id: konigsberg-bridges
  - term: Euler path
    definition: >-
      A walk that uses every edge exactly once. Euler showed that one exists in a
      connected graph exactly when zero or two vertices have odd degree.
    turning_point_id: konigsberg-bridges
  - term: Tree
    definition: >-
      A connected graph with no cycles. A tree on $n$ vertices always has $n - 1$ edges.
      Kirchhoff used trees to solve electrical networks.
    turning_point_id: kirchhoff-trees
  - term: Graph colouring
    definition: >-
      Giving each vertex a colour so that neighbours differ. Colouring a map is colouring
      the graph whose vertices are countries, with an edge wherever two countries share a
      border.
    turning_point_id: four-colour-conjecture
  - term: Graph minor
    definition: >-
      A graph obtained by deleting edges and vertices and contracting edges. Robertson and
      Seymour proved that every minor-closed family of graphs is described by a finite
      list of forbidden minors.
    turning_point_id: graph-minor-theorem

turning_points:
  - id: konigsberg-bridges
    date: "1736"
    type: PROOF
    title: The bridges of Königsberg
    description: >-
      The citizens of Königsberg wondered whether a walk could cross each of the city's
      seven bridges exactly once. Leonhard Euler proves it cannot, by reducing the city to
      four land masses and counting how many bridges meet each one. He calls it a problem
      in the "geometry of position", where only connections matter. It is usually
      counted as the first theorem of graph theory.
    contested: false
    sources:
      - citation: "Euler, L. (1741). Solutio problematis ad geometriam situs pertinentis. Commentarii Academiae Scientiarum Petropolitanae 8 (for 1736): 128–140."
        url: null
      - citation: "Biggs, N. L., Lloyd, E. K. & Wilson, R. J. (1976). Graph Theory 1736–1936. Oxford University Press."
        url: null

  - id: kirchhoff-trees
    date: "1847"
    type: PROOF
    title: Kirchhoff's circuits and spanning trees
    description: >-
      Gustav Kirchhoff, solving for the currents in an electrical network, shows that the
      independent equations correspond to the spanning trees of the circuit's graph, and
      that their number is a determinant. It was the first use of graphs in physics, and
      the matrix-tree theorem is still how spanning trees are counted.
    contested: false
    sources:
      - citation: "Kirchhoff, G. (1847). Über die Auflösung der Gleichungen, auf welche man bei der Untersuchung der linearen Vertheilung galvanischer Ströme geführt wird. Annalen der Physik und Chemie 72: 497–508."
        url: null

  - id: four-colour-conjecture
    date: "1852"
    type: CONJECTURE
    title: Four colours suffice?
    description: >-
      Colouring a map of the counties of England, Francis Guthrie notices that four
      colours are enough to give neighbouring counties different colours. He asks whether
      this is always true. His brother passes the question to Augustus De Morgan, who
      writes to William Rowan Hamilton about it on 23 October 1852. Hamilton was not
      interested. Arthur Cayley revived it in 1878.
    contested: false
    sources:
      - citation: "Wilson, R. (2002). Four Colors Suffice: How the Map Problem Was Solved. Princeton University Press."
        url: null

  - id: kempe-heawood
    date: 1879 – 1890
    type: DISPROOF
    title: Kempe's proof collapses
    description: >-
      Alfred Kempe, a barrister, publishes a proof of the four colour theorem in 1879, and
      for eleven years it is accepted. In 1890 Percy Heawood finds a configuration where
      Kempe's recolouring argument fails. Heawood salvages enough of it to prove that
      five colours always suffice. Kempe's key idea, swapping colours along chains, was
      eventually part of the real proof.
    contested: false
    sources:
      - citation: "Kempe, A. B. (1879). On the geographical problem of the four colours. American Journal of Mathematics 2(3): 193–200."
        url: null
      - citation: "Heawood, P. J. (1890). Map-colour theorem. Quarterly Journal of Pure and Applied Mathematics 24: 332–338."
        url: null

  - id: konig-textbook
    date: "1936"
    type: REFORMULATION
    title: The first book on graph theory
    description: >-
      Dénes Kőnig's *Theorie der endlichen und unendlichen Graphen* collects two centuries
      of scattered results on graphs into one systematic theory, with its own definitions
      and theorems, including his theorem on matchings in bipartite graphs. Graph theory
      became a field of its own.
    contested: false
    sources:
      - citation: "Kőnig, D. (1936). Theorie der endlichen und unendlichen Graphen. Akademische Verlagsgesellschaft, Leipzig."
        url: null

  - id: four-colour-theorem
    date: "1976"
    type: PROOF
    title: The four colour theorem, by computer
    description: >-
      Kenneth Appel and Wolfgang Haken prove the four colour theorem. They reduce it to
      checking nearly two thousand configurations, too many for a person to check, and a
      computer checks them over more than a thousand hours. The University of Illinois
      stamped its outgoing mail "Four colors suffice".
    contested: true
    contested_note: >-
      The dispute was about whether a proof no one can read in full counts as a proof. Some
      mathematicians refused to accept it, and errors were found and fixed in the
      hand-checked part. A simpler computer proof by Robertson, Sanders, Seymour and Thomas
      (1997), and Gonthier's fully machine-checked version (2005), settled the theorem's
      truth for most people. The philosophical question of what a computer-assisted proof
      shows is still discussed.
    sources:
      - citation: "Appel, K. & Haken, W. (1977). Every planar map is four colorable. Part I: Discharging. Illinois Journal of Mathematics 21(3): 429–490."
        url: null
      - citation: "Robertson, N., Sanders, D., Seymour, P. & Thomas, R. (1997). The four-colour theorem. Journal of Combinatorial Theory, Series B 70(1): 2–44."
        url: null

  - id: graph-minor-theorem
    date: 1983 – 2004
    type: PROOF
    title: The graph minor theorem
    description: >-
      In a series of twenty-three papers, Neil Robertson and Paul Seymour prove Wagner's
      conjecture: in any infinite list of graphs, one is a minor of another. So every
      property that is preserved under taking minors, like being drawable on a given
      surface, is characterised by a finite list of forbidden graphs. It is one of the
      longest proofs in mathematics, and it produced much of modern structural graph
      theory.
    contested: false
    sources:
      - citation: "Robertson, N. & Seymour, P. D. (2004). Graph Minors XX. Wagner's conjecture. Journal of Combinatorial Theory, Series B 92(2): 325–357."
        url: null

open_problems:
  - id: hadwiger-conjecture
    name: Hadwiger's conjecture
    status: open
    status_note: Open as of writing; proved for up to six colours, the six-colour case in 1993.
    description: >-
      Hugo Hadwiger conjectured in 1943 that any graph that needs $t$ colours contains
      the complete graph on $t$ vertices as a minor. For $t = 5$ this is equivalent to the
      four colour theorem, so the conjecture is a vast generalisation of it.
    why_hard: >-
      The cases up to $t = 6$ all reduce to the four colour theorem, itself proved only
      with a computer. Beyond that, no one has found a way to extract a large complete
      minor from the need for many colours, and even weaker versions of the statement are
      difficult.
    unlocks: >-
      It would explain *why* graphs need many colours: the only obstruction would be a
      dense cluster of mutual connections, perhaps spread out. It would place colouring,
      one of the oldest topics in the field, inside the theory of graph minors.
    sources:
      - citation: "Hadwiger, H. (1943). Über eine Klassifikation der Streckenkomplexe. Vierteljahrsschrift der Naturforschenden Gesellschaft in Zürich 88: 133–142."
        url: null
      - citation: "Robertson, N., Seymour, P. & Thomas, R. (1993). Hadwiger's conjecture for K6-free graphs. Combinatorica 13(3): 279–361."
        url: null

applications:
  - area: Electrical engineering
    title: Kirchhoff's laws are graph theory
    description: >-
      Kirchhoff's circuit laws, still the basis of circuit analysis, are statements about
      the cycles and cut sets of a graph. Circuit simulators choose their independent
      equations from a spanning tree, as Kirchhoff did in 1847.
    domain: physics
    field_id: electromagnetism
    sources:
      - citation: "Kirchhoff, G. (1847). Über die Auflösung der Gleichungen, auf welche man bei der Untersuchung der linearen Vertheilung galvanischer Ströme geführt wird. Annalen der Physik und Chemie 72: 497–508."
        url: null
  - area: Genome assembly
    title: Euler's bridges, in DNA
    description: >-
      Genome assemblers build a graph whose edges are short overlapping DNA fragments and
      look for a walk that uses every edge once, an Euler path. Euler's 1736 criterion is
      why this is fast, where the alternative formulation is intractable.
    domain: biology
    field_id: genomics
    sources:
      - citation: "Compeau, P. E. C., Pevzner, P. A. & Tesler, G. (2011). How to apply de Bruijn graphs to genome assembly. Nature Biotechnology 29(11): 987–991."
        url: null
  - area: Telecommunications
    title: Colouring the airwaves
    description: >-
      Mobile networks must give nearby transmitters different frequencies. Treating
      transmitters as vertices and interference as edges turns frequency assignment into
      graph colouring, and the same holds for scheduling exams without clashes.
    sources:
      - citation: "Aardal, K. I. et al. (2007). Models and solution techniques for frequency assignment problems. Annals of Operations Research 153: 79–129."
        url: null

further_reading:
  - citation: "Wilson, R. (2002). Four Colors Suffice: How the Map Problem Was Solved. Princeton University Press."
    url: null
    note: The history of the four colour problem, for general readers.
  - citation: "Biggs, N. L., Lloyd, E. K. & Wilson, R. J. (1976). Graph Theory 1736–1936. Oxford University Press."
    url: null
    note: The founding papers of graph theory, translated and with commentary.
  - citation: "Diestel, R. (2017). Graph Theory (5th ed.). Springer."
    url: https://diestel-graph-theory.com/
    note: The standard graduate text. An electronic edition is free to read.
---

## Seven Bridges

The Prussian city of Königsberg was built on both banks of the Pregel river and on two islands, joined by seven bridges. Its citizens liked to ask whether a walk could cross every bridge exactly once. In 1735 {{fig:euler|Leonhard Euler}} showed that it could not, and, more importantly, why. The shapes of the islands and the lengths of the bridges were irrelevant. All that mattered was which land masses each bridge joined. Euler called this the "geometry of position", after a phrase of Leibniz. It is now counted as the first theorem of graph theory, and it has the same flavour as his polyhedron formula of 1750, which became part of [algebraic topology](/math/algebraic-topology/).

## Networks and Molecules

For a century, graphs turned up in unrelated places. In 1847 {{fig:gustav-kirchhoff|Gustav Kirchhoff}}, aged twenty-three, found that the equations of an electrical network are governed by its spanning trees. Arthur Cayley counted trees to count the possible molecules of a chemical formula, and James Joseph Sylvester borrowed the word "graph" from chemists' diagrams in 1878. Puzzles fed in too. Hamilton invented a game in 1857 that asked for a round trip through all twenty vertices of a dodecahedron.

In 1936 {{fig:denes-konig|Dénes Kőnig}}, in Budapest, gathered the results into the first textbook, and graph theory became a subject. Hungary produced many of its leading figures over the next half-century.

## Four Colours

The most famous problem started with a map of England. In 1852 {{fig:francis-guthrie|Francis Guthrie}} noticed that four colours were enough to give every pair of neighbouring counties different colours, and asked if that was always true. The question passed through {{fig:augustus-de-morgan|Augustus De Morgan}} to the mathematical world. In 1879 {{fig:alfred-kempe|Alfred Kempe}} published a proof, and it was accepted for eleven years until {{fig:percy-heawood|Percy Heawood}} found the flaw. Heawood proved that five colours always suffice, and the gap between five and four stayed open for most of a century.

In 1976 {{fig:kenneth-appel|Kenneth Appel}} and {{fig:wolfgang-haken|Wolfgang Haken}} closed it. They showed that every map must contain one of nearly two thousand configurations, each of which could be removed and recoloured. The checking took more than a thousand hours of computer time. Many mathematicians were uneasy about a proof no human could read in full. A shorter computer proof in 1997, and a formal verification in 2005, settled its truth. The question of what counts as a proof is discussed in [metamathematics](/math/metamathematics/).

## A Closer Look: Counting Bridges

Draw Königsberg as a graph. The island Kneiphof is one vertex, the north bank, the south bank and the island of Lomse to the east are the other three, and each of the seven bridges is an edge. Count the edges at each vertex:

| Land mass | Bridges |
|---|---|
| Kneiphof island | 5 |
| North bank | 3 |
| South bank | 3 |
| Lomse island | 3 |

The total is $5 + 3 + 3 + 3 = 14$, twice the seven bridges, because each bridge has two ends. That is true of every graph, and it has a consequence: the number of vertices with an odd count must be even.

Now imagine a walk that crosses every bridge once. Every time the walker passes *through* a land mass, they use two bridges, one in and one out. So a land mass that is neither the start nor the end of the walk must have an even number of bridges. Only the start and the end can be odd. Königsberg has *four* odd land masses, so no such walk exists, however it is planned.

Euler also saw the converse, proved in full by Carl Hierholzer in 1873: if a connected graph has zero or two odd vertices, such a walk exists. That makes the question easy to answer for any map, however large. Two of the bridges were destroyed in the Second World War, and in today's Kaliningrad a walk crossing each remaining bridge once is possible.

## Structure

After the four colour theorem the field turned to structure. Between 1983 and 2004 {{fig:neil-robertson|Neil Robertson}} and {{fig:paul-seymour|Paul Seymour}} proved, in twenty-three papers, that graphs are well ordered by the minor relation. Their methods explain how graphs that avoid a given pattern are built, and they have led to fast algorithms. Graphs now underlie [combinatorial optimisation](/math/combinatorial-optimization/), the study of large networks and [extremal combinatorics](/math/extremal-combinatorics/). Hadwiger's conjecture, a vast generalisation of the four colour theorem, is still open.
