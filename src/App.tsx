import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/timeline/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import SkillsSection from './components/skills/skillsCategory';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Timeline />
      <SkillsSection />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;