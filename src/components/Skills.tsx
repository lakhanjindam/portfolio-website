import { motion } from 'framer-motion';
import { CategoryItem } from './skills/skillCategory';
import { skillsData } from '../data';

const Skills = () => {
  return (
    <section className="py-20 bg-gray-900/50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-grotesk font-bold text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Specialized in backend development with a focus on scalable architectures,
            cloud infrastructure, and system design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <CategoryItem
              key={index}
              index={index}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;