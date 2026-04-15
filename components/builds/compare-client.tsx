"use client"

import { startTransition, useMemo } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { ThemeFrame } from "@/components/builds/theme-frame"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { supportedGameProfiles } from "@/lib/config/games"
import { getGameTheme } from "@/lib/data/themes"
import { getDifficultyLabel } from "@/lib/presentation"
import { cn } from "@/lib/utils"
import type { BuildCardView, BuildDetailView } from "@/types/builds"

import { BuildCard } from "./build-card"

function formatScore(value: number) {
  return `${value}/10`
}

function buildKeyDifferences(builds: BuildDetailView[]) {
  if (builds.length < 2) {
    return []
  }

  const sortedByBurst = [...builds].sort(
    (left, right) => right.ratings.burst - left.ratings.burst,
  )
  const sortedBySurvival = [...builds].sort(
    (left, right) => right.ratings.survivability - left.ratings.survivability,
  )
  const sortedByMobility = [...builds].sort(
    (left, right) => right.ratings.mobility - left.ratings.mobility,
  )

  return [
    `${sortedByBurst[0]?.name} delivers the highest burst profile at ${formatScore(sortedByBurst[0]?.ratings.burst ?? 0)}.`,
    `${sortedBySurvival[0]?.name} is the safest durability pick at ${formatScore(sortedBySurvival[0]?.ratings.survivability ?? 0)}.`,
    `${sortedByMobility[0]?.name} offers the strongest mobility line at ${formatScore(sortedByMobility[0]?.ratings.mobility ?? 0)}.`,
  ]
}

function summarizeGear(build: BuildDetailView) {
  if (build.weapons.length >= 2) {
    return build.weapons.slice(0, 2).map((item) => item.name).join(" + ")
  }

  if (build.operatingSystems.length) {
    return [
      ...build.weapons.slice(0, 1).map((item) => item.name),
      ...build.operatingSystems.slice(0, 1).map((item) => item.name),
    ].join(" + ")
  }

  return [
    ...build.weapons.slice(0, 1).map((item) => item.name),
    build.signature.loadout,
  ]
    .filter(Boolean)
    .slice(0, 2)
    .join(" + ")
}

function normalizeBuildSelection(raw: string | null) {
  if (!raw) {
    return []
  }

  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

export function CompareClient({
  allBuilds,
  allBuildDetails,
}: {
  allBuilds: BuildCardView[]
  allBuildDetails: BuildDetailView[]
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedSlugs = useMemo(
    () => normalizeBuildSelection(searchParams.get("builds")),
    [searchParams],
  )
  const selectedBuilds = useMemo(
    () =>
      selectedSlugs
        .map((slug) => allBuildDetails.find((build) => build.slug === slug))
        .filter((build): build is BuildDetailView => Boolean(build)),
    [allBuildDetails, selectedSlugs],
  )
  const comparisonTheme =
    selectedBuilds.length > 0 &&
    selectedBuilds.every((build) => build.game.slug === selectedBuilds[0]?.game.slug)
      ? selectedBuilds[0]?.game.slug
      : undefined
  const theme = getGameTheme(comparisonTheme)
  const family = theme.family

  function syncSelection(nextSelection: string[]) {
    startTransition(() => {
      const query = nextSelection.length
        ? `?builds=${nextSelection.join(",")}`
        : ""

      router.replace(`/compare${query}`)
    })
  }

  function toggleBuild(buildSlug: string) {
    if (selectedSlugs.includes(buildSlug)) {
      syncSelection(selectedSlugs.filter((item) => item !== buildSlug))
      return
    }

    if (selectedSlugs.length >= 3) {
      syncSelection([...selectedSlugs.slice(1), buildSlug])
      return
    }

    syncSelection([...selectedSlugs, buildSlug])
  }

  const groupedBuilds = supportedGameProfiles
    .map((profile) => ({
      label: profile.name,
      items: allBuilds.filter((build) => build.game.slug === profile.slug),
    }))
    .filter((group) => group.items.length > 0)

  if (selectedBuilds.length < 2) {
    return (
      <div className="space-y-6">
        <ThemeFrame
          themeSlug={comparisonTheme}
          className={cn(family === "cyberpunk" ? "cyber-cut-md rounded-none" : "rounded-[30px]")}
        >
          <div className="px-5 py-6 sm:px-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Comparison setup
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200/80">
              Choose at least two builds to unlock the side-by-side view. You
              can compare within one game for a cleaner decision, or mix worlds
              if you want to study how their combat fantasies diverge.
            </p>
          </div>
        </ThemeFrame>

        {groupedBuilds.map((group) => (
          <div key={group.label} className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                {group.label}
              </p>
            </div>
            <div className="grid gap-5 xl:grid-cols-2">
              {group.items.map((build) => (
                <BuildCard
                  key={build.slug}
                  build={build}
                  selectedForCompare={selectedSlugs.includes(build.slug)}
                  onToggleCompare={toggleBuild}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const differenceBullets = buildKeyDifferences(selectedBuilds)

  return (
    <div className="space-y-6">
      <ThemeFrame
        themeSlug={comparisonTheme}
        className={cn(family === "cyberpunk" ? "cyber-cut-md rounded-none" : "rounded-[30px]")}
      >
        <div className="space-y-4 px-5 py-6 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {selectedBuilds.map((build) => (
              <button
                key={`selected-${build.slug}`}
                type="button"
                onClick={() => toggleBuild(build.slug)}
                className={cn(
                  "border px-3 py-1.5 text-xs uppercase tracking-[0.18em]",
                  family === "cyberpunk" ? "rounded-none" : family === "lies-of-p" ? "rounded-[10px]" : "rounded-sm",
                  theme.badgeClass,
                )}
              >
                {build.name}
              </button>
            ))}
          </div>
          <div className="grid gap-3 lg:grid-cols-3">
            {differenceBullets.map((bullet) => (
              <div
                key={bullet}
                className={cn(
                  "border px-4 py-3 text-sm leading-6 text-slate-200/82",
                  family === "cyberpunk"
                    ? "cyber-cut-sm rounded-none border-cyan-300/18 bg-black"
                    : family === "elden"
                      ? "rounded-[22px] border-amber-200/14 bg-[rgba(14,10,8,0.78)]"
                      : family === "witcher"
                        ? "rounded-[22px] border-slate-200/14 bg-[rgba(13,18,20,0.82)]"
                        : family === "dark-souls-3"
                          ? "rounded-[20px] border-orange-200/14 bg-[rgba(18,11,9,0.82)]"
                          : family === "dark-souls-2"
                            ? "rounded-[20px] border-teal-100/14 bg-[rgba(10,14,15,0.82)]"
                            : family === "lies-of-p"
                              ? "rounded-[22px] border-rose-200/14 bg-[rgba(18,9,12,0.84)]"
                      : "rounded-2xl border-white/10 bg-black/20",
                )}
              >
                {bullet}
              </div>
            ))}
          </div>
        </div>
      </ThemeFrame>

      <div className="grid gap-5 xl:grid-cols-3">
        {selectedBuilds.map((build) => (
          <BuildCard key={build.slug} build={build} />
        ))}
      </div>

      <ThemeFrame
        themeSlug={comparisonTheme}
        className={cn(family === "cyberpunk" ? "cyber-cut-md rounded-none" : "rounded-[30px]")}
      >
        <div className="px-5 py-5 sm:px-6">
          <Table className="min-w-[860px]">
            <TableHeader>
              <TableRow>
                <TableHead className="text-slate-400">Category</TableHead>
                {selectedBuilds.map((build) => (
                  <TableHead key={`head-${build.slug}`} className="text-white">
                    {build.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Archetype</TableCell>
                {selectedBuilds.map((build) => (
                  <TableCell key={`${build.slug}-archetype`}>
                    {build.primaryArchetype}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>Difficulty</TableCell>
                {selectedBuilds.map((build) => (
                  <TableCell key={`${build.slug}-difficulty`}>
                    {getDifficultyLabel(build.difficulty)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>Mobility</TableCell>
                {selectedBuilds.map((build) => (
                  <TableCell key={`${build.slug}-mobility`}>
                    {formatScore(build.ratings.mobility)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>Survivability</TableCell>
                {selectedBuilds.map((build) => (
                  <TableCell key={`${build.slug}-survivability`}>
                    {formatScore(build.ratings.survivability)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>Burst</TableCell>
                {selectedBuilds.map((build) => (
                  <TableCell key={`${build.slug}-burst`}>
                    {formatScore(build.ratings.burst)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>Utility</TableCell>
                {selectedBuilds.map((build) => (
                  <TableCell key={`${build.slug}-utility`}>
                    {formatScore(build.ratings.utility)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>Signature gear</TableCell>
                {selectedBuilds.map((build) => (
                  <TableCell key={`${build.slug}-gear`}>
                    {summarizeGear(build)}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>Weak point</TableCell>
                {selectedBuilds.map((build) => (
                  <TableCell key={`${build.slug}-weak-spot`}>
                    {build.weaknesses[0] ?? "No major weakness listed."}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </ThemeFrame>
    </div>
  )
}
