import Link from "next/link";
import { InputField } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return (
    <section className="mx-auto max-w-xl py-12">
      <h1 className="font-display text-6xl text-cream">Create account</h1>
      <form className="mt-6 grid gap-4 rounded-3xl border border-gold/20 bg-[#15110d] p-6">
        <InputField label="Email" type="email" required />
        <InputField label="Password" type="password" required />
        <InputField label="Confirm password" type="password" required />
        <Button>Create Account</Button>
        <Button variant="secondary">Continue with Google</Button>
        <Button variant="secondary">Continue with Apple</Button>
      </form>
      <p className="mt-4 text-sm text-beige">
        Already have an account? <Link href="/login" className="text-gold">Sign in</Link>
      </p>
    </section>
  );
}
