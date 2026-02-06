
import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { StatsBar } from './components/StatsBar.tsx';
import { QuestLog } from './components/QuestLog.tsx';
import { Footer } from './components/Footer.tsx';
import { Mascot } from './components/Mascot.tsx';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Scanline Overlay */}
      <div className="fixed inset-0 scanline-overlay z-50 pointer-events-none"></div>

      <Header />
      
      <main className="flex-1 flex flex-col items-center">
        <Hero />
        <StatsBar />
        <QuestLog />
      </main>

      <Footer />
      <Mascot onOracleToggle={() => {}} />
    </div>
  );
};

export default App;
