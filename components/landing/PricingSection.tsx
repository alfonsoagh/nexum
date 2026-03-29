import { pricingReferences } from "@/data/landing-content";

import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function PricingSection() {
  return (
    <section id="precios" className="border-t border-[#d8d1d1]/80 py-20 sm:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Precios orientativos"
          title="Inversión estimada"
          description="Montos base para organizar presupuesto. El precio final depende del alcance y nivel de personalización."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {pricingReferences.map((price) => (
            <article
              key={price.name}
              className="border border-[#d8d1d1]/90 bg-white p-5"
            >
              <h3 className="font-display text-3xl uppercase leading-none tracking-[0.04em] text-[#111111]">
                {price.name}
              </h3>
              <p className="mt-3 font-display text-4xl uppercase leading-none text-[#6f90d6]">
                Desde {price.startingPrice}
              </p>
              <p className="mt-3 border-t border-[#d8d1d1] pt-3 text-sm text-[#5f5f5f]">
                {price.note}
              </p>
            </article>
          ))}
        </div>

        <p className="border border-[#c7d8fb] bg-[#f4f8ff] px-4 py-3 text-sm text-[#173c80]">
          Nota: los precios pueden variar dependiendo de complejidad,
          funcionalidades requeridas, integraciones externas y tiempos de
          entrega.
        </p>
      </Container>
    </section>
  );
}
