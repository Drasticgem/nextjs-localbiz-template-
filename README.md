# Local Business Website Template (Next.js)

A **client-agnostic**, conversion-focused starter for building high-quality local business websites quickly.

> ## 🚨 Always Fork First (Non-Negotiable)
>
> Do **not** build a real client site directly in this repository.
> 1. Fork this template.
> 2. Rename for the client.
> 3. Customize in the fork only.

## Tech Stack

- **Framework:** Next.js App Router + TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first theme in `app/globals.css`)
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod pattern + Server Actions (template-ready)
- **Deployment:** Vercel
- **Package manager:** pnpm

## Quick Start (New Client Project)

1. Fork this repository.
2. Clone your fork:
   ```bash
   git clone <your-fork-url>
   cd <your-fork-folder>
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create environment file:
   ```bash
   cp .env.example .env.local
   ```
5. Run dev server:
   ```bash
   pnpm dev
   ```
6. Replace placeholders in:
   - `lib/constants.ts`
   - `lib/data/*.ts`
   - `app/globals.css`
7. Replace media in `public/images/` and `public/icons/`.
8. Run checks:
   ```bash
   pnpm lint
   pnpm typecheck
   pnpm build
   ```
9. Deploy your fork to Vercel.

## Folder Structure

```text
.
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   └── contact/page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── common/
│   ├── forms/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── lib/
│   ├── constants.ts
│   ├── metadata.ts
│   ├── schemas.ts
│   ├── utils.ts
│   └── data/
│       ├── services.ts
│       ├── testimonials.ts
│       ├── faqs.ts
│       └── team.ts
├── public/
│   ├── icons/
│   ├── images/
│   └── videos/
├── CLAUDE.md
└── README.md
```

## Branding Customization Guide

1. **Business identity** → update `lib/constants.ts`.
2. **Colors/tokens** → update grouped design tokens in `app/globals.css`.
3. **Fonts** → update `next/font/google` setup in `app/layout.tsx` and matching CSS variables.
4. **Metadata/SEO defaults** → update `lib/metadata.ts` and per-page overrides.

## Content Replacement Workflow

- Update services in `lib/data/services.ts`.
- Add real testimonials in `lib/data/testimonials.ts`.
- Replace FAQ placeholders in `lib/data/faqs.ts`.
- Replace team placeholders in `lib/data/team.ts`.
- Remove any section not relevant to a client (avoid bloat).

## SEO & Metadata System

This template includes reusable metadata helpers in `lib/metadata.ts`:

- `buildMetadata()` for page metadata defaults + OpenGraph + Twitter + canonical.
- `buildPageTitle()` for consistent title format.
- `buildLocalBusinessSchema()` for structured data.

Use these helpers in each route to keep SEO consistent and maintainable.

## Deployment (Vercel)

1. Push your fork to GitHub.
2. Import into Vercel.
3. Add env vars from `.env.local`.
4. Deploy from your default branch.
5. Connect client domain and verify SSL.

## Maintaining the Template

To keep this template strong without breaking downstream forks:

1. Make changes in small, reviewable PRs.
2. Prefer additive changes to core APIs (`lib/constants`, `lib/metadata`, `lib/data` shape).
3. Avoid forcing opinionated client-specific design into shared components.
4. Run a clean validation pass before each release:
   - `pnpm install`
   - `pnpm lint`
   - `pnpm typecheck`
   - `pnpm build`
5. Version notable template changes in release notes/changelog.
6. Keep `CLAUDE.md` and README synchronized.

## Contributing

Contributions are welcome if they improve **reusability**, **conversion performance**, or **developer experience** without making the template client-specific.

Please open a PR with:
- clear motivation,
- before/after behavior,
- and validation commands run.
