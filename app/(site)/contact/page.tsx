import type { Metadata } from "next";
import { getPage, getSettings } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const dynamic = "force-dynamic";


export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("contact");
  return {
    title: page?.seo_title || "Contact & Visit Us",
    description: page?.seo_description || undefined,
  };
}

const faqs = [
  {
    q: "Will the product I receive match the photo online?",
    a: "Yes. We photograph every listing ourselves and keep our catalogue up to date. Minor colour differences can occur due to screen settings, but the product you receive will match what's shown as closely as possible.",
  },
  {
    q: "How do I place an order?",
    a: "Browse the shop, open the product you want, and tap “Order on WhatsApp.” A pre-written message opens with the product name — just send it and our team will confirm payment and delivery details with you directly.",
  },
  {
    q: "What are your delivery options?",
    a: "We offer same-day delivery within Nairobi for orders placed before 3:00 PM (Monday to Saturday), next-day delivery for later orders, and courier delivery to the rest of Kenya within 2–4 business days.",
  },
  {
    q: "Can I return or exchange a product?",
    a: "Yes, on eligible items within a set window of delivery. Message us on WhatsApp with your order details and we'll guide you through it.",
  },
  {
    q: "Do you restock sold-out items?",
    a: "Usually, yes. Message us on WhatsApp to ask about a specific product and we'll let you know when it's back.",
  },
];

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getPage("contact"), getSettings()]);

  return (
    <>
      <section className="px-6 py-16 text-center bg-brand-cream">
        <h1 className="text-3xl mb-3">{page?.title ?? "Visit Us or Get in Touch"}</h1>
        <p className="text-brand-black/60 max-w-lg mx-auto">
          Order on WhatsApp for delivery across Kenya, or come see us in person at our Nairobi boutique.
        </p>
      </section>

      <section className="px-6 py-16">
        <p className="text-center text-xs uppercase tracking-widest text-brand-gold mb-5">Our Store</p>
        <div className="max-w-xl mx-auto bg-white border border-brand-cream-dark rounded p-8">
          <h3 className="text-xs uppercase tracking-widest text-brand-gold mb-4">{settings.business_name}</h3>
          <p className="mb-2"><strong>Address:</strong> {settings.address}</p>
          {settings.phone && <p className="mb-2"><strong>Phone / WhatsApp:</strong> {settings.phone}</p>}
          {settings.email && <p className="mb-2"><strong>Email:</strong> {settings.email}</p>}
          {settings.hours && <p className="mb-2"><strong>Hours:</strong> {settings.hours}</p>}
          {settings.map_url && (
            <a href={settings.map_url} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 bg-brand-black text-white text-xs uppercase tracking-widest font-semibold px-6 py-2.5 rounded hover:opacity-80">
              Get Directions on Google Maps
            </a>
          )}
        </div>
      </section>

      <section className="px-6 py-16 bg-brand-cream">
        <h2 className="text-2xl text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto divide-y divide-brand-cream-dark">
          {faqs.map((f) => (
            <details key={f.q} className="py-4 group">
              <summary className="cursor-pointer font-semibold text-sm flex justify-between items-center list-none">
                {f.q}
                <span className="text-brand-gold text-lg group-open:hidden">+</span>
                <span className="text-brand-gold text-lg hidden group-open:inline">−</span>
              </summary>
              <p className="text-sm text-brand-black/70 mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <h2 className="text-2xl text-center mb-3">Send Us a Message</h2>
        <p className="text-center text-brand-black/60 max-w-md mx-auto mb-10">
          Questions about a product or an order? Fill in the form and we'll reply within one business day.
        </p>
        <ContactForm />
      </section>
    </>
  );
}
