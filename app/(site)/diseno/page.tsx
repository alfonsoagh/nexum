import type { Metadata } from "next";

import { DesignPortfolioPage } from "@/components/portfolio";

export const metadata: Metadata = {
  title: "Nexum | Portafolio de Diseño Digital",
  description:
    "Branding, fotografía, dirección visual y contenido editorial para marcas que buscan una presencia premium.",
};

export default function DesignPage() {
  return <DesignPortfolioPage />;
}
