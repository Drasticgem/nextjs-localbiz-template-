# Local Business Website Template (Next.js)

A reusable, Vercel-ready starter for contractor, trades, and local service
business websites. Fork it, swap the branding, deploy.

> This repository is intended to be used as a **GitHub Template Repository**.
> Do not build real client work directly in it — see `docs/new-client-workflow.md`.

## Stack

- Next.js 15 (App Router) + TypeScript
- React 19
- Tailwind CSS v4 (CSS-first `@theme` in `app/globals.css`)
- Framer Motion, Lucide React
- Resend (contact form email), React Hook Form, Zod
- Vercel Analytics
- pnpm

## Quickstart

```bash
pnpm install
cp .env.example .env.local   # fill in real values (see below)
pnpm dev                     # http://localhost:3000
```

Quality checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm format        # prettier --write .
```

## Where to edit for a new site

The template is designed so every "swap point" sits in a small number of files:

| What | File(s) |
| --- | --- |
| Business identity (name, phone, email, address, hours, socials) | `lib/constants.ts` (`BUSINESS`) |
| Services, team, FAQs, testimonials, stats, etc. | `lib/data/*.ts` |
| Contact form service options | `lib/schemas/contact.ts` (`contactServices`) |
| Brand tokens (colors, fonts, radius, shadows) | `app/globals.css` (`@theme { ... }`) |
| Site metadata + LocalBusiness JSON-LD | `app/layout.tsx` |
| Logos, images, icons, videos | `public/` |

**Rule:** never hardcode phone/address/email/company name in components —
always source from `BUSINESS` so a single edit propagates everywhere.

See `docs/content-replacement-map.md` for the full inventory of placeholders.

## Environment variables

Copy `.env.example` → `.env.local` and set:

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes (for email) | Resend API key |
| `CONTACT_TO_EMAIL` | yes (for email) | Inbox that receives leads |
| `CONTACT_FROM_EMAIL` | yes (for email) | Verified Resend sender, e.g. `Website Leads <leads@your-domain.com>` |
| `NEXT_PUBLIC_COMPANY_NAME` | no | Optional public display name |
| `NEXT_PUBLIC_SITE_URL` | no | Reserve for future absolute URLs / sitemap |

If the Resend variables are missing, the contact/estimate forms return a
friendly "not configured yet" message and direct visitors to the phone CTA
instead of crashing.

## Contact form

- Server action: `app/actions/contact.ts` (validates with Zod, honeypot
  spam check, sends via Resend).
- Email template: `lib/email/contact-email.ts`.
- Both `components/forms/ContactForm.tsx` (on `/contact`) and
  `components/forms/EstimateForm.tsx` (in the home CTA band) submit through
  the same action, so there is a single place to change backend behavior.

## Deploying to Vercel

1. Push this repo (or your fork) to GitHub.
2. In Vercel, **Add New → Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). No custom build command needed.
4. Add the environment variables from `.env.example` under
   **Project Settings → Environment Variables**.
5. Deploy.

## Project structure

```
app/
  (marketing)/    # home, services, about, contact pages
  actions/        # server actions (contact form)
  layout.tsx      # root layout, fonts, JSON-LD, Analytics
  globals.css     # Tailwind v4 @theme tokens
components/
  animations/     # Framer Motion helpers
  forms/          # ContactForm, EstimateForm
  icons/          # SVG icon components
  layout/         # Header, Footer, Logo
  sections/       # Hero, Services, CTA, Stats, etc.
lib/
  constants.ts    # BUSINESS identity config (primary swap point)
  data/           # services, team, FAQs, testimonials, etc.
  email/          # Resend email template builder
  schemas/        # Zod schemas
  utils.ts        # cn() helper
docs/             # new-client workflow, intake, launch checklist
public/           # logos, images, icons, videos
```

## Scripts

| Script | What it does |
| --- | --- |
| `pnpm dev` | Next dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint (flat config, Next + TS rules) |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm format` | Prettier write |
| `pnpm format:check` | Prettier check |

## Docs

- `docs/new-client-workflow.md` — fork → customize → deploy
- `docs/client-intake.md` — info to collect before customizing
- `docs/content-replacement-map.md` — every placeholder and where it lives
- `docs/launch-checklist.md` — final QA before handoff

## Rules for contributors / AI assistants

- See `AGENTS.md` (source of truth) and `CLAUDE.md`.
- Never build real client work directly in this template repository.
- Business info must come from `lib/constants.ts`.
- Do not hardcode phone numbers, addresses, emails, or company names in components.
- Keep template placeholders until they are replaced in a generated client repo.
