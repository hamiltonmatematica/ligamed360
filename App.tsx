
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Audience from './components/Audience';
import Methodology from './components/Methodology';
import Pricing from './components/Pricing';
import Mentors from './components/Mentors';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#ff5b05] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Audience />
        <Methodology />
        <Pricing />
        <Mentors />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
