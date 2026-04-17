import { featuredItems } from "@/data/mock-data";
import { InputField } from "@/components/ui/field";

export default function SearchPage() {
  return (
    <section className="py-10">
      <h1 className="font-display text-6xl text-cream">Search wardrobe</h1>
      <div className="mt-5 max-w-xl">
        <InputField label="Global search" placeholder="Search items, brands, looks..." />
      </div>
      <div className="mt-8 grid gap-3">
        {featuredItems.map((item) => (
          <article key={item.id} className="rounded-2xl border border-gold/20 bg-[#14100d] p-4">
            <p className="text-cream">{item.name}</p>
            <p className="text-sm text-beige">{item.brand}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
