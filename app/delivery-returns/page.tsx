import { PageHero } from "@/components/shared/page-hero";
import { ContentSection } from "@/components/shared/content-section";

export default function DeliveryReturnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Delivery and returns"
        title="Concierge logistics from door to wardrobe."
        description="Home delivery, pickup, scheduled returns, reusable packaging and centralized cleaning."
      />
      <ContentSection title="Service layers">
        <ul className="grid gap-3 md:grid-cols-2">
          {[
            "Same-day NYC delivery windows",
            "Scheduled pickup and return reminders",
            "Reusable premium packaging",
            "Centralized cleaning with quality control",
            "Return verification badge flow",
            "FAQ and concierge support"
          ].map((item) => (
            <li key={item} className="rounded-2xl border border-gold/20 bg-[#15110d] p-4 text-beige">
              {item}
            </li>
          ))}
        </ul>
      </ContentSection>
    </>
  );
}
