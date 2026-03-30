"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  brand,
  navigationItems,
  portfolioNavigationItems,
} from "@/data/landing-content";

import { Container } from "./Container";
import { CtaLink } from "./CtaLink";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

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

          <div className="hidden lg:block">
            <CtaLink href="/#contacto" label="Cotizar Proyecto" />
          </div>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center border border-[#d8d1d1]/60 bg-white text-[#111111] transition-colors hover:border-[#1e4fa6] hover:text-[#1e4fa6] lg:hidden"
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            </span>
            <span className="relative block h-4 w-5" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`fixed inset-0 z-40 bg-[#111111]/28 transition-opacity duration-300 lg:hidden ${
            isMobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden
        />

        <aside
          id="mobile-nav-drawer"
          aria-hidden={!isMobileMenuOpen}
          className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(88vw,24rem)] flex-col border-l border-[#d8d1d1]/30 bg-white shadow-[0_24px_60px_rgba(17,17,17,0.14)] transition-transform duration-300 lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#d8d1d1]/20 px-5 py-5">
            <div>
              <p className="font-display text-lg font-black uppercase tracking-tight text-[#111111]">
                {brand.name}.tech
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#5f5f5f]">
                Navegación
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center border border-[#d8d1d1]/50 bg-white text-[#111111] transition-colors hover:border-[#1e4fa6] hover:text-[#1e4fa6]"
            >
              <span className="sr-only">Cerrar menú</span>
              <span aria-hidden className="text-xl leading-none">
                ×
              </span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <div className="space-y-8">
              <section>
                <Link
                  href="/#hero"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block border border-[#1e4fa6]/18 bg-[#f4f8ff] px-4 py-4 font-display text-sm font-black uppercase tracking-tight text-[#1e4fa6] transition-colors hover:border-[#1e4fa6]/30 hover:bg-white"
                >
                  Inicio
                </Link>
              </section>

              <section>
                <p className="font-display text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#5f5f5f]">
                  Sitio
                </p>
                <nav className="mt-4 grid gap-2" aria-label="Navegación móvil">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="border border-[#d8d1d1]/25 bg-[#f8fbff] px-4 py-3 font-display text-sm font-bold uppercase tracking-tight text-[#111111] transition-colors hover:border-[#1e4fa6]/25 hover:text-[#1e4fa6]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </section>

              <section>
                <p className="font-display text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#5f5f5f]">
                  Portafolio
                </p>
                <div className="mt-4 grid gap-3">
                  {portfolioNavigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="border border-[#d8d1d1]/25 bg-white p-4 transition-colors hover:border-[#1e4fa6]/20"
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
              </section>
            </div>
          </div>

          <div className="border-t border-[#d8d1d1]/20 px-5 py-5">
            <div onClick={() => setIsMobileMenuOpen(false)}>
              <CtaLink href="/#contacto" label="Cotizar Proyecto" />
            </div>
          </div>
        </aside>
      </Container>
    </header>
  );
}
