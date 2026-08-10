import Link from "next/link";

export default function DisclaimerBar() {
  return (
    <div className="bg-card-bg/50 border-y border-white/5 py-3 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-black text-white shrink-0">18+</div>
          <span className="text-xs font-bold text-white uppercase tracking-tight">Pour adultes 18+ uniquement.</span>
        </div>
        <p className="text-[10px] text-white/50 leading-tight md:max-w-2xl">
          Le jeu comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09 74 75 13 13 (appel non surtaxé) ou consultez <Link href="https://www.joueurs-info-service.fr" className="text-accent hover:underline" target="_blank">joueurs-info-service.fr</Link>. Opérateurs agréés par l&apos;ANJ.
        </p>
      </div>
    </div>
  );
}
