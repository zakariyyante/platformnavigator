import Hero from "./components/Hero";
import BrandCard from "./components/BrandCard";
import DisclaimerBar from "./components/DisclaimerBar";
import AboutSection from "./components/AboutSection";
import MobileModal from "./components/MobileModal";
import { brands } from "./data/brands";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclid = typeof params.gclid === 'string' ? params.gclid : undefined;

  return (
    <div className="flex flex-col w-full">
      <Hero />
      
      <section className="py-16 bg-background relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                Top <span className="text-accent">Plateformes</span> Recommandées
              </h2>
              <p className="text-white/50 text-sm mt-2">
                Basé sur plus de 15 000 votes d&apos;utilisateurs et tests d&apos;experts.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Mise à jour: Aujourd&apos;hui
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                gclid={gclid} 
                rank={index < 3 ? index + 1 : undefined} 
              />
            ))}
          </div>
        </div>
      </section>

      <DisclaimerBar />
      
      <AboutSection />

      <MobileModal brands={brands} />
    </div>
  );
}
