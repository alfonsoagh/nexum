import { brand, heroMetrics } from "@/data/landing-content";

import { Container } from "./Container";
import { CtaLink } from "./CtaLink";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[82vh] overflow-hidden border-b border-[#d8d1d1]/20 px-0 pb-20 pt-16 sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute -left-10 top-16 h-40 w-40 rounded-full bg-[#1e4fa6]/15 blur-3xl fx-float-slow" />
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(30,79,166,0.16),transparent_60%)] lg:block" />
      <div className="pointer-events-none absolute right-16 top-24 hidden h-56 w-56 rounded-full bg-[#6f90d6]/14 blur-3xl lg:block fx-float-slower" />

      <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-8">
          <p
            data-reveal
            data-reveal-delay="30"
            className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#5f5f5f]"
          >
            {brand.name} · Desarrollo + Diseño digital
          </p>

          <div className="space-y-4">
            <h1
              data-reveal
              data-reveal-delay="110"
              className="max-w-5xl text-balance font-display text-[clamp(2.55rem,10vw,4.75rem)] font-black uppercase leading-[0.92] tracking-[-0.01em] text-[#111111] sm:text-[clamp(3.35rem,7.8vw,6.35rem)] lg:text-[clamp(4.45rem,6.2vw,7.2rem)]"
            >
              IMPULSA TU NEGOCIO CON <span className="text-[#1e4fa6]">TECNOLOGÍA</span>{" "}
              Y DISEÑO QUE <span className="text-[#6f90d6]">SÍ VENDE</span>.
            </h1>
            <p
              data-reveal
              data-reveal-delay="170"
              className="max-w-2xl text-base leading-relaxed text-[#5f5f5f] sm:text-xl"
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
            <CtaLink href="#portafolio" label="Explorar Portafolio" variant="ghost" />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroMetrics.map((metric, index) => (
              <div
                key={metric.label}
                data-reveal
                data-reveal-delay={String(300 + index * 70)}
                className="border border-[#d8d1d1]/35 bg-white/85 px-4 py-3 fx-card"
              >
                <p className="font-display text-2xl font-bold uppercase tracking-tight text-[#1e4fa6]">
                  {metric.value}
                </p>
                <p className="text-xs text-[#5f5f5f]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal data-reveal-delay="220" className="relative hidden min-h-[520px] lg:block">
          <div className="absolute inset-8 border border-[#d8d1d1]/25 bg-white/85 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,79,166,0.15),transparent_45%)]" />
            <div className="absolute bottom-8 left-8 right-8 border-t border-[#d8d1d1]/30 pt-6">
              <p className="font-display text-4xl font-black uppercase tracking-tight text-[#111111]">
                Tecnología y diseño
              </p>
              <p className="font-display text-4xl font-black uppercase tracking-tight text-[#1e4fa6]">
                para resultados reales
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
