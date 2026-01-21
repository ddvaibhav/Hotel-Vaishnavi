
import React from 'react';

interface InputProps {
  label?: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
}

const Input: React.FC<InputProps> = ({ label, placeholder, type = 'text', value, onChange }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-xs font-semibold text-[#5D4037] uppercase tracking-wider ml-1">{label}</label>}
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border-2 border-transparent focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-[#5D4037] outline-none transition-all shadow-sm"
      />
    </div>
  );
};

export default Input;
