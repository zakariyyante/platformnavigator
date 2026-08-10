import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-12 text-center">
          Comment Nous Notons les <span className="gold-text">Sites de Paris</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Why Our Reviews Stand Out */}
          <div className="casino-card-bg rounded-2xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-xl">♠</span>
              Pourquoi Nos Critiques Se Démarquent
            </h3>
            <ul className="space-y-4">
              {[
                "Tests approfondis sur les délais de retrait réels",
                "Vérification de la validité des licences ANJ",
                "Comparaison transparente des conditions de bonus",
                "Évaluation de la qualité du support client francophone",
                "Analyses objectives basées sur des données réelles"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="text-accent mt-1">✔</span>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="casino-card-bg rounded-2xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-600/20 flex items-center justify-center text-red-600 text-xl">♥</span>
              Jeu Responsable
            </h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Nous nous engageons pour un environnement de jeu sûr. Les jeux d&apos;argent et de hasard sont interdits aux mineurs. Jouer comporte des risques.
            </p>
            <div className="bg-black/20 rounded-xl p-4 border border-white/5">
              <p className="text-xs text-white/50 mb-2 uppercase tracking-widest font-bold">Besoin d&apos;aide ?</p>
              <p className="text-lg font-bold text-white mb-1">09 74 75 13 13</p>
              <p className="text-xs text-white/40 italic">Appel anonyme et non surtaxé</p>
              <Link 
                href="https://www.joueurs-info-service.fr" 
                className="inline-block mt-4 text-accent text-sm font-bold hover:underline"
                target="_blank"
              >
                Visiter Joueurs Info Service →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
