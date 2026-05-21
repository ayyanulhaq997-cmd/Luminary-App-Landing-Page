import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Download, UserPlus, Trash2, X, ShieldAlert, CheckCircle } from 'lucide-react';
import { AdminUser } from '../../types.ts';

const UserManager: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSub, setFilterSub] = useState<'All' | 'Free' | 'Pro' | 'Enterprise'>('All');

  // Real React active state for monitoring
  const [users, setUsers] = useState<AdminUser[]>([
    { id: '1', name: 'Alex Thompson', email: 'alex.t@gmail.com', subscription: 'Pro', joinDate: '2026-05-18', status: 'active' },
    { id: '2', name: 'Sarah Miller', email: 'sarah.m@hey.com', subscription: 'Free', joinDate: '2026-05-12', status: 'active' },
    { id: '3', name: 'James Wilson', email: 'james@wilson.io', subscription: 'Enterprise', joinDate: '2026-05-08', status: 'active' },
    { id: '4', name: 'Elena Korova', email: 'elena@fastmail.com', subscription: 'Pro', joinDate: '2026-04-24', status: 'inactive' },
    { id: '5', name: 'Michael Chen', email: 'mike.chen@apple.com', subscription: 'Free', joinDate: '2026-04-18', status: 'active' },
  ]);

  // Modal states for registration
  const [showAddForm, setShowAddForm] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserSub, setNewUserSub] = useState<'Free' | 'Pro' | 'Enterprise'>('Free');
  const [newUserStatus, setNewUserStatus] = useState<'active' | 'inactive'>('active');

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim() || !newUserEmail.trim()) {
      showToast('Please provide a valid name and email address.');
      return;
    }

    if (!newUserEmail.includes('@')) {
      showToast('Invalid email address structure.');
      return;
    }

    const newUser: AdminUser = {
      id: (users.length + 1).toString(),
      name: newUserName.trim(),
      email: newUserEmail.trim(),
      subscription: newUserSub,
      joinDate: new Date().toISOString().split('T')[0],
      status: newUserStatus
    };

    setUsers([newUser, ...users]);
    setShowAddForm(false);
    
    // Reset form
    setNewUserName('');
    setNewUserEmail('');
    setNewUserSub('Free');
    setNewUserStatus('active');

    showToast(`Registered user "${newUser.name}" successfully into system databases.`);
  };

  const handleDeleteUser = (id: string) => {
    const deletedUser = users.find(u => u.id === id);
    setUsers(users.filter(u => u.id !== id));
    if (deletedUser) {
      showToast(`Terminated profile roster for "${deletedUser.name}".`);
    }
  };

  const toggleUserStatus = (id: string) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        const nextStatus = u.status === 'active' ? 'inactive' : 'active';
        showToast(`User account status modified to ${nextStatus}.`);
        return { ...u, status: nextStatus };
      }
      return u;
    }));
  };

  // Compile active data list into actual downloadable local client CSV
  const handleExportCSV = () => {
    if (users.length === 0) {
      showToast('No registers exist to perform CSV compilation.');
      return;
    }

    const header = 'ID,Name,Email,Subscription,JoinDate,Status\n';
    const rows = users.map(u => `${u.id},"${u.name}","${u.email}",${u.subscription},${u.joinDate},${u.status}`).join('\n');
    const csvContent = 'data:text/csv;charset=utf-8,' + encodeURIComponent(header + rows);
    
    // Trigger download inside browser iframe boundaries
    const link = document.createElement('a');
    link.setAttribute('href', csvContent);
    link.setAttribute('download', `FENIX_Users_Database_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Compiled CSV data generated. File downloaded successfully.');
  };

  // Filter items
  const filteredUsers = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          u.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterSub === 'All' || u.subscription === filterSub;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8 relative animate-in fade-in duration-500">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-slate-950 text-white px-6 py-3 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-3 z-50 animate-bounce">
          <CheckCircle size={18} className="text-emerald-500" />
          <span className="text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Roster Add Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-hidden animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-[2rem] border border-slate-100 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-250">
            <div className="bg-indigo-600 p-6 text-white relative">
              <button 
                onClick={() => setShowAddForm(false)}
                className="absolute top-5 right-5 w-8 h-8 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center text-white"
              >
                <X size={16} />
              </button>
              <h3 className="font-extrabold text-lg flex items-center gap-2"><UserPlus size={18} /> Register FENIX Account</h3>
              <p className="text-xs text-indigo-100/80 mt-1">Append new user variables directly to live publisher database tables.</p>
            </div>

            <form onSubmit={handleAddUser} className="p-6 space-y-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1.5 text-xs uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  placeholder="Johnathan Doe" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white text-sm font-semibold transition-all"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5 text-xs uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  placeholder="john@fenix.app" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white text-sm font-semibold transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5 text-xs uppercase tracking-wider">Plan License</label>
                  <select 
                    value={newUserSub}
                    onChange={(e) => setNewUserSub(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-600 font-semibold text-sm"
                  >
                    <option>Free</option>
                    <option>Pro</option>
                    <option>Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1.5 text-xs uppercase tracking-wider">Status State</label>
                  <select 
                    value={newUserStatus}
                    onChange={(e) => setNewUserStatus(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-600 font-semibold text-sm"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 flex gap-2 justify-end">
                <button 
                  type="button" 
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2.5 border border-slate-200 rounded-xl font-bold text-slate-500 text-xs hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold text-white text-xs rounded-xl shadow-md cursor-pointer"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 text-center sm:text-left font-sans">User Base Directories</h1>
          <p className="text-slate-500 text-sm text-center sm:text-left hidden sm:block">Monitor platform registrations, subscription license segments, and auth tokens.</p>
        </div>
        <div className="flex gap-3">
          <button 
            type="button"
            onClick={handleExportCSV}
            className="flex items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all border border-slate-200 shadow-sm outline-none cursor-pointer text-xs"
          >
            <Download size={14} />
            <span>Export database (CSV)</span>
          </button>
          <button 
            type="button"
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 outline-none cursor-pointer text-xs"
          >
            <UserPlus size={14} />
            <span>Register Account</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {(['All', 'Free', 'Pro', 'Enterprise'] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setFilterSub(tier)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase transition-all ${
                  filterSub === tier 
                    ? 'bg-slate-900 text-white shadow' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {tier === 'All' ? 'All tiers' : `${tier} Plan`}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search user profiles..." 
              className="w-full md:w-80 bg-slate-50 pl-10 pr-4 py-2.5 rounded-xl text-xs font-medium outline-none border border-slate-200 focus:bg-white focus:ring-2 focus:ring-indigo-600 transition-all" 
            />
          </div>
        </div>

        <div className="overflow-x-auto font-sans">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400">
                <th className="px-8 py-4 text-[10px] uppercase font-black tracking-widest leading-none">User Profile</th>
                <th className="px-8 py-4 text-[10px] uppercase font-black tracking-widest leading-none">Subscription Segment</th>
                <th className="px-8 py-4 text-[10px] uppercase font-black tracking-widest leading-none">Registration On</th>
                <th className="px-8 py-4 text-[10px] uppercase font-black tracking-widest leading-none">Status State</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-150">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-8 py-16 text-center text-slate-400 font-medium">
                    No account registers match the active filter criteria. Click "Register Account" to add profiles.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={`https://picsum.photos/seed/user-${u.id}/128/128`} 
                          className="w-10 h-10 rounded-xl border border-slate-100 object-cover" 
                          alt="avatar"
                        />
                        <div>
                          <p className="text-sm font-black text-slate-950 leading-none">{u.name}</p>
                          <p className="text-[11px] text-slate-400 font-medium mt-1.5">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                        u.subscription === 'Pro' ? 'bg-indigo-50 text-indigo-700 border border-indigo-100/40' : 
                        u.subscription === 'Enterprise' ? 'bg-amber-50 text-amber-700 border border-amber-100/40' : 
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {u.subscription}
                      </span>
                    </td>
                    <td className="px-8 py-4 text-xs font-semibold text-slate-500">{u.joinDate}</td>
                    <td className="px-8 py-4">
                      <button 
                        onClick={() => toggleUserStatus(u.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full cursor-pointer outline-none ${
                          u.status === 'active' ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700' : 'bg-slate-150 hover:bg-slate-200 text-slate-600'
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${u.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></div>
                        <span className="text-[10px] font-black uppercase tracking-wider leading-none">{u.status}</span>
                      </button>
                    </td>
                    <td className="px-8 py-4 text-right">
                      <button 
                        onClick={() => handleDeleteUser(u.id)}
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManager;
