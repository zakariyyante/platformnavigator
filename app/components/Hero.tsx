import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-12">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
          Notre Sélection de <span className="gold-text">Plateformes</span> de Confiance
        </h1>
        
        <p className="text-base md:text-lg text-white/50 mb-4 font-bold max-w-2xl mx-auto uppercase tracking-[0.2em]">
          PlatformNavigator Retient Uniquement Des Opérateurs Agréés Par L&apos;ANJ.
        </p>
      </div>
    </section>
  );
}
