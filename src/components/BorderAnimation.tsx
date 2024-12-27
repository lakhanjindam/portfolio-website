import { motion } from 'framer-motion';

/**
 * Border animation component.
 * This component renders 4 divs that animate in a way that creates a border animation effect.
 * The animation is done by animating the x and y positions of the divs, which are styled with linear gradients.
 * The animation is set to repeat infinitely.
 * The delay between each animation is set to create a staggered effect.
 * @returns {JSX.Element}
 */
export const BorderAnimation = () => {
  return (
    <>
      {/* Top border animation */}
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
      
      {/* Right border animation */}
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
      
      {/* Bottom border animation */}
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
      
      {/* Left border animation */}
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