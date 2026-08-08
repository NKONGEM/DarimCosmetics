import Link from "next/link";

export const dynamic = "force-dynamic";


const editablePages = [
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact & Visit Us" },
];

export default function AdminPagesList() {
  return (
    <div>
      <h1 className="text-2xl font-serif mb-6">Pages</h1>
      <div className="bg-white border border-brand-cream-dark rounded divide-y divide-brand-cream-dark">
        {editablePages.map((p) => (
          <Link key={p.id} href={`/admin/pages/${p.id}`} className="flex items-center justify-between px-5 py-4 hover:bg-brand-cream">
            <span>{p.label}</span>
            <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold">Edit →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
