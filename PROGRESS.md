# Progress

One entry per work session: date, model, what changed, what is next.

## 2026-10-06: Opening session (claude-opus-5-5)

**What changed**
- Checked PROJECT.md against the safety perimeter. It fits as written: static, with no backend, wallet code or runtime network calls. Recorded in DECISIONS.md.
- Wrote BLUEPRINT.md (product, audience, shape of v1) and PLAN.md (M1–M3 with acceptance criteria).
- Set up the starter stack: Vite 6, React 19, TypeScript 5 (strict), Tailwind CSS 4 (`@tailwindcss/vite`) and Vitest 5 with Testing Library and jsdom.
- First page (`src/App.tsx`): project name, `$HELLO` ticker, a one-line description, the three-milestone plan with statuses, and footer notes. Content comes from `src/content.ts`.
- Test (`src/App.test.tsx`): checks the name, the ticker, and that the plan has three milestones, each with its title and status.
- Upgraded Vitest 3 to 5 to clear the critical `npm audit` findings (see DECISIONS.md).

**Verification**
- `npm test`: 2/2 tests pass.
- `npm run build`: succeeds, output in `dist/`: `index.html`, about 10.5 kB CSS and about 226 kB JS (70 kB gzip).
- `npm audit`: 0 vulnerabilities.
- `grep` on `src/` finds no fetch, XHR, WebSocket or wallet code.

**M1 status:** done.

**Next**
- M2: status badges with tests for each label, semantic-markup tests, and a check of the layout at 360px and 1280px.
- M3: favicon, a footer-notes test, and README sections on running, testing and building.
