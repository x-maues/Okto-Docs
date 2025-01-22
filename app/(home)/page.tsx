'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Book } from 'lucide-react';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden bg-gradient-to-b dark:from-black from:white via-purple-950 to-black">
      {/* Animated background blur */}
      <div 
        className="absolute blur-[100px] opacity-50 rounded-full w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-900"
        style={{
          transform: `translate(${mousePosition.x * 0.06}px, ${mousePosition.y * 0.1}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
      

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Floating sparkles icon */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Sparkles className="w-8 h-8 text-black dark:text-white" />
        </div>

        {/* Main title */}
        <h1 className="mb-6 text-6xl font-extrabold">
          <span className="bg-gradient-to-r from-purple-400  to-blue-500 text-transparent bg-clip-text">
            Okto Layer
          </span>
        </h1>
        
        <p className="mb-8 text-2xl dark:text-gray-300">
        Unlocking a New Era of Chain Abstraction
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all">
            <h3 className="text-lg font-semibold dark:text-white mb-2">Decentralized Wallet Networks (DWNs):</h3>
            <p className="dark:text-gray-200">Single, unified wallet</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all">
            <h3 className="text-lg font-semibold dark:text-white mb-2">Unified Liquidity Layer (ULL)</h3>
            <p className="dark:text-gray-200">Aggregator of aggregators</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all">
            <h3 className="text-lg font-semibold dark:text-white mb-2">Decentralized Transaction Networks (DTNs)</h3>
            <p className="dark:text-gray-200">Automated and sequenced</p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/docs" 
            className="group px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all"
          >
            Explore Docs
            <Book className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a 
            href="https://github.com/x-maues/Okto-Docs"
            target="_blank"
            rel="noopener noreferrer" 
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 dark:text-white font-semibold flex items-center gap-2 transition-all"
          >
            GitHub
            <div className="w-4 h-4" />
          </a>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex items-center justify-center gap-4 text-gray-500">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          <span>Built for the future</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        </div>
      </div>
    </main>
  );
}