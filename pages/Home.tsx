
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, ArrowRight, MessageCircle, Trophy } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';

const Home: React.FC = () => {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Hero brownie"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-stone-950"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-brown font-bold tracking-[0.3em] uppercase text-sm mb-6 block animate-fade-in">
            Premium Indonesian Desserts
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6 leading-[1.1] tracking-tight animate-slide-up">
            Fudgy Brownies.<br />
            Viral Cookie Bombs.<br />
            <span className="text-brown">Pure Happiness.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Serving Jakarta, Bandung, Yogyakarta & Surabaya with the most indulgent treats you've ever tasted.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/order" 
              className="w-full sm:w-auto bg-brown hover:bg-white hover:text-stone-950 text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-2xl"
            >
              Order Now
            </Link>
            <Link 
              to="/menu" 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-full text-lg font-bold transition-all"
            >
              View Menu
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Brand Intro & Cities */}
      <section className="py-24 bg-stone-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-2xl md:text-3xl font-display text-white leading-relaxed font-medium mb-10 italic">
              "FUDGYBRO is a dessert brand known for rich fudgy brownies, viral cookie bombs, soft ice cream, and sweet treats. Loved across Indonesia for bold flavors and indulgent textures."
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Jakarta', 'Bandung', 'Yogyakarta', 'Surabaya'].map((city) => (
                <span 
                  key={city}
                  className="px-6 py-2 rounded-full border border-brown/30 bg-brown/10 text-brown font-bold text-sm tracking-wider uppercase"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-stone-900/30">
        <div className="container mx-auto px-4">
          <SectionHeading title="Featured Indulgences" subtitle="Our Best Sellers" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/menu" 
              className="inline-flex items-center text-brown font-bold group"
            >
              Explore Full Menu 
              <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Rewards & WhatsApp Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Loyalty Card */}
            <div className="bg-gradient-to-br from-stone-900 to-black p-10 rounded-[3rem] border border-brown/20 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-brown/20 rounded-2xl flex items-center justify-center text-brown mb-6 group-hover:scale-110 transition-transform">
                <Trophy size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">#FUDGYFELLA Loyalty</h3>
              <p className="text-neutral-400 mb-8 max-w-sm">
                Join our family! Collect points from every purchase and redeem them for free ice cream, exclusive merchandise, and special rewards.
              </p>
              <Link 
                to="/rewards" 
                className="mt-auto bg-brown text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-stone-950 transition-all flex items-center gap-2"
              >
                Join Rewards <ArrowRight size={18} />
              </Link>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-950/20 to-black p-10 rounded-[3rem] border border-green-900/20 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-green-900/20 rounded-2xl flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">WhatsApp Deals</h3>
              <p className="text-neutral-400 mb-8 max-w-sm">
                Never miss a drop! Join our WhatsApp Channel to steal secret deals, flash promos, and be the first to know about new seasonal menus.
              </p>
              <Link 
                to="/rewards" 
                className="mt-auto bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-all flex items-center gap-2"
              >
                Join WhatsApp Deals <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
