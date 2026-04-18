# CLAUDE.md — Local Business Website Template Playbook

## Using This Template with AI Coding Assistants (Claude / Cursor / Grok)

Use this document as the **single source of truth** when prompting an AI coding assistant to customize this template for a client.

### Core principles for AI-assisted work

1. **Always fork first.** Never customize this base template repo for a live client.
2. **Constants + data first.** Update `lib/constants.ts` and `lib/data/*` before editing components.
3. **Server Components by default.** Add `"use client"` only for interactivity.
4. **Conversion-focused UX always.** Every viewport should expose a visible CTA.
5. **No client leakage back to template.** Keep generic defaults in this repo.

---

## Step-by-Step Workflow for a New Client Site

1. **Fork this repository** into a client-specific repository.
2. **Create branch**: `feat/client-branding-initial`.
3. **Replace business identity** in `lib/constants.ts`:
   - company name
   - phone/email/address/hours/socials
   - service area
4. **Replace content datasets** in `lib/data/`:
   - `services.ts`
   - `testimonials.ts`
   - `faqs.ts`
   - `team.ts`
5. **Replace branding tokens** in `app/globals.css`:
   - primary/secondary/accent colors
   - typography tokens
   - spacing/radius/shadow tuning
6. **Replace imagery** in `public/images/` and `public/icons/`.
7. **Update metadata defaults and page metadata** using helpers from `lib/metadata.ts`.
8. **Customize sections** in `components/sections/` (remove irrelevant sections).
9. **Run checks**:
   - `pnpm install`
   - `pnpm lint`
   - `pnpm typecheck`
   - `pnpm build`
10. **Deploy fork to Vercel** and connect the client domain.

---

## High-Quality Prompting Patterns

### 1) Replace branding

> “Update this project for `[CLIENT_NAME]`, a `[SERVICE_TYPE]` company in `[CITY, STATE]`. Use `lib/constants.ts` for all business identity fields, tune `app/globals.css` tokens for brand colors, and ensure CTAs use strong contrast.”

### 2) Replace content and sections

> “Replace all placeholder service/testimonial/FAQ/team content with client-specific data in `lib/data/*`. Keep components generic and prop-driven. Remove any section not relevant to this client.”

### 3) Replace media assets

> “Swap all placeholder assets in `public/images` with optimized webp/jpg files. Use `next/image` with explicit width/height and meaningful alt text.”

### 4) Improve conversion performance

> “Audit homepage for conversion: hero clarity, social proof above the fold, service scannability, frictionless contact CTA, and trust signals. Propose improvements and implement with minimal JS.”

---

## Conversion-Focused Copy + UX Standards

- Headlines must emphasize **outcome** (benefit), not features.
- Primary CTA text should be action-first (“Book Now”, “Get Estimate”, “Call Today”).
- Social proof appears directly under hero when possible.
- Keep forms short; ask only for essential information.
- Include objections-reducing FAQ near final CTA.
- Ensure each major section ends with a next step.

---

## Common Forking Pitfalls to Avoid

1. Hardcoding phone/address directly in JSX.
2. Leaving placeholder metadata in production.
3. Shipping stock copy that doesn’t match client tone.
4. Adding excessive client-only hacks into reusable sections.
5. Overusing client components when server components suffice.
6. Forgetting to replace placeholder schema/structured data.

---

## How to Add Client-Specific Features Without Polluting the Template

- Keep this template generic; implement client-specific features in the client fork.
- If a feature is reusable (e.g., testimonial carousel), build it as a configurable component.
- Avoid committing client branding assets/content back to the template repo.
- Prefer extension points:
  - new `lib/data/*` fields
  - optional section props
  - route-group level overrides

---

## Template Maintenance Checklist (Quarterly)

- Upgrade Next.js + TypeScript safely.
- Re-run lint/typecheck/build on clean install.
- Revalidate metadata/schema helper defaults.
- Remove stale dependencies and dead components.
- Keep README and this playbook aligned.
