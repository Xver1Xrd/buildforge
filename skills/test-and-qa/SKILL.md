---
name: test-and-qa
description: Verify BuildForge features with deterministic checks, route coverage, and end-to-end acceptance criteria before release.
---

# Test And QA

## When To Use

- Before marking any major slice complete.
- When adding data logic, recommendation behavior, comparison logic, or local persistence features.
- During final release verification.

## Steps

1. Validate schema, seed execution, and critical utility functions.
2. Run lint, typecheck, and production build.
3. Exercise the mandatory product flows:
   - open site
   - choose game
   - browse builds
   - open build detail
   - compare builds
   - complete advisor
   - save favorite
   - inspect dashboard
4. Check responsive behavior and visual regressions manually where automation is expensive.
5. Record remaining risks explicitly if they cannot be resolved within the turn.

## Standards

- Prefer deterministic tests for recommendation and parsing logic.
- Do not ship broken scripts or failing checks.
- QA should focus on real user flows, not only isolated helpers.
- If a flow depends on local storage, verify first load and refresh behavior.
