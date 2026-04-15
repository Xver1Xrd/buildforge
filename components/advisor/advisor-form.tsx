"use client"

import { useActionState, useMemo, useState } from "react"

import { initialAdvisorState, submitAdvisorAction } from "@/app/advisor/actions"
import { ThemeFrame } from "@/components/builds/theme-frame"
import { buttonVariants } from "@/components/ui/button"
import { supportedGameProfiles } from "@/lib/config/games"
import { getGameTheme, type ThemeFamily } from "@/lib/data/themes"
import { advisorGameConfig, difficultyOptions } from "@/lib/recommendation/schema"
import { cn } from "@/lib/utils"
import type { AdvisorPreference } from "@/types/advisor"
import type { GameSlug } from "@/types/builds"

import { AdvisorResult } from "./advisor-result"

const gameOptions: ReadonlyArray<{ value: GameSlug; label: string }> = supportedGameProfiles.map((profile) => ({
  value: profile.slug,
  label: profile.navLabel,
}))

function getSelectionCardClass(family: ThemeFamily, active: boolean) {
  switch (family) {
    case "cyberpunk":
      return active
        ? "cyber-cut-sm rounded-none border-yellow-300/70 bg-yellow-300/12"
        : "cyber-cut-sm rounded-none border-cyan-300/18 bg-black hover:bg-cyan-300/10"
    case "elden":
      return active
        ? "rounded-[22px] border-amber-100/26 bg-[rgba(198,168,91,0.12)]"
        : "rounded-[22px] border-amber-200/14 bg-[rgba(14,10,8,0.78)] hover:bg-[rgba(198,168,91,0.07)]"
    case "witcher":
      return active
        ? "rounded-[24px] border-slate-100/24 bg-[rgba(161,189,183,0.12)]"
        : "rounded-[24px] border-slate-200/14 bg-[rgba(11,15,16,0.8)] hover:bg-[rgba(161,189,183,0.07)]"
    case "dark-souls-3":
      return active
        ? "rounded-[22px] border-orange-100/24 bg-[rgba(247,125,76,0.12)]"
        : "rounded-[22px] border-orange-200/14 bg-[rgba(17,10,8,0.82)] hover:bg-[rgba(247,125,76,0.07)]"
    case "dark-souls-2":
      return active
        ? "rounded-[22px] border-teal-50/22 bg-[rgba(116,153,145,0.12)]"
        : "rounded-[22px] border-teal-100/14 bg-[rgba(9,12,14,0.82)] hover:bg-[rgba(116,153,145,0.07)]"
    case "lies-of-p":
      return active
        ? "rounded-[24px] border-rose-100/24 bg-[rgba(198,129,108,0.12)]"
        : "rounded-[24px] border-rose-200/14 bg-[rgba(18,9,12,0.82)] hover:bg-[rgba(198,129,108,0.07)]"
    default:
      return active
        ? "rounded-2xl border-cyan-300/22 bg-cyan-300/10"
        : "rounded-2xl border-white/10 bg-black/20 hover:bg-white/8"
  }
}

function getPreferenceChipClass(family: ThemeFamily, active: boolean) {
  switch (family) {
    case "cyberpunk":
      return active
        ? "rounded-none border-yellow-300/70 bg-yellow-300/12 text-yellow-100"
        : "rounded-none border-cyan-300/18 bg-black text-slate-300 hover:bg-cyan-300/10"
    case "elden":
      return active
        ? "rounded-sm border-amber-100/26 bg-[rgba(198,168,91,0.12)] text-[#f4e2b5]"
        : "rounded-sm border-amber-200/14 bg-[rgba(14,10,8,0.78)] text-stone-300 hover:bg-[rgba(198,168,91,0.07)]"
    case "witcher":
      return active
        ? "rounded-[12px] border-slate-100/24 bg-[rgba(161,189,183,0.12)] text-slate-50"
        : "rounded-[12px] border-slate-200/14 bg-[rgba(11,15,16,0.8)] text-slate-300 hover:bg-[rgba(161,189,183,0.07)]"
    case "dark-souls-3":
      return active
        ? "rounded-[10px] border-orange-100/24 bg-[rgba(247,125,76,0.12)] text-[#f5d9c2]"
        : "rounded-[10px] border-orange-200/14 bg-[rgba(17,10,8,0.82)] text-orange-100/74 hover:bg-[rgba(247,125,76,0.07)]"
    case "dark-souls-2":
      return active
        ? "rounded-[10px] border-teal-50/22 bg-[rgba(116,153,145,0.12)] text-[#f1e9da]"
        : "rounded-[10px] border-teal-100/14 bg-[rgba(9,12,14,0.82)] text-teal-50/74 hover:bg-[rgba(116,153,145,0.07)]"
    case "lies-of-p":
      return active
        ? "rounded-[14px] border-rose-100/24 bg-[rgba(198,129,108,0.12)] text-[#f3d7c7]"
        : "rounded-[14px] border-rose-200/14 bg-[rgba(18,9,12,0.82)] text-rose-50/76 hover:bg-[rgba(198,129,108,0.07)]"
    default:
      return active
        ? "rounded-full border-cyan-300/22 bg-cyan-300/10 text-cyan-50"
        : "rounded-full border-white/10 bg-white/4 text-slate-300 hover:bg-white/8"
  }
}

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
  const theme = getGameTheme(gameSlug)
  const family = theme.family

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
        className={cn(family === "cyberpunk" ? "cyber-cut-lg rounded-none" : "rounded-[32px]")}
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
                      ? theme.primaryButtonClass
                      : theme.secondaryButtonClass,
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
                    getSelectionCardClass(family, style === option.value),
                  )}
                >
                  <p className={cn("text-sm font-semibold", theme.titleClass)}>{option.label}</p>
                  <p className={cn("mt-1 text-sm leading-6", theme.bodyClass)}>
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
                      getSelectionCardClass(family, difficulty === option.value),
                    )}
                  >
                    <p className={cn("text-sm font-semibold", theme.titleClass)}>{option.label}</p>
                    <p className={cn("mt-1 text-sm leading-6", theme.bodyClass)}>
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
                      getSelectionCardClass(family, focus === option.value),
                    )}
                  >
                    <p className={cn("text-sm font-semibold", theme.titleClass)}>{option.label}</p>
                    <p className={cn("mt-1 text-sm leading-6", theme.bodyClass)}>
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
                      getPreferenceChipClass(family, active),
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
              theme.primaryButtonClass,
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
