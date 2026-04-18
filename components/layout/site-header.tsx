"use client";

import Link from "next/link";
import Image from "next/image";
import { startTransition, useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/data/mock-data";
import { useFakeAuth } from "@/components/providers/fake-auth-provider";

function getDocumentBody(): HTMLElement | null {
  return typeof document !== "undefined" ? document.body : null;
}

export function SiteHeader() {
  const { hydrated, user } = useFakeAuth();
  const accountHref = hydrated && user ? "/account/dashboard" : "/login";
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const portalTarget = useSyncExternalStore(
    () => () => {},
    getDocumentBody,
    () => null
  );

  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const closeIfDesktop = () => {
      if (mq.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", closeIfDesktop);
    closeIfDesktop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", closeIfDesktop);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

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
        <nav
          className="hidden items-center gap-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#ead4b8] lg:flex"
          aria-label="Main navigation"
        >
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-cream">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 md:gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/45 text-cream transition hover:border-gold/70 hover:bg-gold/15 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
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

      {menuOpen && portalTarget
        ? createPortal(
            <div
              className="fixed inset-0 z-[200] flex justify-end lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              id="mobile-nav-drawer"
            >
              <button
                type="button"
                className="absolute inset-0 z-0 bg-black/65"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              />
              <nav
                className="relative z-10 flex h-full min-h-0 w-full max-w-sm flex-col border-l border-gold/25 bg-gradient-to-b from-[#17100c] to-[#0c0907] px-5 pb-8 pt-6 shadow-[-12px_0_48px_rgba(0,0,0,0.45)]"
                aria-label="Main navigation"
              >
                <div className="mb-6 flex shrink-0 items-center justify-between border-b border-gold/15 pb-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold">Menu</p>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 text-cream transition hover:border-gold/60 hover:bg-gold/10"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" aria-hidden />
                  </button>
                </div>
                <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overscroll-contain">
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-3 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#ead4b8] transition hover:bg-gold/10 hover:text-cream"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 shrink-0 border-t border-gold/15 pt-6">
                  <Link
                    href={accountHref}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-gold/40 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-cream transition hover:border-gold/65 hover:bg-gold/10"
                    onClick={() => setMenuOpen(false)}
                  >
                    {user ? "Account" : "Sign in"}
                  </Link>
                </div>
              </nav>
            </div>,
            portalTarget
          )
        : null}
    </header>
  );
}
