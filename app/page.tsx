import Link from "next/link";
import { brandAssets, featuredItems, membershipPlans, trustPillars } from "@/data/mock-data";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { ItemCard } from "@/components/shared/item-card";
import { ContentSection } from "@/components/shared/content-section";
import { MotionReveal } from "@/components/shared/motion-reveal";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Luxury circular wardrobe platform"
        title="Access over ownership."
        description="Maison Alure redefines luxury wear through curated rotation, AI styling, trusted community and concierge-level logistics."
        image={brandAssets.hero}
        actions={
          <>
            <Link href="/contact">
              <Button>Join Waitlist</Button>
            </Link>
            <Link href="/membership">
              <Button variant="secondary">Discover Membership</Button>
            </Link>
          </>
        }
      />

      <MotionReveal>
        <ContentSection
          title="Why Maison Alure"
          description="We solve the nothing-to-wear paradox by letting members rotate authenticated designer pieces without constant purchasing."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {["AI Styling Assistant", "Trusted community reputation", "Delivery, pickup, returns"].map((point) => (
              <article key={point} className="rounded-3xl border border-gold/20 bg-[#17110d] p-6">
                <h3 className="font-display text-3xl text-cream">{point}</h3>
              </article>
            ))}
          </div>
        </ContentSection>
      </MotionReveal>

      <MotionReveal>
        <ContentSection title="Featured luxury items">
          <div className="grid gap-5 md:grid-cols-3">
            {featuredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </ContentSection>
      </MotionReveal>

      <ContentSection title="Trust and authentication">
        <div className="grid gap-3 md:grid-cols-3">
          {trustPillars.map((pillar) => (
            <div key={pillar} className="rounded-2xl border border-gold/20 bg-[#14100d] p-4 text-sm text-beige">
              {pillar}
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Membership preview">
        <div className="grid gap-4 md:grid-cols-3">
          {membershipPlans.map((plan) => (
            <article key={plan.id} className="rounded-3xl border border-gold/20 bg-[#15100d] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{plan.name}</p>
              <p className="mt-2 font-body text-4xl font-semibold leading-none text-cream">
                ${plan.monthlyPrice}
              </p>
              <p className="mt-1 text-sm text-beige">{plan.rotations}</p>
              <Link href="/membership" className="mt-4 inline-block">
                <Button variant="secondary">Compare Plans</Button>
              </Link>
            </article>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
