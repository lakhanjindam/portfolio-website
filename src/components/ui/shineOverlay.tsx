import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ShineOverlayProps {
  className?: string;
}

export const ShineOverlay: React.FC<ShineOverlayProps> = ({ className }) => {
  return (
    <motion.div
      className={cn(
        "absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100",
        className
      )}
      initial={false}
      animate={{
        backgroundPosition: ['200% 50%', '-50% 50%'],
      }}
      transition={{
        duration: 1.5,
        ease: 'linear',
        repeat: 0,
      }}
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
      }}
    />
  );
};