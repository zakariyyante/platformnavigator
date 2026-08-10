import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
            Pourquoi Naviguer avec <span className="gold-text">Nous ?</span>
          </h2>
          <p className="text-xl text-white/50 leading-relaxed font-medium">
            Nous sommes votre boussole dans l&apos;univers complexe des jeux en ligne. Notre mission est de vous guider vers des ports sûrs et rentables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Why Our Reviews Stand Out */}
          <div className="navigator-card-bg rounded-3xl p-10 border border-white/5 relative group">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-colors" />
            <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white text-2xl shadow-lg">🧭</span>
              Notre Méthodologie
            </h3>
            <ul className="space-y-6">
              {[
                "Vérification rigoureuse des licences ANJ en temps réel",
                "Tests de vitesse de retrait sur plusieurs méthodes",
                "Analyse des algorithmes de bonus et conditions de mise",
                "Audit de la sécurité des données et du cryptage SSL",
                "Évaluation anonyme du service client francophone"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 text-white/60 group/item">
                  <span className="text-accent text-xl font-bold group-hover/item:scale-125 transition-transform">⚓</span>
                  <span className="text-base font-bold text-white/80 tracking-tight leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="navigator-card-bg rounded-3xl p-10 border border-white/5 relative group">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-colors" />
            <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white text-2xl shadow-lg">⚖️</span>
              Navigation Responsable
            </h3>
            <p className="text-white/50 text-base mb-10 leading-relaxed font-medium">
              Le jeu doit rester un plaisir. Nous encourageons une navigation responsable et sûre pour tous nos utilisateurs. Les mineurs sont strictement interdits.
            </p>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/5 backdrop-blur-sm">
              <p className="text-xs text-accent font-black mb-3 uppercase tracking-[0.2em]">Soutien & Assistance</p>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-3xl font-black text-white mb-1">09 74 75 13 13</p>
                  <p className="text-xs text-white/30 font-bold uppercase tracking-wider">Service gratuit + prix appel</p>
                </div>
                <Link 
                  href="https://www.joueurs-info-service.fr" 
                  className="px-6 py-3 bg-red-600/20 hover:bg-red-600/40 text-red-500 text-sm font-black uppercase tracking-widest rounded-xl transition-all border border-red-600/30 text-center"
                  target="_blank"
                >
                  Aide Immédiate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
