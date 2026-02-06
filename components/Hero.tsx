
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-8 order-2 lg:order-1">
        <div className="inline-block bg-pixel-purple px-4 py-1 self-start pixel-border">
          <span className="text-arcade-yellow text-xs font-bold uppercase tracking-widest italic">New Season: 16-BIT CHAOS</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter text-white">
          Level Up Your <span className="text-primary">Afternoons</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed border-l-4 border-primary pl-6">
          Join the ultimate high school gaming community. New quests available daily. High scores are meant to be broken.
        </p>
        <div className="flex flex-wrap gap-6 pt-4">
          <button className="pixel-button bg-primary text-black px-10 py-5 text-xl font-black uppercase tracking-widest flex items-center gap-3">
            <span className="material-symbols-outlined">play_arrow</span>
            Press Start
          </button>
          <button className="pixel-button bg-white text-black px-8 py-5 text-xl font-black uppercase tracking-widest">
            Join Guild
          </button>
        </div>
      </div>
      
      {/* Pixel Art Graphics */}
      <div className="relative order-1 lg:order-2 flex justify-center items-center h-[400px]">
        {/* Main Console Representation */}
        <div className="w-64 h-80 bg-gray-400 pixel-border relative z-10 flex flex-col items-center p-4">
          <div className="w-full h-48 bg-background-dark border-4 border-black mb-4 flex items-center justify-center overflow-hidden">
            <div className="text-primary animate-pulse text-4xl font-black">READY</div>
          </div>
          <div className="flex gap-4 mt-2">
            <div className="w-8 h-8 rounded-full bg-red-600 pixel-border"></div>
            <div className="w-8 h-8 rounded-full bg-red-600 pixel-border"></div>
          </div>
        </div>
        {/* Floating Icons */}
        <div className="absolute top-10 left-10 text-primary animate-pixel-float">
          <span className="material-symbols-outlined !text-6xl" style={{fontVariationSettings: "'FILL' 1"}}>sports_esports</span>
        </div>
        <div className="absolute bottom-10 right-10 text-arcade-yellow animate-pixel-bounce" style={{animationDelay: '0.5s'}}>
          <span className="material-symbols-outlined !text-6xl" style={{fontVariationSettings: "'FILL' 1"}}>swords</span>
        </div>
        <div className="absolute top-0 right-20 text-red-500 animate-pixel-float" style={{animationDelay: '1.2s'}}>
          <span className="material-symbols-outlined !text-5xl" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
        </div>
      </div>
    </section>
  );
};
