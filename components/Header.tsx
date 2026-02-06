
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="z-40 sticky top-0 bg-background-dark border-b-4 border-black px-6 md:px-20 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary flex items-center justify-center pixel-border">
          <span className="material-symbols-outlined text-black font-bold">videogame_asset</span>
        </div>
        <h1 className="text-2xl font-black tracking-tighter uppercase text-primary">Pixel Club</h1>
      </div>
      <nav className="hidden md:flex items-center gap-10">
        <a className="text-arcade-yellow text-sm font-bold uppercase tracking-widest hover:text-white underline decoration-4 underline-offset-8" href="#">Home</a>
        <a className="text-white text-sm font-bold uppercase tracking-widest hover:text-primary" href="#">Quests</a>
        <a className="text-white text-sm font-bold uppercase tracking-widest hover:text-primary" href="#">Rankings</a>
        <a className="text-white text-sm font-bold uppercase tracking-widest hover:text-primary" href="#">Vault</a>
      </nav>
      <div className="flex gap-4">
        <button className="pixel-button bg-primary text-black px-6 py-2 text-sm font-bold uppercase tracking-tighter">
          Login
        </button>
      </div>
    </header>
  );
};
