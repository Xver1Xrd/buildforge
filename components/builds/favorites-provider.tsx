"use client"

import {
  createContext,
  useContext,
  useEffect,
  useEffectEvent,
  useMemo,
  useState,
} from "react"

const FAVORITES_KEY = "buildforge:favorites"

interface FavoritesContextValue {
  favorites: string[]
  hydrated: boolean
  toggleFavorite: (buildSlug: string) => void
  isFavorite: (buildSlug: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null)

export function FavoritesProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [favorites, setFavorites] = useState<string[]>([])
  const [hydrated, setHydrated] = useState(false)

  const persistFavorites = useEffectEvent((nextFavorites: string[]) => {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(nextFavorites))
  })

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(FAVORITES_KEY)

      if (raw) {
        const parsed = JSON.parse(raw) as unknown
        if (Array.isArray(parsed)) {
          setFavorites(
            parsed.filter((value): value is string => typeof value === "string"),
          )
        }
      }
    } finally {
      setHydrated(true)
    }
  }, [])

  useEffect(() => {
    if (!hydrated) {
      return
    }

    persistFavorites(favorites)
  }, [favorites, hydrated])

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favorites,
      hydrated,
      toggleFavorite: (buildSlug) => {
        setFavorites((current) =>
          current.includes(buildSlug)
            ? current.filter((item) => item !== buildSlug)
            : [...current, buildSlug],
        )
      },
      isFavorite: (buildSlug) => favorites.includes(buildSlug),
    }),
    [favorites, hydrated],
  )

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider.")
  }

  return context
}
