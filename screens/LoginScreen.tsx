
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import { User } from '../types';
import { COLORS } from '../styles';

interface LoginScreenProps {
  onBack: () => void;
  onLoginSuccess: (user: User) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onBack, onLoginSuccess }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLoginSuccess({
      name: 'User',
      email: identifier,
      mobile: '9876543210',
      isGuest: false
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Welcome back to Vaishnavi Hotel</Text>

        <View style={styles.form}>
          <Input 
            label="Email or Mobile" 
            placeholder="example@mail.com" 
            value={identifier} 
            onChange={setIdentifier} 
          />
          <Input 
            label="Password" 
            placeholder="••••••••" 
            type="password" 
            value={password} 
            onChange={setPassword} 
          />

          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <Button label="Login" onPress={handleLogin} />
        </View>
      </View>
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
    flex: 1,
    paddingHorizontal: 30,
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
  forgotPass: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotText: {
    color: COLORS.saffron,
    fontWeight: 'bold',
    fontSize: 13,
  }
});

export default LoginScreen;
