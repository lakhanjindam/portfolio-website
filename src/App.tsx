import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/timeline/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import SkillsSection from './components/skills/skillsCategory';
import Divider from './components/Divider';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Timeline />
      <Divider
        height="1px"
        width='80%'
        gradient="linear-gradient(90deg, rgba(16,185,129,1) 0%, rgba(59,130,246,1) 100%)"
      />
      <SkillsSection />
      <Certifications />
      <Divider
        height="1px"
        width='80%'
        gradient="linear-gradient(90deg, rgba(16,185,129,1) 0%, rgba(59,130,246,1) 100%)"
      />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;