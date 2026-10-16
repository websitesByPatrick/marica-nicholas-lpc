const supportAreas = [
  "Anxiety",
  "Christian",
  "Anger",
  "Play Therapy",
  "Trauma",
  "Autism",
  "Children",
  "Depression",
  "Geriatric",
  "EMDR"
];

export default function Hero() {
  return (
    <main className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#f1f5f9_35%,#e2e8f0_100%)] text-slate-700">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-45 grayscale-[0.15] contrast-100"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
      >
        <source src="/counseling.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.58),rgba(148,163,184,0.18)_32%,rgba(241,245,249,0.72)_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-12 lg:py-20 text-slate-700">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium tracking-[0.12em] text-slate-700 uppercase shadow-[0_12px_30px_rgba(100,116,139,0.10)] backdrop-blur-md">
            Compassionate counseling for healing
          </p>

          <h1 className="mt-6 font-roboto text-5xl font-bold tracking-[-0.04em] text-slate-700 sm:text-6xl lg:text-7xl">
            Marica Nicholas
          </h1>

          <p className="mt-4 font-merienda text-2xl text-slate-700 sm:text-3xl">
            Licensed Professional Counselor
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Helping children and adults move through anxiety, depression,
            life transitions, and relationship challenges with warmth, clarity,
            and evidence-based care.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_18px_35px_rgba(30,41,59,0.12)] transition hover:-translate-y-0.5 hover:bg-slate-200"
            >
              Book a consultation
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_10px_25px_rgba(100,116,139,0.08)] backdrop-blur-sm transition hover:bg-white"
            >
              Learn more
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-slate-700">
            <span>Serving Tomball, TX and surrounding areas</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -m-4 rounded-4xl bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(148,163,184,0.18)_55%,rgba(148,163,184,0)_100%)] blur-2xl" />

          <div className="relative rounded-4xl border border-white/60 bg-white/85 p-6 shadow-[0_30px_80px_rgba(51,65,85,0.18)] backdrop-blur-md">
            <div className="rounded-3xl bg-gray-300 p-6 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-slate-700">
                Specialties
              </p>

              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
                {supportAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span className="text-base text-slate-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                  Focus
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-700">
                  Emotional wellness
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                  Style
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-700">
                  Warm & collaborative
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
