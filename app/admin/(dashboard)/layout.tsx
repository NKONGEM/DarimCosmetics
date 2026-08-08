import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export const dynamic = "force-dynamic";


const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/pages", label: "Pages" },
  { href: "/admin/messages", label: "Messages" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-brand-cream">
      <aside className="w-56 shrink-0 bg-brand-black text-white flex flex-col">
        <div className="px-5 py-6 font-serif text-lg tracking-wide">
          DARIM <span className="text-brand-gold">LUXE</span>
          <div className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Admin Dashboard</div>
        </div>
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
      <main className="flex-1 p-8 max-w-4xl">{children}</main>
    </div>
  );
}
