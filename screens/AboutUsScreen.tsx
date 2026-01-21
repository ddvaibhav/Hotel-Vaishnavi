
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, globalStyles } from '../styles';
import { APP_NAME, TAGLINE } from '../constants';

interface AboutUsScreenProps {
  onBack: () => void;
}

const AboutUsScreen: React.FC<AboutUsScreenProps> = ({ onBack }) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backBtn}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Our Story</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.heritageCard}>
          <View style={styles.logoBadge}>
            <Text style={styles.badgeText}>V</Text>
          </View>
          <Text style={styles.heritageTitle}>The Vaishnavi Legacy</Text>
          <Text style={styles.heritageText}>
            Since 1994, Vaishnavi Hotel has been the premier destination for authentic Maharashtrian cuisine in Nagpur. 
            We specialize in the rich culinary heritage of Vidarbha and Kolhapur, using age-old recipes 
            and hand-selected spices.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Authentic Spices</Text>
          <Text style={styles.bodyText}>
            Our Saoji curry is world-renowned for its complex blend of 24 distinct spices, 
            each roasted and ground in-house to maintain the bold character that defines Nagpur.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Family Experience</Text>
          <Text style={styles.bodyText}>
            We offer a premium dine-in environment perfect for families, business meetings, 
            or a relaxed evening at our bar.
          </Text>
        </View>

        {/* Footer Contact Details */}
        <View style={styles.footer}>
          <Text style={styles.footerHeader}>Contact Details</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactIcon}>✉️</Text>
            <Text style={styles.contactText}>contact@vaishnavihotel.com</Text>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactIcon}>📞</Text>
            <Text style={styles.contactText}>+91 90000 00000</Text>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactIcon}>📍</Text>
            <Text style={styles.contactText}>Nagpur, Maharashtra, India</Text>
          </View>
          <Text style={styles.copyright}>© 2024 {APP_NAME} • All Rights Reserved</Text>
        </View>
        <View style={{ height: 80 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  backBtn: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.primary,
    textTransform: 'uppercase',
  },
  content: {
    padding: 20,
  },
  heritageCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    padding: 40,
    alignItems: 'center',
    marginBottom: 30,
  },
  logoBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  badgeText: {
    fontSize: 30,
    color: COLORS.gold,
    fontWeight: 'bold',
  },
  heritageTitle: {
    fontSize: 22,
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  heritageText: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.8,
    lineHeight: 24,
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: COLORS.saffron,
    textTransform: 'uppercase',
    marginBottom: 10,
    letterSpacing: 1,
  },
  bodyText: {
    fontSize: 15,
    color: COLORS.primary,
    lineHeight: 24,
    opacity: 0.7,
  },
  footer: {
    marginTop: 40,
    padding: 30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  footerHeader: {
    fontSize: 14,
    fontWeight: '900',
    color: COLORS.primary,
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactIcon: {
    marginRight: 15,
    fontSize: 18,
  },
  contactText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
  copyright: {
    marginTop: 20,
    fontSize: 10,
    textAlign: 'center',
    color: '#AAA',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});

export default AboutUsScreen;
