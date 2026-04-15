"use client"

import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { BuildCardView } from "@/types/builds"

import { useFavorites } from "./favorites-provider"
import { BuildCard } from "./build-card"

export function FavoritesClient({ builds }: { builds: BuildCardView[] }) {
  const { favorites, hydrated } = useFavorites()

  if (!hydrated) {
    return (
      <div className="glass-panel rounded-[28px] px-5 py-8 text-sm text-slate-300/80">
        Loading local favorites...
      </div>
    )
  }

  const favoriteBuilds = builds.filter((build) => favorites.includes(build.slug))

  if (!favoriteBuilds.length) {
    return (
      <div className="glass-panel rounded-[28px] px-5 py-8">
        <p className="text-sm uppercase tracking-[0.26em] text-slate-500">
          No saved builds yet
        </p>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-200/80">
          Save builds from the catalog or detail pages and they will live here in
          local storage, ready for a quick comparison or a later revisit.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/games/elden-ring/builds"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "border-white/12 bg-white/6 text-white hover:bg-white/10",
            )}
          >
            Open Elden Ring
          </Link>
          <Link
            href="/games/cyberpunk-2077/builds"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "border-white/12 bg-white/6 text-white hover:bg-white/10",
            )}
          >
            Open Cyberpunk 2077
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {favoriteBuilds.map((build) => (
        <BuildCard key={build.slug} build={build} />
      ))}
    </div>
  )
}
