import { HomeLauncher } from "@/components/home/home-launcher"
import { getAllBuildCards, getFeaturedBuilds, getGames } from "@/lib/data/queries"

export default async function HomePage() {
  const [games, builds, featuredBuilds] = await Promise.all([
    getGames(),
    getAllBuildCards(),
    getFeaturedBuilds(8),
  ])

  return (
    <HomeLauncher
      games={games}
      builds={builds}
      featuredBuilds={featuredBuilds}
    />
  )
}
