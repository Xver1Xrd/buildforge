"use client"

import { startTransition, useDeferredValue, useState } from "react"
import { useRouter } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import { ThemeFrame } from "@/components/builds/theme-frame"
import { getGameTheme } from "@/lib/data/themes"
import { cn } from "@/lib/utils"
import type { BuildCardView, DifficultyLevel, GameSlug } from "@/types/builds"

import { BuildCard } from "./build-card"
import { CatalogFilters } from "./catalog-filters"

export function CatalogClient({
  builds,
  gameSlug,
}: {
  builds: BuildCardView[]
  gameSlug: GameSlug
}) {
  const [search, setSearch] = useState("")
  const [difficulty, setDifficulty] = useState<"ALL" | DifficultyLevel>("ALL")
  const [sortBy, setSortBy] = useState("featured")
  const [activeTag, setActiveTag] = useState("")
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([])
  const deferredSearch = useDeferredValue(search)
  const router = useRouter()
  const theme = getGameTheme(gameSlug)
  const family = theme.family

  const tagOptions = [...new Map(
    builds
      .flatMap((build) => build.tags)
      .map((tag) => [tag.slug, { slug: tag.slug, label: tag.label }]),
  ).values()]

  const filteredBuilds = builds
    .filter((build) => {
      if (difficulty !== "ALL" && build.difficulty !== difficulty) {
        return false
      }

      if (activeTag && !build.tags.some((tag) => tag.slug === activeTag)) {
        return false
      }

      if (deferredSearch && !build.searchIndex.includes(deferredSearch.toLowerCase())) {
        return false
      }

      return true
    })
    .sort((left, right) => {
      if (sortBy === "burst") {
        return right.ratings.burst - left.ratings.burst
      }

      if (sortBy === "survivability") {
        return right.ratings.survivability - left.ratings.survivability
      }

      if (sortBy === "mobility") {
        return right.ratings.mobility - left.ratings.mobility
      }

      if (sortBy === "name") {
        return left.name.localeCompare(right.name)
      }

      return Number(right.isFeatured) - Number(left.isFeatured) || left.sortOrder - right.sortOrder
    })

  function toggleCompare(buildSlug: string) {
    setSelectedForCompare((current) => {
      if (current.includes(buildSlug)) {
        return current.filter((item) => item !== buildSlug)
      }

      if (current.length >= 3) {
        return [...current.slice(1), buildSlug]
      }

      return [...current, buildSlug]
    })
  }

  function openComparison() {
    if (selectedForCompare.length < 2) {
      return
    }

    startTransition(() => {
      router.push(`/compare?builds=${selectedForCompare.join(",")}`)
    })
  }

  return (
    <div className="space-y-5">
      <CatalogFilters
        gameSlug={gameSlug}
        search={search}
        difficulty={difficulty}
        sortBy={sortBy}
        activeTag={activeTag}
        tagOptions={tagOptions}
        onSearchChange={setSearch}
        onDifficultyChange={setDifficulty}
        onSortChange={setSortBy}
        onTagChange={setActiveTag}
      />

      <ThemeFrame
        themeSlug={gameSlug}
        className={cn(family === "cyberpunk" ? "cyber-cut-md rounded-none" : "rounded-[30px]")}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Catalog ledger
            </p>
            <p className="mt-1 text-sm text-slate-300/80">
              {filteredBuilds.length} builds match the active filters.
            </p>
          </div>
          <button
            type="button"
            onClick={openComparison}
            disabled={selectedForCompare.length < 2}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              selectedForCompare.length < 2
                ? "cursor-not-allowed border-white/10 bg-white/4 text-slate-500"
                : theme.primaryButtonClass,
            )}
          >
            Compare builds: {selectedForCompare.length || 0}
          </button>
        </div>
      </ThemeFrame>

      <div className="grid gap-5 xl:grid-cols-2">
        {filteredBuilds.map((build) => (
          <BuildCard
            key={build.slug}
            build={build}
            selectedForCompare={selectedForCompare.includes(build.slug)}
            onToggleCompare={toggleCompare}
          />
        ))}
      </div>
    </div>
  )
}
