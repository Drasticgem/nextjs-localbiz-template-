"use client";

import { useState, useTransition, type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { submitContactForm, type ContactActionResult } from "@/app/actions/contact";
import { BUSINESS } from "@/lib/constants";
import {
  contactSchema,
  contactServices,
  preferredContactMethods,
  type ContactInput,
} from "@/lib/schemas/contact";

type ContactFormProps = {
  sourcePage?: string;
};

export function ContactForm({ sourcePage = "/contact" }: ContactFormProps) {
  const [result, setResult] = useState<ContactActionResult | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      preferredContactMethod: "",
      message: "",
      companyWebsite: "",
      sourcePage,
    },
  });

  const submitting = isSubmitting || isPending;

  const onSubmit = handleSubmit((values) => {
    setResult(null);

    startTransition(async () => {
      const actionResult = await submitContactForm(values);
      setResult(actionResult);

      if (!actionResult.ok && actionResult.fieldErrors) {
        Object.entries(actionResult.fieldErrors).forEach(([field, messages]) => {
          const message = messages?.[0];
          if (!message) return;
          setError(field as keyof ContactInput, { type: "server", message });
        });
      }

      if (actionResult.ok) {
        reset({
          name: "",
          phone: "",
          email: "",
          service: "",
          preferredContactMethod: "",
          message: "",
          companyWebsite: "",
          sourcePage,
        });
      }
    });
  });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mt-8 rounded-xl border border-navy/10 bg-white p-6 shadow-sm"
      aria-describedby="contact-form-status"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field id="contact-name" label="Name" error={errors.name?.message} required>
          <input
            id="contact-name"
            {...register("name")}
            autoComplete="name"
            className={inputClass(errors.name?.message)}
          />
        </Field>

        <Field id="contact-phone" label="Phone" error={errors.phone?.message} required>
          <input
            id="contact-phone"
            {...register("phone")}
            autoComplete="tel"
            className={inputClass(errors.phone?.message)}
          />
        </Field>

        <Field
          id="contact-email"
          label="Email"
          error={errors.email?.message}
          required
          className="md:col-span-2"
        >
          <input
            id="contact-email"
            {...register("email")}
            type="email"
            autoComplete="email"
            className={inputClass(errors.email?.message)}
          />
        </Field>

        <Field
          id="contact-service"
          label="Service"
          error={errors.service?.message}
          className="md:col-span-1"
        >
          <select
            id="contact-service"
            {...register("service")}
            className={inputClass(errors.service?.message)}
          >
            <option value="">Select a service (optional)</option>
            {contactServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="contact-preferred-method"
          label="Preferred contact method"
          error={errors.preferredContactMethod?.message}
          className="md:col-span-1"
        >
          <select
            id="contact-preferred-method"
            {...register("preferredContactMethod")}
            className={inputClass(errors.preferredContactMethod?.message)}
          >
            <option value="">No preference</option>
            {preferredContactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="contact-message"
          label="Message"
          error={errors.message?.message}
          required
          className="md:col-span-2"
        >
          <textarea
            id="contact-message"
            {...register("message")}
            rows={5}
            className={inputClass(errors.message?.message)}
            placeholder="Tell us about your project, timeline, and any details that help us prepare."
          />
        </Field>
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="companyWebsite">Company Website</label>
        <input
          id="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          {...register("companyWebsite")}
        />
      </div>

      <input type="hidden" {...register("sourcePage")} value={sourcePage} />

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex items-center rounded-lg bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy-mid disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>

      <div id="contact-form-status" className="mt-4 text-sm" aria-live="polite">
        {result?.ok && <p className="text-green-700">{result.message}</p>}
        {result && !result.ok && (
          <p className="text-red-700">
            {result.message} You can also call us at{" "}
            <a href={BUSINESS.phoneHref} className="font-semibold underline">
              {BUSINESS.phoneDisplay}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

function Field({ id, label, error, required, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-navy">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError?: string) {
  return [
    "w-full rounded-lg border bg-white px-3 py-2 text-sm text-navy focus:outline-none focus:ring-2",
    hasError
      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
      : "border-navy/20 focus:border-gold focus:ring-gold/30",
  ].join(" ");
}
