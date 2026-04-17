import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="For brands, creators, stylists and events."
        description="Maison Alure welcomes selective B2B collaborations for premium experiences and community expansion."
      />
      <section className="grid gap-4 py-10 md:grid-cols-2">
        {["For brands", "For creators", "For stylists", "For event partners"].map((block) => (
          <article key={block} className="rounded-2xl border border-gold/20 bg-[#14100d] p-6">
            <h2 className="font-display text-4xl text-cream">{block}</h2>
            <p className="mt-2 text-sm text-beige">Strategic collaborations, curated capsule access, and audience-focused campaigns.</p>
            <Button variant="secondary" className="mt-4">
              Apply for Partnership
            </Button>
          </article>
        ))}
      </section>
    </>
  );
}
