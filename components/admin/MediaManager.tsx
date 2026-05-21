import React, { useState, useEffect } from 'react';
import { Upload, Video, Music, Tv, MoreVertical, Search, Filter, Plus, Trash2, CheckCircle, Clock } from 'lucide-react';
import { AdminMedia, MediaCategory } from '../../types.ts';

const MediaManager: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'video' | 'series' | 'song'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Real active React state for media assets
  const [mediaList, setMediaList] = useState<AdminMedia[]>([
    { id: '1', title: 'Morning Focus Beats', category: 'song', uploadDate: '2026-05-18', size: '14.2 MB', status: 'published' },
    { id: '2', title: 'Deep Work Masterclass', category: 'series', uploadDate: '2026-05-14', size: '1.2 GB', status: 'published' },
    { id: '3', title: 'Launch Keynote 2026', category: 'video', uploadDate: '2026-05-10', size: '840 MB', status: 'published' },
    { id: '4', title: 'Productivity Hacks Vol 1', category: 'video', uploadDate: '2026-05-01', size: '240 MB', status: 'published' },
  ]);

  // Form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<MediaCategory>('video');
  const [fileSelected, setFileSelected] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');

  // Upload simulation states
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const simulateFileSelection = () => {
    // Simulated file selector
    const names = {
      video: ['Focus_State_Flow_Cycle_1080p.mp4', 'Executive_Shielding_Session.mov', 'Cognitive_Matching_Deep_Camp.mp4'],
      series: ['Chronobiology_CrashCourse_S01E03.mp4', 'Digital_Minimalism_Module_02.mp4'],
      song: ['LoFi_Monaural_Binaural_Beats.mp3', 'White_Noise_Forest_Rain_432hz.wav', 'SubMetabolic_Ambient_Track.wav']
    };
    
    const chosenList = names[category];
    const pickedName = chosenList[Math.floor(Math.random() * chosenList.length)];
    const pickedSize = category === 'song' ? `${(10 + Math.random() * 15).toFixed(1)} MB` : `${(150 + Math.random() * 800).toFixed(0)} MB`;
    
    setFileName(pickedName);
    setFileSize(pickedSize);
    setTitle(pickedName.split('.')[0].replace(/_/g, ' '));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleStartUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      showToast('Please provide a title for the media content.');
      return;
    }
    
    setUploading(true);
    setProgress(0);
  };

  // Simulated progress timer
  useEffect(() => {
    let interval: any = null;
    if (uploading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            // Finish upload process
            setTimeout(() => {
              const newAsset: AdminMedia = {
                id: (mediaList.length + 1).toString(),
                title: title.trim(),
                category: category,
                uploadDate: new Date().toISOString().split('T')[0],
                size: fileSize || '28.4 MB',
                status: 'published'
              };
              setMediaList([newAsset, ...mediaList]);
              setUploading(false);
              setTitle('');
              setDescription('');
              setFileName('');
              setFileSize('');
              showToast(`Asset "${newAsset.title}" uploaded and published live successfully!`);
            }, 600);
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [uploading, title, category, fileSize, mediaList]);

  const handleDelete = (id: string) => {
    const deleted = mediaList.find(m => m.id === id);
    setMediaList(mediaList.filter(m => m.id !== id));
    if (deleted) {
      showToast(`Removed "${deleted.title}" from library.`);
    }
  };

  const toggleStatus = (id: string) => {
    setMediaList(mediaList.map(m => {
      if (m.id === id) {
        const nextStatus = m.status === 'published' ? 'draft' : 'published';
        showToast(`Asset is now in ${nextStatus} mode.`);
        return { ...m, status: nextStatus };
      }
      return m;
    }));
  };

  // Live filter variables
  const filteredMedia = mediaList.filter((m) => {
    const matchesCategory = selectedType === 'all' || m.category === selectedType;
    const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          m.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 relative animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-slate-950 text-white px-6 py-3 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-3 z-50 animate-bounce">
          <CheckCircle size={18} className="text-emerald-500" />
          <span className="text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 text-center sm:text-left">Media Management Center</h1>
          <p className="text-slate-500 text-sm text-center sm:text-left hidden sm:block">Upload high-converting videos, focus guides, and audio beats for FENIX users.</p>
        </div>
        <div className="flex gap-2">
          {['all', 'video', 'series', 'song'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider capitalize transition-all ${
                selectedType === type 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {type === 'all' ? 'All Formats' : `${type}s`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Upload Form Simulator */}
        <div className="lg:col-span-1 bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col h-fit">
          <h3 className="font-extrabold text-slate-900 text-lg mb-6 flex items-center gap-2">
            <Upload size={18} className="text-indigo-600" /> Live Publisher Uploader
          </h3>
          
          <form onSubmit={handleStartUpload} className="space-y-6">
            
            {/* Category selection */}
            <div>
              <label className="block text-slate-700 font-bold mb-2 text-xs uppercase tracking-wide">Format Category</label>
              <div className="flex gap-2 p-1 bg-slate-50 rounded-xl border border-slate-150">
                <button 
                  type="button"
                  onClick={() => setCategory('video')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-black transition-all ${category === 'video' ? 'bg-white shadow-sm text-indigo-600 border border-slate-100' : 'text-slate-400'}`}
                >
                  <Video size={14} className="inline mr-1" /> Video
                </button>
                <button 
                  type="button"
                  onClick={() => setCategory('series')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-black transition-all ${category === 'series' ? 'bg-white shadow-sm text-indigo-600 border border-slate-100' : 'text-slate-400'}`}
                >
                  <Tv size={14} className="inline mr-1" /> Series
                </button>
                <button 
                  type="button"
                  onClick={() => setCategory('song')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-black transition-all ${category === 'song' ? 'bg-white shadow-sm text-indigo-600 border border-slate-100' : 'text-slate-400'}`}
                >
                  <Music size={14} className="inline mr-1" /> Song
                </button>
              </div>
            </div>

            {/* Simulated file attachments */}
            {fileName ? (
              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-between text-xs animate-in zoom-in-95">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-indigo-600 shadow-sm">
                    {category === 'video' && <Video size={18} />}
                    {category === 'series' && <Tv size={18} />}
                    {category === 'song' && <Music size={18} />}
                  </div>
                  <div>
                    <p className="font-extrabold text-indigo-950 truncate max-w-[150px]">{fileName}</p>
                    <p className="text-indigo-400 font-medium">{fileSize}</p>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => { setFileName(''); setFileSize(''); }}
                  className="text-indigo-500 hover:text-indigo-700"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ) : (
              <div 
                onClick={simulateFileSelection}
                className="aspect-video border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 hover:border-indigo-400 cursor-pointer transition-all group"
              >
                <div className="p-4 bg-white rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                  <Upload size={24} className="text-indigo-600" />
                </div>
                <p className="text-xs font-bold text-slate-900">Select Mock Asset File</p>
                <p className="text-[10px] text-slate-400 mt-1">Simulate upload for client review (Max 5GB)</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-slate-700 font-bold mb-2 text-xs uppercase tracking-wide">Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Asset Title" 
                  required
                  className="w-full bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all text-sm font-medium" 
                />
              </div>
              
              <div>
                <label className="block text-slate-700 font-bold mb-2 text-xs uppercase tracking-wide">Description Details</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Summarize context for cognitive flow logs..." 
                  rows={3} 
                  className="w-full bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all text-sm font-medium resize-none"
                ></textarea>
              </div>
            </div>

            {uploading ? (
              <div className="space-y-2 animate-pulse">
                <div className="flex justify-between text-xs font-bold text-indigo-700 mb-1">
                  <span className="flex items-center gap-1"><Clock size={12} className="animate-spin" /> Synchronizing assets database...</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2.5 bg-slate-150 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            ) : (
              <button 
                type="submit"
                disabled={!title.trim()}
                className="w-full py-4 bg-slate-900 hover:bg-indigo-600 disabled:opacity-55 disabled:hover:bg-slate-900 text-white rounded-2xl font-extrabold text-sm transition-colors shadow-md cursor-pointer"
              >
                Publish Live Content
              </button>
            )}

          </form>
        </div>

        {/* Content Table list */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="font-extrabold text-slate-900 text-lg">Active Library Register</h3>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-grow sm:flex-grow-0">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search assets..." 
                  className="w-full sm:w-48 bg-slate-50 pl-9 pr-4 py-2.5 rounded-xl text-xs font-medium outline-none border border-slate-200 focus:bg-white focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all" 
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none">Title</th>
                  <th className="px-6 py-4 text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none">Type</th>
                  <th className="px-6 py-4 text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none">Disk Size</th>
                  <th className="px-6 py-4 text-[10px] uppercase font-black text-slate-400 tracking-widest leading-none">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredMedia.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-16 text-center text-slate-400 font-medium">
                      No matching resource tracks found. Use uploader left to append mock files.
                    </td>
                  </tr>
                ) : (
                  filteredMedia.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-5">
                        <p className="text-sm font-black text-slate-950">{m.title}</p>
                        <p className="text-[10px] text-slate-400 font-medium mt-1">Registrar upload: {m.uploadDate}</p>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 capitalize">
                          {m.category === 'video' && <Video size={13} className="text-indigo-500" />}
                          {m.category === 'series' && <Tv size={13} className="text-amber-500" />}
                          {m.category === 'song' && <Music size={13} className="text-emerald-500" />}
                          {m.category}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-xs font-semibold text-slate-500">{m.size}</td>
                      <td className="px-6 py-5">
                        <button 
                          onClick={() => toggleStatus(m.id)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-colors outline-none cursor-pointer ${
                            m.status === 'published' ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                          }`}
                        >
                          {m.status}
                        </button>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button 
                          onClick={() => handleDelete(m.id)}
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
    </div>
  );
};

export default MediaManager;
