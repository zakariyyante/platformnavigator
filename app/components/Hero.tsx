import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-12">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-6">
          <span className="text-teal-400 text-[11px] font-black uppercase tracking-[0.3em]">
            OBSERVATOIRE FR · ÉDITION 2026
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
          Notre Sélection de <span className="gold-text">Plateformes</span> de Confiance
        </h1>
        
        <p className="text-base md:text-lg text-white/50 mb-10 font-bold max-w-2xl mx-auto uppercase tracking-[0.2em]">
          PlatformNavigator Retient Uniquement Des Opérateurs Agréés Par L&apos;ANJ.
        </p>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1">Licence Officielle</div>
              <div className="text-[9px] text-white/40 font-bold uppercase tracking-tight">Certifié par l&apos;ANJ</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1">Sécurité Maximale</div>
              <div className="text-[9px] text-white/40 font-bold uppercase tracking-tight">Cryptage SSL 256-bit</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1">Retraits Rapides</div>
              <div className="text-[9px] text-white/40 font-bold uppercase tracking-tight">Traitement en 24h</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1">Jeu Responsable</div>
              <div className="text-[9px] text-white/40 font-bold uppercase tracking-tight">Protection Joueurs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
