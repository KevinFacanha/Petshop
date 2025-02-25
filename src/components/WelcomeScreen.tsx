import React, { useState, useEffect } from 'react';
import { PawPrint } from 'lucide-react';

const WelcomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-600">
      <div className="text-center animate-fade-in">
        <PawPrint className="h-20 w-20 text-white mx-auto mb-6 animate-bounce" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
          Bem-vindo ao
        </h1>
        <h2 className="text-2xl md:text-4xl text-white/90 animate-slide-up animate-delay-100">
          Acampamento de Cães Training
        </h2>
      </div>
    </div>
  );
};

export default WelcomeScreen;