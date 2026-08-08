import Link from "next/link";
import { getCategories, getProducts, getSettings } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

export const dynamic = "force-dynamic";


export default async function HomePage() {
  const [categories, featured, settings] = await Promise.all([
    getCategories(),
    getProducts({ featuredOnly: true }),
    getSettings(),
  ]);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-black via-brand-charcoal to-[#3a2e22] text-white text-center px-6 py-24">
        <h1 className="font-serif text-4xl md:text-5xl max-w-2xl mx-auto mb-5">
          Luxury beauty, made for every Kenyan skin and hair story.
        </h1>
        <p className="text-brand-gold-light max-w-xl mx-auto mb-8">
          {settings.business_name} brings you trusted skincare, haircare, makeup and body care —
          browse online and order on WhatsApp, or visit our Nairobi boutique in person.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/shop" className="bg-brand-gold text-white text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded hover:opacity-90">
            Shop the Collection
          </Link>
          <Link href="/contact" className="border border-white text-white text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded hover:bg-white hover:text-brand-black">
            Visit Our Boutique
          </Link>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="text-center mb-11">
          <h2 className="text-3xl mb-2">Shop by Category</h2>
          <p className="text-brand-black/60 max-w-lg mx-auto">
            Everything you need for a complete beauty routine, curated and quality-checked before it reaches you.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>

      {featured.length > 0 && (
        <section className="px-6 py-16 bg-brand-cream">
          <div className="text-center mb-11">
            <h2 className="text-3xl mb-2">This Week's Edit</h2>
            <p className="text-brand-black/60">Customer favourites, picked by our team.</p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl mb-3">Two ways to shop with us</h2>
        <p className="text-brand-black/60 max-w-lg mx-auto mb-8">
          Order on WhatsApp for delivery anywhere in Kenya, or come see, touch and test products in
          person at our Nairobi store.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/shop" className="bg-brand-gold text-white text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded hover:opacity-90">
            Shop Online
          </Link>
          <Link href="/contact" className="bg-brand-black text-white text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded hover:opacity-80">
            Get Directions
          </Link>
        </div>
      </section>
    </>
  );
}
