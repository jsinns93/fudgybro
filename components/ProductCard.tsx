
import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-stone-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-brown/50 transition-all duration-500 flex flex-col">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-brown/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-neutral-400 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-brown font-bold text-lg">{product.price}</span>
          <Link 
            to="/order"
            className="w-10 h-10 bg-white hover:bg-brown hover:text-white text-stone-950 rounded-full flex items-center justify-center transition-all shadow-md active:scale-90"
          >
            <ShoppingCart size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
