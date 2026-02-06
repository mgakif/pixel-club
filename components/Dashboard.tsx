
import React, { useState } from 'react';
import { isSupabaseConfigured } from '../services/supabase.ts';

interface DashboardProps {
  currentLogo: string;
  onLogoChange: (newLogo: string) => void;
  userEmail?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ currentLogo, onLogoChange, userEmail }) => {
  const [logoInput, setLogoInput] = useState(currentLogo);

  const icons = [
    'videogame_asset', 'sports_esports', 'joystick', 'stadia_controller', 
    'potted_plant', 'rocket_launch', 'skull', 'diamond', 'bolt'
  ];

  return (
    <section className="w-full max-w-[1200px] px-6 py-12">
      {/* Connection Status Header */}
      <div className="mb-8 flex items-center gap-4 bg-black/50 p-4 pixel-border border-l-8 border-l-primary">
        <div className={`w-3 h-3 rounded-full animate-pulse ${isSupabaseConfigured ? 'bg-green-500' : 'bg-orange-500'}`}></div>
        <span className="text-xs font-black uppercase tracking-widest">
          {isSupabaseConfigured ? 'System Status: ONLINE (Supabase Active)' : 'System Status: OFFLINE (Demo Mode Active)'}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Profile Card */}
        <div className="lg:col-span-1">
          <div className="pixel-card p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-pixel-purple pixel-border mb-4 flex items-center justify-center">
              <span className="material-symbols-outlined text-arcade-yellow text-5xl">person</span>
            </div>
            <h3 className="text-xl font-black text-white uppercase truncate w-full">{userEmail?.split('@')[0]}</h3>
            <span className="text-xs font-bold text-primary uppercase mt-1">Lvl 1 Rookie</span>
            
            <div className="w-full bg-black/40 h-2 mt-6 pixel-border">
              <div className="bg-primary h-full w-1/4"></div>
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase mt-2">XP: 250 / 1000</span>
          </div>
        </div>

        {/* Right: Command Center (Settings) */}
        <div className="lg:col-span-2 space-y-8">
          <div className="pixel-card p-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-primary !text-4xl">settings</span>
              <h2 className="text-3xl font-black uppercase tracking-tighter">Command Center</h2>
            </div>

            <div className="space-y-10">
              {/* Logo Settings */}
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b-2 border-arcade-yellow/20 pb-2">
                  <h4 className="text-sm font-black uppercase tracking-widest text-arcade-yellow">Customize Club Icon</h4>
                  <span className="text-[10px] font-bold text-gray-500 uppercase italic">Changes save to local storage</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-6">
                  {icons.map(icon => (
                    <button 
                      key={icon}
                      onClick={() => onLogoChange(icon)}
                      className={`w-12 h-12 flex items-center justify-center pixel-border transition-all ${currentLogo === icon ? 'bg-primary text-black' : 'bg-black text-white hover:bg-white/10'}`}
                    >
                      <span className="material-symbols-outlined">{icon}</span>
                    </button>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Custom Icon Name (Material Symbols)</label>
                  <div className="flex gap-4">
                    <input 
                      type="text"
                      value={logoInput}
                      onChange={(e) => setLogoInput(e.target.value)}
                      className="flex-1 bg-black border-4 border-white/10 p-3 text-white font-bold outline-none focus:border-primary"
                      placeholder="e.g. rocket_launch"
                    />
                    <button 
                      onClick={() => onLogoChange(logoInput)}
                      className="pixel-button bg-arcade-yellow text-black px-6 font-black uppercase text-xs"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>

              {/* Club Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 p-4 border-l-4 border-primary">
                  <span className="block text-[10px] font-bold text-gray-500 uppercase">Quests Completed</span>
                  <span className="text-2xl font-black text-white">12</span>
                </div>
                <div className="bg-black/40 p-4 border-l-4 border-arcade-yellow">
                  <span className="block text-[10px] font-bold text-gray-500 uppercase">Current Rank</span>
                  <span className="text-2xl font-black text-white">#42</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
