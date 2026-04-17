import { ReactNode } from "react";
import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  actions?: ReactNode;
}

export function PageHero({ eyebrow, title, description, image, actions }: PageHeroProps) {
  return (
    <section className="grid items-center gap-8 border-b border-gold/15 pb-10 pt-8 md:grid-cols-2 md:pb-14 md:pt-12">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl leading-[0.95] text-cream md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-beige">{description}</p>
        {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
      {image ? (
        <div className="overflow-hidden rounded-[2rem] border border-gold/20">
          <Image
            src={image}
            alt={title}
            width={1600}
            height={1200}
            quality={95}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-[380px] w-full object-cover md:h-[460px]"
          />
        </div>
      ) : null}
    </section>
  );
}
