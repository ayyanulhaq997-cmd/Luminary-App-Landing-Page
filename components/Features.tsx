
import React from 'react';
import { Feature } from '../types';

const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Deep Work Focus',
    description: 'Our intelligent focus mode blocks distracting apps and sets optimal timers based on your history.',
    icon: 'fa-brain-circuit',
  },
  {
    id: 'f2',
    title: 'Instant Cloud Sync',
    description: 'Switch between your phone, tablet, and computer without losing a second of progress.',
    icon: 'fa-cloud-arrow-up',
  },
  {
    id: 'f3',
    title: 'Team Collaboration',
    description: 'Assign tasks, share notes, and hit milestones together with seamless sharing features.',
    icon: 'fa-users-gear',
  },
  {
    id: 'f4',
    title: 'Smart Insights',
    description: 'Receive weekly AI-powered reports on your time usage and productivity peaks.',
    icon: 'fa-chart-pie',
  },
  {
    id: 'f5',
    title: 'Custom Themes',
    description: 'Personalize your workspace with thousands of colors and widget layouts that suit your style.',
    icon: 'fa-palette',
  },
  {
    id: 'f6',
    title: 'Security First',
    description: 'Your data is encrypted end-to-end. We value your privacy as much as your productivity.',
    icon: 'fa-shield-halved',
  },
];

const Features: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-base text-indigo-600 font-bold tracking-wide uppercase mb-3">Features</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Everything you need to succeed
        </h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We built Luminary to solve the distractions of the modern digital world. Every tool is crafted with purpose.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature) => (
          <div key={feature.id} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <i className={`fas ${feature.icon} text-2xl`}></i>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
            <p className="text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
