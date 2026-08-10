"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Gold Disclaimer Bar */}
      <div className="top-disclaimer w-full py-1.5 px-4 flex items-center justify-center gap-2 z-[60] relative">
        <div className="w-5 h-5 rounded-full border border-background flex items-center justify-center text-[8px] font-black">18+</div>
        <span className="tracking-tight">Contenu réservé aux personnes majeures. Jouez avec responsabilité et gardez le contrôle.</span>
      </div>

      <header className="sticky top-0 z-50 w-full bg-nav-dark/95 backdrop-blur-md border-b border-accent/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-[220px] h-[45px]">
              <Image 
                src="/logo.png" 
                alt="Platform Navigator" 
                fill 
                className="object-contain group-hover:brightness-110 transition-all" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="px-5 py-1.5 bg-accent/10 rounded-md text-xs font-bold text-accent uppercase tracking-wider border border-accent/20 hover:bg-accent/20 transition-all">ACCUEIL</Link>
            <Link href="/guide" className="text-xs font-bold text-white/70 hover:text-accent transition-colors tracking-widest uppercase">SAVOIR-FAIRE</Link>
            <Link href="/responsible-gambling" className="text-xs font-bold text-white/70 hover:text-accent transition-colors tracking-widest uppercase">SERVICE ET ASSISTANCE</Link>
          </nav>

          {/* Mobile Hamburger */}
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
