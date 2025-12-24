
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import About from './components/About.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import PressKit from './components/PressKit.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AIChatBot from './components/AIChatBot.tsx';

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
      <AIChatBot />
    </div>
  );
};

export default App;
