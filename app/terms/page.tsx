export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl text-center">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tight">
        Conditions d&apos;Utilisation
      </h1>
      
      <div className="space-y-12 text-white/60 font-medium leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">
            Acceptation des Termes
          </h2>
          <p>
            L&apos;accès et l&apos;utilisation du site Platform Navigator impliquent l&apos;acceptation sans réserve des présentes conditions. Si vous n&apos;acceptez pas ces termes, vous devez cesser immédiatement d&apos;utiliser nos services.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">
            Propriété Intellectuelle
          </h2>
          <p>
            L&apos;intégralité des contenus (textes, logos, charte graphique, bases de données) présents sur Platform Navigator est protégée par le droit d&apos;auteur. Toute reproduction, même partielle, est strictement interdite sans notre accord préalable écrit.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">
            Responsabilité
          </h2>
          <p>
            Platform Navigator fournit des informations à titre indicatif sur les plateformes de paris sportifs. Nous ne sommes en aucun cas responsables des pertes financières subies sur les sites tiers. Le choix de parier relève de la responsabilité exclusive de l&apos;utilisateur.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">
            Accès Majeur Uniquement
          </h2>
          <p>
            Conformément à la législation française, notre site est strictement réservé aux personnes âgées de 18 ans et plus. Toute utilisation par un mineur est formellement interdite.
          </p>
        </section>
      </div>
    </div>
  );
}
