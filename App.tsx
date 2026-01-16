
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

  // Direct reference to the uploaded logo asset
  const logoUrl = "logo.png";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#2D4A8D]/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#D73A27]/20 blur-[120px] rounded-full"></div>
      </div>

      <header className="mb-6 text-center flex flex-col items-center">
        <div className="bg-white p-4 rounded-2xl shadow-2xl mb-4 border border-white/20 max-w-[280px] transition-transform hover:scale-105">
            <img 
              src={logoUrl} 
              alt="Lab of Future Logo" 
              className="w-full h-auto block"
              loading="eager"
            />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
          TRUST <span className="text-[#D73A27]">GUARDIAN</span>
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-[#2D4A8D] to-[#D73A27] rounded-full mb-2"></div>
        <p className="text-slate-400 font-black tracking-[0.2em] uppercase text-[10px]">A Lab of Future Initiative</p>
      </header>

      <main className="w-full max-w-4xl glass-panel rounded-3xl overflow-hidden shadow-2xl border-t border-white/10 relative">
        {view === 'landing' && <Landing onStart={startQuiz} />}
        
        {view === 'quiz' && (
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 flex flex-col items-center justify-center space-y-4 md:sticky md:top-0">
                <Gauge value={score} />
                <div className="text-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">Trust Index</span>
                  <div className="text-4xl font-black text-white transition-all tabular-nums">{score}%</div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="flex justify-between items-center mb-6">
                  <span className="px-4 py-1.5 rounded-lg bg-[#2D4A8D]/20 text-[#2D4A8D] text-xs font-bold uppercase tracking-wider border border-[#2D4A8D]/30">
                    {SCENARIOS[currentIndex].category}
                  </span>
                  <span className="text-slate-400 font-bold bg-white/5 px-3 py-1 rounded-lg text-sm border border-white/5">
                    {currentIndex + 1} <span className="text-slate-600 mx-1">/</span> {SCENARIOS.length}
                  </span>
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

      <footer className="mt-8 text-slate-500 text-sm text-center font-medium opacity-60">
        <p>© Lab of Future • Digital Citizenship Simulator</p>
      </footer>
    </div>
  );
};

export default App;
