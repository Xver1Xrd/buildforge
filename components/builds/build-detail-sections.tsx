import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { ThemeFrame } from "@/components/builds/theme-frame"
import { getGameTheme, type ThemeFamily } from "@/lib/data/themes"
import {
  getDifficultyLabel,
  getOperatingSystemLabel,
  getProgressionStageLabel,
} from "@/lib/presentation"
import { cn } from "@/lib/utils"
import type { BuildDetailView } from "@/types/builds"

import { BuildCard } from "./build-card"
import { FavoriteToggle } from "./favorite-toggle"

function getFrameShapeClass(family: ThemeFamily) {
  return family === "cyberpunk" ? "cyber-cut-md rounded-none" : "rounded-[28px]"
}

function getPrimaryFrameShapeClass(family: ThemeFamily) {
  return family === "cyberpunk" ? "cyber-cut-lg rounded-none" : "rounded-[32px]"
}

function getInnerPanelClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "cyber-cut-sm rounded-none border-cyan-300/18 bg-black"
    case "elden":
      return "rounded-[22px] border-amber-200/14 bg-[rgba(14,10,8,0.78)]"
    case "witcher":
      return "rounded-[24px] border-slate-200/14 bg-[rgba(13,18,20,0.82)]"
    case "dark-souls-3":
      return "rounded-[20px] border-orange-200/14 bg-[rgba(18,11,9,0.82)]"
    case "dark-souls-2":
      return "rounded-[20px] border-teal-100/14 bg-[rgba(10,14,15,0.82)]"
    case "lies-of-p":
      return "rounded-[24px] border-rose-200/14 bg-[rgba(18,9,12,0.84)]"
    default:
      return "rounded-2xl"
  }
}

function getTagShapeClass(family: ThemeFamily) {
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

function getStrengthClass(family: ThemeFamily) {
  switch (family) {
    case "elden":
      return "border-amber-200/12 bg-[rgba(198,168,91,0.07)] text-amber-50/88"
    case "witcher":
      return "border-emerald-200/12 bg-[rgba(114,153,141,0.10)] text-slate-50/88"
    case "dark-souls-3":
      return "border-orange-200/12 bg-[rgba(247,125,76,0.10)] text-orange-50/88"
    case "dark-souls-2":
      return "border-teal-100/12 bg-[rgba(116,153,145,0.10)] text-teal-50/88"
    case "lies-of-p":
      return "border-amber-100/12 bg-[rgba(198,129,108,0.10)] text-rose-50/88"
    default:
      return "border-emerald-400/12 bg-emerald-400/7 text-emerald-50/88"
  }
}

function getWeaknessClass(family: ThemeFamily) {
  switch (family) {
    case "elden":
      return "border-red-900/32 bg-[rgba(70,18,18,0.28)] text-red-100/88"
    case "witcher":
      return "border-red-200/12 bg-[rgba(120,42,42,0.18)] text-rose-50/88"
    case "dark-souls-3":
      return "border-red-200/12 bg-[rgba(113,35,27,0.20)] text-orange-50/88"
    case "dark-souls-2":
      return "border-stone-200/12 bg-[rgba(72,56,39,0.18)] text-stone-100/86"
    case "lies-of-p":
      return "border-rose-200/12 bg-[rgba(109,42,56,0.20)] text-rose-50/88"
    default:
      return "border-rose-400/12 bg-rose-400/7 text-rose-50/88"
  }
}

function getProgressBarClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "from-yellow-300 to-cyan-300"
    case "elden":
      return "rounded-full from-[#c6a85b] via-[#e0ca90] to-[#7c6230]"
    case "witcher":
      return "rounded-full from-[#d7d8d2] via-[#92aa9f] to-[#425851]"
    case "dark-souls-3":
      return "rounded-full from-[#ffbf8d] via-[#f77d4c] to-[#6c2d1d]"
    case "dark-souls-2":
      return "rounded-full from-[#d2c2a2] via-[#7b9a90] to-[#3e544d]"
    case "lies-of-p":
      return "rounded-full from-[#f3d7c7] via-[#c6816c] to-[#6f3139]"
    default:
      return "rounded-full from-cyan-300 to-fuchsia-400"
  }
}

function DetailList({
  title,
  items,
  family,
  theme,
}: {
  title: string
  items: Array<{
    name: string
    description: string
    slot?: string
    effect?: string
    school?: string
    tree?: string
    scalingOrProfile?: string
    weightClass?: string
    operatingSystemType?: string
  }>
  family: ThemeFamily
  theme: ReturnType<typeof getGameTheme>
}) {
  if (!items.length) {
    return null
  }

  return (
    <div className="space-y-3">
      <p className={cn("text-xs uppercase tracking-[0.28em]", theme.mutedClass)}>{title}</p>
      <div className="grid gap-3">
        {items.map((item) => (
          <div
            key={`${title}-${item.name}`}
            className={cn("border px-4 py-3", getInnerPanelClass(family))}
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className={cn("text-base font-semibold", theme.titleClass, family === "elden" && "font-elden text-2xl")}>
                {item.name}
              </p>
              {item.slot ? (
                <span
                  className={cn(
                    "border px-2 py-0.5 text-[0.7rem] uppercase tracking-[0.2em]",
                    getTagShapeClass(family),
                    theme.badgeClass,
                  )}
                >
                  {item.slot}
                </span>
              ) : null}
              {item.operatingSystemType ? (
                <span className="rounded-full border border-cyan-300/18 px-2 py-0.5 text-[0.7rem] uppercase tracking-[0.2em] text-cyan-200">
                  {getOperatingSystemLabel(
                    item.operatingSystemType as Parameters<typeof getOperatingSystemLabel>[0],
                  )}
                </span>
              ) : null}
            </div>
            <p className={cn("mt-2 text-sm leading-6", theme.bodyClass)}>{item.description}</p>
            <div className={cn("mt-2 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em]", theme.mutedClass)}>
              {item.effect ? <span>{item.effect}</span> : null}
              {item.school ? <span>{item.school}</span> : null}
              {item.tree ? <span>{item.tree}</span> : null}
              {item.scalingOrProfile ? <span>{item.scalingOrProfile}</span> : null}
              {item.weightClass ? <span>{item.weightClass}</span> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function BuildDetailSections({ build }: { build: BuildDetailView }) {
  const theme = getGameTheme(build.game.slug)
  const family = theme.family

  return (
    <div className="space-y-6">
      <ThemeFrame themeSlug={build.game.slug} className={getPrimaryFrameShapeClass(family)}>
        <div className="px-5 py-8 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge className={theme.badgeClass}>{build.game.name}</Badge>
                <Badge className={theme.badgeClass}>{build.primaryArchetype}</Badge>
                <Badge className={theme.badgeClass}>{getDifficultyLabel(build.difficulty)}</Badge>
              </div>
              <h2
                className={cn(
                  "text-4xl leading-none sm:text-5xl",
                  theme.displayFontClass,
                  theme.titleClass,
                )}
              >
                {build.name}
              </h2>
              <p className={cn("text-base leading-7", theme.bodyClass)}>{build.description}</p>
              <div
                className={cn(
                  "text-sm leading-7 text-slate-300/72",
                  family === "elden" && "elden-callout rounded-[24px] px-4 py-4 text-stone-300/78",
                  family === "witcher" && "witcher-note rounded-[24px] px-4 py-4 text-slate-200/76",
                  family === "dark-souls-3" && "ds3-callout rounded-[22px] px-4 py-4 text-stone-300/76",
                  family === "dark-souls-2" && "ds2-callout rounded-[22px] px-4 py-4 text-stone-300/76",
                  family === "lies-of-p" && "lies-callout rounded-[24px] px-4 py-4 text-rose-50/74",
                )}
              >
                {build.playstyle}
              </div>
              <div
                className={cn(
                  "grid gap-3 border px-4 py-4 text-xs uppercase tracking-[0.18em] sm:grid-cols-3",
                  theme.softPanelClass,
                )}
              >
                <div className="space-y-2">
                  <p>Signature loadout</p>
                  <p className="text-sm normal-case tracking-[0.04em] text-slate-100">
                    {build.signature.loadout}
                  </p>
                </div>
                <div className="space-y-2">
                  <p>Core statline</p>
                  <p className="text-sm normal-case tracking-[0.04em] text-slate-100">
                    {build.signature.statline}
                  </p>
                </div>
                <div className="space-y-2">
                  <p>Why it works</p>
                  <p className="text-sm normal-case tracking-[0.04em] text-slate-100">
                    {build.signature.route}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FavoriteToggle buildSlug={build.slug} themeSlug={build.game.slug} />
              <Link
                href={`/compare?builds=${build.slug}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  theme.secondaryButtonClass,
                )}
              >
                Compare
              </Link>
            </div>
          </div>
        </div>
      </ThemeFrame>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <ThemeFrame themeSlug={build.game.slug} className={getFrameShapeClass(family)}>
          <div className="space-y-6 px-5 py-5 sm:px-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {build.attributeStats.map((stat) => (
                <div
                  key={stat.key}
                  className={cn(
                    "border px-4 py-4",
                    getInnerPanelClass(family),
                    theme.statChipClass,
                  )}
                >
                  <p className={cn("text-[0.7rem] uppercase tracking-[0.22em]", theme.mutedClass)}>
                    {stat.label}
                  </p>
                  <p className={cn("mt-2 text-3xl font-semibold", theme.titleClass, family === "elden" && "font-elden")}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {build.supportStats.map((stat) => (
                <div
                  key={stat.key}
                  className={cn("border px-4 py-4", getInnerPanelClass(family))}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-slate-100">{stat.label}</p>
                    <span className={theme.mutedClass}>{stat.value}</span>
                  </div>
                  <div className={cn("mt-3 h-2 rounded-full bg-white/8", family === "elden" && "bg-amber-200/8")}>
                    <div
                      className={cn("h-full bg-gradient-to-r", getProgressBarClass(family))}
                      style={{ width: `${Math.min(100, stat.value)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ThemeFrame>

        <ThemeFrame themeSlug={build.game.slug} className={getFrameShapeClass(family)}>
          <div className="space-y-4 px-5 py-5 sm:px-6">
            <div>
              <p className={cn("text-xs uppercase tracking-[0.28em]", theme.mutedClass)}>
                Progression curve
              </p>
              <p className={cn("mt-2 text-sm leading-6", theme.bodyClass)}>{build.progressionCurve}</p>
              <p className={cn("mt-3 text-sm leading-6", family === "elden" ? "text-stone-400/78" : theme.mutedClass)}>
                {build.difficultyNotes}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {build.tags.map((tag) => (
                <span
                  key={`${build.slug}-${tag.slug}`}
                  className={cn(
                    "border px-3 py-1 text-xs uppercase tracking-[0.18em]",
                    getTagShapeClass(family),
                    theme.badgeClass,
                  )}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </ThemeFrame>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ThemeFrame themeSlug={build.game.slug} className={getFrameShapeClass(family)}>
          <div className="space-y-5 px-5 py-5 sm:px-6">
            <p className={cn("text-sm leading-6", family === "elden" ? "text-stone-400/76" : theme.bodyClass)}>
              Key equipment below is the shortest route to the real build identity; use it as the proof point for how the statline turns into actual combat loops.
            </p>
            <DetailList title="Weapons" items={build.weapons} family={family} theme={theme} />
            <DetailList title="Armor" items={build.armorPieces} family={family} theme={theme} />
            <DetailList title="Talismans" items={build.talismans} family={family} theme={theme} />
            <DetailList title="Spells" items={build.spells} family={family} theme={theme} />
            <DetailList title="Perks" items={build.perks} family={family} theme={theme} />
            <DetailList title="Cyberware" items={build.cyberware} family={family} theme={theme} />
            <DetailList title="Operating system" items={build.operatingSystems} family={family} theme={theme} />
          </div>
        </ThemeFrame>

        <div className="space-y-6">
          <ThemeFrame themeSlug={build.game.slug} className={getFrameShapeClass(family)}>
            <div className="grid gap-5 px-5 py-5 sm:px-6 lg:grid-cols-2">
              <div className="space-y-3">
                <p className={cn("text-xs uppercase tracking-[0.28em]", theme.mutedClass)}>
                  Strengths
                </p>
                {build.strengths.map((item) => (
                  <div
                    key={`${build.slug}-strength-${item}`}
                    className={cn("rounded-2xl border px-4 py-3 text-sm leading-6", getStrengthClass(family))}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <p className={cn("text-xs uppercase tracking-[0.28em]", theme.mutedClass)}>
                  Weaknesses
                </p>
                {build.weaknesses.map((item) => (
                  <div
                    key={`${build.slug}-weakness-${item}`}
                    className={cn("rounded-2xl border px-4 py-3 text-sm leading-6", getWeaknessClass(family))}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ThemeFrame>

          <ThemeFrame themeSlug={build.game.slug} className={getFrameShapeClass(family)}>
            <div className="space-y-4 px-5 py-5 sm:px-6">
              <p className={cn("text-sm leading-6", family === "elden" ? "text-stone-400/76" : theme.bodyClass)}>
                Progression is split into clean breakpoints so you can feel when the build changes from an idea into its full endgame loop.
              </p>
              <p className={cn("text-xs uppercase tracking-[0.28em]", theme.mutedClass)}>
                Progression
              </p>
              {build.progressionSteps.map((step) => (
                <div
                  key={`${build.slug}-${step.stage}-${step.stepOrder}`}
                  className={cn("border px-4 py-4", getInnerPanelClass(family))}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "border px-2 py-0.5 text-[0.7rem] uppercase tracking-[0.2em]",
                        getTagShapeClass(family),
                        theme.badgeClass,
                      )}
                    >
                      {getProgressionStageLabel(step.stage)}
                    </span>
                    <p className="text-base font-semibold text-white">{step.title}</p>
                  </div>
                  <p className={cn("mt-2 text-sm leading-6", theme.bodyClass)}>{step.description}</p>
                </div>
              ))}
            </div>
          </ThemeFrame>
        </div>
      </div>

      {build.alternatives.length ? (
        <div className="space-y-4">
          <div>
            <p className={cn("text-xs uppercase tracking-[0.28em]", theme.mutedClass)}>
              Alternatives
            </p>
            <h3 className={cn("mt-2 text-3xl", theme.displayFontClass, theme.titleClass)}>
              Adjacent paths if you want a different emphasis
            </h3>
          </div>
          <div className="grid gap-5 xl:grid-cols-2">
            {build.alternatives.map((alternative) => (
              <div key={`${build.slug}-${alternative.slug}`} className="space-y-3">
                <BuildCard build={alternative} />
                <div
                  className={cn(
                    "border px-4 py-3 text-sm leading-6",
                    family === "cyberpunk"
                      ? "cyber-cut-sm rounded-none border-cyan-300/18 bg-black text-slate-300/78"
                      : theme.softPanelClass,
                  )}
                >
                  {alternative.reason}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
