import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <img 
      src="https://i.ibb.co/x8FPmbzw/sqszaazzazazaz.png" 
      alt="Safewall Logo" 
      className={`w-auto object-contain ${className}`}
    />
  );
};