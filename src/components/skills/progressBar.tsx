import React from 'react';
import { motion } from 'framer-motion';
import { getGradePercentage } from '../../utils/skillUtils';
import { cn } from '../../utils/cn';
import { SkillGrade } from '../../types';

interface ProgressBarProps {
  grade: SkillGrade
  delay?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ grade, delay = 0 }) => {
  const percentage = getGradePercentage(grade);
  
  return (
    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
      <motion.div
        className={cn(
          "h-full rounded-full",
          "bg-gradient-to-r from-emerald-500 to-blue-500"
        )}
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay }}
      />
    </div>
  );
};