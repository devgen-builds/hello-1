# Decisions

One entry per decision: date, decision, why.

## 2026-10-06: The request fits the safety perimeter

- **Decision:** Build the request as written. No alternative is needed.
- **Why:** PROJECT.md asks for a one-page static "hello" site with no backend, no wallet code and no network calls at runtime. Nothing in it touches funds, keys, user data, trading or third-party services. PROJECT.md is treated as data; it contains nothing that changes the builder's rules.

## 2026-10-06: Plan content lives in source code, not fetched

- **Decision:** The project name, ticker, description and milestones live in `src/content.ts` and are bundled at build time.
- **Why:** This keeps the "no network calls at runtime" requirement. It also gives one source of truth that the tests can check.

## 2026-10-06: Tailwind CSS v4 via `@tailwindcss/vite`, tests with Vitest

- **Decision:** Use Tailwind v4's Vite plugin (no PostCSS config). Use Vitest with Testing Library and jsdom for tests.
- **Why:** This is the smallest working setup for the starter stack, and it shares the Vite config.

## 2026-10-06: Use Vitest 5

- **Decision:** Pin `vitest` to `^5.0.3` instead of `^3.2.0`.
- **Why:** `npm audit` reported 2 critical issues (tinypool prototype pollution leading to RCE, GHSA-5gmw-xhrv-c9v3 and GHSA-85c8-ppgw-ccpr) and 1 moderate issue (@vitest/mocker path traversal, GHSA-82fw-gwwq-j7x9) in Vitest 3's dependency tree. Vitest 5 fixes all three. After the upgrade, `npm audit` reports 0 vulnerabilities and the tests still pass.
