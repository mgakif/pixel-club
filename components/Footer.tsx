
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t-8 border-pixel-purple py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary pixel-border"></div>
            <span className="font-black uppercase tracking-tighter text-xl">Pixel Club</span>
          </div>
          <p className="text-xs text-gray-500 font-bold uppercase">© 1998-2024 High School Gaming Association</p>
        </div>
        <div className="flex gap-6">
          <a className="w-12 h-12 bg-pixel-purple flex items-center justify-center pixel-border hover:bg-primary hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">forum</span>
          </a>
          <a className="w-12 h-12 bg-pixel-purple flex items-center justify-center pixel-border hover:bg-primary hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">share</span>
          </a>
          <a className="w-12 h-12 bg-pixel-purple flex items-center justify-center pixel-border hover:bg-primary hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
