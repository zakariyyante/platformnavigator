import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nav-dark border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <Link href="/" className="flex flex-col items-center gap-4 group">
            <div className="relative w-[280px] h-[60px]">
              <Image 
                src="/logo.png" 
                alt="Platform Navigator" 
                fill 
                className="object-contain group-hover:brightness-110 transition-all" 
              />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-black text-lg uppercase tracking-widest">Navigation</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-white/40 hover:text-accent font-bold text-sm transition-colors uppercase tracking-tight">Accueil</Link></li>
              <li><Link href="/brands" className="text-white/40 hover:text-accent font-bold text-sm transition-colors uppercase tracking-tight">Meilleures Marques</Link></li>
              <li><Link href="/guide" className="text-white/40 hover:text-accent font-bold text-sm transition-colors uppercase tracking-tight">Guide Expert</Link></li>
              <li><Link href="/about" className="text-white/40 hover:text-accent font-bold text-sm transition-colors uppercase tracking-tight">À Propos</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white font-black text-lg uppercase tracking-widest">Légal</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/terms" className="text-white/40 hover:text-accent font-bold text-sm transition-colors uppercase tracking-tight">Conditions d&apos;Utilisation</Link></li>
              <li><Link href="/privacy" className="text-white/40 hover:text-accent font-bold text-sm transition-colors uppercase tracking-tight">Confidentialité</Link></li>
              <li><Link href="/cookies" className="text-white/40 hover:text-accent font-bold text-sm transition-colors uppercase tracking-tight">Politique Cookies</Link></li>
              <li><Link href="/responsible-gambling" className="text-white/40 hover:text-accent font-bold text-sm transition-colors uppercase tracking-tight">Jeu Responsable</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-black text-lg uppercase tracking-widest mb-4">Informations Réglementaires</h3>
              <p className="text-white/30 text-xs leading-relaxed font-medium mb-6 uppercase tracking-tight">
                PlatformNavigator.com est un guide indépendant financé par nos partenaires. Nous fournissons des critiques objectives et certifiées pour le marché français. Nous sommes engagés dans la promotion du jeu responsable et régulés par les standards de l&apos;ANJ.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3 px-4 py-2 bg-black/40 rounded-lg border border-white/5">
                  <Image src="/18plus.svg" alt="18+" width={28} height={28} />
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">18+ Uniquement</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-black/40 rounded-lg border border-white/5">
                  <Image src="/regulatory_body.svg" alt="ANJ" width={50} height={25} />
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Régulé par ANJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase font-black">
            &copy; {currentYear} platformnavigator.com • Tous droits réservés
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/10 text-[10px] uppercase font-black tracking-widest">Fait avec passion pour le jeu sûr</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
