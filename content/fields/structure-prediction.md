---
id: structure-prediction
domain: biology
thread: structure
name: Protein Structure Prediction
parent_ids:
  - structural-biology
  - genomics
era_emerged: 1961 – 2021
core_question: If a protein's shape is determined by its sequence, can the shape be computed from the sequence — and if so, how?
summary: |-
  Christian Anfinsen showed in the early 1960s that a protein unfolded in the test tube refolds, unaided, into exactly the shape it had before. The sequence therefore contains the structure, and the structure is presumably the lowest-energy state. That turned prediction into a well-posed computational problem, and it stayed unsolved for sixty years.

  The obstacle is the size of the search. Cyrus Levinthal pointed out in 1969 that a chain of a hundred residues has astronomically many conformations, so a protein cannot find its native state by trying them, and a computer certainly cannot. Nature's answer is that folding is funnelled rather than searched. The computational answer, when it arrived, came from a different direction entirely: not from physics but from statistics over the 200,000 structures that crystallographers had deposited, and the far larger number of sequences that genome projects had produced. Related sequences from different species carry, in their patterns of correlated mutation, information about which residues touch each other. AlphaFold2 learned to read that information in 2020, and reached accuracies comparable to experiment — for folded single chains, which is not the whole problem.

key_ideas:
  - term: Thermodynamic hypothesis
    definition: >-
      The native structure is the one of lowest free energy for the sequence under physiological
      conditions, reachable without external information. Anfinsen's refolding experiments are the
      evidence, and the exceptions — chaperone-dependent proteins, prions, disordered regions — are
      instructive.
    turning_point_id: anfinsen-folding
  - term: Levinthal's paradox
    definition: >-
      A random search through a protein's possible conformations would take longer than the age of the
      universe, yet folding takes milliseconds. The native state is therefore found by a biased
      descent, not by enumeration.
    turning_point_id: levinthal-paradox
  - term: Folding funnel
    definition: >-
      The energy landscape is not flat with one hole in it but shaped like a funnel: partly correct
      structures are already partly stabilised, so the search is downhill almost everywhere. This is a
      property the sequence must have been selected for.
    turning_point_id: levinthal-paradox
  - term: Coevolution signal
    definition: >-
      If two residues are in contact, a mutation at one is often compensated by a mutation at the other,
      so their variation across homologous sequences is correlated. A deep enough family of related
      sequences therefore encodes a map of which residues touch.
    turning_point_id: alphafold2
  - term: Blind assessment
    definition: >-
      Predictions are submitted for proteins whose structures have been determined but not released, so
      the comparison cannot be tuned after the fact. Running this every two years since 1994 is what made
      claims of progress in the field checkable.
    turning_point_id: casp-established
  - term: Molecular dynamics
    definition: >-
      Integrating Newton's equations for every atom of a protein and its surrounding water, with an
      empirical force field. It simulates the folding process rather than predicting the endpoint, and is
      limited by the gap between femtosecond time steps and millisecond folding times.
    turning_point_id: molecular-dynamics-simulation

turning_points:
  - id: anfinsen-folding
    date: 1961 – 1973
    type: DISCOVERY
    title: Anfinsen's refolding experiment
    description: >-
      Christian Anfinsen unfolds ribonuclease completely with urea and a reducing agent, breaking all four
      of its disulphide bonds and destroying its activity. On removing the denaturants, the enzyme
      recovers full activity and the correct disulphide pairings — one out of the 105 possible pairings —
      with no template, no energy source and no other molecule present. The conclusion, stated in his 1972
      Nobel lecture, is that the amino acid sequence determines the structure, and that the native form is
      the thermodynamically stable one.
    contested: false
    sources:
      - citation: "Anfinsen, C. B., Haber, E., Sela, M. & White, F. H. (1961). The kinetics of formation of native ribonuclease during oxidation of the reduced polypeptide chain. PNAS 47: 1309–1314."
        url: null
      - citation: "Anfinsen, C. B. (1973). Principles that govern the folding of protein chains. Science 181: 223–230."
        url: null

  - id: levinthal-paradox
    date: "1969"
    type: DISCOVERY
    title: Levinthal's paradox
    description: >-
      Cyrus Levinthal observes that if a protein found its native state by searching, the search would be
      impossible: the number of conformations available to even a short chain exceeds anything a physical
      process could sample in the lifetime of the universe, while real proteins fold in milliseconds to
      seconds. He concluded that folding must follow specific pathways. The modern resolution is slightly
      different — the landscape is funnelled, so almost every downhill move is progress — and the paradox
      remains the standard statement of why prediction is not a search problem.
    contested: false
    sources:
      - citation: "Levinthal, C. (1969). How to fold graciously. In Mössbauer Spectroscopy in Biological Systems, 22–24. University of Illinois Press."
        url: null
      - citation: "Bryngelson, J. D., Onuchic, J. N., Socci, N. D. & Wolynes, P. G. (1995). Funnels, pathways, and the energy landscape of protein folding. Proteins 21: 167–195."
        url: null

  - id: molecular-dynamics-simulation
    date: 1977 – 2010
    type: TECHNIQUE-INVENTED
    title: Simulating every atom
    description: >-
      Andrew McCammon, Bruce Gelin and Martin Karplus publish the first molecular dynamics simulation of a
      protein — 9 picoseconds of a small inhibitor in vacuum — establishing that a protein's interior is
      fluid rather than rigid. Over thirty years the approach extended to proteins in explicit water, with
      force fields calibrated against spectroscopy and quantum calculations. By 2010, purpose-built
      hardware reached milliseconds and could fold small proteins from extended chains, which is long
      enough to watch the process rather than infer it.
    contested: false
    sources:
      - citation: "McCammon, J. A., Gelin, B. R. & Karplus, M. (1977). Dynamics of folded proteins. Nature 267: 585–590."
        url: null
      - citation: "Shaw, D. E. et al. (2010). Atomic-level characterization of the structural dynamics of proteins. Science 330: 341–346."
        url: null

  - id: casp-established
    date: "1994"
    type: TECHNIQUE-INVENTED
    title: A blind competition for predictions
    description: >-
      John Moult and Krzysztof Fidelis set up the Critical Assessment of Structure Prediction: crystal­
      lographers announce sequences whose structures they have solved but not published, groups submit
      predictions, and independent assessors score them once the answers are released. The arrangement
      removed the field's recurring problem — that a method's accuracy was reported by its author after
      seeing the answer — and provided a biennial record of progress that showed, for over twenty years,
      very little.
    contested: false
    sources:
      - citation: "Moult, J., Pedersen, J. T., Judson, R. & Fidelis, K. (1995). A large-scale experiment to assess protein structure prediction methods. Proteins 23: ii–iv."
        url: null
      - citation: "Kryshtafovych, A., Schwede, T., Topf, M., Fidelis, K. & Moult, J. (2021). Critical assessment of methods of protein structure prediction (CASP) — round XIV. Proteins 89: 1607–1617."
        url: null

  - id: rosetta-and-design
    date: 1997 – 2008
    type: TECHNIQUE-INVENTED
    title: Fragment assembly, and designing a fold that never existed
    description: >-
      David Baker's group builds Rosetta, which assembles structures from short fragments taken from known
      proteins and scores them with an energy function combining physical terms and statistics from the
      database. It produced the best predictions of the 2000s for proteins with no known relatives, within
      a few ångströms for small chains. The method also runs backwards: in 2003 the group designed Top7,
      a 93-residue protein with a fold not found in nature, and its crystal structure matched the design
      to 1.2 Å.
    contested: false
    sources:
      - citation: "Simons, K. T., Kooperberg, C., Huang, E. & Baker, D. (1997). Assembly of protein tertiary structures from fragments. Journal of Molecular Biology 268: 209–225."
        url: null
      - citation: "Kuhlman, B. et al. (2003). Design of a novel globular protein fold with atomic-level accuracy. Science 302: 1364–1368."
        url: null

  - id: alphafold2
    date: 2020 – 2022
    type: CONSENSUS-OVERTURNED
    title: AlphaFold2
    description: >-
      At CASP14 in 2020, a neural network from DeepMind predicts structures at a median backbone accuracy
      of around 1 Å — comparable to experimental uncertainty, and far beyond anything previously achieved
      — for most targets. The architecture reasons jointly over an alignment of related sequences and over
      a matrix of residue pairs, and outputs coordinates directly with a calibrated confidence for each
      residue. The code was released in 2021 and predictions for over 200 million sequences in 2022,
      against roughly 200,000 experimentally determined structures accumulated since 1958.
    contested: true
    contested_note: >-
      What has been solved is disputed in scope rather than in fact. The predictions are excellent for
      single folded chains with many known relatives and much weaker for orphan sequences, for the effect
      of point mutations, for alternative conformational states, for complexes and for disordered regions.
      Whether a method that gives an accurate answer without a physical model counts as understanding
      folding, as opposed to predicting it, is argued; and the predictions do not say how the chain gets
      there.
    sources:
      - citation: "Jumper, J. et al. (2021). Highly accurate protein structure prediction with AlphaFold. Nature 596: 583–589."
        url: null
      - citation: "Varadi, M. et al. (2022). AlphaFold Protein Structure Database. Nucleic Acids Research 50: D439–D444."
        url: null
      - citation: "Moore, P. B., Hendrickson, W. A., Henderson, R. & Brunger, A. T. (2022). The protein-folding problem: not yet solved. Science 375: 507."
        url: null

open_problems:
  - id: predicting-conformational-change
    name: Predicting the states a protein moves between
    status: open
    status_note: Open as of 2026; accurate single-structure prediction has not extended to ensembles or to mutational effects.
    description: >-
      Proteins work by changing shape: a channel opens, a receptor flips between active and inactive, a
      motor cycles, an enzyme closes over its substrate. Prediction methods return one structure, usually
      the most populated, and do not reliably say what the alternatives are, how much they cost, or which
      ligand shifts the balance. The related failure is quantitative: a method that places every atom
      correctly can still mispredict whether a single amino acid substitution destabilises the protein.
    why_hard: >-
      The training data are crystal structures, which are biased towards whichever state crystallised, and
      the free-energy differences between functional states are a few kilocalories per mole — below the
      resolution of the statistical signal that makes single-structure prediction work. Physics-based
      simulation can in principle supply these differences and is limited by force-field accuracy and by
      the gap between simulated and biological timescales.
    unlocks: >-
      Drug design needs the state a molecule binds and the energetic consequence of a mutation; genetics
      needs to know which of the millions of observed human variants matter. Both are questions about
      differences between states rather than about a single structure.
    sources:
      - citation: "Lane, T. J. (2023). Protein structure prediction has reached the single-structure frontier. Nature Methods 20: 170–173."
        url: null
      - citation: "Chakravarty, D. & Porter, L. L. (2022). AlphaFold2 fails to predict protein fold switching. Protein Science 31: e4353."
        url: null

applications:
  - area: Genomics
    title: A structure for every sequence
    description: >-
      Genome projects produce sequences far faster than crystallography produces structures, and before
      2021 the great majority of proteins in any organism had no structural information at all. Predicted
      structures now cover most known sequences, which has let whole proteomes be annotated by fold,
      remote relationships be detected through shape where sequence similarity had vanished, and
      previously unassignable proteins from environmental samples be given candidate functions.
    sources:
      - citation: "Varadi, M. et al. (2022). AlphaFold Protein Structure Database. Nucleic Acids Research 50: D439–D444."
        url: null
      - citation: "van Kempen, M. et al. (2024). Fast and accurate protein structure search with Foldseek. Nature Biotechnology 42: 243–246."
        url: null
  - area: Complexity theory
    title: Folding is hard, in the technical sense
    description: >-
      Even in drastically simplified models — a chain of hydrophobic and polar beads on a two-dimensional
      lattice — finding the minimum-energy conformation is NP-hard. The result does not say that real
      proteins cannot fold, since nature is not searching for a global optimum in a worst-case instance;
      it says that no algorithm can be relied on to find the optimum for every sequence, which is why
      methods that work are statistical rather than exhaustive.
    domain: math
    field_id: computational-complexity
    sources:
      - citation: "Berger, B. & Leighton, T. (1998). Protein folding in the hydrophobic-hydrophilic (HP) model is NP-complete. Journal of Computational Biology 5: 27–40."
        url: null
      - citation: "Unger, R. & Moult, J. (1993). Finding the lowest free energy conformation of a protein is an NP-hard problem. Bulletin of Mathematical Biology 55: 1183–1198."
        url: null
  - area: Protein engineering
    title: Designing molecules that do not exist
    description: >-
      Running prediction backwards — searching for a sequence that will adopt a specified shape — has
      produced proteins with folds not found in nature, enzymes catalysing reactions with no natural
      counterpart, self-assembling cages used as vaccine scaffolds, and binders made to order against
      chosen targets. The 2024 Nobel Prize in Chemistry recognised both the design and the prediction
      halves of this work.
    sources:
      - citation: "Kuhlman, B. et al. (2003). Design of a novel globular protein fold with atomic-level accuracy. Science 302: 1364–1368."
        url: null
      - citation: "Watson, J. L. et al. (2023). De novo design of protein structure and function with RFdiffusion. Nature 620: 1089–1100."
        url: null

further_reading:
  - citation: "Dill, K. A. & MacCallum, J. L. (2012). The protein-folding problem, 50 years on. Science 338: 1042–1046."
    url: null
    note: A clear statement of what the problem is, written before it was substantially solved.
  - citation: "Jumper, J. et al. (2021). Highly accurate protein structure prediction with AlphaFold. Nature 596: 583–589."
    url: null
    note: The paper itself; unusually readable about why the architecture is shaped as it is.
  - citation: "Moore, P. B. et al. (2022). The protein-folding problem: not yet solved. Science 375: 507."
    url: null
    note: One page on what remains, from four structural biologists.
---

## The Sequence Contains the Structure

{{fig:anfinsen|Christian Anfinsen}} did the experiment that defines the problem. Ribonuclease is a small enzyme held together partly by four disulphide bridges. Treat it with urea to unfold it and a reducing agent to break the bridges, and it loses all activity; its chain is a random coil with eight free cysteines. Remove the reagents and let it sit in air, and it recovers full activity — which requires that the eight cysteines pair up in exactly the right four pairs out of 105 possible arrangements, and that the chain return to its original shape.

Nothing assisted it. No template, no energy input, no other molecule. Anfinsen drew the conclusion in 1972: the information for the structure is in the sequence, and the native structure is the thermodynamically stable one under physiological conditions. Structure prediction is therefore a well-posed problem — find the minimum of a free energy over conformations — and not, as it might have been, a question about history or machinery.

The exceptions have turned out to be informative rather than fatal. Some large proteins need chaperones to avoid aggregating on the way; prions adopt an alternative stable form and propagate it; and a third of the human proteome has regions with no fixed structure at all. But for the ordinary globular case, Anfinsen's principle holds.

## Sixty Years of Not Solving It

The field's history between Anfinsen and 2020 is unusual in that its lack of progress was documented rigorously, by its own practitioners, every two years.

The documentation was {{fig:moult|John Moult}} and {{fig:fidelis|Krzysztof Fidelis}}'s idea. Before 1994, a method's accuracy was reported by its author, after seeing the answer, which is not a measurement. The Critical Assessment of Structure Prediction fixed it by making the comparison blind: crystallographers release sequences whose structures they have solved but not published, groups submit predictions within weeks, and independent assessors score them once the coordinates appear. The scoring is public and so is every prediction, including the bad ones. For two decades the record showed real but slow improvement, confined largely to cases where a related structure was already known, and almost no ability to predict a fold from scratch.

Two approaches competed in that period, and the contrast between them is the point. Molecular dynamics attacks the physics directly: give every atom a position and a velocity, compute the forces from an empirical force field, integrate Newton's equations with a time step short enough to resolve a bond vibration. {{fig:karplus|Martin Karplus}} and colleagues did it first in 1977, for 9 picoseconds of a small protein in vacuum, which was enough to establish that a protein's interior is fluid rather than rigid. Thirty years and several hardware generations later, purpose-built machines reached the millisecond and could fold small proteins from an extended chain — a genuine achievement that does not scale, for the reason the next chapter's arithmetic makes plain.

{{fig:david-baker|David Baker}}'s Rosetta took the statistical route instead: assemble a candidate structure from short fragments taken from known proteins, score it with an energy function that mixes physical terms with statistics drawn from the structural database, and search. It produced the best predictions of the 2000s for proteins with no known relatives, reaching a few ångströms for small chains. It also ran backwards, which is the more surprising capability: given a target shape, search for a sequence that will adopt it. In 2003 the group designed Top7, a 93-residue protein with a fold not found in nature, and its crystal structure matched the design to 1.2 Å. Designing a protein that folds turned out to be easier than predicting how a natural one does.

## A Closer Look: Levinthal's Numbers, and Why the Search Is Not a Search

{{fig:levinthal|Cyrus Levinthal}} made the difficulty quantitative in 1969, in two pages of a conference volume.

Take a modest protein of 100 residues. Each residue's backbone has two rotatable bonds, and allow it — generously conservatively — just **3** distinguishable conformations. The chain then has

$$
3^{100} = 5.2 \times 10^{47}
$$

conformations. Suppose the molecule could try one every $10^{-13}$ seconds, which is about as fast as a bond rotation can occur. Searching them all takes

$$
5.2\times10^{47} \times 10^{-13}\ \mathrm{s} = 5.2\times10^{34}\ \mathrm{s} = 1.6\times10^{27}\ \text{years}.
$$

The universe is $1.4\times10^{10}$ years old. The search would take about $10^{17}$ times longer than the universe has existed. Real proteins of this size fold in milliseconds to seconds.

So folding is not a search, and the paradox is about the shape of the energy landscape rather than about speed. If the landscape were a golf course — flat, with one hole — nothing would find the hole. The resolution, developed in the 1990s as the funnel picture, is that partly correct structures are already partly stabilised: forming a few native contacts lowers the energy, which makes the remaining search smaller. The landscape slopes towards the native state from almost everywhere, so a biased descent arrives quickly, and the chain never visits more than a tiny fraction of its conformations.

This has a consequence that is easy to miss. The funnel is a property of the *sequence*, and it had to be selected for. A random sequence of 100 amino acids generally does not fold at all; it aggregates or stays a coil. Evolution has produced sequences whose landscapes are funnelled, which is why the folding problem is tractable for natural proteins and why designing new ones that fold reliably is difficult.

For computation the numbers also explain what has and has not been achieved. Minimising a realistic energy function over $10^{47}$ conformations is not approachable directly, and in simplified lattice models the problem is provably NP-hard — a result from [computational complexity](/math/computational-complexity/) that caps any approach based on exhaustive optimisation. Molecular dynamics attacks the physics instead, integrating every atom's motion with time steps of a femtosecond, $10^{-15}$ s. Folding takes $10^{-3}$ s. That is $10^{12}$ steps for one folding event of one small protein, which purpose-built hardware reached around 2010 — an achievement, and not a method for predicting structures at scale.

## The Answer Came From Statistics

What eventually worked used almost none of this physics. Two datasets had been accumulating. The [Protein Data Bank](/biology/structural-biology/) held some 200,000 experimentally determined structures. Genome sequencing had produced hundreds of millions of protein sequences, which means that for most proteins one can assemble a deep alignment of homologues from many species.

The second dataset carries structural information in an indirect form. If two residues are in contact, a destabilising mutation at one can be compensated by a mutation at the other, so across a large family the two positions vary in a correlated way. Disentangling direct couplings from chains of indirect ones made contact prediction usable by around 2012, and contacts constrain a fold.

Rosetta had already shown what the structural database alone could support. The sequence database added the coevolution signal. What remained was a way to use both at once.

The step change came at CASP14 in 2020. AlphaFold2 reasons jointly over the sequence alignment and over a representation of every pair of residues, iterating between them, and outputs coordinates directly with a per-residue confidence estimate that turns out to be well calibrated. Its median backbone accuracy was around 1 Å, within the range that two experimental determinations of the same protein differ by. {{fig:moult|John Moult}}, who had run the blind assessment since 1994 and watched two decades of modest progress, said the problem was in some sense solved.

The qualification matters, and the field's own assessment is the right place to leave this. Accuracy is excellent for single folded chains with many known relatives and much weaker for sequences with no family, for complexes, for the effect of a single mutation, for the alternative conformations a protein passes through while working, and for the disordered third of the proteome that has no single structure to predict. A method trained on the endpoint also says nothing about the route: Levinthal's question, how a chain finds its way, is not answered by a system that never folds anything. What has changed is the supply. Every sequence now has a structure attached to it, which is a different science from one in which structures were produced a few hundred a year by people growing crystals.
