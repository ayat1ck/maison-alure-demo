import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { ItemCard as ItemCardType } from "@/types";
import { Button } from "@/components/ui/button";

export function ItemCard({ item }: { item: ItemCardType }) {
  return (
    <article className="group overflow-hidden rounded-[1.7rem] border border-gold/20 bg-[#120e0b] transition hover:-translate-y-1 hover:border-gold/40">
      <div className="relative">
        <Image
          src={item.image}
          alt={item.name}
          width={1200}
          height={1200}
          quality={95}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-72 w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-cream">
          {item.authenticationStatus}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-3xl text-cream">{item.name}</h3>
        <p className="text-sm text-beige">
          {item.brand} · {item.category}
        </p>
        <p className="mt-2 text-sm text-beige">From ${item.rentalFrom} / day · Deposit ${item.deposit}</p>
        <p className="text-xs uppercase tracking-[0.2em] text-gold">{item.availability}</p>
        <div className="mt-4 flex items-center gap-2">
          <Link href={`/catalog/${item.id}`} className="flex-1">
            <Button className="w-full">View Item</Button>
          </Link>
          <Button variant="icon" className="h-11 w-11 p-0" aria-label="add to wishlist">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
