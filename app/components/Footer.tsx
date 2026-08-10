import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card-bg border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Link href="/" className="flex flex-col items-center gap-2">
            <div className="relative w-16 h-16">
              <Image src="/favicon.svg" alt="Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-baseline font-bold leading-none text-2xl tracking-tight">
                <span className="text-accent">NAVIGATOR</span>
                <span className="text-accent-secondary ml-1 text-lg">FR</span>
                <span className="text-white ml-1 text-lg">Reviews</span>
              </div>
              <span className="text-xs text-white/50 tracking-[0.3em] font-medium uppercase mt-2">
                platformnavigator.com
              </span>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-t border-white/5 pt-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/" className="text-white/60 hover:text-primary text-sm">Home</Link></li>
              <li><Link href="/brands" className="text-white/60 hover:text-primary text-sm">Best Brands</Link></li>
              <li><Link href="/guide" className="text-white/60 hover:text-primary text-sm">Betting Guide</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-primary text-sm">About Our Team</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/terms" className="text-white/60 hover:text-primary text-sm">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-white/60 hover:text-primary text-sm">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-white/60 hover:text-primary text-sm">Cookie Policy</Link></li>
              <li><Link href="/responsible-gambling" className="text-white/60 hover:text-primary text-sm">Responsible Gambling</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg">Regulatory Info</h3>
            <p className="text-white/40 text-xs leading-relaxed">
              PlatformNavigator.com fournit des critiques indépendantes de sites de paris en ligne. Nous sommes rémunérés par certains opérateurs listés ici. Notre contenu est destiné à des fins d&apos;information uniquement. Nous sommes régulés par l&apos;Autorité Nationale des Jeux (ANJ).
            </p>
            <div className="flex items-center gap-4">
              <Image src="/18plus.svg" alt="18+" width={30} height={30} />
              <Image src="/regulatory_body.svg" alt="ANJ" width={60} height={30} />
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-white/30 text-[10px] tracking-wider uppercase font-medium">
            &copy; {currentYear} platformnavigator.com. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
