import { rentalOrders } from "@/data/mock-data";
import { Button } from "@/components/ui/button";

export default function RentalsPage() {
  return (
    <section className="py-10">
      <h1 className="font-display text-6xl text-cream">My Rentals / Orders</h1>
      <div className="mt-6 grid gap-3">
        {rentalOrders.map((order) => (
          <article key={order.id} className="rounded-2xl border border-gold/20 bg-[#15110d] p-4">
            <p className="text-cream">
              {order.id} · {order.item}
            </p>
            <p className="text-sm text-beige">
              {order.status} · Delivery {order.deliveryDate} · Return {order.returnDate}
            </p>
            <Button variant="ghost" className="mt-2">
              Track Status
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
