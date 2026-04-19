# Content Replacement Map

This file identifies where placeholders currently live in the template.

## Primary Configuration

- `lib/constants.ts`
  - `COMPANY_NAME`
  - `COMPANY_SHORT_NAME`
  - `FOUNDER_NAME`
  - `CITY_NAME`
  - Placeholder phone, email, address, booking URL

## Data Files

- `lib/data/services.ts` — sample service names, descriptions, long descriptions, and features
- `lib/data/testimonials.ts` — sample customer names and quotes
- `lib/data/team.ts` — sample team members and bios
- `lib/data/faqs.ts` — sample FAQ questions and answers
- `lib/data/community.ts` — sample community impact stats
- `lib/data/clients.ts` — example client logo/name list
- `lib/data/divisions.ts` — example divisions and card copy
- `lib/data/credentials.ts` — example credential highlights
- `lib/data/stats.ts` — sample stat counters

## UI Copy Touchpoints

- `app/layout.tsx` metadata description
- `app/(marketing)/page.tsx` homepage hero and services intro copy
- `components/layout/Footer.tsx` template notice copy
- `components/forms/EstimateForm.tsx` success/error helper text
- `components/sections/*` section headlines and supporting text

## Replacement Notes

- Keep all business identity fields sourced from `lib/constants.ts`.
- Do not hardcode final client values directly in JSX.
- Replace image assets in `public/images/` during client implementation.
