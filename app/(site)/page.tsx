import Link from "next/link";
import { getCategories, getSettings } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [categories, settings] = await Promise.all([getCategories(), getSettings()]);

  return (
    <>
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-24 md:pb-16 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-[56px] leading-[1.05] text-brand-black mb-6">
          Luxury beauty, made for every Kenyan skin and hair story.
        </h1>
        <p className="text-ink-500 text-lg leading-relaxed max-w-xl mx-auto mb-8">
          {settings.business_name} brings you trusted skincare, haircare, makeup and body care — shop
          online with delivery across Kenya, or step into our Nairobi boutique for a hands-on
          consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-gold-500 text-brand-black text-sm font-semibold px-8 py-4 rounded shadow-sm hover:bg-gold-600 transition-colors"
          >
            Shop the Collection
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-ink-500 text-brand-black text-sm font-semibold px-8 py-4 rounded hover:bg-black/5 transition-colors"
          >
            Visit Our Boutique
          </Link>
        </div>
      </section>

      <div className="bg-brand-black text-gold-300 text-center text-xs tracking-[0.14em] uppercase py-3 px-4">
        ✦ This week&rsquo;s edit — up to 25% off selected skincare · Ends Sunday ✦
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-[32px] text-brand-black mb-3">Shop by category</h2>
          <p className="text-ink-500">
            Everything you need for a complete beauty routine, curated and quality-checked before it
            reaches you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-14 items-center">
        <div className="h-[420px] rounded-md bg-cream-200 flex items-center justify-center text-ink-300 text-xs tracking-wide">
          Consultation photo placeholder
        </div>
        <div>
          <h2 className="font-serif text-3xl md:text-[32px] text-brand-black mb-4">
            Not sure where to start?
          </h2>
          <p className="text-ink-500 leading-relaxed mb-7">
            Our in-house beauty advisors offer free consultations — online or in person at our Nairobi
            boutique — to help you build a routine that actually works for your skin, hair and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gold-500 text-brand-black text-sm font-semibold px-8 py-4 rounded shadow-sm hover:bg-gold-600 transition-colors"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <div className="bg-cream-200 py-10 px-6 text-center">
        <p className="text-ink-300 text-xs uppercase tracking-[0.14em] mb-5">
          Brands we&rsquo;re proud to stock
        </p>
        <div className="flex flex-wrap justify-center gap-9 text-sm text-ink-500">
          <span>Global Skincare Labels</span>
          <span>Korean Beauty Imports</span>
          <span>Kenyan-Made Naturals</span>
          <span>Professional Haircare Lines</span>
          <span>Derma-Grade Cosmetics</span>
        </div>
      </div>

      <section className="px-6 py-24 text-center">
        <h2 className="font-serif text-3xl md:text-[32px] text-brand-black mb-4">
          Two ways to shop with us
        </h2>
        <p className="text-ink-500 max-w-lg mx-auto mb-8 leading-relaxed">
          Order on WhatsApp for delivery anywhere in Kenya, or come see, touch and test products in
          person at our Nairobi store — our team is happy to help either way.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-gold-500 text-brand-black text-sm font-semibold px-8 py-4 rounded shadow-sm hover:bg-gold-600 transition-colors"
          >
            Shop Online
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-brand-black text-white text-sm font-semibold px-8 py-4 rounded hover:bg-ink-700 transition-colors"
          >
            Get Directions to Our Store
          </Link>
        </div>
      </section>
    </>
  );
}
