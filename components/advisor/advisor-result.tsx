"use client"

import { BuildCard } from "@/components/builds/build-card"
import { getGameTheme, type ThemeFamily } from "@/lib/data/themes"
import { cn } from "@/lib/utils"
import type { AdvisorResult as AdvisorResultType } from "@/types/advisor"

function getWinnerPanelClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "cyber-cut-md border border-yellow-300/30 bg-[linear-gradient(180deg,rgba(255,223,0,0.12),rgba(255,223,0,0.03))] px-5 py-5"
    case "elden":
      return "elden-scripture rounded-[28px] px-5 py-5"
    case "witcher":
      return "rounded-[30px] border border-slate-200/18 bg-[linear-gradient(180deg,rgba(163,189,182,0.12),rgba(10,13,14,0.94))] px-5 py-5"
    case "dark-souls-3":
      return "rounded-[28px] border border-orange-200/18 bg-[linear-gradient(180deg,rgba(247,125,76,0.12),rgba(13,7,6,0.94))] px-5 py-5"
    case "dark-souls-2":
      return "rounded-[28px] border border-teal-100/18 bg-[linear-gradient(180deg,rgba(116,153,145,0.12),rgba(8,10,11,0.94))] px-5 py-5"
    case "lies-of-p":
      return "rounded-[30px] border border-rose-200/18 bg-[linear-gradient(180deg,rgba(198,129,108,0.12),rgba(13,7,8,0.94))] px-5 py-5"
    default:
      return "rounded-[28px] border border-cyan-300/12 bg-cyan-300/8 px-5 py-5"
  }
}

function getWinnerBodyClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "text-base leading-7 text-yellow-50/92"
    case "elden":
      return "text-base leading-7 text-stone-200/86"
    case "witcher":
      return "text-base leading-7 text-slate-100/88"
    case "dark-souls-3":
      return "text-base leading-7 text-orange-50/88"
    case "dark-souls-2":
      return "text-base leading-7 text-teal-50/88"
    case "lies-of-p":
      return "text-base leading-7 text-rose-50/88"
    default:
      return "text-base leading-7 text-cyan-50/88"
  }
}

function getReasonListClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "mt-4 space-y-2 text-sm leading-6 text-slate-200/88"
    case "elden":
      return "mt-4 space-y-2 text-sm leading-6 text-stone-300/82"
    case "witcher":
      return "mt-4 space-y-2 text-sm leading-6 text-slate-200/80"
    case "dark-souls-3":
      return "mt-4 space-y-2 text-sm leading-6 text-orange-100/76"
    case "dark-souls-2":
      return "mt-4 space-y-2 text-sm leading-6 text-teal-100/76"
    case "lies-of-p":
      return "mt-4 space-y-2 text-sm leading-6 text-rose-100/78"
    default:
      return "mt-4 space-y-2 text-sm leading-6 text-slate-100/84"
  }
}

function getAlternativePanelClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "cyber-cut-sm border border-cyan-300/18 bg-black px-4 py-3 text-sm leading-6 text-slate-300/82"
    case "elden":
      return "rounded-[22px] border border-amber-200/14 bg-[rgba(14,10,8,0.78)] px-4 py-3 text-sm leading-6 text-stone-300/82"
    case "witcher":
      return "rounded-[24px] border border-slate-200/14 bg-[rgba(11,15,16,0.82)] px-4 py-3 text-sm leading-6 text-slate-300/82"
    case "dark-souls-3":
      return "rounded-[22px] border border-orange-200/14 bg-[rgba(17,10,8,0.82)] px-4 py-3 text-sm leading-6 text-orange-100/76"
    case "dark-souls-2":
      return "rounded-[22px] border border-teal-100/14 bg-[rgba(9,12,14,0.82)] px-4 py-3 text-sm leading-6 text-teal-100/76"
    case "lies-of-p":
      return "rounded-[24px] border border-rose-200/14 bg-[rgba(18,9,12,0.84)] px-4 py-3 text-sm leading-6 text-rose-100/78"
    default:
      return "rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm leading-6 text-slate-300/82"
  }
}

export function AdvisorResult({
  result,
}: {
  result: AdvisorResultType
}) {
  const theme = getGameTheme(result.winner.build.game.slug)
  const family = theme.family

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
          Best match
        </p>
        <BuildCard build={result.winner.build} />
        <div className={getWinnerPanelClass(family)}>
          <p className={cn(getWinnerBodyClass(family), theme.bodyClass)}>
            {result.winner.explanation}
          </p>
          <ul className={getReasonListClass(family)}>
            {result.winner.reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
          Alternatives
        </p>
        <div className="grid gap-5 xl:grid-cols-2">
          {result.alternatives.map((alternative) => (
            <div key={`alt-${alternative.build.slug}`} className="space-y-3">
              <BuildCard build={alternative.build} />
              <div className={getAlternativePanelClass(family)}>
                <p>{alternative.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
