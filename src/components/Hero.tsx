import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Github, Linkedin } from 'lucide-react';
import { BorderAnimation } from './BorderAnimation';
import { Button } from './ui/Button';
import { TerminalWindow } from './terminal/TerminalWindow';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 overflow-hidden">
      <TerminalWindow />
      <BorderAnimation />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-emerald-400 font-medium tracking-wide">Hi, I'm John Doe 👋</p>
              <h1 className="font-grotesk text-5xl md:text-6xl font-bold space-y-3">
                <span className="block">Backend</span>
                <span className="block text-gradient">Engineer</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-lg">
                Specialized in building scalable microservices and distributed systems. 
                Currently working on cloud-native applications at <span className="text-emerald-400">TechCorp</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button href="#projects" variant="primary" className="group">
                <span>View My Work</span>
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
              className="flex items-center gap-6 mt-8"
            >
              <a href="https://github.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <div className="h-4 w-px bg-gray-800"></div>
              <p className="text-sm text-gray-400">Available for select projects</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
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
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-sm text-gray-300">Microservices Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-sm text-gray-300">Cloud Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-sm text-gray-300">System Design</span>
                  </div>
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