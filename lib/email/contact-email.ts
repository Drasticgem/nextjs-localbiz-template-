import { BUSINESS } from "@/lib/constants";
import type { ContactData } from "@/lib/schemas/contact";

type ContactEmailContent = {
  subject: string;
  text: string;
  html: string;
};

export function buildContactEmail(data: ContactData): ContactEmailContent {
  const subject = `New contact request - ${BUSINESS.name}`;

  const lines = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Service: ${data.service || "Not specified"}`,
    `Preferred contact method: ${data.preferredContactMethod || "Not specified"}`,
    `Source page: ${data.sourcePage || "/contact"}`,
    "",
    "Message:",
    data.message,
  ];

  const text = lines.join("\n");

  const html = `
    <h2>New contact request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Service:</strong> ${escapeHtml(data.service || "Not specified")}</p>
    <p><strong>Preferred contact method:</strong> ${escapeHtml(data.preferredContactMethod || "Not specified")}</p>
    <p><strong>Source page:</strong> ${escapeHtml(data.sourcePage || "/contact")}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  `;

  return { subject, text, html };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
