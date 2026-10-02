---
id: polymer-synthesis
domain: chemistry
thread: materials
name: Polymer Synthesis
parent_ids:
  - organic-structure-theory
  - catalysis
era_emerged: 1907 – 2000
core_question: How do you control the length, the architecture and the stereochemistry of a molecule with ten thousand atoms in it?

summary: |-
  Leo Baekeland made the first wholly synthetic plastic in 1907, two decades before chemistry agreed that molecules that large existed. His phenol-formaldehyde resin was a single crosslinked network through the whole object, which is why it could not be weighed, dissolved or characterised — and why the dispute over whether polymers were giant molecules or aggregates of small ones ran as long as it did.

  Wallace Carothers settled the practical question at DuPont in the early 1930s by making polymers whose structure was known in advance, and in doing so found the arithmetic that governs one half of the subject. If a polymer is built by joining pieces two at a time, the average chain length is one divided by the fraction of unreacted groups: 90% conversion gives chains of ten units, which is a brittle powder, and a useful fibre needs 99%. The requirement is severe enough that the two monomers must be mixed in a ratio accurate to about one part in a thousand, which is why nylon is made by first crystallising its two components together as a salt.

  The other half of the subject is control of architecture rather than length. Free-radical polymerisation, the cheapest route, gives chains of wildly varying length and random arrangement because each one lives for under a second. Michael Szwarc removed the termination step in 1956, so that every chain grows for as long as the experiment lasts and all of them end up nearly identical — and, if a second monomer is added, joined in blocks. Almost everything made since that requires a polymer to do more than one thing at once descends from that result.

key_ideas:
  - term: Degree of polymerisation
    definition: >-
      The number of monomer units in a chain. Nearly every mechanical property depends on it, and nearly
      nothing useful happens below about a hundred — below which a polymer is a wax rather than a plastic.
    turning_point_id: carothers-step-and-chain
  - term: Step-growth and chain-growth
    definition: >-
      Two mechanisms with opposite requirements. In step-growth any two species can join, so long chains
      appear only at very high conversion. In chain-growth each chain reaches full length within moments of
      starting, so conversion controls how many chains there are and not how long they are.
    turning_point_id: carothers-step-and-chain
  - term: Polydispersity
    definition: >-
      The ratio of the mass-average to the number-average molar mass, a measure of how unequal the chains are.
      Free-radical polymerisation gives 1.5 to 2; a living polymerisation gives 1.01 to 1.05; a protein gives
      exactly 1.
    turning_point_id: szwarc-living-polymerisation
  - term: Living polymerisation
    definition: >-
      A polymerisation with no termination step, so every chain end stays active. All chains grow at once and
      end up nearly the same length, the length is set by the monomer-to-initiator ratio, and adding a second
      monomer extends every chain with a block of it.
    turning_point_id: szwarc-living-polymerisation
  - term: Tacticity
    definition: >-
      Whether the substituents along a chain are arranged regularly or at random. The regular form crystallises
      and is a structural plastic; the random form of the same composition is a soft grease. The difference is
      imposed by the catalyst at each monomer addition.
    turning_point_id: controlled-radical-polymerisation
  - term: Block copolymer
    definition: >-
      A chain made of a long run of one monomer joined to a long run of another. Because the two runs will not
      mix but cannot separate, the material organises itself into domains tens of nanometres across — which is
      how a single substance can be both rubbery and rigid.
    turning_point_id: szwarc-living-polymerisation

turning_points:
  - id: baekeland-bakelite
    date: 1907 – 1910
    type: SYNTHESIS-ACHIEVED
    title: A plastic made before anyone believed in large molecules
    description: >-
      Leo Baekeland reacts phenol with formaldehyde under heat and pressure and obtains a hard, infusible,
      electrically insulating solid that can be moulded before it sets. It is the first wholly synthetic
      plastic, and it arrives two decades before the existence of macromolecules was accepted. Part of the
      reason for the delay is in the material itself: Bakelite is a single covalent network extending through
      the whole object, so it cannot be dissolved, distilled or given a molecular weight, and the methods
      chemistry had for establishing what a substance is were all inapplicable.
    contested: false
    sources:
      - citation: "Baekeland, L. H. (1909). The synthesis, constitution and uses of Bakelite. Journal of Industrial and Engineering Chemistry 1: 149–161."
        url: null
      - citation: "Bijker, W. E. (1987). The social construction of Bakelite. In The Social Construction of Technological Systems. MIT Press."
        url: null

  - id: carothers-step-and-chain
    date: 1929 – 1937
    type: MECHANISM-ESTABLISHED
    title: Carothers separates the two mechanisms, and finds the arithmetic
    description: >-
      Wallace Carothers sets out to test the macromolecular hypothesis by building polymers deliberately from
      known reactions, and distinguishes condensation polymerisation, in which monomers join two at a time with
      loss of a small molecule, from addition polymerisation, in which a chain grows at a reactive end. For the
      first he derives the relation between the fraction of groups reacted and the average chain length, which
      shows that useful polymers require conversions above 99% and stoichiometric balance to a fraction of a
      per cent. Along the way he makes neoprene and, in 1935, nylon 6,6.
    contested: false
    sources:
      - citation: "Carothers, W. H. (1931). Polymerization. Chemical Reviews 8: 353–426."
        url: null
      - citation: "Hounshell, D. A. & Smith, J. K. (1988). Science and Corporate Strategy: DuPont R&D 1902–1980. Cambridge University Press."
        url: null

  - id: flory-radical-kinetics
    date: 1937 – 1943
    type: MECHANISM-ESTABLISHED
    title: Why radical polymerisation gives no control
    description: >-
      Paul Flory establishes the kinetic scheme of free-radical polymerisation — initiation, propagation,
      transfer and termination — and derives the distribution of chain lengths it produces. The consequences
      are unwelcome and unavoidable: each chain lives for under a second, chains started at different moments
      experience different conditions, and termination is a random event, so the product is a broad
      distribution whose breadth is a property of the mechanism rather than of the operator's care. Chain
      transfer also means the product is branched to an extent set by temperature.
    contested: false
    sources:
      - citation: "Flory, P. J. (1937). The mechanism of vinyl polymerizations. Journal of the American Chemical Society 59: 241–253."
        url: null
      - citation: "Flory, P. J. (1953). Principles of Polymer Chemistry. Cornell University Press."
        url: null

  - id: szwarc-living-polymerisation
    date: 1956 – 1965
    type: TECHNIQUE-INVENTED
    title: Chains that never stop growing
    description: >-
      Michael Szwarc finds that styrene polymerised by sodium naphthalenide in a rigorously dry, oxygen-free
      solvent produces chain ends that remain active indefinitely — the solution stays coloured, and adding
      more monomer makes the chains longer. With no termination step, every chain grows at the same time and
      the distribution becomes almost uniform; the length is set simply by how much monomer was supplied per
      initiator. Adding a second monomer afterwards gives a block copolymer, which made the thermoplastic
      elastomers — rubbery and processable without vulcanisation — possible.
    contested: false
    sources:
      - citation: "Szwarc, M., Levy, M. & Milkovich, R. (1956). Polymerization initiated by electron transfer to monomer. Journal of the American Chemical Society 78: 2656–2657."
        url: null
      - citation: "Szwarc, M. (1983). Living polymers: their discovery, characterization and properties. Journal of Polymer Science A 36: ix–xv."
        url: null

  - id: kwolek-aramid-fibre
    date: 1965 – 1972
    type: SYNTHESIS-ACHIEVED
    title: A fibre whose strength comes from the chains lying straight
    description: >-
      Stephanie Kwolek, making rigid-rod aromatic polyamides at DuPont, obtains a solution that is cloudy and
      low in viscosity rather than clear and syrupy — a liquid crystal, with the rod-like chains already
      aligned in domains. Spun through a die, the alignment survives into the fibre, giving a material whose
      tensile strength per unit mass is several times that of steel wire. The property is not a consequence of
      the chemistry alone but of chain orientation, so this is a synthesis whose target was a molecular shape
      chosen for how it would pack.
    contested: false
    sources:
      - citation: "Kwolek, S. L. (1972). Optically anisotropic aromatic polyamide dopes. US Patent 3,671,542."
        url: null
      - citation: "Tanner, D., Fitzgerald, J. A. & Phillips, B. R. (1989). The Kevlar story. Angewandte Chemie International Edition 28: 649–654."
        url: null

  - id: controlled-radical-polymerisation
    date: 1993 – 1998
    type: TECHNIQUE-INVENTED
    title: Living control brought to radical chemistry
    description: >-
      Living anionic polymerisation gives precise control and demands absolute dryness, pure monomers and no
      functional groups the carbanion will attack, which rules out most of the monomers industry uses.
      Krzysztof Matyjaszewski and Mitsuo Sawamoto independently find that a copper or ruthenium complex can
      hold the growing radical reversibly dormant, so that only a tiny fraction is active at any moment and
      termination becomes rare. Ezio Rizzardo, Graeme Moad and San Thang achieve the same by reversible
      transfer through a dithioester. Controlled architecture becomes available in water, in air, with
      ordinary monomers.
    contested: false
    sources:
      - citation: "Kato, M., Kamigaito, M., Sawamoto, M. & Higashimura, T. (1995). Polymerization of methyl methacrylate with a ruthenium complex. Macromolecules 28: 1721–1723."
        url: null
      - citation: "Chiefari, J. et al. (1998). Living free-radical polymerization by reversible addition–fragmentation chain transfer. Macromolecules 31: 5559–5562."
        url: null

open_problems:
  - id: sequence-controlled-polymers
    name: Specifying the order of the monomers
    status: open
    status_note: Open as of 2026; exact sequences are made at milligram scale by stepwise methods, no scalable route exists.
    description: >-
      A protein is a polymer with an exact sequence, and essentially all of its function follows from that
      sequence. A synthetic copolymer has a statistical sequence set by the relative reactivities of the
      monomers, which can be biased but not specified. Chains with a defined sequence can be built one unit at
      a time, as peptides are, but the yield falls geometrically with length and the scale is milligrams —
      while the properties that a specified sequence would deliver are wanted by the tonne.
    why_hard: >-
      Controlling which monomer adds next means making the chain end selective between two similar molecules
      present in the same solution, at every one of thousands of additions, with no opportunity to purify in
      between. Nature solves it with a template and a ribosome; no synthetic equivalent operates at
      polymerisation rates.
    unlocks: >-
      Sequence is how a protein folds to a single structure, binds one target and catalyses one reaction.
      Synthetic chains with the same property would give designed binding, folding and catalysis in materials
      that are cheap and stable, which proteins are not.
    sources:
      - citation: "Lutz, J.-F., Ouchi, M., Liu, D. R. & Sawamoto, M. (2013). Sequence-controlled polymers. Science 341: 1238149."
        url: null
      - citation: "Lutz, J.-F. (2017). Defining the field of sequence-controlled polymers. Macromolecular Rapid Communications 38: 1700582."
        url: null

  - id: depolymerisation-of-mixed-waste
    name: Taking a polymer back to its monomer
    status: open
    status_note: Open as of 2026; demonstrated for single clean polyesters, unsolved for mixed and contaminated streams.
    description: >-
      World production of plastics is around 400 million tonnes a year, and on the most careful accounting
      under a tenth of all that has ever been made has been recycled. Mechanical recycling degrades the chains
      and mixes incompatible polymers, so the product is worth less than the input. Chemical recycling back to
      monomer works for polyesters, whose backbone bonds can be hydrolysed, and barely at all for the
      polyolefins that make up the largest share, whose backbone is nothing but carbon–carbon bonds.
    why_hard: >-
      The property that makes a polyolefin useful — an inert chain of single bonds — is exactly what makes it
      hard to cut selectively, and the energy needed to break it indiscriminately gives a mixture rather than a
      monomer. Real waste is a mixture of several polymers with dyes, fillers and food residues, and separating
      it costs more than the recovered material is worth.
    unlocks: >-
      A polymer that could be returned to monomer and repolymerised without loss would make the material
      genuinely circular. Designing the cleavable bond in from the start is the alternative, and requires the
      replacement to match polyethylene on cost, which nothing does.
    sources:
      - citation: "Geyer, R., Jambeck, J. R. & Law, K. L. (2017). Production, use and fate of all plastics ever made. Science Advances 3: e1700782."
        url: https://doi.org/10.1126/sciadv.1700782
      - citation: "Coates, G. W. & Getzler, Y. D. Y. L. (2020). Chemical recycling to monomer for an ideal, circular polymer economy. Nature Reviews Materials 5: 501–516."
        url: null

applications:
  - area: Medicine
    title: A suture designed to disappear on schedule
    description: >-
      Polyesters of lactic and glycolic acid hydrolyse in the body to compounds it already metabolises, and the
      rate depends on the ratio of the two monomers and on the chain's tacticity. That turns degradation into a
      design parameter: a suture that holds for three weeks and is gone in three months, a bone screw that
      transfers load back to healing bone as it weakens, and a drug depot releasing its contents over a month
      from one injection. The release profile is set in the polymerisation, not in the formulation.
    domain: biology
    field_id: pharmacology
    sources:
      - citation: "Nair, L. S. & Laurencin, C. T. (2007). Biodegradable polymers as biomaterials. Progress in Polymer Science 32: 762–798."
        url: null
  - area: Protective equipment
    title: Strength from chains that lie straight
    description: >-
      Aramid fibre has a tensile strength around 3.6 gigapascals at a density of 1.44, so per unit mass it
      carries several times what a high-strength steel wire does. It is in body armour, in the belts of
      radial tyres, in brake linings and in the mooring lines of offshore platforms. What is being exploited
      is not bond strength — the bonds are ordinary amides — but the fact that the chains are rigid rods
      aligned along the fibre, so a load is carried by covalent bonds rather than by the weak interactions
      between chains.
    sources:
      - citation: "Tanner, D., Fitzgerald, J. A. & Phillips, B. R. (1989). The Kevlar story. Angewandte Chemie International Edition 28: 649–654."
        url: null
  - area: Microelectronics
    title: The polymer that lets a chip be patterned
    description: >-
      Every integrated circuit is made by coating a wafer with a polymer whose solubility changes where light
      falls on it, then developing away the exposed or unexposed regions. The resolution achievable depends on
      the polymer: chain length distribution sets how sharp an edge can be, and the chemically amplified
      resists introduced in the 1980s work because one absorbed photon releases an acid that catalyses many
      deprotection events, multiplying the sensitivity. Lithography's limits are as much polymer chemistry as
      optics.
    sources:
      - citation: "Ito, H. (2005). Chemical amplification resists for microlithography. Advances in Polymer Science 172: 37–245."
        url: null

further_reading:
  - citation: "Odian, G. (2004). Principles of Polymerization, 4th edition. Wiley."
    url: null
    note: The standard course on the mechanisms, with the kinetics and the distributions derived rather than quoted.
  - citation: "Flory, P. J. (1953). Principles of Polymer Chemistry. Cornell University Press."
    url: null
    note: Seventy years old and still the clearest account of what a distribution of chain lengths means.
  - citation: "Matyjaszewski, K. & Davis, T. P., eds. (2002). Handbook of Radical Polymerization. Wiley."
    url: null
    note: Where the controlled-radical methods are set out together, with their limits stated.
---

## A Plastic Made Before Anyone Believed in Large Molecules

{{fig:baekeland|Leo Baekeland}} heated phenol with formaldehyde under pressure in 1907 and obtained a hard, infusible solid that could be moulded before it set and then held its shape permanently. Bakelite was the first entirely synthetic plastic, it insulated the electrical industry, and it arrived about twenty years before chemistry accepted that molecules of that size existed.

The material itself helps explain the delay. Bakelite is one covalent network running through the whole object: it cannot be dissolved, melted, distilled or given a molecular weight, so every method chemistry had for establishing what a substance is was inapplicable. The reasonable-sounding alternative view — that such materials are aggregates of ordinary small molecules held by some unusual attraction — was not easily refuted by anything Bakelite could be made to do. {{fig:staudinger|Hermann Staudinger}}'s long argument for the macromolecule, described under [soft matter](/physics/soft-matter/), had to be won on other polymers.

{{fig:carothers|Wallace Carothers}}'s approach at DuPont was to settle it constructively: build polymers from reactions whose chemistry was already known, so that the structure of the product followed from the structure of the reagents and no inference was required. Along the way he made neoprene and nylon. And in working out how to do it he found the arithmetic that constrains one half of the subject permanently.

## Two Mechanisms With Opposite Requirements

Carothers's other contribution was a distinction that organises everything since.

In **step-growth** polymerisation any two molecules carrying the right groups can join: monomer to monomer, dimer to trimer, oligomer to oligomer. Chains grow slowly and in parallel, and long chains appear only when nearly every functional group has reacted. In **chain-growth** polymerisation there is a reactive end that adds monomer one at a time, so a chain goes from nothing to its full length in a fraction of a second, and increasing conversion produces more chains rather than longer ones.

The two therefore demand opposite things from the chemist, which the next section works out numerically. Step-growth needs extreme conversion and extreme stoichiometric precision. Chain-growth needs neither, and gives up control in exchange.

{{fig:flory|Paul Flory}} established just how much control is given up. The free-radical mechanism — a radical starts a chain, the chain adds monomer, and it dies when it meets another radical or hands its activity to a solvent molecule — has three features that no amount of care removes. Each chain lives under a second, so chains begun at different times grow under different conditions. Termination is a random encounter, so the length at which a chain stops is a random variable. And chain transfer puts branches in at a rate set by temperature. The product is a broad distribution: the polydispersity of an ideal radical polymerisation is 1.5 or 2.0 depending on how termination happens, and it is a property of the mechanism rather than of the operator.

That distribution is tolerable for a bag or a pipe and ruinous for anything that has to do two things at once. Which is what made the next result matter.

## Controlling the Architecture

{{fig:szwarc|Michael Szwarc}} found in 1956 that if styrene is polymerised anionically in a scrupulously dry and oxygen-free solvent, the chain ends do not die. The solution stays coloured for days; add more monomer and the chains get longer. With no termination step, every chain grows throughout, all of them end up nearly the same length, and that length is simply the monomer-to-initiator ratio.

Three things follow immediately. The polydispersity collapses to about 1.01, so the chains are effectively identical. The length becomes a dial rather than an outcome. And — the consequence with the largest effect on the world — adding a second monomer after the first is consumed extends every chain with a block of the new one. A **block copolymer** cannot phase-separate, because the two incompatible runs are covalently joined, so it separates as far as it can and no further: into domains tens of nanometres across. A styrene–butadiene–styrene triblock is rubbery butadiene held together by hard glassy styrene domains that act as crosslinks but soften on heating, so the material behaves as vulcanised rubber in use and as a thermoplastic in a moulding machine. Most shoe soles and much road surfacing is this.

Two other kinds of control arrived around it. Stereochemical control — making every substituent along a chain point the same way, so the polymer crystallises — came from the catalysts described under [catalysis](/chemistry/catalysis/), and the difference it makes is not marginal: regularly arranged polypropylene is a structural plastic and the randomly arranged polymer of identical composition is a soft grease. And {{fig:kwolek|Stephanie Kwolek}} obtained strength from shape in 1965, when a rigid-rod aromatic polyamide gave a cloudy, thin solution instead of a clear syrupy one. It was a liquid crystal, the rods already aligned; spun through a die, the alignment survived, and the fibre carries load along covalent bonds rather than across the weak forces between chains.

The last step made the control industrial. Living anionic polymerisation needs absolute dryness and tolerates no functional groups a carbanion would attack, which excludes most monomers of commercial interest. {{fig:matyjaszewski|Krzysztof Matyjaszewski}} and {{fig:sawamoto|Mitsuo Sawamoto}} independently found in 1995 that a metal complex can hold a growing radical reversibly dormant, so that only a minute fraction is active at any instant and chains almost never meet to terminate; {{fig:rizzardo|Ezio Rizzardo}}, {{fig:moad|Graeme Moad}} and {{fig:thang|San Thang}} achieved the same by reversible transfer through a dithioester. Block copolymers and controlled lengths became available in water, in air, with ordinary monomers.

## A Closer Look: Why Nylon Needs a Salt

Take a step-growth polymerisation in which two kinds of group, present in equal numbers, react pairwise. Let $p$ be the fraction of groups that have reacted. Carothers's result is that the number-average degree of polymerisation is

$$
\overline{DP} = \frac{1}{1-p}.
$$

The derivation is a count: start with $N_0$ monomer units, and each reaction joins two molecules into one, so after $pN_0/2$ reactions there are $N_0(1 - p/2)$... more directly, the number of molecules remaining is $N_0(1-p)$ while the number of units is unchanged, so the average molecule contains $1/(1-p)$ units.

Put numbers in it:

| Conversion $p$ | $\overline{DP}$ | What it is |
| --- | --- | --- |
| 0.50 | 2 | a dimer |
| 0.90 | 10 | a brittle powder |
| 0.99 | 100 | a usable fibre |
| 0.999 | 1,000 | a good fibre |
| 0.9999 | 10,000 | high-performance |

This is the tyranny of the mechanism. At 90% conversion — which in most of organic chemistry is a good yield — there is no polymer, only an oligomer that crumbles. Useful properties start around $\overline{DP} = 100$, which requires **99%**, and every further factor of ten in chain length costs another decimal place of conversion. There is no clever reagent that shortens this; it is arithmetic.

There is a second and sharper constraint that follows from the same algebra. Suppose the two monomers are not present in exactly equal amounts, with a ratio $r < 1$. Once the minority monomer is exhausted, every chain end is of the majority kind and cannot react with another, so growth stops at

$$
\overline{DP}_{\max} = \frac{1+r}{1-r}.
$$

| Excess of one monomer | $r$ | $\overline{DP}_{\max}$ |
| --- | --- | --- |
| 10% | 0.909 | 21 |
| 1% | 0.990 | 199 |
| 0.1% | 0.999 | 1,999 |

A **one per cent** weighing error caps the chain length at 199 forever, no matter how long the reaction is run or how pure the reagents are. To reach a thousand units the two monomers must be matched to better than one part in a thousand.

Weighing two substances to that accuracy at industrial scale, with both of them hygroscopic and one volatile, is not realistic. So nylon is not made by weighing. Adipic acid and hexamethylenediamine are first combined in solution, where they form a crystalline 1:1 salt — nylon salt — which is filtered off and recrystallised. The crystal lattice enforces the stoichiometry: there is no composition of that solid other than exactly one to one. The salt is then heated and polymerises. **A purification step is being used to solve an arithmetic problem**, and that is why the industrial process has a step that looks, chemically, entirely unnecessary.

Now compare the chain-growth case, to see how different the two mechanisms are. In a radical polymerisation a chain reaches $\overline{DP} = 1{,}000$ within a second of initiation, at whatever overall conversion happens to prevail — even 2%. Conversion determines how many chains exist, not how long they are, so there is no conversion requirement at all and no stoichiometric requirement, since there is only one monomer. What is given up is uniformity: the polydispersity is 1.5 to 2.

And a living polymerisation gets both. With no termination, chain lengths follow a Poisson distribution, for which

$$
\text{PDI} = 1 + \frac{1}{\overline{DP}},
$$

so at $\overline{DP} = 100$ the polydispersity is **1.01**. Chains within one per cent of one another, at a length chosen by the amount of monomer added. That is the precision a block copolymer needs, because the size of the domains it self-assembles into depends on the length of each block — and it is the precision that sets the limit of the field's ambition, since the one thing still missing, recorded above as an open problem, is control over the *order* of the monomers rather than their number.

## What Is Not Controlled

Length, breadth of distribution, branching, tacticity and block architecture are all now controllable. Two things are not, and both are visible from a long way off.

The first is sequence. A protein's function comes almost entirely from the exact order of its residues, and a synthetic copolymer's order is statistical — biased by the relative reactivities of the monomers, never specified. Exact sequences can be built one unit at a time, as peptides are, at milligram scale and with yields that fall geometrically with length. The properties a specified sequence would give — folding to one structure, binding one target, catalysing one reaction — are wanted in materials that are cheap and durable, which proteins are not.

The second is the end of the object's life. Production is around 400 million tonnes a year, and on careful accounting less than a tenth of all the plastic ever made has been recycled. Mechanical recycling shortens the chains and mixes polymers that will not blend, so the product is worth less than the feed. Chemical recycling back to monomer works where the backbone contains a bond that can be cut — the ester links of a polyester hydrolyse — and hardly at all for the polyolefins that are the largest fraction, whose backbone is nothing but carbon–carbon single bonds. The inertness that makes polyethylene useful is the same property that makes it permanent, which is an uncomfortably exact statement of the problem, and it is taken up from the environmental side in [atmospheric chemistry](/chemistry/atmospheric-chemistry/) and its thread.
