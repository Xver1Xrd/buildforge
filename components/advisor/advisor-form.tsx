"use client"

import { useActionState, useMemo, useState } from "react"

import { initialAdvisorState, submitAdvisorAction } from "@/app/advisor/actions"
import { ThemeFrame } from "@/components/builds/theme-frame"
import { buttonVariants } from "@/components/ui/button"
import { isCyberpunkSlug } from "@/lib/presentation"
import { advisorGameConfig, difficultyOptions } from "@/lib/recommendation/schema"
import { cn } from "@/lib/utils"
import type { AdvisorPreference } from "@/types/advisor"
import type { GameSlug } from "@/types/builds"

import { AdvisorResult } from "./advisor-result"

const gameOptions: ReadonlyArray<{ value: GameSlug; label: string }> = [
  { value: "elden-ring", label: "Elden Ring" },
  { value: "cyberpunk-2077", label: "Cyberpunk 2077" },
]

function pickDefaultValues(gameSlug: GameSlug) {
  const config = advisorGameConfig[gameSlug]

  return {
    style: config.styles[0]?.value ?? "",
    focus: config.focuses[0]?.value ?? "",
    preferences: config.preferences.slice(0, 2).map((item) => item.value as AdvisorPreference),
  }
}

export function AdvisorForm({ initialGameSlug }: { initialGameSlug: GameSlug }) {
  const [state, formAction, pending] = useActionState(
    submitAdvisorAction,
    initialAdvisorState,
  )
  const [gameSlug, setGameSlug] = useState<GameSlug>(initialGameSlug)
  const [difficulty, setDifficulty] = useState<"BEGINNER" | "INTERMEDIATE" | "ADVANCED">("INTERMEDIATE")
  const defaults = useMemo(() => pickDefaultValues(gameSlug), [gameSlug])
  const [style, setStyle] = useState(defaults.style)
  const [focus, setFocus] = useState(defaults.focus)
  const [preferences, setPreferences] = useState<AdvisorPreference[]>(
    defaults.preferences,
  )

  const config = advisorGameConfig[gameSlug]
  const isCyberpunk = isCyberpunkSlug(gameSlug)
  const isElden = gameSlug === "elden-ring"

  function switchGame(nextGame: GameSlug) {
    const nextDefaults = pickDefaultValues(nextGame)
    setGameSlug(nextGame)
    setStyle(nextDefaults.style)
    setFocus(nextDefaults.focus)
    setPreferences(nextDefaults.preferences)
  }

  function togglePreference(nextPreference: AdvisorPreference) {
    setPreferences((current) => {
      if (current.includes(nextPreference)) {
        return current.filter((item) => item !== nextPreference)
      }

      if (current.length >= 3) {
        return [...current.slice(1), nextPreference]
      }

      return [...current, nextPreference]
    })
  }

  return (
    <div className="space-y-6">
      <ThemeFrame
        themeSlug={gameSlug}
        className={cn(isCyberpunk ? "cyber-cut-lg rounded-none" : "rounded-[32px]")}
      >
        <form action={formAction} className="space-y-6 px-5 py-6 sm:px-6">
          <input type="hidden" name="gameSlug" value={gameSlug} />
          <input type="hidden" name="style" value={style} />
          <input type="hidden" name="focus" value={focus} />
          <input type="hidden" name="difficulty" value={difficulty} />
          {preferences.map((preference) => (
            <input
              key={`pref-${preference}`}
              type="hidden"
              name="preferences"
              value={preference}
            />
          ))}

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Choose a game
            </p>
            <div className="flex flex-wrap gap-3">
              {gameOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => switchGame(option.value)}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    gameSlug === option.value
                      ? isCyberpunk
                        ? "rounded-none border-yellow-300 bg-yellow-300 text-black"
                        : isElden
                          ? "rounded-[10px] border-amber-100/28 bg-[rgba(198,168,91,0.14)] text-[#f4e2b5]"
                          : "border-cyan-300/18 bg-cyan-300/12 text-cyan-50"
                      : isCyberpunk
                        ? "rounded-none border-cyan-300/20 bg-black text-slate-200 hover:bg-cyan-300/10"
                        : isElden
                          ? "rounded-[10px] elden-button-secondary text-amber-50/82 hover:text-[#fff3cf]"
                          : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Combat style
            </p>
            <div className="grid gap-3 lg:grid-cols-2">
              {config.styles.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setStyle(option.value)}
                  className={cn(
                    "border px-4 py-4 text-left transition",
                    isCyberpunk ? "cyber-cut-sm rounded-none" : isElden ? "rounded-[22px]" : "rounded-2xl",
                    style === option.value
                      ? isCyberpunk
                        ? "border-yellow-300/70 bg-yellow-300/12"
                        : isElden
                          ? "border-amber-100/26 bg-[rgba(198,168,91,0.12)]"
                          : "border-cyan-300/22 bg-cyan-300/10"
                      : isCyberpunk
                        ? "border-cyan-300/18 bg-black hover:bg-cyan-300/10"
                        : isElden
                          ? "border-amber-200/14 bg-[rgba(14,10,8,0.78)] hover:bg-[rgba(198,168,91,0.07)]"
                          : "border-white/10 bg-black/20 hover:bg-white/8",
                  )}
                >
                  <p className="text-sm font-semibold text-white">{option.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300/78">
                    {option.hint}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Difficulty comfort
              </p>
              <div className="grid gap-3">
                {difficultyOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setDifficulty(option.value)}
                    className={cn(
                      "border px-4 py-4 text-left transition",
                      isCyberpunk ? "cyber-cut-sm rounded-none" : isElden ? "rounded-[22px]" : "rounded-2xl",
                      difficulty === option.value
                        ? isCyberpunk
                          ? "border-yellow-300/70 bg-yellow-300/12"
                          : isElden
                            ? "border-amber-100/26 bg-[rgba(198,168,91,0.12)]"
                            : "border-cyan-300/22 bg-cyan-300/10"
                        : isCyberpunk
                          ? "border-cyan-300/18 bg-black hover:bg-cyan-300/10"
                          : isElden
                            ? "border-amber-200/14 bg-[rgba(14,10,8,0.78)] hover:bg-[rgba(198,168,91,0.07)]"
                            : "border-white/10 bg-black/20 hover:bg-white/8",
                    )}
                  >
                    <p className="text-sm font-semibold text-white">{option.label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300/78">
                      {option.hint}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Focus
              </p>
              <div className="grid gap-3">
                {config.focuses.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFocus(option.value)}
                    className={cn(
                      "border px-4 py-4 text-left transition",
                      isCyberpunk ? "cyber-cut-sm rounded-none" : isElden ? "rounded-[22px]" : "rounded-2xl",
                      focus === option.value
                        ? isCyberpunk
                          ? "border-yellow-300/70 bg-yellow-300/12"
                          : isElden
                            ? "border-amber-100/26 bg-[rgba(198,168,91,0.12)]"
                            : "border-cyan-300/22 bg-cyan-300/10"
                        : isCyberpunk
                          ? "border-cyan-300/18 bg-black hover:bg-cyan-300/10"
                          : isElden
                            ? "border-amber-200/14 bg-[rgba(14,10,8,0.78)] hover:bg-[rgba(198,168,91,0.07)]"
                            : "border-white/10 bg-black/20 hover:bg-white/8",
                    )}
                  >
                    <p className="text-sm font-semibold text-white">{option.label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300/78">
                      {option.hint}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Preferences
            </p>
            <div className="flex flex-wrap gap-2">
              {config.preferences.map((option) => {
                const active = preferences.includes(option.value as AdvisorPreference)

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => togglePreference(option.value as AdvisorPreference)}
                    className={cn(
                      "border px-3 py-2 text-xs uppercase tracking-[0.18em] transition",
                      isCyberpunk ? "rounded-none" : isElden ? "rounded-sm" : "rounded-full",
                      active
                        ? isCyberpunk
                          ? "border-yellow-300/70 bg-yellow-300/12 text-yellow-100"
                          : isElden
                            ? "border-amber-100/26 bg-[rgba(198,168,91,0.12)] text-[#f4e2b5]"
                            : "border-cyan-300/22 bg-cyan-300/10 text-cyan-50"
                        : isCyberpunk
                          ? "border-cyan-300/18 bg-black text-slate-300 hover:bg-cyan-300/10"
                          : isElden
                            ? "border-amber-200/14 bg-[rgba(14,10,8,0.78)] text-stone-300 hover:bg-[rgba(198,168,91,0.07)]"
                            : "border-white/10 bg-white/4 text-slate-300 hover:bg-white/8",
                    )}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
          </div>

          {state.error ? (
            <div className="rounded-2xl border border-rose-400/15 bg-rose-400/8 px-4 py-3 text-sm text-rose-100/88">
              {state.error}
            </div>
          ) : null}

          <button
            type="submit"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              isCyberpunk
                ? "rounded-none border-yellow-300 bg-yellow-300 text-black hover:bg-yellow-200"
                : isElden
                  ? "rounded-[10px] elden-button-primary hover:-translate-y-0.5"
                  : "border-cyan-300/18 bg-cyan-300/12 text-cyan-50 hover:bg-cyan-300/22",
            )}
          >
            {pending ? "Analyzing builds..." : "Recommend build"}
          </button>
        </form>
      </ThemeFrame>

      {state.result ? <AdvisorResult result={state.result} /> : null}
    </div>
  )
}
