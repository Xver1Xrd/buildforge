"use client"

import { BuildCard } from "@/components/builds/build-card"
import { isCyberpunkSlug } from "@/lib/presentation"
import type { AdvisorResult as AdvisorResultType } from "@/types/advisor"

export function AdvisorResult({
  result,
}: {
  result: AdvisorResultType
}) {
  const isCyberpunk = isCyberpunkSlug(result.winner.build.game.slug)
  const isElden = result.winner.build.game.slug === "elden-ring"

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
          Best match
        </p>
        <BuildCard build={result.winner.build} />
        <div
          className={
            isCyberpunk
              ? "cyber-cut-md border border-yellow-300/30 bg-[linear-gradient(180deg,rgba(255,223,0,0.12),rgba(255,223,0,0.03))] px-5 py-5"
              : isElden
                ? "elden-scripture rounded-[28px] px-5 py-5"
                : "rounded-[28px] border border-cyan-300/12 bg-cyan-300/8 px-5 py-5"
          }
        >
          <p
            className={
              isCyberpunk
                ? "text-base leading-7 text-yellow-50/92"
                : isElden
                  ? "text-base leading-7 text-stone-200/86"
                  : "text-base leading-7 text-cyan-50/88"
            }
          >
            {result.winner.explanation}
          </p>
          <ul
            className={
              isCyberpunk
                ? "mt-4 space-y-2 text-sm leading-6 text-slate-200/88"
                : isElden
                  ? "mt-4 space-y-2 text-sm leading-6 text-stone-300/82"
                  : "mt-4 space-y-2 text-sm leading-6 text-slate-100/84"
            }
          >
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
              <div
                className={
                  isCyberpunk
                    ? "cyber-cut-sm border border-cyan-300/18 bg-black px-4 py-3 text-sm leading-6 text-slate-300/82"
                    : isElden
                      ? "rounded-[22px] border border-amber-200/14 bg-[rgba(14,10,8,0.78)] px-4 py-3 text-sm leading-6 text-stone-300/82"
                      : "rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm leading-6 text-slate-300/82"
                }
              >
                <p>{alternative.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
