import { benefits } from "@/data/landing-content";

import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function BenefitsSection() {
  return (
    <section id="beneficios" className="border-t border-[#484848]/20 bg-[#131313] py-20 sm:py-24">
      <Container className="space-y-10">
        <div data-reveal>
          <SectionHeading
            eyebrow="Beneficios"
            title="Ahorra tiempo y dinero"
            description="Optimiza procesos, mejora tu imagen digital y usa tecnología para crecer sin improvisar."
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {benefits.slice(0, 3).map((benefit, index) => (
            <article
              key={benefit.title}
              data-reveal
              data-reveal-delay={String(90 + index * 80)}
              className={`group bg-[#191919] p-8 transition-colors duration-300 ${
                index === 0
                  ? "border-l-4 border-[#84adff]"
                  : index === 1
                    ? "border-l-4 border-[#84adff]/60"
                    : "border-l-4 border-[#84adff]/35"
              } fx-card`}
            >
              <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
                {benefit.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#ababab]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
