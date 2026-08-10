import Link from "next/link";

export default function DisclaimerBar() {
  return (
    <div className="bg-nav-dark/80 border-y border-white/5 py-5 overflow-hidden backdrop-blur-md">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-xs font-black text-white shadow-lg shrink-0">18+</div>
          <div className="flex flex-col">
            <span className="text-sm font-black text-white uppercase tracking-widest leading-none mb-1">Navigation réservée aux adultes</span>
            <span className="text-[10px] text-white/30 font-bold uppercase tracking-tighter">Accès interdit aux mineurs en France</span>
          </div>
        </div>
        
        <p className="text-[11px] text-white/50 leading-relaxed font-medium text-center lg:text-left lg:max-w-3xl lg:px-10 lg:border-x lg:border-white/5">
          Les jeux d&apos;argent et de hasard peuvent être dangereux : pertes d&apos;argent, conflits familiaux, addiction, etc. Pour être aidé, appelez le 09 74 75 13 13 (appel non surtaxé) ou rendez-vous sur <Link href="https://www.joueurs-info-service.fr" className="text-accent hover:text-white transition-colors underline decoration-accent/30 underline-offset-4" target="_blank">joueurs-info-service.fr</Link>. Opérateurs certifiés par l&apos;ANJ.
        </p>

        <Link 
          href="/responsible-gambling" 
          className="text-[10px] font-black text-white/40 hover:text-white uppercase tracking-[0.2em] transition-colors flex items-center gap-2 group"
        >
          En savoir plus
          <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
