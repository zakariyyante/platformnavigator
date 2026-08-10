"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image src="/favicon.svg" alt="Logo" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline font-bold leading-none text-xl tracking-tight">
              <span className="text-accent">NAVIGATOR</span>
              <span className="text-accent-secondary ml-1 text-base">FR</span>
              <span className="text-white ml-1 text-base">Reviews</span>
            </div>
            <span className="text-[10px] text-white/50 tracking-[0.2em] font-medium uppercase mt-1">
              platformnavigator.com
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold hover:text-primary transition-colors">Home</Link>
          <Link href="/brands" className="text-sm font-semibold hover:text-primary transition-colors">Brands</Link>
          <Link href="/guide" className="text-sm font-semibold hover:text-primary transition-colors">Guide</Link>
          <Link href="/about" className="text-sm font-semibold hover:text-primary transition-colors">About Us</Link>
          <Link href="/contact" className="text-sm font-semibold hover:text-primary transition-colors">Contact Us</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-white/10 py-4 px-4 flex flex-col gap-4">
          <Link href="/" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/brands" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Brands</Link>
          <Link href="/guide" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Guide</Link>
          <Link href="/about" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
