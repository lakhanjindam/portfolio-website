import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/timeline/Timeline';
import Contact from './components/Contact';
import Certifications from './components/certifications/certifications';
import Skills from './components/Skills';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from "@vercel/analytics/react"

const App: React.FC = () => {
  return (
    <div className="bg-gray-900">
      <Analytics />
      <Hero />
      <Timeline />
      <Skills />
      <Certifications />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default App;