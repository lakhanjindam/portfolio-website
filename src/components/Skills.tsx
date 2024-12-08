import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Cloud, Lock, GitBranch, Terminal } from 'lucide-react';

const skills = [
  { icon: Database, name: 'Database Design', description: 'PostgreSQL, MongoDB, Redis' },
  { icon: Server, name: 'Backend Development', description: 'Node.js, Python, Java' },
  { icon: Cloud, name: 'Cloud Services', description: 'AWS, Docker, Kubernetes' },
  { icon: Lock, name: 'Security', description: 'OAuth, JWT, Encryption' },
  { icon: GitBranch, name: 'Version Control', description: 'Git, CI/CD, DevOps' },
  { icon: Terminal, name: 'System Design', description: 'Microservices, API Design' },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-800/50 backdrop-blur-lg" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-grotesk font-bold text-center text-gradient mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-gray-900/50 backdrop-blur rounded-xl border border-white/5 hover:border-emerald-500/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <skill.icon className="w-12 h-12 text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors duration-300" />
              <h3 className="text-xl font-grotesk font-semibold text-white mb-2">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;