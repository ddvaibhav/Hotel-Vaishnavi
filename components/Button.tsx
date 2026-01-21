
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', fullWidth = true, className = '' }) => {
  const baseStyles = "py-3.5 px-6 rounded-xl font-medium transition-all duration-200 active:scale-[0.98]";
  const variants = {
    primary: "bg-[#5D4037] text-white shadow-lg shadow-brown-900/20",
    secondary: "bg-[#D4AF37] text-white",
    outline: "border-2 border-[#5D4037] text-[#5D4037]",
    ghost: "bg-transparent text-[#5D4037] hover:bg-black/5"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
