"use client"

import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getGameTheme, type ThemeFamily } from "@/lib/data/themes"
import { getDifficultyLabel } from "@/lib/presentation"
import { cn } from "@/lib/utils"
import type { BuildCardView } from "@/types/builds"

import { FavoriteToggle } from "./favorite-toggle"

function getFamilyAccentLineClass(family: ThemeFamily) {
  switch (family) {
    case "elden":
      return "via-amber-200/42"
    case "witcher":
      return "via-slate-200/36"
    case "dark-souls-3":
      return "via-orange-200/38"
    case "dark-souls-2":
      return "via-teal-100/32"
    case "lies-of-p":
      return "via-rose-200/40"
    default:
      return "via-cyan-300/24"
  }
}

function getCardHoverClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "bg-black"
    case "elden":
      return "hover:-translate-y-0.5 hover:border-amber-100/28 hover:shadow-[0_22px_70px_rgba(0,0,0,0.52),0_0_36px_rgba(198,168,91,0.08)]"
    case "witcher":
      return "hover:-translate-y-0.5 hover:border-slate-100/26 hover:shadow-[0_22px_70px_rgba(0,0,0,0.48),0_0_32px_rgba(162,191,183,0.08)]"
    case "dark-souls-3":
      return "hover:-translate-y-0.5 hover:border-orange-100/24 hover:shadow-[0_22px_70px_rgba(0,0,0,0.52),0_0_34px_rgba(247,125,76,0.08)]"
    case "dark-souls-2":
      return "hover:-translate-y-0.5 hover:border-teal-50/22 hover:shadow-[0_22px_70px_rgba(0,0,0,0.5),0_0_30px_rgba(116,153,145,0.08)]"
    case "lies-of-p":
      return "hover:-translate-y-0.5 hover:border-rose-100/24 hover:shadow-[0_22px_70px_rgba(0,0,0,0.52),0_0_34px_rgba(198,129,108,0.08)]"
    default:
      return ""
  }
}

function getChipShapeClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "rounded-none"
    case "neutral":
      return "rounded-full"
    case "lies-of-p":
      return "rounded-[10px]"
    default:
      return "rounded-sm"
  }
}

function getStatPanelClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "rounded-none border-cyan-300/20 bg-black"
    case "elden":
      return "elden-stat rounded-[20px] border-amber-200/16"
    case "witcher":
      return "rounded-[22px] border-slate-200/16 bg-[linear-gradient(180deg,rgba(16,21,22,0.84),rgba(8,11,12,0.92))]"
    case "dark-souls-3":
      return "rounded-[20px] border-orange-200/16 bg-[linear-gradient(180deg,rgba(21,13,10,0.84),rgba(8,5,5,0.92))]"
    case "dark-souls-2":
      return "rounded-[20px] border-teal-100/14 bg-[linear-gradient(180deg,rgba(12,16,18,0.84),rgba(6,8,9,0.92))]"
    case "lies-of-p":
      return "rounded-[22px] border-rose-200/16 bg-[linear-gradient(180deg,rgba(22,11,15,0.84),rgba(9,5,7,0.92))]"
    default:
      return "rounded-2xl"
  }
}

function getSignaturePanelClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "cyber-cut-sm rounded-none border-cyan-300/16 bg-black text-cyan-100/72"
    case "elden":
      return "rounded-[18px] border-amber-200/12 bg-[rgba(18,12,9,0.78)] text-amber-100/62"
    case "witcher":
      return "rounded-[20px] border-slate-200/14 bg-[rgba(13,18,20,0.82)] text-slate-300/74"
    case "dark-souls-3":
      return "rounded-[18px] border-orange-200/14 bg-[rgba(18,11,9,0.82)] text-orange-100/62"
    case "dark-souls-2":
      return "rounded-[18px] border-teal-100/14 bg-[rgba(10,14,15,0.82)] text-teal-100/62"
    case "lies-of-p":
      return "rounded-[20px] border-rose-200/14 bg-[rgba(18,9,12,0.84)] text-amber-100/62"
    default:
      return "rounded-2xl border-white/10 bg-white/4 text-slate-300/70"
  }
}

function getFooterClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "border-t border-cyan-300/14 bg-black"
    case "elden":
      return "border-t border-amber-200/10 bg-[rgba(198,168,91,0.03)]"
    case "witcher":
      return "border-t border-slate-200/10 bg-[rgba(161,189,183,0.03)]"
    case "dark-souls-3":
      return "border-t border-orange-200/10 bg-[rgba(247,125,76,0.03)]"
    case "dark-souls-2":
      return "border-t border-teal-100/10 bg-[rgba(116,153,145,0.03)]"
    case "lies-of-p":
      return "border-t border-rose-200/10 bg-[rgba(198,129,108,0.03)]"
    default:
      return "border-t border-white/8"
  }
}

function getSelectedCompareClass(family: ThemeFamily) {
  switch (family) {
    case "elden":
      return "rounded-[10px] border-amber-100/28 bg-[rgba(198,168,91,0.14)] text-[#f4e2b5] shadow-[inset_0_1px_0_rgba(255,237,193,0.06)]"
    case "cyberpunk":
      return "border-cyan-300/35 bg-cyan-300/12 text-cyan-100"
    case "witcher":
      return "rounded-[12px] border-slate-100/24 bg-[rgba(161,189,183,0.14)] text-slate-50"
    case "dark-souls-3":
      return "rounded-[10px] border-orange-100/24 bg-[rgba(247,125,76,0.14)] text-[#f5d9c2]"
    case "dark-souls-2":
      return "rounded-[10px] border-teal-50/22 bg-[rgba(116,153,145,0.14)] text-[#f1e9da]"
    case "lies-of-p":
      return "rounded-[14px] border-rose-100/24 bg-[rgba(198,129,108,0.14)] text-[#f3d7c7]"
    default:
      return "border-cyan-300/35 bg-cyan-300/12 text-cyan-100"
  }
}

function getMetricSet(build: BuildCardView) {
  if (build.game.slug === "elden-ring") {
    return [
      { label: "PvE", value: build.ratings.pve },
      { label: "PvP", value: build.ratings.pvp },
      { label: "Burst", value: build.ratings.burst },
    ]
  }

  return [
    { label: "Stealth", value: build.ratings.stealth },
    { label: "Hacking", value: build.ratings.hacking },
    { label: "Burst", value: build.ratings.burst },
  ]
}

export function BuildCard({
  build,
  selectedForCompare = false,
  onToggleCompare,
}: {
  build: BuildCardView
  selectedForCompare?: boolean
  onToggleCompare?: (buildSlug: string) => void
}) {
  const theme = getGameTheme(build.game.slug)
  const family = theme.family
  const detailHref = `/games/${build.game.slug}/builds/${build.slug}`
  const headlineStats = getMetricSet(build)

  return (
    <Card
      className={cn(
        "group relative overflow-hidden p-0 transition duration-500",
        theme.cardClass,
        getCardHoverClass(family),
      )}
    >
      {family !== "neutral" ? (
        <div
          className={cn(
            "pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
            getFamilyAccentLineClass(family),
          )}
        />
      ) : null}
      <CardHeader
        className={cn(
          "space-y-4 px-5 pt-5",
          family === "cyberpunk" && "border-b border-cyan-300/14 pb-5",
          family !== "cyberpunk" && "pb-5",
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <Badge className={theme.badgeClass}>{build.game.name}</Badge>
            <Badge className={theme.badgeClass}>{build.primaryArchetype}</Badge>
          </div>
          <FavoriteToggle buildSlug={build.slug} themeSlug={build.game.slug} />
        </div>
        <div className="space-y-2">
          <p className={cn("text-xs uppercase tracking-[0.26em]", theme.mutedClass)}>
            Difficulty: {getDifficultyLabel(build.difficulty)}
          </p>
          <CardTitle
            className={cn(
              "text-3xl leading-none sm:text-[2rem]",
              theme.displayFontClass,
              theme.titleClass,
              family === "cyberpunk" && "text-[2.25rem] leading-[0.9]",
            )}
          >
            {build.name}
          </CardTitle>
          <p className={cn("text-sm leading-6", theme.bodyClass)}>{build.summary}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 px-5 pb-5">
        <div className="grid gap-3 sm:grid-cols-3">
          {headlineStats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "border px-3 py-3",
                getStatPanelClass(family),
                theme.statChipClass,
              )}
            >
              <p className={cn("text-[0.7rem] uppercase tracking-[0.24em]", theme.mutedClass)}>
                {stat.label}
              </p>
              <p className={cn("mt-2 text-2xl font-semibold", theme.titleClass, family === "elden" && "font-elden")}>
                {stat.value}/10
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {build.tags.slice(0, 4).map((tag) => (
            <span
              key={`${build.slug}-${tag.slug}`}
              className={cn(
                "border px-3 py-1 text-xs font-medium tracking-[0.14em] uppercase",
                getChipShapeClass(family),
                theme.badgeClass,
              )}
            >
              {tag.label}
            </span>
          ))}
        </div>
        <div
          className={cn(
            "grid gap-3 border px-4 py-3 text-xs uppercase tracking-[0.18em]",
            getSignaturePanelClass(family),
          )}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>Signature</span>
            <span className="text-right normal-case tracking-[0.06em] text-slate-200/82">
              {build.signature.loadout}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>Core stats</span>
            <span className="text-right normal-case tracking-[0.06em] text-slate-200/82">
              {build.signature.statline}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>Route</span>
            <span className="text-right normal-case tracking-[0.06em] text-slate-200/82">
              {build.signature.route}
            </span>
          </div>
        </div>
        <p className={cn("text-sm leading-6", family === "neutral" ? "text-slate-300/75" : "text-slate-300/76", family === "elden" && "text-stone-400/76", family === "lies-of-p" && "text-rose-50/70")}>
          {build.progressionCurve}
        </p>
      </CardContent>
      <CardFooter
        className={cn(
          "flex flex-wrap items-center justify-between gap-3 px-5 py-4",
          getFooterClass(family),
        )}
      >
        <Link
          href={detailHref}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            theme.primaryButtonClass,
          )}
        >
          Open build
        </Link>
        {onToggleCompare ? (
          <button
            type="button"
            onClick={() => onToggleCompare(build.slug)}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              selectedForCompare
                ? getSelectedCompareClass(family)
                : theme.secondaryButtonClass,
            )}
          >
            {selectedForCompare ? "Selected" : "Compare"}
          </button>
        ) : null}
      </CardFooter>
    </Card>
  )
}
