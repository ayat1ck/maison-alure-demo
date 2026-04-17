import { brandAssets } from "@/data/mock-data";
import { PageHero } from "@/components/shared/page-hero";
import { ContentSection } from "@/components/shared/content-section";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand philosophy"
        title="Curated, elegant, trusted."
        description="Maison Alure blends feminine power with intelligent luxury access: fewer purchases, smarter rotation, stronger style identity."
        image={brandAssets.galleryA}
      />
      <ContentSection title="What makes us different">
        <ul className="grid gap-3 text-beige md:grid-cols-2">
          <li className="rounded-2xl border border-gold/20 p-4">Access over ownership</li>
          <li className="rounded-2xl border border-gold/20 p-4">Luxury without overconsumption</li>
          <li className="rounded-2xl border border-gold/20 p-4">AI-led outfit composition</li>
          <li className="rounded-2xl border border-gold/20 p-4">Trusted community and authentication layer</li>
        </ul>
      </ContentSection>
    </>
  );
}
