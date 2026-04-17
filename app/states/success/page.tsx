import { Button } from "@/components/ui/button";

export default function SuccessStatePage() {
  return (
    <section className="py-20 text-center">
      <h1 className="font-display text-6xl text-cream">Success state</h1>
      <p className="mx-auto mt-4 max-w-xl text-beige">Your booking is confirmed and concierge delivery has been scheduled.</p>
      <Button className="mt-6">View Active Rental</Button>
    </section>
  );
}
