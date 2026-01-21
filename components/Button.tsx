
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: any;
  // Added className to support hybrid web-native environments (Tailwind)
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onPress, variant = 'primary', style, className }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary': return { backgroundColor: COLORS.saffron };
      case 'outline': return { backgroundColor: 'transparent', borderWidth: 2, borderColor: COLORS.primary };
      default: return { backgroundColor: COLORS.primary };
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case 'outline': return { color: COLORS.primary };
      default: return { color: COLORS.white };
    }
  };

  return (
    <TouchableOpacity 
      onPress={onPress} 
      activeOpacity={0.8}
      style={[styles.button, getVariantStyles(), style]}
      // Pass through className for web-based Tailwind support if applicable
      {...(className ? { className } : {})}
    >
      <Text style={[styles.text, getTextStyles()]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
});

export default Button;
