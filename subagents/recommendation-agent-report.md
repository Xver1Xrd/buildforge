# recommendation-agent Report

- Advisor will score builds per selected game across playstyle fit, difficulty fit, mode fit, and tag overlap.
- Output must include one winner, two alternatives, and explicit reasons tied to user answers plus build traits.
- Seed data will encode tags such as `bleed`, `colossal`, `faith`, `mage`, `stealth`, `netrunner`, `tank`, `mobility`, `hacker`, and `aggressive`.
- Recommendation logic will live in `lib/recommendation/` and stay deterministic for test coverage.
