import { motion } from 'framer-motion';
import HighlightedText from './ui/HighlightedText';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="py-6 bg-gray-800/50 backdrop-blur-sm border-t border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <p className="text-sm text-gray-400">© Copyright {currentYear}</p>
        <HighlightedText text="Lakhan Jindam" />
        <p className="text-sm text-gray-400">• All rights reserved</p>
      </div>
    </motion.footer>
  );
};

export default Footer;