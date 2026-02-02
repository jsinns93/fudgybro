
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Gift, Heart, Star, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

const Rewards: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading 
          title="FUDGYFELLA Rewards" 
          subtitle="Eat Brownies, Get Rewarded" 
        />

        <div className="bg-stone-900/30 rounded-[3rem] border border-white/5 p-8 md:p-16 mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block px-4 py-1 bg-brown/20 rounded-full text-brown font-bold text-xs uppercase tracking-widest mb-4">
                Exclusive Loyalty Program
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Join the #FUDGYFELLA Community</h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Being a FudgyFella isn't just about the brownies (though that's a huge part). It's about access to secret menu items, early bird launches, and rewards that sweeten your life.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Earn 1 point for every IDR 1,000 spent',
                  'Free Softbro Ice Cream on your birthday',
                  'Early access to limited seasonal drops',
                  'Exclusive FUDGYFELLA merch discounts'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white font-medium">
                    <div className="w-6 h-6 bg-brown rounded-full flex items-center justify-center text-[10px]">
                      <Star size={12} fill="white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-brown text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-stone-950 transition-all shadow-xl">
                Join Loyalty Program
              </button>
            </div>
            <div className="w-full md:w-1/2 aspect-square bg-stone-900 rounded-[3rem] overflow-hidden border border-white/10 relative">
               <img 
                src="https://picsum.photos/seed/rewards/800/800" 
                alt="Rewards Program" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                 <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                    <Gift size={48} className="text-white" />
                 </div>
                 <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                    <p className="text-white font-black text-2xl tracking-tighter">#FUDGYFELLA</p>
                    <p className="text-white/60 text-sm">Loyalty Member Card</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-black/40 rounded-3xl border border-white/5 text-center">
              <Sparkles className="mx-auto mb-4 text-brown" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">Redeem Points</h4>
              <p className="text-sm text-neutral-500">Exchange your points for free brownies, toppings, or drinks.</p>
            </div>
            <div className="p-8 bg-black/40 rounded-3xl border border-white/5 text-center">
              <Heart className="mx-auto mb-4 text-brown" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">Birthday Treat</h4>
              <p className="text-sm text-neutral-500">A special surprise waiting for you every single year.</p>
            </div>
            <div className="p-8 bg-black/40 rounded-3xl border border-white/5 text-center">
              <Star className="mx-auto mb-4 text-brown" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">VIP Tiers</h4>
              <p className="text-sm text-neutral-500">Level up your status for even bigger multiplier points.</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Channel */}
        <div className="bg-green-950/20 border border-green-900/30 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle size={32} className="text-green-500" />
              <h3 className="text-3xl font-display font-bold text-white">The Secret Channel</h3>
            </div>
            <p className="text-neutral-400 text-lg mb-8">
              Join our WhatsApp Channel for instant notifications on flash sales, mid-week promos, and limited edition inventory updates. Sometimes we drop codes for 50% off - just for the channel!
            </p>
            <button className="bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3">
              Join WhatsApp Channel <ArrowRight size={20} />
            </button>
          </div>
          <div className="w-48 h-48 bg-white p-4 rounded-3xl shrink-0 shadow-2xl">
            {/* Fake QR Code */}
            <div className="w-full h-full bg-stone-100 rounded-xl flex items-center justify-center relative overflow-hidden">
               <div className="grid grid-cols-8 grid-rows-8 gap-1 w-full h-full p-2 opacity-80">
                  {Array.from({length: 64}).map((_, i) => (
                    <div key={i} className={`rounded-sm ${Math.random() > 0.6 ? 'bg-stone-900' : 'bg-transparent'}`}></div>
                  ))}
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg border border-stone-200">
                    <MessageCircle size={20} className="text-green-600" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
