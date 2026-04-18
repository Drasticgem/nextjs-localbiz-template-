import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { BUSINESS } from "@/lib/constants";
import { services } from "@/lib/data/services";
import { buildLocalBusinessSchema, buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description:
    "Conversion-focused local business website template homepage with customizable sections, metadata, and reusable content patterns.",
  path: "/",
});

export default function HomePage() {
  const localBusinessSchema = buildLocalBusinessSchema({
    pageUrl: "https://example.com/",
    description:
      "Placeholder LocalBusiness schema for this reusable template. Replace with real business data before production launch.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <HeroSection
        eyebrow="Client-ready template"
        title="Launch a high-converting local business site faster."
        subtitle="This starter is intentionally client-agnostic. Replace brand, content, and visuals to ship a custom site for any local service business."
        primaryCtaLabel="Start Customizing"
        primaryCtaHref="/about"
        secondaryCtaLabel={`Call ${BUSINESS.phoneDisplay}`}
        secondaryCtaHref={BUSINESS.phoneHref}
      />
      <ServicesGridSection
        heading="Example Service Categories"
        description="These are sample placeholders. Update this data in lib/data/services.ts for each client build."
        items={services}
      />
    </>
  );
}
