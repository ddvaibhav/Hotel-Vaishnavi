
import React from 'react';
import { MOCK_SLOGAN } from '../constants';

const SplashScreen: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-[#5D4037] text-[#FDFBF7] p-8">
      <div className="mb-6 animate-pulse">
        <div className="w-24 h-24 border-2 border-[#D4AF37] rounded-full flex items-center justify-center p-4">
          <div className="w-16 h-16 border-4 border-[#D4AF37] rounded-sm transform rotate-45 flex items-center justify-center">
            <span className="transform -rotate-45 text-4xl font-serif font-bold">V</span>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-serif font-bold tracking-[0.2em] mb-2 uppercase">Vaishnavi</h1>
      <h2 className="text-lg font-light tracking-[0.3em] uppercase mb-12 opacity-80">Restaurant & Bar</h2>
      
      <div className="flex gap-4 text-[10px] tracking-[0.2em] uppercase opacity-60">
        {MOCK_SLOGAN.split(' • ').map((tag, i) => (
          <React.Fragment key={tag}>
            <span>{tag}</span>
            {i < 2 && <span>•</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
