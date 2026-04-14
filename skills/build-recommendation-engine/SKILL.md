---
name: build-recommendation-engine
description: Design and implement explainable build recommendation logic that maps player preferences to ranked builds and alternatives.
---

# Build Recommendation Engine

## When To Use

- Building or modifying the advisor flow.
- Changing scoring, weighting, or tie-break rules.
- Adding explainability output for why a build matches a player's preferences.

## Steps

1. Define a strict Zod schema for the advisor input.
2. Score candidate builds across consistent dimensions:
   - playstyle fit
   - difficulty fit
   - mode fit
   - preference tag overlap
   - mechanical alignment
3. Penalize strong mismatches instead of only rewarding matches.
4. Rank all builds for the selected game and keep the top result plus two alternatives.
5. Produce an explanation object from the same scoring inputs used to rank the builds.
6. Keep recommendation logic deterministic and unit-testable.

## Standards

- No opaque "AI-picked" output without traceable reasons.
- Explanations must mention concrete build traits and user answers.
- Weights should be centralized and readable.
- Alternatives should be meaningfully different from the winner, not near duplicates.
- Recommendation code belongs in `lib/recommendation/`.
