import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-[#0b0b12] py-8 text-center text-sm text-white/50">
        <p>
          © {new Date().getFullYear()} Flames • Blue. Build, visualize, deploy, evaluate AI agents.
        </p>
      </footer>
    </div>
  );
}

export default App;
