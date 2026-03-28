import Link from "next/link";

import { brand, navigationItems } from "@/data/landing-content";

import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-[#d8d1d1]/20 bg-white py-12">
      <Container className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-display text-2xl font-black uppercase tracking-tight text-[#111111]">
            {brand.name}.tech
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5f5f5f]">
            {brand.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#111111]">
            <a
              href="mailto:contacto@nexum.studio"
              className="border border-[#d8d1d1]/40 px-4 py-2 transition-colors hover:border-[#d61f2c]"
            >
              contacto@nexum.studio
            </a>
            <a
              href="https://wa.me/525500000000"
              className="border border-[#d8d1d1]/40 px-4 py-2 transition-colors hover:border-[#d61f2c]"
            >
              +52 55 0000 0000
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#5f5f5f]">
              Navegación
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#5f5f5f]">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#d61f2c]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#5f5f5f]">
              Próximo paso
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5f5f5f]">
              Cuéntanos tu objetivo y te proponemos una ruta clara para lanzar
              una solución digital rentable.
            </p>
            <Link
              href="#contacto"
              className="mt-4 inline-flex border border-[#f04a57] bg-[#d61f2c] px-4 py-2 font-display text-sm font-bold uppercase tracking-tight text-white transition-colors hover:bg-[#e33543]"
            >
              Iniciar conversación
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
