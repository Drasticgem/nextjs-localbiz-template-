import Link from "next/link";

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroSectionProps) {
  return (
    <section className="bg-navy px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl space-y-6">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-light">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base text-white/85 md:text-lg">{subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={primaryCtaHref}
            className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-gold-light"
          >
            {primaryCtaLabel}
          </Link>
          {secondaryCtaLabel && secondaryCtaHref ? (
            <Link
              href={secondaryCtaHref}
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondaryCtaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
