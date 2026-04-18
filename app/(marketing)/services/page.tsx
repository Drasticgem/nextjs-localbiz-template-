import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { services } from "@/lib/data/services";

export default function ServicesPage() {
  return (
    <ServicesGridSection
      heading="Service Templates"
      description="Use these sample cards as your baseline and replace all copy with real client services."
      items={services}
    />
  );
}
