
import React from 'react';

interface LandingProps {
  onStart: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const logoUrl = "./logo.png";
  const fallbackUrl = "https://placehold.co/600x300/FFFFFF/2D4A8D?text=LAB+OF+FUTURE";

  return (
    <div className="p-8 md:p-16 text-center flex flex-col items-center">
      <div className="relative mb-14 float-animation">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#D73A27] to-[#2D4A8D] blur-[60px] opacity-20 rounded-full scale-150"></div>
        <div className="relative w-80 md:w-96 bg-white rounded-[2.5rem] border-b-8 border-[#2D4A8D] flex items-center justify-center shadow-[0_30px_70px_rgba(0,0,0,0.6)] p-10 overflow-hidden">
          <img 
            src={logoUrl} 
            alt="Lab of Future" 
            className="w-full h-auto object-contain block max-h-48"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== fallbackUrl) {
                target.src = fallbackUrl;
              }
            }}
          />
        </div>
      </div>
      
      <div className="space-y-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
          DIGITAL <span className="text-[#D73A27]">REPUTATION</span> LAB
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-lg leading-relaxed font-medium">
          Welcome! Face 10 real-life digital challenges to see if you can keep your reputation safe online.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 w-full max-w-2xl">
        {['Privacy', 'Security', 'Reputation', 'Etiquette'].map((label, idx) => (
          <div key={label} className="bg-white/[0.03] border border-white/10 p-5 rounded-[1.5rem] group hover:border-[#2D4A8D] transition-all hover:bg-[#2D4A8D]/10">
            <div className="text-[#D73A27] text-[9px] uppercase font-black tracking-[0.3em] mb-2">Module 0{idx+1}</div>
            <div className="text-white font-black text-xs tracking-widest uppercase">{label}</div>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        className="group relative px-14 py-6 bg-[#2D4A8D] text-white font-black rounded-2xl shadow-[0_20px_40px_rgba(45,74,141,0.4)] overflow-hidden transition-all hover:scale-105 active:scale-95 border-b-4 border-black/20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D4A8D] to-[#D73A27] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="relative z-10 text-xl tracking-[0.2em] uppercase">Initialize Protocol</span>
      </button>
      
      <div className="mt-12 flex flex-col items-center gap-2">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.6em]">Secure Terminal Established</p>
      </div>
    </div>
  );
};
