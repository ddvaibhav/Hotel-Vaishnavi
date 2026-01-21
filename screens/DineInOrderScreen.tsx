
import React, { useState } from 'react';
import { CartItem } from '../types';
import Button from '../components/Button';
import Input from '../components/Input';

interface DineInOrderScreenProps {
  onBack: () => void;
  cartItems: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onPlaceOrder: (tableNumber: string) => void;
  language: 'en' | 'mr';
}

const DineInOrderScreen: React.FC<DineInOrderScreenProps> = ({ onBack, cartItems, onUpdateQty, onPlaceOrder, language }) => {
  const [tableNumber, setTableNumber] = useState('');
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const t = {
    en: {
      title: "Dine-In Order",
      table: "Table Number",
      tablePlaceholder: "Enter Table No.",
      empty: "Your order list is empty",
      subtotal: "Subtotal",
      tax: "GST (5%)",
      grandTotal: "Grand Total",
      place: "Place Dine-In Order",
      message: "Order will be served at your table",
      required: "Please enter your table number"
    },
    mr: {
      title: "डायन-इन ऑर्डर",
      table: "टेबल नंबर",
      tablePlaceholder: "टेबल नंबर टाका",
      empty: "तुमची ऑर्डर यादी रिकामी आहे",
      subtotal: "एकूण",
      tax: "जीएसटी (५%)",
      grandTotal: "एकूण देय",
      place: "ऑर्डर द्या (डायन-इन)",
      message: "ऑर्डर तुमच्या टेबलावर दिली जाईल",
      required: "कृपया तुमचा टेबल नंबर टाका"
    }
  }[language];

  return (
    <div className="h-full flex flex-col bg-transparent">
      <div className="p-6 flex items-center justify-between glass-card-premium shadow-sm border-b border-[#E67E22]/10 sticky top-0 z-20">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5D4037]/5 text-[#5D4037]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h1 className="text-lg font-serif font-bold text-[#5D4037]">{t.title}</h1>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
        {/* Table Number Input */}
        <div className="glass-card-premium p-4 rounded-3xl border-2 border-[#E67E22]/20 mb-2">
          <Input 
            label={t.table} 
            placeholder={t.tablePlaceholder} 
            value={tableNumber} 
            onChange={setTableNumber} 
          />
        </div>

        {cartItems.length === 0 ? (
          <div className="h-64 flex flex-col items-center justify-center opacity-30">
            <div className="text-6xl mb-4">🍛</div>
            <p className="font-bold uppercase tracking-widest text-xs text-center">{t.empty}</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 glass-card-premium p-4 rounded-2xl border border-white/50">
              <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-[#5D4037]">{item.name}</h3>
                <p className="text-[#E67E22] font-bold">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-3 bg-white/50 rounded-xl p-1 border border-[#E67E22]/10">
                <button 
                  onClick={() => onUpdateQty(item.id, -1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-[#5D4037] shadow-sm active:scale-90"
                >
                  -
                </button>
                <span className="font-bold text-[#5D4037] text-sm">{item.quantity}</span>
                <button 
                  onClick={() => onUpdateQty(item.id, 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#5D4037] text-white shadow-sm active:scale-90"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-6 glass-card-premium border-t border-[#E67E22]/20 space-y-4">
          <div className="flex justify-between items-center px-2">
            <span className="text-[#5D4037]/60 font-medium">{t.subtotal}</span>
            <span className="text-[#5D4037] font-bold">₹{total}</span>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className="text-[#5D4037]/60 font-medium">{t.tax}</span>
            <span className="text-[#5D4037] font-bold">₹{(total * 0.05).toFixed(0)}</span>
          </div>
          <div className="h-[1px] bg-[#E67E22]/10"></div>
          <div className="flex justify-between items-center px-2 mb-2">
            <span className="text-lg font-serif font-bold text-[#5D4037]">{t.grandTotal}</span>
            <span className="text-2xl font-serif font-bold text-[#E67E22]">₹{(total * 1.05).toFixed(0)}</span>
          </div>
          
          <div className="bg-orange-50 p-3 rounded-xl border border-orange-200/50 flex items-center gap-3">
            <span className="text-lg">🛎️</span>
            <p className="text-[10px] font-bold text-orange-800 uppercase tracking-wider">{t.message}</p>
          </div>

          <Button 
            label={t.place} 
            variant="primary" 
            onClick={() => {
              if(!tableNumber.trim()){
                alert(t.required);
                return;
              }
              onPlaceOrder(tableNumber);
            }} 
            className="saffron-gradient border-none py-4 text-sm tracking-widest uppercase shadow-orange-900/20" 
          />
        </div>
      )}
    </div>
  );
};

export default DineInOrderScreen;
