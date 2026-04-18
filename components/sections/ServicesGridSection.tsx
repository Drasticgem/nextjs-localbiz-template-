import type { Service } from "@/lib/data/services";

interface ServicesGridSectionProps {
  heading: string;
  description: string;
  items: Service[];
}

export function ServicesGridSection({
  heading,
  description,
  items,
}: ServicesGridSectionProps) {
  return (
    <section className="bg-offwhite px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-navy md:text-4xl">
          {heading}
        </h2>
        <p className="max-w-3xl text-body-text/85">{description}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((service) => (
            <article
              key={service.slug}
              className="rounded-lg border border-navy/10 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
              <p className="mt-2 text-sm text-body-text/80">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
