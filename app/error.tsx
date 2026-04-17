"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <section className="py-24 text-center">
      <h2 className="font-display text-6xl text-cream">Something went wrong</h2>
      <p className="mt-3 text-beige">Global error boundary fallback for runtime issues.</p>
      <Button className="mt-6" onClick={reset}>
        Try again
      </Button>
    </section>
  );
}
