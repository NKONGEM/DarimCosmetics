/** Builds a wa.me link that opens WhatsApp with a pre-filled order message. */
export function buildWhatsAppOrderLink(whatsappNumber: string | null, productName: string): string {
  const number = (whatsappNumber || "").replace(/[^0-9]/g, "");
  const message = `Hi! I'd like to order: ${productName}`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppGeneralLink(whatsappNumber: string | null, message = "Hi! I have a question about your products."): string {
  const number = (whatsappNumber || "").replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
