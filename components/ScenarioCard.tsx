
import React, { useState, useEffect } from 'react';
import { Scenario, Option } from '../types';

interface ScenarioCardProps {
  scenario: Scenario;
  onSelect: (impact: number, feedback: string) => void;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onSelect }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    setSelectedIdx(null);
    setIsLocked(false);
  }, [scenario.id]);

  const handleChoice = (idx: number, option: Option) => {
    if (isLocked) return;
    setSelectedIdx(idx);
    setIsLocked(true);

    // Short delay for the "locking" animation before triggering feedback
    setTimeout(() => {
      onSelect(option.impact, option.feedback);
    }, 10000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-lg md:text-2xl font-bold mb-6 text-white leading-tight min-h-[4rem]">
        {scenario.question}
      </h2>
      <div className="grid gap-3 md:gap-4">
        {scenario.options.map((option, idx) => {
          const isSelected = selectedIdx === idx;
          const bestImpact = Math.max(...scenario.options.map(o => o.impact));
          const isBestAction = option.impact === bestImpact;
          
          const showAsCorrect = isLocked && isBestAction;
          const showAsIncorrect = isLocked && isSelected && !isBestAction;
          
          let bgColor = "bg-white/[0.03]";
          let borderColor = "border-white/5";
          let iconColor = "bg-slate-800 text-slate-400";

          if (showAsCorrect) {
            bgColor = "bg-[#2D4A8D]/20";
            borderColor = "border-[#2D4A8D]";
            iconColor = "bg-[#2D4A8D] text-white";
          } else if (showAsIncorrect) {
            bgColor = "bg-[#D73A27]/20";
            borderColor = "border-[#D73A27]";
            iconColor = "bg-[#D73A27] text-white";
          }

          return (
            <button
              key={`${scenario.id}-${idx}`}
              disabled={isLocked}
              onClick={() => handleChoice(idx, option)}
              className={`
                w-full text-left p-4 md:p-5 rounded-2xl border transition-all duration-200
                flex items-start space-x-4 outline-none focus:outline-none
                ${borderColor} ${bgColor}
                ${!isLocked ? 'active:scale-[0.98] active:bg-white/[0.08] lg:hover:bg-white/[0.08] lg:hover:border-[#2D4A8D]/40' : 'cursor-default'}
                ${isSelected && !isLocked ? 'ring-2 ring-[#2D4A8D]' : ''}
              `}
            >
              <span className={`
                w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-sm md:text-base font-black shrink-0 transition-colors
                ${iconColor}
              `}>
                {isLocked ? (isBestAction ? '✓' : (isSelected ? '✕' : String.fromCharCode(65 + idx))) : String.fromCharCode(65 + idx)}
              </span>
              <div className="flex-1 pt-1 md:pt-2">
                <span className={`font-semibold text-sm md:text-base leading-snug transition-colors ${isSelected || showAsCorrect ? 'text-white' : 'text-slate-300'}`}>
                  {option.text}
                </span>
                {isLocked && (isSelected || isBestAction) && (
                  <div className={`mt-2 text-[10px] font-black uppercase tracking-[0.2em] animate-in fade-in slide-in-from-top-1 ${isBestAction ? 'text-[#2D4A8D]' : 'text-[#D73A27]'}`}>
                    {isBestAction ? '★ OPTIMAL CHOICE' : '✖ REPUTATION HIT'}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
      
      {isLocked && (
        <div className="mt-8 p-6 rounded-3xl bg-[#0a0e17]/80 border border-white/10 animate-in fade-in zoom-in-95 duration-500 shadow-2xl relative overflow-hidden">
           <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-[#2D4A8D] to-[#D73A27] animate-[width_10s_linear_forwards]" style={{ width: '0%' }}>
             <style>{`
               @keyframes width {
                 from { width: 0%; }
                 to { width: 100%; }
               }
             `}</style>
           </div>
           <div className="flex items-center gap-3 mb-3">
             <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${scenario.options[selectedIdx!].impact > 0 ? 'bg-[#2D4A8D]' : 'bg-[#D73A27]'}`}></div>
             <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">Intelligence Report</p>
           </div>
           <p className="text-white text-base md:text-lg font-medium italic leading-relaxed">
             "{scenario.options[selectedIdx!].feedback}"
           </p>
        </div>
      )}
    </div>
  );
};
