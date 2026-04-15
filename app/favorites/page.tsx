import { FavoritesClient } from "@/components/builds/favorites-client"
import { PageShell } from "@/components/builds/page-shell"
import { getAllBuildCards } from "@/lib/data/queries"

export default async function FavoritesPage() {
  const builds = await getAllBuildCards()

  return (
    <PageShell
      eyebrow="Local favorites"
      title="Saved builds"
      subtitle="Favorites are stored locally, so you can build a shortlist, return later, and jump into comparison without searching again."
    >
      <FavoritesClient builds={builds} />
    </PageShell>
  )
}
