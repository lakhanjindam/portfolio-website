import { SkillGrade } from '../types';

// getGradePercentage return percentage based on grade
export const getGradePercentage = (grade: SkillGrade): number => {
    const gradeMap: Record<SkillGrade, number> = {
      'A': 100,
      'B': 75,
      'C': 50,
      'D': 25,
    };
    return gradeMap[grade];
  };

// getGradeColor return colors based on grade
export const getGradeColor = (grade: SkillGrade): string => {
    const colorMap: Record<SkillGrade, string> = {
      'A': 'text-emerald-400',
      'B': 'text-blue-400',
      'C': 'text-yellow-400',
      'D': 'text-red-400',
    };
    return colorMap[grade];
  };
