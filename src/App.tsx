import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/timeline/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;