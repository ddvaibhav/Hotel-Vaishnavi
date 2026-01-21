
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
      title: "Confirm Your Table",
      table: "Table Selection",
      tablePlaceholder: "Ex: T-04",
      empty: "Your plate is empty! Add some Maharashtrian delights.",
      subtotal: "Subtotal",
      tax: "GST (5%)",
      grandTotal: "Payable Amount",
      place: "Send to Kitchen",
      message: "Our staff will serve you at Table #",
      required: "Please select a table number to proceed."
    },
    mr: {
      title: "टेबल निवडा",
      table: "टेबल नंबर",
      tablePlaceholder: "उदा: T-04",
      empty: "तुमच्या प्लेटमध्ये काहीच नाही! काहीतरी निवडा.",
      subtotal: "एकूण",
      tax: "जीएसटी (५%)",
      grandTotal: "एकूण देय रक्कम",
      place: "ऑर्डर पाठवा (स्वयंपाकघर)",
      message: "आमचे कर्मचारी तुम्हाला टेबलवर सेवा देतील #",
      required: "पुढे जाण्यासाठी कृपया टेबल नंबर निवडा."
    }
  }[language];

  return (
    <div className="h-full flex flex-col bg-transparent pb-32">
      <div className="p-6 pt-12 flex items-center justify-between glass-card-premium shadow-sm border-b border-[#E67E22]/10 sticky top-0 z-20">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5D4037]/5 text-[#5D4037] active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h1 className="text-xl font-serif font-bold text-[#5D4037]">{t.title}</h1>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-5 no-scrollbar">
        {/* Urgent Table Number Notice */}
        <div className="glass-card-premium p-6 rounded-[32px] border-2 border-[#E67E22] shadow-xl shadow-orange-900/5">
          <div className="flex items-center gap-3 mb-4">
             <span className="text-2xl">🛎️</span>
             <h3 className="text-xs font-black uppercase tracking-widest text-[#E67E22]">{t.table}</h3>
          </div>
          <Input 
            placeholder={t.tablePlaceholder} 
            value={tableNumber} 
            onChange={setTableNumber} 
          />
        </div>

        {cartItems.length === 0 ? (
          <div className="h-64 flex flex-col items-center justify-center opacity-40 px-12">
            <div className="text-7xl mb-6">🍽️</div>
            <p className="font-bold uppercase tracking-[0.2em] text-[10px] text-center text-[#5D4037]">{t.empty}</p>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#5D4037]/40 px-2">Current Selection</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 glass-card-premium p-4 rounded-[28px] border border-white/60 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                  <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="text-sm font-bold text-[#5D4037] leading-tight mb-1">{item.name}</h3>
                    <p className="text-[#E67E22] font-black text-xs tracking-wider">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-4 bg-white/40 self-start rounded-full p-1 border border-[#E67E22]/10">
                    <button 
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-[#5D4037] shadow-sm active:scale-75 transition-transform"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </button>
                    <span className="font-black text-[#5D4037] text-xs">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-[#5D4037] text-white shadow-sm active:scale-75 transition-transform"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-6 glass-card-premium border-t border-[#E67E22]/20 shadow-2xl z-50 rounded-t-[48px]">
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center px-4">
              <span className="text-[10px] font-bold text-[#5D4037]/50 uppercase tracking-widest">{t.subtotal}</span>
              <span className="text-sm font-bold text-[#5D4037]">₹{total}</span>
            </div>
            <div className="flex justify-between items-center px-4">
              <span className="text-[10px] font-bold text-[#5D4037]/50 uppercase tracking-widest">{t.tax}</span>
              <span className="text-sm font-bold text-[#5D4037]">₹{(total * 0.05).toFixed(0)}</span>
            </div>
            <div className="h-[1px] bg-[#E67E22]/10 mx-4"></div>
            <div className="flex justify-between items-center px-4">
              <span className="text-lg font-serif font-bold text-[#5D4037]">{t.grandTotal}</span>
              <span className="text-2xl font-serif font-bold text-[#E67E22]">₹{(total * 1.05).toFixed(0)}</span>
            </div>
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
            className="saffron-gradient py-5 text-[11px] font-black tracking-[0.2em] uppercase rounded-3xl" 
          />
        </div>
      )}
    </div>
  );
};

export default DineInOrderScreen;
