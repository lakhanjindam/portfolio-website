import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface SkillCategoryProps {
  icon: LucideIcon;
  title: string;
  skills: {
    name: string;
    level: number;
    rating: number;
  }[];
  index: number;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({
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
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-emerald-400">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={cn(
                      "h-full rounded-full",
                      "bg-gradient-to-r from-emerald-500 to-blue-500"
                    )}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                  />
                </div>
                {/* <div className="skill-category mt-2">
                  <h3 className="text-xl font-grotesk font-semibold text-white mb-2">{skill.name}</h3>
                  <div className="rating-bar">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={`star ${index < skill.rating ? 'filled' : ''}`}>★</span>
                    ))}
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};