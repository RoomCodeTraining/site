export interface Realisation {
  id: number;
  type: string;
  title: string;
  description: string;
  technologies: string[];
  main_image: string;
  images?: string[];
  application_link?: string;
  slug: string;
}
