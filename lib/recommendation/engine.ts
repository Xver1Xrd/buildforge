import type {
  AdvisorBuildView,
  AdvisorFormValues,
  AdvisorGameSlug,
  AdvisorPreference,
  AdvisorResult,
  RecommendationBreakdown,
} from "@/types/advisor";
import type { BuildCardView } from "@/types/builds";

import { toRecommendation } from "./explanations";

const difficultyWeights = {
  BEGINNER: 1,
  INTERMEDIATE: 2,
  ADVANCED: 3,
} as const;

type StyleProfile = {
  primarySlugs: string[];
  bonusTags: string[];
};

type FocusProfile = {
  ratingKey: keyof BuildCardView["ratings"];
  bonusTags: string[];
};

const styleProfiles: Record<AdvisorGameSlug, Record<string, StyleProfile>> = {
  "elden-ring": {
    "strength-colossus": {
      primarySlugs: ["strength-colossal-titan"],
      bonusTags: ["melee", "tank", "boss-burst"],
    },
    "dex-bleed": {
      primarySlugs: ["dex-bleed-ronin"],
      bonusTags: ["bleed", "mobility", "status-pressure", "pvp"],
    },
    "faith-fire": {
      primarySlugs: ["faith-fire-crusader"],
      bonusTags: ["spellcaster", "fire", "support-buffs", "sustain"],
    },
    "intelligence-mage": {
      primarySlugs: ["intelligence-comet-mage"],
      bonusTags: ["spellcaster", "magic", "precision", "glass-cannon"],
    },
    "frost-hybrid": {
      primarySlugs: ["frost-moon-spellblade"],
      bonusTags: ["hybrid", "frost", "tank", "methodical"],
    },
    "arcane-dragon": {
      primarySlugs: ["dragon-communion-hunter"],
      bonusTags: ["hybrid", "arcane", "status-pressure", "explosive"],
    },
  },
  "cyberpunk-2077": {
    netrunner: {
      primarySlugs: ["ghostwire-netrunner"],
      bonusTags: ["hacker", "quickhacks", "crowd-control", "stealth"],
    },
    "sandevistan-katana": {
      primarySlugs: ["apogee-ronin"],
      bonusTags: ["blades", "mobility", "explosive", "precision"],
    },
    "stealth-pistol": {
      primarySlugs: ["midnight-suppressor"],
      bonusTags: ["stealth", "precision", "methodical", "ranged"],
    },
    "shotgun-tank": {
      primarySlugs: ["chrome-juggernaut"],
      bonusTags: ["shotguns", "tank", "sustain", "beginner-friendly"],
    },
    "tech-weapons": {
      primarySlugs: ["quantum-longshot"],
      bonusTags: ["tech-weapons", "precision", "methodical", "ranged"],
    },
    "hybrid-assassin": {
      primarySlugs: ["synapse-smartgunner"],
      bonusTags: ["hybrid", "smart-weapons", "mobility", "reactive"],
    },
  },
  "witcher-3": {
    "combat-alchemy": {
      primarySlugs: ["viper-alchemy-blender"],
      bonusTags: ["alchemy", "melee", "adrenaline", "sustain"],
    },
    "sign-gryphon": {
      primarySlugs: ["gryphon-sign-weaver"],
      bonusTags: ["signs", "caster", "crowd-control", "utility"],
    },
    "fast-attack-cat": {
      primarySlugs: ["cat-school-whirl"],
      bonusTags: ["mobility", "precision", "melee", "boss-burst"],
    },
    "heavy-bear": {
      primarySlugs: ["ursine-quen-bastion"],
      bonusTags: ["tank", "sustain", "signs", "monster-hunter"],
    },
    "euphoria-hybrid": {
      primarySlugs: ["euphoria-mutant"],
      bonusTags: ["hybrid", "alchemy", "signs", "boss-burst"],
    },
    "bomb-control": {
      primarySlugs: ["demolition-bombardier"],
      bonusTags: ["bombs", "crowd-control", "alchemy", "explosive"],
    },
  },
  "dark-souls-3": {
    "strength-ultra": {
      primarySlugs: ["lothric-ultra-knight"],
      bonusTags: ["melee", "tank", "boss-burst", "poise"],
    },
    "dex-weapon-art": {
      primarySlugs: ["sellsword-weapon-master"],
      bonusTags: ["weapon-arts", "mobility", "precision", "pvp"],
    },
    "quality-knight": {
      primarySlugs: ["quality-gael-knight"],
      bonusTags: ["hybrid", "sustain", "melee", "precision"],
    },
    pyromancer: {
      primarySlugs: ["chaos-pyromancer"],
      bonusTags: ["pyromancy", "crowd-control", "explosive", "support-buffs"],
    },
    "faith-lightning": {
      primarySlugs: ["sunlight-spear-herald"],
      bonusTags: ["faith", "precision", "boss-burst", "support-buffs"],
    },
    "dark-bleed": {
      primarySlugs: ["londor-darkblade"],
      bonusTags: ["dark-magic", "status-pressure", "pvp", "mobility"],
    },
  },
  "dark-souls-2": {
    "power-stance": {
      primarySlugs: ["drangleic-power-stancer"],
      bonusTags: ["power-stance", "mobility", "explosive", "pve"],
    },
    hexer: {
      primarySlugs: ["black-gulch-hexer"],
      bonusTags: ["hexes", "dark-magic", "support-buffs", "precision"],
    },
    "greatshield-sentinel": {
      primarySlugs: ["iron-keep-sentinel"],
      bonusTags: ["tank", "sustain", "methodical", "pve"],
    },
    "rapier-duelist": {
      primarySlugs: ["old-leo-rapier"],
      bonusTags: ["precision", "pvp", "boss-burst", "mobility"],
    },
    "quality-drangleic": {
      primarySlugs: ["drangleic-quality-veteran"],
      bonusTags: ["hybrid", "sustain", "precision", "adaptable"],
    },
    "sorcerer-scholar": {
      primarySlugs: ["scholar-soul-mage"],
      bonusTags: ["sorcery", "utility", "precision", "pve"],
    },
  },
  "lies-of-p": {
    "motivity-greatblade": {
      primarySlugs: ["krat-ark-greatblade"],
      bonusTags: ["tank", "stagger", "boss-burst", "pve"],
    },
    "technique-dancer": {
      primarySlugs: ["puppet-ripper-dancer"],
      bonusTags: ["mobility", "precision", "aggression", "stagger"],
    },
    "advance-alchemist": {
      primarySlugs: ["acidic-alchemist"],
      bonusTags: ["elemental", "status-pressure", "crowd-control", "utility"],
    },
    "perfect-guard": {
      primarySlugs: ["perfect-guard-duelist"],
      bonusTags: ["perfect-guard", "precision", "stagger", "methodical"],
    },
    "legion-aegis": {
      primarySlugs: ["aegis-legionnaire"],
      bonusTags: ["legion-arms", "tank", "sustain", "utility"],
    },
    "balanced-puppet": {
      primarySlugs: ["puppet-prince-hybrid"],
      bonusTags: ["hybrid", "mobility", "stagger", "legion-arms"],
    },
  },
};

const focusProfiles: Record<AdvisorGameSlug, Record<string, FocusProfile>> = {
  "elden-ring": {
    PVE: { ratingKey: "pve", bonusTags: ["pve", "boss-burst", "sustain"] },
    PVP: { ratingKey: "pvp", bonusTags: ["pvp", "mobility", "status-pressure"] },
    HYBRID: { ratingKey: "utility", bonusTags: ["hybrid", "precision", "support-buffs"] },
  },
  "cyberpunk-2077": {
    STEALTH: { ratingKey: "stealth", bonusTags: ["stealth", "precision", "methodical"] },
    LOUD: { ratingKey: "burst", bonusTags: ["explosive", "tank", "shotguns", "blades"] },
    HACKER: { ratingKey: "hacking", bonusTags: ["hacker", "quickhacks", "crowd-control"] },
    HYBRID: { ratingKey: "utility", bonusTags: ["hybrid", "mobility", "smart-weapons"] },
  },
  "witcher-3": {
    MONSTER_HUNTER: {
      ratingKey: "pve",
      bonusTags: ["monster-hunter", "alchemy", "sustain", "signs"],
    },
    BOSS_PREP: {
      ratingKey: "burst",
      bonusTags: ["boss-burst", "alchemy", "adrenaline", "precision"],
    },
    SIGNS: {
      ratingKey: "utility",
      bonusTags: ["signs", "crowd-control", "caster", "support-buffs"],
    },
    HYBRID: {
      ratingKey: "utility",
      bonusTags: ["hybrid", "alchemy", "signs", "melee"],
    },
  },
  "dark-souls-3": {
    PVE: { ratingKey: "pve", bonusTags: ["pve", "boss-burst", "poise", "sustain"] },
    PVP: { ratingKey: "pvp", bonusTags: ["pvp", "mobility", "weapon-arts", "status-pressure"] },
    HYBRID: { ratingKey: "utility", bonusTags: ["hybrid", "weapon-arts", "support-buffs", "precision"] },
  },
  "dark-souls-2": {
    PVE: { ratingKey: "pve", bonusTags: ["pve", "power-stance", "sustain", "methodical"] },
    PVP: { ratingKey: "pvp", bonusTags: ["pvp", "precision", "mobility", "hexes"] },
    HYBRID: { ratingKey: "utility", bonusTags: ["hybrid", "adaptable", "power-stance", "hexes"] },
  },
  "lies-of-p": {
    BOSSING: { ratingKey: "burst", bonusTags: ["boss-burst", "stagger", "perfect-guard"] },
    PARRY: { ratingKey: "utility", bonusTags: ["perfect-guard", "precision", "guard-break"] },
    AGGRESSION: { ratingKey: "mobility", bonusTags: ["mobility", "stagger", "legion-arms", "explosive"] },
    HYBRID: { ratingKey: "utility", bonusTags: ["hybrid", "legion-arms", "sustain", "precision"] },
  },
};

const preferenceToTag: Record<AdvisorPreference, string[]> = {
  tank: ["tank", "sustain"],
  mobility: ["mobility", "reactive"],
  "boss-burst": ["boss-burst", "explosive"],
  "support-buffs": ["support-buffs", "crowd-control"],
  "status-pressure": ["status-pressure", "bleed", "frost"],
  precision: ["precision", "methodical"],
  quickhacks: ["quickhacks", "hacker"],
  "crowd-control": ["crowd-control", "support-buffs"],
  "smart-weapons": ["smart-weapons", "hybrid"],
  sustain: ["sustain", "tank"],
  stealth: ["stealth", "precision"],
  alchemy: ["alchemy", "toxicity", "sustain"],
  "sign-casting": ["signs", "caster", "crowd-control"],
  adrenaline: ["adrenaline", "boss-burst", "melee"],
  "bomb-control": ["bombs", "crowd-control", "alchemy"],
  "weapon-arts": ["weapon-arts", "precision", "mobility"],
  "poise-trades": ["poise", "tank", "melee"],
  "guard-break": ["guard-break", "stagger", "boss-burst"],
  "power-stance": ["power-stance", "mobility", "explosive"],
  hexes: ["hexes", "dark-magic", "support-buffs"],
  "perfect-guard": ["perfect-guard", "stagger", "precision"],
  stagger: ["stagger", "guard-break", "boss-burst"],
  "legion-arms": ["legion-arms", "utility", "crowd-control"],
  "elemental-pressure": ["elemental", "status-pressure", "explosive"],
};

function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function scoreDifficulty(
  buildDifficulty: BuildCardView["difficulty"],
  desired: AdvisorFormValues["difficulty"],
) {
  const gap = Math.abs(difficultyWeights[buildDifficulty] - difficultyWeights[desired]);

  if (gap === 0) {
    return 20;
  }

  if (gap === 1) {
    return 12;
  }

  return 4;
}

function collectTagSlugs(build: AdvisorBuildView) {
  return new Set(build.tags.map((tag) => tag.slug));
}

function scoreStyle(build: AdvisorBuildView, input: AdvisorFormValues) {
  const profile = styleProfiles[input.gameSlug][input.style];

  if (!profile) {
    return {
      score: 0,
      matchedTags: [],
    };
  }

  const tagSlugs = collectTagSlugs(build);
  let score = profile.primarySlugs.includes(build.slug) ? 28 : 0;
  const matchedTags = profile.bonusTags.filter((tag) => tagSlugs.has(tag));
  score += matchedTags.length * 4;

  return {
    score: clamp(score, 0, 40),
    matchedTags,
  };
}

function scoreFocus(build: AdvisorBuildView, input: AdvisorFormValues) {
  const profile = focusProfiles[input.gameSlug][input.focus];

  if (!profile) {
    return {
      score: 0,
      matchedTags: [],
    };
  }

  const tagSlugs = collectTagSlugs(build);
  const ratingScore = build.ratings[profile.ratingKey] * 3;
  const matchedTags = profile.bonusTags.filter((tag) => tagSlugs.has(tag));
  const tagScore = matchedTags.length * 2;

  return {
    score: clamp(ratingScore + tagScore, 0, 20),
    matchedTags,
  };
}

function scorePreferences(build: AdvisorBuildView, preferences: AdvisorFormValues["preferences"]) {
  const tagSlugs = collectTagSlugs(build);
  const matches = new Set<string>();
  let total = 0;

  for (const preference of preferences) {
    const relatedTags = preferenceToTag[preference];
    const matched = relatedTags.filter((tag) => tagSlugs.has(tag));

    if (matched.length) {
      total += 7;
      matched.forEach((tag) => matches.add(tag));
      continue;
    }

    const ratingFallback =
      preference === "tank"
        ? build.ratings.survivability
        : preference === "mobility"
          ? build.ratings.mobility
          : preference === "stealth"
            ? build.ratings.stealth
            : preference === "quickhacks"
              ? build.ratings.hacking
              : preference === "crowd-control" ||
                  preference === "support-buffs" ||
                  preference === "sign-casting" ||
                  preference === "hexes" ||
                  preference === "legion-arms"
                ? build.ratings.utility
                : build.ratings.burst;

    total += ratingFallback >= 8 ? 4 : ratingFallback >= 6 ? 2 : 0;
  }

  return {
    score: clamp(total, 0, 20),
    matchedTags: [...matches],
  };
}

function computeBreakdown(build: AdvisorBuildView, input: AdvisorFormValues): RecommendationBreakdown {
  const style = scoreStyle(build, input);
  const focus = scoreFocus(build, input);
  const preferences = scorePreferences(build, input.preferences);
  const difficulty = scoreDifficulty(build.difficulty, input.difficulty);

  return {
    total: clamp(style.score + difficulty + focus.score + preferences.score, 0, 100),
    style: style.score,
    difficulty,
    focus: focus.score,
    preferences: preferences.score,
    matchedTags: [...new Set([...style.matchedTags, ...focus.matchedTags, ...preferences.matchedTags])],
  };
}

export function recommendBuilds<TBuild extends AdvisorBuildView>(
  input: AdvisorFormValues,
  builds: TBuild[],
): AdvisorResult<TBuild> {
  const candidates = builds.filter((build) => build.game.slug === input.gameSlug);

  const scored = candidates
    .map((build) => ({
      build,
      breakdown: computeBreakdown(build, input),
    }))
    .sort((left, right) => {
      if (right.breakdown.total !== left.breakdown.total) {
        return right.breakdown.total - left.breakdown.total;
      }

      if (right.breakdown.style !== left.breakdown.style) {
        return right.breakdown.style - left.breakdown.style;
      }

      return right.build.sortOrder - left.build.sortOrder;
    });

  const [winner, ...rest] = scored;

  if (!winner) {
    throw new Error("No builds available for recommendation.");
  }

  return {
    winner: toRecommendation(winner.build, input, winner.breakdown),
    alternatives: rest
      .slice(0, 2)
      .map((entry) => toRecommendation(entry.build, input, entry.breakdown)),
  };
}
