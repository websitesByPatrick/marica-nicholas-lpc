"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="relative flex items-center gap-2 sm:gap-4 lg:gap-6">
      <div className="hidden items-center gap-3 text-md font-medium text-slate-700 md:flex">
        {links.map((link) => (

            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-950 hover:bg-gray-200 py-2 px-4 rounded-2xl"
            >
              {link.label}
            </Link>
          )
        )}
      </div>

      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(!isOpen)}
        className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-md border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
      >
        <span
          className={`h-0.5 w-5 bg-slate-700 transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`h-0.5 w-5 bg-slate-700 transition-opacity ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`h-0.5 w-5 bg-slate-700 transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      <div
        id="mobile-navigation"
        className={`${isOpen ? "flex" : "hidden"} absolute right-0 top-full z-50 mt-3 w-64 flex-col rounded-md border border-slate-200 bg-white p-2 shadow-lg md:hidden`}
      >
        {links.map((link) => (

            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              {link.label}
            </Link>
        )
        )}

      </div>
    </nav>
  );
};

export default Navbar;
