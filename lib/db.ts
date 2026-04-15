import fs from "node:fs";
import path from "node:path";

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as { prisma?: PrismaClient };
const sqlitePathCandidates = [
  path.join(process.cwd(), "prisma", "dev.db"),
  path.join(process.cwd(), "dev.db"),
];

// Vercel preview/production runtime may not inject DATABASE_URL for this local MVP.
// Fall back to the bundled SQLite dataset using an absolute file path so both
// build-time prerendering and runtime server functions can resolve the same DB.
if (!process.env.DATABASE_URL) {
  const bundledSqlitePath =
    sqlitePathCandidates.find((candidate) => fs.existsSync(candidate)) ??
    sqlitePathCandidates[0];

  process.env.DATABASE_URL = `file:${bundledSqlitePath}`;
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
