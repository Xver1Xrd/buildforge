import type { Metadata } from "next"
import {
  Cormorant_Garamond,
  Manrope,
  Tektur,
} from "next/font/google"

import { FavoritesProvider } from "@/components/builds/favorites-provider"

import "./globals.css"

const bodyFont = Manrope({
  variable: "--font-display-sans",
  subsets: ["latin", "cyrillic"],
})

const eldenFont = Cormorant_Garamond({
  variable: "--font-display-elden",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
})

const cyberFont = Tektur({
  variable: "--font-display-cyber",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "BuildForge — build analysis for Elden Ring and Cyberpunk 2077",
  description:
    "Interactive build analysis for browsing, comparing, and choosing builds in Elden Ring and Cyberpunk 2077.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${eldenFont.variable} ${cyberFont.variable} h-full`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  )
}
