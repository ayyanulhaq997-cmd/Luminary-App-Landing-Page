
import React from 'react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Product Designer',
    content: 'Luminary completely changed how I manage my freelance projects. The focus mode is a game changer for deep design work.',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Software Engineer',
    content: 'Finally, a productivity app that doesn’t feel bloated. The clean UI and fast sync make it my go-to for everything.',
    avatar: 'https://picsum.photos/seed/marcus/100/100',
  },
  {
    id: 't3',
    name: 'Dr. Elena Rossi',
    role: 'Researcher',
    content: 'The insights feature revealed exactly where my time was leaking. I’ve regained 5 hours a week using this app.',
    avatar: 'https://picsum.photos/seed/elena/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-base text-indigo-600 font-bold tracking-wide uppercase mb-3">Wall of Love</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Hear from our users
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-sm"></i>
                ))}
              </div>
              <p className="text-slate-700 italic text-lg leading-relaxed mb-8">
                "{t.content}"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src={t.avatar} className="w-12 h-12 rounded-full" alt={t.name} />
              <div>
                <h5 className="font-bold text-slate-900">{t.name}</h5>
                <p className="text-slate-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
