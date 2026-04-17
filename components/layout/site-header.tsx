"use client";

import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/data/mock-data";
import { useFakeAuth } from "@/components/providers/fake-auth-provider";

export function SiteHeader() {
  const { hydrated, user } = useFakeAuth();
  const accountHref = hydrated && user ? "/account/dashboard" : "/login";

  return (
    <header className="sticky top-0 z-40 border-b border-gold/10 bg-gradient-to-r from-[#0f0b08] via-[#17100c] to-[#0f0b08]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[84px] w-full max-w-[1440px] items-center justify-between gap-5 px-4 py-4 md:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center p-0"
        >
          <Image
            src="/images/maison-alure-logo-v3.png"
            alt="Maison Alure logo"
            width={64}
            height={64}
            priority
            className="h-12 w-12 object-contain md:h-14 md:w-14"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#ead4b8] lg:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-cream">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 md:gap-2">
          <Link
            href={accountHref}
            aria-label={user ? "Open account" : "Sign in"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/45 text-cream transition hover:border-gold/70 hover:bg-gold/15"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.6-3.1 4.4-4.6 8-4.6S18.4 16.9 20 20" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
