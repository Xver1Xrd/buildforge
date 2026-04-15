import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as { prisma?: PrismaClient };
const fallbackSqliteUrl = "file:./dev.db";

// Vercel preview/production builds do not get the local `.env` file from the repo.
// When no DATABASE_URL is configured, fall back to the bundled SQLite dataset so
// the app can still prerender and serve the seeded MVP catalog.
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = fallbackSqliteUrl;
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
