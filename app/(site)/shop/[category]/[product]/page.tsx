import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, getSettings } from "@/lib/data";
import { buildWhatsAppOrderLink } from "@/lib/whatsapp";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ category: string; product: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: productId } = await params;
  const product = await getProduct(productId);
  if (!product) return {};
  return {
    title: product.seo_title || product.name,
    description: product.seo_description || product.short_description || undefined,
  };
}

export default async function ProductPage({ params }: Props) {
  const { product: productId } = await params;
  const [product, settings] = await Promise.all([getProduct(productId), getSettings()]);
  if (!product || product.status !== "published") notFound();

  const orderLink = buildWhatsAppOrderLink(settings.whatsapp_number, product.name);

  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square bg-brand-cream-dark rounded flex items-center justify-center text-brand-black/40">
          {product.image_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={product.image_url} alt={product.name} className="w-full h-full object-cover rounded" />
          ) : (
            "Photo coming soon"
          )}
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-brand-gold mb-3">
            <Link href={`/shop/${product.category_id}`} className="hover:underline">
              ← Back to category
            </Link>
          </p>
          <h1 className="text-3xl mb-3">{product.name}</h1>
          <p className="text-brand-gold text-xl font-semibold mb-5">
            {product.price_kes ? `KSh ${product.price_kes.toLocaleString()}` : "Ask for price"}
          </p>
          {!product.in_stock && (
            <p className="text-sm text-red-600 mb-4">Currently out of stock — message us for restock updates.</p>
          )}
          {product.description && <p className="text-brand-black/80 mb-8 leading-relaxed">{product.description}</p>}
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-white text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded hover:opacity-90"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
