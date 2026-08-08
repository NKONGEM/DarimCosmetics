"use client";

import { useState } from "react";
import Link from "next/link";
import type { Category } from "@/lib/data";

export default function MobileNav({
  categories,
  phone,
}: {
  categories: Category[];
  phone: string | null;
}) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    ...categories.map((c) => ({ href: `/shop/${c.id}`, label: c.name })),
    { href: "/contact", label: "Consultations" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex flex-col items-center justify-center gap-[5px] w-9 h-9 shrink-0"
      >
        <span
          className={`block h-0.5 w-5 bg-brand-black transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
        />
        <span className={`block h-0.5 w-5 bg-brand-black transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`block h-0.5 w-5 bg-brand-black transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full bg-cream-100 border-b border-ink-100 px-6 py-2 flex flex-col text-sm font-sans shadow-md max-h-[calc(100vh-64px)] overflow-y-auto"
        >
          {links.map((l, i) => (
            <Link
              key={`${l.href}-${l.label}-${i}`}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-brand-black border-b border-ink-100 last:border-0"
            >
              {l.label}
            </Link>
          ))}
          {phone && (
            <div className="py-3 text-ink-500 text-xs">Call or WhatsApp: {phone}</div>
          )}
        </nav>
      )}
    </div>
  );
}
