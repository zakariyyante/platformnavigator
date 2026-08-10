export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl text-center">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tight">
        Politique de Confidentialité
      </h1>
      
      <div className="space-y-12 text-white/60 font-medium leading-relaxed">
        <section className="space-y-6">
          <p>
            Chez Platform Navigator, la protection de vos données personnelles est une priorité. Cette politique détaille les informations que nous collectons et la manière dont nous les protégeons.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">
            Collecte des Informations
          </h2>
          <p>
            Nous collectons des informations non nominatives telles que le type de navigateur, le temps passé sur le site et les pages consultées via des fichiers journaux (logs). Ces données servent exclusivement à l&apos;amélioration de l&apos;expérience utilisateur et à des fins analytiques internes.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">
            Utilisation des Cookies
          </h2>
          <p>
            Comme la plupart des sites professionnels, nous utilisons des cookies pour mémoriser vos préférences de navigation et optimiser l&apos;affichage de nos contenus. Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">
            Partenariats Tiers
          </h2>
          <p>
            Platform Navigator contient des liens vers des sites tiers. Nous ne sommes pas responsables de la gestion des données sur ces plateformes externes. Nous vous invitons à consulter la politique de confidentialité de chaque partenaire avant toute interaction.
          </p>
        </section>

        <section className="pt-12">
          <p className="text-xs italic">
            Dernière mise à jour : 10 Août 2026. En naviguant sur ce site, vous acceptez les termes de cette politique.
          </p>
        </section>
      </div>
    </div>
  );
}
