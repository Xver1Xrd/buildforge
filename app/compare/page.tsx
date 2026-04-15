import { PageShell } from "@/components/builds/page-shell"
import { CompareClient } from "@/components/builds/compare-client"
import { getAllBuildCards, getBuildDetailsBySlugs } from "@/lib/data/queries"

type ComparePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

function normalizeBuildSelection(raw: string | string[] | undefined) {
  if (Array.isArray(raw)) {
    return raw
  }

  if (typeof raw === "string") {
    return raw
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
  }

  return []
}

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const params = await searchParams
  const buildSlugs = normalizeBuildSelection(params.builds)
  const [allBuilds, selectedBuilds] = await Promise.all([
    getAllBuildCards(),
    getBuildDetailsBySlugs(buildSlugs),
  ])
  const comparisonTheme =
    selectedBuilds.length > 0 &&
    selectedBuilds.every((build) => build.game.slug === selectedBuilds[0]?.game.slug)
      ? selectedBuilds[0]?.game.slug
      : undefined

  return (
    <PageShell
      themeSlug={comparisonTheme}
      eyebrow="Comparison"
      title="Compare builds side by side"
      subtitle="Select two or three builds, study their strengths, and quickly see where each one wins on burst, survivability, and practical tradeoffs."
    >
      <CompareClient
        allBuilds={allBuilds}
        selectedBuilds={selectedBuilds}
        initialBuilds={buildSlugs}
      />
    </PageShell>
  )
}
