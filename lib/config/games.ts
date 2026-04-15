import type { GameSlug, RatingSummary } from "@/types/builds";

export type GameProfile = {
  slug: GameSlug;
  name: string;
  navLabel: string;
  family: "elden" | "cyberpunk" | "witcher" | "dark-souls-3" | "dark-souls-2" | "lies-of-p";
  landingVariant: GameSlug;
  homeArt: {
    hero: string;
    tile: string;
  };
  sectionLabels: {
    armorPieces: string;
    talismans: string;
    spells: string;
    perks: string;
    cyberware: string;
    operatingSystems: string;
  };
  headlineMetrics: Array<{
    label: string;
    ratingKey: keyof RatingSummary;
  }>;
  primaryMetric: {
    label: string;
    ratingKey: keyof RatingSummary;
  };
  signatureMode: "weapons" | "weapons-plus-os" | "signature";
  statPriority: string[];
};

export const gameProfiles: Record<GameSlug, GameProfile> = {
  "elden-ring": {
    slug: "elden-ring",
    name: "Elden Ring",
    navLabel: "Elden Ring",
    family: "elden",
    landingVariant: "elden-ring",
    homeArt: {
      hero: "/home/elden-ring-hero.jpg",
      tile: "/home/elden-ring-tile.jpg",
    },
    sectionLabels: {
      armorPieces: "Armor",
      talismans: "Talismans",
      spells: "Spells",
      perks: "Perks",
      cyberware: "Cyberware",
      operatingSystems: "Operating system",
    },
    headlineMetrics: [
      { label: "PvE", ratingKey: "pve" },
      { label: "PvP", ratingKey: "pvp" },
      { label: "Burst", ratingKey: "burst" },
    ],
    primaryMetric: { label: "PvE ready", ratingKey: "pve" },
    signatureMode: "weapons",
    statPriority: [
      "strength",
      "dexterity",
      "faith",
      "intelligence",
      "arcane",
      "vigor",
      "mind",
      "endurance",
    ],
  },
  "cyberpunk-2077": {
    slug: "cyberpunk-2077",
    name: "Cyberpunk 2077",
    navLabel: "Cyberpunk 2077",
    family: "cyberpunk",
    landingVariant: "cyberpunk-2077",
    homeArt: {
      hero: "/home/cyberpunk-hero.jpg",
      tile: "/home/cyberpunk-tile.jpg",
    },
    sectionLabels: {
      armorPieces: "Armor",
      talismans: "Talismans",
      spells: "Quickhacks",
      perks: "Perks",
      cyberware: "Cyberware",
      operatingSystems: "Operating system",
    },
    headlineMetrics: [
      { label: "Stealth", ratingKey: "stealth" },
      { label: "Hacking", ratingKey: "hacking" },
      { label: "Burst", ratingKey: "burst" },
    ],
    primaryMetric: { label: "Hacking", ratingKey: "hacking" },
    signatureMode: "weapons-plus-os",
    statPriority: [
      "reflexes",
      "technical-ability",
      "cool",
      "intelligence",
      "body",
    ],
  },
  "witcher-3": {
    slug: "witcher-3",
    name: "The Witcher 3",
    navLabel: "Witcher 3",
    family: "witcher",
    landingVariant: "witcher-3",
    homeArt: {
      hero: "/home/witcher-3-hero.jpg",
      tile: "/home/witcher-3-tile.jpg",
    },
    sectionLabels: {
      armorPieces: "Gear sets",
      talismans: "Alchemy core",
      spells: "Signs",
      perks: "Skills",
      cyberware: "Mutations",
      operatingSystems: "Combat mode",
    },
    headlineMetrics: [
      { label: "Burst", ratingKey: "burst" },
      { label: "Utility", ratingKey: "utility" },
      { label: "Survival", ratingKey: "survivability" },
    ],
    primaryMetric: { label: "Utility", ratingKey: "utility" },
    signatureMode: "signature",
    statPriority: ["combat", "alchemy", "signs", "adrenaline", "toxicity", "vitality"],
  },
  "dark-souls-3": {
    slug: "dark-souls-3",
    name: "Dark Souls 3",
    navLabel: "Dark Souls 3",
    family: "dark-souls-3",
    landingVariant: "dark-souls-3",
    homeArt: {
      hero: "/home/dark-souls-3-hero.jpg",
      tile: "/home/dark-souls-3-tile.jpg",
    },
    sectionLabels: {
      armorPieces: "Armor",
      talismans: "Rings",
      spells: "Spells",
      perks: "Talents",
      cyberware: "Infusions",
      operatingSystems: "Combat doctrine",
    },
    headlineMetrics: [
      { label: "PvE", ratingKey: "pve" },
      { label: "PvP", ratingKey: "pvp" },
      { label: "Burst", ratingKey: "burst" },
    ],
    primaryMetric: { label: "PvP ready", ratingKey: "pvp" },
    signatureMode: "weapons",
    statPriority: [
      "strength",
      "dexterity",
      "faith",
      "intelligence",
      "vigor",
      "endurance",
      "attunement",
      "vitality",
      "luck",
    ],
  },
  "dark-souls-2": {
    slug: "dark-souls-2",
    name: "Dark Souls 2",
    navLabel: "Dark Souls 2",
    family: "dark-souls-2",
    landingVariant: "dark-souls-2",
    homeArt: {
      hero: "/home/dark-souls-2-hero.jpg",
      tile: "/home/dark-souls-2-tile.jpg",
    },
    sectionLabels: {
      armorPieces: "Armor",
      talismans: "Rings",
      spells: "Spells",
      perks: "Talents",
      cyberware: "Infusions",
      operatingSystems: "Combat doctrine",
    },
    headlineMetrics: [
      { label: "PvE", ratingKey: "pve" },
      { label: "PvP", ratingKey: "pvp" },
      { label: "Utility", ratingKey: "utility" },
    ],
    primaryMetric: { label: "PvE ready", ratingKey: "pve" },
    signatureMode: "weapons",
    statPriority: [
      "strength",
      "dexterity",
      "faith",
      "intelligence",
      "vigor",
      "endurance",
      "adaptability",
      "attunement",
      "vitality",
    ],
  },
  "lies-of-p": {
    slug: "lies-of-p",
    name: "Lies of P",
    navLabel: "Lies of P",
    family: "lies-of-p",
    landingVariant: "lies-of-p",
    homeArt: {
      hero: "/home/lies-of-p-hero.jpg",
      tile: "/home/lies-of-p-tile.jpg",
    },
    sectionLabels: {
      armorPieces: "Defensive parts",
      talismans: "Amulets",
      spells: "Legion tools",
      perks: "P-Organ nodes",
      cyberware: "Grinders",
      operatingSystems: "Core engine",
    },
    headlineMetrics: [
      { label: "Burst", ratingKey: "burst" },
      { label: "Mobility", ratingKey: "mobility" },
      { label: "Survival", ratingKey: "survivability" },
    ],
    primaryMetric: { label: "Burst", ratingKey: "burst" },
    signatureMode: "signature",
    statPriority: ["motivity", "technique", "advance", "vitality", "vigor", "capacity"],
  },
};

export const supportedGameProfiles = Object.values(gameProfiles);

export function getGameProfile(slug?: GameSlug | null) {
  if (!slug) {
    return null;
  }

  return gameProfiles[slug];
}
