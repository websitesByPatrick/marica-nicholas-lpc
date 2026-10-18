import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-slate-700 sm:flex-row sm:text-left lg:px-12">
        <p>© 2026 Marica Nicholas, LPC</p>
        <p className="text-slate-700">Serving Tomball, TX and surrounding areas</p>
        <Link
          href="/privacy-policy"
          className="text-slate-700 underline underline-offset-4"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
