"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/(site)/contact/actions";

const initialState = { ok: false, error: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="justify-self-start bg-brand-gold text-white text-xs uppercase tracking-widest font-semibold px-8 py-3 rounded hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.ok) {
    return (
      <p role="status" className="text-center text-brand-black bg-brand-cream-dark rounded p-6 max-w-xl mx-auto">
        Thank you — your message has been sent. We'll get back to you within one business day.
      </p>
    );
  }

  return (
    <form action={formAction} className="max-w-xl mx-auto grid gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
        <input id="name" name="name" type="text" required className="w-full border border-brand-cream-dark bg-brand-cream rounded px-3.5 py-3 text-sm" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
        <input id="email" name="email" type="email" required className="w-full border border-brand-cream-dark bg-brand-cream rounded px-3.5 py-3 text-sm" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number (optional)</label>
        <input id="phone" name="phone" type="tel" className="w-full border border-brand-cream-dark bg-brand-cream rounded px-3.5 py-3 text-sm" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
        <textarea id="message" name="message" required rows={5} className="w-full border border-brand-cream-dark bg-brand-cream rounded px-3.5 py-3 text-sm" />
      </div>
      {state.error && (
        <p role="alert" className="text-sm text-red-600">{state.error}</p>
      )}
      <SubmitButton />
    </form>
  );
}
