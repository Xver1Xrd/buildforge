import { Suspense } from "react"

import { PageShell } from "@/components/builds/page-shell"
import { CompareClient } from "@/components/builds/compare-client"
import { getAllBuildCards, getAllBuildDetails } from "@/lib/data/queries"

export default async function ComparePage() {
  const [allBuilds, allBuildDetails] = await Promise.all([
    getAllBuildCards(),
    getAllBuildDetails(),
  ])

  return (
    <PageShell
      eyebrow="Comparison"
      title="Compare builds side by side"
      subtitle="Select two or three builds, study their strengths, and quickly see where each one wins on burst, survivability, and practical tradeoffs."
    >
      <Suspense fallback={null}>
        <CompareClient
          allBuilds={allBuilds}
          allBuildDetails={allBuildDetails}
        />
      </Suspense>
    </PageShell>
  )
}
