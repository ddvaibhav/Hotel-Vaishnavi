
import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { COLORS } from '../styles';
import { APP_NAME, TAGLINE, MARATHI_NAME } from '../constants';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBorder}>
          <Text style={styles.logoInitial}>V</Text>
        </View>
      </View>
      <Text style={styles.marathiName}>{MARATHI_NAME}</Text>
      <Text style={styles.appName}>{APP_NAME}</Text>
      <Text style={styles.tagline}>{TAGLINE}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 30,
  },
  logoBorder: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: COLORS.gold,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoInitial: {
    fontSize: 50,
    color: COLORS.gold,
    fontWeight: '700',
    fontFamily: 'serif',
  },
  marathiName: {
    fontSize: 28,
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  appName: {
    fontSize: 18,
    color: COLORS.gold,
    fontWeight: '400',
    letterSpacing: 4,
    textTransform: 'uppercase',
  },
  tagline: {
    marginTop: 20,
    fontSize: 10,
    color: COLORS.white,
    opacity: 0.6,
    letterSpacing: 2,
    textTransform: 'uppercase',
  }
});

export default SplashScreen;
