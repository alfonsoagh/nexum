import {
  AudienceSection,
  BenefitsSection,
  CasesSection,
  FinalCtaSection,
  HeroSection,
  ServicesSection,
} from "@/components/landing";
import { PortfolioRouterSection } from "@/components/portfolio";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioRouterSection />
      <BenefitsSection />
      <ServicesSection />
      <AudienceSection />
      <CasesSection />
      <FinalCtaSection />
    </>
  );
}
