
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../styles';

interface InputProps {
  label?: string;
  placeholder: string;
  type?: 'text' | 'password' | 'email' | 'tel' | 'number';
  value: string;
  onChange: (val: string) => void;
}

const Input: React.FC<InputProps> = ({ label, placeholder, type = 'text', value, onChange }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChange}
        secureTextEntry={type === 'password'}
        keyboardType={type === 'tel' ? 'phone-pad' : type === 'number' ? 'numeric' : 'default'}
        autoCapitalize="none"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 10,
    fontWeight: '800',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: COLORS.primary,
    borderWidth: 1,
    borderColor: 'rgba(93, 64, 55, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default Input;
