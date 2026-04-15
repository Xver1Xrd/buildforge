import { describe, expect, it } from "vitest";

import { recommendBuilds } from "@/lib/recommendation/engine";
import type {
  AdvisorBuildView,
  AdvisorFormValues,
  AdvisorGameSlug,
} from "@/types/advisor";
import type { TaggedStatView } from "@/types/builds";

function buildTags(slugs: string[]): TaggedStatView[] {
  return slugs.map((slug) => ({
    slug,
    label: slug,
    category: "STYLE",
    weight: 3,
  }));
}

const gameMetadata: Record<AdvisorGameSlug, { id: number; name: string }> = {
  "elden-ring": { id: 1, name: "Elden Ring" },
  "cyberpunk-2077": { id: 2, name: "Cyberpunk 2077" },
  "witcher-3": { id: 3, name: "The Witcher 3: Wild Hunt" },
  "dark-souls-3": { id: 4, name: "Dark Souls 3" },
  "dark-souls-2": { id: 5, name: "Dark Souls 2" },
  "lies-of-p": { id: 6, name: "Lies of P" },
};

let nextBuildId = 100;

function makeBuild(
  overrides: Partial<AdvisorBuildView> &
    Pick<AdvisorBuildView, "slug" | "name" | "primaryArchetype">,
  gameSlug: AdvisorGameSlug,
): AdvisorBuildView {
  const game = gameMetadata[gameSlug];

  return {
    id: overrides.id ?? nextBuildId++,
    slug: overrides.slug,
    name: overrides.name,
    primaryArchetype: overrides.primaryArchetype,
    summary: overrides.summary ?? "summary",
    playstyle: overrides.playstyle ?? "playstyle",
    difficulty: overrides.difficulty ?? "INTERMEDIATE",
    primaryMode: overrides.primaryMode ?? "HYBRID",
    combatStyle: overrides.combatStyle ?? "MELEE",
    progressionCurve: overrides.progressionCurve ?? "Strong early and steady late.",
    difficultyNotes: overrides.difficultyNotes ?? "Moderate routing requirements.",
    isFeatured: overrides.isFeatured ?? false,
    sortOrder: overrides.sortOrder ?? 0,
    game: {
      id: game.id,
      slug: gameSlug,
      name: game.name,
      tagline: "tagline",
      description: "description",
      themeKey: gameSlug,
    },
    ratings: overrides.ratings ?? {
      stealth: 0,
      hacking: 0,
      mobility: 0,
      survivability: 0,
      burst: 0,
      utility: 0,
      pve: 0,
      pvp: 0,
    },
    tags: overrides.tags ?? [],
    attributeStats: overrides.attributeStats ?? [],
    supportStats: overrides.supportStats ?? [],
    signature: overrides.signature ?? {
      loadout: "signature loadout",
      statline: "signature statline",
      route: "signature route",
    },
    searchIndex: overrides.searchIndex ?? `${overrides.name} ${overrides.primaryArchetype}`,
  };
}

describe("recommendBuilds", () => {
  it("prefers the colossal strength route for a PvE burst-oriented Elden Ring player", () => {
    const pool: AdvisorBuildView[] = [
      makeBuild(
        {
          slug: "strength-colossal-titan",
          name: "Titan of Colossal Strength",
          primaryArchetype: "Strength Colossal",
          difficulty: "BEGINNER",
          primaryMode: "PVE",
          ratings: {
            stealth: 1,
            hacking: 0,
            mobility: 3,
            survivability: 9,
            burst: 10,
            utility: 5,
            pve: 10,
            pvp: 6,
          },
          tags: buildTags(["melee", "tank", "boss-burst", "pve"]),
        },
        "elden-ring",
      ),
      makeBuild(
        {
          slug: "dex-bleed-ronin",
          name: "Bleed Ronin",
          primaryArchetype: "Dex Bleed",
          difficulty: "INTERMEDIATE",
          primaryMode: "PVP",
          ratings: {
            stealth: 2,
            hacking: 0,
            mobility: 9,
            survivability: 5,
            burst: 7,
            utility: 4,
            pve: 8,
            pvp: 9,
          },
          tags: buildTags(["bleed", "mobility", "status-pressure", "pvp"]),
        },
        "elden-ring",
      ),
      makeBuild(
        {
          slug: "intelligence-comet-mage",
          name: "Intelligence Comet Mage",
          primaryArchetype: "Intelligence Mage",
          difficulty: "ADVANCED",
          combatStyle: "SPELLCASTER",
          ratings: {
            stealth: 1,
            hacking: 0,
            mobility: 5,
            survivability: 3,
            burst: 9,
            utility: 8,
            pve: 9,
            pvp: 5,
          },
          tags: buildTags(["spellcaster", "magic", "precision", "glass-cannon"]),
        },
        "elden-ring",
      ),
    ];

    const result = recommendBuilds(
      {
        gameSlug: "elden-ring",
        style: "strength-colossus",
        difficulty: "BEGINNER",
        focus: "PVE",
        preferences: ["boss-burst", "tank"],
      } satisfies AdvisorFormValues,
      pool,
    );

    expect(result.winner.build.slug).toBe("strength-colossal-titan");
    expect(result.alternatives).toHaveLength(2);
  });

  it("picks the netrunner for a hacker-first Cyberpunk player", () => {
    const pool: AdvisorBuildView[] = [
      makeBuild(
        {
          slug: "ghostwire-netrunner",
          name: "Ghostwire Netrunner",
          primaryArchetype: "Netrunner",
          difficulty: "ADVANCED",
          combatStyle: "HACKING",
          ratings: {
            stealth: 8,
            hacking: 10,
            mobility: 6,
            survivability: 4,
            burst: 8,
            utility: 10,
            pve: 8,
            pvp: 6,
          },
          tags: buildTags(["hacker", "quickhacks", "crowd-control", "stealth"]),
        },
        "cyberpunk-2077",
      ),
      makeBuild(
        {
          slug: "apogee-ronin",
          name: "Apogee Ronin",
          primaryArchetype: "Sandevistan Katana",
          difficulty: "INTERMEDIATE",
          ratings: {
            stealth: 2,
            hacking: 0,
            mobility: 10,
            survivability: 6,
            burst: 10,
            utility: 4,
            pve: 8,
            pvp: 8,
          },
          tags: buildTags(["blades", "mobility", "explosive", "precision"]),
        },
        "cyberpunk-2077",
      ),
      makeBuild(
        {
          slug: "midnight-suppressor",
          name: "Midnight Suppressor",
          primaryArchetype: "Stealth Pistol",
          difficulty: "BEGINNER",
          combatStyle: "RANGED",
          ratings: {
            stealth: 10,
            hacking: 1,
            mobility: 8,
            survivability: 4,
            burst: 7,
            utility: 6,
            pve: 8,
            pvp: 6,
          },
          tags: buildTags(["stealth", "precision", "methodical", "ranged"]),
        },
        "cyberpunk-2077",
      ),
    ];

    const result = recommendBuilds(
      {
        gameSlug: "cyberpunk-2077",
        style: "netrunner",
        difficulty: "ADVANCED",
        focus: "HACKER",
        preferences: ["quickhacks", "crowd-control"],
      } satisfies AdvisorFormValues,
      pool,
    );

    expect(result.winner.build.slug).toBe("ghostwire-netrunner");
    expect(result.winner.explanation.length).toBeGreaterThan(0);
  });

  it("routes a Witcher 3 signs player into the Gryphon setup", () => {
    const pool: AdvisorBuildView[] = [
      makeBuild(
        {
          slug: "gryphon-sign-weaver",
          name: "Gryphon Sign Weaver",
          primaryArchetype: "Signs Gryphon",
          difficulty: "INTERMEDIATE",
          combatStyle: "SPELLCASTER",
          ratings: {
            stealth: 2,
            hacking: 0,
            mobility: 5,
            survivability: 7,
            burst: 7,
            utility: 10,
            pve: 9,
            pvp: 0,
          },
          tags: buildTags(["signs", "caster", "crowd-control", "support-buffs"]),
        },
        "witcher-3",
      ),
      makeBuild(
        {
          slug: "cat-school-whirl",
          name: "Cat School Whirl",
          primaryArchetype: "Fast Attack Cat",
          difficulty: "ADVANCED",
          ratings: {
            stealth: 1,
            hacking: 0,
            mobility: 9,
            survivability: 4,
            burst: 9,
            utility: 5,
            pve: 8,
            pvp: 0,
          },
          tags: buildTags(["mobility", "precision", "melee", "boss-burst"]),
        },
        "witcher-3",
      ),
      makeBuild(
        {
          slug: "ursine-quen-bastion",
          name: "Ursine Quen Bastion",
          primaryArchetype: "Heavy Bear",
          difficulty: "BEGINNER",
          ratings: {
            stealth: 0,
            hacking: 0,
            mobility: 3,
            survivability: 10,
            burst: 6,
            utility: 7,
            pve: 9,
            pvp: 0,
          },
          tags: buildTags(["tank", "sustain", "signs", "monster-hunter"]),
        },
        "witcher-3",
      ),
    ];

    const result = recommendBuilds(
      {
        gameSlug: "witcher-3",
        style: "sign-gryphon",
        difficulty: "INTERMEDIATE",
        focus: "SIGNS",
        preferences: ["sign-casting", "crowd-control"],
      } satisfies AdvisorFormValues,
      pool,
    );

    expect(result.winner.build.slug).toBe("gryphon-sign-weaver");
    expect(result.winner.breakdown.style).toBeGreaterThan(0);
  });

  it("keeps Dark Souls 3 strength players on the ultra route", () => {
    const pool: AdvisorBuildView[] = [
      makeBuild(
        {
          slug: "lothric-ultra-knight",
          name: "Lothric Ultra Knight",
          primaryArchetype: "Strength Ultra",
          difficulty: "BEGINNER",
          ratings: {
            stealth: 0,
            hacking: 0,
            mobility: 3,
            survivability: 9,
            burst: 10,
            utility: 5,
            pve: 10,
            pvp: 6,
          },
          tags: buildTags(["melee", "tank", "boss-burst", "poise", "pve"]),
        },
        "dark-souls-3",
      ),
      makeBuild(
        {
          slug: "sellsword-weapon-master",
          name: "Sellsword Weapon Master",
          primaryArchetype: "Dex Weapon Art",
          difficulty: "ADVANCED",
          ratings: {
            stealth: 0,
            hacking: 0,
            mobility: 10,
            survivability: 4,
            burst: 8,
            utility: 6,
            pve: 8,
            pvp: 9,
          },
          tags: buildTags(["weapon-arts", "mobility", "precision", "pvp"]),
        },
        "dark-souls-3",
      ),
      makeBuild(
        {
          slug: "chaos-pyromancer",
          name: "Chaos Pyromancer",
          primaryArchetype: "Pyromancer",
          difficulty: "INTERMEDIATE",
          combatStyle: "SPELLCASTER",
          ratings: {
            stealth: 0,
            hacking: 0,
            mobility: 5,
            survivability: 5,
            burst: 9,
            utility: 9,
            pve: 8,
            pvp: 7,
          },
          tags: buildTags(["pyromancy", "crowd-control", "explosive", "support-buffs"]),
        },
        "dark-souls-3",
      ),
    ];

    const result = recommendBuilds(
      {
        gameSlug: "dark-souls-3",
        style: "strength-ultra",
        difficulty: "BEGINNER",
        focus: "PVE",
        preferences: ["poise-trades", "boss-burst"],
      } satisfies AdvisorFormValues,
      pool,
    );

    expect(result.winner.build.slug).toBe("lothric-ultra-knight");
  });

  it("recommends the DS2 hexer for a utility-heavy hybrid player", () => {
    const pool: AdvisorBuildView[] = [
      makeBuild(
        {
          slug: "black-gulch-hexer",
          name: "Black Gulch Hexer",
          primaryArchetype: "Hexer",
          difficulty: "INTERMEDIATE",
          combatStyle: "SPELLCASTER",
          ratings: {
            stealth: 0,
            hacking: 0,
            mobility: 5,
            survivability: 6,
            burst: 8,
            utility: 10,
            pve: 8,
            pvp: 8,
          },
          tags: buildTags(["hexes", "dark-magic", "support-buffs", "precision"]),
        },
        "dark-souls-2",
      ),
      makeBuild(
        {
          slug: "iron-keep-sentinel",
          name: "Iron Keep Sentinel",
          primaryArchetype: "Greatshield Sentinel",
          difficulty: "BEGINNER",
          ratings: {
            stealth: 0,
            hacking: 0,
            mobility: 2,
            survivability: 10,
            burst: 6,
            utility: 5,
            pve: 9,
            pvp: 4,
          },
          tags: buildTags(["tank", "sustain", "methodical", "pve"]),
        },
        "dark-souls-2",
      ),
      makeBuild(
        {
          slug: "drangleic-power-stancer",
          name: "Drangleic Power Stancer",
          primaryArchetype: "Power Stance",
          difficulty: "ADVANCED",
          ratings: {
            stealth: 0,
            hacking: 0,
            mobility: 8,
            survivability: 5,
            burst: 9,
            utility: 5,
            pve: 8,
            pvp: 7,
          },
          tags: buildTags(["power-stance", "mobility", "explosive", "pve"]),
        },
        "dark-souls-2",
      ),
    ];

    const result = recommendBuilds(
      {
        gameSlug: "dark-souls-2",
        style: "hexer",
        difficulty: "INTERMEDIATE",
        focus: "HYBRID",
        preferences: ["hexes", "support-buffs"],
      } satisfies AdvisorFormValues,
      pool,
    );

    expect(result.winner.build.slug).toBe("black-gulch-hexer");
    expect(result.alternatives).toHaveLength(2);
  });

  it("finds the perfect-guard route for a parry-focused Lies of P player", () => {
    const pool: AdvisorBuildView[] = [
      makeBuild(
        {
          slug: "perfect-guard-duelist",
          name: "Perfect Guard Duelist",
          primaryArchetype: "Perfect Guard",
          difficulty: "ADVANCED",
          ratings: {
            stealth: 0,
            hacking: 0,
            mobility: 7,
            survivability: 7,
            burst: 8,
            utility: 10,
            pve: 9,
            pvp: 0,
          },
          tags: buildTags(["perfect-guard", "precision", "stagger", "guard-break"]),
        },
        "lies-of-p",
      ),
      makeBuild(
        {
          slug: "krat-ark-greatblade",
          name: "Krat Ark Greatblade",
          primaryArchetype: "Motivity Greatblade",
          difficulty: "BEGINNER",
          ratings: {
            stealth: 0,
            hacking: 0,
            mobility: 3,
            survivability: 9,
            burst: 10,
            utility: 5,
            pve: 10,
            pvp: 0,
          },
          tags: buildTags(["tank", "stagger", "boss-burst", "pve"]),
        },
        "lies-of-p",
      ),
      makeBuild(
        {
          slug: "aegis-legionnaire",
          name: "Aegis Legionnaire",
          primaryArchetype: "Legion Aegis",
          difficulty: "INTERMEDIATE",
          ratings: {
            stealth: 0,
            hacking: 0,
            mobility: 4,
            survivability: 9,
            burst: 6,
            utility: 9,
            pve: 8,
            pvp: 0,
          },
          tags: buildTags(["legion-arms", "tank", "sustain", "utility"]),
        },
        "lies-of-p",
      ),
    ];

    const result = recommendBuilds(
      {
        gameSlug: "lies-of-p",
        style: "perfect-guard",
        difficulty: "ADVANCED",
        focus: "PARRY",
        preferences: ["perfect-guard", "stagger"],
      } satisfies AdvisorFormValues,
      pool,
    );

    expect(result.winner.build.slug).toBe("perfect-guard-duelist");
    expect(result.winner.reasons[0]).toContain("Perfect Guard Duelist");
  });
});
