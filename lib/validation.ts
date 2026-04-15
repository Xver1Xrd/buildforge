import { z } from "zod";

import { gameSlugs } from "@/types/builds";

export const gameSlugSchema = z.enum(gameSlugs);

export const compareSearchParamsSchema = z.object({
  game: gameSlugSchema.optional(),
  left: z.string().min(1).optional(),
  right: z.string().min(1).optional(),
});
