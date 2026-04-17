import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorStatePage() {
  return (
    <section className="py-20 text-center">
      <h1 className="font-display text-6xl text-cream">Error state</h1>
      <p className="mx-auto mt-4 max-w-xl text-beige">Something went wrong while processing your action. Please retry.</p>
      <Link href="/contact" className="mt-6 inline-block">
        <Button variant="secondary">Contact Us</Button>
      </Link>
    </section>
  );
}
