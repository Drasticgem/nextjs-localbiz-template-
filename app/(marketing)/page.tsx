import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { BUSINESS } from "@/lib/constants";
import { services } from "@/lib/data/services";

export default function HomePage() {
  return (
    <>
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
