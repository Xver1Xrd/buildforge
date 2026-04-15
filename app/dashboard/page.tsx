import { PageShell } from "@/components/builds/page-shell"
import { DashboardChartsShell } from "@/components/dashboard/dashboard-charts-shell"
import { StatsSummary } from "@/components/dashboard/stats-summary"
import { getDashboardData } from "@/lib/data/queries"

export default async function DashboardPage() {
  const data = await getDashboardData()

  return (
    <PageShell
      eyebrow="Dashboard"
      title="BuildForge analytics"
      subtitle="Use build distributions, tag weight, and average combat profiles to understand how the catalog is shaped across both supported games."
    >
      <StatsSummary data={data} />
      <DashboardChartsShell data={data} />
    </PageShell>
  )
}
