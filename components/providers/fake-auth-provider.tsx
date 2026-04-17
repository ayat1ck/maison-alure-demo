"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type FakeUser = {
  name: string;
  email: string;
};

type FakeSubscription = {
  planId: string;
  status: "active" | "inactive";
  nextBillingDate: string;
  lastPaymentMaskedCard: string;
};

type FakeAuthState = {
  user: FakeUser | null;
  subscription: FakeSubscription | null;
};

type RegisterInput = {
  name: string;
  email: string;
  password: string;
};

type LoginInput = {
  email: string;
  password: string;
};

type SubscribeInput = {
  planId: string;
  cardNumber: string;
};

type FakeAuthContextValue = {
  hydrated: boolean;
  user: FakeUser | null;
  subscription: FakeSubscription | null;
  register: (input: RegisterInput) => { ok: boolean; message?: string };
  login: (input: LoginInput) => { ok: boolean; message?: string };
  logout: () => void;
  subscribe: (input: SubscribeInput) => { ok: boolean; message?: string };
};

const STORAGE_KEY = "maisonalure_fake_auth_v1";

const FakeAuthContext = createContext<FakeAuthContextValue | null>(null);

function getNextBillingDate() {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date.toISOString().slice(0, 10);
}

function maskCard(cardNumber: string) {
  const digits = cardNumber.replace(/\D/g, "");
  const last4 = digits.slice(-4) || "0000";
  return `**** ${last4}`;
}

export function FakeAuthProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [state, setState] = useState<FakeAuthState>({
    user: null,
    subscription: null
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as FakeAuthState;
        setState(parsed);
      }
    } catch {
      // ignore malformed local storage
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const value = useMemo<FakeAuthContextValue>(
    () => ({
      hydrated,
      user: state.user,
      subscription: state.subscription,
      register: ({ name, email, password }) => {
        if (!name || !email || !password) {
          return { ok: false, message: "Please fill in all required fields." };
        }
        setState((prev) => ({
          ...prev,
          user: { name, email }
        }));
        return { ok: true };
      },
      login: ({ email, password }) => {
        if (!email || !password) {
          return { ok: false, message: "Email and password are required." };
        }
        setState((prev) => ({
          ...prev,
          user: {
            name: prev.user?.name ?? "Maison Member",
            email
          }
        }));
        return { ok: true };
      },
      logout: () => {
        setState({
          user: null,
          subscription: null
        });
      },
      subscribe: ({ planId, cardNumber }) => {
        if (!planId) {
          return { ok: false, message: "Plan is required." };
        }
        if (cardNumber.replace(/\D/g, "").length < 12) {
          return { ok: false, message: "Please enter a valid card number." };
        }
        setState((prev) => ({
          ...prev,
          subscription: {
            planId,
            status: "active",
            nextBillingDate: getNextBillingDate(),
            lastPaymentMaskedCard: maskCard(cardNumber)
          }
        }));
        return { ok: true };
      }
    }),
    [hydrated, state]
  );

  return <FakeAuthContext.Provider value={value}>{children}</FakeAuthContext.Provider>;
}

export function useFakeAuth() {
  const context = useContext(FakeAuthContext);
  if (!context) {
    throw new Error("useFakeAuth must be used within FakeAuthProvider");
  }
  return context;
}
