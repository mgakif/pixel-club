
import React, { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../services/supabase.ts';

interface AuthProps {
  onClose: () => void;
  onMockLogin?: (email: string) => void;
}

export const Auth: React.FC<AuthProps> = ({ onClose, onMockLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSupabaseConfigured) {
      setError("Supabase URL is not configured. Use Demo Access.");
      return;
    }
    
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert('Check your email for confirmation!');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        onClose();
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoAccess = () => {
    if (onMockLogin) {
      onMockLogin('demo_player@pixel.club');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 backdrop-blur-sm">
      <div className="pixel-card w-full max-w-md p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary mx-auto mb-4 pixel-border flex items-center justify-center">
            <span className="material-symbols-outlined text-black text-3xl font-bold">person</span>
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-primary">
            {isSignUp ? 'New Player' : 'Member Login'}
          </h2>
          {!isSupabaseConfigured && (
            <p className="text-[10px] text-arcade-yellow font-black mt-2 uppercase">
              Notice: Offline Mode (Supabase not configured)
            </p>
          )}
        </div>

        {error && (
          <div className="bg-red-500/20 border-2 border-red-500 p-3 mb-6 text-red-500 text-[10px] font-bold uppercase">
            Error: {error}
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">User Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border-4 border-white/10 p-4 text-white font-bold focus:border-primary outline-none"
              placeholder="PLAYER@PIXEL.CLUB"
              required={isSupabaseConfigured}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">Passcode</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border-4 border-white/10 p-4 text-white font-bold focus:border-primary outline-none"
              placeholder="********"
              required={isSupabaseConfigured}
            />
          </div>

          <div className="flex flex-col gap-4">
            <button 
              type="submit"
              disabled={loading || !isSupabaseConfigured}
              className="w-full pixel-button bg-primary text-black py-4 font-black uppercase tracking-widest text-lg disabled:opacity-30"
            >
              {loading ? 'Authenticating...' : isSignUp ? 'Create Profile' : 'Access System'}
            </button>

            <button 
              type="button"
              onClick={handleDemoAccess}
              className="w-full pixel-button bg-arcade-yellow text-black py-3 font-black uppercase tracking-widest text-sm"
            >
              Bypass / Demo Access
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t-2 border-white/5 text-center">
          <button 
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs font-bold uppercase text-arcade-yellow hover:underline"
          >
            {isSignUp ? 'Already have a profile? Login' : 'Need a profile? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};
