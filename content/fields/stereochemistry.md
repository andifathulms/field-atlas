---
id: stereochemistry
domain: chemistry
thread: synthesis
name: Stereochemistry
parent_ids:
  - organic-structure-theory
era_emerged: 1848 – 1961
core_question: How can two substances with the same atoms joined in the same order be different, and why does a living organism treat them as different substances?

summary: |-
  Structure theory says which atom is bonded to which. It does not say that two molecules with identical connectivity can be non-superimposable mirror images, like a pair of gloves — and that such a pair can differ in no measurable property except the direction in which they rotate polarised light, and in how they interact with anything else that is handed.

  Louis Pasteur found the first case in 1848, in crystals of a tartrate salt that came in two mirror-image shapes which he sorted by hand under a lens and which rotated light in opposite directions. Twenty-six years later Jacobus van 't Hoff and Joseph Le Bel supplied the reason: carbon's four bonds point to the corners of a tetrahedron, so a carbon carrying four different groups exists in two forms that cannot be rotated into each other. The consequence is biological rather than chemical. Organisms are built from one hand of each molecule and their receptors and enzymes are handed in turn, so the two mirror images of a drug can be a medicine and a poison — a point established at a cost of around ten thousand damaged children when thalidomide was marketed as a mixture.

key_ideas:
  - term: Optical activity
    definition: >-
      Rotation of the plane of polarised light by a substance. It is the one physical property that
      distinguishes mirror-image molecules, which is why the entire subject was discovered through a
      polarimeter.
    turning_point_id: pasteur-tartrate
  - term: Chirality
    definition: >-
      The property of not being superimposable on one's own mirror image. A molecule with a carbon
      bearing four different groups is chiral; the two forms are enantiomers.
    turning_point_id: vant-hoff-le-bel-tetrahedral
  - term: Enantiomer and diastereomer
    definition: >-
      Enantiomers are mirror images and identical in every property measured in an unhanded
      environment. Diastereomers differ at some but not all centres, are not mirror images, and differ
      in melting point, solubility and everything else — which is how enantiomers are separated, by
      converting them temporarily into diastereomers.
    turning_point_id: pasteur-tartrate
  - term: Relative and absolute configuration
    definition: >-
      Which arrangement a molecule has *relative* to a reference compound can be established
      chemically; which of the two it actually is cannot, and had to wait for a physical method.
      Fischer's assignment of sugars was relative, and chosen by a coin-flip that turned out lucky.
    turning_point_id: bijvoet-absolute-configuration
  - term: R and S
    definition: >-
      A nomenclature that names a configuration from the structure alone: rank the four groups by
      atomic number, view with the lowest pointing away, and read the remaining three as clockwise or
      anticlockwise. It replaced a system of comparisons with an algorithm.
    turning_point_id: cip-nomenclature
  - term: Stereospecific biology
    definition: >-
      Enzymes and receptors are themselves chiral, built from one hand of amino acid, so they bind the
      two enantiomers of anything else differently. The consequence is that handedness is a
      pharmacological variable, not a detail.
    turning_point_id: thalidomide

turning_points:
  - id: pasteur-tartrate
    date: 1848 – 1860
    type: SUBSTANCE-ISOLATED
    title: Pasteur sorts two crystals by hand
    description: >-
      Tartaric acid from wine rotates polarised light; the chemically identical racemic acid from the
      same casks does not. Louis Pasteur, aged 25, examines crystals of the sodium ammonium salt under
      a lens and finds two shapes, each the mirror image of the other. He separates them with tweezers,
      dissolves each pile, and finds that one rotates light to the right, the other to the left by
      exactly as much, and a mixture not at all. He concluded that the molecules themselves must be
      mirror images — a claim about invisible structure from a measurement of light and a pair of
      tweezers.
    contested: false
    sources:
      - citation: "Pasteur, L. (1848). Mémoire sur la relation qui peut exister entre la forme cristalline et la composition chimique. Comptes Rendus 26: 535–538."
        url: null
      - citation: "Flack, H. D. (2009). Louis Pasteur's discovery of molecular chirality and spontaneous resolution in 1848. Acta Crystallographica A 65: 371–389."
        url: null

  - id: vant-hoff-le-bel-tetrahedral
    date: "1874"
    type: MECHANISM-ESTABLISHED
    title: Carbon's bonds point to a tetrahedron
    description: >-
      Jacobus Henricus van 't Hoff, then 22, and Joseph Le Bel independently propose that carbon's four
      bonds are directed to the corners of a tetrahedron. The proposal explains optical activity at
      once: a carbon with four different substituents can be arranged two ways that are mirror images
      and cannot be superimposed, and the number of optically active isomers a compound shows matches
      the number of such centres. Hermann Kolbe denounced the paper as fanciful speculation by someone
      with no taste for exact research.
    contested: false
    sources:
      - citation: "van 't Hoff, J. H. (1874). Sur les formules de structure dans l'espace. Archives Néerlandaises des Sciences Exactes et Naturelles 9: 445–454."
        url: null
      - citation: "Le Bel, J. A. (1874). Sur les relations qui existent entre les formules atomiques des corps organiques. Bulletin de la Société Chimique de Paris 22: 337–347."
        url: null

  - id: fischer-sugar-configurations
    date: 1888 – 1894
    type: MECHANISM-ESTABLISHED
    title: Fischer assigns the sugars
    description: >-
      Glucose has four chiral centres, so sixteen stereoisomers are possible and all of them exist.
      Emil Fischer works out which is which by a campaign of controlled degradations and
      interconversions, deducing relative configurations from which pairs give identical products, and
      represents the results in a projection that bears his name. He had no way to determine absolute
      configuration, so he chose one arbitrarily for the reference sugar and said so. The work took six
      years and defined carbohydrate chemistry.
    contested: false
    sources:
      - citation: "Fischer, E. (1891). Über die Configuration des Traubenzuckers und seiner Isomeren. Berichte der Deutschen Chemischen Gesellschaft 24: 1836–1845, 2683–2687."
        url: null
      - citation: "Lichtenthaler, F. W. (1992). Emil Fischer's proof of the configuration of sugars. Angewandte Chemie International Edition 31: 1541–1556."
        url: null

  - id: bijvoet-absolute-configuration
    date: "1951"
    type: TECHNIQUE-INVENTED
    title: Which hand it actually is
    description: >-
      Every chemical method gives configuration relative to a reference; nothing available before 1951
      could say whether the reference itself was left or right. Johannes Bijvoet exploits anomalous
      X-ray scattering — a heavy atom absorbs and re-emits the X-rays slightly out of phase, which
      breaks the symmetry that makes a crystal and its mirror image diffract identically — and
      determines the absolute configuration of a rubidium tartrate. Fischer's arbitrary choice of
      sixty years earlier turned out to have been correct, with a probability of one half.
    contested: false
    sources:
      - citation: "Bijvoet, J. M., Peerdeman, A. F. & van Bommel, A. J. (1951). Determination of the absolute configuration of optically active compounds by means of X-rays. Nature 168: 271–272."
        url: null
      - citation: "Flack, H. D. & Bernardinelli, G. (2008). The use of X-ray crystallography to determine absolute configuration. Chirality 20: 681–690."
        url: null

  - id: cip-nomenclature
    date: 1956 – 1966
    type: TECHNIQUE-INVENTED
    title: A name that states a configuration
    description: >-
      Robert Cahn, Christopher Ingold and Vladimir Prelog devise a procedure that assigns a label to a
      chiral centre from the structure alone: rank the four attached groups by atomic number, working
      outward where there are ties, orient the lowest-ranked away from the viewer, and record whether
      the remaining three descend clockwise, R, or anticlockwise, S. Unlike the older D and L system it
      requires no reference compound and no knowledge of how the substance was made, and it is
      unambiguous for arbitrarily complicated molecules.
    contested: false
    sources:
      - citation: "Cahn, R. S., Ingold, C. & Prelog, V. (1966). Specification of molecular chirality. Angewandte Chemie International Edition 5: 385–415."
        url: null
      - citation: "Prelog, V. (1976). Chirality in chemistry. Science 193: 17–24."
        url: null

  - id: thalidomide
    date: 1957 – 1961
    type: MECHANISM-ESTABLISHED
    title: Thalidomide, and handedness as a regulated quantity
    description: >-
      Thalidomide was sold from 1957 as a sedative safe in pregnancy, as a mixture of both enantiomers.
      Around ten thousand children were born with severe limb malformations before it was withdrawn in
      1961. One enantiomer is the sedative and the other is the teratogen, and — the detail that makes
      the case harder — the two interconvert in the body, so marketing the single good hand would not
      have prevented the harm. The episode transformed drug regulation and made stereochemistry a
      matter that regulators specify rather than chemists mention.
    contested: true
    contested_note: >-
      The mechanism of the teratogenicity was unknown for fifty years and is still not fully settled; a
      2010 study identified binding to the protein cereblon as central, and how that produces the
      specific pattern of limb defects remains under investigation. The textbook claim that one
      enantiomer is simply safe is wrong because of in-vivo racemisation, and is still widely repeated.
    sources:
      - citation: "Blaschke, G., Kraft, H. P., Fickentscher, K. & Köhler, F. (1979). Chromatographic separation of racemic thalidomide and teratogenic activity of its enantiomers. Arzneimittel-Forschung 29: 1640–1642."
        url: null
      - citation: "Ito, T. et al. (2010). Identification of a primary target of thalidomide teratogenicity. Science 327: 1345–1350."
        url: null
      - citation: "Vargesson, N. (2015). Thalidomide-induced teratogenesis: history and mechanisms. Birth Defects Research C 105: 140–156."
        url: null

open_problems:
  - id: origin-of-homochirality
    name: Why life uses one hand
    status: open
    status_note: Open as of 2026; several amplification mechanisms work in the laboratory and none is established as the historical route.
    description: >-
      Proteins are built from L-amino acids and nucleic acids from D-sugars, essentially without
      exception, while ordinary chemistry produces both hands in equal amounts. Something broke the
      symmetry before or during the origin of life and then amplified the imbalance to completeness.
      Candidates include circularly polarised starlight, crystal surfaces such as quartz, the
      weak interaction's intrinsic handedness, and autocatalytic reactions that amplify a tiny initial
      excess — the last demonstrated in the laboratory, turning an excess of 0.00005% into near
      complete purity.
    why_hard: >-
      Every proposed mechanism is sufficient in principle and none leaves a trace that four billion
      years later could distinguish it from the others. Meteorites do show small excesses of L-amino
      acids, which is suggestive and not decisive, since terrestrial contamination is difficult to
      exclude and the excesses are not uniform across amino acids.
    unlocks: >-
      Whether life's handedness was determined by physics, by chance amplified, or by the particular
      chemistry of its surroundings — which bears on how similar life elsewhere would be, and is one of
      the few questions about the origin of life that has a crisp yes-or-no structure.
    sources:
      - citation: "Soai, K., Shibata, T., Morioka, H. & Choji, K. (1995). Asymmetric autocatalysis and amplification of enantiomeric excess of a chiral molecule. Nature 378: 767–768."
        url: null
      - citation: "Blackmond, D. G. (2010). The origin of biological homochirality. Cold Spring Harbor Perspectives in Biology 2: a002147."
        url: null

applications:
  - area: Medicine
    title: One enantiomer, by regulation
    description: >-
      Since the 1990s regulators have required the stereochemistry of a drug candidate to be
      characterised and, usually, a single enantiomer to be developed. Of the small-molecule drugs
      approved in recent years the large majority are single enantiomers, which is why asymmetric
      synthesis became an industrial priority. Several older drugs have been reintroduced as purified
      single enantiomers, with mixed clinical benefit and reliable commercial benefit.
    domain: biology
    field_id: pharmacology
    sources:
      - citation: "Agranat, I., Caner, H. & Caldwell, J. (2002). Putting chirality to work: the strategy of chiral switches. Nature Reviews Drug Discovery 1: 753–768."
        url: null
  - area: Flavour and scent
    title: The same molecule, two smells
    description: >-
      The two enantiomers of carvone smell of spearmint and of caraway; those of limonene of orange and
      of turpentine. Since odour receptors are proteins and therefore chiral, this is expected, and it is
      the most immediate demonstration available that handedness is a real physical difference rather
      than a bookkeeping convention — one that a person can verify with two bottles.
    sources:
      - citation: "Leitereg, T. J., Guadagni, D. G., Harris, J., Mon, T. R. & Teranishi, R. (1971). Chemical and sensory data supporting the difference between the odors of the enantiomeric carvones. Journal of Agricultural and Food Chemistry 19: 785–787."
        url: null
  - area: Geometry
    title: Chirality as a mathematical property
    description: >-
      Handedness is a question about whether a figure can be brought onto its mirror image by rotation,
      which is a statement about the symmetry group of the object and the space it sits in — and the
      answer depends on the dimension, since a two-dimensional chiral figure becomes superimposable if
      lifted into three. Molecular chirality, knotted and linked molecules, and the topological
      classification of mechanically interlocked structures are read in exactly these terms.
    domain: math
    field_id: geometric-topology
    sources:
      - citation: "Flapan, E. (2000). When Topology Meets Chemistry. Cambridge University Press."
        url: null

further_reading:
  - citation: "Eliel, E. L. & Wilen, S. H. (1994). Stereochemistry of Organic Compounds. Wiley."
    url: null
    note: The standard reference, thorough on nomenclature and on how configurations are actually determined.
  - citation: "Flack, H. D. (2009). Louis Pasteur's discovery of molecular chirality. Acta Crystallographica A 65: 371–389."
    url: null
    note: What Pasteur did and did not establish in 1848, from the original notebooks.
  - citation: "Vargesson, N. (2015). Thalidomide-induced teratogenesis. Birth Defects Research C 105: 140–156."
    url: null
    note: The mechanism, the regulatory consequences, and the parts still unknown.
---

## A Difference With Almost No Signature

Tartaric acid, crystallised from wine lees, rotates the plane of polarised light to the right. Racemic acid, found in the same casks, is identical by every analysis and rotates light not at all. In 1848 a 25-year-old {{fig:louis-pasteur|Louis Pasteur}} looked at crystals of the sodium ammonium salt of the second under a lens and saw that they came in two shapes — each the mirror image of the other, distinguished by small facets on opposite sides.

He separated them with tweezers into two piles, dissolved each, and put both in a polarimeter. One solution rotated light to the right by the amount tartaric acid does; the other rotated it to the left by exactly as much; an equal mixture did nothing. So racemic acid is a one-to-one mixture of two substances that are mirror images, and the handedness survives dissolution — which means it belongs to the molecules and not to the crystal.

This is an inference about molecular architecture made in 1848, drawn from the shape of crystals and the rotation of light, with no theory of structure in existence. Pasteur then did something that mattered even more for biology: he found that a mould fed on the mixture consumed one hand and left the other untouched.

## Four Bonds to the Corners of a Tetrahedron

The explanation waited until 1874 and arrived twice in the same year. {{fig:vant-hoff|Jacobus Henricus van 't Hoff}}, aged 22, and {{fig:le-bel|Joseph Le Bel}} independently proposed that carbon's four bonds are not drawn in a plane, as the structural formulas of the day implied, but point towards the corners of a tetrahedron.

Everything follows. A carbon carrying four *different* groups can be assembled in two ways related as object and mirror image, and no rotation brings one onto the other — exactly like a pair of hands. A molecule with one such centre is optically active and comes in two forms; a molecule with $n$ independent centres has up to $2^n$ stereoisomers. Glucose has four, so sixteen are possible, and all sixteen exist.

{{fig:kolbe|Hermann Kolbe}}'s review of the proposal is worth quoting as a reminder of what a correct idea can sound like to a competent contemporary: he complained of a Dr J. H. van 't Hoff, employed at a veterinary college, who had no taste for exact chemical research and had mounted his Pegasus to proclaim how, on the chemical Parnassus, atoms appeared to him arranged in space.

{{fig:emil-fischer|Emil Fischer}} then did the work that made the theory usable. Starting in 1888, he established which of the sixteen possible glucose stereoisomers each known sugar was, by a long campaign of degradations and interconversions in which two different sugars giving the same product constrains both. It took six years. He could determine configurations only *relative* to one another, so he fixed the reference arbitrarily, stating plainly that it was a choice — and it was fifty-seven years before anyone could check whether he had guessed right.

## A Closer Look: Counting Stereoisomers, and the One Fact That Settles Which Is Which

Two pieces of arithmetic make this subject concrete.

**How many isomers.** With $n$ chiral centres there are at most $2^{n}$ stereoisomers, falling into $2^{n-1}$ mirror-image pairs. For glucose, $2^{4} = 16$. The isomers divide into two classes with completely different behaviour:

- **Enantiomers** — full mirror images, differing at every centre. They have *identical* melting points, boiling points, solubilities, spectra and densities. In an unhanded environment nothing distinguishes them but the sign of their optical rotation.
- **Diastereomers** — differing at some centres and not others. They are not mirror images, so they differ in everything: melting point, solubility, chromatographic retention, reaction rate.

That distinction is the basis of every separation. Enantiomers cannot be separated by distillation or crystallisation, because the relevant properties are equal. Attach a handed group to both, though, and the pair becomes diastereomers, which can be separated by ordinary means; remove the group afterwards and the enantiomers are resolved. Pasteur's mould did the same thing biologically — a chiral enzyme consuming one hand — and {{fig:louis-pasteur|Pasteur}}'s tweezers worked only because this particular salt happens to crystallise into separate handed crystals, which is rare.

**Relative versus absolute.** Chemistry can establish that two compounds have the *same* arrangement, by converting one into the other without disturbing the centre. It cannot say which arrangement that is. Mirror images are identical in energy, so no thermodynamic measurement distinguishes them, and a crystal and its mirror image diffract X-rays identically — a result known as Friedel's law.

{{fig:bijvoet|Johannes Bijvoet}} found the loophole in 1951. If the crystal contains an atom heavy enough to absorb the X-rays being used, that atom re-emits them slightly out of phase, and the small shift breaks the symmetry between a reflection and its opposite. Measuring the two carefully enough distinguishes the structure from its mirror image absolutely. Applied to a rubidium tartrate, it showed that {{fig:emil-fischer|Fischer}}'s arbitrary assignment of 1891 had been right — a coin flip, recorded as such, that held up for sixty years.

{{fig:prelog|Vladimir Prelog}}, with Cahn and Ingold, then removed the need for reference compounds entirely. Rank the four groups attached to a centre by atomic number; look along the bond from the centre with the lowest-ranked group pointing away; read the remaining three in order. Clockwise is R, anticlockwise is S. The rule is an algorithm, applies to arbitrarily complicated molecules, and turns a configuration into something a name can carry.

## Why It Matters Outside Chemistry

An enantiomer pair differs in no property measurable in an unhanded environment. A living organism is not an unhanded environment. Proteins are built from L-amino acids only, so every enzyme and every receptor is itself chiral, and binds the two hands of anything else differently — often by factors of thousands.

The consequences are ordinary and occasionally terrible. The two enantiomers of carvone smell of spearmint and of caraway, which anyone can check with two bottles. One enantiomer of a beta-blocker does the work and the other contributes side effects. And thalidomide, marketed from 1957 as a sedative safe in pregnancy and sold as a mixture of both hands, left around ten thousand children with severe limb malformations before withdrawal in 1961. One hand is the sedative; the other is the teratogen.

The case is usually told as an argument for marketing single enantiomers, and the real lesson is less comfortable: thalidomide's two forms interconvert in the body within hours, so administering the pure beneficial enantiomer would not have prevented the harm. What the episode did establish is regulatory. Stereochemistry is now something a drug application must specify, and the demand for single-enantiomer synthesis is what made [asymmetric catalysis](/chemistry/catalysis/) an industrial priority rather than an academic one.

Which leaves the question the subject has not answered. Ordinary chemistry makes both hands in equal amounts; life uses one. Why, and how the imbalance was amplified to completeness, is the open problem above, and it is the one place where a question about molecular handedness turns into a question about the origin of life.
