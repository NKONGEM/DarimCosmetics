"use client";

import { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/pages", label: "Pages" },
  { href: "/admin/messages", label: "Messages" },
  { href: "/admin/settings", label: "Settings" },
];

function BrandMark() {
  return (
    <div className="px-5 py-6 font-serif text-lg tracking-wide">
      DARIM <span className="text-brand-gold">LUXE</span>
      <div className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Admin Dashboard</div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen lg:flex bg-brand-cream">
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between bg-brand-black text-white px-4 py-3">
        <span className="font-serif text-base tracking-wide">
          DARIM <span className="text-brand-gold">LUXE</span>
        </span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="admin-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex flex-col items-center justify-center gap-[5px] w-9 h-9 shrink-0"
        >
          <span className={`block h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav
          id="admin-mobile-nav"
          aria-label="Admin navigation"
          className="lg:hidden bg-brand-black text-white px-3 pb-3 flex flex-col"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded text-sm hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-3 py-3 mt-1 border-t border-white/10 flex items-center gap-3">
            <UserButton />
            <span className="text-xs text-white/60">Signed in</span>
          </div>
        </nav>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-56 shrink-0 bg-brand-black text-white flex-col">
        <BrandMark />
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2.5 rounded text-sm hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-5 py-5 border-t border-white/10 flex items-center gap-3">
          <UserButton />
          <span className="text-xs text-white/60">Signed in</span>
        </div>
      </aside>

      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 max-w-4xl">{children}</main>
    </div>
  );
}
