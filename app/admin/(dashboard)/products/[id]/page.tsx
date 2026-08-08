import { notFound } from "next/navigation";
import { getCategories, getProduct } from "@/lib/data";
import ProductForm from "@/components/admin/ProductForm";

export const dynamic = "force-dynamic";


export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [categories, product] = await Promise.all([getCategories(), getProduct(id)]);
  if (!product) notFound();

  return (
    <div>
      <h1 className="text-2xl font-serif mb-6">Edit Product</h1>
      <ProductForm categories={categories} product={product} />
    </div>
  );
}
