import Link from "next/link";

import { brand, navigationItems } from "@/data/landing-content";

import { Container } from "./Container";
import { CtaLink } from "./CtaLink";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d8d1d1]/70 bg-white/90 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="#hero"
            className="font-display text-2xl font-black uppercase tracking-tight text-[#111111] sm:text-[1.75rem]"
            aria-label={`Ir al inicio de ${brand.name}`}
          >
            {brand.name}.tech
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-sm font-bold uppercase tracking-tight text-[#5f5f5f] transition-colors duration-200 hover:text-[#d61f2c] focus-visible:text-[#d61f2c] focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <CtaLink href="#contacto" label="Cotizar Proyecto" />
        </div>

        <nav
          className="mt-2 flex items-center gap-6 overflow-x-auto border-t border-[#d8d1d1]/20 pt-2 md:hidden"
          aria-label="Navegación"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 font-display text-xs font-bold uppercase tracking-tight text-[#5f5f5f] transition-colors duration-200 hover:text-[#d61f2c] focus-visible:text-[#d61f2c] focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
