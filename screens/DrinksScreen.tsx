
import React from 'react';
import { MenuItem } from '../types';
import { MOCK_MENU } from '../constants';

interface DrinksScreenProps {
  onBack: () => void;
  onAddToCart: (item: MenuItem) => void;
}

const DrinksScreen: React.FC<DrinksScreenProps> = ({ onBack, onAddToCart }) => {
  const coldDrinks = MOCK_MENU.filter(item => item.category === 'Beverages');
  const beers = MOCK_MENU.filter(item => item.category === 'Beer');

  const Section = ({ title, icon, items }: { title: string, icon: string, items: MenuItem[] }) => (
    <div className="space-y-4 mb-8">
      <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D4037]/60">{title}</h2>
        <div className="h-[1px] flex-1 bg-[#E67E22]/20"></div>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 glass-card-premium p-3 rounded-2xl">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
              <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-[#5D4037]">{item.name}</h3>
              <p className="text-lg font-serif font-bold text-[#E67E22]">₹{item.price}</p>
            </div>
            <button 
              onClick={() => onAddToCart(item)}
              className="bg-[#5D4037] text-white px-4 py-2 rounded-xl text-[10px] font-bold active:scale-90 transition-all shadow-sm"
            >
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-transparent relative overflow-hidden">
      <div className="p-6 flex items-center justify-between glass-card-premium shadow-sm z-10 border-b border-[#E67E22]/10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5D4037]/5 text-[#5D4037]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h1 className="text-lg font-serif font-bold text-[#5D4037]">Drinks & Beer</h1>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-6">
        <Section title="Soft Drinks" icon="🥤" items={coldDrinks} />
        <Section title="Chilled Beer" icon="🍺" items={beers} />
        
        <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200/50 mt-4">
           <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest text-center">
             ⚠️ Alcohol is served only to 21+ adults.
           </p>
        </div>
      </div>
    </div>
  );
};

export default DrinksScreen;
