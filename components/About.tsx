
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/about-luminary/800/600" 
              className="w-full h-auto" 
              alt="About Luminary"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h2 className="text-base text-indigo-600 font-bold tracking-wide uppercase mb-3">Our Mission</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Stop reacting to life. <br/><span className="text-indigo-600">Start leading it.</span>
          </h3>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Luminary started in a small cafe in San Francisco. We were tired of productivity apps that just felt like "digital chores." We wanted something that felt like a partner.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <i className="fas fa-check"></i>
              </div>
              <div>
                <h5 className="font-bold text-slate-900">Research Driven</h5>
                <p className="text-slate-600">Built on psychological principles of Flow State and deep work.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <i className="fas fa-heart"></i>
              </div>
              <div>
                <h5 className="font-bold text-slate-900">User Centric</h5>
                <p className="text-slate-600">We iterate weekly based on direct feedback from our community.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <i className="fas fa-bolt"></i>
              </div>
              <div>
                <h5 className="font-bold text-slate-900">Hyper Fast</h5>
                <p className="text-slate-600">Zero-lag interface that works offline and syncs in milliseconds.</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95">
              Read Our Full Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
