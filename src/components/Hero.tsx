import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Github, Linkedin } from 'lucide-react';
import { BorderAnimation } from './BorderAnimation';
import { Button } from './ui/Button';
import { TerminalWindow } from './terminal/TerminalWindow';
import { currentCompany, heroSectionDescription, heroSectionSkills } from '../data';
import './Hero.css'; // Import the CSS file for animations
import { useEffect } from 'react';
import HighlightedText from './HighlightedText';
import CreativeTextAnimation from './creativeTextAnimation';

const Hero = () => {
  useEffect(() => {
    const nameElement = document.querySelector('.handwriting');
    if (nameElement) {
      nameElement.classList.add('animate');
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 overflow-hidden">
      <TerminalWindow />
      <BorderAnimation />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="pt-16 lg:pt-0 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-4"
            >
              <p>
                <CreativeTextAnimation />
              </p>
              <motion.h1
                className="font-grotesk text-5xl sm:text-6xl md:text-7xl font-bold space-y-2 sm:space-y-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1}}
              >
                <span className="block">Senior</span>
                <span className="block text-gradient">Software Engineer</span>
              </motion.h1>
              <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
                {heroSectionDescription}
                <HighlightedText text={currentCompany} />
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8"
            >
              <Button href="#skills" variant="primary" className="group">
                <span>View My Skills</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="#contact" variant="secondary">  
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 mt-8"
            >
              <a href="https://github.com/lakhanjindam" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/lakhan-jindam" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>              
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative lg:block"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [-1, 1, -1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
              >
                <Terminal className="w-16 h-16 text-emerald-400 mb-6" />
                <div className="space-y-2">
                  {heroSectionSkills.map(({ color, name }, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-${color}`}></div>
                      <span className="text-sm text-gray-300">{name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
