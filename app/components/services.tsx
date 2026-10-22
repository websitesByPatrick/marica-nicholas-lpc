import React from "react";

const Services = () => {
  const services = [
    {
      title: "Anxiety & Stress",
      description:
        "Support for overwhelming thoughts, worry, burnout, and daily stress that can make life feel heavy.",
    },
    {
      title: "Life Transitions",
      description:
        "Guidance through major life changes, difficult decisions, emotional adjustment, personal growth, and relationship changes.",
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

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 py-20 sm:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 text-center">
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
  );
};

export default Services;
