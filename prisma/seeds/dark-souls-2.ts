import type { BuildSeed } from "./seed-types";

const noModernContent = {
  perks: [],
  cyberware: [],
  operatingSystems: [],
} satisfies Pick<BuildSeed, "perks" | "cyberware" | "operatingSystems">;

export const darkSouls2BuildSeeds: BuildSeed[] = [
  {
    slug: "sunset-hexer-scholar",
    name: "Sunset Hexer Scholar",
    primaryArchetype: "Hexes and Rapier Support",
    summary:
      "A Scholar-era hex build that combines dark spell pressure, efficient casting, and a lightweight rapier finish for clean midrange control.",
    description:
      "Dark Souls 2 makes hexing feel strange and powerful, and this route embraces that identity. You use hexes to shape range and pacing, then close with rapier pokes only when the enemy is already softened or committed.",
    playstyle:
      "Control the fight at midrange with dark casts, force mistakes through repeated pressure, then step in with a fast thrusting weapon when the target overextends.",
    difficulty: "INTERMEDIATE",
    primaryMode: "HYBRID",
    combatStyle: "SPELLCASTER",
    stealthRating: 1,
    loudRating: 7,
    hackingRating: 0,
    mobilityRating: 7,
    survivabilityRating: 6,
    burstRating: 8,
    utilityRating: 10,
    pveRating: 9,
    pvpRating: 8,
    progressionCurve:
      "Comes online earlier than many DS2 hybrids because the Sunset Staff and dark routing pay off fast, then stays excellent through NG+ thanks to flexible damage profiles.",
    difficultyNotes:
      "Strong and adaptable, but wants better cast pacing and stamina management than straightforward melee routes.",
    isFeatured: true,
    sortOrder: 1,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 24 },
      { key: "endurance", label: "Endurance", value: 20 },
      { key: "vitality", label: "Vitality", value: 10 },
      { key: "attunement", label: "Attunement", value: 30 },
      { key: "strength", label: "Strength", value: 12 },
      { key: "dexterity", label: "Dexterity", value: 18 },
      { key: "adaptability", label: "Adaptability", value: 24 },
      { key: "intelligence", label: "Intelligence", value: 30 },
      { key: "faith", label: "Faith", value: 30 },
    ],
    supportStats: [
      { key: "spell-efficiency", label: "Spell Efficiency", value: 95 },
      { key: "midrange-control", label: "Midrange Control", value: 94 },
      { key: "counter-pressure", label: "Counter Pressure", value: 80 },
      { key: "forgiveness", label: "Forgiveness", value: 58 },
    ],
    weapons: [
      {
        name: "Sunset Staff",
        slot: "Catalyst",
        scalingOrProfile: "Dark hex catalyst",
        description: "The defining catalyst for the route and a huge reason the build feels coherent so early.",
      },
      {
        name: "Dark Silverblack Spear",
        slot: "Primary weapon",
        scalingOrProfile: "Dark scaling thrusts",
        description: "Gives the build a safer melee tool than overforcing every fight through spells alone.",
      },
      {
        name: "Espada Ropera",
        slot: "Bossing swap",
        scalingOrProfile: "Fast thrust damage",
        description: "A premium option when you want cleaner single-target melee punish windows.",
      },
    ],
    armorPieces: [
      {
        name: "Black Hood",
        slot: "Head",
        effect: "A classic caster piece that helps the build feel like a real hexer.",
        weightClass: "Light",
      },
      {
        name: "Lion Mage cuffs and skirt",
        slot: "Casting set",
        effect: "Improves cast flow and supports the scholar-caster identity.",
        weightClass: "Light",
      },
    ],
    talismans: [
      {
        name: "Clear Bluestone Ring",
        slot: "Ring",
        effect: "Improves cast speed and makes the route much safer under pressure.",
      },
      {
        name: "Southern Ritual Band",
        slot: "Ring",
        effect: "Adds attunement flexibility for a richer hex package.",
      },
      {
        name: "Chloranthy Ring",
        slot: "Ring",
        effect: "Smooths stamina recovery for hybrid spell-and-thrust play.",
      },
    ],
    spells: [
      {
        name: "Dark Orb",
        school: "Hex",
        description: "Reliable dark projectile pressure and the bread-and-butter cast of the build.",
      },
      {
        name: "Dark Weapon",
        school: "Hex",
        description: "Turns the melee side of the build into a real finisher instead of a backup plan.",
      },
      {
        name: "Great Resonant Soul",
        school: "Hex",
        description: "Adds heavier punish windows once spacing is under control.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Rush core casting tools",
        description:
          "The build identity appears the moment your dark casts and catalyst are good enough to control encounters from range.",
      },
      {
        stage: "MID",
        title: "Balance melee support and adaptability",
        description:
          "Do not ignore DS2 fundamentals. Attunement and dark stats matter, but so do roll feel and a reliable melee sidearm.",
      },
      {
        stage: "LATE",
        title: "Scale into true scholar control",
        description:
          "Late-game hexer strength is not only damage. It is the ability to choose range and tempo almost every time.",
      },
    ],
    strengths: [
      "Outstanding utility and excellent range control.",
      "Feels uniquely powerful in DS2's slower, spacing-heavy fights.",
      "Very flexible in PvE and still meaningful in invasions.",
    ],
    weaknesses: [
      "Needs more stat spread discipline than pure melee routes.",
      "Casting mistakes are punished hard against aggressive enemies.",
      "Lower durability than shielded or heavy-poise builds.",
    ],
    tags: [
      { slug: "hexes", weight: 3 },
      { slug: "dark", weight: 3 },
      { slug: "spellcaster", weight: 3 },
      { slug: "rapier", weight: 2 },
      { slug: "hybrid-mode", weight: 2 },
      { slug: "utility", weight: 2 },
    ],
    alternatives: [
      {
        slug: "ice-rapier-duelist",
        reason: "A better choice if you want cleaner melee boss damage with less casting overhead.",
      },
      {
        slug: "drangleic-stonewall",
        reason: "A much safer route if you want to win through durability and counter damage instead of spell control.",
      },
    ],
    ...noModernContent,
  },
  {
    slug: "ice-rapier-duelist",
    name: "Ice Rapier Duelist",
    primaryArchetype: "Dexterity and Counter Thrust",
    summary:
      "A dex-focused thrust route built around the Ice Rapier, quick counter damage, and one of the cleanest bossing patterns in Dark Souls 2.",
    description:
      "Dark Souls 2 loves thrust damage, and few weapons exploit that better than Ice Rapier. This build turns spacing, precise timing, and ring synergy into brutally efficient single-target damage.",
    playstyle:
      "Play just outside enemy range, force whiffs, and punish with rapid thrusts that capitalize on counter-hit windows rather than long combo commitments.",
    difficulty: "INTERMEDIATE",
    primaryMode: "PVE",
    combatStyle: "MELEE",
    stealthRating: 1,
    loudRating: 8,
    hackingRating: 0,
    mobilityRating: 9,
    survivabilityRating: 5,
    burstRating: 9,
    utilityRating: 6,
    pveRating: 10,
    pvpRating: 7,
    progressionCurve:
      "Feels honest early with thrusting swords, then becomes exceptional once Ice Rapier and ring scaling come together.",
    difficultyNotes:
      "Very efficient, but rewards spacing discipline more than panic rolling or brute forcing trades.",
    isFeatured: true,
    sortOrder: 2,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 22 },
      { key: "endurance", label: "Endurance", value: 24 },
      { key: "vitality", label: "Vitality", value: 10 },
      { key: "attunement", label: "Attunement", value: 8 },
      { key: "strength", label: "Strength", value: 13 },
      { key: "dexterity", label: "Dexterity", value: 50 },
      { key: "adaptability", label: "Adaptability", value: 26 },
      { key: "intelligence", label: "Intelligence", value: 11 },
      { key: "faith", label: "Faith", value: 5 },
    ],
    supportStats: [
      { key: "counter-hit", label: "Counter Hit", value: 96 },
      { key: "boss-dps", label: "Boss DPS", value: 94 },
      { key: "spacing", label: "Spacing", value: 90 },
      { key: "trade-power", label: "Trade Power", value: 36 },
    ],
    weapons: [
      {
        name: "Ice Rapier",
        slot: "Primary",
        scalingOrProfile: "Counter-hit thrusting sword",
        description: "The centerpiece of the route and one of the best bossing tools in the game.",
      },
      {
        name: "Espada Ropera",
        slot: "Alternate thrusting sword",
        scalingOrProfile: "Refined single-target poke plan",
        description: "A superb alternative if you want the same identity with slightly different handling.",
      },
    ],
    armorPieces: [
      {
        name: "Alonne Knight pieces",
        slot: "Core armor",
        effect: "Keeps the route agile while adding enough defense for stable progression.",
        weightClass: "Medium",
      },
    ],
    talismans: [
      {
        name: "Old Leo Ring",
        slot: "Ring",
        effect: "The signature counter-hit ring and a major reason thrust builds overperform in DS2.",
      },
      {
        name: "Ring of Blades",
        slot: "Ring",
        effect: "Straightforward physical damage support for every punish window.",
      },
      {
        name: "Flynn's Ring",
        slot: "Ring",
        effect: "Adds more damage while preserving the light setup the build prefers.",
      },
    ],
    spells: [],
    progression: [
      {
        stage: "EARLY",
        title: "Learn DS2 spacing before chasing peak damage",
        description:
          "The route is only as good as your ability to force whiffs and answer them immediately.",
      },
      {
        stage: "MID",
        title: "Commit to the counter-hit identity",
        description:
          "Once ring synergy and dexterity arrive, stop trying to brawl. This build wins through timing and clean punishes.",
      },
      {
        stage: "LATE",
        title: "Turn bosses into repetition tests",
        description:
          "Endgame Ice Rapier is at its best when you trust the spacing loop and refuse greedy extra hits.",
      },
    ],
    strengths: [
      "Exceptional boss damage and clean punish windows.",
      "Fast, precise, and highly satisfying once spacing clicks.",
      "Low animation commitment compared with heavier DS2 routes.",
    ],
    weaknesses: [
      "Much less forgiving in trades than heavy or shield routes.",
      "Needs stronger spacing discipline than many players expect.",
      "Lower room control against mobs than spell or power-stance setups.",
    ],
    tags: [
      { slug: "dexterity", weight: 3 },
      { slug: "rapier", weight: 3 },
      { slug: "precision", weight: 3 },
      { slug: "mobility", weight: 2 },
      { slug: "pve", weight: 3 },
      { slug: "melee", weight: 2 },
    ],
    alternatives: [
      {
        slug: "sunset-hexer-scholar",
        reason: "A better pick if you want more range, utility, and safer room control.",
      },
      {
        slug: "powerstance-raider",
        reason: "A more explosive melee route if you want bolder pressure and bigger dual-wield strings.",
      },
    ],
    ...noModernContent,
  },
  {
    slug: "drangleic-stonewall",
    name: "Drangleic Stonewall",
    primaryArchetype: "Greatshield and Heavy Strength",
    summary:
      "A classic heavy route built around shields, counter hits, and deliberate trades for players who want to survive anything DS2 throws at them.",
    description:
      "Dark Souls 2 rewards patience, and few builds embody that better than a proper stonewall setup. You slow the pace down, absorb pressure, and answer with crushing single hits rather than frantic strings.",
    playstyle:
      "Use shield stability and careful footwork to force safe answers, then convert openings into heavy strikes or counter hits after blocked pressure.",
    difficulty: "BEGINNER",
    primaryMode: "PVE",
    combatStyle: "MELEE",
    stealthRating: 1,
    loudRating: 8,
    hackingRating: 0,
    mobilityRating: 3,
    survivabilityRating: 10,
    burstRating: 8,
    utilityRating: 6,
    pveRating: 9,
    pvpRating: 6,
    progressionCurve:
      "Strong throughout the entire game because durability and shield value solve real problems before perfect execution is required.",
    difficultyNotes:
      "The most forgiving DS2 route in the new roster, but it asks for patience and proper stamina discipline behind the shield.",
    isFeatured: false,
    sortOrder: 3,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 34 },
      { key: "endurance", label: "Endurance", value: 30 },
      { key: "vitality", label: "Vitality", value: 28 },
      { key: "attunement", label: "Attunement", value: 8 },
      { key: "strength", label: "Strength", value: 50 },
      { key: "dexterity", label: "Dexterity", value: 18 },
      { key: "adaptability", label: "Adaptability", value: 20 },
      { key: "intelligence", label: "Intelligence", value: 3 },
      { key: "faith", label: "Faith", value: 6 },
    ],
    supportStats: [
      { key: "guard-stability", label: "Guard Stability", value: 95 },
      { key: "poise", label: "Poise", value: 88 },
      { key: "counter", label: "Counter Damage", value: 80 },
      { key: "mobility", label: "Mobility", value: 34 },
    ],
    weapons: [
      {
        name: "Mastodon Greatsword",
        slot: "Primary",
        scalingOrProfile: "Heavy physical pressure",
        description: "Reliable heavy damage that suits a shield-backed patience game.",
      },
      {
        name: "Tower Shield",
        slot: "Shield",
        scalingOrProfile: "Massive stability",
        description: "Turns dangerous pressure into manageable sequences for newer players.",
      },
    ],
    armorPieces: [
      {
        name: "Drangleic Set",
        slot: "Core armor",
        effect: "A natural fit for a durable route built around stability and pacing.",
        weightClass: "Heavy",
      },
    ],
    talismans: [
      {
        name: "Royal Soldier's Ring",
        slot: "Ring",
        effect: "Makes a true heavy loadout much easier to maintain.",
      },
      {
        name: "Ring of the Embedded",
        slot: "Ring",
        effect: "Adds stat flexibility to a hungry heavy build.",
      },
      {
        name: "Chloranthy Ring",
        slot: "Ring",
        effect: "Vital for keeping shield stamina and heavy punishes online.",
      },
    ],
    spells: [],
    progression: [
      {
        stage: "EARLY",
        title: "Respect stamina behind the shield",
        description:
          "The build is strong immediately, but only if you stop treating the shield as infinite safety.",
      },
      {
        stage: "MID",
        title: "Upgrade one heavy answer",
        description:
          "Let a single main weapon solve fights while armor and rings gradually complete the stonewall identity.",
      },
      {
        stage: "LATE",
        title: "Win through inevitability",
        description:
          "Late-game Stonewall is about never panicking. You outlast, outblock, and then punish.",
      },
    ],
    strengths: [
      "Safest DS2 progression route in the expanded roster.",
      "Great for blind runs, tough DLC pulls, and attrition-heavy areas.",
      "Very simple game plan with strong defensive upside.",
    ],
    weaknesses: [
      "Low mobility and slower clears than lighter routes.",
      "Can struggle to chase evasive targets efficiently.",
      "Feels methodical rather than exciting if you prefer aggression.",
    ],
    tags: [
      { slug: "strength", weight: 3 },
      { slug: "tank", weight: 3 },
      { slug: "sustain", weight: 2 },
      { slug: "methodical", weight: 2 },
      { slug: "beginner-friendly", weight: 3 },
      { slug: "pve", weight: 3 },
    ],
    alternatives: [
      {
        slug: "powerstance-raider",
        reason: "A more explosive answer if you want melee aggression over shielded consistency.",
      },
      {
        slug: "sunset-hexer-scholar",
        reason: "A better fit if you want safety through spacing and spells rather than armor and blocking.",
      },
    ],
    ...noModernContent,
  },
  {
    slug: "powerstance-raider",
    name: "Powerstance Raider",
    primaryArchetype: "Dual-Wield Quality Pressure",
    summary:
      "A swagger-heavy DS2 route that leans into powerstancing, aggressive dual-weapon strings, and rapid punish windows once stamina is available.",
    description:
      "This build exists for players who want Dark Souls 2 to feel explosive. It invests enough in both strength and dexterity to unlock strong paired weapons, then uses stamina and spacing to keep pressure rolling.",
    playstyle:
      "Threaten fast powerstance strings, force evasive movement, and convert every hesitation into another burst of dual-wield damage.",
    difficulty: "ADVANCED",
    primaryMode: "HYBRID",
    combatStyle: "MELEE",
    stealthRating: 1,
    loudRating: 10,
    hackingRating: 0,
    mobilityRating: 8,
    survivabilityRating: 5,
    burstRating: 9,
    utilityRating: 5,
    pveRating: 8,
    pvpRating: 8,
    progressionCurve:
      "Feels awkward before stamina and stat breakpoints are met, then suddenly becomes one of the most fun and expressive melee routes in the game.",
    difficultyNotes:
      "High reward, but mistakes are expensive because stamina disappears fast and the build does not forgive lazy spacing.",
    isFeatured: false,
    sortOrder: 4,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 24 },
      { key: "endurance", label: "Endurance", value: 34 },
      { key: "vitality", label: "Vitality", value: 14 },
      { key: "attunement", label: "Attunement", value: 6 },
      { key: "strength", label: "Strength", value: 40 },
      { key: "dexterity", label: "Dexterity", value: 40 },
      { key: "adaptability", label: "Adaptability", value: 24 },
      { key: "intelligence", label: "Intelligence", value: 3 },
      { key: "faith", label: "Faith", value: 6 },
    ],
    supportStats: [
      { key: "dual-pressure", label: "Dual Pressure", value: 95 },
      { key: "stamina-hunger", label: "Stamina Hunger", value: 92 },
      { key: "roll-catch", label: "Roll Catch", value: 84 },
      { key: "defense", label: "Defense", value: 42 },
    ],
    weapons: [
      {
        name: "Dual Maces",
        slot: "Powerstance core",
        scalingOrProfile: "High stagger and blunt punish",
        description: "A brutal paired setup that hits hard and feels immediately distinct once powerstance is active.",
      },
      {
        name: "Red Rust Scimitar pair",
        slot: "Dexterity-heavy swap",
        scalingOrProfile: "Faster dual-wield tempo",
        description: "Use when you want a more mobile version of the same philosophy.",
      },
    ],
    armorPieces: [
      {
        name: "Raime-inspired mixed set",
        slot: "Core armor",
        effect: "Enough poise and style to keep aggression from collapsing immediately.",
        weightClass: "Medium",
      },
    ],
    talismans: [
      {
        name: "Ring of Blades",
        slot: "Ring",
        effect: "A direct multiplier for every dual-hit window.",
      },
      {
        name: "Stone Ring",
        slot: "Ring",
        effect: "Adds more disruption and stagger to aggressive sequences.",
      },
      {
        name: "Third Dragon Ring",
        slot: "Ring",
        effect: "Supports the HP, stamina, and equip load this route desperately wants.",
      },
    ],
    spells: [],
    progression: [
      {
        stage: "EARLY",
        title: "Do not force powerstance too soon",
        description:
          "The route only works once your stamina and core stats can actually support repeated dual-wield sequences.",
      },
      {
        stage: "MID",
        title: "Build the real aggression loop",
        description:
          "Midgame is where the fun begins: correct spacing turns into rapid pressure and much faster kills.",
      },
      {
        stage: "LATE",
        title: "Explode punish windows",
        description:
          "At endgame, the route becomes an all-in damage answer for players who trust their mechanics.",
      },
    ],
    strengths: [
      "Very high melee excitement and explosive punish windows.",
      "Distinctive DS2 powerstance identity rather than generic one-weapon play.",
      "Strong roll-catch and pressure once mastered.",
    ],
    weaknesses: [
      "Very stamina-hungry and less forgiving than almost every other DS2 route here.",
      "Needs more careful setup before it feels truly online.",
      "Poor fallback plan if pressure fails and the fight resets.",
    ],
    tags: [
      { slug: "quality", weight: 3 },
      { slug: "aggressive", weight: 3 },
      { slug: "mobility", weight: 2 },
      { slug: "explosive", weight: 2 },
      { slug: "execution-heavy", weight: 3 },
      { slug: "hybrid-mode", weight: 2 },
    ],
    alternatives: [
      {
        slug: "ice-rapier-duelist",
        reason: "A better dexterity route if you want precision without the same stamina chaos.",
      },
      {
        slug: "drangleic-stonewall",
        reason: "The conservative opposite for players who want durability over flair.",
      },
    ],
    ...noModernContent,
  },
];
