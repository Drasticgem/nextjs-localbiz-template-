import { BUSINESS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:px-10">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-navy">About This Template</h1>
      <p className="mt-4 text-body-text/85">
        This repository is a reusable starter for local business websites. It ships with placeholder business constants like <strong>{BUSINESS.name}</strong> so each new site can be rebranded quickly.
      </p>
    </section>
  );
}
