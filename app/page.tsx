import Hero from "./components/hero/hero";

const services = [
  {
    title: "Anxiety & Stress",
    description:
      "Support for overwhelming thoughts, worry, burnout, and daily stress that can make life feel heavy.",
  },
  {
    title: "Life Transitions",
    description:
      "Guidance through major changes, identity shifts, relationship changes, and difficult decisions.",
  },
  {
    title: "Relationships",
    description:
      "Help improving communication, building connection, and navigating conflict with clarity and care.",
  },
  {
    title: "Trauma-Informed Care",
    description:
      "A grounded, compassionate approach that honors your pace, safety, and healing journey.",
  },
];

const qualities = [
  "Warmth and empathy",
  "Clear, collaborative guidance",
  "Evidence-based care",
  "A safe, nonjudgmental space",
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
              About
            </p>
            <h2 className="mt-4 font-roboto text-4xl font-bold text-slate-700 sm:text-5xl">
              Counseling that meets you with compassion and clarity.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Marica Nicholas is a licensed professional counselor dedicated to
              helping individuals and families find steadiness, confidence, and
              renewed hope.
            </p>
            <p>
              Her approach blends empathy, practical tools, and a collaborative
              process designed to support meaningful change at your own pace.
            </p>
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {qualities.map((quality) => (
                <div
                  key={quality}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-medium text-slate-700"
                >
                  {quality}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
              Services
            </p>
            <h2 className="mt-4 font-roboto text-4xl font-bold text-slate-700 sm:text-5xl">
              Support for the challenges you are carrying.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl text-slate-700">
                  ✦
                </div>
                <h3 className="text-xl font-semibold text-slate-700">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
              Education & Qualifications
            </p>
            <h2 className="mt-4 font-roboto text-4xl font-bold text-slate-700 sm:text-5xl">
              Professional training rooted in care, expertise, and trust.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-4xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-2xl font-semibold text-slate-700">
                Education
              </h3>
              <ul className="mt-6 space-y-5 text-slate-700">
                <li className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                  <p className="font-semibold text-slate-700">
                    Master of Science in Clinical Mental Health Counseling
                  </p>
                  <p className="mt-1 text-slate-700">University/Program Name</p>
                </li>
                <li className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                  <p className="font-semibold text-slate-700">
                    Bachelor’s Degree in Psychology / Related Field
                  </p>
                  <p className="mt-1 text-slate-700">University/Program Name</p>
                </li>
              </ul>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-2xl font-semibold text-slate-700">
                Qualifications
              </h3>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <span>Licensed Professional Counselor (LPC)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <span>
                    Training in trauma-informed and evidence-based care
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <span>
                    Experience supporting anxiety, life transitions, and
                    relationships
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <span>
                    Committed to compassionate, collaborative treatment planning
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-100 py-20 text-slate-700">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
              Begin your next chapter
            </p>
            <h2 className="mt-4 font-roboto text-4xl font-bold text-slate-700 sm:text-5xl">
              Let’s create a path toward healing and lasting change.
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
    </>
  );
}
