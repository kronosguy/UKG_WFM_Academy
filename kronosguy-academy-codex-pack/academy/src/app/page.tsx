"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const sequence = [
      "INITIALIZING_FINAL_BUILD...",
      "COMPILING_LIME_GREEN_ASSETS...",
      "HARDENING_MONOSPACE_FONTS...",
      "SYNCING_PRODUCTION_ROUTES...",
      "SYSTEM_OPERATIONAL."
    ];

    let i = 0;
    const interval = setInterval(() => {
      setBootSequence(prev => [...prev, \`[04:02:\${Math.floor(Math.random()*60).toString().padStart(2,'0')}] \${sequence[i]}\`]);
      i++;
      if (i === sequence.length) {
        clearInterval(interval);
        setTimeout(() => setShowMain(true), 800);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full w-full py-8 text-terminal-green">
      {!showMain && (
        <div className="flex flex-col gap-2 font-mono text-sm tracking-wide">
          {bootSequence.map((line, idx) => (
            <div key={idx} className="animate-pulse">{line}</div>
          ))}
          <div className="mt-4">
            <span className="blinking-cursor"></span>
          </div>
        </div>
      )}

      {showMain && (
        <div className="flex flex-col gap-8 animate-in fade-in zoom-in duration-700">
          <div className="border border-terminal-green p-6 bg-terminal-dark/50 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2 glitch-hover">
              UKG WFM ACADEMY
            </h1>
            <h2 className="text-xl md:text-2xl text-terminal-green/80 uppercase tracking-[0.2em] border-b border-terminal-green/30 pb-4 mb-4">
              SOVEREIGN_MASTER_SCRIPT [v3.0.0-FINAL]
            </h2>
            <p className="text-sm md:text-base leading-relaxed tracking-wide mb-6">
              &gt; All previous 'Blue-Futuristic' assets have been purged.<br/>
              &gt; The platform is now a hardened, console-grade terminal.<br/>
              &gt; Elite engineering playground initialized.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 border border-terminal-green bg-terminal-green text-black font-bold uppercase tracking-wider hover:bg-black hover:text-terminal-green transition-all shadow-[0_0_10px_#39ff14]">
                _EXECUTE_LEARNING_
              </button>
              <button className="px-6 py-2 border border-terminal-green/50 text-terminal-green font-bold uppercase tracking-wider hover:border-terminal-green hover:shadow-[0_0_10px_rgba(57,255,20,0.5)] transition-all">
                _ACCESS_SANDBOX_
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            {/* Module 1 */}
            <div className="terminal-card p-5">
              <h3 className="text-lg font-bold border-b border-terminal-green/30 pb-2 mb-3">01 // PLATFORM_DOCS</h3>
              <ul className="space-y-2 text-sm text-terminal-green/80">
                <li className="flex gap-2"><span className="text-terminal-bright">&gt;</span> Getting Started</li>
                <li className="flex gap-2"><span className="text-terminal-bright">&gt;</span> Architecture Spec</li>
                <li className="flex gap-2"><span className="text-terminal-bright">&gt;</span> Account Ops</li>
              </ul>
            </div>
            
            {/* Module 2 */}
            <div className="terminal-card p-5">
              <h3 className="text-lg font-bold border-b border-terminal-green/30 pb-2 mb-3">02 // ACADEMY_CURRICULUM</h3>
              <ul className="space-y-2 text-sm text-terminal-green/80">
                <li className="flex gap-2"><span className="text-terminal-bright">&gt;</span> T&A Deep Dive [14h]</li>
                <li className="flex gap-2"><span className="text-terminal-bright">&gt;</span> Scheduling Matrix [20h]</li>
                <li className="flex gap-2"><span className="text-terminal-bright">&gt;</span> Sys Admin Codex [30h]</li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="terminal-card p-5">
              <h3 className="text-lg font-bold border-b border-terminal-green/30 pb-2 mb-3">03 // SANDBOX_SUITE</h3>
              <ul className="space-y-2 text-sm text-terminal-green/80">
                <li className="flex gap-2"><span className="text-terminal-bright">&gt;</span> PAY_RULES (1:1 Sim)</li>
                <li className="flex gap-2"><span className="text-terminal-bright">&gt;</span> ROUNDING_RULES</li>
                <li className="flex gap-2"><span className="text-terminal-bright">&gt;</span> JSON_PREVIEW Engine</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
