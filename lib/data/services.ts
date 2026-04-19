export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
}

// Replace with client data for each project.
export const services: Service[] = [
  {
    slug: "electrician-services",
    title: "Electrician Services",
    description: "Licensed electrical installs, troubleshooting, and upgrades.",
    longDescription:
      "Placeholder copy: describe your client's electrical specialties, response times, and service areas here.",
    features: ["24/7 emergency options", "Licensed technicians", "Upfront pricing"],
  },
  {
    slug: "hvac-services",
    title: "HVAC Services",
    description: "Heating and cooling repairs, tune-ups, and replacements.",
    longDescription:
      "Placeholder copy: add the HVAC offerings and warranties specific to your client.",
    features: ["Seasonal maintenance", "Energy-efficient upgrades", "Fast diagnostics"],
  },
  {
    slug: "plumbing-services",
    title: "Plumbing Services",
    description: "Leak repair, drain cleaning, and fixture installation.",
    longDescription:
      "Placeholder copy: customize this section with the plumbing services offered by the client.",
    features: ["Same-day appointments", "Clean job sites", "Residential + commercial"],
  },
];
