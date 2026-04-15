"use client"

import { Input } from "@/components/ui/input"
import { getGameTheme } from "@/lib/data/themes"
import { isCyberpunkSlug } from "@/lib/presentation"
import { cn } from "@/lib/utils"
import type { DifficultyLevel, GameSlug } from "@/types/builds"

const allDifficultyOptions: Array<{ value: "ALL" | DifficultyLevel; label: string }> = [
  { value: "ALL", label: "All levels" },
  { value: "BEGINNER", label: "Beginner" },
  { value: "INTERMEDIATE", label: "Intermediate" },
  { value: "ADVANCED", label: "Advanced" },
]

export function CatalogFilters({
  gameSlug,
  search,
  difficulty,
  sortBy,
  activeTag,
  tagOptions,
  onSearchChange,
  onDifficultyChange,
  onSortChange,
  onTagChange,
}: {
  gameSlug: GameSlug
  search: string
  difficulty: "ALL" | DifficultyLevel
  sortBy: string
  activeTag: string
  tagOptions: Array<{ slug: string; label: string }>
  onSearchChange: (value: string) => void
  onDifficultyChange: (value: "ALL" | DifficultyLevel) => void
  onSortChange: (value: string) => void
  onTagChange: (value: string) => void
}) {
  const theme = getGameTheme(gameSlug)
  const isCyberpunk = isCyberpunkSlug(gameSlug)
  const isElden = gameSlug === "elden-ring"

  return (
    <div
      className={cn(
        "border px-4 py-4 sm:px-5",
        theme.panelClass,
        isCyberpunk ? "cyber-cut-lg rounded-none" : "rounded-[30px]",
      )}
    >
      <div className="grid gap-3 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by build, tag, weapon, perk, or description"
          className={cn(
            "h-11 border-white/10 bg-black/20 px-4 text-white placeholder:text-slate-500",
            isCyberpunk
              ? "rounded-none border-cyan-300/20 bg-black focus-visible:border-cyan-300"
              : isElden
                ? "rounded-[22px] border-amber-200/14 bg-[rgba(10,8,6,0.75)] text-amber-50 placeholder:text-stone-500 focus-visible:border-amber-100/28 focus-visible:ring-amber-200/12"
                : "rounded-2xl",
          )}
        />
        <label className="space-y-2 text-sm text-slate-300">
          <span className="block text-xs uppercase tracking-[0.24em] text-slate-500">
            Difficulty
          </span>
          <select
            value={difficulty}
            onChange={(event) =>
              onDifficultyChange(event.target.value as "ALL" | DifficultyLevel)
            }
            className={cn(
              "h-11 w-full border border-white/10 bg-black/20 px-4 text-white outline-none transition focus:border-cyan-300/40",
              isCyberpunk
                ? "rounded-none border-cyan-300/20 bg-black"
                : isElden
                  ? "rounded-[22px] border-amber-200/14 bg-[rgba(10,8,6,0.75)] text-amber-50 focus:border-amber-100/28"
                  : "rounded-2xl",
            )}
          >
            {allDifficultyOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-slate-950">
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          <span className="block text-xs uppercase tracking-[0.24em] text-slate-500">
            Sorting
          </span>
          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className={cn(
              "h-11 w-full border border-white/10 bg-black/20 px-4 text-white outline-none transition focus:border-cyan-300/40",
              isCyberpunk
                ? "rounded-none border-cyan-300/20 bg-black"
                : isElden
                  ? "rounded-[22px] border-amber-200/14 bg-[rgba(10,8,6,0.75)] text-amber-50 focus:border-amber-100/28"
                  : "rounded-2xl",
            )}
          >
            <option value="featured" className="bg-slate-950">
              Featured first
            </option>
            <option value="burst" className="bg-slate-950">
              Highest burst
            </option>
            <option value="survivability" className="bg-slate-950">
              Highest survivability
            </option>
            <option value="mobility" className="bg-slate-950">
              Highest mobility
            </option>
            <option value="name" className="bg-slate-950">
              Alphabetical
            </option>
          </select>
        </label>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onTagChange("")}
          className={cn(
            "border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] transition",
            isCyberpunk ? "rounded-none" : isElden ? "rounded-sm" : "rounded-full",
            activeTag ? "border-white/10 bg-white/4 text-slate-300 hover:bg-white/8" : theme.badgeClass,
          )}
        >
          All tags
        </button>
        {tagOptions.map((tag) => (
          <button
            key={tag.slug}
            type="button"
            onClick={() => onTagChange(tag.slug)}
            className={cn(
              "border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] transition",
              isCyberpunk ? "rounded-none" : isElden ? "rounded-sm" : "rounded-full",
              activeTag === tag.slug
                ? theme.badgeClass
                : isElden
                  ? "border-amber-200/12 bg-[rgba(198,168,91,0.03)] text-stone-300 hover:bg-[rgba(198,168,91,0.08)]"
                  : "border-white/10 bg-white/4 text-slate-300 hover:bg-white/8",
            )}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  )
}
