import { z } from "zod";

export const gameSlugSchema = z.enum(["elden-ring", "cyberpunk-2077"]);

export const compareSearchParamsSchema = z.object({
  game: gameSlugSchema.optional(),
  left: z.string().min(1).optional(),
  right: z.string().min(1).optional(),
});
