import Link from "next/link"

import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  Crosshair,
  Gauge,
  Shield,
  Zap,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { BuildCardView, GameView } from "@/types/builds"

function getTopBuildByRating(
  builds: BuildCardView[],
  ratingKey: keyof BuildCardView["ratings"],
) {
  return [...builds].sort(
    (left, right) => right.ratings[ratingKey] - left.ratings[ratingKey],
  )[0]
}

function CyberSignalCard({
  build,
  index,
}: {
  build: BuildCardView
  index: number
}) {
  return (
    <Link
      href={`/games/${build.game.slug}/builds/${build.slug}`}
      className="cyber-cut-sm group relative block overflow-hidden border border-cyan-300/28 bg-black/90 px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/60 hover:shadow-[0_0_0_1px_rgba(255,238,0,0.18),0_16px_44px_rgba(0,0,0,0.35)]"
    >
      <div className="absolute inset-0 cyber-dots opacity-[0.08]" />
      <div className="absolute inset-x-0 top-0 h-px bg-cyan-300/45" />
      <div className="relative space-y-3">
        <div className="flex items-center justify-between gap-3">
            <p className="font-cyber text-[0.68rem] uppercase tracking-[0.3em] text-slate-400">
            Signal_{String(index + 1).padStart(2, "0")}
          </p>
          <ArrowUpRight className="size-4 text-cyan-200 transition group-hover:text-yellow-200" />
        </div>
        <div className="space-y-2">
          <p className="font-cyber text-xl uppercase leading-none text-white">
            {build.name}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-yellow-300/90">
            {build.primaryArchetype}
          </p>
        </div>
        <p className="text-sm leading-6 text-slate-300/78">{build.summary}</p>
      </div>
    </Link>
  )
}

function CyberLaneCard({
  label,
  icon: Icon,
  build,
  accentClassName,
}: {
  label: string
  icon: React.ComponentType<{ className?: string }>
  build: BuildCardView
  accentClassName: string
}) {
  return (
    <div className="cyber-cut-sm border border-black/15 bg-black px-4 py-4 text-white shadow-[0_14px_40px_rgba(0,0,0,0.22)]">
      <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.28em] text-white/70">
        <Icon className={cn("size-4", accentClassName)} />
        <span>{label}</span>
      </div>
      <p className="mt-4 font-cyber text-2xl uppercase leading-none text-yellow-300">
        {build.name}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cyan-200">
        {build.primaryArchetype}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-300/82">
        {build.summary}
      </p>
    </div>
  )
}

function CyberBuildTile({ build }: { build: BuildCardView }) {
  return (
    <Link
      href={`/games/${build.game.slug}/builds/${build.slug}`}
      className="cyber-cut-md group relative block overflow-hidden border border-cyan-300/22 bg-black/92 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/55"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,128,0.14),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.5))]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-cyber text-[0.68rem] uppercase tracking-[0.3em] text-cyan-200/82">
              {build.primaryArchetype}
            </p>
            <h3 className="mt-3 font-cyber text-2xl uppercase leading-none text-white transition group-hover:text-yellow-200">
              {build.name}
            </h3>
          </div>
          <ArrowUpRight className="size-4 text-slate-500 transition group-hover:text-cyan-200" />
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Stealth", value: build.ratings.stealth },
            { label: "Hacking", value: build.ratings.hacking },
            { label: "Damage", value: build.ratings.burst },
          ].map((stat) => (
            <div
              key={`${build.slug}-${stat.label}`}
              className="border border-white/10 bg-white/[0.03] px-3 py-3"
            >
              <p className="text-[0.64rem] uppercase tracking-[0.25em] text-slate-500">
                {stat.label}
              </p>
              <p className="mt-2 font-cyber text-xl uppercase text-yellow-300">
                {stat.value}/10
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-300/80">{build.summary}</p>
      </div>
    </Link>
  )
}

export function CyberpunkLanding({
  game,
  builds,
}: {
  game: GameView
  builds: BuildCardView[]
}) {
  const [featuredBuild, ...remainingBuilds] = builds

  if (!featuredBuild) {
    return null
  }

  const signalBuilds = remainingBuilds.slice(0, 3)
  const tacticalGrid = builds.slice(0, 6)
  const featuredCount = builds.filter((build) => build.isFeatured).length

  const stealthLeader = getTopBuildByRating(builds, "stealth")
  const hackLeader = getTopBuildByRating(builds, "hacking")
  const burstLeader = getTopBuildByRating(builds, "burst")

  return (
    <div className="space-y-6">
      <section className="cyber-cut-lg relative overflow-hidden border border-cyan-300/35 bg-black">
        <div className="absolute inset-0 cyber-dots opacity-[0.16]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(0,240,255,0.12),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,0,135,0.18),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.58))]" />

        <div className="relative border-b border-cyan-300/20 px-4 py-3 sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.34em] text-slate-300/72">
              <span className="font-cyber text-cyan-200">Cyberpunk 2077</span>
              <span className="h-px w-10 bg-white/15" />
              <span>BuildForge signal grid</span>
              <span className="hidden text-yellow-300 sm:inline">
                Night City build intelligence
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href={`/games/${game.slug}/builds`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "rounded-none border-cyan-300/35 bg-black text-cyan-100 hover:bg-cyan-300/10",
                )}
              >
                Build catalog
              </Link>
              <Link
                href={`/advisor?game=${game.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "rounded-none border-yellow-300 bg-yellow-300 text-black hover:bg-yellow-200",
                )}
              >
                Launch advisor
              </Link>
            </div>
          </div>
        </div>

        <div className="relative grid gap-5 px-4 py-4 sm:px-6 sm:py-6 xl:grid-cols-[1.65fr_0.9fr]">
          <article className="cyber-cut-md cyber-panel-dark relative overflow-hidden border-2 border-cyan-300/55">
            <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(0,0,0,0)_0%,rgba(255,0,128,0.16)_48%,rgba(0,240,255,0.04)_100%)]" />
            <div className="relative flex h-full flex-col justify-between gap-8 px-5 py-6 sm:px-8 sm:py-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-cyber text-[0.68rem] uppercase tracking-[0.3em] text-cyan-100">
                    Featured build / 01
                  </span>
                  <span className="border border-yellow-300/30 bg-yellow-300/12 px-3 py-1 font-cyber text-[0.68rem] uppercase tracking-[0.3em] text-yellow-200">
                    {featuredBuild.primaryArchetype}
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="max-w-lg text-sm uppercase tracking-[0.3em] text-slate-400">
                    Recommended starting route through Night City
                  </p>
                  <h1 className="max-w-3xl font-cyber text-5xl uppercase leading-[0.84] text-yellow-300 sm:text-6xl xl:text-7xl">
                    {featuredBuild.name}
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-slate-200/80">
                    {featuredBuild.summary} {featuredBuild.playstyle}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid gap-3 sm:grid-cols-4">
                  {[
                    { label: "Stealth", value: featuredBuild.ratings.stealth },
                    { label: "Hacking", value: featuredBuild.ratings.hacking },
                    { label: "Mobility", value: featuredBuild.ratings.mobility },
                    { label: "Damage", value: featuredBuild.ratings.burst },
                  ].map((stat) => (
                    <div
                      key={`${featuredBuild.slug}-${stat.label}`}
                      className="border border-white/12 bg-white/[0.03] px-4 py-3 backdrop-blur"
                    >
                      <p className="text-[0.62rem] uppercase tracking-[0.28em] text-slate-500">
                        {stat.label}
                      </p>
                      <p className="mt-2 font-cyber text-2xl uppercase text-white">
                        {stat.value}/10
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/games/${game.slug}/builds/${featuredBuild.slug}`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "rounded-none border-yellow-300 bg-yellow-300 text-black hover:bg-yellow-200",
                    )}
                  >
                    Open featured build
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href={`/compare?builds=${featuredBuild.slug},${signalBuilds[0]?.slug ?? featuredBuild.slug}`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "rounded-none border-cyan-300/35 bg-black text-cyan-100 hover:bg-cyan-300/10",
                    )}
                  >
                    Compare routes
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {signalBuilds.map((build, index) => (
              <CyberSignalCard key={build.slug} build={build} index={index + 1} />
            ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-3 border-t border-cyan-300/20 px-4 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-cyber text-yellow-300">System.Module</span>
            <span>Builds in catalog: {builds.length}</span>
            <span>Featured routes: {featuredCount}</span>
          </div>
          <p className="text-slate-500">
            Build intelligence for stealth, hacking, loud, and hybrid combat styles.
          </p>
        </div>
      </section>

      <section className="cyber-cut-lg cyber-panel-yellow relative overflow-hidden text-black">
        <div className="absolute inset-x-0 top-0 h-3 bg-black" />
        <div className="absolute inset-x-0 top-3 h-px bg-black/20" />
        <div className="relative grid gap-8 px-5 py-8 sm:px-8 sm:py-10 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <p className="font-cyber text-[0.72rem] uppercase tracking-[0.34em] text-black/68">
              Night City entry layer
            </p>
            <h2 className="max-w-2xl font-cyber text-4xl uppercase leading-[0.9] sm:text-5xl">
              Build around pressure, precision, and controlled chaos
            </h2>
            <p className="max-w-2xl text-base leading-8 text-black/78">
              {game.description} This BuildForge section follows the official
              Cyberpunk visual language: bright yellow info blocks, black data
              surfaces, cyan telemetry, and hard geometry instead of soft, universal cards.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/games/${game.slug}/builds`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-none border-black bg-black text-yellow-300 hover:bg-black/90",
                )}
              >
                Open catalog
              </Link>
              <Link
                href={`/advisor?game=${game.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-none border-black/40 bg-transparent text-black hover:bg-black/8",
                )}
              >
                Find a route
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {stealthLeader ? (
              <CyberLaneCard
                label="Stealth route"
                icon={Crosshair}
                build={stealthLeader}
                accentClassName="text-cyan-300"
              />
            ) : null}
            {hackLeader ? (
              <CyberLaneCard
                label="Hacker route"
                icon={BrainCircuit}
                build={hackLeader}
                accentClassName="text-fuchsia-400"
              />
            ) : null}
            {burstLeader ? (
              <CyberLaneCard
                label="Assault route"
                icon={Zap}
                build={burstLeader}
                accentClassName="text-yellow-300"
              />
            ) : null}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.84fr_1.16fr]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <div className="cyber-cut-md border border-cyan-300/24 bg-black px-5 py-5">
            <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.3em] text-cyan-200/80">
              <Cpu className="size-4" />
              Signal telemetry
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {[
                { label: "Routes in catalog", value: String(builds.length) },
                { label: "Featured routes", value: String(featuredCount) },
                { label: "Stealth leader", value: stealthLeader?.name ?? "n/a" },
                { label: "Hacking leader", value: hackLeader?.name ?? "n/a" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.26em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 font-cyber text-xl uppercase text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="cyber-cut-md border border-yellow-300/30 bg-[linear-gradient(180deg,rgba(255,223,0,0.12),rgba(255,223,0,0.03))] px-5 py-5">
            <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.3em] text-yellow-200/85">
              <Gauge className="size-4" />
              Quick start
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-200/80">
              Start with the featured routes if you want the cleanest version of
              a combat style. Open the advisor if you already know your comfort
              level, or compare the top builds if you are choosing between stealth,
              hacking, and loud pressure.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`/advisor?game=${game.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "rounded-none border-yellow-300 bg-yellow-300 text-black hover:bg-yellow-200",
                )}
              >
                Advisor
              </Link>
              <Link
                href="/compare"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "rounded-none border-cyan-300/35 bg-black text-cyan-100 hover:bg-cyan-300/10",
                )}
              >
                Compare
              </Link>
            </div>
          </div>

          <div className="cyber-cut-md border border-white/12 bg-black px-5 py-5 sm:col-span-2 xl:col-span-1">
            <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.3em] text-slate-400">
              <Shield className="size-4 text-cyan-200" />
              Combat rhythm
            </div>
            <div className="mt-4 space-y-4">
              {[
                {
                  label: "Stealth readiness",
                  value: Math.max(...builds.map((build) => build.ratings.stealth)),
                  barClassName: "bg-cyan-300",
                },
                {
                  label: "Hacking ceiling",
                  value: Math.max(...builds.map((build) => build.ratings.hacking)),
                  barClassName: "bg-fuchsia-400",
                },
                {
                  label: "Burst pressure",
                  value: Math.max(...builds.map((build) => build.ratings.burst)),
                  barClassName: "bg-yellow-300",
                },
              ].map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400">
                    <span>{metric.label}</span>
                    <span className="font-cyber text-white">{metric.value}/10</span>
                  </div>
                  <div className="h-2 bg-white/8">
                    <div
                      className={cn("h-full", metric.barClassName)}
                      style={{ width: `${metric.value * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cyber-cut-lg relative overflow-hidden border border-cyan-300/24 bg-black px-5 py-5 sm:px-6">
          <div className="absolute inset-0 cyber-dots opacity-[0.07]" />
          <div className="relative">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-cyber text-[0.72rem] uppercase tracking-[0.34em] text-cyan-200/80">
                  Tactical routes
                </p>
                <h2 className="mt-3 font-cyber text-4xl uppercase leading-none text-white">
                  Discover the builds that define the catalog
                </h2>
              </div>
              <Link
                href={`/games/${game.slug}/builds`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "rounded-none border-white/14 bg-white/4 text-white hover:bg-white/10",
                )}
              >
                Full catalog
              </Link>
            </div>

            <div className="mt-6 grid gap-4 xl:grid-cols-2">
              {tacticalGrid.map((build) => (
                <CyberBuildTile key={build.slug} build={build} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
