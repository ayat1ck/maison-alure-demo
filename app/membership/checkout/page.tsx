"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { membershipPlans } from "@/data/mock-data";
import { InputField } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useFakeAuth } from "@/components/providers/fake-auth-provider";

function formatCardNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatExpiryDate(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function isValidExpiry(expiry: string) {
  const match = expiry.match(/^(\d{2})\/(\d{2})$/);
  if (!match) return false;
  const month = Number(match[1]);
  const year = Number(match[2]);
  if (month < 1 || month > 12) return false;
  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;
  if (year < currentYear) return false;
  if (year === currentYear && month < currentMonth) return false;
  return true;
}

export default function MembershipCheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, subscribe } = useFakeAuth();
  const [cardholder, setCardholder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedPlanId = searchParams.get("plan");
  const selectedPlan = useMemo(
    () => membershipPlans.find((plan) => plan.id === selectedPlanId) ?? membershipPlans[1],
    [selectedPlanId]
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (!user) {
      setError("Please create an account or sign in first.");
      return;
    }
    if (!cardholder || !expDate || !cvc) {
      setError("Fill in card details to complete mock payment.");
      return;
    }
    if (cardNumber.replace(/\D/g, "").length < 16) {
      setError("Card number must contain 16 digits.");
      return;
    }
    if (!isValidExpiry(expDate)) {
      setError("Enter a valid expiry date in MM/YY format.");
      return;
    }
    if (cvc.length < 3) {
      setError("CVC must contain at least 3 digits.");
      return;
    }
    setLoading(true);
    const result = subscribe({
      planId: selectedPlan.id,
      cardNumber
    });
    setLoading(false);
    if (!result.ok) {
      setError(result.message ?? "Payment failed.");
      return;
    }
    router.push("/account/dashboard");
  };

  return (
    <section className="py-10">
      <h1 className="font-display text-6xl text-cream">Membership checkout</h1>
      <p className="mt-2 text-beige">Secure payment flow for Maison Alure subscription.</p>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_0.8fr]">
        <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-gold/20 bg-[#15110d] p-6">
          {!user ? (
            <p className="rounded-2xl border border-gold/25 bg-[#1d1510] p-3 text-sm text-beige">
              You are not signed in.{" "}
              <Link href="/login" className="text-gold">
                Sign in
              </Link>{" "}
              or{" "}
              <Link href="/signup" className="text-gold">
                create account
              </Link>{" "}
              first.
            </p>
          ) : (
            <p className="text-sm text-beige">Paying as {user.email}</p>
          )}

          <InputField label="Cardholder name" value={cardholder} onChange={(event) => setCardholder(event.target.value)} />
          <InputField
            label="Card number"
            placeholder="4242 4242 4242 4242"
            value={cardNumber}
            onChange={(event) => setCardNumber(formatCardNumber(event.target.value))}
            inputMode="numeric"
            maxLength={19}
          />
          <div className="grid gap-4 md:grid-cols-2">
            <InputField
              label="Expiry date"
              placeholder="MM/YY"
              value={expDate}
              onChange={(event) => setExpDate(formatExpiryDate(event.target.value))}
              inputMode="numeric"
              maxLength={5}
            />
            <InputField
              label="CVC"
              placeholder="123"
              value={cvc}
              onChange={(event) => setCvc(event.target.value.replace(/\D/g, "").slice(0, 4))}
              inputMode="numeric"
              maxLength={4}
            />
          </div>
          {error ? <p className="rounded-xl border border-red-400/40 bg-red-900/20 px-3 py-2 text-sm text-red-200">{error}</p> : null}
          <Button loading={loading} type="submit">
            Pay ${selectedPlan.monthlyPrice} and activate
          </Button>
        </form>

        <aside className="rounded-3xl border border-gold/20 bg-[#15110d] p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Selected plan</p>
          <h2 className="mt-2 font-display text-4xl text-cream">{selectedPlan.name}</h2>
          <p className="mt-2 text-4xl text-gold">${selectedPlan.monthlyPrice}/mo</p>
          <p className="mt-2 text-sm text-beige">{selectedPlan.rotations}</p>
          <ul className="mt-4 space-y-2 text-sm text-beige">
            {selectedPlan.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
          <p className="mt-5 rounded-2xl border border-gold/20 bg-[#1c140f] p-3 text-xs text-beige">
            Your selected plan will be activated immediately after payment confirmation.
          </p>
        </aside>
      </div>
    </section>
  );
}
