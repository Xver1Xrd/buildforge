import Link from "next/link"
import { notFound } from "next/navigation"

import { BuildCard } from "@/components/builds/build-card"
import { CyberpunkLanding } from "@/components/builds/cyberpunk-landing"
import { EldenRingLanding } from "@/components/builds/elden-ring-landing"
import { PageShell } from "@/components/builds/page-shell"
import { ThemeFrame } from "@/components/builds/theme-frame"
import { buttonVariants } from "@/components/ui/button"
import { isGameSlug } from "@/lib/data/themes"
import { getBuildCardsByGame, getGameBySlug } from "@/lib/data/queries"
import { isCyberpunkSlug } from "@/lib/presentation"
import { cn } from "@/lib/utils"

type GamePageProps = {
  params: Promise<{ slug: string }>
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

  const topBuilds = builds.slice(0, 4)
  const isCyberpunk = isCyberpunkSlug(slug)

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
              isCyberpunk
                ? "rounded-none border-cyan-300/30 bg-black text-cyan-100 hover:bg-cyan-300/10"
                : "rounded-[10px] elden-button-secondary text-amber-50/88 hover:text-[#fff3cf]",
            )}
          >
            All builds
          </Link>
          <Link
            href={`/advisor?game=${slug}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              isCyberpunk
                ? "rounded-none border-yellow-300 bg-yellow-300 text-black hover:bg-yellow-200"
                : "rounded-[10px] elden-button-primary hover:-translate-y-0.5",
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
