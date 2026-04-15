"use client"

import dynamic from "next/dynamic"

import type { DashboardView } from "@/types/builds"

const DashboardCharts = dynamic(
  () =>
    import("@/components/dashboard/dashboard-charts").then(
      (module) => module.DashboardCharts,
    ),
  { ssr: false },
)

export function DashboardChartsShell({ data }: { data: DashboardView }) {
  return <DashboardCharts data={data} />
}
