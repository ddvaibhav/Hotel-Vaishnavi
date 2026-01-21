
import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MOCK_MENU } from '../constants';

interface FoodMenuScreenProps {
  onBack: () => void;
  onAddToCart: (item: MenuItem) => void;
}

const FoodMenuScreen: React.FC<FoodMenuScreenProps> = ({ onBack, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'Veg' | 'Non-Veg'>('Veg');
  
  const filteredMenu = MOCK_MENU.filter(item => item.category === activeCategory);

  return (
    <div className="h-full flex flex-col bg-transparent relative overflow-hidden">
      {/* Header */}
      <div className="p-6 flex items-center justify-between glass-card-premium shadow-sm z-10 border-b border-[#E67E22]/10 sticky top-0">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5D4037]/5 text-[#5D4037] active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h1 className="text-lg font-serif font-bold text-[#5D4037]">Authentic Menu</h1>
        <div className="w-10"></div>
      </div>

      {/* Category Tabs */}
      <div className="p-4 flex gap-2 justify-center z-10 sticky top-20">
        {['Veg', 'Non-Veg'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as any)}
            className={`flex-1 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border-2 ${
              activeCategory === cat 
                ? 'bg-[#E67E22] border-[#E67E22] text-white shadow-lg' 
                : 'bg-white/80 border-white text-[#5D4037]/40'
            }`}
          >
            {cat === 'Veg' ? '🥦 Pure Veg' : '🍗 Non-Veg'}
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-12 space-y-4">
        {filteredMenu.map((item) => (
          <div key={item.id} className="flex gap-4 glass-card-premium p-3 rounded-3xl border border-white/50 active:scale-[0.98] transition-all">
            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
              <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
            </div>
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="text-sm font-bold text-[#5D4037] leading-tight mb-0.5">{item.name}</h3>
                <p className="text-[10px] text-[#5D4037]/50 line-clamp-2 leading-relaxed">{item.description}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-base font-bold text-[#E67E22]">₹{item.price}</p>
                <button 
                  onClick={() => onAddToCart(item)}
                  className="bg-[#5D4037] text-white px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-md active:scale-90 transition-all"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenuScreen;
