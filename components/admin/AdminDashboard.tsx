
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Upload, 
  CreditCard, 
  Settings, 
  LogOut,
  Bell,
  Search,
  ChevronRight,
  TrendingUp,
  PlayCircle,
  Music,
  Tv
} from 'lucide-react';
import Overview from './Overview.tsx';
import MediaManager from './MediaManager.tsx';
import UserManager from './UserManager.tsx';
import Financials from './Financials.tsx';

interface AdminDashboardProps {
  onExit: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'media' | 'users' | 'financials'>('overview');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'media', label: 'Media Center', icon: Upload },
    { id: 'users', label: 'User Base', icon: Users },
    { id: 'financials', label: 'Subscriptions', icon: CreditCard },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <i className="fas fa-sparkles text-xl"></i>
          </div>
          <span className="text-xl font-black tracking-tight">FENIX <span className="text-[10px] text-indigo-600 font-bold uppercase block -mt-1">Admin</span></span>
        </div>

        <nav className="flex-grow p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-indigo-50 text-indigo-600 shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <item.icon size={20} />
              <span className="font-semibold text-sm">{item.label}</span>
              {activeTab === item.id && <ChevronRight size={14} className="ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={onExit}
            className="w-full flex items-center gap-3 px-4 py-3 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
          >
            <LogOut size={20} />
            <span className="font-semibold text-sm">Exit Dashboard</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 w-96">
            <Search size={18} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search users, files, or reports..." 
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-bold">Admin Account</p>
                <p className="text-[10px] text-slate-500">Super Admin</p>
              </div>
              <img src="https://picsum.photos/seed/admin/64/64" className="w-10 h-10 rounded-xl border-2 border-indigo-100" />
            </div>
          </div>
        </header>

        {/* Dynamic Section Rendering */}
        <div className="flex-grow overflow-y-auto p-8">
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'media' && <MediaManager />}
          {activeTab === 'users' && <UserManager />}
          {activeTab === 'financials' && <Financials />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
