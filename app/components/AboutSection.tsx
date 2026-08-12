import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight">
            Transparence Et Modalités D&apos;Utilisation
          </h2>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Cadre Légal */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-wider">
                Cadre Légal Et Propriété Intellectuelle
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-medium">
                Les informations publiées sur PlatformNavigator.com servent uniquement à orienter l&apos;utilisateur vers des platforms de reviews encadrées par l&apos;ANJ. L&apos;utilisation du site implique l&apos;acceptation des présentes modalités. Tout le contenu, la charte graphique et les textes disponibles sur PlatformNavigator.com sont protégés par le droit d&apos;auteur.
              </p>
            </div>

            {/* Financement */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-wider">
                Financement Et Indépendance Éditoriale
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-medium">
                PlatformNavigator.com est accessible gratuitement. Son fonctionnement peut toutefois être soutenu par des partenariats d&apos;affiliation avec des opérateurs agréés. PlatformNavigator.com conserve une indépendance éditoriale dans l&apos;évaluation et la présentation des platforms.
              </p>
            </div>

            {/* Public Majeur */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-wider">
                Public Majeur Et Pratique Responsable
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-medium">
                PlatformNavigator.com s&apos;adresse exclusivement aux personnes majeures. L&apos;utilisation des platforms doit rester un divertissement. En cas de difficulté, vous pouvez consulter <Link href="https://www.begambleaware.org" className="text-white hover:text-accent transition-colors underline underline-offset-4" target="_blank">www.begambleaware.org</Link> ou <Link href="https://www.joueurs-info-service.fr" className="text-white hover:text-accent transition-colors underline underline-offset-4" target="_blank">www.joueurs-info-service.fr</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
