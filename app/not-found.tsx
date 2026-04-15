import Link from "next/link"

import { PageShell } from "@/components/builds/page-shell"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <PageShell
      eyebrow="404"
      title="That build path does not exist"
      subtitle="The requested route was not found. Return to one of the supported games, or use the advisor to re-enter the product from a reliable starting point."
    >
      <div className="glass-panel rounded-[28px] px-5 py-8">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "border-white/12 bg-white/6 text-white hover:bg-white/10",
            )}
          >
            Back home
          </Link>
          <Link
            href="/advisor"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "border-cyan-300/18 bg-cyan-300/12 text-cyan-50 hover:bg-cyan-300/20",
            )}
          >
            Open advisor
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
