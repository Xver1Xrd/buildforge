---
name: frontend-ui-system
description: Build a premium multi-theme UI system with distinct visual languages per game and reusable interactive components.
---

# Frontend UI System

## When To Use

- Building layouts, cards, interactive tools, charts, or themed sections.
- Creating or updating the visual language for Elden Ring and Cyberpunk 2077.
- Adding motion, responsive behavior, or reusable UI variants.

## Steps

1. Define shared layout primitives and game theme tokens.
2. Create separate visual treatments for each game before styling feature pages.
3. Build reusable sections for hero blocks, build cards, stat chips, comparison rows, and advisor result panels.
4. Use client components only for interactive islands such as search, filters, comparison, favorites, and advisor form state.
5. Add restrained Framer Motion transitions where they improve hierarchy and affordance.
6. Verify each page on mobile and desktop breakpoints.

## Standards

- The two game themes must differ in typography, surfaces, accents, and motion language.
- Do not fake variety with color swaps alone.
- Prefer semantic Tailwind utilities backed by CSS variables.
- Loading and empty states must still feel designed and intentional.
- UI components should compose cleanly with shadcn primitives, not fight them.
