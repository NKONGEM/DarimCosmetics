import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Darim Luxe Cosmetics",
    template: "%s | Darim Luxe Cosmetics",
  },
  description:
    "Skincare, haircare, makeup and body care in Kenya — shop online or visit our Nairobi boutique.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-sans bg-white text-brand-black antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}
