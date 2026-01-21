
import React from 'react';
import { User } from '../types';
import Button from '../components/Button';

interface ProfileScreenProps {
  user: User | null;
  onBack: () => void;
  onLogout: () => void;
  onOrders: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ user, onBack, onLogout, onOrders }) => {
  const menuItems = [
    { label: 'My Orders', icon: '📜', action: onOrders },
    { label: 'Payment Methods', icon: '💳', action: () => {} },
    { label: 'Settings', icon: '⚙️', action: () => {} },
    { label: 'Help & Support', icon: '💬', action: () => {} },
  ];

  return (
    <div className="h-full flex flex-col bg-transparent">
      <div className="p-6 flex items-center gap-4 sticky top-0 z-10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md shadow-sm text-[#5D4037]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h1 className="text-xl font-serif font-bold text-[#5D4037]">My Profile</h1>
      </div>

      <div className="px-6 flex flex-col items-center py-8">
        <div className="w-32 h-32 rounded-full border-4 border-[#D4AF37] p-1 mb-4 shadow-xl bg-white/40">
          <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.name || 'Guest'}`} alt="profile" className="w-full h-full rounded-full bg-white shadow-inner" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#5D4037]">{user?.name || 'Guest User'}</h2>
        <p className="text-[#5D4037]/60 text-sm mb-1">{user?.email || 'guest@vaishnavi.com'}</p>
        <p className="text-[#5D4037]/60 text-sm">{user?.mobile || '+91 00000 00000'}</p>
      </div>

      <div className="px-6 mt-4 space-y-3">
        {menuItems.map((item, idx) => (
          <button 
            key={idx} 
            onClick={item.action}
            className="w-full glass-card-premium p-4 rounded-2xl flex items-center justify-between shadow-sm active:bg-white/90 transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-bold text-[#5D4037] uppercase tracking-wider">{item.label}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        ))}
      </div>

      <div className="mt-auto p-8">
        <Button label="Logout" variant="outline" onClick={onLogout} />
        <p className="mt-6 text-center text-[10px] text-[#5D4037]/30 font-bold uppercase tracking-[0.3em]">Version 2.4.1 (Stable)</p>
      </div>
    </div>
  );
};

export default ProfileScreen;
