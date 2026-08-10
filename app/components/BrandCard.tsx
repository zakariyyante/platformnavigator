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
    // The instructions say all URLs end with an empty trailing param like clickid=
    // so we just append the gclidValue to it.
    return `${url}${gclidValue}`;
  };

  const handleCardClick = () => {
    track('Brand Click', { brand: brand.name });
    
    const finalUrl = buildUrl(brand.url, gclid);
    
    // Call Google Ads conversion if defined globally
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }
    
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1: return <div className="absolute -top-3 -left-3 bg-accent text-background font-bold px-3 py-1 rounded-full shadow-lg z-10 text-xs uppercase tracking-tighter border border-white/20">OR #1</div>;
      case 2: return <div className="absolute -top-3 -left-3 bg-slate-300 text-background font-bold px-3 py-1 rounded-full shadow-lg z-10 text-xs uppercase tracking-tighter border border-white/20">ARGENT #2</div>;
      case 3: return <div className="absolute -top-3 -left-3 bg-amber-700 text-white font-bold px-3 py-1 rounded-full shadow-lg z-10 text-xs uppercase tracking-tighter border border-white/20">BRONZE #3</div>;
      default: return null;
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="relative casino-card-bg rounded-2xl p-6 flex flex-col md:flex-row gap-6 cursor-pointer hover:border-accent/40 transition-all duration-300 group casino-glow overflow-hidden"
    >
      {rank && getRankBadge(rank)}
      
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-accent/10 rotate-45 translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Left Col: Logo + Rating */}
      <div className="flex flex-col items-center justify-center gap-4 min-w-[140px]">
        <div className="relative w-24 h-24 bg-white/5 rounded-xl p-2 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform">
          <Image 
            src={brand.logo} 
            alt={brand.name} 
            width={80} 
            height={80} 
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-black text-white">{brand.rating.toFixed(1)}</div>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3 h-3 ${i < Math.floor(brand.rating / 2) ? 'text-accent fill-accent' : 'text-white/20 fill-white/20'}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">{brand.votes} votes</div>
        </div>
      </div>

      {/* Right Col: Bonus + CTA */}
      <div className="flex-grow flex flex-col justify-between py-2">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{brand.name}</h3>
          <p className="text-accent-secondary font-medium text-lg leading-tight uppercase tracking-tight">
            {brand.bonus}
          </p>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-primary to-orange-600 text-white font-bold uppercase tracking-wider rounded-lg shadow-lg group-hover:shadow-primary/20 group-hover:scale-[1.02] transition-all">
            Visitez Maintenant
          </button>
          <div className="text-[10px] text-white/30 uppercase tracking-tighter italic">
            Conditions générales s&apos;appliquent. 18+
          </div>
        </div>
      </div>
    </div>
  );
}
