import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const siteDescription =
  "Skincare, haircare, makeup and body care in Kenya — shop online or visit our Nairobi boutique.";

export const metadata: Metadata = {
  metadataBase: new URL("https://darimcosmetics.co.ke"),
  title: {
    default: "Darim Luxe Cosmetics",
    template: "%s | Darim Luxe Cosmetics",
  },
  description: siteDescription,
  openGraph: {
    title: "Darim Luxe Cosmetics",
    description: siteDescription,
    siteName: "Darim Luxe Cosmetics",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darim Luxe Cosmetics",
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#181310",
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
