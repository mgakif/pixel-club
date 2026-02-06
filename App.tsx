
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { QuestLog } from './components/QuestLog';
import { Footer } from './components/Footer';
import { Mascot } from './components/Mascot';
import { Quest } from './types';

const App: React.FC = () => {
  const [showOracle, setShowOracle] = useState(false);

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
      <Mascot onOracleToggle={() => setShowOracle(!showOracle)} />
      
      {/* Dynamic Overlay or Modal can be added here */}
    </div>
  );
};

export default App;
