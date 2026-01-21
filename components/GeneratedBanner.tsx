
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeneratedBanner: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const generateBanner = async () => {
    try {
      setLoading(true);
      setError(false);
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Prompt meticulously crafted to match the user's reference image exactly with precise Marathi text
      const prompt = `Create a high-end, cinematic 8k landscape banner for "Hotel Vaishnavi Restaurant & Bar". 
      The image MUST feature the exact Marathi text: "हॉटेल वैष्णवी रेस्टॉरंट अँड बार". 
      Layout of text: 
      - The word "हॉटेल" should be smaller and placed centered at the top.
      - The word "वैष्णवी" should be the largest, main central focus in a very elegant, thick golden Marathi calligraphy font with artistic curves.
      - The words "रेस्टॉरंट अँड बार" should be placed directly beneath "वैष्णवी" in a medium font size.
      - Below this main text block, include the subtext: "आपुलकीची सेवा • अस्सल महाराष्ट्रीयन चव".
      
      The background scene is a rich, warm, heritage Maharashtrian restaurant interior. 
      Visual details from reference: A dark wooden dining table in the foreground with a grand silver Maharashtrian Thali, brass Samai lamps, glowing candles, and copper glasses. 
      The walls have Warli art frames and traditional marigold (zendu) garlands. 
      The overall lighting is soft, golden, and royal. 
      Color palette: Mahogany brown, deep saffron, royal gold, and cream. 
      Photorealistic, professional architectural food photography style.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
          },
        },
      });

      const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (part?.inlineData?.data) {
        setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
      } else {
        throw new Error("No image data returned");
      }
    } catch (err) {
      console.error("Failed to generate banner:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateBanner();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full bg-[#1A120B] flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-2 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin mb-4"></div>
        <p className="text-[10px] font-bold text-[#D4AF37]/60 uppercase tracking-[0.3em] font-serif italic">हॉटेल वैष्णवी</p>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className="w-full h-full bg-[#3E2723] flex flex-col items-center justify-center p-8 text-center border-2 border-[#D4AF37]/20">
        <h3 className="text-[#D4AF37] text-xl font-serif font-bold mb-2">हॉटेल वैष्णवी</h3>
        <p className="text-white/50 text-[10px] font-medium tracking-widest uppercase mb-4">Heritage Restaurant & Bar</p>
        <button 
          onClick={generateBanner}
          className="px-6 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-colors"
        >
          Retry Banner
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={imageUrl}
        className="w-full h-full object-cover"
        alt="हॉटेल वैष्णवी रेस्टॉरंट अँड बार"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
    </div>
  );
};

export default GeneratedBanner;
