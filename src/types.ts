import { LucideIcon } from "lucide-react";

type SkillGrade = 'A' | 'B' | 'C' | 'D';

interface Skill {
  name: string;
  grade: SkillGrade;
}

interface SkillCategory {
  icon: LucideIcon; // LucideIcon type
  title: string;
  skills: Skill[];
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  credentialUrl: string;
  logo: string;
  featured?: boolean;
  iconColor?: string;
  description?: string;
  skills: string[]
}


interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

// Interfaces for experience
interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  companyURL: string;
}

// Interfaces for projects
interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

interface LiveStatusItem {
  id: string;
  tabLabel: string;
  title: string;
  subtitle?: string;
  value?: string; // keep optional for backward compat if needed, or remove if unused. Let's keep strict new structure.
  image: string;
  link?: string;
  icon: LucideIcon;
  color: string;
  tags: string[];
  subItems?: LiveStatusContent[]; // Support for multiple items (e.g., Watching list)
}

interface LiveStatusContent {
  title: string;
  subtitle?: string;
  image: string;
  link?: string;
  tags: string[];
  id?: string; // Optional ID for internal tracking if needed
  malId?: number; // MyAnimeList ID for fetching live ratings via Jikan API
  rating?: number; // e.g., MAL score like 8.5
  season?: string; // e.g., "Season 2", "Final Season"
  streamingPlatform?: {
    name: string; // e.g., "Crunchyroll", "Netflix"
    url: string;  // Link to the anime page on that platform
  };
  episodes?: number; // Total episodes or current count
  airingStatus?: string; // e.g., "Currently Airing", "Finished"
}

export type { NavItem, Certification, SkillCategory, Skill, SkillGrade, Experience, Project, LiveStatusItem, LiveStatusContent };
