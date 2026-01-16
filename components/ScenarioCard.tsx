
import React, { useState, useEffect } from 'react';
import { Scenario, Option } from '../types';

interface ScenarioCardProps {
  scenario: Scenario;
  onSelect: (impact: number, feedback: string) => void;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onSelect }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  // Reset local state when scenario changes
  useEffect(() => {
    setSelectedIdx(null);
    setIsLocked(false);
  }, [scenario.id]);

  const handleChoice = (idx: number, option: Option) => {
    if (isLocked) return;
    setSelectedIdx(idx);
    setIsLocked(true);

    // Show feedback for 10 seconds to allow for clear understanding before moving on
    setTimeout(() => {
      onSelect(option.impact, option.feedback);
    }, 10000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-xl md:text-2xl font-bold mb-8 text-white leading-tight">
        {scenario.question}
      </h2>
      <div className="space-y-4">
        {scenario.options.map((option, idx) => {
          const isSelected = selectedIdx === idx;
          // Find the best option in the array (highest impact)
          const bestImpact = Math.max(...scenario.options.map(o => o.impact));
          const isBestAction = option.impact === bestImpact;
          
          const showAsCorrect = isLocked && isBestAction;
          const showAsIncorrect = isLocked && isSelected && !isBestAction;
          
          let bgColor = "bg-white/[0.03]";
          let borderColor = "border-white/5";
          let iconColor = "bg-slate-800 text-slate-500";

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
              key={idx}
              disabled={isLocked}
              onClick={() => handleChoice(idx, option)}
              className={`w-full text-left p-5 rounded-2xl border ${borderColor} ${bgColor} transition-all group flex items-start space-x-4 ${!isLocked ? 'hover:bg-white/[0.08] hover:border-[#2D4A8D]/40' : 'cursor-default'}`}
            >
              <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black shrink-0 transition-colors ${iconColor}`}>
                {isLocked ? (isBestAction ? '✓' : (isSelected ? '✕' : String.fromCharCode(65 + idx))) : String.fromCharCode(65 + idx)}
              </span>
              <div className="flex-1">
                <span className={`font-medium text-base leading-snug ${isSelected || showAsCorrect ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                  {option.text}
                </span>
                {isLocked && (isSelected || isBestAction) && (
                  <div className={`mt-2 text-[10px] font-black uppercase tracking-widest animate-in fade-in slide-in-from-top-1 ${isBestAction ? 'text-[#2D4A8D]' : 'text-[#D73A27]'}`}>
                    {isBestAction ? '★ BEST ACTION' : '✖ INCORRECT CHOICE'}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
      {isLocked && (
        <div className="mt-6 p-5 rounded-2xl bg-[#0a0e17]/80 border border-white/10 animate-in fade-in zoom-in-95 duration-500 shadow-2xl relative overflow-hidden">
           {/* Animated progress bar to show the 10s wait */}
           <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#2D4A8D] to-[#D73A27] animate-[width_10s_linear_forwards]" style={{ width: '0%' }}>
             <style>{`
               @keyframes width {
                 from { width: 0%; }
                 to { width: 100%; }
               }
             `}</style>
           </div>
           <div className="flex items-center gap-2 mb-2">
             <div className={`w-2 h-2 rounded-full ${scenario.options[selectedIdx!].impact > 0 ? 'bg-[#2D4A8D]' : 'bg-[#D73A27]'}`}></div>
             <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Digital Feedback (Moving on in 10s...)</p>
           </div>
           <p className="text-white text-base font-medium">"{scenario.options[selectedIdx!].feedback}"</p>
        </div>
      )}
    </div>
  );
};
