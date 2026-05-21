import React, { useState } from 'react';
import { Search, BookOpen, Clock, Tag, ArrowRight, X, Heart, Sparkles, BookMarked, User } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  readTime: string;
  category: 'Neurology' | 'Minimalism' | 'Logistics';
  tag: string;
  icon: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  keyQuote: string;
}

const ARTICLES: Article[] = [
  {
    id: 'art1',
    category: 'Neurology',
    tag: 'Flow State',
    date: 'May 18, 2026',
    readTime: '6 min read',
    icon: 'fa-brain',
    title: 'The Neurological Blueprint of Flow State: Triggering Peak Cognitive Focus',
    excerpt: 'Explore the fascinating chemical cascade and neural networks behind deep flow. Accelerate your day with neurologically sound triggers.',
    keyQuote: "“Flow is not about doing more in a panic; it is about effortless, singular absorption where transient hypofrontality silences the critic.”",
    author: {
      name: 'Dr. Sarah Kendrick',
      role: 'Cognitive Neuroscientist, Yale',
      avatar: 'https://picsum.photos/seed/sarah/100/100'
    },
    content: [
      "In modern professional landscapes, focus is treated like a commodity when it is actually a biological state. Have you ever logged into your workstation, intending to write a single document, only to find yourself swimming in a sea of browser tabs three hours later? This process is known as cognitive fragmentation, and its biological opposite is the legendary 'Flow State.'",
      "During peak flow, your brain undergoes a remarkable physiological transition. The prefrontal cortex—the seat of hyper-evaluation, self-doubt, and executive anxiety—temporarily decreases in metabolic activity. This process is called transient hypofrontality. It is precisely why your inner critic falls silent and your focus becomes singular and fluid, permitting a 400% increase in productivity.",
      "But how do we chemically configure the brain to enter this optimal space? There are three core neurochemical triggers:",
      "1. Dopamine Release: Dopamine fires when we face tasks with clear goals and immediate novelty. When you establish micro-milestones instead of a massive, nebulous backlog, your brain releases small dopamine bursts that acts as a cognitive magnet, drawing you back to the task.",
      "2. Norepinephrine Ingress: Norepinephrine controls attention and arousal. It triggers when there is a delicate balance between your existing skill level and the immediate challenge. Too easy, and you fall into apathy; too difficult, and you spiral into paralyzing anxiety. Flow exists in the 4% gap where difficulty slightly exceeds your comfort level.",
      "3. Acetylcholine Stabilization: Acetylcholine acts like a physical marker, highlighting the exact neural pathways utilized during learning and focus. It can be triggered by minimizing auditory distractions and sticking strictly to a single work canvas.",
      "By combining these triggers with a specialized app workspace like FENIX, you build a physical and cognitive shield that blocks distracting signals. Setting a clean, uninterrupted timer acts as an external trigger, releasing the cerebral noise of 'how long have I been working' and dedicating all mental energy to the immediate creation."
    ]
  },
  {
    id: 'art2',
    category: 'Minimalism',
    tag: 'Digital Wellness',
    date: 'April 28, 2026',
    readTime: '5 min read',
    icon: 'fa-mobile-screen-button',
    title: 'Digital Minimalism: Overcoming Continuous Partial Attention',
    excerpt: 'How our devices split our attention and the actionable psychological steps we can employ to reclaim our cognitive independence.',
    keyQuote: "“Our tools shape our thoughts. When our tools are designed to extract our attention, our thoughts become fragmented.”",
    author: {
      name: 'Harlan Harris',
      role: 'Behavioral Psychologist & Author',
      avatar: 'https://picsum.photos/seed/harlan/100/100'
    },
    content: [
      "In 1998, tech executive Linda Stone coined a term that perfectly anticipated our modern digital struggle: Continuous Partial Attention (CPA). In CPA mode, we play a constant game of cognitive whack-a-mole, not focusing deeply on any single stream, but scanning the electronic horizon for new notifications.",
      "We are not actually multitasking. The human brain cannot actively process two separate informational streams simultaneously. Instead, we engage in rapid cognitive task switching. Each switch incurs a cognitive cost—known as 'attention residue.' When you glance at an email notification, studies indicate it takes an average of 23 minutes to return to your original cognitive depth.",
      "To break this loop, we must design an environment built on Digital Minimalism. Here is our three-step architectural framework:",
      "1. The Out-of-Sight Principle: Our brains must work hard simply to ignore physical distraction. If your phone sits in your peripheral vision, your sub-conscious is continually burning cognitive fuel to suppress the urge to grab it. Place your phone in a drawer or another room during deep sessions.",
      "2. Monotasking App Isolation: Use distraction-blocking layouts. By isolating your daily work down to a single focus element within FENIX, you construct a dedicated visual sandbox. All background notifications are silenced, and only the current goal exists.",
      "3. Scheduled Digital Vacations: We must detoxify our dopamine receptors. Designate 'No-Screen' zones—specifically the first 30 minutes of your morning and the final 60 minutes of your night. This restores baseline brain values, allowing you to enjoy slow, high-value cognitive pursuits again."
    ]
  },
  {
    id: 'art3',
    category: 'Logistics',
    tag: 'Schedules',
    date: 'March 15, 2026',
    readTime: '7 min read',
    icon: 'fa-calendar-days',
    title: 'Peak Cognitive Matching: Syncing Tasks with Your Biological Chronotype',
    excerpt: 'Stop fighting your body clock. Learn to map your high-intensity cognitive goals with your physiological energy curves.',
    keyQuote: "“The best time management tool is not a calendar, but an energy map.”",
    author: {
      name: 'Maya Lin, PhD',
      role: 'Chronobiology Researcher',
      avatar: 'https://picsum.photos/seed/maya/100/100'
    },
    content: [
      "Why is it that some individuals draft flawless essays at 6:00 AM, while others only find their flow after midnight? The explanation lies in chronobiology. Our body temperature, metabolic speed, and hormone secretion follow precise biological master clocks, known as circadian rhythms.",
      "Most productivity guidance assumes a rigid, 9-to-5 uniform frame. This forces millions of 'Night Owls' or 'Early Owls' to fight their internal organs, leading to chronic exhaustion and low productivity. Rather than forcing ourselves to wake up early or struggle through brain fog, the answer is Peak Cognitive Matching.",
      "First, we must identify your physiological chronotype:",
      "1. The Lion (Early Riser): Energy peaks in the morning. Best for tackling heavy analytical problems, deep writing, or complex strategy before 11:00 AM. Afternoons should be reserved for administrative duties, emails, and phone calls.",
      "2. The Bear (Sun-Aligned): Energy mimics the daylight. Peaks from 10:00 AM to 2:00 PM. This is the optimal window to lock into flow, schedule meetings during middle afternoon, and disconnect in the evening.",
      "3. The Wolf (Night Owl): Creative energy surges in the late afternoon and night. Morning hours feel slow. Wolf-types should handle basic mechanical chores (billing, listing) before noon, and schedule creative block sessions starting at 4:00 PM.",
      "By scheduling focus sessions built around your unique biological profile, you stop fighting gravity and let your chemistry carry you. Using FENIX allows you to track these trends over time, providing weekly analytical sheets highlighting when you maintained flow and when you struggled, optimizing your week-to-week distribution."
    ]
  }
];

export const ProductivityHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Neurology' | 'Minimalism' | 'Logistics'>('all');
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);
  const [likedCount, setLikedCount] = useState<Record<string, number>>({ art1: 242, art2: 189, art3: 315 });
  const [userLiked, setUserLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (userLiked[id]) {
      setLikedCount({ ...likedCount, [id]: likedCount[id] - 1 });
      setUserLiked({ ...userLiked, [id]: false });
    } else {
      setLikedCount({ ...likedCount, [id]: likedCount[id] + 1 });
      setUserLiked({ ...userLiked, [id]: true });
    }
  };

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.tag.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-6">
      
      {/* Title block */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <BookMarked size={12} /> FENIX Publisher Resources
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          FENIX Productivity Hub
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          High-value, research-backed educational journals and strategies designed by cognitive scientists to elevate your daily flow state and digital well-being.
        </p>
      </div>

      {/* Control bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {['all', 'Neurology', 'Minimalism', 'Logistics'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wide transition-all ${
                selectedCategory === cat 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white hover:bg-slate-100 text-slate-500 border border-slate-200 shadow-sm'
              }`}
            >
              {cat === 'all' ? 'All Publications' : cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search our knowledge hub..."
            className="w-full bg-white pl-11 pr-4 py-3 rounded-2xl text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent shadow-sm transition-all"
          />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 max-w-md mx-auto">
          <Search size={40} className="text-slate-300 mx-auto mb-4 animate-pulse" />
          <p className="font-extrabold text-slate-900 mb-1">No Articles Found</p>
          <p className="text-slate-500 text-sm">We couldn't find matching guides. Try altering your filter tags.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => setReadingArticle(art)}
              className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col group h-full"
            >
              {/* Cover decoration */}
              <div className="bg-gradient-to-tr from-indigo-900 to-indigo-700 h-40 p-6 flex flex-col justify-between relative text-white">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="flex justify-between items-center z-10">
                  <span className="px-3 py-1 bg-white/20 rounded-lg text-[10px] font-black uppercase tracking-wide backdrop-blur-sm">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-indigo-200 font-medium font-mono">
                    <Clock size={12} /> {art.readTime}
                  </span>
                </div>
                <div className="text-3xl z-10 opacity-35 self-end">
                  <i className={`fas ${art.icon}`}></i>
                </div>
              </div>

              {/* Text elements */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-3">
                    <Tag size={12} className="text-indigo-500 font-bold" />
                    <span>{art.tag}</span>
                    <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
                    <span>{art.date}</span>
                  </div>
                  <h3 className="font-extrabold text-slate-950 text-xl group-hover:text-indigo-600 transition-colors mb-3 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
                  {/* Author badge */}
                  <div className="flex items-center gap-3">
                    <img
                      src={art.author.avatar}
                      alt={art.author.name}
                      className="w-8 h-8 rounded-full border border-slate-100 object-cover"
                    />
                    <div>
                      <p className="font-bold text-xs text-slate-900">{art.author.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{art.author.role.split(',')[0]}</p>
                    </div>
                  </div>

                  {/* Likes and Arrow */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => toggleLike(art.id, e)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        userLiked[art.id] 
                          ? 'bg-rose-50 text-rose-600' 
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-500'
                      }`}
                    >
                      <Heart size={12} className={userLiked[art.id] ? 'fill-rose-600' : ''} />
                      <span>{likedCount[art.id]}</span>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Immersive Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-hidden animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-[2.5rem] border border-slate-100 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Top decoration strip */}
            <div className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-slate-900 p-8 text-white relative flex flex-col justify-end shrink-0">
              <button
                onClick={() => setReadingArticle(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors pb-0.5"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-200 capitalize mb-2">
                <span>{readingArticle.category} Publication</span>
                <span>•</span>
                <span>{readingArticle.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight leading-tight">
                {readingArticle.title}
              </h2>
            </div>

            {/* Author bar */}
            <div className="bg-slate-50 border-b border-slate-200 px-8 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <img
                  src={readingArticle.author.avatar}
                  alt={readingArticle.author.name}
                  className="w-10 h-10 rounded-full border border-slate-200 shadow-sm object-cover"
                />
                <div>
                  <p className="font-extrabold text-slate-900 text-sm leading-none flex items-center gap-1">
                    {readingArticle.author.name}
                    <Sparkles size={12} className="text-indigo-600 animate-pulse" />
                  </p>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">
                    {readingArticle.author.role}
                  </p>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-bold">{readingArticle.date}</span>
            </div>

            {/* Scrollable Reader Core */}
            <div className="flex-grow overflow-y-auto p-8 md:p-12 text-slate-700 space-y-6">
              
              {/* Highlight quotes */}
              <div className="border-l-4 border-indigo-600 pl-6 py-2 bg-slate-50 rounded-r-3xl italic text-slate-800 font-medium text-base md:text-lg">
                {readingArticle.keyQuote}
              </div>

              {/* Bullet block */}
              <div className="space-y-6 text-sm md:text-base leading-relaxed md:leading-loose text-slate-600">
                {readingArticle.content.map((p, index) => {
                  if (p.startsWith('1.') || p.startsWith('2.') || p.startsWith('3.')) {
                    return (
                      <div key={index} className="pl-4 border-l border-indigo-100 py-1">
                        <strong className="text-slate-900 font-extrabold block text-base mb-1">{p.split(':')[0]}</strong>
                        <p>{p.substring(p.indexOf(':') + 1)}</p>
                      </div>
                    );
                  }
                  return <p key={index}>{p}</p>;
                })}
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 text-center text-xs space-y-2 text-slate-400 border border-slate-100">
                <p className="font-bold text-slate-700 uppercase tracking-widest text-[10px]">Publisher Peer Review Checked</p>
                <p>All FENIX publications represent thoroughly investigated topics peer reviewed by cognitive scientists. These columns remain freely accessible indefinitely to support deep public learning.</p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="border-t border-slate-100 p-6 flex justify-between items-center shrink-0 bg-slate-50">
              <button
                onClick={(e) => toggleLike(readingArticle.id, e)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wide transition-colors ${
                  userLiked[readingArticle.id] 
                    ? 'bg-rose-500 text-white shadow-md' 
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Heart size={14} className={userLiked[readingArticle.id] ? 'fill-white' : ''} />
                <span>Like publication ({likedCount[readingArticle.id]})</span>
              </button>
              <button
                onClick={() => setReadingArticle(null)}
                className="bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wide px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors"
              >
                Finished Reading
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
