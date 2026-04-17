import { featuredItems } from "@/data/mock-data";
import { PageHero } from "@/components/shared/page-hero";
import { ItemCard } from "@/components/shared/item-card";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/field";

export default function CatalogPage() {
  return (
    <>
      <PageHero
        eyebrow="Browse wardrobe"
        title="Curated luxury catalog."
        description="Filter by category, occasion, brand, size, color and availability. Save favorites to wishlist and reserve instantly."
      />
      <section className="py-8">
        <div className="grid gap-4 rounded-3xl border border-gold/20 bg-[#14100d] p-5 md:grid-cols-4">
          <InputField label="Search" placeholder="Brand, item, look..." />
          <InputField label="Category" placeholder="Bags, accessories..." />
          <InputField label="Occasion" placeholder="Gala, work, getaway" />
          <InputField label="Availability" placeholder="Available now" />
          <div className="md:col-span-4 flex flex-wrap gap-2">
            <Button variant="secondary">Clear all</Button>
            <Button variant="ghost">Grid view</Button>
            <Button variant="ghost">List view</Button>
            <Button variant="ghost">Sort by newest</Button>
          </div>
        </div>
      </section>
      <section className="grid gap-5 pb-10 md:grid-cols-3">
        {featuredItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
      <div className="pb-12 text-center">
        <Button variant="secondary">Load More</Button>
      </div>
    </>
  );
}
