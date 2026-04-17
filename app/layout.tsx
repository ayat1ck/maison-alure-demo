import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
});

export const metadata: Metadata = {
  title: "Maison Alure | Luxury Circular Wardrobe Platform",
  description:
    "Members-only platform for luxury rentals, wardrobe rotation, AI styling and trusted community access."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <SiteHeader />
        <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-4 md:px-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
