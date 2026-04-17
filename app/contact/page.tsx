"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { InputField, TextareaField } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Waitlist"
        title="Start your Maison Alure journey."
        description="Join the launch list and tell us your style profile and city preferences."
      />
      <section className="py-10">
        <form
          className="grid gap-4 rounded-3xl border border-gold/20 bg-[#15110d] p-6"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <InputField label="First name" required />
            <InputField label="Last name" required />
            <InputField label="Email" type="email" required />
            <InputField label="Phone (optional)" />
            <InputField label="City" placeholder="New York" required />
          </div>
          <TextareaField label="Message" rows={4} placeholder="Tell us about your style needs..." />
          <label className="text-sm text-beige">
            <input type="checkbox" className="mr-2" required />I agree to receive Maison Alure updates.
          </label>
          <Button className="w-full md:w-fit" loading={false}>
            Submit
          </Button>
          {submitted ? (
            <p className="rounded-2xl border border-emerald-400/40 bg-emerald-900/20 p-3 text-sm text-emerald-200">
              Success state: waitlist request submitted.
            </p>
          ) : null}
        </form>
      </section>
    </>
  );
}
