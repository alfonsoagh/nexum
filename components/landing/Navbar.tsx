import Link from "next/link";

import {
  brand,
  navigationItems,
  portfolioNavigationItems,
} from "@/data/landing-content";

import { Container } from "./Container";
import { CtaLink } from "./CtaLink";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d8d1d1]/70 bg-white/90 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/#hero"
            className="font-display text-2xl font-black uppercase tracking-tight text-[#111111] sm:text-[1.75rem]"
            aria-label={`Ir al inicio de ${brand.name}`}
          >
            {brand.name}.tech
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-sm font-bold uppercase tracking-tight text-[#5f5f5f] transition-colors duration-200 hover:text-[#1e4fa6] focus-visible:text-[#173c80]"
              >
                {item.label}
              </Link>
            ))}

            <div className="group/portfolio relative">
              <button
                type="button"
                className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-tight text-[#5f5f5f] transition-colors duration-200 hover:text-[#1e4fa6] focus-visible:text-[#173c80]"
              >
                Portafolio
                <span className="text-[#1e4fa6]" aria-hidden>
                  +
                </span>
              </button>

              <div className="pointer-events-none absolute left-1/2 top-full z-20 w-[24rem] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-hover/portfolio:pointer-events-auto group-hover/portfolio:translate-y-0 group-hover/portfolio:opacity-100 group-focus-within/portfolio:pointer-events-auto group-focus-within/portfolio:translate-y-0 group-focus-within/portfolio:opacity-100">
                <div className="border border-[#d8d1d1]/30 bg-white p-3 shadow-[0_20px_40px_rgba(17,17,17,0.08)]">
                  <div className="grid gap-3">
                    {portfolioNavigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="border border-transparent bg-[#f4f8ff] p-4 transition-all duration-200 hover:border-[#1e4fa6]/20 hover:bg-white"
                      >
                        <p className="font-display text-sm font-black uppercase tracking-tight text-[#111111]">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-[#5f5f5f]">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <CtaLink href="/#contacto" label="Cotizar Proyecto" />
        </div>

        <div className="mt-2 border-t border-[#d8d1d1]/20 pt-2 lg:hidden">
          <nav className="flex items-center gap-6 overflow-x-auto pb-2" aria-label="Navegación">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 font-display text-xs font-bold uppercase tracking-tight text-[#5f5f5f] transition-colors duration-200 hover:text-[#1e4fa6] focus-visible:text-[#173c80]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <details className="border border-[#d8d1d1]/25 bg-white/85">
            <summary className="list-none cursor-pointer px-4 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] text-[#111111] [&::-webkit-details-marker]:hidden">
              Portafolio
            </summary>
            <div className="grid gap-3 border-t border-[#d8d1d1]/20 p-4">
              {portfolioNavigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-[#d8d1d1]/25 bg-[#f4f8ff] p-4 transition-colors hover:border-[#1e4fa6]/20"
                >
                  <p className="font-display text-sm font-black uppercase tracking-tight text-[#111111]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#5f5f5f]">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
