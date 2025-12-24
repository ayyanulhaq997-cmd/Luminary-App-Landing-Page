
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <i className="fas fa-sparkles text-sm"></i>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Luminary</span>
            </div>
            <p className="mb-6 leading-relaxed">
              Illuminating your productivity journey since 2024. The only tool designed for deep thinkers and high achievers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram text-xl"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-tiktok text-xl"></i></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Product</h5>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Releases</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Company</h5>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Newsletter</h5>
            <p className="mb-4 text-sm">Get productivity tips and app updates delivered weekly.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-800 border-none rounded-l-lg px-4 py-3 w-full focus:ring-1 focus:ring-indigo-600 outline-none"
              />
              <button className="bg-indigo-600 text-white rounded-r-lg px-4 py-3 hover:bg-indigo-700 transition-colors">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 Luminary Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
