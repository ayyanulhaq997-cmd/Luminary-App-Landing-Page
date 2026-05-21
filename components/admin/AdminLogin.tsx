
import React, { useState } from 'react';
import { ShieldCheck, X, ArrowRight } from 'lucide-react';

interface AdminLoginProps {
  onSuccess: () => void;
  onClose: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onSuccess, onClose }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Hardcoded username for access
  const ADMIN_USERNAME = 'admin_fenix';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    // Artificial delay for premium feel
    setTimeout(() => {
      if (username === ADMIN_USERNAME) {
        onSuccess();
      } else {
        setError(true);
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-12 animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-200 mx-auto mb-6">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-black text-slate-900">Admin Authentication</h2>
          <p className="text-slate-500 text-sm mt-2">Enter your FENIX administrator credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
              Administrator Username
            </label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
                placeholder="Enter username..."
                className={`w-full bg-slate-50 px-6 py-4 rounded-2xl border ${
                  error ? 'border-rose-500 ring-4 ring-rose-500/10' : 'border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10'
                } outline-none transition-all font-medium`}
              />
              {error && (
                <p className="text-rose-500 text-xs font-bold mt-2 ml-1 animate-in slide-in-from-top-1">
                  Access Denied. Incorrect username.
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || !username}
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-sm hover:bg-indigo-600 disabled:bg-slate-200 disabled:text-slate-400 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                <span>Authenticate Access</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-[10px] text-slate-400 mt-8 leading-relaxed px-4">
          This is a protected area. Unauthorized access attempts are monitored and logged.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
