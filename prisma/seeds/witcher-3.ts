import type { BuildSeed } from "./seed-types";

const noOperatingSystems = {
  operatingSystems: [],
} satisfies Pick<BuildSeed, "operatingSystems">;

export const witcher3BuildSeeds: BuildSeed[] = [
  {
    slug: "euphoria-wolven-alchemist",
    name: "Euphoria Wolven Alchemist",
    primaryArchetype: "Alchemy and Sword Hybrid",
    summary:
      "A mutation-driven Witcher route that turns oils, decoctions, and fast sword pressure into one of the strongest all-round endgame setups.",
    description:
      "This version of the Wolven alchemy route leans into Euphoria, high toxicity uptime, and relentless light-attack pressure. It is built to feel like a complete monster-hunter loadout rather than a raw spreadsheet build: oils are always active, decoctions shape the fight, and signs stay available for control or recovery windows.",
    playstyle:
      "Rotate oils and decoctions before major fights, open with sign control, then stay in the pocket with fast steel or silver sword strings while Euphoria amplifies every exchange.",
    difficulty: "ADVANCED",
    primaryMode: "PVE",
    combatStyle: "HYBRID",
    stealthRating: 2,
    loudRating: 8,
    hackingRating: 0,
    mobilityRating: 8,
    survivabilityRating: 8,
    burstRating: 9,
    utilityRating: 9,
    pveRating: 10,
    pvpRating: 1,
    progressionCurve:
      "Starts as a competent sword build, becomes excellent once key alchemy passives arrive, and peaks in the late game when Euphoria and decoction uptime turn every encounter into a stat advantage.",
    difficultyNotes:
      "Extremely powerful, but best when you actively manage potion toxicity, oil prep, and sign timing instead of treating it like a pure sword spam route.",
    isFeatured: true,
    sortOrder: 1,
    attributeStats: [
      { key: "combat", label: "Combat", value: 95 },
      { key: "alchemy", label: "Alchemy", value: 100 },
      { key: "signs", label: "Signs", value: 58 },
      { key: "vitality", label: "Vitality", value: 72 },
      { key: "toxicity", label: "Toxicity", value: 94 },
      { key: "adrenaline", label: "Adrenaline", value: 80 },
    ],
    supportStats: [
      { key: "oil-uptime", label: "Oil Uptime", value: 95 },
      { key: "decoction-value", label: "Decoction Value", value: 92 },
      { key: "boss-pressure", label: "Boss Pressure", value: 90 },
      { key: "stability", label: "Stability", value: 78 },
    ],
    weapons: [
      {
        name: "Aerondight",
        slot: "Silver sword",
        scalingOrProfile: "High scaling, charge-based peak damage",
        description: "The premier silver sword for long monster fights once you can maintain clean hit strings.",
      },
      {
        name: "Toussaint Knight's Steel Sword",
        slot: "Steel sword",
        scalingOrProfile: "Strong crit profile",
        description: "Pairs perfectly with fast attack loops and high toxicity boosts in human encounters.",
      },
      {
        name: "Crossbow",
        slot: "Utility",
        scalingOrProfile: "Flying target control",
        description: "Kept for contracts and niche control rather than raw damage.",
      },
    ],
    armorPieces: [
      {
        name: "Grandmaster Wolven Set",
        slot: "Full set",
        effect: "Supports a balanced sword-and-sign cadence with strong late-game stats.",
        weightClass: "Medium",
      },
      {
        name: "Manticore swap pieces",
        slot: "Alchemy flex",
        effect: "Optional swap when you want even more toxicity headroom and bomb value.",
        weightClass: "Medium",
      },
    ],
    talismans: [
      {
        name: "Ekhidna Decoction",
        slot: "Decoction",
        effect: "Excellent sustain whenever stamina-driven actions stay in the loop.",
      },
      {
        name: "Arachas Decoction",
        slot: "Decoction",
        effect: "Adds real durability without turning the build into a heavy route.",
      },
      {
        name: "Superior Thunderbolt and oils",
        slot: "Prep core",
        effect: "Pushes sword damage up before the mutation multipliers finish the job.",
      },
    ],
    spells: [
      {
        name: "Quen",
        school: "Sign",
        description: "The reset button that lets the build keep aggression without losing control of the exchange.",
      },
      {
        name: "Aard",
        school: "Sign",
        description: "Creates space, interrupts pressure, and gives safe starts to sword strings.",
      },
    ],
    perks: [
      {
        name: "Acquired Tolerance",
        tree: "Alchemy",
        description: "Core toxicity scaling that makes the whole route possible.",
      },
      {
        name: "Synergy",
        tree: "Alchemy",
        description: "Turns mutagens into a major stat amplifier rather than a passive bonus.",
      },
      {
        name: "Whirl",
        tree: "Combat",
        description: "Gives the build its best punish tool once openings are secure.",
      },
    ],
    cyberware: [
      {
        name: "Euphoria",
        slot: "Mutation",
        description: "Converts toxicity into raw offensive and sign scaling, defining the endgame version of the build.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Build the alchemy floor first",
        description:
          "Open with core combat comfort, then rush the toxicity and mutagen passives that keep the route scaling ahead of generic sword setups.",
      },
      {
        stage: "MID",
        title: "Add sign utility and stronger prep tools",
        description:
          "Once decoctions and superior oils are stable, layer Quen and Aard into the loop so the build wins fights through control as well as damage.",
      },
      {
        stage: "LATE",
        title: "Pivot fully into Euphoria",
        description:
          "Use mutations and best-in-slot swords to transform the setup into a complete endgame monster-hunting loadout.",
      },
    ],
    strengths: [
      "Top-tier boss damage once prep is done correctly.",
      "Still has real safety through Quen, decoctions, and medium gear mobility.",
      "Feels strong in contracts, open-world exploration, and DLC endgame content.",
    ],
    weaknesses: [
      "Requires more menu prep and alchemy awareness than a pure combat route.",
      "Can feel overbuilt in short trash encounters where the full setup is unnecessary.",
      "Toxicity mistakes are punished harder than on sign-first builds.",
    ],
    tags: [
      { slug: "alchemy", weight: 3 },
      { slug: "swordmaster", weight: 3 },
      { slug: "mutation", weight: 3 },
      { slug: "adrenaline", weight: 2 },
      { slug: "whirl", weight: 2 },
      { slug: "hybrid", weight: 2 },
      { slug: "pve", weight: 3 },
    ],
    alternatives: [
      {
        slug: "griffin-sign-architect",
        reason: "Trades some raw sword scaling for broader sign control and easier crowd management.",
      },
      {
        slug: "ursine-quen-warden",
        reason: "A safer, more forgiving route if you prefer stability over toxicity micromanagement.",
      },
    ],
    ...noOperatingSystems,
  },
  {
    slug: "griffin-sign-architect",
    name: "Griffin Sign Architect",
    primaryArchetype: "Signs and Control",
    summary:
      "A sign-focused route built around Yrden control, Quen stability, and layered casting that slows the fight down on your terms.",
    description:
      "This build follows the Grandmaster Griffin identity: signs are not backup tools, they are the main language of the fight. You pressure with traps, stuns, and ignitions, then convert those windows into measured sword damage instead of trying to brute force every encounter.",
    playstyle:
      "Shape the arena with Yrden, weave Quen on demand, burn or stagger targets with Igni and Aard, then step in only when the enemy is already constrained.",
    difficulty: "INTERMEDIATE",
    primaryMode: "PVE",
    combatStyle: "SPELLCASTER",
    stealthRating: 2,
    loudRating: 7,
    hackingRating: 0,
    mobilityRating: 6,
    survivabilityRating: 7,
    burstRating: 7,
    utilityRating: 10,
    pveRating: 9,
    pvpRating: 1,
    progressionCurve:
      "Feels complete earlier than alchemy builds because the sign loop comes online sooner, then scales smoothly as set bonuses and intensity upgrades start stacking.",
    difficultyNotes:
      "Much more forgiving than it looks as long as you commit to control tools first and stop forcing bad melee trades.",
    isFeatured: true,
    sortOrder: 2,
    attributeStats: [
      { key: "combat", label: "Combat", value: 62 },
      { key: "alchemy", label: "Alchemy", value: 48 },
      { key: "signs", label: "Signs", value: 100 },
      { key: "vitality", label: "Vitality", value: 68 },
      { key: "toxicity", label: "Toxicity", value: 54 },
      { key: "adrenaline", label: "Adrenaline", value: 44 },
    ],
    supportStats: [
      { key: "crowd-control", label: "Crowd Control", value: 97 },
      { key: "boss-control", label: "Boss Control", value: 82 },
      { key: "sign-intensity", label: "Sign Intensity", value: 100 },
      { key: "comfort", label: "Comfort", value: 84 },
    ],
    weapons: [
      {
        name: "Grandmaster Griffin steel sword",
        slot: "Steel sword",
        scalingOrProfile: "Set synergy",
        description: "A set-aligned weapon for keeping the casting loop coherent rather than chasing isolated sword DPS.",
      },
      {
        name: "Grandmaster Griffin silver sword",
        slot: "Silver sword",
        scalingOrProfile: "Set synergy",
        description: "Lets signs remain the centerpiece even in monster-focused encounters.",
      },
    ],
    armorPieces: [
      {
        name: "Grandmaster Griffin Set",
        slot: "Full set",
        effect: "The defining sign armor set with outstanding support for layered casting.",
        weightClass: "Medium",
      },
    ],
    talismans: [
      {
        name: "Superior Tawny Owl",
        slot: "Potion",
        effect: "Smooths sign stamina demands so control tools stay online more often.",
      },
      {
        name: "Ancient Leshen Decoction",
        slot: "Decoction",
        effect: "Adds support value to active sign use instead of only rewarding direct weapon damage.",
      },
    ],
    spells: [
      {
        name: "Yrden",
        school: "Sign",
        description: "The core arena-shaping tool that makes the build feel safe and deliberate.",
      },
      {
        name: "Quen",
        school: "Sign",
        description: "Keeps the build stable while you set up repeated sign sequences.",
      },
      {
        name: "Igni",
        school: "Sign",
        description: "Applies pressure and sets up chip damage during crowd control windows.",
      },
    ],
    perks: [
      {
        name: "Griffin School Techniques",
        tree: "General",
        description: "A natural fit for the armor and sign-heavy structure of the build.",
      },
      {
        name: "Delusion",
        tree: "Signs",
        description: "Adds out-of-combat utility and reinforces the sign identity.",
      },
      {
        name: "Sustained Glyphs",
        tree: "Signs",
        description: "Improves Yrden's battlefield value and keeps enemies where you want them.",
      },
    ],
    cyberware: [
      {
        name: "Conductors of Magic",
        slot: "Mutation",
        description: "A clean mutation choice if you want more raw sign payoff instead of alchemy scaling.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Stabilize Quen and one offensive sign",
        description:
          "Treat the route as a control build from the start: Quen first, then one offensive or crowd-control sign that solves your current fights.",
      },
      {
        stage: "MID",
        title: "Lean into Griffin set identity",
        description:
          "Once the armor path is online, let signs dictate fight tempo and stop trying to mirror pure sword builds.",
      },
      {
        stage: "LATE",
        title: "Refine the arena-control loop",
        description:
          "Use full set bonuses, intensity scaling, and better potions to turn every encounter into a shaped battlefield.",
      },
    ],
    strengths: [
      "Outstanding crowd control and great safety for contracts with awkward enemy mixes.",
      "Very readable, methodical combat loop with fewer panic moments than fast-attack routes.",
      "Scales gracefully without needing rare one-shot setups.",
    ],
    weaknesses: [
      "Lower peak boss burst than alchemy or Cat-school sword builds.",
      "Can feel slower if you dislike arena setup and control-oriented pacing.",
      "Needs deliberate sign sequencing to really justify itself.",
    ],
    tags: [
      { slug: "signs", weight: 3 },
      { slug: "spellcaster", weight: 3 },
      { slug: "control", weight: 3 },
      { slug: "support-buffs", weight: 2 },
      { slug: "methodical", weight: 2 },
      { slug: "pve", weight: 3 },
    ],
    alternatives: [
      {
        slug: "euphoria-wolven-alchemist",
        reason: "A better pick if you want signs to support a stronger sword-damage ceiling.",
      },
      {
        slug: "feline-whirl-duelist",
        reason: "A much faster route if you want direct aggression over control play.",
      },
    ],
    ...noOperatingSystems,
  },
  {
    slug: "ursine-quen-warden",
    name: "Ursine Quen Warden",
    primaryArchetype: "Heavy Armor and Quen",
    summary:
      "A durable Witcher route that turns Bear School gear, Quen uptime, and careful strong attacks into a forgiving contract-clearing setup.",
    description:
      "The Ursine route is for players who want to feel immovable. It accepts lower tempo in exchange for stability, heavy hit protection, and a clean answer to long monster fights where mistakes would normally snowball.",
    playstyle:
      "Maintain Quen, absorb or negate the first dangerous interaction, then answer with deliberate heavy strings, counter windows, and potion-fueled sustain.",
    difficulty: "BEGINNER",
    primaryMode: "PVE",
    combatStyle: "MELEE",
    stealthRating: 1,
    loudRating: 8,
    hackingRating: 0,
    mobilityRating: 4,
    survivabilityRating: 10,
    burstRating: 8,
    utilityRating: 6,
    pveRating: 9,
    pvpRating: 1,
    progressionCurve:
      "Strong very early because Quen and armor smooth out mistakes, then stays relevant all the way into DLC content thanks to defensive layering.",
    difficultyNotes:
      "The easiest Witcher build here to pilot, but it rewards patience and spacing more than mashing.",
    isFeatured: false,
    sortOrder: 3,
    attributeStats: [
      { key: "combat", label: "Combat", value: 82 },
      { key: "alchemy", label: "Alchemy", value: 60 },
      { key: "signs", label: "Signs", value: 52 },
      { key: "vitality", label: "Vitality", value: 94 },
      { key: "toxicity", label: "Toxicity", value: 70 },
      { key: "adrenaline", label: "Adrenaline", value: 78 },
    ],
    supportStats: [
      { key: "shield-value", label: "Quen Value", value: 92 },
      { key: "sustain", label: "Sustain", value: 91 },
      { key: "boss-stability", label: "Boss Stability", value: 88 },
      { key: "tempo", label: "Tempo", value: 46 },
    ],
    weapons: [
      {
        name: "Ursine steel sword",
        slot: "Steel sword",
        scalingOrProfile: "Strong attacks and adrenaline",
        description: "Supports slower but safer punishes in human encounters.",
      },
      {
        name: "Ursine silver sword",
        slot: "Silver sword",
        scalingOrProfile: "Strong attacks and adrenaline",
        description: "Pairs well with Quen-heavy bossing and deliberate punish windows.",
      },
    ],
    armorPieces: [
      {
        name: "Grandmaster Ursine Set",
        slot: "Full set",
        effect: "Massive defensive value and the exact visual identity most tank-oriented Witcher players want.",
        weightClass: "Heavy",
      },
    ],
    talismans: [
      {
        name: "Ekhidna Decoction",
        slot: "Decoction",
        effect: "Converts movement and sign usage into sustain over long engagements.",
      },
      {
        name: "Superior Swallow",
        slot: "Potion",
        effect: "Keeps the route forgiving when attrition stacks up.",
      },
    ],
    spells: [
      {
        name: "Quen",
        school: "Sign",
        description: "The defining sign that gives the build its beginner-friendly stability.",
      },
      {
        name: "Axii",
        school: "Sign",
        description: "A flexible control button when one dangerous target needs to stop acting.",
      },
    ],
    perks: [
      {
        name: "Resolve",
        tree: "Combat",
        description: "Preserves adrenaline and keeps strong attacks rewarding.",
      },
      {
        name: "Razor Focus",
        tree: "Combat",
        description: "Helps the build come online earlier in difficult encounters.",
      },
      {
        name: "Protective Coating",
        tree: "Alchemy",
        description: "A natural fit for a tank route that still uses oils correctly.",
      },
    ],
    cyberware: [
      {
        name: "Second Life",
        slot: "Mutation",
        description: "Pushes the route even further into safety for players who value consistency over style points.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Respect Quen immediately",
        description:
          "The route is strongest when you learn to use Quen proactively instead of treating it as a panic cast.",
      },
      {
        stage: "MID",
        title: "Stack armor and sustain",
        description:
          "Midgame is where Ursine starts feeling distinct: more stable trades, fewer deaths, and better long contract pacing.",
      },
      {
        stage: "LATE",
        title: "Become a contract anchor",
        description:
          "Endgame Ursine is about never giving the fight chaos. You decide the pace and survive the mistakes that would end lighter builds.",
      },
    ],
    strengths: [
      "By far the safest Witcher route for blind progression and hard contracts.",
      "Excellent on long fights where Quen and sustain outlast spike damage.",
      "Very stable if you dislike constant alchemy micromanagement.",
    ],
    weaknesses: [
      "Slower and less explosive than Cat or Euphoria variants.",
      "Can feel clunky if you prefer constant aggression and mobility.",
      "Needs discipline to avoid overcommitting during safe-looking shield windows.",
    ],
    tags: [
      { slug: "tank", weight: 3 },
      { slug: "sustain", weight: 3 },
      { slug: "signs", weight: 2 },
      { slug: "melee", weight: 2 },
      { slug: "beginner-friendly", weight: 3 },
      { slug: "pve", weight: 3 },
    ],
    alternatives: [
      {
        slug: "griffin-sign-architect",
        reason: "Keeps the safety and control angle but trades heavy armor for more active sign play.",
      },
      {
        slug: "euphoria-wolven-alchemist",
        reason: "A higher ceiling option if you want the same PvE confidence with much stronger endgame damage.",
      },
    ],
    ...noOperatingSystems,
  },
  {
    slug: "feline-whirl-duelist",
    name: "Feline Whirl Duelist",
    primaryArchetype: "Fast Attack Cat School",
    summary:
      "A high-tempo cat-school route centered on critical fast attacks, Whirl, and constant pressure once an opening appears.",
    description:
      "This is the classic speed-focused Witcher setup: light gear, quick footwork, and the confidence to stay close once the enemy is off balance. It wins through relentless tempo rather than setup depth or tankiness.",
    playstyle:
      "Stay evasive, fish for a clean punish, and convert that window into long fast-attack strings or Whirl pressure before resetting with mobility.",
    difficulty: "ADVANCED",
    primaryMode: "PVE",
    combatStyle: "MELEE",
    stealthRating: 2,
    loudRating: 9,
    hackingRating: 0,
    mobilityRating: 10,
    survivabilityRating: 5,
    burstRating: 9,
    utilityRating: 5,
    pveRating: 8,
    pvpRating: 1,
    progressionCurve:
      "Feels fantastic whenever the encounter gives you room to move, but only reaches its full identity after fast-attack skills, crit scaling, and Cat School gear come together.",
    difficultyNotes:
      "Mistakes hurt more here than on any other Witcher route in the roster. Great if you enjoy aggressive precision, rough if you want forgiveness.",
    isFeatured: false,
    sortOrder: 4,
    attributeStats: [
      { key: "combat", label: "Combat", value: 100 },
      { key: "alchemy", label: "Alchemy", value: 54 },
      { key: "signs", label: "Signs", value: 34 },
      { key: "vitality", label: "Vitality", value: 50 },
      { key: "toxicity", label: "Toxicity", value: 60 },
      { key: "adrenaline", label: "Adrenaline", value: 86 },
    ],
    supportStats: [
      { key: "tempo", label: "Tempo", value: 100 },
      { key: "crit-rate", label: "Critical Rate", value: 90 },
      { key: "boss-punish", label: "Boss Punish", value: 88 },
      { key: "error-margin", label: "Error Margin", value: 38 },
    ],
    weapons: [
      {
        name: "Aerondight",
        slot: "Silver sword",
        scalingOrProfile: "Fast-attack finisher",
        description: "Perfect for a route that wants to stay active once momentum is earned.",
      },
      {
        name: "Hen Gaidth steel sword",
        slot: "Steel sword",
        scalingOrProfile: "Crit-leaning pressure",
        description: "Lets the build stay explosive in human encounters too.",
      },
    ],
    armorPieces: [
      {
        name: "Grandmaster Feline Set",
        slot: "Full set",
        effect: "The classic light-armor DPS identity for players who want speed over safety.",
        weightClass: "Light",
      },
    ],
    talismans: [
      {
        name: "Katakan Decoction",
        slot: "Decoction",
        effect: "Stacks beautifully with a crit-heavy aggressive route.",
      },
      {
        name: "Superior Thunderbolt",
        slot: "Potion",
        effect: "A simple but brutal burst amplifier for punish windows.",
      },
    ],
    spells: [
      {
        name: "Quen",
        school: "Sign",
        description: "Used sparingly as insurance, not as the main identity of the build.",
      },
      {
        name: "Aard",
        school: "Sign",
        description: "Creates the first opening that the route then converts into tempo.",
      },
    ],
    perks: [
      {
        name: "Muscle Memory",
        tree: "Combat",
        description: "The foundation of every fast-attack route.",
      },
      {
        name: "Whirl",
        tree: "Combat",
        description: "The core pressure engine once your spacing is under control.",
      },
      {
        name: "Cat School Techniques",
        tree: "General",
        description: "A direct multiplier for the gear and pacing this build wants.",
      },
    ],
    cyberware: [
      {
        name: "Bloodbath",
        slot: "Mutation",
        description: "An aggressive mutation choice if you want chain-kill momentum over balanced power.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Prioritize movement and fast attacks",
        description:
          "Do not rush into a late-game glass-cannon shape. First make the build feel comfortable, then scale the damage behind that comfort.",
      },
      {
        stage: "MID",
        title: "Turn every dodge into pressure",
        description:
          "Midgame is where the build begins rewarding clean footwork with long punish strings and more confident contract clears.",
      },
      {
        stage: "LATE",
        title: "Max out Whirl and crit momentum",
        description:
          "At endgame, the route becomes a pure tempo machine that deletes enemies once the first opening lands.",
      },
    ],
    strengths: [
      "Highest movement-driven melee ceiling among the Witcher builds here.",
      "Feels incredible in fights where tempo can stay in your hands.",
      "Fast, stylish, and very satisfying once mastered.",
    ],
    weaknesses: [
      "Least forgiving Witcher route in the current roster.",
      "Needs precise spacing and better encounter knowledge than Ursine or Griffin.",
      "Falls off fast when you lose initiative and start taking defensive trades.",
    ],
    tags: [
      { slug: "swordmaster", weight: 3 },
      { slug: "whirl", weight: 3 },
      { slug: "mobility", weight: 3 },
      { slug: "precision", weight: 2 },
      { slug: "execution-heavy", weight: 3 },
      { slug: "pve", weight: 3 },
    ],
    alternatives: [
      {
        slug: "euphoria-wolven-alchemist",
        reason: "Keeps strong sword payoff but adds much better utility and survivability.",
      },
      {
        slug: "ursine-quen-warden",
        reason: "The opposite philosophy if you want safety instead of speed.",
      },
    ],
    ...noOperatingSystems,
  },
];
