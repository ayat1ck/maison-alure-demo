import { PageHero } from "@/components/shared/page-hero";
import { InputField } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function OneTimeRentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Event rentals"
        title="Book designer pieces by occasion."
        description="Select event type, rental duration, delivery date and return schedule in a streamlined booking summary."
      />
      <section className="grid gap-6 py-10 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-gold/20 bg-[#15110d] p-6">
          <InputField label="Event type" placeholder="Gala, meeting, getaway..." />
          <InputField label="Rental duration" placeholder="3 days" />
          <InputField label="Delivery date" type="date" />
          <InputField label="Return date" type="date" />
          <Button className="w-full">Reserve Now</Button>
        </div>
        <div className="rounded-3xl border border-gold/20 bg-[#15110d] p-6">
          <h2 className="font-display text-4xl text-cream">Booking summary</h2>
          <p className="mt-4 text-beige">Selected item, logistics preferences, deposit estimate and return verification flow.</p>
          <div className="mt-6 rounded-2xl border border-gold/20 p-4 text-sm text-beige">
            Status: ready for checkout
          </div>
        </div>
      </section>
    </>
  );
}
