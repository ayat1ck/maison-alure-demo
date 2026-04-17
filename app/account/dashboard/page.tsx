import Link from "next/link";
import { rentalOrders } from "@/data/mock-data";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const active = rentalOrders.find((entry) => entry.status === "Active");

  return (
    <section className="py-10">
      <h1 className="font-display text-6xl text-cream">Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-3xl border border-gold/20 bg-[#15110d] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Active membership</p>
          <p className="mt-2 text-2xl text-cream">Atelier</p>
        </article>
        <article className="rounded-3xl border border-gold/20 bg-[#15110d] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Upcoming delivery</p>
          <p className="mt-2 text-2xl text-cream">{active?.item}</p>
        </article>
        <article className="rounded-3xl border border-gold/20 bg-[#15110d] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Return reminder</p>
          <p className="mt-2 text-2xl text-cream">{active?.returnDate}</p>
        </article>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/account/rentals">
          <Button variant="secondary">View Active Rental</Button>
        </Link>
        <Button>Schedule Return</Button>
      </div>
    </section>
  );
}
