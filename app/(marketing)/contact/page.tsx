import { BUSINESS } from "@/lib/constants";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:px-10">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-navy">Contact</h1>
      <p className="mt-4 text-body-text/85">
        Replace this section with your client contact form and server action.
      </p>
      <div className="mt-8 rounded-lg border border-navy/10 bg-white p-6 shadow-sm">
        <p className="text-sm text-body-text/80">Phone: {BUSINESS.phoneDisplay}</p>
        <p className="text-sm text-body-text/80">Email: {BUSINESS.email}</p>
        <p className="text-sm text-body-text/80">Address: {BUSINESS.address.full}</p>
      </div>
    </section>
  );
}
