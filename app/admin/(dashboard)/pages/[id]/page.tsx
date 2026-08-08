import { notFound } from "next/navigation";
import { getPage } from "@/lib/data";
import { savePage } from "../actions";

export const dynamic = "force-dynamic";


export default async function EditPagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await getPage(id);
  if (!page) notFound();

  const saveWithId = savePage.bind(null, page.id);

  return (
    <div>
      <h1 className="text-2xl font-serif mb-6">Edit: {page.title}</h1>
      <form action={saveWithId} className="bg-white border border-brand-cream-dark rounded p-6 grid gap-5">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">Page Title</label>
          <input id="title" name="title" defaultValue={page.title} required className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">Page Text</label>
          <p className="text-xs text-brand-black/50 mb-2">Leave a blank line between paragraphs.</p>
          <textarea id="content" name="content" rows={12} defaultValue={page.content ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
        </div>
        <details className="text-sm">
          <summary className="cursor-pointer font-medium">Search Engine (SEO) details — optional</summary>
          <div className="grid gap-4 mt-4">
            <div>
              <label htmlFor="seo_title" className="block text-sm font-medium mb-1">SEO Title</label>
              <input id="seo_title" name="seo_title" defaultValue={page.seo_title ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
            </div>
            <div>
              <label htmlFor="seo_description" className="block text-sm font-medium mb-1">SEO Description</label>
              <textarea id="seo_description" name="seo_description" rows={2} defaultValue={page.seo_description ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
            </div>
          </div>
        </details>
        <button type="submit" className="justify-self-start bg-brand-gold text-white text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded hover:opacity-90">
          Save Changes
        </button>
      </form>
    </div>
  );
}
