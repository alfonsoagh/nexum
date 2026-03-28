import { brand } from "@/data/landing-content";

import { Container } from "./Container";
import { CtaLink } from "./CtaLink";

export function FinalCtaSection() {
  return (
    <section id="contacto" className="border-t border-[#d8d1d1]/20 bg-[#faf6f6] py-24 sm:py-28">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden border border-[#d8d1d1]/25 bg-white px-6 py-14 sm:px-10 sm:py-20"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-5%,rgba(214,31,44,0.18),transparent_45%)]" />
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#5f5f5f]">
              Cierre estratégico
            </p>
            <h2 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-[#111111] sm:text-7xl">
              <span className="block">Deja de perder tiempo</span>
              <span className="block text-[#d61f2c]">hoy mismo</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5f5f5f]">
              Con {brand.name}, puedes ordenar procesos, mejorar tu presencia
              digital y construir herramientas que impulsen resultados.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <CtaLink
                href="mailto:contacto@nexum.studio"
                label="Quiero mi sistema personalizado"
              />
              <CtaLink
                href="https://wa.me/525500000000?text=Hola%20Nexum,%20quiero%20hablar%20sobre%20mi%20proyecto"
                label="Asesoría gratuita"
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
