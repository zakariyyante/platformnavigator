import Link from "next/link";

export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative pt-24 pb-20">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Top Info Line */}
        <div className="mb-8">
          <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">
            OBSERVATOIRE FR • ÉDITION {currentYear}
          </span>
        </div>

        {/* H1 Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] max-w-5xl mx-auto">
          Comparatif des opérateurs plébiscités
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/50 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
          Passez en revue des promotions contrôlées, des enseignes suivies de près et des alternatives plébiscitées en France. Filtrez selon vos critères et repérez l&apos;offre adaptée sans perdre de temps.
        </p>

        {/* Date line */}
        <div className="mb-10 text-[10px] font-bold text-white/30 uppercase tracking-widest">
          MISE À JOUR • 10 AOÛT {currentYear}
        </div>

        {/* Icon badges row */}
        <div className="flex justify-center gap-6 mb-24 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="w-6 h-6 border border-accent rounded-full flex items-center justify-center text-accent text-[8px] font-bold italic">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="w-6 h-6 border border-accent rounded-full flex items-center justify-center text-accent">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" />
            </svg>
          </div>
          <div className="w-6 h-6 border border-accent rounded-full flex items-center justify-center text-accent">
             <span className="text-[10px] font-black">$</span>
          </div>
          <div className="w-6 h-6 border border-accent rounded-full flex items-center justify-center text-accent">
             <span className="text-[8px] font-black italic">18+</span>
          </div>
        </div>

        {/* Big Trust Badge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="trust-badge-card flex items-center gap-6 text-left group transition-all hover:bg-white/5">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-accent transition-colors border border-white/5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-black text-white uppercase tracking-widest mb-1">LICENCIÉ</div>
              <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">RÉGLEMENTÉ ANJ</div>
            </div>
          </div>

          <div className="trust-badge-card flex items-center gap-6 text-left group transition-all hover:bg-white/5">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-accent transition-colors border border-white/5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-black text-white uppercase tracking-widest mb-1">EXPERTISE</div>
              <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">AVIS CERTIFIÉS</div>
            </div>
          </div>

          <div className="trust-badge-card flex items-center gap-6 text-left group transition-all hover:bg-white/5">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-accent transition-colors border border-white/5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-black text-white uppercase tracking-widest mb-1">RAPIDITÉ</div>
              <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">RETRAITS 24H</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
