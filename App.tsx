
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { StatsBar } from './components/StatsBar.tsx';
import { QuestLog } from './components/QuestLog.tsx';
import { Footer } from './components/Footer.tsx';
import { Mascot } from './components/Mascot.tsx';
import { Auth } from './components/Auth.tsx';
import { Dashboard } from './components/Dashboard.tsx';
import { supabase } from './services/supabase.ts';

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [logoIcon, setLogoIcon] = useState('videogame_asset');

  useEffect(() => {
    // Mevcut oturumu kontrol et
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Auth değişikliklerini dinle
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Kayıtlı logoyu yükle (Opsiyonel: Supabase'den de çekilebilir)
    const savedLogo = localStorage.getItem('pixel_club_logo');
    if (savedLogo) setLogoIcon(savedLogo);

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setShowDashboard(false);
  };

  const handleLogoChange = (newLogo: string) => {
    setLogoIcon(newLogo);
    localStorage.setItem('pixel_club_logo', newLogo);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Scanline Overlay */}
      <div className="fixed inset-0 scanline-overlay z-50 pointer-events-none"></div>

      <Header 
        logoIcon={logoIcon} 
        user={user} 
        onAuthClick={() => setShowAuth(true)}
        onLogout={handleLogout}
        showDashboard={showDashboard}
        setShowDashboard={setShowDashboard}
      />
      
      <main className="flex-1 flex flex-col items-center">
        {showDashboard && user ? (
          <Dashboard 
            currentLogo={logoIcon} 
            onLogoChange={handleLogoChange}
            userEmail={user.email}
          />
        ) : (
          <>
            <Hero />
            <StatsBar />
            <QuestLog />
          </>
        )}
      </main>

      {showAuth && <Auth onClose={() => setShowAuth(false)} />}

      <Footer />
      <Mascot onOracleToggle={() => {}} />
    </div>
  );
};

export default App;
