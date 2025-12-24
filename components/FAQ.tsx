
import React, { useState } from 'react';
import { FAQItem } from '../types.ts';

const FAQS: FAQItem[] = [
  {
    id: 'q1',
    question: 'Is Luminary free to use?',
    answer: 'Yes! Luminary offers a robust free tier that includes all core features like focus timers, basic tasks, and cloud sync for up to 2 devices.',
  },
  {
    id: 'q2',
    question: 'How does the AI insights work?',
    answer: 'Our local-first AI analyzes your task completion patterns and focus durations to identify peaks and troughs in your productivity. It never sends your sensitive data to our servers; all analysis happens on your device.',
  },
  {
    id: 'q3',
    question: 'Can I use it with my team?',
    answer: 'Absolutely. Luminary Pro includes collaborative workspaces where you can share task lists, track group progress, and sync files seamlessly.',
  },
  {
    id: 'q4',
    question: 'Is my data secure?',
    answer: 'Security is our priority. We use industry-standard AES-256 encryption for all data synced to the cloud and offer biometric locking for the mobile app.',
  },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-600">Can't find what you're looking for? Contact our support team below.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq) => (
          <div key={faq.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300">
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <span className="text-lg font-bold text-slate-900">{faq.question}</span>
              <i className={`fas fa-chevron-down transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}></i>
            </button>
            <div className={`transition-all duration-300 ${openId === faq.id ? 'max-h-96 py-6 border-t border-slate-100' : 'max-h-0'}`}>
              <div className="px-8 text-slate-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
