import Link from "next/link";
import { membershipPlans } from "@/data/mock-data";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership tiers"
        title="Choose your rotation rhythm."
        description="Maison Alure offers three plans plus one-time rental alternatives for event-led access."
      />
      <section className="grid gap-5 py-10 md:grid-cols-3">
        {membershipPlans.map((plan) => (
          <article key={plan.id} className="rounded-3xl border border-gold/20 bg-[#14100d] p-6">
            <h2 className="font-display text-4xl text-cream">{plan.name}</h2>
            <p className="mt-3 font-body text-4xl font-semibold leading-none text-gold md:text-5xl">
              ${plan.monthlyPrice}
              <span className="ml-1 text-base font-normal text-beige">/mo</span>
            </p>
            <p className="mt-1 text-sm text-beige">{plan.rotations}</p>
            <p className="mt-2 text-sm text-beige">{plan.bestFor}</p>
            <ul className="mt-4 space-y-2 text-sm text-beige">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <Link href={`/membership/checkout?plan=${plan.id}`} className="mt-5 block">
              <Button className="w-full">Become a Member</Button>
            </Link>
          </article>
        ))}
      </section>
      <section className="rounded-3xl border border-gold/20 bg-[#15110d] p-6">
        <h3 className="font-display text-4xl text-cream">One-time rentals available</h3>
        <p className="mt-2 text-beige">Book by occasion and duration without monthly commitment.</p>
        <Link href="/one-time-rentals" className="mt-4 inline-block">
          <Button variant="secondary">Explore One-Time Rentals</Button>
        </Link>
      </section>
    </>
  );
}
