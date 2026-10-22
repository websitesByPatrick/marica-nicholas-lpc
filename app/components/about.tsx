import React from "react";

const About = () => {
  const qualities = [
    "Warmth and empathy",
    "Clear, collaborative guidance",
    "Evidence-based care",
    "A safe, nonjudgmental space",
  ];
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 sm:scroll-mt-28">
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
            Marica Nicholas is a licensed professional counselor at Clearhope
            Counseling and Wellness in Tomball, Texas. She is dedicated to helping
            children and adults find steadiness, confidence, and renewed
            hope.
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
  );
};

export default About;
