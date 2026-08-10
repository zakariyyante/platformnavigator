"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-nav-dark/90 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-[240px] h-[50px]">
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
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/" className="text-sm font-bold text-white/70 hover:text-accent transition-colors tracking-wide uppercase">Accueil</Link>
          <Link href="/brands" className="text-sm font-bold text-white/70 hover:text-accent transition-colors tracking-wide uppercase">Marques</Link>
          <Link href="/guide" className="text-sm font-bold text-white/70 hover:text-accent transition-colors tracking-wide uppercase">Guide</Link>
          <Link href="/about" className="text-sm font-bold text-white/70 hover:text-accent transition-colors tracking-wide uppercase">À Propos</Link>
          <Link href="/contact" className="text-sm font-bold text-white/70 hover:text-accent transition-colors tracking-wide uppercase">Contact</Link>
        </nav>

        {/* CTA in Header */}
        <div className="hidden lg:block">
          <Link 
            href="/brands" 
            className="px-6 py-2.5 bg-primary hover:bg-teal-700 text-white text-xs font-black uppercase tracking-widest rounded-full transition-all border border-white/10"
          >
            Meilleurs Bonus
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-nav-dark border-b border-white/5 py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/" className="text-xl font-black text-white" onClick={() => setIsMenuOpen(false)}>ACCUEIL</Link>
          <Link href="/brands" className="text-xl font-black text-white" onClick={() => setIsMenuOpen(false)}>MARQUES</Link>
          <Link href="/guide" className="text-xl font-black text-white" onClick={() => setIsMenuOpen(false)}>GUIDE</Link>
          <Link href="/about" className="text-xl font-black text-white" onClick={() => setIsMenuOpen(false)}>À PROPOS</Link>
          <Link href="/contact" className="text-xl font-black text-white" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          <Link 
            href="/brands" 
            className="w-full py-4 bg-primary text-center text-white text-sm font-black uppercase tracking-widest rounded-xl mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            MEILLEURS BONUS
          </Link>
        </div>
      )}
    </header>
  );
}
