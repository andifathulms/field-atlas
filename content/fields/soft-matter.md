---
id: soft-matter
domain: physics
thread: flow
name: Soft Matter
parent_ids:
  - elasticity
  - phase-transitions
era_emerged: 1861 – 1995
core_question: Why do materials made of large, floppy or loosely bound units respond enormously to tiny forces, and what organises them?

summary: |-
  A steel bar and a rubber band are both solids, and their stiffnesses differ by five orders of magnitude. Mayonnaise holds its shape until stirred. A liquid crystal flows like a liquid and bends light like a crystal. These are not exotic edge cases; most of the materials in a kitchen, a body or an industrial process belong to this class, and what they share is that the relevant energies are comparable to $k_BT$. Thermal motion is not a small perturbation on the structure — it *is* the structure, which is why soft materials are soft and why their elasticity often comes from entropy rather than from bonds.

  The field was assembled late, from pieces that did not look related. Thomas Graham distinguished colloids from true solutions in 1861; liquid crystals were found in 1888 and dismissed as impure samples; Hermann Staudinger spent the 1920s arguing, against the chemical establishment, that rubber and cellulose are single molecules of enormous length. Pierre-Gilles de Gennes then showed that polymers, liquid crystals, colloids and magnets near their critical points obey the same scaling laws — which is why a single person could receive a Nobel Prize for all four, and why the subject now has one name.

key_ideas:
  - term: Colloid
    definition: >-
      Particles between a nanometre and a micron dispersed in a medium: large enough to scatter light
      and to be pushed around by their neighbours, small enough that thermal motion keeps them
      suspended. Milk, ink, blood, paint and fog are colloids.
    turning_point_id: graham-colloids
  - term: Liquid crystal phase
    definition: >-
      A state between liquid and crystal, in which molecules have no fixed positions but do share an
      average orientation. It flows, and it is optically anisotropic — which is what a display
      exploits, switching the orientation with a small voltage.
    turning_point_id: reinitzer-liquid-crystals
  - term: Macromolecule
    definition: >-
      A single covalently bonded molecule of thousands or millions of atoms. The claim that rubber and
      cellulose are such molecules, rather than aggregates of small ones, was resisted for a decade
      and is the foundation of polymer science.
    turning_point_id: staudinger-macromolecules
  - term: Entropic elasticity
    definition: >-
      A coiled chain has many more configurations when short than when extended, so stretching it
      reduces entropy and the restoring force is $-T\,\partial S/\partial L$. The resulting modulus is
      proportional to temperature, which is why a stretched rubber band pulls harder when warmed.
    turning_point_id: rubber-entropic-elasticity
  - term: Scaling and universality
    definition: >-
      The large-scale behaviour of a polymer solution or a liquid crystal is governed by power laws
      whose exponents depend only on dimensionality and symmetry, not on chemistry — the same
      universality that governs critical points in magnets.
    turning_point_id: de-gennes-scaling
  - term: Active matter
    definition: >-
      A material whose constituent units consume energy and generate their own motion. Momentum is
      injected locally rather than at the boundaries, so the usual thermodynamic constraints do not
      apply and large-scale order can appear without any attraction between units.
    turning_point_id: active-matter

turning_points:
  - id: graham-colloids
    date: "1861"
    type: DISCOVERY
    title: Graham separates colloids from crystalloids
    description: >-
      Thomas Graham finds that substances fall into two classes by how fast they diffuse through a
      membrane. Salts and sugars pass readily and can be crystallised; gelatin, albumin and starch
      diffuse hundreds of times more slowly and form glues rather than crystals. He names the second
      class colloids, from the Greek for glue, and invents dialysis to separate them. The distinction
      marks out a whole category of matter whose behaviour is governed by particle size rather than
      by molecular chemistry.
    contested: false
    sources:
      - citation: "Graham, T. (1861). Liquid diffusion applied to analysis. Philosophical Transactions of the Royal Society 151: 183–224."
        url: null
      - citation: "Jones, R. A. L. (2002). Soft Condensed Matter. Oxford University Press."
        url: null

  - id: reinitzer-liquid-crystals
    date: 1888 – 1922
    type: DISCOVERY
    title: A substance with two melting points
    description: >-
      Friedrich Reinitzer, studying cholesteryl benzoate from carrots, finds it melts at 145 °C into a
      cloudy liquid and again at 179 °C into a clear one, with brilliant colours at the transitions.
      Otto Lehmann examines the cloudy phase under a polarising microscope and finds it birefringent —
      flowing, yet optically ordered. Most chemists assumed an impurity. Georges Friedel classified the
      phases properly in 1922, and the state was a laboratory curiosity for another forty years, until
      displays were built from it.
    contested: false
    sources:
      - citation: "Reinitzer, F. (1888). Beiträge zur Kenntniss des Cholesterins. Monatshefte für Chemie 9: 421–441."
        url: null
      - citation: "Friedel, G. (1922). Les états mésomorphes de la matière. Annales de Physique 18: 273–474."
        url: null
      - citation: "Sluckin, T. J., Dunmur, D. A. & Stegemeyer, H. (2004). Crystals That Flow. Taylor & Francis."
        url: null

  - id: staudinger-macromolecules
    date: 1920 – 1926
    type: PARADIGM-SHIFT
    title: Staudinger's long molecules
    description: >-
      The accepted view was that rubber, cellulose and proteins are aggregates of small molecules held
      by weak association — a position supported by the fact that no reliable method then existed for
      measuring the mass of anything so large. Hermann Staudinger argues that they are single
      molecules with thousands of atoms linked covalently, and demonstrates it by hydrogenating
      rubber: the product keeps its colloidal properties although every double bond, and therefore
      every supposed site of association, is gone. He was told publicly to stop talking about greasy
      high polymers. He was right, and polymer chemistry followed.
    contested: false
    sources:
      - citation: "Staudinger, H. (1920). Über Polymerisation. Berichte der Deutschen Chemischen Gesellschaft 53: 1073–1085."
        url: null
      - citation: "Mülhaupt, R. (2004). Hermann Staudinger and the origin of macromolecular chemistry. Angewandte Chemie International Edition 43: 1054–1063."
        url: null

  - id: rubber-entropic-elasticity
    date: 1934 – 1953
    type: DISCOVERY
    title: Elasticity made of entropy
    description: >-
      Werner Kuhn, Eugene Guth and Hermann Mark treat a polymer chain as a random walk, and Paul Flory
      builds the statistical theory of chains and networks. The conclusion is that rubber's restoring
      force is not stored bond energy but lost entropy: a stretched chain has fewer available
      configurations. The theory predicts a modulus proportional to absolute temperature and to the
      density of crosslinks, both confirmed, and it explains the demonstration that puzzles everyone —
      a stretched rubber band warms when pulled and contracts when heated.
    contested: false
    sources:
      - citation: "Kuhn, W. (1934). Über die Gestalt fadenförmiger Moleküle in Lösungen. Kolloid-Zeitschrift 68: 2–15."
        url: null
      - citation: "Flory, P. J. (1953). Principles of Polymer Chemistry. Cornell University Press."
        url: null
      - citation: "Treloar, L. R. G. (1975). The Physics of Rubber Elasticity, 3rd edition. Clarendon Press."
        url: null

  - id: de-gennes-scaling
    date: 1972 – 1991
    type: PARADIGM-SHIFT
    title: De Gennes finds the common structure
    description: >-
      Pierre-Gilles de Gennes shows that a polymer chain in solution is the same mathematical problem
      as a magnet near its critical point in the limit of zero spin components, so the apparatus of the
      renormalisation group applies and the chain's size scales with the number of units to a universal
      power. He then does comparable work on liquid crystals, wetting and adhesion, and gives the
      collective subject its name. The unifying claim is that these materials are governed by
      geometry, symmetry and thermal energy rather than by their chemistry.
    contested: false
    sources:
      - citation: "de Gennes, P.-G. (1972). Exponents for the excluded volume problem as derived by the Wilson method. Physics Letters A 38: 339–340."
        url: null
      - citation: "de Gennes, P.-G. (1979). Scaling Concepts in Polymer Physics. Cornell University Press."
        url: null
      - citation: "de Gennes, P.-G. (1992). Soft matter. Reviews of Modern Physics 64: 645–648."
        url: null

  - id: active-matter
    date: 1995 – 2013
    type: DISCOVERY
    title: Matter that drives itself
    description: >-
      Tamás Vicsek and colleagues show that a crowd of self-propelled particles, each simply aligning
      with its neighbours' direction, undergoes a transition to collective motion as noise is lowered —
      a flock, with no leader and no attraction between members. Experiments on swimming bacteria,
      vibrated grains, synthetic swimmers and extracts of cytoskeletal filaments with their motor
      proteins then found the predicted behaviour: spontaneous flow, giant density fluctuations, and
      order that equilibrium thermodynamics forbids in two dimensions.
    contested: false
    sources:
      - citation: "Vicsek, T., Czirók, A., Ben-Jacob, E., Cohen, I. & Shochet, O. (1995). Novel type of phase transition in a system of self-driven particles. Physical Review Letters 75: 1226–1229."
        url: null
      - citation: "Marchetti, M. C. et al. (2013). Hydrodynamics of soft active matter. Reviews of Modern Physics 85: 1143–1189."
        url: null

open_problems:
  - id: glass-transition
    name: What happens at the glass transition
    status: open
    status_note: Open as of 2026; competing theories fit the data and disagree about whether a transition exists at all.
    description: >-
      Cool a liquid fast enough to avoid crystallising and its viscosity rises by fourteen orders of
      magnitude over a modest temperature range, until it is a solid by any practical test — while its
      structure remains, as far as scattering can tell, that of a liquid. Whether this is a genuine
      phase transition to an ideal glass at some lower temperature, or purely a kinetic arrest with no
      transition at all, has been argued since the 1960s.
    why_hard: >-
      The equilibrium state cannot be reached: relaxation times exceed the age of the universe before
      the putative transition temperature is approached, so the decisive measurements are impossible in
      principle rather than merely difficult. The candidate theories — random first-order transitions,
      dynamical facilitation, geometric frustration — make predictions that differ mainly in the
      inaccessible regime.
    unlocks: >-
      Glasses, from window panes to metallic glasses to the amorphous phases that stabilise
      pharmaceuticals, are made by processes tuned empirically. It is also one of the few places where
      it is unclear whether a well-posed phase transition exists, which makes it a test case for
      statistical mechanics itself.
    sources:
      - citation: "Berthier, L. & Biroli, G. (2011). Theoretical perspective on the glass transition and amorphous materials. Reviews of Modern Physics 83: 587–645."
        url: null
      - citation: "Angell, C. A. (1995). Formation of glasses from liquids and biopolymers. Science 267: 1924–1935."
        url: null

applications:
  - area: Displays
    title: Liquid crystals in every screen
    description: >-
      A nematic liquid crystal's molecules can be aligned by a surface and reoriented by a volt or two,
      and because the phase is birefringent that reorientation switches the transmission of polarised
      light. A pixel is therefore a cell a few microns thick with electrodes and two polarisers, drawing
      microwatts. The phase discovered in 1888 and dismissed as an impurity became, after 1968, the
      basis of the display industry.
    sources:
      - citation: "Castellano, J. A. (2005). Liquid Gold: The Story of Liquid Crystal Displays. World Scientific."
        url: null
  - area: Cell mechanics
    title: The cell as active soft matter
    description: >-
      A cell's interior is a crosslinked network of semiflexible filaments driven by motor proteins
      that consume ATP — the definitional case of active matter. Treating it that way predicts the
      spontaneous flows seen in the cortex during division, the contractile stresses that pull a wound
      closed, and the way tissues behave as fluids over hours and as solids over seconds.
    domain: biology
    field_id: cell-biology
    sources:
      - citation: "Needleman, D. & Dogic, Z. (2017). Active matter at the interface between materials science and cell biology. Nature Reviews Materials 2: 17048."
        url: null
      - citation: "Mofrad, M. R. K. (2009). Rheology of the cytoskeleton. Annual Review of Fluid Mechanics 41: 433–453."
        url: null
  - area: Industry
    title: Formulating what cannot be designed from first principles
    description: >-
      Paint must flow under a brush and not sag on a wall; toothpaste must hold its shape on the brush
      and spread under pressure; a vaccine suspension must not aggregate over two years in a
      refrigerator. All are colloidal and polymeric formulation problems, controlled through
      interparticle forces, adsorbed polymer layers and yield stresses, and the trade is still largely
      empirical because the governing interactions are weak enough to be altered by anything.
    sources:
      - citation: "Russel, W. B., Saville, D. A. & Schowalter, W. R. (1989). Colloidal Dispersions. Cambridge University Press."
        url: null

further_reading:
  - citation: "de Gennes, P.-G. (1992). Soft matter. Reviews of Modern Physics 64: 645–648."
    url: null
    note: The Nobel lecture; four pages that define the field and its attitude.
  - citation: "Jones, R. A. L. (2002). Soft Condensed Matter. Oxford University Press."
    url: null
    note: The best short introduction, with the thermal-energy argument front and centre.
  - citation: "Gordon, J. E. (1976). The New Science of Strong Materials. Penguin."
    url: null
    note: Includes the clearest popular account of why rubber behaves as it does.
---

## Materials Made Soft by Temperature

Why is rubber a hundred thousand times less stiff than steel, when both are made of ordinary covalent bonds? The answer is that in steel, deforming the material means stretching bonds, whose energies are electron-volts — hundreds of times $k_BT$ at room temperature. In rubber, deforming the material means uncoiling chains, and the energy difference between one coiled configuration and another is of order $k_BT$ itself. Thermal motion is already exploring those configurations constantly. Pushing on such a material competes not against chemistry but against entropy, and entropy is cheap.

That is the organising principle of the whole field, and it covers an unlikely list of materials: polymers, colloids, gels, emulsions, foams, liquid crystals, granular media, membranes, and most of the contents of a cell. They were studied separately for a century.

{{fig:thomas-graham|Thomas Graham}} drew the first boundary in 1861, by noticing that substances separate into two classes by how fast they cross a membrane. Salts pass quickly and crystallise; gelatin, starch and albumin crawl and form glues. He called the second class colloids and invented dialysis to exploit the difference. The distinction is about size, not chemistry — particles between roughly a nanometre and a micron are large enough to be treated as objects and small enough to be shoved around by thermal collisions.

{{fig:reinitzer|Friedrich Reinitzer}} found the strangest member of the family in 1888: a cholesterol derivative that melts twice, into a cloudy liquid at 145 °C and a clear one at 179 °C. {{fig:lehmann|Otto Lehmann}} put the cloudy phase under a polarising microscope and found it birefringent. A substance that flows should be optically isotropic; this one was ordered. Most chemists concluded the sample was impure. It took until 1922 for the phases to be classified properly, and until 1968 for anyone to find a use.

## One Long Molecule, Against the Establishment

The most consequential fight was about whether large molecules exist. In 1920 the respectable position was that rubber, cellulose and proteins are aggregates — many small molecules held together by weak forces — because the available analytical methods could not weigh anything bigger and because colloidal behaviour was taken to indicate aggregation.

{{fig:staudinger|Hermann Staudinger}} insisted they are single covalently bonded molecules with thousands of atoms, and was told publicly, by senior chemists, to stop. His decisive experiment was to hydrogenate natural rubber. If the colloidal properties came from association at the double bonds, saturating every one of them should destroy those properties. The hydrogenated product was still a rubbery, high-viscosity, colloidal material. There were no association sites left to be responsible.

Accepting long chains made a quantitative theory possible, and it came from an unexpected direction: random walks. {{fig:werner-kuhn|Werner Kuhn}} and then {{fig:flory|Paul Flory}} treated a chain as a sequence of freely jointed segments, and the mathematics of [probability theory](/math/probability-theory/) supplied the rest.

## A Closer Look: Why a Stretched Rubber Band Gets Warm

Model a polymer chain as $N$ rigid segments of length $b$, each free to point anywhere — a random walk. The end-to-end distance is not $Nb$ but

$$
R = b\sqrt{N}.
$$

For a chain of $N = 1000$ segments of $b = 0.25$ nm, the contour length is $Nb = 250$ nm while the typical end-to-end distance is

$$
R = 0.25\sqrt{1000} = 7.9\ \mathrm{nm}.
$$

The chain is coiled into a ball about thirty times smaller than its own length, for the same reason that a thousand coin flips rarely come out all heads: there are vastly more configurations with the ends close together than with them far apart.

That count *is* the elasticity. The number of configurations with end-to-end vector $R$ falls off as a Gaussian, so the entropy is

$$
S(R) = k_B \ln \Omega(R) = \text{const} - \frac{3k_B R^{2}}{2Nb^{2}},
$$

and since the internal energy barely changes — no bonds are being stretched — the free energy $F = U - TS$ gives a restoring force

$$
f = \frac{\partial F}{\partial R} = -T\frac{\partial S}{\partial R} = \frac{3k_B T}{Nb^{2}}R.
$$

A Hookean spring, with a stiffness proportional to $T$. The force exists because stretching reduces the number of available configurations, and for no other reason.

Two consequences are testable with a rubber band and your lip. First, the modulus rises with temperature: a crosslinked network with $n$ chains per unit volume has shear modulus $G = n k_B T$. Writing $n = \rho N_A/M_c$ with $M_c$ the mass between crosslinks, for natural rubber with $\rho = 950$ kg/m³ and $M_c = 5$ kg/mol at 300 K:

$$
G = \frac{\rho R T}{M_c} = \frac{(950)(8.314)(300)}{5} = 4.7\times10^{5}\ \mathrm{Pa} \approx 0.5\ \mathrm{MPa},
$$

which is the measured value, and five orders of magnitude below steel's 80 GPa. Heat a loaded rubber band and it *contracts*, pulling harder — the opposite of thermal expansion, and the direct signature of entropic elasticity.

Second, stretching must release heat. The work done goes into reducing entropy at constant internal energy, so $T\Delta S$ comes out as heat: stretch a thick rubber band quickly and press it to your lip, and it is noticeably warm; let it snap back and it cools. The demonstration takes five seconds and is a direct measurement of a thermodynamic identity.

{{fig:de-gennes|Pierre-Gilles de Gennes}} later showed that the $\sqrt{N}$ law is only the ideal case. A real chain cannot pass through itself, and allowing for that excluded volume changes the exponent to roughly $N^{3/5}$ in three dimensions. His route to that result is the striking part: the polymer problem maps onto a magnet near its critical point in the limit where the number of spin components goes to zero, so the [renormalisation group](/physics/phase-transitions/) computes polymer exponents. The chemistry of the chain enters nowhere.

## Driven From Within

The newest part of the field breaks the thermodynamic frame rather than extending it. In ordinary soft matter, energy enters at the boundaries and the interior relaxes towards equilibrium. In active matter each unit consumes fuel and propels itself, so momentum is injected everywhere at once.

{{fig:vicsek|Tamás Vicsek}}'s 1995 model is about as simple as a model can be: particles move at fixed speed and each turns to match the average heading of its neighbours, with some noise. Below a noise threshold, order appears — the whole crowd moves together, with no leader, no attraction, and in two dimensions, where equilibrium statistical mechanics forbids such long-range order. Bacteria in suspension, vibrated rods, synthetic swimmers and mixtures of cytoskeletal filaments with their motor proteins all show the predicted behaviour, including spontaneous flows and density fluctuations far larger than equilibrium allows.

This is where the thread rejoins biology. A cell's interior is a crosslinked network of semiflexible filaments driven by motors burning ATP, which is the definitional case of active matter, and treating it as such predicts the flows seen during division and the way a tissue behaves as a fluid over hours and a solid over seconds — the mechanics described from the other side under [cell biology](/biology/cell-biology/). Meanwhile the oldest question in the field remains the glass transition: cool a liquid fast and its viscosity rises by fourteen orders of magnitude while its structure stays liquid, and sixty years of argument have not settled whether anything is actually transitioning.
