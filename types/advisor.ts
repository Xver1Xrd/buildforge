import type { BuildCardView, DifficultyLevel, GameSlug } from "./builds";

export const advisorGameSlugs = [
  "elden-ring",
  "cyberpunk-2077",
  "witcher-3",
  "dark-souls-3",
  "dark-souls-2",
  "lies-of-p",
] as const;

export type AdvisorGameSlug = (typeof advisorGameSlugs)[number];

export type EldenAdvisorStyle =
  | "strength-colossus"
  | "dex-bleed"
  | "faith-fire"
  | "intelligence-mage"
  | "frost-hybrid"
  | "arcane-dragon";

export type CyberpunkAdvisorStyle =
  | "netrunner"
  | "sandevistan-katana"
  | "stealth-pistol"
  | "shotgun-tank"
  | "tech-weapons"
  | "hybrid-assassin";

export type WitcherAdvisorStyle =
  | "combat-alchemy"
  | "sign-gryphon"
  | "fast-attack-cat"
  | "heavy-bear";

export type DarkSouls3AdvisorStyle =
  | "strength-ultra"
  | "dex-weapon-art"
  | "pyromancer"
  | "faith-lightning";

export type DarkSouls2AdvisorStyle =
  | "power-stance"
  | "hexer"
  | "greatshield-sentinel"
  | "rapier-duelist";

export type LiesOfPAdvisorStyle =
  | "motivity-greatblade"
  | "technique-dancer"
  | "advance-alchemist"
  | "legion-aegis";

export const advisorStyles = [
  "strength-colossus",
  "dex-bleed",
  "faith-fire",
  "intelligence-mage",
  "frost-hybrid",
  "arcane-dragon",
  "netrunner",
  "sandevistan-katana",
  "stealth-pistol",
  "shotgun-tank",
  "tech-weapons",
  "hybrid-assassin",
  "combat-alchemy",
  "sign-gryphon",
  "fast-attack-cat",
  "heavy-bear",
  "strength-ultra",
  "dex-weapon-art",
  "pyromancer",
  "faith-lightning",
  "power-stance",
  "hexer",
  "greatshield-sentinel",
  "rapier-duelist",
  "motivity-greatblade",
  "technique-dancer",
  "advance-alchemist",
  "legion-aegis",
] as const;

export type AdvisorStyle =
  | EldenAdvisorStyle
  | CyberpunkAdvisorStyle
  | WitcherAdvisorStyle
  | DarkSouls3AdvisorStyle
  | DarkSouls2AdvisorStyle
  | LiesOfPAdvisorStyle;

export type EldenAdvisorFocus = "PVE" | "PVP" | "HYBRID";
export type CyberpunkAdvisorFocus = "STEALTH" | "LOUD" | "HACKER" | "HYBRID";
export type WitcherAdvisorFocus =
  | "MONSTER_HUNTER"
  | "BOSS_PREP"
  | "SIGNS"
  | "HYBRID";
export type LiesOfPAdvisorFocus = "BOSSING" | "PARRY" | "AGGRESSION" | "HYBRID";

export const advisorFocuses = [
  "PVE",
  "PVP",
  "HYBRID",
  "STEALTH",
  "LOUD",
  "HACKER",
  "MONSTER_HUNTER",
  "BOSS_PREP",
  "SIGNS",
  "BOSSING",
  "PARRY",
  "AGGRESSION",
] as const;

export type AdvisorFocus =
  | EldenAdvisorFocus
  | CyberpunkAdvisorFocus
  | WitcherAdvisorFocus
  | LiesOfPAdvisorFocus;

export const advisorPreferences = [
  "tank",
  "mobility",
  "boss-burst",
  "support-buffs",
  "status-pressure",
  "precision",
  "quickhacks",
  "crowd-control",
  "smart-weapons",
  "sustain",
  "stealth",
  "alchemy",
  "sign-casting",
  "adrenaline",
  "bomb-control",
  "weapon-arts",
  "poise-trades",
  "guard-break",
  "power-stance",
  "hexes",
  "perfect-guard",
  "stagger",
  "legion-arms",
  "elemental-pressure",
] as const;

export type AdvisorPreference =
  | "tank"
  | "mobility"
  | "boss-burst"
  | "support-buffs"
  | "status-pressure"
  | "precision"
  | "quickhacks"
  | "crowd-control"
  | "smart-weapons"
  | "sustain"
  | "stealth"
  | "alchemy"
  | "sign-casting"
  | "adrenaline"
  | "bomb-control"
  | "weapon-arts"
  | "poise-trades"
  | "guard-break"
  | "power-stance"
  | "hexes"
  | "perfect-guard"
  | "stagger"
  | "legion-arms"
  | "elemental-pressure";

export interface AdvisorOption<TValue extends string = string> {
  value: TValue;
  label: string;
  hint: string;
}

export interface AdvisorGameConfig {
  title: string;
  styles: AdvisorOption<AdvisorStyle>[];
  focuses: AdvisorOption<AdvisorFocus>[];
  preferences: AdvisorOption<AdvisorPreference>[];
}

export interface AdvisorBuildView extends Omit<BuildCardView, "game"> {
  game: Omit<BuildCardView["game"], "slug" | "themeKey"> & {
    slug: AdvisorGameSlug;
    themeKey: AdvisorGameSlug | GameSlug;
  };
}

export interface AdvisorFormValues {
  gameSlug: AdvisorGameSlug;
  style: AdvisorStyle;
  difficulty: DifficultyLevel;
  focus: AdvisorFocus;
  preferences: AdvisorPreference[];
}

export interface RecommendationBreakdown {
  total: number;
  style: number;
  difficulty: number;
  focus: number;
  preferences: number;
  matchedTags: string[];
}

export interface AdvisorRecommendation<TBuild extends AdvisorBuildView = BuildCardView> {
  build: TBuild;
  explanation: string;
  reasons: string[];
  breakdown: RecommendationBreakdown;
}

export interface AdvisorResult<TBuild extends AdvisorBuildView = BuildCardView> {
  winner: AdvisorRecommendation<TBuild>;
  alternatives: AdvisorRecommendation<TBuild>[];
}
