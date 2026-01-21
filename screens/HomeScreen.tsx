
import React from 'react';
import { User, Screen } from '../types';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/Footer';

interface HomeScreenProps {
  user: User | null;
  onNavigate: (screen: Screen) => void;
  language: 'en' | 'mr';
  setLanguage: (lang: 'en' | 'mr') => void;
}

const translations = {
  en: {
    welcome: "Welcome to Vaishnavi Hotel",
    tagline: "Authentic Maharashtrian Taste",
    view_menu: "View Menu",
    place_order: "Place Order (Dine-In)",
    drinks_beer: "Cold Drinks & Beer",
    table_booking: "Table Booking",
    about_us: "About Us",
    location: "Location",
    home: "Home",
    menu: "Menu",
    order: "Order",
    profile: "Profile"
  },
  mr: {
    welcome: "वैष्णवी हॉटेलमध्ये आपले स्वागत आहे",
    tagline: "अस्सल महाराष्ट्रीयन चव",
    view_menu: "मेनू पहा",
    place_order: "ऑर्डर द्या (डायन-इन)",
    drinks_beer: "थंड पेये आणि बिअर",
    table_booking: "टेबल बुकिंग",
    about_us: "आमच्याबद्दल",
    location: "स्थान",
    home: "मुख्य",
    menu: "मेनू",
    order: "ऑर्डर",
    profile: "प्रोफाइल"
  }
};

const HomeScreen: React.FC<HomeScreenProps> = ({ user, onNavigate, language, setLanguage }) => {
  const t = translations[language];

  const cards = [
    { id: 'FOOD_MENU', label: t.view_menu, icon: '📜', color: 'bg-orange-50' },
    { id: 'TABLE_RESERVATION', label: t.table_booking, icon: '📅', color: 'bg-emerald-50' },
    { id: 'DINE_IN_ORDER', label: t.place_order, icon: '🍛', color: 'bg-amber-50' },
    { id: 'BEER_DRINKS', label: t.drinks_beer, icon: '🍺', color: 'bg-yellow-50' },
    { id: 'ABOUT_US', label: t.about_us, icon: 'ℹ️', color: 'bg-stone-50' },
    { id: 'LOCATION', label: t.location, icon: '📍', color: 'bg-orange-50' },
  ];

  return (
    <div className="h-full flex flex-col bg-transparent overflow-y-auto no-scrollbar pb-24">
      {/* Header & Lang Switcher */}
      <div className="px-6 pt-8 pb-4 flex items-center justify-between sticky top-0 bg-[#FDFBF7]/80 backdrop-blur-md z-20">
        <div className="flex bg-[#5D4037]/5 p-1 rounded-full border border-[#E67E22]/20">
          <button 
            onClick={() => setLanguage('en')}
            className={`text-[9px] font-bold px-3 py-1.5 rounded-full transition-all ${language === 'en' ? 'bg-[#E67E22] text-white shadow-md' : 'text-[#5D4037]/50'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('mr')}
            className={`text-[9px] font-bold px-3 py-1.5 rounded-full transition-all ${language === 'mr' ? 'bg-[#E67E22] text-white shadow-md' : 'text-[#5D4037]/50'}`}
          >
            मराठी
          </button>
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-[#E67E22] p-0.5 overflow-hidden">
           <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.name || 'Guest'}`} alt="avatar" className="w-full h-full rounded-full bg-white" />
        </div>
      </div>

      <div className="px-6 mb-6">
        <h1 className="text-2xl font-serif font-bold text-[#5D4037] mb-1 leading-tight">{t.welcome}</h1>
        <p className="text-sm text-[#E67E22] font-semibold tracking-wide uppercase">{t.tagline}</p>
      </div>

      {/* Featured Banner Slider */}
      <div className="px-6">
        <BannerSlider />
      </div>

      {/* Navigation Cards */}
      <div className="px-6 grid grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <button
            key={card.id}
            onClick={() => onNavigate(card.id as Screen)}
            className={`${card.color} glass-card-premium flex flex-col items-center justify-center p-5 rounded-[32px] shadow-sm active:scale-95 transition-all duration-300 border border-[#E67E22]/10`}
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-inner mb-3">
              <span className="text-2xl">{card.icon}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#5D4037] text-center leading-tight">{card.label}</span>
          </button>
        ))}
      </div>

      {/* Footer Section */}
      <Footer />

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 left-6 right-6 h-16 glass-card-premium rounded-3xl shadow-2xl flex items-center justify-around px-4 border border-white/40 z-30">
        <button onClick={() => onNavigate('HOME')} className="flex flex-col items-center gap-1 text-[#E67E22]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          <span className="text-[8px] font-bold uppercase">{t.home}</span>
        </button>
        <button onClick={() => onNavigate('FOOD_MENU')} className="flex flex-col items-center gap-1 text-[#5D4037]/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
          <span className="text-[8px] font-bold uppercase">{t.menu}</span>
        </button>
        <button onClick={() => onNavigate('DINE_IN_ORDER')} className="flex flex-col items-center gap-1 text-[#5D4037]/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          <span className="text-[8px] font-bold uppercase">{t.order}</span>
        </button>
        <button onClick={() => onNavigate('PROFILE')} className="flex flex-col items-center gap-1 text-[#5D4037]/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/></svg>
          <span className="text-[8px] font-bold uppercase">{t.profile}</span>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
