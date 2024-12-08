import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import TimelineDot from './TimelineDot';
import { cn } from '../../utils/cn';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  index: number;
  progress: MotionValue<number>;
  total: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  company, 
  description, 
  index,
  progress,
  total
}) => {
  const isEven = index % 2 === 0;
  
  // Calculate the progress threshold for this item
  const threshold = index / total;
  const nextThreshold = (index + 1) / total;
  
  // Create a motion value that goes from 0 to 1 for this item
  const itemProgress = useTransform(
    progress,
    [threshold, nextThreshold],
    [0, 1]
  );

  return (
    <div className="relative py-16">
      {/* Center container for the dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <TimelineDot progress={itemProgress} index={index} isEven={isEven} />
      </div>
      
      <div className="grid md:grid-cols-[1fr_100px_1fr] items-center">
        <motion.div
          className={cn(
            "space-y-2 px-8",
            !isEven && "md:col-start-3",
            "bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50",
            isEven ? "md:text-right" : "md:text-left"
          )}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          style={{
            opacity: useTransform(itemProgress, [0, 0.5], [0.3, 1]),
            x: useTransform(itemProgress, [0, 1], [isEven ? -20 : 20, 0])
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="text-emerald-400 font-medium block">{year}</span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-emerald-400/80 font-medium">{company}</p>
          <p className="text-gray-400">{description}</p>
        </motion.div>
        
        <div className="w-full h-full" />
        
        {isEven && <div />}
      </div>
    </div>
  );
};

export default TimelineItem;