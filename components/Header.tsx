
import React from 'react';

interface HeaderProps {
  logoIcon: string;
  user: any;
  onAuthClick: () => void;
  onLogout: () => void;
  showDashboard: boolean;
  setShowDashboard: (show: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ logoIcon, user, onAuthClick, onLogout, showDashboard, setShowDashboard }) => {
  return (
    <header className="z-40 sticky top-0 bg-background-dark border-b-4 border-black px-6 md:px-20 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setShowDashboard(false)}>
        <div className="w-10 h-10 bg-primary flex items-center justify-center pixel-border">
          <span className="material-symbols-outlined text-black font-bold">{logoIcon}</span>
        </div>
        <h1 className="text-2xl font-black tracking-tighter uppercase text-primary">Pixel Club</h1>
      </div>
      
      <nav className="hidden md:flex items-center gap-10">
        <button 
          onClick={() => setShowDashboard(false)}
          className={`text-sm font-bold uppercase tracking-widest hover:text-white ${!showDashboard ? 'text-arcade-yellow underline decoration-4 underline-offset-8' : 'text-white'}`}
        >
          Home
        </button>
        {user && (
          <button 
            onClick={() => setShowDashboard(true)}
            className={`text-sm font-bold uppercase tracking-widest hover:text-primary ${showDashboard ? 'text-arcade-yellow underline decoration-4 underline-offset-8' : 'text-white'}`}
          >
            Dashboard
          </button>
        )}
        <a className="text-white text-sm font-bold uppercase tracking-widest hover:text-primary" href="#">Quests</a>
        <a className="text-white text-sm font-bold uppercase tracking-widest hover:text-primary" href="#">Vault</a>
      </nav>

      <div className="flex gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <span className="hidden lg:block text-[10px] font-black uppercase text-gray-500">{user.email}</span>
            <button 
              onClick={onLogout}
              className="pixel-button bg-red-600 text-white px-6 py-2 text-sm font-bold uppercase tracking-tighter"
            >
              Exit
            </button>
          </div>
        ) : (
          <button 
            onClick={onAuthClick}
            className="pixel-button bg-primary text-black px-6 py-2 text-sm font-bold uppercase tracking-tighter"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};
