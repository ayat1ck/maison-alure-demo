import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { InputField } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { featuredItems } from "@/data/mock-data";

export default function AiStylingPage() {
  return (
    <>
      <PageHero
        eyebrow="AI styling assistant"
        title="Looks for gala, meeting, getaway."
        description="Upload wardrobe references, answer style questions and get complete look suggestions with accessories."
      />
      <section className="grid gap-6 py-10 md:grid-cols-2">
        <form className="space-y-4 rounded-3xl border border-gold/20 bg-[#15100d] p-6">
          <InputField label="Occasion" placeholder="Gala / Meeting / Getaway" />
          <InputField label="Mood" placeholder="Minimal, editorial, statement..." />
          <InputField label="Preferred silhouette" placeholder="Structured / relaxed / feminine" />
          <Button className="w-full">Get Styling Suggestions</Button>
          <Button variant="secondary" className="w-full">
            Upload Your Wardrobe
          </Button>
        </form>
        <div className="grid gap-4">
          {featuredItems.map((item) => (
            <article key={item.id} className="rounded-2xl border border-gold/20 bg-[#15100d] p-4">
              <p className="font-display text-3xl text-cream">{item.name}</p>
              <p className="text-sm text-beige">Recommended as complete-the-look option.</p>
              <Link href={`/catalog/${item.id}`} className="mt-2 inline-block">
                <Button variant="ghost">Complete the Look</Button>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
