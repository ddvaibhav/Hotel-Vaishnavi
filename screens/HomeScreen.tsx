
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles, COLORS } from '../styles';
import { APP_NAME, TAGLINE, MARATHI_NAME } from '../constants';
import { Screen, User } from '../types';

interface HomeScreenProps {
  user: User | null;
  onNavigate: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ user, onNavigate }) => {
  return (
    <ScrollView style={globalStyles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>नमस्कार, {user?.name || 'पाहुणे'}</Text>
          <Text style={styles.hotelTitle}>{APP_NAME}</Text>
        </View>
        <TouchableOpacity style={styles.profileBtn} onPress={() => onNavigate('PROFILE')}>
          <Text style={styles.profileEmoji}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Main Banner Slider Area */}
      <View style={styles.bannerContainer}>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          <View style={styles.slide}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1626777553732-48945a8e6357?auto=format&fit=crop&q=80&w=800' }} 
              style={styles.bannerImg} 
            />
            <View style={styles.bannerOverlay}>
              <Text style={styles.bannerMarathiText}>हॉटेल वैष्णवी – शुद्ध महाराष्ट्रीयन चव</Text>
              <Text style={styles.bannerSubText}>Authentic Dining Experience</Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=800' }} 
              style={styles.bannerImg} 
            />
            <View style={styles.bannerOverlay}>
              <Text style={styles.bannerMarathiText}>कुटुंबासाठी उत्तम जेवणाची सोय</Text>
              <Text style={styles.bannerSubText}>Perfect Family Atmosphere</Text>
            </View>
          </View>
          <View style={styles.slide}>
             <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800' }} 
              style={styles.bannerImg} 
            />
            <View style={styles.bannerOverlay}>
              <Text style={styles.bannerMarathiText}>रेस्टॉरंट अँड बार</Text>
              <Text style={styles.bannerSubText}>Premium Spirits & Beer</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Quick Actions */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem} onPress={() => onNavigate('FOOD_MENU')}>
          <View style={[styles.iconContainer, { backgroundColor: '#FFF7ED' }]}>
            <Text style={styles.gridIcon}>🍲</Text>
          </View>
          <Text style={styles.gridLabel}>Veg Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => onNavigate('FOOD_MENU')}>
          <View style={[styles.iconContainer, { backgroundColor: '#FEF2F2' }]}>
            <Text style={styles.gridIcon}>🍗</Text>
          </View>
          <Text style={styles.gridLabel}>Non-Veg</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => onNavigate('BEER_DRINKS')}>
          <View style={[styles.iconContainer, { backgroundColor: '#F0F9FF' }]}>
            <Text style={styles.gridIcon}>🍺</Text>
          </View>
          <Text style={styles.gridLabel}>Bar Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => onNavigate('DINE_IN_ORDER')}>
          <View style={[styles.iconContainer, { backgroundColor: '#F0FDF4' }]}>
            <Text style={styles.gridIcon}>🛎️</Text>
          </View>
          <Text style={styles.gridLabel}>Dine-In</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Contact Info */}
      <View style={styles.aboutPreview}>
        <Text style={styles.aboutHeader}>Heritage & Taste</Text>
        <Text style={styles.aboutText}>Experience Nagpur's legendary Saoji and classic Varhadi flavors at Vaishnavi. Every spice is hand-ground to perfection.</Text>
        <TouchableOpacity onPress={() => onNavigate('ABOUT_US')}>
          <Text style={styles.linkText}>Read Our Story →</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  welcomeText: {
    fontSize: 12,
    color: COLORS.saffron,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  hotelTitle: {
    fontSize: 24,
    color: COLORS.primary,
    fontWeight: '900',
    fontFamily: 'serif',
  },
  profileBtn: {
    width: 45,
    height: 45,
    backgroundColor: COLORS.white,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  profileEmoji: {
    fontSize: 20,
  },
  bannerContainer: {
    marginVertical: 10,
    height: 220,
  },
  slide: {
    width: 350,
    marginHorizontal: 20,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  bannerImg: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 25,
    left: 25,
    right: 25,
  },
  bannerMarathiText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 4,
  },
  bannerSubText: {
    color: COLORS.gold,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-around',
  },
  gridItem: {
    width: '44%',
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(93, 64, 55, 0.05)',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  gridIcon: {
    fontSize: 30,
  },
  gridLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.primary,
    textTransform: 'uppercase',
  },
  aboutPreview: {
    margin: 20,
    padding: 30,
    backgroundColor: '#5D403710',
    borderRadius: 30,
  },
  aboutHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.primary,
    opacity: 0.7,
    marginBottom: 15,
  },
  linkText: {
    color: COLORS.saffron,
    fontWeight: '900',
    fontSize: 12,
    textTransform: 'uppercase',
  }
});

export default HomeScreen;
