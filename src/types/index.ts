export interface ProfileData {
  name: string;
  role: string;
  rotatingRoles: string[];
  experience: string;
  tagline: string;
  headline: string;
  bio: string[];
  location: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  avatar?: string;
  stats: {
    label: string;
    value: string;
    description: string;
    icon: string;
  }[];
}

export interface SkillItem {
  name: string;
  category: 'backend' | 'frontend' | 'apis' | 'database' | 'devops' | 'cloud' | 'security' | 'architecture';
  featured?: boolean;
  level?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
}

export interface ArchitectureNode {
  id: string;
  layer: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface ProjectDomain {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  capabilities: string[];
  accentColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  domain: string;
  description: string;
  longDescription: string;
  technologies: string[];
  featured: boolean;
  metrics?: string;
  image?: string;
  github?: string;
  liveUrl?: string;
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  badgeText?: string;
}
