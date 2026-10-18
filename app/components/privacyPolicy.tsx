const PrivacyPolicy = () => {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 text-slate-700 sm:py-20 lg:px-12">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
        Privacy
      </p>
      <h1 className="mt-4 font-roboto text-4xl font-bold text-slate-700 sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-slate-700">
        Effective date: October 17, 2026
      </p>

      <div className="mt-10 space-y-8 text-base leading-7 text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-700">
            About this policy
          </h2>
          <p className="mt-3 text-slate-700">
            This policy describes how Marica Nicholas, LPC, uses information
            submitted through this website. It applies to this website and its
            contact form, not to counseling services or client records. If you
            become a client, ask Marica for the separate privacy information
            that applies to those services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-700">
            Information you provide
          </h2>
          <p className="mt-3 text-slate-700">
            If you use the contact form, you may provide your first and last
            name, email address, phone number, and message. The phone number is
            optional. Please do not include diagnoses, treatment details, or
            other sensitive personal or medical information in your message.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-700">
            How information is used and shared
          </h2>
          <p className="mt-3 text-slate-700">
            Form submissions are sent by email to Marica so she can respond to
            your inquiry. The form uses Resend to deliver those emails. Resend
            and the website hosting provider may process information as needed
            to provide their services and operate the website. Information may
            also be disclosed when required by law.
          </p>
          <p className="mt-3 text-slate-700">
            This website does not sell personal information. Do not use the
            contact form for emergencies or urgent assistance. Sending a
            message does not establish a counselor-client relationship.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-700">
            Retention and security
          </h2>
          <p className="mt-3 text-slate-700">
            Contact information is kept only as long as needed to respond to
            your inquiry, maintain relevant business records, or meet legal
            obligations. Reasonable measures are used to protect information,
            but no website or email transmission can be guaranteed completely
            secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-700">
            Your choices and questions
          </h2>
          <p className="mt-3 text-slate-700">
            To ask about or request deletion of information you sent through
            this website, contact Marica at{" "}
            <a
              href="mailto:marica@clearhopewellness.com"
              className="font-medium text-slate-700 underline"
            >
              marica@clearhopewellness.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-700">
            Changes to this policy
          </h2>
          <p className="mt-3 text-slate-700">
            This policy may be updated from time to time. The effective date
            above indicates when it was most recently revised.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;