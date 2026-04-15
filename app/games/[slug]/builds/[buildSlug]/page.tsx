import { notFound } from "next/navigation"

import { BuildDetailSections } from "@/components/builds/build-detail-sections"
import { PageShell } from "@/components/builds/page-shell"
import { isGameSlug } from "@/lib/data/themes"
import { getAllBuildCards, getBuildDetail } from "@/lib/data/queries"

type BuildDetailPageProps = {
  params: Promise<{ slug: string; buildSlug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  const builds = await getAllBuildCards()

  return builds.map((build) => ({
    slug: build.game.slug,
    buildSlug: build.slug,
  }))
}

export default async function BuildDetailPage({ params }: BuildDetailPageProps) {
  const { slug, buildSlug } = await params

  if (!isGameSlug(slug)) {
    notFound()
  }

  const build = await getBuildDetail(slug, buildSlug)

  if (!build) {
    notFound()
  }

  return (
    <PageShell
      themeSlug={slug}
      eyebrow="Build details"
      title={build.name}
      subtitle={build.summary}
    >
      <BuildDetailSections build={build} />
    </PageShell>
  )
}
