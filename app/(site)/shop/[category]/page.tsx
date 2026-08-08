import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategory, getProducts } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = await getCategory(categoryId);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description ?? `Shop ${category.name} at Darim Luxe Cosmetics.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categoryId } = await params;
  const category = await getCategory(categoryId);
  if (!category) notFound();

  const products = await getProducts({ categoryId: category.id });

  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl mb-2">{category.name}</h1>
        {category.description && <p className="text-brand-black/60 max-w-lg mx-auto">{category.description}</p>}
      </div>
      {products.length === 0 ? (
        <p className="text-center text-brand-black/60">No products in this category yet — check back soon.</p>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
