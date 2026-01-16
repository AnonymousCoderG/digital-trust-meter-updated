
import React from 'react';

interface SummaryProps {
  score: number;
  history: { impact: number; feedback: string }[];
  onRestart: () => void;
  onExit: () => void;
}

export const Summary: React.FC<SummaryProps> = ({ score, history, onRestart, onExit }) => {
  const getVerdict = (s: number) => {
    if (s >= 85) return { title: "ELITE GUARDIAN", text: "Exceptional integrity. You are a role model for the digital world.", color: "text-[#2D4A8D]", bg: "bg-[#2D4A8D]/10" };
    if (s >= 60) return { title: "STEADY CITIZEN", text: "Good judgment overall, but keep refining your digital footprint management.", color: "text-blue-400", bg: "bg-blue-400/10" };
    return { title: "RISK PROFILE", text: "Immediate correction required. Your digital legacy is currently in danger.", color: "text-[#D73A27]", bg: "bg-[#D73A27]/10" };
  };

  const verdict = getVerdict(score);

  return (
    <div className="p-6 md:p-10 max-h-[85vh] overflow-y-auto custom-scrollbar">
      <div className="text-center mb-12">
        <div className={`inline-block px-6 py-2 rounded-full text-[10px] font-black tracking-[0.4em] mb-4 border ${verdict.color} bg-white/5`}>
          FINAL REPORT
        </div>
        <div className="text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 tabular-nums">
          {score}%
        </div>
        <h2 className={`text-4xl font-black mb-4 tracking-tighter ${verdict.color}`}>{verdict.title}</h2>
        <div className={`max-w-xl mx-auto p-4 rounded-2xl ${verdict.bg} border border-white/5`}>
          <p className="text-slate-300 text-sm font-medium leading-relaxed">{verdict.text}</p>
        </div>
      </div>

      <div className="space-y-4 mb-12">
        <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest border-b border-white/5 pb-2 mb-6">Historical Data Log</h3>
        {history.map((item, idx) => (
          <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] group hover:bg-white/[0.04] transition-colors">
            <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${item.impact > 0 ? 'bg-[#2D4A8D]' : 'bg-[#D73A27]'}`} />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <div className="text-[10px] font-black text-slate-600 uppercase">Module {idx + 1}</div>
                <div className={`text-[10px] font-bold ${item.impact > 0 ? 'text-[#2D4A8D]' : 'text-[#D73A27]'}`}>
                  {item.impact > 0 ? '+' : ''}{item.impact} pts
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">{item.feedback}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-white/5 sticky bottom-0 bg-[#0a0e17]/95 backdrop-blur py-6">
        <button
          onClick={onRestart}
          className="px-10 py-4 bg-[#2D4A8D] text-white font-black rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#2D4A8D]/20 active:scale-95"
        >
          RETAKE MODULE
        </button>
        <button
          onClick={onExit}
          className="px-10 py-4 bg-transparent border-2 border-white/10 text-white font-black rounded-xl hover:bg-white/5 transition-all active:scale-95"
        >
          EXIT SYSTEM
        </button>
      </div>
    </div>
  );
};
