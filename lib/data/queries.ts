import { db } from "@/lib/db";
import { getCombatStyleLabel, getDifficultyLabel } from "@/lib/presentation";
import type { DashboardView, GameSlug } from "@/types/builds";

import { buildInclude, mapBuildCard, mapBuildDetail } from "./mappers";

export async function getGames() {
  const games = await db.game.findMany({
    orderBy: { name: "asc" },
  });

  return games.map((game) => ({
    id: game.id,
    slug: game.slug as GameSlug,
    name: game.name,
    tagline: game.tagline,
    description: game.description,
    themeKey: game.themeKey as GameSlug,
  }));
}

export async function getGameBySlug(slug: GameSlug) {
  const game = await db.game.findUnique({
    where: { slug },
  });

  if (!game) {
    return null;
  }

  return {
    id: game.id,
    slug: game.slug as GameSlug,
    name: game.name,
    tagline: game.tagline,
    description: game.description,
    themeKey: game.themeKey as GameSlug,
  };
}

export async function getFeaturedBuilds(limit = 6) {
  const builds = await db.build.findMany({
    where: { isFeatured: true },
    orderBy: [{ gameId: "asc" }, { sortOrder: "asc" }],
    take: limit,
    include: buildInclude,
  });

  return builds.map(mapBuildCard);
}

export async function getFeaturedBuildsByGame(slug: GameSlug, limit = 3) {
  const builds = await db.build.findMany({
    where: {
      isFeatured: true,
      game: { slug },
    },
    orderBy: { sortOrder: "asc" },
    take: limit,
    include: buildInclude,
  });

  return builds.map(mapBuildCard);
}

export async function getBuildCardsByGame(slug: GameSlug) {
  const builds = await db.build.findMany({
    where: { game: { slug } },
    orderBy: [{ isFeatured: "desc" }, { sortOrder: "asc" }],
    include: buildInclude,
  });

  return builds.map(mapBuildCard);
}

export async function getAllBuildCards() {
  const builds = await db.build.findMany({
    orderBy: [{ gameId: "asc" }, { sortOrder: "asc" }],
    include: buildInclude,
  });

  return builds.map(mapBuildCard);
}

export async function getAllBuildDetails() {
  const builds = await db.build.findMany({
    orderBy: [{ gameId: "asc" }, { sortOrder: "asc" }],
    include: buildInclude,
  });

  return builds.map(mapBuildDetail);
}

export async function getBuildDetail(gameSlug: GameSlug, buildSlug: string) {
  const build = await db.build.findFirst({
    where: {
      slug: buildSlug,
      game: { slug: gameSlug },
    },
    include: buildInclude,
  });

  if (!build) {
    return null;
  }

  return mapBuildDetail(build);
}

export async function getBuildDetailsBySlugs(buildSlugs: string[]) {
  if (!buildSlugs.length) {
    return [];
  }

  const builds = await db.build.findMany({
    where: {
      slug: {
        in: buildSlugs,
      },
    },
    include: buildInclude,
  });

  const ordered = buildSlugs
    .map((slug) => builds.find((build) => build.slug === slug))
    .filter((build): build is (typeof builds)[number] => Boolean(build));

  return ordered.map(mapBuildDetail);
}

function round(value: number) {
  return Math.round(value * 10) / 10;
}

export async function getDashboardData(): Promise<DashboardView> {
  const builds = await db.build.findMany({
    include: {
      game: true,
      tags: {
        include: {
          tag: true,
        },
      },
    },
    orderBy: [{ gameId: "asc" }, { sortOrder: "asc" }],
  });

  const games = await getGames();
  const totalBuilds = builds.length;

  const gameCards = games.map((game) => {
    const gameBuilds = builds.filter((build) => build.game.slug === game.slug);
    const averageBurst =
      gameBuilds.reduce((sum, build) => sum + build.burstRating, 0) /
      Math.max(gameBuilds.length, 1);
    const averageSurvivability =
      gameBuilds.reduce((sum, build) => sum + build.survivabilityRating, 0) /
      Math.max(gameBuilds.length, 1);

    return {
      game,
      count: gameBuilds.length,
      featuredCount: gameBuilds.filter((build) => build.isFeatured).length,
      averageBurst: round(averageBurst),
      averageSurvivability: round(averageSurvivability),
    };
  });

  const difficultyBreakdown = (["BEGINNER", "INTERMEDIATE", "ADVANCED"] as const).map((difficulty) => ({
    label: getDifficultyLabel(difficulty),
    value: builds.filter((build) => build.difficulty === difficulty).length,
  }));

  const combatStyleBreakdown = (["MELEE", "RANGED", "SPELLCASTER", "HACKING", "HYBRID"] as const).map(
    (style) => ({
      label: getCombatStyleLabel(style),
      value: builds.filter((build) => build.combatStyle === style).length,
    }),
  );

  const tagCounts = new Map<string, { label: string; value: number; category: DashboardView["topTags"][number]["category"] }>();

  for (const build of builds) {
    for (const tagEntry of build.tags) {
      const current = tagCounts.get(tagEntry.tag.slug);
      tagCounts.set(tagEntry.tag.slug, {
        label: tagEntry.tag.label,
        category: tagEntry.tag.category,
        value: (current?.value ?? 0) + tagEntry.weight,
      });
    }
  }

  const topTags = [...tagCounts.entries()]
    .map(([slug, value]) => ({
      slug,
      label: value.label,
      value: value.value,
      category: value.category,
    }))
    .sort((left, right) => right.value - left.value)
    .slice(0, 10);

  const ratingHeatmap = games.map((game) => {
    const gameBuilds = builds.filter((build) => build.game.slug === game.slug);
    const size = Math.max(gameBuilds.length, 1);

    return {
      gameSlug: game.slug,
      label: game.name,
      burst: round(gameBuilds.reduce((sum, build) => sum + build.burstRating, 0) / size),
      survivability: round(
        gameBuilds.reduce((sum, build) => sum + build.survivabilityRating, 0) / size,
      ),
      mobility: round(gameBuilds.reduce((sum, build) => sum + build.mobilityRating, 0) / size),
      utility: round(gameBuilds.reduce((sum, build) => sum + build.utilityRating, 0) / size),
      stealth: round(gameBuilds.reduce((sum, build) => sum + build.stealthRating, 0) / size),
      hacking: round(gameBuilds.reduce((sum, build) => sum + build.hackingRating, 0) / size),
    };
  });

  return {
    totalBuilds,
    gameCards,
    difficultyBreakdown,
    combatStyleBreakdown,
    topTags,
    ratingHeatmap,
  };
}
