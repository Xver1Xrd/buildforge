import { PageShell } from "@/components/builds/page-shell"
import { AdvisorForm } from "@/components/advisor/advisor-form"
import { isGameSlug } from "@/lib/data/themes"

type AdvisorPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function AdvisorPage({ searchParams }: AdvisorPageProps) {
  const params = await searchParams
  const gameQuery = typeof params.game === "string" ? params.game : undefined
  const initialGameSlug = gameQuery && isGameSlug(gameQuery) ? gameQuery : "elden-ring"

  return (
    <PageShell
      themeSlug={initialGameSlug}
      eyebrow="Build advisor"
      title="Find a build that matches your playstyle"
      subtitle="Choose a game, define your combat intent, and get one best-fit build plus two alternatives with a clear explanation."
    >
      <AdvisorForm initialGameSlug={initialGameSlug} />
    </PageShell>
  )
}
