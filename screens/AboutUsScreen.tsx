
import React from 'react';

interface AboutUsScreenProps {
  onBack: () => void;
  language: 'en' | 'mr';
}

const AboutUsScreen: React.FC<AboutUsScreenProps> = ({ onBack, language }) => {
  const t = {
    en: {
      title: "Vaishnavi Heritage",
      storyTitle: "The Vaishnavi Legacy",
      story: "Since its inception, Vaishnavi Hotel Restaurant & Bar has been the cornerstone of authentic Maharashtrian flavors in the region. Founded on the principles of 'Aapulkichi Seva' (Affectionate Service), we take pride in our heritage recipes passed down through generations. From our iconic spicy Saoji curries to our refined Bar selection, every detail is crafted for a royal experience.",
      missionTitle: "Our Soul",
      mission: "To serve not just food, but a piece of Maharashtrian tradition, ensuring every guest feels the warmth of a home-cooked feast with a premium touch.",
      qualityTitle: "Mastery in Spice",
      quality: "Our spices are hand-ground daily. We source the finest local ingredients to maintain the bold, unmistakable character of genuine Maharashtrian cuisine."
    },
    mr: {
      title: "वैष्णवी वारसा",
      storyTitle: "वैष्णवीची परंपरा",
      story: "वैष्णवी हॉटेल रेस्टॉरंट अँड बार हे या भागातील अस्सल महाराष्ट्रीयन चवींचे केंद्र आहे. 'आपुलकीची सेवा' या तत्त्वावर आधारित, पिढ्यानपिढ्या चालत आलेल्या वारसा पाककृतींचा आम्हाला अभिमान आहे. आमच्या सुप्रसिद्ध मसालेदार सावजी करीपासून ते आमच्या खास बार सिलेक्शनपर्यंत, प्रत्येक गोष्ट रॉयल अनुभवासाठी तयार केली आहे.",
      missionTitle: "आमचा आत्मा",
      mission: "केवळ अन्नच नाही, तर महाराष्ट्रीयन परंपरेचा एक भाग देणे, प्रत्येक पाहुण्याला घरगुती मेजवानीची उब आणि प्रीमियम स्पर्श जाणवेल याची खात्री करणे.",
      qualityTitle: "मसाल्यांमधील प्रभुत्व",
      quality: "आमचे मसाले रोज हाताने दळले जातात. अस्सल महाराष्ट्रीयन खाद्यसंस्कृतीचे ठळक वैशिष्ट्य टिकवून ठेवण्यासाठी आम्ही स्थानिक उत्कृष्ट घटक वापरतो."
    }
  }[language];

  return (
    <div className="h-full flex flex-col bg-transparent overflow-y-auto no-scrollbar pb-32">
      <div className="p-6 pt-12 flex items-center gap-4 sticky top-0 z-10 glass-card-premium border-b border-[#E67E22]/10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-[#5D4037] active:scale-90 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h1 className="text-xl font-serif font-bold text-[#5D4037]">{t.title}</h1>
      </div>

      <div className="px-8 py-10">
        <div className="mb-12 text-center">
          <div className="w-24 h-24 border-2 border-[#D4AF37] rounded-[32px] flex items-center justify-center mx-auto mb-8 p-6 bg-white shadow-xl rotate-3 transform">
            <span className="text-4xl font-serif font-bold text-[#5D4037]">V</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#5D4037] mb-3">{t.storyTitle}</h2>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto mb-8 rounded-full"></div>
          <p className="text-sm text-[#5D4037]/80 leading-relaxed font-medium text-justify">
            {t.story}
          </p>
        </div>

        <div className="space-y-6">
          <div className="glass-card-premium p-8 rounded-[40px] border border-[#D4AF37]/20 shadow-lg shadow-orange-900/5">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E67E22] mb-4">{t.missionTitle}</h3>
            <p className="text-xs text-[#5D4037]/90 leading-relaxed font-semibold italic">
              "{t.mission}"
            </p>
          </div>

          <div className="glass-card-premium p-8 rounded-[40px] border border-[#D4AF37]/20 shadow-lg shadow-orange-900/5">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E67E22] mb-4">{t.qualityTitle}</h3>
            <p className="text-xs text-[#5D4037]/80 leading-relaxed font-medium">
              {t.quality}
            </p>
          </div>
        </div>

        <div className="mt-16 text-center opacity-30">
           <p className="text-[9px] font-black uppercase tracking-[0.5em] text-[#5D4037]">Est. 1994 • Nagpur • Maharashtra</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
