import { pricingReferences } from "@/data/landing-content";

import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function PricingSection() {
  return (
    <section id="precios" className="border-t border-slate-900/80 py-20 sm:py-24">
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
              className="border border-slate-800/90 bg-[#08101b]/70 p-5"
            >
              <h3 className="font-display text-3xl uppercase leading-none tracking-[0.04em] text-white">
                {price.name}
              </h3>
              <p className="mt-3 font-display text-4xl uppercase leading-none text-[#8eb5ff]">
                Desde {price.startingPrice}
              </p>
              <p className="mt-3 border-t border-slate-800 pt-3 text-sm text-slate-300">
                {price.note}
              </p>
            </article>
          ))}
        </div>

        <p className="border border-[#3a4f78] bg-[#101a2b]/70 px-4 py-3 text-sm text-[#cfdefe]">
          Nota: los precios pueden variar dependiendo de complejidad,
          funcionalidades requeridas, integraciones externas y tiempos de
          entrega.
        </p>
      </Container>
    </section>
  );
}
