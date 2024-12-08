import React from 'react';
import { motion } from 'framer-motion';

export const BorderAnimation = () => {
  return (
    <>
      <motion.div 
        className="absolute top-0 left-0 w-full h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.2), transparent)'
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div 
        className="absolute top-0 right-0 w-[2px] h-full"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.2), transparent)'
        }}
        animate={{
          y: ['-100%', '100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
          delay: 1,
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-0 w-full h-[2px]"
        style={{
          background: 'linear-gradient(270deg, transparent, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.2), transparent)'
        }}
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
          delay: 2,
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-[2px] h-full"
        style={{
          background: 'linear-gradient(360deg, transparent, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.2), transparent)'
        }}
        animate={{
          y: ['100%', '-100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
          delay: 3,
        }}
      />
    </>
  );
};