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
    <div className="flex flex-col w-full min-h-screen choix-gradient-bg">
      <div className="diagonal-glow"></div>
      
      <Hero />
      
      <section className="pb-24 pt-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col gap-4">
            {brands.map((brand, index) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                gclid={gclid} 
                rank={index + 1} 
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
