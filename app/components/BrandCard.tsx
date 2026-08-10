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

  return (
    <div 
      onClick={handleCardClick}
      className={`relative card-choix rounded-xl overflow-hidden cursor-pointer flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 transition-all group ${rank === 1 ? 'border-white/30 bg-white/5' : ''}`}
    >
      {/* Rank Label */}
      {rank && (
        <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/50 border border-white/20 rounded text-[9px] font-bold text-white uppercase tracking-tighter">
          N° {rank}
        </div>
      )}

      {/* Logo Container */}
      <div className="w-full md:w-[180px] h-[100px] bg-black/40 rounded-lg flex items-center justify-center p-4 border border-white/5">
        <div className="relative w-full h-full">
          <Image 
            src={brand.logo} 
            alt={brand.name} 
            fill
            className="object-contain brightness-110"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="flex flex-col items-center md:items-start min-w-[100px]">
        <div className="text-4xl md:text-5xl font-black text-white/90 tracking-tighter">
          {brand.rating.toFixed(1)}<span className="text-xl md:text-2xl text-white/40">/10</span>
        </div>
      </div>

      {/* Description */}
      <div className="flex-grow text-center md:text-left">
        <p className="text-sm md:text-base text-white/60 font-medium leading-relaxed max-w-xl">
          {brand.bonus} - Plateforme reconnue pour sa fiabilité et ses options de paiement rapides en France.
        </p>
        <div className="mt-4 text-[10px] text-white/20 uppercase tracking-widest font-bold">
          Conditions applicables. 18+
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-full md:w-auto">
        <button className="btn-red w-full md:w-[220px] py-4 rounded-lg text-white font-black text-xs uppercase tracking-[0.15em] transition-all">
          PROFITEZ DE L&apos;OFFRE
        </button>
      </div>
    </div>
  );
}
