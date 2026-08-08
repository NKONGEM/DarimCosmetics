import Link from "next/link";
import { getCategories, getSettings } from "@/lib/data";
import { buildWhatsAppGeneralLink } from "@/lib/whatsapp";

export default async function Header() {
  const [categories, settings] = await Promise.all([getCategories(), getSettings()]);

  return (
    <>
      {settings.announcement_text && (
        <div className="bg-brand-black text-brand-cream text-center text-xs tracking-wide py-2 px-4">
          {settings.announcement_text}
        </div>
      )}

      <header className="sticky top-0 z-50 bg-white border-b border-brand-cream-dark">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="font-serif text-2xl tracking-wide text-brand-black">
            DARIM <span className="text-brand-gold">LUXE</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-semibold">
            <Link href="/" className="hover:text-brand-gold">Home</Link>
            <Link href="/shop" className="hover:text-brand-gold">Shop</Link>
            {categories.slice(0, 4).map((c) => (
              <Link key={c.id} href={`/shop/${c.id}`} className="hover:text-brand-gold">
                {c.name}
              </Link>
            ))}
            <Link href="/about" className="hover:text-brand-gold">About</Link>
            <Link href="/contact" className="hover:text-brand-gold">Contact</Link>
          </nav>

          <a
            href={buildWhatsAppGeneralLink(settings.whatsapp_number)}
            className="shrink-0 inline-block bg-brand-black text-white text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded hover:bg-brand-gold transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </header>
    </>
  );
}
