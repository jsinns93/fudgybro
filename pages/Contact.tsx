
import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { MessageCircle, Mail, Send, Instagram, Twitter, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Simulation)");
    setFormState({ name: '', phone: '', message: '' });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading 
          title="Let's Chat Desserts" 
          subtitle="Customer Service" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-stone-900/50 p-8 rounded-[3rem] border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-8">Reach out directly</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/yourwhatsapp" 
                  className="flex items-center gap-4 p-5 bg-green-600/10 hover:bg-green-600/20 border border-green-600/20 rounded-3xl transition-all group"
                >
                  <div className="w-12 h-12 bg-green-600 text-white rounded-2xl flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <span className="block text-green-500 font-bold">WhatsApp</span>
                    <span className="text-neutral-400 text-sm">Instant support & orders</span>
                  </div>
                </a>

                <a 
                  href="mailto:hello@fudgybro.com" 
                  className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl transition-all group"
                >
                  <div className="w-12 h-12 bg-brown text-white rounded-2xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="block text-white font-bold">Email Us</span>
                    <span className="text-neutral-400 text-sm">hello@fudgybro.com</span>
                  </div>
                </a>
              </div>

              <div className="mt-12">
                <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">Follow our journey</p>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-500' },
                    { icon: Twitter, label: 'Twitter', color: 'hover:text-sky-400' },
                    { icon: Phone, label: 'TikTok', color: 'hover:text-cyan-400' }
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className={`w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-neutral-500 border border-white/5 transition-all ${social.color} hover:bg-white/5`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3.5rem] p-8 md:p-12 text-stone-950 shadow-2xl overflow-hidden relative">
              <h3 className="text-3xl font-display font-black mb-8">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full bg-stone-100 border-none px-6 py-4 rounded-2xl text-stone-900 focus:ring-2 focus:ring-brown focus:bg-white transition-all outline-none"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    placeholder="+62"
                    className="w-full bg-stone-100 border-none px-6 py-4 rounded-2xl text-stone-900 focus:ring-2 focus:ring-brown focus:bg-white transition-all outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">Your Message</label>
                  <textarea 
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Tell us what's on your mind..."
                    className="w-full bg-stone-100 border-none px-6 py-4 rounded-2xl text-stone-900 focus:ring-2 focus:ring-brown focus:bg-white transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-stone-950 text-white py-5 rounded-2xl font-bold text-lg hover:bg-brown transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
              
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-64 h-64 bg-brown/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
