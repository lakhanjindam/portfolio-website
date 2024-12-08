import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-800" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-gray-400 mb-12 text-lg">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <div className="flex justify-center gap-8">
            <motion.a
              href="mailto:your.email@example.com"
              className="text-white hover:text-emerald-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://github.com"
              className="text-white hover:text-emerald-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              className="text-white hover:text-emerald-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;