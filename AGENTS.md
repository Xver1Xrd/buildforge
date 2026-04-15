<!-- BEGIN:nextjs-agent-rules -->
# Next.js Note

This repository uses a recent Next.js App Router release. Prefer current App Router patterns, Server Components, and Server Functions where appropriate.
<!-- END:nextjs-agent-rules -->

# BuildForge Repository Rules

## Core Delivery Rules

- Ship finished user-facing functionality. Do not leave stubs, placeholder views, fake buttons, empty routes, or "coming soon" states.
- Every feature must be usable locally end-to-end before the task is considered done.
- Favor production-style implementations over demo shortcuts.

## Workflow Order

1. Define or update governance artifacts (`AGENTS.md`, skills, subagents) before major feature work.
2. Confirm architecture before introducing new feature slices.
3. Model data and validation before wiring UI.
4. Build UI shells before polish.
5. Run QA before closing the task.

## Architecture Rules

- Use clear feature boundaries: app routes, reusable components, domain utilities, data access, recommendation logic, tests.
- Keep persistent data in Prisma models, not in one monolithic JSON blob.
- Server components fetch data; client components handle interactivity, local persistence, and animation.
- Prefer shared domain types and mappers over duplicating shape transformations in the UI.
- Keep game-specific presentation isolated through themed components and style tokens.

## Type Safety Rules

- TypeScript strict mode stays on.
- Do not use `any`, unsafe casts, or unvalidated external input.
- Validate incoming params, search params, and advisor payloads with Zod.
- Centralize domain enums and tagged unions where practical.

## Quality Gates

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Run relevant tests for domain logic and critical UI flows.
- Fix failing checks before marking work complete.

## UI and Product Rules

- No generic skin swaps. Elden Ring and Cyberpunk 2077 must feel like different products with shared information architecture.
- All required pages must contain complete, useful content.
- Motion should support hierarchy and feedback, not distract from content.

## Data Rules

- Seed realistic, structured sample content for both supported games.
- Keep relations normalized: builds, stats, equipment, perks, cyberware, tags, strengths, weaknesses, progression.
- Explain recommendations from stored build attributes and tags, not from hardcoded one-off strings.

## Subagent Rule

- Use subagents for large tasks or parallelizable work.
- Mandatory subagents in this repo:
  - `architecture-agent` for route/system structure and domain boundaries
  - `frontend-agent` for theme systems, reusable UI, responsive presentation
  - `recommendation-agent` for advisor inputs, scoring, and explanation logic
  - `qa-agent` for acceptance checks, risk review, and final validation
- Record subagent findings in implementation decisions when they materially affect the build.

## Skills Rule

- Use skills for repeatable workflows or specialized repository conventions.
- Maintain the local skills in `/skills`.
- Update a skill when the workflow changes materially.

## Git and Change Discipline

- Keep commits intentional and scoped.
- Do not revert unrelated user changes.
- Prefer small reusable abstractions over broad speculative frameworks.
