import Link from "next/link"
import { notFound } from "next/navigation"

import { BuildCard } from "@/components/builds/build-card"
import { CyberpunkLanding } from "@/components/builds/cyberpunk-landing"
import { DarkSoulsThreeLanding } from "@/components/builds/dark-souls-3-landing"
import { DarkSoulsTwoLanding } from "@/components/builds/dark-souls-2-landing"
import { EldenRingLanding } from "@/components/builds/elden-ring-landing"
import { LiesOfPLanding } from "@/components/builds/lies-of-p-landing"
import { PageShell } from "@/components/builds/page-shell"
import { ThemeFrame } from "@/components/builds/theme-frame"
import { WitcherThreeLanding } from "@/components/builds/witcher-3-landing"
import { buttonVariants } from "@/components/ui/button"
import { getGameTheme, isGameSlug } from "@/lib/data/themes"
import { getBuildCardsByGame, getGameBySlug } from "@/lib/data/queries"
import { cn } from "@/lib/utils"
import { gameSlugs } from "@/types/builds"

type GamePageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return gameSlugs.map((slug) => ({ slug }))
}

export default async function GameLandingPage({ params }: GamePageProps) {
  const { slug } = await params

  if (!isGameSlug(slug)) {
    notFound()
  }

  const [game, builds] = await Promise.all([
    getGameBySlug(slug),
    getBuildCardsByGame(slug),
  ])

  if (!game) {
    notFound()
  }

  if (slug === "cyberpunk-2077") {
    return (
      <PageShell themeSlug={slug}>
        <CyberpunkLanding game={game} builds={builds} />
      </PageShell>
    )
  }

  if (slug === "elden-ring") {
    return (
      <PageShell themeSlug={slug}>
        <EldenRingLanding game={game} builds={builds} />
      </PageShell>
    )
  }

  if (slug === "witcher-3") {
    return (
      <PageShell themeSlug={slug}>
        <WitcherThreeLanding game={game} builds={builds} />
      </PageShell>
    )
  }

  if (slug === "dark-souls-3") {
    return (
      <PageShell themeSlug={slug}>
        <DarkSoulsThreeLanding game={game} builds={builds} />
      </PageShell>
    )
  }

  if (slug === "dark-souls-2") {
    return (
      <PageShell themeSlug={slug}>
        <DarkSoulsTwoLanding game={game} builds={builds} />
      </PageShell>
    )
  }

  if (slug === "lies-of-p") {
    return (
      <PageShell themeSlug={slug}>
        <LiesOfPLanding game={game} builds={builds} />
      </PageShell>
    )
  }

  const topBuilds = builds.slice(0, 4)
  const theme = getGameTheme(slug)

  return (
    <PageShell
      themeSlug={slug}
      eyebrow="Game section"
      title={game.name}
      subtitle={game.description}
      actions={
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/games/${slug}/builds`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              theme.secondaryButtonClass,
            )}
          >
            All builds
          </Link>
          <Link
            href={`/advisor?game=${slug}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              theme.primaryButtonClass,
            )}
          >
            Open advisor
          </Link>
        </div>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <ThemeFrame themeSlug={slug} className="rounded-[28px]">
          <div className="space-y-4 px-5 py-5 sm:px-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Short summary
            </p>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Build count
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">{builds.length}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Featured paths
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">
                  {builds.filter((build) => build.isFeatured).length}
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-300/80">
              {game.tagline}
            </p>
          </div>
        </ThemeFrame>

        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Top builds
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              A curated selection to start with
            </h2>
          </div>
          <div className="grid gap-5 xl:grid-cols-2">
            {topBuilds.map((build) => (
              <BuildCard key={build.slug} build={build} />
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}
