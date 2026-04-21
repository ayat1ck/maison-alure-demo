"use client";

import { useMemo, useState } from "react";
import { featuredItems } from "@/data/mock-data";
import { InputField } from "@/components/ui/field";
import { ItemCard } from "@/components/shared/item-card";

export default function SearchPage() {
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
    <section className="py-10">
      <h1 className="font-display text-6xl text-cream">Search wardrobe</h1>
      <div className="mt-5 max-w-xl">
        <InputField
          label="Global search"
          placeholder="Search items, brands, looks..."
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <p className="mt-4 text-sm text-beige">
        {filteredItems.length} {filteredItems.length === 1 ? "result" : "results"} found
      </p>
      {filteredItems.length > 0 ? (
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-gold/20 bg-[#14100d] p-6 text-beige">
          No wardrobe items match your search yet.
        </div>
      )}
    </section>
  );
}
