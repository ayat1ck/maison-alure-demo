"use client";

import { useMemo, useState } from "react";
import { featuredItems } from "@/data/mock-data";
import { PageHero } from "@/components/shared/page-hero";
import { ItemCard } from "@/components/shared/item-card";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/field";

export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredItems = useMemo(() => {
    if (!normalizedQuery) return featuredItems;

    return featuredItems.filter((item) =>
      [item.name, item.brand, item.category].some((value) =>
        value.toLowerCase().includes(normalizedQuery)
      )
    );
  }, [normalizedQuery]);

  return (
    <>
      <PageHero
        eyebrow="Browse wardrobe"
        title="Curated luxury catalog."
        description="Filter by category, occasion, brand, size, color and availability. Save favorites to wishlist and reserve instantly."
      />
      <section className="py-8">
        <div className="grid gap-4 rounded-3xl border border-gold/20 bg-[#14100d] p-5 md:grid-cols-4">
          <InputField
            label="Search"
            placeholder="Brand, item, look..."
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <InputField label="Category" placeholder="Bags, accessories..." />
          <InputField label="Occasion" placeholder="Gala, work, getaway" />
          <InputField label="Availability" placeholder="Available now" />
          <div className="md:col-span-4 flex flex-wrap gap-2">
            <Button variant="secondary" onClick={() => setQuery("")}>
              Clear all
            </Button>
            <Button variant="ghost">Grid view</Button>
            <Button variant="ghost">List view</Button>
            <Button variant="ghost">Sort by newest</Button>
          </div>
        </div>
      </section>
      <p className="pb-5 text-sm text-beige">
        {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"} found
      </p>
      {filteredItems.length > 0 ? (
        <section className="grid gap-5 pb-10 md:grid-cols-3">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </section>
      ) : (
        <section className="mb-10 rounded-2xl border border-gold/20 bg-[#14100d] p-6 text-beige">
          No wardrobe items match your search yet.
        </section>
      )}
      <div className="pb-12 text-center">
        <Button variant="secondary">Load More</Button>
      </div>
    </>
  );
}
