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

export function DarkSoulsTwoLanding({
  game,
  builds,
}: {
  game: GameView
  builds: BuildCardView[]
}) {
  const theme = getGameTheme("dark-souls-2")
  const [featuredBuild] = builds
  const utilityLeader = topBuild(builds, "utility")
  const pveLeader = topBuild(builds, "pve")
  const survivabilityLeader = topBuild(builds, "survivability")

  if (!featuredBuild) {
    return null
  }

  return (
    <div className="space-y-6">
      <ThemeFrame themeSlug="dark-souls-2" className="rounded-[34px]">
        <div className="relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-0 ds2-mist opacity-50" />
          <div className="relative z-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge className={theme.badgeClass}>Drangleic ledger</Badge>
                <Badge className={theme.badgeClass}>Scholar routing notes</Badge>
              </div>
              <div className="space-y-3">
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-teal-100/56">
                  Adaptability, attrition, and unusual power spikes
                </p>
                <h2 className="text-5xl leading-none text-[#f1e9da] sm:text-6xl">
                  Build around the long road, not just the first boss.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-stone-300/76">
                  The Drangleic section is framed like a ruin archive: slower,
                  stranger, and more systemic. It helps you compare routes that
                  shine in Scholar routing, NG+, attrition management, and the
                  odd ring synergies that make Dark Souls 2 special.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/games/${game.slug}/builds`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-[10px] ds2-button-primary text-[#f7f3eb] hover:-translate-y-0.5",
                  )}
                >
                  Open the ledger
                </Link>
                <Link
                  href={`/advisor?game=${game.slug}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-[10px] ds2-button-secondary text-teal-50/88 hover:text-white",
                  )}
                >
                  Ask the advisor
                </Link>
              </div>
            </div>

            <div className="ds2-plate rounded-[30px] px-5 py-5 sm:px-6">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-teal-100/58">
                Featured scholar / 01
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-teal-100/62">
                {featuredBuild.primaryArchetype}
              </p>
              <h3 className="mt-4 text-4xl leading-none text-[#f1e9da]">
                {featuredBuild.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-300/76">{featuredBuild.summary}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "PvE", value: featuredBuild.ratings.pve },
                  { label: "Utility", value: featuredBuild.ratings.utility },
                  { label: "Survival", value: featuredBuild.ratings.survivability },
                  { label: "Mobility", value: featuredBuild.ratings.mobility },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[18px] border border-teal-100/14 bg-[rgba(10,14,15,0.82)] px-3 py-3">
                    <p className="text-[0.62rem] uppercase tracking-[0.26em] text-teal-100/50">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl text-[#f1e9da]">{stat.value}/10</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/games/${game.slug}/builds/${featuredBuild.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "mt-6 rounded-[10px] ds2-button-secondary text-teal-50/88 hover:text-white",
                )}
              >
                Open featured route
              </Link>
            </div>
          </div>
        </div>
      </ThemeFrame>

      <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <ThemeFrame themeSlug="dark-souls-2" className="rounded-[30px]">
          <div className="grid gap-5 px-5 py-6 sm:px-6">
            {[
              {
                title: "Scholar utility",
                body: "The route with the best room control, flexibility, and system leverage.",
                build: utilityLeader,
              },
              {
                title: "Long-run survivability",
                body: "The build most capable of surviving long zones, DLC pulls, and learning fights.",
                build: survivabilityLeader,
              },
              {
                title: "PvE route leader",
                body: "The safest starting point if your priority is finishing the game cleanly.",
                build: pveLeader,
              },
            ].map((item) => (
              <div key={item.title} className="ds2-plate rounded-[22px] px-5 py-5">
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-teal-100/54">
                  Archive note
                </p>
                <h4 className="mt-3 text-3xl text-[#f1e9da]">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-stone-300/76">{item.body}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-teal-100/62">
                  {item.build.name}
                </p>
              </div>
            ))}
          </div>
        </ThemeFrame>

        <div className="space-y-4">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-teal-100/50">
              Curated routes
            </p>
            <h3 className="mt-2 text-4xl text-[#f1e9da]">
              Start with proven Scholar paths
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
