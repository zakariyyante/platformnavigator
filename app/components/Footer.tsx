import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent pt-12 pb-20 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-5xl">
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
          <div className="w-full py-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            <Image src="/18plus.svg" alt="18+" width={35} height={35} />
            <Image src="/regulatory_body.svg" alt="ANJ" width={60} height={30} />
            {/* Using text placeholders if other SVGs aren't available yet */}
            <div className="text-[10px] font-black text-white uppercase tracking-widest border border-white/20 px-2 py-1 rounded">BeGambleAware</div>
            <div className="text-[10px] font-black text-white uppercase tracking-widest border border-white/20 px-2 py-1 rounded">Gordon Moody</div>
            <div className="text-[10px] font-black text-white uppercase tracking-widest border border-white/20 px-2 py-1 rounded">Médiateur des Jeux</div>
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
