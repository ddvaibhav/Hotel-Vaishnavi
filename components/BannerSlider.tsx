
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import GeneratedBanner from './GeneratedBanner';
import { COLORS } from '../styles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BANNER_WIDTH = SCREEN_WIDTH - 40;

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
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % BANNERS.length;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({ x: nextIndex * BANNER_WIDTH, animated: true });
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / BANNER_WIDTH);
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          scrollEventThrottle={16}
        >
          {BANNERS.map((banner, idx) => (
            <View key={idx} style={styles.slide}>
              {banner.type === 'generated' ? (
                <GeneratedBanner />
              ) : (
                <View style={styles.staticBanner}>
                  <Image
                    source={{ uri: banner.url }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                  <View style={styles.overlay}>
                    <Text style={styles.categoryLabel}>Luxury Dining</Text>
                    <Text style={styles.title}>{banner.title}</Text>
                    <Text style={styles.subtitle}>{banner.subtitle}</Text>
                  </View>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
        
        {/* Indicator Dots */}
        <View style={styles.indicators}>
          {BANNERS.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.dot,
                idx === currentIndex ? styles.activeDot : styles.inactiveDot
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  container: {
    height: 240,
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  slide: {
    width: BANNER_WIDTH,
    height: 240,
  },
  staticBanner: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    padding: 24,
  },
  categoryLabel: {
    color: COLORS.gold,
    fontSize: 9,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginBottom: 4,
  },
  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'serif',
    marginBottom: 2,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 11,
    fontWeight: '500',
  },
  indicators: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
  activeDot: {
    width: 30,
    backgroundColor: COLORS.gold,
  },
  inactiveDot: {
    width: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
  }
});

export default BannerSlider;
