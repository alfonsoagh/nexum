import Image from "next/image";

import { CtaLink } from "@/components/landing/CtaLink";
import { Container } from "@/components/landing/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";
import {
  designDisciplines,
  designMetrics,
  designProjects,
} from "@/data/portfolio-content";

export function DesignPortfolioPage() {
  const featuredProjects = designProjects.slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#d8d1d1]/18 bg-white px-0 pb-20 pt-20 sm:pb-24 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,79,166,0.12),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(111,144,214,0.16),transparent_36%)]" />

        <Container className="relative z-10 grid gap-12 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <p
              data-reveal
              className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#5f5f5f]"
            >
              Portafolio · Diseño digital y fotografía
            </p>
            <h1
              data-reveal
              data-reveal-delay="60"
              className="max-w-4xl font-display text-[clamp(2.7rem,7vw,5.6rem)] font-black uppercase leading-[0.9] tracking-[-0.02em] text-[#111111]"
            >
              Identidad, imagen y piezas con una narrativa visual clara.
            </h1>
            <p
              data-reveal
              data-reveal-delay="120"
              className="max-w-2xl text-base leading-relaxed text-[#5f5f5f] sm:text-lg"
            >
              Aquí vive el lado artístico de Nexum: branding, fotografía y
              dirección visual para marcas que necesitan elevar percepción sin
              perder orden ni consistencia.
            </p>

            <div
              data-reveal
              data-reveal-delay="180"
              className="flex flex-col gap-3 sm:flex-row"
            >
              <CtaLink href="/#contacto" label="Quiero una dirección visual" />
              <CtaLink href="/software" label="Ver ingeniería" variant="ghost" />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {designMetrics.map((metric, index) => (
                <article
                  key={metric.label}
                  data-reveal
                  data-reveal-delay={String(220 + index * 70)}
                  className="border border-[#d8d1d1]/25 bg-white/80 p-4"
                >
                  <p className="font-display text-2xl font-black uppercase tracking-tight text-[#1e4fa6]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#5f5f5f]">
                    {metric.label}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                data-reveal
                data-reveal-delay={String(150 + index * 90)}
                className={`overflow-hidden border border-[#d8d1d1]/25 bg-white fx-card ${
                  index === 0 ? "sm:translate-y-6" : ""
                }`}
              >
                <div className="relative bg-[#edf4ff]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={project.width}
                    height={project.height}
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#1e4fa6]">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-black uppercase leading-none tracking-tight text-[#111111]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5f5f5f]">
                    {project.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[#d8d1d1]/20 bg-[#f4f8ff] py-20 sm:py-24">
        <Container className="space-y-10">
          <div data-reveal>
            <SectionHeading
              eyebrow="Disciplinas"
              title="Un sistema visual que va más allá de una pieza aislada"
              description="La intención es que foto, branding y contenido trabajen juntos como un lenguaje consistente, no como entregables separados."
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {designDisciplines.map((discipline, index) => (
              <article
                key={discipline.title}
                data-reveal
                data-reveal-delay={String(120 + index * 70)}
                className="border border-[#d8d1d1]/25 bg-white p-6 fx-card"
              >
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#1e4fa6]">
                  Línea
                </p>
                <h3 className="mt-3 font-display text-3xl font-black uppercase leading-none tracking-tight text-[#111111]">
                  {discipline.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#5f5f5f] sm:text-base">
                  {discipline.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="space-y-10">
          <div data-reveal>
            <SectionHeading
              eyebrow="Galería"
              title="Selección visual en formato editorial"
              description="Una base tipo masonry para mostrar fotografía, branding y piezas de campaña con ritmo más artístico, pero todavía dentro del orden visual de Nexum."
            />
          </div>

          <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
            {designProjects.map((project, index) => (
              <article
                key={project.title}
                data-reveal
                data-reveal-delay={String(100 + index * 50)}
                className="mb-5 break-inside-avoid overflow-hidden border border-[#d8d1d1]/25 bg-white fx-card"
              >
                <div className="relative bg-[#edf4ff]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={project.width}
                    height={project.height}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#1e4fa6]">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-black uppercase leading-none tracking-tight text-[#111111]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5f5f5f]">
                    {project.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
