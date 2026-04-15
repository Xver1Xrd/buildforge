export const gameSlugs = [
  "elden-ring",
  "cyberpunk-2077",
  "witcher-3",
  "dark-souls-3",
  "dark-souls-2",
  "lies-of-p",
] as const;

export type GameSlug = (typeof gameSlugs)[number];
export const gameDisplayNames: Record<GameSlug, string> = {
  "elden-ring": "Elden Ring",
  "cyberpunk-2077": "Cyberpunk 2077",
  "witcher-3": "The Witcher 3",
  "dark-souls-3": "Dark Souls 3",
  "dark-souls-2": "Dark Souls 2",
  "lies-of-p": "Lies of P",
};
export type DifficultyLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type ModeFocus = "PVE" | "PVP" | "HYBRID";
export type CombatStyleView =
  | "MELEE"
  | "RANGED"
  | "SPELLCASTER"
  | "HACKING"
  | "HYBRID";
export type TagCategoryView =
  | "STYLE"
  | "DAMAGE"
  | "DEFENSE"
  | "UTILITY"
  | "MODE"
  | "TEMPO"
  | "ROLE";
export type StatCategoryView = "ATTRIBUTE" | "SUPPORT";
export type ProgressionStageView = "EARLY" | "MID" | "LATE";
export type OperatingSystemKind = "SANDEVISTAN" | "CYBERDECK" | "BERSERK";

export interface GameView {
  id: number;
  slug: GameSlug;
  name: string;
  tagline: string;
  description: string;
  themeKey: GameSlug;
}

export interface StatEntryView {
  key: string;
  label: string;
  value: number;
  category: StatCategoryView;
}

export interface RatingSummary {
  stealth: number;
  hacking: number;
  mobility: number;
  survivability: number;
  burst: number;
  utility: number;
  pve: number;
  pvp: number;
}

export interface TaggedStatView {
  slug: string;
  label: string;
  category: TagCategoryView;
  weight: number;
}

export interface BuildSignatureView {
  loadout: string;
  statline: string;
  route: string;
}

export interface EquipmentView {
  name: string;
  description: string;
  slot?: string;
  effect?: string;
  school?: string;
  tree?: string;
  scalingOrProfile?: string;
  weightClass?: string;
  operatingSystemType?: OperatingSystemKind;
}

export interface ProgressionStepView {
  stage: ProgressionStageView;
  stepOrder: number;
  title: string;
  description: string;
}

export interface BuildCardView {
  id: number;
  slug: string;
  name: string;
  primaryArchetype: string;
  summary: string;
  playstyle: string;
  difficulty: DifficultyLevel;
  primaryMode: ModeFocus;
  combatStyle: CombatStyleView;
  progressionCurve: string;
  difficultyNotes: string;
  isFeatured: boolean;
  sortOrder: number;
  game: GameView;
  ratings: RatingSummary;
  tags: TaggedStatView[];
  attributeStats: StatEntryView[];
  supportStats: StatEntryView[];
  signature: BuildSignatureView;
  searchIndex: string;
}

export interface AlternativeBuildView extends BuildCardView {
  reason: string;
}

export interface BuildDetailView extends BuildCardView {
  description: string;
  weapons: EquipmentView[];
  armorPieces: EquipmentView[];
  talismans: EquipmentView[];
  spells: EquipmentView[];
  perks: EquipmentView[];
  cyberware: EquipmentView[];
  operatingSystems: EquipmentView[];
  progressionSteps: ProgressionStepView[];
  strengths: string[];
  weaknesses: string[];
  alternatives: AlternativeBuildView[];
}

export interface DashboardMetricBar {
  label: string;
  value: number;
  gameSlug?: GameSlug;
}

export interface DashboardTagBar {
  slug: string;
  label: string;
  value: number;
  category: TagCategoryView;
}

export interface DashboardView {
  totalBuilds: number;
  gameCards: Array<{
    game: GameView;
    count: number;
    featuredCount: number;
    averageBurst: number;
    averageSurvivability: number;
  }>;
  difficultyBreakdown: DashboardMetricBar[];
  combatStyleBreakdown: DashboardMetricBar[];
  topTags: DashboardTagBar[];
  ratingHeatmap: Array<{
    gameSlug: GameSlug;
    label: string;
    burst: number;
    survivability: number;
    mobility: number;
    utility: number;
    stealth: number;
    hacking: number;
  }>;
}
