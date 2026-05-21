
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
import AdminDashboard from './components/admin/AdminDashboard.tsx';
import AdminLogin from './components/admin/AdminLogin.tsx';
import { PolicyCompliance, CookieConsentBanner } from './components/PolicyCompliance.tsx';
import { ProductivityHub } from './components/ProductivityHub.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState<'landing' | 'admin'>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'cookies-settings' | 'careers' | 'roadmap' | 'releases' | null>(null);

  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Check session storage for existing auth
    const authStatus = sessionStorage.getItem('fenix_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAdminAccess = () => {
    if (isAuthenticated) {
      setView('admin');
    } else {
      setShowLogin(true);
    }
  };

  const onLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
    setView('admin');
    sessionStorage.setItem('fenix_admin_auth', 'true');
  };

  if (view === 'admin' && isAuthenticated) {
    return (
      <AdminDashboard 
        onExit={() => {
          setView('landing');
          // We keep isAuthenticated true for the session unless they explicitly log out
        }} 
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative">
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

        <section id="hub" className="py-20 bg-white border-t border-b border-slate-100">
          <ProductivityHub />
        </section>
        
        <section id="testimonials" className="py-20 bg-slate-50">
          <Testimonials />
        </section>
        
        <section id="faq" className="py-20 bg-white">
          <FAQ />
        </section>

        <section id="press" className="py-20 bg-slate-50">
          <PressKit />
        </section>
        
        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>
      </main>

      <Footer 
        onOpenModal={(modal) => setActiveModal(modal)} 
        onScrollTo={handleScrollToId} 
      />
      
      {/* Admin Portal Link */}
      <button 
        onClick={handleAdminAccess}
        className="fixed bottom-6 left-6 text-[10px] text-slate-300 hover:text-indigo-500 transition-colors z-50 uppercase tracking-widest font-bold"
      >
        Admin Portal
      </button>

      {showLogin && (
        <AdminLogin 
          onSuccess={onLoginSuccess} 
          onClose={() => setShowLogin(false)} 
        />
      )}

      <AIChatBot />

      <CookieConsentBanner />

      <PolicyCompliance 
        activeModal={activeModal} 
        onClose={() => setActiveModal(null)} 
      />
    </div>
  );
};

export default App;
