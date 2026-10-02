---
id: batteries
domain: chemistry
thread: electrochemistry
name: Batteries and Electrolysers
parent_ids:
  - electrode-potentials
era_emerged: 1859 – 2019
core_question: How much energy can be stored in a chemical reaction run through wires, and what limits how fast it goes in and out?

summary: |-
  A battery is a reaction kept from happening, with its electrons routed through a circuit. The constraints on one are therefore chemical: the voltage is fixed by the couple, the charge by how many electrons per kilogram the materials can supply, and Faraday's law converts the two into a specific energy that no engineering improves. Gaston Planté's lead–acid cell of 1859 stores about 35 watt-hours per kilogram and is still made in the hundreds of millions, because it is cheap and delivers enormous current.

  The modern cell works differently and the difference is the reason it exists. Rather than consuming the electrodes, lithium ions move back and forth between two host structures that accommodate them without dissolving — intercalation, found by Stanley Whittingham in the 1970s, given a usable cathode by John Goodenough in 1980 and a safe anode by Akira Yoshino in 1985. Nothing is destroyed, so the cell can be cycled a thousand times. The arithmetic still does not reach petrol: a good cell holds a fiftieth as much energy per kilogram as fuel, and after accounting for engine and motor efficiency the gap is about fourteenfold. That is the number electrification has to work around rather than overcome.

key_ideas:
  - term: Specific energy
    definition: >-
      Energy stored per kilogram. It follows from the cell voltage and the charge the materials can hold:
      one mole of electrons is 26.8 ampere-hours, so the mass of material per ampere-hour is fixed by
      chemistry.
    turning_point_id: plante-lead-acid
  - term: Intercalation
    definition: >-
      Inserting ions reversibly into the gaps of a host crystal structure, which expands slightly and is
      otherwise unchanged. Because nothing dissolves or is plated, the process can be reversed hundreds or
      thousands of times.
    turning_point_id: lithium-intercalation
  - term: Rocking-chair cell
    definition: >-
      A cell in which the same ion shuttles between two intercalation hosts and no metal is ever plated.
      It is what makes a lithium-ion battery safe enough to sell, at the cost of some capacity.
    turning_point_id: li-ion-commercialised
  - term: Solid electrolyte interphase
    definition: >-
      A thin film that forms on the negative electrode during the first charge, as the electrolyte
      decomposes. It is unavoidable, it consumes some lithium permanently, and if it is stable the cell
      lasts for years while if it is not the cell dies.
    turning_point_id: li-ion-commercialised
  - term: Round-trip efficiency
    definition: >-
      The fraction of energy put in that comes back out, lost mainly to overpotential. Lithium cells reach
      above 90%; water electrolysis followed by a fuel cell returns around 35 to 40%, which is why
      hydrogen is a poor battery and a reasonable fuel.
    turning_point_id: water-electrolysis-at-scale
  - term: Power against energy
    definition: >-
      How fast charge can be moved is a separate design problem from how much is stored, and the two
      conflict: thick electrodes hold more and conduct worse. A cell is built for one or the other.
    turning_point_id: fuel-cell-practical

turning_points:
  - id: plante-lead-acid
    date: "1859"
    type: TECHNIQUE-INVENTED
    title: Planté's rechargeable cell
    description: >-
      Gaston Planté winds two lead sheets separated by cloth into a coil, immerses them in sulfuric acid,
      and finds that passing a current one way builds up lead dioxide on one plate, after which the cell
      delivers that current back. It is the first practical secondary battery — rechargeable rather than
      consumed — and its chemistry gives slightly over two volts per cell, the highest of any aqueous
      system. It remains in production for starting engines, where its ability to deliver hundreds of
      amperes briefly matters more than its weight.
    contested: false
    sources:
      - citation: "Planté, G. (1860). Nouvelle pile secondaire d'une grande puissance. Comptes Rendus 50: 640–642."
        url: null
      - citation: "Kurzweil, P. (2010). Gaston Planté and his invention of the lead–acid battery. Journal of Power Sources 195: 4424–4434."
        url: null

  - id: leclanche-dry-cell
    date: 1866 – 1888
    type: TECHNIQUE-INVENTED
    title: A cell that can be carried
    description: >-
      Georges Leclanché's cell of 1866 uses zinc, manganese dioxide and an ammonium chloride solution, and
      Carl Gassner's modification of 1888 replaces the liquid with a paste, seals it in the zinc can that
      forms the negative electrode, and makes a battery that works in any orientation and does not spill.
      The dry cell made portable electricity ordinary — torches, doorbells, telephones, and later radios —
      and the format is essentially unchanged in the alkaline cells sold today.
    contested: false
    sources:
      - citation: "Gassner, C. (1888). Galvanic battery. US Patent 373,064."
        url: null
      - citation: "Linden, D. & Reddy, T. B. (2002). Handbook of Batteries, 3rd edition. McGraw-Hill."
        url: null

  - id: fuel-cell-practical
    date: 1932 – 1969
    type: TECHNIQUE-INVENTED
    title: Grove's idea made to work
    description: >-
      Francis Thomas Bacon spends thirty years on the problem Grove's gas battery had exposed — getting
      enough reaction area and keeping the electrolyte where it belongs — using porous nickel electrodes
      and pressurised alkali. By 1959 he had a 5 kW stack. The technology went to the Apollo spacecraft,
      where it supplied electricity and drinking water on the same reaction, and its descendants power
      buses and forklifts. Direct conversion escapes the Carnot limit in principle; in practice the
      overpotentials eat much of the advantage.
    contested: false
    sources:
      - citation: "Bacon, F. T. (1969). Fuel cells, past, present and future. Electrochimica Acta 14: 569–585."
        url: null
      - citation: "Perry, M. L. & Fuller, T. F. (2002). A historical perspective of fuel cell technology in the 20th century. Journal of the Electrochemical Society 149: S59–S67."
        url: null

  - id: lithium-intercalation
    date: 1972 – 1980
    type: MECHANISM-ESTABLISHED
    title: Ions stored in a crystal's gaps
    description: >-
      Stanley Whittingham finds that lithium ions insert reversibly between the layers of titanium
      disulfide, which expands slightly and is otherwise unchanged — so charge can be stored without
      dissolving or plating anything. The cell he built used lithium metal as the other electrode and grew
      dendrites that short-circuited it. John Goodenough then shows in 1980 that lithium cobalt oxide
      intercalates at four volts instead of two, nearly doubling the energy available, and does so in a
      structure stable enough to cycle.
    contested: false
    sources:
      - citation: "Whittingham, M. S. (1976). Electrical energy storage and intercalation chemistry. Science 192: 1126–1127."
        url: null
      - citation: "Mizushima, K., Jones, P. C., Wiseman, P. J. & Goodenough, J. B. (1980). LixCoO2: a new cathode material for batteries of high energy density. Materials Research Bulletin 15: 783–789."
        url: null

  - id: li-ion-commercialised
    date: 1985 – 1991
    type: TECHNIQUE-INVENTED
    title: Both electrodes host the ion
    description: >-
      Lithium metal is the ideal anode and unsafe: on charging it plates as whiskers that pierce the
      separator. Akira Yoshino replaces it with a carbon that intercalates lithium too, so the cell
      contains no lithium metal at any point and the ion simply shuttles between two hosts. Sony
      commercialised the result in 1991. Energy density has roughly tripled since, through engineering
      rather than new chemistry, and the three principals shared the 2019 Nobel Prize in Chemistry.
    contested: false
    sources:
      - citation: "Yoshino, A. (2012). The birth of the lithium-ion battery. Angewandte Chemie International Edition 51: 5798–5800."
        url: null
      - citation: "Nagaura, T. & Tozawa, K. (1990). Lithium ion rechargeable battery. Progress in Batteries and Solar Cells 9: 209–217."
        url: null

  - id: water-electrolysis-at-scale
    date: 1927 – 2022
    type: TECHNIQUE-INVENTED
    title: Making a fuel out of electricity
    description: >-
      Norsk Hydro operates alkaline electrolysers on Norwegian hydroelectricity from 1927, producing
      hydrogen for ammonia at a scale of tens of megawatts — then abandons them when natural gas becomes
      cheaper, which is the pattern electrolysis has followed ever since. Proton-exchange membranes and
      iridium catalysts have raised current densities and lowered capital cost, and the thermodynamic
      requirement of 1.23 V is still met in practice at 1.8 to 2.0 V, so a quarter to a third of the
      electricity is lost to overpotential before any hydrogen is used.
    contested: false
    sources:
      - citation: "Smolinka, T., Ojong, E. T. & Garche, J. (2015). Hydrogen production from renewable energies: electrolyzer technologies. In Electrochemical Energy Storage for Renewable Sources: 103–128. Elsevier."
        url: null
      - citation: "International Energy Agency (2019). The Future of Hydrogen. IEA, Paris."
        url: null

open_problems:
  - id: lithium-metal-anode
    name: Making the lithium-metal anode safe
    status: open
    status_note: Open as of 2026; dendrites remain the obstacle to the highest-energy chemistry available.
    description: >-
      Lithium metal holds nearly ten times the charge per gram of the graphite that replaced it, and a
      cell using it would gain perhaps 50 to 70% in specific energy. On charging, though, lithium does not
      plate evenly: it grows filaments that penetrate the separator, short the cell and, in a flammable
      electrolyte, start a fire. Solid electrolytes were expected to stop them mechanically and do not —
      dendrites propagate through ceramics along grain boundaries and cracks.
    why_hard: >-
      Deposition is unstable for the same reason frost grows as crystals: a protrusion concentrates the
      field and grows faster. Suppressing it requires controlling what happens in a nanometres-thick
      interphase that forms in the first charge, is buried between a metal and an electrolyte, and
      reforms after every cycle — the interface problem of [electrochemistry](/chemistry/electrochemistry/)
      in its most consequential form.
    unlocks: >-
      Electric aircraft, longer-range vehicles with smaller packs, and grid storage with less material per
      kilowatt-hour. It is the single change that would most alter what batteries can be used for.
    sources:
      - citation: "Lin, D., Liu, Y. & Cui, Y. (2017). Reviving the lithium metal anode for high-energy batteries. Nature Nanotechnology 12: 194–206."
        url: null
      - citation: "Albertus, P., Babinec, S., Litzelman, S. & Newman, A. (2018). Status and challenges in enabling the lithium metal electrode for high-energy batteries. Nature Energy 3: 16–21."
        url: null

applications:
  - area: Transport
    title: Why electrification happened in cars before aircraft
    description: >-
      A car can accept a heavy battery because it carries the weight on wheels and recovers energy when
      braking; an aircraft cannot, because weight must be lifted and the fuel fraction of a long-range
      airliner approaches half its take-off mass. The specific-energy gap between a cell and kerosene is
      therefore decisive for one application and merely inconvenient for the other, which is why road
      transport is electrifying and aviation is arguing about fuels.
    sources:
      - citation: "Schäfer, A. W. et al. (2019). Technological, economic and environmental prospects of all-electric aircraft. Nature Energy 4: 160–166."
        url: null
  - area: Grid operation
    title: Storage measured in hours, not kilograms
    description: >-
      For a battery that never moves, specific energy hardly matters and cost per kilowatt-hour,
      cycle life and the availability of materials matter enormously — which is why grid storage is
      drifting towards chemistries with worse energy density and better economics, including sodium and
      iron-based cells. The requirement is also different in kind: smoothing hours of solar output is a
      different problem from carrying a vehicle, and seasonal storage is a different problem again.
    sources:
      - citation: "Albertus, P., Manser, J. S. & Litzelman, S. (2020). Long-duration electricity storage applications, economics, and technologies. Joule 4: 21–32."
        url: null
  - area: Materials physics
    title: A working device at the edge of stability
    description: >-
      A charged lithium cobalt oxide electrode is thermodynamically unstable with respect to releasing
      oxygen, and a graphite electrode holding lithium is outside the electrolyte's stability window
      entirely. Both work because kinetics are slow and a passivating film forms, which makes a
      commercial battery a sustained metastable state — and makes its failure modes a solid-state
      chemistry problem rather than an engineering one.
    domain: physics
    field_id: solid-state-physics
    sources:
      - citation: "Goodenough, J. B. & Park, K.-S. (2013). The Li-ion rechargeable battery: a perspective. Journal of the American Chemical Society 135: 1167–1176."
        url: null

further_reading:
  - citation: "Goodenough, J. B. & Park, K.-S. (2013). The Li-ion rechargeable battery: a perspective. Journal of the American Chemical Society 135: 1167–1176."
    url: null
    note: Short, authoritative, and candid about what limits the cell and what does not.
  - citation: "Linden, D. & Reddy, T. B. (2002). Handbook of Batteries, 3rd edition. McGraw-Hill."
    url: null
    note: The reference for what every chemistry actually achieves, with the numbers rather than the claims.
  - citation: "Fletcher, S. (2011). Bottled Lightning. Hill & Wang."
    url: null
    note: A readable history of the lithium battery, including the industrial politics.
---

## A Reaction Held Apart

Every battery is the same trick. Take a reaction that would release energy if the reactants met, separate them so that they cannot, and provide the electrons with a longer route through a circuit. The voltage is then set by the free energy of the reaction and the capacity by how much reactant is present.

{{fig:plante|Gaston Planté}}'s lead–acid cell of 1859 was the first that could be *refilled* by reversing the current. Lead and lead dioxide in sulfuric acid give slightly over two volts — the highest of any aqueous chemistry, since beyond about that the water itself decomposes — and the materials are cheap and conduct superbly, so the cell can deliver hundreds of amperes for the few seconds needed to turn an engine. It is still manufactured in enormous numbers for that one job, and its specific energy, about 35 watt-hours per kilogram, has barely improved in 160 years.

The {{fig:leclanche|Leclanché}} cell and {{fig:gassner|Gassner}}'s sealed paste version made electricity portable, which mattered more at the time than anything about efficiency: a dry cell works in any orientation, does not spill acid, and is still essentially the alkaline cell sold today.

What neither could do was be recharged many times without destroying itself, because in both the electrodes dissolve and are rebuilt, and material does not return to where it came from.

## A Closer Look: The Arithmetic of a Battery

Three calculations fix what batteries can and cannot do.

**How much lithium is in a car.** One mole of electrons carries 96,485 coulombs, which is

$$
\frac{96{,}485}{3600} = 26.8 \text{ ampere-hours}.
$$

A 60 kWh pack at an average 3.7 V holds

$$
\frac{60{,}000}{3.7} = 16{,}200 \text{ Ah} = \frac{16{,}200}{26.8} = 605 \text{ mol of electrons}.
$$

Since each lithium ion carries one charge, 605 moles of lithium must shuttle back and forth, which at 6.94 g/mol is

$$
605 \times 6.94 = 4.2 \text{ kg of lithium}.
$$

Four kilograms, in a pack weighing 400. The lithium is a small part of the mass; most of it is the hosts that hold the ion, the electrolyte, the current collectors and the casing. That is why improving a battery is mostly about the materials the lithium sits in rather than the lithium itself, and why the metal's share of the cell's cost is modest.

**Why petrol still wins on weight.** Petrol stores about 46 MJ/kg. A good lithium-ion cell stores 250 Wh/kg, which is

$$
250 \times 3600 = 9.0\times10^{5} \text{ J/kg} = 0.9 \text{ MJ/kg},
$$

a factor of 51 less. The comparison is unfair, because an internal combustion engine wastes about three quarters of what it burns while an electric drivetrain delivers around 90%. Correcting for that:

$$
\frac{46 \times 0.25}{0.9 \times 0.90} = \frac{11.5}{0.81} = 14.
$$

A fourteenfold gap in useful energy per kilogram, not fifty. That number explains the pattern of electrification precisely. A car can carry a 400 kg pack, because wheels bear the weight and braking returns some energy; the gap costs range and is tolerable. An airliner cannot, because weight must be lifted continuously and fuel is nearly half its take-off mass — so a fourteenfold penalty is not a range problem but an impossibility, and aviation is arguing about fuels rather than batteries.

**Why hydrogen is not a battery.** Splitting water requires 1.23 V thermodynamically; a working electrolyser needs 1.8 to 2.0 V because of the overpotentials described under [electrode potentials](/chemistry/electrode-potentials/). So about a third of the electricity is lost on the way in. Running the hydrogen back through a fuel cell loses a comparable fraction again, giving a round trip of roughly

$$
0.65 \times 0.55 \approx 0.36,
$$

against above 90% for a lithium cell. Storing electricity as hydrogen therefore throws away nearly two thirds of it. Hydrogen is a reasonable *fuel* — it has excellent energy per kilogram and terrible energy per litre — and a poor battery, and the arithmetic, not the engineering, is why.

## Nothing Dissolves

The change that made the rechargeable cell of modern life possible was to stop consuming the electrodes.

{{fig:whittingham|Stanley Whittingham}}, working at Exxon in the 1970s on the assumption that oil would run short, found that lithium ions slide reversibly between the layers of titanium disulfide. The host expands by a few per cent and is otherwise unaltered; no material dissolves, nothing is plated, and the process can be run backwards indefinitely. His cell paired it with lithium metal and caught fire.

{{fig:goodenough|John Goodenough}} supplied the cathode that made it worth doing. Lithium cobalt oxide intercalates lithium at about 4 V rather than 2, and since energy is charge times voltage, that nearly doubles what a given amount of charge is worth. He was 57, and published the work in a materials bulletin after the battery industry showed no interest.

{{fig:yoshino|Akira Yoshino}} removed the fire. Replace the lithium metal anode with a carbon that also intercalates lithium, and the cell contains no lithium metal at any stage of its life: the ion simply rocks between two hosts. Capacity is lower than metal would give, and the cell does not burn down. Sony sold the first in 1991, and the three shared the Nobel Prize in Chemistry in 2019, nearly forty years after the key papers.

The remaining prize is to put the metal back. Lithium metal holds nearly ten times the charge per gram of graphite, and a cell using it would gain half again in specific energy — the difference between a 300-mile car and a 450-mile one, or between an electric aircraft being impossible and merely difficult. What stands in the way is that lithium does not plate smoothly: a bump concentrates the electric field and grows faster than its surroundings, so deposition runs away into filaments that pierce the separator. Solid electrolytes were expected to block them mechanically and do not, because the filaments find grain boundaries. That is the open problem above, and it is the interface problem of this whole thread in its most expensive form.
