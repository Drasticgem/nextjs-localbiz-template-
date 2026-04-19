# New Client Workflow

## Purpose

Use this template to quickly create a new client-specific repo without contaminating the baseline.

## Steps

1. Click **Use this template** in GitHub.
2. Name the new repository for the client.
3. Clone the new repository locally.
4. Create branch `setup/initial-branding`.
5. Update placeholders listed in `docs/content-replacement-map.md`.
6. Replace imagery and brand colors.
7. Run:
   - `pnpm install`
   - `pnpm lint`
   - `pnpm typecheck`
   - `pnpm build`
8. Open PR in the client repo.
9. Deploy the client repo to Vercel.

## Guardrails

- Never push client branding to this template repo.
- Keep reusable improvements generic and back-port them here separately.
