import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent pt-12 pb-20 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center">
          
          {/* Logo Section */}
          <div className="mb-12">
            <Link href="/" className="flex flex-col items-center group">
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

          {/* Regulatory Logos Row */}
          <div className="w-full py-10 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="relative h-8 w-32">
              <Image src="/begambleaware.webp" alt="BeGambleAware" fill className="object-contain" />
            </div>
            <div className="relative h-8 w-20">
              <Image src="/anj.webp" alt="ANJ" fill className="object-contain" />
            </div>
            <div className="relative h-8 w-32">
              <Image src="/gordonmoody.png" alt="Gordon Moody" fill className="object-contain" />
            </div>
            <div className="relative h-10 w-10">
              <Image src="/18+.png" alt="18+" fill className="object-contain" />
            </div>
            <div className="relative h-8 w-36">
              <Image src="/mediateur.webp" alt="Médiateur des Jeux" fill className="object-contain" />
            </div>
            <div className="relative h-8 w-40">
              <Image src="/joueurs.webp" alt="Joueurs Info Service" fill className="object-contain" />
            </div>
          </div>

          {/* Quick Links Row */}
          <div className="w-full py-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link href="/guide" className="text-[10px] font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Savoir-Faire</Link>
            <Link href="/responsible-gambling" className="text-[10px] font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Service et Assistance</Link>
            <Link href="/privacy" className="text-[10px] font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Politique de confidentialité</Link>
            <Link href="/terms" className="text-[10px] font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Conditions d&apos;utilisation</Link>
            <Link href="/cookies" className="text-[10px] font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Cookies</Link>
            <Link href="/responsible-gambling" className="text-[10px] font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Jeu responsable</Link>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.4em]">
              &copy; {currentYear} Platform Navigator — Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
