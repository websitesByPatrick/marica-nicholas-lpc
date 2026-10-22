"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { sendInfo } from "../actions/contact";


const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-100 py-20 text-slate-700 sm:scroll-mt-28"
    >
      <div className="mx-auto flex flex-col max-w-6xl gap-10 px-6  lg:px-12">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 text-center">
            Contact
          </p>
          <h2 className="mt-4 font-roboto text-4xl font-bold text-slate-700 sm:text-5xl">
            Let&apos;s create a path toward healing and lasting change.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
            Whether you are navigating anxiety, depression, life transitions, or
            relationship challenges, support is available in a safe and
            compassionate space.
          </p>

          <div className="mt-8 space-y-3 text-md text-slate-700 text-center lg:text-left">
            <p>marica@clearhopewellness.com</p>
            <p>(281) 769-2238 ext. 640</p>
            <p>Serving Tomball, TX and surrounding areas</p>
            <p className="mt-5 text-sm lg:text-2xl">Complete the form below and Marica will be in contact with you.</p>
          </div>
        </div>

        <form
            ref={formRef}
            action={async (formData) => {
              const result = await sendInfo(formData);
            setSubmissionResult({
              success: result.success,
              message: result.success
                ? "Your message has been sent. Marica will be in touch."
                : result.error,
            });

            if (result.success) {
              formRef.current?.reset();
            }
          }}
          className="rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700 sm:col-span-1">
              First name
              <input
                name="firstName"
                type="text"
                placeholder="Your first name"
                maxLength={80}
                required
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 sm:col-span-1">
              Last name
              <input
                name="lastName"
                type="text"
                placeholder="Your last name"
                maxLength={80}
                required
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
              Email address
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                maxLength={254}
                required
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
              Phone number
              <input
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                maxLength={40}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
              How can I help?
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me a little about what you’re looking for."
                maxLength={3000}
                required
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </label>
          </div>

          <p className="mt-4 text-sm text-slate-700">
            Please do not include sensitive personal or medical information.
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Read our{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-slate-700 underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>

          {submissionResult && (
            <p
              className="mt-4 text-sm text-slate-700"
              role={submissionResult.success ? "status" : "alert"}
            >
              {submissionResult.message}
            </p>
          )}


          <button
            type="submit"

            className="mt-6 w-full rounded-full bg-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact