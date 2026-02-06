
import React from 'react';

export const StatsBar: React.FC = () => {
  return (
    <section className="w-full bg-black border-y-4 border-primary/30 py-6">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-around gap-8">
        <div className="flex flex-col items-center">
          <span className="text-primary text-xs uppercase font-bold tracking-widest mb-1">Active Members</span>
          <span className="text-3xl font-black text-white">4,208</span>
        </div>
        <div className="flex flex-col items-center border-x-4 border-white/10 px-12">
          <span className="text-primary text-xs uppercase font-bold tracking-widest mb-1">Rank</span>
          <span className="text-3xl font-black text-white">HIGH SCHOOL #1</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-primary text-xs uppercase font-bold tracking-widest mb-1">High Score</span>
          <span className="text-3xl font-black text-arcade-yellow">999,999</span>
        </div>
      </div>
    </section>
  );
};
