import type { BuildSeed } from "./seed-types";

const noOperatingSystems = {
  operatingSystems: [],
} satisfies Pick<BuildSeed, "operatingSystems">;

export const liesOfPBuildSeeds: BuildSeed[] = [
  {
    slug: "motivity-puppet-axe-bruiser",
    name: "Motivity Puppet Axe Bruiser",
    primaryArchetype: "Motivity Heavy Weapon",
    summary:
      "A crushing Lies of P route built around Motivity scaling, huge stagger pressure, and confidence in slow but decisive punish windows.",
    description:
      "This build embraces the heavy side of Lies of P. You invest in Motivity, build around a hard-hitting assembled weapon, and let stagger plus fable burst carry boss phases once you have learned the timings.",
    playstyle:
      "Absorb the pace of the fight, land heavy punishes after clean guards or dodges, and cash out every stagger state with brutal Motivity damage.",
    difficulty: "INTERMEDIATE",
    primaryMode: "PVE",
    combatStyle: "MELEE",
    stealthRating: 0,
    loudRating: 9,
    hackingRating: 0,
    mobilityRating: 4,
    survivabilityRating: 9,
    burstRating: 10,
    utilityRating: 6,
    pveRating: 10,
    pvpRating: 0,
    progressionCurve:
      "Starts sturdy and keeps getting better as Capacity and Motivity remove the early weight pain points from the route.",
    difficultyNotes:
      "Very rewarding, but only if you avoid greedy extra swings and trust single heavy conversions when they are enough.",
    isFeatured: true,
    sortOrder: 1,
    attributeStats: [
      { key: "vitality", label: "Vitality", value: 30 },
      { key: "vigor", label: "Vigor", value: 24 },
      { key: "capacity", label: "Capacity", value: 34 },
      { key: "motivity", label: "Motivity", value: 40 },
      { key: "technique", label: "Technique", value: 10 },
      { key: "advance", label: "Advance", value: 8 },
    ],
    supportStats: [
      { key: "stagger", label: "Stagger", value: 98 },
      { key: "guard-retain", label: "Guard Retain", value: 88 },
      { key: "fable-burst", label: "Fable Burst", value: 92 },
      { key: "mobility", label: "Mobility", value: 38 },
    ],
    weapons: [
      {
        name: "Live Puppet's Axe Blade + Krat Baton Handle",
        slot: "Primary assembly",
        scalingOrProfile: "High Motivity stagger setup",
        description: "A devastating combination for players who want hard stagger and huge punish value.",
      },
      {
        name: "Holy Sword of the Ark",
        slot: "Boss weapon swap",
        scalingOrProfile: "Range control and heavy burst",
        description: "An alternate heavy route with strong bossing comfort and impressive reach.",
      },
    ],
    armorPieces: [
      {
        name: "LADA heavy frame",
        slot: "Frame",
        effect: "Adds the defensive backbone a slow weapon route wants.",
        weightClass: "Heavy",
      },
      {
        name: "Shock-resistant converter",
        slot: "Converter",
        effect: "A practical defensive layer for rough boss elements.",
        weightClass: "Heavy",
      },
    ],
    talismans: [
      {
        name: "Carrier's Amulet +1",
        slot: "Amulet",
        effect: "Solves a huge portion of the route's weight tension.",
      },
      {
        name: "Patience Amulet",
        slot: "Amulet",
        effect: "Improves the defensive side of a heavy trade-focused route.",
      },
    ],
    spells: [
      {
        name: "Fulminis",
        school: "Legion Arm",
        description: "A brutal close-range add-on for stagger or burst sequences.",
      },
    ],
    perks: [
      {
        name: "Stagger window upgrades",
        tree: "P-Organ",
        description: "Increase how much value every heavy opening returns.",
      },
      {
        name: "Pulse Cell and guard retention nodes",
        tree: "P-Organ",
        description: "Keep the route stable while learning tougher boss strings.",
      },
    ],
    cyberware: [
      {
        name: "Destruction Grindstone",
        slot: "Special grinder",
        description: "Pushes heavy burst even further during the safest punish windows.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Respect weight and stamina first",
        description:
          "The route improves dramatically once Capacity catches up to your weapon ambitions.",
      },
      {
        stage: "MID",
        title: "Turn heavy punishes into guaranteed staggers",
        description:
          "Midgame is when the build starts feeling unfair, because every clean read creates huge posture pressure.",
      },
      {
        stage: "LATE",
        title: "Explode every groggy state",
        description:
          "Endgame Motivity is about making each stagger state feel like a full phase skip.",
      },
    ],
    strengths: [
      "Enormous stagger and burst potential.",
      "Very strong once boss patterns are understood.",
      "Feels appropriately weighty and powerful for a heavy Lies of P route.",
    ],
    weaknesses: [
      "Low mobility and expensive recovery if you overcommit.",
      "Weight management matters more than on lighter builds.",
      "Mistimed heavy strings are punished hard on fast bosses.",
    ],
    tags: [
      { slug: "motivity", weight: 3 },
      { slug: "melee", weight: 2 },
      { slug: "stagger", weight: 3 },
      { slug: "tank", weight: 2 },
      { slug: "boss-burst", weight: 2 },
      { slug: "pve", weight: 3 },
    ],
    alternatives: [
      {
        slug: "technique-two-dragons-maestro",
        reason: "A faster, more reactive route if you want high-skill deflect play instead of heavy trades.",
      },
      {
        slug: "aegis-perfect-guard-warden",
        reason: "Keeps strong defense but plays more around guard confidence than pure heavy offense.",
      },
    ],
    ...noOperatingSystems,
  },
  {
    slug: "technique-two-dragons-maestro",
    name: "Technique Two Dragons Maestro",
    primaryArchetype: "Technique Counter Specialist",
    summary:
      "A high-ceiling technique route focused on reactive play, rapid boss punishes, and the stylish payoff of clean counter timing.",
    description:
      "This build is for players who want Lies of P to feel elegant and exacting. It centers on quicker handling, strong reaction tools, and the confidence to win through timing rather than pure durability.",
    playstyle:
      "Stay just inside danger, answer boss strings with clean guards or evasions, and cash out short but high-value punishes before resetting.",
    difficulty: "ADVANCED",
    primaryMode: "PVE",
    combatStyle: "MELEE",
    stealthRating: 0,
    loudRating: 8,
    hackingRating: 0,
    mobilityRating: 10,
    survivabilityRating: 5,
    burstRating: 9,
    utilityRating: 6,
    pveRating: 9,
    pvpRating: 0,
    progressionCurve:
      "Feels merely fast at first, then becomes exceptional once the weapon, Technique scaling, and P-Organ quality-of-life nodes all click together.",
    difficultyNotes:
      "The highest execution route in the new Lies of P roster. It rewards confidence and punishes panic.",
    isFeatured: true,
    sortOrder: 2,
    attributeStats: [
      { key: "vitality", label: "Vitality", value: 24 },
      { key: "vigor", label: "Vigor", value: 24 },
      { key: "capacity", label: "Capacity", value: 24 },
      { key: "motivity", label: "Motivity", value: 10 },
      { key: "technique", label: "Technique", value: 38 },
      { key: "advance", label: "Advance", value: 8 },
    ],
    supportStats: [
      { key: "reaction", label: "Reaction Window", value: 96 },
      { key: "mobility", label: "Mobility", value: 98 },
      { key: "counter-burst", label: "Counter Burst", value: 90 },
      { key: "forgiveness", label: "Forgiveness", value: 34 },
    ],
    weapons: [
      {
        name: "Two Dragons Sword",
        slot: "Primary",
        scalingOrProfile: "Technique counter play",
        description: "A weapon that rewards timing mastery and makes the route feel unlike any simple dodge-and-hit setup.",
      },
      {
        name: "Booster Glaive Blade + Dancer's Curved Sword Handle",
        slot: "Assembly swap",
        scalingOrProfile: "Fast reach pressure",
        description: "An alternate agile setup if you want cleaner spacing with less parry-specific commitment.",
      },
    ],
    armorPieces: [
      {
        name: "Belford light parts",
        slot: "Defensive parts",
        effect: "Keep the build agile enough to preserve its real strength: freedom of movement.",
        weightClass: "Light",
      },
    ],
    talismans: [
      {
        name: "Conquering Amulet",
        slot: "Amulet",
        effect: "Boosts damage after successful perfect guards and keeps the route honest to its identity.",
      },
      {
        name: "Ghost Walk Amulet",
        slot: "Amulet",
        effect: "Adds more movement flexibility in difficult boss strings.",
      },
    ],
    spells: [
      {
        name: "Puppet String",
        school: "Legion Arm",
        description: "Creates openings, closes distance, and preserves tempo against mobile enemies.",
      },
    ],
    perks: [
      {
        name: "Perfect guard recovery nodes",
        tree: "P-Organ",
        description: "Support the exact reactive identity this route is trying to maximize.",
      },
      {
        name: "Fatal attack and mobility upgrades",
        tree: "P-Organ",
        description: "Turn each correctly played boss sequence into more meaningful reward.",
      },
    ],
    cyberware: [
      {
        name: "Acid Grindstone",
        slot: "Special grinder",
        description: "A simple way to amplify fast punish windows against durable targets.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Build comfort before showing off",
        description:
          "The route gets much stronger when you first stabilize stamina, survivability, and movement feel.",
      },
      {
        stage: "MID",
        title: "Learn to trust short, precise punishes",
        description:
          "Midgame Technique is about discipline: a few clean answers are worth more than one greedy combo.",
      },
      {
        stage: "LATE",
        title: "Play the counter game for real",
        description:
          "Endgame Two Dragons rewards true boss familiarity with some of the best reactive damage in the game.",
      },
    ],
    strengths: [
      "Excellent mobility and stylish boss control through reaction-based play.",
      "Very high payoff when timing and encounter knowledge are strong.",
      "Feels distinct from both heavy Motivity and elemental Advance routes.",
    ],
    weaknesses: [
      "Low forgiveness for hesitation or panic.",
      "Less stable than heavier builds when forced into prolonged defense.",
      "Wants real player skill, not just good numbers.",
    ],
    tags: [
      { slug: "technique", weight: 3 },
      { slug: "mobility", weight: 3 },
      { slug: "precision", weight: 3 },
      { slug: "perfect-guard", weight: 2 },
      { slug: "execution-heavy", weight: 3 },
      { slug: "pve", weight: 3 },
    ],
    alternatives: [
      {
        slug: "motivity-puppet-axe-bruiser",
        reason: "A simpler heavy route if you want raw stagger instead of reactive finesse.",
      },
      {
        slug: "advance-alchemical-saboteur",
        reason: "Keeps speed and control but adds elemental layering and safer ranged utility.",
      },
    ],
    ...noOperatingSystems,
  },
  {
    slug: "advance-alchemical-saboteur",
    name: "Advance Alchemical Saboteur",
    primaryArchetype: "Advance Elemental Specialist",
    summary:
      "A status-and-element route built around Advance scaling, grindstones, and swapping elemental tools to match the encounter.",
    description:
      "This build turns Lies of P into a toolbox game. Instead of relying on one dominant physical answer, it wins by matching elements, layering status, and keeping enough utility online to adapt mid-run.",
    playstyle:
      "Prepare the right element for the target, use Legion tools to disrupt awkward patterns, and let elemental application push the fight toward safer punishes.",
    difficulty: "INTERMEDIATE",
    primaryMode: "PVE",
    combatStyle: "HYBRID",
    stealthRating: 0,
    loudRating: 7,
    hackingRating: 0,
    mobilityRating: 7,
    survivabilityRating: 6,
    burstRating: 8,
    utilityRating: 10,
    pveRating: 9,
    pvpRating: 0,
    progressionCurve:
      "Gets better the more enemy-specific preparation you bring. It starts flexible and ends as one of the most adaptable bossing routes in the roster.",
    difficultyNotes:
      "Not especially hard mechanically, but it asks for more encounter knowledge and gear swapping than the other Lies builds.",
    isFeatured: false,
    sortOrder: 3,
    attributeStats: [
      { key: "vitality", label: "Vitality", value: 24 },
      { key: "vigor", label: "Vigor", value: 22 },
      { key: "capacity", label: "Capacity", value: 22 },
      { key: "motivity", label: "Motivity", value: 10 },
      { key: "technique", label: "Technique", value: 16 },
      { key: "advance", label: "Advance", value: 38 },
    ],
    supportStats: [
      { key: "element-match", label: "Element Match", value: 98 },
      { key: "status-pressure", label: "Status Pressure", value: 90 },
      { key: "utility", label: "Utility", value: 96 },
      { key: "simplicity", label: "Simplicity", value: 46 },
    ],
    weapons: [
      {
        name: "Acidic Crystal Spear",
        slot: "Primary",
        scalingOrProfile: "Advance elemental thrusting",
        description: "A precise elemental weapon that keeps the route dangerous and adaptable.",
      },
      {
        name: "Electric Coil Stick",
        slot: "Shock option",
        scalingOrProfile: "Electric burst and stagger support",
        description: "Excellent for puppet-heavy encounters and aggressive openings.",
      },
      {
        name: "Salamander Dagger",
        slot: "Fire option",
        scalingOrProfile: "Fast elemental application",
        description: "A strong answer whenever fire is the cleanest weakness to exploit.",
      },
    ],
    armorPieces: [
      {
        name: "Mixed lightweight converters",
        slot: "Defensive parts",
        effect: "Keeps elemental flexibility without overloading the build.",
        weightClass: "Medium",
      },
    ],
    talismans: [
      {
        name: "Indomitable Amulet",
        slot: "Amulet",
        effect: "Adds enough survivability to keep a utility-heavy route stable.",
      },
      {
        name: "Leaping Amulet",
        slot: "Amulet",
        effect: "Supports repositioning and tempo in awkward fights.",
      },
    ],
    spells: [
      {
        name: "Falcon Eyes",
        school: "Legion Arm",
        description: "Gives the build safer ranged value and controlled pull patterns.",
      },
      {
        name: "Deus Ex Machina",
        school: "Legion Arm",
        description: "Adds traps and disruption for fights where space control matters more than raw DPS.",
      },
    ],
    perks: [
      {
        name: "Extra Legion and grinder upgrades",
        tree: "P-Organ",
        description: "Expand the route's toolbox and make utility choices much easier to sustain.",
      },
      {
        name: "Consumable and stagger support nodes",
        tree: "P-Organ",
        description: "Let the build stay relevant even when the element match is imperfect.",
      },
    ],
    cyberware: [
      {
        name: "Acid, electric, and fire grindstones",
        slot: "Special grinders",
        description: "The real heart of the route: choose the right weakness and exploit it.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Collect elemental options instead of forcing one weapon",
        description:
          "The route is strongest when you accept that different fights want different elemental answers.",
      },
      {
        stage: "MID",
        title: "Turn utility into control",
        description:
          "Once Legion and grinder choices expand, the build stops feeling gimmicky and starts feeling genuinely smarter than raw physical routes.",
      },
      {
        stage: "LATE",
        title: "Exploit weaknesses with confidence",
        description:
          "Late-game Advance shines because the right setup can make brutal bosses feel much more manageable.",
      },
    ],
    strengths: [
      "Most adaptable Lies of P route in the expanded roster.",
      "Very strong when elemental weaknesses are understood.",
      "Keeps useful ranged and disruption tools online at all times.",
    ],
    weaknesses: [
      "Less plug-and-play than Motivity or Technique builds.",
      "Needs more menu prep and encounter knowledge.",
      "Peak burst depends on using the correct element rather than one universal answer.",
    ],
    tags: [
      { slug: "advance", weight: 3 },
      { slug: "elemental", weight: 3 },
      { slug: "legion-arm", weight: 2 },
      { slug: "status-pressure", weight: 2 },
      { slug: "utility", weight: 3 },
      { slug: "pve", weight: 3 },
    ],
    alternatives: [
      {
        slug: "technique-two-dragons-maestro",
        reason: "A faster, more direct route if you want less preparation and more reaction-based play.",
      },
      {
        slug: "aegis-perfect-guard-warden",
        reason: "A safer defensive option if you want stability more than elemental flexibility.",
      },
    ],
    ...noOperatingSystems,
  },
  {
    slug: "aegis-perfect-guard-warden",
    name: "Aegis Perfect Guard Warden",
    primaryArchetype: "Guard-Centric Defensive Hybrid",
    summary:
      "A stability-first Lies of P route that uses Aegis, perfect-guard support, and reliable punish tools to smooth out harsh boss strings.",
    description:
      "This build sits between full heavy bruiser and reactive technique play. It wants to keep a sturdy defense online, learn boss timings through guard confidence, and then convert those sequences into stable punish windows.",
    playstyle:
      "Use Aegis and clean guard timing to survive dangerous strings, then answer with short reliable punish chains rather than oversized greed.",
    difficulty: "BEGINNER",
    primaryMode: "PVE",
    combatStyle: "HYBRID",
    stealthRating: 0,
    loudRating: 7,
    hackingRating: 0,
    mobilityRating: 5,
    survivabilityRating: 10,
    burstRating: 7,
    utilityRating: 8,
    pveRating: 9,
    pvpRating: 0,
    progressionCurve:
      "Strong from the midgame onward once Aegis and guard-focused P-Organ support begin stabilizing difficult boss learning.",
    difficultyNotes:
      "One of the most approachable Lies of P routes because it actively helps you survive while still teaching proper guard timing.",
    isFeatured: false,
    sortOrder: 4,
    attributeStats: [
      { key: "vitality", label: "Vitality", value: 32 },
      { key: "vigor", label: "Vigor", value: 22 },
      { key: "capacity", label: "Capacity", value: 30 },
      { key: "motivity", label: "Motivity", value: 26 },
      { key: "technique", label: "Technique", value: 18 },
      { key: "advance", label: "Advance", value: 8 },
    ],
    supportStats: [
      { key: "perfect-guard", label: "Perfect Guard", value: 90 },
      { key: "shield-value", label: "Aegis Value", value: 96 },
      { key: "survival", label: "Survival", value: 98 },
      { key: "tempo", label: "Tempo", value: 52 },
    ],
    weapons: [
      {
        name: "Bone-Cutting Saw Blade + Bramble Curved Sword Handle",
        slot: "Primary assembly",
        scalingOrProfile: "Stable guard punish setup",
        description: "Balances reach, stagger, and manageable recovery for a defensive hybrid.",
      },
      {
        name: "Holy Sword of the Ark",
        slot: "Fallback boss weapon",
        scalingOrProfile: "Reliable guard-and-punish pressure",
        description: "An excellent answer when you want cleaner range and safer conversions.",
      },
    ],
    armorPieces: [
      {
        name: "High-defense LADA frame set",
        slot: "Defensive parts",
        effect: "Supports sustained guarding and keeps rough boss phases survivable.",
        weightClass: "Heavy",
      },
    ],
    talismans: [
      {
        name: "Blue Guardianship Amulet",
        slot: "Amulet",
        effect: "A direct survivability upgrade for longer learning fights.",
      },
      {
        name: "Patience Amulet",
        slot: "Amulet",
        effect: "Supports a calm, guard-first play pattern.",
      },
    ],
    spells: [
      {
        name: "Aegis",
        school: "Legion Arm",
        description: "The defining defensive tool that lets the route smooth out punishing boss strings.",
      },
    ],
    perks: [
      {
        name: "Guard Regain and pulse cell upgrades",
        tree: "P-Organ",
        description: "Raise the floor of the build so mistakes are recoverable.",
      },
      {
        name: "Perfect guard and fatal attack support",
        tree: "P-Organ",
        description: "Makes good defensive play translate into reliable reward.",
      },
    ],
    cyberware: [
      {
        name: "Perfect Grindstone",
        slot: "Special grinder",
        description: "Further stabilizes the route when a boss phase becomes especially dangerous.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Stabilize before optimizing",
        description:
          "The route is best when it first helps you survive. Damage upgrades come after the defensive shell feels trustworthy.",
      },
      {
        stage: "MID",
        title: "Learn boss strings through guard confidence",
        description:
          "Midgame is where Aegis and P-Organ support start turning overwhelming patterns into manageable sequences.",
      },
      {
        stage: "LATE",
        title: "Convert defense into clean finishes",
        description:
          "Late-game Warden is about surviving with purpose and then punishing at exactly the right moment.",
      },
    ],
    strengths: [
      "Safest Lies of P route in the new lineup.",
      "Very good for learning bosses without collapsing your damage completely.",
      "Translates defensive consistency into real clear stability.",
    ],
    weaknesses: [
      "Less explosive than Motivity or Technique variants.",
      "Can feel slower if you prefer pure aggression.",
      "Needs discipline not to turtle forever and miss punish windows.",
    ],
    tags: [
      { slug: "perfect-guard", weight: 3 },
      { slug: "tank", weight: 3 },
      { slug: "legion-arm", weight: 2 },
      { slug: "sustain", weight: 2 },
      { slug: "beginner-friendly", weight: 3 },
      { slug: "pve", weight: 3 },
    ],
    alternatives: [
      {
        slug: "motivity-puppet-axe-bruiser",
        reason: "A more explosive heavy route if you already trust your timing and want bigger staggers.",
      },
      {
        slug: "advance-alchemical-saboteur",
        reason: "A utility-first route if you want smarter elemental adaptation instead of pure defense.",
      },
    ],
    ...noOperatingSystems,
  },
];
