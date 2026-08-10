import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <Link href="/" className="flex flex-col items-center gap-4 group">
            <div className="relative w-[220px] h-[50px]">
              <Image 
                src="/logo.png" 
                alt="Choix Jeux" 
                fill 
                className="object-contain brightness-0 invert" 
              />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em]">Navigation</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-white/40 hover:text-white font-bold text-[10px] transition-colors uppercase tracking-widest">Accueil</Link></li>
              <li><Link href="/brands" className="text-white/40 hover:text-white font-bold text-[10px] transition-colors uppercase tracking-widest">Plateformes</Link></li>
              <li><Link href="/guide" className="text-white/40 hover:text-white font-bold text-[10px] transition-colors uppercase tracking-widest">Savoir-Faire</Link></li>
              <li><Link href="/about" className="text-white/40 hover:text-white font-bold text-[10px] transition-colors uppercase tracking-widest">À Propos</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em]">Légal</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/terms" className="text-white/40 hover:text-white font-bold text-[10px] transition-colors uppercase tracking-widest">Conditions</Link></li>
              <li><Link href="/privacy" className="text-white/40 hover:text-white font-bold text-[10px] transition-colors uppercase tracking-widest">Confidentialité</Link></li>
              <li><Link href="/responsible-gambling" className="text-white/40 hover:text-white font-bold text-[10px] transition-colors uppercase tracking-widest">Jeu Responsable</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
              <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-4">Informations Réglementaires</h3>
              <p className="text-white/20 text-[10px] leading-relaxed font-bold mb-6 uppercase tracking-tight">
                ChoixJeux.Com est un portail indépendant agréé par l&apos;ANJ. Nous sélectionnons rigoureusement nos partenaires pour garantir une expérience de jeu sécurisée.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3 px-3 py-1.5 bg-black/40 rounded border border-white/5">
                  <Image src="/18plus.svg" alt="18+" width={20} height={20} className="brightness-0 invert opacity-50" />
                  <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em]">18+ Uniquement</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-1.5 bg-black/40 rounded border border-white/5">
                  <Image src="/regulatory_body.svg" alt="ANJ" width={40} height={20} className="brightness-0 invert opacity-50" />
                  <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em]">Agréé ANJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-white/10 text-[9px] tracking-[0.4em] uppercase font-black">
            &copy; {currentYear} CHOIXJEUX.COM • TOUS DROITS RÉSERVÉS
          </p>
        </div>
      </div>
    </footer>
  );
}
