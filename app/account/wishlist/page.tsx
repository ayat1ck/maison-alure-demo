import { featuredItems } from "@/data/mock-data";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  return (
    <section className="py-10">
      <h1 className="font-display text-6xl text-cream">Wishlist / Saved Looks</h1>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {featuredItems.map((item) => (
          <article key={item.id} className="rounded-2xl border border-gold/20 bg-[#15110d] p-4">
            <p className="text-cream">{item.name}</p>
            <p className="text-sm text-beige">{item.brand}</p>
            <div className="mt-3 flex gap-2">
              <Button variant="secondary">Move to Booking</Button>
              <Button variant="ghost">Remove</Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
