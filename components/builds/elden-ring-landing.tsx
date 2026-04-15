import Link from "next/link"

import { ThemeFrame } from "@/components/builds/theme-frame"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { getGameTheme } from "@/lib/data/themes"
import { cn } from "@/lib/utils"
import type { BuildCardView, GameView } from "@/types/builds"

import { BuildCard } from "./build-card"

function getTopBuildByRating(builds: BuildCardView[], key: keyof BuildCardView["ratings"]) {
  return [...builds].sort((left, right) => right.ratings[key] - left.ratings[key])[0]
}

function EldenDoctrinePanel({
  title,
  description,
  build,
}: {
  title: string
  description: string
  build?: BuildCardView
}) {
  return (
    <div className="elden-scripture rounded-[26px] px-5 py-5">
      <p className="text-[0.68rem] uppercase tracking-[0.32em] text-amber-100/56">
        {title}
      </p>
      <p className="mt-3 text-base leading-7 text-stone-300/80">{description}</p>
      {build ? (
        <div className="mt-5 space-y-2">
          <p className="font-elden text-3xl text-[#f4e2b5]">{build.name}</p>
          <p className="text-sm uppercase tracking-[0.24em] text-amber-200/68">
            {build.primaryArchetype}
          </p>
          <p className="text-sm leading-6 text-stone-300/72">{build.summary}</p>
          <Link
            href={`/games/${build.game.slug}/builds/${build.slug}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "mt-2 rounded-[10px] elden-button-secondary text-amber-50/88 hover:text-[#fff3cf]",
            )}
          >
            Study this path
          </Link>
        </div>
      ) : null}
    </div>
  )
}

export function EldenRingLanding({
  game,
  builds,
}: {
  game: GameView
  builds: BuildCardView[]
}) {
  const theme = getGameTheme(game.slug)
  const [featuredBuild, ...remainingBuilds] = builds
  const curatedBuilds = builds.slice(0, 4)
  const pveLeader = getTopBuildByRating(builds, "pve")
  const pvpLeader = getTopBuildByRating(builds, "pvp")
  const burstLeader = getTopBuildByRating(builds, "burst")

  if (!featuredBuild) {
    return null
  }

  return (
    <div className="space-y-6">
      <ThemeFrame themeSlug={game.slug} className="rounded-[36px]">
        <div className="relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-0 golden-haze opacity-45" />
          <div className="relative z-10 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge className={theme.badgeClass}>Tarnished Archive</Badge>
                <Badge className={theme.badgeClass}>Dark Fantasy Build Atlas</Badge>
              </div>
              <div className="space-y-3">
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-amber-100/56">
                  The Lands Between, rendered as a codex interface
                </p>
                <h2 className="font-elden text-5xl leading-none text-[#f4e2b5] sm:text-6xl">
                  Choose a path worthy of the Erdtree.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-stone-300/78">
                  BuildForge for Elden Ring should feel less like a site and more
                  like a recovered war manual. Study curated paths, compare stat
                  sheets, and choose a build with the same patience the game asks
                  of you.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/games/${game.slug}/builds`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-[10px] elden-button-primary hover:-translate-y-0.5",
                  )}
                >
                  Enter the archive
                </Link>
                <Link
                  href={`/advisor?game=${game.slug}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-[10px] elden-button-secondary text-amber-50/88 hover:text-[#fff3cf]",
                  )}
                >
                  Consult the advisor
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { label: "Catalog paths", value: String(builds.length) },
                  { label: "Featured relics", value: String(builds.filter((build) => build.isFeatured).length) },
                  { label: "Dominant mode", value: pvpLeader && pvpLeader.ratings.pvp >= pveLeader.ratings.pve ? "PvP" : "PvE" },
                ].map((item) => (
                  <div key={item.label} className="elden-stat rounded-[22px] border border-amber-200/14 px-4 py-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-100/52">
                      {item.label}
                    </p>
                    <p className="mt-3 font-elden text-3xl text-[#f4e2b5]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="elden-scripture rounded-[30px] px-5 py-5 sm:px-6">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-100/56">
                Featured relic / 01
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-amber-200/62">
                {featuredBuild.primaryArchetype}
              </p>
              <h3 className="mt-4 font-elden text-4xl leading-none text-[#f4e2b5]">
                {featuredBuild.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-300/76">
                {featuredBuild.summary} {featuredBuild.playstyle}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "PvE", value: featuredBuild.ratings.pve },
                  { label: "PvP", value: featuredBuild.ratings.pvp },
                  { label: "Burst", value: featuredBuild.ratings.burst },
                  { label: "Survival", value: featuredBuild.ratings.survivability },
                ].map((stat) => (
                  <div key={stat.label} className="elden-seal rounded-[18px] px-3 py-3">
                    <p className="text-[0.62rem] uppercase tracking-[0.26em] text-amber-100/48">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-elden text-2xl text-[#f4e2b5]">
                      {stat.value}/10
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {featuredBuild.tags.slice(0, 4).map((tag) => (
                  <span
                    key={`${featuredBuild.slug}-${tag.slug}`}
                    className="rounded-sm border border-amber-200/14 bg-[rgba(198,168,91,0.05)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-amber-50/82"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <Link
                href={`/games/${game.slug}/builds/${featuredBuild.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "mt-6 rounded-[10px] elden-button-secondary text-amber-50/88 hover:text-[#fff3cf]",
                )}
              >
                Open the featured build
              </Link>
            </div>
          </div>
        </div>
      </ThemeFrame>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-amber-100/50">
              Battle doctrines
            </p>
            <h3 className="mt-2 font-elden text-4xl text-[#f4e2b5]">
              Three ways the archive speaks
            </h3>
          </div>
          <EldenDoctrinePanel
            title="Field supremacy"
            description="The most stable answer for long boss strings, route clarity, and dependable PvE control."
            build={pveLeader}
          />
          <EldenDoctrinePanel
            title="Duel pressure"
            description="The path best suited to invasions, reactions, and punishing human hesitation."
            build={pvpLeader}
          />
          <EldenDoctrinePanel
            title="Punish windows"
            description="When you want the heaviest possible answer during stagger openings and burst phases."
            build={burstLeader}
          />
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-amber-100/50">
              Curated relics
            </p>
            <h3 className="mt-2 font-elden text-4xl text-[#f4e2b5]">
              First paths worth studying
            </h3>
          </div>
          <div className="grid gap-5 xl:grid-cols-2">
            {curatedBuilds.map((build) => (
              <BuildCard key={build.slug} build={build} />
            ))}
          </div>
        </div>
      </div>

      <ThemeFrame themeSlug={game.slug} className="rounded-[34px]">
        <div className="grid gap-5 px-5 py-6 sm:px-6 lg:grid-cols-3">
          {[
            {
              title: "Read the stat sheet",
              body: "Start with a build's identity, pressure profile, and progression notes before you commit to gear.",
            },
            {
              title: "Compare without guesswork",
              body: "Use side-by-side comparison to see where one path trades burst for survivability, pace, or PvP leverage.",
            },
            {
              title: "Refine through intention",
              body: "Let the advisor narrow the field when you know your comfort level but not yet your final weapon fantasy.",
            },
          ].map((item) => (
            <div key={item.title} className="elden-scripture rounded-[24px] px-5 py-5">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-100/56">
                Path of grace
              </p>
              <h4 className="mt-3 font-elden text-3xl text-[#f4e2b5]">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-stone-300/76">{item.body}</p>
            </div>
          ))}
        </div>
      </ThemeFrame>

      {remainingBuilds.length > 4 ? (
        <div className="grid gap-5 xl:grid-cols-2">
          {remainingBuilds.slice(4, 6).map((build) => (
            <BuildCard key={build.slug} build={build} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
