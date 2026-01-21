
import React, { useState } from 'react';
import Button from '../components/Button';
import { TableReservation } from '../types';

interface TableReservationScreenProps {
  onBack: () => void;
  onReserve: (res: TableReservation) => void;
}

const TableReservationScreen: React.FC<TableReservationScreenProps> = ({ onBack, onReserve }) => {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2024-05-20');
  const [time, setTime] = useState('19:00');
  const [occasion, setOccasion] = useState('');

  const handleReserve = () => {
    onReserve({
      id: Math.random().toString(36).substr(2, 9),
      guests,
      date,
      time,
      occasion
    });
  };

  return (
    <div className="h-full flex flex-col luxury-overlay relative">
      <div className="p-6 flex items-center gap-4 glass-card sticky top-0 z-20 border-b border-[#D4AF37]/10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5D4037]/5 text-[#5D4037]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h1 className="text-xl font-serif font-bold text-[#5D4037]">Table Booking</h1>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-8 z-10">
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em]">Patron Count</h2>
            <div className="h-[1px] flex-1 bg-[#D4AF37]/20"></div>
          </div>
          
          <div className="flex gap-4 justify-between">
            {[1, 2, 3, 4, 5, 6].map(num => (
              <button
                key={num}
                onClick={() => setGuests(num)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all ${
                  guests === num ? 'bg-[#5D4037] text-white shadow-lg' : 'bg-white text-[#5D4037]/50 border border-[#D4AF37]/10'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em]">Schedule</h2>
            <div className="h-[1px] flex-1 bg-[#D4AF37]/20"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-5 rounded-[24px] border border-[#5D4037]/5 shadow-sm">
              <p className="text-[9px] text-[#5D4037]/40 font-bold uppercase tracking-widest mb-2">Dining Date</p>
              <input 
                type="date" 
                value={date} 
                onChange={e => setDate(e.target.value)}
                className="w-full text-sm font-bold text-[#5D4037] bg-transparent outline-none cursor-pointer"
              />
            </div>
            <div className="glass-card p-5 rounded-[24px] border border-[#5D4037]/5 shadow-sm">
              <p className="text-[9px] text-[#5D4037]/40 font-bold uppercase tracking-widest mb-2">Arrival Time</p>
              <input 
                type="time" 
                value={time} 
                onChange={e => setTime(e.target.value)}
                className="w-full text-sm font-bold text-[#5D4037] bg-transparent outline-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em]">Special Occasion</h2>
            <div className="h-[1px] flex-1 bg-[#D4AF37]/20"></div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {['Birthday', 'Anniversary', 'Business', 'Date Night'].map(occ => (
              <button
                key={occ}
                onClick={() => setOccasion(occ)}
                className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  occasion === occ ? 'bg-[#D4AF37] text-white shadow-md' : 'bg-white text-[#5D4037]/50 border border-[#D4AF37]/10'
                }`}
              >
                {occ}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 pb-12">
          <div className="bg-[#5D4037] p-8 rounded-[48px] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
            <div className="mb-8 relative z-10 text-center">
              <h3 className="text-xl font-serif font-bold mb-2 tracking-wide">Secure Your Table</h3>
              <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.2em]">Vaishnavi Fine Dining & Spirits</p>
            </div>
            <Button label="Reserve Now" variant="secondary" onClick={handleReserve} className="relative z-10 shadow-gold-500/20 py-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableReservationScreen;
