
import React from 'react';
import { Order } from '../types';
import Button from '../components/Button';

interface OrderConfirmationScreenProps {
  order: Order | null;
  onHome: () => void;
  language: 'en' | 'mr';
}

const OrderConfirmationScreen: React.FC<OrderConfirmationScreenProps> = ({ order, onHome, language }) => {
  const t = {
    en: {
      success: "Order Placed Successfully!",
      table: "Table No.",
      id: "Order ID",
      time: "Est. Preparation Time",
      msg: "Our staff will serve the order at your table shortly. Please relax and enjoy the heritage taste of Vaishnavi.",
      backHome: "Back to Home"
    },
    mr: {
      success: "ऑर्डर यशस्वीरित्या देण्यात आली!",
      table: "टेबल नंबर",
      id: "ऑर्डर आयडी",
      time: "अंदाजे तयारीची वेळ",
      msg: "आमचे कर्मचारी लवकरच तुमच्या टेबलावर ऑर्डर देतील. कृपया विश्रांती घ्या आणि वैष्णवीच्या अस्सल चवीचा आनंद घ्या.",
      backHome: "मुख्य पृष्ठावर जा"
    }
  }[language];

  if (!order) return null;

  return (
    <div className="h-full flex flex-col bg-transparent p-8 items-center justify-center text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>

      <h1 className="text-2xl font-serif font-bold text-[#5D4037] mb-4">{t.success}</h1>
      
      <div className="glass-card-premium w-full p-6 rounded-[32px] border-2 border-[#E67E22]/10 mb-8 space-y-4">
        <div className="flex justify-between items-center px-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#5D4037]/50">{t.table}</span>
          <span className="text-xl font-bold text-[#E67E22]">{order.tableNumber}</span>
        </div>
        <div className="h-[1px] bg-[#E67E22]/10"></div>
        <div className="flex justify-between items-center px-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#5D4037]/50">{t.id}</span>
          <span className="text-sm font-bold text-[#5D4037]">#{order.id}</span>
        </div>
        <div className="h-[1px] bg-[#E67E22]/10"></div>
        <div className="flex justify-between items-center px-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#5D4037]/50">{t.time}</span>
          <span className="text-sm font-bold text-[#5D4037]">{order.prepTime}</span>
        </div>
      </div>

      <p className="text-xs text-[#5D4037]/60 leading-relaxed font-medium mb-12">
        {t.msg}
      </p>

      <Button label={t.backHome} variant="primary" onClick={onHome} className="brown-gradient border-none py-4 text-xs tracking-widest uppercase" />
    </div>
  );
};

export default OrderConfirmationScreen;
