"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowUpRight,
  BarChart3,
  Cpu,
  GitCompareArrows,
  Heart,
  Home,
  LayoutGrid,
  Search,
  Shield,
  Sparkles,
} from "lucide-react"
import { useDeferredValue, useState } from "react"

import { FavoriteToggle } from "@/components/builds/favorite-toggle"
import { getGameTheme } from "@/lib/data/themes"
import { getDifficultyLabel } from "@/lib/presentation"
import { cn } from "@/lib/utils"
import type { BuildCardView, GameSlug, GameView } from "@/types/builds"

const sidebarLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/games/elden-ring/builds", label: "Elden Ring", icon: Shield },
  { href: "/games/cyberpunk-2077/builds", label: "Cyberpunk 2077", icon: Cpu },
  { href: "/compare", label: "Compare", icon: GitCompareArrows },
  { href: "/advisor", label: "Advisor", icon: Sparkles },
  { href: "/favorites", label: "Favorites", icon: Heart },
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
] as const

const worldFilters: Array<{ value: "all" | GameSlug; label: string }> = [
  { value: "all", label: "All routes" },
  { value: "elden-ring", label: "Elden Ring" },
  { value: "cyberpunk-2077", label: "Cyberpunk 2077" },
]

const artworkByGame: Partial<Record<GameSlug, { hero: string; tile: string }>> = {
  "elden-ring": {
    hero: "/home/elden-ring-hero.jpg",
    tile: "/home/elden-ring-tile.jpg",
  },
  "cyberpunk-2077": {
    hero: "/home/cyberpunk-hero.jpg",
    tile: "/home/cyberpunk-tile.jpg",
  },
}

const fallbackArtwork = artworkByGame["elden-ring"] ?? {
  hero: "/home/elden-ring-hero.jpg",
  tile: "/home/elden-ring-tile.jpg",
}

function getPrimaryMetric(build: BuildCardView) {
  if (build.game.slug === "elden-ring") {
    if (build.ratings.pve >= build.ratings.pvp) {
      return { label: "PvE ready", value: `${build.ratings.pve}/10` }
    }

    return { label: "PvP ready", value: `${build.ratings.pvp}/10` }
  }

  const candidates = [
    { label: "Hacking", value: build.ratings.hacking },
    { label: "Stealth", value: build.ratings.stealth },
    { label: "Burst", value: build.ratings.burst },
  ].sort((left, right) => right.value - left.value)

  return {
    label: candidates[0]?.label ?? "Burst",
    value: `${candidates[0]?.value ?? build.ratings.burst}/10`,
  }
}

function getArtwork(build: BuildCardView, variant: "hero" | "tile") {
  return (artworkByGame[build.game.slug] ?? fallbackArtwork)[variant]
}

function getVisualLanguage(build: BuildCardView) {
  const isElden = build.game.slug === "elden-ring"

  return {
    frame: isElden
      ? "border-amber-200/24 shadow-[0_28px_90px_rgba(28,16,4,0.22),0_0_40px_rgba(198,168,91,0.16)]"
      : "border-cyan-300/24 shadow-[0_28px_90px_rgba(8,16,28,0.24),0_0_40px_rgba(60,225,255,0.16)]",
    accentText: isElden ? "text-amber-50/90" : "text-cyan-50/92",
    mutedText: isElden ? "text-amber-100/72" : "text-cyan-50/76",
    chip: isElden
      ? "border-amber-200/22 bg-[rgba(255,244,214,0.16)] text-amber-50/92"
      : "border-cyan-300/24 bg-[rgba(151,246,255,0.16)] text-cyan-50/92",
    outlineChip: isElden
      ? "border-amber-200/18 bg-[rgba(255,248,230,0.1)] text-amber-50/84"
      : "border-cyan-300/22 bg-[rgba(8,24,33,0.36)] text-cyan-50/84",
    panel: isElden
      ? "border-amber-100/14 bg-[linear-gradient(180deg,rgba(255,248,230,0.16),rgba(21,13,8,0.26))]"
      : "border-cyan-200/18 bg-[linear-gradient(180deg,rgba(214,252,255,0.16),rgba(11,20,30,0.28))]",
    label: isElden ? "Tarnished route" : "Night City route",
    watermark: isElden ? "ERDTREE" : "2077",
    activeDot: isElden
      ? "border-amber-100 bg-amber-100 shadow-[0_0_18px_rgba(255,220,140,0.45)]"
      : "border-cyan-100 bg-cyan-100 shadow-[0_0_20px_rgba(130,255,246,0.45)]",
    secondaryAction: isElden
      ? "border-amber-100/18 bg-[rgba(255,247,225,0.12)] text-amber-50 hover:bg-[rgba(255,247,225,0.18)]"
      : "border-cyan-200/18 bg-[rgba(214,252,255,0.12)] text-cyan-50 hover:bg-[rgba(214,252,255,0.18)]",
  }
}

function HomeRecommendationTile({ build }: { build: BuildCardView }) {
  const visual = getVisualLanguage(build)
  const metric = getPrimaryMetric(build)
  const artwork = getArtwork(build, "tile")

  return (
    <Link
      href={`/games/${build.game.slug}/builds/${build.slug}`}
      className={cn(
        "group relative min-h-[290px] overflow-hidden rounded-[32px] border bg-white/10 backdrop-blur-2xl transition duration-500 hover:-translate-y-1",
        visual.frame,
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.04]"
        style={{ backgroundImage: `url(${artwork})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_32%,rgba(8,10,16,0.86)_100%)]" />
      <div
        className={cn(
          "absolute inset-0",
          build.game.slug === "elden-ring"
            ? "bg-[radial-gradient(circle_at_20%_18%,rgba(255,220,150,0.26),transparent_24%),linear-gradient(118deg,rgba(255,248,225,0.08)_0%,rgba(12,10,8,0.05)_30%,rgba(11,8,5,0.58)_72%,rgba(8,7,6,0.84)_100%)]"
            : "bg-[radial-gradient(circle_at_22%_18%,rgba(120,245,255,0.24),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(255,228,80,0.18),transparent_20%),linear-gradient(118deg,rgba(214,252,255,0.06)_0%,rgba(12,18,27,0.08)_28%,rgba(7,10,16,0.58)_72%,rgba(6,8,14,0.86)_100%)]",
        )}
      />

      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] backdrop-blur-md",
                visual.chip,
              )}
            >
              {build.game.name}
            </span>
            <span className="inline-flex items-center rounded-full border border-white/16 bg-white/12 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-white/82 backdrop-blur-md">
              {getDifficultyLabel(build.difficulty)}
            </span>
          </div>
          <FavoriteToggle buildSlug={build.slug} themeSlug={build.game.slug} />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <p className={cn("text-[0.68rem] uppercase tracking-[0.26em]", visual.mutedText)}>
              {visual.label}
            </p>
            <h3
              className={cn(
                "max-w-lg text-3xl leading-none text-white",
                build.game.slug === "cyberpunk-2077"
                  ? "font-[family-name:var(--font-display-cyber)] uppercase tracking-[0.08em]"
                  : "font-[family-name:var(--font-display-elden)] tracking-[0.04em]",
              )}
            >
              {build.name}
            </h3>
            <p className="max-w-xl text-sm leading-6 text-white/76">{build.summary}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="rounded-[24px] border border-white/14 bg-black/18 px-4 py-4 backdrop-blur-xl">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-white/54">
                Signature loadout
              </p>
              <p className="mt-2 text-sm text-white/88">{build.signature.loadout}</p>
            </div>
            <div className="rounded-[24px] border border-white/14 bg-white/12 px-4 py-4 text-left backdrop-blur-xl sm:min-w-[140px] sm:text-right">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-white/56">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function HomeLauncher({
  games,
  builds,
  featuredBuilds,
}: {
  games: GameView[]
  builds: BuildCardView[]
  featuredBuilds: BuildCardView[]
}) {
  const [query, setQuery] = useState("")
  const [activeWorld, setActiveWorld] = useState<"all" | GameSlug>("all")
  const [activeSlug, setActiveSlug] = useState(featuredBuilds[0]?.slug ?? "")
  const deferredQuery = useDeferredValue(query)

  const queryValue = deferredQuery.trim().toLowerCase()
  const matchingBuilds = builds.filter((build) => {
    const worldMatch = activeWorld === "all" || build.game.slug === activeWorld
    const searchMatch = !queryValue || build.searchIndex.includes(queryValue)

    return worldMatch && searchMatch
  })

  const fallbackPool =
    activeWorld === "all"
      ? featuredBuilds
      : featuredBuilds.filter((build) => build.game.slug === activeWorld)

  const heroPool = (matchingBuilds.length ? matchingBuilds : fallbackPool).slice(0, 6)
  const resolvedActiveSlug = heroPool.some((build) => build.slug === activeSlug)
    ? activeSlug
    : (heroPool[0]?.slug ?? "")

  const activeBuild =
    heroPool.find((build) => build.slug === resolvedActiveSlug) ??
    heroPool[0] ??
    featuredBuilds[0]

  const recommendedBuilds = (matchingBuilds.length ? matchingBuilds : fallbackPool)
    .filter((build) => build.slug !== activeBuild?.slug)
    .slice(0, 4)

  const statusCards = [
    { label: "Routes indexed", value: builds.length },
    { label: "Featured picks", value: featuredBuilds.length },
    { label: "Visible now", value: matchingBuilds.length || fallbackPool.length },
  ]

  const activeTheme = activeBuild ? getGameTheme(activeBuild.game.slug) : getGameTheme()
  const activeVisual = activeBuild ? getVisualLanguage(activeBuild) : null
  const activeMetric = activeBuild ? getPrimaryMetric(activeBuild) : null
  const activeArtwork = activeBuild ? getArtwork(activeBuild, "hero") : artworkByGame["elden-ring"].hero

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d1118] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-[-8%] scale-105 bg-cover bg-center opacity-30 blur-[72px]"
          style={{ backgroundImage: `url(${activeArtwork})` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.2),transparent_16%),radial-gradient(circle_at_82%_12%,rgba(126,232,255,0.14),transparent_16%),linear-gradient(135deg,rgba(32,38,52,0.96)_0%,rgba(15,19,28,0.92)_42%,rgba(9,11,16,0.95)_100%)]" />
        <div className="absolute left-[-4%] top-[12%] h-80 w-80 rounded-full bg-white/12 blur-[140px]" />
        <div className="absolute right-[-8%] top-[8%] h-96 w-96 rounded-full bg-sky-400/18 blur-[160px]" />
        <div className="absolute bottom-[-12%] left-[28%] h-80 w-80 rounded-full bg-amber-300/16 blur-[170px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1800px] gap-5 px-3 py-3 sm:px-4 lg:px-5">
        <aside className="hidden w-[300px] shrink-0 xl:block">
          <div className="sticky top-3 flex min-h-[calc(100vh-1.5rem)] flex-col overflow-hidden rounded-[34px] border border-white/16 bg-[linear-gradient(180deg,rgba(40,48,64,0.56),rgba(18,24,36,0.48))] px-6 py-6 shadow-[0_30px_100px_rgba(0,0,0,0.26)] backdrop-blur-[28px]">
            <div className="space-y-4">
              <div>
                <p className="text-[2.35rem] font-semibold uppercase tracking-[0.06em] text-white">
                  BuildForge
                </p>
                <p className="mt-2 max-w-[14rem] text-sm leading-6 text-white/60">
                  Launcher-style access to build analysis, comparison, and recommendations.
                </p>
              </div>

              <div className="h-px bg-white/14" />

              <nav className="space-y-2">
                {sidebarLinks.map((link) => {
                  const Icon = link.icon

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "group flex items-center gap-3 rounded-[18px] px-4 py-3 text-base transition",
                        link.href === "/"
                          ? "bg-white/18 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
                          : "text-white/70 hover:bg-white/10 hover:text-white",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  )
                })}
              </nav>

              <div className="h-px bg-white/14" />
            </div>

            <div className="space-y-3">
              <p className="text-[0.72rem] uppercase tracking-[0.3em] text-white/42">
                Build status
              </p>
              {statusCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-[22px] border border-white/14 bg-white/10 px-4 py-4 backdrop-blur-xl"
                >
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/46">
                    {card.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">{card.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto rounded-[24px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] px-4 py-4 backdrop-blur-xl">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/42">Worlds</p>
              <div className="mt-3 space-y-2">
                {games.map((game) => (
                  <Link
                    key={game.slug}
                    href={`/games/${game.slug}`}
                    className="flex items-center justify-between rounded-[16px] px-3 py-3 text-sm text-white/84 transition hover:bg-white/10"
                  >
                    <span>{game.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-white/48" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col gap-5">
          <div className="rounded-[34px] border border-white/16 bg-[linear-gradient(180deg,rgba(40,48,64,0.48),rgba(14,18,28,0.4))] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.24)] backdrop-blur-[28px] sm:p-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 xl:hidden">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-2xl font-semibold uppercase tracking-[0.06em] text-white">
                    BuildForge
                  </p>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/46">
                    Interactive build launcher
                  </p>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {sidebarLinks.map((link) => {
                    const Icon = link.icon

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-md",
                          link.href === "/"
                            ? "border-white/18 bg-white/18 text-white"
                            : "border-white/14 bg-white/10 text-white/76",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-full border border-white/16 bg-white/18 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl">
                  <Search className="h-5 w-5 shrink-0 text-white/54" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search builds, tags, weapons, perks, or descriptions"
                    className="w-full border-none bg-transparent text-lg text-white outline-none placeholder:text-white/46"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href="/compare"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-white/14 text-white transition hover:bg-white/22"
                  >
                    <GitCompareArrows className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/favorites"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-white/14 text-white transition hover:bg-white/22"
                  >
                    <Heart className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/advisor"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-white/14 text-white transition hover:bg-white/22"
                  >
                    <Sparkles className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {worldFilters.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveWorld(filter.value)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition backdrop-blur-md",
                      activeWorld === filter.value
                        ? "border-white/18 bg-white/20 text-white"
                        : "border-white/14 bg-white/10 text-white/72 hover:bg-white/16 hover:text-white",
                    )}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {activeBuild ? (
              <section className="mt-5 space-y-4">
                <div
                  className={cn(
                    "relative min-h-[500px] overflow-hidden rounded-[36px] border bg-white/10 p-5 backdrop-blur-[28px] sm:p-6 lg:p-8",
                    activeVisual?.frame,
                  )}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700"
                    style={{ backgroundImage: `url(${activeArtwork})` }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_24%,rgba(8,10,16,0.8)_100%)]" />
                  <div
                    className={cn(
                      "absolute inset-0",
                      activeBuild.game.slug === "elden-ring"
                        ? "bg-[radial-gradient(circle_at_18%_18%,rgba(255,222,150,0.34),transparent_26%),linear-gradient(116deg,rgba(255,252,245,0.14)_0%,rgba(22,18,14,0.08)_36%,rgba(10,8,6,0.56)_70%,rgba(7,6,5,0.88)_100%)]"
                        : "bg-[radial-gradient(circle_at_18%_18%,rgba(126,244,255,0.28),transparent_24%),radial-gradient(circle_at_78%_16%,rgba(255,226,75,0.2),transparent_18%),linear-gradient(116deg,rgba(214,252,255,0.12)_0%,rgba(10,18,28,0.08)_36%,rgba(7,11,16,0.58)_72%,rgba(6,8,14,0.88)_100%)]",
                    )}
                  />
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className={cn(
                        "absolute left-[8%] top-[9%] text-[5.5rem] opacity-[0.07] sm:text-[8rem] lg:text-[9.5rem]",
                        activeTheme.displayFontClass,
                        activeBuild.game.slug === "elden-ring" ? "text-amber-50" : "text-cyan-50",
                      )}
                    >
                      {activeVisual?.watermark}
                    </div>
                    <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),transparent)]" />
                    <div className="absolute bottom-0 left-0 right-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(6,8,14,0.82))]" />
                  </div>

                  <div className="relative flex h-full flex-col justify-between gap-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex flex-wrap gap-2">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full border px-3 py-1 text-[0.72rem] uppercase tracking-[0.24em] backdrop-blur-xl",
                            activeVisual?.chip,
                          )}
                        >
                          {activeBuild.game.name}
                        </span>
                        <span className="inline-flex items-center rounded-full border border-white/16 bg-white/12 px-3 py-1 text-[0.72rem] uppercase tracking-[0.24em] text-white/82 backdrop-blur-xl">
                          {activeVisual?.label}
                        </span>
                        <span className="inline-flex items-center rounded-full border border-white/16 bg-white/12 px-3 py-1 text-[0.72rem] uppercase tracking-[0.24em] text-white/82 backdrop-blur-xl">
                          {getDifficultyLabel(activeBuild.difficulty)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FavoriteToggle
                          buildSlug={activeBuild.slug}
                          themeSlug={activeBuild.game.slug}
                        />
                        <Link
                          href={`/compare?builds=${activeBuild.slug}`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/14 px-4 py-2 text-sm text-white backdrop-blur-xl transition hover:bg-white/22"
                        >
                          <GitCompareArrows className="h-4 w-4" />
                          Compare
                        </Link>
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeBuild.slug}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="max-w-[980px] space-y-5"
                      >
                        <div className="space-y-3">
                          <p
                            className={cn(
                              "text-[0.72rem] uppercase tracking-[0.34em]",
                              activeVisual?.accentText,
                            )}
                          >
                            Featured analysis route
                          </p>
                          <h1
                            className={cn(
                              "max-w-5xl text-4xl leading-[0.96] text-white sm:text-5xl xl:text-6xl",
                              activeTheme.displayFontClass,
                            )}
                          >
                            {activeBuild.name}
                          </h1>
                          <p className="max-w-3xl text-base leading-7 text-white/80">
                            {activeBuild.summary}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {activeBuild.tags.slice(0, 4).map((tag) => (
                            <span
                              key={`${activeBuild.slug}-${tag.slug}`}
                              className={cn(
                                "inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] backdrop-blur-md",
                                activeVisual?.outlineChip,
                              )}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>

                        <div className="grid gap-3 lg:grid-cols-[1.1fr_1.1fr_0.8fr]">
                          <div
                            className={cn(
                              "rounded-[24px] border px-4 py-4 backdrop-blur-2xl",
                              activeVisual?.panel,
                            )}
                          >
                            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/52">
                              Signature loadout
                            </p>
                            <p className="mt-2 text-lg text-white">{activeBuild.signature.loadout}</p>
                          </div>
                          <div
                            className={cn(
                              "rounded-[24px] border px-4 py-4 backdrop-blur-2xl",
                              activeVisual?.panel,
                            )}
                          >
                            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/52">
                              Core statline
                            </p>
                            <p className="mt-2 text-lg text-white">{activeBuild.signature.statline}</p>
                          </div>
                          <div
                            className={cn(
                              "rounded-[24px] border px-4 py-4 backdrop-blur-2xl",
                              activeVisual?.panel,
                            )}
                          >
                            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/52">
                              {activeMetric?.label}
                            </p>
                            <p className="mt-2 text-3xl font-semibold text-white">
                              {activeMetric?.value}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                      <div className="flex flex-wrap items-center gap-3">
                        {heroPool.map((build) => (
                          <button
                            key={build.slug}
                            type="button"
                            onClick={() => setActiveSlug(build.slug)}
                            className={cn(
                              "h-4 w-4 rounded-full border transition",
                              resolvedActiveSlug === build.slug
                                ? getVisualLanguage(build).activeDot
                                : "border-white/28 bg-white/42 hover:bg-white/64",
                            )}
                            aria-label={`Activate ${build.name}`}
                          />
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={`/games/${activeBuild.game.slug}/builds/${activeBuild.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
                        >
                          Open build
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href={`/advisor?game=${activeBuild.game.slug}`}
                          className={cn(
                            "inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm backdrop-blur-xl transition",
                            activeVisual?.secondaryAction,
                          )}
                        >
                          Find my build
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[0.76rem] uppercase tracking-[0.32em] text-white/42">
                      Recommended for your launcher
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-white">
                      Curated routes with real loadouts and progression
                    </h2>
                  </div>
                  <Link
                    href={activeWorld === "all" ? "/compare" : `/games/${activeWorld}/builds`}
                    className="inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-white"
                  >
                    <LayoutGrid className="h-4 w-4" />
                    {activeWorld === "all" ? "Open compare workspace" : "Open full catalog"}
                  </Link>
                </div>

                {recommendedBuilds.length ? (
                  <div className="grid gap-5 xl:grid-cols-2">
                    {recommendedBuilds.map((build, index) => (
                      <motion.div
                        key={build.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.32, delay: index * 0.06 }}
                      >
                        <HomeRecommendationTile build={build} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-[28px] border border-white/14 bg-white/10 px-6 py-8 text-center backdrop-blur-2xl">
                    <p className="text-xl text-white">No build routes match this search yet.</p>
                    <p className="mt-2 text-sm text-white/58">
                      Reset the query or switch back to another world to return to the featured analysis pool.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("")
                        setActiveWorld("all")
                      }}
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/14 px-5 py-3 text-sm text-white backdrop-blur-xl transition hover:bg-white/22"
                    >
                      Reset launcher
                    </button>
                  </div>
                )}
              </section>
            ) : null}
          </div>
        </main>
      </div>
    </div>
  )
}
