"use client";

import Link from "next/link";
import { rentalOrders } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { useFakeAuth } from "@/components/providers/fake-auth-provider";

const planLabelById: Record<string, string> = {
  signature: "Signature",
  atelier: "Atelier",
  maison: "Maison Privé"
};

export default function DashboardPage() {
  const { hydrated, user, subscription, logout } = useFakeAuth();
  const active = rentalOrders.find((entry) => entry.status === "Active");
  const membershipLabel = subscription ? planLabelById[subscription.planId] ?? "Active plan" : "Not active";

  if (!hydrated) {
    return <section className="py-10 text-beige">Loading account...</section>;
  }

  if (!user) {
    return (
      <section className="py-10">
        <h1 className="font-display text-6xl text-cream">Dashboard</h1>
        <p className="mt-3 text-beige">Please sign in to access your member dashboard.</p>
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
      <h1 className="font-display text-6xl text-cream">Dashboard</h1>
      <p className="mt-2 text-beige">Welcome back, {user.name}.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-3xl border border-gold/20 bg-[#15110d] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Active membership</p>
          <p className="mt-2 text-2xl text-cream">{membershipLabel}</p>
          {subscription ? (
            <p className="mt-1 text-sm text-beige">Next billing: {subscription.nextBillingDate}</p>
          ) : (
            <Link href="/membership" className="mt-2 inline-block text-sm text-gold">
              Choose a plan
            </Link>
          )}
        </article>
        <article className="rounded-3xl border border-gold/20 bg-[#15110d] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Upcoming delivery</p>
          <p className="mt-2 text-2xl text-cream">{active?.item}</p>
        </article>
        <article className="rounded-3xl border border-gold/20 bg-[#15110d] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Return reminder</p>
          <p className="mt-2 text-2xl text-cream">{active?.returnDate}</p>
        </article>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/account/rentals">
          <Button variant="secondary">View Active Rental</Button>
        </Link>
        <Button>Schedule Return</Button>
        <Button variant="ghost" onClick={logout}>
          Log out
        </Button>
      </div>
    </section>
  );
}
