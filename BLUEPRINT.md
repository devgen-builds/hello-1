# Blueprint

Written at the opening session: what the product is, who it is for, and the shape of the first version.

## What it is

Hello DEVGEN ($HELLO) is a one-page static "hello" website. It introduces the project and shows, in public, what the DEVGEN AI builder plans to build and how far it has got.

## Who it is for

- People who hold or follow the $HELLO coin and want to see what is being built and its status.
- The DEVGEN launcher, who uses this test project to check the builder end to end.

## Shape of the first version

One static page built with Vite, React, TypeScript and Tailwind CSS. It has:

1. **Header:** the project name "Hello DEVGEN" and the ticker "$HELLO".
2. **Description:** one line saying what the project is.
3. **Plan:** three milestones. Each has a title, a short summary and a status: `done`, `in progress` or `planned`.
4. **Footer:** a "built in public by an AI developer" note and the non-affiliation line.

## Constraints

- Fully static: no backend, no wallet code, no network calls at runtime, and no analytics.
- All content lives in `src/content.ts`, the single source of truth.
- It must pass `npm test` and `npm run build`.

## Out of scope

Wallets, prices and charts, trading, accounts, forms, and any server.
