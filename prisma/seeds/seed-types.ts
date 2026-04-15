import type {
  CombatStyle,
  Difficulty,
  ModeFocus,
  OperatingSystemType,
  ProgressionStage,
  TagCategory,
} from "@prisma/client";

export type SeedStat = {
  key: string;
  label: string;
  value: number;
};

export type SeedAlternative = {
  slug: string;
  reason: string;
};

export type BuildSeed = {
  slug: string;
  name: string;
  primaryArchetype: string;
  summary: string;
  description: string;
  playstyle: string;
  difficulty: Difficulty;
  primaryMode: ModeFocus;
  combatStyle: CombatStyle;
  stealthRating: number;
  loudRating: number;
  hackingRating: number;
  mobilityRating: number;
  survivabilityRating: number;
  burstRating: number;
  utilityRating: number;
  pveRating: number;
  pvpRating: number;
  progressionCurve: string;
  difficultyNotes: string;
  isFeatured: boolean;
  sortOrder: number;
  attributeStats: SeedStat[];
  supportStats: SeedStat[];
  weapons: {
    name: string;
    slot: string;
    scalingOrProfile: string;
    description: string;
  }[];
  armorPieces: {
    name: string;
    slot: string;
    effect: string;
    weightClass: string;
  }[];
  talismans: {
    name: string;
    slot: string;
    effect: string;
  }[];
  spells: {
    name: string;
    school: string;
    description: string;
  }[];
  perks: {
    name: string;
    tree: string;
    description: string;
  }[];
  cyberware: {
    name: string;
    slot: string;
    description: string;
  }[];
  operatingSystems: {
    name: string;
    type: OperatingSystemType;
    description: string;
  }[];
  progression: {
    stage: ProgressionStage;
    title: string;
    description: string;
  }[];
  strengths: string[];
  weaknesses: string[];
  tags: { slug: string; weight: number }[];
  alternatives: SeedAlternative[];
};

export type TagSeed = {
  slug: string;
  label: string;
  category: TagCategory;
};
