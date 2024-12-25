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

export type { NavItem, Certification, SkillCategory, Skill, SkillGrade };
