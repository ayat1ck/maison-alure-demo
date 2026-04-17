"use client";

import { FakeAuthProvider } from "@/components/providers/fake-auth-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <FakeAuthProvider>{children}</FakeAuthProvider>;
}
