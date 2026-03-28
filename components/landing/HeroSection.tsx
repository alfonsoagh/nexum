import { brand, heroMetrics } from "@/data/landing-content";

import { Container } from "./Container";
import { CtaLink } from "./CtaLink";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[82vh] overflow-hidden border-b border-[#484848]/20 px-0 pb-20 pt-16 sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-[0.08]" />
      <div className="pointer-events-none absolute -left-10 top-16 h-40 w-40 rounded-full bg-[#84adff]/15 blur-3xl fx-float-slow" />
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(132,173,255,0.16),transparent_60%)] lg:block" />
      <div className="pointer-events-none absolute right-16 top-24 hidden h-56 w-56 rounded-full bg-[#6c9fff]/12 blur-3xl lg:block fx-float-slower" />

      <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-8">
          <p
            data-reveal
            data-reveal-delay="30"
            className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ababab]"
          >
            {brand.name} · Desarrollo + Diseño digital
          </p>

          <div className="space-y-4">
            <h1
              data-reveal
              data-reveal-delay="110"
              className="max-w-5xl text-balance font-display text-[clamp(2.55rem,10vw,4.75rem)] font-black uppercase leading-[0.92] tracking-[-0.01em] text-white sm:text-[clamp(3.35rem,7.8vw,6.35rem)] lg:text-[clamp(4.45rem,6.2vw,7.2rem)]"
            >
              IMPULSA TU NEGOCIO CON <span className="text-[#84adff]">TECNOLOGÍA</span>{" "}
              Y DISEÑO QUE <span className="text-[#6c9fff]">SÍ VENDE</span>.
            </h1>
            <p
              data-reveal
              data-reveal-delay="170"
              className="max-w-2xl text-base leading-relaxed text-[#ababab] sm:text-xl"
            >
              Creamos páginas web, sistemas a la medida y aplicaciones móviles
              para que dejes de perder tiempo en procesos manuales y tomes
              decisiones con información clara.
            </p>
          </div>

          <div
            data-reveal
            data-reveal-delay="230"
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CtaLink href="#contacto" label="Cotizar mi Proyecto" />
            <CtaLink href="#casos" label="Ver Portafolio" variant="ghost" />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroMetrics.map((metric, index) => (
              <div
                key={metric.label}
                data-reveal
                data-reveal-delay={String(300 + index * 70)}
                className="border border-[#484848]/35 bg-[#191919]/70 px-4 py-3 fx-card"
              >
                <p className="font-display text-2xl font-bold uppercase tracking-tight text-[#84adff]">
                  {metric.value}
                </p>
                <p className="text-xs text-[#ababab]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal data-reveal-delay="220" className="relative hidden min-h-[520px] lg:block">
          <div className="absolute inset-8 border border-[#484848]/25 bg-[#0e0e0e]/75 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(132,173,255,0.15),transparent_45%)]" />
            <div className="absolute bottom-8 left-8 right-8 border-t border-[#484848]/30 pt-6">
              <p className="font-display text-4xl font-black uppercase tracking-tight text-white">
                Tecnología y diseño
              </p>
              <p className="font-display text-4xl font-black uppercase tracking-tight text-[#84adff]">
                para resultados reales
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
