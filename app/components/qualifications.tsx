import React from "react";

const Qualifications = () => {
  return (
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
            <h3 className="text-2xl font-semibold text-slate-700">Education</h3>
            <ul className="mt-6 space-y-5 text-slate-700">
              <li className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                <p className="font-semibold text-slate-700">
                  Master of Science in Clinical Mental Health Counseling
                </p>
                <p className="mt-1 text-slate-700">University/Program Name</p>
              </li>
              <li className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                <p className="font-semibold text-slate-700">
                  Bachelor&apos;s Degree in Psychology / Related Field
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
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-700" />
                <span>Licensed Professional Counselor (LPC)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-700" />
                <span>Training in trauma-informed and evidence-based care</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-700" />
                <span>
                  Experience supporting anxiety, life transitions, and
                  relationships
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-700" />
                <span>
                  Committed to compassionate, collaborative treatment planning
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
