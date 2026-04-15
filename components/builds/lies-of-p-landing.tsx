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

export function LiesOfPLanding({
  game,
  builds,
}: {
  game: GameView
  builds: BuildCardView[]
}) {
  const theme = getGameTheme("lies-of-p")
  const [featuredBuild] = builds
  const burstLeader = topBuild(builds, "burst")
  const mobilityLeader = topBuild(builds, "mobility")
  const survivalLeader = topBuild(builds, "survivability")

  if (!featuredBuild) {
    return null
  }

  return (
    <div className="space-y-6">
      <ThemeFrame themeSlug="lies-of-p" className="rounded-[36px]">
        <div className="relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-0 lies-filagree opacity-45" />
          <div className="relative z-10 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge className={theme.badgeClass}>Krat atelier</Badge>
                <Badge className={theme.badgeClass}>P-Organ route index</Badge>
              </div>
              <div className="space-y-3">
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-amber-100/56">
                  Clockwork elegance, stagger, and exact timing
                </p>
                <h2 className="font-elden text-5xl leading-none text-[#f3d7c7] sm:text-6xl">
                  Build for bosses that punish hesitation.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-rose-50/74">
                  The Lies of P wing feels like a clockwork notebook: weapon
                  assemblies, Legion Arms, grinder choices, and the routes that
                  turn precise guard timing into reliable endgame boss control.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/games/${game.slug}/builds`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-[14px] lies-button-primary text-[#fff1e7] hover:-translate-y-0.5",
                  )}
                >
                  Open the atelier
                </Link>
                <Link
                  href={`/advisor?game=${game.slug}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-[14px] lies-button-secondary text-rose-50/88 hover:text-white",
                  )}
                >
                  Ask the advisor
                </Link>
              </div>
            </div>

            <div className="lies-plate rounded-[30px] px-5 py-5 sm:px-6">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-100/58">
                Featured puppet / 01
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-amber-100/62">
                {featuredBuild.primaryArchetype}
              </p>
              <h3 className="mt-4 font-elden text-4xl leading-none text-[#f3d7c7]">
                {featuredBuild.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-rose-50/74">{featuredBuild.summary}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Burst", value: featuredBuild.ratings.burst },
                  { label: "Survival", value: featuredBuild.ratings.survivability },
                  { label: "Mobility", value: featuredBuild.ratings.mobility },
                  { label: "Utility", value: featuredBuild.ratings.utility },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[20px] border border-rose-200/14 bg-[rgba(18,9,12,0.84)] px-3 py-3">
                    <p className="text-[0.62rem] uppercase tracking-[0.26em] text-amber-100/50">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-elden text-2xl text-[#f3d7c7]">{stat.value}/10</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/games/${game.slug}/builds/${featuredBuild.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "mt-6 rounded-[14px] lies-button-secondary text-rose-50/88 hover:text-white",
                )}
              >
                Open featured route
              </Link>
            </div>
          </div>
        </div>
      </ThemeFrame>

      <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <ThemeFrame themeSlug="lies-of-p" className="rounded-[32px]">
          <div className="grid gap-5 px-5 py-6 sm:px-6">
            {[
              {
                title: "Groggy burst leader",
                body: "The path that turns stagger windows into the largest boss phase deletions.",
                build: burstLeader,
              },
              {
                title: "Fastest route",
                body: "The build best suited to evasive tempo, counter timing, and reactive play.",
                build: mobilityLeader,
              },
              {
                title: "Learning route",
                body: "The safest setup when your priority is surviving and understanding the boss.",
                build: survivalLeader,
              },
            ].map((item) => (
              <div key={item.title} className="lies-plate rounded-[24px] px-5 py-5">
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-100/54">
                  Workshop note
                </p>
                <h4 className="mt-3 font-elden text-3xl text-[#f3d7c7]">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-rose-50/74">{item.body}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-amber-100/62">
                  {item.build.name}
                </p>
              </div>
            ))}
          </div>
        </ThemeFrame>

        <div className="space-y-4">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-amber-100/50">
              Curated routes
            </p>
            <h3 className="mt-2 font-elden text-4xl text-[#f3d7c7]">
              Start with the cleanest puppet paths
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
