import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KRONOSGUY.COM/ACADEMY // O.S.",
  description: "UKG WFM Elite Engineer Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased min-h-screen relative overflow-hidden`}>
        {/* Terminal Header */}
        <header className="fixed top-0 w-full border-b border-terminal-green/30 bg-black/90 z-40 p-4 flex justify-between items-center terminal-container">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-widest">[ KRONOS_O.S. ]</span>
            <span className="hidden md:inline-block text-xs text-terminal-green/70">v3.0.0-FINAL</span>
          </div>
          <nav className="flex gap-6 text-sm uppercase tracking-wider">
            <a href="/" className="hover:text-white hover:text-shadow-md transition-all glitch-hover">/root</a>
            <a href="/academy" className="hover:text-white hover:text-shadow-md transition-all glitch-hover">/academy</a>
            <a href="/sandbox" className="hover:text-white hover:text-shadow-md transition-all glitch-hover">/sandbox</a>
            <a href="/docs" className="hover:text-white hover:text-shadow-md transition-all glitch-hover">/docs</a>
          </nav>
        </header>

        {/* Dynamic Matrix-like Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5 z-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #39ff14 0%, transparent 60%)',
            backgroundSize: '100% 100%'
          }} />

        {/* Main Content Area */}
        <main className="relative z-10 pt-20 px-6 h-screen overflow-y-auto w-full max-w-7xl mx-auto terminal-container">
          {children}
        </main>

        {/* Status Bar */}
        <footer className="fixed bottom-0 w-full border-t border-terminal-green/30 bg-black/90 p-1 px-4 text-xs flex justify-between z-40 terminal-container">
          <span>STATUS: <span className="text-terminal-bright">OPERATIONAL</span></span>
          <span>SYSTEM: SECURE // ENCRYPTED</span>
          <span>{new Date().toISOString().split('T')[0]}</span>
        </footer>
      </body>
    </html>
  );
}
