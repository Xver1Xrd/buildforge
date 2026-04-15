import { cn } from "@/lib/utils"
import { getGameTheme } from "@/lib/data/themes"

export function ThemeFrame({
  themeSlug,
  className,
  children,
}: {
  themeSlug?: string
  className?: string
  children: React.ReactNode
}) {
  const theme = getGameTheme(themeSlug)

  return (
    <section
      data-theme={theme.slug}
      className={cn(
        "relative isolate overflow-hidden border before:absolute before:inset-0 before:content-[''] after:absolute after:inset-0 after:content-['']",
        theme.shellClass,
        theme.backdropClass,
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
    </section>
  )
}
