
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import { User } from '../types';
import { COLORS } from '../styles';

interface SignupScreenProps {
  onBack: () => void;
  onSignupSuccess: (user: User) => void;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ onBack, onSignupSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    onSignupSuccess({
      name,
      email,
      mobile,
      isGuest: false
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Join Us</Text>
          <Text style={styles.subtitle}>Create an account for quick dine-in ordering.</Text>

          <View style={styles.form}>
            <Input label="Full Name" placeholder="Nagpur" value={name} onChange={setName} />
            <Input label="Email Address" placeholder="nagpur@mail.com" type="email" value={email} onChange={setEmail} />
            <Input label="Mobile Number" placeholder="+91 90000 00000" type="tel" value={mobile} onChange={setMobile} />
            <Input label="Create Password" placeholder="••••••••" type="password" value={password} onChange={setPassword} />

            <View style={styles.terms}>
              <Text style={styles.termsText}>
                By signing up, you agree to our Terms and Conditions.
              </Text>
            </View>

            <Button label="Create Account" onPress={handleSignup} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  header: {
    padding: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  backText: {
    fontSize: 24,
    color: COLORS.primary,
  },
  content: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primary,
    fontFamily: 'serif',
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.primary,
    opacity: 0.6,
    marginTop: 6,
    marginBottom: 40,
  },
  form: {
    width: '100%',
  },
  terms: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    color: COLORS.primary,
    opacity: 0.5,
    lineHeight: 18,
  }
});

export default SignupScreen;
