
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types.ts';
import { getAssistantResponse } from '../services/geminiService.ts';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm the FENIX Assistant. Any questions about the app features or pricing?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasKey, setHasKey] = useState(!!process.env.API_KEY);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    
    const checkKeyStatus = async () => {
      const aistudio = (window as any).aistudio;
      if (aistudio) {
        const selected = await aistudio.hasSelectedApiKey();
        setHasKey(!!process.env.API_KEY || selected);
      }
    };
    checkKeyStatus();
  }, [messages, isTyping]);

  const handleConnect = async () => {
    const aistudio = (window as any).aistudio;
    if (aistudio) {
      await aistudio.openSelectKey();
      setHasKey(true);
      setMessages(prev => [...prev, { role: 'assistant', content: "API connection active! How can I help you today?" }]);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const response = await getAssistantResponse(inputValue);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-indigo-700 transition-all hover:scale-110 active:scale-95 group"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-2xl`}></i>
        {!isOpen && (
           <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
            Ask about FENIX
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[320px] sm:w-[380px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-indigo-600 p-4 flex items-center gap-3 text-white">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center border border-indigo-400">
              <i className="fas fa-sparkles"></i>
            </div>
            <div>
              <p className="font-bold text-sm">FENIX AI Assistant</p>
              <p className="text-[10px] opacity-80 uppercase tracking-widest">Powered by Gemini</p>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-200 shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {!hasKey && (
              <div className="flex justify-start">
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl rounded-tl-none text-amber-800 text-sm shadow-sm">
                  <p className="mb-3 font-medium">AI requires a connection to answer questions.</p>
                  <p className="mb-3 text-xs opacity-75">Users must select an API key from a paid GCP project. See <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline">billing docs</a>.</p>
                  <button 
                    onClick={handleConnect}
                    className="bg-amber-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-amber-700 transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-key text-xs"></i>
                    Connect API Key
                  </button>
                </div>
              </div>
            )}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-grow bg-slate-50 px-4 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all border border-slate-200"
            />
            <button 
              onClick={handleSend}
              className="bg-indigo-600 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-indigo-700 transition-colors"
            >
              <i className="fas fa-paper-plane text-sm"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatBot;