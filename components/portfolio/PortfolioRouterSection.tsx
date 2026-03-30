import Link from "next/link";

import { portfolioRouterCards } from "@/data/portfolio-content";

import { Container } from "@/components/landing/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";

export function PortfolioRouterSection() {
  return (
    <section id="portafolio" className="border-t border-[#d8d1d1]/20 py-20 sm:py-24">
      <Container className="space-y-10">
        <div data-reveal>
          <SectionHeading
            eyebrow="Portafolio"
            title="Explora la disciplina correcta"
            description="Separamos la ingeniería de software y el trabajo visual en rutas independientes para que cada portafolio respire con su propia intención sin perder el lenguaje de Nexum."
          />
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          {portfolioRouterCards.map((card, index) => {
            const isSoftware = index === 0;

            return (
              <Link
                key={card.href}
                href={card.href}
                data-reveal
                data-reveal-delay={String(110 + index * 90)}
                className={`group relative overflow-hidden border p-7 transition-all duration-300 fx-card sm:p-9 ${
                  isSoftware
                    ? "border-[#111111]/12 bg-[#111111] text-white"
                    : "border-[#d8d1d1]/25 bg-white text-[#111111]"
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 ${
                    isSoftware
                      ? "tech-grid opacity-[0.08]"
                      : "bg-[radial-gradient(circle_at_top_left,rgba(30,79,166,0.12),transparent_42%)]"
                  }`}
                />

                <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                  <div>
                    <p
                      className={`font-display text-xs font-bold uppercase tracking-[0.2em] ${
                        isSoftware ? "text-[#a8c2ff]" : "text-[#5f5f5f]"
                      }`}
                    >
                      {card.eyebrow}
                    </p>
                    <h3 className="mt-4 max-w-xl font-display text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl">
                      {card.title}
                    </h3>
                    <p
                      className={`mt-4 max-w-2xl text-sm leading-relaxed sm:text-base ${
                        isSoftware ? "text-white/76" : "text-[#5f5f5f]"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`border px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.12em] ${
                            isSoftware
                              ? "border-white/16 text-white/78"
                              : "border-[#1e4fa6]/18 text-[#173c80]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.16em] ${
                        isSoftware ? "text-white" : "text-[#1e4fa6]"
                      }`}
                    >
                      {card.label}
                      <span aria-hidden>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
