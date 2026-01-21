
import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { User } from '../types';

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
    <div className="h-full flex flex-col bg-transparent relative overflow-hidden">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover opacity-15 grayscale scale-110"
          alt="luxury interior background"
        />
        {/* Pattern & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/90 via-[#FDFBF7]/95 to-[#FDFBF7]"></div>
        <div className="absolute inset-0 pattern-gold-subtle opacity-5"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full overflow-y-auto no-scrollbar">
        <div className="p-6 sticky top-0 z-20">
          <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-sm text-[#5D4037] border border-[#D4AF37]/20 active:scale-90 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
        </div>

        <div className="flex-1 px-8 pt-4 pb-12">
          <div className="mb-10">
            <div className="w-12 h-[2px] bg-[#D4AF37] mb-4"></div>
            <h1 className="text-4xl font-serif font-bold text-[#5D4037] mb-2">Create Account</h1>
            <p className="text-[#5D4037]/60 font-medium tracking-wide">Enter the world of premium hospitality.</p>
          </div>

          <div className="space-y-5">
            <div className="glass-card-premium p-1 rounded-2xl">
              <Input label="Full Name" placeholder="John Doe" value={name} onChange={setName} />
            </div>
            <div className="glass-card-premium p-1 rounded-2xl">
              <Input label="Email Address" placeholder="john@example.com" type="email" value={email} onChange={setEmail} />
            </div>
            <div className="glass-card-premium p-1 rounded-2xl">
              <Input label="Mobile Number" placeholder="+91 98765 43210" type="tel" value={mobile} onChange={setMobile} />
            </div>
            <div className="glass-card-premium p-1 rounded-2xl">
              <Input label="Create Password" placeholder="••••••••" type="password" value={password} onChange={setPassword} />
            </div>

            <div className="pt-6">
              <Button label="Create Account" variant="primary" onClick={handleSignup} className="shadow-brown-900/40 py-4 text-sm tracking-[0.1em] uppercase" />
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs text-[#5D4037]/50 font-medium tracking-wider">
              By creating an account, you agree to our 
              <br />
              <button className="text-[#D4AF37] underline mx-1">Terms of Service</button> 
              and 
              <button className="text-[#D4AF37] underline mx-1">Privacy Policy</button>
            </p>
          </div>
          
          {/* Decorative Corner Element */}
          <div className="mt-12 flex justify-center opacity-20">
             <div className="w-8 h-8 border border-[#D4AF37] rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-[#D4AF37]"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
