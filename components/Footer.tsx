import Link from "next/link";
import { getSettings } from "@/lib/data";

export default async function Footer() {
  const settings = await getSettings();

  return (
    <footer className="border-t border-ink-100 bg-cream-100 pt-16 pb-8 px-6 md:px-10 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
        <div>
          <h4 className="font-serif text-lg text-brand-black mb-3">{settings.business_name}</h4>
          <p className="text-sm text-ink-500 leading-relaxed">
            Genuine, high-quality beauty products and honest expert advice — online and in person.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold text-brand-black mb-4">Shop</h4>
          <ul className="space-y-2.5 text-sm text-ink-500">
            <li><Link href="/shop" className="hover:text-gold-600 transition-colors">All Products</Link></li>
            <li><Link href="/shop/skincare" className="hover:text-gold-600 transition-colors">Skincare</Link></li>
            <li><Link href="/shop/haircare" className="hover:text-gold-600 transition-colors">Haircare</Link></li>
            <li><Link href="/shop/makeup" className="hover:text-gold-600 transition-colors">Makeup</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold text-brand-black mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-ink-500">
            <li><Link href="/about" className="hover:text-gold-600 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gold-600 transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest font-semibold text-brand-black mb-4">Visit Us</h4>
          <p className="text-sm text-ink-500 leading-relaxed">{settings.address}</p>
          {settings.phone && <p className="text-sm text-ink-500 mt-2">Tel: {settings.phone}</p>}
          {settings.hours && <p className="text-sm text-ink-500 mt-2">{settings.hours}</p>}
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-ink-100 pt-6 flex flex-wrap justify-between gap-2 text-xs text-ink-300">
        <span>© {new Date().getFullYear()} {settings.business_name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
