import React from 'react';
import { motion } from 'framer-motion';
import { getGradeColor } from '../../utils/skillUtils';
import { cn } from '../../utils/cn';
import { SkillGrade } from '../../types';

interface GradeIconProps {
  grade: SkillGrade;
}

export const GradeIcon: React.FC<GradeIconProps> = ({ grade }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={cn(
        "w-6 h-6 rounded-full flex items-center justify-center",
        "text-xs font-bold border-2",
        getGradeColor(grade),
        `border-${getGradeColor(grade).split('-')[1]}-400/50`
      )}
    >
      {grade}
    </motion.div>
  );
};