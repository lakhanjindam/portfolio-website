import { motion } from 'framer-motion';
import {  ArrowRight, Github, Linkedin } from 'lucide-react';
import { BorderAnimation } from './BorderAnimation';
import { Button } from './ui/Button';
import { TerminalWindow } from './terminal/TerminalWindow';
import { currentCompany, heroSectionDescription } from '../data';
import './Hero.css'; // Import the CSS file for animations
import { useEffect } from 'react';
import HighlightedText from './HighlightedText';
import CreativeTextAnimation from './creativeTextAnimation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FloatingNavBar } from './floatingNavbar';

//NOTE: Add animation
const Hero = () => {
  useEffect(() => {
    const nameElement = document.querySelector('.handwriting');
    if (nameElement) {
      nameElement.classList.add('animate');
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 overflow-hidden" id='home'>
      <FloatingNavBar />
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
              <motion.h1
                className="font-grotesk text-5xl sm:text-6xl md:text-7xl font-bold text-gradient"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1}}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Lakhan&nbsp;Jindam
              </motion.h1>
              <p>
                <CreativeTextAnimation />
              </p>
              
              <p className="text-lg sm:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 cool-italic">
                <em>{heroSectionDescription}</em>
                {/* <HighlightedText text={currentCompany} /> */}
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
            animate={{ opacity: 1, scale: 2 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative lg:block"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none">
            <DotLottieReact
              src="https://lottie.host/efc39ac5-f04a-467c-bf3d-758c507d68de/wkFIy80VoT.lottie"
              loop
              autoplay
            />
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
