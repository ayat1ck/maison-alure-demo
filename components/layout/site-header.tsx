import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/data/mock-data";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
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
          <Link href="/contact">
            <Button className="hidden lg:inline-flex">Join Waitlist</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
