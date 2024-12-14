import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/timeline/Timeline';
import Contact from './components/Contact';
import Certifications from './components/certifications/certifications';
import Skills from './components/Skills';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Timeline />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
};

export default App;