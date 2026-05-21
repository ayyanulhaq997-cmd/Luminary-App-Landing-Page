import React, { useState } from 'react';
import { DollarSign, PieChart, Users, ArrowUpRight, CheckCircle, Edit, X, Save, TrendingUp } from 'lucide-react';

interface Plan {
  id: number;
  name: string;
  price: string;
  users: string;
  features: string[];
  color: string;
}

const Financials: React.FC = () => {
  // Plan states
  const [plans, setPlans] = useState<Plan[]>([
    { id: 0, name: 'Basic (Free)', price: '$0.00', users: '42,102', features: ['Core Timers', 'Basic Insights', '2 Devices'], color: 'border-slate-200' },
    { id: 1, name: 'Pro License', price: '$4.99/mo', users: '1,402', features: ['AI Insights', 'Unlimited Sync', 'Team Features'], color: 'border-indigo-600 shadow-indigo-50' },
    { id: 2, name: 'Enterprise Core', price: '$19.99/mo', users: '587', features: ['Admin Panel', 'Custom SSO', '24/7 Priority Support'], color: 'border-amber-500 shadow-amber-50' },
  ]);

  // Editor states
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null);
  const [editedPrice, setEditedPrice] = useState('');
  const [editedUsers, setEditedUsers] = useState('');
  const [editedFeatures, setEditedFeatures] = useState<string[]>([]);
  const [newFeatureText, setNewFeatureText] = useState('');

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleOpenEditor = (plan: Plan) => {
    setEditingPlan(plan);
    setEditedPrice(plan.price);
    setEditedUsers(plan.users);
    setEditedFeatures([...plan.features]);
  };

  const handleAddFeature = () => {
    if (!newFeatureText.trim()) return;
    setEditedFeatures([...editedFeatures, newFeatureText.trim()]);
    setNewFeatureText('');
  };

  const handleRemoveFeature = (idx: number) => {
    setEditedFeatures(editedFeatures.filter((_, i) => i !== idx));
  };

  const handleSavePlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPlan) return;

    setPlans(plans.map(p => {
      if (p.id === editingPlan.id) {
        return {
          ...p,
          price: editedPrice.trim(),
          users: editedUsers.trim(),
          features: editedFeatures
        };
      }
      return p;
    }));

    showToast(`Updated pricing metrics and features for plan "${editingPlan.name}".`);
    setEditingPlan(null);
  };

  return (
    <div className="space-y-8 relative animate-in fade-in duration-500">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-slate-950 text-white px-6 py-3 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-3 z-50 animate-bounce">
          <CheckCircle size={18} className="text-emerald-500" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Editor Modal Overlay */}
      {editingPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-hidden animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-[2rem] border border-slate-100 shadow-2xl overflow-hidden animate-in zoom-in-95">
            <div className="bg-indigo-600 p-6 text-white relative">
              <button 
                onClick={() => setEditingPlan(null)}
                className="absolute top-5 right-5 w-8 h-8 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center text-white"
              >
                <X size={16} />
              </button>
              <h3 className="font-extrabold text-lg flex items-center gap-2"><Edit size={16} /> Edit Plan Details</h3>
              <p className="text-xs text-indigo-100/80 mt-1">Configure pricing scales and user entitlements for FENIX licensing tiers.</p>
            </div>

            <form onSubmit={handleSavePlan} className="p-6 space-y-4">
              <div className="font-extrabold text-indigo-650 text-sm">{editingPlan.name} Settings</div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5 text-xs uppercase tracking-wider">Plan Price</label>
                  <input 
                    type="text" 
                    value={editedPrice}
                    onChange={(e) => setEditedPrice(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1.5 text-xs uppercase tracking-wider">Active Users</label>
                  <input 
                    type="text" 
                    value={editedUsers}
                    onChange={(e) => setEditedUsers(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5 text-xs uppercase tracking-wider">Plan Features</label>
                <div className="space-y-2 max-h-32 overflow-y-auto border border-slate-150 rounded-xl p-3 bg-slate-50">
                  {editedFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs font-semibold py-1 bg-white border border-slate-100 px-2.5 rounded-lg">
                      <span className="truncate max-w-[200px]">{feat}</span>
                      <button 
                        type="button" 
                        onClick={() => handleRemoveFeature(idx)}
                        className="text-rose-500 hover:text-rose-700"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                  {editedFeatures.length === 0 && (
                    <p className="text-center text-slate-400 text-[11px] py-2">No features created yet.</p>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={newFeatureText}
                  onChange={(e) => setNewFeatureText(e.target.value)}
                  placeholder="Additional feature tag..." 
                  className="flex-grow bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl outline-none focus:ring-1 focus:ring-indigo-600 text-xs font-semibold"
                />
                <button 
                  type="button" 
                  onClick={handleAddFeature}
                  className="bg-indigo-600 text-white font-bold text-xs uppercase px-4 py-2 rounded-xl hover:bg-indigo-700"
                >
                  Add
                </button>
              </div>

              <div className="border-t border-slate-100 pt-4 flex gap-2 justify-end">
                <button 
                  type="button" 
                  onClick={() => setEditingPlan(null)}
                  className="px-4 py-2.5 border border-slate-200 rounded-xl font-bold text-slate-500 text-xs hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 font-black text-white text-xs uppercase tracking-wider rounded-xl shadow-md cursor-pointer flex items-center gap-1.5"
                >
                  <Save size={12} /> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Platform Subscriptions & Financials</h1>
          <p className="text-slate-500 text-sm">Review real-time transaction curves, active plan margins, and forecast calculations.</p>
        </div>
        <span className="inline-flex items-center gap-1 bg-indigo-50 border border-indigo-100/40 text-indigo-700 font-bold px-3 py-1 rounded-lg text-xs uppercase tracking-wider animate-pulse">
          <TrendingUp size={12} /> Forecast Track OK
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className={`bg-white p-8 rounded-[2.5rem] border-2 ${plan.color} shadow-lg relative overflow-hidden flex flex-col justify-between group h-full`}>
            {plan.name.includes('Pro') && (
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-sm leading-none">
                Best Conversion
              </div>
            )}
            
            <div>
              <div className="mb-6">
                <h4 className="font-extrabold text-slate-950 text-xl">{plan.name}</h4>
                <p className="text-3xl font-black text-indigo-600 mt-2.5">{plan.price}</p>
                <p className="text-xs text-slate-400 font-semibold mt-1.5">{plan.users} Dynamic Licenses Active</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs md:text-sm font-semibold text-slate-600">
                    <CheckCircle size={15} className="text-emerald-500 shrink-0" />
                    <span className="truncate">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              type="button"
              onClick={() => handleOpenEditor(plan)}
              className="w-full py-4 mt-4 rounded-xl bg-slate-900 hover:bg-indigo-600 transition-colors text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 outline-none cursor-pointer"
            >
              <Edit size={12} />
              <span>Configure Plan Layout</span>
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-extrabold text-slate-900 text-lg mb-6 flex items-center gap-2">
              <PieChart size={18} className="text-indigo-600" />
              SaaS Revenue Tier Distribution
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-bold">Pro Monthly Recurring Revenue (MRR)</span>
                  <span className="text-indigo-600 font-extrabold text-sm">64%</span>
                </div>
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200/40">
                  <div className="h-full bg-indigo-600 rounded-full w-[64%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-bold">Enterprise Corporate Sinking Funds</span>
                  <span className="text-amber-500 font-extrabold text-sm">28%</span>
                </div>
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200/40">
                  <div className="h-full bg-amber-500 rounded-full w-[28%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-bold">Ancillary APIs / Consultations</span>
                  <span className="text-slate-400 font-extrabold text-sm font-sans">8%</span>
                </div>
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200/40">
                  <div className="h-full bg-slate-400 rounded-full w-[8%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-950 text-white p-8 rounded-[2rem] shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-black mb-2">SaaS Multi-Year Financial Forecasts</h3>
            <p className="text-indigo-200 text-xs md:text-sm leading-relaxed font-light">
              Calculated on continuous 12.4% compound weekly metrics, FENIX is on a high-confidence projection to exceed <strong className="font-extrabold">$12,500 MRR</strong> by Q4-2026.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
              <p className="text-[10px] uppercase font-black opacity-60 tracking-widest text-[#a5b4fc]">LTV (Avg Projection)</p>
              <p className="text-xl md:text-2xl font-black mt-1">$142.50 USD</p>
            </div>
            <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
              <p className="text-[10px] uppercase font-black opacity-60 tracking-widest text-[#a5b4fc]">Churn Metrics</p>
              <p className="text-xl md:text-2xl font-black mt-1 text-emerald-400 font-mono">1.2% Low</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financials;
