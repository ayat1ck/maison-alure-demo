import Link from "next/link";
import { InputField } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-xl py-12">
      <h1 className="font-display text-6xl text-cream">Sign in</h1>
      <form className="mt-6 grid gap-4 rounded-3xl border border-gold/20 bg-[#15110d] p-6">
        <InputField label="Email" type="email" required />
        <InputField label="Password" type="password" required />
        <Button>Sign in</Button>
        <Link href="/onboarding" className="text-sm text-gold">
          Forgot password
        </Link>
      </form>
    </section>
  );
}
