
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { GoogleGenAI } from "@google/genai";
import { COLORS } from '../styles';

const GeneratedBanner: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const generateBanner = async () => {
    try {
      setLoading(true);
      setError(false);
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
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
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color={COLORS.gold} />
        <Text style={styles.loadingText}>हॉटेल वैष्णवी</Text>
      </View>
    );
  }

  if (error || !imageUrl) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>हॉटेल वैष्णवी</Text>
        <Text style={styles.errorSubtitle}>Heritage Restaurant & Bar</Text>
        <TouchableOpacity 
          onPress={generateBanner}
          style={styles.retryButton}
        >
          <Text style={styles.retryText}>Retry Banner</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.gradient} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#1A120B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'rgba(212, 175, 55, 0.6)',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontFamily: 'serif',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#3E2723',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.2)',
  },
  errorTitle: {
    color: COLORS.gold,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
    marginBottom: 5,
  },
  errorSubtitle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  retryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.4)',
  },
  retryText: {
    color: COLORS.gold,
    fontSize: 9,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
});

export default GeneratedBanner;
