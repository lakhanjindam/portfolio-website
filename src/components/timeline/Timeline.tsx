import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import TimelineItem from './TimelineItem';
import TimelineLine from './TimelineLine'; // Assuming TimelineLine is a separate component
import { experiences } from '../../data';


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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-grotesk font-bold text-gradient mb-3 sm:text-4xl"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto"
          >
            My professional journey and growth in the tech industry
          </motion.p>
        </motion.div>

        <div className="relative">
          <TimelineLine progress={scrollYProgress} />
          <div className="relative">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.duration}
                {...experience}
                index={index}
                progress={scrollYProgress}
                total={experiences.length}
                companyURL={experience.companyURL}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;