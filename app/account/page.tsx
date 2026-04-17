import Link from "next/link";

const routes = [
  { href: "/account/dashboard", label: "Dashboard" },
  { href: "/account/wardrobe", label: "My Wardrobe" },
  { href: "/account/rentals", label: "My Rentals / Orders" },
  { href: "/account/wishlist", label: "Wishlist / Saved Looks" },
  { href: "/account/settings", label: "Profile Settings" }
];

export default function AccountIndexPage() {
  return (
    <section className="py-10">
      <h1 className="font-display text-6xl text-cream">Account Area</h1>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {routes.map((route) => (
          <Link key={route.href} href={route.href} className="rounded-2xl border border-gold/20 bg-[#14100d] p-5 text-beige transition hover:text-cream">
            {route.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
