---
id: electrochemistry
domain: chemistry
thread: electrochemistry
name: Electrochemistry
parent_ids:
  - chemical-composition
era_emerged: 1800 – 1886
core_question: What is the exact relation between a quantity of electricity and a quantity of chemical change?

summary: |-
  Volta's pile of 1800 gave chemistry its first steady source of electric current, and within weeks it had been used to decompose water. Humphry Davy saw the implication and ran it hard: pass a current through a molten salt and the elements separate at the electrodes. Within two years he had isolated potassium, sodium, calcium, barium, strontium and magnesium — six elements that Lavoisier's list had carried as undecomposable substances, taken apart by a battery.

  Michael Faraday then found the law. The mass of a substance liberated at an electrode is proportional to the charge passed, and for a given charge the masses of different substances are proportional to their equivalent weights. That is a quantitative bridge between electricity and matter, and it carries a consequence Faraday did not draw: if a fixed charge liberates a fixed number of atoms, electricity itself must come in units. Helmholtz said so in 1881; dividing Faraday's constant by Avogadro's number gives the charge on the electron, from measurements made sixty years before anyone knew there was one.

key_ideas:
  - term: Electrolysis
    definition: >-
      Driving a chemical change by passing current: oxidation at one electrode, reduction at the other,
      with ions carrying the charge between them. It decomposes compounds that no reagent will touch,
      which is how the most reactive metals were first obtained.
    turning_point_id: davy-isolates-elements
  - term: Faraday's laws
    definition: >-
      The amount of substance transformed is proportional to the charge passed, and for the same charge
      the amounts of different substances are proportional to their equivalent weights. One mole of
      electrons is 96,485 coulombs, the Faraday constant.
    turning_point_id: faraday-electrolysis-laws
  - term: Electrode, ion, anode, cathode
    definition: >-
      Faraday's vocabulary, devised with William Whewell's help, for a process whose mechanism was
      unknown — deliberately chosen to describe what is observed, so that it would not commit the user
      to a theory of what travels.
    turning_point_id: faraday-electrolysis-laws
  - term: Half-cell
    definition: >-
      Separating the two electrode reactions into compartments, each with its own electrolyte, joined so
      that ions but not reactants can pass. It is what makes a cell reproducible and what every battery
      since has been built from.
    turning_point_id: daniell-cell
  - term: Electrochemical equivalent
    definition: >-
      The mass of a substance deposited per coulomb. It converts a current and a time into a yield,
      which is why electrochemical industry can be costed from an electricity bill.
    turning_point_id: hall-heroult-aluminium

turning_points:
  - id: volta-pile
    date: "1800"
    type: TECHNIQUE-INVENTED
    title: Volta's pile
    description: >-
      Alessandro Volta stacks discs of zinc and silver separated by brine-soaked cloth and obtains a
      steady electric current — the first source that does not discharge in an instant, as a Leyden jar
      does. He built it to refute Galvani's claim that the twitching of frog legs revealed an animal
      electricity, arguing that the electricity came from the dissimilar metals. Within weeks Nicholson
      and Carlisle in London had used a pile to decompose water into hydrogen and oxygen.
    contested: false
    sources:
      - citation: "Volta, A. (1800). On the electricity excited by the mere contact of conducting substances of different kinds. Philosophical Transactions of the Royal Society 90: 403–431."
        url: null
      - citation: "Pancaldi, G. (2003). Volta: Science and Culture in the Age of Enlightenment. Princeton University Press."
        url: null

  - id: davy-isolates-elements
    date: 1807 – 1808
    type: SUBSTANCE-ISOLATED
    title: Davy takes six elements apart
    description: >-
      Humphry Davy, with the Royal Institution's large battery, passes current through moist and then
      molten alkalis and alkaline earths. Potassium appears in 1807 as globules that skitter on the
      surface and burn on contact with water; sodium follows within days, then calcium, barium,
      strontium and magnesium. Lavoisier's table had listed potash and soda among the simple substances;
      electrolysis showed they were compounds, and gave chemistry a tool that reaches where chemical
      reagents cannot.
    contested: false
    sources:
      - citation: "Davy, H. (1808). On some new phenomena of chemical changes produced by electricity. Philosophical Transactions of the Royal Society 98: 1–44."
        url: null
      - citation: "Knight, D. (1992). Humphry Davy: Science and Power. Blackwell."
        url: null

  - id: faraday-electrolysis-laws
    date: 1832 – 1834
    type: MECHANISM-ESTABLISHED
    title: Faraday's laws of electrolysis
    description: >-
      Michael Faraday establishes that the quantity of chemical change is strictly proportional to the
      quantity of electricity passed, independent of the electrode material, the concentration or the
      current density, and that the same charge liberates amounts of different substances in proportion
      to their equivalent weights. He also devises the vocabulary — electrode, electrolyte, ion, anode,
      cathode — with William Whewell, choosing terms that describe the phenomena without asserting a
      mechanism he could not establish.
    contested: false
    sources:
      - citation: "Faraday, M. (1834). Experimental researches in electricity, seventh series. Philosophical Transactions of the Royal Society 124: 77–122."
        url: null
      - citation: "Williams, L. P. (1965). Michael Faraday: A Biography. Chapman & Hall."
        url: null

  - id: daniell-cell
    date: "1836"
    type: TECHNIQUE-INVENTED
    title: A cell that holds its voltage
    description: >-
      Volta's pile polarises: hydrogen collects on one electrode and the current falls within minutes.
      John Frederic Daniell separates the two electrode reactions into compartments — zinc in zinc
      sulfate, copper in copper sulfate, joined by a porous barrier — so that the species consumed at each
      electrode is replenished from its own solution. The cell delivers a steady 1.1 volts for hours, it
      became the standard power source for the electric telegraph, and the two-compartment design is the
      template for every battery since.
    contested: false
    sources:
      - citation: "Daniell, J. F. (1836). On voltaic combinations. Philosophical Transactions of the Royal Society 126: 107–124."
        url: null
      - citation: "Hughes, T. P. (1983). Networks of Power. Johns Hopkins University Press, chapter 1."
        url: null

  - id: grove-gas-battery
    date: "1839"
    type: TECHNIQUE-INVENTED
    title: Grove's gas battery
    description: >-
      William Robert Grove reverses electrolysis. Having split water with a current, he connects two
      platinum electrodes standing in acid with hydrogen over one and oxygen over the other, and obtains
      a current — chemical energy converted directly to electricity, without a flame or a piston. The
      power was tiny, because the reaction occurs only where gas, electrolyte and metal meet, and the
      principle was sound: the fuel cell waited a century for materials that gave it enough area.
    contested: false
    sources:
      - citation: "Grove, W. R. (1839). On voltaic series and the combination of gases by platinum. Philosophical Magazine 14: 127–130."
        url: null
      - citation: "Bossel, U. (2000). The Birth of the Fuel Cell 1835–1845. European Fuel Cell Forum."
        url: null

  - id: hall-heroult-aluminium
    date: "1886"
    type: TECHNIQUE-INVENTED
    title: Aluminium becomes cheap
    description: >-
      Aluminium is the commonest metal in the crust and was, in 1850, more expensive than silver, because
      its oxide resists every chemical reduction. Charles Martin Hall in Ohio and Paul Héroult in France
      independently find, within months of each other, that alumina dissolves in molten cryolite at about
      960 °C and can then be electrolysed continuously. The price fell by a factor of two hundred within
      a decade. It is the clearest case of an electrochemical process creating an industry, and it now
      consumes on the order of one per cent of world electricity.
    contested: false
    sources:
      - citation: "Hall, C. M. (1889). Process of reducing aluminium from its fluoride salts by electrolysis. US Patent 400,664."
        url: null
      - citation: "Grjotheim, K. & Kvande, H. (1993). Introduction to Aluminium Electrolysis. Aluminium-Verlag."
        url: null

open_problems:
  - id: electrode-interface
    name: What the electrode–electrolyte interface looks like
    status: open
    status_note: Open as of 2026; models from the 1910s remain in use for want of better.
    description: >-
      Everything electrochemical happens in a layer a few nanometres thick where metal meets solution,
      across which the potential drops by a volt or so — a field of order $10^{9}$ V/m. What the
      structure of that layer is, how the water is oriented, where the ions sit, and how it rearranges
      when the potential changes, are described in practice by the Gouy–Chapman–Stern picture of
      1910–1924, which treats water as a dielectric continuum and ions as point charges.
    why_hard: >-
      The region is buried between a metal and a liquid, so most surface techniques cannot reach it;
      it is only nanometres thick, so bulk measurements average over it; and it responds on picoseconds,
      so it rearranges faster than most probes resolve. Simulations must treat metal, water, ions and
      an applied potential consistently, which is exactly the regime where the available methods are
      least reliable.
    unlocks: >-
      Battery lifetime is set by what forms at that interface, electrocatalytic rates by what sits on it,
      and corrosion by whether it protects. Most of the field's practical problems are interface problems
      described by a hundred-year-old approximation.
    sources:
      - citation: "Magnussen, O. M. & Groß, A. (2019). Toward an atomic-scale understanding of electrochemical interface structure and dynamics. Journal of the American Chemical Society 141: 4777–4790."
        url: null
      - citation: "Bockris, J. O'M. & Reddy, A. K. N. (1998). Modern Electrochemistry, 2nd edition. Plenum."
        url: null

applications:
  - area: Metal production
    title: Elements that exist only because of electricity
    description: >-
      Aluminium, magnesium, sodium, lithium, chlorine and fluorine are made by electrolysis, because no
      chemical reducing agent is strong enough or the product is too reactive to survive the conditions.
      Aluminium smelting alone accounts for something near one per cent of world electricity
      consumption, which is why smelters are built beside hydroelectric dams rather than beside mines.
    sources:
      - citation: "Grjotheim, K. & Kvande, H. (1993). Introduction to Aluminium Electrolysis. Aluminium-Verlag."
        url: null
  - area: Physics
    title: The charge on the electron, measured in 1834
    description: >-
      Faraday's constant is the charge per mole of electrons. Once Avogadro's number was known, dividing
      one by the other gives the charge on a single electron — which Helmholtz pointed out in 1881, and
      which means electrolysis had measured a property of a particle that would not be identified for
      another sixteen years. The quantisation of charge was in chemical data all along.
    domain: physics
    field_id: old-quantum-theory
    sources:
      - citation: "Helmholtz, H. von (1881). On the modern development of Faraday's conception of electricity. Journal of the Chemical Society 39: 277–304."
        url: null
  - area: Manufacturing
    title: Plating, anodising and machining with current
    description: >-
      Electroplating puts a controlled thickness of one metal on another — Faraday's law converts a
      current and a time directly into a coating thickness — and anodising grows a protective oxide on
      aluminium to a specified depth. Electrochemical machining removes metal by the reverse process, in
      shapes a cutting tool cannot reach, and the printed circuit board is an electrochemical artefact
      throughout.
    sources:
      - citation: "Schlesinger, M. & Paunovic, M. (eds) (2010). Modern Electroplating, 5th edition. Wiley."
        url: null

further_reading:
  - citation: "Bockris, J. O'M. & Reddy, A. K. N. (1998). Modern Electrochemistry, 2nd edition. Plenum."
    url: null
    note: The standard treatment, unusually discursive about what the interface models assume.
  - citation: "Williams, L. P. (1965). Michael Faraday: A Biography. Chapman & Hall."
    url: null
    note: How Faraday's experimental programme was organised, including the invention of the vocabulary.
  - citation: "Pancaldi, G. (2003). Volta: Science and Culture in the Age of Enlightenment. Princeton University Press."
    url: null
    note: The pile, the dispute with Galvani, and what each of them thought they were demonstrating.
---

## A Current That Does Not Stop

Static electricity could be stored in a Leyden jar and released in a spark. What nobody had before 1800 was a current that flowed steadily for hours, and {{fig:alessandro-volta|Alessandro Volta}} produced one by stacking discs of two different metals separated by brine-soaked card. His purpose was polemical — he was arguing against {{fig:galvani|Galvani}}'s claim that frog legs twitch because of an electricity peculiar to animals, and wanted to show that dissimilar metals in contact with moisture suffice.

The chemical consequences arrived within weeks. Nicholson and Carlisle connected a pile to two wires in water and collected hydrogen at one and oxygen at the other. {{fig:davy|Humphry Davy}} then saw what the tool was for. If current decomposes water, it should decompose anything, and the Royal Institution had the largest battery in the world. In 1807 he electrolysed moist potash and obtained globules of a metal so reactive it skims across water while burning: potassium. Sodium followed in days, then calcium, barium, strontium and magnesium.

{{fig:lavoisier|Lavoisier}}'s table of simple substances had listed potash and soda. Davy showed they were compounds, using a method that reaches further than any reagent, because the oxidising or reducing power of an electrode can be turned up simply by raising the voltage.

## The Law, and What It Contained

{{fig:faraday|Michael Faraday}} made the relation exact between 1832 and 1834. The quantity of chemical change at an electrode is proportional to the quantity of electricity passed — not to the current, nor the time, nor the electrode material, nor the concentration, but to the product of current and time. And for the same charge, different substances are liberated in amounts proportional to their equivalent weights.

He also built the vocabulary, with the philosopher {{fig:whewell|William Whewell}} supplying the Greek: electrode, electrolyte, anode, cathode, ion. The choice was deliberate and is worth noticing. Faraday did not know what carried the charge through the solution and framed words that describe the observations without committing to a mechanism — *ion*, from the Greek for "going", says that something travels and not what.

The law's deeper content went unremarked for fifty years. If a fixed quantity of charge always liberates a fixed number of atoms, then charge comes in units as surely as matter does. {{fig:hermann-helmholtz|Helmholtz}} drew the conclusion in a lecture of 1881: electricity must be composed of elementary portions that behave like atoms of electricity. The electron was identified in 1897. Its charge had been sitting in Faraday's data since 1834, waiting only for Avogadro's number to divide by.

## A Closer Look: What Faraday's Constant Costs

The practical content of Faraday's law is that electricity is a reagent you buy by the coulomb. One mole of electrons is

$$
F = 96{,}485 \text{ C} = 26.8 \text{ ampere-hours},
$$

and that one number turns an industrial process into an arithmetic problem.

**The electron's charge, from chemistry.** Dividing by Avogadro's number:

$$
e = \frac{96{,}485}{6.022\times10^{23}} = 1.602\times10^{-19} \text{ C}.
$$

That is the modern value to four figures, obtainable from an electrolysis experiment and a count of molecules, with no reference to particles at all.

**What it costs to make aluminium.** Each aluminium ion needs three electrons, and aluminium's atomic mass is 26.98, so one tonne requires

$$
\frac{10^{6}}{26.98} = 3.71\times10^{4} \text{ mol of Al}, \qquad \times 3 = 1.11\times10^{5} \text{ mol of electrons},
$$

which is

$$
1.11\times10^{5} \times 96{,}485 = 1.07\times10^{10} \text{ C}.
$$

A commercial cell runs at about 4.5 volts — of which only around 1.2 is the thermodynamic requirement and the rest is overpotential and resistance — so the energy is

$$
E = 1.07\times10^{10} \times 4.5 = 4.8\times10^{10} \text{ J} = 13{,}400 \text{ kWh per tonne}.
$$

Real smelters consume 13,000 to 15,000 kWh per tonne. The estimate is a one-line calculation from a constant Faraday measured in 1834, and it is why aluminium plants are sited next to hydroelectric dams, why the metal is sometimes called solid electricity, and why recycling it — which needs about 5% of that energy — is so overwhelmingly worthwhile.

Run the same arithmetic for any electrochemical process and it gives the floor on its energy cost. The gap between that floor and what a real cell uses is the overpotential, and reducing it is what [electrocatalysis](/chemistry/batteries/) is about.

## Cells That Keep Working

Volta's pile had a defect that limited every early experiment: within minutes the current collapsed. The cause is polarisation — hydrogen accumulates on one electrode and blocks it — and the fix, found by {{fig:daniell|John Frederic Daniell}} in 1836, is to give each electrode its own solution. Zinc in zinc sulfate, copper in copper sulfate, separated by a porous pot that passes ions and not reactants. Each electrode then has an unlimited supply of what it consumes, and the cell holds 1.1 volts for hours.

That architecture — two half-cells, each with its own chemistry, joined by something that conducts ions but keeps the reactants apart — is what a battery is. It powered the electric telegraph, and it is the ancestor of the lithium cell described under [batteries and electrolysers](/chemistry/batteries/).

{{fig:grove|William Robert Grove}} then ran the process backwards in 1839, which is a more radical idea than it looks. Having used electricity to split water, he supplied hydrogen to one platinum electrode and oxygen to the other and drew a current: chemical energy converted directly into electrical work, with no flame, no steam and no Carnot limit on the efficiency. His gas battery produced very little power, because the reaction happens only along the line where gas, liquid and metal meet, and the problem of giving that reaction enough area took most of the following century to solve.
