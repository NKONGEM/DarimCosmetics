import { getCategories } from "@/lib/data";
import ProductForm from "@/components/admin/ProductForm";

export const dynamic = "force-dynamic";


export default async function NewProductPage() {
  const categories = await getCategories();
  return (
    <div>
      <h1 className="text-2xl font-serif mb-6">Add a Product</h1>
      <ProductForm categories={categories} />
    </div>
  );
}
