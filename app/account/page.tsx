"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useFakeAuth } from "@/components/providers/fake-auth-provider";

const routes = [
  { href: "/account/dashboard", label: "Dashboard" },
  { href: "/account/wardrobe", label: "My Wardrobe" },
  { href: "/account/rentals", label: "My Rentals / Orders" },
  { href: "/account/wishlist", label: "Wishlist / Saved Looks" },
  { href: "/account/settings", label: "Profile Settings" }
];

export default function AccountIndexPage() {
  const { hydrated, user, subscription, logout } = useFakeAuth();

  if (!hydrated) {
    return <section className="py-10 text-beige">Loading account...</section>;
  }

  if (!user) {
    return (
      <section className="py-10">
        <h1 className="font-display text-6xl text-cream">Account Area</h1>
        <p className="mt-3 text-beige">Sign in to manage your profile, rentals and subscription.</p>
        <div className="mt-5 flex gap-3">
          <Link href="/login">
            <Button>Sign in</Button>
          </Link>
          <Link href="/signup">
            <Button variant="secondary">Create account</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <h1 className="font-display text-6xl text-cream">Account Area</h1>
      <p className="mt-2 text-beige">
        Signed in as {user.email} · Subscription: {subscription?.status === "active" ? "active" : "inactive"}
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {routes.map((route) => (
          <Link key={route.href} href={route.href} className="rounded-2xl border border-gold/20 bg-[#14100d] p-5 text-beige transition hover:text-cream">
            {route.label}
          </Link>
        ))}
      </div>
      <Button variant="ghost" className="mt-5" onClick={logout}>
        Log out
      </Button>
    </section>
  );
}
