export interface Job {
  company: string;
  title: string;
  range: string;
  url: string;
  bullets: string[];
  tech: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  featured: boolean;
  cover: string;
  external: string;
  github?: string;
  tech: string[];
  bullets?: string[];
  images?: string[];
}

export interface Skill {
  name: string;
  category: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
