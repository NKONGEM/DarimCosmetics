import Link from "next/link";
import { getSettings } from "@/lib/data";

export default async function Footer() {
  const settings = await getSettings();

  return (
    <footer className="bg-brand-black text-[#cfc4b6] pt-14 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <div>
          <h4 className="text-white text-xs uppercase tracking-widest mb-4">{settings.business_name}</h4>
          <p className="text-sm text-[#b3a795]">
            Genuine, high-quality beauty products and honest expert advice — online and in person.
          </p>
        </div>
        <div>
          <h4 className="text-white text-xs uppercase tracking-widest mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-brand-gold">All Products</Link></li>
            <li><Link href="/shop/skincare" className="hover:text-brand-gold">Skincare</Link></li>
            <li><Link href="/shop/haircare" className="hover:text-brand-gold">Haircare</Link></li>
            <li><Link href="/shop/makeup" className="hover:text-brand-gold">Makeup</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-xs uppercase tracking-widest mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-brand-gold">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-brand-gold">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-xs uppercase tracking-widest mb-4">Visit Us</h4>
          <p className="text-sm">{settings.address}</p>
          {settings.phone && <p className="text-sm mt-2">Tel: {settings.phone}</p>}
          {settings.hours && <p className="text-sm mt-2">{settings.hours}</p>}
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-[#3a3128] pt-5 flex flex-wrap justify-between gap-2 text-xs text-[#9c9080]">
        <span>© {new Date().getFullYear()} {settings.business_name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
