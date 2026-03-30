import type { Metadata } from "next";

import { SoftwarePortfolioPage } from "@/components/portfolio";

export const metadata: Metadata = {
  title: "Nexum | Portafolio de Ingeniería de Software",
  description:
    "Arquitectura, dashboards, integraciones y productos digitales orientados a operación y crecimiento.",
};

export default function SoftwarePage() {
  return <SoftwarePortfolioPage />;
}
