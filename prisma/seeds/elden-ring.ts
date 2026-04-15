import type { BuildSeed } from "./seed-types";

const noCyberContent = {
  perks: [],
  cyberware: [],
  operatingSystems: [],
} satisfies Pick<BuildSeed, "perks" | "cyberware" | "operatingSystems">;

export const eldenRingBuildSeeds: BuildSeed[] = [
  {
    slug: "strength-colossal-titan",
    name: "Titan of Colossal Strength",
    primaryArchetype: "Strength and Colossal Weapons",
    summary:
      "A colossal route built around Greatsword openings, Lion's Claw punishes, and late-game stance breaks with heavier weapons.",
    description:
      "This version of the strength path follows the community greatsword-to-colossal progression: start with an honest two-handed weapon, then graduate into jump-attack loops, critical hits, and late-game colossal pressure once your endurance and talismans are ready.",
    playstyle:
      "Deliberate two-handed aggression with Lion's Claw, jump attacks, charged heavies, and decisive crits after stance breaks.",
    difficulty: "INTERMEDIATE",
    primaryMode: "PVE",
    combatStyle: "MELEE",
    stealthRating: 1,
    loudRating: 8,
    hackingRating: 0,
    mobilityRating: 4,
    survivabilityRating: 9,
    burstRating: 9,
    utilityRating: 5,
    pveRating: 10,
    pvpRating: 6,
    progressionCurve:
      "Starts strong the moment the early Greatsword route is online, spikes again with jump-attack talismans, and finishes as a late-game stance-break monster once heavier colossal options join the kit.",
    difficultyNotes:
      "Comfortable in PvE if you respect stamina and recovery. Most mistakes come from emptying endurance on jump loops or swinging again after the stance break is already secured.",
    isFeatured: true,
    sortOrder: 1,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 60 },
      { key: "mind", label: "Mind", value: 15 },
      { key: "endurance", label: "Endurance", value: 38 },
      { key: "strength", label: "Strength", value: 66 },
      { key: "dexterity", label: "Dexterity", value: 18 },
      { key: "intelligence", label: "Intelligence", value: 9 },
      { key: "faith", label: "Faith", value: 15 },
      { key: "arcane", label: "Arcane", value: 7 },
    ],
    supportStats: [
      { key: "poise", label: "Poise", value: 78 },
      { key: "stance-break", label: "Stance Break", value: 93 },
      { key: "guard-break", label: "Guard Break", value: 84 },
      { key: "mobility", label: "Mobility", value: 41 },
    ],
    weapons: [
      {
        name: "Greatsword",
        slot: "Primary",
        scalingOrProfile: "Heavy affinity, Lion's Claw",
        description: "The foundational two-hander for the route: excellent reach, huge poise damage, and a reliable Lion's Claw punish pattern.",
      },
      {
        name: "Giant-Crusher",
        slot: "Late-game swap",
        scalingOrProfile: "Heavy affinity, charged heavy focus",
        description: "Takes the build from strong to absurd once you can afford the weight and want the biggest possible stance damage.",
      },
      {
        name: "Ruins Greatsword",
        slot: "Power-stance option",
        scalingOrProfile: "Colossal sword, gravity wave skill",
        description: "A premium strength variant for jump attacks, knockdowns, and late-game dual-colossal experiments.",
      },
    ],
    armorPieces: [
      {
        name: "Bull-Goat Helm",
        slot: "Head",
        effect: "Massive poise for trading under pressure.",
        weightClass: "Heavy",
      },
      {
        name: "Veteran's Armor",
        slot: "Chest",
        effect: "Excellent protection without burying the build in immobility.",
        weightClass: "Heavy",
      },
      {
        name: "Bull-Goat Greaves",
        slot: "Legs",
        effect: "Stabilize the game plan through hyperarmor.",
        weightClass: "Heavy",
      },
    ],
    talismans: [
      {
        name: "Claw Talisman",
        slot: "Burst Damage",
        effect: "Boosts jump attacks, the safest burst cycle for this build.",
      },
      {
        name: "Great-Jar's Arsenal",
        slot: "Loadout",
        effect: "Lets you keep heavy armor without losing the medium roll.",
      },
      {
        name: "Dragoncrest Greatshield Talisman",
        slot: "Defense",
        effect: "Smooths out long boss fights and trading mistakes.",
      },
      {
        name: "Axe Talisman",
        slot: "Damage",
        effect: "Rewards charged heavy attacks when the tempo is fully yours.",
      },
    ],
    spells: [
      {
        name: "Flame, Grant Me Strength",
        school: "Incantation",
        description: "A compact buff for physical burst windows.",
      },
      {
        name: "Bestial Vitality",
        school: "Incantation",
        description: "Cheap sustain between enemy packs and mistakes.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Secure the first real two-hander",
        description:
          "Upgrade the Greatsword early, add enough Vigor to survive mistakes, and let raw weapon scaling do the heavy lifting before you chase full heavy armor.",
      },
      {
        stage: "MID",
        title: "Lean into jump attacks and poise damage",
        description:
          "Once Claw Talisman, Endurance, and better armor are in place, start solving encounters through jump attacks, Lion's Claw, and guaranteed crits after stance breaks.",
      },
      {
        stage: "LATE",
        title: "Graduate into true colossal pressure",
        description:
          "Add Giant-Crusher or Ruins Greatsword once your loadout can support them, then choose between safer Greatsword loops and maximal stance-break punish windows.",
      },
    ],
    strengths: [
      "Deletes boss stance bars with very little setup once the loop is learned.",
      "Scales cleanly from early Greatsword play into late-game colossal pressure.",
      "Jump attacks, crits, and Lion's Claw give the build a very clear game plan.",
      "Exceptionally stable for PvE players who want power without buff micromanagement.",
    ],
    weaknesses: [
      "Recovery windows are long and greed gets punished hard.",
      "Low mobility makes bad positioning expensive in both bosses and invasions.",
      "Fast duelists can bait whiffs if you rely only on jump pressure.",
      "Load management matters more than on lighter melee paths.",
    ],
    tags: [
      { slug: "strength", weight: 3 },
      { slug: "colossal", weight: 3 },
      { slug: "tank", weight: 2 },
      { slug: "aggressive", weight: 2 },
      { slug: "pve", weight: 3 },
      { slug: "melee", weight: 2 },
      { slug: "beginner-friendly", weight: 2 },
    ],
    alternatives: [
      {
        slug: "faith-fire-crusader",
        reason: "Keeps frontline pressure but adds sustain and cleaner ranged tools.",
      },
      {
        slug: "frost-moon-spellblade",
        reason: "Trades raw stance damage for a safer hybrid duel plan and frost utility.",
      },
    ],
    ...noCyberContent,
  },
  {
    slug: "dex-bleed-ronin",
    name: "Bleed Ronin",
    primaryArchetype: "Bleed and Dexterity",
    summary:
      "A dual-katana bleed route built around Nagakiba reach, off-hand bleed buildup, and relentless roll catches.",
    description:
      "This version of Bleed Ronin follows the long-katana community route: keep Nagakiba on point, add Uchigatana or Rivers of Blood for faster bleed payoffs, and turn every clean dodge, jump-in, or chase into another status threat.",
    playstyle:
      "Fast katana pressure with rolling pokes, jump-ins, consecutive-hit scaling, and bleed bursts that punish panic movement.",
    difficulty: "ADVANCED",
    primaryMode: "HYBRID",
    combatStyle: "MELEE",
    stealthRating: 2,
    loudRating: 9,
    hackingRating: 0,
    mobilityRating: 9,
    survivabilityRating: 5,
    burstRating: 8,
    utilityRating: 6,
    pveRating: 8,
    pvpRating: 9,
    progressionCurve:
      "Feels good as soon as a real katana core is online, then spikes hard once Nagakiba, White Mask, and consecutive-hit talismans turn every string into a bleed event.",
    difficultyNotes:
      "Very strong, but panic rolls, bad stamina habits, and sloppy spacing all cut directly into the build's payoff.",
    isFeatured: true,
    sortOrder: 2,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 55 },
      { key: "mind", label: "Mind", value: 14 },
      { key: "endurance", label: "Endurance", value: 26 },
      { key: "strength", label: "Strength", value: 18 },
      { key: "dexterity", label: "Dexterity", value: 52 },
      { key: "intelligence", label: "Intelligence", value: 9 },
      { key: "faith", label: "Faith", value: 8 },
      { key: "arcane", label: "Arcane", value: 32 },
    ],
    supportStats: [
      { key: "bleed-rate", label: "Bleed Rate", value: 95 },
      { key: "mobility", label: "Mobility", value: 91 },
      { key: "counter-hit", label: "Counter Hit", value: 68 },
      { key: "sustain", label: "Sustain", value: 42 },
    ],
    weapons: [
      {
        name: "Nagakiba",
        slot: "Primary",
        scalingOrProfile: "Bleed affinity, long-reach katana",
        description: "The signature blade for spacing, chase pressure, and safer bleed application against both bosses and players.",
      },
      {
        name: "Uchigatana",
        slot: "Off-hand",
        scalingOrProfile: "Bleed affinity, Seppuku or Braggart's Roar",
        description: "Adds faster off-hand bleed buildup and lets the build scale through consecutive-hit talismans.",
      },
      {
        name: "Rivers of Blood",
        slot: "Aggressive swap",
        scalingOrProfile: "Arcane/Dexterity, Corpse Piler",
        description: "A more explosive variant when you want obvious burst windows instead of the cleaner dual-katana neutral game.",
      },
    ],
    armorPieces: [
      {
        name: "White Mask",
        slot: "Head",
        effect: "Boosts damage after Blood Loss triggers.",
        weightClass: "Medium",
      },
      {
        name: "Land of Reeds Armor",
        slot: "Chest",
        effect: "Keeps load light for faster neutral movement.",
        weightClass: "Medium",
      },
    ],
    talismans: [
      {
        name: "Lord of Blood's Exultation",
        slot: "Core",
        effect: "Huge damage spike after Bleed procs.",
      },
      {
        name: "Millicent's Prosthesis",
        slot: "Pressure",
        effect: "Rewards long hit strings with growing damage.",
      },
      {
        name: "Winged Sword Insignia",
        slot: "Tempo",
        effect: "Improves sustained aggression while you keep a target under pressure.",
      },
      {
        name: "Erdtree's Favor +2",
        slot: "Flexible Slot",
        effect: "Adds enough HP and stamina to smooth out mistakes.",
      },
    ],
    spells: [
      {
        name: "Bloodflame Blade",
        school: "Incantation",
        description: "An alternate buff for standard bleed katanas.",
      },
      {
        name: "Flame, Cleanse Me",
        school: "Incantation",
        description: "Cheap utility against rot and poison.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Assemble the katana core",
        description:
          "Use any early katana with Bloodflame Blade until Nagakiba or your preferred dual-katana setup is ready to carry the route.",
      },
      {
        stage: "MID",
        title: "Turn pressure into real bleed spikes",
        description:
          "Once White Mask, Exultation, and your consecutive-hit talismans are in place, every clean string should threaten either a bleed pop or a roll catch.",
      },
      {
        stage: "LATE",
        title: "Tune the build for matchups",
        description:
          "Swap between pure dual-katana pressure and a more explosive Rivers of Blood variant depending on whether you need cleaner neutral or faster punish windows.",
      },
    ],
    strengths: [
      "Nagakiba reach makes pressure safer than most fast bleed setups.",
      "Consecutive-hit talismans and bleed pops create oppressive snowball turns.",
      "Excellent duel tempo thanks to high mobility and strong chase tools.",
      "Small equipment swaps let it pivot between bosses, invasions, and hybrid play.",
    ],
    weaknesses: [
      "Mistakes are punished harder than in heavy melee builds.",
      "Status-resistant targets reduce your best kill windows immediately.",
      "Execution quality matters every second, especially in PvP spacing.",
      "Can feel fragile if you chase one more hit instead of resetting neutral.",
    ],
    tags: [
      { slug: "dexterity", weight: 3 },
      { slug: "bleed", weight: 3 },
      { slug: "mobility", weight: 3 },
      { slug: "aggressive", weight: 2 },
      { slug: "pvp", weight: 3 },
      { slug: "melee", weight: 2 },
    ],
    alternatives: [
      {
        slug: "dragon-communion-hunter",
        reason: "Keeps Arcane scaling and status pressure, but adds ranged Dragon Communion tools.",
      },
      {
        slug: "frost-moon-spellblade",
        reason: "Trades bleed spikes for safer hybrid control and frost utility.",
      },
    ],
    ...noCyberContent,
  },
  {
    slug: "faith-fire-crusader",
    name: "Faith Fire Crusader",
    primaryArchetype: "Faith and Fire",
    summary:
      "A Faith bruiser built around Blasphemous Blade sustain, Giant-flame burst, and layered self-buffs.",
    description:
      "This build follows the most reliable community fire-faith pattern: stay practical early, then graduate into Blasphemous Blade, Golden Vow, and Giantsflame pressure for a build that heals through mistakes and still deletes bosses on demand.",
    playstyle:
      "Hybrid frontline play with buff upkeep, Taker's Flames sustain, and ranged Giantsflame punishes whenever the enemy gives you real space.",
    difficulty: "INTERMEDIATE",
    primaryMode: "PVE",
    combatStyle: "HYBRID",
    stealthRating: 1,
    loudRating: 7,
    hackingRating: 0,
    mobilityRating: 5,
    survivabilityRating: 8,
    burstRating: 8,
    utilityRating: 8,
    pveRating: 9,
    pvpRating: 7,
    progressionCurve:
      "Starts as a practical Faith hybrid, stabilizes the moment the seal-and-blade core is assembled, and becomes a marathon-killer once buff duration and skill damage are fully tuned.",
    difficultyNotes:
      "Very forgiving overall, but the build feels dramatically better when buffs are treated as openers and FP is paced around Taker's Flames instead of panic casting.",
    isFeatured: true,
    sortOrder: 3,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 58 },
      { key: "mind", label: "Mind", value: 28 },
      { key: "endurance", label: "Endurance", value: 28 },
      { key: "strength", label: "Strength", value: 24 },
      { key: "dexterity", label: "Dexterity", value: 18 },
      { key: "intelligence", label: "Intelligence", value: 9 },
      { key: "faith", label: "Faith", value: 60 },
      { key: "arcane", label: "Arcane", value: 10 },
    ],
    supportStats: [
      { key: "healing", label: "Healing", value: 82 },
      { key: "fire-burst", label: "Fire Burst", value: 88 },
      { key: "fp-sustain", label: "FP Sustain", value: 69 },
      { key: "versatility", label: "Versatility", value: 90 },
    ],
    weapons: [
      {
        name: "Blasphemous Blade",
        slot: "Primary",
        scalingOrProfile: "Faith/Strength, Taker's Flames",
        description: "The main boss killer with a strong sustain backbone.",
      },
      {
        name: "Giant's Seal",
        slot: "Seal",
        scalingOrProfile: "Fire incantation specialist",
        description: "The strongest catalyst when Giantsflame and other fire incantations are the real reason you cast.",
      },
      {
        name: "Erdtree Seal",
        slot: "Swap seal",
        scalingOrProfile: "Pure Faith scaling",
        description: "A cleaner all-purpose swap when you want support incantations without leaning so hard on fire.",
      },
    ],
    armorPieces: [
      {
        name: "Raging Wolf Helm",
        slot: "Head",
        effect: "Keeps the load medium while still providing solid defense.",
        weightClass: "Medium",
      },
      {
        name: "Malformed Dragon Armor",
        slot: "Chest",
        effect: "Adds weight without breaking cast comfort.",
        weightClass: "Medium",
      },
    ],
    talismans: [
      {
        name: "Fire Scorpion Charm",
        slot: "Damage",
        effect: "Boosts fire incantations and the Blasphemous Blade burst.",
      },
      {
        name: "Shard of Alexander",
        slot: "Skill",
        effect: "Pushes Taker's Flames into boss-finisher territory.",
      },
      {
        name: "Flock's Canvas Talisman",
        slot: "Incantations",
        effect: "Improves both offensive and utility Faith incantations.",
      },
      {
        name: "Old Lord's Talisman",
        slot: "Buffs",
        effect: "Extends buffs so fights start in your favor.",
      },
    ],
    spells: [
      {
        name: "Giantsflame Take Thee",
        school: "Incantation",
        description: "The main ranged nuke for slow or grouped targets.",
      },
      {
        name: "Flame, Grant Me Strength",
        school: "Incantation",
        description: "A compact amplifier for both sword damage and burst casting.",
      },
      {
        name: "Golden Vow",
        school: "Incantation",
        description: "A reliable global buff for solo play and co-op.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Bridge the early game with practical Faith tools",
        description:
          "Level Vigor and Faith together, using comfortable melee weapons and cheap incantations until the true fire kit arrives.",
      },
      {
        stage: "MID",
        title: "Assemble the seal-and-blade core",
        description:
          "Once Blasphemous Blade and your preferred seal are online, split encounters between safe ranged fire and Taker's Flames punish windows.",
      },
      {
        stage: "LATE",
        title: "Stretch buffs and outlast bosses",
        description:
          "Round out the talismans, extend your buff windows, and use Taker's Flames as both a finisher and a sustain engine in marathon fights.",
      },
    ],
    strengths: [
      "Excellent survivability for long PvE encounters.",
      "Blasphemous Blade creates some of the safest sustain loops in the game.",
      "Strong ranged and melee options live in the same loadout without awkward swaps.",
      "Ideal for players who want power without the fragility of pure casters.",
    ],
    weaknesses: [
      "FP dependency grows in long fights with frequent damage windows.",
      "Less explosive in PvP than specialized dueling builds.",
      "Buff upkeep adds more mental load than a pure weapon route.",
      "Fire-resistant enemies push the build harder toward its support tools.",
    ],
    tags: [
      { slug: "faith", weight: 3 },
      { slug: "fire", weight: 3 },
      { slug: "sustain", weight: 3 },
      { slug: "utility", weight: 2 },
      { slug: "pve", weight: 3 },
      { slug: "hybrid", weight: 2 },
    ],
    alternatives: [
      {
        slug: "strength-colossal-titan",
        reason: "Better for players who want a simpler melee-first loop with less casting.",
      },
      {
        slug: "dragon-communion-hunter",
        reason: "Keeps spell pressure but leans harder into Arcane scaling and more unusual matchup tools.",
      },
    ],
    ...noCyberContent,
  },
  {
    slug: "intelligence-comet-mage",
    name: "Intelligence Comet Mage",
    primaryArchetype: "Intelligence and Sorcery",
    summary:
      "A pure sorcery route built around Dark Moon debuffs, Terra Magica setups, Night Comet pressure, and Comet Azur phase skips.",
    description:
      "This is the classic boss-melter mage: open with Ranni's Dark Moon to lower magic resistance, establish a safe Terra Magica lane, and convert real punish windows into Night Comet or Comet Azur instead of gambling on bad casts.",
    playstyle:
      "Pure sorcery spacing with pre-positioning, cast-speed management, moon debuffs, and explosive punish windows that can skip entire phases.",
    difficulty: "ADVANCED",
    primaryMode: "PVE",
    combatStyle: "SPELLCASTER",
    stealthRating: 2,
    loudRating: 6,
    hackingRating: 0,
    mobilityRating: 6,
    survivabilityRating: 3,
    burstRating: 10,
    utilityRating: 7,
    pveRating: 9,
    pvpRating: 6,
    progressionCurve:
      "Early game is about efficient sorceries and the Meteorite Staff, midgame is about reliable Dark Moon setups, and late game is where premium staves and Terra Magica turn encounter knowledge into boss deletions.",
    difficultyNotes:
      "Incredible when piloted cleanly, but almost every death comes from greed. The build rewards honest cast windows and preparation more than panic reactions.",
    isFeatured: true,
    sortOrder: 4,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 45 },
      { key: "mind", label: "Mind", value: 38 },
      { key: "endurance", label: "Endurance", value: 18 },
      { key: "strength", label: "Strength", value: 10 },
      { key: "dexterity", label: "Dexterity", value: 18 },
      { key: "intelligence", label: "Intelligence", value: 80 },
      { key: "faith", label: "Faith", value: 7 },
      { key: "arcane", label: "Arcane", value: 9 },
    ],
    supportStats: [
      { key: "fp-pool", label: "FP Pool", value: 94 },
      { key: "spell-range", label: "Spell Range", value: 86 },
      { key: "burst", label: "Burst", value: 99 },
      { key: "safety", label: "Safety", value: 38 },
    ],
    weapons: [
      {
        name: "Carian Regal Scepter",
        slot: "Primary",
        scalingOrProfile: "Efficient Intelligence scaling",
        description: "The most stable staff for everyday sorcery play and Dark Moon opening routes.",
      },
      {
        name: "Lusat's Glintstone Staff",
        slot: "Burst swap",
        scalingOrProfile: "High sorcery scaling",
        description: "The premium damage staff when the goal is to cash in a boss punish window as hard as possible.",
      },
      {
        name: "Meteorite Staff",
        slot: "Early-game support",
        scalingOrProfile: "Gravity sorcery support",
        description: "Carries the build before premium catalysts arrive and gives gravity sorceries a clean niche.",
      },
    ],
    armorPieces: [
      {
        name: "Spellblade's Pointed Hat",
        slot: "Head",
        effect: "A small boost to magic damage for the main nuke plan.",
        weightClass: "Light",
      },
      {
        name: "Snow Witch Robe",
        slot: "Chest",
        effect: "Supports flexible frost sorcery options.",
        weightClass: "Light",
      },
    ],
    talismans: [
      {
        name: "Magic Scorpion Charm",
        slot: "Damage",
        effect: "Maximizes the build's main strength: deleting targets from range.",
      },
      {
        name: "Graven-Mass Talisman",
        slot: "Sorcery",
        effect: "Reliably boosts all key offensive sorceries.",
      },
      {
        name: "Radagon Icon",
        slot: "Cast Speed",
        effect: "Shortens punishable long cast animations in tight windows.",
      },
      {
        name: "Primal Glintstone Blade",
        slot: "Economy",
        effect: "Improves survivability if you're willing to tolerate the HP tradeoff.",
      },
    ],
    spells: [
      {
        name: "Comet Azur",
        school: "Sorcery",
        description: "The signature burst spell for boss punish windows.",
      },
      {
        name: "Night Comet",
        school: "Sorcery",
        description: "Reliable ranged pressure that is useful almost everywhere.",
      },
      {
        name: "Terra Magica",
        school: "Sorcery",
        description: "A setup amplifier for phases with fixed positioning.",
      },
      {
        name: "Ranni's Dark Moon",
        school: "Sorcery",
        description: "A heavy opener debuff that multiplies the magic damage that follows.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Play safely and let early staffs carry you",
        description:
          "Use efficient glintstone sorceries and the Meteorite Staff to survive until premium catalysts, cast-speed tools, and the moon package arrive.",
      },
      {
        stage: "MID",
        title: "Build around Dark Moon openings",
        description:
          "Once Dark Moon and reliable catalysts are online, start every serious fight by setting up the magic-resistance debuff before committing to the big casts.",
      },
      {
        stage: "LATE",
        title: "Convert setup into phase skips",
        description:
          "Use Terra Magica, Night Comet, and Comet Azur only on real punish windows so the build feels surgical instead of reckless.",
      },
    ],
    strengths: [
      "One of the highest boss damage ceilings in the app.",
      "Dark Moon plus Terra Magica gives the build a very readable win condition.",
      "Can erase dangerous enemies before they ever reach melee range.",
      "The spell kit stays expressive across bosses, trash packs, and elite casters.",
    ],
    weaknesses: [
      "Extremely fragile if spacing breaks down.",
      "High FP demands punish inefficient or greedy casting.",
      "Bad camera angles and bad terrain hurt more than on hybrid mages.",
      "Less comfortable in messy PvP scrums than a moonblade hybrid.",
    ],
    tags: [
      { slug: "intelligence", weight: 3 },
      { slug: "mage", weight: 3 },
      { slug: "ranged", weight: 3 },
      { slug: "glass-cannon", weight: 2 },
      { slug: "pve", weight: 3 },
      { slug: "control", weight: 2 },
    ],
    alternatives: [
      {
        slug: "frost-moon-spellblade",
        reason: "Keeps Intelligence scaling but adds backup melee and more forgiving close-range answers.",
      },
      {
        slug: "faith-fire-crusader",
        reason: "A sturdier caster option if the player wants survivability over pure nuke windows.",
      },
    ],
    ...noCyberContent,
  },
  {
    slug: "frost-moon-spellblade",
    name: "Moonfrost Spellblade",
    primaryArchetype: "Frost Spellblade",
    summary:
      "A Dark Moon Greatsword hybrid that blends frost buildup, Adula pressure, and elegant melee conversions.",
    description:
      "Moonfrost Spellblade lives between duelist and sorcerer. It wins by opening with Ranni's Dark Moon, forcing awkward movement under frost pressure, and cashing that space in with Adula's Moonblade or Dark Moon Greatsword beams.",
    playstyle:
      "A hybrid spellblade that alternates ranged control with clean melee finishers.",
    difficulty: "INTERMEDIATE",
    primaryMode: "HYBRID",
    combatStyle: "HYBRID",
    stealthRating: 2,
    loudRating: 7,
    hackingRating: 0,
    mobilityRating: 7,
    survivabilityRating: 6,
    burstRating: 7,
    utilityRating: 8,
    pveRating: 8,
    pvpRating: 8,
    progressionCurve:
      "Strong in mid and late game once Dark Moon Greatsword, Adula's Moonblade, and the frost debuff loop are all online together.",
    difficultyNotes:
      "Safer than a pure mage, but it still asks for clean spell-and-weapon cycling and deliberate use of frost windows.",
    isFeatured: false,
    sortOrder: 5,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 52 },
      { key: "mind", label: "Mind", value: 24 },
      { key: "endurance", label: "Endurance", value: 24 },
      { key: "strength", label: "Strength", value: 16 },
      { key: "dexterity", label: "Dexterity", value: 20 },
      { key: "intelligence", label: "Intelligence", value: 68 },
      { key: "faith", label: "Faith", value: 7 },
      { key: "arcane", label: "Arcane", value: 9 },
    ],
    supportStats: [
      { key: "frost-rate", label: "Frost Rate", value: 86 },
      { key: "dueling", label: "Dueling", value: 81 },
      { key: "range", label: "Spacing Control", value: 74 },
      { key: "survival", label: "Survival", value: 64 },
    ],
    weapons: [
      {
        name: "Dark Moon Greatsword",
        slot: "Primary",
        scalingOrProfile: "Intelligence scaling, Moonlight",
        description: "The main hybrid weapon for ranged and close pressure with Frost.",
      },
      {
        name: "Carian Glintstone Staff",
        slot: "Catalyst",
        scalingOrProfile: "Sorcery scaling",
        description: "Supports Carian sword sorcery and standard ranged options.",
      },
    ],
    armorPieces: [
      {
        name: "Carian Knight Armor",
        slot: "Chest",
        effect: "An ideal balance between poise and casting freedom.",
        weightClass: "Medium",
      },
      {
        name: "Blaidd's Greaves",
        slot: "Legs",
        effect: "Add enough poise to survive close-range scrambles.",
        weightClass: "Medium",
      },
    ],
    talismans: [
      {
        name: "Godfrey Icon",
        slot: "Skill",
        effect: "Rewards charged Moonlight and heavier sorcery conversions.",
      },
      {
        name: "Dragoncrest Greatshield Talisman",
        slot: "Defense",
        effect: "Lets you survive closer trades at mid-range.",
      },
      {
        name: "Shard of Alexander",
        slot: "Damage",
        effect: "Improves the Dark Moon weapon skill loop.",
      },
      {
        name: "Graven-Mass Talisman",
        slot: "Sorcery",
        effect: "Keeps ranged options relevant in mixed fights.",
      },
    ],
    spells: [
      {
        name: "Adula's Moonblade",
        school: "Sorcery",
        description: "The signature hybrid slash that links melee and magical pressure.",
      },
      {
        name: "Ranni's Dark Moon",
        school: "Sorcery",
        description: "The signature opening frost debuff that defines the build.",
      },
      {
        name: "Carian Piercer",
        school: "Sorcery",
        description: "Punishes both over-aggression and escape routes.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Play as an Intelligence and melee hybrid",
        description:
          "Use comfortable straight swords and basic glintstone tools until the moonblade core is fully online.",
      },
      {
        stage: "MID",
        title: "Transition into a frost identity",
        description:
          "Start building fights around frost windows and debuffs instead of simple cast spam.",
      },
      {
        stage: "LATE",
        title: "Control tempo with moonlit tools",
        description:
          "Use Adula's Moonblade and the Dark Moon Greatsword to punish anyone who overcommits into mid-range.",
      },
    ],
    strengths: [
      "Excellent flexibility between ranged control and close-range finishers.",
      "More forgiving than pure sorcery when a fight collapses into close range.",
      "Strong PvP rhythm thanks to layered frost pressure.",
    ],
    weaknesses: [
      "Never reaches the raw burst ceiling of a pure mage or colossal build.",
      "Requires cleaner weapon and sorcery cycling than it first appears.",
      "Still resource-sensitive in marathon fights.",
    ],
    tags: [
      { slug: "intelligence", weight: 3 },
      { slug: "frost", weight: 3 },
      { slug: "spellblade", weight: 3 },
      { slug: "hybrid", weight: 2 },
      { slug: "pvp", weight: 2 },
      { slug: "control", weight: 2 },
    ],
    alternatives: [
      {
        slug: "intelligence-comet-mage",
        reason: "Better if the player wants full ranged dominance instead of hybrid spacing.",
      },
      {
        slug: "dex-bleed-ronin",
        reason: "For players who prefer faster melee and statuses over magical utility.",
      },
    ],
    ...noCyberContent,
  },
  {
    slug: "dragon-communion-hunter",
    name: "Dragon Communion Hunter",
    primaryArchetype: "Arcane Dragon",
    summary:
      "An Arcane hunter who uses Dragon Communion incantations, bleed sidearms, and hard space control.",
    description:
      "Dragon Communion Hunter is the strangest build in the Elden Ring MVP, and that is exactly its strength. It controls space in ways conventional melee and sorcery builds often cannot.",
    playstyle:
      "A status hybrid that alternates terrifying Dragon Communion bursts and close Arcane pressure.",
    difficulty: "ADVANCED",
    primaryMode: "HYBRID",
    combatStyle: "HYBRID",
    stealthRating: 1,
    loudRating: 8,
    hackingRating: 0,
    mobilityRating: 6,
    survivabilityRating: 6,
    burstRating: 9,
    utilityRating: 9,
    pveRating: 8,
    pvpRating: 8,
    progressionCurve:
      "Uneven early, but explosive once Arcane scaling and Dragon Communion spells start to stack properly.",
    difficultyNotes:
      "Requires matchup knowledge and disciplined cast timing. Bad positioning is punished instantly.",
    isFeatured: false,
    sortOrder: 6,
    attributeStats: [
      { key: "vigor", label: "Vigor", value: 52 },
      { key: "mind", label: "Mind", value: 26 },
      { key: "endurance", label: "Endurance", value: 22 },
      { key: "strength", label: "Strength", value: 14 },
      { key: "dexterity", label: "Dexterity", value: 18 },
      { key: "intelligence", label: "Intelligence", value: 9 },
      { key: "faith", label: "Faith", value: 28 },
      { key: "arcane", label: "Arcane", value: 55 },
    ],
    supportStats: [
      { key: "zone-control", label: "Zone Control", value: 92 },
      { key: "status", label: "Status Pressure", value: 84 },
      { key: "range", label: "Ranged Threat", value: 79 },
      { key: "adaptability", label: "Adaptability", value: 88 },
    ],
    weapons: [
      {
        name: "Ripple Crescent",
        slot: "Primary",
        scalingOrProfile: "Arcane scaling",
        description: "A reliable melee bridge when Dragon Communion spells are too risky.",
      },
      {
        name: "Dragon Communion Seal",
        slot: "Seal",
        scalingOrProfile: "Arcane/Faith scaling",
        description: "The catalyst that defines the Dragon Communion spell package.",
      },
    ],
    armorPieces: [
      {
        name: "Drake Knight Helm",
        slot: "Head",
        effect: "Matches the hybrid dragon identity while staying mobile enough.",
        weightClass: "Medium",
      },
      {
        name: "Scaled Armor",
        slot: "Chest",
        effect: "Solid protection for a caster who still needs to hold position.",
        weightClass: "Medium",
      },
    ],
    talismans: [
      {
        name: "Roar Medallion",
        slot: "Dragon",
        effect: "Improves several roar and breath spells.",
      },
      {
        name: "Flock's Canvas Talisman",
        slot: "Incantation",
        effect: "Purely boosts the magic side of the build.",
      },
      {
        name: "Lord of Blood's Exultation",
        slot: "Arcane",
        effect: "Works well with bleed weapons during cleanup windows.",
      },
      {
        name: "Bull-Goat Talisman",
        slot: "Poise",
        effect: "Helps finish long casts under pressure.",
      },
    ],
    spells: [
      {
        name: "Ekzykes's Decay",
        school: "Dragon Communion",
        description: "Mass scarlet rot application and zone control.",
      },
      {
        name: "Agheel's Flame",
        school: "Dragon Communion",
        description: "A wide cone of fire for punishing greedy engages.",
      },
      {
        name: "Dragonmaw",
        school: "Dragon Communion",
        description: "A massive punish tool when enemies do not respect close range.",
      },
    ],
    progression: [
      {
        stage: "EARLY",
        title: "Stabilize through Arcane weapons",
        description:
          "Lean on steady melee and small utility incantations until Dragon Communion spells become available and safe.",
      },
      {
        stage: "MID",
        title: "Carefully add dragon pressure",
        description:
          "Use breath tools as matchup answers rather than spam buttons, and keep a reliable backup weapon ready.",
      },
      {
        stage: "LATE",
        title: "Control space through layered threats",
        description:
          "Rotate dragon zoning, bleed finishers, and poise-backed melee punishments depending on the fight.",
      },
    ],
    strengths: [
      "Unique space-control tools that few builds can match.",
      "Arcane scaling makes transitions between statuses and magic feel natural.",
      "Very strong answers to unpredictable enemy movement.",
    ],
    weaknesses: [
      "Long cast animations can be lethal if used carelessly.",
      "Progress feels uneven until the full toolkit is assembled.",
      "Requires more matchup knowledge than simple hybrids.",
    ],
    tags: [
      { slug: "arcane", weight: 3 },
      { slug: "dragon", weight: 3 },
      { slug: "bleed", weight: 2 },
      { slug: "utility", weight: 3 },
      { slug: "hybrid", weight: 3 },
      { slug: "control", weight: 2 },
    ],
    alternatives: [
      {
        slug: "dex-bleed-ronin",
        reason: "Best if the player wants bleed payoff alongside Arcane without a long spell commitment.",
      },
      {
        slug: "faith-fire-crusader",
        reason: "A steadier hybrid if the player wants both casting and frontline pressure with less risk.",
      },
    ],
    ...noCyberContent,
  },
];
