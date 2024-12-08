import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
}

export const Button = ({ 
  variant = 'primary', 
  children, 
  className,
  href,
  ...props 
}: ButtonProps) => {
  const baseStyles = "group relative px-8 py-3 overflow-hidden rounded-full font-medium";
  const variants = {
    primary: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-500 before:to-blue-500",
    secondary: "border border-white/20 hover:bg-white/10"
  };

  const Component = href ? motion.a : motion.button;
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  return (
    <Component
      href={href}
      className={cn(baseStyles, variants[variant], className)}
      {...motionProps}
      {...props}
    >
      <span className="relative">{children}</span>
    </Component>
  );
};