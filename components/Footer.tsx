
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-white/5 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-display font-black tracking-tighter text-white mb-4">
              FUDGY<span className="text-brown">BRO</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-xs">
              Indulgent brownies, viral cookie bombs, and artisanal ice cream. Pure happiness in every bite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-brown transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-brown transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-brown transition-colors text-white">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/menu" className="text-neutral-400 hover:text-brown transition-colors">Full Menu</Link></li>
              <li><Link to="/order" className="text-neutral-400 hover:text-brown transition-colors">Delivery Platforms</Link></li>
              <li><Link to="/rewards" className="text-neutral-400 hover:text-brown transition-colors">FUDGYFELLA Rewards</Link></li>
              <li><Link to="/stores" className="text-neutral-400 hover:text-brown transition-colors">Find an Outlet</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Our Cities</h4>
            <ul className="space-y-4">
              <li className="text-neutral-400">Jakarta</li>
              <li className="text-neutral-400">Bandung</li>
              <li className="text-neutral-400">Yogyakarta</li>
              <li className="text-neutral-400">Surabaya</li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Contact Us</h4>
            <p className="text-neutral-400 text-sm mb-4">Questions? Say hi at hello@fudgybro.com</p>
            <Link to="/contact" className="inline-block border-b-2 border-brown text-white pb-1 font-bold hover:text-brown transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 space-y-4 md:space-y-0">
          <p>© 2024 FUDGYBRO. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
