
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Send, Loader2, X } from 'lucide-react';
import { PRODUCTS } from '../constants';

const AIRecommender: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const productList = PRODUCTS.map(p => `${p.name}: ${p.description}`).join(', ');
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a FUDGYBRO dessert expert. Based on the user mood/craving: "${prompt}", suggest ONE product from this list: ${productList}. Explain why in a fun, short, tempting sentence (max 20 words).`,
      });

      setRecommendation(response.text || "Something fudgy is coming your way!");
    } catch (error) {
      console.error(error);
      setRecommendation("The kitchen is busy! How about our Classic Brownie?");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-brown text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group border border-white/20"
      >
        <Sparkles className="group-hover:rotate-12 transition-transform" />
        <span className="hidden md:inline font-bold uppercase tracking-wider text-xs">AI Craving Guide</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          <div className="relative bg-stone-900 border border-brown/30 w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-neutral-500 hover:text-white"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brown/20 rounded-xl flex items-center justify-center text-brown">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-display font-bold text-white tracking-tight">What are you craving?</h3>
            </div>

            {recommendation ? (
              <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
                <div className="bg-brown/10 border border-brown/20 p-6 rounded-3xl italic text-neutral-200">
                  "{recommendation}"
                </div>
                <button 
                  onClick={() => {setRecommendation(null); setPrompt('');}}
                  className="w-full bg-brown text-white py-4 rounded-2xl font-bold hover:bg-white hover:text-stone-950 transition-all"
                >
                  Try Another Mood
                </button>
              </div>
            ) : (
              <form onSubmit={handleRecommend} className="space-y-4">
                <p className="text-sm text-neutral-400 mb-2">Tell us your mood (e.g., "I had a long day", "Celebrating a win") and we'll pick your treat.</p>
                <input 
                  autoFocus
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="I need something rich and dark..."
                  className="w-full bg-black/50 border border-white/10 px-6 py-4 rounded-2xl text-white outline-none focus:border-brown transition-colors"
                />
                <button 
                  disabled={isLoading || !prompt.trim()}
                  className="w-full bg-brown disabled:opacity-50 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-stone-950 transition-all"
                >
                  {isLoading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                  Get Recommendation
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AIRecommender;
