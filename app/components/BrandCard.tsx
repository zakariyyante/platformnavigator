"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { Brand } from "@/app/data/brands";

interface BrandCardProps {
  brand: Brand;
  gclid?: string;
  rank?: number;
}

export default function BrandCard({ brand, gclid, rank }: BrandCardProps) {
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    return `${url}${gclidValue}`;
  };

  const handleCardClick = () => {
    track('Brand Click', { brand: brand.name });
    const finalUrl = buildUrl(brand.url, gclid);
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1: return <div className="absolute -top-3 -left-3 bg-accent text-background font-black px-4 py-1.5 rounded-lg shadow-2xl z-20 text-[10px] uppercase tracking-[0.2em] border border-white/20">ELITE #1</div>;
      case 2: return <div className="absolute -top-3 -left-3 bg-slate-200 text-background font-black px-4 py-1.5 rounded-lg shadow-2xl z-20 text-[10px] uppercase tracking-[0.2em] border border-white/20">PREMIUM #2</div>;
      case 3: return <div className="absolute -top-3 -left-3 bg-teal-600 text-white font-black px-4 py-1.5 rounded-lg shadow-2xl z-20 text-[10px] uppercase tracking-[0.2em] border border-white/20">CHOIX #3</div>;
      default: return null;
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="relative navigator-card-bg rounded-3xl p-8 flex flex-col gap-8 cursor-pointer hover:border-accent/40 transition-all duration-500 group navigator-glow overflow-hidden"
    >
      {rank && getRankBadge(rank)}
      
      {/* Decorative Compass Corner */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z" />
        </svg>
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="relative w-28 h-28 bg-white/5 rounded-2xl p-3 flex items-center justify-center border border-white/5 group-hover:scale-105 transition-transform duration-500 shadow-inner">
          <Image 
            src={brand.logo} 
            alt={brand.name} 
            width={90} 
            height={90} 
            className="object-contain brightness-110"
          />
        </div>
        <div className="flex flex-col items-end">
          <div className="text-4xl font-black text-white group-hover:text-accent transition-colors tracking-tighter">{brand.rating.toFixed(1)}</div>
          <div className="flex gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(brand.rating / 2) ? 'text-accent fill-accent' : 'text-white/10 fill-white/10'}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-[10px] text-white/30 mt-2 uppercase tracking-widest font-bold">{brand.votes} votes certifiés</div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{brand.name}</h3>
          <div className="inline-block px-3 py-1 bg-primary/20 rounded-md border border-primary/30">
            <p className="text-accent-secondary font-black text-sm uppercase tracking-tight">
              {brand.bonus}
            </p>
          </div>
        </div>
        
        <div className="mt-4 flex flex-col gap-4">
          <button className="gold-shimmer w-full py-4 bg-primary hover:bg-teal-700 text-white font-black uppercase tracking-widest rounded-xl shadow-lg transition-all group-hover:scale-[1.02]">
            Visiter Maintenant
          </button>
          <div className="text-[9px] text-white/20 uppercase tracking-tighter text-center font-bold">
            Publicité • Conditions s&apos;appliquent • 18+
          </div>
        </div>
      </div>
    </div>
  );
}
