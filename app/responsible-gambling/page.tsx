import Link from "next/link";
import Image from "next/image";

export default function ResponsibleGamblingPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl text-center">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tight">
        Service Et Assistance : Jeu Responsable
      </h1>
      
      <div className="space-y-16 text-white/60 font-medium leading-relaxed">
        <section className="space-y-6">
          <p className="text-lg">
            Le jeu doit rester un plaisir et un divertissement. Chez Platform Navigator, la protection des joueurs est au cœur de notre mission.
          </p>
          <div className="bg-red-600/10 border border-red-600/20 p-8 rounded-2xl max-w-2xl mx-auto">
            <h2 className="text-xl font-black text-white uppercase tracking-widest mb-4">
              Besoin d&apos;Aide ?
            </h2>
            <p className="text-sm mb-6">
              Si vous sentez que le jeu devient un problème, des professionnels sont à votre écoute 24h/24 et 7j/7.
            </p>
            <div className="flex flex-col items-center gap-4">
              <span className="text-3xl font-black text-white tracking-tighter">09 74 75 13 13</span>
              <span className="text-xs uppercase font-bold text-white/40">Appel non surtaxé • Anonyme • Gratuit</span>
            </div>
            <div className="mt-8 flex justify-center gap-6">
              <Link href="https://www.joueurs-info-service.fr" className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/10 transition-all" target="_blank">
                Joueurs Info Service
              </Link>
              <Link href="https://www.begambleaware.org" className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/10 transition-all" target="_blank">
                BeGambleAware
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-8 max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-white uppercase tracking-widest border-b border-white/10 pb-4">
            Conseils de Navigation Sûre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-2">
              <h3 className="text-white font-bold text-sm uppercase">Fixez des limites</h3>
              <p className="text-xs">Déterminez un budget et un temps de jeu avant de commencer, et respectez-les scrupuleusement.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold text-sm uppercase">Ne vous endettez pas</h3>
              <p className="text-xs">Ne jouez jamais d&apos;argent que vous ne pouvez pas vous permettre de perdre.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold text-sm uppercase">Le jeu n&apos;est pas un travail</h3>
              <p className="text-xs">Ne considérez jamais le jeu comme une source de revenus ou un moyen de rembourser des dettes.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold text-sm uppercase">Gardez le contrôle</h3>
              <p className="text-xs">Si le plaisir s&apos;arrête, arrêtez de jouer. Faites des pauses régulières.</p>
            </div>
          </div>
        </section>

        <section className="pt-12 border-t border-white/5">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            <Image src="/18plus.svg" alt="18+" width={40} height={40} />
            <Image src="/anj.webp" alt="ANJ" width={80} height={40} />
            <Image src="/mediateur.webp" alt="Médiateur" width={100} height={40} />
          </div>
        </section>
      </div>
    </div>
  );
}
