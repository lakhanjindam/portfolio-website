import React from 'react';
import { ProgressBar } from './progressBar'
import { GradeIcon } from './gradeIcon';
import { Skill } from '../../types';

interface SkillItemProps {
  skill: Skill;
  index: number;
}

export const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-3">
        <GradeIcon grade={skill.grade} />
        <div className="flex-1">
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">{skill.name}</span>
          </div>
          <ProgressBar grade={skill.grade} delay={0.2 + index * 0.1} />
        </div>
      </div>
    </div>
  );
};