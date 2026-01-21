
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="mt-8 px-6 pb-12 pt-8 border-t border-[#E67E22]/10 bg-white/30 backdrop-blur-md rounded-t-[40px]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#E67E22]/10 flex items-center justify-center text-[#E67E22]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <span className="text-[10px] font-bold text-[#5D4037]/70 tracking-wider">contact@vaishnavihotel.com</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#E67E22]/10 flex items-center justify-center text-[#E67E22]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.18-2.18a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <span className="text-[10px] font-bold text-[#5D4037]/70 tracking-wider">+91 9XXXXXXXXX</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#E67E22]/10 flex items-center justify-center text-[#E67E22]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <span className="text-[10px] font-bold text-[#5D4037]/70 tracking-wider leading-relaxed">Vaishnavi Hotel, Maharashtra, India</span>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="h-[1px] w-12 bg-[#E67E22]/20"></div>
        <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#5D4037]/30">© 2024 Vaishnavi Hotel • All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
