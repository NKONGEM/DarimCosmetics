import Link from "next/link";
import { getProducts, getMessages } from "@/lib/data";

export const dynamic = "force-dynamic";


export default async function AdminDashboardPage() {
  const [published, drafts, messages] = await Promise.all([
    getProducts({ status: "published" }),
    getProducts({ status: "draft" }),
    getMessages(),
  ]);
  const unread = messages.filter((m) => !m.is_read).length;

  const cards = [
    { label: "Published Products", value: published.length, href: "/admin/products" },
    { label: "Draft Products", value: drafts.length, href: "/admin/products" },
    { label: "Unread Messages", value: unread, href: "/admin/messages" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-serif mb-1">Welcome back</h1>
      <p className="text-brand-black/60 mb-8 text-sm">Here's what's happening on your website.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {cards.map((c) => (
          <Link key={c.label} href={c.href} className="bg-white border border-brand-cream-dark rounded p-6 hover:border-brand-gold">
            <div className="text-3xl font-serif text-brand-gold mb-1">{c.value}</div>
            <div className="text-sm text-brand-black/70">{c.label}</div>
          </Link>
        ))}
      </div>

      <div className="bg-white border border-brand-cream-dark rounded p-6">
        <h2 className="font-serif text-lg mb-3">Quick actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/products/new" className="bg-brand-gold text-white text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded hover:opacity-90">
            + Add a Product
          </Link>
          <Link href="/admin/pages/about" className="bg-brand-black text-white text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded hover:opacity-80">
            Edit About Page
          </Link>
          <Link href="/admin/settings" className="border border-brand-black text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded hover:bg-brand-black hover:text-white">
            Edit Contact Info
          </Link>
        </div>
      </div>
    </div>
  );
}
