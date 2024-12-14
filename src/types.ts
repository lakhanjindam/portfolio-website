import { LucideIcon } from "lucide-react";

export type SkillGrade = 'A' | 'B' | 'C' | 'D';

export interface Skill {
  name: string;
  grade: SkillGrade;
}

export interface SkillCategory {
  icon: LucideIcon; // LucideIcon type
  title: string;
  skills: Skill[];
}

export interface Certification {
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
}