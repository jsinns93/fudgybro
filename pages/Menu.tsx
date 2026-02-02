
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import AIRecommender from '../components/AIRecommender';
import { Sparkles } from 'lucide-react';

const Menu: React.FC = () => {
  const categories = ['Brownies', 'Cookie Bomb', 'Ice Cream', 'Drinks'];

  return (
    <div className="pt-32 pb-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="The Fudgy Experience" 
          subtitle="Discover Our Treats" 
        />

        {/* Categories Jump Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <a 
              key={cat}
              href={`#${cat.toLowerCase().replace(' ', '-')}`}
              className="whitespace-nowrap px-8 py-3 bg-stone-900 border border-white/5 rounded-full text-sm font-bold text-neutral-400 hover:text-brown hover:border-brown hover:bg-brown/10 transition-all flex items-center gap-2"
            >
              {cat === 'Cookie Bomb' && <Sparkles size={14} className="text-brown animate-pulse" />}
              {cat}
            </a>
          ))}
        </div>

        {/* Menu Sections */}
        <div className="space-y-32">
          {categories.map((cat) => (
            <section 
              key={cat} 
              id={cat.toLowerCase().replace(' ', '-')}
              className="scroll-mt-32"
            >
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-4xl font-display font-black text-white">{cat}</h2>
                <div className="flex-grow h-px bg-white/10"></div>
              </div>
              
              {cat === 'Cookie Bomb' ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                  <div className="lg:col-span-5">
                    <div className="bg-gradient-to-br from-brown/20 to-stone-900 border border-brown/30 p-10 rounded-[3rem] relative overflow-hidden group">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-brown/10 rounded-full blur-3xl group-hover:bg-brown/20 transition-all duration-700"></div>
                      <span className="bg-brown text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">Viral Sensation</span>
                      <h3 className="text-3xl font-display font-black text-white mb-6 leading-tight">THE COOKIE BOMB™</h3>
                      <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                        The dessert that broke the internet. A warm, artisanal chocolate chip cookie with a molten heart of premium Belgian dark chocolate. 
                      </p>
                      <p className="text-brown font-bold italic border-l-2 border-brown pl-4 mb-8">
                        "Best served hot with a scoop of Softbro Vanilla Ice Cream."
                      </p>
                      <button className="bg-white text-stone-950 px-8 py-3 rounded-full font-bold hover:bg-brown hover:text-white transition-all">
                        Order the Bomb
                      </button>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {PRODUCTS.filter(p => p.category === cat).map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {PRODUCTS.filter(p => p.category === cat).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
      
      {/* AI Assistant */}
      <AIRecommender />
    </div>
  );
};

export default Menu;
