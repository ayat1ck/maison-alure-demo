"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { featuredItems } from "@/data/mock-data";
import { PageHero } from "@/components/shared/page-hero";
import { ItemCard } from "@/components/shared/item-card";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/field";

type CatalogView = "grid" | "list";
type SortMode = "newest" | "price-low" | "price-high";

export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<CatalogView>("grid");
  const [sortMode, setSortMode] = useState<SortMode>("newest");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredItems = useMemo(() => {
    const matches = normalizedQuery
      ? featuredItems.filter((item) =>
          [item.name, item.brand, item.category].some((value) =>
            value.toLowerCase().includes(normalizedQuery)
          )
        )
      : [...featuredItems];

    return matches.sort((a, b) => {
      if (sortMode === "price-low") return a.rentalFrom - b.rentalFrom;
      if (sortMode === "price-high") return b.rentalFrom - a.rentalFrom;
      return featuredItems.findIndex((item) => item.id === a.id) - featuredItems.findIndex((item) => item.id === b.id);
    });
  }, [normalizedQuery, sortMode]);

  const nextSortMode: Record<SortMode, SortMode> = {
    newest: "price-low",
    "price-low": "price-high",
    "price-high": "newest"
  };

  const sortLabel: Record<SortMode, string> = {
    newest: "Sort by newest",
    "price-low": "Price: low to high",
    "price-high": "Price: high to low"
  };

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
            <Button variant="secondary" onClick={() => setQuery("")} type="button">
              Clear all
            </Button>
            <Button
              variant={view === "grid" ? "secondary" : "ghost"}
              onClick={() => setView("grid")}
              type="button"
              aria-pressed={view === "grid"}
            >
              Grid view
            </Button>
            <Button
              variant={view === "list" ? "secondary" : "ghost"}
              onClick={() => setView("list")}
              type="button"
              aria-pressed={view === "list"}
            >
              List view
            </Button>
            <Button
              variant="ghost"
              onClick={() => setSortMode((current) => nextSortMode[current])}
              type="button"
            >
              {sortLabel[sortMode]}
            </Button>
          </div>
        </div>
      </section>
      <p className="pb-5 text-sm text-beige">
        {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"} found
      </p>
      {filteredItems.length > 0 ? (
        view === "grid" ? (
          <section className="grid gap-5 pb-10 md:grid-cols-3">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </section>
        ) : (
          <section className="grid gap-4 pb-10">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="grid gap-4 rounded-[1.4rem] border border-gold/20 bg-[#120e0b] p-4 md:grid-cols-[180px_1fr_auto] md:items-center"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={360}
                  height={260}
                  className="h-40 w-full rounded-[1rem] object-cover md:h-32"
                />
                <div>
                  <h3 className="font-display text-3xl text-cream">{item.name}</h3>
                  <p className="text-sm text-beige">
                    {item.brand} · {item.category} · {item.color} · {item.size}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold">
                    {item.authenticationStatus} · {item.availability}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm text-beige">From ${item.rentalFrom} / day</p>
                  <p className="text-sm text-beige">Deposit ${item.deposit}</p>
                </div>
              </article>
            ))}
          </section>
        )
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
