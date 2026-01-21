
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Button from '../components/Button';
import { COLORS } from '../styles';

const { width, height } = Dimensions.get('window');

interface AuthScreenProps {
  onLogin: () => void;
  onSignup: () => void;
  onGuest: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin, onSignup, onGuest }) => {
  return (
    <View style={styles.container}>
      {/* Background Image Layer */}
      <View style={StyleSheet.absoluteFill}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200' }} 
          style={styles.bgImage}
        />
        <View style={styles.overlay} />
      </View>

      <View style={styles.content}>
        <View style={styles.branding}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.hotelName}>Vaishnavi Hotel</Text>
          <Text style={styles.tagline}>Experience comfort and quality</Text>
        </View>

        <View style={styles.buttonGroup}>
          <Button label="Sign Up" variant="primary" onPress={onSignup} />
          <Button label="Login" variant="outline" onPress={onLogin} />
          <Button label="Continue as Guest" variant="outline" onPress={onGuest} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  bgImage: {
    width: width,
    height: height,
    opacity: 0.2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(253, 251, 247, 0.8)',
  },
  content: {
    flex: 1,
    padding: 30,
    justifyContent: 'flex-end',
    paddingBottom: 60,
  },
  branding: {
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 24,
    color: COLORS.primary,
    fontWeight: '300',
    fontFamily: 'serif',
  },
  hotelName: {
    fontSize: 38,
    color: COLORS.saffron,
    fontWeight: '900',
    fontFamily: 'serif',
    marginTop: 4,
  },
  tagline: {
    fontSize: 14,
    color: COLORS.primary,
    opacity: 0.6,
    marginTop: 10,
    fontWeight: '500',
  },
  buttonGroup: {
    width: '100%',
  },
});

export default AuthScreen;
