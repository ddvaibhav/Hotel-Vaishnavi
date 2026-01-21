
import React from 'react';
import { Order } from '../types';

interface OrderHistoryScreenProps {
  onBack: () => void;
  orders: Order[];
}

const OrderHistoryScreen: React.FC<OrderHistoryScreenProps> = ({ onBack, orders }) => {
  return (
    <div className="h-full flex flex-col bg-transparent">
      <div className="p-6 flex items-center gap-4 sticky top-0 z-10 glass-card-premium border-b border-[#E67E22]/10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md shadow-sm text-[#5D4037]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h1 className="text-xl font-serif font-bold text-[#5D4037]">Dine-In History</h1>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-6">
        {orders.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center opacity-40 py-20">
            <div className="text-6xl mb-4">📭</div>
            <p className="font-bold uppercase tracking-widest text-xs">No Recent Dine-In activity</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="glass-card-premium p-5 rounded-3xl shadow-sm border border-[#E67E22]/10">
                <div className="flex justify-between mb-3 pb-3 border-b border-[#E67E22]/10">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#5D4037]/50">Order #{order.id}</span>
                    <span className="text-[12px] font-bold text-[#E67E22] uppercase tracking-wider">Table: {order.tableNumber}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-700 bg-green-100 px-2 py-1 rounded-lg self-start">Served</span>
                </div>
                <div className="space-y-1 mb-4">
                  {order.items.map((it, idx) => (
                    <p key={idx} className="text-sm font-medium text-[#5D4037]">{it}</p>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-[#5D4037]/40 font-bold uppercase tracking-widest">{order.date}</span>
                  <span className="text-lg font-serif font-bold text-[#E67E22]">₹{order.total}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistoryScreen;
