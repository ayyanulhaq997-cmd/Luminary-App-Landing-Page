
import React from 'react';

// --- CONFIGURATION: REPLACE THESE WITH YOUR ACTUAL STORE LINKS ---
const APPLE_STORE_URL = "https://apps.apple.com/app/your-app-id";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=your.package.name";
// ------------------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold tracking-wider uppercase mb-6">
            Featured in Best of 2024
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Illuminate Your <span className="text-indigo-600">Productivity</span> Journey.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            FENIX is the only productivity tool that actually learns your rhythms to help you work smarter, not longer. Available now on your favorite devices.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href={APPLE_STORE_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl group active:scale-95"
            >
              <i className="fab fa-apple text-2xl"></i>
              <div className="text-left leading-none">
                <div className="text-[10px] uppercase font-medium opacity-70">Download on the</div>
                <div className="text-lg">App Store</div>
              </div>
            </a>
            <a 
              href={GOOGLE_PLAY_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-lg group active:scale-95"
            >
              <i className="fab fa-google-play text-xl"></i>
              <div className="text-left leading-none">
                <div className="text-[10px] uppercase font-medium opacity-70">Get it on</div>
                <div className="text-lg">Google Play</div>
              </div>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/${i + 20}/64/64`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              ))}
            </div>
            <span>Joined by 50k+ productive individuals</span>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative z-10 w-[280px] md:w-[320px] lg:w-[350px] animate-float">
            <div className="bg-slate-900 p-3 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-slate-900">
               <img src="https://picsum.photos/seed/appscreen/400/800" className="w-full h-full rounded-[2rem] object-cover" alt="App Screen" />
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;