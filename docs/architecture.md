# BuildForge Architecture Brief

## Scope

BuildForge is a server-first Next.js application with interactive client islands for filters, comparison, advisor flow, favorites, and charts. Data is stored in SQLite through Prisma and seeded with curated build content for Elden Ring and Cyberpunk 2077.

## Directory Structure

- `app/`
  - route groups and pages
  - server data loading
  - API endpoints only where browser-only state needs a boundary
- `components/ui/`
  - shadcn primitives and shared wrappers
- `components/builds/`
  - build cards, stat panels, comparison rows, filter bars
- `components/advisor/`
  - advisor form, scoring breakdown, recommendation result cards
- `components/dashboard/`
  - charts, summary tiles, distribution views
- `lib/data/`
  - Prisma access, query helpers, seed-friendly normalization
- `lib/recommendation/`
  - advisor schema, scoring, explanation generation
- `lib/`
  - shared helpers, theme mapping, constants, local storage keys
- `prisma/`
  - schema, migrations, seed modules
- `skills/`
  - repository workflow skills
- `subagents/`
  - delegated role contracts and reports
- `types/`
  - shared app-facing type definitions
- `tests/`
  - deterministic recommendation and data-shaping tests

## Domain Boundaries

### Shared

- `Game`
- `Build`
- `BuildStat`
- `Tag`
- `Strength`
- `Weakness`
- `ProgressionStep`
- `BuildAlternative`

### Elden Ring

- `Weapon`
- `Armor`
- `Talisman`
- `Spell`

### Cyberpunk 2077

- `Perk`
- `Cyberware`
- `OperatingSystem`

Shared entities drive catalog, compare, advisor, and dashboard. Game-specific entities feed detail pages and explanation content.

## Route Map

- `/`
  - home, game switcher, featured builds, advisor entry
- `/games/[slug]`
  - game landing page with theme-specific hero and top builds
- `/games/[slug]/builds`
  - searchable, filterable build catalog
- `/games/[slug]/builds/[buildSlug]`
  - build detail page
- `/compare`
  - side-by-side comparison driven by selected build IDs in query params
- `/advisor`
  - game selection, questionnaire, recommendation output
- `/favorites`
  - local favorites view
- `/dashboard`
  - analytics across builds, categories, and distributions

## Data Flow

1. Prisma queries run on the server.
2. Query helpers normalize relational payloads into view models.
3. Server components render initial pages with fully usable content.
4. Client components enhance:
   - live search and filters
   - comparison selection
   - advisor questionnaire
   - local favorites persistence
   - chart interactivity
5. Recommendation logic runs in shared TypeScript so it can be exercised by both server actions and tests.

## Server/Client Split

### Server Components

- home and game landing pages
- catalog page shell and initial result set
- build detail pages
- dashboard data aggregation shell

### Client Components

- search/filter toolbar
- favorites toggles and favorites page local-state hydration
- compare selection controls
- advisor form and dynamic result transitions
- chart tabs and lightweight animated views

## Implementation Order

1. Scaffold Next.js, Tailwind, strict TypeScript, Prisma, SQLite, shadcn base.
2. Implement schema and seeds.
3. Build query layer and typed view models.
4. Create theme system and page shell.
5. Ship catalog and build detail experience.
6. Add comparison flow.
7. Add advisor logic and explanations.
8. Add favorites and dashboard.
9. Run QA, fix defects, then finalize.
