import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface TimelineDotProps {
  progress: MotionValue<number>;
  index: number;
  isEven: boolean;
}

const TimelineDot: React.FC<TimelineDotProps> = ({ progress, index, isEven }) => {
  const scale = useTransform(progress, [0, 0.5], [0.7, 1]);
  const opacity = useTransform(progress, [0, 0.5], [0.7, 1]);
  const isActive = useTransform(progress, [0.2, 0.3], [0, 1]);
  
  return (
    <div className="flex items-center z-10">
      <motion.div
        style={{
          scale,
          opacity
        }}
        transition={{ duration: 0.3 }}
        className="relative flex items-center justify-center"
      >
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" />
        <motion.div
          className="absolute -inset-2 rounded-full bg-emerald-400/20"
          style={{ opacity: isActive }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
      
      {!isEven && (
        <motion.div
          style={{
            scaleX: progress,
            transformOrigin: "left"
          }}
          transition={{ duration: 0.4 }}
          className="h-[2px] w-[50px] bg-gradient-to-r from-emerald-400 to-transparent"
        />
      )}
      
      {isEven && (
        <motion.div
          style={{
            scaleX: progress,
            transformOrigin: "right"
          }}
          transition={{ duration: 0.4 }}
          className="h-[2px] w-[50px] bg-gradient-to-l from-emerald-400 to-transparent order-first"
        />
      )}
    </div>
  );
};

export default TimelineDot;