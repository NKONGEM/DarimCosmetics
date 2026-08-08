import type { Category, Product } from "@/lib/data";
import { saveProduct, deleteProduct } from "@/app/admin/(dashboard)/products/actions";
import DeleteButton from "./DeleteButton";

export default function ProductForm({
  categories,
  product,
}: {
  categories: Category[];
  product?: Product;
}) {
  const saveWithId = saveProduct.bind(null, product?.id ?? null);
  const deleteWithId = product ? deleteProduct.bind(null, product.id) : null;

  return (
    <div className="space-y-8">
      <form action={saveWithId} className="bg-white border border-brand-cream-dark rounded p-6 grid gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Product Name</label>
          <input id="name" name="name" defaultValue={product?.name} required className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category_id" className="block text-sm font-medium mb-1">Category</label>
            <select id="category_id" name="category_id" defaultValue={product?.category_id ?? categories[0]?.id} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm">
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="price_kes" className="block text-sm font-medium mb-1">Price (KSh) — leave blank for "Ask for price"</label>
            <input id="price_kes" name="price_kes" type="number" min="0" defaultValue={product?.price_kes ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
          </div>
        </div>

        <div>
          <label htmlFor="short_description" className="block text-sm font-medium mb-1">Short Description (shown on product cards)</label>
          <input id="short_description" name="short_description" defaultValue={product?.short_description ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">Full Description</label>
          <textarea id="description" name="description" rows={5} defaultValue={product?.description ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
        </div>

        <div>
          <label htmlFor="image_url" className="block text-sm font-medium mb-1">Photo URL</label>
          <input id="image_url" name="image_url" type="url" placeholder="https://…" defaultValue={product?.image_url ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
          <p className="text-xs text-brand-black/50 mt-1">Paste a link to the product photo. Ask your developer about connecting direct photo uploads if you'd like to skip this step.</p>
        </div>

        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="in_stock" defaultChecked={product ? !!product.in_stock : true} />
            In stock
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="featured" defaultChecked={!!product?.featured} />
            Feature on homepage
          </label>
          <div className="flex items-center gap-2 text-sm">
            <label htmlFor="status">Status:</label>
            <select id="status" name="status" defaultValue={product?.status ?? "draft"} className="border border-brand-cream-dark rounded px-2 py-1.5 text-sm">
              <option value="draft">Draft (hidden from visitors)</option>
              <option value="published">Published (visible on the site)</option>
            </select>
          </div>
        </div>

        <details className="text-sm">
          <summary className="cursor-pointer font-medium">Search Engine (SEO) details — optional</summary>
          <div className="grid gap-4 mt-4">
            <div>
              <label htmlFor="seo_title" className="block text-sm font-medium mb-1">SEO Title</label>
              <input id="seo_title" name="seo_title" defaultValue={product?.seo_title ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
            </div>
            <div>
              <label htmlFor="seo_description" className="block text-sm font-medium mb-1">SEO Description</label>
              <textarea id="seo_description" name="seo_description" rows={2} defaultValue={product?.seo_description ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
            </div>
          </div>
        </details>

        <div className="flex items-center justify-between pt-2">
          <button type="submit" className="bg-brand-gold text-white text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded hover:opacity-90">
            Save Product
          </button>
        </div>
      </form>

      {deleteWithId && (
        <form action={deleteWithId} className="text-right">
          <DeleteButton label="Delete this product" />
        </form>
      )}
    </div>
  );
}
