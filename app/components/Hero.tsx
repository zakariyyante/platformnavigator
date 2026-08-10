import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative pt-24 pb-20 overflow-hidden navigator-texture">
      {/* Background Decorative Elements - Nautical Theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="#d4af37" strokeWidth="0.05" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="#d4af37" strokeWidth="0.05" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="#d4af37" strokeWidth="0.05" />
          <line x1="18" y1="18" x2="82" y2="82" stroke="#d4af37" strokeWidth="0.05" />
          <line x1="82" y1="18" x2="18" y2="82" stroke="#d4af37" strokeWidth="0.05" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-10 backdrop-blur-md">
          <div className="relative w-4 h-4">
            <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-50" />
            <div className="relative bg-accent w-full h-full rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">
            Le Guide Officiel de Navigation {currentYear}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1] tracking-tight">
          Naviguez vers les <br />
          <span className="gold-text">Meilleurs Paris</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/50 mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
          Votre boussole de confiance pour les plateformes de jeux en France. Critiques impartiales, bonus certifiés et sécurité garantie.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <Link 
            href="/brands" 
            className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-teal-700 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-primary/20 hover:-translate-y-1"
          >
            Découvrir les Marques
          </Link>
          <Link 
            href="/guide" 
            className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest rounded-xl transition-all border border-white/10"
          >
            Guide Expert
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Certifié par Experts", icon: "⚓", text: "Analyses approfondies" },
            { title: "Navigation Sûre", icon: "🧭", text: "Plateformes licenciées" },
            { title: "Vitesse Maximale", icon: "⚡", text: "Paiements instantanés" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-5 px-8 py-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <span className="text-3xl">{item.icon}</span>
              <div className="text-left">
                <div className="text-sm font-black text-white uppercase tracking-wider">{item.title}</div>
                <div className="text-xs text-white/40 font-medium uppercase mt-1 tracking-tight">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
