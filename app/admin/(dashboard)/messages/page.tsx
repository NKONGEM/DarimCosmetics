import { getMessages } from "@/lib/data";
import { markRead } from "./actions";

export const dynamic = "force-dynamic";


export default async function AdminMessagesPage() {
  const messages = await getMessages();

  return (
    <div>
      <h1 className="text-2xl font-serif mb-6">Messages from Visitors</h1>
      {messages.length === 0 ? (
        <p className="text-brand-black/60">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((m) => {
            const markReadWithId = markRead.bind(null, m.id);
            return (
              <div key={m.id} className={`bg-white border rounded p-5 ${m.is_read ? "border-brand-cream-dark" : "border-brand-gold"}`}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="font-semibold">{m.name} {!m.is_read && <span className="ml-2 text-xs uppercase tracking-widest text-brand-gold">New</span>}</p>
                    <p className="text-xs text-brand-black/50">{m.email}{m.phone ? ` · ${m.phone}` : ""} · {new Date(m.created_at).toLocaleString()}</p>
                  </div>
                  {!m.is_read && (
                    <form action={markReadWithId}>
                      <button type="submit" className="text-xs uppercase tracking-widest font-semibold text-brand-gold hover:underline">
                        Mark as read
                      </button>
                    </form>
                  )}
                </div>
                <p className="text-sm text-brand-black/80">{m.message}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
