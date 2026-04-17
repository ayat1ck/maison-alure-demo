import { faqItems } from "@/data/mock-data";
import { PageHero } from "@/components/shared/page-hero";

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything about rentals, trust and returns."
        description="Quick answers for membership, deposits, logistics, authentication and AI styling."
      />
      <section className="space-y-3 py-10">
        {faqItems.map((item) => (
          <details key={item} className="rounded-2xl border border-gold/20 bg-[#14100d] p-4">
            <summary className="cursor-pointer text-cream">{item}</summary>
            <p className="mt-2 text-sm text-beige">
              Placeholder answer for frontend stage. Final business rules will be bound during backend integration.
            </p>
          </details>
        ))}
      </section>
    </>
  );
}
