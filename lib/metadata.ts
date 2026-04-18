import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

const DEFAULT_OG_IMAGE = "/images/og-default.jpg";
const SITE_URL = "https://example.com";

interface MetadataInput {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

interface LocalBusinessSchemaInput {
  pageUrl?: string;
  description?: string;
}

export function buildPageTitle(pageTitle: string): string {
  return `${pageTitle} | ${BUSINESS.name} — ${BUSINESS.address.city}, ${BUSINESS.address.state}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
}: MetadataInput): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title: buildPageTitle(title),
    description,
    openGraph: {
      title: buildPageTitle(title),
      description,
      url,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: `${BUSINESS.name} preview image` }],
    },
    twitter: {
      card: "summary_large_image",
      title: buildPageTitle(title),
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function buildLocalBusinessSchema({
  pageUrl = SITE_URL,
  description = `${BUSINESS.name} local business website template profile.`,
}: LocalBusinessSchemaInput = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    url: pageUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    areaServed: BUSINESS.locations.map((location) => location.name),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: BUSINESS.hours.weekdays.split(" - ")[0],
        closes: BUSINESS.hours.weekdays.split(" - ")[1],
      },
    ],
    sameAs: Object.values(BUSINESS.socials),
  };
}

export const metadataDefaults = {
  siteUrl: SITE_URL,
  ogImage: DEFAULT_OG_IMAGE,
};
