import type {
  AdvisorBuildView,
  AdvisorFormValues,
  AdvisorRecommendation,
  RecommendationBreakdown,
} from "@/types/advisor";

import { advisorGameConfig, getPreferenceLabels } from "./schema";
import { getDifficultyLabel } from "@/lib/presentation";

export function buildRecommendationReasons(
  build: AdvisorBuildView,
  input: AdvisorFormValues,
  breakdown: RecommendationBreakdown,
) {
  const styleLabel =
    advisorGameConfig[input.gameSlug].styles.find((option) => option.value === input.style)?.label ??
    input.style;
  const focusLabel =
    advisorGameConfig[input.gameSlug].focuses.find((option) => option.value === input.focus)?.label ??
    input.focus;
  const preferenceLabels = getPreferenceLabels(input.preferences, input.gameSlug);
  const difficultyLabel = getDifficultyLabel(input.difficulty)
  const matchedTagLabels = breakdown.matchedTags
    .map((slug) => build.tags.find((tag) => tag.slug === slug)?.label ?? slug)
    .slice(0, 2)

  const reasons = [
    `${build.name} is the strongest match for the "${styleLabel}" style thanks to its ${build.primaryArchetype} archetype and clear combat path.`,
    `In terms of difficulty, this build sits closest to your "${difficultyLabel}" comfort level and asks for a more manageable execution load than most alternatives.`,
    `Your chosen focus, "${focusLabel}", comes through especially well here because of its strongest tags: ${matchedTagLabels.join(", ") || "the build's core identity"}.`,
  ];

  if (preferenceLabels.length) {
    reasons.push(`Preference matches: ${preferenceLabels.join(", ")}.`);
  }

  return reasons.slice(0, 4);
}

export function buildRecommendationExplanation(
  build: AdvisorBuildView,
  input: AdvisorFormValues,
  breakdown: RecommendationBreakdown,
) {
  const focusLabel =
    advisorGameConfig[input.gameSlug].focuses.find((option) => option.value === input.focus)?.label ??
    input.focus;
  const preferenceLabels = getPreferenceLabels(input.preferences, input.gameSlug);

  const summaryParts = [
    `${build.name} is the most accurate match for your play scenario.`,
    `It scores best overall for style, the selected focus "${focusLabel}", and preferences ${preferenceLabels.length ? preferenceLabels.join(", ") : "based on the build's overall profile"}.`,
  ];

  return `${summaryParts.join(" ")} Final score: ${breakdown.total}/100.`;
}

export function toRecommendation<TBuild extends AdvisorBuildView>(
  build: TBuild,
  input: AdvisorFormValues,
  breakdown: RecommendationBreakdown,
): AdvisorRecommendation<TBuild> {
  return {
    build,
    breakdown,
    reasons: buildRecommendationReasons(build, input, breakdown),
    explanation: buildRecommendationExplanation(build, input, breakdown),
  };
}
