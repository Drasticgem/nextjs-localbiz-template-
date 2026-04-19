# Launch Checklist

## Functionality

- [ ] Navigation links work on desktop and mobile.
- [ ] Forms submit successfully.
- [ ] CTA buttons route correctly.
- [ ] Contact links (`tel:` / `mailto:`) are valid.

## Content

- [ ] All placeholders replaced in client repo.
- [ ] Service descriptions are final.
- [ ] Testimonials and team information approved.
- [ ] Metadata titles/descriptions updated per page.

## Quality Gates

Run and verify:

- [ ] `pnpm lint`
- [ ] `pnpm typecheck`
- [ ] `pnpm build`

## Email Delivery Verification (Resend + Vercel)

- [ ] In Vercel Project Settings → Environment Variables, set:
  - `RESEND_API_KEY`
  - `CONTACT_TO_EMAIL`
  - `CONTACT_FROM_EMAIL`
- [ ] Redeploy after saving env vars.
- [ ] Submit the `/contact` form on production with a real email + phone.
- [ ] Confirm lead email arrives at `CONTACT_TO_EMAIL` with name, phone, email, service, message, and source page.
- [ ] Confirm `Reply-To` is the visitor email so direct replies go back to the lead.

## Performance + SEO

- [ ] Images optimized and sized.
- [ ] Above-the-fold content clear and CTA visible.
- [ ] Open Graph image configured.
- [ ] Structured data checked (if implemented).

## Deployment

- [ ] Environment variables configured.
- [ ] Domain connected.
- [ ] SSL active.
- [ ] Post-launch smoke test completed.
