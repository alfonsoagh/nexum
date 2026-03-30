export type NavigationItem = {
  href: string;
  label: string;
};

export type PortfolioNavigationItem = {
  description: string;
  href: string;
  label: string;
};

export type HeroMetric = {
  label: string;
  value: string;
};

export type Benefit = {
  description: string;
  title: string;
};

export type Service = {
  benefit: string;
  description: string;
  name: string;
  startingPrice?: string;
};

export type ServiceGroup = {
  id: string;
  intro: string;
  title: string;
  services: Service[];
};

export type AudienceProfile = {
  description: string;
  title: string;
};

export type CaseStudy = {
  name: string;
  problem: string;
  result: string;
  solution: string;
};

export type PriceReference = {
  name: string;
  note: string;
  startingPrice: string;
};
