
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
    place_order: "Dine-In Order",
    drinks_beer: "Drinks & Bar",
    about_us: "About Us",
    contact: "Contact Us",
    home: "Home",
    menu: "Menu",
    order: "Order",
    profile: "Profile"
  },
  mr: {
    welcome: "वैष्णवी हॉटेलमध्ये आपले स्वागत आहे",
    tagline: "अस्सल महाराष्ट्रीयन चव",
    view_menu: "मेनू पहा",
    place_order: "ऑर्डर (डायन-इन)",
    drinks_beer: "पेये आणि बार",
    about_us: "आमच्याबद्दल",
    contact: "संपर्क",
    home: "मुख्य",
    menu: "मेनू",
    order: "ऑर्डर",
    profile: "प्रोफाइल"
  }
};

const HomeScreen: React.FC<HomeScreenProps> = ({ user, onNavigate, language, setLanguage }) => {
  const t = translations[language];

  const primaryActions = [
    { id: 'FOOD_MENU', label: t.view_menu, icon: '📜', color: 'bg-orange-50' },
    { id: 'DINE_IN_ORDER', label: t.place_order, icon: '🍛', color: 'bg-amber-50' },
  ];

  const secondaryActions = [
    { id: 'BEER_DRINKS', label: t.drinks_beer, icon: '🍺', color: 'bg-yellow-50' },
    { id: 'ABOUT_US', label: t.about_us, icon: 'ℹ️', color: 'bg-stone-50' },
    { id: 'CONTACT', label: t.contact, icon: '📞', color: 'bg-orange-50' },
  ];

  return (
    <div className="h-full flex flex-col bg-transparent overflow-y-auto no-scrollbar pb-32">
      {/* Native Header */}
      <div className="px-6 pt-12 pb-4 flex items-center justify-between sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-xl z-30">
        <div className="flex bg-[#5D4037]/5 p-1 rounded-full border border-[#E67E22]/20">
          <button 
            onClick={() => setLanguage('en')}
            className={`text-[10px] font-bold px-4 py-1.5 rounded-full transition-all ${language === 'en' ? 'bg-[#E67E22] text-white shadow-lg scale-105' : 'text-[#5D4037]/50'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('mr')}
            className={`text-[10px] font-bold px-4 py-1.5 rounded-full transition-all ${language === 'mr' ? 'bg-[#E67E22] text-white shadow-lg scale-105' : 'text-[#5D4037]/50'}`}
          >
            मराठी
          </button>
        </div>
        <div className="w-11 h-11 rounded-full border-2 border-[#D4AF37] p-0.5 overflow-hidden shadow-md active:scale-95 transition-transform" onClick={() => onNavigate('PROFILE')}>
           <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.name || 'Guest'}`} alt="avatar" className="w-full h-full rounded-full bg-white" />
        </div>
      </div>

      <div className="px-6 mb-4">
        <h1 className="text-3xl font-serif font-bold text-[#5D4037] mb-1 tracking-tight">{t.welcome}</h1>
        <p className="text-sm text-[#E67E22] font-bold tracking-[0.1em] uppercase opacity-80">{t.tagline}</p>
      </div>

      {/* Main Banner Component */}
      <div className="px-6">
        <BannerSlider />
      </div>

      {/* Large Quick Actions */}
      <div className="px-6 grid grid-cols-2 gap-4 mb-6">
        {primaryActions.map((card) => (
          <button
            key={card.id}
            onClick={() => onNavigate(card.id as Screen)}
            className={`${card.color} glass-card-premium flex flex-col items-center justify-center p-6 rounded-[36px] shadow-sm active:scale-95 transition-all duration-300 border border-[#E67E22]/15`}
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-inner mb-3">
              <span className="text-3xl">{card.icon}</span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#5D4037] text-center">{card.label}</span>
          </button>
        ))}
      </div>

      {/* Secondary Row Actions */}
      <div className="px-6 grid grid-cols-3 gap-3 mb-8">
        {secondaryActions.map((card) => (
          <button
            key={card.id}
            onClick={() => onNavigate(card.id as Screen)}
            className={`${card.color} glass-card-premium flex flex-col items-center justify-center py-4 px-2 rounded-[28px] shadow-sm active:scale-95 transition-all duration-300 border border-[#E67E22]/10`}
          >
            <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center mb-2">
              <span className="text-xl">{card.icon}</span>
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest text-[#5D4037]/70 text-center">{card.label}</span>
          </button>
        ))}
      </div>

      <Footer />

      {/* Native Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-white/80 backdrop-blur-2xl border-t border-[#E67E22]/10 flex items-start justify-around px-8 pt-4 z-50">
        <button onClick={() => onNavigate('HOME')} className="flex flex-col items-center gap-1.5 text-[#E67E22]">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          <span className="text-[9px] font-black uppercase tracking-tighter">{t.home}</span>
        </button>
        <button onClick={() => onNavigate('FOOD_MENU')} className="flex flex-col items-center gap-1.5 text-[#5D4037]/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
          <span className="text-[9px] font-black uppercase tracking-tighter">{t.menu}</span>
        </button>
        <button onClick={() => onNavigate('DINE_IN_ORDER')} className="flex flex-col items-center gap-1.5 text-[#5D4037]/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span className="text-[9px] font-black uppercase tracking-tighter">{t.order}</span>
        </button>
        <button onClick={() => onNavigate('PROFILE')} className="flex flex-col items-center gap-1.5 text-[#5D4037]/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span className="text-[9px] font-black uppercase tracking-tighter">{t.profile}</span>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
