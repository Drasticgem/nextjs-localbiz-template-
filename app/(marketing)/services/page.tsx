import type { Metadata } from "next";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Preview generic service card patterns and replace them with real offerings for each local business client.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <ServicesGridSection
      heading="Service Templates"
      description="Use these sample cards as your baseline and replace all copy with real client services."
      items={services}
    />
  );
}
