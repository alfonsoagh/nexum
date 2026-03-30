import type {
  AudienceProfile,
  Benefit,
  CaseStudy,
  HeroMetric,
  NavigationItem,
  PortfolioNavigationItem,
  PriceReference,
  ServiceGroup,
} from "@/types/landing";

export const brand = {
  description:
    "Estudio digital que combina desarrollo de software y diseño visual para vender más y operar mejor.",
  name: "Nexum",
  primaryMessage: "Impulsa tu negocio con tecnología y diseño que sí vende",
};

export const navigationItems: NavigationItem[] = [
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#para-quien", label: "¿Para quién?" },
  { href: "/#casos", label: "Casos" },
  { href: "/#contacto", label: "Contacto" },
];

export const portfolioNavigationItems: PortfolioNavigationItem[] = [
  {
    description: "React, Node, APIs, dashboards y productos operativos.",
    href: "/software",
    label: "Ingeniería de software",
  },
  {
    description: "Branding, fotografía, dirección visual y sistemas de marca.",
    href: "/diseno",
    label: "Diseño digital",
  },
];

export const heroMetrics: HeroMetric[] = [
  { label: "Proyectos enfocados en conversión", value: "100%" },
  { label: "Acompañamiento durante implementación", value: "1 a 1" },
  { label: "Arquitectura pensada para crecer", value: "Escalable" },
];

export const benefits: Benefit[] = [
  {
    title: "Automatiza tareas repetitivas",
    description:
      "Reduce trabajo manual y elimina cuellos de botella para que tu equipo se enfoque en vender y operar mejor.",
  },
  {
    title: "Organiza tu información en un solo lugar",
    description:
      "Centraliza datos de clientes, ventas y procesos para tomar decisiones con claridad y menos improvisación.",
  },
  {
    title: "Mejora tu presencia digital",
    description:
      "Proyecta una marca profesional con una experiencia moderna que genera confianza desde el primer clic.",
  },
  {
    title: "Crece con herramientas a tu medida",
    description:
      "Implementa soluciones diseñadas para tu negocio actual y preparadas para escalar conforme aumenten tus operaciones.",
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    id: "desarrollo-tecnologia",
    title: "Desarrollo y tecnología",
    intro:
      "Construimos productos digitales robustos para ordenar, automatizar y acelerar tu operación comercial.",
    services: [
      {
        name: "Desarrollo de páginas web",
        description:
          "Sitios profesionales con enfoque en conversión, velocidad y claridad para tus clientes.",
        benefit: "Más confianza y más oportunidades de venta.",
        startingPrice: "Desde $2,000 MXN",
      },
      {
        name: "Sistemas web a la medida",
        description:
          "Plataformas para gestionar operaciones, clientes, inventario y procesos internos.",
        benefit: "Control real del negocio sin depender de hojas sueltas.",
        startingPrice: "Desde $7,000 MXN",
      },
      {
        name: "Aplicaciones móviles Android",
        description:
          "Apps funcionales para capturar información, operar procesos o conectar con tu equipo en campo.",
        benefit: "Tu operación disponible desde cualquier lugar.",
        startingPrice: "Desde $8,000 MXN",
      },
      {
        name: "Automatización de procesos",
        description:
          "Flujos automáticos entre formularios, bases de datos, reportes y notificaciones.",
        benefit: "Menos errores manuales y más tiempo productivo.",
        startingPrice: "Desde $4,000 MXN",
      },
      {
        name: "Dashboards y reportes",
        description:
          "Paneles visuales para medir ventas, desempeño y métricas clave en tiempo real.",
        benefit: "Decisiones más rápidas con datos claros.",
      },
      {
        name: "Bases de datos e integración de sistemas",
        description:
          "Conectamos tus herramientas actuales para que la información fluya sin retrabajo.",
        benefit: "Procesos conectados y operación más ordenada.",
      },
    ],
  },
  {
    id: "diseno-digital",
    title: "Diseño digital",
    intro:
      "Diseñamos identidad y experiencias visuales que elevan la percepción de tu marca y mejoran la comunicación.",
    services: [
      {
        name: "Branding",
        description:
          "Definición visual de marca: estilo, tono y dirección gráfica para comunicar con coherencia.",
        benefit: "Una marca consistente que transmite valor profesional.",
      },
      {
        name: "Diseño visual para negocios",
        description:
          "Piezas gráficas para campañas, presentaciones y material comercial.",
        benefit: "Mensajes más claros que sí conectan con tu audiencia.",
      },
      {
        name: "Diseño de interfaz",
        description:
          "Interfaces limpias, intuitivas y enfocadas en facilitar el uso de tus herramientas digitales.",
        benefit: "Mejor experiencia para usuarios y equipo interno.",
      },
      {
        name: "Edición de contenido visual",
        description:
          "Optimización de imágenes, videos cortos y recursos para soportar tus objetivos comerciales.",
        benefit: "Contenido más sólido para captar atención y generar acción.",
      },
      {
        name: "Material para redes y presencia digital",
        description:
          "Plantillas y piezas listas para publicar con criterio de marca.",
        benefit: "Comunicación constante sin improvisar cada publicación.",
      },
    ],
  },
  {
    id: "soluciones-completas",
    title: "Soluciones completas",
    intro:
      "Integramos diseño y desarrollo en paquetes completos para que avances más rápido y con una sola dirección.",
    services: [
      {
        name: "Página web completa",
        description:
          "Sitio profesional con diseño personalizado, estructura comercial y base técnica sólida.",
        benefit: "Presencia digital lista para vender desde el día uno.",
        startingPrice: "Desde $6,000 MXN",
      },
      {
        name: "Sistema con interfaz profesional",
        description:
          "Software de operación interna con experiencia de uso clara para tu equipo.",
        benefit: "Procesos más ágiles y menor curva de adopción.",
        startingPrice: "Desde $12,000 MXN",
      },
      {
        name: "Solución integral para digitalizar un negocio",
        description:
          "Diagnóstico, estrategia, diseño e implementación para transformar procesos manuales.",
        benefit: "Digitalización real con impacto en productividad y crecimiento.",
      },
    ],
  },
];

export const audienceProfiles: AudienceProfile[] = [
  {
    title: "Emprendedores que buscan presencia profesional",
    description:
      "Ideal si necesitas una imagen seria para vender mejor, captar clientes y competir con marcas consolidadas.",
  },
  {
    title: "Negocios que aún trabajan con Excel o WhatsApp",
    description:
      "Si tu operación depende de procesos manuales, te ayudamos a ordenarla con herramientas digitales claras.",
  },
  {
    title: "Empresas que quieren automatizar procesos",
    description:
      "Implementamos soluciones que reducen retrabajo y mejoran tiempos de respuesta en áreas clave.",
  },
  {
    title: "Marcas que necesitan diseño + tecnología",
    description:
      "Unificamos identidad visual y desarrollo para evitar proyectos desconectados entre forma y función.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    name: "Landing para negocio local",
    problem:
      "La empresa dependía de redes sociales y mensajes sueltos para captar clientes.",
    solution:
      "Creamos una landing orientada a conversión con propuesta clara, formulario y CTA directo.",
    result:
      "Más consultas calificadas y mejor percepción de marca en las primeras semanas.",
  },
  {
    name: "Sistema de gestión interna",
    problem:
      "El equipo administraba tareas, estatus y seguimiento en múltiples hojas de cálculo.",
    solution:
      "Desarrollamos un sistema web centralizado con módulos por área y control de usuarios.",
    result:
      "Mejor trazabilidad del trabajo y reducción significativa de errores operativos.",
  },
  {
    name: "Dashboard de métricas",
    problem:
      "La dirección tomaba decisiones con reportes tardíos y datos dispersos.",
    solution:
      "Implementamos un panel con métricas de ventas, rendimiento y alertas clave.",
    result:
      "Decisiones más rápidas y enfoque en indicadores realmente relevantes.",
  },
  {
    name: "Rediseño visual con sitio web",
    problem:
      "La marca tenía imagen inconsistente y un sitio que no reflejaba su nivel de servicio.",
    solution:
      "Actualizamos branding, línea visual y sitio corporativo con enfoque comercial.",
    result:
      "Mayor confianza en reuniones de venta y mejor respuesta de nuevos prospectos.",
  },
];

export const pricingReferences: PriceReference[] = [
  {
    name: "Landing page básica",
    startingPrice: "$2,000 MXN",
    note: "Ideal para validar una oferta y captar clientes.",
  },
  {
    name: "Sitio web informativo",
    startingPrice: "$4,000 MXN",
    note: "Perfecto para presencia profesional y autoridad digital.",
  },
  {
    name: "Sitio web completo",
    startingPrice: "$6,000 MXN",
    note: "Estructura comercial, secciones completas y mayor alcance.",
  },
  {
    name: "Sistema web básico",
    startingPrice: "$7,000 MXN",
    note: "Gestión operativa inicial para procesos internos.",
  },
  {
    name: "Sistema intermedio",
    startingPrice: "$12,000 MXN",
    note: "Más módulos, flujos personalizados e integración de datos.",
  },
  {
    name: "App Android básica",
    startingPrice: "$8,000 MXN",
    note: "Operación móvil para campo o interacción directa con usuarios.",
  },
  {
    name: "Automatización básica",
    startingPrice: "$4,000 MXN",
    note: "Conecta tareas repetitivas y reduce tiempo manual.",
  },
];
