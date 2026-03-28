import { caseStudies } from "@/data/landing-content";

import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function CasesSection() {
  return (
    <section id="casos" className="border-t border-[#484848]/20 py-20 sm:py-24">
      <Container className="space-y-10">
        <div data-reveal>
          <SectionHeading
            eyebrow="Casos y ejemplos"
            title="Casos de éxito"
            description="Ejemplos de proyectos orientados a resultados comerciales y eficiencia operativa."
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {caseStudies.map((caseStudy, index) => (
            <article
              key={caseStudy.name}
              data-reveal
              data-reveal-delay={String(90 + index * 70)}
              className="flex h-full flex-col border border-[#484848]/25 bg-[#111111] p-6 fx-card"
            >
              <div className="mb-6 h-1 w-12 bg-[#84adff]" />
              <h3 className="font-display text-2xl font-black uppercase leading-none tracking-tight text-white">
                {caseStudy.name}
              </h3>
              <dl className="mt-5 space-y-3">
                <div>
                  <dt className="font-display text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white">
                    Problema
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#ababab]">
                    {caseStudy.problem}
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white">
                    Solución
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#ababab]">
                    {caseStudy.solution}
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white">
                    Resultado
                  </dt>
                  <dd className="mt-1 border-l-2 border-[#84adff] bg-[#84adff]/10 px-3 py-2 text-sm leading-relaxed text-[#84adff]">
                    {caseStudy.result}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
