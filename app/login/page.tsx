"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { InputField } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useFakeAuth } from "@/components/providers/fake-auth-provider";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useFakeAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    const result = login({ email, password });
    setLoading(false);
    if (!result.ok) {
      setError(result.message ?? "Login failed.");
      return;
    }
    router.push("/account/dashboard");
  };

  return (
    <section className="mx-auto max-w-xl py-12">
      <h1 className="font-display text-6xl text-cream">Sign in</h1>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-3xl border border-gold/20 bg-[#15110d] p-6">
        <InputField label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        {error ? <p className="rounded-xl border border-red-400/40 bg-red-900/20 px-3 py-2 text-sm text-red-200">{error}</p> : null}
        <Button loading={loading} type="submit">
          Sign in
        </Button>
        <Link href="/onboarding" className="text-sm text-gold">
          Forgot password
        </Link>
      </form>
      <p className="mt-4 text-sm text-beige">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-gold">
          Register now
        </Link>
      </p>
    </section>
  );
}
