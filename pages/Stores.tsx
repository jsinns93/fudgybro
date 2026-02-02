
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { OUTLETS } from '../constants';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const Stores: React.FC = () => {
  const cities = ['Jakarta', 'Bandung', 'Yogyakarta', 'Surabaya'];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading 
          title="Our Outlets" 
          subtitle="Find the Fudgy Nearest You" 
        />

        <div className="grid grid-cols-1 gap-20">
          {cities.map((city) => (
            <div key={city}>
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-4xl font-display font-black text-white">{city}</h2>
                <div className="flex-grow h-px bg-white/10"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {OUTLETS.filter(o => o.city === city).map((outlet, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-stone-900/50 rounded-[3rem] overflow-hidden border border-white/5 hover:border-brown transition-all duration-500"
                  >
                    <div className="h-48 bg-stone-800 relative">
                      {/* Fake Map Background */}
                      <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                        <img 
                          src={`https://picsum.photos/seed/map-${outlet.name}/800/400`} 
                          alt="Map location" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-brown text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                          <MapPin size={24} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">{outlet.name}</h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-4 text-neutral-400">
                          <MapPin className="shrink-0 text-brown mt-1" size={18} />
                          <p className="text-sm leading-relaxed">{outlet.address}</p>
                        </div>
                        <div className="flex items-start gap-4 text-neutral-400">
                          <Clock className="shrink-0 text-brown mt-1" size={18} />
                          <p className="text-sm">Daily: 10:00 AM - 10:00 PM</p>
                        </div>
                        <div className="flex items-start gap-4 text-neutral-400">
                          <Phone className="shrink-0 text-brown mt-1" size={18} />
                          <p className="text-sm">+62 812-3456-7890</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <a 
                          href={outlet.mapsUrl}
                          className="flex-grow bg-white hover:bg-brown hover:text-white text-stone-950 py-3 rounded-2xl font-bold text-center flex items-center justify-center gap-2 transition-all"
                        >
                          <Navigation size={18} />
                          Google Maps
                        </a>
                        <a 
                          href="#"
                          className="w-14 h-14 bg-stone-800 hover:bg-brown text-white rounded-2xl flex items-center justify-center transition-all"
                        >
                          <Phone size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-neutral-500 mb-6 italic">Don't see your city yet? We're expanding fast!</p>
          <button className="text-brown font-bold border-b-2 border-brown/30 hover:border-brown transition-all pb-1 uppercase tracking-widest text-sm">
            Suggest a New Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stores;
