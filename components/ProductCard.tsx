import Link from "next/link";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.category_id}/${product.id}`}
      className="block bg-brand-cream border border-brand-cream-dark rounded hover:border-brand-gold transition-colors overflow-hidden"
    >
      <div className="aspect-square bg-brand-cream-dark flex items-center justify-center text-brand-black/40 text-sm">
        {product.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          "Photo coming soon"
        )}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-base mb-1">{product.name}</h3>
        {product.short_description && (
          <p className="text-sm text-brand-black/60 mb-2 line-clamp-2">{product.short_description}</p>
        )}
        <p className="text-brand-gold font-semibold text-sm">
          {product.price_kes ? `KSh ${product.price_kes.toLocaleString()}` : "Ask for price"}
        </p>
        {!product.in_stock && (
          <p className="text-xs text-red-600 mt-1">Currently out of stock</p>
        )}
      </div>
    </Link>
  );
}
