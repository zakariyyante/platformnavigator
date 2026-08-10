export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl text-center">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tight">
        Politique de Cookies
      </h1>
      
      <div className="space-y-12 text-white/60 font-medium leading-relaxed">
        <section className="space-y-6">
          <p>
            Platform Navigator utilise des cookies pour assurer le bon fonctionnement technique du site et analyser notre trafic.
          </p>
        </section>

        <section className="space-y-6 text-left max-w-2xl mx-auto">
          <h2 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/10 pb-4 text-center">
            Types de Cookies Utilisés
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-white block uppercase text-[10px] tracking-widest mb-1">Cookies Essentiels :</strong>
              Indispensables à la navigation et à la sécurité du site.
            </li>
            <li>
              <strong className="text-white block uppercase text-[10px] tracking-widest mb-1">Cookies de Performance :</strong>
              Nous permettent de comprendre comment les visiteurs utilisent notre site pour en améliorer l&apos;ergonomie.
            </li>
            <li>
              <strong className="text-white block uppercase text-[10px] tracking-widest mb-1">Cookies de Marketing :</strong>
              Utilisés pour mesurer l&apos;efficacité de nos campagnes d&apos;affiliation.
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">
            Gestion de vos Préférences
          </h2>
          <p>
            Vous pouvez configurer votre navigateur pour bloquer ces cookies. Notez toutefois que certaines fonctionnalités du site pourraient ne plus être accessibles. Pour plus d&apos;informations sur la gestion des cookies, consultez le site de la CNIL.
          </p>
        </section>
      </div>
    </div>
  );
}
