"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 px-6 py-4 backdrop-blur md:px-10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between" aria-label="Primary">
        <Link href="/" className="text-lg font-semibold text-white">
          {BUSINESS.shortName}
        </Link>
        <div className="flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-white/80 transition hover:text-gold-light",
                pathname === link.href && "text-gold-light",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={BUSINESS.phoneHref}
            className="rounded-md bg-gold px-4 py-2 text-xs font-semibold text-navy transition hover:bg-gold-light"
          >
            Call Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
