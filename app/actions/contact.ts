"use server";

import { Resend } from "resend";
import { buildContactEmail } from "@/lib/email/contact-email";
import { contactSchema, type ContactInput } from "@/lib/schemas/contact";

export type ContactActionResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> };

export async function submitContactForm(input: ContactInput): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please review the form fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  if (parsed.data.companyWebsite?.trim()) {
    return { ok: false, message: "Spam check failed." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return {
      ok: false,
      message: "Contact form is not configured yet. Please call us instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const email = buildContactEmail(parsed.data);

    await resend.emails.send({
      from,
      to,
      subject: email.subject,
      text: email.text,
      html: email.html,
      replyTo: parsed.data.email,
    });

    return {
      ok: true,
      message: "Thanks! Your request has been sent successfully.",
    };
  } catch {
    return {
      ok: false,
      message: "Unable to send your request right now. Please call us directly.",
    };
  }
}
