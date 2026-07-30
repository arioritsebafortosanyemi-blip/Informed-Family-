"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "./SectionHeading";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function Booking() {
  const [status, setStatus] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const response = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section
      id="booking"
      className="bg-cream px-6 py-16 sm:px-12 lg:px-0 lg:py-[57px]"
    >
      <div className="mx-auto max-w-3xl px-0 lg:px-[34px]">
        <SectionHeading className="mb-4">Book a Session</SectionHeading>
        <p className="mb-6 text-[14px] font-normal leading-[19px] text-body-dark">
          Send a few details and Juliet will get back to you to schedule
          your first call.
        </p>

        <div className="mb-10 flex flex-col gap-2">
          <a
            href="tel:+2348158924666"
            className="text-[14px] font-normal leading-[19px] text-green-dark hover:underline"
          >
            📞 +234 8158924666
          </a>
          <a
            href="mailto:booking@tifbhub.com"
            className="text-[14px] font-normal leading-[19px] text-green-dark hover:underline"
          >
            ✉️ booking@tifbhub.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Field label="Name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              required
              className="h-[44px] w-full rounded-button border border-border bg-cream px-4 text-[14px] font-normal leading-[19px] text-black outline-none focus:border-green-dark"
            />
          </Field>

          <Field label="Email" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="h-[44px] w-full rounded-button border border-border bg-cream px-4 text-[14px] font-normal leading-[19px] text-black outline-none focus:border-green-dark"
            />
          </Field>

          <Field label="Message" htmlFor="message">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-button border border-border bg-cream px-4 py-3 text-[14px] font-normal leading-[19px] text-black outline-none focus:border-green-dark"
            />
          </Field>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-button border-2 border-transparent bg-green-dark px-[18.667px] py-[12.667px] text-base font-bold tracking-[-0.035px] text-cream-light transition-opacity hover:opacity-90 disabled:opacity-60 sm:text-xl lg:text-2xl"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-[14px] font-normal leading-[19px] text-green-dark">
              Thank you — Juliet will be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-[14px] font-normal leading-[19px] text-red-600">
              Something went wrong sending your message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-[14px] font-normal leading-[19px] text-black"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
