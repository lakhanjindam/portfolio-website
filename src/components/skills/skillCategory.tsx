import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { SkillItem } from './skillItem';
import {  Skill } from '../../types';

interface SkillCategoryProps {
  icon: LucideIcon;
  title: string;
  skills: Skill[];
  index: number;
}

export const CategoryItem: React.FC<SkillCategoryProps> = ({
  icon: Icon,
  title,
  skills,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/5"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-emerald-500/10">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
          <div className="space-y-3">
            {skills.map((skill, idx) => (
              <SkillItem key={idx} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};