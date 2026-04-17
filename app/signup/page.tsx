"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { InputField } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useFakeAuth } from "@/components/providers/fake-auth-provider";

export default function SignupPage() {
  const router = useRouter();
  const { register } = useFakeAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const result = register({ name, email, password });
    setLoading(false);

    if (!result.ok) {
      setError(result.message ?? "Registration failed.");
      return;
    }

    router.push("/onboarding");
  };

  return (
    <section className="mx-auto max-w-xl py-12">
      <h1 className="font-display text-6xl text-cream">Create account</h1>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-3xl border border-gold/20 bg-[#15110d] p-6">
        <InputField label="Full name" value={name} onChange={(event) => setName(event.target.value)} required />
        <InputField label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <InputField
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        {error ? <p className="rounded-xl border border-red-400/40 bg-red-900/20 px-3 py-2 text-sm text-red-200">{error}</p> : null}
        <Button loading={loading} type="submit">
          Create Account
        </Button>
        <Button type="button" variant="secondary">
          Continue with Google
        </Button>
        <Button type="button" variant="secondary">
          Continue with Apple
        </Button>
      </form>
      <p className="mt-4 text-sm text-beige">
        Already have an account? <Link href="/login" className="text-gold">Sign in</Link>
      </p>
    </section>
  );
}
