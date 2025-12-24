
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  // NOTE: To make this work for real, replace 'YOUR_FORMSPREE_ID' with your ID from formspree.io
  // or use your own backend endpoint.
  const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ID";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500 rounded-full opacity-50"></div>
        
        <div className="lg:w-1/2 text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Get in touch with us</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-md">
            Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="text-indigo-200 text-sm">Email Support</p>
                <p className="font-bold text-lg">hello@luminaryapp.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center">
                <i className="fas fa-headset"></i>
              </div>
              <div>
                <p className="text-indigo-200 text-sm">Help Center</p>
                <p className="font-bold text-lg">support.luminaryapp.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative z-10">
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-check text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : status === 'error' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-exclamation-triangle text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Oops!</h3>
                <p className="text-slate-600">Something went wrong. Please check the setup guide or try again later.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 text-indigo-600 font-bold hover:underline">Try again</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Full Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Email Address</label>
                    <input 
                      name="email"
                      type="email" 
                      required 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Subject</label>
                  <select name="subject" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all">
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Bug Report</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    required 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-indigo-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <i className="fas fa-circle-notch animate-spin"></i>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <i className="fas fa-paper-plane"></i>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
