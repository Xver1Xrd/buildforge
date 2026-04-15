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

function WitcherContract({
  title,
  description,
  build,
}: {
  title: string
  description: string
  build?: BuildCardView
}) {
  if (!build) {
    return null
  }

  return (
    <div className="witcher-note rounded-[26px] px-5 py-5">
      <p className="text-[0.68rem] uppercase tracking-[0.32em] text-emerald-100/58">
        {title}
      </p>
      <p className="mt-3 text-base leading-7 text-slate-300/80">{description}</p>
      <div className="mt-5 space-y-2">
        <p className="font-elden text-3xl text-slate-50">{build.name}</p>
        <p className="text-sm uppercase tracking-[0.22em] text-emerald-100/62">
          {build.primaryArchetype}
        </p>
        <p className="text-sm leading-6 text-slate-300/72">{build.summary}</p>
        <Link
          href={`/games/${build.game.slug}/builds/${build.slug}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "mt-2 rounded-[12px] witcher-button-secondary text-slate-100 hover:text-white",
          )}
        >
          Read the dossier
        </Link>
      </div>
    </div>
  )
}

export function WitcherThreeLanding({
  game,
  builds,
}: {
  game: GameView
  builds: BuildCardView[]
}) {
  const theme = getGameTheme("witcher-3")
  const [featuredBuild] = builds
  const curatedBuilds = builds.slice(0, 4)
  const utilityLeader = getTopBuildByRating(builds, "utility")
  const survivabilityLeader = getTopBuildByRating(builds, "survivability")
  const pveLeader = getTopBuildByRating(builds, "pve")

  if (!featuredBuild) {
    return null
  }

  return (
    <div className="space-y-6">
      <ThemeFrame themeSlug="witcher-3" className="rounded-[38px]">
        <div className="relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-0 witcher-fog opacity-50" />
          <div className="relative z-10 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge className={theme.badgeClass}>Kaer Morhen archive</Badge>
                <Badge className={theme.badgeClass}>Monster contract atlas</Badge>
              </div>
              <div className="space-y-3">
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-emerald-100/58">
                  Steel, silver, signs, and long-form preparation
                </p>
                <h2 className="font-elden text-5xl leading-none text-slate-50 sm:text-6xl">
                  Hunt with preparation, not guesswork.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-300/78">
                  This BuildForge world is framed like a witcher dossier wall:
                  a place to compare contract-ready paths, understand alchemy
                  breakpoints, and pick a build that survives both monsters and
                  long campaigns.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/games/${game.slug}/builds`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-[12px] witcher-button-primary text-[#f7f5ef] hover:-translate-y-0.5",
                  )}
                >
                  Open contracts
                </Link>
                <Link
                  href={`/advisor?game=${game.slug}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-[12px] witcher-button-secondary text-slate-100 hover:text-white",
                  )}
                >
                  Ask the advisor
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { label: "Build dossiers", value: String(builds.length) },
                  { label: "Featured contracts", value: String(builds.filter((build) => build.isFeatured).length) },
                  { label: "Preferred route", value: pveLeader.ratings.pve >= utilityLeader.ratings.utility ? "Contracts" : "Alchemy" },
                ].map((item) => (
                  <div key={item.label} className="witcher-sigil rounded-[24px] border border-slate-200/14 px-4 py-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-emerald-100/54">
                      {item.label}
                    </p>
                    <p className="mt-3 font-elden text-3xl text-slate-50">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="witcher-note rounded-[30px] px-5 py-5 sm:px-6">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-emerald-100/58">
                Featured contract / 01
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-emerald-100/62">
                {featuredBuild.primaryArchetype}
              </p>
              <h3 className="mt-4 font-elden text-4xl leading-none text-slate-50">
                {featuredBuild.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300/76">
                {featuredBuild.summary} {featuredBuild.playstyle}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Utility", value: featuredBuild.ratings.utility },
                  { label: "PvE", value: featuredBuild.ratings.pve },
                  { label: "Survival", value: featuredBuild.ratings.survivability },
                  { label: "Burst", value: featuredBuild.ratings.burst },
                ].map((stat) => (
                  <div key={stat.label} className="witcher-sigil rounded-[20px] px-3 py-3">
                    <p className="text-[0.62rem] uppercase tracking-[0.26em] text-emerald-100/48">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-elden text-2xl text-slate-50">
                      {stat.value}/10
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href={`/games/${game.slug}/builds/${featuredBuild.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "mt-6 rounded-[12px] witcher-button-secondary text-slate-100 hover:text-white",
                )}
              >
                Open featured contract
              </Link>
            </div>
          </div>
        </div>
      </ThemeFrame>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-emerald-100/50">
              Contract logic
            </p>
            <h3 className="mt-2 font-elden text-4xl text-slate-50">
              Three schools of preparation
            </h3>
          </div>
          <WitcherContract
            title="Field survival"
            description="The most forgiving route for long hunts, sustain, and broad monster coverage."
            build={survivabilityLeader}
          />
          <WitcherContract
            title="Toolkit leverage"
            description="When oils, decoctions, signs, and fight planning matter more than raw burst."
            build={utilityLeader}
          />
          <WitcherContract
            title="Contract pressure"
            description="The path best suited to killing targets cleanly before attrition takes over."
            build={pveLeader}
          />
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-emerald-100/50">
              Curated dossiers
            </p>
            <h3 className="mt-2 font-elden text-4xl text-slate-50">
              Best starting hunts
            </h3>
          </div>
          <div className="grid gap-5 xl:grid-cols-2">
            {curatedBuilds.map((build) => (
              <BuildCard key={build.slug} build={build} />
            ))}
          </div>
        </div>
      </div>

      <ThemeFrame themeSlug="witcher-3" className="rounded-[34px]">
        <div className="grid gap-5 px-5 py-6 sm:px-6 lg:grid-cols-3">
          {[
            {
              title: "Track sign breakpoints",
              body: "The right build explains when signs are utility tools and when they become core pressure engines.",
            },
            {
              title: "Read alchemy routes",
              body: "Progression notes should clarify which decoctions and potion loops make the fantasy real in midgame.",
            },
            {
              title: "Compare contract answers",
              body: "Side-by-side analysis makes it easy to trade raw damage for safer hunts, stamina, or control.",
            },
          ].map((item) => (
            <div key={item.title} className="witcher-note rounded-[24px] px-5 py-5">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-emerald-100/56">
                Field note
              </p>
              <h4 className="mt-3 font-elden text-3xl text-slate-50">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-300/76">{item.body}</p>
            </div>
          ))}
        </div>
      </ThemeFrame>
    </div>
  )
}
