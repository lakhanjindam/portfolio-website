import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-emerald-500/10 rounded-full"
          style={{
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 2, 2, 1],
            opacity: [0.1, 0.2, 0.2, 0.1],
            x: [0, 100, 100, 0],
            y: [0, -100, -100, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
    </div>
  );
};

export default AnimatedBackground;