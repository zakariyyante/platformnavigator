export default function GuidePage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl text-center">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tight">
        Savoir-Faire & Expertise
      </h1>
      
      <div className="space-y-12 text-white/60 font-medium leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">
            Notre Méthodologie d&apos;Analyse
          </h2>
          <p>
            L&apos;expertise de Platform Navigator repose sur une analyse rigoureuse des plateformes de jeux en ligne agréées par l&apos;ANJ. Chaque site est évalué selon des critères stricts de sécurité, de fluidité et de transparence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
              <div className="text-accent text-2xl mb-2">⚖️</div>
              <h3 className="text-white font-black text-xs uppercase mb-2">Légalité</h3>
              <p className="text-[10px]">Vérification systématique des licences de l&apos;Autorité Nationale des Jeux.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
              <div className="text-accent text-2xl mb-2">⚡</div>
              <h3 className="text-white font-black text-xs uppercase mb-2">Rapidité</h3>
              <p className="text-[10px]">Test réel des délais de retrait et de validation des documents.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
              <div className="text-accent text-2xl mb-2">🛡️</div>
              <h3 className="text-white font-black text-xs uppercase mb-2">Sécurité</h3>
              <p className="text-[10px]">Audit des protocoles de cryptage et de protection des données.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">
            Accompagnement de l&apos;Utilisateur
          </h2>
          <p>
            Notre rôle est d&apos;orienter les joueurs vers les meilleures offres tout en garantissant un environnement de jeu sain. Nous mettons à jour quotidiennement nos données pour refléter les évolutions du marché français.
          </p>
        </section>
      </div>
    </div>
  );
}
