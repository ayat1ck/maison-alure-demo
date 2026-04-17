import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EmptyStatePage() {
  return (
    <section className="py-20 text-center">
      <h1 className="font-display text-6xl text-cream">Empty state</h1>
      <p className="mx-auto mt-4 max-w-xl text-beige">No saved looks yet. Browse wardrobe and start curating your next rotation.</p>
      <Link href="/catalog" className="mt-6 inline-block">
        <Button>Browse Wardrobe</Button>
      </Link>
    </section>
  );
}
