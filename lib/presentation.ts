import type {
  CombatStyleView,
  DifficultyLevel,
  GameSlug,
  ModeFocus,
  OperatingSystemKind,
  ProgressionStageView,
} from "@/types/builds"

const difficultyLabels: Record<DifficultyLevel, string> = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
}

const modeLabels: Record<ModeFocus, string> = {
  PVE: "PvE",
  PVP: "PvP",
  HYBRID: "Hybrid",
}

const combatStyleLabels: Record<CombatStyleView, string> = {
  MELEE: "Melee",
  RANGED: "Ranged",
  SPELLCASTER: "Spellcasting",
  HACKING: "Hacking",
  HYBRID: "Hybrid",
}

const progressionStageLabels: Record<ProgressionStageView, string> = {
  EARLY: "Early game",
  MID: "Mid game",
  LATE: "Late game",
}

const operatingSystemLabels: Record<OperatingSystemKind, string> = {
  SANDEVISTAN: "Sandevistan",
  CYBERDECK: "Cyberdeck",
  BERSERK: "Berserk",
}

export function getDifficultyLabel(value: DifficultyLevel) {
  return difficultyLabels[value]
}

export function getModeLabel(value: ModeFocus) {
  return modeLabels[value]
}

export function getCombatStyleLabel(value: CombatStyleView) {
  return combatStyleLabels[value]
}

export function getProgressionStageLabel(value: ProgressionStageView) {
  return progressionStageLabels[value]
}

export function getOperatingSystemLabel(value: OperatingSystemKind) {
  return operatingSystemLabels[value]
}

export function isCyberpunkSlug(slug?: GameSlug | null) {
  return slug === "cyberpunk-2077"
}
