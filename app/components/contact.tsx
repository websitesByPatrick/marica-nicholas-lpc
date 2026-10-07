import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-100 py-20 text-slate-700">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
            Begin your next chapter
          </p>
          <h2 className="mt-4 font-roboto text-4xl font-bold text-slate-700 sm:text-5xl">
            Let&apos;s create a path toward healing and lasting change.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
            Whether you are navigating anxiety, life transitions, or
            relationship challenges, support is available in a safe and
            compassionate space.
          </p>

          <div className="mt-8 space-y-3 text-sm text-slate-700">
            <p>hello@maricanicholas.com</p>
            <p>(281) 555-0123</p>
            <p>Tomball, Magnolia, Spring, Texas</p>
          </div>
        </div>

        <form className="rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700 sm:col-span-1">
              First name
              <input
                type="text"
                placeholder="Your first name"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 sm:col-span-1">
              Last name
              <input
                type="text"
                placeholder="Your last name"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
              Email address
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
              Phone number
              <input
                type="tel"
                placeholder="(555) 123-4567"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
              How can I help?
              <textarea
                rows={5}
                placeholder="Tell me a little about what you’re looking for."
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-300"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact