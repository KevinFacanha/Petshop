import React from 'react';
import { PawPrint, Heart, Home } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <div className="relative">
        <Home 
          className="h-8 w-8 text-blue-600 absolute -left-1 -top-1 transform -rotate-6" 
          strokeWidth={1.5}
        />
        <PawPrint 
          className="h-8 w-8 text-blue-700 relative z-10" 
          strokeWidth={1.5}
        />
        <Heart 
          className="h-4 w-4 text-blue-500 absolute -top-1 -right-1 transform rotate-12" 
          strokeWidth={1.5}
          fill="currentColor"
        />
      </div>
    </div>
  );
};

export default Logo;