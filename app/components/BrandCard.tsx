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
      className="relative pmu-card-bg rounded-2xl overflow-hidden cursor-pointer flex flex-col md:flex-row items-stretch transition-all group border border-white/10"
    >
      {/* Choice Badge */}
      {rank === 1 && (
        <div className="absolute top-0 left-0 z-20">
          <div className="pmu-rank-badge tracking-widest">CHOIX N°1</div>
        </div>
      )}

      {/* Left Section: Rank + Logo */}
      <div className="flex items-center p-8 md:border-r border-white/5 min-w-[280px]">
        <div className="text-4xl font-black gold-text mr-8 opacity-80">{rank}</div>
        <div className="relative w-32 h-16">
          <Image 
            src={brand.logo} 
            alt={brand.name} 
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Middle Section: Bonus & Features */}
      <div className="flex-grow p-8 flex flex-col justify-center gap-6">
        <div className="pmu-bonus-box flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-magenta-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
            <span className="text-[10px] font-black text-magenta-400 uppercase tracking-widest">{brand.description}</span>
          </div>
          <div className="text-2xl font-black text-white">{brand.bonus}</div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {brand.features.map((feature, i) => (
            <div key={i} className="pmu-feature-pill font-medium">
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Rating & CTA */}
      <div className="flex flex-col items-center justify-center p-8 bg-black/20 min-w-[240px] gap-4">
        <div className="flex flex-col items-center">
          <div className="text-5xl font-black text-white tracking-tighter mb-1">{brand.rating.toFixed(1)}</div>
          <div className="text-[10px] text-white/40 font-bold mb-3">({brand.votes} avis)</div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-orange-400 fill-orange-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <button className="pmu-button-gradient w-full py-4 rounded-xl flex items-center justify-center gap-2 group transition-all hover:scale-105 active:scale-95 shadow-lg shadow-teal-500/20">
          <span className="text-xs font-black uppercase tracking-wider">DÉCOUVRIR {brand.name}</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
