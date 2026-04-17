import { InputField } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function OnboardingPage() {
  return (
    <section className="py-12">
      <h1 className="font-display text-6xl text-cream">Style onboarding</h1>
      <form className="mt-6 grid gap-4 rounded-3xl border border-gold/20 bg-[#15110d] p-6 md:grid-cols-2">
        <InputField label="Preferred categories" placeholder="Bags, occasionwear..." />
        <InputField label="Sizes" placeholder="Tops S, Shoes 38..." />
        <InputField label="Favorite brands" placeholder="Dior, Chanel..." />
        <InputField label="Occasions" placeholder="Work, events, travel..." />
        <InputField label="Delivery preferences" placeholder="Weekday evenings..." />
        <InputField label="Style profile" placeholder="Minimalist luxury..." />
        <div className="md:col-span-2">
          <Button>Complete Onboarding</Button>
        </div>
      </form>
    </section>
  );
}
