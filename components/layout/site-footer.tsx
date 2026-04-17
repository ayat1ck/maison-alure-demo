import Link from "next/link";
import { Instagram, Music2, Users } from "lucide-react";

const footerLinks = [
  { href: "/about", label: "About Maison Alure" },
  { href: "/delivery-returns", label: "Delivery & Returns" },
  { href: "/faq", label: "FAQ" },
  { href: "/partnerships", label: "Partnerships" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/15 bg-[#0d0907]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl tracking-[0.08em] text-cream">MAISON ALURE</p>
          <p className="mt-2 text-sm text-beige">Curated luxury circularity.</p>
        </div>
        <div className="grid gap-2 text-sm text-beige">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-cream">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="text-sm text-beige">
          <p>New York City</p>
          <p className="mt-1">concierge@maisonalure.com</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold transition hover:bg-gold/10 hover:text-cream"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold transition hover:bg-gold/10 hover:text-cream"
            >
              <Music2 className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Referral"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold transition hover:bg-gold/10 hover:text-cream"
            >
              <Users className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
