import { Button } from "@/components/ui/button";
import { InputField, TextareaField } from "@/components/ui/field";
import { featuredItems } from "@/data/mock-data";

export default function MyWardrobePage() {
  return (
    <section className="py-10">
      <h1 className="font-display text-6xl text-cream">My Wardrobe</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          {featuredItems.map((item) => (
            <article key={item.id} className="rounded-2xl border border-gold/20 bg-[#15110d] p-4">
              <p className="text-cream">{item.name}</p>
              <p className="text-sm text-beige">Status: listed · Earnings preview: ${item.rentalFrom * 4}/month</p>
            </article>
          ))}
        </div>
        <form className="grid gap-3 rounded-3xl border border-gold/20 bg-[#15110d] p-5">
          <h2 className="font-display text-4xl text-cream">Add New Item</h2>
          <InputField label="Item title" />
          <InputField label="Brand" />
          <InputField label="Category" />
          <InputField label="Size" />
          <InputField label="Condition" />
          <InputField label="Authenticity details" />
          <InputField label="Estimated deposit" />
          <InputField label="Availability" />
          <TextareaField label="Description" rows={3} />
          <Button>Add New Item</Button>
        </form>
      </div>
    </section>
  );
}
