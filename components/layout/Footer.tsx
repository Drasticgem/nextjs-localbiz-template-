import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep px-6 py-10 text-white md:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl">{BUSINESS.name}</p>
          <p className="mt-2 text-sm text-white/70">
            Reusable contractor website template. Replace all placeholder content before launch.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-light">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-light">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>{BUSINESS.phoneDisplay}</li>
            <li>{BUSINESS.email}</li>
            <li>{BUSINESS.address.full}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
