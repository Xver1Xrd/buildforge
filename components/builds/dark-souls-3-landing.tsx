import Link from "next/link"

import { ThemeFrame } from "@/components/builds/theme-frame"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { getGameTheme } from "@/lib/data/themes"
import { cn } from "@/lib/utils"
import type { BuildCardView, GameView } from "@/types/builds"

import { BuildCard } from "./build-card"

function topBuild(builds: BuildCardView[], key: keyof BuildCardView["ratings"]) {
  return [...builds].sort((left, right) => right.ratings[key] - left.ratings[key])[0]
}

export function DarkSoulsThreeLanding({
  game,
  builds,
}: {
  game: GameView
  builds: BuildCardView[]
}) {
  const theme = getGameTheme("dark-souls-3")
  const [featuredBuild] = builds
  const pvpLeader = topBuild(builds, "pvp")
  const pveLeader = topBuild(builds, "pve")
  const burstLeader = topBuild(builds, "burst")

  if (!featuredBuild) {
    return null
  }

  return (
    <div className="space-y-6">
      <ThemeFrame themeSlug="dark-souls-3" className="rounded-[36px]">
        <div className="relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-0 ds3-embers opacity-50" />
          <div className="relative z-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge className={theme.badgeClass}>Ashen archive</Badge>
                <Badge className={theme.badgeClass}>Boss and invasion routes</Badge>
              </div>
              <div className="space-y-3">
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-orange-100/58">
                  Ember, steel, and lethal spacing
                </p>
                <h2 className="font-elden text-5xl leading-none text-[#f5d9c2] sm:text-6xl">
                  Shape a route that survives both bosses and duels.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-stone-300/78">
                  This Dark Souls 3 wing is built like an ember-lit war room:
                  compare boss-focused paths, evaluate invasion pressure, and
                  understand where each build crosses from safe progression into
                  true endgame lethality.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/games/${game.slug}/builds`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-[10px] ds3-button-primary text-[#fff1e5] hover:-translate-y-0.5",
                  )}
                >
                  Enter the archive
                </Link>
                <Link
                  href={`/advisor?game=${game.slug}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-[10px] ds3-button-secondary text-orange-50/90 hover:text-white",
                  )}
                >
                  Ask the advisor
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { label: "Builds indexed", value: String(builds.length) },
                  { label: "PvE leader", value: pveLeader.name },
                  { label: "PvP leader", value: pvpLeader.name },
                ].map((item) => (
                  <div key={item.label} className="ds3-plate rounded-[24px] px-4 py-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-orange-100/54">
                      {item.label}
                    </p>
                    <p className="mt-3 font-elden text-2xl leading-tight text-[#f5d9c2]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds3-plate rounded-[30px] px-5 py-5 sm:px-6">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-orange-100/58">
                Featured ember / 01
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-orange-100/64">
                {featuredBuild.primaryArchetype}
              </p>
              <h3 className="mt-4 font-elden text-4xl leading-none text-[#f5d9c2]">
                {featuredBuild.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-300/76">
                {featuredBuild.summary}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "PvE", value: featuredBuild.ratings.pve },
                  { label: "PvP", value: featuredBuild.ratings.pvp },
                  { label: "Burst", value: featuredBuild.ratings.burst },
                  { label: "Mobility", value: featuredBuild.ratings.mobility },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[20px] border border-orange-200/14 bg-[rgba(18,11,9,0.82)] px-3 py-3">
                    <p className="text-[0.62rem] uppercase tracking-[0.26em] text-orange-100/50">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-elden text-2xl text-[#f5d9c2]">{stat.value}/10</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/games/${game.slug}/builds/${featuredBuild.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "mt-6 rounded-[10px] ds3-button-secondary text-orange-50/90 hover:text-white",
                )}
              >
                Open featured route
              </Link>
            </div>
          </div>
        </div>
      </ThemeFrame>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <ThemeFrame themeSlug="dark-souls-3" className="rounded-[32px]">
          <div className="grid gap-5 px-5 py-6 sm:px-6">
            {[
              {
                title: "Boss kill pressure",
                body: "Track which route converts punish windows into the biggest phase skips.",
                build: burstLeader,
              },
              {
                title: "Ashen PvE comfort",
                body: "The cleanest path for long zones and endgame boss consistency.",
                build: pveLeader,
              },
              {
                title: "Duel relevance",
                body: "The route best equipped for invasions, duels, and tighter spacing checks.",
                build: pvpLeader,
              },
            ].map((item) => (
              <div key={item.title} className="ds3-plate rounded-[24px] px-5 py-5">
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-orange-100/54">
                  Tactical read
                </p>
                <h4 className="mt-3 font-elden text-3xl text-[#f5d9c2]">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-stone-300/76">{item.body}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-orange-100/64">
                  {item.build.name}
                </p>
              </div>
            ))}
          </div>
        </ThemeFrame>

        <div className="space-y-4">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-orange-100/50">
              Curated routes
            </p>
            <h3 className="mt-2 font-elden text-4xl text-[#f5d9c2]">
              Start with the strongest embers
            </h3>
          </div>
          <div className="grid gap-5 xl:grid-cols-2">
            {builds.slice(0, 4).map((build) => (
              <BuildCard key={build.slug} build={build} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
