import React from 'react';
import { motion } from 'framer-motion';

interface TerminalLineProps {
  command: string;
  output?: string[];
  delay: number;
}

export const TerminalLine = ({ command, output = [], delay }: TerminalLineProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 2, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center text-sm mb-1">
        <span className="text-emerald-400">➜</span>
        <span className="text-blue-400 ml-2">~/backend-dev</span>
        <span className="text-gray-400 ml-2">{command}</span>
      </div>
      {output.map((line, index) => (
        <motion.div
          key={index}
          className="text-gray-400 text-sm ml-4 mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: delay + 0.2 + index * 0.1 }}
        >
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
};