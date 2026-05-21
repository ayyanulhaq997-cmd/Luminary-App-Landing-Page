
import React, { useState } from 'react';

interface FooterProps {
  onOpenModal: (modal: 'privacy' | 'terms' | 'cookies-settings' | 'careers' | 'roadmap' | 'releases') => void;
  onScrollTo: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal, onScrollTo }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <i className="fas fa-sparkles text-sm"></i>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">FENIX</span>
            </div>
            <p className="mb-6 leading-relaxed">
              Illuminating your productivity journey since 2024. The only tool designed for deep thinkers and high achievers in compliance with international privacy protocols.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><i className="fab fa-twitter text-xl"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><i className="fab fa-instagram text-xl"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><i className="fab fa-tiktok text-xl"></i></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Product</h5>
            <ul className="space-y-4">
              <li><button onClick={() => onScrollTo('features')} className="hover:text-indigo-400 transition-colors text-left font-medium outline-none cursor-pointer">Features</button></li>
              <li><button onClick={() => onOpenModal('roadmap')} className="hover:text-indigo-400 transition-colors text-left font-medium outline-none cursor-pointer">Product Roadmap</button></li>
              <li><button onClick={() => onOpenModal('releases')} className="hover:text-indigo-400 transition-colors text-left font-medium outline-none cursor-pointer">Releases Log <span className="text-[9px] bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded ml-1 font-semibold uppercase">v1.5</span></button></li>
              <li><button onClick={() => onOpenModal('cookies-settings')} className="hover:text-indigo-400 transition-colors text-left font-medium outline-none cursor-pointer">Cookie Settings</button></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Company</h5>
            <ul className="space-y-4">
              <li><button onClick={() => onScrollTo('about')} className="hover:text-indigo-400 transition-colors text-left font-medium outline-none cursor-pointer">About Us</button></li>
              <li><button onClick={() => onOpenModal('careers')} className="hover:text-indigo-400 transition-colors text-left font-medium outline-none cursor-pointer">Careers Opportunities</button></li>
              <li><button onClick={() => onScrollTo('hub')} className="hover:text-indigo-400 transition-colors text-left font-medium outline-none cursor-pointer">Productivity Hub</button></li>
              <li><button onClick={() => onScrollTo('faq')} className="hover:text-indigo-400 transition-colors text-left font-medium outline-none cursor-pointer">FAQ Support</button></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Newsletter Subscription</h5>
            <p className="mb-4 text-sm">Get productivity tips and official regulatory updates delivered weekly.</p>
            {subscribed ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl text-emerald-400 text-xs font-bold animate-in fade-in">
                <i className="fas fa-check mr-2"></i> Subscribed successfully! Welcome to the loop.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address" 
                  required
                  className="bg-slate-800 border-none text-white text-sm rounded-l-lg px-4 py-3 w-full focus:ring-1 focus:ring-indigo-600 outline-none"
                />
                <button type="submit" className="bg-indigo-600 text-white rounded-r-lg px-4 py-3 hover:bg-indigo-700 transition-colors outline-none cursor-pointer">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 FENIX LLC. Distributed in compliance with Google Publisher Network guidelines. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => onOpenModal('privacy')} className="hover:text-white font-semibold outline-none cursor-pointer">Privacy Policy</button>
            <button onClick={() => onOpenModal('terms')} className="hover:text-white font-semibold outline-none cursor-pointer">Terms of Service</button>
            <button onClick={() => onOpenModal('cookies-settings')} className="hover:text-white font-semibold outline-none cursor-pointer">Cookies & Tracking</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;