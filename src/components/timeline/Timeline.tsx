import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TimelineItem from './TimelineItem';
import TimelineLine from './TimelineLine'; // Assuming TimelineLine is a separate component

const experiences = [
  {
    year: '2023 - Present',
    title: 'Senior Backend Engineer',
    company: 'TechCorp',
    description: 'Leading the development of microservices architecture and implementing cloud-native solutions.',
  },
  {
    year: '2021 - 2023',
    title: 'Backend Engineer',
    company: 'InnovateTech',
    description: 'Developed and maintained scalable APIs serving millions of requests daily.',
  },
  {
    year: '2019 - 2021',
    title: 'Software Developer',
    company: 'StartupX',
    description: 'Built and deployed full-stack applications using modern technologies.',
  },
  {
    year: '2018 - 2019',
    title: 'Junior Developer',
    company: 'CodeCraft',
    description: 'Contributed to various web development projects and learned industry best practices.',
  },
];

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end center"]
  });

  return (
    <section className="py-12 sm:py-20 bg-gray-900/50 backdrop-blur-sm" id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Experience</h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            My professional journey and growth in the tech industry
          </p>
        </motion.div>

        <div className="relative">
          <TimelineLine progress={scrollYProgress} />
          <div className="relative">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.year}
                {...experience}
                index={index}
                progress={scrollYProgress}
                total={experiences.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;