import "dotenv/config";

import { PrismaClient, StatCategory } from "@prisma/client";

import { cyberpunkBuildSeeds } from "./seeds/cyberpunk-2077";
import { eldenRingBuildSeeds } from "./seeds/elden-ring";
import { gameSeeds } from "./seeds/games";
import { tagSeeds } from "./seeds/tags";

const prisma = new PrismaClient();

async function main() {
  await prisma.buildAlternative.deleteMany();
  await prisma.buildTag.deleteMany();
  await prisma.progressionStep.deleteMany();
  await prisma.operatingSystemChoice.deleteMany();
  await prisma.cyberware.deleteMany();
  await prisma.perk.deleteMany();
  await prisma.spell.deleteMany();
  await prisma.talisman.deleteMany();
  await prisma.armorPiece.deleteMany();
  await prisma.weapon.deleteMany();
  await prisma.strength.deleteMany();
  await prisma.weakness.deleteMany();
  await prisma.buildStat.deleteMany();
  await prisma.build.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.game.deleteMany();

  await prisma.tag.createMany({ data: tagSeeds });
  await prisma.game.createMany({ data: [...gameSeeds] });

  const gameMap = new Map(
    (await prisma.game.findMany()).map((game) => [game.slug, game.id]),
  );
  const tagMap = new Map(
    (await prisma.tag.findMany()).map((tag) => [tag.slug, tag.id]),
  );
  const buildIdMap = new Map<string, number>();

  for (const [gameSlug, builds] of [
    ["elden-ring", eldenRingBuildSeeds],
    ["cyberpunk-2077", cyberpunkBuildSeeds],
  ] as const) {
    const gameId = gameMap.get(gameSlug);

    if (!gameId) {
      throw new Error(`Missing game seed for ${gameSlug}`);
    }

    for (const build of builds) {
      const created = await prisma.build.create({
        data: {
          gameId,
          slug: build.slug,
          name: build.name,
          primaryArchetype: build.primaryArchetype,
          summary: build.summary,
          description: build.description,
          playstyle: build.playstyle,
          difficulty: build.difficulty,
          primaryMode: build.primaryMode,
          combatStyle: build.combatStyle,
          stealthRating: build.stealthRating,
          loudRating: build.loudRating,
          hackingRating: build.hackingRating,
          mobilityRating: build.mobilityRating,
          survivabilityRating: build.survivabilityRating,
          burstRating: build.burstRating,
          utilityRating: build.utilityRating,
          pveRating: build.pveRating,
          pvpRating: build.pvpRating,
          progressionCurve: build.progressionCurve,
          difficultyNotes: build.difficultyNotes,
          isFeatured: build.isFeatured,
          sortOrder: build.sortOrder,
          stats: {
            create: [
              ...build.attributeStats.map((stat) => ({
                category: StatCategory.ATTRIBUTE,
                key: stat.key,
                label: stat.label,
                value: stat.value,
              })),
              ...build.supportStats.map((stat) => ({
                category: StatCategory.SUPPORT,
                key: stat.key,
                label: stat.label,
                value: stat.value,
              })),
            ],
          },
          weapons: { create: build.weapons },
          armorPieces: { create: build.armorPieces },
          talismans: { create: build.talismans },
          spells: { create: build.spells },
          perks: { create: build.perks },
          cyberware: { create: build.cyberware },
          operatingSystems: { create: build.operatingSystems },
          progressionSteps: {
            create: build.progression.map((step, index) => ({
              stage: step.stage,
              stepOrder: index + 1,
              title: step.title,
              description: step.description,
            })),
          },
          strengths: { create: build.strengths.map((text) => ({ text })) },
          weaknesses: { create: build.weaknesses.map((text) => ({ text })) },
          tags: {
            create: build.tags.map((tag) => {
              const tagId = tagMap.get(tag.slug);

              if (!tagId) {
                throw new Error(`Missing tag for slug ${tag.slug}`);
              }

              return {
                weight: tag.weight,
                tagId,
              };
            }),
          },
        },
      });

      buildIdMap.set(build.slug, created.id);
    }
  }

  const alternatives = [...eldenRingBuildSeeds, ...cyberpunkBuildSeeds].flatMap(
    (build) =>
      build.alternatives
        .map((alternative) => ({
          buildId: buildIdMap.get(build.slug),
          alternativeBuildId: buildIdMap.get(alternative.slug),
          reason: alternative.reason,
        }))
        .filter(
          (
            item,
          ): item is {
            buildId: number;
            alternativeBuildId: number;
            reason: string;
          } =>
            typeof item.buildId === "number" &&
            typeof item.alternativeBuildId === "number",
        ),
  );

  await prisma.buildAlternative.createMany({ data: alternatives });

  const buildCount = await prisma.build.count();
  console.log(`Seeded BuildForge with ${buildCount} builds across 2 games.`);
}

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
