"use client"

import { useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { ThemeFrame } from "@/components/builds/theme-frame"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { DashboardView } from "@/types/builds"

const chartTabs = [
  { value: "difficulty", label: "Difficulty" },
  { value: "tags", label: "Tag weight" },
  { value: "ratings", label: "Rating radar" },
] as const

export function DashboardCharts({ data }: { data: DashboardView }) {
  const [activeTab, setActiveTab] = useState<(typeof chartTabs)[number]["value"]>(
    "difficulty",
  )

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {chartTabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              activeTab === tab.value
                ? "border-cyan-300/18 bg-cyan-300/12 text-cyan-50"
                : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "difficulty" ? (
        <ThemeFrame className="rounded-[28px]">
          <div className="h-[380px] min-w-0 px-3 py-4 sm:px-6">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={320}>
              <BarChart data={data.difficultyBreakdown}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="label" stroke="#8e98b2" />
                <YAxis stroke="#8e98b2" />
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.04)" }}
                  contentStyle={{
                    background: "rgba(8, 12, 24, 0.94)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 16,
                  }}
                />
                <Bar dataKey="value" fill="#69f2ff" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ThemeFrame>
      ) : null}

      {activeTab === "tags" ? (
        <ThemeFrame className="rounded-[28px]">
          <div className="h-[420px] min-w-0 px-3 py-4 sm:px-6">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={360}>
              <BarChart data={data.topTags} layout="vertical">
                <CartesianGrid stroke="rgba(255,255,255,0.08)" horizontal={false} />
                <XAxis type="number" stroke="#8e98b2" />
                <YAxis dataKey="label" type="category" stroke="#8e98b2" width={120} />
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.04)" }}
                  contentStyle={{
                    background: "rgba(8, 12, 24, 0.94)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 16,
                  }}
                />
                <Bar dataKey="value" fill="#ff5ddc" radius={[0, 12, 12, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ThemeFrame>
      ) : null}

      {activeTab === "ratings" ? (
        <ThemeFrame className="rounded-[28px]">
          <div className="grid gap-5 px-5 py-5 md:grid-cols-2">
            {data.ratingHeatmap.map((entry) => (
              <div
                key={entry.gameSlug}
                className="h-[320px] min-w-0 rounded-2xl border border-white/10 bg-black/20 px-3 py-3"
              >
                <p className="px-3 text-xs uppercase tracking-[0.24em] text-slate-500">
                  {entry.label}
                </p>
                <ResponsiveContainer width="100%" height="90%" minWidth={0} minHeight={240}>
                  <RadarChart
                    data={[
                      { metric: "Burst", value: entry.burst },
                      { metric: "Survival", value: entry.survivability },
                      { metric: "Mobility", value: entry.mobility },
                      { metric: "Utility", value: entry.utility },
                      { metric: "Stealth", value: entry.stealth },
                      { metric: "Hacking", value: entry.hacking },
                    ]}
                  >
                    <PolarGrid stroke="rgba(255,255,255,0.12)" />
                    <PolarAngleAxis dataKey="metric" stroke="#a6b4d4" />
                    <Radar
                      dataKey="value"
                      stroke={entry.gameSlug === "elden-ring" ? "#e7c46c" : "#69f2ff"}
                      fill={entry.gameSlug === "elden-ring" ? "rgba(231,196,108,0.28)" : "rgba(105,242,255,0.24)"}
                      fillOpacity={1}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
        </ThemeFrame>
      ) : null}
    </div>
  )
}
