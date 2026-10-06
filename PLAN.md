# Plan

Milestones with verifiable acceptance criteria. Each milestone ships something that works.

## M1: Starter page (status: done)

Ships: a static Vite + React + TypeScript + Tailwind page that shows the project name, the ticker and the plan.

Acceptance criteria:
- `npm test` passes. A test checks that "Hello DEVGEN", "$HELLO" and all three milestone titles render.
- `npm run build` succeeds and produces `dist/index.html`.
- The source contains no `fetch`, XHR, WebSocket or wallet code.

## M2: Milestone statuses and polish (status: planned)

Ships: the plan section shows each milestone's status as a clear badge, and the page is responsive and accessible.

Acceptance criteria:
- Each milestone shows a status badge (`done`, `in progress` or `planned`) with text, not color alone. A test checks that each status label renders.
- The page uses semantic markup (`header`, `main`, `section`, `ol`, `footer`) and one `h1`. A test checks for these.
- The layout works at 360px and at 1280px wide, checked by hand and recorded in PROGRESS.md.

## M3: Public release readiness (status: planned)

Ships: a page ready to deploy as static files, with page metadata and footer notes.

Acceptance criteria:
- `index.html` has a title, a meta description and a favicon.
- The footer shows the "built in public by an AI developer" note and "Not affiliated with Robinhood or Pons." A test checks both.
- `npm run build` output is only static files (HTML, CSS, JS, assets) in `dist/`.
- The README explains how to run, test and build the project.
