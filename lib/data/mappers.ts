import { Prisma } from "@prisma/client";

import type {
  AlternativeBuildView,
  BuildCardView,
  BuildDetailView,
  EquipmentView,
  BuildSignatureView,
  GameView,
  RatingSummary,
  StatEntryView,
  TaggedStatView,
} from "@/types/builds";

export const buildInclude = Prisma.validator<Prisma.BuildInclude>()({
  game: true,
  stats: true,
  weapons: true,
  armorPieces: true,
  talismans: true,
  spells: true,
  perks: true,
  cyberware: true,
  operatingSystems: true,
  progressionSteps: {
    orderBy: [{ stage: "asc" }, { stepOrder: "asc" }],
  },
  strengths: true,
  weaknesses: true,
  tags: {
    include: {
      tag: true,
    },
    orderBy: {
      weight: "desc",
    },
  },
  alternatives: {
    include: {
      alternative: {
        include: {
          game: true,
          stats: true,
          tags: {
            include: {
              tag: true,
            },
            orderBy: {
              weight: "desc",
            },
          },
        },
      },
    },
  },
});

export type BuildRecord = Prisma.BuildGetPayload<{ include: typeof buildInclude }>;
type AlternativeRecord = BuildRecord["alternatives"][number];

function mapGame(record: BuildRecord["game"]): GameView {
  return {
    id: record.id,
    slug: record.slug as GameView["slug"],
    name: record.name,
    tagline: record.tagline,
    description: record.description,
    themeKey: record.themeKey as GameView["themeKey"],
  };
}

function mapRatings(record: BuildRecord): RatingSummary {
  return {
    stealth: record.stealthRating,
    hacking: record.hackingRating,
    mobility: record.mobilityRating,
    survivability: record.survivabilityRating,
    burst: record.burstRating,
    utility: record.utilityRating,
    pve: record.pveRating,
    pvp: record.pvpRating,
  };
}

function mapStats(record: BuildRecord) {
  const attributeStats: StatEntryView[] = [];
  const supportStats: StatEntryView[] = [];

  for (const stat of record.stats) {
    const mapped: StatEntryView = {
      key: stat.key,
      label: stat.label,
      value: stat.value,
      category: stat.category,
    };

    if (stat.category === "ATTRIBUTE") {
      attributeStats.push(mapped);
    } else {
      supportStats.push(mapped);
    }
  }

  return {
    attributeStats,
    supportStats,
  };
}

function mapTags(record: BuildRecord): TaggedStatView[] {
  return record.tags.map((entry) => ({
    slug: entry.tag.slug,
    label: entry.tag.label,
    category: entry.tag.category,
    weight: entry.weight,
  }));
}

function mapEquipment(items: Array<Record<string, string | number | null>>): EquipmentView[] {
  return items.map((item) => {
    const mapped: EquipmentView = {
      name: String(item.name),
      description: String(item.description),
    };

    if (typeof item.slot === "string") {
      mapped.slot = item.slot;
    }

    if (typeof item.effect === "string") {
      mapped.effect = item.effect;
    }

    if (typeof item.school === "string") {
      mapped.school = item.school;
    }

    if (typeof item.tree === "string") {
      mapped.tree = item.tree;
    }

    if (typeof item.scalingOrProfile === "string") {
      mapped.scalingOrProfile = item.scalingOrProfile;
    }

    if (typeof item.weightClass === "string") {
      mapped.weightClass = item.weightClass;
    }

    if (typeof item.type === "string") {
      mapped.operatingSystemType = item.type as EquipmentView["operatingSystemType"];
    }

    return mapped;
  });
}

function formatStatline(stats: StatEntryView[]): string {
  const offensivePriority = [
    "strength",
    "dexterity",
    "faith",
    "intelligence",
    "arcane",
    "vigor",
    "reflexes",
    "technical-ability",
    "cool",
    "body",
    "mind",
    "endurance",
  ];

  const ranked = [...stats].sort((left, right) => {
    const leftIndex = offensivePriority.indexOf(left.key);
    const rightIndex = offensivePriority.indexOf(right.key);
    const normalizedLeft = leftIndex === -1 ? offensivePriority.length : leftIndex;
    const normalizedRight = rightIndex === -1 ? offensivePriority.length : rightIndex;

    if (right.value !== left.value) {
      return right.value - left.value;
    }

    if (normalizedLeft !== normalizedRight) {
      return normalizedLeft - normalizedRight;
    }

    return left.label.localeCompare(right.label);
  });

  return ranked
    .slice(0, 2)
    .map((stat) => `${stat.label} ${stat.value}`)
    .join(" / ");
}

function mapSignature(record: BuildRecord, attributeStats: StatEntryView[]): BuildSignatureView {
  const primaryWeapon = record.weapons[0]?.name;
  const secondaryWeapon = record.weapons[1]?.name;
  const primaryOs = record.operatingSystems[0]?.name;
  const primarySpell = record.spells[0]?.name;
  const primaryPerk = record.perks[0]?.name;
  const route = record.progressionSteps[0]?.title ?? record.progressionCurve;

  const loadout =
    primaryOs && primaryWeapon
      ? `${primaryOs} / ${primaryWeapon}`
      : primaryWeapon && secondaryWeapon
        ? `${primaryWeapon} / ${secondaryWeapon}`
        : primaryWeapon && primarySpell
          ? `${primaryWeapon} / ${primarySpell}`
          : primaryWeapon && primaryPerk
            ? `${primaryWeapon} / ${primaryPerk}`
            : primaryWeapon ??
              primarySpell ??
              primaryOs ??
              primaryPerk ??
              record.primaryArchetype;

  return {
    loadout,
    statline: formatStatline(attributeStats),
    route,
  };
}

function buildSearchIndex(record: BuildRecord, tags: TaggedStatView[]) {
  return [
    record.name,
    record.primaryArchetype,
    record.summary,
    record.game.name,
    ...tags.map((tag) => tag.label),
    ...record.weapons.map((weapon) => weapon.name),
    ...record.spells.map((spell) => spell.name),
    ...record.perks.map((perk) => perk.name),
    ...record.cyberware.map((chrome) => chrome.name),
  ]
    .join(" ")
    .toLowerCase();
}

export function mapBuildCard(record: BuildRecord): BuildCardView {
  const game = mapGame(record.game);
  const tags = mapTags(record);
  const { attributeStats, supportStats } = mapStats(record);
  const signature = mapSignature(record, attributeStats);

  return {
    id: record.id,
    slug: record.slug,
    name: record.name,
    primaryArchetype: record.primaryArchetype,
    summary: record.summary,
    playstyle: record.playstyle,
    difficulty: record.difficulty,
    primaryMode: record.primaryMode,
    combatStyle: record.combatStyle,
    progressionCurve: record.progressionCurve,
    difficultyNotes: record.difficultyNotes,
    isFeatured: record.isFeatured,
    sortOrder: record.sortOrder,
    game,
    ratings: mapRatings(record),
    tags,
    attributeStats,
    supportStats,
    signature,
    searchIndex: buildSearchIndex(record, tags),
  };
}

function mapAlternative(alternative: AlternativeRecord): AlternativeBuildView {
  const build = alternative.alternative;

  return {
    ...mapBuildCard({
      ...build,
      weapons: [],
      armorPieces: [],
      talismans: [],
      spells: [],
      perks: [],
      cyberware: [],
      operatingSystems: [],
      progressionSteps: [],
      strengths: [],
      weaknesses: [],
      alternatives: [],
    }),
    reason: alternative.reason,
  };
}

export function mapBuildDetail(record: BuildRecord): BuildDetailView {
  return {
    ...mapBuildCard(record),
    description: record.description,
    weapons: mapEquipment(record.weapons),
    armorPieces: mapEquipment(record.armorPieces),
    talismans: mapEquipment(record.talismans),
    spells: mapEquipment(record.spells),
    perks: mapEquipment(record.perks),
    cyberware: mapEquipment(record.cyberware),
    operatingSystems: mapEquipment(record.operatingSystems),
    progressionSteps: record.progressionSteps.map((step) => ({
      stage: step.stage,
      stepOrder: step.stepOrder,
      title: step.title,
      description: step.description,
    })),
    strengths: record.strengths.map((strength) => strength.text),
    weaknesses: record.weaknesses.map((weakness) => weakness.text),
    alternatives: record.alternatives.map(mapAlternative),
  };
}
