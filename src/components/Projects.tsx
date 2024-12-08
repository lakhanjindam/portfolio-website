import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Scalable Microservices Architecture',
    description: 'Designed and implemented a high-performance microservices system handling 1M+ daily requests',
    tech: ['Node.js', 'Docker', 'Kubernetes', 'MongoDB'],
    github: '#',
    live: '#'
  },
  {
    title: 'Real-time Data Processing Pipeline',
    description: 'Built a robust data pipeline processing 500GB+ daily with fault tolerance and monitoring',
    tech: ['Python', 'Apache Kafka', 'ELK Stack', 'AWS'],
    github: '#',
    live: '#'
  },
  {
    title: 'Authentication Service',
    description: 'Developed a secure authentication system with OAuth2.0 and JWT implementation',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-emerald-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-white hover:text-emerald-400 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.live} className="text-white hover:text-emerald-400 transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;