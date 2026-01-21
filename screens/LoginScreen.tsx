
import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { User } from '../types';

interface LoginScreenProps {
  onBack: () => void;
  onLoginSuccess: (user: User) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onBack, onLoginSuccess }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock login
    onLoginSuccess({
      name: 'John Doe',
      email: identifier,
      mobile: '9876543210',
      isGuest: false
    });
  };

  return (
    <div className="h-full flex flex-col bg-transparent">
      <div className="p-6">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md shadow-sm text-[#5D4037]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
      </div>

      <div className="flex-1 px-8 pt-4">
        <h1 className="text-3xl font-serif font-bold text-[#5D4037] mb-2">Welcome Back</h1>
        <p className="text-[#5D4037]/60 mb-10">Sign in to access your bookings and preferences.</p>

        <div className="space-y-6">
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

          <div className="text-right">
            <button className="text-sm font-semibold text-[#D4AF37] hover:underline">Forgot Password?</button>
          </div>

          <Button label="Login" variant="primary" onClick={handleLogin} />
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#5D4037]/60">
            Don't have an account? <button className="text-[#D4AF37] font-bold">Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
