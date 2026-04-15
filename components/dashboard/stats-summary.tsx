import { ThemeFrame } from "@/components/builds/theme-frame"
import type { DashboardView } from "@/types/builds"

export function StatsSummary({ data }: { data: DashboardView }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[0.6fr_1.4fr]">
      <ThemeFrame className="rounded-[28px]">
        <div className="space-y-4 px-5 py-5 sm:px-6">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
            Overview
          </p>
          <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Total builds
            </p>
            <p className="mt-2 text-4xl font-semibold text-white">{data.totalBuilds}</p>
          </div>
        </div>
      </ThemeFrame>

      <div className="grid gap-5 md:grid-cols-2">
        {data.gameCards.map((gameCard) => (
          <ThemeFrame
            key={gameCard.game.slug}
            themeSlug={gameCard.game.slug}
            className="rounded-[28px]"
          >
            <div className="space-y-3 px-5 py-5 sm:px-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                {gameCard.game.name}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    Builds
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    {gameCard.count}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    Featured
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    {gameCard.featuredCount}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-6 text-slate-300/78">
                Average burst: {gameCard.averageBurst}. Average survivability:{" "}
                {gameCard.averageSurvivability}.
              </p>
            </div>
          </ThemeFrame>
        ))}
      </div>
    </div>
  )
}
