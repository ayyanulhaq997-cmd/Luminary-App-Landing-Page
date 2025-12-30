
import React from 'react';

const PressKit: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <i className="fas fa-newspaper text-[12rem] -rotate-12"></i>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Press Kit</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Everything you need to feature FENIX in your story. Access our official brand guidelines, high-resolution logos, and product screenshots.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-lg">
                  <i className="fas fa-download"></i>
                  <span>Brand Assets (.zip)</span>
                </button>
                <button className="flex items-center gap-3 bg-slate-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-700 transition-all border border-slate-700">
                  <i className="fas fa-file-invoice"></i>
                  <span>Media Fact Sheet</span>
                </button>
              </div>
            </div>
            
            <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-bullhorn text-indigo-400"></i>
                Media Contact
              </h4>
              <p className="text-slate-400 mb-6">For interview requests, review copies, or specific inquiries, our communications team is here to help.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-sm">
                    AR
                  </div>
                  <div>
                    <p className="font-bold">Alex Rivera</p>
                    <p className="text-sm text-slate-500 tracking-wide uppercase font-medium">Head of PR</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-indigo-400 font-medium">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:press@fenixapp.com" className="hover:underline">press@fenixapp.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressKit;