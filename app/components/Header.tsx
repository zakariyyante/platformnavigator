"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Small Disclaimer Line */}
      <div className="w-full py-2 px-4 flex items-center justify-center gap-2 bg-black/40 border-b border-white/5 relative z-[60]">
        <svg className="w-3 h-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Information Commerciale : Guide Gratuit Soutenu Par Des Partenariats Affiliés</span>
      </div>

      <header className="sticky top-0 z-50 w-full bg-nav-dark border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-[180px] h-[40px]">
              <Image 
                src="/logo.png" 
                alt="Platform Navigator" 
                fill 
                className="object-contain brightness-0 invert" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-[10px] font-black text-white hover:text-accent transition-colors tracking-widest uppercase">ACCUEIL</Link>
            <Link href="/brands" className="text-[10px] font-black text-white hover:text-accent transition-colors tracking-widest uppercase">CLASSEMENT</Link>
            <Link href="/guide" className="text-[10px] font-black text-white hover:text-accent transition-colors tracking-widest uppercase">CRITÈRES</Link>
            <Link href="/about" className="text-[10px] font-black text-white hover:text-accent transition-colors tracking-widest uppercase">ÉDITION</Link>
          </nav>

          {/* CTA - Small 18+ circle for nav */}
          <div className="hidden lg:block">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-[8px] font-black text-white border border-white/20">18+</div>
          </div>
          <button 
            className="lg:hidden p-2 text-white/70 hover:text-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-nav-dark border-b border-accent/10 py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            <Link href="/" className="text-sm font-bold text-white uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>ACCUEIL</Link>
            <Link href="/guide" className="text-sm font-bold text-white uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>SAVOIR-FAIRE</Link>
            <Link href="/responsible-gambling" className="text-sm font-bold text-white uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>SERVICE ET ASSISTANCE</Link>
          </div>
        )}
      </header>
    </>
  );
}
