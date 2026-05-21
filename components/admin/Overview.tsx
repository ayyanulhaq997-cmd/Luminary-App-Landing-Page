import React, { useState } from 'react';
import { Users, CreditCard, PlayCircle, TrendingUp, Cpu, Server, ClipboardList, CheckCircle } from 'lucide-react';

const Overview: React.FC = () => {
  const [stats, setStats] = useState([
    { label: 'Total Users', value: '48,291', trend: '+12%', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Pro Subscriptions', value: '1,402', trend: '+5.4%', icon: CreditCard, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Media Plays', value: '124.5k', trend: '+18%', icon: PlayCircle, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Monthly Revenue', value: '$6,995', trend: '+2.1%', icon: TrendingUp, color: 'text-rose-600', bg: 'bg-rose-50' },
  ]);

  // Server management simulation
  const [serverOptimizing, setServerOptimizing] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [storageUsed, setStorageUsed] = useState(84);
  const [bandwidthHealthy, setBandwidthHealthy] = useState('Healthy');

  const handleOptimiseServer = () => {
    setServerOptimizing(true);
    setTimeout(() => {
      setServerOptimizing(false);
      setStorageUsed(prev => Math.max(45, prev - 12)); // Simulates clearing cache
      setBandwidthHealthy('Optimal (10ms)');
      setToastMessage('Garbage collection complete! 2.4 GB of system logs and caches purged safely.');
      setTimeout(() => setToastMessage(null), 4000);
    }, 1800);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 relative">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-slate-950 text-white px-6 py-3 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-3 z-50 animate-bounce">
          <CheckCircle size={18} className="text-emerald-500" />
          <span className="text-sm font-bold text-xs">{toastMessage}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500 text-sm">Welcome back Super Admin. Daily analytical parameters are updated.</p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100 uppercase tracking-wider">
          <Server size={12} /> Server Sync Active
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                {stat.trend}
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <p className="text-3xl font-black mt-1 text-slate-950">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-extrabold text-slate-950 text-base">Platform User Growth Analysis</h3>
            <select className="bg-slate-50 border border-slate-200 text-xs px-3 py-1.5 rounded-lg font-bold outline-none">
              <option>Last 30 Days (Direct)</option>
              <option>Last 6 Months (Cumulative)</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 border-b border-dashed border-slate-100 pb-3">
            {[40, 70, 45, 90, 65, 80, 50, 85, 95, 60, 75, 100].map((h, i) => (
              <div key={i} className="flex-grow flex flex-col items-center gap-2 group cursor-pointer">
                <div 
                  className="w-full bg-indigo-100 rounded-t-lg transition-all duration-500 group-hover:bg-indigo-600" 
                  style={{ height: `${h}%` }}
                ></div>
                <span className="text-[9px] font-mono text-slate-400 font-bold uppercase">M{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Cpu size={120} />
          </div>
          
          <div>
            <h3 className="text-lg font-black mb-4 relative z-10 flex items-center gap-2">
              <Cpu size={18} className="text-indigo-400" /> Infrastructure Health
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="opacity-60 uppercase tracking-widest font-black">Storage registers</span>
                  <span className="font-bold">{storageUsed}% Capacity Used</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${storageUsed}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="opacity-60 uppercase tracking-widest font-black">Bandwidth State</span>
                  <span className="font-bold">{bandwidthHealthy}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 transition-all duration-300 w-[92%]"></div>
                </div>
              </div>
            </div>
          </div>

          <button 
            type="button"
            onClick={handleOptimiseServer}
            disabled={serverOptimizing}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-75 disabled:hover:bg-indigo-600 rounded-2xl font-black text-xs uppercase tracking-widest transition-colors mt-6 relative z-10 flex items-center justify-center gap-2 outline-none cursor-pointer"
          >
            {serverOptimizing ? (
              <>
                <i className="fas fa-circle-notch animate-spin"></i>
                <span>Optimizing Nodes...</span>
              </>
            ) : (
              <>
                <ClipboardList size={14} />
                <span>Optimize System Storage</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
