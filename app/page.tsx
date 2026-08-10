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
      
      <section className="py-24 bg-background relative z-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-accent"></span>
                <span className="text-xs font-black text-accent uppercase tracking-[0.4em]">Marques d&apos;Élite</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
                Les <span className="gold-text">Destinations</span> les Plus Sûres
              </h2>
              <p className="text-white/40 text-lg font-medium">
                Navigation certifiée basée sur 25,000+ avis vérifiés.
              </p>
            </div>
            <div className="flex items-center gap-4 px-6 py-3 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Dernier Audit</span>
                <span className="text-sm font-black text-accent uppercase tracking-widest">Aujourd&apos;hui</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/20">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
