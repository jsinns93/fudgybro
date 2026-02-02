
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { DELIVERY_LINKS } from '../constants';
import { ExternalLink, Truck, ShoppingCart, Smartphone } from 'lucide-react';

const Order: React.FC = () => {
  const grabFoodLinks = DELIVERY_LINKS.filter(l => l.platform === 'GrabFood');
  const goFoodLinks = DELIVERY_LINKS.filter(l => l.platform === 'GoFood');
  const marketplaceLinks = DELIVERY_LINKS.filter(l => ['Tokopedia', 'Shopee'].includes(l.platform));

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading 
          title="Get FUDGYBRO Delivered" 
          subtitle="Instant Cravings Solved" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* GoFood Section */}
          <div className="bg-stone-900/50 p-8 rounded-[3rem] border border-green-600/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-500">
                <Smartphone size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">GoFood</h3>
            </div>
            <div className="space-y-4">
              {goFoodLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  className="flex items-center justify-between p-4 bg-black rounded-2xl hover:bg-stone-800 transition-colors border border-white/5 group"
                >
                  <span className="font-bold text-white">{link.city}</span>
                  <ExternalLink size={18} className="text-neutral-500 group-hover:text-red-500" />
                </a>
              ))}
            </div>
          </div>

          {/* GrabFood Section */}
          <div className="bg-stone-900/50 p-8 rounded-[3rem] border border-green-600/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-600/20 rounded-2xl flex items-center justify-center text-green-500">
                <Smartphone size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">GrabFood</h3>
            </div>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {grabFoodLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  className="flex items-center justify-between p-4 bg-black rounded-2xl hover:bg-stone-800 transition-colors border border-white/5 group"
                >
                  <div>
                    <span className="font-bold text-white block">{link.city}</span>
                    {link.branch && <span className="text-xs text-neutral-500">{link.branch}</span>}
                  </div>
                  <ExternalLink size={18} className="text-neutral-500 group-hover:text-green-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Marketplace Section */}
          <div className="bg-stone-900/50 p-8 rounded-[3rem] border border-brown/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-brown/20 rounded-2xl flex items-center justify-center text-brown">
                <ShoppingCart size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Marketplace</h3>
            </div>
            <div className="space-y-4">
              {marketplaceLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  className="p-6 bg-black rounded-3xl hover:bg-stone-800 transition-all border border-white/5 group flex flex-col items-center text-center gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${link.platform === 'Tokopedia' ? 'bg-green-600' : 'bg-orange-600'}`}>
                    <Truck size={24} />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-lg mb-1">{link.platform}</span>
                    <span className="text-sm text-neutral-500">Nationwide Shipping • Hampers</span>
                  </div>
                  <span className="mt-2 text-brown font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                    Visit Store <ExternalLink size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-brown p-8 md:p-12 rounded-[4rem] text-center text-white overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-black mb-6">Planning a huge event?</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
              We cater for weddings, birthdays, and corporate events with custom dessert boxes and brownie towers.
            </p>
            <a 
              href="#" 
              className="inline-block bg-white text-stone-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-200 transition-all transform hover:scale-105"
            >
              Inquire Corporate Catering
            </a>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Order;
