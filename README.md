# Contractor Website Template (Next.js)

Reusable baseline for **contractor, trades, and local service** websites.

> This repository is intended to be used as a **GitHub Template Repository**.
> Do not build real client work directly in this repo.

## Stack

- Next.js 15 (App Router) + TypeScript
- React 19
- Tailwind CSS v4 beta
- Framer Motion
- Lucide React
- Vercel Analytics
- pnpm

## Create a New Client Site (Template Workflow)

1. In GitHub, click **Use this template** on this repository.
2. Create a new repository named for the client project.
3. Clone the new client repository.
4. Install dependencies and start development:

```bash
pnpm install
pnpm dev
```

5. Replace business/content placeholders (see `docs/content-replacement-map.md`).
6. Run quality checks before handoff/deploy:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Rules for Contributors and Assistants

- Never build a real client directly in this template repository.
- Business info must come from `lib/constants.ts` (or future centralized config).
- Do not hardcode phone numbers, addresses, emails, or company names in components.
- Keep template placeholders until they are replaced in a generated client repo.

## Documentation

- New client setup: `docs/new-client-workflow.md`
- Client intake: `docs/client-intake.md`
- Placeholder inventory: `docs/content-replacement-map.md`
- Launch QA: `docs/launch-checklist.md`
