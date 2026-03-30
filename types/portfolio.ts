export type PortfolioRouterCard = {
  description: string;
  eyebrow: string;
  href: string;
  label: string;
  tags: string[];
  title: string;
};

export type SoftwareMetric = {
  label: string;
  value: string;
};

export type SoftwareLayer = {
  detail: string;
  label: string;
};

export type SoftwarePillar = {
  description: string;
  title: string;
};

export type SoftwareProject = {
  architecture: string[];
  category: string;
  outcome: string;
  stack: string[];
  summary: string;
  title: string;
};

export type DesignMetric = {
  label: string;
  value: string;
};

export type DesignDiscipline = {
  description: string;
  title: string;
};

export type DesignProject = {
  alt: string;
  category: string;
  height: number;
  image: string;
  summary: string;
  title: string;
  width: number;
};
