import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function ContentSection({ title, description, children }: ContentSectionProps) {
  return (
    <section className="py-12">
      <h2 className="font-display text-4xl text-cream md:text-5xl">{title}</h2>
      {description ? <p className="mt-3 max-w-3xl text-base leading-8 text-beige">{description}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
