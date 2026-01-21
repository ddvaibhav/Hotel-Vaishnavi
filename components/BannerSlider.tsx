
import React, { useState, useEffect } from 'react';
import GeneratedBanner from './GeneratedBanner';

const BANNERS = [
  {
    type: 'generated',
    title: 'हॉटेल वैष्णवी रेस्टॉरंट अँड बार',
    subtitle: 'Authentic Heritage'
  },
  {
    type: 'static',
    url: 'https://images.unsplash.com/photo-1626777553732-48945a8e6357?auto=format&fit=crop&q=80&w=1200',
    title: 'Traditional Thali',
    subtitle: 'Taste the Heritage'
  }
];

const BannerSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Longer interval for the primary hero banner
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative h-60 rounded-[32px] overflow-hidden shadow-2xl border border-white/40 mb-8 bg-stone-900 group">
      {BANNERS.map((banner, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            idx === currentIndex 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          {banner.type === 'generated' ? (
            <GeneratedBanner />
          ) : (
            <div className="w-full h-full relative">
              <img
                src={banner.url}
                className="w-full h-full object-cover"
                alt={banner.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6">
                <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] mb-1 block">
                  Luxury Dining
                </span>
                <h3 className="text-white text-2xl font-serif font-bold leading-tight mb-1">{banner.title}</h3>
                <p className="text-white/70 text-xs font-medium tracking-wide">{banner.subtitle}</p>
              </div>
            </div>
          )}
        </div>
      ))}
      
      {/* Indicator Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
        {BANNERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-700 shadow-md ${
              idx === currentIndex 
                ? 'w-10 bg-[#D4AF37]' 
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
