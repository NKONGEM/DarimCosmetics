import Link from "next/link";
import { getCategories, getSettings } from "@/lib/data";
import { buildWhatsAppGeneralLink } from "@/lib/whatsapp";

export default async function Header() {
  const [categories, settings] = await Promise.all([getCategories(), getSettings()]);

  return (
    <>
      {settings.announcement_text && (
        <div className="bg-brand-black text-cream-100 text-center text-xs tracking-wide py-2.5 px-4 font-sans">
          {settings.announcement_text}
          {"  ·  "}
          <Link href="/contact" className="text-gold-300 hover:text-gold-500 underline underline-offset-2">
            Book a free beauty consultation
          </Link>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-cream-100/95 backdrop-blur border-b border-ink-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 px-6 md:px-10 py-5">
          <Link href="/" className="font-serif text-2xl md:text-[26px] tracking-tight text-brand-black shrink-0">
            Darim Luxe
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-7 text-sm font-sans"
          >
            <Link href="/" className="font-semibold text-brand-black">
              Home
            </Link>
            <Link href="/shop" className="text-ink-500 hover:text-brand-black transition-colors">
              Shop
            </Link>
            {categories.slice(0, 3).map((c) => (
              <Link
                key={c.id}
                href={`/shop/${c.id}`}
                className="text-ink-500 hover:text-brand-black transition-colors"
              >
                {c.name}
              </Link>
            ))}
            <Link href="/contact" className="text-ink-500 hover:text-brand-black transition-colors">
              Consultations
            </Link>
            <Link href="/about" className="text-ink-500 hover:text-brand-black transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-ink-500 hover:text-brand-black transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            {settings.phone && (
              <span className="hidden lg:inline text-sm text-ink-500 font-sans">{settings.phone}</span>
            )}
            <a
              href={buildWhatsAppGeneralLink(settings.whatsapp_number)}
              className="inline-flex items-center bg-brand-black text-white text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded hover:bg-gold-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
