
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import PressKit from './components/PressKit';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="features" className="py-20 bg-white">
          <Features />
        </section>
        
        <section id="about" className="py-20 bg-slate-50">
          <About />
        </section>
        
        <section id="testimonials" className="py-20 bg-white">
          <Testimonials />
        </section>
        
        <section id="faq" className="py-20 bg-slate-50">
          <FAQ />
        </section>

        <section id="press" className="py-20 bg-white">
          <PressKit />
        </section>
        
        <section id="contact" className="py-20 bg-slate-50">
          <Contact />
        </section>
      </main>

      <Footer />
      {/* AIChatBot added to provide user assistance across the site */}
      <AIChatBot />
    </div>
  );
};

export default App;
