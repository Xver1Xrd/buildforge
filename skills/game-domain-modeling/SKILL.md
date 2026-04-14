---
name: game-domain-modeling
description: Model multi-game build data, progression, equipment, attributes, taxonomy, and relational constraints for BuildForge-style applications.
---

# Game Domain Modeling

## When To Use

- Adding or changing Prisma models for supported games.
- Designing relational seed data for builds, items, tags, strengths, weaknesses, and progression.
- Expanding the product to a new game while preserving a common build browsing experience.

## Steps

1. Identify shared entities first: `Game`, `Build`, `BuildStat`, `Tag`, `Strength`, `Weakness`, `ProgressionStep`.
2. Separate cross-game entities from game-specific entities:
   - Elden Ring: `Weapon`, `Armor`, `Talisman`, `Spell`
   - Cyberpunk 2077: `Weapon`, `Perk`, `Cyberware`, `OperatingSystem`
3. Store searchable summaries and structured relations together.
4. Model alternatives and synergies with explicit join tables instead of free-form arrays.
5. Keep seed data split into reusable typed modules, not one monolithic file.
6. Verify the schema supports catalog filters, comparison, recommendation, and dashboard aggregation without custom hacks.

## Standards

- Prefer normalized tables with readable enums where the set is stable.
- Keep naming neutral enough for multi-game growth.
- Encode build identity with `slug`, `gameId`, and curated tags.
- Preserve both mechanical facts and interpretation fields such as playstyle, strengths, and weaknesses.
- Seed data must be believable, differentiated, and useful for recommendation scoring.
