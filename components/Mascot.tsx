
import React, { useState } from 'react';

interface MascotProps {
  onOracleToggle: () => void;
}

export const Mascot: React.FC<MascotProps> = ({ onOracleToggle }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 animate-pixel-bounce hidden lg:block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOracleToggle}
    >
      <div className="pixel-border bg-pixel-purple p-2 group cursor-pointer relative">
        <div className={`absolute -top-16 left-1/2 -translate-x-1/2 bg-white text-black p-2 text-[10px] font-bold uppercase pixel-border transition-opacity duration-200 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          Need a Quest?
        </div>
        {/* Mascot Shape Represented by a Pixel-Style Grid */}
        <div className="w-12 h-12 flex flex-col items-center justify-center">
          <div className="w-8 h-8 bg-arcade-yellow pixel-border relative">
            <div className="absolute top-2 left-2 w-1 h-1 bg-black"></div>
            <div className="absolute top-2 right-2 w-1 h-1 bg-black"></div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20"></div>
          </div>
          <div className="w-10 h-4 bg-primary pixel-border -mt-1"></div>
        </div>
      </div>
    </div>
  );
};
