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

