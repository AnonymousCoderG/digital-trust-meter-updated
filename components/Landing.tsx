
import React from 'react';

interface LandingProps {
  onStart: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const logoUrl = "logo.png";

  return (
    <div className="p-8 md:p-12 text-center flex flex-col items-center">
      <div className="relative mb-10 float-animation">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#D73A27] to-[#2D4A8D] blur-3xl opacity-30 rounded-full scale-150"></div>
        <div className="relative w-72 bg-white rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl p-6 overflow-hidden">
          <img 
            src={logoUrl} 
            alt="Lab of Future" 
            className="w-full h-auto object-contain block"
          />
        </div>
      </div>
      
      <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
        DIGITAL <span className="text-[#D73A27]">REPUTATION</span> LAB
      </h2>
      <p className="text-slate-400 max-w-lg mb-12 text-lg leading-relaxed font-medium">
        Welcome to the Lab of Future trust simulator. For the next 10 scenarios, your choices will determine your digital standing. Aim for 100% to become an Elite Guardian.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full">
        {['Privacy', 'Security', 'Reputation', 'Etiquette'].map(label => (
          <div key={label} className="bg-white/5 border border-white/10 p-4 rounded-2xl group hover:border-[#2D4A8D]/50 transition-all">
            <div className="text-[#D73A27] text-[9px] uppercase font-black tracking-widest mb-1">Critical</div>
            <div className="text-white font-bold text-sm tracking-wide">{label}</div>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        className="group relative px-12 py-5 bg-[#2D4A8D] text-white font-black rounded-2xl shadow-2xl shadow-[#2D4A8D]/40 overflow-hidden transition-all hover:scale-105 active:scale-95"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D4A8D] to-[#D73A27] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="relative z-10 text-lg tracking-widest">INITIALIZE SIMULATION</span>
      </button>
      
      <p className="mt-8 text-slate-600 text-[9px] font-black uppercase tracking-[0.5em]">Lab of Future Secure Protocol</p>
    </div>
  );
};
