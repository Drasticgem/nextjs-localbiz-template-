# Local Business Website Template (Next.js)

A **client-agnostic starter** for conversion-focused local business websites.

> Do not edit this template directly for production clients — **always fork it first**.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first in `app/globals.css`)
- Framer Motion
- React Hook Form + Zod + Server Actions (ready pattern)
- shadcn/ui-compatible structure
- Vercel-ready deployment
- pnpm package manager

## Quick Start (New Client Project)

1. **Fork this repository** into a new repo named for your client.
2. Clone your fork and install dependencies:
   ```bash
   pnpm install
   ```
3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Start development server:
   ```bash
   pnpm dev
   ```
5. Replace placeholders in:
   - `lib/constants.ts` (business identity)
   - `lib/data/*.ts` (services/testimonials/faqs/team)
   - `app/globals.css` (brand colors + typography)
6. Update images under `public/images/`.
7. Deploy to Vercel when ready.

## Folder Structure

```text
app/
  (marketing)/
    page.tsx
    about/page.tsx
    services/page.tsx
    contact/page.tsx
  layout.tsx
  globals.css
components/
  ui/
  sections/
  layout/
  forms/
  common/
lib/
  constants.ts
  data/
  schemas.ts
  utils.ts
public/
  images/
  icons/
```

## Branding Customization Guide

1. **Colors:** edit CSS variables in `app/globals.css` (`--color-navy`, `--color-gold`, etc.).
2. **Fonts:** update `next/font/google` choices in `app/layout.tsx` and matching CSS vars.
3. **Business identity:** replace all placeholders in `lib/constants.ts`.
4. **Metadata:** update per-page metadata and structured data before production launch.

## Content Replacement Process

- Replace example services in `lib/data/services.ts`.
- Replace sample testimonials and FAQs in `lib/data/testimonials.ts` and `lib/data/faqs.ts`.
- Replace team placeholders in `lib/data/team.ts`.
- Ensure all placeholder text is removed from route pages under `app/(marketing)/`.

## Deployment (Vercel)

1. Push your client fork to GitHub.
2. Import the repo in Vercel.
3. Add environment variables from `.env.local`.
4. Trigger production deploy from `main`.

## Important Workflow Rule

- ✅ Fork for each client.
- ✅ Keep this repository as a starter baseline.
- ❌ Do **not** build client-specific code directly in this template repo.
