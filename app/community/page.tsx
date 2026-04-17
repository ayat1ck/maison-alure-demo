import { ContentSection } from "@/components/shared/content-section";
import { PageHero } from "@/components/shared/page-hero";

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community and reputation"
        title="Trusted members, verified profiles."
        description="Maison Alure blends peer-to-peer access with strict care standards and a reputation layer that protects quality."
      />
      <ContentSection title="Community principles">
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "Verified profiles and identity checks",
            "Trust score and care history",
            "Member code of item integrity",
            "Benefits for top-rated owners and renters"
          ].map((value) => (
            <div key={value} className="rounded-2xl border border-gold/20 bg-[#14100d] p-5 text-beige">
              {value}
            </div>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
