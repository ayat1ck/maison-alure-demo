import { ContentSection } from "@/components/shared/content-section";
import { PageHero } from "@/components/shared/page-hero";
import { brandAssets, trustPillars } from "@/data/mock-data";

export default function TrustPage() {
  return (
    <>
      <PageHero
        eyebrow="Why trust Maison Alure"
        title="Authentication is product infrastructure."
        description="Every item goes through two-sided verification, deposit protection, condition controls and digital identity checkpoints."
        image={brandAssets.galleryA}
      />
      <ContentSection title="Trust architecture">
        <div className="grid gap-4 md:grid-cols-2">
          {trustPillars.map((pillar) => (
            <div key={pillar} className="rounded-2xl border border-gold/20 bg-[#16110d] p-6 text-beige">
              {pillar}
            </div>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
