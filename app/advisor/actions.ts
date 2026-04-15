"use server"

import { ZodError } from "zod"

import { getAllBuildCards } from "@/lib/data/queries"
import { recommendBuilds } from "@/lib/recommendation/engine"
import { parseAdvisorFormData } from "@/lib/recommendation/schema"
import type { AdvisorResult } from "@/types/advisor"

export interface AdvisorActionState {
  result: AdvisorResult | null
  error: string | null
}

export const initialAdvisorState: AdvisorActionState = {
  result: null,
  error: null,
}

export async function submitAdvisorAction(
  _previousState: AdvisorActionState,
  formData: FormData,
): Promise<AdvisorActionState> {
  try {
    const input = parseAdvisorFormData(formData)
    const builds = await getAllBuildCards()
    const result = recommendBuilds(input, builds)

    return {
      result,
      error: null,
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        result: null,
        error: error.issues[0]?.message ?? "Please review the advisor answers.",
      }
    }

    return {
      result: null,
      error: "We couldn't generate a build recommendation.",
    }
  }
}
