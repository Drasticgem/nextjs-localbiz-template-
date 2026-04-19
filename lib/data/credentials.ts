/**
 * Trust / safety credentials.
 * Shared between the hero trust row and the About section badges.
 */
export interface Credential {
  value: string;
  /** Display the value slightly smaller for multi-line values. */
  smallValue?: boolean;
  title: string;
  sub: string;
  /** Short label for the hero trust row pill. */
  shortLabel: string;
}

export const CREDENTIALS: Credential[] = [
  {
    value: ".46",
    title: "Experience Modification Rate",
    sub: "Industry-leading safety record",
    shortLabel: "EMR .46",
  },
  {
    value: "Top\nRated",
    smallValue: true,
    title: "Safety Program Certified",
    sub: "Placeholder certification details",
    shortLabel: "Safety Certified",
  },
  {
    value: "4",
    title: "Multiple Service Areas",
    sub: "Placeholder service area coverage",
    shortLabel: "4 Regional Offices",
  },
];
