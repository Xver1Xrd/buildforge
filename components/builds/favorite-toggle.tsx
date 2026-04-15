"use client"

import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getGameTheme } from "@/lib/data/themes"
import type { GameSlug } from "@/types/builds"

import { useFavorites } from "./favorites-provider"

export function FavoriteToggle({
  buildSlug,
  themeSlug,
}: {
  buildSlug: string
  themeSlug: GameSlug
}) {
  const { hydrated, isFavorite, toggleFavorite } = useFavorites()
  const theme = getGameTheme(themeSlug)
  const active = hydrated && isFavorite(buildSlug)

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      onClick={() => toggleFavorite(buildSlug)}
      className={`${
        theme.secondaryButtonClass
      } ${active ? "text-rose-200 ring-2 ring-rose-300/40" : ""}`}
      aria-label={active ? "Remove from favorites" : "Save to favorites"}
    >
      <Heart className={active ? "fill-current" : ""} />
    </Button>
  )
}
