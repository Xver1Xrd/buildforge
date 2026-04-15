import type { BuildSeed } from "./seed-types";

const noModernContent = {
  perks: [],
  cyberware: [],
  operatingSystems: [],
} satisfies Pick<BuildSeed, "perks" | "cyberware" | "operatingSystems">;

export const darkSouls3BuildSeeds: BuildSeed[] = [
  {
    slug: "sellsword-twinblade-ace",
    name: "Sellsword Twinblade Ace",
    primaryArchetype: "Dexterity Twinblades",
    summary:
      "A relentless dex route built around the Sellsword Twinblades, sharp infusions, and some of the cleanest PvE DPS in the game.",
    description:
      "This build follows the famous Sellsword progression because it simply works: rush the twinblades, invest in dexterity, and learn when to commit to long L1 strings versus when to reset after a safer punish.",
    playstyle:
      "Stay light, dodge late, and answer every punish window with rapid twinblade chains that shred bosses before they can fully reset.",
    difficulty: "INTERMEDIATE",
    primaryMode: "PVE",
    combatStyle: "MELEE",
    stealthRating: 1,
    loudRating: 9,
    hackingRating: 0,
    mobilityRating: 10,
    survivabilityRating: 5,
    burstRating: 10,
    utilityRating: 5,
    pveRating: 10,
    pvpRating: 7,
    progressionCurve:
      "Excellent from the moment the twinblades are upgraded, then scales brutally well all the way into late-game boss fights once dexterity and ring support come together.",
    difficultyNotes:
      "The route is stronger than it is hard, but it still punishes greedy stamina usage and bad spacing in faster fights.",
    isFeatured: true,
    sortOrder: 1,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 34 },
      { key: "attunement", label: "Attunement", value: 10 },
      { key: "endurance", label: "Endurance", value: 30 },
      { key: "vitality", label: "Vitality", value: 15 },
      { key: "strength", label: "Strength", value: 18 },
      { key: "dexterity", label: "Dexterity", value: 70 },
      { key: "intelligence", label: "Intelligence", value: 9 },
      { key: "faith", label: "Faith", value: 9 },
      { key: "luck", label: "Luck", value: 7 },
    ],
    supportStats: [
      { key: "dps", label: "Sustained DPS", value: 98 },
      { key: "roll-catch", label: "Roll Catch", value: 78 },
      { key: "stamina-flow", label: "Stamina Flow", value: 88 },
      { key: "error-margin", label: "Error Margin", value: 44 },
    ],
    weapons: [
      {
        name: "Sellsword Twinblades",
        slot: "Primary",
        scalingOrProfile: "Sharp infusion, resin support",
        description: "One of the most efficient PvE weapons in the game when used with measured L1 chains.",
      },
      {
        name: "Lothric Knight Sword",
        slot: "Sidearm",
        scalingOrProfile: "Sharp infusion",
        description: "A cleaner one-handed option for players who want a more stable PvP or hallway plan.",
      },
    ],
    armorPieces: [
      {
        name: "Black Hand Hat",
        slot: "Head",
        effect: "Keeps the route light while preserving style and roll freedom.",
        weightClass: "Light",
      },
      {
        name: "Drang Armor",
        slot: "Chest",
        effect: "A balanced lightweight chest piece for agile melee setups.",
        weightClass: "Light",
      },
    ],
    talismans: [
      {
        name: "Pontiff's Right Eye",
        slot: "Ring",
        effect: "Rewards the exact consecutive-hit pressure pattern this build wants.",
      },
      {
        name: "Flynn's Ring",
        slot: "Ring",
        effect: "Adds more damage while keeping the route in a light setup.",
      },
      {
        name: "Ring of Favor",
        slot: "Ring",
        effect: "Smooths HP, stamina, and equip load all at once.",
      },
    ],
    spells: [],
    progression: [
      {
        stage: "EARLY",
        title: "Secure the twinblades and stay light",
        description:
          "The build identity appears early. Keep the load light, prioritize dexterity and stamina, and let clean twinblade loops solve most fights.",
      },
      {
        stage: "MID",
        title: "Scale consecutive-hit pressure",
        description:
          "Once the right rings and weapon level are online, the route stops being merely good and starts deleting bosses on every real punish window.",
      },
      {
        stage: "LATE",
        title: "Refine boss melt pacing",
        description:
          "Endgame Twinblades are about discipline: only commit when the opening is real, and the build will return absurd value.",
      },
    ],
    strengths: [
      "Top-tier PvE damage with a very clear game plan.",
      "Excellent mobility and stamina flow for evasive players.",
      "Can still transition into cleaner straight-sword handling when needed.",
    ],
    weaknesses: [
      "Bad overcommitments are punished fast because the build is not tanky.",
      "Less comfortable in cramped spaces than straighter weapon routes.",
      "Needs discipline to stop attacking after the damage is already secured.",
    ],
    tags: [
      { slug: "dexterity", weight: 3 },
      { slug: "twinblades", weight: 3 },
      { slug: "mobility", weight: 3 },
      { slug: "precision", weight: 2 },
      { slug: "pve", weight: 3 },
      { slug: "melee", weight: 2 },
    ],
    alternatives: [
      {
        slug: "chaos-pyromancer-lord",
        reason: "A more flexible route if you want ranged pressure and better room control.",
      },
      {
        slug: "sunlight-faith-paladin",
        reason: "A safer hybrid if you want buffs and better trading stability.",
      },
    ],
    ...noModernContent,
  },
  {
    slug: "chaos-pyromancer-lord",
    name: "Chaos Pyromancer Lord",
    primaryArchetype: "Pyromancy Hybrid",
    summary:
      "A classic chaos route that blends pyromancies, dark-infused sidearms, and huge punish potential in both PvE and invasions.",
    description:
      "This is the flexible pyromancy shell Dark Souls 3 players return to for a reason: it has real ranged pressure, strong crowd control, and enough melee support to stay stable when enemies collapse distance.",
    playstyle:
      "Open with spacing and fire pressure, use chaos or dark sidearms when opponents overrespect the cast game, and punish recovery with high-damage pyros.",
    difficulty: "INTERMEDIATE",
    primaryMode: "HYBRID",
    combatStyle: "SPELLCASTER",
    stealthRating: 1,
    loudRating: 8,
    hackingRating: 0,
    mobilityRating: 7,
    survivabilityRating: 6,
    burstRating: 9,
    utilityRating: 9,
    pveRating: 9,
    pvpRating: 9,
    progressionCurve:
      "Starts modestly, improves dramatically once core pyromancies and stat balance arrive, then becomes one of the most flexible endgame routes in the roster.",
    difficultyNotes:
      "Very strong, but only if you commit to spacing and cast discipline. Casting on autopilot turns this into a punish magnet.",
    isFeatured: true,
    sortOrder: 2,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 32 },
      { key: "attunement", label: "Attunement", value: 24 },
      { key: "endurance", label: "Endurance", value: 24 },
      { key: "vitality", label: "Vitality", value: 12 },
      { key: "strength", label: "Strength", value: 16 },
      { key: "dexterity", label: "Dexterity", value: 18 },
      { key: "intelligence", label: "Intelligence", value: 40 },
      { key: "faith", label: "Faith", value: 40 },
      { key: "luck", label: "Luck", value: 7 },
    ],
    supportStats: [
      { key: "crowd-control", label: "Crowd Control", value: 92 },
      { key: "mix-ups", label: "Mix-up Value", value: 89 },
      { key: "ranged-pressure", label: "Ranged Pressure", value: 94 },
      { key: "melee-stability", label: "Melee Stability", value: 68 },
    ],
    weapons: [
      {
        name: "Demon's Scar",
        slot: "Primary",
        scalingOrProfile: "Curved sword catalyst hybrid",
        description: "Lets the route blur melee and casting in the same pressure sequence.",
      },
      {
        name: "Dark Lothric Knight Sword",
        slot: "Sidearm",
        scalingOrProfile: "Dark infusion",
        description: "A reliable fallback when straight melee stability matters more than flashy cast pressure.",
      },
    ],
    armorPieces: [
      {
        name: "Witch's Set",
        slot: "Core armor",
        effect: "Supports the pyromancer fantasy while keeping weight controlled.",
        weightClass: "Light",
      },
    ],
    talismans: [
      {
        name: "Great Swamp Ring",
        slot: "Ring",
        effect: "A direct multiplier for pyromancy damage.",
      },
      {
        name: "Witch's Ring",
        slot: "Ring",
        effect: "Stacks more spell damage for the core fire loop.",
      },
      {
        name: "Sage Ring",
        slot: "Ring",
        effect: "Improves cast speed and makes the route feel significantly cleaner.",
      },
    ],
    spells: [
      {
        name: "Chaos Bed Vestiges",
        school: "Pyromancy",
        description: "The defining punish pyromancy for raw burst.",
      },
      {
        name: "Black Flame",
        school: "Pyromancy",
        description: "A close-range answer that keeps opponents honest when they rush the caster.",
      },
      {
        name: "Fire Surge",
        school: "Pyromancy",
        description: "Chip and pressure tool for PvP and awkward cleanups.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Balance melee and casting instead of hard forcing either",
        description:
          "Early pyromancy is better when it supplements a competent weapon plan instead of trying to do everything alone.",
      },
      {
        stage: "MID",
        title: "Unlock real fire pressure",
        description:
          "Once attunement and the core pyromancies arrive, the route becomes a real hybrid threat with room control and huge punish damage.",
      },
      {
        stage: "LATE",
        title: "Turn spacing into win conditions",
        description:
          "Endgame pyromancer strength comes from making every approach dangerous for the opponent.",
      },
    ],
    strengths: [
      "Extremely flexible in both PvE and PvP.",
      "Has answers at range, midrange, and close quarters.",
      "Pyromancy rings create an obvious and rewarding power spike.",
    ],
    weaknesses: [
      "Needs better spacing and stamina awareness than straight melee routes.",
      "Less forgiving if you miss high-commitment pyromancies.",
      "Feels weaker before the full spell kit comes online.",
    ],
    tags: [
      { slug: "pyromancy", weight: 3 },
      { slug: "spellcaster", weight: 3 },
      { slug: "hybrid", weight: 2 },
      { slug: "explosive", weight: 2 },
      { slug: "pvp", weight: 3 },
      { slug: "hybrid-mode", weight: 2 },
    ],
    alternatives: [
      {
        slug: "sellsword-twinblade-ace",
        reason: "A simpler and faster boss shredder if you want less casting overhead.",
      },
      {
        slug: "sunlight-faith-paladin",
        reason: "Keeps a hybrid buff-and-cast identity but is more stable in extended fights.",
      },
    ],
    ...noModernContent,
  },
  {
    slug: "cathedral-crusher",
    name: "Cathedral Crusher",
    primaryArchetype: "Strength and Ultra Greatsword",
    summary:
      "A heavy strength build built for crushing trades, deleting poise bars, and bullying PvE with massive stagger windows.",
    description:
      "This is the classic ultra route for players who want the answer to be a bigger weapon. It thrives on timing, hyperarmor, and enough stamina to turn one opening into a knockdown or a panic roll.",
    playstyle:
      "Take space, threaten huge damage with every swing, and use poise-backed trades or roll catches to make the enemy respect your timing.",
    difficulty: "INTERMEDIATE",
    primaryMode: "HYBRID",
    combatStyle: "MELEE",
    stealthRating: 1,
    loudRating: 10,
    hackingRating: 0,
    mobilityRating: 4,
    survivabilityRating: 9,
    burstRating: 9,
    utilityRating: 5,
    pveRating: 9,
    pvpRating: 8,
    progressionCurve:
      "Strong as soon as a real heavy weapon is upgraded and remains threatening all game because the moveset always matters when it lands.",
    difficultyNotes:
      "Very rewarding, but demands restraint. Swinging one time too many is the classic way to throw with this route.",
    isFeatured: false,
    sortOrder: 3,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 40 },
      { key: "attunement", label: "Attunement", value: 10 },
      { key: "endurance", label: "Endurance", value: 34 },
      { key: "vitality", label: "Vitality", value: 28 },
      { key: "strength", label: "Strength", value: 66 },
      { key: "dexterity", label: "Dexterity", value: 18 },
      { key: "intelligence", label: "Intelligence", value: 9 },
      { key: "faith", label: "Faith", value: 10 },
      { key: "luck", label: "Luck", value: 7 },
    ],
    supportStats: [
      { key: "trade-power", label: "Trade Power", value: 94 },
      { key: "stagger", label: "Stagger", value: 96 },
      { key: "poise", label: "Poise", value: 86 },
      { key: "chase", label: "Chase Down", value: 46 },
    ],
    weapons: [
      {
        name: "Great Club",
        slot: "Primary",
        scalingOrProfile: "Heavy infusion",
        description: "One of the cleanest pure-strength answers for crush damage and stagger.",
      },
      {
        name: "Ledo's Great Hammer",
        slot: "Late-game swap",
        scalingOrProfile: "Massive poise damage",
        description: "For players who want the build to become truly absurd in endgame trades.",
      },
    ],
    armorPieces: [
      {
        name: "Cathedral Knight Set",
        slot: "Core armor",
        effect: "A natural visual and mechanical fit for a poise-heavy strength route.",
        weightClass: "Heavy",
      },
    ],
    talismans: [
      {
        name: "Havel's Ring",
        slot: "Ring",
        effect: "Lets the loadout stay functional while carrying real armor.",
      },
      {
        name: "Ring of Favor",
        slot: "Ring",
        effect: "Boosts the three stats heavy builds always want more of.",
      },
      {
        name: "Knight Slayer's Ring",
        slot: "Ring",
        effect: "Adds more shield pressure for stubborn enemies and duels.",
      },
    ],
    spells: [],
    progression: [
      {
        stage: "EARLY",
        title: "Get one reliable heavy weapon online",
        description:
          "Do not split upgrades. A single upgraded heavy weapon creates the whole route immediately.",
      },
      {
        stage: "MID",
        title: "Stack stamina and carry weight",
        description:
          "This is where the build stops feeling clumsy and starts feeling dominant in trades and boss punishes.",
      },
      {
        stage: "LATE",
        title: "Turn every opening into a statement",
        description:
          "With full strength scaling and real armor, the build becomes a constant threat in invasions and PvE alike.",
      },
    ],
    strengths: [
      "Massive stagger, poise, and punish damage.",
      "Very clear and satisfying game plan.",
      "Still dangerous in PvP because every hit matters.",
    ],
    weaknesses: [
      "Slow recovery makes greed expensive.",
      "Lower chase potential against light evasive opponents.",
      "Needs stamina discipline more than lighter melee builds.",
    ],
    tags: [
      { slug: "strength", weight: 3 },
      { slug: "ultra-greatsword", weight: 3 },
      { slug: "tank", weight: 2 },
      { slug: "stagger", weight: 3 },
      { slug: "pvp", weight: 2 },
      { slug: "hybrid-mode", weight: 2 },
    ],
    alternatives: [
      {
        slug: "sunlight-faith-paladin",
        reason: "A better pick if you want heavier trading with more buffs and sustain tools.",
      },
      {
        slug: "sellsword-twinblade-ace",
        reason: "The opposite answer if speed matters more than raw trade value.",
      },
    ],
    ...noModernContent,
  },
  {
    slug: "sunlight-faith-paladin",
    name: "Sunlight Faith Paladin",
    primaryArchetype: "Faith and Buffed Melee",
    summary:
      "A buff-oriented faith route that pairs reliable melee weapons with lightning miracles, sustain, and strong hybrid comfort.",
    description:
      "This paladin setup lives in the middle ground between pure caster and pure melee. It wants to buff intelligently, keep access to ranged miracles, and remain comfortable in longer PvE routes or measured PvP exchanges.",
    playstyle:
      "Apply weapon buffs before committed fights, use miracles to open or stabilize, then let efficient melee swings carry the rest of the exchange.",
    difficulty: "BEGINNER",
    primaryMode: "HYBRID",
    combatStyle: "HYBRID",
    stealthRating: 1,
    loudRating: 8,
    hackingRating: 0,
    mobilityRating: 6,
    survivabilityRating: 8,
    burstRating: 8,
    utilityRating: 8,
    pveRating: 9,
    pvpRating: 8,
    progressionCurve:
      "Feels modest until the faith and attunement breakpoints arrive, then settles into one of the most comfortable all-purpose routes in the game.",
    difficultyNotes:
      "A very approachable hybrid because it always has a fallback: melee when casting is risky, miracles when spacing is favorable.",
    isFeatured: false,
    sortOrder: 4,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 36 },
      { key: "attunement", label: "Attunement", value: 24 },
      { key: "endurance", label: "Endurance", value: 26 },
      { key: "vitality", label: "Vitality", value: 20 },
      { key: "strength", label: "Strength", value: 20 },
      { key: "dexterity", label: "Dexterity", value: 18 },
      { key: "intelligence", label: "Intelligence", value: 9 },
      { key: "faith", label: "Faith", value: 60 },
      { key: "luck", label: "Luck", value: 7 },
    ],
    supportStats: [
      { key: "buff-value", label: "Buff Value", value: 90 },
      { key: "ranged-support", label: "Ranged Support", value: 84 },
      { key: "self-sustain", label: "Self Sustain", value: 80 },
      { key: "versatility", label: "Versatility", value: 92 },
    ],
    weapons: [
      {
        name: "Sunlight Straight Sword",
        slot: "Primary",
        scalingOrProfile: "Buff and utility",
        description: "A straightforward, reliable centerpiece for a faith hybrid with room for miracle support.",
      },
      {
        name: "Dragonslayer Axe",
        slot: "Burst option",
        scalingOrProfile: "Lightning-friendly punish tool",
        description: "A great answer when you want more explosive melee conversions after buffs.",
      },
    ],
    armorPieces: [
      {
        name: "Sunless Set",
        slot: "Core armor",
        effect: "Balanced protection for a hybrid faith route.",
        weightClass: "Medium",
      },
    ],
    talismans: [
      {
        name: "Morne's Ring",
        slot: "Ring",
        effect: "Boosts miracle damage and keeps ranged pressure relevant.",
      },
      {
        name: "Ring of the Sun's First Born",
        slot: "Ring",
        effect: "Stacks more miracle damage for the core faith package.",
      },
      {
        name: "Prisoner's Chain",
        slot: "Ring",
        effect: "Smooths out the stat line for a comfortable hybrid spread.",
      },
    ],
    spells: [
      {
        name: "Lightning Arrow",
        school: "Miracle",
        description: "Flexible ranged pressure that keeps opponents moving on your terms.",
      },
      {
        name: "Lightning Blade",
        school: "Miracle",
        description: "The easiest way to turn an honest melee weapon into a real finisher.",
      },
      {
        name: "Tears of Denial",
        school: "Miracle",
        description: "Adds one more layer of safety for progression and invasions.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Use honest melee until the faith shell matures",
        description:
          "Early on, the build is more knight than miracle lord. Keep the weapon plan stable while faith catches up.",
      },
      {
        stage: "MID",
        title: "Start buffing real combat loops",
        description:
          "Once miracles matter, every fight opens up: you have ranged tools, weapon buffs, and a better safety floor.",
      },
      {
        stage: "LATE",
        title: "Become a complete hybrid",
        description:
          "Endgame faith builds shine because they can solve fights through either spell pressure or efficient melee execution.",
      },
    ],
    strengths: [
      "Very comfortable all-purpose build with real flexibility.",
      "Handles both PvE and PvP better than most specialized routes.",
      "Easy to understand and pilot for players new to casting hybrids.",
    ],
    weaknesses: [
      "Lower extreme ceiling than pure twinblade or full pyro routes.",
      "Requires buff upkeep to feel fully online.",
      "Can feel stat-hungry before the late-game spread is finished.",
    ],
    tags: [
      { slug: "miracles", weight: 3 },
      { slug: "lightning", weight: 3 },
      { slug: "hybrid", weight: 2 },
      { slug: "support-buffs", weight: 2 },
      { slug: "sustain", weight: 2 },
      { slug: "beginner-friendly", weight: 2 },
    ],
    alternatives: [
      {
        slug: "chaos-pyromancer-lord",
        reason: "A more explosive caster hybrid if you want better area denial and mix-ups.",
      },
      {
        slug: "cathedral-crusher",
        reason: "A better route if you want to trade and stagger instead of buff and pivot.",
      },
    ],
    ...noModernContent,
  },
];
