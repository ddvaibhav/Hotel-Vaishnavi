
import React from 'react';

interface AboutUsScreenProps {
  onBack: () => void;
  language: 'en' | 'mr';
}

const AboutUsScreen: React.FC<AboutUsScreenProps> = ({ onBack, language }) => {
  const t = {
    en: {
      title: "About Vaishnavi Hotel",
      storyTitle: "Our Story",
      story: "Vaishnavi Hotel is a traditional Maharashtrian restaurant dedicated to serving authentic and homely flavors. Our goal is to provide fresh, tasty food prepared with quality ingredients and traditional recipes. We believe in simple dining, warm hospitality, and a comfortable experience for every guest.",
      missionTitle: "Our Mission",
      mission: "To keep the heritage of Maharashtrian cuisine alive and deliver an exceptional dine-in experience through consistency, quality, and passion.",
      qualityTitle: "Quality & Hygiene",
      quality: "We maintain the highest standards of cleanliness and food safety. Every ingredient is sourced with care to ensure the most authentic taste reaches your table."
    },
    mr: {
      title: "वैष्णवी हॉटेल बद्दल",
      storyTitle: "आमची गोष्ट",
      story: "वैष्णवी हॉटेल हे अस्सल आणि घरगुती चव देण्यासाठी समर्पित असलेले एक पारंपारिक महाराष्ट्रीयन रेस्टॉरंट आहे. दर्जेदार घटक आणि पारंपारिक पाककृतींनी तयार केलेले ताजे, चविष्ट अन्न देणे हे आमचे ध्येय आहे. आमचा साधे भोजन, उबदार आदरातिथ्य आणि प्रत्येक पाहुण्यासाठी आरामदायक अनुभवावर विश्वास आहे.",
      missionTitle: "आमचे ध्येय",
      mission: "महाराष्ट्रीयन खाद्यसंस्कृतीचा वारसा जिवंत ठेवणे आणि सातत्य, गुणवत्ता आणि आवडीद्वारे उत्कृष्ट डायन-इन अनुभव देणे.",
      qualityTitle: "गुणवत्ता आणि स्वच्छता",
      quality: "आम्ही स्वच्छता आणि अन्न सुरक्षेचे सर्वोच्च मानक राखतो. तुमच्या टेबलावर सर्वात अस्सल चव पोहोचेल याची खात्री करण्यासाठी प्रत्येक घटकाचा काळजीपूर्वक वापर केला जातो."
    }
  }[language];

  return (
    <div className="h-full flex flex-col bg-transparent overflow-y-auto no-scrollbar pb-12">
      <div className="p-6 flex items-center gap-4 sticky top-0 z-10 glass-card-premium border-b border-[#E67E22]/10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md shadow-sm text-[#5D4037]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h1 className="text-xl font-serif font-bold text-[#5D4037]">{t.title}</h1>
      </div>

      <div className="px-6 py-8">
        <div className="mb-10 text-center">
          <div className="w-20 h-20 border-2 border-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-6 p-4 bg-[#E67E22]/5">
            <span className="text-3xl font-serif font-bold text-[#5D4037]">V</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#5D4037] mb-2">{t.storyTitle}</h2>
          <div className="h-[2px] w-12 bg-[#E67E22] mx-auto mb-6"></div>
          <p className="text-sm text-[#5D4037]/70 leading-relaxed font-medium">
            {t.story}
          </p>
        </div>

        <div className="space-y-8">
          <div className="glass-card-premium p-6 rounded-[32px] border border-[#E67E22]/10">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E67E22] mb-3">{t.missionTitle}</h3>
            <p className="text-xs text-[#5D4037]/80 leading-relaxed font-medium">
              {t.mission}
            </p>
          </div>

          <div className="glass-card-premium p-6 rounded-[32px] border border-[#E67E22]/10">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E67E22] mb-3">{t.qualityTitle}</h3>
            <p className="text-xs text-[#5D4037]/80 leading-relaxed font-medium">
              {t.quality}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center opacity-40">
           <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#5D4037]">Est. 1994 • Pure Tradition</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
