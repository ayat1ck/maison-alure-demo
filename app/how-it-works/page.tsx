import { ContentSection } from "@/components/shared/content-section";
import { PageHero } from "@/components/shared/page-hero";
import { brandAssets } from "@/data/mock-data";

const steps = [
  "Create profile",
  "Curate wardrobe and sizes",
  "Discover items and complete looks",
  "Get AI styling suggestions",
  "Reserve / borrow / rent",
  "Receive delivery",
  "Return / rotate / repeat"
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From wardrobe pain to curated rotation."
        description="A frictionless user journey designed for luxury access, not ownership overload."
        image={brandAssets.galleryB}
      />
      <ContentSection title="Step-by-step experience">
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step} className="rounded-3xl border border-gold/20 bg-[#16110e] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Step {index + 1}</p>
              <p className="mt-2 text-xl text-cream">{step}</p>
            </div>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
