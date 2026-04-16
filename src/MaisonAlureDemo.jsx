export default function MaisonAlureDemo() {
  const editorialImages = {
    hero: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
    detail:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80",
    galleryA:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80",
    galleryB:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80",
    galleryC:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80",
  };

  const wardrobeCards = [
    { title: "Evening", subtitle: "Occasionwear, bags, jewellery" },
    { title: "Work", subtitle: "Sharp tailoring, polished essentials" },
    { title: "Travel", subtitle: "Refined layers for movement" },
  ];

  const steps = [
    {
      number: "01",
      title: "Curate your wardrobe",
      text: "Shape a personal style profile and define the way you dress.",
    },
    {
      number: "02",
      title: "Receive styling guidance",
      text: "Get composed looks built around mood, occasion, and silhouette.",
    },
    {
      number: "03",
      title: "Access luxury on demand",
      text: "Borrow statement pieces only when they are truly needed.",
    },
    {
      number: "04",
      title: "Return with ease",
      text: "Delivery, care, and scheduled return — quietly handled.",
    },
  ];

  const trustPoints = [
    "Brand-specific authentication",
    "Verification before dispatch and after return",
    "Deposit-based protection",
    "Community reputation layer",
    "Controlled item integrity",
    "Premium packaging and managed care",
  ];

  const highlights = [
    { title: "Access over ownership", text: "Luxury, without accumulation." },
    { title: "Editorial styling", text: "Composed looks, not random pieces." },
    { title: "Trust by design", text: "Verification, care, and control." },
  ];

  const stats = [
    { value: "Members only", label: "curated access" },
    { value: "AI-led", label: "styling direction" },
    { value: "Concierge", label: "delivery & return" },
  ];

  const navItems = ["Concept", "Experience", "Trust", "Waitlist"];

  return (
    <div className="min-h-screen bg-[#120d09] text-[#f5eadc] selection:bg-[#b68a52]/30 selection:text-[#fff7ef]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(214,173,111,0.12),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(124,85,40,0.16),transparent_25%),linear-gradient(180deg,#120d09_0%,#100b08_40%,#0d0907_100%)]" />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(190,146,87,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(124,85,40,0.14),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e1c18d]/40 to-transparent" />
        <div className="absolute left-[8%] top-24 hidden h-32 w-32 rounded-full bg-[#c8954d]/10 blur-3xl md:block" />
        <div className="absolute right-[10%] top-40 hidden h-40 w-40 rounded-full bg-[#7b5229]/10 blur-3xl md:block" />

        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
          <header className="sticky top-0 z-20 rounded-full border border-[#d0a971]/12 bg-[#140f0c]/70 px-4 py-3 backdrop-blur-xl md:px-6">
            <div className="flex items-center justify-between gap-6">
              <div className="font-serif text-lg tracking-[0.28em] text-[#f0dcc0] md:text-2xl">
                MAISON ALURE
              </div>

              <nav className="hidden items-center gap-8 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-xs uppercase tracking-[0.28em] text-[#c9a97e] transition hover:text-[#f1dec3]"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <button className="hidden rounded-full border border-[#d4ad79]/35 bg-white/[0.02] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#f2dfc4] transition hover:border-[#e1c18d]/70 hover:bg-[#b68a52]/10 md:inline-flex">
                  Sign in
                </button>
                <button className="rounded-full bg-gradient-to-r from-[#f2d2a4] via-[#d9ab6b] to-[#b78549] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.24em] text-[#1a120d] shadow-[0_10px_30px_rgba(183,133,73,0.22)] transition hover:scale-[1.02] hover:opacity-95 active:scale-[0.99]">
                  Join Waitlist
                </button>
              </div>
            </div>
          </header>

          <section className="grid min-h-[88vh] items-center gap-14 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-24">
            <div>
              <div className="mb-8 inline-flex rounded-full border border-[#d4ad79]/25 bg-[#1b140f]/70 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#d8b487] backdrop-blur-sm">
                Members only access
              </div>

              <h1 className="max-w-4xl font-serif text-5xl leading-[0.88] tracking-[-0.04em] text-[#fff8f0] md:text-[7.2rem]">
                Luxury access,
                <br />
                redefined.
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-[#dcc5a8] md:text-lg">
                A quieter, more composed way to experience luxury fashion — built around access,
                rotation, and trust.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-gradient-to-r from-[#f2d2a4] via-[#d9ab6b] to-[#b78549] px-6 py-3.5 text-sm font-medium text-[#1a120d] shadow-[0_14px_34px_rgba(183,133,73,0.24)] transition hover:-translate-y-0.5 hover:scale-[1.01] hover:opacity-95 active:translate-y-0">
                  Discover the Experience
                </button>
                <button className="rounded-full border border-[#d0a971]/35 bg-white/[0.03] px-6 py-3.5 text-sm text-[#f2e5d4] backdrop-blur-sm transition hover:border-[#e1c18d]/60 hover:bg-[#b68a52]/10 active:scale-[0.99]">
                  Explore the Platform
                </button>
              </div>

              <div className="mt-10 flex w-full flex-wrap items-center gap-4 pt-4 text-xs uppercase tracking-[0.32em] text-[#b9966e]/80">
                <span>Curated circulation</span>
                <span className="h-px w-10 bg-[#6f4b28]" />
                <span>Verified access</span>
                <span className="h-px w-10 bg-[#6f4b28] hidden md:block" />
                <span className="hidden md:inline">Fashion intelligence</span>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-[1.4rem] border border-[#d0a971]/10 bg-[#130f0c]/80 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
                  >
                    <div className="font-serif text-2xl text-[#f7ead8]">{stat.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.22em] text-[#b9966e]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-8 top-12 hidden h-48 w-48 rounded-full bg-[#d1a464]/10 blur-3xl md:block" />

              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-[2.4rem] border border-[#d4ad79]/20 bg-[linear-gradient(180deg,rgba(38,27,20,0.9),rgba(18,13,9,0.98))] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <div className="relative h-[560px] overflow-hidden rounded-[1.9rem]">
                    <img
                      src={editorialImages.hero}
                      alt="Maison Alure editorial fashion"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,10,7,0.08),rgba(16,10,7,0.18)_35%,rgba(16,10,7,0.82)_100%)]" />

                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                      <div className="rounded-full border border-[#e6c898]/25 bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#f0d9ba] backdrop-blur-md">
                        Maison Alure
                      </div>
                      <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4ad79]/30 bg-[radial-gradient(circle_at_30%_30%,rgba(242,210,164,0.18),rgba(36,24,17,0.85))] text-[#e4c59a] backdrop-blur-md transition hover:scale-105">
                        ✦
                      </button>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                        <div className="max-w-md rounded-[1.6rem] border border-[#e3c394]/10 bg-[linear-gradient(180deg,rgba(25,18,13,0.66),rgba(18,13,9,0.9))] p-5 backdrop-blur-xl">
                          <div className="text-[11px] uppercase tracking-[0.34em] text-[#d6ac74]">
                            Core idea
                          </div>
                          <div className="mt-3 font-serif text-[2.2rem] leading-none text-[#fff3e5]">
                            Own less. Access more.
                          </div>
                          <p className="mt-3 text-sm leading-7 text-[#ead4b9]">
                            A quieter way to wear luxury.
                          </p>
                        </div>

                        <div className="rounded-[1.4rem] border border-[#e3c394]/10 bg-[linear-gradient(180deg,rgba(25,18,13,0.45),rgba(18,13,9,0.82))] p-4 backdrop-blur-xl">
                          <div className="text-[10px] uppercase tracking-[0.32em] text-[#d6ac74]">
                            Status
                          </div>
                          <div className="mt-2 font-serif text-xl text-[#fff3e5]">
                            Waitlist open
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative overflow-hidden rounded-[1.7rem] border border-[#d0a971]/12 bg-[#130e0b]">
                    <img
                      src={editorialImages.detail}
                      alt="Luxury fashion detail"
                      className="h-[260px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,11,8,0.05),rgba(17,11,8,0.55)_70%,rgba(17,11,8,0.88)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="text-xs uppercase tracking-[0.28em] text-[#d8b487]">
                        Quiet luxury
                      </div>
                      <div className="mt-2 font-serif text-[1.8rem] text-[#fff1de]">
                        Editorial restraint
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {wardrobeCards.map((card) => (
                      <button
                        key={card.title}
                        className="rounded-[1.3rem] border border-[#d0a971]/10 bg-[#130e0b] p-4 text-left shadow-[0_12px_24px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:border-[#d9b37e]/20 hover:bg-[#17120e]"
                      >
                        <div className="font-serif text-xl text-[#f4e5d2]">{card.title}</div>
                        <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#b89368]">
                          {card.subtitle}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <section className="grid gap-10 border-t border-[#b68a52]/15 py-24 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#b68a52]">
              Core proposition
            </div>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.02] tracking-[-0.02em] text-[#fff3e6] md:text-[4.1rem]">
              A luxury model built around access, not accumulation.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#dbc2a3]">
            <p>Maison Alure turns luxury into access — flexible, refined, and easy to return to.</p>
          </div>
        </section>

        <section className="grid gap-5 py-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-[1.9rem] border border-[#d0a971]/12 bg-[linear-gradient(180deg,#17110d,#120d0a)] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d8b17b]/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
            >
              <div className="font-serif text-[2rem] leading-tight text-[#fff0df]">
                {item.title}
              </div>
              <p className="mt-4 text-sm leading-7 text-[#d7bc9c]">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="py-28">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#b68a52]">
                How it works
              </div>
              <h2 className="mt-4 font-serif text-4xl text-[#fff4e7] md:text-5xl">
                A simple, high-touch experience.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#cdb08d] md:text-base">
              Calm, guided, and deliberately effortless.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.9rem] border border-[#d0a971]/12 bg-[linear-gradient(180deg,#17110d,#120d0a)] p-7 md:p-8"
              >
                <div className="text-sm tracking-[0.35em] text-[#cfa66d]">{step.number}</div>
                <div className="mt-5 font-serif text-[2.2rem] leading-tight text-[#fff1e0]">
                  {step.title}
                </div>
                <p className="mt-4 max-w-md text-sm leading-7 text-[#d6bc9d]">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[#d0a971]/12 bg-[linear-gradient(180deg,#16110d,#110d0a)] p-8">
            <div className="text-xs uppercase tracking-[0.35em] text-[#b68a52]">
              Experience preview
            </div>
            <h3 className="mt-4 max-w-lg font-serif text-4xl text-[#fff4e8]">
              A landing that already feels like a product.
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-8 text-[#d8bfa0]">
              Even without backend infrastructure, the interface presents a complete brand world:
              visual identity, trust, discovery, and invitation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full border border-[#d0a971]/25 px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-[#e9d6bb] transition hover:bg-[#b68a52]/10">
                Styling
              </button>
              <button className="rounded-full border border-[#d0a971]/25 px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-[#e9d6bb] transition hover:bg-[#b68a52]/10">
                Rotation
              </button>
              <button className="rounded-full border border-[#d0a971]/25 px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-[#e9d6bb] transition hover:bg-[#b68a52]/10">
                Authentication
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d0a971]/12 bg-[linear-gradient(180deg,#16110d,#110d0a)] p-6">
            <div className="grid gap-4">
              <div className="rounded-[1.4rem] border border-[#d0a971]/10 bg-[#120d0a] p-5">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#b68a52]">
                  Waitlist card
                </div>
                <div className="mt-3 font-serif text-2xl text-[#fff0df]">
                  Private launch access
                </div>
                <div className="mt-5 rounded-full border border-[#d0a971]/20 bg-[#1a140f] px-4 py-3 text-sm text-[#e8d6c0]">
                  your@email.com
                </div>
                <button className="mt-4 w-full rounded-full bg-gradient-to-r from-[#f2d2a4] via-[#d9ab6b] to-[#b78549] px-5 py-3 text-sm font-medium text-[#1a120d] transition hover:opacity-95">
                  Request Access
                </button>
              </div>

              <div className="rounded-[1.4rem] border border-[#d0a971]/10 bg-[#120d0a] p-5">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#b68a52]">
                  Member note
                </div>
                <p className="mt-3 text-sm leading-7 text-[#d9c1a3]">
                  A curated platform for occasions, work, travel, and image-led everyday dressing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="mb-10 grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#b68a52]">
                Trust & authentication
              </div>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#fff4e8] md:text-5xl">
                Built on trust.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#d8bfa0]">
                Authentication, care, and control at every step.
              </p>
            </div>

            <div className="rounded-[2.2rem] border border-[#d0a971]/14 bg-[linear-gradient(180deg,rgba(33,24,18,0.95),rgba(20,15,11,0.98))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.25rem] border border-[#d0a971]/10 bg-[#1a130f] p-5 text-sm leading-7 text-[#ead9c3] backdrop-blur-sm"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#d0a971]/12">
              <img
                src={editorialImages.galleryA}
                alt="Editorial fashion look"
                className="h-[320px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,6,0.08),rgba(12,8,6,0.72)_100%)]" />
            </div>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#d0a971]/12">
              <img
                src={editorialImages.galleryB}
                alt="Luxury styling"
                className="h-[320px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,6,0.08),rgba(12,8,6,0.72)_100%)]" />
            </div>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#d0a971]/12">
              <img
                src={editorialImages.galleryC}
                alt="Curated wardrobe"
                className="h-[320px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,6,0.08),rgba(12,8,6,0.72)_100%)]" />
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="rounded-[2.5rem] border border-[#d0a971]/20 bg-[linear-gradient(180deg,rgba(182,138,82,0.13),rgba(182,138,82,0.04))] px-8 py-12 shadow-[0_24px_70px_rgba(0,0,0,0.2)] md:px-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-[#b68a52]">
                  Final invitation
                </div>
                <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-[#fff5ea] md:text-5xl">
                  Enter the Maison Alure experience.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-[#dfc8ac]">
                  A new standard of fashion access.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full border border-[#d0a971]/25 bg-white/[0.03] px-6 py-3 text-sm text-[#f2e5d4] transition hover:bg-[#b68a52]/10">
                  Explore More
                </button>
                <button className="rounded-full bg-gradient-to-r from-[#f2d2a4] via-[#d9ab6b] to-[#b78549] px-7 py-3 text-sm font-medium text-[#1a120d] shadow-[0_10px_30px_rgba(183,133,73,0.22)] transition hover:scale-[1.01] hover:opacity-95">
                  Join the Waitlist
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-6 border-t border-[#b68a52]/15 py-10 text-sm text-[#b8966d] md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-serif text-lg tracking-[0.18em] text-[#e7cfaf]">MAISON ALURE</div>
            <div className="mt-2 text-xs uppercase tracking-[0.24em] text-[#b9966e]">
              Curated luxury. Trusted access.
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.22em] text-[#b9966e]">
            <a href="#" className="transition hover:text-[#f0dcc0]">
              Instagram
            </a>
            <a href="#" className="transition hover:text-[#f0dcc0]">
              Waitlist
            </a>
            <a href="#" className="transition hover:text-[#f0dcc0]">
              Contact
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

