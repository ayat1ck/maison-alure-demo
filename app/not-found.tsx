import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <h1 className="font-display text-7xl text-cream">404</h1>
      <p className="mt-4 text-beige">The wardrobe page you requested does not exist.</p>
      <Link href="/" className="mt-6 inline-block">
        <Button>Back Home</Button>
      </Link>
    </section>
  );
}
