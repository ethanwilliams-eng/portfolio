import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Background Ambience */}
      <div className="bg-grid"></div>
      <div className="ambient-glow"></div>
      <div className="ambient-glow-alt"></div>

      {/* Main Content */}
      <main className="container">
        <Hero />
        <Skills />
        <Projects />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
