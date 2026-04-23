/**
 * Reusable business constants.
 * Replace these values when creating a new client site.
 */
export const BUSINESS = {
  // Core placeholders for template customization
  name: "COMPANY_NAME",
  shortName: "COMPANY_SHORT_NAME",
  tagline: "COMPANY_TAGLINE",
  founder: "FOUNDER_NAME",
  founded: 2000,
  phone: "+15551234567",
  phoneDisplay: "(555) 010-1234",
  phoneHref: "tel:+15551234567",
  email: "hello@example.com",
  paymentUrl: "#",
  bookingUrl: "https://cal.com/example",
  primaryColor: "oklch(62% 0.18 258)",
  address: {
    street: "123 Main St",
    city: "CITY_NAME",
    state: "ST",
    zip: "00000",
    full: "123 Main St, CITY_NAME, ST 00000",
  },
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 2:00 PM",
    sunday: "Closed",
  },
  socials: {
    facebook: "https://facebook.com/company",
    instagram: "https://instagram.com/company",
    google: "https://g.page/company",
  },
  locations: [
    { name: "Primary Location", isHQ: true },
    { name: "Secondary Location", isHQ: false },
  ],
} as const;
