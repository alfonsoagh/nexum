import { CtaLink } from "@/components/landing/CtaLink";
import { Container } from "@/components/landing/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";
import {
  engineeringPillars,
  softwareLayers,
  softwareMetrics,
  softwareProjects,
} from "@/data/portfolio-content";

export function SoftwarePortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#d8d1d1]/18 bg-[#111111] px-0 pb-20 pt-20 sm:pb-24 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-[0.12]" />
        <div className="pointer-events-none absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-[#1e4fa6]/24 blur-3xl" />
        <div className="pointer-events-none absolute right-[-6%] top-1/4 h-80 w-80 rounded-full bg-[#6f90d6]/16 blur-3xl" />

        <Container className="relative z-10 grid gap-12 xl:grid-cols-[1fr_0.95fr]">
          <div className="space-y-6">
            <p
              data-reveal
              className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#a8c2ff]"
            >
              Portafolio · Ingeniería de software
            </p>
            <h1
              data-reveal
              data-reveal-delay="60"
              className="max-w-4xl font-display text-[clamp(2.7rem,7vw,5.8rem)] font-black uppercase leading-[0.9] tracking-[-0.02em] text-white"
            >
              Arquitectura, producto y operación en una sola capa.
            </h1>
            <p
              data-reveal
              data-reveal-delay="120"
              className="max-w-2xl text-base leading-relaxed text-white/74 sm:text-lg"
            >
              Este portafolio concentra sistemas, dashboards e integraciones
              para equipos que necesitan visibilidad, orden y herramientas que
              sí se adoptan dentro de la operación.
            </p>

            <div
              data-reveal
              data-reveal-delay="180"
              className="flex flex-col gap-3 sm:flex-row"
            >
              <CtaLink href="/#contacto" label="Solicitar arquitectura" />
              <CtaLink href="/diseno" label="Ver portafolio visual" variant="ghost" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {softwareMetrics.map((metric, index) => (
              <article
                key={metric.label}
                data-reveal
                data-reveal-delay={String(150 + index * 70)}
                className="border border-white/12 bg-white/6 p-5 backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-black uppercase tracking-tight text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/66">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[#d8d1d1]/20 bg-[#f4f8ff] py-20 sm:py-24">
        <Container className="grid gap-10 xl:grid-cols-[0.84fr_1.16fr]">
          <div data-reveal className="space-y-8">
            <SectionHeading
              eyebrow="Base técnica"
              title="Cómo pensamos la ingeniería"
              description="Cada solución nace con una estructura clara de frontend, negocio e integración para que el crecimiento no dependa de parches."
            />

            <div className="space-y-4">
              {engineeringPillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  data-reveal
                  data-reveal-delay={String(100 + index * 70)}
                  className="border border-[#d8d1d1]/30 bg-white p-5"
                >
                  <h3 className="font-display text-xl font-black uppercase tracking-tight text-[#111111]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5f5f5f]">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {softwareLayers.map((layer, index) => (
              <article
                key={layer.label}
                data-reveal
                data-reveal-delay={String(120 + index * 60)}
                className="relative overflow-hidden border border-[#d8d1d1]/25 bg-white p-6 fx-card"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(30,79,166,0.08),transparent_45%)]" />
                <div className="relative z-10">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-[#1e4fa6]">
                    Capa
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-black uppercase leading-none tracking-tight text-[#111111]">
                    {layer.label}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#5f5f5f]">
                    {layer.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="space-y-10">
          <div data-reveal>
            <SectionHeading
              eyebrow="Implementaciones"
              title="Proyectos pensados para operar y crecer"
              description="Cada tarjeta resume una dirección de producto: qué resuelve, con qué stack puede vivir y qué tipo de arquitectura la sostiene."
            />
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            {softwareProjects.map((project, index) => (
              <article
                key={project.title}
                data-reveal
                data-reveal-delay={String(110 + index * 70)}
                className="border border-[#d8d1d1]/25 bg-white p-6 fx-card sm:p-7"
              >
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#1e4fa6]">
                  {project.category}
                </p>
                <h3 className="mt-3 font-display text-3xl font-black uppercase leading-[0.94] tracking-tight text-[#111111]">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#5f5f5f] sm:text-base">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#1e4fa6]/18 bg-[#f4f8ff] px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#173c80]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-[#d8d1d1]/30 pt-4">
                  <p className="font-display text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#5f5f5f]">
                    Decisiones de arquitectura
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.architecture.map((item) => (
                      <span
                        key={item}
                        className="border border-[#d8d1d1]/50 px-3 py-1 text-xs text-[#5f5f5f]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-5 border-t border-[#d8d1d1]/30 pt-4 text-sm font-medium leading-relaxed text-[#173c80]">
                  {project.outcome}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
