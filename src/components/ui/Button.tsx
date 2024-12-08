import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button = ({ 
  variant = 'primary', 
  children, 
  className,
  href,
  ...props 
}: ButtonProps) => {
  const baseStyles = "group relative px-8 py-3 overflow-hidden rounded-full font-medium text-white";
  const variants = {
    primary: "bg-gradient-to-r from-emerald-600 to-blue-600 shadow-lg shadow-emerald-500/30 hover:from-emerald-700 hover:to-blue-700",
    secondary: "border border-white/20 hover:bg-white/10"
  };

  const Component = href ? motion.a : motion.button;

  const componentProps = {
    ...props,
    href,
    className: cn(
      baseStyles, 
      variants[variant], 
      className,
      "relative overflow-hidden group"
    ),
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  return (
    <Component {...componentProps}>
      {/* Shine effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ x: '-100%' }}
        animate={{ 
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 2
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent h-full w-1/2 transform -skew-x-12" />
      </motion.div>

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};