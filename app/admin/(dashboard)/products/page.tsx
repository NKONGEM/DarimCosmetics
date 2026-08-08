import Link from "next/link";
import { getProducts } from "@/lib/data";

export const dynamic = "force-dynamic";


export default async function AdminProductsPage() {
  const products = await getProducts({ status: "all" });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-serif">Products</h1>
        <Link href="/admin/products/new" className="bg-brand-gold text-white text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded hover:opacity-90">
          + Add a Product
        </Link>
      </div>

      {products.length === 0 ? (
        <p className="text-brand-black/60">No products yet. Add your first one to get started.</p>
      ) : (
        <div className="bg-white border border-brand-cream-dark rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-brand-cream-dark text-left">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t border-brand-cream-dark">
                  <td className="px-4 py-3 font-medium">{p.name}</td>
                  <td className="px-4 py-3 text-brand-black/60">{p.category_id}</td>
                  <td className="px-4 py-3">{p.price_kes ? `KSh ${p.price_kes.toLocaleString()}` : "Ask for price"}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded ${p.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{p.in_stock ? "In stock" : "Out of stock"}</td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/admin/products/${p.id}`} className="text-brand-gold hover:underline">Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
