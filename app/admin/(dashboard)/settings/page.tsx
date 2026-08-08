import { getSettings } from "@/lib/data";
import { saveSettings } from "./actions";

export const dynamic = "force-dynamic";


export default async function AdminSettingsPage() {
  const settings = await getSettings();

  return (
    <div>
      <h1 className="text-2xl font-serif mb-1">Site Settings</h1>
      <p className="text-brand-black/60 text-sm mb-6">
        These details appear across the whole site — header, footer, and contact page.
      </p>
      <form action={saveSettings} className="bg-white border border-brand-cream-dark rounded p-6 grid gap-5 max-w-xl">
        <div>
          <label htmlFor="business_name" className="block text-sm font-medium mb-1">Business Name</label>
          <input id="business_name" name="business_name" defaultValue={settings.business_name} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
        </div>
        <div>
          <label htmlFor="announcement_text" className="block text-sm font-medium mb-1">Announcement Bar Text</label>
          <input id="announcement_text" name="announcement_text" defaultValue={settings.announcement_text ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
            <input id="phone" name="phone" defaultValue={settings.phone ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
          </div>
          <div>
            <label htmlFor="whatsapp_number" className="block text-sm font-medium mb-1">WhatsApp Number</label>
            <input id="whatsapp_number" name="whatsapp_number" defaultValue={settings.whatsapp_number ?? ""} placeholder="254700000000" className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
            <p className="text-xs text-brand-black/50 mt-1">Country code, no + or spaces.</p>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input id="email" name="email" type="email" defaultValue={settings.email ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">Shop Address</label>
          <input id="address" name="address" defaultValue={settings.address ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
        </div>
        <div>
          <label htmlFor="hours" className="block text-sm font-medium mb-1">Opening Hours</label>
          <input id="hours" name="hours" defaultValue={settings.hours ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
        </div>
        <div>
          <label htmlFor="map_url" className="block text-sm font-medium mb-1">Google Maps Link</label>
          <input id="map_url" name="map_url" type="url" defaultValue={settings.map_url ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="instagram_url" className="block text-sm font-medium mb-1">Instagram</label>
            <input id="instagram_url" name="instagram_url" type="url" defaultValue={settings.instagram_url ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
          </div>
          <div>
            <label htmlFor="facebook_url" className="block text-sm font-medium mb-1">Facebook</label>
            <input id="facebook_url" name="facebook_url" type="url" defaultValue={settings.facebook_url ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
          </div>
          <div>
            <label htmlFor="tiktok_url" className="block text-sm font-medium mb-1">TikTok</label>
            <input id="tiktok_url" name="tiktok_url" type="url" defaultValue={settings.tiktok_url ?? ""} className="w-full border border-brand-cream-dark rounded px-3.5 py-2.5 text-sm" />
          </div>
        </div>
        <button type="submit" className="justify-self-start bg-brand-gold text-white text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded hover:opacity-90">
          Save Settings
        </button>
      </form>
    </div>
  );
}
