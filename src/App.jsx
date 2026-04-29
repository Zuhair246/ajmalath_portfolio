import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-cream-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Services /> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

export default App;
