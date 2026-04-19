# AGENTS.md — Contractor/Trades Website Template

This repository is a **reusable template baseline** for contractor, trades, and local service business websites.

## Read this first

- If `CLAUDE.md` exists, it should mirror this file and point back here.
- Never build a real client site directly in this repository.
- Create a new GitHub repository from this template before client customization.

## Actual stack (must stay accurate)

- Next.js **15** (App Router) + TypeScript
- React 19
- Tailwind CSS v4 beta (CSS-first in `app/globals.css`)
- Framer Motion
- Lucide React
- Vercel Analytics
- Package manager: pnpm

## Core template rules

1. Keep this repo client-neutral.
2. Store business identity values in `lib/constants.ts` (or future config file), not inline in components.
3. Do not hardcode phone numbers, addresses, emails, or company names in UI components.
4. Preserve placeholder content where intended; document where placeholders live.
5. Prefer Server Components; only use client components when interactivity is needed.
6. Use semantic HTML and keep accessibility in mind.

## Required validation before completion

Run all of these from repository root:

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm build
```

Do not mark work complete unless these checks pass, or a failure is explicitly documented with the exact reason.

## Template workflow

- Use the docs under `docs/` when preparing a new client project:
  - `docs/new-client-workflow.md`
  - `docs/client-intake.md`
  - `docs/content-replacement-map.md`
  - `docs/launch-checklist.md`
