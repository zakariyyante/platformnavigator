"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import BrandCard from "./BrandCard";
import { Brand } from "@/app/data/brands";

interface MobileModalProps {
  brands: Brand[];
}

export default function MobileModal({ brands }: MobileModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const gclid = searchParams.get('gclid');

  useEffect(() => {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    if (gclid && isMobileDevice) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [gclid]);

  if (!isOpen) return null;

  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col overflow-y-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
      {/* Modal Header */}
      <div className="sticky top-0 z-[110] w-full bg-nav-dark border-b border-white/5 px-6 py-6 flex items-center justify-between backdrop-blur-xl">
        <div className="relative w-[180px] h-[40px]">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-grow flex flex-col">
        {/* Modal Hero */}
        <div className="px-6 py-12 text-center navigator-texture relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 blur-3xl" />
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-6">
              Navigation Mobile Certifiée
            </div>
            <h2 className="text-4xl font-black text-white mb-4 leading-none tracking-tight">
              Les Meilleures <br />
              <span className="gold-text">Destinations</span>
            </h2>
            <p className="text-white/40 text-sm font-medium leading-relaxed max-w-[280px] mx-auto">
              Accès instantané aux plateformes optimisées pour votre smartphone.
            </p>
          </div>
        </div>

        {/* Modal Brand Grid */}
        <div className="px-6 py-12 space-y-8 bg-background relative z-10">
          {mobileBrands.map((brand, index) => (
            <BrandCard 
              key={brand.id} 
              brand={brand} 
              gclid={gclid || undefined} 
              rank={index < 3 ? index + 1 : undefined} 
            />
          ))}
        </div>

        {/* Modal Compliance */}
        <div className="px-6 py-10 bg-nav-dark/50 border-t border-white/5">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-sm font-black text-white shadow-xl">18+</div>
            <p className="text-[11px] text-white/40 leading-relaxed font-bold uppercase tracking-tight italic">
              L&apos;utilisation des platforms comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09 74 75 13 13.
            </p>
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="mt-auto py-8 px-6 text-center border-t border-white/5 bg-nav-dark">
        <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} platformnavigator.com
        </p>
      </div>
    </div>
  );
}
