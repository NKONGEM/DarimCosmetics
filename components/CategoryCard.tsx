import Link from "next/link";
import type { Category } from "@/lib/data";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/shop/${category.id}`}
      className="block text-center bg-brand-cream border border-brand-cream-dark rounded p-10 hover:border-brand-gold hover:-translate-y-0.5 transition-all"
    >
      <div className="text-3xl mb-3 text-brand-gold">✧</div>
      <h3 className="font-serif text-lg mb-2">{category.name}</h3>
      {category.description && <p className="text-sm text-brand-black/60 mb-4">{category.description}</p>}
      <span className="text-xs uppercase tracking-widest font-semibold text-brand-gold">Shop now →</span>
    </Link>
  );
}
