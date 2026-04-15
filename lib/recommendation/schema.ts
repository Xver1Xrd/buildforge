import { z } from "zod";

import type {
  AdvisorFormValues,
  AdvisorGameConfig,
  AdvisorGameSlug,
  AdvisorPreference,
} from "@/types/advisor";
import {
  advisorFocuses,
  advisorGameSlugs,
  advisorPreferences,
  advisorStyles,
} from "@/types/advisor";

export const difficultyOptions = [
  { value: "BEGINNER", label: "Beginner", hint: "You want a more forgiving and stable build." },
  { value: "INTERMEDIATE", label: "Intermediate", hint: "You are comfortable with moderate preparation and a tighter execution window." },
  { value: "ADVANCED", label: "Advanced", hint: "You are ready to pilot a build with a higher mastery ceiling." },
] as const;

export const advisorGameConfig: Record<AdvisorGameSlug, AdvisorGameConfig> = {
  "elden-ring": {
    title: "Find the Tarnished build that matches your style",
    styles: [
      { value: "strength-colossus", label: "Strength and colossal weapons", hint: "Massive stance breaks and heavy trades." },
      { value: "dex-bleed", label: "Dexterity and bleed", hint: "Fast tempo with strong status pressure." },
      { value: "faith-fire", label: "Faith and fire", hint: "Incantations, pressure, and solid resilience." },
      { value: "intelligence-mage", label: "Intelligence and sorcery", hint: "Explosive spell damage and precise range control." },
      { value: "frost-hybrid", label: "Frost hybrid", hint: "Safer control through magical blade pressure." },
      { value: "arcane-dragon", label: "Arcane and dragon", hint: "Dragon incantations and a flashy hybrid style." },
    ],
    focuses: [
      { value: "PVE", label: "PvE", hint: "Optimized for bosses and world exploration." },
      { value: "PVP", label: "PvP", hint: "Built around invasions and duels." },
      { value: "HYBRID", label: "Hybrid", hint: "Balances PvE comfort with PvP relevance." },
    ],
    preferences: [
      { value: "tank", label: "Survivability", hint: "You want to absorb hits and stay stable." },
      { value: "mobility", label: "Mobility", hint: "You need fast repositioning and a high tempo." },
      { value: "boss-burst", label: "Boss burst damage", hint: "You want to shred health bars during punish windows." },
      { value: "support-buffs", label: "Buffs and utility", hint: "You enjoy setup, support, and layered tools." },
      { value: "status-pressure", label: "Status pressure", hint: "Bleed, rot, or frost pressure sounds appealing." },
      { value: "sustain", label: "Stability", hint: "You prefer safe, steady progression." },
    ],
  },
  "cyberpunk-2077": {
    title: "Tune a Night City build to your combat style",
    styles: [
      { value: "netrunner", label: "Netrunner", hint: "Win through quickhacks, control, and efficient RAM use." },
      { value: "sandevistan-katana", label: "Sandevistan and katana", hint: "Slow time and erase targets up close." },
      { value: "stealth-pistol", label: "Stealth pistol", hint: "Quiet precision and clean headshots." },
      { value: "shotgun-tank", label: "Shotgun tank", hint: "Loud room clears with high survivability." },
      { value: "tech-weapons", label: "Tech weapons", hint: "Punish enemies through cover and control range." },
      { value: "hybrid-assassin", label: "Hybrid assassin", hint: "Blend stealth, hacking, and finishing tools." },
    ],
    focuses: [
      { value: "STEALTH", label: "Stealth", hint: "Prioritize infiltration and clean routes." },
      { value: "LOUD", label: "Loud", hint: "Direct confrontation and rapid clears." },
      { value: "HACKER", label: "Hacker", hint: "Lean fully into the cyberdeck playstyle." },
      { value: "HYBRID", label: "Hybrid", hint: "Keep multiple combat scenarios open at once." },
    ],
    preferences: [
      { value: "stealth", label: "Stealth", hint: "You want careful routes and invisibility tools." },
      { value: "mobility", label: "Mobility", hint: "You prefer fast movement and constant repositioning." },
      { value: "quickhacks", label: "Quickhacks", hint: "You want to control systems and get the most out of hack chains." },
      { value: "precision", label: "Precision", hint: "You like clean headshots and accurate tech-weapon shots." },
      { value: "smart-weapons", label: "Smart weapons", hint: "Homing fire and flexible clearing fit you well." },
      { value: "crowd-control", label: "Crowd control", hint: "Keeping the room under control matters most." },
    ],
  },
  "witcher-3": {
    title: "Tune a Continent build around oils, signs, and steel",
    styles: [
      { value: "combat-alchemy", label: "Combat alchemy", hint: "Potion uptime, oils, and relentless sword pressure." },
      { value: "sign-gryphon", label: "Signs and Gryphon routing", hint: "Lean on sign intensity, control, and safer setups." },
      { value: "fast-attack-cat", label: "Fast attack Cat School", hint: "Whirl, crit chains, and evasive melee tempo." },
      { value: "heavy-bear", label: "Heavy Bear School", hint: "Quen-backed defense with punishing heavy trades." },
    ],
    focuses: [
      { value: "MONSTER_HUNTER", label: "Monster hunting", hint: "Prepared routes for contracts, oils, and sustain." },
      { value: "BOSS_PREP", label: "Boss preparation", hint: "Maximize punish windows and pre-fight setup." },
      { value: "SIGNS", label: "Signs", hint: "Prioritize casting pressure, shields, and battlefield control." },
      { value: "HYBRID", label: "Hybrid", hint: "Keep both sign pressure and melee consistency online." },
    ],
    preferences: [
      { value: "alchemy", label: "Alchemy", hint: "You want strong potion, oil, and toxicity value." },
      { value: "sign-casting", label: "Sign casting", hint: "Igni, Quen, Aard, and Yrden matter more than raw sword DPS." },
      { value: "adrenaline", label: "Adrenaline", hint: "You prefer momentum and sword damage scaling from combat flow." },
      { value: "bomb-control", label: "Bomb control", hint: "Bomb utility and group control sound appealing." },
      { value: "sustain", label: "Sustain", hint: "You want a route that stays stable through long contracts." },
      { value: "mobility", label: "Mobility", hint: "Quick dodges and fluid repositioning matter a lot." },
    ],
  },
  "dark-souls-3": {
    title: "Shape an Ashen One build for bosses, duels, or both",
    styles: [
      { value: "strength-ultra", label: "Strength ultra weapons", hint: "Poise trades, stagger, and heavy punish windows." },
      { value: "dex-weapon-art", label: "Dexterity and weapon arts", hint: "Fast spacing, sharp whiff punishes, and roll catches." },
      { value: "pyromancer", label: "Pyromancer", hint: "Chaos damage, mixups, and explosive ranged pressure." },
      { value: "faith-lightning", label: "Faith and lightning", hint: "Miracles, buffs, and high-value spear punishes." },
    ],
    focuses: [
      { value: "PVE", label: "PvE", hint: "Optimized for area routing and major boss fights." },
      { value: "PVP", label: "PvP", hint: "Built for invasions, duels, and tighter spacing checks." },
      { value: "HYBRID", label: "Hybrid", hint: "Maintains strong PvE comfort with duel-ready options." },
    ],
    preferences: [
      { value: "poise-trades", label: "Poise trades", hint: "You want to stand your ground and win trade windows." },
      { value: "weapon-arts", label: "Weapon arts", hint: "You value stance tools and skill expression in spacing." },
      { value: "boss-burst", label: "Boss burst", hint: "Big punish windows and health-bar chunks are a priority." },
      { value: "mobility", label: "Mobility", hint: "Fast rolls, pressure resets, and clean re-engages matter." },
      { value: "support-buffs", label: "Buffs and utility", hint: "Weapon buffs and extra tools fit your playstyle." },
      { value: "guard-break", label: "Guard break", hint: "You want to crack shields and posture quickly." },
    ],
  },
  "dark-souls-2": {
    title: "Find a Drangleic route that survives the long journey",
    styles: [
      { value: "power-stance", label: "Power stance", hint: "Dual-wield pressure with explosive close-range tempo." },
      { value: "hexer", label: "Hexer", hint: "Dark orb control, utility, and versatile ranged answers." },
      { value: "greatshield-sentinel", label: "Greatshield sentinel", hint: "Measured pacing with sturdy defense and safe clears." },
      { value: "rapier-duelist", label: "Rapier duelist", hint: "High counter-hit value with precise stamina management." },
    ],
    focuses: [
      { value: "PVE", label: "PvE", hint: "Prioritize stable progression, zones, and bosses." },
      { value: "PVP", label: "PvP", hint: "Lean into arena and invasion relevance." },
      { value: "HYBRID", label: "Hybrid", hint: "Keep both progression comfort and PvP flexibility." },
    ],
    preferences: [
      { value: "power-stance", label: "Power stance", hint: "You want dual-wield pressure to define the build." },
      { value: "hexes", label: "Hexes", hint: "Dark scaling and utility casting sound most appealing." },
      { value: "tank", label: "Tankiness", hint: "You prefer a safer route with room for mistakes." },
      { value: "precision", label: "Precision", hint: "Counter-hit timing and exact spacing matter to you." },
      { value: "mobility", label: "Mobility", hint: "You want cleaner repositioning and tempo control." },
      { value: "sustain", label: "Sustain", hint: "You care about a steady, forgiving progression curve." },
    ],
  },
  "lies-of-p": {
    title: "Lock in a Krat build for parries, stagger, and pressure",
    styles: [
      { value: "motivity-greatblade", label: "Motivity greatblade", hint: "Heavy blades, big stagger, and decisive punish windows." },
      { value: "technique-dancer", label: "Technique dancer", hint: "Quick handles, evasive pressure, and constant tempo." },
      { value: "advance-alchemist", label: "Advance alchemist", hint: "Elemental grindstone routing and status-heavy setups." },
      { value: "legion-aegis", label: "Legion Aegis", hint: "Defensive legion arm play with stable counter-pressure." },
    ],
    focuses: [
      { value: "BOSSING", label: "Bossing", hint: "Prioritize elite and boss consistency first." },
      { value: "PARRY", label: "Parry mastery", hint: "You want deflect-driven control and break setups." },
      { value: "AGGRESSION", label: "Aggression", hint: "Stay on top of enemies with fast pressure strings." },
      { value: "HYBRID", label: "Hybrid", hint: "Balance legion tools, survivability, and punish windows." },
    ],
    preferences: [
      { value: "perfect-guard", label: "Perfect guard", hint: "You enjoy clean parries and tight defensive timing." },
      { value: "stagger", label: "Stagger", hint: "Breaking enemy posture quickly is your main priority." },
      { value: "legion-arms", label: "Legion arms", hint: "You want strong tool usage from your arm slot." },
      { value: "elemental-pressure", label: "Elemental pressure", hint: "Fire, acid, or shock pressure sounds ideal." },
      { value: "mobility", label: "Mobility", hint: "You prefer lighter movement and faster re-engages." },
      { value: "sustain", label: "Sustain", hint: "A safer route with steady guard regain appeals to you." },
    ],
  },
};

const gameSlugSchema = z.enum(advisorGameSlugs);
const difficultySchema = z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]);
const styleSchema = z.enum(advisorStyles);
const focusSchema = z.enum(advisorFocuses);
const preferenceSchema = z.enum(advisorPreferences);

export const advisorFormSchema = z
  .object({
    gameSlug: gameSlugSchema,
    style: styleSchema,
    difficulty: difficultySchema,
    focus: focusSchema,
    preferences: z.array(preferenceSchema).min(1).max(3),
  })
  .superRefine((value, ctx) => {
    const config = advisorGameConfig[value.gameSlug];

    if (!config.styles.some((style) => style.value === value.style)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["style"],
        message: "Choose a supported style for this game.",
      });
    }

    if (!config.focuses.some((focus) => focus.value === value.focus)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["focus"],
        message: "Choose a supported focus for this game.",
      });
    }

    const allowedPreferences = new Set(config.preferences.map((option) => option.value));
    const invalidPreference = value.preferences.find((preference) => !allowedPreferences.has(preference));

    if (invalidPreference) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["preferences"],
        message: "Choose supported preferences for the selected game.",
      });
    }
  });

export function parseAdvisorFormData(formData: FormData): AdvisorFormValues {
  return advisorFormSchema.parse({
    gameSlug: formData.get("gameSlug"),
    style: formData.get("style"),
    difficulty: formData.get("difficulty"),
    focus: formData.get("focus"),
    preferences: formData.getAll("preferences"),
  });
}

export function getPreferenceLabels(preferences: AdvisorPreference[], gameSlug: AdvisorGameSlug) {
  const config = advisorGameConfig[gameSlug];
  const labelMap = new Map(config.preferences.map((option) => [option.value, option.label]));

  return preferences.map((preference) => labelMap.get(preference) ?? preference);
}
