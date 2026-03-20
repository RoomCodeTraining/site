export interface Realisation {
  id: number;
  type: string;
  title: string;
  description: string;
  // Copy orientée business (affichée sur la page de détail)
  problem?: string[];
  solution?: string[];
  benefit?: string[];
  // Mini-preuves / KPI suivis (sans inventer de chiffres si non fournis)
  kpis?: string[];
  technologies: string[];
  main_image: string;
  images?: string[];
  application_link?: string;
  slug: string;
  isPublic?: boolean;
}
