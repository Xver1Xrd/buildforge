import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getGameTheme, type ThemeFamily } from "@/lib/data/themes"
import { cn } from "@/lib/utils"

import { ThemeFrame } from "./theme-frame"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/compare", label: "Compare" },
  { href: "/advisor", label: "Advisor" },
  { href: "/favorites", label: "Favorites" },
  { href: "/dashboard", label: "Dashboard" },
]

const gameLinks = [
  { href: "/games/elden-ring", label: "Elden Ring" },
  { href: "/games/cyberpunk-2077", label: "Cyberpunk 2077" },
]

function getShellBackdropClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "bg-[radial-gradient(circle_at_top,rgba(122,168,255,0.12),transparent_28%),linear-gradient(180deg,rgba(3,5,11,0.45),transparent_35%)]"
    case "elden":
      return "bg-[radial-gradient(circle_at_top,rgba(198,168,91,0.14),transparent_24%),linear-gradient(180deg,#080705_0%,#030201_100%)]"
    case "witcher":
      return "bg-[radial-gradient(circle_at_top,rgba(137,167,157,0.16),transparent_30%),linear-gradient(180deg,#0c1012_0%,#050708_100%)]"
    case "dark-souls-3":
      return "bg-[radial-gradient(circle_at_top,rgba(247,125,76,0.14),transparent_26%),linear-gradient(180deg,#0f0a09_0%,#040304_100%)]"
    case "dark-souls-2":
      return "bg-[radial-gradient(circle_at_top,rgba(116,153,145,0.14),transparent_28%),linear-gradient(180deg,#0d1011_0%,#050607_100%)]"
    case "lies-of-p":
      return "bg-[radial-gradient(circle_at_top,rgba(198,129,108,0.14),transparent_28%),linear-gradient(180deg,#12090b_0%,#050304_100%)]"
    default:
      return "bg-[radial-gradient(circle_at_top,rgba(122,168,255,0.12),transparent_28%),linear-gradient(180deg,rgba(3,5,11,0.45),transparent_35%)]"
  }
}

function getHeaderClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "cyber-cut-lg border border-cyan-300/28 bg-black shadow-[0_0_0_1px_rgba(0,255,245,0.08),0_24px_80px_rgba(0,0,0,0.4)]"
    case "elden":
      return "rounded-[30px] border border-amber-200/14 bg-[linear-gradient(180deg,rgba(15,11,8,0.92),rgba(7,5,4,0.98))] shadow-[0_22px_72px_rgba(0,0,0,0.46)]"
    case "witcher":
      return "rounded-[30px] border border-slate-200/14 bg-[linear-gradient(180deg,rgba(16,22,23,0.92),rgba(7,10,10,0.98))] shadow-[0_22px_72px_rgba(0,0,0,0.42)]"
    case "dark-souls-3":
      return "rounded-[28px] border border-orange-200/14 bg-[linear-gradient(180deg,rgba(22,14,11,0.92),rgba(8,5,5,0.98))] shadow-[0_22px_72px_rgba(0,0,0,0.46)]"
    case "dark-souls-2":
      return "rounded-[28px] border border-teal-100/14 bg-[linear-gradient(180deg,rgba(13,18,19,0.92),rgba(6,8,9,0.98))] shadow-[0_22px_72px_rgba(0,0,0,0.44)]"
    case "lies-of-p":
      return "rounded-[30px] border border-rose-200/14 bg-[linear-gradient(180deg,rgba(23,11,15,0.92),rgba(8,4,6,0.98))] shadow-[0_22px_72px_rgba(0,0,0,0.46)]"
    default:
      return "glass-panel rounded-[26px]"
  }
}

function getHeaderOverlay(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return <div className="pointer-events-none absolute inset-0 cyber-dots opacity-[0.08]" />
    case "elden":
      return (
        <>
          <div className="pointer-events-none absolute inset-0 elden-vignette opacity-60" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />
        </>
      )
    case "witcher":
      return (
        <>
          <div className="pointer-events-none absolute inset-0 witcher-fog opacity-45" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-slate-200/35 to-transparent" />
        </>
      )
    case "dark-souls-3":
      return (
        <>
          <div className="pointer-events-none absolute inset-0 ds3-embers opacity-45" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
        </>
      )
    case "dark-souls-2":
      return (
        <>
          <div className="pointer-events-none absolute inset-0 ds2-mist opacity-45" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-teal-100/34 to-transparent" />
        </>
      )
    case "lies-of-p":
      return (
        <>
          <div className="pointer-events-none absolute inset-0 lies-filagree opacity-40" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-rose-200/40 to-transparent" />
        </>
      )
    default:
      return null
  }
}

function getNavButtonClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "rounded-none border-cyan-300/30 bg-black text-cyan-100 hover:bg-cyan-300/10"
    case "elden":
      return "rounded-[10px] border-amber-200/18 bg-[rgba(198,168,91,0.06)] text-amber-50/82 hover:border-amber-100/28 hover:bg-[rgba(198,168,91,0.12)]"
    case "witcher":
      return "rounded-[12px] border-slate-200/18 bg-[rgba(161,189,183,0.06)] text-slate-100 hover:border-slate-100/26 hover:bg-[rgba(161,189,183,0.12)]"
    case "dark-souls-3":
      return "rounded-[10px] border-orange-200/18 bg-[rgba(247,125,76,0.06)] text-orange-50/86 hover:border-orange-100/26 hover:bg-[rgba(247,125,76,0.12)]"
    case "dark-souls-2":
      return "rounded-[10px] border-teal-100/18 bg-[rgba(116,153,145,0.06)] text-teal-50/86 hover:border-teal-50/26 hover:bg-[rgba(116,153,145,0.12)]"
    case "lies-of-p":
      return "rounded-[14px] border-rose-200/18 bg-[rgba(198,129,108,0.06)] text-rose-50/86 hover:border-rose-100/26 hover:bg-[rgba(198,129,108,0.12)]"
    default:
      return "border-white/12 bg-white/6 text-slate-100 hover:bg-white/10"
  }
}

function getGameButtonClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "rounded-none border border-cyan-300/24 bg-black text-slate-200 hover:bg-cyan-300/10"
    case "elden":
      return "rounded-[10px] border border-amber-200/14 bg-[rgba(198,168,91,0.04)] text-amber-50/72 hover:bg-[rgba(198,168,91,0.08)]"
    case "witcher":
      return "rounded-[12px] border border-slate-200/14 bg-[rgba(161,189,183,0.04)] text-slate-200/76 hover:bg-[rgba(161,189,183,0.08)]"
    case "dark-souls-3":
      return "rounded-[10px] border border-orange-200/14 bg-[rgba(247,125,76,0.04)] text-orange-50/78 hover:bg-[rgba(247,125,76,0.08)]"
    case "dark-souls-2":
      return "rounded-[10px] border border-teal-100/14 bg-[rgba(116,153,145,0.04)] text-teal-50/78 hover:bg-[rgba(116,153,145,0.08)]"
    case "lies-of-p":
      return "rounded-[14px] border border-rose-200/14 bg-[rgba(198,129,108,0.04)] text-rose-50/78 hover:bg-[rgba(198,129,108,0.08)]"
    default:
      return "border border-white/10 bg-white/4 text-slate-200 hover:bg-white/10"
  }
}

function getMetaCopyClass(family: ThemeFamily) {
  switch (family) {
    case "elden":
      return "text-stone-300/78"
    case "witcher":
      return "text-slate-200/76"
    case "dark-souls-3":
    case "dark-souls-2":
      return "text-stone-300/76"
    case "lies-of-p":
      return "text-rose-50/74"
    default:
      return "text-slate-300/80"
  }
}

function getSeparatorClass(family: ThemeFamily) {
  switch (family) {
    case "cyberpunk":
      return "bg-cyan-300/18"
    case "elden":
      return "elden-rule bg-transparent"
    case "witcher":
      return "bg-gradient-to-r from-transparent via-slate-200/20 to-transparent"
    case "dark-souls-3":
      return "bg-gradient-to-r from-transparent via-orange-200/24 to-transparent"
    case "dark-souls-2":
      return "bg-gradient-to-r from-transparent via-teal-100/20 to-transparent"
    case "lies-of-p":
      return "bg-gradient-to-r from-transparent via-rose-200/22 to-transparent"
    default:
      return "bg-white/10"
  }
}

export function PageShell({
  themeSlug,
  title,
  subtitle,
  eyebrow,
  actions,
  children,
}: {
  themeSlug?: string
  title?: string
  subtitle?: string
  eyebrow?: string
  actions?: React.ReactNode
  children: React.ReactNode
}) {
  const theme = getGameTheme(themeSlug)
  const family = theme.family

  return (
    <div className="relative min-h-screen">
      <div className={cn("absolute inset-0", getShellBackdropClass(family))} />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header
          className={cn(
            "relative overflow-hidden px-4 py-4 sm:px-6",
            getHeaderClass(family),
          )}
        >
          {getHeaderOverlay(family)}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <Link
                href="/"
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium tracking-[0.28em] uppercase text-slate-200/90 transition-opacity hover:opacity-100",
                  theme.displayFontClass,
                )}
              >
                <span className={theme.accentTextClass}>BuildForge</span>
                <span className="h-px w-8 bg-white/20" />
                <span className={theme.mutedClass}>Interactive build intelligence</span>
              </Link>
              <p className={cn("max-w-2xl text-sm", getMetaCopyClass(family))}>
                A production-style local MVP for studying, comparing, and choosing
                builds across radically different combat worlds.
              </p>
            </div>
            <nav className="flex flex-wrap items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    getNavButtonClass(family),
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <Separator className={cn("my-4", getSeparatorClass(family))} />
          <div className="flex flex-wrap items-center gap-2">
            {gameLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  getGameButtonClass(family),
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </header>

        {title ? (
          <ThemeFrame
            themeSlug={themeSlug}
            className={cn(
              "mt-6",
              family === "cyberpunk" ? "cyber-cut-lg rounded-none" : "rounded-[34px]",
            )}
          >
            <div className="relative overflow-hidden px-5 py-8 sm:px-8 sm:py-12">
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-r opacity-100",
                  theme.heroClass,
                )}
              />
              {family !== "neutral" && family !== "cyberpunk" ? (
                <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
              ) : null}
              <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl space-y-3">
                  {eyebrow ? (
                    <p className={cn("text-xs font-medium tracking-[0.3em] uppercase", theme.mutedClass)}>
                      {eyebrow}
                    </p>
                  ) : null}
                  <h1
                    className={cn(
                      "text-4xl font-semibold leading-none sm:text-5xl",
                      theme.displayFontClass,
                      theme.titleClass,
                    )}
                  >
                    {title}
                  </h1>
                  {subtitle ? (
                    <p className={cn("max-w-2xl text-sm leading-7 sm:text-base", theme.bodyClass)}>
                      {subtitle}
                    </p>
                  ) : null}
                </div>
                {actions ? <div className="relative z-10">{actions}</div> : null}
              </div>
            </div>
          </ThemeFrame>
        ) : null}

        <main className="mt-6 flex-1 space-y-6">{children}</main>

        <footer
          className={cn(
            "mt-8 border-t py-6 text-sm",
            family === "neutral" ? "border-white/10 text-slate-400" : "border-white/8 text-slate-400/88",
            family === "elden" && "border-amber-200/12 text-stone-400",
            family === "witcher" && "border-slate-200/10 text-slate-400",
            family === "dark-souls-3" && "border-orange-200/10 text-stone-400",
            family === "dark-souls-2" && "border-teal-100/10 text-stone-400",
            family === "lies-of-p" && "border-rose-200/10 text-rose-100/56",
          )}
        >
          Local MVP with seeded data, build comparison, advisor recommendations,
          favorites, and catalog analytics.
        </footer>
      </div>
    </div>
  )
}
