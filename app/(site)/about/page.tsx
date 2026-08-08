import type { Metadata } from "next";
import Link from "next/link";
import { getPage } from "@/lib/data";

export const dynamic = "force-dynamic";


export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("about");
  return {
    title: page?.seo_title || page?.title || "About Us",
    description: page?.seo_description || undefined,
  };
}

export default async function AboutPage() {
  const page = await getPage("about");

  return (
    <>
      <section className="px-6 py-16 text-center bg-brand-cream">
        <h1 className="text-3xl">{page?.title ?? "About Us"}</h1>
      </section>
      <section className="px-6 py-16 max-w-3xl mx-auto">
        {(page?.content ?? "").split("\n\n").filter(Boolean).map((para, i) => (
          <p key={i} className="mb-5 leading-relaxed text-brand-black/85">
            {para}
          </p>
        ))}
      </section>
      <section className="px-6 py-16 text-center">
        <h2 className="text-2xl mb-6">Come say hello</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/shop" className="bg-brand-gold text-white text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded hover:opacity-90">
            Shop Online
          </Link>
          <Link href="/contact" className="bg-brand-black text-white text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded hover:opacity-80">
            Find Our Store
          </Link>
        </div>
      </section>
    </>
  );
}
