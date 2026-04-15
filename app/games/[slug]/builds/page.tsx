import { notFound } from "next/navigation"

import { CatalogClient } from "@/components/builds/catalog-client"
import { PageShell } from "@/components/builds/page-shell"
import { isGameSlug } from "@/lib/data/themes"
import { getBuildCardsByGame, getGameBySlug } from "@/lib/data/queries"

type BuildCatalogPageProps = {
  params: Promise<{ slug: string }>
}

export default async function BuildCatalogPage({
  params,
}: BuildCatalogPageProps) {
  const { slug } = await params

  if (!isGameSlug(slug)) {
    notFound()
  }

  const [game, builds] = await Promise.all([
    getGameBySlug(slug),
    getBuildCardsByGame(slug),
  ])

  if (!game) {
    notFound()
  }

  return (
    <PageShell
      themeSlug={slug}
      eyebrow="Build catalog"
      title={`${game.name} catalog`}
      subtitle="Search, filter, and sort the seeded builds. Pick promising paths for comparison and move straight into side-by-side analysis."
    >
      <CatalogClient builds={builds} gameSlug={slug} />
    </PageShell>
  )
}
