import {  ArrowRight, Github, Linkedin } from 'lucide-react';
import { BorderAnimation } from './BorderAnimation';
import { Button } from './ui/Button';
import { heroSectionDescription } from '../data';
import './Hero.css'; // Import the CSS file for animations
import { useEffect } from 'react';
import CreativeTextAnimation from './creativeTextAnimation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FloatingNavBar } from './floatingNavbar';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { TextEffect } from './ui/text-effect';
import { TextShimmer } from './ui/text-shimmer';

const socialLinks = [
  { href: "https://github.com/lakhanjindam", icon: Github, label: "GitHub", color: 'emerald' },
  { href: "https://linkedin.com/in/lakhan-jindam", icon: Linkedin, label: "LinkedIn", color: 'emerald' }
]

const COLORS_TOP = ["#34D399", "#38A169", "#2E865F", "#1E67C6"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-2 sm:px-4 py-8 sm:py-12 lg:py-20 overflow-hidden" id="home">
      <FloatingNavBar />
      {/* NOTE: disabled for now
       <TerminalWindow /> 
       */}  
      {/* <BorderAnimation /> */}
      
      <div className="relative z-10 max-w-6xl mx-auto w-full px-2 sm:px-4 lg:px-8">
        <div className="pt-16 lg:pt-0 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
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
              className="space-y-2 sm:space-y-4"
            >
              <motion.h1
                className="font-grotesk text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1}}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <TextShimmer
                  duration={5}
                  className='[--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'
                >
                  Lakhan Jindam
                </TextShimmer>
              </motion.h1>
              
              <p>
                <CreativeTextAnimation />
              </p>
              
              <p className="text-lg sm:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 cool-italic">
                {heroSectionDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              <Button href="#skills" variant="primary" className="group text-sm sm:text-base w-3/4 sm:w-auto mx-auto sm:mx-0">
                <span>View My Skills</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="#contact" variant="secondary" className="text-sm sm:text-base w-3/4 sm:w-auto mx-auto sm:mx-0">
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8"
            >
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <a key={href} href={href} className={`inline-flex items-center justify-center w-10 h-10 hover:text-${color}-400 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-100 transition-colors`} aria-label={label}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}            
            </motion.div>
          </motion.div>


          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-[300px] sm:max-w-[300px] md:max-w-[400px] mx-auto lg:max-w-none top-8 lg:top-0"
          >
            <DotLottieReact
              src="https://lottie.host/efc39ac5-f04a-467c-bf3d-758c507d68de/wkFIy80VoT.lottie"
              loop
              autoplay
            />
          </motion.div> */}
          
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={1} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;
