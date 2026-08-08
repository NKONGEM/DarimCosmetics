import Link from "next/link";
import type { Category } from "@/lib/data";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/shop/${category.id}`}
      className="group block bg-white border border-ink-100 rounded-md p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="font-serif text-2xl text-gold-600 mb-2">✧</div>
      <h3 className="font-serif text-lg text-brand-black mb-2">{category.name}</h3>
      {category.description && (
        <p className="text-sm text-ink-500 leading-relaxed mb-3">{category.description}</p>
      )}
      <span className="text-sm font-semibold text-brand-black group-hover:text-gold-600 transition-colors">
        Shop {category.name} →
      </span>
    </Link>
  );
}
