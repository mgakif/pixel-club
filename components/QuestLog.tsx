
import React, { useState } from 'react';
import { Quest } from '../types';
import { generateAIQuest } from '../services/gemini';

const INITIAL_QUESTS: Quest[] = [
  {
    id: '1',
    title: 'Super Smash Tourney',
    description: 'Friday at 4:00 PM in the Media Lab. Double elimination bracket. Bring your own controller!',
    xp: '500 XP',
    tag: 'Active',
    tagColor: 'bg-primary',
    imageUrl: 'https://picsum.photos/seed/smash/600/400'
  },
  {
    id: '2',
    title: 'Retro Night',
    description: 'Experience the classics. SNES, Genesis, and N64 setups available. High score challenge: Pac-Man.',
    xp: 'Social Buff',
    tag: 'Weekly',
    tagColor: 'bg-arcade-yellow',
    imageUrl: 'https://picsum.photos/seed/retro/600/400'
  },
  {
    id: '3',
    title: 'Gear Upgrade',
    description: 'New RTX 4080 builds have arrived in the lab. Log in to claim your testing session hours.',
    xp: 'Tech Buff',
    tag: 'Complete',
    tagColor: 'bg-pixel-purple text-white',
    imageUrl: 'https://picsum.photos/seed/pc/600/400'
  }
];

export const QuestLog: React.FC = () => {
  const [quests, setQuests] = useState<Quest[]>(INITIAL_QUESTS);
  const [loading, setLoading] = useState(false);

  const handleGenerateQuest = async () => {
    setLoading(true);
    const topics = ["FPS competition", "Speedrunning", "Indie Game Showcase", "VR Experience"];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const newQuest = await generateAIQuest(randomTopic);
    if (newQuest) {
      setQuests(prev => [{ ...newQuest, id: Date.now().toString() }, ...prev]);
    }
    setLoading(false);
  };

  return (
    <section className="w-full max-w-[1200px] px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary !text-4xl">assignment</span>
          <h2 className="text-4xl font-black uppercase tracking-tighter">Quest Log</h2>
        </div>
        <div className="flex-1 h-1 bg-primary/20 hidden md:block"></div>
        <button 
          onClick={handleGenerateQuest}
          disabled={loading}
          className="pixel-button bg-arcade-yellow text-black px-4 py-2 text-xs font-black uppercase tracking-widest disabled:opacity-50"
        >
          {loading ? 'Consulting Oracle...' : 'Generate AI Quest'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quests.map(quest => (
          <div key={quest.id} className="pixel-card group overflow-hidden">
            <div 
              className="h-48 w-full bg-cover bg-center border-b-4 border-black transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: `url('${quest.imageUrl}')` }}
            ></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4 gap-2">
                <h3 className="text-xl font-bold uppercase text-white line-clamp-1">{quest.title}</h3>
                <span className={`${quest.tagColor} text-black text-[10px] font-bold px-2 py-0.5 uppercase whitespace-nowrap`}>
                  {quest.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[60px]">
                {quest.description}
              </p>
              <div className="flex items-center justify-between border-t-2 border-white/5 pt-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-arcade-yellow text-sm">stars</span>
                  <span className="text-arcade-yellow font-bold text-xs uppercase">{quest.xp}</span>
                </div>
                <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">
                  View Details -&gt;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
