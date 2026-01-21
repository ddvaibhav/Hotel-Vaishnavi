
import React from 'react';
import Button from '../components/Button';

interface AuthScreenProps {
  onLogin: () => void;
  onSignup: () => void;
  onGuest: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin, onSignup, onGuest }) => {
  return (
    <div className="h-full relative overflow-hidden flex flex-col p-8">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover opacity-20 grayscale scale-110"
          alt="cocktail bar background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end pb-12">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-[#5D4037] mb-3">Welcome to</h1>
          <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-4">Vaishnavi Dining</h2>
          <p className="text-[#5D4037]/70 font-light leading-relaxed max-w-[280px]">
            Savor authentic cuisines and premium spirits in an elegant atmosphere.
          </p>
        </div>

        <div className="space-y-4">
          <Button label="Sign Up" variant="primary" onClick={onSignup} />
          <Button label="Login" variant="outline" onClick={onLogin} />
          <Button label="Guest Entrance" variant="ghost" onClick={onGuest} />
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
