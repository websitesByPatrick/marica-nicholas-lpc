import Link from "next/link";

const Navbar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex items-center gap-2 sm:gap-4 lg:gap-6">
      <div className="hidden items-center gap-4 text-sm font-medium text-slate-700 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition hover:text-slate-700"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="#contact"
        className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-lg shadow-slate-200/70 transition hover:bg-slate-200 sm:px-5"
      >
        Request Appointment
      </Link>
    </nav>
  );
};

export default Navbar;
