import type { Metadata } from "next";
import { getCategories, getProducts } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

export const dynamic = "force-dynamic";


export const metadata: Metadata = {
  title: "Shop All Categories",
  description: "Browse skincare, haircare, makeup and body care at Darim Luxe Cosmetics.",
};

export default async function ShopPage() {
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);

  return (
    <>
      <section className="px-6 py-16 text-center bg-brand-cream">
        <h1 className="text-3xl mb-3">Shop All Categories</h1>
        <p className="text-brand-black/60 max-w-lg mx-auto">
          Browse the full Darim Luxe range. Tap any product to order it on WhatsApp.
        </p>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>

        <h2 className="text-2xl text-center mb-8">All Products</h2>
        {products.length === 0 ? (
          <p className="text-center text-brand-black/60">No products published yet — check back soon.</p>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
