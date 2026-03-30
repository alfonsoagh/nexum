import type {
  DesignDiscipline,
  DesignMetric,
  DesignProject,
  PortfolioRouterCard,
  SoftwareLayer,
  SoftwareMetric,
  SoftwarePillar,
  SoftwareProject,
} from "@/types/portfolio";

export const portfolioRouterCards: PortfolioRouterCard[] = [
  {
    description:
      "Sistemas, dashboards, automatizaciones y productos internos con foco en arquitectura, claridad operativa y escalabilidad real.",
    eyebrow: "Portafolio técnico",
    href: "/software",
    label: "Explorar ingeniería",
    tags: ["React", "Node", "APIs", "Dashboards"],
    title: "Ingeniería de software para equipos que necesitan orden y velocidad",
  },
  {
    description:
      "Branding, fotografía y dirección visual para marcas que necesitan presencia premium, consistencia y piezas listas para publicar.",
    eyebrow: "Portafolio visual",
    href: "/diseno",
    label: "Explorar diseño",
    tags: ["Branding", "Foto", "Editorial", "Contenido"],
    title: "Diseño digital y fotografía para elevar percepción y narrativa",
  },
];

export const softwareMetrics: SoftwareMetric[] = [
  { label: "Frontend React con enfoque en adopción", value: "UX + lógica" },
  { label: "Servicios, APIs e integraciones listas para crecer", value: "Node-ready" },
  { label: "Estructuras modulares y medibles", value: "Escalable" },
];

export const softwareLayers: SoftwareLayer[] = [
  {
    detail: "Interfaces claras, paneles accionables y flujos pensados para equipos que operan todos los días.",
    label: "Frontend React",
  },
  {
    detail: "Capas de servicio y endpoints para CRM, formularios, automatizaciones y herramientas internas.",
    label: "APIs e integraciones",
  },
  {
    detail: "Modelos de información que priorizan trazabilidad, consistencia y lectura rápida para negocio.",
    label: "Data & reporting",
  },
  {
    detail: "Monitoreo de procesos, eventos clave y puntos de mejora desde una sola vista operativa.",
    label: "Operación medible",
  },
];

export const engineeringPillars: SoftwarePillar[] = [
  {
    description:
      "Cada proyecto parte de módulos claros para que el sistema pueda crecer sin rehacer la base técnica.",
    title: "Arquitectura modular",
  },
  {
    description:
      "Diseñamos el flujo antes de la pantalla para que la interfaz responda a decisiones operativas reales.",
    title: "Producto orientado al proceso",
  },
  {
    description:
      "Nos importa que la solución se entienda, se use y se convierta en una herramienta estable para el equipo.",
    title: "Adopción antes que complejidad",
  },
];

export const softwareProjects: SoftwareProject[] = [
  {
    architecture: ["Auth por roles", "Historial de actividad", "Dashboard operativo"],
    category: "Sistema web interno",
    outcome:
      "El equipo centraliza seguimiento, reduce retrabajo y detecta cuellos de botella antes de que afecten ventas.",
    stack: ["React", "Next.js", "Node APIs", "PostgreSQL"],
    summary:
      "Plataforma para coordinar tareas, estatus y responsables entre áreas comerciales y operativas.",
    title: "Centro de control para operación comercial",
  },
  {
    architecture: ["Cotizador dinámico", "Flujos de aprobación", "CRM ligero"],
    category: "Herramienta de ventas",
    outcome:
      "Las cotizaciones salen más rápido, con mejor consistencia visual y menos dependencias entre personas.",
    stack: ["React", "Node", "APIs", "Automations"],
    summary:
      "Sistema para generar propuestas, registrar clientes y dar seguimiento a oportunidades sin usar hojas sueltas.",
    title: "Hub de cotización y seguimiento",
  },
  {
    architecture: ["ETL ligero", "KPIs por área", "Alertas accionables"],
    category: "Dashboard ejecutivo",
    outcome:
      "Dirección y operaciones trabajan con un tablero común para reaccionar a tiempo y alinear prioridades.",
    stack: ["React", "Charts", "REST APIs", "Reporting"],
    summary:
      "Vista unificada para ventas, conversión, entregas y desempeño operativo en tiempo casi real.",
    title: "Dashboard de métricas para dirección",
  },
  {
    architecture: ["Sincronización offline", "Captura móvil", "API centralizada"],
    category: "App operativa",
    outcome:
      "La operación en campo reporta mejor, acelera tiempos de respuesta y mantiene trazabilidad desde el móvil.",
    stack: ["React Native-ready", "Node services", "Device sync", "Notifications"],
    summary:
      "Base funcional para apps que conectan usuarios en movimiento con la operación central del negocio.",
    title: "Experiencia móvil para equipos en campo",
  },
];

export const designMetrics: DesignMetric[] = [
  { label: "Dirección visual con criterio comercial", value: "Brand-first" },
  { label: "Fotografía pensada para campañas y catálogo", value: "Editorial" },
  { label: "Sistemas que conectan marca y contenido", value: "Consistente" },
];

export const designDisciplines: DesignDiscipline[] = [
  {
    description:
      "Construimos universos visuales con reglas claras para que la marca se vea sólida en web, social y material comercial.",
    title: "Brand systems",
  },
  {
    description:
      "Fotografía y selección de encuadres orientados a producto, atmósfera y narrativa, no sólo a documentación.",
    title: "Fotografía editorial",
  },
  {
    description:
      "Piezas para campañas, lanzamientos y presencia digital que mantienen coherencia entre tono, imagen y composición.",
    title: "Contenido de campaña",
  },
];

export const designProjects: DesignProject[] = [
  {
    alt: "Composición editorial con tonos azul profundo, recortes y tipografía para una campaña tecnológica.",
    category: "Dirección de arte",
    height: 1600,
    image: "/portfolio/design/editorial-wave.svg",
    summary:
      "Exploración visual para una campaña tecnológica con recortes, tipografía y ritmo editorial.",
    title: "Editorial para marca tecnológica",
    width: 1200,
  },
  {
    alt: "Escena de producto con bloques geométricos, reflejos y acento azul para branding contemporáneo.",
    category: "Fotografía de producto",
    height: 1400,
    image: "/portfolio/design/product-grid.svg",
    summary:
      "Sistema visual para producto con enfoque en volumen, textura y contraste limpio.",
    title: "Producto con lenguaje premium",
    width: 1200,
  },
  {
    alt: "Poster de identidad visual con retícula vertical, logotipo y acentos monocromáticos.",
    category: "Branding",
    height: 1700,
    image: "/portfolio/design/identity-column.svg",
    summary:
      "Aplicación de identidad para construir una presencia sobria, modular y memorable.",
    title: "Sistema de identidad y tono visual",
    width: 1200,
  },
  {
    alt: "Pieza de campaña con iluminación suave, textura fotográfica y composición centrada.",
    category: "Campaña digital",
    height: 1300,
    image: "/portfolio/design/campaign-frame.svg",
    summary:
      "Piezas pensadas para social y pauta con una narrativa visual más refinada.",
    title: "Campaña visual para lanzamiento",
    width: 1200,
  },
  {
    alt: "Composición fotográfica inspirada en estudio con sombras, superficies y bloques minimalistas.",
    category: "Fotografía de estudio",
    height: 1500,
    image: "/portfolio/design/studio-light.svg",
    summary:
      "Ensayo de iluminación y composición para catálogos, anuncios y materiales comerciales.",
    title: "Estudio fotográfico con atmósfera controlada",
    width: 1200,
  },
  {
    alt: "Diseño para contenido de marca con recortes orgánicos, fondo neutro y acentos en azul Nexum.",
    category: "Contenido visual",
    height: 1450,
    image: "/portfolio/design/brand-mosaic.svg",
    summary:
      "Formato flexible para piezas de contenido que necesitan mantenerse frescas sin salir de sistema.",
    title: "Mosaico para presencia digital",
    width: 1200,
  },
];
