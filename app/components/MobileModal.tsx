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
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [gclid]);

  if (!isOpen) return null;

  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Modal Header */}
      <div className="sticky top-0 z-[110] w-full bg-background border-b border-white/10 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/favicon.svg" alt="Logo" width={32} height={32} />
          <span className="font-bold text-accent tracking-tighter">NAVIGATOR FR</span>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="p-2 text-white/50 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-grow flex flex-col">
        {/* Modal Hero */}
        <div className="px-4 py-8 text-center felt-texture">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-[10px] font-bold text-primary uppercase tracking-widest mb-4">
            Offres Spéciales Mobiles
          </div>
          <h2 className="text-3xl font-black text-white mb-2 leading-tight">
            Les Meilleurs Bonus sur <span className="gold-text">Mobile</span>
          </h2>
          <p className="text-white/60 text-sm">
            Accès instantané aux meilleures plateformes optimisées pour votre smartphone.
          </p>
        </div>

        {/* Modal Brand Grid */}
        <div className="px-4 py-8 space-y-4">
          {mobileBrands.map((brand, index) => (
            <BrandCard 
              key={brand.id} 
              brand={brand} 
              gclid={gclid || undefined} 
              rank={index < 3 ? index + 1 : undefined} 
            />
          ))}
        </div>

        {/* Modal Disclaimer */}
        <div className="px-4 py-6 bg-card-bg/50 border-t border-white/5 text-center">
          <div className="flex flex-col items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-xs font-black text-white">18+</div>
            <p className="text-[10px] text-white/60 leading-relaxed italic">
              Le jeu comporte des risques : endettement, isolement, dépendance. Appelez le 09 74 75 13 13.
            </p>
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="mt-auto py-6 px-4 text-center border-t border-white/5 bg-card-bg">
        <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} platformnavigator.com
        </p>
      </div>
    </div>
  );
}
