import {
  AudienceSection,
  BenefitsSection,
  CasesSection,
  FinalCtaSection,
  Footer,
  HeroSection,
  MotionOrchestrator,
  Navbar,
  ServicesSection,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[#1e4fa6] focus:px-3 focus:py-2 focus:font-display focus:text-xs focus:font-bold focus:uppercase focus:tracking-tight focus:text-white"
      >
        Saltar al contenido principal
      </a>

      <div className="relative overflow-x-clip">
        <MotionOrchestrator />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-[0.1]" />
          <div className="absolute inset-0 fx-scan bg-[linear-gradient(120deg,transparent_25%,rgba(30,79,166,0.05)_50%,transparent_75%)] opacity-0 md:opacity-100" />
        </div>

        <Navbar />

        <main>
          <HeroSection />
          <BenefitsSection />
          <ServicesSection />
          <AudienceSection />
          <CasesSection />
          <FinalCtaSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
