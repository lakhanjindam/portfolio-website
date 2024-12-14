import React from 'react';
import { motion } from 'framer-motion';

interface HighlightedTextProps {
  text: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text }) => {
  return (
    <motion.span className="relative inline-block ml-1 group">
      <span className="text-emerald-400">{text}</span>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ 
          scaleX: 1,
          transition: { 
            duration: 4, 
            ease: "easeInOut" 
          }
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%'],
        }}
        transition={{
          backgroundPosition: {
            repeat: Infinity,
            duration: 3,
            ease: "linear"
          }
        }}
        style={{
          background: 'linear-gradient(to right, #34d399, #3b82f6, #34d399)',
          backgroundSize: '200% 100%'
        }}
      />
    </motion.span>
  );
};

export default HighlightedText;