
import React, { useState } from 'react';
import { SCENARIOS } from './constants';
import { ViewState } from './types';
import { Gauge } from './components/Gauge';
import { ScenarioCard } from './components/ScenarioCard';
import { Landing } from './components/Landing';
import { Summary } from './components/Summary';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(30);
  const [history, setHistory] = useState<{ impact: number; feedback: string }[]>([]);

  const startQuiz = () => {
    setScore(30);
    setCurrentIndex(0);
    setHistory([]);
    setView('quiz');
  };

  const handleExit = () => {
    setView('landing');
    setScore(30);
    setCurrentIndex(0);
    setHistory([]);
  };

  const handleAnswer = (impact: number, feedback: string) => {
    setScore(prev => Math.min(Math.max(prev + impact, 0), 100));
    setHistory(prev => [...prev, { impact, feedback }]);
    
    if (currentIndex < SCENARIOS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setView('summary');
    }
  };

  // Improved logo handling
  const logoUrl = "./logo.png";
  const fallbackUrl = "https://api.a0.dev/assets/image?text=LabOfFuture%20Logo&aspect=2:1";

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6 md:py-8 px-4 md:px-8 bg-[#0a0e17] selection:bg-[#D73A27] selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[80%] h-[80%] bg-[#2D4A8D]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[80%] h-[80%] bg-[#D73A27]/10 blur-[120px] rounded-full"></div>
      </div>

      <header className="mb-6 md:mb-10 text-center flex flex-col items-center w-full max-w-4xl">
        <div className="bg-white p-3 md:p-5 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.4)] mb-4 md:mb-6 border-b-4 border-[#2D4A8D] transition-transform hover:scale-105 inline-block">
            <img 
              src={logoUrl} 
              alt="Lab of Future Logo" 
              className="w-32 md:w-56 h-auto block object-contain max-h-16 md:max-h-24"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== fallbackUrl) target.src = fallbackUrl;
              }}
            />
        </div>
        
        <div className="space-y-1">
          <h1 className="text-2xl md:text-5xl font-black text-white tracking-tighter uppercase">
            TRUST <span className="text-[#D73A27]">GUARDIAN</span>
          </h1>
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#D73A27]/40"></div>
            <p className="text-slate-500 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[8px] md:text-[10px]">A Lab of Future Initiative</p>
            <div className="h-[1px] w-8 md:w-12 bg-[#2D4A8D]/40"></div>
          </div>
        </div>
      </header>

      <main className="w-full max-w-4xl glass-panel rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-t border-white/10 relative">
        {view === 'landing' && <Landing onStart={startQuiz} />}
        
        {view === 'quiz' && (
          <div className="p-5 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
              <div className="lg:col-span-1 flex flex-col items-center justify-center space-y-4 md:space-y-6 lg:sticky lg:top-4">
                <Gauge value={score} />
                <div className="text-center bg-white/5 p-4 rounded-2xl border border-white/5 w-full max-w-[200px] lg:max-w-none">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black">Digital Standing</span>
                  <div className="text-2xl md:text-4xl font-black text-white tabular-nums drop-shadow-md">{score}%</div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <span className="px-3 md:px-5 py-1.5 md:py-2 rounded-xl bg-[#2D4A8D]/10 text-[#2D4A8D] text-[10px] md:text-xs font-black uppercase tracking-[0.15em] border border-[#2D4A8D]/30">
                    {SCENARIOS[currentIndex].category}
                  </span>
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-slate-400 font-bold text-xs md:text-sm bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                      {currentIndex + 1}<span className="text-slate-600 px-1 font-normal">/</span>{SCENARIOS.length}
                    </span>
                  </div>
                </div>
                <ScenarioCard 
                  scenario={SCENARIOS[currentIndex]} 
                  onSelect={handleAnswer} 
                />
              </div>
            </div>
          </div>
        )}

        {view === 'summary' && (
          <Summary 
            score={score} 
            history={history} 
            onRestart={startQuiz} 
            onExit={handleExit}
          />
        )}
      </main>

      <footer className="mt-8 md:mt-12 text-slate-600 text-[8px] md:text-[10px] text-center font-black tracking-[0.4em] md:tracking-[0.5em] uppercase opacity-50 pb-8">
        <p>© Lab of Future • Security Protocol Activated</p>
      </footer>
    </div>
  );
};

export default App;
