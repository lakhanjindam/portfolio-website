import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface TimelineLineProps {
  progress: MotionValue<number>;
}

const TimelineLine: React.FC<TimelineLineProps> = ({ progress }) => {
  const scaleY = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 sm:-translate-x-1/2 w-px z-0">
      <div className="h-full w-full bg-gray-700/50" />
      <motion.div 
        style={{
          scaleY,
          height: "100%",
          transformOrigin: "top"
        }}
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-emerald-400 to-blue-500 w-full"
      />
    </div>
  );
};

export default TimelineLine;