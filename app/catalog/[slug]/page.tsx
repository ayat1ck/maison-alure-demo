import Image from "next/image";
import { notFound } from "next/navigation";
import { featuredItems, trustPillars } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/field";

export function generateStaticParams() {
  return featuredItems.map((item) => ({ slug: item.id }));
}

export default async function ItemDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = featuredItems.find((entry) => entry.id === slug);
  if (!item) return notFound();

  return (
    <section className="grid gap-8 py-10 md:grid-cols-[1.05fr_0.95fr]">
      <article className="overflow-hidden rounded-3xl border border-gold/20">
        <Image
          src={item.image}
          alt={item.name}
          width={1800}
          height={1800}
          quality={95}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-[520px] w-full object-cover"
        />
      </article>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-gold">{item.brand}</p>
        <h1 className="mt-2 font-display text-6xl text-cream">{item.name}</h1>
        <p className="mt-3 text-beige">
          Category: {item.category} · Condition: {item.condition} · Authentication: {item.authenticationStatus}
        </p>
        <div className="mt-5 grid gap-3 rounded-3xl border border-gold/20 bg-[#14100d] p-5">
          <InputField label="Rental duration" placeholder="3 days / 7 days / 14 days" />
          <InputField label="Availability date" type="date" />
          <p className="text-sm text-beige">Deposit: ${item.deposit} · Starting from ${item.rentalFrom}/day</p>
          <div className="flex flex-wrap gap-2">
            <Button>Reserve Now</Button>
            <Button variant="secondary">Add to Wishlist</Button>
          </div>
        </div>
        <div className="mt-6 grid gap-2">
          {trustPillars.slice(0, 4).map((detail) => (
            <div key={detail} className="rounded-2xl border border-gold/20 bg-[#14100d] p-3 text-sm text-beige">
              {detail}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
